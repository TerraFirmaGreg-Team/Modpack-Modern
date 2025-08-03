"use strict";

/**
 * 
 * @param {TagEvent.Item} event 
 */
const registerAlekishipsItemTags = (event) => {
    global.ALEKISHIPS_DISABLED_ITEMS.forEach(element => {
        event.removeAllTagsFrom(element);
        event.add("c:hidden_from_recipe_viewers", element)
    });
}