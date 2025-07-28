"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerTFCBetterBFRecipes = (event) => {    
    event.remove("tfcbetterbf:heating/metal/insulation")
    
    event.recipes.tfc.heating('tfcbetterbf:insulation', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 432))
        .id(`tfcbetterbf:heating/insulation`)

    event.recipes.tfc.heating('tfcbetterbf:insulated_fire_bricks', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 432))
        .id(`tfcbetterbf:heating/insulated_fire_bricks`)

    event.recipes.gtceu.macerator('tfcbetterbf:insulated_fire_bricks')
		.itemInputs('tfcbetterbf:insulated_fire_bricks')
		.itemOutputs(ChemicalHelper.get(TagPrefix.dust, GTMaterials.WroughtIron, 3))
		.duration(GTMaterials.WroughtIron.getMass() * 3)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('tfcbetterbf:insulated_fire_bricks')
		.itemInputs('tfcbetterbf:insulated_fire_bricks')
		.itemOutputs(ChemicalHelper.get(TagPrefix.ingot, GTMaterials.WroughtIron, 3))
		.duration(GTMaterials.Steel.getMass() * 3)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])
}