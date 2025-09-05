// priority: 0
"use strict";

function registerWansAncientBeastsLoots(event) {
	
	// Extra animal drop amounts for butchery knives

	event.addEntityLootModifier('wan_ancient_beasts:crusher')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 3], ['tfg:food/raw_crusher_meat'])

	event.addEntityLootModifier('wan_ancient_beasts:glider')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 3], ['tfg:food/raw_glider_wings'])

	event.addEntityLootModifier('wan_ancient_beasts:soarer')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfg:food/raw_whole_soarer'])

	event.addEntityLootModifier('wan_ancient_beasts:walker')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([6, 12], ['tfg:food/raw_walker_steak'])
}