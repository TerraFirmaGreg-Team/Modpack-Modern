"use strict";

function registerTFGMarsIodineRecipes(event) {

	// This file is specifically for the crappy mars-based iodine recipe chain.
	// The "proper" venus one is elsewhere
	
	event.recipes.afc.tree_tapping(TFC.blockIngredient('beneath:wood/log/crimson'))
		.resultFluid(Fluid.of('tfg:crimsene', 1))
		.minTemp(-110)
		.maxTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/crimson_log")

	event.recipes.afc.tree_tapping(TFC.blockIngredient('beneath:wood/wood/crimson'))
		.resultFluid(Fluid.of('tfg:crimsene', 1))
		.minTemp(-110)
		.maxTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/crimson_wood")

	event.recipes.afc.tree_tapping(TFC.blockIngredient('beneath:wood/log/warped'))
		.resultFluid(Fluid.of('tfg:warpane', 1))
		.minTemp(-110)
		.maxTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/warped_log")

	event.recipes.afc.tree_tapping(TFC.blockIngredient('beneath:wood/wood/warped'))
		.resultFluid(Fluid.of('tfg:warpane', 1))
		.minTemp(-110)
		.maxTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/warped_wood")

	event.recipes.gtceu.autoclave('tfg:crimsene')
		.inputFluids(Fluid.of('tfg:crimsene', 144), Fluid.of('gtceu:liquid_carbon_dioxide', 1000))
		.outputFluids(Fluid.of('gtceu:carbon_monoxide', 1000))
		.itemOutputs('#forge:gems/crimsene')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.autoclave('tfg:warpane')
		.inputFluids(Fluid.of('tfg:warpane', 144), Fluid.of('gtceu:liquid_carbon_dioxide', 1000))
		.outputFluids(Fluid.of('gtceu:hydrogen', 1000))
		.itemOutputs('#forge:gems/warpane')
		.duration(20 * 30)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.macerator('tfg:crimsene')
		.itemInputs('#forge:gems/crimsene')
		.itemOutputs('#forge:dusts/crimsene')
		.duration(20 * 5)
		.EUt(2)

	event.recipes.gtceu.macerator('tfg:warpane')
		.itemInputs('#forge:gems/warpane')
		.itemOutputs('#forge:dusts/warpane')
		.duration(20 * 5)
		.EUt(2)

	event.recipes.gtceu.mixer('tfg:mars_sap')
		.itemInputs('#forge:dusts/warpane', '#forge:dusts/crimsene')
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000), Fluid.of('gtceu:krypton', 500))
		.itemOutputs('#forge:dusts/mycelienzene')
		.duration(30 * 20)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.deafission.fission_reactor_processing('tfg:mars_sap')
		.itemInputs('#forge:dusts/mycelienzene')
		.outputFluids(Fluid.of('tfg:cooked_mycelienzane', 1000))
		.blastFurnaceTemp(100)
		.duration(30 * 10)

	event.recipes.gtceu.centrifuge('mars_sap_separation')
		.inputFluids(Fluid.of('tfg:cooked_mycelienzane', 2000))
		.outputFluids(
			Fluid.of('tfg:iodomethane', 1000),
			Fluid.of('tfg:trideuteroiodomethane', 1000),
			Fluid.of('gtceu:krypton', 1000),
			Fluid.of('gtceu:diluted_hydrochloric_acid', 4000))
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.chemical_reactor('tfg:iodomethane_separation')
		.inputFluids(
			Fluid.of('tfg:iodomethane', 1000),
			Fluid.of('gtceu:hydrogen', 1000))
		.itemOutputs('#forge:dusts/iodine')
		.outputFluids(Fluid.of('gtceu:methane', 1000))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('tfg:trideuteroiodomethane_separation')
		.inputFluids(
			Fluid.of('tfg:trideuteroiodomethane', 1000),
			Fluid.of('gtceu:oxygen', 1500))
		.itemOutputs('#forge:dusts/iodine', '#forge:dusts/carbon')
		.outputFluids(Fluid.of('tfg:heavy_water', 1500))
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.MV])
}