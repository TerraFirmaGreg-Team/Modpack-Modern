"use strict";

/** 
    * @property {string[]} beneath_plants - List of Beneath plants to be added to the `tfg:plants/beneath` tag.
*/
const beneath_plants = [
    'beneath:gleamflower',
    'beneath:burpflower',
    'minecraft:big_dripleaf',
    'minecraft:small_dripleaf',
    'minecraft:glow_lichen',
    'minecraft:hanging_roots',
	'minecraft:spore_blossom',
    '#beneath:mushrooms',
    'tfg:plant/eyeblossom',
    'tfg:plant/pale_hanging_moss',
    'wan_ancient_beasts:rafflesia',
    'wan_ancient_beasts:sundew',
    'wan_ancient_beasts:bellflower',
    'wan_ancient_beasts:equisetum',
    'wan_ancient_beasts:moonflower'
];

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

    event.remove('createaddition:plants', 'minecraft:moss_carpet')

    beneath_plants.forEach(plant =>
	    event.add('tfg:plants/beneath', plant)
    );

    event.add('tfc:compost_greens', 'minecraft:red_mushroom_block')
    event.add('tfc:compost_greens', 'minecraft:brown_mushroom_block')
    event.add('tfc:compost_greens', 'minecraft:mushroom_stem')
    event.add('tfc:compost_greens', 'minecraft:moss_block')
    event.add('tfc:compost_greens', 'tfg:pale_moss_block')
    event.add('tfc:compost_greens', 'wan_ancient_beasts:olden_moss_block')
    event.add('tfc:compost_greens_low', 'minecraft:moss_carpet')
    event.add('tfc:compost_greens_low', 'tfg:pale_moss_carpet')
    event.add('tfc:compost_greens_low', 'wan_ancient_beasts:olden_moss_carpet')
    event.add('tfc:compost_greens_low', 'minecraft:twisting_vines')
    event.add('tfc:compost_greens_low', 'tfg:plant/eyeblossom');
    event.add('tfc:compost_greens_low', 'tfg:plant/pale_hanging_moss');
    event.add('tfc:compost_greens_low', 'wan_ancient_beasts:rafflesia')
    event.add('tfc:compost_greens_low', 'wan_ancient_beasts:sundew')
    event.add('tfc:compost_greens_low', 'wan_ancient_beasts:bellflower')
    event.add('tfc:compost_greens_low', 'wan_ancient_beasts:equisetum')
    event.add('tfc:compost_greens_low', 'wan_ancient_beasts:moonflower')

    event.add('tfc:moss', 'minecraft:moss_carpet')
    event.add('tfc:moss', 'tfg:pale_moss_carpet')
    event.add('tfc:moss', 'wan_ancient_beasts:olden_moss_carpet')
}


function registerTFGBeneathBlockTags(event) {

	event.remove('tfc:plants', 'beneath:gleamflower')
    event.remove('tfc:plants', 'beneath:burpflower')

    beneath_plants.forEach(plant =>
	    event.add('tfg:plants/beneath', plant)
    );

    event.add('minecraft:base_stone_nether', 'minecraft:deepslate')
    event.add('minecraft:base_stone_nether', 'minecraft:blackstone')
    event.add('minecraft:base_stone_nether', 'minecraft:dripstone_block')
    event.add('minecraft:base_stone_nether', 'minecraft:tuff')
    event.add("minecraft:base_stone_nether", "minecraft:calcite");
    event.add("minecraft:base_stone_nether", "beneath:crackrack");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/gneiss");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/schist");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/diorite");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/granite");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/gabbro");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/basalt");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/phyllite");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/slate");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/marble");

	event.add('minecraft:base_stone_nether', 'tfg:rock/hardened_deepslate')
	event.add('minecraft:base_stone_nether', 'tfg:rock/hardened_blackstone')
	event.add('minecraft:base_stone_nether', 'tfg:rock/hardened_dripstone')
	event.add('minecraft:base_stone_nether', 'tfg:rock/hardened_tuff')
    event.add("minecraft:base_stone_nether", "tfg:rock/hardened_crackrack");
    event.add("minecraft:base_stone_nether", "tfc:rock/hardened/gneiss");
    event.add("minecraft:base_stone_nether", "tfc:rock/hardened/schist");
    event.add("minecraft:base_stone_nether", "tfc:rock/hardened/diorite");
    event.add("minecraft:base_stone_nether", "tfc:rock/hardened/granite");
    event.add("minecraft:base_stone_nether", "tfc:rock/hardened/gabbro");
    event.add("minecraft:base_stone_nether", "tfc:rock/hardened/basalt");
    event.add("minecraft:base_stone_nether", "tfc:rock/hardened/phyllite");
    event.add("minecraft:base_stone_nether", "tfc:rock/hardened/slate");
    event.add("minecraft:base_stone_nether", "tfc:rock/hardened/marble");

	event.add('minecraft:base_stone_nether', 'tfg:rock/mossy_cobble_deepslate')
	event.add('minecraft:base_stone_nether', 'tfg:rock/mossy_cobble_blackstone')
	event.add('minecraft:base_stone_nether', 'tfg:rock/mossy_cobble_dripstone')
	event.add('minecraft:base_stone_nether', 'tfg:rock/mossy_cobble_tuff')
    event.add("minecraft:base_stone_nether", "tfg:rock/mossy_cobble_crackrack");
    event.add("minecraft:base_stone_nether", "tfc:rock/mossy_cobble/gneiss");
    event.add("minecraft:base_stone_nether", "tfc:rock/mossy_cobble/schist");
    event.add("minecraft:base_stone_nether", "tfc:rock/mossy_cobble/diorite");
    event.add("minecraft:base_stone_nether", "tfc:rock/mossy_cobble/granite");
    event.add("minecraft:base_stone_nether", "tfc:rock/mossy_cobble/gabbro");
    event.add("minecraft:base_stone_nether", "tfc:rock/mossy_cobble/basalt");
    event.add("minecraft:base_stone_nether", "tfc:rock/mossy_cobble/phyllite");
    event.add("minecraft:base_stone_nether", "tfc:rock/mossy_cobble/slate");
    event.add("minecraft:base_stone_nether", "tfc:rock/mossy_cobble/marble");
        
    event.add('tfc:creeping_plantable_on', '#minecraft:base_stone_nether')
    event.add('tfc:creeping_stone_plantable_on', '#minecraft:base_stone_nether')
    event.add('minecraft:axolotls_spawnable_on', '#minecraft:base_stone_nether')
    event.add('minecraft:frogs_spawnable_on', '#minecraft:base_stone_nether')
    event.add('beneath:nether_bush_plantable_on', '#minecraft:base_stone_nether')
    event.add('minecraft:nether_carver_replaceables', '#minecraft:base_stone_nether')
    
    event.add('minecraft:nether_carver_replaceables', "tfc:fluid/salt_water");
    event.add('minecraft:nether_carver_replaceables', "tfc:fluid/spring_water");
    event.add('minecraft:nether_carver_replaceables', "tfg:fluid/muddy_water");
    event.add('minecraft:nether_carver_replaceables', "minecraft:water");
    event.add('minecraft:nether_carver_replaceables', "tfg:halite");
    event.add('minecraft:nether_carver_replaceables', "#tfc:mud")
    event.add('minecraft:nether_carver_replaceables', "#tfc:dirt");
    event.add('minecraft:nether_carver_replaceables', "beneath:soul_clay");
    event.add('minecraft:nether_carver_replaceables', "tfc:peat");
    event.add('minecraft:nether_carver_replaceables', "tfg:hardened_clay");

    const moss_blocks = [
        'minecraft:moss_block',
        'tfg:pale_moss_block',
        'wan_ancient_beasts:olden_moss_block'
    ];
    moss_blocks.forEach(block => {
        event.add('tfc:grass_plantable_on', block)
        event.add('tfc:creeping_plantable_on', block)
        event.add('tfc:creeping_stone_plantable_on', block)
        event.add('beneath:nether_bush_plantable_on', block)
        event.add('minecraft:nether_carver_replaceables', block);
    })

    event.add('tfc:creeping_plantable_on', 'tfg:wood/leaves/araucaria')
    event.add('tfc:creeping_plantable_on', 'tfg:wood/leaves/mahoe')
    event.add('tfc:creeping_plantable_on', 'tfg:wood/leaves/ginkgo')
    event.add('tfc:creeping_plantable_on', 'tfg:wood/leaves/beech')
    event.add('tfc:creeping_plantable_on', 'tfg:wood/leaves/mangrove')

    event.add('minecraft:mineable/pickaxe', 'minecraft:lantern');

    event.add('minecraft:mineable/pickaxe', 'minecraft:cobweb');
    event.add('minecraft:mineable/hoe', 'minecraft:cobweb');
    event.add('minecraft:mineable/shovel', 'minecraft:cobweb');
    event.add('minecraft:mineable/axe', 'minecraft:cobweb');
    
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

    event.add('tfg:nether_lakes_and_geodes', "tfg:nether/terrain/lava_lake");
    event.add('tfg:nether_lakes_and_geodes', "tfg:nether/terrain/spring_water_lake");
    event.add('tfg:nether_lakes_and_geodes', "minecraft:basalt_pillar");
    event.add('tfg:nether_lakes_and_geodes', "tfg:earth/geode/amethyst");
    event.add('tfg:nether_lakes_and_geodes', 'beneath:vein/crackrack_pipe')

	event.add('tfg:nether_underground_decoration', 'minecraft:spring_open')
	event.add('tfg:nether_underground_decoration', 'minecraft:spring_closed')
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/magma_blob')
    
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/cave_column')
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/large_cave_spike')
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/noise_cave_stalagmite')
	event.add('tfg:nether_underground_decoration', 'tfg:nether/terrain/noise_cave_stalagtite')
	event.add('tfg:nether_underground_decoration', "tfg:nether/terrain/glowstone_ceiling")
	event.add('tfg:nether_underground_decoration', "beneath:blackstone_boulders")
    event.add('tfg:nether_underground_decoration', "tfg:nether/terrain/cobble_boulder")
    event.add('tfg:nether_underground_decoration', "tfg:nether/terrain/cobble_boulder_patch")
    event.add('tfg:nether_underground_decoration', "tfg:nether/terrain/raw_boulder")
    event.add('tfg:nether_underground_decoration', "tfg:nether/terrain/raw_boulder_patch")

	event.add('tfg:nether_global_decoration', 'tfg:nether/surface/loose_rocks')
	event.add('tfg:nether_global_decoration', 'tfc:cave_spike')
    event.add('tfg:nether_global_decoration', "tfg:glow_lichen");
    event.add('tfg:nether_global_decoration', "beneath:glowstone_spikes");
}
