// priority: 0
"use strict";

const registerAdAstraFluidTags = (event) => {

	global.AD_ASTRA_DISABLED_FLUIDS.forEach(fluid => {
		event.removeAllTagsFrom(fluid)
		event.add('c:hidden_from_recipe_viewers', fluid)
	})

	// Using this to represent 'breathable air' instead of oxygen
	event.removeAllTagsFrom('ad_astra:oxygen')

	
	event.removeAll('ad_astra:fuel')
	event.removeAll('ad_astra:efficient_fuel')

	event.add('ad_astra:tier_1_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_2_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_3_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_4_rocket_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_5_rocket_fuel', 'gtceu:rocket_fuel')

	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:rocket_fuel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:bio_diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:cetane_boosted_diesel')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:gasoline')
	event.add('ad_astra:tier_1_rover_fuel', 'gtceu:high_octane_gasoline')

	event.add('ad_astra:freezes_in_space', 'tfc:salt_water')
	event.add('ad_astra:freezes_in_space', 'tfc:spring_water')
	event.add('ad_astra:evaporates_in_space', 'tfc:salt_water')
	event.add('ad_astra:evaporates_in_space', 'tfc:spring_water')
	event.add('ad_astra:evaporates_in_space', '#tfc:alcohols')

	global.BREATHABLE_COMPRESSED_AIRS.forEach(x => {
		event.add('ad_astra:zip_gun_propellants', x)
	})
}

const registerAdAstraItemTags = (event) => {

	global.AD_ASTRA_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('c:hidden_from_recipe_viewers', 'ad_astra:alphacene_mushroom')
	event.add('c:hidden_from_recipe_viewers', 'ad_astra:strophar_mushroom')
	
	event.add('gtceu:ppe_armor', '#ad_astra:space_suit_items')
	event.add('minecraft:trimmable_armor', '#ad_astra:space_suit_items')
	
	event.add('forge:cobblestone', 'ad_astra:moon_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:mars_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:venus_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:mercury_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:glacio_cobblestone')

	// Insulation Tier 1
	event.add('forge:insulation_t1', 'gtceu:borosilicate_glass_dust')
	event.add('forge:insulation_t1', 'gtceu:vitrified_asbestos_dust')
	
	//Insulation Tier 2
	event.add('forge:insulation_t2/sheet', 'tfg:aes_insulation_sheet')
	event.add('forge:insulation_t2/roll', 'tfg:aes_insulation_roll')
	
	//Insulation Tier3
	event.add('forge:insulation_t3/foam', 'tfg:aes_polyurethane')
	event.add('forge:insulation_t3/sheet', 'tfg:mli_shielding')
	event.add('forge:insulation_t3/cryo', 'tfg:silica_aerogel')
	
	event.add('forge:aerogels', 'tfg:silica_aerogel')

	//Rocket Engines
	event.add('ad_astra:rocket_engine', 'ad_astra:steel_engine')
	event.add('ad_astra:rocket_engine', 'ad_astra:desh_engine')
	event.add('ad_astra:rocket_engine', 'ad_astra:ostrum_engine')
	
	//Rocket Tank
	event.add('ad_astra:rocket_tank', 'ad_astra:ostrum_tank')
	
	// Deco blocks
	const DECO_BLOCKS = [ 'iron', 'steel', 'desh', 'calorite', 'ostrum' ];
	DECO_BLOCKS.forEach(block => {
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_factory_block`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_plating`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_panel`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_pillar`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:${block}_plateblock`)
		event.add(`tfg:ad_astra_${block}_blocks`, `ad_astra:encased_${block}_block`)
	})

	event.add('forge:storage_blocks/etrium', 'ad_astra:etrium_block')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:etrium_factory_block')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:encased_etrium_block')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:etrium_plateblock')
	event.add('tfg:ad_astra_etrium_blocks', 'ad_astra:etrium_panel')

	event.add('tfc:foods', 'ad_astra:cheese')
	event.add('tfc:foods/dairy', 'ad_astra:cheese')
	event.add('tfc:foods/usable_in_sandwich', 'ad_astra:cheese')
	event.add('tfc:foods/usable_in_jam_sandwich', 'ad_astra:cheese')
	event.add('tfc:foods/usable_in_jam_sandwich_2', 'ad_astra:cheese')
	event.add('firmalife:foods/cheeses', 'ad_astra:cheese')

	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_helmet')
	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_chestplate')
	event.add('ad_astra:space_suit_items', 'gtceu:advanced_quarktech_chestplate')
	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_leggings')
	event.add('ad_astra:space_suit_items', 'gtceu:quarktech_boots')

	event.add('ad_astra:freeze_resistant_armor', 'gtceu:quarktech_helmet')
	event.add('ad_astra:freeze_resistant_armor', 'gtceu:quarktech_chestplate')
	event.add('ad_astra:freeze_resistant_armor', 'gtceu:advanced_quarktech_chestplate')
	event.add('ad_astra:freeze_resistant_armor', 'gtceu:quarktech_leggings')
	event.add('ad_astra:freeze_resistant_armor', 'gtceu:quarktech_boots')
	
	event.add('ad_astra:heat_resistant_armor', 'gtceu:quarktech_helmet')
	event.add('ad_astra:heat_resistant_armor', 'gtceu:quarktech_chestplate')
	event.add('ad_astra:heat_resistant_armor', 'gtceu:advanced_quarktech_chestplate')
	event.add('ad_astra:heat_resistant_armor', 'gtceu:quarktech_leggings')
	event.add('ad_astra:heat_resistant_armor', 'gtceu:quarktech_boots')
	
	event.remove('minecraft:wool', 'ad_astra:glacian_fur')

	event.add('tfc:compost_greens', 'ad_astra:aeronos_cap')
	event.add('tfc:compost_greens', 'ad_astra:strophar_cap')

	// these are log tags
	event.remove('ad_astra:aeronos_caps', 'ad_astra:aeronos_cap')
	event.remove('ad_astra:strophar_caps', 'ad_astra:strophar_cap')
	event.add('minecraft:wart_blocks', 'ad_astra:aeronos_cap')
	event.add('minecraft:wart_blocks', 'ad_astra:strophar_cap')

	event.add('tfc:makes_tannin', '#ad_astra:glacian_logs')
	event.add('tfc:makes_tannin', '#tfc:crimson_logs')
	event.add('tfc:makes_tannin', '#tfc:warped_logs')
		
	global.AD_ASTRA_WOOD.forEach(wood => {

		if (wood.log) {
			event.add('minecraft:logs', wood.log)
			event.add('minecraft:logs_that_burn', wood.log)
		}

		if (wood.stripped_log) {
			event.add('minecraft:logs', wood.stripped_log)
			event.add('minecraft:logs_that_burn', wood.stripped_log)
		}

		if (wood.isHardwood === true) {
			event.add('tfg:hardwood', wood.logs)
		} else {
			event.add('tfg:softwood', wood.logs)
		}
	})

}

const registerAdAstraBlockTags = (event) => {

	global.AD_ASTRA_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	// All new stones
	global.EXTRATERRESTRIAL_RAW_ROCKS.forEach(rock => {
		event.add('forge:stone', rock)
		event.add('tfc:breaks_when_isolated', rock)
		event.add('tfc:rock/raw', rock)
		event.add('minecraft:mineable/pickaxe', rock)
		event.add('tfc:can_carve', rock)
		// Collapse tags also require a collapse recipe to work.
		// Don't add the recipe if you don't want them to actually collapse!
		event.add('tfc:can_collapse', rock)
		event.add('tfc:can_trigger_collapse', rock)
		event.add('tfc:can_start_collapse', rock)
		event.add('tfc:powderkeg_breaking_blocks', rock)
		event.add('tfc:bloomery_insulation', rock)
		event.add('firmalife:oven_insulation', rock)
		event.add('tfc:forge_insulation', rock)
	})

	global.EXTRATERRESTRIAL_HARDENED_ROCKS.forEach(rock => {
		event.add('minecraft:mineable/pickaxe', rock)
		event.add('tfc:can_collapse', rock)
		event.add('tfc:can_trigger_collapse', rock)
		event.add('tfc:powderkeg_breaking_blocks', rock)
		event.add('tfc:bloomery_insulation', rock)
		event.add('firmalife:oven_insulation', rock)
		event.add('tfc:forge_insulation', rock)
		event.add('tfc:can_carve', rock)
	})

	// Moon	
	event.add('ad_astra:moon_stone_replaceables', 'ad_astra:moon_sand')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/hardened_moon_stone')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:sand/white')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:sand/black')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/rhyolite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/andesite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/gravel/dacite')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/gravel_moon')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/gravel_moon_deepslate')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/gravel_glacio')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/hardened_moon_deepslate')
	event.add('ad_astra:moon_stone_replaceables', 'ad_astra:glacio_stone')
	event.add('ad_astra:moon_stone_replaceables', 'tfg:rock/hardened_glacio_stone')
	event.add('ad_astra:moon_stone_replaceables', 'ad_astra:glacio_cobblestone')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/basalt')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/gabbro')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/diorite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/rhyolite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/rhyolite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/andesite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/andesite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/raw/dacite')
	event.add('ad_astra:moon_stone_replaceables', 'tfc:rock/hardened/dacite')

	// Mars
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/dacite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/dacite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/dacite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/basalt')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/basalt')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/basalt')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/gabbro')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/gabbro')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/gabbro')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/diorite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/diorite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/diorite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/rhyolite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/rhyolite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/rhyolite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/andesite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/andesite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/andesite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/chert')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/chert')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/chert')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/conglomerate')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/conglomerate')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/conglomerate')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/claystone')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/claystone')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/claystone')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/limestone')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/limestone')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/limestone')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/dolomite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/dolomite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/dolomite')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/raw/shale')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/hardened/shale')
	event.add('ad_astra:mars_stone_replaceables', 'tfc:rock/gravel/shale')
	event.add('ad_astra:mars_stone_replaceables', 'ad_astra:mars_stone')
	event.add('ad_astra:mars_stone_replaceables', 'tfg:rock/hardened_mars_stone')
	event.add('ad_astra:mars_stone_replaceables', 'tfg:rock/gravel_mars')
	event.add('ad_astra:mars_stone_replaceables', 'minecraft:red_sandstone')
	event.add('ad_astra:mars_stone_replaceables', 'ad_astra:venus_stone')
	event.add('ad_astra:mars_stone_replaceables', 'ad_astra:venus_sandstone')
	event.add('ad_astra:mars_stone_replaceables', 'tfg:rock/hardened_venus_stone')
	event.add('ad_astra:mars_stone_replaceables', 'tfg:rock/gravel_venus')
	event.add('ad_astra:mars_stone_replaceables', 'gtceu:red_granite')
	event.add('ad_astra:mars_stone_replaceables', 'tfg:rock/hardened_red_granite')
	event.add('ad_astra:mars_stone_replaceables', 'tfg:rock/gravel_red_granite')
	event.add('ad_astra:mars_stone_replaceables', 'create:ochrum')
	event.add('tfg:mars_soil', 'minecraft:red_sand')
	event.add('tfg:mars_soil', 'ad_astra:mars_sand')
	event.add('tfg:mars_soil', 'ad_astra:venus_sand')
	event.add('tfg:mars_soil', 'tfg:rock/gravel_venus')
	event.add('tfg:mars_soil', 'tfg:rock/gravel_mars')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/dacite')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/basalt')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/gabbro')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/diorite')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/rhyolite')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/andesite')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/conglomerate')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/claystone')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/limestone')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/dolomite')
	event.add('tfg:mars_soil', 'tfc:rock/gravel/shale')
	event.add('tfg:mars_soil', 'tfc:sand/black')
	event.add('tfg:mars_soil', 'tfc:sand/red')
	event.add('tfg:mars_soil', 'tfc:sand/pink')
	event.add('tfg:mars_soil', 'tfg:grass/mars_dirt')
	event.add('tfg:mars_soil', 'tfg:grass/mars_clay_dirt')
	event.add('tfg:mars_soil', 'tfg:grass/amber_mycelium')
	event.add('tfg:mars_soil', 'tfg:grass/rusticus_mycelium')
	event.add('tfg:mars_soil', 'tfg:grass/sangnum_mycelium')
	event.add('tfg:mars_soil', 'tfg:grass/amber_clay_mycelium')
	event.add('tfg:mars_soil', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfg:mars_soil', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfg:mars_soil', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfg:mars_soil', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfg:mars_soil', 'tfg:grass/sangnum_kaolin_mycelium')
	event.add('ad_astra:mars_stone_replaceables', '#tfg:mars_soil')
	event.add('minecraft:animals_spawnable_on', '#tfg:mars_soil')
	event.add('minecraft:animals_spawnable_on', '#tfg:mars_plants')
	event.add('minecraft:valid_spawn', '#minecraft:animals_spawnable_on')
	
	event.add('tfc:can_carve', '#ad_astra:moon_stone_replaceables')
	event.add('tfc:can_carve', '#ad_astra:mars_stone_replaceables')

	event.add('minecraft:rabbits_spawnable_on', '#ad_astra:moon_stone_replaceables')
	event.add('species:limpet_spawnable_on', '#ad_astra:moon_stone_replaceables')

	event.add('tfc:can_landslide', 'ad_astra:moon_sand')
	event.add('tfc:can_landslide', 'ad_astra:mars_sand')
	event.add('tfc:can_landslide', 'ad_astra:venus_sand')
	event.add('tfc:can_landslide', 'minecraft:red_sand')

	event.add('tfc:can_landslide', 'ad_astra:moon_cobblestone')
	event.add('tfc:can_landslide', 'ad_astra:mars_cobblestone')
	event.add('tfc:can_landslide', 'ad_astra:venus_cobblestone')
	event.add('tfc:can_landslide', 'ad_astra:mercury_cobblestone')
	event.add('tfc:can_landslide', 'ad_astra:glacio_cobblestone')
	event.add('tfc:can_landslide', 'gtceu:red_granite_cobblestone')

	event.add('forge:cobblestone', 'ad_astra:moon_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:mars_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:venus_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:mercury_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:glacio_cobblestone')

	event.add('tfc:can_landslide', 'ad_astra:moon_cobblestone_slab')
	event.add('tfc:can_landslide', 'ad_astra:mars_cobblestone_slab')
	event.add('tfc:can_landslide', 'ad_astra:venus_cobblestone_slab')
	event.add('tfc:can_landslide', 'ad_astra:mercury_cobblestone_slab')
	event.add('tfc:can_landslide', 'ad_astra:glacio_cobblestone_slab')

	event.add('tfc:can_landslide', 'ad_astra:moon_cobblestone_stairs')
	event.add('tfc:can_landslide', 'ad_astra:mars_cobblestone_stairs')
	event.add('tfc:can_landslide', 'ad_astra:venus_cobblestone_stairs')
	event.add('tfc:can_landslide', 'ad_astra:mercury_cobblestone_stairs')
	event.add('tfc:can_landslide', 'ad_astra:glacio_cobblestone_stairs')

	event.add('tfg:rock_stairs', 'ad_astra:moon_stone_stairs')
	event.add('tfg:rock_stairs', 'ad_astra:mars_stone_stairs')
	event.add('tfg:rock_stairs', 'ad_astra:venus_stone_stairs')
	event.add('tfg:rock_stairs', 'ad_astra:mercury_stone_stairs')
	event.add('tfg:rock_stairs', 'ad_astra:glacio_stone_stairs')

	event.add('tfg:rock_slabs', 'ad_astra:moon_stone_slab')
	event.add('tfg:rock_slabs', 'ad_astra:mars_stone_slab')
	event.add('tfg:rock_slabs', 'ad_astra:venus_stone_slab')
	event.add('tfg:rock_slabs', 'ad_astra:mercury_stone_slab')
	event.add('tfg:rock_slabs', 'ad_astra:glacio_stone_slab')

	event.add('ad_astra:destroyed_in_space', '#tfc:wild_fruits')
	event.add('ad_astra:destroyed_in_space', '#minecraft:saplings')

	event.remove('ad_astra:strophar_caps', 'ad_astra:strophar_cap')
	event.remove('ad_astra:aeronos_caps', 'ad_astra:aeronos_cap')

	event.add('tfg:heightmap_ignore', 'ad_astra:strophar_cap')
	event.add('tfg:heightmap_ignore', 'ad_astra:strophar_stem')
	event.add('tfg:heightmap_ignore', 'ad_astra:aeronos_cap')
	event.add('tfg:heightmap_ignore', 'ad_astra:aeronos_stem')
	event.add('tfg:heightmap_ignore', 'minecraft:nether_wart_block')
	event.add('tfg:heightmap_ignore', 'minecraft:warped_wart_block')
	event.add('tfg:heightmap_ignore', 'species:alphacene_mushroom_block')
	event.add('tfg:heightmap_ignore', 'species:alphacene_mushroom_growth')
	event.add('tfg:heightmap_ignore', 'tfg:glacian_leaves')
	event.add('tfg:heightmap_ignore', 'betterend:glacian_hymenophore')
	event.add('tfg:heightmap_ignore', 'species:alphacene_moss_block')
	event.add('tfg:heightmap_ignore', 'minecraft:ice')
	
    event.add('tfc:can_be_snow_piled', 'ad_astra:aeronos_mushroom')
	event.add('tfc:can_be_snow_piled', 'ad_astra:strophar_mushroom')

	global.AD_ASTRA_WOOD.forEach(wood => {

		if (wood.log) {
			event.add('minecraft:logs', wood.log)
			event.add('minecraft:logs_that_burn', wood.log)
		}

		if (wood.stripped_log) {
			event.add('minecraft:logs', wood.stripped_log)
			event.add('minecraft:logs_that_burn', wood.stripped_log)
		}
	})
}

const registerAdAstraBiomeTags = (event) => {

	event.removeAll('ad_astra:has_structure/oil_well')

	global.MOON_BIOMES.forEach(biome => {
		event.add('tfg:moon_biomes', biome)
		event.add('tfg:has_structure/meteors', biome)
		event.add('tfg:has_structure/cheese_ores', biome)
		event.add('tfg:has_structure/moonbase', biome)
		event.add('tfg:has_structure/moon_rabbit_houses', biome)
		event.add('species:limpet_spawns', biome)
	})

	global.MARS_BIOMES.forEach(biome => {
		event.add('tfg:mars_biomes', biome)
	})

	event.add('sandworm_mod:can_spawn_sandworms', 'tfg:mars/martian_dunes')
	event.add('sandworm_mod:can_spawn_sandworms', 'tfg:mars/martian_deep_desert')

	event.add('tfg:has_dark_sand_particles', 'tfg:mars/martian_dunes')
	event.add('tfg:has_dark_sand_particles', 'tfg:mars/martian_deep_desert')
	event.add('tfg:has_dark_sand_particles', 'tfg:mars/martian_mountains')
	event.add('tfg:has_medium_sand_particles', 'tfg:mars/amber_plains')
	event.add('tfg:has_medium_sand_particles', 'tfg:mars/amber_hills')
	event.add('tfg:has_medium_sand_particles', 'tfg:mars/rusticus_plains')
	event.add('tfg:has_medium_sand_particles', 'tfg:mars/rusticus_hills')
	event.add('tfg:has_medium_sand_particles', 'tfg:mars/sangnum_plains')
	event.add('tfg:has_medium_sand_particles', 'tfg:mars/sangnum_hills')
	event.add('tfg:has_light_sand_particles', 'tfg:mars/martian_dune_edge')
	event.add('tfg:has_light_sand_particles', 'tfg:mars/amber_edge')
	event.add('tfg:has_light_sand_particles', 'tfg:mars/rusticus_edge')
	event.add('tfg:has_light_sand_particles', 'tfg:mars/sangnum_edge')
	event.add('tfg:has_light_sand_particles', 'tfg:mars/martian_river')

	event.add('tfg:has_mild_dust_storms', 'tfg:mars/martian_mountains')
	event.add('tfg:has_mild_dust_storms', 'tfg:mars/martian_river')
	event.add('tfg:has_mild_dust_storms', 'tfg:mars/amber_hills')
	event.add('tfg:has_mild_dust_storms', 'tfg:mars/rusticus_hills')
	event.add('tfg:has_mild_dust_storms', 'tfg:mars/sangnum_hills')
	event.add('tfg:has_moderate_dust_storms', 'tfg:mars/amber_plains')
	event.add('tfg:has_moderate_dust_storms', 'tfg:mars/amber_edge')
	event.add('tfg:has_moderate_dust_storms', 'tfg:mars/rusticus_plains')
	event.add('tfg:has_moderate_dust_storms', 'tfg:mars/rusticus_edge')
	event.add('tfg:has_moderate_dust_storms', 'tfg:mars/sangnum_plains')
	event.add('tfg:has_moderate_dust_storms', 'tfg:mars/sangnum_edge')
	event.add('tfg:has_severe_dust_storms', 'tfg:mars/martian_dunes')
	event.add('tfg:has_severe_dust_storms', 'tfg:mars/martian_deep_desert')
}

const registerAdAstraEntityTypeTags = (event) => {

	const COLD_ENTITIES = [
		// moon
		'tfc:rat',
		'tfg:moon_rabbit',
		'minecraft:enderman',
		'minecraft:shulker',
		'minecraft:shulker_bullet',
		'minecraft:skeleton',
		'minecraft:stray',
		'species:limpet',
		'species:birt',
		'endermanoverhaul:windswept_hills_enderman',
		'endermanoverhaul:soulsand_valley_enderman',
		'endermanoverhaul:spirit',
		'endermanoverhaul:end_enderman',
		'endermanoverhaul:end_islands_enderman',
		// mars
		'tfg:sniffer',
		'tfg:glacian_ram',
		'tfg:wraptor',
		'species:goober',
		'species:cruncher',
		'species:springling',
		'species:quake',
		'species:stackatick',
		'endermanoverhaul:crimson_forest_enderman',
		'endermanoverhaul:warped_forest_enderman',
		'endermanoverhaul:badlands_enderman',
		'endermanoverhaul:cave_enderman',
		'wan_ancient_beasts:walker',
		'wan_ancient_beasts:eater',
		'wan_ancient_beasts:crusher',
		'wan_ancient_beasts:soarer',
		'wan_ancient_beasts:glider',
		'wan_ancient_beasts:toxlacanth',
		'wan_ancient_beasts:surfer',
		'tfg:surfer',
		// europa
		'endermanoverhaul:coral_enderman',
		'endermanoverhaul:snowy_enderman',
		'endermanoverhaul:ice_spikes_enderman',
		'species:deepfish',
		'species:leaf_hanger',
		'species:cliff_hanger',
	]

	COLD_ENTITIES.forEach(entity => {

		event.add('ad_astra:can_survive_extreme_cold', entity)
		event.add('ad_astra:lives_without_oxygen', entity)
	})

	event.add('ad_astra:can_survive_in_space', 'railways:conductor')

	event.add('tfc:deals_crushing_damage', 'minecraft:enderman')
	event.add('tfc:deals_crushing_damage', 'minecraft:stray')
	event.add('tfc:deals_crushing_damage', 'endermanoverhaul:windswept_hills_enderman')
	event.add('tfc:deals_crushing_damage', 'endermanoverhaul:soulsand_valley_enderman')
	event.add('tfc:deals_piercing_damage', 'endermanoverhaul:end_enderman')
	event.add('tfc:deals_crushing_damage', 'endermanoverhaul:end_islands_enderman')
	event.add('tfc:deals_crushing_damage', 'ad_astra:star_crawler')

	event.add('tfg:ignores_gravity', 'minecraft:shulker_bullet')
	event.add('tfg:ignores_gravity', 'endermanoverhaul:spirit')
	event.add('tfg:ignores_gravity', 'species:birt')
	event.add('tfg:ignores_gravity', 'ad_astra:star_crawler')
	
	// this guy has a bounce animation that looks silly in low grav
	event.add('tfg:ignores_gravity', 'wan_ancient_beasts:crusher')
	// this huge guy also looks silly in low grav
	event.add('tfg:ignores_gravity', 'wan_ancient_beasts:walker')
	event.add('tfg:ignores_gravity', 'wan_ancient_beasts:eater')
	// flying mobs
	event.add('tfg:ignores_gravity', 'wan_ancient_beasts:soarer')
	event.add('tfg:ignores_gravity', 'wan_ancient_beasts:glider')
	// swimming mobs
	event.add('tfg:ignores_gravity', 'tfg:surfer')
	event.add('tfg:ignores_gravity', 'wan_ancient_beasts:toxlacanth')
	event.add('tfg:ignores_gravity', 'endermanoverhaul:coral_enderman')
}

const registerAdAstraPlacedFeatures = (event) => {
	
	//#region Moon
	event.add('tfg:moon_craters', 'tfg:moon/crater/extra_large')
	event.add('tfg:moon_craters', 'tfg:moon/crater/large')
	event.add('tfg:moon_craters', 'tfg:moon/crater/medium')
	event.add('tfg:moon_craters', 'tfg:moon/crater/small')
	
	global.MOON_STONE_TYPES.forEach(stone => {
		// only in the sparse ones
		event.add('tfg:moon_large_rock_features', `tfg:moon/surface/delta/${stone}`)
		// in all moon biomes
		event.add('tfg:moon_small_rock_features', `tfg:moon/surface/pile/${stone}`)
		event.add('tfg:moon_small_rock_features', `tfg:moon/surface/loose/${stone}`)
	})

	event.add('tfg:moon_small_rock_features', 'tfg:moon/surface/pile_moon_sand')
	event.add('tfg:moon_small_rock_features', 'tfg:moon/surface/pile_white_sand')
	event.add('tfg:moon_small_rock_features', 'tfg:moon/surface/pile_black_sand')
	//#endregion

	//#region Mars
	// Underground decoration
	event.add('tfg:mars_underground_decoration', 'tfg:mars/underground/loose_rocks')
	event.add('tfg:mars_underground_decoration', 'tfc:cave_spike')
	event.add('tfg:mars_underground_decoration', 'tfc:cave_column')
	event.add('tfg:mars_underground_decoration', 'tfc:large_cave_spike')
	event.add('tfg:mars_underground_decoration', 'tfg:mars/underground/noise_cave_stalagmite')
	event.add('tfg:mars_underground_decoration', 'tfg:mars/underground/noise_cave_stalagtite')

	event.add('tfg:mars_underground_decoration', 'tfg:mars/underground/calcite')
	event.add('tfg:mars_underground_decoration', 'tfg:mars/underground/mega_calcite')
	
	event.add('tfg:mars_underground_decoration', 'tfg:mars/underground/ice_cave')
	event.add('tfg:mars_underground_decoration', 'tfg:mars/underground/icicle')
	event.add('tfg:mars_underground_decoration', 'tfg:mars/underground/icicle_extra')
	event.add('tfg:mars_underground_decoration', 'tfg:mars/underground/ochrum_blob')

	event.add('tfg:mars_underground_decoration', "tfg:earth/geode/amethyst")
	event.add('tfg:mars_underground_decoration', "tfg:earth/geode/barite")
	event.add('tfg:mars_underground_decoration', "tfg:earth/geode/calcite")
	event.add('tfg:mars_underground_decoration', "tfg:earth/geode/gypsum")
	event.add('tfg:mars_underground_decoration', "tfg:earth/geode/opal")
	event.add('tfg:mars_underground_decoration', "tfg:earth/geode/pyrite")
	event.add('tfg:mars_underground_decoration', "tfg:earth/geode/quartzite")
	
	// Vegetation
	event.add("tfg:mars_global_small_plants", "tfg:mars/tree/lucernia")
	event.add("tfg:mars_global_small_plants", "tfg:mars/tree/lucernia_common")
	event.add("tfg:mars_global_small_plants", "tfg:mars/tree/cave_bush")
	event.add("tfg:mars_global_small_plants", "tfg:mars/tree/cave_bush_common")
	event.add("tfg:mars_global_small_plants", "tfg:mars/surface/charnia")
	event.add("tfg:mars_global_small_plants", "tfg:mars/surface/flamaea")
	event.add("tfg:mars_global_small_plants", "tfg:mars/surface/lacugrove")

	event.add("tfg:mars_amber_vegetal_decoration", "#tfg:mars_global_small_plants")
	event.add("tfg:mars_rusticus_vegetal_decoration", "#tfg:mars_global_small_plants")
	event.add("tfg:mars_sangnum_vegetal_decoration", "#tfg:mars_global_small_plants")


	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/crop/amber_root")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/crop/blossom_berry")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/crop/bolux_mushroom")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/crop/cave_pumpkin")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/crop/chorus_mushroom")

	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/surface/lanceleaf")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/surface/lanceleaf_small")
	
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/surface/bulb_moss")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/surface/aurant_polypore")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/surface/filalux_wings")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/surface/filalux_wings_top")

	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/surface/amber_grass")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/surface/flammalix")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/surface/lutebus")
	event.add("tfg:mars_amber_vegetal_decoration", "tfg:mars/surface/orango")
	

	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/crop/amber_root")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/crop/blossom_berry")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/crop/bolux_mushroom")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/crop/chorus_mushroom")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/crop/shadow_berry")

	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/surface/lucernia_outer_leaves")
	
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/surface/bulb_moss")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/surface/aurant_polypore")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/surface/purple_polypore")

	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/surface/aeridium")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/surface/flammalix")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/surface/lamellarium")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/surface/lutebus")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/surface/orango")
	event.add("tfg:mars_rusticus_vegetal_decoration", "tfg:mars/surface/ruscus")
	

	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/crop/blossom_berry")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/crop/bolux_mushroom")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/crop/cave_pumpkin")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/crop/chorus_mushroom")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/crop/shadow_berry")

	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/surface/small_amaranita_mushroom")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/surface/large_amaranita_mushroom")
	
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/surface/purple_polypore")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/surface/filalux_wings")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/surface/filalux_wings_top")

	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/surface/cave_grass")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/surface/clawfern")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/surface/globulagus")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/surface/lamellarium")
	event.add("tfg:mars_sangnum_vegetal_decoration", "tfg:mars/surface/ruscus")

	// Top layer
	event.add("tfg:mars_top_layer_modification", "tfg:glow_lichen")
	event.add("tfg:mars_top_layer_modification", "tfc:surface_loose_rocks")
	event.add("tfg:mars_top_layer_modification", "tfg:mars/terrain/mars_poles")
	
	//#endregion

	//#region Venus
	event.add('tfg:venus_delta_surface_features', 'tfg:venus/surface/geyser_source_patch')
	event.add('tfg:venus_delta_surface_features', 'tfg:venus/surface/stromatolite_cluster_patch')
	event.add('tfg:venus_delta_surface_features', 'tfg:venus/surface/stromatolite_tower')

	event.add('tfg:venus_delta_terrain_features', 'tfg:venus/terrain/hot_spring_delta')
	event.add('tfg:venus_delta_terrain_features', 'tfg:venus/terrain/lava_delta')
	event.add('tfg:venus_delta_terrain_features', 'tfg:venus/terrain/stromatolite_disk')

	event.add('tfg:venus_fractured_lands_terrain_features', 'tfg:venus/terrain/lakes')
	event.add('tfg:venus_fractured_lands_terrain_features', 'tfg:venus/terrain/lake_basalt_gravel')
	event.add('tfg:venus_fractured_lands_terrain_features', 'tfg:venus/terrain/lake_basalt_stone')
	event.add('tfg:venus_fractured_lands_terrain_features', 'tfg:venus/terrain/lake_geyserite')
	event.add('tfg:venus_fractured_lands_terrain_features', 'tfg:venus/terrain/lake_orange_sand')
	event.add('tfg:venus_fractured_lands_terrain_features', 'tfg:venus/terrain/lake_yellow_sand')
	//#endregion

	//#region Glacio
	event.add("tfg:glacio_top_layer_modification", "tfg:glow_lichen")
	event.add("tfg:glacio_top_layer_modification", "tfc:surface_loose_rocks")
	//#endregion
}
