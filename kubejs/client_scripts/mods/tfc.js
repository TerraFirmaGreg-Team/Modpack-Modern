// priority: 0

const hideTFCStuff = (event) => {
    // Hide unused TFC ores
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        global.TFC_SIMPLE_MATERIALS.forEach(material => {
            event.hide(`tfc:ore/${material}/${stoneTypeName}`)
        })

        global.TFC_ORE_TYPES.forEach(oreTypeName => {
            global.TFC_ORE_MATERIALS.forEach(oreMaterialName => {
                event.hide(`tfc:ore/${oreTypeName}_${oreMaterialName}/${stoneTypeName}`)
            })
        })
    })

    global.TFC_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

const groupTFCStuff = (event) => {
    event.groupItemsByTag('tfg:rei_groups/ingots/double', 'Double Ingots', 'forge:double_ingots')
}