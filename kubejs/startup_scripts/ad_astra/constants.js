// priority: -100
"use strict";

global.AD_ASTRA_DISABLED_ITEMS = 
[
	// Even with reliable remover, this item still shows up in tags?
	'ad_astra:steel_plate',

	// Disabled until IV planets

	'ad_astra:tier_3_rocket',
	'ad_astra:ostrum_engine',
	'ad_astra:ostrum_tank',
	'tfg:rocket_fin_t3',
	'tfg:rocket_cone_t3',
	'tfg:elite_power_thruster',	

	// Disabled until LuV planet
	
	'ad_astra:tier_4_rocket',
	'ad_astra:calorite_engine',
	'ad_astra:calorite_tank',

    // quest reward
    'ad_astra:cheese_block'
];

global.AD_ASTRA_DISABLED_FLUIDS =
[
	'ad_astra:hydrogen',
	'ad_astra:oil',
	'ad_astra:fuel',
	'ad_astra:cryo_fuel',

	'gtceu:molten_desh',
	'gtceu:molten_ostrum',
	'gtceu:molten_calorite'
];

global.BREATHABLE_COMPRESSED_AIRS =
[
	'tfg:compressed_nitrox',
	'tfg:compressed_heliox',
	'tfg:compressed_heliox_3',
	'tfg:compressed_trimix',
	'tfg:compressed_trimix_3'
];

/**
 * @type {WoodStruct[]}
 */
global.AD_ASTRA_WOOD_STRUCT = ([
	{
		tfgCore: true,
		modName: 'ad_astra',
		name: "aeronos",
		logsTag: '#ad_astra:aeronos_caps',
		tree_data: global.woodStructHelpers.treeData2(1,
			["ad_astra"],
			["aeronos"],
			[global.woodStructHelpers.logDataFormat("ad_astra", ["{0}_stem", null, null, null], "aeronos", global.woodStructHelpers.tfcFuelData(800, 1500, null),  1)], //Once the core mod adds the other blocks, this will need to be updated to include them
			[global.woodStructHelpers.resLocFormat("ad_astra", "{0}_cap", "aeronos")],
			[null],
			[global.woodStructHelpers.resLocFormat("tfg", "saplings/{0}", "aeronos")],
			global.woodStructHelpers.arrayAll(global.woodStructHelpers.resLocFormat("tfg", "twigs/{0}", "aeronos"), 1),
			global.woodStructHelpers.arrayAll(null, 1),
			global.woodStructHelpers.arrayAll("ad_astra:mars", 1)),
		lumber: 'tfg:wood/lumber/aeronos', plank: 'ad_astra:aeronos_planks',
		stair: 'ad_astra:aeronos_stairs', slab: 'ad_astra:aeronos_slab',
		fence: 'ad_astra:aeronos_fence', fence_gate: 'ad_astra:aeronos_fence_gate', log_fence: "tfg:wood/log_fence/aeronos",
		door: 'ad_astra:aeronos_door', trapdoor: 'ad_astra:aeronos_trapdoor',
		button: null, pressure_plate: null, //FIXME: Core doesnt generate buttons or pressure plates
		chest: 'tfg:wood/chest/aeronos', trapped_chest: 'tfg:wood/trapped_chest/aeronos', chest_minecart: null,
		sign: 'tfg:wood/sign/aeronos', hanging_sign: 'tfg:wood/hanging_sign/aeronos',
		workbench: 'tfg:wood/workbench/aeronos', crafting_station: 'tfg:wood/crafting_station/aeronos', crafting_station_slab: 'tfg:wood/crafting_station/aeronos_slab', loom: 'tfg:wood/loom/aeronos', sewing_table: 'tfg:wood/sewing_table/aeronos', scribing_table: 'tfg:wood/scribing_table/aeronos', 
		big_barrel: 'tfg:wood/big_barrel/aeronos', stomping_barrel: 'tfg:wood/stomping_barrel/aeronos', barrel: 'tfg:wood/barrel/aeronos', barrel_press: 'tfg:wood/barrel_press/aeronos',
		sluice: 'tfg:wood/sluice/aeronos', tool_rack: 'tfg:wood/tool_rack/aeronos', lectern: 'tfg:wood/lectern/aeronos',
		jar_shelf: 'tfg:wood/jar_shelf/aeronos', food_shelf: 'tfg:wood/food_shelf/aeronos', bookshelf: 'tfg:wood/bookshelf/aeronos', jarbnet: 'tfg:wood/jarbnet/aeronos', wine_shelf: 'tfg:wood/wine_shelf/aeronos',
		support: 'tfg:aeronos_support',
		window: 'everycomp:c/ad_astra/aeronos_window', window_pane: 'everycomp:c/ad_astra/aeronos_window_pane',
		roof: 'tfg:wood/aeronos_roofing',
		hanger: 'tfg:wood/hanger/aeronos',
		rope_ladder: 'tfg:wood/rope_ladder/aeronos',
        rnr_data: null,
        astikor_data: null,
        railways_data: null,
        macaw_data: null,
		tfg_data: null,
        woodKind: global.WOOD_KIND.NONE,
	},
	{
		tfgCore: true,
		modName: 'ad_astra',
		name: "strophar",
		logsTag: '#ad_astra:strophar_caps',
		tree_data: global.woodStructHelpers.treeData2(1,
			["ad_astra"],
			["strophar"],
			[global.woodStructHelpers.logDataFormat("ad_astra", ["{0}_stem", null, null, null], "strophar", global.woodStructHelpers.tfcFuelData(800, 1500, null), 1)], //Once the core mod adds the other blocks, this will need to be updated to include them
			[global.woodStructHelpers.resLocFormat("ad_astra", "{0}_cap", "strophar")],
			[null],
			[global.woodStructHelpers.resLocFormat("tfg", "saplings/{0}", "strophar")],
			global.woodStructHelpers.arrayAll(global.woodStructHelpers.resLocFormat("tfg", "twigs/{0}", "strophar"), 1),
			global.woodStructHelpers.arrayAll(null, 1),
			global.woodStructHelpers.arrayAll("ad_astra:mars", 1)),
		lumber: 'tfg:wood/lumber/strophar', plank: 'ad_astra:strophar_planks',
		stair: 'ad_astra:strophar_stairs', slab: 'ad_astra:strophar_slab',
		fence: 'ad_astra:strophar_fence', fence_gate: 'ad_astra:strophar_fence_gate', log_fence: "tfg:wood/log_fence/strophar",
		door: 'ad_astra:strophar_door', trapdoor: 'ad_astra:strophar_trapdoor',
		button: null, pressure_plate: null, //FIXME: Core doesnt generate buttons or pressure plates
		chest: 'tfg:wood/chest/strophar', trapped_chest: 'tfg:wood/trapped_chest/strophar', chest_minecart: null,
		sign: 'tfg:wood/sign/strophar', hanging_sign: 'tfg:wood/hanging_sign/strophar',
		workbench: 'tfg:wood/workbench/strophar', crafting_station: 'tfg:wood/crafting_station/strophar', crafting_station_slab: 'tfg:wood/crafting_station/strophar_slab', loom: 'tfg:wood/loom/strophar', sewing_table: 'tfg:wood/sewing_table/strophar', scribing_table: 'tfg:wood/scribing_table/strophar',
		big_barrel: 'tfg:wood/big_barrel/strophar', stomping_barrel: 'tfg:wood/stomping_barrel/strophar', barrel: 'tfg:wood/barrel/strophar', barrel_press: 'tfg:wood/barrel_press/strophar',
		sluice: 'tfg:wood/sluice/strophar', tool_rack: 'tfg:wood/tool_rack/strophar', lectern: 'tfg:wood/lectern/strophar',
		jar_shelf: 'tfg:wood/jar_shelf/strophar', food_shelf: 'tfg:wood/food_shelf/strophar', bookshelf: 'tfg:wood/bookshelf/strophar', jarbnet: 'tfg:wood/jarbnet/strophar', wine_shelf: 'tfg:wood/wine_shelf/strophar',
		support: 'tfg:strophar_support',
		window: 'everycomp:c/ad_astra/strophar_window', window_pane: 'everycomp:c/ad_astra/strophar_window_pane',
		roof: 'tfg:wood/strophar_roofing',
		hanger: 'tfg:wood/hanger/strophar',
		rope_ladder: 'tfg:wood/rope_ladder/strophar',
		rnr_data: null,
		astikor_data: null,
		railways_data: null,
		macaw_data: null,
		tfg_data: null,
		woodKind: global.WOOD_KIND.NONE,
	},
	{
		tfgCore: true,
		modName: 'ad_astra',
		name: "glacian",
		logsTag: '#ad_astra:glacian_logs',
		tree_data: global.woodStructHelpers.treeData2(1,
			["ad_astra"],
			["glacian"],
			[global.woodStructHelpers.logDataNamespaceFormat(["ad_astra:{0}_log", "ad_astra:stripped_{0}_log", "tfg:{0}_wood", "tfg:{0}_wood_stripped"], "glacian", global.woodStructHelpers.tfcFuelData(800, 1500, null), 1)],
			['species:alphacene_moss_block'],
			[null],
			[global.woodStructHelpers.resLocFormat("tfg", "saplings/{0}", "glacian")],
			global.woodStructHelpers.arrayAll(global.woodStructHelpers.resLocFormat("tfg", "twigs/{0}", "glacian"), 1),
			global.woodStructHelpers.arrayAll(null, 1),
			global.woodStructHelpers.arrayAll("ad_astra:mars", 1)),
		lumber: 'tfg:wood/lumber/glacian', plank: 'ad_astra:glacian_planks',
		stair: 'ad_astra:glacian_stairs', slab: 'ad_astra:glacian_slab',
		fence: 'ad_astra:glacian_fence', fence_gate: 'ad_astra:glacian_fence_gate', log_fence: "tfg:wood/log_fence/glacian",
		door: 'ad_astra:glacian_door', trapdoor: 'ad_astra:glacian_trapdoor',
		button: 'ad_astra:glacian_button', pressure_plate: 'ad_astra:glacian_pressure_plate',
		chest: 'tfg:wood/chest/glacian', trapped_chest: 'tfg:wood/trapped_chest/glacian', chest_minecart: null,
		sign: 'tfg:wood/sign/glacian', hanging_sign: 'tfg:wood/hanging_sign/glacian',
		workbench: 'tfg:wood/workbench/glacian', crafting_station: 'tfg:wood/crafting_station/glacian', crafting_station_slab: 'tfg:wood/crafting_station/glacian_slab', loom: 'tfg:wood/loom/glacian', sewing_table: 'tfg:wood/sewing_table/glacian', scribing_table: 'tfg:wood/scribing_table/glacian',
		big_barrel: 'tfg:wood/big_barrel/glacian', stomping_barrel: 'tfg:wood/stomping_barrel/glacian', barrel: 'tfg:wood/barrel/glacian', barrel_press: 'tfg:wood/barrel_press/glacian',
		sluice: 'tfg:wood/sluice/glacian', tool_rack: 'tfg:wood/tool_rack/glacian', lectern: 'tfg:wood/lectern/glacian',
		jar_shelf: 'tfg:wood/jar_shelf/glacian', food_shelf: 'tfg:wood/food_shelf/glacian', bookshelf: 'tfg:wood/bookshelf/glacian', jarbnet: 'tfg:wood/jarbnet/glacian', wine_shelf: 'tfg:wood/wine_shelf/glacian',
		support: 'tfg:glacian_support',
		window: 'everycomp:c/ad_astra/glacian_window', window_pane: 'everycomp:c/ad_astra/glacian_window_pane',
		roof: 'tfg:wood/glacian_roofing',
		hanger: 'tfg:wood/hanger/glacian',
		rope_ladder: 'tfg:wood/rope_ladder/glacian',
		rnr_data: null,
		astikor_data: null,
		railways_data: null,
		macaw_data: null,
		tfg_data: null,
		woodKind: global.WOOD_KIND.HARD,
	},
]);