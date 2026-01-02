"use strict";

/**
 * 
 * @param {TagEvent.Item} event 
 */
const registerArthropocolypseItemTags = (event) => {
    global.ARTHROPOCOLYPSE_DISABLED_ITEMS.forEach(element => {
        event.removeAllTagsFrom(element);
        event.add("c:hidden_from_recipe_viewers", element)
    });

    event.add('tfc:any_knapping', 'arthropocolypse:mandible_part');
}