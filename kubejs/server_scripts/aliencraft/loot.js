// priority: 0
"use strict";

function registerAliencraftLoots(event) {

	event.addEntityLootModifier('aliencraft_kepler:ancient_beetle')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([6, 8], ['arthropocolypse:ice_crawler_meat'])

	event.addEntityLootModifier('aliencraft_kepler:xenoscorpion_surface')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([6, 8], ['arthropocolypse:ice_crawler_meat'])
}