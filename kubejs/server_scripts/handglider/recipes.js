// priority: 0
"use strict";
const registerHandGliderRecipes = (event) => {
 
    event.remove({id: 'hangglider:glider_framework'})

    event.remove({id: 'hangglider:reinforced_hang_glider'})

    // Glider Framework
    event.shaped('hangglider:glider_framework', [
        'AAA',
        'BCB',
        'DCD'
    ], {
        A: ChemicalHelper.get(TagPrefix.rod, GTMaterials.WroughtIron, 1), 
        B: ChemicalHelper.get(TagPrefix.rodLong, GTMaterials.WroughtIron, 1),
        C: '#forge:screws',
        D: '#forge:rings'
    }).id('hangglider:shaped/glider_framework')

    // Glider Wing
    event.shaped('hangglider:glider_wing', [
        '  C',
        ' BA',
        'BAA'
    ], {
        A: '#forge:cloth', 
        B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.WroughtIron, 1),
        C: '#forge:rings'
    }).id('hangglider:shaped/glider_wing')

    //Reinforced Hang Glider Stuff
    event.shaped('hangglider:reinforced_hang_glider', [
        ' A ',
        'ABA',
        ' C '
    ], {
        A: 'sns:reinforced_fabric', 
        B: 'hangglider:hang_glider',
        C: '#forge:rods/long/aluminium'
    }).id('hangglider:shaped/reinforced_hang_glider')

    event.shaped('hangglider:reinforced_hang_glider', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: '#tfg:lightweight_cloth', 
        B: 'hangglider:hang_glider',
        C: '#forge:rods/long/aluminium'
    }).id('hangglider:shaped/reinforced_hang_glider2')

    event.recipes.gtceu.assembler('tfg:hand_glider/reinforced_hang_glider')
        .itemInputs('3x sns:reinforced_fabric', '1x hangglider:hang_glider', '1x #forge:rods/long/aluminium')
        .circuit(3)
        .itemOutputs(Item.of('hangglider:reinforced_hang_glider', "{Damage:0}"))
        .duration(1200)
        .EUt(30)
 
    event.recipes.gtceu.assembler('tfg:hand_glider/reinforced_hang_glider2')
        .itemInputs('1x #tfg:lightweight_cloth', '1x hangglider:hang_glider', '1x #forge:rods/long/aluminium')
        .circuit(3)
        .itemOutputs(Item.of('hangglider:reinforced_hang_glider', "{Damage:0}"))
        .duration(600)
        .EUt(30)
 
    event.recipes.gtceu.assembler('tfg:hang_glider/reinforced_hang_glider_repairing')
        .itemInputs('3x sns:reinforced_fabric', 'hangglider:reinforced_hang_glider')
        .circuit(3)
        .itemOutputs(Item.of('hangglider:reinforced_hang_glider', "{Damage:0}"))
   	   	.duration(800)
        .EUt(30)

    event.recipes.gtceu.assembler('tfg:hang_glider/reinforced_hang_glider_repairing2')
        .itemInputs('1x #tfg:lightweight_cloth', 'hangglider:reinforced_hang_glider')
        .circuit(3)
   	   	.itemOutputs(Item.of('hangglider:reinforced_hang_glider', "{Damage:0}"))
        .duration(400)
        .EUt(30)
}
