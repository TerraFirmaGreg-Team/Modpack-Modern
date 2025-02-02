using Newtonsoft.Json;

namespace OresToFieldGuide.JSONObjects.Patchouli
{
    /// <summary>
    /// A .NET represnetation of a Patchouli Entry
    /// <para></para>
    /// <a href="https://vazkiimods.github.io/Patchouli/docs/reference/entry-json">Patchouli Docs</a>
    /// </summary>
    [Serializable]
    public class PatchouliEntry
    {
        [JsonProperty("name")]
        public required string Name { get; set; }

        [JsonIgnore]
        public string FileNameWithoutExtension { get; set; }

        [JsonProperty("icon")]
        public required string Icon { get; set; }

        [JsonProperty("category")]
        public string Category { get; }

        [JsonProperty("read_by_default")]
        public bool ReadByDefault { get; set; }

        [JsonProperty("priority")]
        public bool Priority { get; set; } = false;

        [JsonProperty("advancement")]
        public string RequiredAdvancement { get; set; }

        [JsonProperty("secret")]
        public bool IsSecret { get; set; } = false;

        [JsonProperty("pages")]
        public PatchouliPage[] Pages { get; set; }

        /// <summary>
        /// Constructor
        /// </summary>
        public PatchouliEntry()
        {
            Category = "tfc:tfg_ores";
        }
    }
}