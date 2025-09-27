// priority: 0
"use strict";

const registerHotOrNotItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.HOT_OR_NOT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    event.add('tfchotornot:hot_whitelist', '#forge:hot_ingots')

    event.add('firmalife:usable_on_oven', '#tfchotornot:insulating')
}

const registerHotOrNotBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.HOT_OR_NOT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}