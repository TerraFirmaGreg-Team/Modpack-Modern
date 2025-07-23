// priority: 0
"use strict";

function registerSpeciesLoots(event) {

	event.addEntityLootModifier('species:birt')
		.addWeightedLoot([2, 4], ['tfg:food/raw_birt'])
		.addWeightedLoot([1, 2], ['gtceu:blue_alloy_single_wire'])

	event.addEntityLootModifier('species:birt')
		.randomChanceWithEnchantment('minecraft:looting', [0, 0.3, 0.6, 1])
		.addWeightedLoot([1, 3], ['tfc:food/raw_birt'])


	event.addEntityLootModifier('species:limpet')
		.addWeightedLoot([5, 8], ['tfg:food/raw_limpet'])

	event.addEntityLootModifier('species:limpet')
		.randomChanceWithEnchantment('minecraft:looting', [0, 0.3, 0.6, 1])
		.addWeightedLoot([2, 4], ['tfc:food/raw_limpet'])

}