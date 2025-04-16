// priority: 0

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
}