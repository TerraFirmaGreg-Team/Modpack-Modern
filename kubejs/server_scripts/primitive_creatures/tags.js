// priority: 0

function registerPrimitiveCreaturesItemTags(event) {
	const DISABLED_ITEMS = [
		// idol fragment (combine to make a terrible idol)
		'primitive_creatures:tt_5',
		// the terrible idol (spawns illager herobrine)
		'primitive_creatures:kopo',
		// the friendly idol (spawns an allay)
		'primitive_creatures:jjj',
	]

	DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	// This tag doesn't actually do anything, as the list is hardcoded into the mod,
	// but it makes it easier to find what they will accept
	event.add('tfg:mercenary_payment', 'minecraft:rabbit_foot')
	event.add('tfg:mercenary_payment', 'minecraft:leather')
	event.add('tfg:mercenary_payment', 'minecraft:scute')
	event.add('tfg:mercenary_payment', 'minecraft:redstone')
	event.add('tfg:mercenary_payment', 'minecraft:gunpowder')
	event.add('tfg:mercenary_payment', 'minecraft:spider_eye')
	event.add('tfg:mercenary_payment', 'minecraft:flint')
	event.add('tfg:mercenary_payment', 'minecraft:emerald')
}