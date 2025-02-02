using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects
{
    [Serializable]
    public class LocalizationTokens
    {
        public static async Task<LocalizationTokens> FromJSON(string jsonFilePath)
        {
            string json = await File.ReadAllTextAsync(jsonFilePath);

            var localizationTokens = JsonConvert.DeserializeObject<LocalizationTokens>(json);
            localizationTokens.LocaleName = Path.GetFileNameWithoutExtension(jsonFilePath);
            return localizationTokens;
        }

        public string LocaleName { get; private set; }
        [JsonProperty("ore_index_format")]
        public string OreIndex { get; set; }

        [JsonProperty("vein_index_format")]
        public string VeinIndex { get; set; }

        [JsonProperty("planet_names")]
        public Dictionary<string, string> PlanetDictionary { get; set; }

        [JsonProperty("keywords")]
        public Dictionary<string, string> KeywordDictionary { get; set; }

        [JsonProperty("rocks")]
        public Dictionary<string, string> RockDictionary { get; set; }

        [JsonProperty("veins")]
        public Dictionary<string, string> VeinTypeDictionary { get; set; }
        private LocalizationTokens() { }
    }
}
