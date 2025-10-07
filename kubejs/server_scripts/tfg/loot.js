"use strict";


function registerTFGLoots(event) {

	//#region Vase Loot
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.addBlockLootModifier(`tfg:decorative_vase/generated/${color}`)
			.removeLoot(Ingredient.all)
			//ore
			.pool((pool) => {
				pool.rolls([4, 6]);
				pool.addAlternativesLoot(
					LootEntry.of('tfc:ore/normal_bismuthinite').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:ore/rich_bismuthinite').when((c) => c.randomChance(0.2)),

					LootEntry.of('tfc:ore/normal_native_copper').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:ore/rich_native_copper').when((c) => c.randomChance(0.2)),

					LootEntry.of('tfc:ore/normal_sphalerite').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:ore/rich_sphalerite').when((c) => c.randomChance(0.2)),

					LootEntry.of('tfc:ore/normal_cassiterite').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:ore/rich_cassiterite').when((c) => c.randomChance(0.2)),

					LootEntry.of('tfc:ore/normal_native_gold').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:ore/rich_native_gold').when((c) => c.randomChance(0.2)),

					LootEntry.of('tfc:ore/normal_native_silver').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:ore/rich_native_silver').when((c) => c.randomChance(0.2)),

					LootEntry.of('tfc:ore/normal_hematite').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:ore/rich_hematite').when((c) => c.randomChance(0.2)),

					LootEntry.of('gtceu:rich_raw_rock_salt').when((c) => c.randomChance(0.1)),
					LootEntry.of('gtceu:rich_raw_salt').when((c) => c.randomChance(0.1)),
					LootEntry.of('gtceu:rich_raw_saltpeter').when((c) => c.randomChance(0.1))
				);
			})
			//seeds
			.pool((pool) => {
				pool.rolls([2, 8]);
				pool.addAlternativesLoot(
					LootEntry.of('tfc:seeds/onion').when((c) => c.randomChance(0.2)),
					LootEntry.of('tfc:seeds/cabbage').when((c) => c.randomChance(0.2)),
					LootEntry.of('tfc:seeds/potato').when((c) => c.randomChance(0.2)),
					LootEntry.of('tfc:seeds/jute').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:seeds/sugarcane').when((c) => c.randomChance(0.1)),
					LootEntry.of('firmalife:plant/pineapple_bush').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:plant/peach_sapling').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:plant/red_apple_sapling').when((c) => c.randomChance(0.1)));
			})
			//loot
			.pool((pool) => {
				pool.rolls([0, 3]);
				pool.addAlternativesLoot(
					LootEntry.of('tfc:wool_yarn').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:blubber').when((c) => c.randomChance(0.1)),
					LootEntry.of('minecraft:bone').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:kaolin_clay').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:glue').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:burlap_cloth').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:wool_cloth').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:mortar').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:leather').when((c) => c.randomChance(0.1)),
					LootEntry.of('chalk:black_chalk').when((c) => c.randomChance(0.1)),
					LootEntry.of('chalk:red_chalk').when((c) => c.randomChance(0.1)),
					LootEntry.of('chalk:white_chalk').when((c) => c.randomChance(0.1)),
					LootEntry.of('minecraft:goat_horn').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfg:regeneration_pill').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfg:water_breathing_pill').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfg:night_vision_pill').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfg:haste_pill').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:small_raw_hide').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:medium_raw_hide').when((c) => c.randomChance(0.1)),
					LootEntry.of('tfc:large_raw_hide').when((c) => c.randomChance(0.1)),
					LootEntry.of('firmalife:beeswax').when((c) => c.randomChance(0.1)),
					LootEntry.of('gtceu:bismuth_bronze_pickaxe_head').when((c) => c.randomChance(0.1)),
					LootEntry.of('gtceu:bismuth_bronze_axe_head').when((c) => c.randomChance(0.1)),
					LootEntry.of('gtceu:bismuth_bronze_shovel_head').when((c) => c.randomChance(0.1)),
					LootEntry.of('gtceu:bismuth_bronze_knife_head').when((c) => c.randomChance(0.1)));
			})
	});

	//#region Blocks

	event.addBlockLootModifier('minecraft:campfire')
		.removeLoot(Ingredient.all)
		.addLoot('minecraft:campfire')

	//#endregion

	//Cross-mod glass compat
	const STRONG_GLASSES = [
		['create:dark_oak_window', true],
		['create:mangrove_window', true],
		['create:ornate_iron_window', true],
		['create:industrial_iron_window', true],
		['create:weathered_iron_window', true],
		['create:cherry_window', true],
		['create:bamboo_window', true],
		['createdeco:andesite_window', true],
		['createdeco:copper_window', true],
		['createdeco:iron_window', true],
		['createdeco:industrial_iron_window', true],
		['createdeco:brass_window', true],
		['createdeco:zinc_window', true],
		['everycomp:c/domum_ornamentum/cactus_window_pane', false],
		['everycomp:c/domum_ornamentum/cactus_extra_window_pane', false]
	]
	const GLASSES = [
		'create:framed_glass',
		'create:vertical_framed_glass',
		'create:horizontal_framed_glass',
		'create:tiled_glass'
	]

	STRONG_GLASSES.forEach(glass => {
		event.addBlockLootModifier(glass[0])
			.addLoot(glass[0])
		if (glass[1]) {
			event.addBlockLootModifier(`${glass[0]}_pane`)
				.addLoot(`${glass[0]}_pane`)
		}

	});

	GLASSES.forEach(glass => {
		event.addBlockLootModifier(glass)
			.matchMainHand(Item.of('tfc:gem_saw'))
			.addLoot(glass)
		event.addBlockLootModifier(`${glass}_pane`)
			.matchMainHand(Item.of('tfc:gem_saw'))
			.addLoot(`${glass}_pane`)

	})

	global.TFC_WOOD_TYPES.forEach(wood => {
		const id = `everycomp:c/tfc/${wood}_window_pane`
		event.addBlockLootModifier(id)
			.addLoot(id)
	})
	global.AFC_WOOD_TYPES.forEach(wood => {
		const id = `everycomp:c/afc/${wood}_window_pane`
		event.addBlockLootModifier(id)
			.addLoot(id)
	})

	global.AD_ASTRA_WOOD.forEach(wood => {
		const id = `everycomp:c/ad_astra/${wood.name}_window_pane`
		event.addBlockLootModifier(id)
			.addLoot(id)
	})

	// Bonus animal drops with butchery knives

	event.addEntityLootModifier('tfg:glacian_ram')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([4, 6], ['tfg:food/raw_glacian_mutton'])

	event.addEntityLootModifier('tfg:moon_rabbit')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([1, 2], ['tfg:food/raw_moon_rabbit'])

	event.addEntityLootModifier('tfg:sniffer')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([8, 10], ['tfg:food/raw_sniffer_beef'])

	event.addEntityLootModifier('tfg:wraptor')
		.matchMainHand('#forge:tools/butchery_knives')
		.addWeightedLoot([2, 3], ['tfg:food/raw_wraptor'])
};
