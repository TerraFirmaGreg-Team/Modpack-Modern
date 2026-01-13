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

	// #region Hanging Signs
    global.TFC_EQUIPMENT_METALS.forEach(metal => {
		// Recycling Hardwood
		global.AFC_HARDWOOD_TYPES.concat(global.TFC_HARDWOOD_TYPES).forEach(wood => {
			// Arc Recycling Hardwood
			event.recipes.gtceu.arc_furnace(`tfg:arc_recycling/${metal.getName()}/${wood}`)
				.itemInputs(`#tfg:hanging_sign/${metal.getName()}/hardwood`)
				.itemOutputs('gtceu:tiny_ash_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.nugget, metal, 1), 3750, 0)
				.duration(12)
				.EUt(30)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			// Macerating Hardwood
			event.recipes.gtceu.macerator(`tfg:macerating/hanging_sign/'${metal.getName()}/${wood}`)
				.itemInputs(`#tfg:hanging_sign/${metal.getName()}/hardwood`)
				.itemOutputs('gtceu:hardwood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)	
		})
		// Recycling Softwood
		global.AFC_SOFTWOOD_TYPES.concat(global.TFC_SOFTWOOD_TYPES).forEach(wood => {
			// Arc Recycling Softwood
			event.recipes.gtceu.arc_furnace(`tfg:arc_recycling/${metal.getName()}/${wood}`)
				.itemInputs(`#tfg:hanging_sign/${metal.getName()}/softwood`)
				.itemOutputs('gtceu:tiny_ash_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.nugget, metal, 1), 3750, 0)
				.duration(12)
				.EUt(30)
				.category(GTRecipeCategories.ARC_FURNACE_RECYCLING)
			// Macerating Softwood
			event.recipes.gtceu.macerator(`tfg:macerating/hanging_sign/'${metal.getName()}/${wood}`)
				.itemInputs(`#tfg:hanging_sign/${metal.getName()}/softwood`)
				.itemOutputs('gtceu:wood_dust')
				.chancedOutput(ChemicalHelper.get(TagPrefix.dustTiny, metal, 1), 3750, 0)
				.duration(108)
				.EUt(8)
				.category(GTRecipeCategories.MACERATOR_RECYCLING)	
		})
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