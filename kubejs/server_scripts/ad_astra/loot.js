// priority: 0

function registerAdAstraLoots(event) {

	event.addEntityLootModifier('ad_astra:corrupted_lunarian')
		.addWeightedLoot([1, 2], ['minecraft:rotten_flesh'])
		.addWeightedLoot([4, 6], ['minecraft:bone'])


	event.addEntityLootModifier('ad_astra:star_crawler')
		.addWeightedLoot([5, 8], ['tfg:food/raw_crawlermari'])

	event.addEntityLootModifier('ad_astra:star_crawler')
		.randomChanceWithEnchantment('minecraft:looting', [0, 0.3, 0.6, 1])
		.addWeightedLoot([2, 4], ['tfc:food/raw_crawlermari'])
}