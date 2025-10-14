// priority: 0
"use strict";

function registerTFCLoots(event) {
	// Hostile animals

	event.addEntityLootModifier('tfc:black_bear')
		.addWeightedLoot([8, 12], ['tfc:food/bear'])
	event.addEntityLootModifier('tfc:black_bear')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([4, 6], ['tfc:food/bear'])


	event.addEntityLootModifier('tfc:grizzly_bear')
		.addWeightedLoot([10, 16], ['tfc:food/bear'])

	event.addEntityLootModifier('tfc:grizzly_bear')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([5, 8], ['tfc:food/bear'])


	event.addEntityLootModifier('tfc:polar_bear')
		.addWeightedLoot([14, 20], ['tfc:food/bear'])
		.addWeightedLoot([2, 5], ['tfc:blubber'])

	event.addEntityLootModifier('tfc:polar_bear')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([7, 10], ['tfc:food/bear'])


	event.addEntityLootModifier('tfc:cougar')
		.addWeightedLoot([6, 10], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:cougar')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 5], ['tfc:food/gran_feline'])


	event.addEntityLootModifier('tfc:panther')
		.addWeightedLoot([6, 10], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:panther')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 5], ['tfc:food/gran_feline'])


	event.addEntityLootModifier('tfc:sabertooth')
		.addWeightedLoot([9, 14], ['tfc:food/gran_feline'])

		event.addEntityLootModifier('tfc:sabertooth')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([4, 7], ['tfc:food/gran_feline'])


	event.addEntityLootModifier('tfc:lion')
		.addWeightedLoot([9, 14], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:lion')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([4, 7], ['tfc:food/gran_feline'])


	event.addEntityLootModifier('tfc:tiger')
		.addWeightedLoot([9, 14], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:tiger')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([4, 7], ['tfc:food/gran_feline'])


	event.addEntityLootModifier('tfc:ocelot')
		.addWeightedLoot([2, 5], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:ocelot')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfc:food/gran_feline'])


	event.addEntityLootModifier('tfc:cat')
		.addWeightedLoot([2, 5], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:cat')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfc:food/gran_feline'])


	event.addEntityLootModifier('tfc:sabertooth')
		.addWeightedLoot([9, 14], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:sabertooth')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([4, 7], ['tfc:food/gran_feline'])


	event.addEntityLootModifier('tfc:dog')
		.addWeightedLoot([5, 8], ['tfc:food/wolf'])

	event.addEntityLootModifier('tfc:dog')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfc:food/wolf'])


	event.addEntityLootModifier('tfc:wolf')
		.addWeightedLoot([5, 8], ['tfc:food/wolf'])

	event.addEntityLootModifier('tfc:wolf')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfc:food/wolf'])


	event.addEntityLootModifier('tfc:direwolf')
		.addWeightedLoot([8, 12], ['tfc:food/wolf'])

	event.addEntityLootModifier('tfc:direwolf')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([4, 6], ['tfc:food/wolf'])


	event.addEntityLootModifier('tfc:hyena')
		.addWeightedLoot([4, 7], ['tfc:food/hyena'])

	event.addEntityLootModifier('tfc:hyena')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfc:food/hyena'])


	event.addEntityLootModifier('tfc:fox')
		.addWeightedLoot([4, 7], ['tfc:food/fox'])

	event.addEntityLootModifier('tfc:fox')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfc:food/fox'])


	event.addEntityLootModifier('tfc:crocodile')
		.addWeightedLoot([5, 10], ['tfc:food/bluegill', 'tfc:food/crappie', 'tfc:food/lake_trout', 'tfc:food/rainbow_trout', 'tfc:food/frog_legs'])
		.addSequenceLoot(LootEntry.of('tfc:metal/fish_hook/copper').when(c => c.randomChance(0.2)))

	event.addEntityLootModifier('tfc:crocodile')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 5], ['tfc:food/bluegill', 'tfc:food/crappie', 'tfc:food/lake_trout', 'tfc:food/rainbow_trout', 'tfc:food/frog_legs'])

	// Passive animals

	event.addEntityLootModifier('tfc:alpaca')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([5, 10], ['tfc:food/camelidae'])

	event.addEntityLootModifier('tfc:boar')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfc:food/pork'])

	event.addEntityLootModifier('tfc:bongo')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfc:food/venison'])

	event.addEntityLootModifier('tfc:caribou')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 5], ['tfc:food/venison'])

	event.addEntityLootModifier('tfc:chicken')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 3], ['tfc:food/chicken'])

	event.addEntityLootModifier('tfc:cow')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([8, 12], ['tfc:food/beef'])

	event.addEntityLootModifier('tfc:deer')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfc:food/venison'])

	event.addEntityLootModifier('tfc:donkey')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([7, 10], ['tfc:food/horse_meat'])

	event.addEntityLootModifier('tfc:duck')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 3], ['tfc:food/duck'])

	event.addEntityLootModifier('tfc:frog')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfc:food/frog_legs'])

	event.addEntityLootModifier('tfc:gazelle')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfc:food/venison'])

	event.addEntityLootModifier('tfc:goat')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([4, 6], ['tfc:food/chevon'])

	event.addEntityLootModifier('tfc:grouse')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfc:food/grouse'])

	event.addEntityLootModifier('tfc:horse')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([7, 10], ['tfc:food/horse_meat'])

	event.addEntityLootModifier('tfc:moose')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([5, 10], ['tfc:food/venison'])

	event.addEntityLootModifier('tfc:mule')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([7, 10], ['tfc:food/horse_meat'])

	event.addEntityLootModifier('tfc:musk_ox')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([7, 10], ['tfc:food/mutton'])

	event.addEntityLootModifier('tfc:peafowl')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfc:food/peafowl'])

	event.addEntityLootModifier('tfc:pheasant')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfc:food/pheasant'])

	event.addEntityLootModifier('tfc:pig')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([5, 7], ['tfc:food/pork'])

	event.addEntityLootModifier('tfc:quail')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 3], ['tfc:food/quail'])

	event.addEntityLootModifier('tfc:rabbit')
		.matchMainHand('#forge:tools/butchery_knives')
		.addLoot('tfc:food/rabbit')

	event.addEntityLootModifier('tfc:sheep')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([6, 9], ['tfc:food/mutton'])

	event.addEntityLootModifier('tfc:turkey')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfc:food/turkey'])

	event.addEntityLootModifier('tfc:turtle')
		.matchMainHand('#forge:tools/butchery_knives')
		.addLoot('tfc:food/turtle')

	event.addEntityLootModifier('tfc:wildebeest')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([4, 7], ['tfc:food/beef'])

	event.addEntityLootModifier('tfc:yak')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([7, 10], ['tfc:food/chevon'])


	// Blocks

	event.addBlockLootModifier('minecraft:ice')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addLoot('firmalife:ice_shavings')

	event.addBlockLootModifier('minecraft:packed_ice')
		.not(n => n.matchMainHand("#forge:tools/saws"))
		.addWeightedLoot([4, 6], ['firmalife:ice_shavings'])

	event.addBlockLootModifier('minecraft:blue_ice')
		.not(n => n.matchMainHand("#forge:tools/saws"))
		.addWeightedLoot([8, 12], ['firmalife:ice_shavings'])

	event.addBlockLootModifier('tfc:sea_ice')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addLoot('firmalife:ice_shavings')
		.addSequenceLoot(LootEntry.of('tfc:powder/salt').when(c => c.randomChance(0.2)))
}