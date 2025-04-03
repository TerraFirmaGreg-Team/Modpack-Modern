using OresToFieldGuide.JSONObjects.Patchouli;
using OresToFieldGuide.JSONObjects.Veins;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide
{
    public struct OreIndexEntry
    {
        public string ore;
        public Dictionary<string, float> veinToWeight;
        public Dictionary<string, int> veinToCount;

        public void SortVeinsByRichestWeight()
        {
            if (veinToCount == null)
                return;

            if (veinToWeight == null)
                return;

            veinToWeight = veinToWeight.OrderByDescending(kvp => kvp.Value).ToDictionary();
            Dictionary<string, int> orderedVeinToCount = new Dictionary<string, int>();

            foreach(var veinName in veinToWeight.Keys)
            {
                orderedVeinToCount[veinName] = veinToCount[veinName];
            }
            veinToCount = orderedVeinToCount;
        }

        internal Multiblock BuildMultiblockDisplay()
        {
            Multiblock result = new Multiblock();

            if(!Util.TryRemoveLastSubstring(ore, "ore", out var oreless))
            {
                return result;
            }
            var tag = $"#forge:ores/{oreless}";

            result.Mapping = new Dictionary<string, string>
            {
                ["0"] = tag
            };
            result.Pattern = new string[2][];
            result.Pattern[0] = new string[] { "0" };
            result.Pattern[1] = new string[] { " " };
            return result;
        }

        internal bool TryGetNormalizedWeightInVein(Vein vein, out int normalizedWeight)
        {
            return TryGetNormalizedWeightInVein(vein.FileName, out normalizedWeight);
        }

        internal bool TryGetNormalizedWeightInVein(string vein, out int normalizedWeight)
        {
            normalizedWeight = 0;
            if (!veinToCount.TryGetValue(vein, out var count))
            {
                return false;
            }
            if (!veinToWeight.TryGetValue(vein, out var weight))
            {
                return false;
            }
            normalizedWeight = (int)(weight / count);
            return true;
        }
    }
}
