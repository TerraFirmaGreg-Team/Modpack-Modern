// priority: 0

const hideMinecraftStuff = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

const registerMinecraftCategories = (event) => {
    event.remove('minecraft:plugins/campfire')
}
