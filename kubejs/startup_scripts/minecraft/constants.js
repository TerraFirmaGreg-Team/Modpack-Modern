// priority: -100
"use strict";

global.MINECRAFT_HIDED_ITEMS = [
    '/spawn_egg/',
    
    // creative blocks
    'minecraft:bedrock',
    "minecraft:debug_stick",
    "minecraft:spawner",
	"minecraft:command_block", 
    "minecraft:repeating_command_block", 
	"minecraft:chain_command_block",
    "minecraft:command_block_minecart",
	"minecraft:light", 
	"minecraft:structure_void",
	"minecraft:jigsaw",
	"minecraft:structure_block", 

    // unobtainable but used in worldgen
    "minecraft:lantern",
    "minecraft:raw_iron_block",
	"minecraft:infested_deepslate",
    // unobtainable but used for recipe displays
	"minecraft:grass_block", 
    "minecraft:furnace",
    // mob heads
	"minecraft:piglin_head", 
	"minecraft:zombie_head", 
	"minecraft:dragon_head", 
	"minecraft:creeper_head", 
	"minecraft:wither_skeleton_skull", 
];

global.MINECRAFT_DYE_NAMES = [
    'white',
    'orange',
    'magenta',
    'light_blue',
    'yellow',
    'lime',
    'pink',
    'gray',
    'light_gray',
    'cyan',
    'purple',
    'blue',
    'brown',
    'green',
    'red',
    'black'
];

global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS = [
    // Default
    {
        block: 'minecraft:copper_block',
        cutted: 'minecraft:cut_copper',
        stairs: 'minecraft:cut_copper_stairs',
        slabs: 'minecraft:cut_copper_slab',
        shingles: 'create:copper_shingles',
        shingleStairs: 'create:copper_shingle_stairs',
        shingleSlabs: 'create:copper_shingle_slab',
        tiles: 'create:copper_tiles',
        tileStairs: 'create:copper_tile_stairs',
        tileSlabs: 'create:copper_tile_slab',
        name: 'copper'
    },
    {
        block: 'minecraft:exposed_copper',
        cutted: 'minecraft:exposed_cut_copper',
        stairs: 'minecraft:exposed_cut_copper_stairs',
        slabs: 'minecraft:exposed_cut_copper_slab',
        shingles: 'create:exposed_copper_shingles',
        shingleStairs: 'create:exposed_copper_shingle_stairs',
        shingleSlabs: 'create:exposed_copper_shingle_slab',
        tiles: 'create:exposed_copper_tiles',
        tileStairs: 'create:exposed_copper_tile_stairs',
        tileSlabs: 'create:exposed_copper_tile_slab',
        name: 'exposed_copper'
    },
    {
        block: 'minecraft:weathered_copper',
        cutted: 'minecraft:weathered_cut_copper',
        stairs: 'minecraft:weathered_cut_copper_stairs',
        slabs: 'minecraft:weathered_cut_copper_slab',
        shingles: 'create:weathered_copper_shingles',
        shingleStairs: 'create:weathered_copper_shingle_stairs',
        shingleSlabs: 'create:weathered_copper_shingle_slab',
        tiles: 'create:weathered_copper_tiles',
        tileStairs: 'create:weathered_copper_tile_stairs',
        tileSlabs: 'create:weathered_copper_tile_slab',
        name: 'weathered_copper'
    },
    {
        block: 'minecraft:oxidized_copper',
        cutted: 'minecraft:oxidized_cut_copper',
        stairs: 'minecraft:oxidized_cut_copper_stairs',
        slabs: 'minecraft:oxidized_cut_copper_slab',
        shingles: 'create:oxidized_copper_shingles',
        shingleStairs: 'create:oxidized_copper_shingle_stairs',
        shingleSlabs: 'create:oxidized_copper_shingle_slab',
        tiles: 'create:oxidized_copper_tiles',
        tileStairs: 'create:oxidized_copper_tile_stairs',
        tileSlabs: 'create:oxidized_copper_tile_slab',
        name: 'oxidized_copper'
    },
    // Waxed
    {
        block: 'minecraft:waxed_copper_block',
        cutted: 'minecraft:waxed_cut_copper',
        stairs: 'minecraft:waxed_cut_copper_stairs',
        slabs: 'minecraft:waxed_cut_copper_slab',
        shingles: 'create:waxed_copper_shingles',
        shingleStairs: 'create:waxed_copper_shingle_stairs',
        shingleSlabs: 'create:waxed_copper_shingle_slab',
        tiles: 'create:waxed_copper_tiles',
        tileStairs: 'create:waxed_copper_tile_stairs',
        tileSlabs: 'create:waxed_copper_tile_slab',
        name: 'waxed_copper'
    },
    {
        block: 'minecraft:waxed_exposed_copper',
        cutted: 'minecraft:waxed_exposed_cut_copper',
        stairs: 'minecraft:waxed_exposed_cut_copper_stairs',
        slabs: 'minecraft:waxed_exposed_cut_copper_slab',
        shingles: 'create:waxed_exposed_copper_shingles',
        shingleStairs: 'create:waxed_exposed_copper_shingle_stairs',
        shingleSlabs: 'create:waxed_exposed_copper_shingle_slab',
        tiles: 'create:waxed_exposed_copper_tiles',
        tileStairs: 'create:waxed_exposed_copper_tile_stairs',
        tileSlabs: 'create:waxed_exposed_copper_tile_slab',
        name: 'waxed_exposed_copper'
    },
    {
        block: 'minecraft:waxed_weathered_copper',
        cutted: 'minecraft:waxed_weathered_cut_copper',
        stairs: 'minecraft:waxed_weathered_cut_copper_stairs',
        slabs: 'minecraft:waxed_weathered_cut_copper_slab',
        shingles: 'create:waxed_weathered_copper_shingles',
        shingleStairs: 'create:waxed_weathered_copper_shingle_stairs',
        shingleSlabs: 'create:waxed_weathered_copper_shingle_slab',
        tiles: 'create:waxed_weathered_copper_tiles',
        tileStairs: 'create:waxed_weathered_copper_tile_stairs',
        tileSlabs: 'create:waxed_weathered_copper_tile_slab',
        name: 'waxed_weathered_copper'
    },
    {
        block: 'minecraft:waxed_oxidized_copper',
        cutted: 'minecraft:waxed_oxidized_cut_copper',
        stairs: 'minecraft:waxed_oxidized_cut_copper_stairs',
        slabs: 'minecraft:waxed_oxidized_cut_copper_slab',
        shingles: 'create:waxed_oxidized_copper_shingles',
        shingleStairs: 'create:waxed_oxidized_copper_shingle_stairs',
        shingleSlabs: 'create:waxed_oxidized_copper_shingle_slab',
        tiles: 'create:waxed_oxidized_copper_tiles',
        tileStairs: 'create:waxed_oxidized_copper_tile_stairs',
        tileSlabs: 'create:waxed_oxidized_copper_tile_slab',
        name: 'waxed_oxidized_copper'
    }
];
