using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace OresToFieldGuide.JSONObjects
{
    /// <summary>
    /// A .NET representation of a MineralData JSON
    /// </summary>
    [Serializable]
    public class MineralData
    {
        /// <summary>
        /// Creates a new MineralData from the JSON representation
        /// </summary>
        /// <param name="jsonFilePath">The file path to the JSON file</param>
        /// <returns>The task for a deserialized MineralData</returns>
        public static async Task<MineralData> FromJSON(string jsonFilePath)
        {
            string json = await File.ReadAllTextAsync(jsonFilePath);

            var mineralData = JsonConvert.DeserializeObject<MineralData>(json);
            return mineralData;
        }

        [JsonProperty("minerals")]
        public Entry[] Minerals { get; set; }

        public Entry? FindMineral(string id)
        {
            foreach(var entry in Minerals)
            {
                if(entry.Id.Equals(id, StringComparison.OrdinalIgnoreCase))
                {
                    return entry;
                }
            }
            return null;
        }
        /// <summary>
        /// A .NET representation of a MineralData Entry.
        /// </summary>
        [Serializable, JsonObject]
        public class Entry
        {
            /// <summary>
            /// The internal name of the mineral, cannot be null
            /// </summary>
            [JsonProperty("id")]
            public string? Id { get; set; }

            /// <summary>
            /// What can it be used for, Can be null
            /// </summary>
            [JsonProperty("use")]
            public string? Use { get; set; }

            /// <summary>
            /// What can be obtained from the mineral, Can be null
            /// </summary>
            [JsonProperty("for")]
            public string[]? For { get; set; }

            /// <summary>
            /// The Chemical Formula for the Mineral, Can be Null
            /// </summary>
            [JsonProperty("formula")]
            public string? Formula { get; set; }

            /// <summary>
            /// A "Tip" for the mineral, can be null
            /// </summary>
            [JsonProperty("tips")]
            public string? Tips { get; set; }

            /// <summary>
            /// Wether the mineral is hazardous or not, defaults to false
            /// </summary>
            [JsonProperty("hazardous")]
            public bool Hazardous { get; set; }

            /// <summary>
            /// Returns the name of the Mineral, this can be either specified from the actual json file or created off <see cref="Id"/> in a "nicified" format
            /// </summary>
            public string Name
            {
                get
                {
                    if(_name != null)
                    {
                        return _name;
                    }

                    StringBuilder stringBuilder = new StringBuilder(Id);
                    stringBuilder.Replace('_', ' ');
                    for(int i = 0; i < stringBuilder.Length; i++)
                    {
                        char thisChar = stringBuilder[i];
                        if(i == 0)
                        {
                            stringBuilder[i] = char.ToUpper(thisChar);
                        }
                        else
                        {
                            char previousChar = stringBuilder[i - 1];
                            if(previousChar == ' ')
                            {
                                stringBuilder[i] = char.ToUpper(thisChar);
                            }
                        }

                    }

                    return stringBuilder.ToString();
                }
            }
            [JsonProperty("name")]
            private string _name;
            private Entry() { }
        }

        private MineralData() { }
    }
}
