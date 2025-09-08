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
	'ad_astra:moon_stone',
	'ad_astra:moon_deepslate',
	'ad_astra:mars_stone',
	'ad_astra:venus_stone',
	'ad_astra:mercury_stone',
	'ad_astra:glacio_stone',
	'gtceu:red_granite'
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
	'tfg:rock/hardened_red_granite'
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
	'machine_casing_mars'
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
	'tfc:food/dairy_soup'
];