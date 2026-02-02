// priority: 10
"use strict";

const registerTFGOreLoots = (event) => {
	
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
			let tinyDustOre = ChemicalHelper.get(TagPrefix.dustTiny, material, 1)

			let rawOreBlock = ChemicalHelper.get(TagPrefix.rawOreBlock, material, 1).getItem().id;
			event.addBlockLootModifier(rawOreBlock)
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addWeightedLoot([4, 6], [
					richRawOre.withChance(0.2),
					normalRawOre.withChance(0.6),
					poorRawOre.withChance(0.2)
				])
				.addLoot(LootEntry.of(tinyDustOre).when(c => c.randomChance(0.1)));

			// Stone ores
			global.ORE_BEARING_STONES.forEach(stoneType => {

				let stoneTypeMaterial = GTMaterials.get(global.BIG_ROCK_TABLE[stoneType === "pyroxenite" ? "blackstone" : stoneType].material);
				
				let stoneTypeDust = ChemicalHelper.get(TagPrefix.dust, stoneTypeMaterial, 1)
				let namespace = material === $GreateMaterials.RoseQuartz ? 'greate' : 'gtceu';

				// break with pickaxe/mining hammer/drill/mining machine
				event.addBlockLootModifier(`${namespace}:${stoneType}_${material.getName()}_ore`)
					.removeLoot(Ingredient.all)
					.addWeightedLoot([
						richRawOre.withChance(0.2),
						normalRawOre.withChance(0.6),
						poorRawOre.withChance(0.2)
					])
					.addLoot(LootEntry.of(stoneTypeDust).when(c => c.randomChance(0.2)))
					.addLoot(LootEntry.of(tinyDustOre).when(c => c.randomChance(0.02)));

				// break with hammer
				event.addBlockLootModifier(`${namespace}:${stoneType}_${material.getName()}_ore`)
					.matchMainHand('#forge:tools/hammers')
					.removeLoot(Ingredient.all)
					.addLoot(LootEntry.of(GTBlocks.COBBLE_BLOCKS.get(TagPrefix.get(stoneType)).get().getBlock().id));
			})
		}
	})
}