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
            return localizationTokens;
        }

        [JsonProperty("ore_index")]
        public string OreIndex { get; set; }

        [JsonProperty("planet_names")]
        public Dictionary<string, string> InternalPlanetNameToPlanet { get; set; }

        private LocalizationTokens() { }
    }
}
