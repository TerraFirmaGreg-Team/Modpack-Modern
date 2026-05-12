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
			.EUt(GTValues.VA[GTValues.LV])
	}

	tarExtract('oil_tar', 'tfg:oil_tar', 'gtceu:oil', 10)
	//tarExtract('raw_oil_tar', 'tfg:raw_oil_tar', 'gtceu:oil_medium', 10)
	//tarExtract('heavy_oil_tar', 'tfg:heavy_oil_tar', 'gtceu:oil_heavy', 10)

	const tarSolidify = (id, fluidId, outputBlock) => {
		event.recipes.gtceu.fluid_solidifier(`tfg:asphalt/tar_solidify/${id}`)
			.inputFluids(Fluid.of(fluidId, 1000))
			.itemOutputs(`1x ${outputBlock}`)
			.duration(400)
			.EUt(GTValues.VA[GTValues.MV])
	}

	tarSolidify('oil', 'gtceu:oil', 'tfg:oil_tar')
	//tarSolidify('raw_oil', 'gtceu:oil_medium', 'tfg:raw_oil_tar')
	//tarSolidify('heavy_oil', 'gtceu:oil_heavy', 'tfg:heavy_oil_tar')

	event.recipes.gtceu.macerator('tfg:asphalt/gilsonite_dust')
		.itemInputs('1x tfg:gilsonite')
		.itemOutputs('1x #forge:dusts/gilsonite')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	const tarMacerateToCarbon = (suffix, blockId) => {
		event.recipes.gtceu.macerator(`tfg:asphalt/macerate/${suffix}`)
			.itemInputs(`1x ${blockId}`)
			.itemOutputs('1x gtceu:carbon_dust')
			.chancedOutput('1x #forge:dusts/gilsonite', 2500, 0)
			.duration(160)
			.EUt(GTValues.VH[GTValues.LV])
	}
	tarMacerateToCarbon('oil_tar', 'tfg:oil_tar')
	tarMacerateToCarbon('raw_oil_tar', 'tfg:raw_oil_tar')
	tarMacerateToCarbon('light_oil_tar', 'tfg:light_oil_tar')
	tarMacerateToCarbon('heavy_oil_tar', 'tfg:heavy_oil_tar')

	event.recipes.gtceu.mixer('tfg:asphalt/binder')
		.itemInputs('1x tfg:tar_chunk', '4x #tfg:stone_dusts')
		.itemOutputs('1x tfg:asphalt_binder')
		.circuit(1)
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.mixer('tfg:asphalt/binder_boosted')
		.itemInputs('1x tfg:tar_chunk', '4x #tfg:stone_dusts', '1x #forge:dusts/gilsonite')
		.itemOutputs('2x tfg:asphalt_binder')
		.circuit(2)
		.duration(400)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.mixer('tfg:asphalt/mix')
		.itemInputs('4x rnr:crushed_base_course', '2x #minecraft:sand', '2x #tfg:stone_dusts', '1x tfg:asphalt_binder')
		.outputFluids(Fluid.of('tfg:asphalt_mix', 1000))
		.duration(400)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:asphalt/asphalt_road_hot')
		.itemInputs('16x rnr:base_course')
		.inputFluids(Fluid.of('tfg:asphalt_mix', 1000))
		.itemOutputs('16x tfg:asphalt_road_hot')
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VHA[GTValues.MV])

	event.recipes.greate.mixing('16x tfg:asphalt_road_hot', [Fluid.of('tfg:asphalt_mix', 1000), '16x rnr:base_course'])
		.recipeTier(2)
		.heated()
		.id('tfg:create/mixer/asphalt_road_hot')

	event.recipes.gtceu.forming_press('tfg:asphalt/asphalt_road_hot_press')
		.itemInputs('1x tfg:asphalt_road_hot')
		.itemOutputs('1x tfg:asphalt_road')
		.duration(20)
		.EUt(GTValues.VHA[GTValues.MV])

	event.recipes.greate.pressing('1x tfg:asphalt_road', '1x tfg:asphalt_road_hot')
		.recipeTier(2)
		.id('greate:pressing/asphalt_road_hot')

	event.recipes.gtceu.fluid_heater('tfg:asphalt/rubble_to_mix')
		.itemInputs('1x tfg:asphalt_rubble')
		.outputFluids(Fluid.of('tfg:asphalt_mix', 40))
		.duration(160)
		.EUt(GTValues.VH[GTValues.MV])

	event.stonecutting('tfg:asphalt_road_stairs', 'tfg:asphalt_road').id('tfg:stonecutting/asphalt_road_stairs')
	event.stonecutting('tfg:asphalt_road_slab', 'tfg:asphalt_road').id('tfg:stonecutting/asphalt_road_slab')
}
