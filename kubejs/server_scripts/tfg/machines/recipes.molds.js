// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFGMoldRecipes(event) {

	global.TFG_EXTRUDER_MOLDS.forEach(mold => {

		TFGHelpers.registerMaterialInfo(mold, [GTMaterials.Steel, 4])

		event.recipes.gtceu.forming_press(`copy_shape_${linuxUnfucker(mold)}`)
			.itemInputs('gtceu:empty_mold')
			.notConsumable(mold)
			.itemOutputs(mold)
			.duration(120)
			.EUt(GTValues.VA[GTValues.LV])
	});

	global.TFG_CASTING_MOLDS.forEach(mold => {
		
		TFGHelpers.registerMaterialInfo(mold, [GTMaterials.Steel, 4])

		event.recipes.gtceu.forming_press(`copy_shape_${linuxUnfucker(mold)}`)
			.itemInputs('gtceu:empty_mold')
			.notConsumable(mold)
			.itemOutputs(mold)
			.duration(120)
			.EUt(GTValues.VA[GTValues.LV])
	});

};
