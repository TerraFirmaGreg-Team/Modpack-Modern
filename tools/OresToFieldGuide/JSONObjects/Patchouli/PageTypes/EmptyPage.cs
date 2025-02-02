using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    /// <summary>
    /// A .NET Representation of a Patchouli Page that's Empty
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/page-types/#empty-pages-patchouliempty">Patchouli Docs</a>
    /// </summary>
    [JsonObject, Serializable]
    public class EmptyPage : PatchouliPage
    {
        public override string Type => "patchouli:empty";

        [JsonProperty("draw_filler")]
        public bool DrawFiller { get; set; } = true;
    }
}
