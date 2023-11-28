// priority: 0

const registerSmallShipsRecipes = (event) => {
    
    // Удаление рецептов мода
    global.VANILLA_WOOD_TYPES.forEach(woodTypeName => {
        global.SHIP_TYPES.forEach(shipTypeName => {
            event.remove({ id: `smallships:${woodTypeName}_${shipTypeName}` })
        })
    })
}