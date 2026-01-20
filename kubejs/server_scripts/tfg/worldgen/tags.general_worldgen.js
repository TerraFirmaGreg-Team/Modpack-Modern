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

	event.add('minecraft:wart_blocks', 'ad_astra:aeronos_cap')
	event.add('minecraft:wart_blocks', 'ad_astra:strophar_cap')
	event.add('minecraft:wart_blocks', 'minecraft:mushroom_stem')
	event.add('tfc:compost_greens', 'minecraft:nether_wart_block')
	event.add('tfc:compost_greens', 'minecraft:warped_wart_block')
}

function registerTFGGeneralWorldgenBlockTags(event) {

	event.add('tfc:breaks_when_isolated', 'minecraft:gilded_blackstone')
	event.add('tfc:bloomery_insulation', 'minecraft:gilded_blackstone');
	event.add('tfc:forge_insulation', 'minecraft:gilded_blackstone');

	// Ores
	event.add("minecraft:mineable/pickaxe", "#forge:ores");
	event.add("minecraft:needs_iron_tool", "#forge:ores");

	event.add("tfc:can_collapse", "#forge:ores");
	event.add("tfc:can_start_collapse", "#forge:ores");
	event.add("tfc:can_trigger_collapse", "#forge:ores");
	event.add("c:hidden_from_recipe_viewers", "#forge:ores");
    event.add("tfc:monster_spawns_on", "#forge:ores");
    event.add("tfc:prospectable", "#forge:ores");

	event.add("tfc:can_collapse", "#forge:raw_ore_blocks");
	event.add("tfc:can_start_collapse", "#forge:raw_ore_blocks");
	event.add("tfc:can_trigger_collapse", "#forge:raw_ore_blocks");
	event.add("c:hidden_from_recipe_viewers", "#forge:raw_ore_blocks");
    event.add("tfc:monster_spawns_on", "#forge:raw_ore_blocks");
    event.add("tfc:prospectable", "#forge:raw_ore_blocks");

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

	event.add('tfc:can_landslide', '#forge:sand')

	event.add('minecraft:mushroom_grow_block', '#tfc:dirt')
	event.add('minecraft:mushroom_grow_block', '#tfc:grass')
	event.add('minecraft:mushroom_grow_block', '#forge:sand')
	event.add('minecraft:mushroom_grow_block', '#forge:gravel')

	event.add('minecraft:mineable/shovel', 'tfg:ash_pile')
	event.add('minecraft:mineable/shovel', 'tfg:pile/black_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/white_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/brown_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/red_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/yellow_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/pink_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/green_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/moon_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/mars_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/venus_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/hematitic_sand')
	event.add('minecraft:mineable/shovel', 'tfg:pile/mars_sand_covering')
	event.add('minecraft:mineable/shovel', 'tfg:pile/venus_sand_covering')
	event.add('minecraft:mineable/shovel', 'tfg:pile/hematitic_sand_covering')
}
