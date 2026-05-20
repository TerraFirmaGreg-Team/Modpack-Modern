// priority: -100
"use strict";

/** Items that need to be hidden, but you want to keep their tags.*/
global.TFC_HIDDEN_ITEMS = /** @type {const} */ ([
    "tfc:wild_crop/papyrus",
    "tfc:wild_crop/pumpkin",
    "tfc:wild_crop/melon",
    "tfc:wild_crop/red_bell_pepper",
    "tfc:wild_crop/yellow_bell_pepper",
    "tfc:wild_crop/barley",
    "tfc:wild_crop/oat",
    "tfc:wild_crop/rye",
    "tfc:wild_crop/maize",
    "tfc:wild_crop/wheat",
    "tfc:wild_crop/rice",
    "tfc:wild_crop/beet",
    "tfc:wild_crop/cabbage",
    "tfc:wild_crop/carrot",
    "tfc:wild_crop/garlic",
    "tfc:wild_crop/green_bean",
    "tfc:wild_crop/potato",
    "tfc:wild_crop/onion",
    "tfc:wild_crop/soybean",
    "tfc:wild_crop/squash",
    "tfc:wild_crop/sugarcane",
    "tfc:wild_crop/tomato",
    "tfc:wild_crop/jute"
]);

/**
 * Хранит список всех имен типов камней в TFC.
 */
global.TFC_STONE_TYPES = /** @type {const} */ ([
    "gabbro",
    "shale",
    "claystone",
    "limestone",
    "conglomerate",
    "dolomite",
    "chert",
    "chalk",
    "rhyolite",
    "dacite",
    "quartzite",
    "slate",
    "phyllite",
    "schist",
    "gneiss",
    "marble",
    "basalt", // Exists in GT
    "diorite", // Exists in GT
    "andesite", // Exists in GT
    "granite" // Exists in GT
]);

global.TFC_WOOD_TYPES = /** @type {const} */ ([
    "acacia", // Exists in Minecraft
    "ash",
    "aspen",
    "birch", // Exists in Minecraft
    "blackwood",
    "chestnut",
    "douglas_fir",
    "hickory",
    "kapok",
    "mangrove",
    "maple",
    "oak", // Exists in Minecraft
    "palm",
    "pine",
    "rosewood",
    "sequoia",
    "spruce",
    "sycamore",
    "white_cedar",
    "willow"
]);

global.TFC_HARDWOOD_TYPES = /** @type {const} */ ([
    "acacia",
    "ash",
    "aspen",
    "birch",
    "blackwood",
    "chestnut",
    "hickory",
    "maple",
    "oak",
    "rosewood",
    "sycamore"
]);

global.TFC_SOFTWOOD_TYPES = /** @type {const} */ ([
    "douglas_fir",
    "kapok",
    "mangrove",
    "palm",
    "pine",
    "sequoia",
    "spruce",
    "white_cedar",
    "willow"
]);

global.TFC_MUD_TYPES = /** @type {const} */ (["silt", "loam", "sandy_loam", "silty_loam"]);
global.TFG_MUD_TYPES = /** @type {const} */ (["alfisol", "mollisol", "oxisol", "podzol"]);

/**
 * Хранит названия типов полублоков из камня в TFC. (Не кирпичей)
 */
global.TFC_ROCK_SLAB_BLOCK_TYPES = /** @type {const} */ (["raw", "smooth", "cobble", "mossy_cobble"]);

/**
 * Хранит названия типов полублоков из кирпича из камня в TFC
 */
global.TFC_BRICK_SLAB_BLOCK_TYPES = /** @type {const} */ (["bricks", "mossy_bricks", "cracked_bricks"]);

/**
 * Хранит названия цветов песка в TFC.
 */
global.SAND_COLORS = /** @type {const} */ (["brown", "white", "black", "red", "yellow", "green", "pink"]);

global.TFC_FOOD_COOKING = /** @type {const} */ ([
    // Meat
    { input: "tfc:food/horse_meat", output: "tfc:food/cooked_horse_meat" },
    { input: "tfc:food/bear", output: "tfc:food/cooked_bear" },
    { input: "tfc:food/mutton", output: "tfc:food/cooked_mutton" },
    { input: "tfc:food/pheasant", output: "tfc:food/cooked_pheasant" },
    { input: "tfc:food/quail", output: "tfc:food/cooked_quail" },
    { input: "tfc:food/chicken", output: "tfc:food/cooked_chicken" },
    { input: "tfc:food/pork", output: "tfc:food/cooked_pork" },
    { input: "tfc:food/beef", output: "tfc:food/cooked_beef" },
    { input: "tfc:food/crappie", output: "tfc:food/cooked_crappie" },
    { input: "tfc:food/lake_trout", output: "tfc:food/cooked_lake_trout" },
    { input: "tfc:food/largemouth_bass", output: "tfc:food/cooked_largemouth_bass" },
    { input: "tfc:food/rainbow_trout", output: "tfc:food/cooked_rainbow_trout" },
    { input: "tfc:food/salmon", output: "tfc:food/cooked_salmon" },
    { input: "tfc:food/smallmouth_bass", output: "tfc:food/cooked_smallmouth_bass" },
    { input: "tfc:food/camelidae", output: "tfc:food/cooked_camelidae" },
    { input: "tfc:food/frog_legs", output: "tfc:food/cooked_frog_legs" },
    { input: "tfc:food/gran_feline", output: "tfc:food/cooked_gran_feline" },
    { input: "tfc:food/turtle", output: "tfc:food/cooked_turtle" },
    { input: "tfc:food/cod", output: "tfc:food/cooked_cod" },
    { input: "tfc:food/tropical_fish", output: "tfc:food/cooked_tropical_fish" },
    { input: "tfc:food/calamari", output: "tfc:food/cooked_calamari" },
    { input: "tfc:food/shellfish", output: "tfc:food/cooked_shellfish" },
    { input: "tfc:food/bluegill", output: "tfc:food/cooked_bluegill" },
    { input: "tfc:food/turkey", output: "tfc:food/cooked_turkey" },
    { input: "tfc:food/peafowl", output: "tfc:food/cooked_peafowl" },
    { input: "tfc:food/grouse", output: "tfc:food/cooked_grouse" },
    { input: "tfc:food/venison", output: "tfc:food/cooked_venison" },
    { input: "tfc:food/wolf", output: "tfc:food/cooked_wolf" },
    { input: "tfc:food/rabbit", output: "tfc:food/cooked_rabbit" },
    { input: "tfc:food/hyena", output: "tfc:food/cooked_hyena" },
    { input: "tfc:food/duck", output: "tfc:food/cooked_duck" },
    { input: "tfc:food/chevon", output: "tfc:food/cooked_chevon" },
    { input: "tfc:food/fox", output: "tfc:food/cooked_fox" },
    // Kelp & Seaweed
    { input: "tfc:plant/winged_kelp", output: "tfc:food/dried_kelp" },
    { input: "tfc:plant/leafy_kelp", output: "tfc:food/dried_kelp" },
    { input: "tfc:plant/giant_kelp_flower", output: "tfc:food/dried_kelp" },
    { input: "tfc:food/fresh_seaweed", output: "tfc:food/dried_seaweed" },
    { input: "tfc:groundcover/seaweed", output: "tfc:food/dried_seaweed" },
    // Other
    { input: "tfc:food/potato", output: "tfc:food/baked_potato" }
]);

global.TFC_GRAINS = /** @type {const} */ (["barley", "maize", "oat", "rye", "rice", "wheat"]);

global.TFC_JAMS = /** @type {const} */ ([
    "blackberry",
    "blueberry",
    "bunchberry",
    "cloudberry",
    "cranberry",
    "elderberry",
    "gooseberry",
    "raspberry",
    "snowberry",
    "strawberry",
    "wintergreen_berry",
    "banana",
    "cherry",
    "green_apple",
    "lemon",
    "olive",
    "orange",
    "peach",
    "plum",
    "red_apple",
    "pumpkin_chunks",
    "melon_slice"
]);

global.TFC_GREENHOUSE_FRUIT_RECIPE_COMPONENTS = /** @type {const} */ ([
    { input: "tfc:plant/cherry_sapling", output: "tfc:food/cherry", leaves: "tfc:plant/cherry_leaves" },
    { input: "tfc:plant/green_apple_sapling", output: "tfc:food/green_apple", leaves: "tfc:plant/green_apple_leaves" },
    { input: "tfc:plant/lemon_sapling", output: "tfc:food/lemon", leaves: "tfc:plant/lemon_leaves" },
    { input: "tfc:plant/olive_sapling", output: "tfc:food/olive", leaves: "tfc:plant/olive_leaves" },
    { input: "tfc:plant/orange_sapling", output: "tfc:food/orange", leaves: "tfc:plant/orange_leaves" },
    { input: "tfc:plant/peach_sapling", output: "tfc:food/peach", leaves: "tfc:plant/peach_leaves" },
    { input: "tfc:plant/plum_sapling", output: "tfc:food/plum", leaves: "tfc:plant/plum_leaves" },
    { input: "tfc:plant/red_apple_sapling", output: "tfc:food/red_apple", leaves: "tfc:plant/red_apple_leaves" },
    { input: "tfc:plant/banana_sapling", output: "tfc:food/banana" },
    { input: "tfg:fruit_trees/lavacado_sapling", output: "tfg:food/lavacado", leaves: "tfg:fruit_trees/lavacado_leaves" },
    { input: "tfg:fruit_trees/magmango_sapling", output: "tfg:food/magmango", leaves: "tfg:fruit_trees/magmango_leaves" }
]);

global.TFC_GREENHOUSE_VEGETABLE_RECIPE_COMPONENTS = /** @type {const} */ ([
    { input: "tfc:seeds/barley", output: "tfc:food/barley"},
    { input: "tfc:seeds/oat", output: "tfc:food/oat"},
    { input: "tfc:seeds/rye", output: "tfc:food/rye"},
    { input: "tfc:seeds/maize", output: "tfc:food/maize"},
    { input: "tfc:seeds/wheat", output: "tfc:food/wheat"},
    { input: "tfc:seeds/rice", output: "tfc:food/rice"},
    { input: "tfc:seeds/beet", output: "tfc:food/beet"},
    { input: "tfc:seeds/cabbage", output: "tfc:food/cabbage"},
    { input: "tfc:seeds/carrot", output: "tfc:food/carrot"},
    { input: "tfc:seeds/green_bean", output: "tfc:food/green_bean"},
    { input: "tfc:seeds/garlic", output: "tfc:food/garlic"},
    { input: "tfc:seeds/potato", output: "tfc:food/potato"},
    { input: "tfc:seeds/onion", output: "tfc:food/onion"},
    { input: "tfc:seeds/soybean", output: "tfc:food/soybean"},
    { input: "tfc:seeds/squash", output: "tfc:food/squash"},
    { input: "tfc:seeds/sugarcane", output: "tfc:food/sugarcane"},
    { input: "tfc:seeds/tomato", output: "tfc:food/tomato"},
    { input: "tfc:seeds/jute", output: "tfc:jute"},
    { input: "tfc:seeds/papyrus", output: "tfc:papyrus"},
    { input: "tfc:seeds/pumpkin", output: "tfc:pumpkin"},
    { input: "tfc:seeds/melon", output: "tfc:melon"},
    { input: "tfc:seeds/red_bell_pepper", output: "tfc:food/red_bell_pepper"},
    { input: "tfc:seeds/yellow_bell_pepper", output: "tfc:food/yellow_bell_pepper"},
    { input: "tfg:sunflower_seeds", output: "tfg:sunflower_product"},
    { input: "tfg:rapeseed_seeds", output: "tfg:rapeseed_product"},
    { input: "tfg:flax_seeds", output: "tfg:flax_product"},
    { input: "tfg:beans_seeds", output: "tfg:beans_product"},
    { input: "tfg:radish_seeds", output: "tfg:radish_product"},
    { input: "tfg:lentil_seeds", output: "tfg:lentil_product"},
    { input: "tfg:peanut_seeds", output: "tfg:peanut_product"},
    { input: "tfg:cucumber_seeds", output: "tfg:cucumber_product"},
    { input: "tfg:cassava_seeds", output: "tfg:cassava_product"},
    { input: "tfg:ghost_pepper_seeds", output: "beneath:ghost_pepper"}
]);

global.TFC_GREENHOUSE_BERRY_RECIPE_COMPONENTS = /** @type {const} */ ([
    { input: "tfc:plant/snowberry_bush", output: "tfc:food/snowberry"},
    { input: "tfc:plant/bunchberry_bush", output: "tfc:food/bunchberry"},
    { input: "tfc:plant/gooseberry_bush", output: "tfc:food/gooseberry"},
    { input: "tfc:plant/cloudberry_bush", output: "tfc:food/cloudberry"},
    { input: "tfc:plant/strawberry_bush", output: "tfc:food/strawberry"},
    { input: "tfc:plant/wintergreen_berry_bush", output: "tfc:food/wintergreen_berry"},
    { input: "tfc:plant/blackberry_bush", output: "tfc:food/blackberry"},
    { input: "tfc:plant/raspberry_bush", output: "tfc:food/raspberry"},
    { input: "tfc:plant/blueberry_bush", output: "tfc:food/blueberry"},
    { input: "tfc:plant/elderberry_bush", output: "tfc:food/elderberry"},
    { input: "tfc:plant/cranberry_bush", output: "tfc:food/cranberry"}
]);

global.TFC_MILKS = /** @type {const} */ ([
    { id: "minecraft:milk" },
    { id: "firmalife:yak_milk" },
    { id: "firmalife:goat_milk" }
    // Uncomment this if firmalife ever makes this obtainable
    //{id: 'firmalife:coconut_milk'},
]);

global.TFC_CURDS_AND_CHEESES = /** @type {const} */ ([
    {
        id: "cow", milk: "minecraft:milk", curdled_fluid: "tfc:curdled_milk", curd: "firmalife:food/milk_curd",
        unsalted_cheese: "firmalife:food/gouda", unsalted_wheel: "firmalife:gouda_wheel",
        salted_cheese: "firmalife:food/cheddar", salted_wheel: "firmalife:cheddar_wheel"
    },
    {
        id: "yak", milk: "firmalife:yak_milk", curdled_fluid: "firmalife:curdled_yak_milk", curd: "firmalife:food/yak_curd",
        unsalted_cheese: "firmalife:food/shosha", unsalted_wheel: "firmalife:shosha_wheel",
        salted_cheese: "firmalife:food/rajya_metok", salted_wheel: "firmalife:rajya_metok_wheel"
    },
    {
        id: "goat", milk: "firmalife:goat_milk", curdled_fluid: "firmalife:curdled_goat_milk", curd: "firmalife:food/goat_curd",
        unsalted_cheese: "firmalife:food/feta", unsalted_wheel: "firmalife:feta_wheel",
        salted_cheese: "firmalife:food/chevre", salted_wheel: "firmalife:chevre_wheel"
    },
    {
        id: "ox", milk: "tfc_gourmet:ox_milk", curdled_fluid: "tfc_gourmet:curdled_ox_milk", curd: "tfc_gourmet:ox_curd",
        unsalted_cheese: "tfc_gourmet:ox_brinza_slice", unsalted_wheel: "tfc_gourmet:ox_brinza_wheel",
        salted_cheese: null, salted_wheel: null
    },
    {
        id: "sheep", milk: "tfc_gourmet:sheep_milk", curdled_fluid: "tfc_gourmet:curdled_sheep_milk", curd: "tfc_gourmet:sheep_curd",
        unsalted_cheese: "tfc_gourmet:sheep_brinza_slice", unsalted_wheel: "tfc_gourmet:sheep_brinza_wheel",
        salted_cheese: null, salted_wheel: null
    },
    {
        id: "alpaca", milk: "tfc_gourmet:alpaca_milk", curdled_fluid: "tfc_gourmet:curdled_alpaca_milk", curd: "tfc_gourmet:alpaca_curd",
        unsalted_cheese: "tfc_gourmet:alpaca_brinza_slice", unsalted_wheel: "tfc_gourmet:alpaca_brinza_wheel",
        salted_cheese: null, salted_wheel: null
    }
]);

global.TFC_MAGMA_BLOCKS = /** @type {const} */ ([
    "tfc:rock/magma/granite",
    "tfc:rock/magma/diorite",
    "tfc:rock/magma/gabbro",
    "tfc:rock/magma/rhyolite",
    "tfc:rock/magma/basalt",
    "tfc:rock/magma/andesite",
    "tfc:rock/magma/dacite"
]);

/**
 * @param {number} defaultAmount
 * @param {number} percents
 * @returns {number}
 */
global.calcAmountOfMetal = function (defaultAmount, percents) {
    const value = defaultAmount / (100 / percents);
    return value % 2 === 0 ? value : Math.round(value) - 1;
};

/**
 * Calculates the amount of metal processed.
 * This prevents the "exploit" where Cassiterite dust gives 2x as much from melting as smelting in a furnace.
 * @param {number} defaultAmount
 * @param {number} percents
 * @returns {number}
 */
global.calcAmountOfMetalProcessed = function (defaultAmount, percents) {
    const percentPerItem = percents / Math.ceil(percents / 100);
    const value = defaultAmount * (percentPerItem / 100);
    return value % 2 === 0 ? value : Math.round(value) - 1;
};

global.TFC_EQUIPMENT_METALS = /** @type {const} */ ([
    "copper",
    "bismuth_bronze",
    "bronze",
    "black_bronze",
    "wrought_iron",
    "steel",
    "black_steel",
    "red_steel",
    "blue_steel"
]);

global.TFC_METALS = /** @type {const} */ ([
    "copper",
    "bismuth_bronze",
    "bronze",
    "black_bronze",
    "wrought_iron",
    "steel",
    "black_steel",
    "red_steel",
    "blue_steel",

    "bismuth",
    "brass",
    "gold",
    "rose_gold",
    "silver",
    "sterling_silver",
    "nickel",
    "zinc",
    "tin",
    "cast_iron"
]);

global.TFC_DOUGHS = /** @type {const} */ ([
    "barley",
    "maize",
    "oat",
    "rye",
    "rice",
    "wheat"
]);

 global.TFC_BIOMES = /** @type {const} */ ([
     'tfc:badlands',
     'tfc:canyons',
     'tfc:deep_ocean',
     'tfc:deep_ocean_trench',
     'tfc:highlands',
     'tfc:hills',
     'tfc:inverted_badlands',
     'tfc:lake',
     'tfc:low_canyons',
     'tfc:lowlands',
     'tfc:mountain_lake',
     'tfc:mountains',
     'tfc:ocean',
     'tfc:ocean_reef',
     'tfc:oceanic_mountain_lake',
     'tfc:oceanic_mountains',
     'tfc:old_mountain_lake',
     'tfc:old_mountains',
     'tfc:plains',
     'tfc:plateau',
     'tfc:plateau_lake',
     'tfc:river',
     'tfc:rolling_hills',
     'tfc:salt_marsh',
     'tfc:shore',
     'tfc:tidal_flats',
     'tfc:volcanic_mountain_lake',
     'tfc:volcanic_mountains',
     'tfc:volcanic_oceanic_mountain_lake',
     'tfc:volcanic_oceanic_mountains'
 ])

global.NEW_TFC_BIOMES = /** @type {const} */ ([
    'tfg:earth/active_shield_volcano',
    'tfg:earth/ancient_shield_volcano',
    'tfg:earth/badlands',
    'tfg:earth/burren_badlands',
    'tfg:earth/burren_badlands_tall',
    'tfg:earth/burren_plains',
    'tfg:earth/burren_plateau',
    'tfg:earth/burren_roche_moutonee',
    'tfg:earth/buttes',
    'tfg:earth/canyons',
    'tfg:earth/cenote_canyons',
    'tfg:earth/cenote_highlands',
    'tfg:earth/cenote_hills',
    'tfg:earth/cenote_plains',
    'tfg:earth/cenote_plateau',
    'tfg:earth/cenote_rolling_hills',
    'tfg:earth/coastal_dunes',
    'tfg:earth/deep_ocean',
    'tfg:earth/deep_ocean_trench',
    'tfg:earth/doline_canyons',
    'tfg:earth/doline_highlands',
    'tfg:earth/doline_hills',
    'tfg:earth/doline_plains',
    'tfg:earth/doline_plateau',
    'tfg:earth/doline_rolling_hills',
    'tfg:earth/dormant_shield_volcano',
    'tfg:earth/drumlins',
    'tfg:earth/dune_sea',
    'tfg:earth/embayments',
    'tfg:earth/extinct_shield_volcano',
    'tfg:earth/extreme_doline_mountains',
    'tfg:earth/extreme_doline_plateau',
    'tfg:earth/glacially_carved_mountains',
    'tfg:earth/glacially_carved_oceanic_mountains',
    'tfg:earth/glaciated_mountains',
    'tfg:earth/glaciated_oceanic_mountains',
    'tfg:earth/glaciated_shield_volcano',
    'tfg:earth/grassy_dunes',
    'tfg:earth/guano_island',
    'tfg:earth/highlands',
    'tfg:earth/hills',
    'tfg:earth/hoodoos',
    'tfg:earth/ice_sheet',
    'tfg:earth/ice_sheet_edge',
    'tfg:earth/ice_sheet_mountains',
    'tfg:earth/ice_sheet_mountains_edge',
    'tfg:earth/ice_sheet_oceanic',
    'tfg:earth/ice_sheet_oceanic_mountains',
    'tfg:earth/ice_sheet_oceanic_mountains_edge',
    'tfg:earth/ice_sheet_shield_volcano',
    'tfg:earth/ice_sheet_shore',
    'tfg:earth/ice_sheet_tuyas',
    'tfg:earth/ice_sheet_tuyas_edge',
    'tfg:earth/inverted_patterned_ground',
    'tfg:earth/knob_and_kettle',
    'tfg:earth/lake',
    'tfg:earth/low_canyons',
    'tfg:earth/lowlands',
    'tfg:earth/meltwater_lake',
    'tfg:earth/mesas',
    'tfg:earth/mountain_lake',
    'tfg:earth/mountains',
    'tfg:earth/mud_flats',
    'tfg:earth/ocean',
    'tfg:earth/ocean_reef',
    'tfg:earth/oceanic_mountain_lake',
    'tfg:earth/oceanic_mountains',
    'tfg:earth/old_mountain_lake',
    'tfg:earth/old_mountains',
    'tfg:earth/old_shield_volcano_shore',
    'tfg:earth/patterned_ground',
    'tfg:earth/plains',
    'tfg:earth/plateau',
    'tfg:earth/plateau_lake',
    'tfg:earth/plateau_wide',
    'tfg:earth/river',
    'tfg:earth/rocky_plateau',
    'tfg:earth/rocky_shores',
    'tfg:earth/rolling_hills',
    'tfg:earth/salt_flats',
    'tfg:earth/salt_marsh',
    'tfg:earth/sea_stacks',
    'tfg:earth/setback_cliffs',
    'tfg:earth/shield_volcano_shore',
    'tfg:earth/shilin_canyons',
    'tfg:earth/shilin_highlands',
    'tfg:earth/shilin_hills',
    'tfg:earth/shilin_plains',
    'tfg:earth/shilin_plateau',
    'tfg:earth/shore',
    'tfg:earth/stair_step_canyons',
    'tfg:earth/stone_circles',
    'tfg:earth/subglacial_lake',
    'tfg:earth/sunken_shield_volcano',
    'tfg:earth/terrace_lower',
    'tfg:earth/terrace_upper',
    'tfg:earth/tidal_flats',
    'tfg:earth/tower_karst_bay',
    'tfg:earth/tower_karst_canyons',
    'tfg:earth/tower_karst_highlands',
    'tfg:earth/tower_karst_hills',
    'tfg:earth/tower_karst_lake',
    'tfg:earth/tower_karst_plains',
    'tfg:earth/tuyas',
    'tfg:earth/volcanic_mountain_lake',
    'tfg:earth/volcanic_mountains',
    'tfg:earth/volcanic_oceanic_mountain_lake',
    'tfg:earth/volcanic_oceanic_mountains',
    'tfg:earth/whorled_canyons'
])