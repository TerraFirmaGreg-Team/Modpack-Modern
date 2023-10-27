// priority: 0

const hideGTStuff = (event) => {
    // Hide unused GT ores
    GTRegistries.MATERIALS.forEach(material => {
        global.stoneTypesToHide.forEach(stoneTypeName => {
            event.hide(`#forge:ores/${stoneTypeName}/${material}`)
        })
    })
}

const groupGTStuff = (event) => {
    event.groupItemsByTag('tfg:rei_groups/ores', 'All Ores', 'forge:ores')
}