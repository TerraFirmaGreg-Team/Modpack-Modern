using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli
{
    /// <summary>
    /// A JSON Object used to define a MultiBlock structure in Patchouli
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/multiblocks">Patchouli Docs</a>
    /// </summary>
    [Serializable, JsonObject]
    public class Multiblock
    {
        [JsonProperty("mapping")]
        public Dictionary<string, string> Mapping { get; set; }

        [JsonProperty("pattern")]
        public string[][] Pattern { get; set; }

        [JsonProperty("symmetrical")]
        public bool? Symmetrical { get; set; } = null;

        [JsonProperty("offset")]
        public int[] Offset { get; set; }
    }
}
