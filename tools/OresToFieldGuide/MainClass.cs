//Uncomment this to enable verification of vein weights
#define VERIFY_VEIN_WEIGHTS
//Uncomment this to write json in a Prettified format, only really useful for debugging the output
#define PRETTY_PRINT
//Uncomment this to make the program overwrite all the files within .minecraf/kubejs/assets/../tfg_ores/
#define OVERWRITE_FILES

// See https://aka.ms/new-console-template for more information
using System.Collections.Generic;
using System.Text;

namespace OresToFieldGuide
{
    /// <summary>
    /// Main class of the program. Contains the entry method alongside the creation of arguments and passing these arguments to an instance of <see cref="OresToFieldGuideProgram"/>
    /// </summary>
    public class MainClass
    {
        #region Constants
        public const string PROJECT_NAME = "OresToFieldGuide";
        public const string MINERAL_DATA = "mineral_data";
        public const string LANGUAGE_TOKENS = "language_tokens";

        public const string MINECRAFT = "minecraft";
        public const string TOOLS = "tools";
        public const string KUBEJS = "kubejs";
        
        public const string DATA = "data";
        public const string TFG = "tfg";
        public const string WORLDGEN = "worldgen";
        public const string CONFIGURED_FEATURE = "configured_feature";

        public const string ASSETS = "assets";
        public const string TFC = "tfc";
        public const string PATCHOULI_BOOKS = "patchouli_books";
        public const string FIELD_GUIDE = "field_guide";
        public const string ENTRIES = "entries";
        public const string TFG_ORES = "tfg_ores";
        #endregion

        /// <summary>
        /// Main method for the Program
        /// </summary>
        public static void Main(string[] args)
        {
            Console.WriteLine("Creating updated entries of Ores for the Field Guide!");

            //Get our arguments based off the application's location, preprocessor directives, etc
            if(!TryGetProgramArguments(out ProgramArguments programArguments))
            {
                ConsoleLogHelper.WriteLine("Failed to get Program's Arguments, Press any key to exit...", LogLevel.Error);
                Console.ReadKey();
                return;
            }

            ConsoleLogHelper.WriteLine("Arguments have been obtained! Printing...", LogLevel.Info);
            ConsoleLogHelper.WriteLine(programArguments.ToString(), LogLevel.Message);

            var programInstance = new OresToFieldGuideProgram(programArguments);
            bool result = false;
            try
            {
                var task = programInstance.Run();
                task.Wait();

                result = task.Result;
            }
            catch(Exception e)
            {
                ConsoleLogHelper.WriteLine($"Exception has been thrown. {e}", LogLevel.Fatal);
                result = false;
            }

            if(result)
            {
                ConsoleLogHelper.WriteLine("Success :D! Press any key to exit...", LogLevel.Info);
            }
            else
            {
                ConsoleLogHelper.WriteLine("Failure D:! Press any key to exit...", LogLevel.Error);
            }
            Console.ReadKey();
        }

        private static bool TryGetProgramArguments(out ProgramArguments programArguments)
        {
            programArguments = new ProgramArguments();
            try
            {
                programArguments.minecraftFolder = GetMinecraftDirectory();
                programArguments.mineralDataFolder = GetMineralDataFolder(programArguments.minecraftFolder);
                programArguments.languageTokenFolder = GetLanguageTokenFolder(programArguments.minecraftFolder);
                programArguments.shouldVerifyVeinWeights = GetShouldVerifyVeinWeights();
                programArguments.whitelistedPatchouliEntryFilenames = GetWhitelistedPatchoulyEntryFilenames();
                programArguments.planetToVeinsPath = GetPlanetNameToVeinPaths(programArguments.minecraftFolder);
                programArguments.shouldPrettyPrint = GetShouldPrettyPrint();
                programArguments.shouldOverwriteFiles = GetShouldOverwriteFiles();
            }
            catch (Exception e)
            {
                ConsoleLogHelper.WriteLine("An Exception has been Thrown! " + e, LogLevel.Fatal);
                return false;
            }
            return true;
        }

        private static string GetMinecraftDirectory()
        {
            var workingDir = Directory.GetCurrentDirectory();

            var parent = Directory.GetParent(workingDir);

            //search upwards recursively until the folder we're in has "minecraft" as it's parent, very likely "parent" will end up being the Tools folder in this scenario.
            while (parent != null && parent.Name != MINECRAFT)
            {
                parent = Directory.GetParent(parent.FullName);
            }

            if(parent != null && parent.Name == MINECRAFT)
            {
                return parent.FullName;
            }
            throw new DirectoryNotFoundException($"The \".{MINECRAFT}\" folder was not found.");
        }

        private static string GetMineralDataFolder(string dotMinecraftFolder)
        {
            string mineralDataPath = Path.Combine(dotMinecraftFolder, TOOLS, PROJECT_NAME, MINERAL_DATA);
            if(!Directory.Exists(mineralDataPath))
            {
                throw new DirectoryNotFoundException($"The \"{MINERAL_DATA}\" folder was not found in {mineralDataPath}");
            }
            return mineralDataPath;
        }

        private static string GetLanguageTokenFolder(string dotMinecraftFolder)
        {
            string languageTokenPath = Path.Combine(dotMinecraftFolder, TOOLS, PROJECT_NAME, LANGUAGE_TOKENS);
            if(!Directory.Exists(languageTokenPath))
            {
                throw new DirectoryNotFoundException($"The \"{LANGUAGE_TOKENS}\" folder was not found in {languageTokenPath}");
            }
            return languageTokenPath;
        }

        private static Dictionary<string, string[]> GetPlanetNameToVeinPaths(string dotMinecraftFolder)
        {
            string configuredFeaturePath = Path.Combine(dotMinecraftFolder, KUBEJS, DATA, TFG, WORLDGEN, CONFIGURED_FEATURE);
            if(!Directory.Exists(configuredFeaturePath))
            {
                throw new DirectoryNotFoundException($"The \"{CONFIGURED_FEATURE}\" folder was not found in {configuredFeaturePath}");
            }

            string[] directories = Directory.EnumerateDirectories(configuredFeaturePath).ToArray();
            for(int i = 0; i < directories.Length; i++)
            {
                directories[i] = Path.Combine(directories[i], "vein");
            }
            Dictionary<string, string[]> planetNameToVeinPathsDictionary = new Dictionary<string, string[]>();
            foreach(var planetVeinDirectory in directories)
            {
                var planetName = Directory.GetParent(planetVeinDirectory).Name;
                if (!Directory.Exists(planetVeinDirectory))
                {
                    ConsoleLogHelper.WriteLine($"Planet \"{planetName}\" has no \"vein\" folder! skipping file enumeration process.", LogLevel.Warning);
                    continue;
                }
                string[] filesInDirectory = Directory.EnumerateFiles(planetVeinDirectory).ToArray();
                planetNameToVeinPathsDictionary.Add(planetName, filesInDirectory);
            }
            return planetNameToVeinPathsDictionary;
        }

        private static string[] GetWhitelistedPatchoulyEntryFilenames()
        {
            return new string[]
            {
                "hazards",
                "ore_basics"
            };
        }


        private static bool GetShouldVerifyVeinWeights()
        {
#if VERIFY_VEIN_WEIGHTS
            return true;
#else
            return false;
#endif
        }

        private static bool GetShouldPrettyPrint()
        {
#if PRETTY_PRINT
            return true;
#else
            return false;
#endif
        }

        private static bool GetShouldOverwriteFiles()
        {
#if OVERWRITE_FILES
            return true;
#else
            return false;
#endif
        }
    }
}
