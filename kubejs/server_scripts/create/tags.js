// priority: 0

const registerCreateItemTags = (event) => {

    // Удаление тегов у отключенных предметов
    global.CREATE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
