// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event
 */
function registerTFGAsphaltRoadRecipes(event) {
	const tarExtract = (id, input, fluidId, fluidMb) => {
		event.recipes.gtceu.extractor(`tfg:asphalt/tar_extract/${id}`)
			.itemInputs(`1x ${input}`)
			.itemOutputs('2x tfg:tar_chunk')
			.outputFluids(Fluid.of(fluidId, fluidMb))
			.duration(200)
			.EUt(16)
	}

	tarExtract('oil_tar', 'tfg:oil_tar', 'gtceu:oil', 10)
	tarExtract('raw_oil_tar', 'tfg:raw_oil_tar', 'gtceu:oil_medium', 10)
	tarExtract('heavy_oil_tar', 'tfg:heavy_oil_tar', 'gtceu:oil_heavy', 10)

	const tarSolidify = (id, fluidId, outputBlock) => {
		event.recipes.gtceu.fluid_solidifier(`tfg:asphalt/tar_solidify/${id}`)
			.inputFluids(Fluid.of(fluidId, 1000))
			.itemOutputs(`1x ${outputBlock}`)
			.duration(20 * 20)
			.EUt(30)
	}

	tarSolidify('oil', 'gtceu:oil', 'tfg:oil_tar')
	tarSolidify('raw_oil', 'gtceu:oil_medium', 'tfg:raw_oil_tar')
	tarSolidify('heavy_oil', 'gtceu:oil_heavy', 'tfg:heavy_oil_tar')

	event.recipes.gtceu.macerator('tfg:asphalt/gilsonite_dust')
		.itemInputs('1x tfg:gilsonite')
		.itemOutputs('1x #forge:dusts/gilsonite')
		.duration(100)
		.EUt(7)

	const tarMacerateToCarbon = (suffix, blockId) => {
		event.recipes.gtceu.macerator(`tfg:asphalt/macerate/${suffix}`)
			.itemInputs(`1x ${blockId}`)
			.itemOutputs('1x gtceu:carbon_dust')
			.duration(160)
			.EUt(16)
	}
	tarMacerateToCarbon('oil_tar', 'tfg:oil_tar')
	tarMacerateToCarbon('raw_oil_tar', 'tfg:raw_oil_tar')
	tarMacerateToCarbon('light_oil_tar', 'tfg:light_oil_tar')
	tarMacerateToCarbon('heavy_oil_tar', 'tfg:heavy_oil_tar')

	event.recipes.gtceu.mixer('tfg:asphalt/binder')
		.itemInputs('1x tfg:tar_chunk', '1x #forge:dusts/stone')
		.itemOutputs('1x tfg:asphalt_binder')
		.duration(200)
		.EUt(32)

	event.recipes.gtceu.mixer('tfg:asphalt/binder_boosted')
		.itemInputs('1x tfg:tar_chunk', '1x #forge:dusts/stone', '1x #forge:dusts/gilsonite')
		.itemOutputs('2x tfg:asphalt_binder')
		.duration(200)
		.EUt(32)

	event.recipes.gtceu.mixer('tfg:asphalt/mix')
		.itemInputs('4x rnr:crushed_base_course', '1x #minecraft:sand', '1x #forge:dusts/stone', '1x tfg:asphalt_binder')
		.outputFluids(Fluid.of('tfg:asphalt_mix', 1000))
		.duration(400)
		.EUt(32)

	event.recipes.gtceu.fluid_heater('tfg:asphalt/rubble_to_mix')
		.itemInputs('1x tfg:asphalt_rubble')
		.outputFluids(Fluid.of('tfg:asphalt_mix', 50))
		.duration(160)
		.EUt(16)

	event.recipes.gtceu.assembler('tfg:asphalt/asphalt_road_hot')
		.itemInputs('rnr:base_course')
		.inputFluids(Fluid.of('tfg:asphalt_mix', 100))
		.itemOutputs('tfg:asphalt_road_hot')
		.circuit(1)
		.duration(100)
		.EUt(120)

	event.recipes.gtceu.chemical_bath('tfg:asphalt/asphalt_road_hot_cool_down_clean_water')
		.itemInputs('tfg:asphalt_road_hot')
		.inputFluids('#tfg:clean_water 250')
		.itemOutputs('tfg:asphalt_road')
		.duration(40)
		.EUt(120)

	event.recipes.gtceu.chemical_bath('tfg:asphalt/asphalt_road_hot_cool_down_distilled_water')
		.itemInputs('tfg:asphalt_road_hot')
		.inputFluids(Fluid.of('gtceu:distilled_water', 250))
		.itemOutputs('tfg:asphalt_road')
		.duration(25)
		.EUt(120)

	event.stonecutting('tfg:asphalt_road_stairs', 'tfg:asphalt_road').id('tfg:stonecutting/asphalt_road_stairs')
	event.stonecutting('tfg:asphalt_road_slab', 'tfg:asphalt_road').id('tfg:stonecutting/asphalt_road_slab')

	// Vanilla GregTech oil distill recipes have no item outputs.
	// Match PetrochemRecipes.java fluid amounts + chanced tar vs fluid solidifier (1000 mB -> 1 block):
	// 50 mB -> 5% (500/10000); raw 100 mB -> 10% (1000); heavy 100 mB -> 15% (1500).
	event.remove({ id: 'gtceu:distillation_tower/distill_oil' })
	event.recipes.gtceu.distillation_tower('gtceu:distill_oil')
		.inputFluids(Fluid.of('gtceu:oil', 50))
		.outputFluids(
			Fluid.of('gtceu:sulfuric_heavy_fuel', 15),
			Fluid.of('gtceu:sulfuric_light_fuel', 50),
			Fluid.of('gtceu:sulfuric_naphtha', 20),
			Fluid.of('gtceu:sulfuric_gas', 60),
		)
		.chancedOutput('1x tfg:oil_tar', 500, 0)
		.disableDistilleryRecipes(true)
		.duration(20)
		.EUt(96)

	event.remove({ id: 'gtceu:distillation_tower/distill_raw_oil' })
	event.recipes.gtceu.distillation_tower('gtceu:distill_raw_oil')
		.inputFluids(Fluid.of('gtceu:oil_medium', 100))
		.outputFluids(
			Fluid.of('gtceu:sulfuric_heavy_fuel', 10),
			Fluid.of('gtceu:sulfuric_light_fuel', 50),
			Fluid.of('gtceu:sulfuric_naphtha', 150),
			Fluid.of('gtceu:sulfuric_gas', 60),
		)
		.chancedOutput('1x tfg:raw_oil_tar', 1000, 0)
		.disableDistilleryRecipes(true)
		.duration(20)
		.EUt(96)

	event.remove({ id: 'gtceu:distillation_tower/distill_heavy_oil' })
	event.recipes.gtceu.distillation_tower('gtceu:distill_heavy_oil')
		.inputFluids(Fluid.of('gtceu:oil_heavy', 100))
		.outputFluids(
			Fluid.of('gtceu:sulfuric_heavy_fuel', 250),
			Fluid.of('gtceu:sulfuric_light_fuel', 45),
			Fluid.of('gtceu:sulfuric_naphtha', 15),
			Fluid.of('gtceu:sulfuric_gas', 60),
		)
		.chancedOutput('1x tfg:heavy_oil_tar', 1500, 0)
		.disableDistilleryRecipes(true)
		.duration(20)
		.EUt(288)
}
