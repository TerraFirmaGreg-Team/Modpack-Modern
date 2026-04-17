"use strict";

function registerTFGCoalRecipes(event) {

	// Lignite -> Coal dust
	event.shaped('gtceu:coal_dust', [
		'A',
		'B'
	], {
		A: 'tfc:ore/lignite',
		B: '#forge:tools/mortars'
	}).id('tfg:mortar/lignite')
	
	event.recipes.tfc.quern("gtceu:coal_dust", "tfc:ore/lignite")
		.id('tfg:quern/lignite');

	event.recipes.gtceu.macerator('tfg:lignite')
		.itemInputs('tfc:ore/lignite')
		.itemOutputs('#forge:dusts/coal')
		.EUt(2)
		.duration(12)

	// Anthracite -> Coal dust

	event.shaped('2x gtceu:coal_dust', [
		'A',
		'B'
	], {
		A: 'beneath:cursecoal',
		B: '#forge:tools/mortars'
	}).id('tfg:mortar/anthracite')
	
	event.recipes.tfc.quern("2x gtceu:coal_dust", "beneath:cursecoal")
		.id('tfg:quern/anthracite');

	event.recipes.gtceu.macerator('tfg:anthracite')
		.itemInputs('beneath:cursecoal')
		.itemOutputs('2x #forge:dusts/coal')
		.EUt(2)
		.duration(12)

	// Coke oven etc

	event.recipes.gtceu.coke_oven("tfg:lignite_to_coke")
		.itemInputs('tfc:ore/lignite')
		.itemOutputs('1x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 500))
		.duration(900)

	event.recipes.gtceu.coke_oven("tfg:coal_to_coke")
		.itemInputs('tfc:ore/bituminous_coal')
		.itemOutputs('2x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 2000))
		.duration(900)

	event.recipes.gtceu.coke_oven("tfg:peat")
		.itemInputs('tfc:peat')
		.outputFluids(Fluid.of('gtceu:creosote', 1000))
		.duration(900)

	event.recipes.gtceu.pyrolyse_oven("tfg:rich_coal_to_tar")
		.itemInputs('3x tfc:ore/bituminous_coal')
		.chancedOutput('gtceu:dark_ash_dust', 5000, 0)
		.outputFluids(Fluid.of('gtceu:coal_tar', 3000))
		.duration(288)
		.EUt(96)
		.circuit(8)

	event.recipes.gtceu.pyrolyse_oven("tfg:rich_coal_to_coke_creosote")
		.itemInputs('4x tfc:ore/bituminous_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 8000))
		.duration(576)
		.EUt(64)
		.circuit(1)

	event.recipes.gtceu.pyrolyse_oven("tfg:coal_to_coal_gas")
		.itemInputs('4x tfc:ore/bituminous_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.inputFluids(Fluid.of('gtceu:steam'))
		.outputFluids(Fluid.of('gtceu:coal_gas', 4000))
		.duration(288)
		.EUt(96)
		.circuit(22)

	event.recipes.gtceu.pyrolyse_oven("tfg:coal_to_coke_creosote_nitrogen")
		.itemInputs('4x tfc:ore/bituminous_coal')
		.itemOutputs('16x gtceu:coke_gem')
		.inputFluids(Fluid.of('gtceu:nitrogen'))
		.outputFluids(Fluid.of('gtceu:creosote', 8000))
		.duration(288)
		.EUt(96)
		.circuit(2)

	event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_tar")
		.itemInputs('6x tfc:ore/lignite')
		.chancedOutput('gtceu:dark_ash_dust', 5000, 0)
		.outputFluids(Fluid.of('gtceu:coal_tar', 3000))
		.duration(288)
		.EUt(96)
		.circuit(8)

	event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_coke_creosote")
		.itemInputs('8x tfc:ore/lignite')
		.itemOutputs('8x gtceu:coke_gem')
		.outputFluids(Fluid.of('gtceu:creosote', 8000))
		.duration(576)
		.EUt(64)
		.circuit(1)

	event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_coal_gas")
		.itemInputs('8x tfc:ore/lignite')
		.itemOutputs('8x gtceu:coke_gem')
		.inputFluids(Fluid.of('gtceu:steam'))
		.outputFluids(Fluid.of('gtceu:coal_gas', 4000))
		.duration(288)
		.EUt(96)
		.circuit(22)

	event.recipes.gtceu.pyrolyse_oven("tfg:raw_coal_to_coke_creosote_nitrogen")
		.itemInputs('8x tfc:ore/lignite')
		.itemOutputs('8x gtceu:coke_gem')
		.inputFluids(Fluid.of('gtceu:nitrogen'))
		.outputFluids(Fluid.of('gtceu:creosote', 8000))
		.duration(288)
		.EUt(96)
		.circuit(2)
}
