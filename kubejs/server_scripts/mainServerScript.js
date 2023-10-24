// priority: 0

ServerEvents.highPriorityData(event => {
    addOreVeins(event);
})

ServerEvents.tags('block', event => {
    registerBlockTagsGT(event)
})

ServerEvents.tags('item', event => {
    registerItemTagsGT(event)
})

ServerEvents.recipes(event => {
    registerGTrecipes(event)
})

LootJS.modifiers((event) => {
    modifyLootGT(event)
});