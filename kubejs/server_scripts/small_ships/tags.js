// priority: 0

const registerSmallShipsItemTags = (event) => {
    // Удаление тегов у отключенных предметов
    global.SMALL_SHIPS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}