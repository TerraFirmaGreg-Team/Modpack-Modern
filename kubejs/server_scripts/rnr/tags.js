"use strict";

const registerRnrItemTags = (event) => {

	global.RNR_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	});
};