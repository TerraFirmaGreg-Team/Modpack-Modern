// priority: 0

const registerGTCEULoots = (event) => {
    
    global.TFC_STONE_TYPES.forEach(stoneType => {
        GTRegistries.MATERIALS.forEach(material => {
            if (material.hasProperty(PropertyKey.ORE)) {
                event.addBlockLootModifier(`gtceu:${stoneType}_${material}_ore`)
                    .removeLoot(Ingredient.all)
                    .addWeightedLoot([
                        ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1).withChance(0.2),
                        ChemicalHelper.get(TagPrefix.rawOre, material, 1).withChance(0.6),
                        ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1).withChance(0.2)
                    ]);
            }
        })
    })

}
