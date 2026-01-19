// priority: 0
"use strict";

function registerBeneathLoots(event) {
	event.addEntityLootModifier('beneath:red_elk')
		.addLoot(LootEntry.of('waterflasks:bladder').when(c => c.randomChance(0.1)))
				
	event.addEntityLootModifier('beneath:red_elk')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfc:food/venison'])
		.addWeightedLoot([1, 2], ['tfc:blubber'])
}