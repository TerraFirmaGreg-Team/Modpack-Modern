using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    /// <summary>
    /// A .NET Representation of a Patchouli Page for displaying Images
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/page-types/#image-pages-patchouliimage">Patchouli Docs</a>
    /// </summary>
    [Serializable, JsonObject]
    public class ImagePage : PatchouliPage
    {
        public override string Type => "patchouli:image";

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
