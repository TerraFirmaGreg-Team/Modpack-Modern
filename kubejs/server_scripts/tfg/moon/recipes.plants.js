"use strict";

function registerTFGMoonPlantRecipes(event) {

	// Replace the built-in greg one to add a circuit
	event.recipes.gtceu.fermenter('fermented_biomass')
		.inputFluids(Fluid.of('gtceu:biomass', 100))
		.outputFluids(Fluid.of('gtceu:fermented_biomass', 100))
		.circuit(1)
		.duration(150)
		.EUt(2);

	event.recipes.gtceu.fermenter('tfg:chorus')
		.itemInputs('minecraft:chorus_fruit')
		.inputFluids(Fluid.of('gtceu:biomass', 20))
		.chancedOutput('ae2:ender_dust', 100, 0)
		.outputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.circuit(2)
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon');

	event.recipes.gtceu.fermenter('tfg:chorus_flower')
		.itemInputs('tfg:lunar_chorus_flower')
		.inputFluids(Fluid.of('gtceu:biomass', 20))
		.chancedOutput('ae2:ender_dust', 100, 0)
		.outputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.circuit(2)
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon');

    event.recipes.gtceu.brewery('biomass_from_twisting_vines')
        .itemInputs('minecraft:twisting_vines')
        .inputFluids("#tfg:clean_water 20")
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(50)
        .EUt(3);
};