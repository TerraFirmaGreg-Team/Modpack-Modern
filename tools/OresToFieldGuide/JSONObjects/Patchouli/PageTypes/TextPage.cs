using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    [Serializable, JsonObject]
    public class TextPage : PatchouliPage
    {
        public override string Type => "patchouli:text";

        [JsonProperty("text")]
        public required string Text { get; set; }

        [JsonProperty("title")]
        public string? Title { get; set; }
    }
}
