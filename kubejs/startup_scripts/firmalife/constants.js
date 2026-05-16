// priority: -100
"use strict";

global.FIRMALIFE_HIDED_ITEMS = [
    'firmalife:weathered_copper_greenhouse_wall', 
    'firmalife:weathered_copper_greenhouse_panel_wall', 
    'firmalife:weathered_copper_greenhouse_panel_roof', 
    'firmalife:weathered_copper_greenhouse_roof', 
    'firmalife:weathered_copper_greenhouse_roof_top', 
    'firmalife:weathered_copper_greenhouse_trapdoor', 
    'firmalife:weathered_copper_greenhouse_door', 
    'firmalife:weathered_copper_greenhouse_port', 

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

global.FIRMALIFE_JAMS = [
    "fig",
    "pineapple",
    "red_grapes",
    "white_grapes"
]

global.FIRMALIFE_GREENHOUSE_FRUIT_RECIPE_COMPONENTS = [
    { input: 'firmalife:plant/cocoa_sapling', output: 'firmalife:food/cocoa_beans', leaves: 'firmalife:plant/cocoa_leaves' },
    { input: 'firmalife:plant/fig_sapling', output: 'firmalife:food/fig', leaves: 'firmalife:plant/fig_leaves' },
    { input: 'firmalife:plant/pineapple_bush', output: 'firmalife:food/pineapple'},
    { input: 'firmalife:plant/nightshade_bush', output: 'firmalife:food/nightshade_berry'},
    { input: 'firmalife:seeds/red_grape', output: 'firmalife:food/red_grapes'},
    { input: 'firmalife:seeds/white_grape', output: 'firmalife:food/white_grapes'}
];

global.FIRMALIFE_COOKING_RECIPE_COMPONENTS = [
    { input: 'firmalife:food/white_chocolate_blend', output: 'firmalife:food/white_chocolate', name: 'white_chocolate' },
    { input: 'firmalife:food/dark_chocolate_blend', output: 'firmalife:food/dark_chocolate', name: 'dark_chocolate' },
    { input: 'firmalife:food/milk_chocolate_blend', output: 'firmalife:food/milk_chocolate', name: 'milk_chocolate' },
    { input: 'firmalife:food/raw_pizza', output: 'firmalife:food/cooked_pizza', name: 'cooked_pizza' },
    { input: 'firmalife:food/corn_tortilla', output: 'firmalife:food/taco_shell', name: 'taco_shell' },
    { input: 'firmalife:food/cookie_dough', output: 'firmalife:food/sugar_cookie', name: 'sugar_cookie' },
    { input: 'firmalife:food/chocolate_chip_cookie_dough', output: 'firmalife:food/chocolate_chip_cookie', name: 'chocolate_chip_cookie' },
    { input: 'firmalife:food/hardtack_dough', output: 'firmalife:food/hardtack', name: 'hardtack' },
    { input: 'firmalife:food/filled_pie', output: 'firmalife:food/cooked_pie', name: 'cooked_pie' },
    { input: 'firmalife:food/cocoa_beans', output: 'firmalife:food/roasted_cocoa_beans', name: 'roasted_cocoa_beans' },
    { input: 'firmalife:food/raw_pumpkin_pie', output: 'minecraft:pumpkin_pie', name: 'pumpkin_pie' },
    { input: 'firmalife:food/raw_lasagna', output: 'firmalife:food/cooked_lasagna', name: 'cooked_lasagna' },
    { input: 'firmalife:food/bacon', output: 'firmalife:food/cooked_bacon', name: 'cooked_bacon' },
    { input: '#firmalife:foods/slices', output: 'firmalife:food/toast', name: 'toast' }
];