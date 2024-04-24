// priority: 0

const registerMEGASellsItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.MEGA_SELLS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)

        event.add('c:hidden_from_recipe_viewers', item)
    })
}