// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGRecyclingRecipes(event) {

	//Aluminium Harvest Basket
	event.recipes.gtceu.macerator('tfg:macerator/recycling/aluminium_harvest_basket')
		.itemInputs('tfg:aluminium_harvest_basket')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Aluminium, 2),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Steel, 1),
			ChemicalHelper.get(TagPrefix.dustSmall, GTMaterials.CobaltBrass, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfg:arc_furnace/recycling/aluminium_harvest_basket')
		.itemInputs('tfg:aluminium_harvest_basket')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Aluminium, 2),
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Steel, 1),
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.CobaltBrass, 2)
		)
		.duration(GTMaterials.Aluminium.getMass() * 2)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])
}