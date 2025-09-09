// priority: 0
"use strict";

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


	const CLOTHING_DROP_RATE = 0.05

	// forager - light tan clothes, holds a stone axe
	event.addEntityLootModifier('primitive_creatures:iloger_1')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([
			// the illusion of randomness
			Item.of('tfc:food/bunchberry', 3),
			Item.of('tfc:food/cranberry', 4),
			Item.of('tfc:food/gooseberry', 5),
			Item.of('tfc:food/blackberry', 6),
			Item.of('tfc:food/blueberry', 3),
			Item.of('tfc:food/cloudberry', 4),
			Item.of('tfc:food/elderberry', 5),
			Item.of('tfc:food/raspberry', 6),
			Item.of('tfc:food/snowberry', 3),
			Item.of('tfc:food/strawberry', 4),
			Item.of('tfc:food/wintergreen_berry', 5)])
		.addAlternativesLoot(
			LootEntry.of('sns:straw_basket').when(c => c.randomChance(0.3)),
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:grh'))
	event.addEntityLootModifier('primitive_creatures:iloger_1')
		.randomChance(CLOTHING_DROP_RATE)
		.addWeightedLoot([
			Item.of('tfc_textile:raw_hat'),
			Item.of('tfc_textile:raw_shirt'),
			Item.of('tfc_textile:raw_pants'),
			Item.of('tfc_textile:raw_socks')])

	// herbalist - brown clothes with a mask that looks like a Creaking
	event.addEntityLootModifier('primitive_creatures:iloger_2')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([1,2], ['gtceu:tricalcium_phosphate_dust'])
		.addAlternativesLoot(
			LootEntry.of('tfc:plant/field_horsetail').when(c => c.randomChance(0.3)),
			LootEntry.of('tfc:plant/foxglove').when(c => c.randomChance(0.5)),
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.1)),
			LootEntry.of('firmalife:beeswax'))
	event.addEntityLootModifier('primitive_creatures:iloger_2')
		.randomChance(CLOTHING_DROP_RATE)
		.addWeightedLoot([
			Item.of('tfc_textile:grizzly_bear_hat'),
			Item.of('tfc_textile:grizzly_bear_shirt'),
			Item.of('tfc_textile:grizzly_bear_pants'),
			Item.of('tfc_textile:grizzly_bear_boots')])

	// bonebreaker - skull helmet, bone armor? hits harder, has knockback
	event.addEntityLootModifier('primitive_creatures:iloger_3')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([0,2], ['minecraft:flint'])
		.addWeightedLoot([1,3], ['minecraft:bone'])
		.addAlternativesLoot(
			LootEntry.of('gtceu:stone_hammer').when(c => c.randomChance(0.2)),
			LootEntry.of('minecraft:skeleton_skull').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:grh')) // battered wool
	event.addEntityLootModifier('primitive_creatures:iloger_3')
		.randomChance(CLOTHING_DROP_RATE)
		.addWeightedLoot([
			Item.of('tfc_textile:direwolf_hat'),
			Item.of('tfc_textile:direwolf_shirt'),
			Item.of('tfc_textile:direwolf_pants'),
			Item.of('tfc_textile:direwolf_boots')])

	// ambusher - leaf on head, leafy clothes (like the swamp vanilla villager type), ranged with poison
	event.addEntityLootModifier('primitive_creatures:iloger_4')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([1,3], LootEntry.of('minecraft:tipped_arrow')).addPotion("poison")
		.addAlternativesLoot(
			LootEntry.of('firmalife:food/nightshade_berry').when(c => c.randomChance(0.7)),
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:totem_2').when(c => c.randomChance(0.1)),
			LootEntry.of('sns:quiver'))
	event.addEntityLootModifier('primitive_creatures:iloger_4')
		.randomChance(CLOTHING_DROP_RATE)
		.addWeightedLoot([
			Item.of('tfc_textile:crocodile_hat'),
			Item.of('tfc_textile:crocodile_shirt'),
			Item.of('tfc_textile:crocodile_pants'),
			Item.of('tfc_textile:crocodile_boots')])

	// hunter - wears brown and white fur, briefly disappears when hit, ranged with weakness
	event.addEntityLootModifier('primitive_creatures:iloger_5')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([1,3], LootEntry.of('minecraft:tipped_arrow')).addPotion("weakness")
		.addAlternativesLoot(
			// placeholder for a blowpipe
			LootEntry.of('minecraft:bamboo').when(c => c.randomChance(0.5)),
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.1)),
			LootEntry.of('sns:quiver')) // battered wool
	event.addEntityLootModifier('primitive_creatures:iloger_5')
		.randomChance(CLOTHING_DROP_RATE)
		.addWeightedLoot([
			Item.of('tfc_textile:sabertooth_hat'),
			Item.of('tfc_textile:sabertooth_shirt'),
			Item.of('tfc_textile:sabertooth_pants'),
			Item.of('tfc_textile:sabertooth_boots')])

	// shaman - yellow clothes, throws fireballs
	event.addEntityLootModifier('primitive_creatures:iloger_6')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([1,2], ['primitive_creatures:f_1']) // primitive explosives
		.addWeightedLoot([1,3], ['minecraft:gunpowder'])
		.addAlternativesLoot(
			LootEntry.of('primitive_creatures:totem_2').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:grh')) // battered wool
	event.addEntityLootModifier('primitive_creatures:iloger_6')
		.randomChance(CLOTHING_DROP_RATE)
		.addWeightedLoot([
			Item.of('tfc_textile:cougar_hat'),
			Item.of('tfc_textile:cougar_shirt'),
			Item.of('tfc_textile:cougar_pants'),
			Item.of('tfc_textile:cougar_boots')])

	// beast tamer - wears tiger fur, holds vanilla sugarcane? fucking summons ravagers
	event.addEntityLootModifier('primitive_creatures:wiloger')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([0,2], ['primitive_creatures:grh']) // battered wool
		.addAlternativesLoot(
			LootEntry.of('primitive_creatures:totem_0').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.1)),
			LootEntry.of('minecraft:lead'))
	event.addEntityLootModifier('primitive_creatures:wiloger')
		.randomChance(CLOTHING_DROP_RATE)
		.addWeightedLoot([
			Item.of('tfc_textile:tiger_hat'),
			Item.of('tfc_textile:tiger_shirt'),
			Item.of('tfc_textile:tiger_pants'),
			Item.of('tfc_textile:tiger_boots')])

	// warrior - lion fur, holds flint club - stuns you in place when hit
	event.addEntityLootModifier('primitive_creatures:piloger_9')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addAlternativesLoot(
			LootEntry.of('primitive_creatures:yhgi').when(c => c.randomChance(0.2)), // flint club
			LootEntry.of('tfc:small_raw_hide').when(c => c.randomChance(0.4)),
			LootEntry.of('primitive_creatures:grh')) // battered wool
	event.addEntityLootModifier('primitive_creatures:piloger_9')
		.randomChance(CLOTHING_DROP_RATE)
		.addWeightedLoot([
			Item.of('tfc_textile:lion_hat'),
			Item.of('tfc_textile:lion_shirt'),
			Item.of('tfc_textile:lion_pants'),
			Item.of('tfc_textile:lion_boots')])

	// mercenary
	event.addEntityLootModifier('primitive_creatures:viloger_10')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([1,2], ['minecraft:emerald'])
		.addAlternativesLoot(
			LootEntry.of('gtceu:stone_knife').when(c => c.randomChance(0.3)),
			LootEntry.of('primitive_creatures:totem_2').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:totem_3').when(c => c.randomChance(0.1)),
			LootEntry.of('primitive_creatures:grh'))  // battered wool)
	event.addEntityLootModifier('primitive_creatures:viloger_10')
		.randomChance(CLOTHING_DROP_RATE)
		.addWeightedLoot([
			Item.of('tfc_textile:raw_hat'),
			Item.of('tfc_textile:raw_shirt'),
			Item.of('tfc_textile:raw_pants'),
			Item.of('tfc_textile:raw_socks')])

	// huntmaster - miniboss
	event.addEntityLootModifier('primitive_creatures:nahida')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([
			Item.of('gtceu:cobalt_brass_butchery_knife'),
			Item.of('gtceu:cobalt_brass_axe'),
			Item.of('gtceu:cobalt_brass_pickaxe'),
			Item.of('gtceu:cobalt_brass_sword')])
	event.addEntityLootModifier('primitive_creatures:nahida')
		.addWeightedLoot([
			Item.of('sns:leather_sack'),
			Item.of('sns:burlap_sack'),
			Item.of('sns:seed_pouch'),
			Item.of('sns:ore_sack'),
			Item.of('sns:frame_pack'),
			Item.of('sophisticatedbackpacks:backpack')])
	event.addEntityLootModifier('primitive_creatures:nahida')
		.addLoot(Item.of('tfc:goat_horn'))
	event.addEntityLootModifier('primitive_creatures:nahida')
		.randomChance(CLOTHING_DROP_RATE)
		.addWeightedLoot([
			Item.of('tfc_textile:panther_hat'),
			Item.of('tfc_textile:panther_shirt'),
			Item.of('tfc_textile:panther_pants'),
			Item.of('tfc_textile:panther_boots')])

	// mistah beeeaaaasssstt
	event.addEntityLootModifier('primitive_creatures:beast')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([4,8], ['minecraft:bone'])
		.addWeightedLoot([2,3], ['tfc:large_raw_hide'])
		// raw meat?
}