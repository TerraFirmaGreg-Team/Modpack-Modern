/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFGRecipes = (event) => {
	
	registerTFGPapermakingRecipes(event)
	registerTFGRockRecipes(event)
	registerTFGCollapseRecipes(event)
	registerTFGMoldRecipes(event)
	registerTFGTerrariumRecipes(event)
	registerTFGMedicineRecipes(event)
	registerTFGMiscellaneousRecipes(event)
	registerTFGSupportRecipes(event)
	registerTFGFishingNetsRecipes(event)
	registerTFGConvertingRecipes(event)
}