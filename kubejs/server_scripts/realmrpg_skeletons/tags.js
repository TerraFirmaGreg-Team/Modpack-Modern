// priority: 0
"use strict";

function registerRealmRpgBiomeTags(event) {
	event.add('realmrpg_skeletons:has_webbed_skeletons', '#tfg:overworld_biomes');
	event.add('realmrpg_skeletons:has_surface_skeletons', '#tfg:overworld_biomes');
	event.add('realmrpg_skeletons:has_snow_skeletons', '#tfg:overworld_biomes');
	event.add('realmrpg_skeletons:has_overworld_surface_skeletons', '#tfg:overworld_biomes');
	event.add('realmrpg_skeletons:has_lava_overworld_skeletons', '#tfg:overworld_biomes');
	event.add('realmrpg_skeletons:has_jumped_skeletons', '#tfg:overworld_biomes');
	event.add('realmrpg_skeletons:has_dripstone_skeletons', '#tfg:overworld_biomes');
	event.add('realmrpg_skeletons:has_desert_skeletons', '#tfg:overworld_biomes');
	event.add('realmrpg_skeletons:has_deep_cave_skeletons', '#tfg:overworld_biomes');
	event.add('realmrpg_skeletons:has_cave_skeletons', '#tfg:overworld_biomes');

	event.add('realmrpg_skeletons:has_nether_skeletons', '#tfg:nether_biomes');
	event.add('realmrpg_skeletons:has_mushroom_skeletons', '#tfg:nether_biomes');
	event.add('realmrpg_skeletons:has_lava_nether_skeletons', '#tfg:nether_biomes');
	event.add('realmrpg_skeletons:has_jumped_skeletons', '#tfg:nether_biomes');
	event.add('realmrpg_skeletons:has_dripstone_skeletons', '#tfg:nether_biomes');
	event.add('realmrpg_skeletons:has_desert_skeletons', '#tfg:nether_biomes');
	event.add('realmrpg_skeletons:has_burnt_skeletons', '#tfg:nether_biomes');
	event.add('realmrpg_skeletons:has_cave_skeletons', '#tfg:nether_biomes');

	event.add('realmrpg_skeletons:has_lush_cave_skeletons', 'tfg:nether/lush_hollow');

	event.add('realmrpg_skeletons:has_end_skeletons', '#tfg:moon_biomes');
	event.add('realmrpg_skeletons:has_end_center_skeletons', 'tfg:moon/lunar_chorus_dense');

	event.add('realmrpg_skeletons:has_warped_skeletons', '#tfg:mars_biomes');
	event.add('realmrpg_skeletons:has_crimson_skeletons', '#tfg:mars_biomes');
	event.add('realmrpg_skeletons:has_snow_skeletons', '#tfg:mars_biomes');
	event.add('realmrpg_skeletons:has_surface_skeletons', '#tfg:mars_biomes');
	event.add('realmrpg_skeletons:has_monument_skeletons', '#tfg:mars_biomes');
	event.add('realmrpg_skeletons:has_cave_skeletons', '#tfg:mars_biomes');
	event.add('realmrpg_skeletons:has_desert_skeletons', 'tfg:mars/martian_dunes');
	event.add('realmrpg_skeletons:has_desert_skeletons', 'tfg:mars/martian_deep_desert');
	event.add('realmrpg_skeletons:has_desert_skeletons', 'tfg:mars/martian_river');

	event.add('realmrpg_skeletons:has_burnt_skeletons', '#tfg:venus_biomes');

	
	event.removeAll('realmrpg_skeletons:has_extra_undergarden_loot');
	event.removeAll('realmrpg_skeletons:has_extra_twilight_loot');
	event.removeAll('realmrpg_skeletons:has_extra_aether_loot');
	event.removeAll('realmrpg_skeletons:has_undergarden_fish_instead');

	event.removeAll('realmrpg_skeletons:has_underground_chambers');
	event.removeAll('realmrpg_skeletons:has_deep_underground_chambers');
}

function registerRealmRpgBlockTags(event) {

	event.add('realmrpg_skeletons:surface_skeletons_can_generate_on', '#tfc:grass')
	event.add('realmrpg_skeletons:monument_skeletons_can_generate_on', '#ad_astra:mars_stone_replaceables')
	event.add('realmrpg_skeletons:dripstone_skeletons_can_generate_on', '#minecraft:overworld_carver_replaceables')
	event.add('realmrpg_skeletons:dripstone_skeletons_can_generate_on', '#minecraft:nether_carver_replaceables')

	event.add('realmrpg_skeletons:warped_skeletons_can_generate_on', 'tfg:warped_wart_block')
	event.add('realmrpg_skeletons:crimson_skeletons_can_generate_on', 'tfg:crimson_wart_block')

	global.TFC_MAGMA_BLOCKS.forEach(magma => {
		event.add('realmrpg_skeletons:lava_skeletons_can_generate_on', magma)
	})

	event.removeAll('realmrpg_skeletons:drops_undergarden_loot')
	event.removeAll('realmrpg_skeletons:drops_twilight_loot')
	event.removeAll('realmrpg_skeletons:drops_aether_loot')
	event.removeAll('realmrpg_skeletons:underground_chamber_can_generate_on')
	event.removeAll('realmrpg_skeletons:deep_underground_chamber_can_generate_on')
}

function registerRealmRpgItemTags(event) {

	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:basic_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:common_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:headless_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:devastated_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:buried_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:hunted_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:arrow_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:shot_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:bow_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:acrobat_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:skeleton_from_the_sky');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:waterdrop_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:quicksand_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:dusty_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:cactus_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:dungeon_crawler_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:webbed_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:spider_victim_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:mushroomer_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:shroom_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:swimmer_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:trident_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:pierced_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:headache_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:slain_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:rookie_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:duelist_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:winter_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:snow_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:frozen_waterdrop_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:powder_snow_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:burnt_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:thief_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:fungus_gatherer_skeleton_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:melted_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:unsaved_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:lucky_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:corrupted_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:explorer_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:dripstone_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:stalactite_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:crystal_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:dragon_burnt_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:chorus_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:neutralized_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:vines_tangled_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:crimson_tangled_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:chorus_tangled_skeleton');
	event.add('c:hidden_from_recipe_viewers', 'realmrpg_skeletons:mossy_skeleton');
}