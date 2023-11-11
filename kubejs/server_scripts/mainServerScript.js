// priority: 499

ServerEvents.highPriorityData(event => {
    // register datapacks here
})

ServerEvents.tags('block', event => {
    // register blocktags here
})

ServerEvents.tags('item', event => {
    registerTFCTags(event)
})

ServerEvents.recipes(event => {
    registerMinecraftRecipes(event)
    registerTFCRecipes(event)
})

LootJS.modifiers((event) => {
    modifyLootGT(event)
});