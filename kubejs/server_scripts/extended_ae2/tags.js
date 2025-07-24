// priority: 0
"use strict";

const registerExtendedAE2ItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.EXTENDED_AE2_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerExtendedAE2BlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.EXTENDED_AE2_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}