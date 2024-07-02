// priority: 1

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
    registerAE2ItemTags(event)
    registerAsticorCartsItemTags(event)
    registerChiselAndBitsItemTags(event)
    registerComputerCraftItemTags(event)
    registerCreateItemTags(event)
    registerCreateAdditionsItemTags(event)
    registerExtendedAE2ItemTags(event)
    registerFirmaCivItemTags(event)
    registerFirmaLifeItemTags(event)
    registerFramedBlocksItemTags(event)
    registerFTBQuestsItemTags(event)
    registerGTCEUItemTags(event)
    registerMegaCellsItemTags(event)
    registerMinecraftItemTags(event)
    registerMoreRedItemTags(event)
    registerHotOrNotItemTags(event)
    registerRailWaysItemTags(event)
    registerSophisticatedBackpacksItemTags(event)
    registerTFCItemTags(event)
})

/**
 * Событие регистрации блок-тэгов.
 */
ServerEvents.tags('block', event => {
    registerAE2BlockTags(event)
    registerAsticorCartsBlockTags(event)
    registerChiselAndBitsBlockTags(event)
    registerComputerCraftBlockTags(event)
    registerCreateBlockTags(event)
    registerCreateAdditionsBlockTags(event)
    registerExtendedAE2BlockTags(event)
    registerFirmaCivBlockTags(event)
    registerFirmaLifeBlockTags(event)
    registerFramedBlocksBlockTags(event)
    registerFTBQuestsBlockTags(event)
    registerGTCEUBlockTags(event)
    registerMegaCellsBlockTags(event)
    registerMinecraftBlockTags(event)
    registerMoreRedBlockTags(event)
    registerHotOrNotBlockTags(event)
    registerRailWaysBlockTags(event)
    registerSophisticatedBackpacksBlockTags(event)
    registerTFCBlockTags(event)
})

/**
 * Событие регистрации жидкость-тэгов.
 */
ServerEvents.tags('fluid', event => {
    registerCreateFluidTags(event)
    registerCreateAdditionsFluidTags(event)
    registerFirmaLifeBlockTags(event)
    registerTFCFluidTags(event)
})

/**
 * Событие регистрации тегов структур.
 */
ServerEvents.tags('worldgen/placed_feature', event => {
    registerFirmaLifePlacedFeatures(event)
    registerTFCPlacedFeatures(event)
})

/**
 * Событие регистрации датапаков (Здесь можно регистрировать теги, данные, рецепты, общий метод короче).
 * Срабатывает до инициализации рецептов, но после тегов.
 */
ServerEvents.highPriorityData(event => {
    registerComputerCraftData(event)
})

/**
 * Событие регистрации датапаков для TFC (Здесь можно регистрировать теги, данные, рецепты, общий метод короче).
 * Срабатывает до инициализации рецептов, но после тегов.
 */
TFCEvents.data(event => {
    registerTFCDataForGTCEU(event)
    registerTFCDataForTFC(event)
    registerTFCDataForTreeTap(event)
    registerTFCDataForWaterFlasks(event)
})

/**
 * Событие регистрации лут-тейблов.
 * Срабатывает до инициализации рецептов, но после датапаков и тегов.
 */
LootJS.modifiers((event) => {
    registerGTCEULoots(event)
});

/**
 * Событие регистрации рудных жил.
 * Не представляю когда срабатывает, но явно после тегов и датапаков.
 */
GTCEuServerEvents.oreVeins(event => {
    // event.removeAll()
})

/**
 * Событие регистрации рецептов.
 * Срабатывает после инициализации датапаков и тегов.
 */
ServerEvents.recipes(event => {
    registerAE2Recipes(event)
    registerAsticorCartsRecipes(event)
    registerAE2InsertExportCardRecipes(event)
    registerAE2NetworkAnalyzerRecipes(event)
    registerAE2WTLibRecipes(event)
    registerChiselAndBitsRecipes(event)
    registerComputerCraftRecipes(event)
    registerCreateRecipes(event)
    registerCreateAdditionsRecipes(event)
    registerCreateConnectedRecipes(event)
    registerExtendedAE2Recipes(event)
    registerExposureRecipes(event)
    registerEtchedRecipes(event)
    registerFirmaCivRecipes(event)
    registerFirmaLifeRecipes(event)
    registerFramedBlocksRecipes(event)
    registerFTBQuestsRecipes(event)
    registerGTCEURecipes(event)
    registerHandGliderRecipes(event)
    registerHotOrNotRecipes(event)
    registerMegaCellsRecipes(event)
    registerMERequesterRecipes(event)
    registerMinecraftRecipes(event)
    registerMoreRedRecipes(event)
    registerRailWaysRecipes(event)
    registerSophisticatedBackpacksRecipes(event)
    registerTfceaRecipes(event)
    registerTFCRecipes(event)
    registerTFCGroomingStationRecipes(event)
    registerToolBeltRecipes(event)
    registerTreeTapRecipes(event)
    registerWaterFlasksRecipes(event)
})