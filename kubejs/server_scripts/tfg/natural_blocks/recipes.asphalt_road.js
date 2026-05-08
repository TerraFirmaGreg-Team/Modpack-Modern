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
	tarExtract('raw_oil_tar', 'tfg:raw_oil_tar', 'gtceu:raw_oil', 10)
	tarExtract('light_oil_tar', 'tfg:light_oil_tar', 'gtceu:light_oil', 10)
	tarExtract('heavy_oil_tar', 'tfg:heavy_oil_tar', 'gtceu:heavy_oil', 10)

	event.recipes.gtceu.macerator('tfg:asphalt/gilsonite_dust')
		.itemInputs('1x tfg:gilsonite')
		.itemOutputs('1x tfg:gilsonite_dust')
		.duration(100)
		.EUt(7)

	event.recipes.gtceu.mixer('tfg:asphalt/binder')
		.itemInputs('1x tfg:tar_chunk', '1x tfg:gilsonite_dust')
		.itemOutputs('1x tfg:asphalt_binder')
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
}
