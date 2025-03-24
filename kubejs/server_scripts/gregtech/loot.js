// priority: 0

const registerGTCEULoots = (event) => {

	// #region Indicator Buds

	GTMaterialRegistry.getRegisteredMaterials().forEach(material => {

		if (material.hasProperty(PropertyKey.ORE) && material.hasProperty(PropertyKey.GEM)) {

			let normalDrop = ChemicalHelper.get(TagPrefix.gemChipped, material, 1)
			let sawDrop = ChemicalHelper.get(TagPrefix.gem, material, 1)

			let bud = `gtceu:${material.getName()}_bud_indicator`

			console.log(`Geneating loot table for: ${bud}, ${normalDrop}, ${sawDrop}`)

			event.addBlockLootModifier(bud)
				.matchMainHand("tfc:gem_saw")
				.addLoot(sawDrop);

			event.addBlockLootModifier(bud)
				.not(n => n.matchMainHand("tfc:gem_saw"))
				.addLoot(normalDrop);
		}
	})

	// #endregion

	// #region Ores

	global.ORE_BEARING_STONES.forEach(stoneType => {
		GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
			if (material.hasProperty(PropertyKey.ORE)) {

				let stoneTypeMaterial = TFGHelpers.getMaterial(stoneType)
				let stoneTypeDust = null

				let richRawOre = ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1)
				let normalRawOre = ChemicalHelper.get(TagPrefix.rawOre, material, 1)
				let poorRawOre = ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1)

				//let crushedOre = ChemicalHelper.get(TagPrefix.crushed, material, 1)

				let blockName = `gtceu:${stoneType}_${material.getName()}_ore`

				let modifier = event.addBlockLootModifier(blockName)
					.removeLoot(ItemFilter.ALWAYS_TRUE)

				if (!richRawOre.isEmpty() && !normalRawOre.isEmpty() && !poorRawOre.isEmpty()) {

					modifier.addWeightedLoot([
						richRawOre.withChance(0.2),
						normalRawOre.withChance(0.6),
						poorRawOre.withChance(0.2)
					]);
				}

				if (stoneTypeMaterial != null) {
					stoneTypeDust = ChemicalHelper.get(TagPrefix.dust, stoneTypeMaterial, 1)
				
					if (!stoneTypeDust.isEmpty()) {

						modifier.addLoot(
							LootEntry.of(stoneTypeDust).when((c) => c.randomChance(0.25))
						)
					}
				}

				//if (!crushedOre.isEmpty()) {

				//	event.addBlockLootModifier(blockName)
				//		//.removeLoot(ItemFilter.ALWAYS_TRUE)
				//		.matchMainHand(Ingredient.of('#forge:tools/hammers'))
				//		.addLoot(Item.of(crushedOre))
				//		//.addWeightedLoot([
				//		//	crushedOre.withChance(0.8),
				//		//	crushedOre.withCount(2).withChance(0.2)
				//		//])
				//}
			}
		})
	})

	// #endregion
}
