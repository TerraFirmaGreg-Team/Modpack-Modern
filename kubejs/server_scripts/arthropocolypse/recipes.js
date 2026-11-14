"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerArthropocolypseRecipes(event) {
	
	event.recipes.gtceu.macerator('arthropocolypse:beetle_fragment')
		.itemInputs('arthropocolypse:beetle_fragment')
		.itemOutputs('#forge:dusts/silicon', 'minecraft:bone_meal') // TODO: something biological?
		.duration(20)
		.EUt(2)
}