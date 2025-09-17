// priority: 0
"use strict";

function registerSpeciesLoots(event) {

	event.addEntityLootModifier('species:birt')
		.addWeightedLoot([2, 4], ['tfg:food/raw_birt'])
		.addWeightedLoot([1, 2], ['gtceu:blue_alloy_single_wire'])

	event.addEntityLootModifier('species:birt')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 3], ['tfg:food/raw_birt'])


	event.addEntityLootModifier('species:limpet')
		.addWeightedLoot([5, 8], ['tfg:food/raw_limpet'])

	event.addEntityLootModifier('species:limpet')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfg:food/raw_limpet'])


	event.addEntityLootModifier('species:goober')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfg:food/raw_goober_meat'])

	event.addEntityLootModifier('species:springling')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 3], ['tfg:food/raw_springling_chops'])
}