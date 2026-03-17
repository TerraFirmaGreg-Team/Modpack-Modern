"use strict";

function registerTFGMoonRecipes(event) {
	
	// Cryo Fluix
	event.recipes.gtceu.vacuum_freezer('gtceu:cryo_fluix')
		.inputFluids(Fluid.of('gtceu:helium_3', 1000))
		.inputFluids(Fluid.of('tfg:fluix', 144))
		.outputFluids(Fluid.of('tfg:cryogenized_fluix', 576))
		.duration(30 * 20)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.fluid_heater('tfg:cryo_fluix')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 576))
		.outputFluids(Fluid.of('tfg:fluix', 144))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.autoclave('tfg:cryo_fluix_pearl')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 576))
		.itemInputs('tfg:vitrified_pearl')
		.itemOutputs('tfg:cryo_fluix_pearl')
		.duration(300)
		.EUt(GTValues.VA[GTValues.EV])
		.cleanroom(CleanroomType.CLEANROOM)

	// Granulated Chorus
	event.recipes.gtceu.alloy_smelter('tfg:granulated_chorus_ingot')
		.itemInputs('#forge:dusts/granulated_chorus')
		.notConsumable('gtceu:ingot_casting_mold')
		.itemOutputs('#forge:ingots/granulated_chorus')
		.duration(80)
		.EUt(2)
		.category(GTRecipeCategories.INGOT_MOLDING)
	event.recipes.gtceu.macerator('tfg:granulated_chorus_dust_from_fruit')
		.itemInputs('minecraft:popped_chorus_fruit')
		.itemOutputs('#forge:dusts/granulated_chorus')
		.duration(40)
		.EUt(7)
	event.recipes.gtceu.macerator('tfg:granulated_chorus_dust_from_flower')
		.itemInputs('tfg:lunar_chorus_flower')
		.itemOutputs('1x #forge:dusts/granulated_chorus')
		.duration(40)
		.EUt(7)
}