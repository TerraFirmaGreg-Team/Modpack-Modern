"use strict";


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

global.EXTRATERRESTRIAL_RAW_ROCKS = [
	'ad_astra:moon_stone',
	'ad_astra:moon_deepslate',
	'ad_astra:mars_stone',
	'ad_astra:venus_stone',
	'ad_astra:mercury_stone',
	'ad_astra:glacio_stone',
	'gtceu:red_granite'
]

global.EXTRATERRESTRIAL_HARDENED_ROCKS = [
	'tfg:rock/hardened_moon_stone',
	'tfg:rock/hardened_moon_deepslate',
	'tfg:rock/hardened_mars_stone',
	'tfg:rock/hardened_venus_stone',
	'tfg:rock/hardened_mercury_stone',
	'tfg:rock/hardened_glacio_stone',
	'tfg:rock/hardened_red_granite'
]

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

global.MARS_BIOMES = [
	'tfg:mars/martian_oasis',
	'tfg:mars/martian_deep_desert',
	'tfg:mars/martian_dunes',
	'tfg:mars/martian_dune_edge',
	'tfg:mars/martian_river',
	'tfg:mars/martian_riverbed',
	'tfg:mars/amber_plains',
	'tfg:mars/amber_hills',
	'tfg:mars/rusticus_plains',
	'tfg:mars/rusticus_hills',
	'tfg:mars/sangnum_plains',
	'tfg:mars/sangnum_hills',
	'tfg:mars/martian_mountains'
]

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

global.UNIVERSAL_CIRCUIT_TIERS = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv"];

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
	{name: 'pineapple', id: 'firmalife:food/pineapple', saturation: 1, water: 1, fruit: 0.8, decay: 4.5}
];

/** @global */
global.BRICK_INDEX = global.TFC_STONE_TYPES.map(tfc_stone => ({
	brick_type: tfc_stone,
	brick: `tfc:rock/bricks/${tfc_stone}`, brick_stairs: `tfc:rock/bricks/${tfc_stone}_stairs`, brick_slab: `tfc:rock/bricks/${tfc_stone}_slab`, brick_wall: `tfc:rock/bricks/${tfc_stone}_wall`, 
	cracked_brick: `tfc:rock/cracked_bricks/${tfc_stone}`, cracked_stairs: `tfc:rock/cracked_bricks/${tfc_stone}_stairs`, cracked_slab: `tfc:rock/cracked_bricks/${tfc_stone}_slab`, cracked_wall: `tfc:rock/cracked_bricks/${tfc_stone}_wall`, 
	mossy_brick: `tfc:rock/mossy_bricks/${tfc_stone}`, mossy_stairs: `tfc:rock/mossy_bricks/${tfc_stone}_stairs`, mossy_slab: `tfc:rock/mossy_bricks/${tfc_stone}_slab`, mossy_wall: `tfc:rock/mossy_bricks/${tfc_stone}_wall`,
	smooth_brick: `tfc:rock/smooth/${tfc_stone}`, smooth_stairs: `tfc:rock/smooth/${tfc_stone}_stairs`, smooth_slab: `tfc:rock/smooth/${tfc_stone}_slab`, smooth_wall: `tfc:rock/smooth/${tfc_stone}_wall`, 
	chiseled_brick: `tfc:rock/chiseled/${tfc_stone}`
}));
global.CREATE_DECO_BRICK_TYPES.slice(0, -1).forEach(create_brick => {
	global.BRICK_INDEX.push({
		brick_type: create_brick,
		brick: `createdeco:${create_brick}_bricks`, brick_stairs: `createdeco:${create_brick}_brick_stairs`, brick_slab: `createdeco:${create_brick}_brick_slab`, brick_wall: `createdeco:${create_brick}_brick_wall`,	
		cracked_brick: `createdeco:cracked_${create_brick}_bricks`, cracked_stairs: `createdeco:cracked_${create_brick}_brick_stairs`, cracked_slab: `createdeco:cracked_${create_brick}_brick_slab`, cracked_wall: `createdeco:cracked_${create_brick}_brick_wall`, 
		mossy_brick: `createdeco:mossy_${create_brick}_bricks`, mossy_stairs: `createdeco:mossy_${create_brick}_brick_stairs`, mossy_slab: `createdeco:mossy_${create_brick}_brick_slab`, mossy_wall: `createdeco:mossy_${create_brick}_brick_wall`,
		smooth_brick: `createdeco:corner_${create_brick}_bricks`, smooth_stairs: `createdeco:corner_${create_brick}_brick_stairs`, smooth_slab: `createdeco:corner_${create_brick}_brick_slab`, smooth_wall: `createdeco:corner_${create_brick}_brick_wall`,
		chiseled_brick: `createdeco:tiled_${create_brick}_bricks`
	})
});
global.BRICK_INDEX = global.BRICK_INDEX.concat([
	// {
	// brick_type: '',
	// brick: '', brick_stairs: '', brick_slab: '', brick_wall: '',
	// cracked_brick: '', cracked_stairs: '', cracked_slab: '', cracked_wall: '', 
	// mossy_brick: '', mossy_stairs: '', mossy_slab: '', mossy_wallL: '',
	// smooth_brick: '', smooth_stairs: '', smooth_slab: '', smooth_wall: '',
	// chiseled_brick: ''
	// },
	{
	brick_type: 'red',
	brick: 'minecraft:bricks', brick_stairs: 'minecraft:brick_stairs', brick_slab: 'minecraft:brick_slab', brick_wall: 'minecraft:brick_wall',
	cracked_brick: 'createdeco:cracked_red_bricks', cracked_stairs: 'createdeco:cracked_red_brick_stairs', cracked_slab: 'createdeco:cracked_red_brick_slab', cracked_wall: 'createdeco:cracked_red_brick_wall', 
	mossy_brick: 'createdeco:mossy_red_bricks', mossy_stairs: 'createdeco:mossy_red_brick_stairs', mossy_slab: 'createdeco:mossy_red_brick_slab', mossy_wall: 'createdeco:mossy_red_brick_wall',
	smooth_brick: 'createdeco:corner_red_bricks', smooth_stairs: 'createdeco:corner_red_brick_stairs', smooth_slab: 'createdeco:corner_red_brick_slab', smooth_wall: 'createdeco:corner_red_brick_wall',
	chiseled_brick: 'createdeco:tiled_red_bricks'
	},
	{
	brick_type: 'light_concrete',
	brick: 'gtceu:light_concrete_bricks', brick_stairs: null, brick_slab: null, brick_wall: null,
	cracked_brick: 'gtceu:cracked_light_concrete_bricks', cracked_stairs: null, cracked_slab: null, cracked_wall: null, 
	mossy_brick: 'gtceu:mossy_light_concrete_bricks', mossy_stairs: null, mossy_slab: null, mossy_wall: null,
	smooth_brick: 'gtceu:polished_light_concrete', smooth_stairs: null, smooth_slab: null, smooth_wall: null,
	chiseled_brick: 'gtceu:chiseled_light_concrete'
	},
	{
	brick_type: 'dark_concrete',
	brick: 'gtceu:dark_concrete_bricks', brick_stairs: null, brick_slab: null, brick_wall: null,
	cracked_brick: 'gtceu:cracked_dark_concrete_bricks', cracked_stairs: null, cracked_slab: null, cracked_wall: null, 
	mossy_brick: 'gtceu:mossy_dark_concrete_bricks', mossy_stairs: null, mossy_slab: null, mossy_wall: null,
	smooth_brick: 'gtceu:polished_dark_concrete', smooth_stairs: null, smooth_slab: null, smooth_wall: null,
	chiseled_brick: 'gtceu:chiseled_dark_concrete'
	},
	{
	brick_type: 'red_granite',
	brick: 'gtceu:red_granite_bricks', brick_stairs: null, brick_slab: null, brick_wall: null,
	cracked_brick: 'gtceu:cracked_red_granite_bricks', cracked_stairs: null, cracked_slab: null, cracked_wall: null, 
	mossy_brick: 'gtceu:mossy_red_granite_bricks', mossy_stairs: null, mossy_slab: null, mossy_wall: null,
	smooth_brick: 'gtceu:polished_red_granite', smooth_stairs: null, smooth_slab: null, smooth_wall: null,
	chiseled_brick: 'gtceu:chiseled_red_granite'
	}
])