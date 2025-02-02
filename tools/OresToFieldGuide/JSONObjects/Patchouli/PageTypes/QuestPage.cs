using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    [Serializable, JsonObject]
    public class QuestPage : PatchouliPage
    {
        public override string Type => "patchouli:quest";
        [JsonProperty("trigger")]
        public string Trigger { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
