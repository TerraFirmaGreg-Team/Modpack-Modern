// priority: 0

const hideMinecraftStuff = (event) => {
    minecraftItemsToHide.forEach(itemToHide => {
        event.hide(itemToHide)
    })
}