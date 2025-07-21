// priority: 0
"use strict";

function registerGrapplemodItemTags(event) {

	global.GRAPPLEMOD_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
}