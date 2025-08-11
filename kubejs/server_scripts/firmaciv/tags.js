// priority: 0
"use strict";

const registerFirmaCivItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FIRMACIV_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    event.add(`forge:rope`, `firmaciv:rope_coil`)
}

const registerFirmaCivBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FIRMACIV_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
