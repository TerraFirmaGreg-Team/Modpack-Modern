using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Common
{
    public static class CommonUtil
    {
        public const string MINECRAFT = "minecraft";
        public const string REPONAME = "Modpack-Modern";

        public static DirectoryInfo GetMinecraftDirectory(string workingDir)
        {
            var directoryInfo = new DirectoryInfo(workingDir);

            DirectoryInfo? result = null;
            while(directoryInfo.Exists)
            {
                var parent = directoryInfo.Parent;
                var fileInfos = parent.GetFiles("*.json");
                foreach(var fInfo in fileInfos)
                {
                    if(fInfo.Name == "pakku.json")
                    {
                        result = parent;
                    }
                }

                if(result != null)
                {
                    break;
                }
                else
                {
                    directoryInfo = parent;
                }
            }

            if(result == null)
            {
                throw new DirectoryNotFoundException("Failed to find the \"minecraft\" directory. The pakku.json file was not found.");
            }
            return result;
        }
    }
}
