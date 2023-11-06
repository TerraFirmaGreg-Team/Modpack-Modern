// priority: 499

ServerEvents.highPriorityData(event => {
    // register datapacks here
})

ServerEvents.tags('block', event => {
    // register blocktags here
})

ServerEvents.tags('item', event => {
    // register itemtags here
})

ServerEvents.recipes(event => {
    registerMinecraftRecipes(event)
})

LootJS.modifiers((event) => {
    modifyLootGT(event)
});