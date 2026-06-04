// priority: 1
"use strict";

/**
 * Событие регистрации предмет-тэгов.
 */
ServerEvents.tags('item', event => {
	registerAdAstraItemTags(event)
	registerAE2ItemTags(event)
	registerAFCItemTags(event)
	registerArthropocolypseItemTags(event)
	registerBeneathItemTags(event)
	registerComputerCraftItemTags(event)
	registerConstructionWandItemTags(event)
	registerCopycatsItemTags(event)
	registerCreateItemTags(event)
	registerCreateAdditionsItemTags(event)
	registerCreateConnectedItemTags(event)
	registerCreateDecoItemTags(event)
	registerCreateFluidLogisticsItemTags(event)
	registerDomumOrnamentumItemTags(event)
	registerDiggerHelmetItemTags(event)
	registerEndermanOverhaulItemTags(event)
	registerEveryCompatItemTags(event)
	registerExposureItemTags(event)
	registerFirmaCivItemTags(event)
	registerFirmaLifeItemTags(event)
	registerFramedBlocksItemTags(event)
	registerFTBQuestsItemTags(event)
	registerGreateItemTags(event)
	registerGTCEUItemTags(event)
	registerMacawsForTFCItemTags(event)
	registerMinecraftItemTags(event)
	registerModernMarkingsItemTags(event)
	registerMTSItemTags(event)
	registerHotOrNotItemTags(event)
	registerPrimitiveCreaturesItemTags(event)
	registerRailWaysItemTags(event)
	registerRnrItemTags(event)
	registerSoulboundItemTags(event)
	registerSNSItemTags(event)
	registerSpeciesItemTags(event)
	registerTACZItemTags(event)
	registerTFCItemTags(event)
	registerTFCScrapingKnivesItemTags(event)
	registerTFGItemTags(event)
	registerTFGNuclearItemTags(event)
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
	registerBeneathBlockTags(event)
	registerBlockRunnerBlockTags(event)
	registerComputerCraftBlockTags(event)
	registerCreateBlockTags(event)
	registerCreateDecoBlockTags(event)
	registerDomumOrnamentumBlockTags(event)
	registerEndermanOverhaulBlockTags(event)
	registerFirmaLifeBlockTags(event)
	registerGTCEUBlockTags(event)
	registerMinecraftBlockTags(event)
	registerRailWaysBlockTags(event)
	registerRnrBlockTags(event)
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
	registerWansAncientBeastsBiomeTags(event)
})

ServerEvents.tags('entity_type', event => {
	registerTFGEntityTypeTags(event)
	registerWABEntityTypeTags(event)
})

ServerEvents.tags('block_entity_type', event => {
	registerCraftingStationBlockEntityTags(event)
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
	registerTFCDataForChimes(event);
	registerTFCDataForCreateAddition(event);
	registerTFCDataForFirmalife(event)
	registerTFCDataForGTCEU(event)
	registerTFCDataForImmersiveAircraft(event);
	registerTFCDataForMinecraft(event)
	registerTFCDataForMTS(event)
	registerTFCDataForMTSOCP(event)
	registerTFCDataForSophisticatedBackpacks(event)
	registerTFCDataForTACZ(event)
	registerTFCDataForTFC(event)
	registerTFCDataForTFCBetterBF(event)
	registerTFCDataForTFCLunchbox(event)
	registerTFCDataForTFG(event)
	registerTFCDataForWaterFlasks(event)
	registerTFCDataForRailways(event)
	registerWABData(event)
	registerSpeciesData(event)
})

/**
 * Событие регистрации лут-тейблов.
 * Срабатывает до инициализации рецептов, но после датапаков и тегов.
 */
LootJS.modifiers((event) => {
	registerAdAstraLoots(event)
	registerBeneathLoots(event)
	registerTFGRockLoots(event)
	registerTFGOreLoots(event)
	registerMinecraftLoots(event)
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
	registerArthropocolypseRecipes(event)
	registerAsticorCartsRecipes(event)
	registerAE2InsertExportCardRecipes(event)
	registerAE2NetworkAnalyzerRecipes(event)
	registerAE2WTLibRecipes(event)
	registerBeneathRecipes(event)
	registerBuildingGadgetsRecipes(event)
	registerChalkRecipes(event);
	registerChimesRecipes(event);
	registerComfortsRecipes(event);
	registerComputerCraftRecipes(event)
	//registerCccBridgeRecipes(event)
	registerConstructionwandRecipes(event)
	registerCreateRecipes(event)
	registerCreateAdditionsRecipes(event)
	registerCreateConnectedRecipes(event)
	registerCreateCopycatsRecipes(event)
	registerCreatedecoRecipes(event)
	registerCreateExtraGaugesRecipes(event)
	registerCreateFluidLogisticsRecipes(event)
	registerCreateHorsePowerBlockRecipes(event)
	registerCreateHypertubeRecipes(event)
	registerCreateSoundOfSteamRecipes(event)
	//registerCreateStockBridgeRecipes(event)
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
	registerGTCEUTerminalRecipes(event)
	registerGTModernUtilitiesRecipes(event)
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
	registerMTSRecipes(event)
	registerMTSOCPRecipes(event)
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
	registerTFCGroomingStationRecipes(event)
	registerTFGRecipes(event)
	registerTFCTextileRecipes(event)
	registerToolBeltRecipes(event)
	registerVintageImprovementsRecipes(event)
	registerWaterFlasksRecipes(event)
	registerWABRecipes(event)
	registerTFCScrapingKnivesRecipes(event)
	registerTFGCircuitBoardsRecipes(event)
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
