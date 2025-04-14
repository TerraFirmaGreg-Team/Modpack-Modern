using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    /// <summary>
    /// A .NET Representation of a Patchouli Page for displaying Multiblocks
    /// <para></para>
    /// See also <see cref="Patchouli.Multiblock"/>
    /// <br></br>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/page-types/#multiblock-pages-patchoulimultiblock">Patchouli Docs</a>
    /// </summary>
    [Serializable, JsonObject]
    public class MultiblockPage : PatchouliPage
    {
        public override string Type => "patchouli:multiblock";

        [JsonProperty("name")]
        public required string Name { get; set; }

        [JsonProperty("multiblock")]
        public Multiblock Multiblock { get; set; }

        [JsonProperty("enable_visualize")]
        public bool EnableVisualize { get; set; } = true;

        [JsonProperty("text")]
        public string? Text { get; set; }
    }
}
