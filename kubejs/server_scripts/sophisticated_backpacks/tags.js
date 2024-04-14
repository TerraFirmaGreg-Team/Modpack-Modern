// priority: 0

const registerSophisticatedBackpacksItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.SOPHISTICATED_BACKPACKS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerSophisticatedBackpacksBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.SOPHISTICATED_BACKPACKS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}