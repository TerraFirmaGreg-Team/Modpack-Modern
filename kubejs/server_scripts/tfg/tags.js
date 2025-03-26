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
	
    event.add('forge:wax', 'tfg:paraffin_wax')
    event.add('forge:wax', 'firmalife:beeswax')

	// #endregion

	// #region Medicines

	event.add('tfg:antipoison_ingredients', 'tfc:plant/blood_lily')
	event.add('tfg:antipoison_ingredients', 'tfc:plant/pistia')
	event.add('tfg:antipoison_ingredients', 'tfc:powder/bismuthinite')
	event.add('tfg:antipoison_ingredients', 'gtceu:mica_dust')
	event.add('tfg:antipoison_ingredients', 'gtceu:fullers_earth_dust')

	event.add('tfg:poison_ingredients', 'tfc:plant/butterfly_milkweed')
	event.add('tfg:poison_ingredients', 'tfc:plant/grape_hyacinth')
	event.add('tfg:poison_ingredients', 'tfc:plant/lily_of_the_valley')
	event.add('tfg:poison_ingredients', 'tfc:plant/pulsatilla')
	event.add('tfg:poison_ingredients', 'minecraft:red_mushroom')

	event.add('tfg:regeneration_ingredients', 'tfc:plant/lilac')
	event.add('tfg:regeneration_ingredients', 'tfc:plant/field_horsetail')
	event.add('tfg:regeneration_ingredients', 'tfc:plant/licorice_fern')
	event.add('tfg:regeneration_ingredients', 'tfc:plant/sacred_datura')

	event.add('tfg:speed_ingredients', 'tfc:plant/labrador_tea')
	event.add('tfg:speed_ingredients', 'firmalife:raw_honey')
	
	event.add('tfg:slowness_ingredients', 'tfc:plant/marigold')

	event.add('tfg:weakness_ingredients', 'tfc:plant/laminaria')
	
	event.add('tfg:haste_ingredients', 'minecraft:sugar')
	event.add('tfg:haste_ingredients', 'afc:birch_sugar')
	event.add('tfg:haste_ingredients', 'afc:maple_sugar')

	event.add('tfg:water_breathing_ingredients', 'tfc:powder/saltpeter')
	event.add('tfg:water_breathing_ingredients', 'tfc:powder/charcoal')

	event.add('tfg:night_vision_ingredients', 'tfc:food/carrot')
	
	event.add('tfg:invisibility_ingredients', 'tfc:plant/calendula')

	event.add('tfg:fire_resistance_ingredients', 'tfc:plant/cattail')
	event.add('tfg:fire_resistance_ingredients', 'tfc:plant/meads_milkweed')
	event.add('tfg:fire_resistance_ingredients', 'firmalife:plant/bay_laurel')

	event.add('tfg:resistance_ingredients', 'tfc:plant/hibiscus')
	event.add('tfg:resistance_ingredients', 'gtceu:calcium_dust')

	event.add('tfg:instant_health_ingredients', 'tfc:plant/foxglove')
	event.add('tfg:instant_health_ingredients', 'tfc:plant/artists_conk')

	event.add('tfg:absorption_ingredients', 'tfc:plant/poppy')
	
	event.add('tfg:luck_ingredients', 'tfc:plant/goldenrod')
	event.add('tfg:luck_ingredients', 'tfc:plant/heather')
	// #endregion
}

const registerTFGBlockTags = (event) => {

	// #region Nether blocks

	event.add('minecraft:nether_carver_replaceables', 'tfg:rock/hardened_deepslate')
	event.add('minecraft:moss_replaceable', 'tfg:rock/hardened_deepslate')
	event.add('minecraft:base_stone_nether', 'tfg:rock/hardened_deepslate')
	event.add('beneath:nether_bush_plantable_on', 'tfg:rock/hardened_deepslate')
	event.add('tfc:grass_plantable_on', 'tfg:rock/hardened_deepslate')
	event.add('tfc:creeping_plantable_on', 'tfg:rock/hardened_deepslate')

	event.add('minecraft:nether_carver_replaceables', 'tfg:rock/hardened_blackstone')
	event.add('minecraft:moss_replaceable', 'tfg:rock/hardened_blackstone')
	event.add('minecraft:base_stone_nether', 'tfg:rock/hardened_blackstone')
	event.add('beneath:nether_bush_plantable_on', 'tfg:rock/hardened_blackstone')
	event.add('tfc:creeping_plantable_on', 'tfg:rock/hardened_blackstone')

	event.add('minecraft:nether_carver_replaceables', 'tfg:rock/hardened_dripstone')
	event.add('minecraft:base_stone_nether', 'tfg:rock/hardened_dripstone')

	// #endregion
}


const registerTFGBiomeTags = (event) => {

	// #region Nether biomes

	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/lush_hollow')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/lush_hollow')
	event.add('minecraft:allows_surface_slime_spawns', 'tfg:nether/lush_hollow')
	event.add('minecraft:spawns_cold_variant_frogs', 'tfg:nether/lush_hollow')
	
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/decaying_caverns')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/decaying_caverns')
	event.add('minecraft:allows_surface_slime_spawns', 'tfg:nether/decaying_caverns')
	event.add('minecraft:spawns_warm_variant_frogs', 'tfg:nether/decaying_caverns')
	event.add('minecraft:has_closer_water_fog', 'tfg:nether/decaying_caverns')
	
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/basalt_deltas')
	
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/ash_forest')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/ash_forest')

	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/lava_floes')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/lava_floes')
	
	event.add('minecraft:has_structure/nether_fossil', 'tfg:nether/webbed_lair')
	event.add('minecraft:has_structure/bastion_remnant', 'tfg:nether/webbed_lair')
	
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
	event.add('tfg:nether_veins', 'beneath:vein/sylvite')
	event.add('tfg:nether_veins', 'beneath:vein/crackrack_pipe')

	// Lower only
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_naquadah')

	// Full height
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_garnet')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_garnierite')
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
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_beryllium')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_cassiterite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_copper')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_garnet_tin')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_lapis')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_lubricant')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_manganese')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_monazite')
	event.add('tfg:nether_veins', 'tfg:nether/vein/nether_mica')
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
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/magma_blob')
	event.add('tfg:nether_underground_decoration', 'minecraft:spring_closed')

	// #endregion
}