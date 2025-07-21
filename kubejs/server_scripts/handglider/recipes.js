// priority: 0
"use strict";
const registerHandGliderRecipes = (event) => {
 
    event.remove({id: 'hangglider:glider_framework'})

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

    event.shaped('hangglider:glider_wing', [
        '  C',
        ' BA',
        'BAA'
    ], {
        A: '#forge:cloth', 
        B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.WroughtIron, 1),
        C: '#forge:rings'
    }).id('hangglider:shaped/glider_wing')
}