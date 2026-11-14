// priority: 0
"use strict";

function registerOpposingForceLoots(event) {

	event.addEntityLootModifier('opposing_force:hanging_spider')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 3], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('opposing_force:ladybug')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 3], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('opposing_force:umber_spider')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 3], ['arthropocolypse:ice_crawler_meat'])
}