using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    [Serializable, JsonObject]
    public class ImagePage : PatchouliPage
    {
        public override string Type => "image";

        [JsonProperty("images")]
        public required string[] Images { get; set; }

        [JsonProperty("title")]
        public string? Title { get; set; }

        [JsonProperty("border")]
        public bool Border { get; set; }

        [JsonProperty("text")]
        public string? Text { get; set; }
    }
}
