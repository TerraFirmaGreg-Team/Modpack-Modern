"use strict";

function registerTFGBakeliteRecipes(event) {

	// Make PE exclusively MV+, it's fine if the LCR recipe stays LV since you can't make an LCR in LV anyway
	event.recipes.gtceu.chemical_reactor('gtceu:polyethylene_from_oxygen')
		.inputFluids('gtceu:oxygen 1000', 'gtceu:ethylene 144')
		.circuit(1)
		.outputFluids('gtceu:polyethylene 216')
		.duration(2 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.chemical_reactor('gtceu:polyethylene_from_air')
		.inputFluids('gtceu:air 1000', 'gtceu:ethylene 144')
		.circuit(1)
		.outputFluids('gtceu:polyethylene 144')
		.duration(2 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	// Formaldehyde
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

	event.recipes.gtceu.forming_press('tfg:phenolic_board_lv')
		.itemInputs('2x #forge:foils/bakelite', '2x minecraft:paper', 'gtceu:resin_circuit_board')
		.itemOutputs('gtceu:phenolic_circuit_board')
		.duration(7.5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:phenolic_board_mv')
		.itemInputs('2x #forge:foils/bakelite', 'gtceu:resin_circuit_board')
		.inputFluids('gtceu:phenol 50')
		.itemOutputs('gtceu:phenolic_circuit_board')
		.duration(7.5 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:phenolic_board_mv_pe')
		.itemInputs('2x #forge:foils/polyethylene', 'gtceu:resin_circuit_board')
		.inputFluids('gtceu:phenol 50')
		.itemOutputs('gtceu:phenolic_circuit_board')
		.duration(7.5 * 20)
		.EUt(GTValues.VA[GTValues.MV])

	// machine hull changes/additions

	// To Move to MV Rework after
	event.remove({ id: 'gtceu:shaped/mv_machine_hull'})
	event.shaped('gtceu:mv_machine_hull', [
		'ABA',
		'DCD',
		'ABA'
	], {
		A: '#forge:plates/bakelite',
		B: '#forge:plates/aluminum',
		C: 'gtceu:mv_machine_casing',
		D: 'gtceu:copper_single_cable'
	}).id('tfg:shaped/mv_machine_hull')

	event.remove({ id: 'gtceu:assembler/hull_mv_annealed'})
	event.recipes.gtceu.assembler('tfg:mv_machine_hull')
		.itemInputs('gtceu:mv_machine_casing', '2x gtceu:copper_single_cable')
		.inputFluids('tfg:bakelite 576')
		.itemOutputs('gtceu:mv_machine_hull')
		.duration(20*2.5)
		.EUt(GTValues.VH[GTValues.LV])

	// MV Buses
	event.recipes.gtceu.assembler('tfg:mv_input_bus')
		.itemInputs('gtceu:mv_machine_hull', '#tfg:any_bronze_crate')
		.inputFluids('tfg:bakelite 576')
		.itemOutputs('gtceu:mv_input_bus')
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.MV])
		.circuit(1)

	event.recipes.gtceu.assembler('tfg:mv_output_bus')
		.itemInputs('gtceu:mv_machine_hull', '#tfg:any_bronze_crate')
		.inputFluids('tfg:bakelite 576')
		.itemOutputs('gtceu:mv_output_bus')
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.MV])
		.circuit(2)

	// MV Hatches
	event.recipes.gtceu.assembler('tfg:mv_input_hatch')
		.itemInputs('gtceu:mv_machine_hull', '#tfg:any_bronze_drum')
		.inputFluids('tfg:bakelite 576')
		.itemOutputs('gtceu:mv_input_hatch')
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.MV])
		.circuit(1)

	event.recipes.gtceu.assembler('tfg:mv_output_hatch')
		.itemInputs('gtceu:mv_machine_hull', '#tfg:any_bronze_drum')
		.inputFluids('tfg:bakelite 576')
		.itemOutputs('gtceu:mv_output_hatch')
		.duration(20*15)
		.EUt(GTValues.VA[GTValues.MV])
		.circuit(2)
	// End of MV Changes

	event.recipes.gtceu.assembler('tfg:ulv_hull_bakelite')
		.itemInputs('gtceu:ulv_machine_casing', '2x #forge:single_cables/red_alloy')
		.inputFluids('tfg:bakelite 432')
		.itemOutputs('gtceu:ulv_machine_hull')
		.duration(25)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:lv_hull_bakelite')
		.itemInputs('gtceu:lv_machine_casing', '2x #forge:single_cables/tin')
		.inputFluids('tfg:bakelite 432')
		.itemOutputs('gtceu:lv_machine_hull')
		.duration(50)
		.EUt(16)

	event.shaped('gtceu:lv_hermetic_casing', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: '#forge:plates/steel',
		B: '#forge:storage_blocks/bakelite'
	}).id('tfg:shaped/lv_hermetic_casing_bakelite')
}