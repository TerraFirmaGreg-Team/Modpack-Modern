// priority: -100
"use strict";

/**
 * @type {WoodStruct[]}
 * An array of WoodStruct that represents the AFC woods
 */
global.AFC_WOOD_STRUCT = ([
	{
        modName: 'afc',
        name: 'baobab',
        logs: '#afc:baobab_logs', log: 'afc:wood/log/baobab', stripped_log: 'afc:wood/stripped_log/baobab',
        log_wood: 'afc:wood/wood/baobab', stripped_wood: "afc:wood/stripped_wood/baobab",
        tree_data: global.woodStructHelpers.treeData(1, ["afc"], ["baobab"], ["baobab"]),
        lumber: 'afc:wood/lumber/baobab', plank: 'afc:wood/planks/baobab',
        stair: 'afc:wood/planks/baobab_stairs', slab: 'afc:wood/planks/baobab_slab',
        fence: 'afc:wood/planks/baobab_fence', fence_gate: 'afc:wood/planks/baobab_fence_gate',
        door: 'afc:wood/planks/baobab_door', trapdoor: 'afc:wood/planks/baobab_trapdoor',
        button: 'afc:wood/planks/baobab_button', pressure_plate: 'afc:wood/planks/baobab_pressure_plate',
        chest: 'afc:wood/chest/baobab', trapped_chest: 'afc:wood/trapped_chest/baobab',
        workbench: 'afc:wood/planks/baobab_workbench', crafting_station: 'tfg:wood/crafting_station/baobab', crafting_station_slab: 'tfg:wood/crafting_station/baobab_slab',
        rope_ladder: 'tfg:wood/rope_ladder/baobab',
        shingle: 'rnr:wood/shingle/baobab', shingle_roof: 'rnr:wood/shingles/baobab', shingle_slab: 'rnr:wood/shingles/baobab_slab', shingle_stair: 'rnr:wood/shingles/baobab_stairs',
        astikor_data: null,//global.woodStructHelpers.astikorData("afcastikorcarts", "baobab"),
        support: 'afc:wood/support/baobab',
        track: 'railways:track_acacia', track_wide: 'railways:track_acacia_wide', track_narrow: 'railways:track_acacia_narrow', //Baobab is meant to represent vanilla acacia, so this track is correct
        window: 'everycomp:c/afc/baobab_window', window_pane: 'everycomp:c/afc/baobab_window_pane',
        macaw_bridges: null, //global.woodStructHelpers.macawBridges("mcw_afc_aio", "baobab"),
        macaw_fences: null,//global.woodStructHelpers.macawFences("mcw_afc_aio", "baobab"),
        macaw_roofs: null, //global.woodStructHelpers.macawRoofs("mcw_afc_aio", "baobab"),
        macaw_furniture: null, //global.woodStructHelpers.macawFurniture("mcw_afc_aio", "baobab"),
        macaw_furniture_stripped: null, //global.woodStructHelpers.macawStrippedFurniture("mcw_afc_aio", "baobab"),
        woodKind: global.WOOD_KIND.HARD,
	}
]);

global.AFC_WOOD_TYPES =
[
    'baobab',
    'eucalyptus',
    'mahogany',
    'hevea',
    'tualang',
    'teak',
    'cypress',
    'fig',
    'ironwood',
    'ipe'
]

global.AFC_SOFTWOOD_TYPES =
[
    'tualang',
    'cypress',
    'fig'
]

global.AFC_HARDWOOD_TYPES =
[
    'baobab',
    'eucalyptus',
    'mahogany',
    'hevea',
    'teak',
    'ironwood',
    'ipe'
]

global.AFC_SAPLINGS = [
	{ sapling: 'baobab', log: 'afc:wood/log/baobab' },
	{ sapling: 'eucalyptus', log: 'afc:wood/log/eucalyptus' },
	{ sapling: 'mahogany', log: 'afc:wood/log/mahogany' },
	{ sapling: 'hevea', log: 'afc:wood/log/hevea' },
	{ sapling: 'tualang', log: 'afc:wood/log/tualang' },
	{ sapling: 'teak', log: 'afc:wood/log/teak' },
	{ sapling: 'cypress', log: 'afc:wood/log/cypress' },
	{ sapling: 'fig', log: 'afc:wood/log/fig' },
	{ sapling: 'ironwood', log: 'afc:wood/log/ironwood' },
	{ sapling: 'ipe', log: 'afc:wood/log/ipe' },
	{ sapling: 'gum_arabic', log: 'afc:wood/log/gum_arabic' },
	{ sapling: 'acacia_koa', log: 'tfc:wood/log/acacia' },
	{ sapling: 'poplar', log: 'afc:wood/log/poplar' },
	{ sapling: 'mpingo_blackwood', log: 'tfc:wood/log/blackwood' },
	{ sapling: 'mountain_fir', log: 'tfc:wood/log/douglas_fir' },
	{ sapling: 'balsam_fir', log: 'tfc:wood/log/douglas_fir' },
	{ sapling: 'scrub_hickory', log: 'tfc:wood/log/hickory' },
	{ sapling: 'red_silk_cotton', log: 'tfc:wood/log/kapok' },
	{ sapling: 'bigleaf_maple', log: 'tfc:wood/log/maple' },
	{ sapling: 'weeping_maple', log: 'tfc:wood/log/maple' },
	{ sapling: 'black_oak', log: 'afc:wood/log/black_oak' },
	{ sapling: 'live_oak', log: 'tfc:wood/log/oak' },
	{ sapling: 'jaggery_palm', log: 'tfc:wood/log/palm' },
	{ sapling: 'stone_pine', log: 'tfc:wood/log/pine' },
	{ sapling: 'red_pine', log: 'tfc:wood/log/pine' },
	{ sapling: 'tamarack', log: 'tfc:wood/log/pine' },
	{ sapling: 'giant_rosewood', log: 'tfc:wood/log/rosewood' },
	{ sapling: 'coast_redwood', log: 'tfc:wood/log/sequoia' },
	{ sapling: 'coast_spruce', log: 'tfc:wood/log/spruce' },
	{ sapling: 'sitka_spruce', log: 'tfc:wood/log/spruce' },
	{ sapling: 'black_spruce', log: 'tfc:wood/log/spruce' },
	{ sapling: 'atlas_cedar', log: 'tfc:wood/log/white_cedar' },
	{ sapling: 'weeping_willow', log: 'tfc:wood/log/willow' },
	{ sapling: 'rainbow_eucalyptus', log: 'afc:wood/log/rainbow_eucalyptus' },
	{ sapling: 'mountain_ash', log: 'tfc:wood/log/ash' },
	{ sapling: 'rubber_fig', log: 'afc:wood/log/rubber_fig' },
	{ sapling: 'redcedar', log: 'afc:wood/log/redcedar' },
	{ sapling: 'weeping_cypress', log: 'afc:wood/log/cypress' },
	{ sapling: 'bald_cypress', log: 'afc:wood/log/cypress' },
	{ sapling: 'sapele_mahogany', log: 'afc:wood/log/mahogany' },
	{ sapling: 'small_leaf_mahogany', log: 'afc:wood/log/mahogany' },
	{ sapling: 'iroko_teak', log: 'afc:wood/log/teak' },
	{ sapling: 'flame_of_the_forest', log: 'afc:wood/log/teak' },
	{ sapling: 'lebombo_ironwood', log: 'afc:wood/log/ironwood' },
	{ sapling: 'horsetail_ironwood', log: 'afc:wood/log/ironwood' }
];