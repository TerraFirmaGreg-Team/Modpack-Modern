using OresToFieldGuide.JSONObjects.Veins;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide
{
    public static class VeinHelper
    {
        public static bool TryGetOresAndPercentage(this Vein vein, out WeightedOre[] weightedOres)
        {
            weightedOres = null;
            if (vein.VeinConfig == null)
                return false;

            Vein.Config config = vein.VeinConfig;

            if (config.Blocks == null)
                return false;

            BlockReplacements[] blockReplacements = config.Blocks;
            if (blockReplacements.Length == 0)
                return false;

            List<WeightedOre> output = new List<WeightedOre>();
            foreach(var blockReplacement in blockReplacements)
            {
                if (blockReplacement == null)
                    continue;

                if (blockReplacement.With == null)
                    continue;

                WeightedBlock[] weightedBlocks = blockReplacement.With;
                if (weightedBlocks.Length == 0)
                    continue;

                foreach(var weightedBlock in weightedBlocks)
                {
                    output.Add(new WeightedOre
                    {
                        ore = weightedBlock.Block,
                        weight = weightedBlock.Weight,
                    });
                }
            }
            weightedOres = output.ToArray();
            return true;
        }

        public struct WeightedOre
        {
            public string OreNameWithoutModID
            {
                get
                {
                    return Util.RemoveModID(ore);
                }
            }

            public bool TryGetOreNameWithoutIDAndWithoutRock(string rockSubstring, out string rocklessString)
            {
                return Util.TryRemoveStartingSubstring(OreNameWithoutModID, rockSubstring, out rocklessString);
            }
            public string ore;
            public float weight;
        }
    }
}
