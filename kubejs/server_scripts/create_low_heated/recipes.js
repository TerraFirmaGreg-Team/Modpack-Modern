// priority: 0

const registerCreateLowHeatedRecipes = (e) => {
    
    // Удаление рецептов 
    e.remove({ mod: 'createlowheated' })

    //#region Основной блок
    e.shaped('createlowheated:basic_burner', [
        'A A',
        'BhB',
        'AAA'
    ], {
        A: '#tfg:all_iron_plates',
        B: '#tfg:all_iron_rods',
        h: '#forge:tools/hammers'
    }).id('tfg:shaped/createlowheated/basic_burner')

    e.recipes.gtceu.assembler('tfg:createlowheated/basic_burner')             
        .itemInputs('5x #tfg:all_iron_plates', '2x #tfg:all_iron_rods')
        .circuit(3)
        .itemOutputs('createlowheated:basic_burner')
        .EUt(4).duration(160)
    //#endregion
}