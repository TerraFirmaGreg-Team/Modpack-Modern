// priority: 1

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
    registerAE2ItemTags(event)
    registerAlekiRoofsItemTags(event)
    registerAlekiShipsItemTags(event)
    registerAsticorCartsItemTags(event)
    registerBeneathItemTags(event)
    registerChiselAndBitsItemTags(event)
    registerComputerCraftItemTags(event)
    registerCreateItemTags(event)
    registerCreateAdditionsItemTags(event)
    registerCreateConnectedItemTags(event)
    registerEveryCompatItemTags(event)
    registerCreateLowHeatedItemTags(event)
    registerExtendedAE2ItemTags(event)
    registerFirmaCivItemTags(event)
    registerFirmaLifeItemTags(event)
    registerFramedBlocksItemTags(event)
    registerFTBQuestsItemTags(event)
    registerGregTechItemTags(event)
    registerMegaCellsItemTags(event)
    registerMinecraftItemTags(event)
    registerMoreRedItemTags(event)
    // registerHotOrNotItemTags(event)
    registerRailWaysItemTags(event)
    registerSophisticatedBackpacksItemTags(event)
    registerTFCAmbientalItemTags(event)
    registerTFCItemTags(event)
    registerTFGItemTags(event)
})

/**
 * Событие регистрации блок-тэгов.
 */
ServerEvents.tags('block', event => {
    registerAE2BlockTags(event)
    registerAlekiRoofsBlockTags(event)
    registerAlekiShipsBlockTags(event)
    registerAsticorCartsBlockTags(event)
    registerBeneathBlockTags(event)
    registerChiselAndBitsBlockTags(event)
    registerComputerCraftBlockTags(event)
    registerCreateBlockTags(event)
    registerCreateAdditionsBlockTags(event)
    registerExtendedAE2BlockTags(event)
    registerFirmaCivBlockTags(event)
    registerFirmaLifeBlockTags(event)
    registerFramedBlocksBlockTags(event)
    registerFTBQuestsBlockTags(event)
    registerGregTechBlockTags(event)
    registerMegaCellsBlockTags(event)
    registerMinecraftBlockTags(event)
    registerMoreRedBlockTags(event)
    // registerHotOrNotBlockTags(event)
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
 * Событие регистрации биом-тегов.
 */
ServerEvents.tags('worldgen/biome', event => {
    registerTFCBiomeTags(event)
    registerCreatePickyWheelsBiomeTags(event)
})

/**
 * Событие регистрации тегов структур.
 */
ServerEvents.tags('worldgen/placed_feature', event => {
    registerBeneathPlacedFeatures(event)
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
    registerTFCDataForGregTech(event)
    registerTFCDataForTFC(event)
    registerTFCDataForTreeTap(event)
    registerTFCDataForWaterFlasks(event)
})

/**
 * Событие регистрации рецептов.
 * Срабатывает после инициализации датапаков и тегов.
 */
ServerEvents.recipes(event => {
    registerAE2Recipes(event)
    registerAdvancedPeripheralsRecipes(event)
    registerAlekiRoofsRecipes(event)
    registerAlekiShipsRecipes(event)
    registerAsticorCartsRecipes(event)
    registerAE2InsertExportCardRecipes(event)
    registerAE2NetworkAnalyzerRecipes(event)
    registerAE2WTLibRecipes(event)
    registerChiselAndBitsRecipes(event)
    registerComputerCraftRecipes(event)
    registerCreateRecipes(event)
    registerCreateAdditionsRecipes(event)
    registerCreateLowHeatedRecipes(event)
    registerCreateConnectedRecipes(event)
    registerEveryCompatRecipes(event)
    registerExtendedAE2Recipes(event)
    registerExposureRecipes(event)
    registerEtchedRecipes(event)
    registerFirmaCivRecipes(event)
    registerFirmaLifeRecipes(event)
    registerFramedBlocksRecipes(event)
    registerFTBQuestsRecipes(event)
    registerGregTechRecipes(event)
    registerHandGliderRecipes(event)
    // registerHotOrNotRecipes(event)
    registerMERequesterRecipes(event)
    registerMegaCellsRecipes(event)
    registerMinecraftRecipes(event)
    registerMoreRedRecipes(event)
    registerRailWaysRecipes(event)
    registerRFToolsRecipes(event)
    registerStorageDrawersRecipes(event)
    registerSophisticatedBackpacksRecipes(event)
    registerTfceaRecipes(event)
    registerTFCRecipes(event)
    registerTFGRecipes(event)
    registerTFCGroomingStationRecipes(event)
    registerToolBeltRecipes(event)
    registerTreeTapRecipes(event)
    registerWaterFlasksRecipes(event)
})