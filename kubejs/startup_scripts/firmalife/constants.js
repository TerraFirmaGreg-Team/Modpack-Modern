// priority: -100
"use strict";

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

// Do not add dynamic food items here.
global.FIRMALIFE_FOOD_COOKING = [
    { input: 'firmalife:food/masa', output: 'firmalife:food/corn_tortilla'},
    { input: 'firmalife:food/corn_tortilla', output: 'firmalife:food/taco_shell'},
    { input: 'firmalife:food/cookie_dough', output: 'firmalife:food/sugar_cookie'},
    { input: 'firmalife:food/chocolate_chip_cookie_dough', output: 'firmalife:food/chocolate_chip_cookie'},
    { input: 'firmalife:food/hardtack_dough', output: 'firmalife:food/hardtack'},
    { input: 'firmalife:food/cocoa_beans', output: 'firmalife:food/roasted_cocoa_beans'},
    { input: 'firmalife:food/raw_lasagna', output: 'firmalife:food/cooked_lasagna'},
    { input: 'firmalife:food/bacon', output: 'firmalife:food/cooked_bacon'},
    { input: '#firmalife:foods/slices', output: 'firmalife:food/toast'}
];