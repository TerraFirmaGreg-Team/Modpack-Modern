// priority: 0
"use strict";

const registerCraftingStationBlockTags = (event) => {
    event.removeAllTagsFrom('craftingstation:crafting_station')
    event.removeAllTagsFrom('craftingstation:crafting_station_slab')
	event.add('c:hidden_from_recipe_viewers', 'craftingstation:crafting_station')
    event.add('c:hidden_from_recipe_viewers', 'craftingstation:crafting_station_slab')
}