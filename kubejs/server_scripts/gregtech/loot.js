// priority: 0

const registerGTCEULoots = (event) => {
    
    global.TFC_STONE_TYPES.forEach(stoneType => {
        GTRegistries.MATERIALS.forEach(material => {
            if (material.hasProperty(PropertyKey.ORE)) {
                
                let richRawOre = ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1)
                let normalRawOre = ChemicalHelper.get(TagPrefix.rawOre, material, 1)
                let poorRawOre = ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1).withChance(0.2)

                if (!richRawOre.isEmpty() && !normalRawOre.isEmpty() && !poorRawOre.isEmpty()) {
                    
                    event.addBlockLootModifier(`gtceu:${stoneType}_${material}_ore`)
                        .removeLoot(Ingredient.all)
                        .addWeightedLoot([
                            richRawOre.withChance(0.2),
                            normalRawOre.withChance(0.6),
                            poorRawOre.withChance(0.2)
                        ]);
                }

            }
        })
    })

}
