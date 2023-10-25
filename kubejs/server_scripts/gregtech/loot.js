// priority: 0

const modifyLootGT = (event) => {
    global.allTFCStoneTypeNames.forEach(stoneType => {
        GTRegistries.MATERIALS.forEach(material => {
            if (material.hasProperty($PropertyKey.ORE)) {
                
                const blockName = `gtceu:tfc_${stoneType}_${material}_ore`

                event.addBlockLootModifier(blockName)
                    .removeLoot(Ingredient.all)
                    .addWeightedLoot([
                        Item.of(`gtceu:${material}_rich_raw`).withChance(25),
                        Item.of(`gtceu:raw_${material}`).withChance(50),
                        Item.of(`gtceu:${material}_poor_raw`).withChance(25)
                    ]);
            }
        })
    })
}