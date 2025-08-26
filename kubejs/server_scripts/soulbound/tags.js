// priority: 0

"use strict";

const registerSoulboundItemTags = (event) => {
	
	const SoulbindableItems = [
		'ad_astra:space_helmet',
		'ad_astra:space_suit',
		'ad_astra:space_pants',
		'ad_astra:space_boots'	
	]
	
	SoulbindableItems.forEach(item => {
		event.add('tfg:soulbindable_items', item)
	})
}
