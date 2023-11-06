// priority: 0

const modifyLootGT = (event) => {
    global.allTFCStoneTypeNames.forEach(stoneType => {
        GTRegistries.MATERIALS.forEach(material => {
            if (material.hasProperty(PropertyKey.ORE)) {
                event.addBlockLootModifier(`gtceu:tfc_${stoneType}_${material}_ore`)
                    .removeLoot(Ingredient.all)
                    .addWeightedLoot([
                        Item.of(`gtceu:rich_raw_${material}`).withChance(25),
                        Item.of(`gtceu:raw_${material}`).withChance(50),
                        Item.of(`gtceu:poor_raw_${material}`).withChance(25)
                    ]);
            }
        })
    })
}