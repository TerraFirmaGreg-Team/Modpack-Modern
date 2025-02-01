using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli
{
    [Serializable, JsonObject]
    public class Multiblock
    {
        [JsonProperty("pattern")]
        public string[][] Pattern { get; set; }

        [JsonProperty("mapping")]
        public Dictionary<string, string> Mapping { get; set; }

        [JsonProperty("symmetrical")]
        public bool Symmetrical { get; set; } = false;

        [JsonProperty("offset")]
        public int[] Offset { get; set; }
    }
}
