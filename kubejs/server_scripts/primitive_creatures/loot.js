// priority: 0

function registerPrimitiveCreaturesLoots(event) {

	// kaolin klayze
	event.addEntityLootModifier('kaolinclayze:tfc')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([12,16], ['tfc:kaolin_clay', 'minecraft:clay_ball'])
		.addLoot('tfc:plant/blood_lily')

	// graphite glayze
	event.addEntityLootModifier('kaolinclayze:golem_2')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([2,4], ['gtceu:rich_raw_graphite'])

	// inhabitant
	event.addEntityLootModifier('kaolinclayze:iloger_1')
		.removeLoot(ItemFilter.ALWAYS_TRUE)

	// wanderer
	event.addEntityLootModifier('kaolinclayze:iloger_2')
		.removeLoot(ItemFilter.ALWAYS_TRUE)

	// bonebreaker
	event.addEntityLootModifier('kaolinclayze:iloger_3')
		.removeLoot(ItemFilter.ALWAYS_TRUE)

	// stalker
	event.addEntityLootModifier('kaolinclayze:iloger_4')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([1, 3], ['firmalife:fruit_leaf'])

	// hunter
	event.addEntityLootModifier('kaolinclayze:iloger_5')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addSequenceLoot(LootEntry.of('minecraft:bamboo').when(c => c.randomChance(0.6)))

	// shaman
	event.addEntityLootModifier('kaolinclayze:iloger_6')
		.removeLoot(ItemFilter.ALWAYS_TRUE)

	// Herbalist
	event.addEntityLootModifier('kaolinclayze:wiloger')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addSequenceLoot(LootEntry.of('tfc:plant/field_horsetail').when(c => c.randomChance(0.5)))
		.addSequenceLoot(LootEntry.of('tfc:plant/foxglove').when(c => c.randomChance(0.5)))

	// huntsman
	event.addEntityLootModifier('kaolinclayze:piloger_9')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addSequenceLoot(LootEntry.of('tfc:small_raw_hide').when(c => c.randomChance(0.2)))

	// mercenary
	event.addEntityLootModifier('kaolinclayze:viloger_10')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
}