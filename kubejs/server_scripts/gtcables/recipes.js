// priority: 0
"use strict";

function registerGTCablesRecipes(event) {
	
	event.remove({ mod: 'gtcables' })

	event.shapeless('gtcables:spool', 'gtcables:spool')
		.id('tfg:shapeless/gtcables_spool_clear')

	event.shaped('gtcables:spool', [
		' A ',
		'BCB',
		' D '
	], {
		A: '#forge:tools/mallets',
		B: 'firmalife:treated_wood',
		C: 'firmalife:treated_lumber',
		D: '#forge:tools/files'
	}).id('tfg:shaped/gtcables_spool_from_wax')

	event.shaped('gtcables:spool', [
		' A ',
		'BCB',
		' D '
	], {
		A: '#forge:tools/mallets',
		B: 'gtceu:treated_wood_planks',
		C: 'gtceu:treated_wood_plate',
		D: '#forge:tools/files'
	}).id('tfg:shaped/gtcables_spool_from_treated')

	event.recipes.gtceu.assembler('gtcables:assemble_spools')
		.itemInputs('2x firmalife:treated_wood', 'firmalife:treated_lumber')
		.itemOutputs('gtcables:spool')
		.duration(50)
		.EUt(2)
		.circuit(5)

	event.recipes.gtceu.assembler('gtcables:assemble_spools_from_treated_wood')
		.itemInputs('2x gtceu:treated_wood_planks', 'gtceu:treated_wood_plate')
		.itemOutputs('gtcables:spool')
		.duration(50)
		.EUt(2)
		.circuit(5)

	// Connector

	event.shaped('gtcables:connector', [
		'GA ',
		'BDC',
		'EFE'
	], {
		A: 'tfg:electrical_insulator',
		B: '#forge:tools/hammers',
		C: '#forge:tools/screwdrivers',
		D: '#forge:rings/wrought_iron',
		E: '#forge:screws/wrought_iron',
		F: '#forge:plates/wrought_iron',
		G: '#forge:tools/wrenches'
	})

	event.shaped('2x gtcables:connector', [
		'GAA',
		'BDC',
		'EFE'
	], {
		A: 'tfg:electrical_insulator',
		B: '#forge:tools/hammers',
		C: '#forge:tools/screwdrivers',
		D: '#forge:rings/steel',
		E: '#forge:screws/steel',
		F: '#forge:plates/steel',
		G: '#forge:tools/wrenches'
	})

	event.recipes.gtceu.assembler('tfg:gtcables_connector_wrought_iron')
		.itemInputs('tfg:electrical_insulator', '#forge:rings/wrought_iron', '2x #forge:screws/wrought_iron', '#forge:plates/wrought_iron')
		.itemOutputs('gtcables:connector')
		.duration(100)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:gtcables_connector_steel')
		.itemInputs('2x tfg:electrical_insulator', '#forge:rings/steel', '2x #forge:screws/steel', '#forge:plates/steel')
		.itemOutputs('2x gtcables:connector')
		.duration(100)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:gtcables_connector_aluminium')
		.itemInputs('4x tfg:electrical_insulator', '#forge:rings/aluminium', '2x #forge:screws/aluminium', '#forge:plates/aluminium')
		.itemOutputs('4x gtcables:connector')
		.duration(100)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:gtcables_connector_stainless_steel')
		.itemInputs('6x tfg:electrical_insulator', '#forge:rings/stainless_steel', '2x #forge:screws/stainless_steel', '#forge:plates/stainless_steel')
		.itemOutputs('6x gtcables:connector')
		.duration(100)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:gtcables_connector_titanium')
		.itemInputs('8x tfg:electrical_insulator', '#forge:rings/titanium', '2x #forge:screws/titanium', '#forge:plates/titanium')
		.itemOutputs('8x gtcables:connector')
		.duration(100)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.assembler('tfg:gtcables_connector_tungsten_steel')
		.itemInputs('10x tfg:electrical_insulator', '#forge:rings/tungsten_steel', '2x #forge:screws/tungsten_steel', '#forge:plates/tungsten_steel')
		.itemOutputs('10x gtcables:connector')
		.duration(100)
		.EUt(GTValues.VHA[GTValues.LV])

	// Insulator

	event.recipes.gtceu.alloy_smelter('tfg:electrical_insulator_fireclay')
		.itemInputs('5x tfc:fire_clay')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('tfg:electrical_insulator')
		.duration(100)
		.EUt(GTValues.VHA[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:electrical_insulator_alumina')
		.itemInputs('5x #tfg:aluminium_oxide')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('tfg:electrical_insulator')
		.duration(100)
		.EUt(GTValues.VHA[GTValues.LV])
}