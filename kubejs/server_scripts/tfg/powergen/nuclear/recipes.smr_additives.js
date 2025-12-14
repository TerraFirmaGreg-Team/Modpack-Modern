// priority: 0

function registerTFGSMRAdditives(event) {

	event.recipes.gtceu.chemical_reactor('tfg:ozone_synthesis')
		.inputFluids(Fluid.of('gtceu:oxygen', 3000))
		.outputFluids(Fluid.of('tfg:ozone', 1000))
		.notConsumable('#tfg:components/uv_leds')
		.duration(200)
		.EUt(GTValues.VA[GTValues.EV])
		
	event.recipes.gtceu.chemical_reactor('tfg:tin_chloride_combining')
		.itemInputs('#forge:dusts/tin')
		.inputFluids(Fluid.of('gtceu:chlorine', 2000))
		.itemOutputs('3x #forge:dusts/tin_chloride')
		.duration(100)
		.EUt(GTValues.VA[GTValues.MV])
		
	event.recipes.gtceu.chemical_reactor('tfg:cyclohexanone_synthesis')
		.inputFluids(Fluid.of('gtceu:phenol', 1000), Fluid.of('gtceu:hydrogen', 4000))
		.outputFluids(Fluid.of('tfg:cyclohexanone', 1000))
		.notConsumable('#forge:dusts/palladium')
		.duration(120)
		.EUt(GTValues.VA[GTValues.HV])
		
	event.recipes.gtceu.chemical_reactor('tfg:cyclohexanone_add_oxime')
		.itemInputs('#forge:dusts/tin')
		.inputFluids(Fluid.of('tfg:cyclohexanone', 1000), Fluid.of('gtceu:ammonia', 1000), Fluid.of('gtceu:hydrogen_peroxide', 1000))
		.itemOutputs('19x #forge:dusts/cyclohexanone_oxime')
		.outputFluids(Fluid.of('minecraft:water', 2000))
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])
		
	event.recipes.gtceu.chemical_reactor('tfg:cyclohexanone_peroxidation')
		.inputFluids(Fluid.of('tfg:cyclohexanone', 1000), Fluid.of('gtceu:hydrogen_peroxide', 2000))
		.outputFluids(Fluid.of('tfg:cyclohex_diperoxide', 1000))
		.notConsumable('#forge:dusts/tin_chloride')
		.duration(120)
		.EUt(GTValues.VA[GTValues.IV])
}
