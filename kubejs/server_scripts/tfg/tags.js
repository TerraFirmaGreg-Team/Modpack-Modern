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
	
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/spider_caves')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/spider_caves')

	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/gneiss_caves')
	// TODO: other metamorphic caves

	// #endregion
}


const registerTFGPlacedFeatures = (event) => {
	
	event.add('tfg:nether_veins', 'beneath:vein/cursecoal')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_garnet')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_gold')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_hematite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_limonite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_magnetite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_molybdenum')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_naquadah')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_quartz')

	// TODO: add biomes for other bottom rocks: gneiss, schist, diorite, granite, gabbro
	// TODO: re-enable deepslate ore (requires tfg-core edit)

	event.add('tfg:nether_underground_decoration', 'beneath:magma_rhyolite')
	event.add('tfg:nether_underground_decoration', 'beneath:magma_basalt')
	event.add('tfg:nether_underground_decoration', 'beneath:magma_andesite')
	event.add('tfg:nether_underground_decoration', 'beneath:magma_dacite')

	event.add('tfg:nether_top_layer_modification', 'tfg:nether/hardening')
}