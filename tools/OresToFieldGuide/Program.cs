// See https://aka.ms/new-console-template for more information
using System.Collections.Generic;

namespace OresToFieldGuide
{
    public class Program
    {
        public const string MINECRAFT = "minecraft";
        public const string TOOLS = "tools";
        public const string PROJECT_NAME = "OresToFieldGuide";
        public const string MINERAL_DATA = "mineral_data";

        public const string KUBEJS = "kubejs";
        public const string DATA = "data";
        public const string TFG = "tfg";
        public const string WORLDGEN = "worldgen";
        public const string CONFIGURED_FEATURE = "configured_feature";
        private struct ProgramArguments
        {
            public string minecraftFolder;
            public string mineralDataFolder;
            public Dictionary<string, string[]> planetToVeinsPath;
        }

        /// <summary>
        /// Main method for the Program
        /// </summary>
        public static void Main(string[] args)
        {
            Console.WriteLine("Creating updated entries of Ores for the Field Guide!");

            if(!TryGetProgramArguments(out ProgramArguments programArguments))
            {
                Console.WriteLine("Failed to get Program's Arguments, Press any key to exit...");
                Console.ReadKey();
                return;
            }
            Console.WriteLine("Success! Press any key to Exit...");
            Console.ReadKey();
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
                Console.ForegroundColor = ConsoleColor.Red;
                Console.WriteLine("An Exception has been Thrown! " + e);
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

            //If the tools' parent directory is minecraft, return it.
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
                    Console.ForegroundColor = ConsoleColor.Yellow;
                    Console.WriteLine($"Planet \"{planetName}\" has no \"vein\" folder! skipping enumerator process.");
                    Console.ForegroundColor = ConsoleColor.White;
                    continue;
                }
                string[] filesInDirectory = Directory.EnumerateFiles(planetVeinDirectory).ToArray();
                planetNameToVeinPathsDictionary.Add(planetName, filesInDirectory);
            }
            return planetNameToVeinPathsDictionary;
        }
    }
}
