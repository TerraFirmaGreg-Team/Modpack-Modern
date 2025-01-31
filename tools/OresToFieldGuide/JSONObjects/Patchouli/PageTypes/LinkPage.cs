using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    [Serializable, JsonObject]
    public class LinkPage : TextPage
    {
        public override string Type => "link";

        [JsonProperty("url")]
        public required string URL { get; set; }

        [JsonProperty("link_text")]
        public required string LinkText { get; set; }
    }
}
