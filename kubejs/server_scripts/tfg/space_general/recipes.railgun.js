"use strict";

function registerTFGRailgunRecipes(event) {

	// Railgun stuff
	// (the railgun inputs and outputs are in tfg-core)


	//item bus to railgun item bus conversion recipes
	const GTTiers = ['ulv', 'lv', 'mv', 'hv', 'ev', 'iv', 'luv', 'zpm', 'uv', 'uhv']
	GTTiers.forEach(x => {
		event.recipes.gtceu.assembler(`tfg:${x}_input_to_${x}_railgun_input_assembler`)
			.itemInputs(`gtceu:${x}_input_bus`)
			.circuit(4)
			.itemOutputs(`tfg:${x}_railgun_item_loader_in`)
			.duration(20 * 5)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.assembler(`tfg:${x}_output_to_${x}_railgun_output_assembler`)
			.itemInputs(`gtceu:${x}_output_bus`)
			.circuit(4)
			.itemOutputs(`tfg:${x}_railgun_item_loader_out`)
			.duration(20 * 5)
			.EUt(GTValues.VA[GTValues.LV])
	})

	//Railgun ammo
	event.recipes.gtceu.assembler('tfg:railgun_ammo_basic')
		.itemInputs('#forge:double_plates/steel', '2x #forge:rods/magnetic_iron', '2x #forge:fine_wires/annealed_copper')
		.inputFluids('gtceu:rocket_fuel 250')
		.itemOutputs('tfg:railgun_ammo_shell')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:railgun_ammo_advanced')
		.itemInputs('#forge:double_plates/titanium', '2x #forge:rods/magnetic_steel', '2x #forge:fine_wires/gold')
		.inputFluids('gtceu:rocket_fuel 250')
		.itemOutputs('4x tfg:railgun_ammo_shell')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:railgun_ammo_best')
		.itemInputs('#forge:double_plates/tungsten', '2x #forge:rods/magnetic_neodymium', '2x #forge:fine_wires/aluminium')
		.inputFluids('gtceu:rocket_fuel 250')
		.itemOutputs('8x tfg:railgun_ammo_shell')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:railgun_ammo_moon')
		.itemInputs('#forge:double_plates/steel', '2x ae2:charged_certus_quartz_crystal', '2x ae2:quartz_fiber')
		.inputFluids('gtceu:rocket_fuel 250')
		.itemOutputs('4x tfg:railgun_ammo_shell')
		.dimension('ad_astra:moon')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('tfg:railgun_ammo_mars')
		.itemInputs('#forge:double_plates/lead', '2x #forge:rods/ostrum', '2x #forge:fine_wires/silver')
		.inputFluids('gtceu:rocket_fuel 250')
		.itemOutputs('8x tfg:railgun_ammo_shell')
		.dimension('ad_astra:mars')
		.duration(20 * 10)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.shaped('tfg:railgun_ammo_loader', [
		'RMR',
		'MBM',
		'CCC'
	], {
		B: 'gtceu:mv_input_bus',
		R: 'gtceu:mv_robot_arm',
		M: 'gtceu:mv_electric_motor',
		C: '#forge:single_cables/annealed_copper'
	}).addMaterialInfo().id('tfg:shaped/railgun_ammo_loader')

	event.recipes.gtceu.shaped('tfg:interplanetary_logistics_monitor', [
		'CDC',
		'SHE',
		'WCW'
	], {
		C: '#gtceu:circuits/hv',
		D: 'gtceu:computer_monitor_cover',
		S: 'gtceu:hv_sensor',
		H: 'gtceu:hv_machine_hull',
		E: 'gtceu:hv_emitter',
		W: '#forge:single_cables/silver'
	}).addMaterialInfo().id('tfg:shaped/interplanetary_logistics_monitor')

	event.recipes.gtceu.shaped('tfg:interplanetary_item_launcher', [
		'NSN',
		'CHC',
		'NEN'
	], {
		C: '#gtceu:circuits/ev',
		S: 'gtceu:hv_sensor',
		E: 'gtceu:hv_emitter',
		H: 'gtceu:ev_machine_hull',
		N: '#forge:plates/hsla_steel'
	}).addMaterialInfo().id('tfg:shaped/interplanetary_item_launcher')

	event.recipes.gtceu.shaped('tfg:interplanetary_item_receiver', [
		'CSC',
		'WHW',
		'CSC'
	], {
		C: '#gtceu:circuits/mv',
		S: 'gtceu:mv_sensor',
		W: '#forge:double_cables/copper',
		H: 'gtceu:mv_machine_hull'
	}).addMaterialInfo().id('tfg:shaped/interplanetary_item_receiver')
}