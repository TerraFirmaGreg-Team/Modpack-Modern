// priority: 0
"use strict";

const registerFTBQuestsItemTags = (event) => {

    // Удаление тегов у отключенных предметов
    global.FTB_QUESTS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerFTBQuestsBlockTags = (event) => {

    // Удаление тегов у отключенных предметов
    global.FTB_QUESTS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
