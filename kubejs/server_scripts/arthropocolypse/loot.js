// priority: 0
"use strict";

function registerArthropocolypseLoots(event) {

	event.addEntityLootModifier('arthropocolypse:behemoth_desert_scorpion')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([8, 10], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('arthropocolypse:behemoth_desert_spider')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([6, 8], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('arthropocolypse:ice_crawler')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 3], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('arthropocolypse:mealworm_beetle')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 3], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('arthropocolypse:millipede_head')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 5], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('arthropocolypse:platerodrilus')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 4], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('arthropocolypse:soldier_ant')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 3], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('arthropocolypse:worker_ant')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 3], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('arthropocolypse:stag_beetle')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 4], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('arthropocolypse:wharf_roach')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 3], ['arthropocolypse:ice_crawler_meat'])
}