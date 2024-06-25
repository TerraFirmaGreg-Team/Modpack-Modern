// priority: 0

const registerSewingkitItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.SEWING_KIT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerSewingkitBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.SEWING_KIT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}