// priority: 0

"use strict";

const registerSoulboundItemTags = (event) => {
	
	global.SOULBINDABLE_ITEMS.forEach(x => {
		event.add('tfg:soulbindable_items', x.equipment)
	})
}
