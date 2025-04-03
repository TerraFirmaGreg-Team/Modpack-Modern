using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public static class CommonUtil
    {
        #region Constants
        public const string MINECRAFT = "minecraft";
        #endregion

        public static DirectoryInfo GetMinecraftDirectory(string workingDir)
        {
            var parent = Directory.GetParent(workingDir);

            //search upwards recursively until the folder we're in has "minecraft" as it's parent, very likely "parent" will end up being the Tools folder in this scenario.
            while (parent != null && parent.Name != MINECRAFT)
            {
                parent = Directory.GetParent(parent.FullName);
            }

            if (parent != null && parent.Name == MINECRAFT)
            {
                return parent;
            }
            throw new DirectoryNotFoundException($"The \".{MINECRAFT}\" folder was not found.");
        }
    }
}
