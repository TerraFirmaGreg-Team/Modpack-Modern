using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    /// <summary>
    /// A .NET Representation of a Patchouli Page for displaying Links
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/page-types/#link-pages-patchoulilink">Patchouli Docs</a>
    /// </summary>
    [Serializable, JsonObject]
    public class LinkPage : TextPage
    {
        public override string Type => "patchouli:link";

        [JsonProperty("url")]
        public required string URL { get; set; }

        [JsonProperty("link_text")]
        public required string LinkText { get; set; }
    }
}
