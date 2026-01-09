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
}