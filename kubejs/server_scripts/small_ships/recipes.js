// priority: 0

const registerSmallShipsRecipes = (event) => {
    
    // Удаление рецептов ванильных кораблей
    global.VANILLA_WOOD_TYPES.forEach(woodTypeName => {
        global.SHIP_TYPES.forEach(shipTypeName => {
            event.remove({ id: `smallships:${woodTypeName}_${shipTypeName}` })
        })
    })

    // Cannon
    event.remove({ id: 'smallships:cannon' })

    event.shaped('smallships:cannon', [
        '  A', 
        'BBB',
        ' CC'  
    ], {
        A: '#forge:string', 
        B: '#forge:double_plates/wrought_iron',
        C: '#minecraft:logs'   
    }).id('tfships:cannon')

    // Cannon Ball
    event.remove({ id: 'smallships:cannon_ball' })

    event.shaped('4x smallships:cannon_ball', [
        'AB' 
    ], {
        A: '#forge:dusts/gunpowder', 
        B: '#forge:plates/wrought_iron'  
    }).id('tfships:cannon_ball')
}