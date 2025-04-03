using OresToFieldGuide.JSONObjects;
using OresToFieldGuide.JSONObjects.Patchouli.PageTypes;
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
        private static StringBuilder stringBuilder = new StringBuilder();
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

        //Computes the vein's name inside the book
        internal static string ComputeWeightiestOreNames(this Vein vein, string[] internalRockNames, MineralData mineralData, Dictionary<string, OreIndexEntry> oreToEntry)
        {
            string[] oresInVein = Array.Empty<string>();

            if(!vein.TryGetOresAndPercentage(out var weightedOres))
            {
                return "";
            }

            oresInVein = weightedOres.Select(weightedOre =>
            {
                foreach (var rock in internalRockNames)
                {
                    if (weightedOre.TryGetOreNameWithoutIDAndWithoutRock(rock, out var result))
                    {
                        return result;
                    }
                }
                return null;
            }).Where(s => s != null)
            .Distinct()
            .ToArray()!;

            WeightedOre? firstHeaviestOre = null;
            WeightedOre? secondHeaviestOre = null;
            foreach (var ore in oresInVein)
            {
                if (!oreToEntry.TryGetValue(ore, out var oreIndexEntry))
                {
                    continue;
                }

                //This gets the weight normalized, normalized in this case means dividing the ore's total weight with the amount of times it appears in the vein file.
                if (!oreIndexEntry.TryGetNormalizedWeightInVein(vein, out var weight))
                {
                    continue;
                }

                WeightedOre weightedOreToCheckAgainst = new WeightedOre
                {
                    ore = ore,
                    weight = weight
                };

                //This is the first ore we're checking, so by default its the heaviest atm.
                if(firstHeaviestOre == null)
                {
                    firstHeaviestOre = weightedOreToCheckAgainst;
                    continue;
                }
                else if(weightedOreToCheckAgainst > firstHeaviestOre)
                {
                    secondHeaviestOre = firstHeaviestOre;
                    firstHeaviestOre = weightedOreToCheckAgainst;
                }
            }

            if(firstHeaviestOre != null)
            {
                if(Util.TryRemoveLastSubstring(firstHeaviestOre.Value.ore, "ore", out var orelessString))
                {
                    var mineralDataEntry = mineralData.FindMineral(orelessString);
                    if(mineralDataEntry != null)
                    {
                        stringBuilder.Append(mineralDataEntry.Name);
                    }
                }
            }
            if(secondHeaviestOre != null)
            {
                if(Util.TryRemoveLastSubstring(secondHeaviestOre.Value.ore, "ore", out var orelessString))
                {
                    var mineralDataEntry = mineralData.FindMineral(orelessString);
                    if(mineralDataEntry != null)
                    {
                        stringBuilder.Append(" & ");
                        stringBuilder.Append(mineralDataEntry.Name);
                    }
                }
            }
            return stringBuilder.Dump();
        }

        public static string[] GetRocksInVein(this Vein vein, string[] internalRockNames)
        {
            if(!TryGetOresAndPercentage(vein, out var weightedOres))
            {
                return Array.Empty<string>();
            }
            HashSet<string> result = new HashSet<string>();
            foreach(var weightedOre in weightedOres)
            {
                foreach(var internalRockName in internalRockNames)
                {
                    if(weightedOre.OreNameWithoutModID.StartsWith(internalRockName))
                    {
                        result.Add(internalRockName);
                        break;
                    }
                }
            }
            return result.OrderBy(r => r).ToArray();
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

            public static bool operator >(WeightedOre lhs, WeightedOre rhs)
            {
                return lhs.weight > rhs.weight;
            }

            public static bool operator >=(WeightedOre lhs, WeightedOre rhs)
            {
                return lhs.weight >= rhs.weight;
            }

            public static bool operator <(WeightedOre lhs, WeightedOre rhs)
            {
                return lhs.weight < rhs.weight;
            }

            public static bool operator <=(WeightedOre lhs, WeightedOre rhs)
            {
                return lhs.weight <= rhs.weight;
            }
        }
    }
}
