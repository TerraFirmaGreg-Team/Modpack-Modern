"use strict";

global.AFC_DISABLED_ITEMS = [
            // Axles
            'afc:wood/axle/baobab',
            'afc:wood/axle/eucalyptus',
            'afc:wood/axle/mahogany',
            'afc:wood/axle/hevea',
            'afc:wood/axle/tualang',
            'afc:wood/axle/teak',
            'afc:wood/axle/cypress',
            'afc:wood/axle/fig',
            'afc:wood/axle/ironwood',
            'afc:wood/axle/ipe',
        
            // Bladed Axles
            'afc:wood/bladed_axle/baobab',
            'afc:wood/bladed_axle/eucalyptus',
            'afc:wood/bladed_axle/mahogany',
            'afc:wood/bladed_axle/hevea',
            'afc:wood/bladed_axle/tualang',
            'afc:wood/bladed_axle/teak',
            'afc:wood/bladed_axle/cypress',
            'afc:wood/bladed_axle/fig',
            'afc:wood/bladed_axle/ironwood',
            'afc:wood/bladed_axle/ipe',
        
            // Encased Axles
            'afc:wood/encased_axle/baobab',
            'afc:wood/encased_axle/eucalyptus',
            'afc:wood/encased_axle/mahogany',
            'afc:wood/encased_axle/hevea',
            'afc:wood/encased_axle/tualang',
            'afc:wood/encased_axle/teak',
            'afc:wood/encased_axle/cypress',
            'afc:wood/encased_axle/fig',
            'afc:wood/encased_axle/ironwood',
            'afc:wood/encased_axle/ipe',
        
            // Clutches
            'afc:wood/clutch/baobab',
            'afc:wood/clutch/eucalyptus',
            'afc:wood/clutch/mahogany',
            'afc:wood/clutch/hevea',
            'afc:wood/clutch/tualang',
            'afc:wood/clutch/teak',
            'afc:wood/clutch/cypress',
            'afc:wood/clutch/fig',
            'afc:wood/clutch/ironwood',
            'afc:wood/clutch/ipe',
        
            // Gear Boxes
            'afc:wood/gear_box/baobab',
            'afc:wood/gear_box/eucalyptus',
            'afc:wood/gear_box/mahogany',
            'afc:wood/gear_box/hevea',
            'afc:wood/gear_box/tualang',
            'afc:wood/gear_box/teak',
            'afc:wood/gear_box/cypress',
            'afc:wood/gear_box/fig',
            'afc:wood/gear_box/ironwood',
            'afc:wood/gear_box/ipe',
        
            // Water Wheels  
            'afc:wood/water_wheel/baobab', 
            'afc:wood/water_wheel/eucalyptus', 
            'afc:wood/water_wheel/mahogany',
            'afc:wood/water_wheel/hevea', 
            'afc:wood/water_wheel/tualang', 
            'afc:wood/water_wheel/teak', 
            'afc:wood/water_wheel/cypress', 
            'afc:wood/water_wheel/fig', 
            'afc:wood/water_wheel/ironwood', 
            'afc:wood/water_wheel/ipe',
        
            // Boat
            'afc:wood/boat/baobab', 
            'afc:wood/boat/eucalyptus', 
            'afc:wood/boat/mahogany',
            'afc:wood/boat/hevea', 
            'afc:wood/boat/tualang', 
            'afc:wood/boat/teak', 
            'afc:wood/boat/cypress', 
            'afc:wood/boat/fig', 
            'afc:wood/boat/ironwood', 
            'afc:wood/boat/ipe',

            //rubber
            'afc:rubber_bar'
]

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
    'fig',
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