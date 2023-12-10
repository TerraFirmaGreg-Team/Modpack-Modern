// priority: 1

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
    registerTFCItemTags(event)
    // registerMinecraftItemTags(event)
    // registerCreateItemTags(event)
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
 * Событие регистрации генератора структур.
 */
ServerEvents.tags('worldgen/placed_feature', event => {
    registerTFCPlacedFeatures(event)
    registerFirmaLifePlacedFeatures(event)
})

/**
 * Здесь регистрируются файлы датапаков общие.
 * Срабатывает до инициализации рецептов.
 */
ServerEvents.highPriorityData(event => {
})

/**
 * Здесь регистрируются файлы датапаков TFC.
 * Срабатывает до инициализации рецептов.
 */
TFCEvents.data(event => {
    registerTFCDataForTFC(event)
    registerTFCDataForFirmaLife(event)
    registerTFCDataForWaterFlasks(event)
    registerTFCDataForGTCEU(event)
})

/**
 * Событие регистрации рецептов.
 * Срабатывает после инициализации датапаков.
 */
ServerEvents.recipes(event => {
    registerTFCRecipes(event)
    registerFirmaLifeRecipes(event)
    registerWaterFlasksRecipes(event)
    // registerMinecraftRecipes(event)
    // registerGTCEURecipes(event)
    // registerCreateRecipes(event)
    // registerAE2Recipes(event)
    // registerComputerCraftRecipes(event)
    // registerAdAstraRecipes(event)
    // registerTreeTapRecipes(event)
    // registerMoreRedRecipes(event)
    // registerSophisticatedBackpacksRecipes(event)
    // registerSmallShipsRecipes(event)
    // registerExtendedCraftingRecipes(event)
    // registerToolBeltRecipes(event)
})

/**
 * Событие модификации лута.
 */
LootJS.modifiers((event) => {
    modifyLootGT(event)
});


