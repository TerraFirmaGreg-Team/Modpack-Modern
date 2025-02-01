using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide
{
    /// <summary>
    /// Represents the arguments used by the program
    /// </summary>
    internal struct ProgramArguments
    {
        /// <summary>
        /// The path to the .minecraft folder
        /// </summary>
        public string minecraftFolder;

        /// <summary>
        /// The Path to the mineral_data json files
        /// </summary>
        public string mineralDataFolder;

        /// <summary>
        /// A dictionary of planet name to all of its veins json files.
        /// </summary>
        public Dictionary<string, string[]> planetToVeinsPath;

        public bool shouldVerifyVeinWeights;

        /// <summary>
        /// The path to the Language Token JSON files
        /// </summary>
        public string languageTokenFolder;

        /// <summary>
        /// Returns the arguments in a human readable format.
        /// </summary>
        public override string ToString()
        {
            StringBuilder stringBuilder = new StringBuilder();

            stringBuilder.AppendLine($".minecraft Folder Path: \"{minecraftFolder}\"");
            stringBuilder.AppendLine($"mineral_data Folder Path: \"{mineralDataFolder}\"");
            stringBuilder.AppendLine($"language_tokens Folder Path: \"{languageTokenFolder}\"");
            stringBuilder.AppendLine($"shouldVerifyVeinWeights: \"{shouldVerifyVeinWeights}\"");
            foreach (var planet in planetToVeinsPath.Keys)
            {
                stringBuilder.AppendLine($"{planet}'s Vein Files:");
                var veinsPaths = planetToVeinsPath[planet];
                foreach (var veinFile in veinsPaths)
                {
                    stringBuilder.AppendLine($"    * {veinFile}");
                }
            }

            return stringBuilder.ToString();
        }
    }
}
