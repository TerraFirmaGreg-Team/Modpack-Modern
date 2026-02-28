function registerTFGHVMaterialRecipes(event) {

	event.recipes.gtceu.mixer('tfg:mo_50_re_dust')
		.itemInputs(
			Item.of('gtceu:rhenium_dust', 1),
			Item.of('gtceu:molybdenum_dust', 1))
		.itemOutputs(Item.of('tfg:mo_50_re_dust', 2))
		.duration(20 * 8)
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(1)

	//#region Modify Electronic Component to require Silicon Rubber

	event.replaceInput({ id: 'gtceu:shaped/filter_casing' }, Item.of('gtceu:steel_frame'), Item.of('tfg:mo_50_re_frame'))
	event.remove({ id: 'gtceu:assembler/plascrete'})
	event.remove({ id: 'gtceu:assembler/cleanroom_glass'})

	event.recipes.gtceu.assembler('tfg:plascrete')
		.itemInputs(
			Item.of('tfg:mo_50_re_frame', 1),
			Item.of('gtceu:polyethylene_plate', 6),
			Item.of('gtceu:steel_plate', 4))
		.inputFluids(Fluid.of('gtceu:polyethylene', 144))
		.itemOutputs(Item.of('gtceu:plascrete', 2))
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:cleanroom_glass')
		.itemInputs(
			Item.of('tfg:mo_50_re_frame', 1),
			Item.of('gtceu:polyethylene_plate', 6),
			Item.of('gtceu:steel_plate', 4))
		.inputFluids(Fluid.of('gtceu:glass', 144))
		.itemOutputs(Item.of('gtceu:cleanroom_glass', 2))
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

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


}