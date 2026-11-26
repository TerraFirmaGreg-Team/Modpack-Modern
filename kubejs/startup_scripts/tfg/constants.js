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
	'tfg:venus/scorching_volcanoes',
	'tfg:venus/venus_caves'
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
	"tfg:plant/shawiash",
	"tfg:plant/tank_bromeliad",
	"tfg:plant/yellow_saxifrage",
	"tfg:plant/flame_vine",
	"tfg:plant/cycad"
];

global.TFG_WOOD_STRUCT = ([
	{
		tfgCore: true,
		modName: 'tfg',
		name: 'araucaria',
		logsTag: '#tfg:araucaria_logs',
		tree_data: global.woodStructHelpers.treeData2(1,
			["tfg"],
			["araucaria"],
			[global.woodStructHelpers.logDataFormat("tfg", global.woodStructHelpers.tfcWoodFormatArray(), "araucaria", null, 1)],
			[global.woodStructHelpers.tfcLeaves("tfg", "araucaria")],
			[global.woodStructHelpers.resLocFormat("tfg", "wood/leaves/{0}_fallen", "araucaria")],
			[global.woodStructHelpers.tfcSapling("tfg", "araucaria")],
			global.woodStructHelpers.arrayAll(global.woodStructHelpers.tfcTreeTwig("tfg", "araucaria"), 1),
			global.woodStructHelpers.arrayAll(null, 1),
			global.woodStructHelpers.arrayAll(null, 1)),
		lumber: 'tfg:wood/lumber/araucaria', plank: 'tfg:wood/planks/araucaria',
		stair: 'tfg:wood/stairs/araucaria', slab: 'tfg:wood/slab/araucaria',
		fence: 'tfg:wood/fence/araucaria', fence_gate: 'tfg:wood/fence_gate/araucaria', log_fence: 'tfg:wood/log_fence/araucaria',
		door: 'tfg:wood/door/araucaria', trapdoor: 'tfg:wood/trapdoor/araucaria',
		button: 'tfg:wood/button/araucaria', pressure_plate: 'tfg:wood/pressure_plate/araucaria',
		chest: 'tfg:wood/chest/araucaria', trapped_chest: 'tfg:wood/trapped_chest/araucaria', chest_minecart: null,
		sign: 'tfg:wood/sign/araucaria', hanging_sign: 'tfg:wood/hanging_sign/araucaria',
		workbench: 'tfg:wood/workbench/araucaria', crafting_station: 'tfg:wood/crafting_station/araucaria', crafting_station_slab: 'tfg:wood/crafting_station/araucaria_slab', loom: 'tfg:wood/loom/araucaria', sewing_table: 'tfg:wood/sewing_table/araucaria', scribing_table: 'tfg:wood/scribing_table/araucaria',
		big_barrel: 'tfg:wood/big_barrel/araucaria', stomping_barrel: 'tfg:wood/stomping_barrel/araucaria', barrel: 'tfg:wood/barrel/araucaria', barrel_press: 'tfg:wood/barrel_press/araucaria',
		sluice: 'tfg:wood/sluice/araucaria', tool_rack: 'tfg:wood/tool_rack/araucaria', lectern: 'tfg:wood/lectern/araucaria',
		jar_shelf: 'tfg:wood/jar_shelf/araucaria', food_shelf: 'tfg:wood/food_shelf/araucaria', bookshelf: 'tfg:wood/bookshelf/araucaria', jarbnet: 'tfg:wood/jarbnet/araucaria', wine_shelf: 'tfg:wood/wine_shelf/araucaria',
		support: 'tfg:wood/support/araucaria',
		window: null, window_pane: null,
		roof: 'tfg:wood/araucaria_roofing',
		hanger: 'tfg:wood/hanger/araucaria',
		rope_ladder: 'tfg:wood/rope_ladder/araucaria',
		rnr_data: null,
		astikor_data: null,
		railways_data: null,
		macaw_data: null,
		tfg_data: global.woodStructHelpers.tfgData("brown", "white", "green", "wood", "azalea_leaves", 5, "nether"),
		woodKind: global.WOOD_KIND.SOFT,
	},
	{
		tfgCore: true,
		modName: 'tfg',
		name: 'mahoe',
		logsTag: '#tfg:mahoe_logs',
		tree_data: global.woodStructHelpers.treeData2(1,
			["tfg"],
			["mahoe"],
			[global.woodStructHelpers.logDataFormat("tfg", global.woodStructHelpers.tfcWoodFormatArray(), "mahoe", null, 1)],
			[global.woodStructHelpers.tfcLeaves("tfg", "mahoe")],
			[global.woodStructHelpers.resLocFormat("tfg", "wood/leaves/{0}_fallen", "mahoe")],
			[global.woodStructHelpers.tfcSapling("tfg", "mahoe")],
			global.woodStructHelpers.arrayAll(global.woodStructHelpers.tfcTreeTwig("tfg", "mahoe"), 1),
			global.woodStructHelpers.arrayAll(null, 1),
			global.woodStructHelpers.arrayAll(null, 1)),
		lumber: 'tfg:wood/lumber/mahoe', plank: 'tfg:wood/planks/mahoe',
		stair: 'tfg:wood/stairs/mahoe', slab: 'tfg:wood/slab/mahoe',
		fence: 'tfg:wood/fence/mahoe', fence_gate: 'tfg:wood/fence_gate/mahoe', log_fence: 'tfg:wood/log_fence/mahoe',
		door: 'tfg:wood/door/mahoe', trapdoor: 'tfg:wood/trapdoor/mahoe',
		button: 'tfg:wood/button/mahoe', pressure_plate: 'tfg:wood/pressure_plate/mahoe',
		chest: 'tfg:wood/chest/mahoe', trapped_chest: 'tfg:wood/trapped_chest/mahoe', chest_minecart: null,
		sign: 'tfg:wood/sign/mahoe', hanging_sign: 'tfg:wood/hanging_sign/mahoe',
		workbench: 'tfg:wood/workbench/mahoe', crafting_station: 'tfg:wood/crafting_station/mahoe', crafting_station_slab: 'tfg:wood/crafting_station/mahoe_slab', loom: 'tfg:wood/loom/mahoe', sewing_table: 'tfg:wood/sewing_table/mahoe', scribing_table: 'tfg:wood/scribing_table/mahoe',
		big_barrel: 'tfg:wood/big_barrel/mahoe', stomping_barrel: 'tfg:wood/stomping_barrel/mahoe', barrel: 'tfg:wood/barrel/mahoe', barrel_press: 'tfg:wood/barrel_press/mahoe',
		sluice: 'tfg:wood/sluice/mahoe', tool_rack: 'tfg:wood/tool_rack/mahoe', lectern: 'tfg:wood/lectern/mahoe',
		jar_shelf: 'tfg:wood/jar_shelf/mahoe', food_shelf: 'tfg:wood/food_shelf/mahoe', bookshelf: 'tfg:wood/bookshelf/mahoe', jarbnet: 'tfg:wood/jarbnet/mahoe', wine_shelf: 'tfg:wood/wine_shelf/mahoe',
		support: 'tfg:wood/support/mahoe',
		window: null, window_pane: null,
		roof: 'tfg:wood/mahoe_roofing',
		hanger: 'tfg:wood/hanger/mahoe',
		rope_ladder: 'tfg:wood/rope_ladder/mahoe',
		rnr_data: null,
		astikor_data: null,
		railways_data: null,
		macaw_data: null,
		tfg_data: global.woodStructHelpers.tfgData("brown", "blue", "green", "wood", "azalea_leaves", 5, "nether"),
		woodKind: global.WOOD_KIND.HARD,
	},
	{
		tfgCore: true,
		modName: 'tfg',
		name: 'beech',
		logsTag: '#tfg:beech_logs',
		tree_data: global.woodStructHelpers.treeData2(1,
			["tfg"],
			["beech"],
			[global.woodStructHelpers.logDataFormat("tfg", global.woodStructHelpers.tfcWoodFormatArray(), "beech", null, 1)],
			[global.woodStructHelpers.tfcLeaves("tfg", "beech")],
			[global.woodStructHelpers.resLocFormat("tfg", "wood/leaves/{0}_fallen", "beech")],
			[global.woodStructHelpers.tfcSapling("tfg", "beech")],
			global.woodStructHelpers.arrayAll(global.woodStructHelpers.tfcTreeTwig("tfg", "beech"), 1),
			global.woodStructHelpers.arrayAll(null, 1),
			global.woodStructHelpers.arrayAll(null, 1)),
		lumber: 'tfg:wood/lumber/beech', plank: 'tfg:wood/planks/beech',
		stair: 'tfg:wood/stairs/beech', slab: 'tfg:wood/slab/beech',
		fence: 'tfg:wood/fence/beech', fence_gate: 'tfg:wood/fence_gate/beech', log_fence: 'tfg:wood/log_fence/beech',
		door: 'tfg:wood/door/beech', trapdoor: 'tfg:wood/trapdoor/beech',
		button: 'tfg:wood/button/beech', pressure_plate: 'tfg:wood/pressure_plate/beech',
		chest: 'tfg:wood/chest/beech', trapped_chest: 'tfg:wood/trapped_chest/beech', chest_minecart: null,
		sign: 'tfg:wood/sign/beech', hanging_sign: 'tfg:wood/hanging_sign/beech',
		workbench: 'tfg:wood/workbench/beech', crafting_station: 'tfg:wood/crafting_station/beech', crafting_station_slab: 'tfg:wood/crafting_station/beech_slab', loom: 'tfg:wood/loom/beech', sewing_table: 'tfg:wood/sewing_table/beech', scribing_table: 'tfg:wood/scribing_table/beech',
		big_barrel: 'tfg:wood/big_barrel/beech', stomping_barrel: 'tfg:wood/stomping_barrel/beech', barrel: 'tfg:wood/barrel/beech', barrel_press: 'tfg:wood/barrel_press/beech',
		sluice: 'tfg:wood/sluice/beech', tool_rack: 'tfg:wood/tool_rack/beech', lectern: 'tfg:wood/lectern/beech',
		jar_shelf: 'tfg:wood/jar_shelf/beech', food_shelf: 'tfg:wood/food_shelf/beech', bookshelf: 'tfg:wood/bookshelf/beech', jarbnet: 'tfg:wood/jarbnet/beech', wine_shelf: 'tfg:wood/wine_shelf/beech',
		support: 'tfg:wood/support/beech',
		window: null, window_pane: null,
		roof: 'tfg:wood/beech_roofing',
		hanger: 'tfg:wood/hanger/beech',
		rope_ladder: 'tfg:wood/rope_ladder/beech',
		rnr_data: null,
		astikor_data: null,
		railways_data: null,
		macaw_data: null,
		tfg_data: global.woodStructHelpers.tfgData("brown", "lime", "green", "wood", "azalea_leaves", 6, "nether"),
		woodKind: global.WOOD_KIND.HARD,
	},
])
