// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerGTCEURecyclingRecipes(event) {

	// Tantalum Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/tantulum_capacitor')
		.itemInputs('gtceu:tantalum_capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Tantalum, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Polyethylene, 1)
		)
		.duration(GTMaterials.Tantalum.getMass() * 1)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/tantulum_capacitor')
		.itemInputs('gtceu:tantalum_capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.nugget, GTMaterials.Tantalum, 1),
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Ash, 1)
		)
		.duration(GTMaterials.Tantalum.getMass() * 1)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/capacitor')
		.itemInputs('gtceu:capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Polyethylene, 1)
		)
		.duration(GTMaterials.Polyethylene.getMass() * 1)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/capacitor')
		.itemInputs('gtceu:capacitor')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dustTiny, GTMaterials.Ash, 1)
		)
		.duration(GTMaterials.Ash.getMass() * 1)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Empty Tier I Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/empty_tier_i_battery')
		.itemInputs('gtceu:empty_tier_i_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ultimet, 6)
		)
		.duration(GTMaterials.Ultimet.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/empty_tier_i_battery')
		.itemInputs('gtceu:empty_tier_i_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Ultimet, 6)
		)
		.duration(GTMaterials.Ultimet.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.extractor('gtceu:extractor/recycling/empty_tier_i_battery')
		.itemInputs('gtceu:empty_tier_i_battery')
		.outputFluids(Fluid.of('gtceu:ultimet', 864))
		.duration(GTMaterials.Ultimet.getMass() * 6)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Empty Tier II Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/empty_tier_ii_battery')
		.itemInputs('gtceu:empty_tier_ii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Ruridit, 6)
		)
		.duration(GTMaterials.Ruridit.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/empty_tier_ii_battery')
		.itemInputs('gtceu:empty_tier_ii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Ruridit, 6)
		)
		.duration(GTMaterials.Ruridit.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.extractor('gtceu:extractor/recycling/empty_tier_ii_battery')
		.itemInputs('gtceu:empty_tier_ii_battery')
		.outputFluids(Fluid.of('gtceu:ruridit', 864))
		.duration(GTMaterials.Ruridit.getMass() * 6)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	// Empty Tier III Capacitor
	event.recipes.gtceu.macerator('gtceu:macerator/recycling/empty_tier_iii_battery')
		.itemInputs('gtceu:empty_tier_iii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.Neutronium, 6)
		)
		.duration(GTMaterials.Neutronium.getMass() * 6)
		.category(GTRecipeCategories.MACERATOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.arc_furnace('gtceu:arc_furnace/recycling/empty_tier_iii_battery')
		.itemInputs('gtceu:empty_tier_iii_battery')
		.itemOutputs(
			ChemicalHelper.get(TagPrefix.ingot, GTMaterials.Neutronium, 6)
		)
		.duration(GTMaterials.Neutronium.getMass() * 6)
		.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.extractor('gtceu:extractor/recycling/empty_tier_iii_battery')
		.itemInputs('gtceu:empty_tier_iii_battery')
		.outputFluids(Fluid.of('gtceu:neutronium', 864))
		.duration(GTMaterials.Neutronium.getMass() * 6)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(GTValues.VA[GTValues.LV])

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