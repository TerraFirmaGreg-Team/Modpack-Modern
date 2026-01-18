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

	TFGHelpers.registerMaterialInfo('tfcbetterbf:insulated_fire_bricks', [GTMaterials.WroughtIron, 3])
}