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

	TFGHelpers.registerMaterialInfo('tfcbetterbf:insulation', [GTMaterials.WroughtIron, 3])

	event.recipes.tfc.heating('tfcbetterbf:insulated_fire_bricks', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 432))
		.id(`tfcbetterbf:heating/insulated_fire_bricks`)

	TFGHelpers.registerMaterialInfo('tfcbetterbf:insulated_fire_bricks', [GTMaterials.get('tfg:refractory_clay'), 5, GTMaterials.WroughtIron, 3])

	event.recipes.gtceu.packer('tfcbetterbf:insulated_fire_bricks')
		.itemInputs('tfcbetterbf:insulated_fire_bricks')
		.itemOutputs('tfc:fire_bricks', '3x tfcbetterbf:insulation')
		.duration(20)
		.EUt(2)
}