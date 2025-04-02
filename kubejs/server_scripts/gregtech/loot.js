// priority: 0

const registerGTCEULoots = (event) => {

	GTMaterialRegistry.getRegisteredMaterials().forEach(material => {

		if (material.hasProperty(PropertyKey.ORE)) {

			// Indicator buds
			if (material.hasProperty(PropertyKey.GEM)) {
				let normalDrop = ChemicalHelper.get(TagPrefix.gemChipped, material, 1)
				let sawDrop = ChemicalHelper.get(TagPrefix.gem, material, 1)

				let bud = `gtceu:${material.getName()}_bud_indicator`;

				event.addBlockLootModifier(bud)
					.matchMainHand("tfc:gem_saw")
					.addLoot(sawDrop);

				event.addBlockLootModifier(bud)
					.not(n => n.matchMainHand("tfc:gem_saw"))
					.addLoot(normalDrop);
			}
			
			let richRawOre = ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1)
			let normalRawOre = ChemicalHelper.get(TagPrefix.rawOre, material, 1)
			let poorRawOre = ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1)

			// Raw ore blocks
			let rawOreBlock = `:${ChemicalHelper.get(TagPrefix.rawOreBlock, material, 1).getItem()}`;
			if (material == GTMaterials.Copper || material == GTMaterials.Gold || material == GTMaterials.Iron)
				rawOreBlock = "minecraft" + rawOreBlock;
			else
				rawOreBlock = "gtceu" + rawOreBlock;

			event.addBlockLootModifier(rawOreBlock)
				.removeLoot(ItemFilter.ALWAYS_TRUE)
				.addWeightedLoot([4,6],
				[
					richRawOre.withChance(0.2),
					normalRawOre.withChance(0.6),
					poorRawOre.withChance(0.2)
				]);

			// Stone ores
			global.ORE_BEARING_STONES.forEach(stoneType => {

				let stoneTypeMaterial = TFGHelpers.getMaterial(stoneType)

				// Material doesn't work here because of reasons
				if (stoneTypeMaterial == null) {
					if (stoneType == "pyroxenite")
						stoneTypeMaterial = GTMaterials.Blackstone;
					else if (stoneType == "deepslate")
						stoneTypeMaterial = GTMaterials.Deepslate;
				}

				let stoneTypeDust = ChemicalHelper.get(TagPrefix.dust, stoneTypeMaterial, 1)

				if (stoneTypeDust == null)
					console.log(`dust type is null: ${stoneTypeDust}`)

				event.addBlockLootModifier(`gtceu:${stoneType}_${material.getName()}_ore`)
					.removeLoot(ItemFilter.ALWAYS_TRUE)
					.addWeightedLoot([
						richRawOre.withChance(0.2),
						normalRawOre.withChance(0.6),
						poorRawOre.withChance(0.2)
					])
					.addLoot(
						LootEntry.of(stoneTypeDust).when((c) => c.randomChance(0.25))
					)
			})
		}
	})
}

