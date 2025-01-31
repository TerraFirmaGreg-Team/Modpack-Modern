using Newtonsoft.Json;

namespace OresToFieldGuide.JSONObjects.Patchouli
{
    /// <summary>
    /// A .NET represnetation of a Patchouli Entry
    /// </summary>
    [Serializable]
    public class PatchouliEntry
    {
        /// <summary>
        /// The Display name for this Entry
        /// </summary>
        [JsonProperty("name")]
        public string Name { get; set; }

        /// <summary>
        /// The file name for this Entry
        /// </summary>
        public string FileName { get; set; }

        /// <summary>
        /// The Icon for this Entry, IE: "minecraft:stick"
        /// </summary>
        [JsonProperty("icon")]
        public string Icon { get; set; }

        /// <summary>
        /// The Category for this Entry, this is set to "tfc:tfg_ores"
        /// </summary>
        [JsonProperty("category")]
        public string Category { get; }

        /// <summary>
        /// Wether this page is marked as read by default
        /// </summary>
        [JsonProperty("read_by_default")]
        public bool ReadByDefault { get; set; }

        [JsonProperty("priority")]
        public bool Priority { get; set; } = false;

        [JsonProperty("advancement")]
        public string RequiredAdvancement { get; set; }

        [JsonProperty("secret")]
        public bool IsSecret { get; set; } = false;
        /// <summary>
        /// The pages within this Entry
        /// </summary>
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