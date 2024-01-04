// priority: 0

const registerGTCEULoots = (event) => {
    
    global.TFC_STONE_TYPES.forEach(stoneType => {
        GTRegistries.MATERIALS.forEach(material => {
            if (material.hasProperty(PropertyKey.ORE)) {
                event.addBlockLootModifier(`gtceu:${stoneType}_${material}_ore`)
                    .removeLoot(Ingredient.all)
                    .addWeightedLoot([
                        Item.of(`gtceu:rich_raw_${material}`).withChance(20),
                        Item.of(`gtceu:raw_${material}`).withChance(60),
                        Item.of(`gtceu:poor_raw_${material}`).withChance(20)
                    ]);
            }
        })
    })

}
