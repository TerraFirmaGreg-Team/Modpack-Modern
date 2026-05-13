"use strict";

/**
 * This file is for recipes related to alcohol production.
 */
function registerTFGAlcoholFoodRecipes(event) {

	//#region Wine Making
	
	global.processorRecipe(event, 'red_grapes', 50, 8, {
		circuit: 8,
		itemInputs: ['firmalife:food/red_grapes'],
		itemOutputs: ['firmalife:food/smashed_red_grapes'],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_red_grapes').copyFood()
	});

	global.processorRecipe(event, 'white_grapes', 50, 8, {
		circuit: 8,
		itemInputs: ['firmalife:food/white_grapes'],
		itemOutputs: ['firmalife:food/smashed_white_grapes'],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_white_grapes').copyFood()
	});

	//#endregion
	//#region Brewing

	global.ALCOHOLS.forEach(alcohol => {
		const genBaseBarrelRecipe = (alcohol.genBase !== undefined) ? alcohol.genBase : false;
		const genBaseProcessorRecipe = true;
		const genAgedRecipe = (alcohol.genAged !== undefined) ? alcohol.genAged : false;
		const genVintageRecipe = (alcohol.genVintage !== undefined) ? alcohol.genVintage : true;

		global.generateAlcoholRecipes(event, alcohol.ingredient, alcohol.id, alcohol.agedId, alcohol.vintageId, genBaseBarrelRecipe, genBaseProcessorRecipe, genAgedRecipe, genVintageRecipe)
	});

	//#endregion
};