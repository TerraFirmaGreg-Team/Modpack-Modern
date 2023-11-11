// priority: 499

ServerEvents.highPriorityData(event => {
    // register datapacks here
})

ServerEvents.tags('block', event => {
    // register blocktags here
})

ServerEvents.tags('item', event => {
    // register itemtags here
    registerCreateTags(event)
    registerTFCTags(event)
})

ServerEvents.recipes(event => {
    registerCreateRecipes(event)
    registerExtendedCraftingRecipes(event)
    registerMinecraftRecipes(event)
})

LootJS.modifiers((event) => {
    modifyLootGT(event)
});