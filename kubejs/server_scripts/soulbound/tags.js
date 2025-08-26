// priority: 0

"use strict";

const registerSoulboundItemTags = (event) => {
	
	global.SOULBINDABLE_ITEMS.forEach(item => {
		event.add('tfg:soulbindable_items', item)
	})
}
