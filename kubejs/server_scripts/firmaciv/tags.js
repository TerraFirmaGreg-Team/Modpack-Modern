// priority: 0

const registerFirmaCivItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FIRMACIV_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerFirmaCivBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FIRMACIV_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
