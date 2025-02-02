
using Newtonsoft.Json;
using OresToFieldGuide.JSONObjects;
using OresToFieldGuide.JSONObjects.Patchouli;
using OresToFieldGuide.JSONObjects.Patchouli.PageTypes;
using OresToFieldGuide.JSONObjects.Veins;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide
{
    internal class OresToFieldGuideProgram
    {
        public static string fallbackLocale => locales[0];
        public static readonly string[] locales = new string[]
        {
            "en_us", //US English
            "it_it", //Italian
            "ru_ru", //Russian
            "uk_ua" //Ukranian
        };

        private ProgramArguments _arguments;
        private Dictionary<string, MineralData> _localeToMineralData = new Dictionary<string, MineralData>();
        private Dictionary<string, LocalizationTokens> _localeToTokens = new Dictionary<string, LocalizationTokens>();
        private Dictionary<string, Output> _localeToOutputs = new Dictionary<string, Output>();
        private Dictionary<string, Vein[]> _planetToVeins = new Dictionary<string, Vein[]>();
        public async Task<bool> Run()
        {
            Console.WriteLine("Ores to Field Guide Program has Started!");
            await DeserializeLanguageTokens();
            await DeserializeMineralDatas();
            await DeserializeVeins();
            await CreateOutputDirectories();

            if(_arguments.shouldVerifyVeinWeights)
            {
                var weightChecker = new VeinWeightChecker(_planetToVeins, _localeToTokens[fallbackLocale].RockDictionary.Keys.ToArray());
                await weightChecker.Run();
            }

            foreach(string locale in locales)
            {
                if(!_localeToOutputs.TryGetValue(locale, out Output output))
                {
                    ConsoleLogHelper.WriteLine($"Not running the program against locale {locale}. There is no valid Output struct for it.", LogLevel.Error);
                    continue;
                }
                
                if(!_localeToMineralData.TryGetValue(locale, out MineralData mineralData))
                {
                    ConsoleLogHelper.WriteLine($"Not running the program against locale {locale}. There is no valid MineralData for it.", LogLevel.Error);
                    continue;
                }

                if(!_localeToTokens.TryGetValue(locale, out LocalizationTokens localizationTokens))
                {
                    ConsoleLogHelper.WriteLine($"Not running the program against locale {locale}. There is no valid LocalizationTokens for it.", LogLevel.Error);
                    continue;
                }
                var tokens = _localeToTokens[locale];

                await CreateEntriesForLocale(tokens, mineralData, output);
            }

            await WriteFiles();

            if(_arguments.shouldOverwriteFiles)
                await MoveFilesToInGameFieldGuide();

            return true;
        }

        private async Task DeserializeLanguageTokens()
        {
            var en_usTokenPath = Path.Combine(_arguments.languageTokenFolder, $"{fallbackLocale}.json");
            LocalizationTokens en_usTokens = await LocalizationTokens.FromJSON(en_usTokenPath);

            _localeToTokens.Add(fallbackLocale, en_usTokens);

            foreach (var locale in locales)
            {
                if (_localeToTokens.ContainsKey(locale))
                    continue;

                var localeTokenPath = Path.Combine(_arguments.languageTokenFolder, $"{locale}.json");
                if (!File.Exists(localeTokenPath))
                {
                    ConsoleLogHelper.WriteLine($"Could not file localization tokens for locale {locale}! Assigning {fallbackLocale}'s Localization Tokens.", LogLevel.Warning);
                    _localeToTokens.Add(locale, en_usTokens);
                    continue;
                }

                LocalizationTokens localeTokens = await LocalizationTokens.FromJSON(localeTokenPath);

                _localeToTokens.Add(locale, localeTokens);
            }
        }

        private async Task DeserializeMineralDatas()
        {
            var mineralDatas = Directory.EnumerateFiles(_arguments.mineralDataFolder);

            foreach(var mineralDataJSON in mineralDatas)
            {
                var languageName = Path.GetFileNameWithoutExtension(mineralDataJSON);
                var mineralData = await MineralData.FromJSON(mineralDataJSON);
                _localeToMineralData.Add(languageName, mineralData);
            }
        }

        /// <summary>
        /// Deserializes all the veins and stores them in a dictionary of planet to veins
        /// </summary>
        private async Task DeserializeVeins()
        {
            foreach(var planet in _arguments.planetToVeinsPath.Keys)
            {
                var serializedVeins = _arguments.planetToVeinsPath[planet];
                Vein[] deserializedVeins = new Vein[serializedVeins.Length];

                for (int i = 0; i < serializedVeins.Length; i++)
                {
                    string veinJSON = serializedVeins[i];
                    Vein vein = await Vein.FromJSON(veinJSON);
                    deserializedVeins[i] = vein;
                }

                _planetToVeins.Add(planet, deserializedVeins);
            }
        }

        /// <summary>
        /// Creates the output directories for the program, which includes the root output folder, the locale's root folder inside the field guide, and it's pages output
        /// </summary>
        private Task CreateOutputDirectories()
        {
            var workingDirectory = Directory.GetCurrentDirectory();
            var outputDirectory = Path.Combine(workingDirectory, "OUTPUT");

            Directory.CreateDirectory(outputDirectory);

            foreach(var local in locales)
            {
                string fieldGuideOutput = Path.Combine(outputDirectory, MainClass.KUBEJS, MainClass.ASSETS, MainClass.TFC, MainClass.PATCHOULI_BOOKS, MainClass.FIELD_GUIDE, local);
                Directory.CreateDirectory(fieldGuideOutput);

                string pagesOutput = Path.Combine(fieldGuideOutput, MainClass.ENTRIES, MainClass.TFG_ORES);
                Directory.CreateDirectory(pagesOutput);

                _localeToOutputs.Add(local, new Output
                {
                    rootOutputFolder = outputDirectory,
                    fieldGuideOutput = fieldGuideOutput,
                    pagesOutput = pagesOutput,
                    pages = new List<PatchouliEntry>()
                });
            }
            return Task.CompletedTask;
        }

        /// <summary>
        /// Creates the actual patchouli entries, 2 entries will be generated per planet found in <see cref="_planetToVeins"/>.
        /// <list type="bullet">
        /// <item>planet_vein_index.json</item>
        /// <item>planet_ore_index.json</item>
        /// </list>
        /// </summary>
        /// <returns>A Dictionary of Planet Name to Patchouli Entry</returns>
        private async Task CreateEntriesForLocale(LocalizationTokens tokens, MineralData mineralData, Output localizationOutput)
        {
            foreach(var planet in _planetToVeins.Keys)
            {
                localizationOutput.pages ??= new List<PatchouliEntry>();
                localizationOutput.pages.Add(await GenerateOreIndexForPlanet(planet, tokens, mineralData, _planetToVeins[planet]));
                localizationOutput.pages.Add(await GenerateVeinIndexForPlanet(planet, tokens, mineralData, _planetToVeins[planet]));
            }
        }

        private async Task<PatchouliEntry> GenerateVeinIndexForPlanet(string planet, LocalizationTokens tokens, MineralData mineralData, Vein[] veins)
        {
            var entry = new PatchouliEntry()
            {
                FileNameWithoutExtension = $"{planet}_vein_index",
                Icon = "minecraft:stone",
                Name = $"{tokens.PlanetDictionary[planet]} {tokens.KeywordDictionary["Vein Index"]}",
                ReadByDefault = true
            };

            List<PatchouliPage> pages = new List<PatchouliPage>();
            foreach(var vein in veins)
            {

            }
            entry.Pages = pages.ToArray();

            return entry;
        }

        private async Task<PatchouliEntry> GenerateOreIndexForPlanet(string planet, LocalizationTokens tokens, MineralData mineralData, Vein[] veins)
        {
            var patchouliEntry = new PatchouliEntry()
            {
                FileNameWithoutExtension = $"{planet}_ore_index",
                Icon = "minecraft:stone",
                Name = $"{tokens.PlanetDictionary[planet]} {tokens.KeywordDictionary["Ore Index"]}",
                ReadByDefault = true
            };

            List<PatchouliPage> patchouliPages = new List<PatchouliPage>();

            //TODO: populate title and text with local specific text
            PatchouliStringBuilder pageBuilder = new PatchouliStringBuilder(new StringBuilder());

            pageBuilder.Append(string.Format(tokens.OreIndex, tokens.PlanetDictionary.GetValueOrDefault(planet, planet)));

            patchouliPages.Add(new TextPage()
            {
                Title = "Ore Index",
                Text = pageBuilder.ToString()
            });

            pageBuilder.Clear();

            patchouliPages.Add(new EmptyPage());

            //Create a dictionary from which we'll create the new pages
            Dictionary<string, OreIndexEntry> oreToEntry = new Dictionary<string, OreIndexEntry>();

            //Iterate thru all the veins of the planet
            foreach(var vein in veins)
            {
                //Try to get the vein's ores and their percentages.
                if(!vein.TryGetOresAndPercentage(out var weightedOres))
                {
                    continue;
                }

                //Iterate thru the weighted ores within the veins, most of the veins may have ores that are within certain types of rocks.
                foreach (var weightedOre in weightedOres)
                {
                    //Find this weighted ore's actual ore (IE: If its granite_redstone, this will return just "redstone"
                    string rockless = "";
                    foreach (var rock in tokens.RockDictionary.Keys)
                    {
                        if (weightedOre.TryGetOreNameWithoutIDAndWithoutRock(rock, out rockless))
                        {
                            break;
                        }
                    }

                    //Are we already storing this ore's entry? if not, create a new entry.
                    if (!oreToEntry.TryGetValue(rockless, out OreIndexEntry oreIndexEntry))
                    {
                        oreIndexEntry = new OreIndexEntry
                        {
                            ore = rockless,
                            veinToWeight = new Dictionary<string, float>(),
                            veinToCount = new Dictionary<string, int>()
                        };
                    }

                    //Increment the total weight of the ore within its vein
                    if (!oreIndexEntry.veinToWeight.TryGetValue(vein.FileName, out _))
                    {
                        oreIndexEntry.veinToWeight[vein.FileName] = 0;
                    }
                    oreIndexEntry.veinToWeight[vein.FileName] += weightedOre.weight;

                    //Increment the total amount of times we've seen this ore in the vein.
                    if (!oreIndexEntry.veinToCount.TryGetValue(vein.FileName, out _))
                    {
                        oreIndexEntry.veinToCount[vein.FileName] = 0;
                    }
                    oreIndexEntry.veinToCount[vein.FileName]++;

                    oreIndexEntry.SortVeinsByRichestWeight();
                    //Update the ore index entry
                    oreToEntry[rockless] = oreIndexEntry;
                }
            }

            var alphabetizedOres = oreToEntry.Keys.OrderBy(k => k).ToArray();
            TextPage oreIndexPage = new TextPage() { Text = "" };
            pageBuilder.Clear();

            for(int i = 0; i < alphabetizedOres.Length; i++)
            {
                if(i != 0 && i % 14 == 0)
                {
                    oreIndexPage.Text = pageBuilder.ToString();
                    patchouliPages.Add(oreIndexPage);

                    oreIndexPage = new TextPage() { Text = "" };
                    pageBuilder.Clear();
                }

                var ore = alphabetizedOres[i];
                var oreIndexEntry = oreToEntry[ore];

                if(!Util.TryRemoveLastSubstring(ore, "ore", out var mineral))
                {
                    continue;
                }

                MineralData.Entry? mineralDataEntry = mineralData.FindMineral(mineral);
                if (mineralDataEntry == null)
                    continue;

                pageBuilder.ThingMacro($"{mineralDataEntry.Name}");
                pageBuilder.Append(": ");
                foreach (var veinName in oreIndexEntry.veinToWeight.Keys)
                {
                    var veinWeight = oreIndexEntry.veinToWeight[veinName];
                    var veinCount = oreIndexEntry.veinToCount[veinName];

                    pageBuilder.InternalLink($"{veinWeight/veinCount}%", $"{planet}_vein_index", veinName);
                    pageBuilder.Append(" ");
                }
                pageBuilder.LineBreak();
            }

            patchouliEntry.Pages = patchouliPages.ToArray();

            var textPages = patchouliEntry.Pages.OfType<TextPage>();

            return patchouliEntry;
        }

        private async Task WriteFiles()
        {
            //Iterate thru the locales
            foreach(var locale in _localeToOutputs.Keys)
            {
                Output output = _localeToOutputs[locale];

                //Delete the previous outputs
                foreach(var filePath in Directory.EnumerateFiles(output.pagesOutput))
                {
                    File.Delete(filePath);
                }

                //write the new outputs
                foreach(var page in output.pages)
                {
                    var filePath = Path.Combine(output.pagesOutput, page.FileNameWithoutExtension + ".json");

                    using (StreamWriter writer = File.CreateText(filePath))
                    {
                        var json = JsonConvert.SerializeObject(page, _arguments.shouldPrettyPrint ? Formatting.Indented : Formatting.None, new JsonSerializerSettings
                        {
                            NullValueHandling = NullValueHandling.Ignore,
                        });
                        await writer.WriteAsync(json);
                        ConsoleLogHelper.WriteLine($"Wrote file {page.FileNameWithoutExtension} and saved it in {filePath}", LogLevel.Info);
                    }
                }
            }
        }

        private async Task MoveFilesToInGameFieldGuide()
        {
            //Iterate thru the locales
            foreach(var locale in _localeToOutputs.Keys)
            {
                Output output = _localeToOutputs[locale];

                //Get the path from the KubeJS folder down to this locale's tfg_ores path, something along the lines of "\kubejs\assets\tfc\patchouli_books\field_guide\en_us\entries\tfg_ores" for english
                string kubeJSFolderToTFGOresFolderPath = output.pagesOutput.Substring(output.rootOutputFolder.Length + 1); //+2 because this will capute the starting "\" in the variable, there has to be a cleaner way but idgaf
                string destinationFolder = Path.Combine(_arguments.minecraftFolder, kubeJSFolderToTFGOresFolderPath);

                var filePathsInDestinationFolder = Directory.EnumerateFiles(destinationFolder);
                foreach(var existingFilePath in filePathsInDestinationFolder)
                {
                    var fileNameWithoutExtension = Path.GetFileNameWithoutExtension(existingFilePath);

                    //If the file name points to one of the manually written patchouli entries, do not delete it.
                    if(_arguments.whitelistedPatchouliEntryFilenames.Contains(fileNameWithoutExtension))
                    {
                        continue;
                    }
                    File.Delete(existingFilePath);
                }

                var outputPages = Directory.EnumerateFiles(output.pagesOutput);
                foreach (var pagePath in outputPages)
                {
                    string fileName = Path.GetFileName(pagePath);
                    File.Copy(pagePath, Path.Combine(destinationFolder, fileName), true);
                }
            }
        }

        public OresToFieldGuideProgram(ProgramArguments arguments)
        {
            _arguments = arguments;
        }

        internal struct Output
        {
            public string rootOutputFolder;
            public string fieldGuideOutput;
            public string pagesOutput;

            public List<PatchouliEntry> pages;
        }
    }
}
