// priority: 0
"use strict";

function registerDeaFissionItemTags(event) {
	const DISABLED_ITEMS = [
		'deafission:fuelcell_thorium_x1',
		'deafission:fuelcell_plutonium_x1',
		'deafission:fuelcell_uranium_x1',
		'deafission:fuelcell_uranium_x4'
	]

	DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
}