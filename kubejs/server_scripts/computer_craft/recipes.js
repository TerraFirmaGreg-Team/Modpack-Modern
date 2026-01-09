// priority: 0
"use strict";

const registerComputerCraftRecipes = (event) => {

	// Удаление рецептов мода
	event.remove({
		not: [
			{ id: 'computercraft:printed_pages' },
			{ id: 'computercraft:printed_book' },
		], mod: 'computercraft'
	});

	// Networking Cable
	event.recipes.gtceu.assembler('computercraft:cable')
		.itemInputs('ae2:fluix_glass_cable')
		.inputFluids(Fluid.of('gtceu:redstone', 288))
		.itemOutputs('computercraft:cable')
		.duration(80)
		.EUt(120)
		.addMaterialInfo(true)

	// Wireless Modem Normal
	event.recipes.gtceu.shaped('computercraft:wireless_modem_normal', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'gtceu:hv_sensor',
		B: 'ae2:calculation_processor',
		C: '#gtceu:circuits/hv',
		D: 'computercraft:cable',
	}).addMaterialInfo().id('tfg:crafting/wireless_modem_normal')

	// Wireless Modem Advanced
	event.recipes.gtceu.shaped('computercraft:wireless_modem_advanced', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'ae2:wireless_receiver',
		B: 'ae2:calculation_processor',
		C: '#gtceu:circuits/hv',
		D: 'computercraft:cable',
	}).addMaterialInfo().id('tfg:crafting/wireless_modem_advanced')

	// Monitor Normal
	event.recipes.gtceu.shaped('computercraft:monitor_normal', [
		'ABA',
		'CDC',
		'EFE'
	], {
		A: 'gtceu:magnesium_diboride_single_wire',
		B: 'gtceu:computer_monitor_cover',
		C: 'ae2:calculation_processor',
		D: 'gtceu:mv_machine_casing',
		E: 'computercraft:cable',
		F: '#gtceu:circuits/mv',
	}).addMaterialInfo().id('tfg:crafting/monitor_normal')

	// Monitor Advanced
	event.recipes.gtceu.shaped('computercraft:monitor_advanced', [
		'ABA',
		'CDC',
		'EFE'
	], {
		A: 'gtceu:mercury_barium_calcium_cuprate_single_wire',
		B: 'gtceu:computer_monitor_cover',
		C: 'ae2:calculation_processor',
		D: 'gtceu:hv_machine_casing',
		E: 'computercraft:cable',
		F: '#gtceu:circuits/hv',
	}).addMaterialInfo().id('tfg:crafting/monitor_advanced')

	// Disk Drive
	event.recipes.gtceu.shaped('computercraft:disk_drive', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: 'computercraft:cable',
		B: 'ae2:drive',
		C: '#gtceu:circuits/mv',
		D: 'gtceu:mv_machine_casing',
		E: 'gtceu:mv_sensor',
	}).addMaterialInfo().id('tfg:crafting/disk_drive')

	// Speaker
	event.recipes.gtceu.shaped('computercraft:speaker', [
		' A ',
		'BCB',
		' D '
	], {
		A: 'minecraft:note_block',
		B: 'computercraft:cable',
		C: 'gtceu:mv_machine_casing',
		D: '#gtceu:circuits/mv',
	}).addMaterialInfo().id('tfg:crafting/speaker')

	// Printer
	event.recipes.gtceu.shaped('computercraft:printer', [
		'ABC',
		'DED',
		'FBF'
	], {
		A: 'gtceu:mv_electric_motor',
		B: '#gtceu:circuits/mv',
		C: 'gtceu:mv_robot_arm',
		D: 'computercraft:cable',
		E: 'gtceu:hv_machine_casing',
		F: 'gtceu:mv_conveyor_module'
	}).addMaterialInfo().id('tfg:crafting/printer')

	// Wired Modem
	event.recipes.gtceu.shaped('computercraft:wired_modem', [
		' A ',
		'BCB',
		'BDB'
	], {
		A: 'gtceu:mv_sensor',
		B: 'computercraft:cable',
		C: '#gtceu:circuits/mv',
		D: 'ae2:calculation_processor',
	}).addMaterialInfo().id('tfg:crafting/wired_modem')

	event.shapeless('computercraft:wired_modem', ['computercraft:wired_modem_full'])
		.id('tfg:crafting/wired_modem_shapeless')

	event.shapeless('computercraft:wired_modem_full', ['computercraft:wired_modem'])
		.id('tfg:crafting/wired_modem_full_shapeless')

	// Computer Normal
	event.recipes.gtceu.assembler('computercraft:assembler/computer_normal')
		.itemInputs('1x gtceu:mv_machine_casing', '2x #gtceu:circuits/hv', '3x #forge:double_wires/magnesium_diboride', '2x #gtceu:batteries/mv', '4x computercraft:cable', '8x gtceu:cpu_chip', '1x gtceu:computer_monitor_cover')
		.circuit(4)
		.itemOutputs('computercraft:computer_normal')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true)

	// Computer Advanced
	event.recipes.gtceu.assembler('computercraft:assembler/computer_advanced')
		.itemInputs('1x gtceu:hv_machine_casing', '2x #gtceu:circuits/ev', '3x #forge:double_wires/mercury_barium_calcium_cuprate', '2x #gtceu:batteries/hv', '4x computercraft:cable', '12x gtceu:soc', '1x gtceu:computer_monitor_cover')
		.circuit(4)
		.itemOutputs('computercraft:computer_advanced')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	// Turtle Normal
	event.recipes.gtceu.assembler('computercraft:assembler/turtle_normal')
		.itemInputs('1x computercraft:computer_normal', '2x #gtceu:circuits/ev', '1x gtceu:steel_crate', '2x gtceu:hv_conveyor_module', '2x gtceu:hv_robot_arm', '1x gtceu:hv_emitter', '1x gtceu:hv_sensor', '1x gtceu:hv_fluid_regulator')
		.circuit(4)
		.itemOutputs('computercraft:turtle_normal')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.HV])
		.addMaterialInfo(true)

	// Turtle Advanced
	event.recipes.gtceu.assembler('computercraft:assembler/turtle_advanced')
		.itemInputs('1x computercraft:computer_advanced', '2x #gtceu:circuits/iv', '1x gtceu:aluminium_crate', '2x gtceu:ev_conveyor_module', '2x gtceu:ev_robot_arm', '1x gtceu:ev_emitter', '1x gtceu:ev_sensor', '1x gtceu:ev_fluid_regulator')
		.circuit(4)
		.itemOutputs('computercraft:turtle_advanced')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.EV])
		.addMaterialInfo(true)

	// Disk Crafts
	for (let i = 0; i < 16; i++) {
		event.recipes.gtceu.chemical_bath('computercraft:disk' + `${global.MINECRAFT_DYE_NAMES[i]}`)
			.itemInputs('ae2:blank_pattern')
			.inputFluids(Fluid.of(`tfc:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 288))
			.itemOutputs(Item.of('computercraft:disk', global.COMPUTER_CRAFT_DISCS[i]))
			.category(GTRecipeCategories.CHEM_DYES)
			.duration(20)
			.EUt(7)
	}

	// Normal Pocket  Computers
	// Pocket Computer Normal
	event.recipes.gtceu.shaped('computercraft:pocket_computer_normal', [
		'ABA',
		'CDE',
		'FGF'
	], {
		A: 'ae2:wireless_receiver',
		B: 'gtceu:mercury_barium_calcium_cuprate_single_wire',
		C: '#gtceu:batteries/hv',
		D: 'ae2:terminal',
		E: 'gtceu:hv_emitter',
		F: '#gtceu:circuits/ev',
		G: '#forge:plates/titanium'
	}).addMaterialInfo().id('tfg:crafting/pocket_computer_normal')

	// Pocket Computer Normal Upgrade : Wireless Modem Advanced
	event.shapeless(Item.of('computercraft:pocket_computer_normal', '{Upgrade:"computercraft:wireless_modem_advanced"}'), [
		'computercraft:pocket_computer_normal',
		'computercraft:wireless_modem_advanced'
	]).id('computercraft:ender_pocket_computer_normal_shapless')

	// Pocket Computer Normal Upgrade : Wireless Modem Normal
	event.shapeless(Item.of('computercraft:pocket_computer_normal', '{Upgrade:"computercraft:wireless_modem_normal"}'), [
		'computercraft:pocket_computer_normal',
		'computercraft:wireless_modem_normal'
	]).id('computercraft:wireless_pocket_computer_normal_shapless')

	// Pocket Computer Normal Upgrade : Speaker
	event.shapeless(Item.of('computercraft:pocket_computer_normal', '{Upgrade:"computercraft:speaker"}'), [
		'computercraft:pocket_computer_normal',
		'computercraft:speaker'
	]).id('computercraft:noisy_pocket_computer_normal_shapless')

	// Advanced Pocket Computers
	// Pocket Computer Advanced
	event.recipes.gtceu.shaped('computercraft:pocket_computer_advanced', [
		'ABA',
		'CDE',
		'FGF'
	], {
		A: 'ae2:wireless_receiver',
		B: 'gtceu:uranium_triplatinum_single_wire',
		C: '#gtceu:batteries/ev',
		D: 'ae2:terminal',
		E: 'gtceu:ev_emitter',
		F: '#gtceu:circuits/iv',
		G: '#forge:plates/tungsten_steel'
	}).addMaterialInfo().id('tfg:crafting/pocket_computer_advanced')

	// Pocket Computer Advanced Upgrade : Wireless Modem Advanced
	event.shapeless(Item.of('computercraft:pocket_computer_advanced', '{Upgrade:"computercraft:wireless_modem_advanced"}'), [
		'computercraft:pocket_computer_advanced',
		'computercraft:wireless_modem_advanced'
	]).id('computercraft:ender_pocket_computer_advanced_shapless')

	// Pocket Computer Advanced Upgrade : Wireless Modem Normal
	event.shapeless(Item.of('computercraft:pocket_computer_advanced', '{Upgrade:"computercraft:wireless_modem_normal"}'), [
		'computercraft:pocket_computer_advanced',
		'computercraft:wireless_modem_normal'
	]).id('computercraft:wireless_pocket_computer_advanced_shapless')

	// Pocket Computer Advanced Upgrade : Speaker
	event.shapeless(Item.of('computercraft:pocket_computer_advanced', '{Upgrade:"computercraft:speaker"}'), [
		'computercraft:pocket_computer_advanced',
		'computercraft:speaker'
	]).id('computercraft:noisy_pocket_computer_advanced_shapless')

	//Redstone Integrator
	event.recipes.gtceu.assembler('computercraft:assembler/redstone_relay')
		.itemInputs('1x computercraft:wired_modem', '1x gtceu:mv_machine_casing', '10x vintageimprovements:redstone_module', '1x ae2:redstone_card', '2x gtceu:transistor', '1x gtceu:mv_emitter')
		.circuit(4)
		.itemOutputs('computercraft:redstone_relay')
		.duration(1200)
		.EUt(GTValues.VA[GTValues.MV])
		.addMaterialInfo(true)
}