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
            private string? Id { get; set; }

            /// <summary>
            /// What can it be used for, Can be null
            /// </summary>
            [JsonProperty("use")]
            string? Use { get; set; }

            /// <summary>
            /// What can be obtained from the mineral, Can be null
            /// </summary>
            [JsonProperty("for")]
            string[]? For { get; set; }

            /// <summary>
            /// The Chemical Formula for the Mineral, Can be Null
            /// </summary>
            [JsonProperty("formula")]
            string? Formula { get; set; }

            /// <summary>
            /// A "Tip" for the mineral, can be null
            /// </summary>
            [JsonProperty("tips")]
            string? Tips { get; set; }

            /// <summary>
            /// Wether the mineral is hazardous or not, defaults to false
            /// </summary>
            [JsonProperty("hazardous")]
            bool Hazardous { get; set; }

            private Entry() { }
        }

        private MineralData() { }
    }
}
