// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event
 */
function registerGTCEURecyclingRecipes(event) {

	// Capacitors
	TFGHelpers.registerMaterialInfo('gtceu:tantalum_capacitor', [GTMaterials.Tantalum, 1/9, GTMaterials.Polyethylene, 1/9])
	TFGHelpers.registerMaterialInfo('gtceu:capacitor', [GTMaterials.Polyethylene, 1/9])
	// Empty batteries
	TFGHelpers.registerMaterialInfo('gtceu:empty_tier_i_battery', [GTMaterials.Ultimet, 6])
	TFGHelpers.registerMaterialInfo('gtceu:empty_tier_ii_battery', [GTMaterials.Ruridit, 6])
	TFGHelpers.registerMaterialInfo('gtceu:empty_tier_iii_battery', [GTMaterials.Neutronium, 6])
	// Iron Door
	TFGHelpers.registerMaterialInfo('minecraft:iron_door', [GTMaterials.Iron, 2])
	// GregTech Input Bus
	TFGHelpers.registerMaterialInfo('gtceu:lv_input_bus', [GTMaterials.Steel, 8, GTMaterials.Tin, 1, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:mv_input_bus', [GTMaterials.Aluminium, 8, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:hv_input_bus', [GTMaterials.StainlessSteel, 8, GTMaterials.Gold, 1, GTMaterials.Steel, 8, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:ev_input_bus', [GTMaterials.Titanium, 8, GTMaterials.Aluminium, 9, GTMaterials.Rubber, 2, GTMaterials.PolyvinylChloride, 2])
	TFGHelpers.registerMaterialInfo('gtceu:iv_input_bus', [GTMaterials.TungstenSteel, 8, GTMaterials.StainlessSteel, 8, GTMaterials.Polytetrafluoroethylene, 2, GTMaterials.PolyvinylChloride, 2, GTMaterials.Platinum, 1])
	// GregTech Output Bus
	TFGHelpers.registerMaterialInfo('gtceu:lv_output_bus', [GTMaterials.Steel, 8, GTMaterials.Tin, 1, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:mv_output_bus', [GTMaterials.Aluminium, 8, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:hv_output_bus', [GTMaterials.StainlessSteel, 8, GTMaterials.Gold, 1, GTMaterials.Steel, 8, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:ev_output_bus', [GTMaterials.Titanium, 8, GTMaterials.Aluminium, 9, GTMaterials.Rubber, 2, GTMaterials.PolyvinylChloride, 2])
	TFGHelpers.registerMaterialInfo('gtceu:iv_output_bus', [GTMaterials.TungstenSteel, 8, GTMaterials.StainlessSteel, 8, GTMaterials.Polytetrafluoroethylene, 2, GTMaterials.PolyvinylChloride, 2, GTMaterials.Platinum, 1])
	// GregTech Input Hatch
	TFGHelpers.registerMaterialInfo('gtceu:lv_input_hatch', [GTMaterials.Steel, 8, GTMaterials.Tin, 1, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:mv_input_hatch', [GTMaterials.Aluminium, 8, GTMaterials.Bronze, 6, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:hv_input_hatch', [GTMaterials.StainlessSteel, 8, GTMaterials.Gold, 1, GTMaterials.Steel, 6, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:ev_input_hatch', [GTMaterials.Titanium, 8, GTMaterials.Aluminium, 7, GTMaterials.Rubber, 2, GTMaterials.PolyvinylChloride, 2])
	TFGHelpers.registerMaterialInfo('gtceu:iv_input_hatch', [GTMaterials.TungstenSteel, 8, GTMaterials.StainlessSteel, 6, GTMaterials.Polytetrafluoroethylene, 2, GTMaterials.PolyvinylChloride, 2, GTMaterials.Platinum, 1])
	// GregTech Output Hatch
	TFGHelpers.registerMaterialInfo('gtceu:lv_output_hatch', [GTMaterials.Steel, 8, GTMaterials.Tin, 1, GTMaterials.WroughtIron, 1, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:mv_output_hatch', [GTMaterials.Aluminium, 8,GTMaterials.Bronze, 6, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:hv_output_hatch', [GTMaterials.StainlessSteel, 8, GTMaterials.Gold, 1, GTMaterials.Steel, 6, GTMaterials.Rubber, 2])
	TFGHelpers.registerMaterialInfo('gtceu:ev_output_hatch', [GTMaterials.Titanium, 8, GTMaterials.Aluminium, 7, GTMaterials.Rubber, 2, GTMaterials.PolyvinylChloride, 2])
	TFGHelpers.registerMaterialInfo('gtceu:iv_output_hatch', [GTMaterials.TungstenSteel, 8, GTMaterials.StainlessSteel, 6, GTMaterials.Polytetrafluoroethylene, 2, GTMaterials.PolyvinylChloride, 2, GTMaterials.Platinum, 1])

	removeMaceratorRecipe(event, 'macerate_maintenance_hatch')
	TFGHelpers.registerMaterialInfo('gtceu:maintenance_hatch', [GTMaterials.Steel, 8, GTMaterials.Rubber, 2, GTMaterials.Tin, 1])

	// #region Hanging Signs
	global.TFC_EQUIPMENT_METALS.forEach(metal => {
		// Recycling Hardwood
		// Arc Recycling Hardwood
		event.recipes.gtceu.arc_furnace(`tfg:arc_recycling/${metal}/hardwood`)
			.itemInputs(`#tfg:hanging_sign/${metal}/hardwood`)
			.itemOutputs('gtceu:tiny_ash_dust')
			.chancedOutput(`#forge:nuggets/${metal}`, 3750, 0)
			.duration(12)
			.EUt(30)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		// Macerating Hardwood
		event.recipes.gtceu.macerator(`tfg:macerating/hanging_sign/'${metal}/hardwood`)
			.itemInputs(`#tfg:hanging_sign/${metal}/hardwood`)
			.itemOutputs('gtceu:hardwood_dust')
			.chancedOutput(`#forge:tiny_dusts/${metal}`, 3750, 0)
			.duration(108)
			.EUt(8)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Recycling Softwood
		// Arc Recycling Softwood
		event.recipes.gtceu.arc_furnace(`tfg:arc_recycling/${metal}/softwood`)
			.itemInputs(`#tfg:hanging_sign/${metal}/softwood`)
			.itemOutputs('gtceu:tiny_ash_dust')
			.chancedOutput(`#forge:nuggets/${metal}`, 3750, 0)
			.duration(12)
			.EUt(30)
			.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		// Macerating Softwood
		event.recipes.gtceu.macerator(`tfg:macerating/hanging_sign/'${metal}/softwood`)
			.itemInputs(`#tfg:hanging_sign/${metal}/softwood`)
			.itemOutputs('gtceu:wood_dust')
			.chancedOutput(`#forge:tiny_dusts/${metal}`, 3750, 0)
			.duration(108)
			.EUt(8)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)
	})
	// #endregion

	//#region Supports
	event.recipes.gtceu.macerator(`hardwood_support_to_dust`)
		.itemInputs('#tfg:hardwood_supports')
		.itemOutputs('gtceu:hardwood_dust')
		.duration(150)
		.EUt(2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING);

	event.recipes.gtceu.macerator(`softwood_support_to_dust`)
		.itemInputs('#tfg:softwood_supports')
		.itemOutputs('gtceu:wood_dust')
		.duration(150)
		.EUt(2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING);
	//#endregion
}
