// priority: 0

const hideSmallShipsStuff = (event) => {
    global.vanillaWoodTypes.forEach(woodTypeName => {
        global.shipTypes.forEach(shipTypeName => {
            event.hide(`smallships:${woodTypeName}_${shipTypeName}`)
        })
    })
}