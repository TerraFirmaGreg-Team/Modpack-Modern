// priority: 0

const registerToolBeltRecipes = (event) => {
    
    // Удаление всех рецептов мода
    event.remove({ mod: 'toolbelt' });

    // Мешочек
    event.shaped('toolbelt:pouch', [
        'ACA', 
        'B B',
        'ABA'
    ], {
        A: '#forge:string',
        B: '#forge:leather',
        C: '#forge:plates/wrought_iron'
    }).id('tfg:toolbelt/shaped/pouch')

    // ToolBelt с размером 2
    event.shaped(Item.of('toolbelt:belt', {Size:2}), [
        'ABA', 
        'B B',
        'BCB'
    ], {
        A: '#forge:string',
        B: '#forge:leather',
        C: '#forge:plates/wrought_iron'
    }).id('tfg:toolbelt/shaped/belt_' + 2)

    // ToolBelt с размером 3 - 9
    for (let i = 3; i < 10; i++) {
        event.shapeless(Item.of('toolbelt:belt', {Size:i}), [
            Ingredient.of(Item.of('toolbelt:belt', {Size:i-1}).strongNBT()).or(Ingredient.of(Item.of('toolbelt:belt', {Size:i-1,Items:[]}).strongNBT())),
            'toolbelt:pouch'
        ]).id('tfg:toolbelt/shaped/belt_' + i)
    }
}
