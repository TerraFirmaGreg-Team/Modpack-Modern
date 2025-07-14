// priority: 0

function registerPrimitiveCreaturesLoots(event) {

	// kaolin klayze
	event.addEntityLootModifier('primitive_creatures:tfc')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([12,16], ['tfc:kaolin_clay', 'minecraft:clay_ball'])
		.addLoot('tfc:plant/blood_lily')

	// graphite glayze
	event.addEntityLootModifier('primitive_creatures:golem_2')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([2,4], ['gtceu:rich_raw_graphite'])


	// inhabitant
	event.addEntityLootModifier('primitive_creatures:iloger_1')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([0,2], ['primitive_creatures:grh']) // battered wool
		.addAlternativesLoot(
			LootEntry.of('tfc:wool_yarn').when(c => c.randomChance(0.8)),
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.2)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.2)))

	// wanderer
	event.addEntityLootModifier('primitive_creatures:iloger_2')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([0,2], ['primitive_creatures:grh']) // battered wool
		.addAlternativesLoot(
			LootEntry.of('tfc:stone/javelin/igneous_extrusive').when(c => c.randomChance(0.4)),
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.2)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.2)))

	// bonebreaker
	event.addEntityLootModifier('primitive_creatures:iloger_3')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([0,2], ['minecraft:flint'])
		.addWeightedLoot([1,3], ['minecraft:bone'])
		.addAlternativesLoot(
			LootEntry.of('primitive_creatures:yhgi').when(c => c.randomChance(0.2)), // flint club
			LootEntry.of('minecraft:skeleton_skull').when(c => c.randomChance(0.1)))

	// stalker
	event.addEntityLootModifier('primitive_creatures:iloger_4')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([1,3], ['firmalife:fruit_leaf'])
		.addWeightedLoot([1,4], [
			Item.of('minecraft:gold_nugget'),
			Item.of('gtceu:silver_nugget'),
			Item.of('#forge:nuggets/copper')])
		.addAlternativesLoot(
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:totem_2').when(c => c.randomChance(0.1)))

	// hunter
	event.addEntityLootModifier('primitive_creatures:iloger_5')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addAlternativesLoot(
			LootEntry.of('minecraft:bamboo').when(c => c.randomChance(0.6)),
			LootEntry.of('tfg:fletching').when(c => c.randomChance(0.5)),
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.2)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.2)))

	// shaman
	event.addEntityLootModifier('primitive_creatures:iloger_6')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([1,2], ['primitive_creatures:f_1']) // primitive explosives
		.addWeightedLoot([1,3], ['minecraft:gunpowder'])
		.addAlternativesLoot(
			LootEntry.of('primitive_creatures:totem_2').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.1)))

	// Herbalist
	event.addEntityLootModifier('primitive_creatures:wiloger')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([0,1], ['gtceu:tricalcium_phosphate_dust'])
		.addAlternativesLoot(
			LootEntry.of('tfc:plant/field_horsetail').when(c => c.randomChance(0.3)),
			LootEntry.of('tfc:plant/foxglove').when(c => c.randomChance(0.3)),
			LootEntry.of('firmalife:beeswax').when(c => c.randomChance(0.5)),
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.2)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.2)))

	// huntsman
	event.addEntityLootModifier('primitive_creatures:piloger_9')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([2,4], ['minecraft:arrow'])
		.addAlternativesLoot(
			LootEntry.of('tfc:small_raw_hide').when(c => c.randomChance(0.2)),
			LootEntry.of('primitive_creatures:grh').when(c => c.randomChance(0.5)), // battered wool
			LootEntry.of('primitive_creatures:totem_2').when(c => c.randomChance(0.2)))

	// mercenary
	event.addEntityLootModifier('primitive_creatures:viloger_10')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([0,2], ['primitive_creatures:grh']) // battered wool
		.addAlternativesLoot(
			LootEntry.of('minecraft:emerald').when(c => c.randomChance(0.6)),
			LootEntry.of('gtceu:stone_knife').when(c => c.randomChance(0.3)),
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.2)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.2)))

	// not-a-ravager
	event.addEntityLootModifier('primitive_creatures:beast')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([4,8], ['minecraft:bone'])
}