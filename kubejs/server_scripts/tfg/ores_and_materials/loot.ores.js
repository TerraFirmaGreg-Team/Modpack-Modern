// priority: 10
"use strict";

const registerTFGOreLoots = (event) => {
	// Rock to cobble, cobble to gravel
	for (let [rockId, rock] of Object.entries(global.BIG_ROCK_TABLE)) {
		if (rock.raw != null && rock.cobble != null) {
			event.addBlockLootModifier(rock.raw.block)
				.matchMainHand('#forge:tools/hammers')
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(rock.cobble.block)
		}

		if (rock.hardened != null && rock.cobble != null) {
			event.addBlockLootModifier(rock.hardened)
				.matchMainHand('#forge:tools/hammers')
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(rock.cobble.block)
		}

		if (rock.cobble != null && rock.gravel != null) {
			event.addBlockLootModifier(rock.cobble.block)
				.matchMainHand('#forge:tools/hammers')
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(rock.gravel)

			if (rock.cobble.mossy != null) {
				event.addBlockLootModifier(rock.cobble.mossy.block)
					.matchMainHand('#forge:tools/hammers')
					.removeLoot(ItemFilter.ALWAYS_TRUE)
					.addLoot(rock.gravel)
			}
		}
	}

	// Sand
	global.SAND_COLORS.forEach(sandColor => {
		let tag_array = Ingredient.of(`#tfc:${sandColor}_gravel`).itemIds.toArray().map(String);
		tag_array.forEach(item => {
			event.addBlockLootModifier(item)
				.matchMainHand('#forge:tools/hammers')
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(`tfc:sand/${sandColor}`)
		})
	})

	global.HAMMERING.forEach(x => {
		if (x.raw.startsWith('#')) {
			let tag_array = Ingredient.of(x.raw).itemIds.toArray().map(String);
			tag_array.forEach(item => {
				event.addBlockLootModifier(item)
					.matchMainHand('#forge:tools/hammers')
					.removeLoot(ItemFilter.ALWAYS_TRUE)
					.addLoot(x.hammered)
			})
		}
		else {
			event.addBlockLootModifier(x.raw)
				.matchMainHand('#forge:tools/hammers')
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addLoot(x.hammered)
		}
	})

	// Other rocks
	event.addBlockLootModifier('minecraft:gilded_blackstone')
		.matchMainHand('#forge:tools/hammers')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addSequenceLoot(
			LootEntry.of('tfg:rock/cobble_blackstone'),
			LootEntry.of('tfc:powder/native_gold')
		)

	event.addBlockLootModifier('beneath:ore/blackstone_sylvite')
		.removeLoot(ItemFilter.ALWAYS_TRUE)
		.addWeightedLoot([
			Item.of('gtceu:rich_raw_rock_salt').withChance(0.2),
			Item.of('gtceu:raw_rock_salt').withChance(0.6),
			Item.of('gtceu:poor_raw_rock_salt').withChance(0.2)
		])
		.addLoot(LootEntry.of('tfg:igneous_ultramafic_dust').when((c) => c.randomChance(0.2)))
		.addLoot(LootEntry.of('gtceu:tiny_rock_salt_dust').when(c => c.randomChance(0.05)));

	// Go through all materials
	const $GreateMaterials = Java.loadClass("electrolyte.greate.registry.GreateMaterials")

	forEachMaterial(material => {
		if (material.hasProperty(PropertyKey.ORE)) {

			// Indicator buds
			if (material.hasProperty(PropertyKey.GEM)) {
				let bud = ChemicalHelper.get(TFGTagPrefix.budIndicator, material, 1).getItem().id;

				event.addBlockLootModifier(bud)
					.matchMainHand("tfc:gem_saw")
					.addLoot(ChemicalHelper.get(TagPrefix.gem, material, 1));

				event.addBlockLootModifier(bud)
					.not(n => n.matchMainHand("tfc:gem_saw"))
					.addLoot(ChemicalHelper.get(TagPrefix.gemChipped, material, 1));
			}

			let richRawOre = ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1)
			let normalRawOre = ChemicalHelper.get(TagPrefix.rawOre, material, 1)
			let poorRawOre = ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1)
			let dustOre = ChemicalHelper.get(TagPrefix.dustTiny, material, 1)

			let rawOreBlock = ChemicalHelper.get(TagPrefix.rawOreBlock, material, 1).getItem().id;
			event.addBlockLootModifier(rawOreBlock)
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addWeightedLoot([4, 6], [
					richRawOre.withChance(0.2),
					normalRawOre.withChance(0.6),
					poorRawOre.withChance(0.2)
				])
				.addLoot(LootEntry.of(dustOre).when(c => c.randomChance(0.2)));

			// Stone ores
			global.ORE_BEARING_STONES.forEach(stoneType => {

				let stoneTypeMaterial = GTMaterials.get(global.BIG_ROCK_TABLE[stoneType === "pyroxenite" ? "blackstone" : stoneType].material);
				
				let stoneTypeDust = ChemicalHelper.get(TagPrefix.dust, stoneTypeMaterial, 1)
				let namespace = material === $GreateMaterials.RoseQuartz ? 'greate' : 'gtceu';

				// break with pickaxe/mining hammer/drill/mining machine
				event.addBlockLootModifier(`${namespace}:${stoneType}_${material.getName()}_ore`)
					.removeLoot(ItemFilter.ALWAYS_TRUE)
					.addWeightedLoot([
						richRawOre.withChance(0.2),
						normalRawOre.withChance(0.6),
						poorRawOre.withChance(0.2)
					])
					.addLoot(LootEntry.of(stoneTypeDust).when((c) => c.randomChance(0.2)))
					.addLoot(LootEntry.of(dustOre).when(c => c.randomChance(0.05)));

				// break with hammer
				event.addBlockLootModifier(`${namespace}:${stoneType}_${material.getName()}_ore`)
					.matchMainHand('#forge:tools/hammers')
					.addLoot(LootEntry.of(GTBlocks.COBBLE_BLOCKS.get(TagPrefix.get(stoneType)).get().getBlock().id));
			})
		}
	})
}