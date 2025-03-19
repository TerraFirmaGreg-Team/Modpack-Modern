// priority: 1

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
    registerAE2ItemTags(event)
    registerAFCItemTags(event)
    registerAlekishipsItemTags(event)
    registerAsticorCartsItemTags(event)
    registerBeneathItemTags(event)
    registerChiselAndBitsItemTags(event)
    registerComputerCraftItemTags(event)
    registerCreateItemTags(event)
    registerCreateAdditionsItemTags(event)
    registerCreateConnectedItemTags(event)
    registerEndermanOverhaulItemTags(event)
    registerEveryCompatItemTags(event)
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
    registerTFCAmbientalItemTags(event)
    registerTFCItemTags(event)
    registerTFGItemTags(event)
})

/**
 * Событие регистрации блок-тэгов.
 */
ServerEvents.tags('block', event => {
    registerAE2BlockTags(event)
    registerAFCBlockTags(event)
    registerAsticorCartsBlockTags(event)
    registerBeneathBlockTags(event)
    registerChiselAndBitsBlockTags(event)
    registerComputerCraftBlockTags(event)
    registerCreateBlockTags(event)
    registerCreateAdditionsBlockTags(event)
    registerEndermanOverhaulBlockTags(event)
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
    registerTFGBlockTags(event)
})

/**
 * Событие регистрации жидкость-тэгов.
 */
ServerEvents.tags('fluid', event => {
    registerAFCFluidTags(event)
    registerCreateFluidTags(event)
    registerCreateAdditionsFluidTags(event)
    registerFirmaLifeFluidTags(event)
    registerTFCFluidTags(event)
})

/**
 * Событие регистрации тегов структур.
 */
ServerEvents.tags('worldgen/placed_feature', event => {
    registerFirmaLifePlacedFeatures(event)
    registerTFCPlacedFeatures(event)
    registerTFGPlacedFeatures(event)
})

ServerEvents.tags('worldgen/biome', event => {
    registerTFGBiomeTags(event)
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
    registerTFCDataForArborFirmaCraft(event)
    registerTFCDataForGTCEU(event)
    registerTFCDataForTFC(event)
    registerTFCDataForTFCBetterBF(event)
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
    event.removeAll()
})

/**
 * Событие регистрации рецептов.
 * Срабатывает после инициализации датапаков и тегов.
 */
ServerEvents.recipes(event => {
    registerAlekishipsRecipes(event)
    registerAE2Recipes(event)
    registerAFCRecipes(event)
    registerAsticorCartsRecipes(event)
    registerAE2InsertExportCardRecipes(event)
    registerAE2NetworkAnalyzerRecipes(event)
    registerAE2WTLibRecipes(event)
    registerBeneathRecipes(event)
    registerChiselAndBitsRecipes(event)
    registerComputerCraftRecipes(event)
    registerCreateRecipes(event)
    registerCreateAdditionsRecipes(event)
    registerCreateConnectedRecipes(event)
    registerEveryCompatRecipes(event)
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
    registerTFCBetterBFRecipes(event)
    registerTFGRecipes(event)
    registerTFCGroomingStationRecipes(event)
    registerToolBeltRecipes(event)
    registerTreeTapRecipes(event)
    registerWaterFlasksRecipes(event)
})
