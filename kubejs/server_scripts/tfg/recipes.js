"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFGRecipes = (event) => {
	
	registerTFGMoldRecipes(event)
	registerTFGMiscellaneousRecipes(event)
	registerTFGTemporaryRecipes(event)

	registerTFGFoodRecipes(event)
	registerTFGRefrigeratorRecipes(event)
	registerTFGMealBagRecipes(event)
	registerTFGBiomassRecipes(event)
	registerTFGGreenhouseRecipes(event)

	// TFC stone types
	registerTFCStoneRecipes(event)
	// Non-TFC stone types
	registerTFGRockRecipes(event)
	registerTFGCollapseRecipes(event)
	registerTFGStoneDustRecipes(event)
	registerTFGConcreteRecipes(event)
	registerTFGAlabasterRecipes(event)
	registerTFGDirtRecipes(event)
	registerTFGSandRecipes(event)

	registerTFGPapermakingRecipes(event)
	registerTFGMedicineRecipes(event)
	registerTFGFishingNetsRecipes(event)
	registerTFGSupportRecipes(event)
	registerTFGVaseRecipes(event)
	registerTFGIceRecipes(event)
	registerTFGBasketRecipes(event)
	registerTFGArrowRecipes(event)
	registerTFGCompostRecipes(event)
	registerTFGClothRecipes(event)
	registerTFGChipboardRecipes(event)
	registerTFGWaxRecipes(event)
	registerTFGRubberRecipes(event)
	registerTFGWoodRecipes(event)
	registerTFGKnappingRecipes(event)
	registerTFGLeatherRecipes(event)
	registerTFGClayRecipes(event)
	registerTFGEquipmentRecipes(event)
	registerTFGDyeRecipes(event)

	registerTFGCasingRecipes(event)
	registerTFGEnderPearlRecipes(event)
	registerTFGMultiblockRecipes(event)
	registerTFGSteamBloomeryRecipes(event)
	registerTFGElectronicComponentsRecipes(event)

	registerTFGEarlyGasRecipes(event)
	registerTFGBoilerRecipes(event)
	registerTFGBiodieselRecipes(event)
	registerTFGNuclearRecipes(event)
	registerTFGSMRAdditives(event)
	registerTFGNuclearComponentsRecipes(event)
	registerTFGSolarRecipes(event)
	registerTFGCoalRecipes(event)

	registerTFGZirconiumRecipes(event)
	registerTFGBromineRecipes(event)
	registerTFGTungstenRecipes(event)
	registerTFGAlloyingRecipes(event)
	registerTFGQuartzRecipes(event)

	registerTFGSpaceRecipes(event)
	registerTFGRailgunRecipes(event)
	registerTFGRocketRecipes(event)
	registerTFGSpaceSuitRecipes(event)
	registerTFGInsulationRecipes(event)

	registerTFGMoonRecipes(event)
	registerTFGMoonPlantRecipes(event)
	registerTFGMoonRegolithRecipes(event)

	registerTFGMarsRecipes(event)
	registerTFGMarsIodineRecipes(event)
	registerTFGMarsOstrumRecipes(event)

	registerTFGVenusRecipes(event)
	registerTFGBiochemRecipes(event)
}
