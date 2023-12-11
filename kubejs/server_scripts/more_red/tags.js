// priority: 0

const registerMoreRedItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.MORE_RED_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
