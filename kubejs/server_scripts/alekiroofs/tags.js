// priority: 0
"use strict";

const registerAlekiroofsItemTags = (event) => {

	global.ALEKIROOFS_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
}