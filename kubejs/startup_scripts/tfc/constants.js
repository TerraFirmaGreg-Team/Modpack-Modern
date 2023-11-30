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
 * Указывает, что у этого металла есть Слиток.
 */
global.INGOT_GEN = ["ingot"];

/**
 * Указывает, что у этого металла есть Двойной Слиток.
 */
global.DOUBLE_INGOT_GEN = ["double_ingot"];

/**
 * Указывает, что у этого металла есть Самородок.
 */
global.NUGGET_GEN = ["nugget"];

/**
 * Указывает, что у этого металла есть Пыль, Маленькая Пыль, Крошечная Пыль.
 */
global.DUST_GEN = ["dust", "dust_small", "dust_tiny"];

/**
 * Указывает, что у этого металла есть куски руд, Бедная, Нормальная, Богатая.
 */
global.ORE_GEN = ["poor_raw", "raw", "rich_raw"];

/**
 * Указывает, что у этого металла есть: Пластины, Двойные Пластины, Стержни, Блоки, Ступеньки, Полублоки.
 */
global.PART_GEN = [
    "sheet",
    "double_sheet",
    "rod",
    "block",
    "block_stairs",
    "block_slab",
];

/**
 * Указывает, что у этого металла есть броня с Unfinished вариантами: Ботинки, Штаны, Нагрудник, Шлем.
 */
global.ARMOR_GEN = [
    "boots",
    "greaves",
    "chestplate",
    "helmet",
    "shield",
    "unfinished_boots",
    "unfinished_chestplate",
    "unfinished_greaves",
    "unfinished_helmet",
];

/**
 * Указывает, что у этого металла есть: Наковальня, Решетка, Цепи, Лампа, Незаконченная Лампа, Люк.
 */
global.UTILITY_GEN = [
    "anvil",
    "bars",
    "chain",
    "lamp",
    "trapdoor",
    "unfinished_lamp",
];

/**
 * Указывает, что у этого металла есть оголовья и сами инстурменты ГТ.
 */
global.GT_TOOL_GEN = [
    "knife_butchery_head",
    "butchery_knife",
    "file_head",
    "file",
    "axe_head",
    "axe",
    "hammer_head",
    "hammer",
    "hoe",
    "hoe_head",
    "knife_blade",
    "knife",
    "saw_blade",
    "saw",
    "pickaxe_head",
    "pickaxe",
    "scythe_blade",
    "scythe",
    "shovel_head",
    "shovel",
    "sword_blade",
    "sword",
];

/**
 * Указывает, что у этого металла есть оголовья и сами инстурменты ТФК.
 */
global.TFC_TOOL_GEN = [
    "chisel_head",
    "chisel",
    "fish_hook",
    "fishing_rod",
    "horse_armor",
    "javelin_head",
    "javelin",
    "mace_head",
    "mace",
    "propick_head",
    "propick",
    "shears",
    "tuyere",
];

/**
 * Указывает, что у этого металла есть ведро.
 */
global.TFC_BUCKET_GEN = ["bucket"];

/**
 * Указывает, что у этого металла есть чистый кусок (тфк штука).
 */
global.TFC_SMALL_NATIVE_ORE_GEN = ["small_native_ore"];

/**
 * Указывает, что у этого металла есть кусок (тфк штука).
 */
global.TFC_SMALL_ORE_GEN = ["small_ore"];

global.ITEM_TAG_TO_HEAT = {
    nugget: {
        heat_capacity: 0.124,
        metal_amount: {
            default: 16,
            bismuth: 16,
            cassiterite: 16,
            copper: 16,
            garnierite: 14,
            gold: 16,
            hematite: 13,
            iron: 16,
            yellow_limonite: 14,
            magnetite: 14,
            malachite: 13,
            nickel: 16,
            pyrite: 12,
            silver: 16,
            sphalerite: 16,
            tetrahedrite: 14,
            tin: 16,
            chalcopyrite: 10,
            goetite: 15,
        },
        input: (name) => {
            return { tag: `forge:nuggets/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_nugget` };
        },
    },

    dust: {
        heat_capacity: 1.429,
        metal_amount: {
            default: 144,
            bismuth: 144,
            cassiterite: 144,
            copper: 144,
            garnierite: 126,
            gold: 144,
            hematite: 117,
            iron: 144,
            yellow_limonite: 126,
            magnetite: 126,
            malachite: 117,
            nickel: 144,
            pyrite: 123,
            silver: 144,
            sphalerite: 144,
            tetrahedrite: 126,
            tin: 144,
            chalcopyrite: 112,
            cassiterite_sand: 144,
            goetite: 142,
        },
        input: (name) => {
            return { tag: `forge:dusts/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_dust` };
        },
    },

    dust_small: {
        heat_capacity: 0.714,
        metal_amount: {
            default: 36,
            bismuth: 36,
            cassiterite: 36,
            copper: 36,
            garnierite: 31,
            gold: 36,
            hematite: 29,
            iron: 36,
            yellow_limonite: 31,
            magnetite: 31,
            malachite: 29,
            nickel: 36,
            pyrite: 27,
            silver: 36,
            sphalerite: 36,
            tetrahedrite: 31,
            tin: 36,
            chalcopyrite: 22,
            cassiterite_sand: 36,
            goetite: 34,
        },
        input: (name) => {
            return { tag: `forge:dusts/small/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_dust_small` };
        },
    },

    dust_tiny: {
        heat_capacity: 0.357,
        metal_amount: {
            default: 16,
            bismuth: 16,
            cassiterite: 16,
            copper: 16,
            garnierite: 14,
            gold: 16,
            hematite: 13,
            iron: 16,
            yellow_limonite: 14,
            magnetite: 14,
            malachite: 13,
            nickel: 16,
            pyrite: 12,
            silver: 16,
            sphalerite: 16,
            tetrahedrite: 14,
            tin: 16,
            chalcopyrite: 10,
            cassiterite_sand: 16,
            goetite: 15,
        },
        input: (name) => {
            return { tag: `forge:dusts/tiny/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_dust_tiny` };
        },
    },

    poor_raw: {
        heat_capacity: 1.429,
        metal_amount: {
            default: 24,
            bismuth: 24,
            cassiterite: 24,
            copper: 24,
            garnierite: 21,
            gold: 24,
            hematite: 18,
            iron: 24,
            yellow_limonite: 21,
            magnetite: 21,
            malachite: 18,
            nickel: 24,
            pyrite: 18,
            silver: 24,
            sphalerite: 24,
            tetrahedrite: 21,
            tin: 24,
            chalcopyrite: 14,
            cassiterite_sand: 24,
            goetite: 22,
        },
        input: (name) => {
            return { tag: `forge:poor_raw_materials/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:poor_raw_${name}` };
        },
    },

    raw: {
        heat_capacity: 1.429,
        metal_amount: {
            default: 36,
            bismuth: 36,
            cassiterite: 36,
            copper: 36,
            garnierite: 31,
            gold: 36,
            hematite: 29,
            iron: 36,
            yellow_limonite: 31,
            magnetite: 31,
            malachite: 29,
            nickel: 36,
            pyrite: 27,
            silver: 36,
            sphalerite: 36,
            tetrahedrite: 31,
            tin: 36,
            chalcopyrite: 28,
            cassiterite_sand: 36,
            goetite: 34,
        },
        input: (name) => {
            return { tag: `forge:raw_materials/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:raw_${name}` };
        },
    },

    rich_raw: {
        heat_capacity: 1.429,
        metal_amount: {
            default: 48,
            bismuth: 48,
            cassiterite: 48,
            copper: 48,
            garnierite: 42,
            gold: 48,
            hematite: 39,
            iron: 48,
            yellow_limonite: 42,
            magnetite: 42,
            malachite: 39,
            nickel: 48,
            pyrite: 36,
            silver: 48,
            sphalerite: 48,
            tetrahedrite: 42,
            tin: 48,
            chalcopyrite: 36,
            cassiterite_sand: 48,
            goetite: 45,
        },
        input: (name) => {
            return { tag: `forge:rich_raw_materials/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:rich_raw_${name}` };
        },
    },

    small_native_ore: {
        heat_capacity: 0.869,
        metal_amount: {
            default: 12
        },
        input: (name) => {
            return { item: `tfc:ore/small_native_${name}` };
        },
        output: (name) => {
            return { item: `tfc:ore/small_native_${name}` };
        },
    },

    small_ore: {
        heat_capacity: 0.869,
        metal_amount: {
            default: 12
        },
        input: (name) => {
            return { item: `tfc:ore/small_${name}` };
        },
        output: (name) => {
            return { item: `tfc:ore/small_${name}` };
        },
    },

    block_slab: { heat_capacity: null }, // can't melt
    block_stairs: { heat_capacity: null }, // can't melt

    block: {
        heat_capacity: 2.857,
        metal_amount: 1296,
        input: (name) => {
            return { tag: `forge:storage_blocks/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_block` };
        },
    },
    anvil: {
        heat_capacity: 40.0,
        metal_amount: 2016,
        input: (name) => {
            return { item: `tfc:metal/anvil/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/anvil/${name}` };
        },
    },
    chain: {
        heat_capacity: 0.171,
        metal_amount: 9,
        rules: ["hit_any", "hit_any", "draw_last"],
        anvilFrom: "ingot",
        outputCount: 16,
        input: (name) => {
            return { item: `tfc:metal/chain/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/chain/${name}` };
        },
    },
    bars: {
        heat_capacity: 0.714,
        metal_amount: 36,
        rules: ["upset_last", "punch_second_last", "punch_third_last"],
        anvilFrom: "sheet",
        outputCount: 8,
        input: (name) => {
            return { item: `tfc:metal/bars/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/bars/${name}` };
        },
    },
    trapdoor: {
        heat_capacity: 5.714,
        metal_amount: 144,
        rules: ["bend_last", "draw_second_last", "draw_third_last"],
        anvilFrom: "sheet",
        input: (name) => {
            return { item: `tfc:metal/trapdoor/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/trapdoor/${name}` };
        },
    },
    lamp: {
        heat_capacity: 2.857,
        metal_amount: 144,
        rules: ["bend_last", "bend_second_last", "draw_third_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { item: `tfc:metal/lamp/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/lamp/${name}` };
        },
    },
    unfinished_lamp: {
        heat_capacity: 2.857,
        metal_amount: 144,
        input: (name) => {
            return { item: `tfc:metal/unfinished_lamp/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/unfinished_lamp/${name}` };
        },
    },

    helmet: {
        heat_capacity: 17.143,
        metal_amount: 432,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/helmet/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/helmet/${name}` };
        },
    },
    chestplate: {
        heat_capacity: 22.857,
        metal_amount: 576,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/chestplate/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/chestplate/${name}` };
        },
    },
    greaves: {
        heat_capacity: 17.143,
        metal_amount: 432,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/greaves/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/greaves/${name}` };
        },
    },
    boots: {
        heat_capacity: 11.429,
        metal_amount: 432,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/boots/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/boots/${name}` };
        },
    },
    unfinished_boots: {
        heat_capacity: 5.714,
        metal_amount: 144,
        rules: ["bend_last", "bend_second_last", "shrink_third_last"],
        anvilFrom: "sheet",
        input: (name) => {
            return { item: `tfc:metal/unfinished_boots/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/unfinished_boots/${name}` };
        },
    },
    unfinished_chestplate: {
        heat_capacity: 11.429,
        metal_amount: 288,
        rules: ["hit_last", "hit_second_last", "upset_third_last"],
        anvilFrom: "double_sheet",
        input: (name) => {
            return { item: `tfc:metal/unfinished_chestplate/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/unfinished_chestplate/${name}` };
        },
    },
    unfinished_greaves: {
        heat_capacity: 11.429,
        metal_amount: 288,
        rules: ["bend_any", "draw_any", "hit_any"],
        anvilFrom: "double_sheet",
        input: (name) => {
            return { item: `tfc:metal/unfinished_greaves/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/unfinished_greaves/${name}` };
        },
    },
    unfinished_helmet: {
        heat_capacity: 11.429,
        metal_amount: 288,
        rules: ["hit_last", "bend_second_last", "bend_third_last"],
        anvilFrom: "double_sheet",
        input: (name) => {
            return { item: `tfc:metal/unfinished_helmet/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/unfinished_helmet/${name}` };
        },
    },

    horse_armor: {
        heat_capacity: 34.286,
        metal_amount: 864,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/horse_armor/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/horse_armor/${name}` };
        },
    },

    sword_blade: {
        heat_capacity: 5.714,
        metal_amount: 288,
        hasMold: true,
        rules: ["hit_last", "bend_second_last", "bend_third_last"],
        anvilFrom: "double_ingot",
        input: (name) => {
            return { tag: `forge:sword_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_sword_head` };
        },
    },
    sword: {
        heat_capacity: 5.714,
        metal_amount: 288,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_sword` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_sword` };
        },
    },
    pickaxe_head: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["punch_last", "bend_not_last", "draw_not_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { tag: `forge:pickaxe_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_pickaxe_head` };
        },
    },
    pickaxe: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_pickaxe` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_pickaxe` };
        },
    },
    axe_head: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["punch_last", "hit_second_last", "upset_third_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { tag: `forge:axe_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_axe_head` };
        },
    },
    axe: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_axe` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_axe` };
        },
    },
    shovel_head: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["punch_last", "hit_not_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { tag: `forge:shovel_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_shovel_head` };
        },
    },
    shovel: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_shovel` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_shovel` };
        },
    },
    hammer_head: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["punch_last", "shrink_not_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { tag: `forge:hammer_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_hammer_head` };
        },
    },
    hammer: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_hammer` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_hammer` };
        },
    },
    hoe_head: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["punch_last", "hit_not_last", "bend_not_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { tag: `forge:hoe_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_hoe_head` };
        },
    },
    hoe: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_hoe` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_hoe` };
        },
    },
    knife_blade: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["hit_last", "draw_second_last", "draw_third_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { tag: `forge:knife_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_knife_head` };
        },
    },
    knife: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_knife` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_knife` };
        },
    },
    saw_blade: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["hit_last", "hit_second_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { tag: `forge:saw_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_saw_head` };
        },
    },
    saw: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_saw` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_saw` };
        },
    },
    scythe_blade: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["hit_last", "draw_second_last", "bend_third_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { tag: `forge:scythe_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_scythe_head` };
        },
    },
    scythe: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_scythe` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_scythe` };
        },
    },
    chisel_head: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["hit_last", "hit_not_last", "draw_not_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { item: `tfc:metal/chisel_head/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/chisel_head/${name}` };
        },
    },
    chisel: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/chisel/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/chisel/${name}` };
        },
    },
    javelin_head: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["hit_last", "hit_second_last", "draw_third_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { item: `tfc:metal/javelin_head/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/javelin_head/${name}` };
        },
    },
    javelin: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/javelin/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/javelin/${name}` };
        },
    },
    propick_head: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        rules: ["punch_last", "draw_not_last", "bend_not_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { item: `tfc:metal/propick_head/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/propick_head/${name}` };
        },
    },
    propick: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/propick/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/propick/${name}` };
        },
    },
    mace_head: {
        heat_capacity: 5.714,
        metal_amount: 288,
        hasMold: true,
        rules: ["hit_last", "shrink_not_last", "bend_not_last"],
        anvilFrom: "double_ingot",
        input: (name) => {
            return { item: `tfc:metal/mace_head/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/mace_head/${name}` };
        },
    },
    mace: {
        heat_capacity: 5.714,
        metal_amount: 288,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/mace/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/mace/${name}` };
        },
    },
    fish_hook: {
        heat_capacity: 5.714,
        metal_amount: 144,
        rules: ["draw_not_last", "bend_any", "hit_any"],
        anvilFrom: "sheet",
        input: (name) => {
            return { item: `tfc:metal/fish_hook/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/fish_hook/${name}` };
        },
    },
    fishing_rod: {
        heat_capacity: 5.714,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/fishing_rod/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/fishing_rod/${name}` };
        },
    },
    tuyere: {
        heat_capacity: 11.429,
        metal_amount: 288,
        hasDur: true,
        rules: ["bend_last", "bend_second_last"],
        anvilFrom: "double_sheet",
        input: (name) => {
            return { item: `tfc:metal/tuyere/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/tuyere/${name}` };
        },
    },
    shears: {
        heat_capacity: 5.714,
        metal_amount: 288,
        hasDur: true,
        input: (name) => {
            return { item: `tfc:metal/shears/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/shears/${name}` };
        },
    },
    shield: {
        heat_capacity: 11.429,
        metal_amount: 288,
        hasDur: true,
        rules: ["upset_last", "bend_second_last", "bend_third_last"],
        anvilFrom: "double_sheet",
        input: (name) => {
            return { item: `tfc:metal/shield/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/shield/${name}` };
        },
    },

    file_head: {
        heat_capacity: 2.857,
        metal_amount: 144,
        rules: ["hit_last", "hit_not_last", "bend_not_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { tag: `forge:file_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_file_head` };
        },
    },
    file: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_file` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_file` };
        },
    },
    knife_butchery_head: {
        heat_capacity: 2.857,
        metal_amount: 144,
        rules: ["hit_last", "hit_not_last", "shrink_not_last"],
        anvilFrom: "ingot",
        input: (name) => {
            return { tag: `forge:butchery_knife_heads/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_knife_butchery_head` };
        },
    },
    butchery_knife: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasDur: true,
        input: (name) => {
            return { item: `gtceu:${name}_butchery_knife` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_butchery_knife` };
        },
    },

    ingot: {
        heat_capacity: 2.857,
        metal_amount: 144,
        hasMold: true,
        input: (name) => {
            return { tag: `forge:ingots/${name}` };
        },
        output: (name) => {
            return { item: Item.of(`#forge:ingots/${name}`).getId() + "" };
        },
    },
    double_ingot: {
        heat_capacity: 5.714,
        metal_amount: 288,
        input: (name) => {
            return { tag: `forge:ingots/double/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/double_ingot/${name}` };
        },
    },
    sheet: {
        heat_capacity: 5.714,
        metal_amount: 144,
        rules: ["hit_last", "hit_second_last", "hit_third_last"],
        anvilFrom: "double_ingot",
        input: (name) => {
            return { tag: `forge:plates/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_plate` };
        },
    },
    double_sheet: {
        heat_capacity: 11.429,
        metal_amount: 288,
        input: (name) => {
            return { tag: `forge:plates/double/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_double_plate` };
        },
    },
    rod: {
        heat_capacity: 1.429,
        metal_amount: 72,
        rules: ["bend_last", "draw_second_last", "draw_third_last"],
        anvilFrom: "ingot",
        outputCount: 2,
        input: (name) => {
            return { tag: `forge:rods/${name}` };
        },
        output: (name) => {
            return { item: `gtceu:${name}_rod` };
        },
    },

    bucket: {
        heat_capacity: 5.714,
        metal_amount: 144,
        rules: ["bend_last", "bend_second_last", "bend_third_last"],
        anvilFrom: "sheet",
        input: (name) => {
            return { item: `tfc:metal/bucket/${name}` };
        },
        output: (name) => {
            return { item: `tfc:metal/bucket/${name}` };
        },
    },
};

global.METAL_TO_SPECS = {
    bismuthinite: {
        forging_temp: 162,
        welding_temp: 216,
        melt_temp: 270,
        fluidName: "gtceu:bismuth",
        tier: 1,
        props: global.TFC_SMALL_ORE_GEN,
    },
    bismuth: {
        forging_temp: 162,
        welding_temp: 216,
        melt_temp: 270,
        fluidName: "gtceu:bismuth",
        tier: 1,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_GEN,
            global.PART_GEN
        ),
    },
    brass: {
        forging_temp: 558,
        welding_temp: 744,
        melt_temp: 930,
        fluidName: "gtceu:brass",
        tier: 2,
        props: [].concat(global.INGOT_GEN, global.DOUBLE_INGOT_GEN, global.NUGGET_GEN, global.DUST_GEN, global.PART_GEN),
    },
    gold: {
        forging_temp: 636,
        welding_temp: 848,
        melt_temp: 1060,
        fluidName: "gtceu:gold",
        tier: 1,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_GEN,
            global.PART_GEN,
            global.TFC_SMALL_NATIVE_ORE_GEN
        ),
    },
    nickel: {
        forging_temp: 872,
        welding_temp: 1162,
        melt_temp: 1453,
        fluidName: "gtceu:nickel",
        tier: 1,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_GEN,
            global.PART_GEN
        ),
    },
    rose_gold: {
        forging_temp: 576,
        welding_temp: 768,
        melt_temp: 960,
        fluidName: "gtceu:rose_gold",
        tier: 1,
        props: [].concat(global.INGOT_GEN, global.DOUBLE_INGOT_GEN, global.NUGGET_GEN, global.DUST_GEN, global.PART_GEN),
    },
    silver: {
        forging_temp: 577,
        welding_temp: 769,
        melt_temp: 961,
        fluidName: "gtceu:silver",
        tier: 1,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_GEN,
            global.PART_GEN,
            global.TFC_SMALL_NATIVE_ORE_GEN
        ),
    },
    tin: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 230,
        fluidName: "gtceu:tin",
        tier: 1,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_GEN,
            global.PART_GEN
        ),
    },
    zinc: {
        forging_temp: 252,
        welding_temp: 336,
        melt_temp: 420,
        fluidName: "gtceu:zinc",
        tier: 1,
        props: [].concat(global.INGOT_GEN, global.DOUBLE_INGOT_GEN, global.NUGGET_GEN, global.DUST_GEN, global.PART_GEN),
    },
    sterling_silver: {
        forging_temp: 570,
        welding_temp: 760,
        melt_temp: 950,
        fluidName: "gtceu:sterling_silver",
        tier: 1,
        props: [].concat(global.INGOT_GEN, global.DOUBLE_INGOT_GEN, global.NUGGET_GEN, global.DUST_GEN, global.PART_GEN),
    },
    copper: {
        forging_temp: 648,
        welding_temp: 864,
        melt_temp: 1080,
        fluidName: "gtceu:copper",
        tier: 1,
        canBeUnmolded: true,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.ORE_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.TFC_TOOL_GEN,
            global.UTILITY_GEN,
            global.TFC_SMALL_NATIVE_ORE_GEN
        ),
    },
    bismuth_bronze: {
        forging_temp: 591,
        welding_temp: 788,
        melt_temp: 985,
        fluidName: "gtceu:bismuth_bronze",
        tier: 2,
        canBeUnmolded: true,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.TFC_TOOL_GEN,
            global.UTILITY_GEN
        ),
    },
    bronze: {
        forging_temp: 570,
        welding_temp: 760,
        melt_temp: 950,
        fluidName: "gtceu:bronze",
        tier: 1,
        canBeUnmolded: true,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.TFC_TOOL_GEN,
            global.UTILITY_GEN
        ),
    },
    black_bronze: {
        forging_temp: 642,
        welding_temp: 856,
        melt_temp: 1070,
        fluidName: "gtceu:black_bronze",
        tier: 2,
        canBeUnmolded: true,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.TFC_TOOL_GEN,
            global.UTILITY_GEN
        ),
    },
    wrought_iron: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluidName: "gtceu:wrought_iron",
        tier: 3,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.TFC_TOOL_GEN,
            global.UTILITY_GEN
        ),
    },
    iron: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluidName: "gtceu:iron",
        tier: 3,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.DUST_GEN,
            global.ORE_GEN
        ),
    },
    // "cast_iron": { forging_temp: 921, welding_temp: 1228, melt_temp: 1535, fluidName: "gtceu:iron", tier: 1, props: global.DOUBLE_INGOT_GEN },
    pig_iron: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluidName: "tfc:metal/pig_iron",
        tier: 3,
        props: global.INGOT_GEN,
    },
    steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluidName: "gtceu:steel",
        tier: 4,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.TFC_TOOL_GEN,
            global.UTILITY_GEN
        ),
    },
    high_carbon_black_steel: {
        forging_temp: 924,
        melt_temp: 1540,
        welding_temp: 1232,
        fluidName: "tfc:metal/high_carbon_black_steel",
        tier: 5,
        props: global.INGOT_GEN,
    },
    high_carbon_red_steel: {
        forging_temp: 924,
        melt_temp: 1540,
        welding_temp: 1232,
        fluidName: "tfc:metal/high_carbon_red_steel",
        tier: 5,
        props: global.INGOT_GEN,
    },
    high_carbon_blue_steel: {
        forging_temp: 924,
        melt_temp: 1540,
        welding_temp: 1232,
        fluidName: "tfc:metal/high_carbon_blue_steel",
        tier: 4,
        props: global.INGOT_GEN,
    },
    high_carbon_steel: {
        forging_temp: 924,
        melt_temp: 1540,
        welding_temp: 1232,
        fluidName: "tfc:metal/high_carbon_steel",
        tier: 3,
        props: global.INGOT_GEN,
    },
    weak_steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluidName: "tfc:metal/weak_steel",
        tier: 4,
        props: global.INGOT_GEN,
    },
    weak_red_steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluidName: "tfc:metal/weak_red_steel",
        tier: 5,
        props: global.INGOT_GEN,
    },
    weak_blue_steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluidName: "tfc:metal/weak_blue_steel",
        tier: 5,
        props: global.INGOT_GEN,
    },
    black_steel: {
        forging_temp: 891,
        welding_temp: 1188,
        melt_temp: 1485,
        fluidName: "gtceu:black_steel",
        tier: 5,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.TFC_TOOL_GEN,
            global.UTILITY_GEN
        ),
    },
    red_steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluidName: "gtceu:red_steel",
        tier: 6,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.TFC_TOOL_GEN,
            global.UTILITY_GEN,
            global.TFC_BUCKET_GEN
        ),
    },
    blue_steel: {
        forging_temp: 924,
        welding_temp: 1232,
        melt_temp: 1540,
        fluidName: "gtceu:blue_steel",
        tier: 6,
        props: [].concat(
            global.INGOT_GEN,
            global.DOUBLE_INGOT_GEN,
            global.NUGGET_GEN,
            global.DUST_GEN,
            global.PART_GEN,
            global.ARMOR_GEN,
            global.GT_TOOL_GEN,
            global.TFC_TOOL_GEN,
            global.UTILITY_GEN,
            global.TFC_BUCKET_GEN
        ),
    },
    unknown: {
        forging_temp: 240,
        welding_temp: 320,
        melt_temp: 400,
        fluidName: "tfc:metal/unknown",
        tier: 1,
        props: global.INGOT_GEN,
    },
    cassiterite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 230,
        fluidName: "gtceu:tin",
        tier: 1,
        props: [].concat(global.DUST_GEN, global.ORE_GEN, global.TFC_SMALL_ORE_GEN),
    },
    garnierite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 1453,
        fluidName: "gtceu:nickel",
        tier: 1,
        props: [].concat(global.DUST_GEN, global.ORE_GEN, global.TFC_SMALL_ORE_GEN),
    },
    hematite: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluidName: "gtceu:iron",
        tier: 3,
        props: [].concat(global.DUST_GEN, global.ORE_GEN, global.TFC_SMALL_ORE_GEN),
    },
    yellow_limonite: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluidName: "gtceu:iron",
        tier: 3,
        props: [].concat(global.DUST_GEN, global.ORE_GEN),
    },
    limonite: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluidName: "gtceu:iron",
        tier: 3,
        props: [].concat(global.TFC_SMALL_ORE_GEN),
    },
    magnetite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 1535,
        fluidName: "gtceu:iron",
        tier: 3,
        props: [].concat(global.DUST_GEN, global.ORE_GEN, global.TFC_SMALL_ORE_GEN),
    },
    malachite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 1080,
        fluidName: "gtceu:copper",
        tier: 1,
        props: [].concat(global.DUST_GEN, global.ORE_GEN, global.TFC_SMALL_ORE_GEN),
    },
    pyrite: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluidName: "gtceu:iron",
        tier: 3,
        props: [].concat(global.DUST_GEN, global.ORE_GEN),
    },
    sphalerite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 420,
        fluidName: "gtceu:zinc",
        tier: 1,
        props: [].concat(global.DUST_GEN, global.ORE_GEN, global.TFC_SMALL_ORE_GEN),
    },
    tetrahedrite: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 1080,
        fluidName: "gtceu:copper",
        tier: 1,
        props: [].concat(global.DUST_GEN, global.ORE_GEN, global.TFC_SMALL_ORE_GEN),
    },
    chalcopyrite: {
        forging_temp: 648,
        welding_temp: 864,
        melt_temp: 1080,
        fluidName: "gtceu:copper",
        tier: 1,
        props: [].concat(global.DUST_GEN, global.ORE_GEN),
    },
    cassiterite_sand: {
        forging_temp: 138,
        welding_temp: 184,
        melt_temp: 230,
        fluidName: "gtceu:tin",
        tier: 1,
        props: [].concat(global.DUST_GEN, global.ORE_GEN),
    },
    goethite: {
        forging_temp: 921,
        welding_temp: 1228,
        melt_temp: 1535,
        fluidName: "gtceu:iron",
        tier: 3,
        props: [].concat(global.DUST_GEN, global.ORE_GEN),
    },
};

/**
 * Список хранит предметы, 
 * у которых должны быть удалены тэги и они должны быть скрыты в REI.
 */
global.TFC_DISABLED_ITEMS = [
    // Ingots
    "tfc:metal/ingot/bismuth",
    "tfc:metal/ingot/bismuth_bronze",
    "tfc:metal/ingot/black_bronze",
    "tfc:metal/ingot/bronze",
    "tfc:metal/ingot/rose_gold",
    "tfc:metal/ingot/sterling_silver",
    "tfc:metal/ingot/wrought_iron",
    "tfc:metal/ingot/cast_iron",
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
    
    // Sheets
    "tfc:metal/sheets/bismuth",
    "tfc:metal/sheets/bismuth_bronze",
    "tfc:metal/sheets/black_bronze",
    "tfc:metal/sheets/bronze",
    "tfc:metal/sheets/rose_gold",
    "tfc:metal/sheets/sterling_silver",
    "tfc:metal/sheets/wrought_iron",
    "tfc:metal/sheets/cast_iron",
    "tfc:metal/sheets/steel",
    "tfc:metal/sheets/black_steel",
    "tfc:metal/sheets/red_steel",
    "tfc:metal/sheets/blue_steel",
    "tfc:metal/sheets/brass",
    "tfc:metal/sheets/copper",
    "tfc:metal/sheets/gold",
    "tfc:metal/sheets/nickel",
    "tfc:metal/sheets/silver",
    "tfc:metal/sheets/tin",
    "tfc:metal/sheets/zinc",
    
    // Double Sheets
    "tfc:metal/double_sheets/bismuth",
    "tfc:metal/double_sheets/bismuth_bronze",
    "tfc:metal/double_sheets/black_bronze",
    "tfc:metal/double_sheets/bronze",
    "tfc:metal/double_sheets/rose_gold",
    "tfc:metal/double_sheets/sterling_silver",
    "tfc:metal/double_sheets/wrought_iron",
    "tfc:metal/double_sheets/cast_iron",
    "tfc:metal/double_sheets/steel",
    "tfc:metal/double_sheets/black_steel",
    "tfc:metal/double_sheets/red_steel",
    "tfc:metal/double_sheets/blue_steel",
    "tfc:metal/double_sheets/brass",
    "tfc:metal/double_sheets/copper",
    "tfc:metal/double_sheets/gold",
    "tfc:metal/double_sheets/nickel",
    "tfc:metal/double_sheets/silver",
    "tfc:metal/double_sheets/tin",
    "tfc:metal/double_sheets/zinc",
    
    // Rods
    "tfc:metal/rods/bismuth",
    "tfc:metal/rods/bismuth_bronze",
    "tfc:metal/rods/black_bronze",
    "tfc:metal/rods/bronze",
    "tfc:metal/rods/rose_gold",
    "tfc:metal/rods/sterling_silver",
    "tfc:metal/rods/wrought_iron",
    "tfc:metal/rods/cast_iron",
    "tfc:metal/rods/steel",
    "tfc:metal/rods/black_steel",
    "tfc:metal/rods/red_steel",
    "tfc:metal/rods/blue_steel",
    "tfc:metal/rods/brass",
    "tfc:metal/rods/copper",
    "tfc:metal/rods/gold",
    "tfc:metal/rods/nickel",
    "tfc:metal/rods/silver",
    "tfc:metal/rods/tin",
    "tfc:metal/rods/zinc",

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