using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    /// <summary>
    /// A .NET Representation of a Patchouli Page for displaying Patchouli Specific Quests
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/page-types/#quest-pages-patchouliquest">Patchouli Docs</a>
    /// </summary>
    [Serializable, JsonObject]
    public class QuestPage : PatchouliPage
    {
        public override string Type => "patchouli:quest";
        [JsonProperty("trigger")]
        public string Trigger { get; set; }

        [JsonProperty("title")]
        public string Title { get; set; }

        [JsonProperty("text")]
        public string Text { get; set; }
    }
}
