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
            var mcIndex = workingDir.LastIndexOf(MINECRAFT);
            if (mcIndex != -1)
            {
                return new DirectoryInfo(workingDir.Substring(0, mcIndex + MINECRAFT.Length));
            }

            var repoIndex = workingDir.LastIndexOf(REPONAME);
            if (repoIndex != -1)
            {
                return new DirectoryInfo(workingDir.Substring(0, repoIndex + REPONAME.Length));
            }

            throw new DirectoryNotFoundException($"The \".{MINECRAFT}\" or \"{REPONAME}\" folder was not found.");
        }
    }
}
