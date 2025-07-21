// priority: 0
"use strict";

const registerMoreRedItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.MORE_RED_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerMoreRedBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.MORE_RED_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
