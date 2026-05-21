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
		let genBaseBarrelRecipe = (alcohol.genBase !== undefined) ? alcohol.genBase : false;
		let genBaseProcessorRecipe = true;
		let genAgedRecipe = (alcohol.genAged !== undefined) ? alcohol.genAged : false;
		let genVintageRecipe = (alcohol.genVintage !== undefined) ? alcohol.genVintage : true;

		// Mead produces less to match firmalife barrel recipe. Since honey is cheap.
		if (alcohol.name === 'mead') {
			genBaseProcessorRecipe = false;
			global.processorRecipe(event, 'processor_alcohol/firmalife_mead', 2400, 1, {
				itemInputs: ['firmalife:raw_honey'],
				fluidInputs: ['#tfg:clean_water 100', 'firmalife:yeast_starter 2'],
				fluidOutputs: [Fluid.of('firmalife:mead', 100)],
				circuit: 11,
				notConsumable: ['#tfc:barrels']
			});
		}

		global.generateAlcoholRecipes(event, alcohol.ingredient, alcohol.id, alcohol.agedId, alcohol.vintageId, genBaseBarrelRecipe, genBaseProcessorRecipe, genAgedRecipe, genVintageRecipe)
	});

	//#endregion
};