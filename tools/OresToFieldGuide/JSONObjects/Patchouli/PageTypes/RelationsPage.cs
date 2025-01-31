using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide.JSONObjects.Patchouli.PageTypes
{
    [Serializable, JsonObject]
    public class RelationsPage : PatchouliPage
    {
        public override string Type => "relations";

        public string? Entries { get; set; }
        public string? Title { get; set; }
        public string? Text { get; set; }
    }
}
