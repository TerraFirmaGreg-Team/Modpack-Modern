"use strict";

function registerTFGOverworldBiomeTags(event) {

	// Structures
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:plains')
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:plateau')
	event.add('tfg:has_structure/plains_temperate_0', 'tfc:highlands')

	event.add('tfg:has_structure/aqueduct', 'tfc:plains')
	event.add('tfg:has_structure/aqueduct', 'tfc:highlands')
	event.add('tfg:has_structure/aqueduct', 'tfc:lowlands')
	event.add('tfg:has_structure/aqueduct', 'tfc:badlands')

	event.add('tfg:has_structure/ocean_moai_0', 'tfc:volcanic_oceanic_mountains')
	event.add('tfg:has_structure/ocean_moai_0', 'tfc:volcanic_mountains')

	event.add('tfg:has_structure/illages', 'tfc:plains')
	event.add('tfg:has_structure/illages', 'tfc:hills')
	event.add('tfg:has_structure/illages', 'tfc:rolling_hills')
	event.add('tfg:has_structure/illages', 'tfc:badlands')
	event.add('tfg:has_structure/illages', 'tfc:plateau')
	event.add('tfg:has_structure/illages', 'tfc:old_mountains')

	event.add('tfg:has_structure/illager_camp', 'tfc:badlands')
	event.add('tfg:has_structure/illager_camp', 'tfc:canyons')
	event.add('tfg:has_structure/illager_camp', 'tfc:highlands')
	event.add('tfg:has_structure/illager_camp', 'tfc:hills')
	event.add('tfg:has_structure/illager_camp', 'tfc:inverted_badlands')
	event.add('tfg:has_structure/illager_camp', 'tfc:low_canyons')
	event.add('tfg:has_structure/illager_camp', 'tfc:lowlands')
	event.add('tfg:has_structure/illager_camp', 'tfc:mountains')
	event.add('tfg:has_structure/illager_camp', 'tfc:oceanic_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfc:old_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfc:plains')
	event.add('tfg:has_structure/illager_camp', 'tfc:plateau')
	event.add('tfg:has_structure/illager_camp', 'tfc:rolling_hills')
	event.add('tfg:has_structure/illager_camp', 'tfc:salt_marsh')
	event.add('tfg:has_structure/illager_camp', 'tfc:shore')
	event.add('tfg:has_structure/illager_camp', 'tfc:tidal_flats')
	event.add('tfg:has_structure/illager_camp', 'tfc:volcanic_mountains')
	event.add('tfg:has_structure/illager_camp', 'tfc:volcanic_oceanic_mountains')

	event.add('tfg:has_structure/illager_roaming', 'tfc:highlands')
	event.add('tfg:has_structure/illager_roaming', 'tfc:hills')
	event.add('tfg:has_structure/illager_roaming', 'tfc:lowlands')
	event.add('tfg:has_structure/illager_roaming', 'tfc:plains')
	event.add('tfg:has_structure/illager_roaming', 'tfc:plateau')
	event.add('tfg:has_structure/illager_roaming', 'tfc:rolling_hills')
	event.add('tfg:has_structure/illager_roaming', 'tfc:salt_marsh')

	event.add('tfg:never_has_structure/illages', '#tfc:is_lake')
	event.add('tfg:never_has_structure/illages', '#tfc:is_ocean')
	event.add('tfg:never_has_structure/illages', '#tfc:is_river')

	// Kaolin
	event.add("tfc:kaolin_clay_spawns_in", "tfc:rolling_hills");

	global.TFC_BIOMES.forEach(biome => {
		event.add('tfg:overworld_biomes', biome);
	})
}

function registerTFGOverworldPlacedFeatures(event) {

	// Rose quartz
	event.add('tfc:in_biome/surface_decoration/ocean', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/ocean_reef', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/deep_ocean', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/deep_ocean_trench', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/shore', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/tidal_flats', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/lowlands', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/salt_marsh', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/plains', 'tfg:earth/rose_quartz/rose_quartz')
	event.add('tfc:in_biome/surface_decoration/lake', 'tfg:earth/rose_quartz/rose_quartz')

	// Tarkianite
	event.add('tfc:in_biome/veins', 'tfg:earth/vein/normal_tarkianite')

	// Add back the non-ore ones
    event.add("tfc:in_biome/veins", "tfc:vein/gravel");
    event.add("tfc:in_biome/veins", "tfc:vein/kaolin_disc");
    event.add("tfc:in_biome/veins", "tfc:vein/granite_dike");
    event.add("tfc:in_biome/veins", "tfc:vein/diorite_dike");
    event.add("tfc:in_biome/veins", "tfc:vein/gabbro_dike");

    // Geodes
    event.add("tfc:in_biome/veins", "tfg:earth/geode/amethyst");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/barite");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/calcite");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/gypsum");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/opal");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/pyrite");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/quartzite");

    // Crops
    event.add("tfc:feature/crops", "tfg:earth/sunflower_patch");
    event.add("tfc:feature/crops", "tfg:earth/rapeseed_patch");
    event.add("tfc:feature/crops", "tfg:earth/flax_patch");

    // Other decoration
    event.add("tfc:in_biome/underground_decoration", "tfg:glow_lichen");
    event.add("tfc:in_biome/underground_decoration", "tfg:earth/sulfur_patch");
    event.add("tfc:in_biome/underground_decoration", "tfg:earth/oil_spout");
}