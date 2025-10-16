// priority: 0
"use strict";

function registerWansAncientBeastsLoots(event) {
	
	event.addEntityLootModifier('wan_ancient_beasts:crusher')
		.addLoot('tfc:medium_raw_hide')
		.addWeightedLoot([2, 4], ['minecraft:bone'])
		.addWeightedLoot([2, 4], ['wan_ancient_beasts:crusher_spike'])
		.addWeightedLoot([4, 7], ['tfg:food/raw_crusher_meat'])

	event.addEntityLootModifier('wan_ancient_beasts:crusher')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfg:food/raw_crusher_meat'])


	event.addEntityLootModifier('wan_ancient_beasts:glider')
		.addLoot('tfc:medium_raw_hide')
		.addWeightedLoot([1, 3], ['minecraft:bone'])
		.addWeightedLoot([2, 4], ['wan_ancient_beasts:glider_feather'])
		.addWeightedLoot([6, 8], ['tfg:food/raw_glider_wings'])

	event.addEntityLootModifier('wan_ancient_beasts:glider')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 4], ['tfg:food/raw_glider_wings'])


	event.addEntityLootModifier('wan_ancient_beasts:soarer')
		.addLoot('tfc:medium_raw_hide')
		.addWeightedLoot([1, 3], ['minecraft:bone'])
		.addWeightedLoot([2, 4], ['minecraft:feather'])
		.addWeightedLoot([2, 4], ['tfg:food/raw_whole_soarer'])

	event.addEntityLootModifier('wan_ancient_beasts:soarer')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfg:food/raw_whole_soarer'])


	event.addEntityLootModifier('wan_ancient_beasts:walker')
		.addWeightedLoot([2, 3], ['tfc:large_raw_hide'])
		.addWeightedLoot([10, 15], ['minecraft:bone'])
		.addWeightedLoot([25, 35], ['tfg:food/raw_walker_steak'])

	event.addEntityLootModifier('wan_ancient_beasts:walker')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([12, 16], ['tfg:food/raw_walker_steak'])


	event.addEntityLootModifier('wan_ancient_beasts:eater')
		.addLoot('tfc:large_raw_hide')
		.addWeightedLoot([6, 8], ['minecraft:bone'])
		.addWeightedLoot([1, 2], ['wan_ancient_beasts:eater_tooth'])
		.addWeightedLoot([10, 14], ['wan_ancient_beasts:raw_ancient_meat'])

	event.addEntityLootModifier('wan_ancient_beasts:eater')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([5, 7], ['wan_ancient_beasts:raw_ancient_meat'])

		
	event.addEntityLootModifier('tfg:surfer')
		.addLoot('tfc:medium_raw_hide')
		.addWeightedLoot([1, 3], ['minecraft:bone'])
		.addWeightedLoot([6, 8], ['tfg:food/raw_surfer_steak'])

	event.addEntityLootModifier('tfg:surfer')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 4], ['tfg:food/raw_surfer_steak'])
}