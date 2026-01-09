// priority: 0

"use strict";

const registerSoulboundItemTags = (event) => {
	
	global.SOULBINDABLE_ITEMS.forEach(x => {
		event.add('tfg:soulbindable_items', x.equipment)
	})

	event.add('c:hidden_from_recipe_viewers', 'soulbinding:binding_chains')
}
