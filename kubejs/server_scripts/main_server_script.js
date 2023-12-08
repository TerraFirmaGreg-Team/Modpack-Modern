// priority: 1

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
    //registerMinecraftItemTags(event)
    registerTFCItemTags(event)
    //registerCreateTags(event)
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
 * Событие регистрации установки структур.
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
    // registerTFCDataPacks(event)
})

/**
 * Здесь регистрируются файлы датапаков TFC.
 * Срабатывает до инициализации рецептов.
 */
TFCEvents.data(event => {
    registerTFCData(event)
})

/**
 * Событие регистрации рецептов.
 * Срабатывает после инициализации датапаков.
 */
ServerEvents.recipes(event => {
    /*
    registerMinecraftRecipes(event)
    registerTFCRecipes(event)
    registerGTCEURecipes(event)
    registerCreateRecipes(event)
    registerAE2Recipes(event)
    registerComputerCraftRecipes(event)
    registerAdAstraRecipes(event)
    registerTreeTapRecipes(event)
    registerMoreRedRecipes(event)
    registerSophisticatedBackpacksRecipes(event)
    registerSmallShipsRecipes(event)
    registerExtendedCraftingRecipes(event)
    registerToolBeltRecipes(event)*/
})

/**
 * Событие модификации лута.
 */
LootJS.modifiers((event) => {
    //modifyLootGT(event)
});


