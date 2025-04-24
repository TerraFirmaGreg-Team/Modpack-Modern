// priority: 0

function registerTFCLoots(event)
{
	event.addEntityLootModifier('tfc:black_bear')
		.addWeightedLoot([8,12], ['tfc:food/bear'])

	event.addEntityLootModifier('tfc:grizzly_bear')
		.addWeightedLoot([10,16], ['tfc:food/bear'])

	event.addEntityLootModifier('tfc:polar_bear')
		.addWeightedLoot([14,20], ['tfc:food/bear'])
		.addWeightedLoot([2,5], ['tfc:blubber'])

	event.addEntityLootModifier('tfc:cougar')
		.addWeightedLoot([6,10], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:panther')
		.addWeightedLoot([6,10], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:sabertooth')
		.addWeightedLoot([9,14], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:lion')
		.addWeightedLoot([9,14], ['tfc:food/gran_feline'])
		
	event.addEntityLootModifier('tfc:tiger')
		.addWeightedLoot([9,14], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:ocelot')
		.addWeightedLoot([2,5], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:cat')
		.addWeightedLoot([2,5], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:sabertooth')
		.addWeightedLoot([9,14], ['tfc:food/gran_feline'])

	event.addEntityLootModifier('tfc:dog')
		.addWeightedLoot([5,9], ['tfc:food/wolf'])

	event.addEntityLootModifier('tfc:wolf')
		.addWeightedLoot([5,9], ['tfc:food/wolf'])

	event.addEntityLootModifier('tfc:direwolf')
		.addWeightedLoot([10,15], ['tfc:food/wolf'])

	event.addEntityLootModifier('tfc:wolf')
		.addWeightedLoot([5,9], ['tfc:food/wolf'])

	event.addEntityLootModifier('tfc:hyena')
		.addWeightedLoot([5,9], ['tfc:food/hyena'])

	event.addEntityLootModifier('tfc:fox')
		.addWeightedLoot([5,9], ['tfc:food/fox'])

	
	event.addEntityLootModifier('tfc:crocodile')
		.addWeightedLoot([5,10], ['tfc:food/bluegill', 'tfc:food/crappie', 'tfc:food/lake_trout', 'tfc:food/rainbow_trout', 'tfc:food/frog_legs'])
		.addSequenceLoot(LootEntry.of('tfc:metal/fish_hook/copper').when(c => c.randomChance(0.2)))


	event.addBlockLootModifier('minecraft:ice')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addLoot('firmalife:ice_shavings')

	event.addBlockLootModifier('minecraft:packed_ice')
		.not(n => n.matchMainHand("#forge:tools/saws"))
		.addWeightedLoot([4,6], ['firmalife:ice_shavings'])

	event.addBlockLootModifier('minecraft:blue_ice')
		.not(n => n.matchMainHand("#forge:tools/saws"))
		.addWeightedLoot([8,12], ['firmalife:ice_shavings'])

	event.addBlockLootModifier('tfc:sea_ice')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addLoot('firmalife:ice_shavings')
		.addSequenceLoot(LootEntry.of('tfc:powder/salt').when(c => c.randomChance(0.2)))
}