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
		.addWeightedLoot([4, 6], ['minecraft:bone'])
		.addWeightedLoot([12, 20], ['tfg:food/raw_goober_meat'])

	event.addEntityLootModifier('species:goober')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([6, 10], ['tfg:food/raw_goober_meat'])

		
	event.addEntityLootModifier('species:springling')
		.addWeightedLoot([2, 4], ['minecraft:bone'])
		.addWeightedLoot([6, 8], ['tfg:food/raw_springling_chops'])

	event.addEntityLootModifier('species:springling')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 5], ['tfg:food/raw_springling_chops'])


	// TODO: meat
	event.addEntityLootModifier('species:cruncher')
		.addWeightedLoot([10, 13], ['minecraft:bone'])


	event.addEntityLootModifier('species:quake')
		.addWeightedLoot([2, 4], ['create:copper_sheet'])
		.addSequenceLoot(LootEntry.of('create:precision_mechanism').when(c => c.randomChance(0.5)))
		.addSequenceLoot(LootEntry.of('species:kinetic_core').when(c => c.randomChance(0.2)))
}