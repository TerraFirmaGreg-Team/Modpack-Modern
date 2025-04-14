using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    /// <summary>
    /// A .NET Representation of a Patchouli Page for displaying Entities
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/patchouli-basics/page-types/#entity-pages-patchoulientity">Patchouli Docs</a>
    /// </summary>
    [Serializable, JsonObject]
    public class EntityPage : PatchouliPage
    {
        public override string Type => "patchouli:entity";

        [JsonProperty("entity")]
        public required string Entity { get; set; }

        [JsonProperty("scale")]
        public float Scale { get; set; } = 1.0f;

        [JsonProperty("offset")]
        public float Offset { get; set; } = 0;

        [JsonProperty("rotate")]
        public bool Rotate { get; set; } = true;

        [JsonProperty("default_rotation")]
        public float DefaultRotation { get; set; }

        [JsonProperty("name")]
        public string? Name { get; set; }

        [JsonProperty("text")]
        public string? Text { get; set; }
    }
}
