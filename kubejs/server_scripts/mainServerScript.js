// priority: 499

ServerEvents.highPriorityData(event => {
    // register datapacks here
})

ServerEvents.tags('block', event => {
    // register blocktags here
})

ServerEvents.tags('item', event => {
    // register itemtags here
    event.add('forge:ingots/galvanized_iron', 'kubejs:galvanized_iron');
})

ServerEvents.recipes(event => {
    newCreateRecipes(event)
    removeReworkedRecipes(event)
    registerMinecraftRecipes(event)
    newItemsCreate(event)
})

LootJS.modifiers((event) => {
    modifyLootGT(event)
});