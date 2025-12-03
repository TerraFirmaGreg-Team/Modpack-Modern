"use strict";

function registerTFGChipboardRecipes(event) {

	// Glue from resin
	event.recipes.gtceu.extractor('tfg:glue_from_tfc_glue')
		.itemInputs('tfc:glue')
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(20 * 10)
		.EUt(5)

	event.recipes.gtceu.extractor('tfg:glue_from_sticky_resin')
		.itemInputs('gtceu:sticky_resin')
		.outputFluids(Fluid.of('gtceu:glue', 100))
		.duration(20 * 10)
		.EUt(5)

	event.recipes.gtceu.extractor('tfg:glue_from_conifer_resin')
		.itemInputs('tfg:conifer_rosin')
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(20 * 10)
		.EUt(5)

	event.recipes.gtceu.mixer('tfg:glue_from_bone_meal')
		.itemInputs('minecraft:bone_meal')
		.inputFluids(Fluid.of('tfc:limewater', 500))
		.outputFluids(Fluid.of('gtceu:glue', 50))
		.duration(100)
		.EUt(5)

	// Chipboard
	event.recipes.gtceu.mixer('gtceu:chipboard_composite_wax')
		.itemInputs('2x #tfg:wood_dusts',
			'1x #forge:wax')
		.itemOutputs('2x tfg:chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('gtceu:chipboard_composite_resin')
		.itemInputs('4x #tfg:wood_dusts',
			'1x gtceu:sticky_resin')
		.itemOutputs('4x tfg:chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.mixer('gtceu:chipboard_composite_glue')
		.itemInputs('2x #tfg:wood_dusts',
			'1x tfc:glue')
		.itemOutputs('2x tfg:chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])


	event.recipes.gtceu.mixer('gtceu:chipboard_composite_fluid_glue')
		.itemInputs('1x #tfg:wood_dusts')
		.inputFluids(Fluid.of('gtceu:glue', 25))
		.itemOutputs('1x tfg:chipboard_composite')
		.duration(10)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.compressor('gtceu:wood_mdf')
		.itemInputs('1x tfg:chipboard_composite')
		.itemOutputs('gtceu:wood_plate')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('gtceu:treated_chipboard_composite')
		.itemInputs('1x tfg:chipboard_composite')
		.inputFluids(Fluid.of('gtceu:creosote', 50))
		.itemOutputs('tfg:treated_chipboard_composite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('gtceu:bath_high_density_treated_fiberboard')
		.itemInputs('1x gtceu:wood_plate')
		.inputFluids(Fluid.of('gtceu:creosote', 50))
		.itemOutputs('tfg:high_density_treated_fiberboard')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.chemical_bath('gtceu:bath_treated_wood_dust')
		.itemInputs('#tfg:wood_dusts')
		.inputFluids(Fluid.of('gtceu:creosote', 50))
		.itemOutputs('gtceu:treated_wood_dust')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.compressor('tfg:compressed_treated_chipboard_composite')
		.itemInputs('tfg:treated_chipboard_composite')
		.itemOutputs('tfg:high_density_treated_fiberboard')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('tfg:resin_circuit_assembler')
		.itemInputs('gtceu:wood_plate', '2x gtceu:sticky_resin')
		.itemOutputs('gtceu:resin_circuit_board')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.ULV])

	event.replaceInput({ id: 'gtceu:assembler/phenolic_board' }, '#tfg:wood_dusts', 'tfg:high_density_treated_fiberboard')
}