using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    [Serializable, JsonObject]
    public class MultiblockPage : PatchouliPage
    {
        public override string Type => "patchouli:multiblock";

        [JsonProperty("name")]
        public required string Name { get; set; }

        [JsonProperty("mutliblock_id")]
        public string Multiblock_ID { get; set; }

        [JsonProperty("mutliblock")]
        public Multiblock Multiblock { get; set; }

        [JsonProperty("enable_visualize")]
        public bool EnableVisualize { get; set; } = true;

        [JsonProperty("text")]
        public string? Text { get; set; }
    }
}
