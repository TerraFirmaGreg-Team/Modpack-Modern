// priority: 0
"use strict";

const registerMERequesterRecipes = (event) => {

	event.remove({ id: 'merequester:requester' })

	// ME Requester
	event.recipes.gtceu.assembler('tfg:merequester/merequester')
		.itemInputs(
			'expatternprovider:ex_pattern_provider',
			'#expatternprovider:extended_interface',
			'megacells:mega_crafting_unit',
			'4x #gtceu:circuits/luv',
			'4x #forge:double_plates/titanium_tungsten_carbide',
			'4x gtceu:exquisite_amethyst_gem')
		.inputFluids(Fluid.of('tfg:fluix', 144 * 20))
		.itemOutputs('merequester:requester')
		.duration(760)
		.EUt(GTValues.VA[GTValues.IV])
		.cleanroom(CleanroomType.CLEANROOM)

	event.recipes.gtceu.assembler('tfg:merequester/merequester_moon')
		.itemInputs(
			'expatternprovider:ex_pattern_provider',
			'#expatternprovider:extended_interface',
			'megacells:mega_crafting_unit',
			'4x #gtceu:circuits/iv',
			'4x #forge:double_plates/titanium_tungsten_carbide',
			'4x gtceu:exquisite_amethyst_gem')
		.inputFluids(Fluid.of('tfg:cryogenized_fluix', 144 * 20))
		.itemOutputs('merequester:requester')
		.duration(760)
		.EUt(GTValues.VA[GTValues.EV])
		.dimension('ad_astra:moon')
		.addMaterialInfo(true)

	// ME Requester Terminal
	event.shaped('merequester:requester_terminal', [
		'ABC',
		'DED',
		'FGF'
	], {
		A: '#forge:tools/screwdrivers',
		B: 'ae2:terminal',
		C: '#forge:tools/mallets',
		D: '#forge:rods/steel',
		E: 'merequester:requester',
		F: '#forge:plates/steel',
		G: 'ae2:engineering_processor'
	}).id('merequester:requester_terminal')

	event.recipes.gtceu.assembler('assembler:ae2_requester_terminal_terminal')
		.itemInputs(
			'ae2:terminal',
			'2x #forge:rods/steel',
			'ae2:engineering_processor',
			'2x #forge:plates/steel',
			'merequester:requester')
		.itemOutputs('merequester:requester_terminal')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])
		.addMaterialInfo(true)
}