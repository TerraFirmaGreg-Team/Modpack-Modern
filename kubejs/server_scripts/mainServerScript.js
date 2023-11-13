// priority: 499

ServerEvents.highPriorityData(event => {
    registerTFCData(event)
})

ServerEvents.tags('block', event => {
    
})

ServerEvents.tags('item', event => {
    registerCreateTags(event)
    registerTFCTags(event)
})

ServerEvents.recipes(event => {
    registerSBRecipes(event)
    registerCreateRecipes(event)
    registerExtendedCraftingRecipes(event)
    registerMinecraftRecipes(event)
    registerTFCRecipes(event)
})

LootJS.modifiers((event) => {
    modifyLootGT(event)
});