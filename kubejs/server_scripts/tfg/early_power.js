// priority: 0

function registerTFGEarlyPower(event) {

	event.recipes.gtceu.coal_liquefaction_tower('tfg:plutonium_pellet')
		.itemInputs('32x #forge:rods/plutonium', '32x #forge:rods/plutonium', '32x #forge:rods/plutonium',
			'32x #forge:rods/plutonium', 'tfg:empty_rod')
		.inputFluids(Fluid.of('gtceu:radon', 100))
		.itemOutputs('tfg:plutonium_rod')
		.duration(20*600)
		.EUt(GTValues.VA[GTValues.EV])

}