// priority: 0

const registerSophisticatedBackpacksItemTags = (event) => {
    // Удаление тегов у отключенных предметов
    global.SOPHISTICATED_BACKPACKS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}