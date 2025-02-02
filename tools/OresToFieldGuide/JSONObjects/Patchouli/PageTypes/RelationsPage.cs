using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    /// <summary>
    /// A .NET Representation of a Patchouli Page for displaying Relations
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/page-types/#relations-pages-patchoulirelations">Patchouli Docs</a>
    /// </summary>
    [Serializable, JsonObject]
    public class RelationsPage : PatchouliPage
    {
        public override string Type => "patchouli:relations";

        public string[] Entries { get; set; }
        public string? Title { get; set; }
        public string? Text { get; set; }
    }
}
