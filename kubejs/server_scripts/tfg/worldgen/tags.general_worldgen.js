"use strict";

function registerTFGGeneralWorldgenItemTags(event) {

	// Actually "layers", can't rename them without screwing with peoples' worlds
	event.add('c:hidden_from_recipe_viewers', 'tfg:ash_pile')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/black_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/brown_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/green_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/pink_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/red_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/white_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/yellow_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/mars_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/moon_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/venus_sand')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/hematitic_sand')

	// Actually "piles", the kind that can hide plants inside them
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/mars_sand_covering')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/venus_sand_covering')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/hematitic_sand_covering')
	event.add('c:hidden_from_recipe_viewers', 'tfg:pile/mars_snow_covering')

	event.add('forge:cobblestone', 'ad_astra:moon_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:mars_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:venus_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:mercury_cobblestone')
	event.add('forge:cobblestone', 'ad_astra:glacio_cobblestone')

	event.add('forge:smooth_stone_slab', 'ad_astra:polished_moon_stone_slab')
	event.add('forge:smooth_stone_slab', 'ad_astra:polished_mars_stone_slab')
	event.add('forge:smooth_stone_slab', 'ad_astra:polished_venus_stone_slab')
	event.add('forge:smooth_stone_slab', 'ad_astra:polished_mercury_stone_slab')
	event.add('forge:smooth_stone_slab', 'ad_astra:polished_glacio_stone_slab')
	event.add('forge:smooth_stone_slab', 'ad_astra:polished_permafrost_slab')
	event.add('forge:smooth_stone_slab', 'minecraft:polished_deepslate_slab')
	event.add('forge:smooth_stone_slab', 'minecraft:polished_blackstone_slab')
	event.add('forge:smooth_stone_slab', 'minecraft:polished_blackstone_brick_slab')

	event.add('tfc:rock/smooth', 'minecraft:smooth_stone')

	event.add('tfc:rock/raw', 'minecraft:deepslate')
	event.add('tfc:rock/raw', 'minecraft:blackstone')
	event.add('tfc:rock/raw', 'minecraft:dripstone_block')

	event.add('minecraft:wart_blocks', 'ad_astra:aeronos_cap')
	event.add('minecraft:wart_blocks', 'ad_astra:strophar_cap')
	event.add('minecraft:wart_blocks', 'minecraft:mushroom_stem')
	event.add('tfc:compost_greens', 'minecraft:nether_wart_block')
	event.add('tfc:compost_greens', 'minecraft:warped_wart_block')
}

function registerTFGGeneralWorldgenBlockTags(event) {

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

	event.add('tfc:can_landslide', 'minecraft:cobbled_deepslate')
	event.add('forge:cobblestone/normal', 'minecraft:cobbled_deepslate')

	event.add('tfc:breaks_when_isolated', 'minecraft:deepslate')
	event.add('tfc:breaks_when_isolated', 'minecraft:blackstone')
	event.add('tfc:breaks_when_isolated', 'minecraft:gilded_blackstone')
	event.add('tfc:breaks_when_isolated', 'minecraft:dripstone_block')

	event.add('forge:stone', 'minecraft:blackstone')

	event.add('tfg:rock_stairs', 'minecraft:cobbled_deepslate_stairs')
	event.add('tfg:rock_slabs', 'minecraft:cobbled_deepslate_slab')
	event.add('tfg:rock_walls', 'minecraft:cobbled_deepslate_wall')
	event.add('tfg:brick_stairs', 'minecraft:deepslate_brick_stairs')
	event.add('tfg:brick_slabs', 'minecraft:deepslate_brick_slab')
	event.add('tfg:brick_walls', 'minecraft:deepslate_brick_wall')
	event.add('tfg:brick_stairs', 'minecraft:deepslate_tile_stairs')
	event.add('tfg:brick_slabs', 'minecraft:deepslate_tile_slab')
	event.add('tfg:brick_walls', 'minecraft:deepslate_tile_wall')
	event.add('tfg:rock_stairs', 'minecraft:blackstone_stairs')
	event.add('tfg:rock_slabs', 'minecraft:blackstone_slab')
	event.add('tfg:rock_walls', 'minecraft:blackstone_wall')
	event.add('tfg:brick_stairs', 'minecraft:blackstone_stairs')
	event.add('tfg:brick_slabs', 'minecraft:blackstone_slab')
	event.add('tfg:brick_walls', 'minecraft:blackstone_wall')

	event.add('tfc:bloomery_insulation', 'minecraft:polished_deepslate');
	event.add('tfc:forge_insulation', 'minecraft:polished_deepslate');
	event.add('tfc:bloomery_insulation', 'minecraft:polished_blackstone');
	event.add('tfc:forge_insulation', 'minecraft:polished_blackstone');
	event.add('tfc:bloomery_insulation', 'minecraft:deepslate_tiles');
	event.add('tfc:forge_insulation', 'minecraft:deepslate_tiles');
	event.add('tfc:bloomery_insulation', 'minecraft:cracked_deepslate_tiles');
	event.add('tfc:forge_insulation', 'minecraft:cracked_deepslate_tiles');
	event.add('tfc:bloomery_insulation', 'minecraft:chiseled_deepslate');
	event.add('tfc:forge_insulation', 'minecraft:chiseled_deepslate');
	event.add('tfc:bloomery_insulation', 'minecraft:chiseled_polished_blackstone');
	event.add('tfc:forge_insulation', 'minecraft:chiseled_polished_blackstone');
	event.add('tfc:bloomery_insulation', 'minecraft:gilded_blackstone');
	event.add('tfc:forge_insulation', 'minecraft:gilded_blackstone');
	event.add('tfc:bloomery_insulation', 'minecraft:basalt');
	event.add('tfc:forge_insulation', 'minecraft:basalt');
	event.add('tfc:bloomery_insulation', 'minecraft:smooth_basalt');
	event.add('tfc:forge_insulation', 'minecraft:smooth_basalt');

	// Ores
	event.add("minecraft:mineable/pickaxe", "#forge:ores");
	event.add("minecraft:needs_iron_tool", "#forge:ores");

	event.add("tfc:can_collapse", "#forge:ores");
	event.add("tfc:can_start_collapse", "#forge:ores");
	event.add("tfc:can_trigger_collapse", "#forge:ores");
	event.add("c:hidden_from_recipe_viewers", "#forge:ores");

	event.add("tfc:can_collapse", "#forge:raw_ore_blocks");
	event.add("tfc:can_start_collapse", "#forge:raw_ore_blocks");
	event.add("tfc:can_trigger_collapse", "#forge:raw_ore_blocks");
	event.add("c:hidden_from_recipe_viewers", "#forge:raw_ore_blocks");

	// Let GT indicators be covered by snow
	forEachMaterial((material) => {
		if (material.hasProperty(PropertyKey.ORE)) {
			const indicator = `gtceu:${material.getName()}_indicator`;

			event.add("tfg:dust_ore_indicators", indicator);
			event.add("tfc:can_be_snow_piled", indicator);
			event.add("tfc:can_be_ice_piled", indicator);

			if (material.hasProperty(PropertyKey.GEM)) {
				const bud = `gtceu:${material.getName()}_bud_indicator`;

				event.add("tfg:bud_ore_indicators", bud);
				event.add("tfc:can_be_snow_piled", bud);
				event.add("tfc:can_be_ice_piled", bud);

				event.add("minecraft:mineable/pickaxe", bud);
			}
		}
	});

	// More rock tags
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

	event.add('minecraft:mushroom_grow_block', '#tfc:dirt')
	event.add('minecraft:mushroom_grow_block', '#tfc:grass')
	event.add('minecraft:mushroom_grow_block', '#forge:sand')
	event.add('minecraft:mushroom_grow_block', '#forge:gravel')
}
