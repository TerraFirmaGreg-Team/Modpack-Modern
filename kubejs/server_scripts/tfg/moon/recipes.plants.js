"use strict";

function registerTFGMoonPlantRecipes(event) {

	// Plants - Can't use the default builder here because fertiliser is much harder to get on the moon,
	// and we're using helium-3 as the fertiliser

	// Chorus
	event.recipes.gtceu.greenhouse('tfg:chorus')
		.notConsumable('8x tfg:lunar_chorus_flower')
		.itemOutputs('64x minecraft:chorus_fruit')
		.chancedOutput('8x tfg:lunar_chorus_flower', 750, 0)
		.chancedOutput('8x tfg:lunar_chorus_flower', 500, 0)
		.chancedOutput('8x tfg:lunar_chorus_flower', 750, 0)
		.duration(36000) // 30 mins
		.circuit(1)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.greenhouse('tfg:chorus_helium')
		.notConsumable('8x tfg:lunar_chorus_flower')
		.inputFluids(Fluid.of('gtceu:helium_3', 2000))
		.itemOutputs('64x minecraft:chorus_fruit')
		.chancedOutput('8x tfg:lunar_chorus_flower', 4000, 0)
		.chancedOutput('8x tfg:lunar_chorus_flower', 3000, 0)
		.chancedOutput('8x tfg:lunar_chorus_flower', 4000, 0)
		.duration(12000) // 10 mins
		.circuit(2)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	// Replace the built-in greg one to add a circuit
	event.recipes.gtceu.fermenter('fermented_biomass')
		.inputFluids(Fluid.of('gtceu:biomass', 100))
		.outputFluids(Fluid.of('gtceu:fermented_biomass', 100))
		.circuit(1)
		.duration(150)
		.EUt(2)

	event.recipes.gtceu.fermenter('tfg:chorus')
		.itemInputs('minecraft:chorus_fruit')
		.inputFluids(Fluid.of('gtceu:biomass', 20))
		.chancedOutput('ae2:ender_dust', 100, 0)
		.outputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.circuit(2)
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.fermenter('tfg:chorus_flower')
		.itemInputs('tfg:lunar_chorus_flower')
		.inputFluids(Fluid.of('gtceu:biomass', 20))
		.chancedOutput('ae2:ender_dust', 100, 0)
		.outputFluids(Fluid.of('gtceu:nitrogen', 1000))
		.circuit(2)
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.MV])
		.dimension('ad_astra:moon')

	// Lightblooms
	event.recipes.gtceu.greenhouse('tfg:lightbloom')
		.notConsumable('8x minecraft:twisting_vines')
		.itemOutputs('16x minecraft:twisting_vines')
		.chancedOutput('minecraft:pearlescent_froglight', 2500, 0)
		.chancedOutput('minecraft:verdant_froglight', 2500, 0)
		.chancedOutput('minecraft:ochre_froglight', 2500, 0)
		.duration(36000) // 30 mins
		.circuit(1)
		.EUt(GTValues.VA[GTValues.LV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.greenhouse('tfg:lightbloom_helium')
		.notConsumable('8x minecraft:twisting_vines')
		.inputFluids(Fluid.of('gtceu:helium_3', 2000))
		.itemOutputs('16x minecraft:twisting_vines')
		.chancedOutput('minecraft:pearlescent_froglight', 3500, 0)
		.chancedOutput('minecraft:verdant_froglight', 3500, 0)
		.chancedOutput('minecraft:ochre_froglight', 3500, 0)
		.duration(12000) // 30 mins
		.circuit(2)
		.EUt(GTValues.VA[GTValues.LV])
		.dimension('ad_astra:moon')

	event.recipes.gtceu.brewery('biomass_from_twisting_vines')
		.itemInputs('minecraft:twisting_vines')
		.inputFluids("#tfg:clean_water 20")
		.outputFluids(Fluid.of('gtceu:biomass', 20))
		.duration(50)
		.EUt(3)
}