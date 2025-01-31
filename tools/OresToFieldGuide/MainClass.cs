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

            if(!TryGetProgramArguments(out ProgramArguments programArguments))
            {
                using(new ConsoleForegroundColorScope(ConsoleColor.Red))
                {
                    Console.WriteLine("Failed to get Program's Arguments, Press any key to exit...");
                }
                Console.ReadKey();
                return;
            }

            using(new ConsoleForegroundColorScope(ConsoleColor.Cyan))
            {
                Console.WriteLine("Arguments have been obtained! printing...");
                Console.WriteLine(programArguments);
            }

            var programInstance = new OresToFieldGuideProgram(programArguments);
            var task = programInstance.Run();
            while(!task.IsCompleted)
            {
            }

            var result = task.Result;

            using (new ConsoleForegroundColorScope(result ? ConsoleColor.Green : ConsoleColor.Red))
            {
                Console.WriteLine(result ? "Success :D! Press any key to exit..." : "Failure D:! Press any key to exit...");
                Console.ReadKey();
            }
        }

        private static bool TryGetProgramArguments(out ProgramArguments programArguments)
        {
            programArguments = new ProgramArguments();
            try
            {
                programArguments.minecraftFolder = GetMinecraftDirectory();
                programArguments.mineralDataFolder = GetMineralDataFolder(programArguments.minecraftFolder);
                programArguments.planetToVeinsPath = GetPlanetNameToVeinPaths(programArguments.minecraftFolder);
            }
            catch(Exception e)
            {
                using(new ConsoleForegroundColorScope(ConsoleColor.Red))
                {
                    Console.WriteLine("An Exception has been Thrown! " + e);
                }
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
                if(!Directory.Exists(planetVeinDirectory))
                {
                    using (new ConsoleForegroundColorScope(ConsoleColor.Yellow))
                    {
                        Console.WriteLine($"Planet \"{planetName}\" has no \"vein\" folder! skipping File Enumeration process.");
                    }
                    continue;
                }
                string[] filesInDirectory = Directory.EnumerateFiles(planetVeinDirectory).ToArray();
                planetNameToVeinPathsDictionary.Add(planetName, filesInDirectory);
            }
            return planetNameToVeinPathsDictionary;
        }
    }
}
