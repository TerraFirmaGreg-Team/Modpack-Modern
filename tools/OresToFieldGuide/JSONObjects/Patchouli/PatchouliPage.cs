using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli
{
    [Serializable, JsonObject]
    public abstract class PatchouliPage
    {
        [JsonProperty("type")]
        public abstract string Type { get; }

        [JsonProperty("advancement")]
        public string? Advancement { get; set; }

        [JsonProperty("anchor")]
        public string? Anchor { get; set; }
    }
}
