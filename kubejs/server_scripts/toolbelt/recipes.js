// priority: 0

const registerToolBeltRecipes = (event) => {
    
    //удаление рецептов
    event.remove({ mod: 'toolbelt' });

    // toolbelt size:2
    event.shaped('toolbelt:belt', [
        'ABA', 
        'B B',
        'BCB'
    ], {
        A: '#forge:string',
        B: '#forge:leather',
        C: '#forge:plates/steel'
    })

    // pouch
    event.shaped('toolbelt:pouch', [
        'ACA', 
        'B B',
        'ABA'
    ], {
        A: '#forge:string',
        B: '#forge:leather',
        C: '#forge:plates/black_steel'
    })

    //toolbelt size 3-9
    event.shapeless(Item.of('toolbelt:belt', '{Size:3}'), [
        Item.of('toolbelt:belt', '{Size:2}'),
        'toolbelt:pouch'
    ])
    event.shapeless(Item.of('toolbelt:belt', '{Size:4}'), [
        Item.of('toolbelt:belt', '{Size:3}'),
        'toolbelt:pouch'
    ])
    event.shapeless(Item.of('toolbelt:belt', '{Size:5}'), [
        Item.of('toolbelt:belt', '{Size:4}'),
        'toolbelt:pouch'
    ])
    event.shapeless(Item.of('toolbelt:belt', '{Size:6}'), [
        Item.of('toolbelt:belt', '{Size:5}'),
        'toolbelt:pouch'
    ])
    event.shapeless(Item.of('toolbelt:belt', '{Size:7}'), [
        Item.of('toolbelt:belt', '{Size:6}'),
        'toolbelt:pouch'
    ])
    event.shapeless(Item.of('toolbelt:belt', '{Size:8}'), [
        Item.of('toolbelt:belt', '{Size:7}'),
        'toolbelt:pouch'
    ])
    event.shapeless(Item.of('toolbelt:belt', '{Size:9}'), [
        Item.of('toolbelt:belt', '{Size:8}'),
        'toolbelt:pouch'
    ])


}