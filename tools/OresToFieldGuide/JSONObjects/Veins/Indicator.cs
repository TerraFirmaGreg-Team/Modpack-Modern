using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Veins
{
    /// <summary>
    /// A .NET representation of a Vein's Config's Indicator property
    /// </summary>
    [Serializable, JsonObject]
    public class Indicator
    {
        /// <summary>
        /// What Blocks this Indicator has
        /// </summary>
        [JsonProperty("blocks")]
        public WeightedBlock[] Blocks { get; set; }

        private Indicator() { }
    }
}
