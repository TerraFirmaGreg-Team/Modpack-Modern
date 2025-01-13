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
    'firmalife:compost_tumbler'
];

global.FIRMALIFE_HIDED_ITEMS = [
    'firmalife:weathered_copper_greenhouse_wall', 
    'firmalife:weathered_copper_greenhouse_panel_wall', 
    'firmalife:weathered_copper_greenhouse_panel_roof', 
    'firmalife:weathered_copper_greenhouse_roof', 
    'firmalife:weathered_copper_greenhouse_roof_top', 
    'firmalife:weathered_copper_greenhouse_trapdoor', 
    'firmalife:weathered_copper_greenhouse_door', 
    'firmalife:weathered_copper_greenhouse_port', 

    'firmalife:stainless_steel_greenhouse_wall', 
    'firmalife:stainless_steel_greenhouse_panel_wall', 
    'firmalife:stainless_steel_greenhouse_panel_roof', 
    'firmalife:stainless_steel_greenhouse_roof', 
    'firmalife:stainless_steel_greenhouse_roof_top', 
    'firmalife:stainless_steel_greenhouse_trapdoor', 
    'firmalife:stainless_steel_greenhouse_door', 
    'firmalife:stainless_steel_greenhouse_port', 

    'firmalife:rusted_iron_greenhouse_wall', 
    'firmalife:rusted_iron_greenhouse_panel_wall', 
    'firmalife:rusted_iron_greenhouse_panel_roof', 
    'firmalife:rusted_iron_greenhouse_roof',
    'firmalife:rusted_iron_greenhouse_roof_top', 
    'firmalife:rusted_iron_greenhouse_trapdoor', 
    'firmalife:rusted_iron_greenhouse_door', 
    'firmalife:rusted_iron_greenhouse_port', 

    'firmalife:oxidized_copper_greenhouse_wall', 
    'firmalife:oxidized_copper_greenhouse_panel_wall', 
    'firmalife:oxidized_copper_greenhouse_panel_roof', 
    'firmalife:oxidized_copper_greenhouse_roof', 
    'firmalife:oxidized_copper_greenhouse_roof_top', 
    'firmalife:oxidized_copper_greenhouse_trapdoor', 
    'firmalife:oxidized_copper_greenhouse_door', 
    'firmalife:oxidized_copper_greenhouse_port',

    'firmalife:exposed_copper_greenhouse_wall', 
    'firmalife:exposed_copper_greenhouse_panel_wall', 
    'firmalife:exposed_copper_greenhouse_panel_roof', 
    'firmalife:exposed_copper_greenhouse_roof', 
    'firmalife:exposed_copper_greenhouse_roof_top',
    'firmalife:exposed_copper_greenhouse_trapdoor', 
    'firmalife:exposed_copper_greenhouse_door', 
    'firmalife:exposed_copper_greenhouse_port',

    'firmalife:weathered_treated_wood_greenhouse_wall', 
    'firmalife:weathered_treated_wood_greenhouse_panel_wall', 
    'firmalife:weathered_treated_wood_greenhouse_panel_roof', 
    'firmalife:weathered_treated_wood_greenhouse_roof', 
    'firmalife:weathered_treated_wood_greenhouse_roof_top', 
    'firmalife:weathered_treated_wood_greenhouse_trapdoor', 
    'firmalife:weathered_treated_wood_greenhouse_door', 
    'firmalife:weathered_treated_wood_greenhouse_port'
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

global.FIRMALIFE_QUERN_FLOUR_RECIPE_COMPONENTS = [
    { input: 'firmalife:food/nixtamal', output: '2x firmalife:food/masa_flour', name: 'masa_flour' },
];

global.FIRMALIFE_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS = [
    { input: 'tfc:food/barley_flour', output: '4x firmalife:food/barley_dough', name: 'firmalife_barley_dough' },
    { input: 'tfc:food/maize_flour', output: '4x firmalife:food/maize_dough', name: 'firmalife_maize_dough' },
    { input: 'tfc:food/oat_flour', output: '4x firmalife:food/oat_dough', name: 'firmalife_oat_dough' },
    { input: 'tfc:food/rye_flour', output: '4x firmalife:food/rye_dough', name: 'firmalife_rye_dough' },
    { input: 'tfc:food/rice_flour', output: '4x firmalife:food/rice_dough', name: 'firmalife_rice_dough' },
    { input: 'tfc:food/wheat_flour', output: '4x firmalife:food/wheat_dough', name: 'firmalife_wheat_dough' },
    { input: 'firmalife:food/masa_flour', output: '2x firmalife:food/masa', name: 'firmalife_masa' },
];

global.FIRMALIFE_FURNACE_FLATBREAD_RECIPE_COMPONENTS = [
    { input: 'tfc:food/barley_dough', output: 'firmalife:food/barley_flatbread', name: 'barley_flatbread' },
    { input: 'tfc:food/maize_dough', output: 'firmalife:food/maize_flatbread', name: 'maize_flatbread' },
    { input: 'tfc:food/oat_dough', output: 'firmalife:food/oat_flatbread', name: 'oat_flatbread' },
    { input: 'tfc:food/rye_dough', output: 'firmalife:food/rye_flatbread', name: 'rye_flatbread' },
    { input: 'tfc:food/rice_dough', output: 'firmalife:food/rice_flatbread', name: 'rice_flatbread' },
    { input: 'tfc:food/wheat_dough', output: 'firmalife:food/wheat_flatbread', name: 'wheat_flatbread' },
    { input: 'firmalife:food/masa', output: 'firmalife:food/corn_tortilla', name: 'corn_tortilla' },
];
