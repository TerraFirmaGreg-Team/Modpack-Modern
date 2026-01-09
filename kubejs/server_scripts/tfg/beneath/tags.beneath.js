"use strict";

function registerTFGBeneathItemTags(event) {
    
    event.add("minecraft:piglin_loved", "gtceu:tiny_pyrite_dust");
    event.add("minecraft:piglin_loved", "gtceu:poor_raw_pyrite");
    event.add("minecraft:piglin_loved", "gtceu:raw_pyrite");
    event.add("minecraft:piglin_loved", "gtceu:rich_raw_pyrite");
    event.add("minecraft:piglin_loved", "tfc:ore/small_native_gold");
    event.add("minecraft:piglin_loved", "tfc:ore/poor_native_gold");
    event.add("minecraft:piglin_loved", "tfc:ore/normal_native_gold");
    event.add("minecraft:piglin_loved", "tfc:ore/rich_native_gold");
	event.add('minecraft:piglin_loved', 'tfg:piglin_disguise')

    event.add('tfc:plants', 'minecraft:spore_blossom')
    event.remove('createaddition:plants', 'minecraft:moss_carpet')

    event.add('tfc:compost_greens', 'minecraft:red_mushroom_block')
    event.add('tfc:compost_greens', 'minecraft:brown_mushroom_block')
    event.add('tfc:compost_greens', 'minecraft:mushroom_stem')
    event.add('tfc:compost_greens', 'minecraft:moss_block')
    event.add('tfc:compost_greens_low', 'minecraft:moss_carpet')
    event.add('tfc:compost_greens_low', 'minecraft:twisting_vines')
}


function registerTFGBeneathBlockTags(event) {
	event.add('tfg:lush_ground_replaceable', 'minecraft:deepslate')
    event.add('tfg:lush_ground_replaceable', 'minecraft:blackstone')
    
    event.add('minecraft:lush_ground_replaceable', 'minecraft:blackstone')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:blackstone')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:deepslate')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:moss_block')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:dripstone_block')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:blackstone')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:deepslate')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:dripstone_block')
    event.add('minecraft:frogs_spawnable_on', 'minecraft:deepslate')
    event.add('minecraft:frogs_spawnable_on', 'minecraft:blackstone')
    event.add('minecraft:frogs_spawnable_on', 'minecraft:dripstone_block')
    event.add('minecraft:axolotls_spawnable_on', 'minecraft:deepslate')
    event.add('minecraft:axolotls_spawnable_on', 'minecraft:dripstone_block')
    event.add('tfc:grass_plantable_on', 'minecraft:moss_block')
    event.add('tfc:creeping_plantable_on', 'minecraft:moss_block')
    event.add('tfc:creeping_plantable_on', 'minecraft:deepslate')
    event.add('tfc:creeping_plantable_on', 'minecraft:blackstone')
    event.add('tfc:creeping_stone_plantable_on', 'minecraft:moss_block')
    event.add('tfc:creeping_stone_plantable_on', 'minecraft:deepslate')
    event.add('tfc:creeping_stone_plantable_on', 'minecraft:blackstone')

    event.add('minecraft:base_stone_nether', 'minecraft:deepslate')
    event.add('minecraft:base_stone_nether', 'minecraft:blackstone')
    event.add('minecraft:base_stone_nether', 'minecraft:dripstone_block')
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/gneiss");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/schist");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/diorite");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/granite");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/gabbro");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/basalt");

    event.add('minecraft:mineable/pickaxe', 'minecraft:lantern');

    event.add('minecraft:mineable/pickaxe', 'minecraft:cobweb');
    event.add('minecraft:mineable/hoe', 'minecraft:cobweb');
    event.add('minecraft:mineable/shovel', 'minecraft:cobweb');
    event.add('minecraft:mineable/axe', 'minecraft:cobweb');

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
    
    event.add("beneath:nether_bush_plantable_on", "#tfc:clay_grass");
    event.add("minecraft:small_dripleaf_placeable", "#tfc:clay_grass");
    event.add("minecraft:big_dripleaf_placeable", "#tfc:clay_grass");
    event.add("minecraft:frogs_spawnable_on", "#tfc:clay_grass");
    event.add("minecraft:axolotls_spawnable_on", "#tfc:clay_grass");

    event.add("minecraft:small_dripleaf_placeable", "#tfc:clay");
    event.add("minecraft:big_dripleaf_placeable", "#tfc:clay");
    event.add("minecraft:frogs_spawnable_on", "#tfc:clay");
    event.add("minecraft:axolotls_spawnable_on", "#tfc:clay");

    event.add("beneath:nether_bush_plantable_on", "#tfc:mud");
    event.add("minecraft:frogs_spawnable_on", "#tfc:mud");

    event.add("beneath:nether_bush_plantable_on", "#tfc:dirt");
    event.add("minecraft:frogs_spawnable_on", "#tfc:dirt");

    event.add("minecraft:nether_carver_replaceables", "#minecraft:base_stone_nether");
    event.add("minecraft:frogs_spawnable_on", "#minecraft:base_stone_nether");
}

function registerTFGBeneathBiomeTags(event) {

    event.add('tfg:nether_biomes', 'tfg:nether/lush_hollow')
	event.add('minecraft:allows_surface_slime_spawns', 'tfg:nether/lush_hollow')
	event.add('minecraft:spawns_cold_variant_frogs', 'tfg:nether/lush_hollow')
	
	event.add('tfg:nether_biomes', 'tfg:nether/decaying_caverns')
	event.add('minecraft:allows_surface_slime_spawns', 'tfg:nether/decaying_caverns')
	event.add('minecraft:spawns_warm_variant_frogs', 'tfg:nether/decaying_caverns')
	event.add('minecraft:has_closer_water_fog', 'tfg:nether/decaying_caverns')
	
	event.add('tfg:nether_biomes', 'tfg:nether/basalt_deltas')
	event.add('tfg:nether_biomes', 'tfg:nether/ash_forest')
	event.add('tfg:nether_biomes', 'tfg:nether/lava_floes')
	event.add('tfg:nether_biomes', 'tfg:nether/webbed_lair')
	event.add('tfg:nether_biomes', 'tfg:nether/gneiss_caves')
	event.add('tfg:nether_biomes', 'tfg:nether/diorite_caves')
	event.add('tfg:nether_biomes', 'tfg:nether/gabbro_caves')
	event.add('tfg:nether_biomes', 'tfg:nether/granite_caves')
	event.add('tfg:nether_biomes', 'tfg:nether/schist_caves')

	event.add('minecraft:has_structure/nether_fossil', '#tfg:nether_biomes')
	event.add('minecraft:has_structure/bastion_remnant', '#tfg:nether_biomes')

}

function registerTFGBeneathPlacedFeatures(event) {

    event.add('tfg:nether_veins', 'beneath:vein/crackrack_pipe')

	event.add('tfg:nether_underground_decoration', 'minecraft:spring_open')
	event.add('tfg:nether_underground_decoration', 'minecraft:spring_closed')
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/magma_blob')
}