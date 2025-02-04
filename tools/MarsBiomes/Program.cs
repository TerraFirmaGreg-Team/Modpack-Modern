using System.IO;
using System.Text.Json;

namespace MarsBiomes
{
	public class Program
	{
		const string c_inputDimsPath = "../../../unmodified_dimension.json";
		const string c_biomeGroupsPath = "../../../biome_groups.json";
		const string c_outputDimsPath = "../../../../../kubejs/data/ad_astra/dimension/mars.json";

		// TODO: Write the noise generator file as well

		public static void Main(string[] args)
		{
			// Read inputs

			var dim = JsonSerializer.Deserialize<DimensionFile>(File.ReadAllText(c_inputDimsPath));
			var groups = JsonSerializer.Deserialize<BiomeGroupFile>(File.ReadAllText(c_biomeGroupsPath));


			// Swap vanilla biomes for tfg ones

			foreach (var biome in dim.Generator.BiomeSource.Biomes)
			{
				foreach (var group in groups.Groups)
				{
					if (group.VanillaBiomes.Contains(biome.Name) && group.MarsBiome != null)
					{
						biome.Name = group.MarsBiome.Name;
					}
				}
			}

			// Outputs

			var options = new JsonSerializerOptions
			{
				WriteIndented = true
			};

			File.WriteAllText(c_outputDimsPath, JsonSerializer.Serialize(dim, options));
		}
	}
}