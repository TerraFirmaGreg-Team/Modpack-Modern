// priority: 0

/**
 * Список хранит предметы, 
 * у которых должны быть удалены тэги и они должны быть скрыты в REI.
 */
global.FIRMALIFE_DISABLED_ITEMS = [
    
    // Chromite
    'firmalife:ore/small_chromite',
    'firmalife:ore/poor_chromite', 
    'firmalife:ore/normal_chromite', 
    'firmalife:ore/rich_chromite', 
    'firmalife:metal/ingot/chromium', 
    'firmalife:metal/double_ingot/chromium', 
    'firmalife:metal/sheet/chromium', 
    'firmalife:metal/double_sheet/chromium', 
    'firmalife:metal/rod/chromium', 

    'firmalife:metal/block/chromium', 
    'firmalife:metal/block/chromium_stairs', 
    'firmalife:metal/block/chromium_slab',

    // Stainless Steel
    'firmalife:metal/ingot/stainless_steel', 
    'firmalife:metal/double_ingot/stainless_steel', 
    'firmalife:metal/sheet/stainless_steel',
    'firmalife:metal/double_sheet/stainless_steel', 
    'firmalife:metal/rod/stainless_steel',
    
    'firmalife:metal/block/stainless_steel', 
    'firmalife:metal/block/stainless_steel_stairs', 
    'firmalife:metal/block/stainless_steel_slab',

    // Other
];

global.FIRMALIFE_ORE_MATERIALS = [
    'chromite'
];

global.FIRMALIFE_GREENHOUSE_FRUIT_RECIPE_COMPONENTS = [
    { input: 'firmalife:plant/cocoa_sapling', fluid_amount: 8000, output: '3x firmalife:food/cocoa_beans', name: 'cocoa_beans' },
    { input: 'firmalife:plant/fig_sapling', fluid_amount: 8000, output: '3x firmalife:food/fig', name: 'fig' },
];

global.FIRMALIFE_GREENHOUSE_BERRY_RECIPE_COMPONENTS = [
    { input: 'firmalife:plant/pineapple_bush', fluid_amount: 6000, output: '3x firmalife:food/pineapple', name: 'pineapple' },
    { input: 'firmalife:plant/nightshade_bush', fluid_amount: 6000, output: '3x firmalife:food/nightshade_berry', name: 'nightshade' },
];

global.FIRMALIFE_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS = [
    { input: 'tfc:food/barley_flour', output: '4x firmalife:food/barley_dough', name: 'firmalife_barley_dough' },
    { input: 'tfc:food/maize_flour', output: '4x firmalife:food/maize_dough', name: 'firmalife_maize_dough' },
    { input: 'tfc:food/oat_flour', output: '4x firmalife:food/oat_dough', name: 'firmalife_oat_dough' },
    { input: 'tfc:food/rye_flour', output: '4x firmalife:food/rye_dough', name: 'firmalife_rye_dough' },
    { input: 'tfc:food/rice_flour', output: '4x firmalife:food/rice_dough', name: 'firmalife_rice_dough' },
    { input: 'tfc:food/wheat_flour', output: '4x firmalife:food/wheat_dough', name: 'firmalife_wheat_dough' },
];

global.FIRMALIFE_FURNACE_FLATBREAD_RECIPE_COMPONENTS = [
    { input: 'tfc:food/barley_dough', output: 'firmalife:food/barley_flatbread', name: 'barley_flatbread' },
    { input: 'tfc:food/maize_dough', output: 'firmalife:food/maize_flatbread', name: 'maize_flatbread' },
    { input: 'tfc:food/oat_dough', output: 'firmalife:food/oat_flatbread', name: 'oat_flatbread' },
    { input: 'tfc:food/rye_dough', output: 'firmalife:food/rye_flatbread', name: 'rye_flatbread' },
    { input: 'tfc:food/rice_dough', output: 'firmalife:food/rice_flatbread', name: 'rice_flatbread' },
    { input: 'tfc:food/wheat_dough', output: 'firmalife:food/wheat_flatbread', name: 'wheat_flatbread' },
];