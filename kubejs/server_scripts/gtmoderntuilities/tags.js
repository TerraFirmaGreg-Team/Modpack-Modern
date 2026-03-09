// priority: 0
"use strict";

const registerGTModernUtilitiesItemTags = (event) => {

    // Удаление тегов у отключенных предметов
    global.GTM_UTILITIES_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerGTModernUtilitiesBlockTags = (event) => {

    // Удаление тегов у отключенных предметов
    global.GTM_UTILITIES_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}