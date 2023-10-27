// priority: 0

const hideCreateStuff = (event) => {
    // Hide unused GT ores
    GTRegistries.MATERIALS.forEach(material => {
        global.createItemsToHide.forEach(itemName => {
            event.hide(itemName)
        })
    })
}