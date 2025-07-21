// priority: 0
"use strict";

function registerTFCLunchboxItemTags(event) {

	const DISABLED_ITEMS = [
		'tfclunchbox:universal_capsule',
	]

	DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('tfclunchbox:ice', 'tfg:dry_ice')
}