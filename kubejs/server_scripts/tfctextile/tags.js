// priority: 0
"use strict";

function registerTFCTextileItemTags(event) {

	const DISABLED_ITEMS = [
		'tfc_textile:cotton_string'
	]

	DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

}