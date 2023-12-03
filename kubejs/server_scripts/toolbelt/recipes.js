// priority: 0

const registerToolBeltRecipes = (event) => {
    
    // Удаление всех рецептов мода
    event.remove({ mod: 'toolbelt' });

    // ToolBelt с размером 2
    event.shaped('toolbelt:belt', [
        'ABA', 
        'B B',
        'BCB'
    ], {
        A: '#forge:string',
        B: '#forge:leather',
        C: '#forge:plates/wrought_iron'
    })

    // Мешочек
    event.shaped('toolbelt:pouch', [
        'ACA', 
        'B B',
        'ABA'
    ], {
        A: '#forge:string',
        B: '#forge:leather',
        C: '#forge:plates/steel'
    })

    // ToolBelt с размером 3
    event.shapeless(Item.of('toolbelt:belt', {Size:3}).strongNBT(), [
        Item.of('toolbelt:belt', {}).strongNBT(),
        'toolbelt:pouch'
    ])

    // ToolBelt с размером 4
    event.shapeless(Item.of('toolbelt:belt', {Size:4}).strongNBT(), [
        Item.of('toolbelt:belt', {Size:3}).strongNBT(),
        'toolbelt:pouch'
    ])

    // ToolBelt с размером 5
    event.shapeless(Item.of('toolbelt:belt', {Size:5}).strongNBT(), [
        Item.of('toolbelt:belt', {Size:4}).strongNBT(),
        'toolbelt:pouch'
    ])

    // ToolBelt с размером 6
    event.shapeless(Item.of('toolbelt:belt', {Size:6}).strongNBT(), [
        Item.of('toolbelt:belt', {Size:5}).strongNBT(),
        'toolbelt:pouch'
    ])

    // ToolBelt с размером 7
    event.shapeless(Item.of('toolbelt:belt', {Size:7}).strongNBT(), [
        Item.of('toolbelt:belt', {Size:6}).strongNBT(),
        'toolbelt:pouch'
    ])

    // ToolBelt с размером 8
    event.shapeless(Item.of('toolbelt:belt', {Size:8}).strongNBT(), [
        Item.of('toolbelt:belt', {Size:7}).strongNBT(),
        'toolbelt:pouch'
    ])

    // ToolBelt с размером 9
    event.shapeless(Item.of('toolbelt:belt', {Size:9}).strongNBT(), [
        Item.of('toolbelt:belt', {Size:8}).strongNBT(),
        'toolbelt:pouch'
    ])
}
