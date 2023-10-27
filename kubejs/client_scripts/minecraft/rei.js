// priority: 0

const hideMinecraftStuff = (event) => {
    global.itemsToHide.forEach(itemToHide => {
        event.hide(itemToHide)
    })
}