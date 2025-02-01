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
    }
}
