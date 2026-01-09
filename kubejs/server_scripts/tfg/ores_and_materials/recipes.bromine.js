"use strict";

function registerTFGBromineRecipes(event) {

	/*

	event.recipes.gtceu.evaporation_tower('evaporation_brine')
		.inputFluids(Fluid.of('tfc:salt_water', 20000))
		.outputFluids(Fluid.of('gtceu:raw_brine', 1000))
		.duration(20*50)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.evaporation_tower('evaporation_brine_mars')
		.inputFluids(Fluid.of('tfg:semiheavy_ammoniacal_water', 20000))
		.outputFluids(Fluid.of('gtceu:raw_brine', 1000))
		.duration(20*50)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.fluid_heater('heat_brine')
		.inputFluids(Fluid.of("gtceu:raw_brine", 1000))
		.outputFluids(Fluid.of("gtceu:hot_brine", 1000))
		.duration(20*600)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.heat_exchanger('heat_brine_nuclear')
		.inputFluids(Fluid.of("gtceu:raw_brine", 1000))
		.inputFluids(Fluid.of("gtceu:irradiated_steam", 1000))
		.outputFluids(Fluid.of("gtceu:hot_brine", 1000))
		.outputFluids(Fluid.of("gtceu:dense_steam", 1000))
		.duration(20*100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('debrominated_brine_raw_brine_mixing')
		.inputFluids(Fluid.of("gtceu:raw_brine", 1000))
		.inputFluids(Fluid.of('gtceu:hot_debrominated_brine', 1000))
		.outputFluids(Fluid.of('gtceu:hot_brine', 2000))
		.outputFluids(Fluid.of('gtceu:debrominated_brine', 1000))
		.duration(20*10)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('brine_acidification')
		.inputFluids(Fluid.of("gtceu:hot_brine", 2000))
		.inputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
		.outputFluids(Fluid.of('gtceu:hot_alkaline_debrominated_brine', 2000))
		.outputFluids(Fluid.of('gtceu:hydrogen_iodide', 1000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('aciditic_bromine_exhaust_heating')
		.inputFluids(Fluid.of("gtceu:hot_brine", 1000))
		.inputFluids(Fluid.of('gtceu:acidic_bromine_exhaust', 1000))
		.outputFluids(Fluid.of('gtceu:hot_chlorinated_brominated_brine', 1000))
		.outputFluids(Fluid.of('gtceu:steam', 3000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('brine_chloroination')
		.inputFluids(Fluid.of("gtceu:hot_brine", 1000))
		.inputFluids(Fluid.of('gtceu:chlorine', 1000))
		.outputFluids(Fluid.of('gtceu:hot_chlorinated_brominated_brine', 1000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('brine_neutralization')
		.inputFluids(Fluid.of("gtceu:hot_alkaline_debrominated_brine", 3000))
		.itemInputs('gtceu:potassium_dust')
		.outputFluids(Fluid.of('gtceu:hot_debrominated_brine', 2000))
		.itemOutputs(Item.of('2x gtceu:rock_salt_dust'))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.centrifuge('debrominated_brine_decomposition')
		.inputFluids(Fluid.of('gtceu:debrominated_brine', 2000))
		.outputFluids(Fluid.of('tfc:salt_water'), 1000)
		.duration(20*3)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('brine_filtration')
		.inputFluids(Fluid.of('gtceu:hot_chlorinated_brominated_brine', 1000))
		.inputFluids(Fluid.of('gtceu:chlorine', 1000))
		.inputFluids(Fluid.of('gtceu:steam', 1000))
		.outputFluids(Fluid.of('gtceu:hot_alkaline_debrominated_brine', 1000))
		.outputFluids(Fluid.of('gtceu:brominated_chlorine_vapor', 2000))
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('brominated_chlorine_vapor_condensation')
		.inputFluids(Fluid.of('gtceu:brominated_chlorine_vapor', 1000))
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('gtceu:acidic_bromine_solution', 1000))
		.outputFluids(Fluid.of('minecraft:water', 2000))
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.chemical_reactor('bromine_vapor_concentration')
		.inputFluids(Fluid.of('gtceu:acidic_bromine_solution', 1000))
		.inputFluids(Fluid.of('gtceu:steam', 1000))
		.outputFluids(Fluid.of('gtceu:concentrated_bromine_solution', 1000))
		.outputFluids(Fluid.of('gtceu:acidic_bromine_exhaust', 1000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.distillery('bromine_distillation_to_chlorine')
		.inputFluids(Fluid.of('gtceu:concentrated_bromine_solution', 100))
		.outputFluids(Fluid.of('gtceu:chlorine', 50))
		.duration(20*5)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.distillery('bromine_distillation_to_bromine')
		.inputFluids(Fluid.of('gtceu:concentrated_bromine_solution', 40))
		.outputFluids(Fluid.of('gtceu:bromine', 40))
		.duration(20*2)
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.distillation_tower('bromine_distillation')
		.inputFluids(Fluid.of('gtceu:concentrated_bromine_solution', 1000))
		.outputFluids(Fluid.of('gtceu:chlorine', 500))
		.outputFluids(Fluid.of('gtceu:bromine', 1000))
		.duration(20*25)
		.EUt(GTValues.VA[GTValues.HV])

	*/

}