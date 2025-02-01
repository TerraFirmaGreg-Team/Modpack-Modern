using Newtonsoft.Json;

namespace OresToFieldGuide.JSONObjects.Veins
{
    /// <summary>
    /// A .NET representation of a Vein JSON
    /// </summary>
    [Serializable]
    public class Vein
    {
        /// <summary>
        /// Creates a new Vein from the JSON representation
        /// </summary>
        /// <param name="jsonFilePath">The file path to the JSON file</param>
        /// <returns>The task for a deserialized Vein</returns>
        public static async Task<Vein> FromJSON(string jsonFilePath)
        {
            string json = await File.ReadAllTextAsync(jsonFilePath);

            var vein = JsonConvert.DeserializeObject<Vein>(json);
            vein.FileName = Path.GetFileNameWithoutExtension(jsonFilePath);
            return vein;
        }

        public string FileName { get; private set; }
        /// <summary>
        /// What type of Vein this is, IE: tfc:disc_vein
        /// </summary>
        [JsonProperty("type")]
        public string Type { get; set; }

        /// <summary>
        /// The Configuration for the Vein
        /// </summary>
        [JsonProperty("config")]
        public Config VeinConfig { get; set; }

        /// <summary>
        /// A .NET representation of a Vein JSON's "config" property
        /// </summary>
        [Serializable, JsonObject]
        public class Config
        {
            /// <summary>
            /// The Rarity of the vein
            /// </summary>
            [JsonProperty("rarity")]
            public float Rarity { get; set; }

            /// <summary>
            /// The Density of the vein
            /// </summary>
            [JsonProperty("Density")]
            public float Density { get; set; }

            /// <summary>
            /// The min Y value at which this vein can spawn
            /// </summary>
            [JsonProperty("min_y")]
            public float Min_Y { get; set; }

            /// <summary>
            /// The max Y value at which this vein can spawn
            /// </summary>
            [JsonProperty("max_y")]
            public float Max_Y { get; set; }

            /// <summary>
            /// The Size of the Vein
            /// </summary>
            [JsonProperty("size")]
            public float Size { get; set; }

            /// <summary>
            /// The Height of the Vein
            /// </summary>
            [JsonProperty("height")]
            public float? Height { get; set; }

            /// <summary>
            /// The Radius of the Vein
            /// </summary>
            [JsonProperty("radius")]
            public float? Radius { get; set; }

            /// <summary>
            /// The blocks to replace with specific minerals
            /// </summary>
            [JsonProperty("blocks")]
            public BlockReplacements[] Blocks { get; set; }

            /// <summary>
            /// What indicator this vein uses
            /// </summary>
            [JsonProperty("indicator")]
            public Indicator Indicator { get; set; }

            private Config() { }
        }

        private Vein() { }
    }
}