// priority: 0

const registerMegaCellsItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.MEGA_CELLS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerMegaCellsBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.MEGA_CELLS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}