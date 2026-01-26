"use strict";

function registerTFGBakeliteRecipes(event) {

	// TODO: move oil PE to MV

	event.recipes.gtceu.chemical_reactor('tfg:formaldehyde_from_methane')
		.inputFluids('gtceu:methane 1000', 'gtceu:oxygen 1000')
		.outputFluids('gtceu:formaldehyde 1000', 'gtceu:hydrogen 2000')
		.circuit(1)
		.duration(200)
		.EUt(GTValues.VA[GTValues.LV])

	// add phenol and methane to distillation
	event.recipes.gtceu.distillation_tower('gtceu:distill_creosote')
		.inputFluids('gtceu:creosote 1000')
		.outputFluids('gtceu:lubricant 500')
		.outputFluids('gtceu:phenol 50')
		.outputFluids('gtceu:carbon_dioxide 200')
		.outputFluids('gtceu:methane 250')
		// this adds single-block distillery recipes too
		.disableDistilleryRecipes(false)
		.duration(8 * 20)
		.EUt(96)

	event.recipes.gtceu.chemical_reactor('tfg:syngas_to_methane')
		.inputFluids('tfg:syngas 1000')
		.notConsumable('#forge:dusts/silver')
		.outputFluids('gtceu:methane 100')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.chemical_reactor('tfg:phenolic_resin')
		.inputFluids('gtceu:phenol 500', 'gtceu:formaldehyde 1000')
		.notConsumable('#forge:dusts/sodium_hydroxide')
		.outputFluids('tfg:phenolic_resin 1000')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('tfg:bakelite_wood')
		.inputFluids('tfg:phenolic_resin 144')
		.itemInputs('tfg:treated_chipboard_composite')
		.outputFluids('tfg:bakelite 144')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('tfg:bakelite_asbestos')
		.inputFluids('tfg:phenolic_resin 144')
		.itemInputs('#forge:dusts/asbestos')
		.outputFluids('tfg:bakelite 144')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.remove({ id: 'gtceu:assembler/phenolic_board' })

	event.recipes.gtceu.forming_press('tfg:phenolic_board')
		.itemInputs('2x #forge:foils/bakelite', '2x minecraft:paper', 'gtceu:resin_circuit_board')
		.itemOutputs('gtceu:phenolic_circuit_board')
		.duration(7.5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:phenolic_board_pe')
		.itemInputs('2x #forge:foils/polyethylene', 'gtceu:wood_plate')
		.inputFluids('gtceu:phenol 50')
		.itemOutputs('gtceu:phenolic_circuit_board')
		.duration(7.5 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	event.replaceInput({ id: 'gtceu:shaped/mv_machine_hull' }, '#forge:plates/wrought_iron', '#forge:plates/bakelite')
}