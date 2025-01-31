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
        private Dictionary<string, MineralData> _localToMineralData = new Dictionary<string, MineralData>();
        private Dictionary<string, LocalizationTokens> _localToTokens = new Dictionary<string, LocalizationTokens>();
        private Dictionary<string, LocalizationOutput> _localToOutputs = new Dictionary<string, LocalizationOutput>();
        private Dictionary<string, Vein[]> _planetToVeins = new Dictionary<string, Vein[]>();
        public async Task<bool> Run()
        {
            Console.WriteLine("Ores to Field Guide Program has Started!");
            await DeserializeLanguageTokens();
            await DeserializeMineralDatas();
            await DeserializeVeins();
            await CreateOutputDirectories();
            
            foreach(string locale in _localToMineralData.Keys)
            {
                var localizationOutput = _localToOutputs[locale];
                var mineralData = _localToMineralData[locale];

                await CreateEntriesForLocale(locale, mineralData, localizationOutput);
            }
//            await WriteFiles();
//            await MoveFiles();
            Thread.Sleep(2000);
            return true;
        }

        private async Task DeserializeLanguageTokens()
        {
            var en_usTokenPath = Path.Combine(_arguments.languageTokenFolder, $"{fallbackLocale}.json");
            LocalizationTokens en_usTokens = await LocalizationTokens.FromJSON(en_usTokenPath);

            _localToTokens.Add(fallbackLocale, en_usTokens);
            foreach (var locale in locales)
            {
                if (_localToTokens.ContainsKey(locale))
                    continue;

                var localeTokenPath = Path.Combine(_arguments.languageTokenFolder, $"{locale}.json");
                if (!File.Exists(localeTokenPath))
                {
                    ConsoleLogHelper.WriteLine($"Could not file localization tokens for locale {locale}! Assigning {fallbackLocale}'s Localization Tokens.", LogLevel.Warning);
                    _localToTokens.Add(locale, en_usTokens);
                    continue;
                }

                LocalizationTokens localeTokens = await LocalizationTokens.FromJSON(localeTokenPath);
                _localToTokens.Add(locale, localeTokens);
            }
        }

        private async Task DeserializeMineralDatas()
        {
            var mineralDatas = Directory.EnumerateFiles(_arguments.mineralDataFolder);

            foreach(var mineralDataJSON in mineralDatas)
            {
                var languageName = Path.GetFileNameWithoutExtension(mineralDataJSON);
                var mineralData = await MineralData.FromJSON(mineralDataJSON);
                _localToMineralData.Add(languageName, mineralData);
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

                _localToOutputs.Add(local, new LocalizationOutput
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
        private async Task CreateEntriesForLocale(string locale, MineralData mineralData, LocalizationOutput localizationOutput)
        {
            foreach(var planet in _planetToVeins.Keys)
            {
                localizationOutput.pages ??= new List<PatchouliEntry>();
                localizationOutput.pages.Add(await GenerateVeinIndexForPlanet(planet, mineralData, _planetToVeins[planet]));
                localizationOutput.pages.Add(await GenerateOreIndexForPlanet(planet, mineralData, _planetToVeins[planet]));
            }
        }

        private async Task<PatchouliEntry> GenerateVeinIndexForPlanet(string planet, MineralData mineralData, Vein[] veins)
        {
            var entry = new PatchouliEntry()
            {
                FileName = $"{planet}_vein_index",
                ReadByDefault = true
            };

            List<PatchouliPage> pages = new List<PatchouliPage>();
            foreach(var vein in veins)
            {

            }
            entry.Pages = pages.ToArray();

            return entry;
        }

        private async Task<PatchouliEntry> GenerateOreIndexForPlanet(string planet, MineralData mineralData, Vein[] veins)
        {
            var entry = new PatchouliEntry()
            {
                FileName = $"{planet}_vein_index",
                ReadByDefault = true
            };

            List<PatchouliPage> pages = new List<PatchouliPage>();

            //TODO: populate title and text with local specific text
            PatchouliStringBuilder pageBuilder = new PatchouliStringBuilder(new StringBuilder());

            pageBuilder.Append("This is alist of every ");
            pageBuilder.ThingMacro("Ore");
            pageBuilder.Append(" in the planet ");
            pageBuilder.ThingMacro(planet);
            pageBuilder.Append(", sorted alphabetically, and then by richest to poorest vein type.");

            pages.Add(new TextPage()
            {
                Title = "Ore Index",
                Text = pageBuilder.ToString()
            });

            pageBuilder.Clear();

            pages.Add(new EmptyPage());

            foreach(var vein in veins)
            {
                if(!vein.TryGetOresAndPercentage(out var weightedOres))
                {
                    continue;
                }

                foreach(var weightedOre in weightedOres)
                {

                }
            }
            entry.Pages = pages.ToArray();

            return entry;
        }


        public OresToFieldGuideProgram(ProgramArguments arguments)
        {
            _arguments = arguments;
        }

        internal struct LocalizationOutput
        {
            public string rootOutputFolder;
            public string fieldGuideOutput;
            public string pagesOutput;

            public List<PatchouliEntry> pages;
        }
    }
}
