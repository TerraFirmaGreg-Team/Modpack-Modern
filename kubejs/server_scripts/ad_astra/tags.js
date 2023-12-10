// priority: 0

const registerAdAstraItemTags = (event) => {

    // Удаление тегов у отключенных предметов
    global.AD_ASTRA_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
