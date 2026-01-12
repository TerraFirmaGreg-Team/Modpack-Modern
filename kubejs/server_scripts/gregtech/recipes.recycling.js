// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerGTCEURecyclingRecipes(event) {

	// Capacitors
	TFGHelpers.registerMaterialInfo('gtceu:tantalum_capacitor', { 'tantalum': 1/9, 'polyethylene': 1/9 })
	TFGHelpers.registerMaterialInfo('gtceu:capacitor', { 'polyethylene': 1/9 })
	// Empty batteries
	TFGHelpers.registerMaterialInfo('gtceu:empty_tier_i_battery', { 'ultimet': 6 })
	TFGHelpers.registerMaterialInfo('gtceu:empty_tier_ii_battery', { 'ruridit': 6 })
	TFGHelpers.registerMaterialInfo('gtceu:empty_tier_iii_battery', { 'neutronium': 6 })
	// Iron Door
	TFGHelpers.registerMaterialInfo('minecraft:iron_door', { 'iron': 2 })

	// #region Fix TFC hanging sign metal dupe for Macerator and Arc Furnace

	const SIGN_METALS = [
		GTMaterials.Copper,
		GTMaterials.Bronze,
		GTMaterials.BlackBronze,
		GTMaterials.BismuthBronze,
		GTMaterials.WroughtIron,
		GTMaterials.Steel,
		GTMaterials.BlackSteel,
		GTMaterials.RedSteel,
		GTMaterials.BlueSteel
	];

	SIGN_METALS.forEach(metal => {
		// Arc furnace
		global.TFC_WOOD_TYPES.forEach(wood => {
			event.remove(`gtceu:arc_furnace/arc_wood/hanging_sign/${metal.getName()}/${wood}`)
			event.recipes.gtceu.arc_furnace(`gtceu:arc_furnace/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:tiny_ash_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.nugget, metal, 1), 3750, 0)
				.inputFluids(Fluid.of('gtceu:oxygen', 12))
				.duration(12)
				.EUt(30)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		})

		global.AFC_WOOD_TYPES.forEach(wood => {
			event.recipes.gtceu.arc_furnace(`gtceu:arc_furnace/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`afc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:tiny_ash_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.nugget, metal, 1), 3750, 0)
				.inputFluids(Fluid.of('gtceu:oxygen', 12))
				.duration(12)
				.EUt(30)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		})

		// Macerator
		global.TFC_HARDWOOD_TYPES.forEach(wood => {
			removeMaceratorRecipe(event, `macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:hardwood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})

		global.TFC_SOFTWOOD_TYPES.forEach(wood => {
			removeMaceratorRecipe(event, `macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`tfc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:wood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})

		global.AFC_HARDWOOD_TYPES.forEach(wood => {
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`afc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:hardwood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})

		global.AFC_SOFTWOOD_TYPES.forEach(wood => {
			event.recipes.gtceu.macerator(`gtceu:macerator/macerate_wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemInputs(`afc:wood/hanging_sign/${metal.getName()}/${wood}`)
				.itemOutputs('gtceu:wood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)
		})
	})
	// #endregion

	//#region support recycling
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