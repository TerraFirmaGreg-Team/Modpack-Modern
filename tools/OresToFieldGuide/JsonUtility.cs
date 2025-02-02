using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace OresToFieldGuide
{
    public class JsonPropertyConverter : JsonConverter
    {
        public override bool CanConvert(Type objectType)
        {
            return true; // We want to apply this converter for all object types
        }

        public override void WriteJson(JsonWriter writer, object value, JsonSerializer serializer)
        {
            var properties = value.GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance);

            writer.WriteStartObject();

            foreach (var property in properties)
            {
                // Check if the property has the JsonProperty attribute
                var jsonPropertyAttribute = property.GetCustomAttribute<JsonPropertyAttribute>();
                if (jsonPropertyAttribute != null)
                {
                    // Get the value of the property
                    var propertyValue = property.GetValue(value);

                    // Write the property name and its value
                    writer.WritePropertyName(jsonPropertyAttribute.PropertyName ?? property.Name);
                    serializer.Serialize(writer, propertyValue);
                }
            }

            writer.WriteEndObject();
        }

        public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
        {
            throw new NotImplementedException(); // We are only focusing on serialization here
        }
    }
}
