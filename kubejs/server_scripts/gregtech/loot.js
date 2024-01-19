// priority: 0

const registerGTCEULoots = (event) => {
    
    global.TFC_STONE_TYPES.forEach(stoneType => {
        GTRegistries.MATERIALS.forEach(material => {
            if (material.hasProperty(PropertyKey.ORE)) {
                
                let stoneTypeMaterial = GTMaterials.get(stoneType)
                let stoneTypeDust = null

                if (!stoneTypeMaterial != null) stoneTypeDust = ChemicalHelper.get(TagPrefix.dust, stoneTypeMaterial, 1)

                let richRawOre = ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1)
                let normalRawOre = ChemicalHelper.get(TagPrefix.rawOre, material, 1)
                let poorRawOre = ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1).withChance(0.2)

                let blockName = `gtceu:${stoneType}_${material.getName()}_ore`

                if (!richRawOre.isEmpty() && !normalRawOre.isEmpty() && !poorRawOre.isEmpty()) {
                    
                    event.addBlockLootModifier(blockName)
                        .matchMainHand('#minecraft:pickaxes')
                        .removeLoot(Ingredient.all)
                        .addWeightedLoot([
                            richRawOre.withChance(0.2),
                            normalRawOre.withChance(0.6),
                            poorRawOre.withChance(0.2)
                        ]);
                }
                
                if (!stoneTypeDust.isEmpty()) {
                    event.addBlockLootModifier(blockName)
                        .matchMainHand('#minecraft:pickaxes')
                        .addLoot(
                            LootEntry.of(stoneTypeDust).when((c) => c.randomChance(0.25))
                        )
                }
            }
        })
    })

}
