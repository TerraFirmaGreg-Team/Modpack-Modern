using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace LanguageMerger
{
    internal struct ProgramArguments
    {
        public DirectoryInfo minecraftDirectory;

        public DirectoryInfo languageFilesFolder;

        public DirectoryInfo kjsAssetsFolder;

        public bool shouldPrettyPrint;

        public bool shouldOverwriteFiles;

        /// <summary>
        /// Returns the arguments in a human readable format.
        /// </summary>
        public override string ToString()
        {
            StringBuilder stringBuilder = new StringBuilder();

            stringBuilder.AppendLine($".minecraft Folder Path: \"{minecraftDirectory.FullName}\"");
            stringBuilder.AppendLine($"LanguageFiles Folder Path: \"{languageFilesFolder.FullName}\"");
            stringBuilder.AppendLine($"KJSAssets Folder Path: \"{kjsAssetsFolder.FullName}\"");
            stringBuilder.AppendLine($"shouldPrettyPrint: \"{shouldPrettyPrint}\"");
            stringBuilder.AppendLine($"shouldOverwriteFiles: \"{shouldOverwriteFiles}\"");

            return stringBuilder.ToString();
        }
    }
}
