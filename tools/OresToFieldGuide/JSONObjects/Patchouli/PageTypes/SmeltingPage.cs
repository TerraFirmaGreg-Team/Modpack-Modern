using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    /// <summary>
    /// A .NET Representation of a Patchouli Page for displaying Smelting Recipes
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/page-types/#smelting-recipe-pages-patchoulismelting">Patchouli Docs</a>
    /// </summary>
    [Serializable, JsonObject]
    public class SmeltingPage : PatchouliPage
    {
        public override string Type => "patchouli:smelting";

        [JsonProperty("recipe")]
        public required string Recipe { get; set; }

        [JsonProperty("recipe2")]
        public string? Recipe2 { get; set; }

        [JsonProperty("title")]
        public string? Title { get; set; }

        [JsonProperty("text")]
        public string? Text { get; set; }
    }
}
