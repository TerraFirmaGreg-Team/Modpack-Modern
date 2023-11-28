// priority: 1

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
    registerMinecraftItemTags(event)
    registerTFCItemTags(event)
    registerCreateTags(event)
})

/**
 * Событие регистрации блок-тэгов.
 */
ServerEvents.tags('block', event => {
    registerTFCBlockTags(event)
})

/**
 * Событие регистрации жидкость-тэгов.
 */
ServerEvents.tags('fluid', event => {
    registerTFCFluidTags(event)
})

/**
 * Здесь регистрируются файлы датапаков (json).
 * Срабатывает до инициализации рецептов.
 */
ServerEvents.highPriorityData(event => {
    registerTFCData(event)
})

/**
 * Событие регистрации рецептов.
 * Срабатывает после инициализации датапаков.
 */
ServerEvents.recipes(event => {
    registerMinecraftRecipes(event)
    registerTFCRecipes(event)
    registerGTCEURecipes(event)
    registerCreateRecipes(event)
    registerAE2Recipes(event)
    registerAE2WTLibRecipes(event)
    registerComputerCraftRecipes(event)
    registerAdAstraRecipes(event)
    registerTreeTapRecipes(event)
    registerMoreRedRecipes(event)
    registerSophisticatedBackpacksRecipes(event)
    registerSmallShipsRecipes(event)
    registerExtendedCraftingRecipes(event)
})

/**
 * Событие модификации лута.
 */
LootJS.modifiers((event) => {
    modifyLootGT(event)
});