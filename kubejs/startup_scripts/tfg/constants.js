// priority: -100
"use strict";

/**
 * @type {string[]} - Item Names
 */
global.AIRCRAFT_UPGRADES = [
	"lv_aircraft_engine",
	"hv_aircraft_engine",
	"ev_aircraft_engine",

	"black_steel_plated_airplane_propeller",
	"redblu_steel_plated_airplane_propeller",
	"stainless_steel_plated_airplane_propeller",
	"titanium_plated_airplane_propeller",

	"redblu_steel_landing_gear",
	"aluminium_landing_gear",
	"stainless_steel_landing_gear",
	"titanium_landing_gear",

	"redblu_steel_hull_reinforcement",
	"aluminium_hull_reinforcement",
	"stainless_steel_hull_reinforcement",
	"titanium_hull_reinforcement"
]


/**
 * @type {string[]} - Stone Names
 */
global.MOON_STONE_TYPES = [
	"andesite",
	"basalt",
	"dacite",
	"diorite",
	"gabbro",
	"glacio_stone",
	"moon_deepslate",
	"moon_stone",
	"rhyolite"
]

/**
 * @type {string[]} - Biome IDs
 */
global.MOON_BIOMES = [
	'tfg:moon/lunar_plains',
	'tfg:moon/lunar_sands',
	'tfg:moon/lunar_asurine_dense',
	'tfg:moon/lunar_asurine_sparse',
	'tfg:moon/lunar_chorus_dense',
	'tfg:moon/lunar_chorus_sparse',
	'tfg:moon/lunar_corals_dense',
	'tfg:moon/lunar_corals_sparse',
	'tfg:moon/lunar_lights_dense',
	'tfg:moon/lunar_lights_sparse'
]

/**
 * @type {string[]} - Biome IDs
 */
global.MARS_BIOMES = [
	'tfg:mars/martian_deep_desert',
	'tfg:mars/martian_dunes',
	'tfg:mars/martian_dune_edge',
	'tfg:mars/martian_river',
	'tfg:mars/amber_edge',
	'tfg:mars/amber_plains',
	'tfg:mars/amber_hills',
	'tfg:mars/rusticus_edge',
	'tfg:mars/rusticus_plains',
	'tfg:mars/rusticus_hills',
	'tfg:mars/sangnum_edge',
	'tfg:mars/sangnum_plains',
	'tfg:mars/sangnum_hills',
	'tfg:mars/martian_mountains'
]

/**
 * @type {string[]} - Biome IDs
 */
global.VENUS_BIOMES = [
	'tfg:venus/arachnoids',
	'tfg:venus/fractured_pools',
	'tfg:venus/fumaroles',
	'tfg:venus/geysers',
	'tfg:venus/jagged_tablelands',
	'tfg:venus/salt_flats',
	'tfg:venus/stromatolite_beach',
	'tfg:venus/sulfuric_ravine',
	'tfg:venus/scorching_volcanoes'
]

/**
 * @type {string[]} - Block Names
 */
global.TFG_MACHINE_CASINGS = [
	'machine_casing_clean_stainless_steel_desh',
	'machine_casing_desh_ptfe',
	'machine_casing_iron_desh',
	'machine_casing_ptfe_desh',
	'machine_casing_stainless_steel_desh',
	'machine_casing_blue_solar_panel',
	'machine_casing_green_solar_panel',
	'machine_casing_red_solar_panel',
	'machine_casing_mars',
	'machine_casing_ostrum_carbon'
];

/**
 * @type {string[]} - Circuit Tiers
 */
global.UNIVERSAL_CIRCUIT_TIERS = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv"];

/**
 * @typedef {Object} Fruit
 * @property {string} name - Fruit Name
 * @property {string} id - Fruit ID
 * @property {number} saturation - Saturation Value
 * @property {number} water - Water Value
 * @property {number} fruit - Fruit Value
 * @property {number} decay - Decay Modifier
 */

/** @type {Fruit[]} */
global.FOOD_FRUIT = [
	{name: 'red_grapes', id: 'firmalife:food/red_grapes', saturation: 0.4, water: 2, fruit: 0.5, decay: 2.25},
	{name: 'white_grapes', id: 'firmalife:food/white_grapes', saturation: 0.4, water: 2, fruit: 0.5, decay: 2.25},
	{name: 'glow_berries', id: 'minecraft:glow_berries', saturation: 0, water: 5, fruit: 0.5, decay: 2.25},
	{name: 'chorus_fruit', id: 'minecraft:chorus_fruit', saturation: 0, water: 5, fruit: 2, decay: 1.2},
	{name: 'popped_chorus_fruit', id: 'minecraft:popped_chorus_fruit', saturation: 1, water: 0, fruit: 3, decay: 0.8},
	{name: 'blackberry', id: 'tfc:food/blackberry', saturation: 0.2, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'blueberry', id: 'tfc:food/blueberry', saturation: 0.2, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'bunchberry', id: 'tfc:food/bunchberry', saturation: 0.4, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'cloudberry', id: 'tfc:food/cloudberry', saturation: 0.4, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'cranberry', id: 'tfc:food/cranberry', saturation: 0.2, water: 5, fruit: 1, decay: 2.25},
	{name: 'elderberry', id: 'tfc:food/elderberry', saturation: 0.2, water: 5, fruit: 1, decay: 4.5},
	{name: 'gooseberry', id: 'tfc:food/gooseberry', saturation: 0.4, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'raspberry', id: 'tfc:food/raspberry', saturation: 0.4, water: 5, fruit: 0.8, decay: 4.5},
	{name: 'snowberry', id: 'tfc:food/snowberry', saturation: 0.2, water: 5, fruit: 1, decay: 4.5},
	{name: 'strawberry', id: 'tfc:food/strawberry', saturation: 0.4, water: 10, fruit: 0.5, decay: 4.5},
	{name: 'wintergreen_berry', id: 'tfc:food/wintergreen_berry', saturation: 0.2, water: 5, fruit: 1, decay: 2.1},
	{name: 'banana', id: 'tfc:food/banana', saturation: 0.2, water: 0, fruit: 1, decay: 2.25},
	{name: 'cherry', id: 'tfc:food/cherry', saturation: 0.2, water: 5, fruit: 1, decay: 3.5},
	{name: 'green_apple', id: 'tfc:food/green_apple', saturation: 0.4, water: 0, fruit: 1, decay: 2.5},
	{name: 'lemon', id: 'tfc:food/lemon', saturation: 0.2, water: 5, fruit: 0.08, decay: 2.25},
	{name: 'olive', id: 'tfc:food/olive', saturation: 0.2, water: 0, fruit: 1, decay: 2.25},
	{name: 'orange', id: 'tfc:food/orange', saturation: 0.4, water: 10, fruit: 0.5, decay: 2.25},
	{name: 'peach', id: 'tfc:food/peach', saturation: 0.4, water: 10, fruit: 0.5, decay: 2.5},
	{name: 'plum', id: 'tfc:food/plum', saturation: 0.4, water: 5, fruit: 0.8, decay: 2.25},
	{name: 'red_apple', id: 'tfc:food/red_apple', saturation: 0.4, water: 0, fruit: 1, decay: 2.25},
	{name: 'pumpkin_chunks', id: 'tfc:food/pumpkin_chunks', saturation: 1, water: 5, fruit: 0.8, decay: 2.25},
	{name: 'melon_slice', id: 'tfc:food/melon_slice', saturation: 0.2, water: 5, fruit: 0.8, decay: 2.25},
	{name: 'fig', id: 'firmalife:food/fig', saturation: 1, water: 5, fruit: 0.9, decay: 1},
	{name: 'pineapple', id: 'firmalife:food/pineapple', saturation: 1, water: 1, fruit: 0.8, decay: 4.5},
	{name: 'cave_pumpkin', id: 'betterend:cave_pumpkin_chunks', saturation: 1, water: 5, fruit: 0.8, decay: 2.25 },
	{name: 'blossom_berry', id: 'betterend:blossom_berry_product', saturation: 1, water: 7.5, fruit: 1.5, decay: 2 },
	{name: 'shadow_berry', id: 'betterend:shadow_berry_cooked', saturation: 1, water: 5, fruit: 1.5, decay: 2 }
];

/** @type {Hammering[]} */
global.HAMMERING = [ // Crushing relationships for manual block hammering, create press hammering and gtceu forge hammer crushing.
	{ raw: 'minecraft:basalt',                      hammered: 'tfc:rock/cobble/basalt',          duration: 10, eu: 7 },
	{ raw: 'tfg:rock/gravel_permafrost',            hammered: '4x gtceu:ice_dust',               duration: 70, eu: 16 },
	// TODO: make a big sand/sandstone table like the rock table?
	{ raw: 'minecraft:red_sandstone',               hammered: '4x minecraft:red_sand',           duration: 10, eu: 16 },
	{ raw: 'ad_astra:venus_sandstone',              hammered: '4x ad_astra:venus_sand',          duration: 70, eu: 16 },
	{ raw: 'tfg:sandstone/raw/fluorapatite/blue',   hammered: '4x tfg:sand/fluorapatite/blue',   duration: 70, eu: 16 },
	{ raw: 'tfg:sandstone/raw/fluorapatite/green',  hammered: '4x tfg:sand/fluorapatite/green',  duration: 70, eu: 16 },
	{ raw: 'tfg:sandstone/raw/fluorapatite/brown',  hammered: '4x tfg:sand/fluorapatite/brown',  duration: 70, eu: 16 },
	{ raw: 'tfg:sandstone/raw/fluorapatite/orange', hammered: '4x tfg:sand/fluorapatite/orange', duration: 70, eu: 16 },
	{ raw: 'tfg:sandstone/raw/fluorapatite/white',  hammered: '4x tfg:sand/fluorapatite/white',  duration: 70, eu: 16 },
	{ raw: 'tfg:sandstone/raw/fluorapatite/yellow', hammered: '4x tfg:sand/fluorapatite/yellow', duration: 70, eu: 16 },
	{ raw: '#tfg:moon_gravel',                      hammered: 'ad_astra:moon_sand',              duration: 70, eu: 16 },
	{ raw: '#tfg:mars_gravel',                      hammered: 'ad_astra:mars_sand',              duration: 70, eu: 16 },
	{ raw: '#tfg:venus_gravel',                     hammered: 'ad_astra:venus_sand',             duration: 70, eu: 16 },
	{ raw: '#tfg:hematitic_gravel',                 hammered: 'minecraft:red_sand',              duration: 70, eu: 16 },
]

global.COOLING_FOODS = [
	'firmalife:food/vanilla_ice_cream',
	'firmalife:food/chocolate_ice_cream',
	'firmalife:food/strawberry_ice_cream',
	'firmalife:food/cookie_dough_ice_cream',
	'firmalife:food/banana_split'
];

global.COOLING_FOODS_STRONG = [
	'tfg:ice_soup'
];

global.WARMING_FOODS = [
	'tfc:food/grain_soup',
	'tfc:food/fruit_soup',
	'tfc:food/vegetables_soup',
	'tfc:food/protein_soup',
	'tfc:food/dairy_soup',
	'tfg:food/poutine'
];

/**
 * @typedef {Object} LabEqupmentContainers
 * @property {string} type - Container Type
 * @property {number} capacity - Max Capacity in mB
 */

/** @type {LabEqupmentContainers[]} */
global.LAB_EQUIPMENT_CONTAINERS = [
	{type: 'beaker', capacity: 1296},
	{type: 'flask', capacity: 144},
	{type: 'vial', capacity: 16}
];

/**
 * @typedef {Object} spices
 * @property {string} plant - Spice Plant
 * @property {string} product - Spice Product
 */
/** @type {spices[]} - Item IDs */
global.SPICES = [
	// Cinnamon is not obtainable so im not including it yet.
	{ plant: 'firmalife:plant/basil', product: 'firmalife:spice/basil_leaves' },
	{ plant: 'firmalife:plant/vanilla', product: 'firmalife:spice/vanilla' },
	// New spices V
	{ plant: 'firmalife:plant/bay_laurel', product: 'tfg:spice/bay_leaf' },
	{ plant: 'firmalife:plant/cardamom', product: 'tfg:spice/cardamom_pods' },
	{ plant: 'firmalife:plant/cilantro', product: 'tfg:spice/cilantro_leaves' },
	{ plant: 'firmalife:plant/cumin', product: 'tfg:spice/cumin_seeds' },
	{ plant: 'firmalife:plant/oregano', product: 'tfg:spice/oregano_leaves' },
	{ plant: 'firmalife:plant/pimento', product: 'tfg:spice/allspice' }
];

/**
 * @typedef {Object} FishIndex
 * @property {string} id - Fish mob ID.
 * @property {string} item - Fish Item ID.
 * @property {string} parent - Bucket of Fish Item ID.
 * @property {string|null} dimension - Dimension ID (null for any).
 */
/** @type {FishIndex[]} - Index of fish mobs for pisciculture */
global.FISH_INDEX = [
	{ id: 'tfc:bluegill', item: 'tfc:food/bluegill', parent: 'tfc:bucket/bluegill', dimension: null },
	{ id: 'tfc:crappie', item: 'tfc:food/crappie', parent: 'tfc:bucket/crappie', dimension: null },
	{ id: 'tfc:lake_trout', item: 'tfc:food/lake_trout', parent: 'tfc:bucket/lake_trout', dimension: null },
	{ id: 'tfc:largemouth_bass', item: 'tfc:food/largemouth_bass', parent: 'tfc:bucket/largemouth_bass', dimension: null },
	{ id: 'tfc:rainbow_trout', item: 'tfc:food/rainbow_trout', parent: 'tfc:bucket/rainbow_trout', dimension: null },
	{ id: 'tfc:salmon', item: 'tfc:food/salmon', parent: 'tfc:bucket/salmon', dimension: null },
	{ id: 'tfc:smallmouth_bass', item: 'tfc:food/smallmouth_bass', parent: 'tfc:bucket/smallmouth_bass', dimension: null },
	{ id: 'tfc:cod', item: 'tfc:food/cod', parent: 'tfc:bucket/cod', dimension: null },
	{ id: 'tfc:tropical_fish', item: 'tfc:food/tropical_fish', parent: 'tfc:bucket/tropical_fish', dimension: null },
	{ id: 'tfc:pufferfish', item: 'minecraft:pufferfish', parent: 'tfc:bucket/pufferfish', dimension: null },
	{ id: 'wan_ancient_beasts:toxlacanth', item: 'wan_ancient_beasts:toxlacanth', parent: 'wan_ancient_beasts:toxlacanth_bucket', dimension: 'ad_astra:mars' }
];

/**
 * @type {string[]} - Saws unable to silk harvest ice
 */
global.ICE_SAW_BLACKLIST = [
	"gtceu:damascus_steel_saw",
	"gtceu:steel_saw",
	"gtceu:bronze_saw",
	"gtceu:bismuth_bronze_saw",
	"gtceu:copper_saw",
	"gtceu:cobalt_brass_saw",
	"gtceu:black_steel_saw",
	"gtceu:black_bronze_saw",
	"gtceu:wrought_iron_saw",
	"gtceu:invar_saw"
]