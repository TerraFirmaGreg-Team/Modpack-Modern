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
 * @type {string[]} - Item IDs
 */
global.EXTRATERRESTRIAL_RAW_ROCKS = [
	'minecraft:deepslate',
	'minecraft:blackstone',
	'minecraft:dripstone_block',
	'ad_astra:moon_stone',
	'ad_astra:moon_deepslate',
	'ad_astra:mars_stone',
	'ad_astra:venus_stone',
	'ad_astra:mercury_stone',
	'ad_astra:glacio_stone',
	'gtceu:red_granite',
	'beneath:crackrack'
]

/**
 * @type {string[]} - Item IDs
 */
global.EXTRATERRESTRIAL_HARDENED_ROCKS = [
	'tfg:rock/hardened_moon_stone',
	'tfg:rock/hardened_moon_deepslate',
	'tfg:rock/hardened_mars_stone',
	'tfg:rock/hardened_venus_stone',
	'tfg:rock/hardened_mercury_stone',
	'tfg:rock/hardened_glacio_stone',
	'tfg:rock/hardened_red_granite',
	'tfg:rock/hardened_deepslate',
	'tfg:rock/hardened_blackstone',
	'tfg:rock/hardened_dripstone',
	'tfg:rock/hardened_crackrack'
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
	'tfg:venus/volcanic_mountains'
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


global.STONE_CHARACS = { // Sets of stone block properties used for block registry.
	deepslate:      { sound: 'deepslate',       type: "metamorphic",       mapColor: 'terracotta_grey'       },
	blackstone:     { sound: 'stone',           type: "igneous_intrusive", mapColor: 'color_black'           },
	dripstone:      { sound: 'dripstone_block', type: "sedimentary",       mapColor: 'terracotta_brown'      },
	crackrack:      { sound: 'netherrack',      type: "igneous_intrusive", mapColor: 'crimson_stem'          },
	nether:         { sound: 'nether_bricks',   type: "igneous_intrusive", mapColor: 'nether'                },
	moon:           { sound: 'stone',           type: "igneous_intrusive", mapColor: 'terracotta_cyan'       },
	moon_deepslate: { sound: 'deepslate',       type: "igneous_intrusive", mapColor: 'terracotta_blue'       },
	mars:           { sound: 'stone',           type: "sedimentary",       mapColor: 'terracotta_orange'     },
	venus:          { sound: 'stone',           type: "igneous_extrusive", mapColor: 'terracotta_yellow'     },
	mercury:        { sound: 'stone',           type: "igneous_intrusive", mapColor: 'terracotta_purple'     },
	glacio:         { sound: 'stone',           type: "igneous_extrusive", mapColor: 'terracotta_light_blue' },
	permafrost:     { sound: 'stone',           type: null,                mapColor: 'snow'                  },
	red_granite:    { sound: 'stone',           type: "igneous_intrusive", mapColor: 'terracotta_red'        },
	reconstituted:  { sound: 'stone',           type: null,                mapColor: 'stone'                 },
	light_concrete: { sound: 'stone',           type: null,                mapColor: 'color_light_gray'      },
	dark_concrete:  { sound: 'stone',           type: null,                mapColor: 'color_gray'            }
}


/** @type {Hammering[]} */
global.HAMMERING = [ // Crushing relationships for manual block hammering, create press hammering and gtceu forge hammer crushing.
		// Beneath
		{ raw: 'minecraft:deepslate',                  hammered: 'minecraft:cobbled_deepslate',    duration: 10, eu: 7 },
		{ raw: 'tfg:rock/hardened_deepslate',          hammered: 'minecraft:cobbled_deepslate',    duration: 10, eu: 7 },
		{ raw: 'minecraft:cobbled_deepslate',          hammered: 'tfg:rock/gravel_deepslate',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_deepslate',      hammered: 'tfg:rock/gravel_deepslate',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_deepslate',            hammered: 'tfc:sand/black',                 duration: 70, eu: 16 },

		{ raw: 'minecraft:blackstone',                 hammered: 'tfg:rock/cobble_blackstone',     duration: 10, eu: 7 },
		{ raw: 'tfg:rock/hardened_blackstone',         hammered: 'tfg:rock/cobble_blackstone',     duration: 10, eu: 7 },
		{ raw: 'tfg:rock/cobble_blackstone',           hammered: 'tfg:rock/gravel_blackstone',     duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_blackstone',     hammered: 'tfg:rock/gravel_blackstone',     duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_blackstone',           hammered: 'tfc:sand/black',                 duration: 70, eu: 16 },

		{ raw: 'minecraft:dripstone_block',            hammered: 'tfg:rock/cobble_dripstone',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/hardened_dripstone',          hammered: 'tfg:rock/cobble_dripstone',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/cobble_dripstone',            hammered: 'tfg:rock/gravel_dripstone',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_dripstone',      hammered: 'tfg:rock/gravel_dripstone',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_dripstone',            hammered: 'tfc:sand/brown',                 duration: 70, eu: 16 },

		{ raw: 'beneath:crackrack',                    hammered: 'tfg:rock/cobble_crackrack',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/cobble_crackrack',            hammered: 'tfg:rock/gravel_crackrack',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_crackrack',      hammered: 'tfg:rock/gravel_crackrack',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_crackrack',            hammered: 'tfc:sand/pink',                  duration: 70, eu: 16 },

		{ raw: 'minecraft:basalt',                     hammered: 'tfc:rock/cobble/basalt',         duration: 10, eu: 7 },

		// Moon
		{ raw: 'ad_astra:moon_stone',                  hammered: 'ad_astra:moon_cobblestone',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/hardened_moon_stone',         hammered: 'ad_astra:moon_cobblestone',      duration: 10, eu: 7 },
		{ raw: 'ad_astra:moon_cobblestone',            hammered: 'tfg:rock/gravel_moon',           duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_moon',           hammered: 'tfg:rock/gravel_moon',           duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_moon',                 hammered: 'ad_astra:moon_sand',             duration: 70, eu: 16 },

		{ raw: 'ad_astra:moon_deepslate',              hammered: 'tfg:rock/cobble_moon_deepslate', duration: 10, eu: 7 },
		{ raw: 'tfg:rock/hardened_moon_deepslate',     hammered: 'tfg:rock/cobble_moon_deepslate', duration: 10, eu: 7 },
		{ raw: 'tfg:rock/cobble_moon_deepslate',       hammered: 'tfg:rock/gravel_moon_deepslate', duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_moon_deepslate', hammered: 'tfg:rock/gravel_moon_deepslate', duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_moon_deepslate',       hammered: 'ad_astra:moon_sand',             duration: 10, eu: 16 },

		{ raw: 'ad_astra:glacio_stone',                hammered: 'ad_astra:glacio_cobblestone',    duration: 10, eu: 7 },
		{ raw: 'tfg:rock/hardened_glacio_stone',       hammered: 'ad_astra:glacio_cobblestone',    duration: 10, eu: 7 },
		{ raw: 'ad_astra:glacio_cobblestone',          hammered: 'tfg:rock/gravel_glacio',         duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_glacio',         hammered: 'tfg:rock/gravel_glacio',         duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_glacio',               hammered: 'tfc:sand/white',                 duration: 70, eu: 16 },

		// Mars
		{ raw: 'ad_astra:mars_stone',                  hammered: 'ad_astra:mars_cobblestone',      duration: 10, eu: 7 },
		{ raw: 'tfg:rock/hardened_mars_stone',         hammered: 'ad_astra:mars_cobblestone',      duration: 10, eu: 7 },
		{ raw: 'ad_astra:mars_cobblestone',            hammered: 'tfg:rock/gravel_mars',           duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_mars',           hammered: 'tfg:rock/gravel_mars',           duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_mars',                 hammered: 'ad_astra:mars_sand',             duration: 70, eu: 16 },
		
		{ raw: 'minecraft:red_sandstone',              hammered: '4x minecraft:red_sand',          duration: 10, eu: 16 },

		{ raw: 'gtceu:red_granite',                    hammered: 'gtceu:red_granite_cobblestone',  duration: 10, eu: 7 },
		{ raw: 'tfg:rock/hardened_red_granite',        hammered: 'gtceu:red_granite_cobblestone',  duration: 10, eu: 7 },
		{ raw: 'gtceu:red_granite_cobblestone',        hammered: 'tfg:rock/gravel_red_granite',    duration: 10, eu: 7 },
		{ raw: 'gtceu:mossy_red_granite_cobblestone',  hammered: 'tfg:rock/gravel_red_granite',    duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_red_granite',          hammered: 'minecraft:red_sand',             duration: 70, eu: 16 },

		// Venus
		{ raw: 'ad_astra:venus_stone',                 hammered: 'ad_astra:venus_cobblestone',     duration: 10, eu: 7 },
		{ raw: 'tfg:rock/hardened_venus_stone',        hammered: 'ad_astra:venus_cobblestone',     duration: 10, eu: 7 },
		{ raw: 'ad_astra:venus_cobblestone',           hammered: 'tfg:rock/gravel_venus',          duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_venus',          hammered: 'tfg:rock/gravel_venus',          duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_venus',                hammered: 'ad_astra:venus_sand',            duration: 70, eu: 16 },

		{ raw: 'ad_astra:venus_sandstone',             hammered: '4x ad_astra:venus_sand',         duration: 70, eu: 16 },

		// Mercury
		{ raw: 'ad_astra:mercury_stone',               hammered: 'ad_astra:mercury_cobblestone',   duration: 10, eu: 7 },
		{ raw: 'tfg:rock/hardened_mercury_stone',      hammered: 'ad_astra:mercury_cobblestone',   duration: 10, eu: 7 },
		{ raw: 'ad_astra:mercury_cobblestone',         hammered: 'tfg:rock/gravel_mercury',        duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_mercury',        hammered: 'tfg:rock/gravel_mercury',        duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_mercury',              hammered: 'tfc:sand/red',                   duration: 70, eu: 16 },

		// Europa
		{ raw: 'ad_astra:permafrost',                  hammered: 'tfg:rock/cobble_permafrost',     duration: 10, eu: 7 },
		{ raw: 'tfg:rock/cobble_permafrost',           hammered: 'tfg:rock/gravel_permafrost',     duration: 10, eu: 7 },
		{ raw: 'tfg:rock/mossy_cobble_permafrost',     hammered: 'tfg:rock/gravel_permafrost',     duration: 10, eu: 7 },
		{ raw: 'tfg:rock/gravel_permafrost',           hammered: '4x gtceu:ice_dust',              duration: 70, eu: 16 },
		
		// Misc
		{ raw: 'ad_astra:conglomerate',                hammered: 'tfc:rock/gravel/conglomerate',   duration: 10, eu: 7 },
		
		{ raw: 'minecraft:stone',                      hammered: 'minecraft:cobblestone',          duration: 10, eu: 7 }
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
