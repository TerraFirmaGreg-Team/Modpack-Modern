// priority: 0

const hideSophisticatedBackpacksStuff = (event) => {
    global.SOPHISTICATED_BACKPACKS_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}