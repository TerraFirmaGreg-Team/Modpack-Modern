// priority: 0

const hideTFCStuff = (event) => {
    // Hide unused TFC ores
    global.allTFCStoneTypeNames.forEach(stoneTypeName => {
        tfcSimpleMaterials.forEach(material => {
            event.hide(`tfc:ore/${material}/${stoneTypeName}`)
        })

        tfcOreTypes.forEach(oreTypeName => {
            tfcOreMaterials.forEach(oreMaterialName => {
                event.hide(`tfc:ore/${oreTypeName}_${oreMaterialName}/${stoneTypeName}`)
            })
        })

        tfcDepositeMaterials.forEach(depositeMaterialName => {
            event.hide(`tfc:deposit/${depositeMaterialName}/${stoneTypeName}`)
        })
    })
}