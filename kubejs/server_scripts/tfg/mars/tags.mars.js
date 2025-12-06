"use strict";

function registerTFGMarsItemTags(event) {

	event.add('c:hidden_from_recipe_viewers', 'tfg:mars_ice')

	event.add('tfc:compost_greens', 'ad_astra:aeronos_cap')
	event.add('tfc:compost_greens', 'ad_astra:strophar_cap')

	// Dirt
	event.add('minecraft:dirt', 'tfg:grass/mars_dirt')
	event.add('minecraft:dirt', 'tfg:grass/mars_clay_dirt')
	event.add('tfc:dirt', 'tfg:grass/mars_dirt')
	event.add('tfc:dirt', 'tfg:grass/mars_clay_dirt')
	event.add('tfc:grass', 'tfg:grass/amber_mycelium')
	event.add('tfc:grass', 'tfg:grass/amber_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfc:farmland', 'tfg:grass/mars_farmland')
	event.add('tfc:paths', 'tfg:grass/mars_path')
	event.add('tfc:kaolin_clay', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfc:kaolin_clay', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfc:kaolin_clay', 'tfg:grass/sangnum_kaolin_mycelium')

	// Mars animals
	event.add('tfg:martian_eggs', 'tfg:sniffer_egg')
	event.add('tfg:martian_eggs', 'tfg:wraptor_egg')
	event.add('forge:eggs', '#tfg:martian_eggs')
	event.add('firmalife:foods/raw_eggs', '#tfg:martian_eggs')

	event.add('tfg:martian_animal_foods', 'betterend:amber_root_product')
	event.add('tfg:martian_animal_foods', 'betterend:blossom_berry_product')
	event.add('tfg:martian_animal_foods', 'betterend:chorus_mushroom_product')
	event.add('tfg:martian_animal_foods', 'betterend:shadow_berry_product')
	event.add('tfg:martian_animal_foods', 'betterend:bolux_mushroom_product')
	event.add('tfg:martian_animal_foods', 'betterend:cave_pumpkin_chunks')

	event.add('tfg:glacian_ram_food', '#tfg:martian_animal_foods')
	event.add('tfg:sniffer_food', '#tfg:martian_animal_foods')
	event.add('tfg:wraptor_food', '#tfg:martian_animal_foods')

	event.remove('minecraft:wool', 'ad_astra:glacian_fur')

	event.add('tfg:mineral_rich_wool', 'tfg:wraptor_wool')
	event.add('tfg:mineral_rich_wool', 'tfg:sniffer_wool')

	event.add('buildinggadgets2:deny', 'tfg:spice')

	// these are log tags
	event.remove('ad_astra:aeronos_caps', 'ad_astra:aeronos_cap')
	event.remove('ad_astra:strophar_caps', 'ad_astra:strophar_cap')

	event.add('tfc:makes_tannin', '#ad_astra:glacian_logs')
	event.add('tfc:makes_tannin', '#tfc:crimson_logs')
	event.add('tfc:makes_tannin', '#tfc:warped_logs')

	// Crops
	event.add('forge:seeds', 'betterend:amber_root_seeds')
	event.add('forge:seeds', 'betterend:blossom_berry_seeds')
	event.add('forge:seeds', 'betterend:bolux_mushroom_seeds')
	event.add('forge:seeds', 'betterend:cave_pumpkin_seeds')
	event.add('forge:seeds', 'betterend:shadow_berry_seeds')

	event.add('tfc:foods', 'betterend:amber_root_product')
	event.add('tfc:foods/grains', 'betterend:amber_root_product')

	event.add('tfc:foods', 'betterend:blossom_berry_product')
	event.add('tfc:foods/fruits', 'betterend:blossom_berry_product')

	event.add('tfc:foods', 'betterend:bolux_mushroom_product')
	event.add('tfc:foods/vegetables', 'betterend:bolux_mushroom_product')
	event.add('forge:mushrooms', 'betterend:bolux_mushroom_product')
	event.add('tfc:foods', 'betterend:bolux_mushroom_cooked')
	event.add('tfc:foods/vegetables', 'betterend:bolux_mushroom_cooked')
	event.add('forge:mushrooms', 'betterend:bolux_mushroom_cooked')

	event.add('tfc:foods', 'betterend:cave_pumpkin')
	event.add('tfc:foods', 'betterend:cave_pumpkin_chunks')
	event.add('tfc:foods/fruits', 'betterend:cave_pumpkin_chunks')
	event.add('tfc:foods', 'betterend:cave_pumpkin_pie_dough')
	event.add('tfc:foods', 'betterend:cave_pumpkin_pie_raw')
	event.add('tfc:foods', 'betterend:cave_pumpkin_pie')
	event.add('firmalife:foods/washable', 'betterend:cave_pumpkin_pie_raw')
	event.add('firmalife:foods/washable', 'betterend:cave_pumpkin_pie')

	event.add('tfc:foods', 'betterend:chorus_mushroom_product')
	event.add('tfc:foods/vegetables', 'betterend:chorus_mushroom_product')
	event.add('forge:mushrooms', 'betterend:chorus_mushroom_product')
	event.add('tfc:foods', 'betterend:chorus_mushroom_cooked')
	event.add('tfc:foods/vegetables', 'betterend:chorus_mushroom_cooked')
	event.add('forge:mushrooms', 'betterend:chorus_mushroom_cooked')

	event.add('tfc:foods', 'betterend:shadow_berry_product')
	event.add('tfc:foods/fruits', 'betterend:shadow_berry_product')
	event.add('tfc:foods', 'betterend:shadow_berry_cooked')
	event.add('tfc:foods/fruits', 'betterend:shadow_berry_cooked')

	event.add('forge:mushrooms', 'betterend:flammalix')
	event.add('forge:mushrooms', 'betterend:small_amaranita_mushroom')
}

function registerTFGMarsBlockTags(event) {

	event.add('buildinggadgets2:deny', 'tfg:spice')
	event.add('ae2:blacklisted/spatial', 'tfg:spice')

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

	event.add('tfc:can_carve', '#ad_astra:mars_stone_replaceables')

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

	event.removeAll('minecraft:sniffer_diggable_block')

	event.add('tfc:can_be_snow_piled', 'minecraft:crimson_fungus')
	event.add('tfc:can_be_snow_piled', 'minecraft:warped_fungus')
	event.add('tfc:can_be_snow_piled', 'minecraft:torchflower')
	event.add('tfc:can_be_snow_piled', 'minecraft:pitcher_plant')

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

	event.remove('minecraft:enderman_holdable', 'minecraft:crimson_fungus')
	event.remove('minecraft:enderman_holdable', 'minecraft:warped_fungus')

	event.remove('ad_astra:strophar_caps', 'ad_astra:strophar_cap')
	event.remove('ad_astra:aeronos_caps', 'ad_astra:aeronos_cap')

	event.add('tfc:can_be_snow_piled', 'ad_astra:aeronos_mushroom')
	event.add('tfc:can_be_snow_piled', 'ad_astra:strophar_mushroom')

	event.add('minecraft:dirt', 'tfg:grass/mars_dirt')
	event.add('minecraft:dirt', 'tfg:grass/mars_clay_dirt')
	event.add('minecraft:dirt', 'tfg:grass/amber_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/rusticus_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/sangnum_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/amber_clay_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/rusticus_clay_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/sangnum_clay_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/amber_kaolin_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('minecraft:dirt', 'tfg:grass/sangnum_kaolin_mycelium')

	event.add('tfc:dirt', 'tfg:grass/mars_dirt')
	event.add('tfc:dirt', 'tfg:grass/mars_clay_dirt')
	event.add('tfc:farmland', 'tfg:grass/mars_farmland')

	event.add('tfc:paths', 'tfg:grass/mars_path')

	event.add('tfc:grass', 'tfg:grass/amber_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_mycelium')
	event.add('tfc:grass', 'tfg:grass/amber_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfc:grass', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfc:grass', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfc:grass', 'tfg:grass/sangnum_kaolin_mycelium')

	event.add('tfc:kaolin_clay', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfc:kaolin_clay', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfc:kaolin_clay', 'tfg:grass/sangnum_kaolin_mycelium')

	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/amber_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/rusticus_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/sangnum_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/amber_clay_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/sangnum_kaolin_mycelium')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/mars_farmland')
	event.add('tfg:do_not_destroy_in_space', 'tfg:grass/mars_path')

	event.add('tfc:can_landslide', 'tfg:grass/mars_dirt')
	event.add('tfc:can_landslide', 'tfg:grass/mars_clay_dirt')
	event.add('tfc:can_landslide', 'tfg:grass/mars_farmland')
	event.add('tfc:can_landslide', 'tfg:grass/mars_path')
	event.add('tfc:can_landslide', 'tfg:grass/amber_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/rusticus_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/sangnum_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/amber_clay_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/rusticus_clay_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/sangnum_clay_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/amber_kaolin_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('tfc:can_landslide', 'tfg:grass/sangnum_kaolin_mycelium')

	event.add('minecraft:mineable/shovel', 'tfg:grass/mars_dirt')
	event.add('minecraft:mineable/shovel', 'tfg:grass/mars_clay_dirt')
	event.add('minecraft:mineable/shovel', 'tfg:grass/mars_path')
	event.add('minecraft:mineable/shovel', 'tfg:grass/mars_farmland')
	event.add('minecraft:mineable/shovel', 'tfg:grass/amber_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/amber_clay_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/amber_kaolin_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/rusticus_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/rusticus_clay_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/rusticus_kaolin_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/sangnum_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/sangnum_clay_mycelium')
	event.add('minecraft:mineable/shovel', 'tfg:grass/sangnum_kaolin_mycelium')

	event.add('tfc:bush_plantable_on', 'tfg:grass/mars_farmland')
	event.add('tfc:grass_plantable_on', 'tfg:grass/mars_farmland')
	event.add('tfc:creeping_plantable_on', 'tfg:grass/mars_farmland')

	event.add('tfg:decorative_plant_attachable', '#minecraft:logs')
	event.add('tfg:decorative_plant_attachable', 'minecraft:mushroom_stem')
	event.add('tfg:decorative_plant_attachable', 'species:alphacene_mushroom_block')
	event.add('tfg:decorative_plant_attachable', 'species:alphacene_moss_block')
	event.add('tfg:decorative_plant_attachable', 'ad_astra:aeronos_cap')
	event.add('tfg:decorative_plant_attachable', 'ad_astra:strophar_cap')
	event.add('tfg:decorative_plant_attachable', 'tfg:glacian_leaves')
	event.add('tfg:decorative_plant_attachable', 'minecraft:nether_wart_block')
	event.add('tfg:decorative_plant_attachable', 'minecraft:warped_wart_block')
	event.add('tfg:decorative_plant_attachable', 'betterend:cave_bush')
	event.add('tfg:decorative_plant_attachable', 'betterend:lucernia_leaves')

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

function registerTFGMarsBiomeTags(event) {

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

function registerTFGMarsEntityTypeTags(event) {

	const ENTITIES = [
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
		'tfg:surfer'
	]

	ENTITIES.forEach(entity => {
		event.add('ad_astra:can_survive_extreme_cold', entity)
		event.add('ad_astra:lives_without_oxygen', entity)
	})

	event.add('tfc:deals_piercing_damage', 'tfg:wraptor')
	event.add('tfc:deals_piercing_damage', 'species:cruncher')
	event.add('tfc:deals_piercing_damage', 'wan_ancient_beasts:eater')
	event.add('tfc:deals_piercing_damage', 'wan_ancient_beasts:soarer')
	event.add('tfc:deals_piercing_damage', 'wan_ancient_beasts:glider')
	event.add('tfc:deals_piercing_damage', 'ad_astra:martian_raptor')
	event.add('tfc:deals_crushing_damage', 'species:quake')
	event.add('tfc:deals_crushing_damage', 'wan_ancient_beasts:walker')
	event.add('tfc:deals_crushing_damage', 'wan_ancient_beasts:crusher')
	event.add('tfc:deals_slashing_damage', 'endermanoverhaul:crimson_forest_enderman')
	event.add('tfc:deals_slashing_damage', 'endermanoverhaul:warped_forest_enderman')
	event.add('tfc:deals_slashing_damage', 'endermanoverhaul:badlands_enderman')
	event.add('tfc:deals_slashing_damage', 'endermanoverhaul:cave_enderman')
		
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

function registerTFGMarsPlacedFeatures(event) {
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
}