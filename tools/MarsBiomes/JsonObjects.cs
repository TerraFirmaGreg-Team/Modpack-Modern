using System;
using System.Text.Json.Serialization;

namespace MarsBiomes
{
	// dimension file

	class DimensionFile
	{
		[JsonPropertyName("type")]
		public required string Type { get; set; }

		[JsonPropertyName("generator")]
		public required GeneratorObject Generator { get; set; }
	}

	class GeneratorObject
	{
		[JsonPropertyName("type")]
		public required string Type { get; set; }

		[JsonPropertyName("biome_source")]
		public required BiomeSourceObject BiomeSource { get; set; }

		[JsonPropertyName("settings")]
		public required string Settings { get; set; }
	}

	class BiomeSourceObject
	{
		[JsonPropertyName("type")]
		public required string Type { get; set; }

		[JsonPropertyName("biomes")]
		public required List<BiomeObject> Biomes { get; set; }
	}

	class BiomeObject
	{
		[JsonPropertyName("biome")]
		public required string Name { get; set; }

		[JsonPropertyName("parameters")]
		public required ParametersObject Parameters { get; set; }
	}

	class ParametersObject
	{
		[JsonPropertyName("continentalness")]
		public required double[] Continentalness { get; set; }

		[JsonPropertyName("depth")]
		public required int Depth { get; set; }

		[JsonPropertyName("erosion")]
		public required double[] Erosion { get; set; }

		[JsonPropertyName("humidity")]
		public required double[] Humidity { get; set; }

		[JsonPropertyName("offset")]
		public required int Offset { get; set; }

		[JsonPropertyName("temperature")]
		public required double[] Temperature { get; set; }

		[JsonPropertyName("weirdness")]
		public required double[] Weirdness { get; set; }
	}

	// biome group file

	class BiomeGroupFile
	{
		[JsonPropertyName("groups")]
		public required List<BiomeGroupObject> Groups { get; set; }
	}


	class BiomeGroupObject
	{
		[JsonPropertyName("name")]
		public required string Name { get; set; }

		[JsonPropertyName("mars_biome")]
		public MarsBiomeObject? MarsBiome { get; set; }

		[JsonPropertyName("vanilla_biomes")]
		public required List<string> VanillaBiomes { get; set; }
	}

	class MarsBiomeObject
	{
		[JsonPropertyName("name")]
		public required string Name { get; set; }

		// TODO: Stone layers, gravel, sand
	}
}