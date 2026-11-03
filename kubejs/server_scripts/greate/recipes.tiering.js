// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function tierGreateRecipes(event) {

	const ulsToLsRecipes = [
		"greate:mixing/integration/gtceu/mixer/blue_alloy",
		"greate:mixing/integration/gtceu/mixer/potin",
		"greate:mixing/integration/gtceu/mixer/cobalt_brass",
		"greate:mixing/integration/gtceu/mixer/brass",
		"greate:mixing/integration/gtceu/mixer/invar",
		"greate:mixing/integration/gtceu/mixer/tin_alloy",
		"greate:mixing/integration/gtceu/mixer/magnalium",
		"greate:mixing/integration/gtceu/mixer/electrum",
		"greate:mixing/integration/gtceu/mixer/electrotine",
		"greate:mixing/integration/gtceu/mixer/bronze",
		"greate:mixing/integration/gtceu/mixer/black_bronze",
		"greate:mixing/integration/gtceu/mixer/bismuth_bronze",
		"greate:mixing/integration/gtceu/mixer/black_steel"
	];

	ulsToLsRecipes.forEach(recipeId => {
		event.findRecipes({ id: recipeId }).forEach(recipe => {
			recipe.json.add("recipeTier", 1)
		});
	});
}
