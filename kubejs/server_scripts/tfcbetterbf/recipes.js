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

	TFGHelpers.registerMaterialInfo('tfcbetterbf:insulation', [GTMaterials.Iron, 3])

	TFGHelpers.registerMaterialInfo('tfc:fire_bricks', [GTMaterials.get('tfg:refractory_clay'), 5])

	event.remove('tfcbetterbf:crafting/insulation');

	const insulationPlate = [ChemicalHelper.get(TagPrefix.plate, GTMaterials.WroughtIron, 1), ChemicalHelper.get(TagPrefix.plate, GTMaterials.Iron, 1)];
	event.shapeless('tfcbetterbf:insulation', Array(3).fill(insulationPlate).concat('#tfc:flux')).id('tfg:shapeless/blast_furnace_insulation');

	event.shapeless('tfcbetterbf:insulated_fire_bricks', [
		'tfc:fire_bricks',
		'tfcbetterbf:insulation'
	]).id('tfg:shapeless/insulated_fire_bricks');

	event.shapeless('tfcbetterbf:insulation', ['3x firmalife:oven_insulation']).id('tfg:shapeless/blast_furnace_insulation_from_oven_insulation');
}