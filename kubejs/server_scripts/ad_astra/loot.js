// priority: 0
"use strict";

function registerAdAstraLoots(event) {

	event.addEntityLootModifier('ad_astra:corrupted_lunarian')
		.addWeightedLoot([1, 2], ['minecraft:rotten_flesh'])
		.addWeightedLoot([4, 6], ['minecraft:bone'])


	event.addEntityLootModifier('ad_astra:star_crawler')
		.addWeightedLoot([5, 8], ['tfg:food/raw_crawlermari'])

	event.addEntityLootModifier('ad_astra:star_crawler')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 4], ['tfg:food/raw_crawlermari'])

	
	event.addEntityLootModifier('ad_astra:martian_raptor')
		.addWeightedLoot([2, 4], ['minecraft:bone'])


	event.addLootTableModifier('ad_astra:chests/dungeon/moon/dungeon_chest').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('ad_astra:chests/dungeon/moon/large_dungeon_chest').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('ad_astra:chests/village/moon/house').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('ad_astra:chests/village/moon/blacksmith').removeLoot(ItemFilter.ALWAYS_TRUE)
	event.addLootTableModifier('ad_astra:chests/temple/mars/temple').removeLoot(ItemFilter.ALWAYS_TRUE)
}