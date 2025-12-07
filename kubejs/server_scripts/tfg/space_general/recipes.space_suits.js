"use strict";

function registerTFGSpaceSuitRecipes(event) {

	event.recipes.gtceu.shaped('ad_astra:launch_pad', [
		'BAB',
		'AAA',
		'BAB'
	], {
		A: '#forge:plates/steel',
		B: '#forge:rods/steel'
	}).addMaterialInfo().id('tfg:launch_pad')


	// Space suit gases

	event.recipes.gtceu.gas_pressurizer('compressed_nitrox')
		.inputFluids(Fluid.of('gtceu:nitrogen', 8000), Fluid.of('gtceu:oxygen', 2000))
		.outputFluids(Fluid.of('tfg:compressed_nitrox', 1000))
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.gas_pressurizer('compressed_heliox')
		.inputFluids(Fluid.of('gtceu:helium', 8000), Fluid.of('gtceu:oxygen', 2000))
		.outputFluids(Fluid.of('tfg:compressed_heliox', 1000))
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.gas_pressurizer('compressed_heliox_3')
		.inputFluids(Fluid.of('gtceu:helium_3', 8000), Fluid.of('gtceu:oxygen', 2000))
		.outputFluids(Fluid.of('tfg:compressed_heliox_3', 1000))
		.circuit(1)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.gas_pressurizer('compressed_trimix')
		.inputFluids(Fluid.of('gtceu:nitrogen', 5000), Fluid.of('gtceu:oxygen', 3000), Fluid.of('gtceu:helium', 2000))
		.outputFluids(Fluid.of('tfg:compressed_trimix', 1000))
		.circuit(2)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.gas_pressurizer('compressed_trimix_3')
		.inputFluids(Fluid.of('gtceu:nitrogen', 5000), Fluid.of('gtceu:oxygen', 3000), Fluid.of('gtceu:helium_3', 2000))
		.outputFluids(Fluid.of('tfg:compressed_trimix_3', 1000))
		.circuit(2)
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	//#region space suits

	event.recipes.gtceu.forming_press('space_suit_fabric')
		.itemInputs(
			'#forge:foils/aluminium',
			'gtceu:carbon_fiber_mesh',
			'#forge:foils/silicone_rubber',
			'tfg:polycaprolactam_fabric'
		)
		.itemOutputs('2x tfg:space_suit_fabric')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	event.recipes.gtceu.forming_press('better_space_suit_fabric')
		.itemInputs(
			'#forge:foils/polybenzimidazole',
			'gtceu:carbon_fiber_mesh',
			'#forge:aerogels',
			'tfg:glacian_wool'
		)
		.itemOutputs('2x tfg:better_space_suit_fabric')
		.duration(20 * 5)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	event.recipes.gtceu.shaped('ad_astra:space_helmet', [
		'AAA',
		'ADA',
		'BBB'
	], {
		A: 'gtceu:tempered_glass',
		B: 'tfg:space_suit_fabric',
		D: '#forge:small_fluid_pipes/polyethylene'
	}).addMaterialInfo().id('tfg:space_helmet')

	event.recipes.gtceu.assembler('ad_astra:netherite_space_helmet')
		.itemInputs(
			'ad_astra:space_helmet',
			'2x #forge:plates/tungsten_steel',
			'1x #forge:plates/ostrum',
			'3x tfg:better_space_suit_fabric',
			'5x gtceu:laminated_glass'
		)
		.itemOutputs('ad_astra:netherite_space_helmet')
		.duration(400)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	event.recipes.gtceu.shaped('ad_astra:space_suit', [
		'B B',
		'BDB',
		'BBB'
	], {
		B: 'tfg:space_suit_fabric',
		D: 'ad_astra:oxygen_gear'
	}).addMaterialInfo().id('tfg:space_suit')

	event.shapeless('ad_astra:space_suit', ['ad_astra:space_suit'])
		.id('tfg:empty_space_suit')

	event.recipes.gtceu.assembler('ad_astra:netherite_space_suit')
		.itemInputs(
			'ad_astra:space_suit',
			'3x #forge:plates/tungsten_steel',
			'2x #forge:plates/ostrum',
			'5x tfg:better_space_suit_fabric'
		)
		.itemOutputs('ad_astra:netherite_space_suit')
		.duration(400)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	event.shapeless('ad_astra:netherite_space_suit', ['ad_astra:netherite_space_suit'])
		.id('tfg:empty_netherite_space_suit')

	event.recipes.gtceu.shaped('ad_astra:space_pants', [
		'BAB',
		'B B',
		'B B'
	], {
		A: 'gtceu:hv_electric_motor',
		B: 'tfg:space_suit_fabric',
	}).addMaterialInfo().id('tfg:space_pants')

	event.recipes.gtceu.assembler('ad_astra:netherite_space_pants')
		.itemInputs(
			'ad_astra:space_pants',
			'2x #forge:plates/tungsten_steel',
			'2x #forge:plates/ostrum',
			'4x tfg:better_space_suit_fabric'
		)
		.itemOutputs('ad_astra:netherite_space_pants')
		.duration(400)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	event.recipes.gtceu.shaped('ad_astra:space_boots', [
		'B B',
		'A A'
	], {
		A: '#forge:plates/polyphenylene_sulfide',
		B: 'tfg:space_suit_fabric'
	}).addMaterialInfo().id('tfg:space_boots')

	event.recipes.gtceu.assembler('ad_astra:netherite_space_boots')
		.itemInputs(
			'ad_astra:space_boots',
			'1x #forge:plates/tungsten_steel',
			'1x #forge:plates/ostrum',
			'2x tfg:better_space_suit_fabric'
		)
		.itemOutputs('ad_astra:netherite_space_boots')
		.duration(400)
		.EUt(GTValues.VA[GTValues.IV])
		.addMaterialInfo(true)

	event.recipes.gtceu.shaped('ad_astra:oxygen_gear', [
		'BAB',
		'ECE',
		'BDB'
	], {
		A: '#gtceu:circuits/hv',
		B: '#forge:tiny_fluid_pipes/stainless_steel',
		C: 'gtceu:hv_electric_pump',
		D: 'gtceu:fluid_detector_cover',
		E: 'ad_astra:gas_tank'
	}).addMaterialInfo().id('tfg:oxygen_gear')

	//#endregion
}