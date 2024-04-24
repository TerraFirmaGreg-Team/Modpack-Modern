// priority: 0

const registerExpatternproviderItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.EXPATTERNPROVIDER_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)

        event.add('c:hidden_from_recipe_viewers', item)
    })
}