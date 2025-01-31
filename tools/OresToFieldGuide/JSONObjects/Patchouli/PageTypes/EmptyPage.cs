using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    [JsonObject, Serializable]
    public class EmptyPage : PatchouliPage
    {
        public override string Type => "empty";

        [JsonProperty("draw_filler")]
        public bool DrawFiller { get; set; } = true;
    }
}
