// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event
 */
function registerTFGFoodRecipes(event) {

	registerTFGBasicProcessingFoodRecipes(event);
	registerTFGPreservationFoodRecipes(event);
	registerTFGMealBagRecipes(event);
	registerTFGBakingAndDessertFoodRecipes(event);
	registerTFGPizzaAndPastaFoodRecipes(event);
	registerTFGSandwichFoodRecipes(event);
	registerTFGSoupFoodRecipes(event);
	registerTFGDairyFoodRecipes(event);
	registerTFGLatinAmericanFoodRecipes(event);
	registerTFGAlcoholFoodRecipes(event);
	registerTFGMiscMealFoodRecipes(event);

	//#region Basic Cooking

	global.TFC_FOOD_COOKING.forEach(item => {
		global.generateFoodCookingRecipes(event, item.input, item.output, true, false)
	});

	global.TFG_FOOD_COOKING.forEach(item => {
		global.generateFoodCookingRecipes(event, item.input, item.output)
	});

	global.FIRMALIFE_FOOD_COOKING.forEach(item => {
		global.generateFoodCookingRecipes(event, item.input, item.output, true, false)
	});

	global.generateWaterBoilingFoodRecipes(event, 'tfc:food/rice_grain', 'tfc:food/cooked_rice', false, true, true);

	//#endregion

}
