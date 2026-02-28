function registerTFGHVMaterialRecipes(event) {

	event.recipes.gtceu.mixer('tfg:mo_50_re_dust')
		.itemInputs(
			Item.of('gtceu:rhenium_dust', 1),
			Item.of('gtceu:molybdenum_dust', 1))
		.itemOutputs(Item.of('tfg:mo_50_re_dust', 2))
		.duration(20 * 8)
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(1)

	// Modify Electronic Component to require Silicon Rubber

	event.replaceInput({ id: 'gtceu:shaped/filter_casing' }, Item.of('gtceu:steel_frame'), Item.of('tfg:mo_50_re_frame'))
	event.remove({ id: 'gtceu:assembler/plascrete'})
	event.remove({ id: 'gtceu:assembler/cleanroom_glass'})

	event.recipes.gtceu.assembler('tfg:plascrete')
		.itemInputs(
			Item.of('tfg:mo_50_re_frame', 1),
			Item.of('gtceu:polyethylene_plate', 6),
			Item.of('gtceu:steel_plate', 2))
		.inputFluids(Fluid.of('gtceu:concrete', 144))
		.itemOutputs(Item.of('gtceu:plascrete', 2))
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true, true)

	event.recipes.gtceu.assembler('tfg:cleanroom_glass')
		.itemInputs(
			Item.of('tfg:mo_50_re_frame', 1),
			Item.of('gtceu:polyethylene_plate', 6),
			Item.of('gtceu:steel_plate', 2))
		.inputFluids(Fluid.of('gtceu:glass', 144))
		.itemOutputs(Item.of('gtceu:cleanroom_glass', 2))
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true, true)

	// Allow HV Cutter at HV (Ultimet)

	event.recipes.gtceu.chemical_bath('tfg:ultimet_cool_down')
		.itemInputs(Item.of('#forge:hot_ingots/ultimet', 1))
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs(Item.of('#forge:ingots/ultimet', 1))
		.duration(20*36)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_bath('tfg:ultimet_cool_down_distilled_water')
		.itemInputs(Item.of('#forge:hot_ingots/ultimet', 1))
		.inputFluids(Fluid.of('gtceu:distilled_water', 100))
		.itemOutputs(Item.of('#forge:ingots/ultimet', 1))
		.duration(20*21)
		.EUt(GTValues.VA[GTValues.MV])

	// Rutile changes

	event.remove({ id: 'gtceu:chemical_reactor/titanium_tetrachloride'})
	event.remove({ id: 'gtceu:large_chemical_reactor/titanium_tetrachloride'})
	event.recipes.gtceu.chemical_reactor('tfg:titanium_tetrachloride')
		.itemInputs(Item.of('gtceu:carbon_dust', 2), Item.of('gtceu:rutile_dust', 3))
		.inputFluids(Fluid.of('gtceu:chlorine', 4000))
		.outputFluids(Fluid.of('gtceu:carbon_monoxide', 2000), Fluid.of('gtceu:titanium_tetrachloride', 1000))
		.duration(20*20)
		.EUt(GTValues.VA[GTValues.HV])

	event.remove({ id: 'gtceu:electrolyzer/bauxite_electrolysis'})
	event.recipes.gtceu.electrolyzer('tfg:bauxite_electrolysis')
		.itemInputs(Item.of('gtceu:bauxite_dust', 15))
		.itemOutputs(Item.of('gtceu:aluminium_dust', 6))
		.outputFluids(Fluid.of('gtceu:oxygen', 9000))
		.duration(20*13.5)
		.EUt(GTValues.VA[GTValues.MV])

	// Perlite


	// TODO: mafic / ultramafic igneous to perlite


	// Perlite is also a water purifier irl!
	event.recipes.gtceu.distillery('tfg:distilled_water_perlite')
		.itemInputs('#forge:dusts/perlite')
		.inputFluids(Fluid.of('minecraft:water', 2000))
		.outputFluids(Fluid.of('gtceu:distilled_water', 2000))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.LV])
}