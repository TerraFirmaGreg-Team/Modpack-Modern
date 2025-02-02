using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    /// <summary>
    /// A .NET Representation of a Patchouli Page for displaying Text
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/page-types/#text-pages-patchoulitext">Patchouli Docs</a>
    /// </summary>
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
