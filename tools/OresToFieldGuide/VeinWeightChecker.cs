using OresToFieldGuide.JSONObjects.Veins;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide
{
    public class VeinWeightChecker
    {
        private Dictionary<string, Vein[]> planetToVeins;
        private string[] internalRockNames;
        public VeinWeightChecker(Dictionary<string, Vein[]> planetToVeins, string[] internalRockNames)
        {
            this.planetToVeins = planetToVeins;
            this.internalRockNames = internalRockNames;
        }
        public Task Run()
        {
            StringBuilder stringBuilder = new StringBuilder();
            ConsoleLogHelper.WriteLine($"Running vein weight checker.", LogLevel.Info);
            foreach (var planet in planetToVeins.Keys)
            {
                var veins = planetToVeins[planet];

                foreach (var vein in veins)
                {
                    Dictionary<string, Dictionary<string, float>> rockToOreIndexEntries = new Dictionary<string, Dictionary<string, float>>();
                    HashSet<string> oresFound = new HashSet<string>();
                    foreach (var blockReplacements in vein.VeinConfig.Blocks)
                    {
                        var stoneType = blockReplacements.Replace.FirstOrDefault();
                        if (!rockToOreIndexEntries.ContainsKey(stoneType))
                        {
                            rockToOreIndexEntries[stoneType] = new Dictionary<string, float>();
                        }

                        foreach (var weightedBlock in blockReplacements.With)
                        {
                            var innerDict = rockToOreIndexEntries[stoneType];
                            var withoutModID = Util.RemoveModID(weightedBlock.Block);
                            var rockless = withoutModID;
                            foreach (var rockName in internalRockNames)
                            {
                                if (Util.TryRemoveStartingSubstring(withoutModID, rockName, out rockless))
                                {
                                    break;
                                }
                            }

                            if (!innerDict.ContainsKey(rockless))
                            {
                                innerDict[rockless] = weightedBlock.Weight;
                                oresFound.Add(rockless);
                            }
                            rockToOreIndexEntries[stoneType] = innerDict;
                        }
                    }

                    if(rockToOreIndexEntries.Count == 0)
                    {
                        continue;
                    }

                    var allKeys = rockToOreIndexEntries.Keys.ToArray();
                    var firstEntryKey = allKeys[0];
                    var baseline = rockToOreIndexEntries[firstEntryKey];

                    ConsoleLogHelper.WriteLine($"Ensuring equal weights of all ores inside {planet} vein \"{vein.FileName}\"", LogLevel.Debug);
                    stringBuilder.Clear();
                    bool foundDiscrepencies = false;

                    for (int i = 1; i < allKeys.Length; i++)
                    {
                        var rockEntry = allKeys[i];
                        var toCompareWithBaseline = rockToOreIndexEntries[rockEntry];

                        foreach(var ore in oresFound)
                        {
                            if(!baseline.TryGetValue(ore, out var baselineWeight))
                            {
                                stringBuilder.AppendLine($"  * Ore {ore} was found on Vein, but said ore is not on the baseline vein, which uses rock {firstEntryKey}. Skipping entire ore check");
                                foundDiscrepencies = true;
                                continue;
                            }

                            if(!toCompareWithBaseline.TryGetValue(ore, out var toCompareWeight))
                            {
                                stringBuilder.AppendLine($"  * Ore {ore} was found on vein, but said ore is not on the comparasion vein, which uses rock {rockEntry}, skipping entire ore check.");
                                foundDiscrepencies = true;
                                continue;
                            }

                            if(baselineWeight != toCompareWeight)
                            {
                                stringBuilder.AppendLine($"  * Discrepency found on ore {ore} between baseline rock ({firstEntryKey}) and comparasion rock {rockEntry}. {firstEntryKey}{ore}Weight={baselineWeight}.{rockEntry}{ore}Weight={toCompareWeight}");
                                foundDiscrepencies = true;
                            }
                        }
                    }

                    if(foundDiscrepencies)
                    {
                        ConsoleLogHelper.WriteLine($"Found weight discrepencies on {planet}'s vein \"{vein.FileName}\", logging... \r\n{stringBuilder.ToString()}", LogLevel.Warning);
                    }
                    else
                    {
                        ConsoleLogHelper.WriteLine($"No discrepencies found on {planet}'s vein \"{vein.FileName}\"", LogLevel.Message);
                    }
                }
            }
            return Task.CompletedTask;
        }
    }
}
