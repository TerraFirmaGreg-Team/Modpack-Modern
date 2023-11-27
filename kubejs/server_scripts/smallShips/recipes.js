// priority: 0

const registerSmallShipsRecipes = (event) => {
    
    // Удаление рецептов мода
    global.vanillaWoodTypes.forEach(woodTypeName => {
        global.shipTypes.forEach(shipTypeName => {
            event.remove({ id: `smallships:${woodTypeName}_${shipTypeName}` })
        })
    })
}