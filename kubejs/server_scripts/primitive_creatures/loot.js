// priority: 0

function registerPrimitiveCreaturesLoots(event) {

	event.addEntityLootModifier('kaolinclayze:tfc')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([12,16], ['tfc:kaolin_clay', 'minecraft:clay_ball'])

	event.addEntityLootModifier('kaolinclayze:golem_2')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([4,6], ['gtceu:rich_raw_graphite'])
}