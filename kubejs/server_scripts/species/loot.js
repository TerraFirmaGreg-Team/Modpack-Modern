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
		.addLoot('tfc:large_raw_hide')
		.addWeightedLoot([4, 6], ['minecraft:bone'])
		.addWeightedLoot([12, 20], ['tfg:food/raw_goober_meat'])

	event.addEntityLootModifier('species:goober')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([6, 10], ['tfg:food/raw_goober_meat'])

		
	event.addEntityLootModifier('species:springling')
		.addLoot('tfc:small_raw_hide')
		.addWeightedLoot([2, 4], ['minecraft:bone'])
		.addWeightedLoot([6, 8], ['tfg:food/raw_springling_collar'])

	event.addEntityLootModifier('species:springling')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 5], ['tfg:food/raw_springling_collar'])


	event.addEntityLootModifier('species:cruncher')
		.addLoot('tfc:large_raw_hide')
		.addWeightedLoot([10, 13], ['minecraft:bone'])
		.addWeightedLoot([14, 24], ['tfg:food/raw_cruncher_ribs'])
		.addSequenceLoot(LootEntry.of('species:cruncher_egg').when(c => c.randomChance(0.5)))

	event.addEntityLootModifier('species:cruncher')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([7, 12], ['tfg:food/raw_cruncher_ribs'])


	event.addEntityLootModifier('species:stackatick')
		.addWeightedLoot([5, 8], ['tfg:food/raw_stackatick_chunks'])

	event.addEntityLootModifier('species:stackatick')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfg:food/raw_stackatick_chunks'])


	event.addEntityLootModifier('species:quake')
		.addWeightedLoot([2, 4], ['create:copper_sheet'])
		.addSequenceLoot(LootEntry.of('create:precision_mechanism').when(c => c.randomChance(0.5)))
		.addSequenceLoot(LootEntry.of('species:kinetic_core').when(c => c.randomChance(0.2)))
}