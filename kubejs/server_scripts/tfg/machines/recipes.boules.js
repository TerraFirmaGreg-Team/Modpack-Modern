// priority: 0
"use strict";

function registerTFGBouleRecipes(event) {
	
	// Silicon seed crystal

	event.recipes.gtceu.chemical_reactor('tfg:chlorosilanes')
		.itemInputs('2x #forge:dusts/silicon')
		.inputFluids('gtceu:hydrochloric_acid 4000')
		.outputFluids('tfg:chlorosilane 1000', 'tfg:trichlorosilane 1000')
		.circuit(1) // TODO check
		.duration(3 * 20)
		.EUt(GTValues.VHA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('tfg:silane')
		.inputFluids('tfg:chlorosilane 1000', 'tfg:trichlorosilane 1000')
		.outputFluids('tfg:dichlorosilane 1000', 'tfg:silane 1000')
		.duration(3 * 20)
		.EUt(GTValues.VHA[GTValues.MV])

	event.recipes.gtceu.large_chemical_reactor('tfg:silane_shortcut')
		.itemInputs('2x #forge:dusts/silicon')
		.inputFluids('gtceu:hydrochloric_acid 4000')
		.outputFluids('tfg:dichlorosilane 1000', 'tfg:silane 1000')
		.circuit(2) // TODO check
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.electrolyzer('tfg:silane_decomp')
		.inputFluids('tfg:silane 1000')
		.outputFluids('gtceu:hydrogen 4000')
		.itemOutputs('#forge:dusts/polysilicon')
		.duration(3 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.autoclave('tfg:silicon_seed_crystal')
		.itemInputs('#forge:dusts/polysilicon')
		.outputItems('tfg:silicon_seed_crystal')
		.circuit(1)
		.duration(15 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.autoclave('tfg:silicon_seed_crystal_nether')
		.itemInputs('#forge:dusts/polysilicon', '#forge:dusts/nether_quartz')
		.outputItems('2x tfg:silicon_seed_crystal')
		.circuit(2)
		.duration(15 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	// Crucible

	event.recipes.gtceu.arc_furnace('tfg:quartz_crucible')
		.itemInputs('5x #forge:dusts/quartzite')
		.notConsumable('tfc:crucible')
		.itemOutputs('tfg:quartz_crucible')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	// Boules

	event.recipes.gtceu.ostrum_linear_accelerator('tfg:silicon_boule')
		.itemInputs('tfg:silicon_seed_crystal', '#tfg:silicon_seed_crystal_holder_rods')
		.chancedInput('tfg:quartz_crucible', 500, 0) // 5% chance
		.inputFluids('tfg:polysilicon 32000', 'gtceu:nitrogen 1000')
		.itemOutputs('gtceu:silicon_boule')
		.circuit(1)
		.duration(200 * 20)
		.EUt(GTValues.VA[GTValues.MV])
}