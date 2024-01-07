// priority: 0

const registerGTCEULoots = (event) => {
    
    global.TFC_STONE_TYPES.forEach(stoneType => {
        GTRegistries.MATERIALS.forEach(material => {
            if (material.hasProperty(PropertyKey.ORE)) {
                event.addBlockLootModifier(`gtceu:${stoneType}_${material}_ore`)
                    .removeLoot(Ingredient.all)
                    .addWeightedLoot([
                        Item.of(`#forge:rich_raw_materials/${material}`).withChance(0.2),
                        Item.of(`#forge:raw_materials/${material}`).withChance(0.6),
                        Item.of(`#forge:poor_raw_materials/${material}`).withChance(0.2)
                    ]);
            }
        })
    })

}
