// priority: 0
"use strict";

function registerPrimitiveCreaturesItemTags(event) {

	// This tag doesn't actually do anything, as the list is hardcoded into the mod,
	// but it makes it easier to find what they will accept
	event.add('primitive_creatures:mercenary_payment', 'minecraft:rabbit_foot')
	event.add('primitive_creatures:mercenary_payment', 'minecraft:leather')
	event.add('primitive_creatures:mercenary_payment', 'minecraft:scute')
	event.add('primitive_creatures:mercenary_payment', 'minecraft:redstone')
	event.add('primitive_creatures:mercenary_payment', 'minecraft:gunpowder')
	event.add('primitive_creatures:mercenary_payment', 'minecraft:spider_eye')
	event.add('primitive_creatures:mercenary_payment', 'minecraft:flint')
	event.add('primitive_creatures:mercenary_payment', 'minecraft:emerald')

	// Flint clubs
	event.add('tfc:usable_on_tool_rack', 'primitive_creatures:yhgi')
	event.add('tfc:usable_on_tool_rack', 'primitive_creatures:reh')
}