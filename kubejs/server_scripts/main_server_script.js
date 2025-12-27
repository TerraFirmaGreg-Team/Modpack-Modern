// priority: 1
"use strict";

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
	registerAdAstraItemTags(event)
	registerAdvancedPeripheralsItemTags(event)
	registerAE2ItemTags(event)
	registerAFCItemTags(event)
	registerAlekiroofsItemTags(event)
	registerAlekishipsItemTags(event)
	registerAsticorCartsItemTags(event)
	registerBeneathItemTags(event)
	registerChalkItemTags(event);
	registerComputerCraftItemTags(event)
	registerConstructionWandItemTags(event)
	registerCreateItemTags(event)
	registerCreateAdditionsItemTags(event)
	registerCreateConnectedItemTags(event)
	registerCreateDecoItemTags(event)
	registerCreateFactoryLogisticsItemTags(event)
	registerDeaFissionItemTags(event)
	registerDomumOrnamentumItemTags(event)
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
	registerImmersiveAircraftItemTags(event)
	registerMegaCellsItemTags(event)
	registerMinecraftItemTags(event)
	registerModernMarkingsItemTags(event)
	registerMoreRedItemTags(event)
	registerHotOrNotItemTags(event)
	registerPrimitiveCreaturesItemTags(event)
	registerRailWaysItemTags(event)
	registerRnrItemTags(event)
	registerSophisticatedBackpacksItemTags(event)
	registerSoulboundItemTags(event)
	registerSNSItemTags(event)
	registerSpeciesItemTags(event)
	registerTACZItemTags(event)
	registerTFCItemTags(event)
	registerTFCTextileItemTags(event)
	registerTFGItemTags(event)
	registerTFGItemTagsNuclear(event)
    registerTFCLunchboxItemTags(event)
	registerVintageImprovementsItemTags(event)
	registerWABItemTags(event)
})

/**
 * Событие регистрации блок-тэгов.
 */
ServerEvents.tags('block', event => {
	registerAdAstraBlockTags(event)
	registerAE2BlockTags(event)
	registerAFCBlockTags(event)
	registerAsticorCartsBlockTags(event)
	registerBeneathBlockTags(event)
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
	registerSpeciesBlockTags(event)
	registerTACZBlockTags(event)
	registerTFCBlockTags(event)
	registerTFGBlockTags(event)
	registerTFGBlockTagsNuclear(event)
	registerVintageImprovementsBlockTags(event)
	registerWABBlockTags(event)
})

/**
 * Событие регистрации жидкость-тэгов.
 */
ServerEvents.tags('fluid', event => {
	registerAFCFluidTags(event)
	registerAdAstraFluidTags(event)
	registerCreateFluidTags(event)
	registerCreateAdditionsFluidTags(event)
	registerGTCEUFluidTags(event)
	registerGreateFluidTags(event)
	registerHotOrNotFluidTags(event)
	registerFirmaLifeFluidTags(event)
	registerTFCFluidTags(event)
	registerTFGFluidTags(event)
	registerTFGFluidTagsNuclear(event)
	registerVintageImprovementsFluidTags(event)
})

ServerEvents.tags('worldgen/configured_feature', event => {
	registerTFGConfiguredFeatures(event)
})

/**
 * Событие регистрации тегов структур.
 */
ServerEvents.tags('worldgen/placed_feature', event => {
	// Remove default veins
	event.removeAll('tfc:in_biome/veins')

	registerTFGPlacedFeatures(event)
})

ServerEvents.tags('worldgen/biome', event => {
	registerAdAstraBiomeTags(event)
	registerCreatePickyWheelsBiomeTags(event)
	registerTFGBiomeTags(event)
})

ServerEvents.tags('entity_type', event => {
	registerTFGEntityTypeTags(event)
	registerWABEntityTypeTags(event)
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
	registerTFCDataForAdAstra(event);
	registerTFCDataForArborFirmaCraft(event)
	registerTFCDataForChalk(event);
	registerTFCDataForCreateAddition(event);
	registerTFCDataForFirmalife(event)
	registerTFCDataForGTCEU(event)
	registerTFCDataForImmersiveAircraft(event);
	registerTFCDataForMinecraft(event)
	registerTFCDataForSophisticatedBackpacks(event)
	registerTFCDataForTACZ(event)
	registerTFCDataForTFC(event)
	registerTFCDataForTFCBetterBF(event)
	registerTFCDataForTFCLunchbox(event)
	registerTFCDataForTFG(event)
	registerTFCDataForWaterFlasks(event)
	registerWABData(event)
	registerSpeciesData(event)
})

/**
 * Событие регистрации лут-тейблов.
 * Срабатывает до инициализации рецептов, но после датапаков и тегов.
 */
LootJS.modifiers((event) => {
	registerAdAstraLoots(event)
	registerTFGOreLoots(event)
	registerLootrLoots(event)
	registerPrimitiveCreaturesLoots(event)
	registerSpeciesLoots(event)
	registerTFCLoots(event)
	registerTFGLoots(event)
	registerWansAncientBeastsLoots(event)
});

/**
 * Событие регистрации рудных жил.
 * Не представляю когда срабатывает, но явно после тегов и датапаков.
 */
GTCEuServerEvents.oreVeins(event => {
	event.removeAll()
})

GTCEuServerEvents.fluidVeins(event => {
	registerGTCEUBedrockFluidVeins(event)
})

/**
 * Событие регистрации рецептов.
 * Срабатывает после инициализации датапаков и тегов.
 */
ServerEvents.recipes(event => {
	registerAdAstraRecipes(event)
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
	registerComfortsRecipes(event);
	registerComputerCraftRecipes(event)
	//registerCccBridgeRecipes(event)
	registerConstructionwandRecipes(event)
	registerCreateRecipes(event)
	registerCreateAdditionsRecipes(event)
	registerCreateConnectedRecipes(event)
	registerCreatedecoRecipes(event)
	registerCreateFactoryLogisticsRecipes(event)
	registerCreateHorsePowerBlockRecipes(event)
	registerCreateHypertubeRecipes(event)
	registerDeaFissionRecipes(event)
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
	registerMacawsForTFCRecipes(event)
	registerMeasurementsRecipes(event)
	registerMegaCellsRecipes(event)
	registerMERequesterRecipes(event)
	registerMinecraftRecipes(event)
	registerModernMarkingRecipes(event)
	registerMoreRedRecipes(event)
	registerPrimitiveCreaturesRecipes(event)
	registerRailWaysRecipes(event)
	registerRnrRecipes(event)
	registerSandwormRecipes(event)
	registerSophisticatedBackpacksRecipes(event)
	registerSoulboundRecipes(event)
	registerSimplylightRecipes(event)
	registerSNSRecipes(event)
	registerSpeciesRecipes(event)
	registerTACZRecipes(event)
	registerTFCRecipes(event)
	registerTFCAmbientalRecipes(event)
	registerTFCBetterBFRecipes(event)
	registerTFCLunchBoxRecipes(event)
	registerTFCScrapingRecipes(event)
	registerTFCGroomingStationRecipes(event)
	registerTFCGurmanRecipes(event)
	registerTFGRecipes(event)
	registerTFCTextileRecipes(event)
	registerToolBeltRecipes(event)
	registerVintageImprovementsRecipes(event)
	registerWaterFlasksRecipes(event)
	registerWABRecipes(event)
})

TaCZServerEvents.gunIndexLoad((event) => {
	gunIndexLogic(event)
})

TaCZServerEvents.ammoIndexLoad((event) => {
	ammoIndexLogic(event)
})

TaCZServerEvents.attachmentIndexLoad((event) => {
	attachmentIndexLogic(event)
})

TaCZServerEvents.gunDataLoad((event) => {
	gunDataLogic(event)
})

TaCZServerEvents.attachmentDataLoad((event) => {
	attachmentDataLogic(event)
})