// priority: 0

const registerCreateConnectedItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.CREATE_CONNECTED_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)

        event.add('c:hidden_from_recipe_viewers', item)
    })
}