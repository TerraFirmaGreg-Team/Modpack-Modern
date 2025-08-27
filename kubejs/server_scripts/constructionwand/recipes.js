// priority: 0
"use strict";

function registerConstructionwandRecipes(event) {
    //remove recipes
    event.remove({ id: 'constructionwand:stone_wand'})
    event.remove({ id: 'constructionwand:iron_wand'})
    event.remove({ id: 'constructionwand:diamond_wand'})
    event.remove({ id: 'constructionwand:infinity_wand'})
    event.remove({ id: 'constructionwand:core_angel'})
    event.remove({ id: 'constructionwand:core_destruction'})

    //new recipes
    event.shaped('1x constructionwand:stone_wand', [
        '  C',
        ' B ',
        'A  '  
    ], {
        A: '#forge:rods/wooden',
        B: '#forge:ingots/copper',
        C: '#forge:chipped_gems'
    }).id('constructionwand:shaped/stone_wand')

    event.shaped('1x constructionwand:iron_wand', [
        '  C',
        ' B ',
        'A  '  
    ], {
        A: '#forge:rods/wooden',
        B: '#forge:ingots/wrought_iron',
        C: '#forge:gems'
    }).id('constructionwand:shaped/iron_wand')

    event.shaped('1x constructionwand:diamond_wand', [
        ' DC',
        ' B ',
        'A  '  
    ], {
        A: '#forge:rods/treated_wood',
        B: '#forge:double_ingots/blue_steel',
        C: '#forge:exquisite_gems',
        D: 'ae2:ender_dust'
    }).id('constructionwand:shaped/diamond_wand')

    event.shaped('1x constructionwand:infinity_wand', [
        ' EB',
        ' C ',
        'A  '
    ], {
        A: '#forge:rods/polytetrafluoroethylene',
        C: '#forge:rods/long/aluminium',
        B: '#forge:double_plates/titanium',
        E: 'ae2:charged_certus_quartz_crystal',
    }).id('constructionwand:shaped/infinity_wand')

    event.shaped('1x constructionwand:core_angel', [
        ' BA',
        'BCB',
        'AB '  
    ], {
        A: 'immersive_aircraft:sail',
        C: '#gtceu:circuits/lv',
        B: '#forge:plates/glass'
    }).id('constructionwand:shaped/core_angel')

    event.shaped('1x constructionwand:core_destruction', [
        ' BA',
        'BCB',
        'DB '  
    ], {
        A: '#forge:pickaxe_heads/steel',
        C: '#gtceu:circuits/lv',
        B: '#forge:plates/glass',
        D: '#forge:hammer_heads/steel'
    }).id('constructionwand:shaped/core_destruction')
}