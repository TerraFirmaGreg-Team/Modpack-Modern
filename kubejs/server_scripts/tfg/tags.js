const registerTFGItemTags = (event) => {
	// #region Paper from wood

	event.add('tfg:hardwood_strips', 'tfg:hardwood_strip')
	event.add('tfg:hardwood_strips', 'tfg:soaked_hardwood_strip')
	//Adding any of these dusts to the forge dusts/wood tag will make it so you can craft softwood pulp using hardwood pulp. which is not ok.
	event.add('tfg:wood_dusts', 'gtceu:hardwood_dust')
	event.add('tfg:tiny_wood_dusts', 'gtceu:tiny_hardwood_dust')
	event.add('tfg:small_wood_dusts', 'gtceu:small_hardwood_dust')
	event.add('tfg:wood_dusts', 'gtceu:wood_dust')
	event.add('tfg:tiny_wood_dusts', 'gtceu:tiny_wood_dust')
	event.add('tfg:small_wood_dusts', 'gtceu:small_wood_dust')

	// #endregion
}

const registerTFGBlockTags = (event) => {

	// #region Nether blocks

	event.add('minecraft:nether_carver_replaceables', 'tfg:hardened_deepslate')
	event.add('minecraft:moss_replaceable', 'tfg:hardened_deepslate')
	event.add('minecraft:base_stone_nether', 'tfg:hardened_deepslate')
	event.add('beneath:nether_bush_plantable_on', 'tfg:hardened_deepslate')
	event.add('tfc:grass_plantable_on', 'tfg:hardened_deepslate')
	event.add('tfc:creeping_plantable_on', 'tfg:hardened_deepslate')

	event.add('minecraft:nether_carver_replaceables', 'tfg:hardened_blackstone')
	event.add('minecraft:moss_replaceable', 'tfg:hardened_blackstone')
	event.add('minecraft:base_stone_nether', 'tfg:hardened_blackstone')
	event.add('beneath:nether_bush_plantable_on', 'tfg:hardened_blackstone')
	event.add('tfc:grass_plantable_on', 'tfg:hardened_blackstone')
	event.add('tfc:creeping_plantable_on', 'tfg:hardened_blackstone')

	// #endregion
}


const registerTFGBiomeTags = (event) => {

	// #region Nether biomes

	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/lush_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/lush_caves')
	event.add('minecraft:allows_surface_slime_spawns', 'tfg:nether/lush_caves')
	event.add('minecraft:spawns_cold_variant_frogs', 'tfg:nether/lush_caves')
	
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/fungi_forest')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/fungi_forest')
	event.add('minecraft:allows_surface_slime_spawns', 'tfg:nether/fungi_forest')
	event.add('minecraft:spawns_warm_variant_frogs', 'tfg:nether/fungi_forest')
	event.add('minecraft:has_closer_water_fog', 'tfg:nether/fungi_forest')
	
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/basalt_deltas')
	
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/ash_forest')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/ash_forest')

	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/lava_rivers')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/lava_rivers')
	
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/spider_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/spider_caves')
	
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/gneiss_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/gneiss_caves')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/diorite_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/diorite_caves')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/gabbro_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/gabbro_caves')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/granite_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/granite_caves')
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/schist_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/schist_caves')

	// #endregion
}


const registerTFGPlacedFeatures = (event) => {
	
	// #region Nether ores

	event.add('tfg:nether_veins', 'beneath:vein/cursecoal')
	event.add('tfg:nether_veins', 'beneath:vein/crackrack_pipe')

	// Lower only
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_naquadah')

	// Full height
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_garnet')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_gold')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_graphite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_hematite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_limonite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_magnetite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_molybdenum')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_pitchblende')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_quartz')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_sapphire')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_scheelite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_sheldonite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_topaz')
	
	// Upper only
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_apatite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_basaltic_sands')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_bauxite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_cassiterite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_copper')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_garnet_tin')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_garnierite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_lapis')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_lubricant')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_manganese')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_monazite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_olivine')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_redstone')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_saltpeter')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_silver')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_sphalerite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_sulfur')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_tetrahedrite')

	// #endregion


	// #region Nether decorations

	event.add('tfg:nether_underground_decoration', 'minecraft:spring_open')
	event.add('tfg:nether_underground_decoration', 'beneath:magma_basalt')
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/magma_granite')
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/magma_diorite')
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/magma_gabbro')
	event.add('tfg:nether_underground_decoration', 'minecraft:spring_closed')

	event.add('tfg:nether_top_layer_modification', 'tfg:nether/hardening')

	// #endregion
}