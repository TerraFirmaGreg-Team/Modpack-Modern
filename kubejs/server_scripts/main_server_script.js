// priority: 1

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
    registerAdvancedPeripheralsItemTags(event)
    registerAE2ItemTags(event)
    registerAFCItemTags(event)
    registerAlekiroofsItemTags(event)
    registerAlekishipsItemTags(event)
    registerAsticorCartsItemTags(event)
    registerBeneathItemTags(event)
    registerChalkItemTags(event);
    registerChiselAndBitsItemTags(event)
    registerComputerCraftItemTags(event)
    registerConstructionWandItemTags(event)
    registerCreateItemTags(event)
    registerCreateAdditionsItemTags(event)
    registerCreateConnectedItemTags(event)
    registerCreateDecoItemTags(event)
    registerDiggerHelmetItemTags(event)
    registerEndermanOverhaulItemTags(event)
    registerEveryCompatItemTags(event)
    registerExposureItemTags(event)
    registerExtendedAE2ItemTags(event)
    registerFirmaCivItemTags(event)
    registerFirmaLifeItemTags(event)
    registerFramedBlocksItemTags(event)
    registerFTBQuestsItemTags(event)
    registerGrapplemodItemTags(event)
    registerGreateItemTags(event)
    registerGTCEUItemTags(event)
    registerMegaCellsItemTags(event)
    registerMinecraftItemTags(event)
    registerMoreRedItemTags(event)
    registerHotOrNotItemTags(event)
    registerRailWaysItemTags(event)
    registerRnrItemTags(event)
    registerSophisticatedBackpacksItemTags(event)
    registerTFCAmbientalItemTags(event)
    registerTFCItemTags(event)
    registerTFCTextileItemTags(event)
    registerTFGItemTags(event)
    registerTFCLunchboxItemTags(event)
    registerVintageImprovementsItemTags(event)
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
    registerCreateDecoBlockTags(event)
    registerDomumOrnamentumBlockTags(event)
    registerEndermanOverhaulBlockTags(event)
    registerExtendedAE2BlockTags(event)
    registerFirmaCivBlockTags(event)
    registerFirmaLifeBlockTags(event)
    registerFramedBlocksBlockTags(event)
    registerFTBQuestsBlockTags(event)
    registerGreateBlockTags(event)
    registerGTCEUBlockTags(event)
    registerMegaCellsBlockTags(event)
    registerMinecraftBlockTags(event)
    registerMoreRedBlockTags(event)
    registerHotOrNotBlockTags(event)
    registerRailWaysBlockTags(event)
    registerSophisticatedBackpacksBlockTags(event)
    registerTFCBlockTags(event)
    registerTFGBlockTags(event)
    registerVintageImprovementsBlockTags(event)
})

/**
 * Событие регистрации жидкость-тэгов.
 */
ServerEvents.tags('fluid', event => {
    registerAFCFluidTags(event)
    registerCreateFluidTags(event)
    registerCreateAdditionsFluidTags(event)
    registerGTCEUFluidTags(event)
    registerGreateFluidTags(event)
    registerFirmaLifeFluidTags(event)
    registerTFCFluidTags(event)
    registerTFGFluidTags(event)
    registerVintageImprovementsFluidTags(event)
})

/**
 * Событие регистрации тегов структур.
 */
ServerEvents.tags('worldgen/placed_feature', event => {
    // Remove default veins
    event.removeAll('tfc:in_biome/veins')

    registerTFCPlacedFeatures(event)
    registerTFGPlacedFeatures(event)
})

ServerEvents.tags('worldgen/biome', event => {
    registerTFCBiomeTags(event)
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
    registerTFCDataForChalk(event);
    registerTFCDataForGTCEU(event)
    registerTFCDataForImmersiveAircraft(event);
    registerTFCDataForSophisticatedBackpacks(event)
    registerTFCDataForTFC(event)
    registerTFCDataForTFCBetterBF(event)
    registerTFCDataForTFCLunchbox(event)
    registerTFCDataForWaterFlasks(event)
    registerTFCDataForFirmalife(event)
})

/**
 * Событие регистрации лут-тейблов.
 * Срабатывает до инициализации рецептов, но после датапаков и тегов.
 */
LootJS.modifiers((event) => {
    registerGTCEULoots(event)
    registerLootrLoots(event)
    registerPrimitiveCreatesLoots(event)
    registerTFCLoots(event)
    registerTFGLoots(event)
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
    registerAdvancedPeripheralsRecipes(event)
    registerAlekishipsRecipes(event)
    registerAE2Recipes(event)
    registerAFCRecipes(event)
    registerAsticorCartsRecipes(event)
    registerAE2InsertExportCardRecipes(event)
    registerAE2NetworkAnalyzerRecipes(event)
    registerAE2WTLibRecipes(event)
    registerBeneathRecipes(event)
    registerBuildingGadgetsRecipes(event)
    registerChalkRecipes(event);
    registerChiselAndBitsRecipes(event)
    registerComfortsRecipes(event);
    registerComputerCraftRecipes(event)
    registerCccBridgeRecipes(event)
    registerConstructionwandRecipes(event)
    registerCreateRecipes(event)
    registerCreateAdditionsRecipes(event)
    registerCreateConnectedRecipes(event)
    registerCreatedecoRecipes(event)
    registerCreateHorsePowerBlockRecipes(event)
    registerDiggerHelmetRecipes(event)
    registerDomumOrnamentumRecipes(event)
    registerEndermanOverhaulRecipes(event)
    registerEveryCompatRecipes(event)
    registerExtendedAE2Recipes(event)
    registerExposureRecipes(event)
    registerEtchedRecipes(event)
    registerFirmaCivRecipes(event)
    registerFirmaLifeRecipes(event)
    registerFramedBlocksRecipes(event)
    registerFTBQuestsRecipes(event)
    registerGrapplingHookRecipes(event);
    registerGreateRecipes(event)
    registerGTCEURecipes(event);
    registerHandGliderRecipes(event)
    registerHotOrNotRecipes(event)
    registerImmersiveAircraftRecipes(event)
    registerMeasurementsRecipes(event)
    registerMegaCellsRecipes(event)
    registerMERequesterRecipes(event)
    registerMinecraftRecipes(event)
    registerMoreRedRecipes(event)
    registerRailWaysRecipes(event)
    registerRnrRecipes(event)
    registerSophisticatedBackpacksRecipes(event)
    registerSimplylightRecipes(event)
    registerTfceaRecipes(event)
    registerTFCRecipes(event)
    registerTFCBetterBFRecipes(event)
    registerTFCLunchBoxRecipes(event)
    registerTFGRecipes(event)
    registerTFCGroomingStationRecipes(event)
    registerTFCTextileRecipes(event)
    registerToolBeltRecipes(event)
    registerTreeTapRecipes(event)
    registerVintageImprovementsRecipes(event)
    registerWaterFlasksRecipes(event)
})