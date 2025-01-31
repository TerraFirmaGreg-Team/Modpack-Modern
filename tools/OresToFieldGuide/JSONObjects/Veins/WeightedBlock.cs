using Newtonsoft.Json;

namespace OresToFieldGuide.JSONObjects.Veins
{
    /// <summary>
    /// Represents a WeightedBlock, used in both <see cref="BlockReplacements"/> and <see cref="Indicator"/>
    /// </summary>
    [Serializable, JsonObject]
    public class WeightedBlock
    {
        /// <summary>
        /// What block is this, IE: "minecraft:stone"
        /// </summary>
        [JsonProperty("block")]
        public string Block { get; set; }

        /// <summary>
        /// The weight for this block, ranges between 0 and 100
        /// </summary>

        [JsonProperty("weight")]
        public float Weight { get; set; }

        private WeightedBlock() { }
    }
}