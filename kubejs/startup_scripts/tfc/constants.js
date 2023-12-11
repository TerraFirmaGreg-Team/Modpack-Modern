// priority: 0

/**
 * Хранит список всех имен типов камней в TFC.
 */
global.TFC_STONE_TYPES = [
    'gabbro', 
    'shale', 
    'claystone', 
    'limestone', 
    'conglomerate', 
    'dolomite', 
    'chert', 
    'chalk', 
    'rhyolite', 
    'dacite', 
    'quartzite', 
    'slate', 
    'phyllite', 
    'schist', 
    'gneiss', 
    'marble',
    'basalt', // Есть в GT
    'diorite', // Есть в GT
    'andesite', // Есть в GT
    'granite' // Есть в GT
];

global.TFC_WOOD_TYPES = [
    "acacia", // Есть в Minecraft
    "ash",
    "aspen",
    "birch", // Есть в Minecraft
    "blackwood",
    "chestnut",
    "douglas_fir",
    "hickory",
    "kapok",
    "magrove",
    "maple",
    "oak", // Есть в Minecraft
    "palm",
    "pine",
    "rosewood",
    "sequoia",
    "spruce",
    "sycamore",
    "white_cedar",
    "willow"
];

global.TFC_WOOD_ITEM_TYPES_TO_WOOD_DUST = {
    '#tfc:lumber': { name: 'lumber', output: ['1x gtceu:wood_dust'] },
    '#tfc:support_beams': { name: 'support_beams', output: ['2x gtceu:wood_dust'] },
    '#minecraft:boats': { name: 'boats', output: ['5x gtceu:wood_dust'] },
    '#tfc:minecarts': { name: 'minecarts', output: ['5x gtceu:wood_dust', '1x gtceu:wrought_iron_small_dust'] },
    '#minecraft:signs': { name: 'signs', output: ['1x gtceu:wood_dust'] },
    '#minecraft:hanging_signs': { name: 'hanging_signs', output: ['1x gtceu:wood_dust'] },
    '#minecraft:logs': { name: 'logs', output: ['6x gtceu:wood_dust'] },
    '#minecraft:planks': { name: 'planks', output: ['1x gtceu:wood_dust'] },
    '#tfc:bookshelves': { name: 'bookshelves', output: ['6x gtceu:wood_dust'] },
    '#minecraft:wooden_doors': { name: 'wooden_doors', output: ['2x gtceu:wood_dust'] },
    '#minecraft:wooden_trapdoors': { name: 'wooden_trapdoors', output: ['2x gtceu:wood_dust'] },
    '#minecraft:wooden_fences': { name: 'wooden_fences', output: ['1x gtceu:wood_dust'] },
    '#forge:fence_gates/wooden': { name: 'wooden_fence_gates', output: ['1x gtceu:wood_dust'] },
    '#minecraft:wooden_buttons': { name: 'wooden_buttons', output: ['1x gtceu:wood_dust'] },
    '#minecraft:wooden_pressure_plates': { name: 'wooden_pressure_plates', output: ['1x gtceu:wood_dust'] },
    '#minecraft:wooden_slabs': { name: 'wooden_slabs', output: ['2x gtceu:wood_dust'] },
    '#minecraft:wooden_stairs': { name: 'wooden_stairs', output: ['2x gtceu:wood_dust'] },
    '#tfc:tool_racks': { name: 'tool_racks', output: ['1x gtceu:wood_dust'] },
    '#tfc:twigs': { name: 'twigs', output: ['1x gtceu:wood_dust'] },
    '#tfc:workbenches': { name: 'workbenches', output: ['1x gtceu:wood_dust'] },
    '#tfg:only_default_wooden_chests': { name: 'wooden_chests', output: ['8x gtceu:wood_dust'] },
    '#tfg:only_trapped_wooden_chests': { name: 'trapped_wooden_chests', output: ['8x gtceu:wood_dust', '1x gtceu:wrought_iron_small_dust'] },
    '#tfc:looms': { name: 'looms', output: ['2x gtceu:wood_dust'] },
    '#tfc:sluices': { name: 'sluices', output: ['4x gtceu:wood_dust'] },
    '#tfc:barrels': { name: 'barrels', output: ['2x gtceu:wood_dust'] },
    '#tfc:lecterns': { name: 'lecterns', output: ['4x gtceu:wood_dust'] },
    '#tfc:scribing_tables': { name: 'scribing_tables', output: ['1x gtceu:wood_dust'] },
    '#tfc:jar_shelves': { name: 'jar_shelves', output: ['1x gtceu:wood_dust'] },
    '#tfc:axles': { name: 'axles', output: ['1x gtceu:wood_dust'] },
    '#tfg:bladed_axles': { name: 'bladed_axles', output: ['1x gtceu:wood_dust'] },
    '#tfc:clutches': { name: 'clutches', output: ['1x gtceu:wood_dust'] },
    '#tfc:gear_boxes': { name: 'gear_boxes', output: ['3x gtceu:wood_dust'] },
    '#tfc:water_wheels': { name: 'water_wheels', output: ['4x gtceu:wood_dust'] },
    '#tfcastikorcarts:cart_wheel': { name: '', output: ['1x gtceu:wood_dust'] },
    '#tfcastikorcarts:plow': { name: 'plow', output: ['2x gtceu:wood_dust'] },
    '#tfcastikorcarts:animal_cart': { name: 'animal_cart', output: ['2x gtceu:wood_dust'] },
    '#tfcastikorcarts:supply_cart': { name: 'supply_cart', output: ['2x gtceu:wood_dust'] },
};

/**
 * Хранит названия типов полублоков из камня в TFC.
 */
global.TFC_ROCK_SLAB_BLOCK_TYPES = [
    'raw',
    'smooth',
    'bricks',
    'cobble',
    'mossy_bricks',
    'mossy_cobble',
    'cracked_bricks'
];

/**
 * Хранит названия цветов песка в TFC.
 */
global.SAND_COLORS = [
    'brown',
    'white',
    'black',
    'red',
    'yellow',
    'green',
    'pink'
];

/**
 * Указывает, что у этого металла есть: ingot.
 */
global.INGOT_GEN = 'ingot';

/**
 * Указывает, что у этого металла есть: double_ingot.
 */
global.DOUBLE_INGOT_GEN = 'double_ingot';

/**
 * Указывает, что у этого металла есть: nugget.
 */
global.NUGGET_GEN = 'nugget';

/**
 * Указывает, что у этого металла есть: dust_tiny, dust_small, dust.
 */
global.DUST_GEN = 'dusts';

/**
 * Указывает, что у этого металла есть куски руд, poor_raw, raw, rich_raw.
 */
global.ORE_CHUNKS_GEN = 'ore_chunks';

/**
 * Указывает, что у этого металла есть: sheet, double_sheet, rod, block, block_stairs, block_slab.
 */
global.PART_GEN = 'part';

/**
 * Указывает, что у этого металла есть: anvil, bars, chain, trapdoor, lamp, unfinished_lamp.
 */
global.UTILITY_GEN = 'utility';

/**
 * Указывает, что у этого металла есть: boots, greaves, chestplate, helmet, shield, unfinished_boots, unfinished_chestplate, unfinished_greaves, unfinished_helmet.
 */
global.ARMOR_GEN = 'armor';

/**
 * Указывает, что у этого металла есть: инструменты и оголовья.
 */
global.GT_TOOL_GEN = 'tool';

/**
 * Указывает, что у этого металла есть: ведро.
 */
global.TFC_BUCKET_GEN = 'bucket';

/**
 * Указывает, что у этого металла есть чистый кусок (тфк штука).
 */
global.TFC_SMALL_NATIVE_ORE_GEN = 'small_native_ore';

/**
 * Указывает, что у этого металла есть кусок (тфк штука).
 */
global.TFC_SMALL_ORE_GEN = 'small_ore';

global.METAL_TO_SPECS = {
    gold: {
        forging_temp: 636,
        welding_temp: 848,
        melt_temp: 1060,
        fluid: "gtceu:gold",
        tier: 1,
        percent_of_material: 100,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_CHUNKS_GEN,
            global.PART_GEN,
            global.TFC_SMALL_NATIVE_ORE_GEN
        ]
    },

    copper: {
        forging_temp: 648,
        welding_temp: 864,
        melt_temp: 1080,
        fluid: "gtceu:copper",
        tier: 1,
        percent_of_material: 100,
        canBeUnmolded: true,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_CHUNKS_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.UTILITY_GEN,
            global.TFC_SMALL_NATIVE_ORE_GEN
        ]
    },

    bismuth: {
        forging_temp: 162,
        welding_temp: 216,
        melt_temp: 270,
        fluid: "gtceu:bismuth",
        tier: 1,
        percent_of_material: 100,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_CHUNKS_GEN,
            global.PART_GEN
        ],
        isGTDup: true
    },

    brass: {
        forging_temp: 558,
        welding_temp: 744,
        melt_temp: 930,
        fluid: "gtceu:brass",
        percent_of_material: 100,
        tier: 2,
        props: [
            global.INGOT_GEN, 
            global.DOUBLE_INGOT_GEN, 
            global.NUGGET_GEN, 
            global.DUST_GEN, 
            global.PART_GEN
        ],
        isGTDup: true
    },

    nickel: {
        forging_temp: 872,
        welding_temp: 1162,
        melt_temp: 1453,
        fluid: "gtceu:nickel",
        percent_of_material: 100,
        tier: 1,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_CHUNKS_GEN,
            global.PART_GEN
        ],
        isGTDup: true
    },

    rose_gold: {
        forging_temp: 576,
        welding_temp: 768,
        melt_temp: 960,
        fluid: "gtceu:rose_gold",
        percent_of_material: 100,
        tier: 1,
        props: [
            global.INGOT_GEN, 
            global.DOUBLE_INGOT_GEN, 
            global.NUGGET_GEN, 
            global.DUST_GEN, 
            global.PART_GEN
        ],
        isGTDup: true
    },

    silver: {
        forging_temp: 577,
        welding_temp: 769,
        melt_temp: 961,
        fluid: "gtceu:silver",
        percent_of_material: 100,
        tier: 1,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_CHUNKS_GEN,
            global.PART_GEN,
            global.TFC_SMALL_NATIVE_ORE_GEN
        ],
        isGTDup: true
    },

    tin: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 230,
        fluid: "gtceu:tin",
        percent_of_material: 100,
        tier: 1,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_CHUNKS_GEN,
            global.PART_GEN
        ],
        isGTDup: true
    },

    zinc: {
        forging_temp: 252,
        welding_temp: 336,
        melt_temp: 420,
        fluid: "gtceu:zinc",
        percent_of_material: 100,
        tier: 1,
        props: [
            global.INGOT_GEN, 
            global.DOUBLE_INGOT_GEN, 
            global.NUGGET_GEN, 
            global.DUST_GEN, 
            global.PART_GEN
        ],
        isGTDup: true
    },

    sterling_silver: {
        forging_temp: 570,
        welding_temp: 760,
        melt_temp: 950,
        fluid: "gtceu:sterling_silver",
        percent_of_material: 100,
        tier: 1,
        props: [
            global.INGOT_GEN, 
            global.DOUBLE_INGOT_GEN, 
            global.NUGGET_GEN, 
            global.DUST_GEN, 
            global.PART_GEN
        ],
        isGTDup: true
    },
    
    bismuth_bronze: {
        forging_temp: 591,
        welding_temp: 788,
        melt_temp: 985,
        fluid: "gtceu:bismuth_bronze",
        percent_of_material: 100,
        tier: 2,
        canBeUnmolded: true,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.UTILITY_GEN
        ],
        isGTDup: true
    },

    bronze: {
        forging_temp: 570,
        welding_temp: 760,
        melt_temp: 950,
        fluid: "gtceu:bronze",
        percent_of_material: 100,
        tier: 1,
        canBeUnmolded: true,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.UTILITY_GEN
        ],
        isGTDup: true
    },

    black_bronze: {
        forging_temp: 642,
        welding_temp: 856,
        melt_temp: 1070,
        fluid: "gtceu:black_bronze",
        percent_of_material: 100,
        tier: 2,
        canBeUnmolded: true,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.UTILITY_GEN
        ],
        isGTDup: true
    },

    wrought_iron: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluid: "tfc:metal/cast_iron",
        percent_of_material: 100,
        tier: 3,
        props: [
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.UTILITY_GEN
        ],
        isGTDup: true
    },

    cast_iron: 
    { 
        forging_temp: 921, 
        welding_temp: 1228, 
        melt_temp: 1535, 
        fluid: "tfc:metal/cast_iron",
        tier: 1, 
        props: [] 
    },

    pig_iron: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluid: "tfc:metal/pig_iron",
        tier: 3,
        props: [global.INGOT_GEN],
    },

    steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluid: "gtceu:steel",
        percent_of_material: 100,
        tier: 4,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.UTILITY_GEN
        ],
        isGTDup: true
    },

    high_carbon_black_steel: {
        forging_temp: 924,
        melt_temp: 1540,
        welding_temp: 1232,
        fluid: "tfc:metal/high_carbon_black_steel",
        tier: 5,
        props: [global.INGOT_GEN],
    },

    high_carbon_red_steel: {
        forging_temp: 924,
        melt_temp: 1540,
        welding_temp: 1232,
        fluid: "tfc:metal/high_carbon_red_steel",
        tier: 5,
        props: [global.INGOT_GEN],
    },

    high_carbon_blue_steel: {
        forging_temp: 924,
        melt_temp: 1540,
        welding_temp: 1232,
        fluid: "tfc:metal/high_carbon_blue_steel",
        tier: 4,
        props: [global.INGOT_GEN],
    },

    high_carbon_steel: {
        forging_temp: 924,
        melt_temp: 1540,
        welding_temp: 1232,
        fluid: "tfc:metal/high_carbon_steel",
        tier: 3,
        props: [global.INGOT_GEN],
    },

    weak_steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluid: "tfc:metal/weak_steel",
        tier: 4,
        props: [global.INGOT_GEN],
    },

    weak_red_steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluid: "tfc:metal/weak_red_steel",
        tier: 5,
        props: [global.INGOT_GEN],
    },

    weak_blue_steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluid: "tfc:metal/weak_blue_steel",
        tier: 5,
        props: [global.INGOT_GEN],
    },

    black_steel: {
        forging_temp: 891,
        welding_temp: 1188,
        melt_temp: 1485,
        fluid: "gtceu:black_steel",
        percent_of_material: 100,
        tier: 5,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.UTILITY_GEN
        ],
        isGTDup: true
    },

    red_steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluid: "gtceu:red_steel",
        percent_of_material: 100,
        tier: 6,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.UTILITY_GEN,
            global.TFC_BUCKET_GEN
        ],
        isGTDup: true
    },

    blue_steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluid: "gtceu:blue_steel",
        percent_of_material: 100,
        tier: 6,
        props: [
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.UTILITY_GEN,
            global.TFC_BUCKET_GEN
        ],
        isGTDup: true
    },

    unknown: {
        forging_temp: 240,
        welding_temp: 320,
        melt_temp: 400,
        fluid: "tfc:metal/unknown",
        tier: 1,
        props: [global.INGOT_GEN],
    },

    bismuthinite: {
        forging_temp: 162,
        welding_temp: 216,
        melt_temp: 270,
        fluid: "gtceu:bismuth",
        percent_of_material: 100,
        tier: 1,
        props: [global.TFC_SMALL_ORE_GEN],
    },
    
    cassiterite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 230,
        fluid: "gtceu:tin",
        percent_of_material: 200,
        tier: 1,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN, 
            global.TFC_SMALL_ORE_GEN
        ],
    },

    garnierite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 1453,
        fluid: "gtceu:nickel",
        percent_of_material: 90,
        tier: 1,
        props: [
            global.DUST_GEN,
            global.ORE_CHUNKS_GEN, 
            global.TFC_SMALL_ORE_GEN
        ],
    },

    hematite: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluid: "tfc:metal/cast_iron",
        percent_of_material: 90,
        tier: 3,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN, 
            global.TFC_SMALL_ORE_GEN
        ],
    },

    yellow_limonite: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluid: "tfc:metal/cast_iron",
        percent_of_material: 90,
        tier: 3,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN
        ],
    },

    limonite: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluid: "tfc:metal/cast_iron",
        percent_of_material: 85,
        tier: 3,
        props: [global.TFC_SMALL_ORE_GEN],
    },

    magnetite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 1535,
        fluid: "tfc:metal/cast_iron",
        percent_of_material: 90,
        tier: 3,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN, 
            global.TFC_SMALL_ORE_GEN
        ],
    },

    malachite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 1080,
        fluid: "gtceu:copper",
        percent_of_material: 90,
        tier: 1,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN, 
            global.TFC_SMALL_ORE_GEN
        ],
    },

    pyrite: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluid: "tfc:metal/cast_iron",
        percent_of_material: 90,
        tier: 3,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN
        ],
    },

    sphalerite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 420,
        fluid: "gtceu:zinc",
        percent_of_material: 90,
        tier: 1,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN, 
            global.TFC_SMALL_ORE_GEN
        ],
    },

    tetrahedrite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 1080,
        fluid: "gtceu:copper",
        percent_of_material: 90,
        tier: 1,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN, 
            global.TFC_SMALL_ORE_GEN
        ],
    },

    chalcopyrite: {
        forging_temp: 648,
        welding_temp: 864,
        melt_temp: 1080,
        fluid: "gtceu:copper",
        percent_of_material: 90,
        tier: 1,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN
        ],
    },

    cassiterite_sand: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 230,
        fluid: "gtceu:tin",
        percent_of_material: 150,
        tier: 1,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN
        ],
    },

    goethite: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluid: "tfc:metal/cast_iron",
        percent_of_material: 85,
        tier: 3,
        props: [
            global.DUST_GEN, 
            global.ORE_CHUNKS_GEN
        ],
    }
};

/**
 * Список хранит предметы, 
 * у которых должны быть удалены тэги и они должны быть скрыты в REI.
 */
global.TFC_DISABLED_ITEMS = [
    
    // Blocks
    'tfc:metal/block/bismuth', 
    'tfc:metal/block/bismuth_bronze', 
    'tfc:metal/block/black_bronze', 
    'tfc:metal/block/bronze', 
    'tfc:metal/block/brass', 
    'tfc:metal/block/copper', 
    'tfc:metal/block/gold', 
    'tfc:metal/block/nickel', 
    'tfc:metal/block/rose_gold', 
    'tfc:metal/block/silver', 
    'tfc:metal/block/tin', 
    'tfc:metal/block/zinc', 
    'tfc:metal/block/sterling_silver', 
    'tfc:metal/block/wrought_iron', 
    'tfc:metal/block/cast_iron', 
    'tfc:metal/block/steel', 
    'tfc:metal/block/black_steel', 
    'tfc:metal/block/blue_steel', 
    'tfc:metal/block/red_steel',

    // Stairs
    'tfc:metal/block/bismuth_stairs', 
    'tfc:metal/block/bismuth_bronze_stairs', 
    'tfc:metal/block/black_bronze_stairs', 
    'tfc:metal/block/bronze_stairs', 
    'tfc:metal/block/brass_stairs', 
    'tfc:metal/block/copper_stairs', 
    'tfc:metal/block/gold_stairs', 
    'tfc:metal/block/nickel_stairs', 
    'tfc:metal/block/rose_gold_stairs', 
    'tfc:metal/block/silver_stairs', 
    'tfc:metal/block/tin_stairs', 
    'tfc:metal/block/zinc_stairs', 
    'tfc:metal/block/sterling_silver_stairs', 
    'tfc:metal/block/wrought_iron_stairs', 
    'tfc:metal/block/cast_iron_stairs', 
    'tfc:metal/block/steel_stairs', 
    'tfc:metal/block/black_steel_stairs', 
    'tfc:metal/block/blue_steel_stairs', 
    'tfc:metal/block/red_steel_stairs',

    // Slabs
    'tfc:metal/block/bismuth_slab', 
    'tfc:metal/block/bismuth_bronze_slab', 
    'tfc:metal/block/black_bronze_slab', 
    'tfc:metal/block/bronze_slab', 
    'tfc:metal/block/brass_slab', 
    'tfc:metal/block/copper_slab', 
    'tfc:metal/block/gold_slab', 
    'tfc:metal/block/nickel_slab', 
    'tfc:metal/block/rose_gold_slab', 
    'tfc:metal/block/silver_slab', 
    'tfc:metal/block/tin_slab', 
    'tfc:metal/block/zinc_slab', 
    'tfc:metal/block/sterling_silver_slab', 
    'tfc:metal/block/wrought_iron_slab', 
    'tfc:metal/block/cast_iron_slab', 
    'tfc:metal/block/steel_slab', 
    'tfc:metal/block/black_steel_slab', 
    'tfc:metal/block/blue_steel_slab', 
    'tfc:metal/block/red_steel_slab',

    // Ingots
    "tfc:metal/ingot/bismuth",
    "tfc:metal/ingot/bismuth_bronze",
    "tfc:metal/ingot/black_bronze",
    "tfc:metal/ingot/bronze",
    "tfc:metal/ingot/rose_gold",
    "tfc:metal/ingot/sterling_silver",
    "tfc:metal/ingot/wrought_iron",
    "tfc:metal/ingot/steel",
    "tfc:metal/ingot/black_steel",
    "tfc:metal/ingot/red_steel",
    "tfc:metal/ingot/blue_steel",
    "tfc:metal/ingot/brass",
    "tfc:metal/ingot/copper",
    "tfc:metal/ingot/gold",
    "tfc:metal/ingot/nickel",
    "tfc:metal/ingot/silver",
    "tfc:metal/ingot/tin",
    "tfc:metal/ingot/zinc",
    "tfc:metal/ingot/cast_iron",

    // Double Ingots
    "tfc:metal/double_ingot/cast_iron",
    
    // Sheets
    "tfc:metal/sheet/bismuth",
    "tfc:metal/sheet/bismuth_bronze",
    "tfc:metal/sheet/black_bronze",
    "tfc:metal/sheet/bronze",
    "tfc:metal/sheet/rose_gold",
    "tfc:metal/sheet/sterling_silver",
    "tfc:metal/sheet/wrought_iron",
    "tfc:metal/sheet/cast_iron",
    "tfc:metal/sheet/steel",
    "tfc:metal/sheet/black_steel",
    "tfc:metal/sheet/red_steel",
    "tfc:metal/sheet/blue_steel",
    "tfc:metal/sheet/brass",
    "tfc:metal/sheet/copper",
    "tfc:metal/sheet/gold",
    "tfc:metal/sheet/nickel",
    "tfc:metal/sheet/silver",
    "tfc:metal/sheet/tin",
    "tfc:metal/sheet/zinc",
    "tfc:metal/sheet/cast_iron",
    
    // Double Sheets
    "tfc:metal/double_sheet/bismuth",
    "tfc:metal/double_sheet/bismuth_bronze",
    "tfc:metal/double_sheet/black_bronze",
    "tfc:metal/double_sheet/bronze",
    "tfc:metal/double_sheet/rose_gold",
    "tfc:metal/double_sheet/sterling_silver",
    "tfc:metal/double_sheet/wrought_iron",
    "tfc:metal/double_sheet/cast_iron",
    "tfc:metal/double_sheet/steel",
    "tfc:metal/double_sheet/black_steel",
    "tfc:metal/double_sheet/red_steel",
    "tfc:metal/double_sheet/blue_steel",
    "tfc:metal/double_sheet/brass",
    "tfc:metal/double_sheet/copper",
    "tfc:metal/double_sheet/gold",
    "tfc:metal/double_sheet/nickel",
    "tfc:metal/double_sheet/silver",
    "tfc:metal/double_sheet/tin",
    "tfc:metal/double_sheet/zinc",
    "tfc:metal/double_sheet/cast_iron",
    
    // Rods
    "tfc:metal/rod/bismuth",
    "tfc:metal/rod/bismuth_bronze",
    "tfc:metal/rod/black_bronze",
    "tfc:metal/rod/bronze",
    "tfc:metal/rod/rose_gold",
    "tfc:metal/rod/sterling_silver",
    "tfc:metal/rod/wrought_iron",
    "tfc:metal/rod/cast_iron",
    "tfc:metal/rod/steel",
    "tfc:metal/rod/black_steel",
    "tfc:metal/rod/red_steel",
    "tfc:metal/rod/blue_steel",
    "tfc:metal/rod/brass",
    "tfc:metal/rod/copper",
    "tfc:metal/rod/gold",
    "tfc:metal/rod/nickel",
    "tfc:metal/rod/silver",
    "tfc:metal/rod/tin",
    "tfc:metal/rod/zinc",
    "tfc:metal/rod/cast_iron",
    
    // Tool Heads
    // Copper
    'tfc:metal/pickaxe/copper', 
    'tfc:metal/pickaxe_head/copper', 
    'tfc:metal/axe/copper', 
    'tfc:metal/axe_head/copper', 
    'tfc:metal/shovel/copper', 
    'tfc:metal/shovel_head/copper', 
    'tfc:metal/hoe/copper', 
    'tfc:metal/hoe_head/copper', 
    'tfc:metal/hammer/copper', 
    'tfc:metal/hammer_head/copper', 
    'tfc:metal/saw/copper', 
    'tfc:metal/saw_blade/copper', 
    'tfc:metal/sword/copper', 
    'tfc:metal/sword_blade/copper', 
    'tfc:metal/knife/copper', 
    'tfc:metal/knife_blade/copper', 
    'tfc:metal/scythe/copper', 
    'tfc:metal/scythe_blade/copper',

    // Bismuth Bronze
    'tfc:metal/pickaxe/bismuth_bronze', 
    'tfc:metal/pickaxe_head/bismuth_bronze', 
    'tfc:metal/axe/bismuth_bronze', 
    'tfc:metal/axe_head/bismuth_bronze', 
    'tfc:metal/shovel/bismuth_bronze', 
    'tfc:metal/shovel_head/bismuth_bronze', 
    'tfc:metal/hoe/bismuth_bronze', 
    'tfc:metal/hoe_head/bismuth_bronze', 
    'tfc:metal/hammer/bismuth_bronze', 
    'tfc:metal/hammer_head/bismuth_bronze', 
    'tfc:metal/saw/bismuth_bronze', 
    'tfc:metal/saw_blade/bismuth_bronze', 
    'tfc:metal/sword/bismuth_bronze', 
    'tfc:metal/sword_blade/bismuth_bronze', 
    'tfc:metal/knife/bismuth_bronze', 
    'tfc:metal/knife_blade/bismuth_bronze', 
    'tfc:metal/scythe/bismuth_bronze', 
    'tfc:metal/scythe_blade/bismuth_bronze',

    // Bronze
    'tfc:metal/pickaxe/bronze', 
    'tfc:metal/pickaxe_head/bronze', 
    'tfc:metal/axe/bronze', 
    'tfc:metal/axe_head/bronze', 
    'tfc:metal/shovel/bronze', 
    'tfc:metal/shovel_head/bronze', 
    'tfc:metal/hoe/bronze', 
    'tfc:metal/hoe_head/bronze', 
    'tfc:metal/hammer/bronze', 
    'tfc:metal/hammer_head/bronze', 
    'tfc:metal/saw/bronze', 
    'tfc:metal/saw_blade/bronze', 
    'tfc:metal/sword/bronze', 
    'tfc:metal/sword_blade/bronze', 
    'tfc:metal/knife/bronze', 
    'tfc:metal/knife_blade/bronze', 
    'tfc:metal/scythe/bronze', 
    'tfc:metal/scythe_blade/bronze',

    // Black Bronze
    'tfc:metal/pickaxe/black_bronze', 
    'tfc:metal/pickaxe_head/black_bronze', 
    'tfc:metal/axe/black_bronze', 
    'tfc:metal/axe_head/black_bronze', 
    'tfc:metal/shovel/black_bronze', 
    'tfc:metal/shovel_head/black_bronze', 
    'tfc:metal/hoe/black_bronze', 
    'tfc:metal/hoe_head/black_bronze', 
    'tfc:metal/hammer/black_bronze', 
    'tfc:metal/hammer_head/black_bronze', 
    'tfc:metal/saw/black_bronze', 
    'tfc:metal/saw_blade/black_bronze', 
    'tfc:metal/sword/black_bronze', 
    'tfc:metal/sword_blade/black_bronze', 
    'tfc:metal/knife/black_bronze', 
    'tfc:metal/knife_blade/black_bronze', 
    'tfc:metal/scythe/black_bronze', 
    'tfc:metal/scythe_blade/black_bronze',

    // Wrought Iron
    'tfc:metal/pickaxe/wrought_iron', 
    'tfc:metal/pickaxe_head/wrought_iron', 
    'tfc:metal/axe/wrought_iron', 
    'tfc:metal/axe_head/wrought_iron', 
    'tfc:metal/shovel/wrought_iron', 
    'tfc:metal/shovel_head/wrought_iron', 
    'tfc:metal/hoe/wrought_iron', 
    'tfc:metal/hoe_head/wrought_iron', 
    'tfc:metal/hammer/wrought_iron', 
    'tfc:metal/hammer_head/wrought_iron', 
    'tfc:metal/saw/wrought_iron', 
    'tfc:metal/saw_blade/wrought_iron', 
    'tfc:metal/sword/wrought_iron', 
    'tfc:metal/sword_blade/wrought_iron', 
    'tfc:metal/knife/wrought_iron', 
    'tfc:metal/knife_blade/wrought_iron', 
    'tfc:metal/scythe/wrought_iron', 
    'tfc:metal/scythe_blade/wrought_iron',

    // Steel
    'tfc:metal/pickaxe/steel', 
    'tfc:metal/pickaxe_head/steel', 
    'tfc:metal/axe/steel', 
    'tfc:metal/axe_head/steel', 
    'tfc:metal/shovel/steel', 
    'tfc:metal/shovel_head/steel', 
    'tfc:metal/hoe/steel', 
    'tfc:metal/hoe_head/steel', 
    'tfc:metal/hammer/steel', 
    'tfc:metal/hammer_head/steel', 
    'tfc:metal/saw/steel', 
    'tfc:metal/saw_blade/steel', 
    'tfc:metal/sword/steel', 
    'tfc:metal/sword_blade/steel', 
    'tfc:metal/knife/steel', 
    'tfc:metal/knife_blade/steel', 
    'tfc:metal/scythe/steel', 
    'tfc:metal/scythe_blade/steel',

    // Black Steel
    'tfc:metal/pickaxe/black_steel', 
    'tfc:metal/pickaxe_head/black_steel', 
    'tfc:metal/axe/black_steel', 
    'tfc:metal/axe_head/black_steel', 
    'tfc:metal/shovel/black_steel', 
    'tfc:metal/shovel_head/black_steel', 
    'tfc:metal/hoe/black_steel', 
    'tfc:metal/hoe_head/black_steel', 
    'tfc:metal/hammer/black_steel', 
    'tfc:metal/hammer_head/black_steel', 
    'tfc:metal/saw/black_steel', 
    'tfc:metal/saw_blade/black_steel', 
    'tfc:metal/sword/black_steel', 
    'tfc:metal/sword_blade/black_steel', 
    'tfc:metal/knife/black_steel', 
    'tfc:metal/knife_blade/black_steel', 
    'tfc:metal/scythe/black_steel', 
    'tfc:metal/scythe_blade/black_steel',

    // Red Steel
    'tfc:metal/pickaxe/red_steel', 
    'tfc:metal/pickaxe_head/red_steel', 
    'tfc:metal/axe/red_steel', 
    'tfc:metal/axe_head/red_steel', 
    'tfc:metal/shovel/red_steel', 
    'tfc:metal/shovel_head/red_steel', 
    'tfc:metal/hoe/red_steel', 
    'tfc:metal/hoe_head/red_steel', 
    'tfc:metal/hammer/red_steel', 
    'tfc:metal/hammer_head/red_steel', 
    'tfc:metal/saw/red_steel', 
    'tfc:metal/saw_blade/red_steel', 
    'tfc:metal/sword/red_steel', 
    'tfc:metal/sword_blade/red_steel', 
    'tfc:metal/knife/red_steel', 
    'tfc:metal/knife_blade/red_steel', 
    'tfc:metal/scythe/red_steel', 
    'tfc:metal/scythe_blade/red_steel',

    // Blue Steel
    'tfc:metal/pickaxe/blue_steel', 
    'tfc:metal/pickaxe_head/blue_steel', 
    'tfc:metal/axe/blue_steel', 
    'tfc:metal/axe_head/blue_steel', 
    'tfc:metal/shovel/blue_steel', 
    'tfc:metal/shovel_head/blue_steel', 
    'tfc:metal/hoe/blue_steel', 
    'tfc:metal/hoe_head/blue_steel', 
    'tfc:metal/hammer/blue_steel', 
    'tfc:metal/hammer_head/blue_steel', 
    'tfc:metal/saw/blue_steel', 
    'tfc:metal/saw_blade/blue_steel', 
    'tfc:metal/sword/blue_steel', 
    'tfc:metal/sword_blade/blue_steel', 
    'tfc:metal/knife/blue_steel', 
    'tfc:metal/knife_blade/blue_steel', 
    'tfc:metal/scythe/blue_steel', 
    'tfc:metal/scythe_blade/blue_steel',
    
    /*
    // Ores
    'tfc:ore/poor_native_copper', 
    'tfc:ore/normal_native_copper', 
    'tfc:ore/rich_native_copper',
    'tfc:ore/poor_native_gold', 
    'tfc:ore/normal_native_gold', 
    'tfc:ore/rich_native_gold', 
    'tfc:ore/poor_hematite', 
    'tfc:ore/normal_hematite', 
    'tfc:ore/rich_hematite', 
    'tfc:ore/rich_tetrahedrite', 
    'tfc:ore/normal_tetrahedrite', 
    'tfc:ore/poor_tetrahedrite',
    'tfc:ore/rich_sphalerite', 
    'tfc:ore/normal_sphalerite', 
    'tfc:ore/poor_sphalerite', 
    'tfc:ore/rich_limonite', 
    'tfc:ore/normal_limonite', 
    'tfc:ore/poor_limonite', 
    'tfc:ore/rich_magnetite', 
    'tfc:ore/normal_magnetite', 
    'tfc:ore/poor_magnetite', 
    'tfc:ore/rich_malachite', 
    'tfc:ore/normal_malachite', 
    'tfc:ore/poor_malachite', 
    'tfc:ore/rich_garnierite', 
    'tfc:ore/normal_garnierite', 
    'tfc:ore/poor_garnierite', 
    'tfc:ore/rich_bismuthinite', 
    'tfc:ore/normal_bismuthinite', 
    'tfc:ore/poor_bismuthinite', 
    'tfc:ore/rich_cassiterite', 
    'tfc:ore/normal_cassiterite', 
    'tfc:ore/poor_cassiterite', 
    'tfc:ore/rich_native_silver', 
    'tfc:ore/normal_native_silver', 
    'tfc:ore/poor_native_silver',

    // Gems
    'tfc:gem/amethyst', 
    'tfc:gem/diamond', 
    'tfc:gem/lapis_lazuli', 
    'tfc:gem/emerald', 
    'tfc:gem/pyrite', 
    'tfc:gem/opal', 
    'tfc:gem/ruby', 
    'tfc:gem/sapphire', 
    'tfc:gem/topaz', 
    'tfc:ore/amethyst', 
    'tfc:ore/diamond', 
    'tfc:ore/lapis_lazuli', 
    'tfc:ore/emerald', 
    'tfc:ore/pyrite', 
    'tfc:ore/opal', 
    'tfc:ore/ruby', 
    'tfc:ore/sapphire', 
    'tfc:ore/topaz',

    'tfc:ore/graphite', 
    'tfc:ore/sulfur', 
    'tfc:ore/cinnabar', 
    'tfc:ore/cryolite', 
    'tfc:ore/saltpeter', 
    'tfc:ore/borax', 
    'tfc:ore/sylvite',
    'tfc:ore/bituminous_coal',
    'tfc:ore/lignite',
    'tfc:ore/halite',
    */
];

global.TFC_SIMPLE_MATERIALS = [
    "gypsum",
    "cinnabar",
    "cryolite",
    "saltpeter",
    "sylvite",
    "borax",
    "halite",
    "amethyst",
    "opal",
    "pyrite",
    "topaz",
    "bituminous_coal",
    "lignite",
    "graphite",
    "sulfur",
    "diamond",
    "emerald",
    "lapis_lazuli",
    "ruby",
    "sapphire"
]

global.TFC_ORE_TYPES = [
    "poor",
    "normal",
    "rich"
];

global.TFC_ORE_MATERIALS = [
    "bismuthinite",
    "cassiterite",
    "garnierite",
    "hematite",
    "limonite",
    "magnetite",
    "malachite",
    "native_copper",
    "native_gold",
    "native_silver",
    "sphalerite",
    "tetrahedrite"
];

global.calcAmountOfMetal = (defaultAmount, percents) => {
    const value = defaultAmount / (100 / percents)
    return (value % 2 == 0) ? value : Math.round(value) - 1
}