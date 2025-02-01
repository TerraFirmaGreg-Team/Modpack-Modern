using Newtonsoft.Json;

namespace OresToFieldGuide.JSONObjects.Veins
{
    /// <summary>
    /// A .NET representation of a Vein's Config's "blocks" property
    /// </summary>
    [Serializable, JsonObject]
    public class BlockReplacements
    {
        /// <summary>
        /// What block should we replace
        /// </summary>
        [JsonProperty("replace")]
        public string[] Replace { get; set; }

        /// <summary>
        /// What blocks are we using for replacements
        /// </summary>
        [JsonProperty("with")]
        public WeightedBlock[] With { get; set; }

        private BlockReplacements() { }
    }
}