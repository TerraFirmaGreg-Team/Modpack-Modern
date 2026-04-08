// priority: 0
"use strict";

function registerWansAncientBeastsLoots(event) {
	
	event.addEntityLootModifier('wan_ancient_beasts:crusher')
		.addLoot('tfc:medium_raw_hide')
		.addWeightedLoot([2, 4], ['minecraft:bone'])
		.addWeightedLoot([2, 4], ['wan_ancient_beasts:crusher_spike'])
		.addWeightedLoot([4, 7], ['tfg:food/raw_crusher_meat'])
		.addWeightedLoot([2, 4], ['tfc:blubber'])
		.addSequenceLoot(LootEntry.of('wan_ancient_beasts:crusher_egg').when(c => c.randomChance(0.1)))

	event.addEntityLootModifier('wan_ancient_beasts:crusher')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfg:food/raw_crusher_meat'])
		.addWeightedLoot([2, 4], ['tfc:blubber'])


	event.addEntityLootModifier('wan_ancient_beasts:glider')
		.addLoot('tfc:medium_raw_hide')
		.addWeightedLoot([1, 3], ['minecraft:bone'])
		.addWeightedLoot([2, 4], ['wan_ancient_beasts:glider_feather'])
		.addWeightedLoot([6, 8], ['tfg:food/raw_glider_wings'])
		.addSequenceLoot(LootEntry.of('wan_ancient_beasts:glider_egg').when(c => c.randomChance(0.1)))

	event.addEntityLootModifier('wan_ancient_beasts:glider')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 4], ['tfg:food/raw_glider_wings'])


	event.addEntityLootModifier('wan_ancient_beasts:soarer')
		.addLoot('tfc:medium_raw_hide')
		.addWeightedLoot([1, 3], ['minecraft:bone'])
		.addWeightedLoot([2, 4], ['minecraft:feather'])
		.addWeightedLoot([2, 4], ['tfg:food/raw_whole_soarer'])
		.addSequenceLoot(LootEntry.of('wan_ancient_beasts:soarer_egg').when(c => c.randomChance(0.1)))

	event.addEntityLootModifier('wan_ancient_beasts:soarer')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfg:food/raw_whole_soarer'])


	event.addEntityLootModifier('wan_ancient_beasts:walker')
		.addWeightedLoot([2, 3], ['tfc:large_raw_hide'])
		.addWeightedLoot([10, 15], ['minecraft:bone'])
		.addWeightedLoot([25, 35], ['tfg:food/raw_walker_steak'])
		.addWeightedLoot([4, 8], ['tfc:blubber'])
		.addSequenceLoot(LootEntry.of('wan_ancient_beasts:walker_egg').when(c => c.randomChance(0.1)))
		.addSequenceLoot(LootEntry.of('waterflasks:bladder').when(c => c.randomChance(0.5)))

	event.addEntityLootModifier('wan_ancient_beasts:walker')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([12, 16], ['tfg:food/raw_walker_steak'])


	event.addEntityLootModifier('wan_ancient_beasts:eater')
		.addLoot('tfc:large_raw_hide')
		.addWeightedLoot([6, 8], ['minecraft:bone'])
		.addWeightedLoot([1, 2], ['wan_ancient_beasts:eater_tooth'])
		.addWeightedLoot([10, 14], ['wan_ancient_beasts:raw_ancient_meat'])
		.addWeightedLoot([1, 2], ['tfc:blubber'])
		.addSequenceLoot(LootEntry.of('wan_ancient_beasts:eater_egg').when(c => c.randomChance(0.1)))

	event.addEntityLootModifier('wan_ancient_beasts:eater')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([5, 7], ['wan_ancient_beasts:raw_ancient_meat'])
		.addWeightedLoot([2, 3], ['tfc:blubber'])


	event.addEntityLootModifier('wan_ancient_beasts:surfer')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		
	event.addEntityLootModifier('tfg:surfer')
		.addLoot('tfc:medium_raw_hide')
		.addWeightedLoot([1, 3], ['minecraft:bone'])
		.addWeightedLoot([6, 8], ['tfg:food/raw_surfer_steak'])
		.addWeightedLoot([1, 2], ['tfc:blubber'])

	event.addEntityLootModifier('tfg:surfer')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([3, 4], ['tfg:food/raw_surfer_steak'])
		.addWeightedLoot([2, 3], ['tfc:blubber'])

		
	event.addEntityLootModifier('wan_ancient_beasts:charger')
		.addLoot('tfc:medium_raw_hide')
		.addWeightedLoot([3, 6], ['minecraft:bone'])
		.addWeightedLoot([1, 2], ['tfc:blubber'])
		.addSequenceLoot(LootEntry.of('wan_ancient_beasts:charger_egg').when(c => c.randomChance(0.1)))


	event.addEntityLootModifier('wan_ancient_beasts:raider')
		.addLoot('tfc:medium_raw_hide')
		.addWeightedLoot([3, 6], ['minecraft:bone'])
		.addWeightedLoot([1, 2], ['tfc:blubber'])
		.addSequenceLoot(LootEntry.of('wan_ancient_beasts:raider_egg').when(c => c.randomChance(0.1)))


	event.addEntityLootModifier('wan_ancient_beasts:snatcher')
		.addLoot('tfc:small_raw_hide')
		.addWeightedLoot([1, 2], ['minecraft:bone'])
		.addSequenceLoot(LootEntry.of('wan_ancient_beasts:snatcher_egg').when(c => c.randomChance(0.1)))


	event.addLootTableModifier('wan_ancient_beasts:chests/abandoned_village').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/digsite_peaks').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/digsite_plains').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/digsite_taiga').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/digsite_icespikes').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/digsite_desert').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/digsite_jungle').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/digsite_badlands').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/digsite_savanna').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/digsite_oldgrowthtaiga').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/badlands_temple').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/desert_temple').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/ice_castle').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/ruined_castle').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/dead_coral').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/training_outpost').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('wan_ancient_beasts:chests/ancient_nest').removeLoot(ItemFilter.ALWAYS_TRUE)
}