// priority: 0

const hideTFCStuff = (event) => {
    // Hide unused TFC ores
    global.allTFCStoneTypeNames.forEach(stoneTypeName => {
        global.tfcSimpleMaterials.forEach(material => {
            event.hide(`tfc:ore/${material}/${stoneTypeName}`)
        })

        global.tfcOreTypes.forEach(oreTypeName => {
            global.tfcOreMaterials.forEach(oreMaterialName => {
                event.hide(`tfc:ore/${oreTypeName}_${oreMaterialName}/${stoneTypeName}`)
            })
        })

        global.tfcDepositeMaterials.forEach(depositeMaterialName => {
            event.hide(`tfc:deposit/${depositeMaterialName}/${stoneTypeName}`)
        })
    })
}