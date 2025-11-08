"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFGRecipes = (event) => {
	
	registerTFGPapermakingRecipes(event)
	registerTFGRockRecipes(event)
	registerTFGCollapseRecipes(event)
	registerTFGMoldRecipes(event)
	registerTFGMedicineRecipes(event)
	registerTFGMiscellaneousRecipes(event)
	registerTFGSupportRecipes(event)
	registerTFGFishingNetsRecipes(event)
	registerTFGConvertingRecipes(event)
	registerTFGFoodRecipes(event)
	registerTFGSpaceRecipes(event)
	registerTFGStoneDustRecipes(event)
	registerTFGNuclearRecipes(event)
	registerTFGBiochemRecipes(event)
	registerTFGSpaceOres(event)
}
