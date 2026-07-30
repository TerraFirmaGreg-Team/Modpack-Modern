// priority: 0
"use strict";

const registerFTBQuestsItemTags = (event) => {
    event.add('c:hidden_from_recipe_viewers', "ftbquests:book")
    event.add('c:hidden_from_recipe_viewers', "ftbfiltersystem:smart_filter")
    event.add('c:hidden_from_recipe_viewers', "ftbquests:custom_icon")
    event.add('c:hidden_from_recipe_viewers', "ftbquests:missing_item")
}