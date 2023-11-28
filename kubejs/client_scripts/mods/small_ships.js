// priority: 0

const hideSmallShipsStuff = (event) => {
    global.VANILLA_WOOD_TYPES.forEach(woodTypeName => {
        global.SHIP_TYPES.forEach(shipTypeName => {
            event.hide(`smallships:${woodTypeName}_${shipTypeName}`)
        })
    })
}