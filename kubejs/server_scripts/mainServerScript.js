// priority: 499

ServerEvents.highPriorityData(event => {
    // register datapacks here
})

ServerEvents.tags('block', event => {
    
})

ServerEvents.tags('item', event => {
    registerCreateTags(event)
    registerTFCTags(event)
})

ServerEvents.recipes(event => {
    registerCreateRecipes(event)
    registerExtendedCraftingRecipes(event)
    registerMinecraftRecipes(event)
    registerTFCRecipes(event)
    registersophisticatedbackpacksRecipes(event)
})

LootJS.modifiers((event) => {
    modifyLootGT(event)
});