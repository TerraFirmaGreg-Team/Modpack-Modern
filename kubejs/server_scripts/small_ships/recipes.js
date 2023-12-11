// priority: 0

const registerSmallShipsRecipes = (event) => {
    
    // Удаление рецептов ванильных кораблей
    global.SMALL_SHIPS_DISABLED_ITEMS.forEach(item => {
        event.remove({ output: item })
    })

    // Удаление конверсии ванильных кораблей в тфк
    global.SHIP_TYPES.forEach(shipType => {
        global.VANILLA_WOOD_TYPES.forEach(woodType => {
            event.remove({ id: `tfships:${woodType}_${shipType}_conversion` })
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