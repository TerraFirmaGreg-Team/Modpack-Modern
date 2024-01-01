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