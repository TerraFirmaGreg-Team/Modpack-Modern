// priority: 0

function registerPrimitiveCreatesLoots(event) {

	event.addEntityLootModifier('kaolinclayze:tfc')
		.addWeightedLoot([7,15], ['tfc:kaolin_clay', 'minecraft:clay_ball'])

	event.addEntityLootModifier('kaolinclayze:golem_2')
		.addWeightedLoot([7,15], ['gtceu:poor_raw_graphite', 'gtceu:raw_graphite', 'gtceu:rich_raw_graphite'])
}