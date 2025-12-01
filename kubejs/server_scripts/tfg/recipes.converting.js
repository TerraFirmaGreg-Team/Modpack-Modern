// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGConvertingRecipes(event) {
	
	event.shapeless('vintageimprovements:belt_grinder', 'vintageimprovements:lathe')

	event.shapeless('tfg:ostrum_linear_accelerator', 'gtceu:ostrum_linear_accelerator')
}