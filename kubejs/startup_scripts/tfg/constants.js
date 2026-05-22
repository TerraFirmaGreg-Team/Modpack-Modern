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
];


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
];

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
];

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
];

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
];

/**
 * @type {string[]} - Circuit Tiers
 */
global.UNIVERSAL_CIRCUIT_TIERS = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv"];

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
	"gtceu:copper_saw",
	"gtceu:bronze_saw",
	"gtceu:bismuth_bronze_saw",
	"gtceu:black_bronze_saw",
	"gtceu:wrought_iron_saw",
	"gtceu:steel_saw",
	"gtceu:black_steel_saw",
	"gtceu:arsenic_bronze_saw",
	"gtceu:damascus_steel_saw"
];

/**
 * @type {string[]}
 */
global.NEW_OVERWORLD_PLANTS = [
	"tfg:plant/red_oat_grass",
	"tfg:plant/azalea",
	"tfg:plant/bear_grass",
	"tfg:plant/bird_nest_fern",
	"tfg:plant/buttercup",
	"tfg:plant/cornflower",
	"tfg:plant/dry_grass",
	"tfg:plant/edelweiss",
	"tfg:plant/elegant_sunburst_lichen",
	"tfg:plant/fan_palm",
	"tfg:plant/kinnikinnick",
	"tfg:plant/mountain_hullwort",
	"tfg:plant/moss_campion",
	"tfg:plant/palash",
	"tfg:plant/penwortel",
	"tfg:plant/prickly_pear",
	"tfg:plant/prickly_pear_purple",
	"tfg:plant/qantu",
	"tfg:plant/ramirezella",
	"tfg:plant/ramunda",
	"tfg:plant/silken_pincushion_cactus",
	"tfg:plant/silver_bromeliad",
	"tfg:plant/tank_bromeliad",
	"tfg:plant/yellow_saxifrage",
	"tfg:plant/flame_vine",
	"tfg:plant/cycad"
];

/**
 * @typedef {Object} NewWoodType.
 * @property {string} name - Wood Type Name.
 * @property {string} barkColor - Bark Color (Minecraft Color).
 * @property {string} woodColor - Wood Color (Minecraft Color).
 * @property {string} leafColor - Leaf Color (Minecraft Color).
 * @property {string} woodSound - Wood Sound Type.
 * @property {string} leafSound - Leaf Sound Type.
 * @property {number} daysToGrow - Days to Grow.
 * @property {string} location - Location.
 */
/**
 * @type {NewWoodType[]}
 */
global.TFG_NEW_WOOD_TYPES = [
	{
		name: "araucaria",
		barkColor: "brown",
		woodColor: "white",
		leafColor: "green",
		woodSound: "wood",
		leafSound: "azalea_leaves",
		daysToGrow: 5,
		location: "nether"
	},
	{
		name: "mahoe",
		barkColor: "brown",
		woodColor: "blue",
		leafColor: "green",
		woodSound: "wood",
		leafSound: "azalea_leaves",
		daysToGrow: 5,
		location: "nether"
	},
	{
		name: "beech",
		barkColor: "brown",
		woodColor: "lime",
		leafColor: "green",
		woodSound: "wood",
		leafSound: "azalea_leaves",
		daysToGrow: 6,
		location: "nether"
	}
];
