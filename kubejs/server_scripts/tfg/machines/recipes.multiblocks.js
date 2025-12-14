"use strict";

function registerTFGMultiblockRecipes(event) {

	// Multi-Smelter
	event.shaped('gtceu:multi_smelter', [
		'AAA',
		'BCB',
		'DBD'
	], {
		A: 'gtceu:hp_steam_furnace',
		B: '#gtceu:circuits/hv',
		C: 'gtceu:heatproof_machine_casing',
		D: 'gtceu:copper_single_cable'
	}).id('gtceu:shaped/multi_furnace')

	event.shaped('gtceu:multi_smelter', [
		'AAA',
		'BCB',
		'DBD'
	], {
		A: 'gtceu:lv_electric_furnace',
		B: '#gtceu:circuits/hv',
		C: 'gtceu:heatproof_machine_casing',
		D: 'gtceu:copper_single_cable'
	}).id('gtceu:shaped/multi_furnace2')

	// Electric Blast Furnace
	event.shaped('gtceu:electric_blast_furnace', [
		'AAA',
		'BCB',
		'DBD'
	], {
		A: 'gtceu:hp_steam_furnace',
		B: '#gtceu:circuits/lv',
		C: 'gtceu:heatproof_machine_casing',
		D: 'gtceu:tin_single_cable'
	}).id('gtceu:shaped/electric_blast_furnace')

	event.shaped('gtceu:electric_blast_furnace', [
		'AAA',
		'BCB',
		'DBD'
	], {
		A: 'gtceu:lv_electric_furnace',
		B: '#gtceu:circuits/lv',
		C: 'gtceu:heatproof_machine_casing',
		D: 'gtceu:tin_single_cable'
	}).id('gtceu:shaped/electric_blast_furnace2')

	// TFG customs
	event.shaped('tfg:electric_greenhouse', [
		'ABA',
		'CDC',
		'BCB'
	], {
		A: '#gtceu:circuits/mv',
		B: '#forge:single_cables/copper',
		C: 'tfc:compost',
		D: 'gtceu:steel_machine_casing'
	}).id('tfg:shaped/electric_greenhouse')

	event.shaped('gtceu:steam_bloomery', [
		'CEC',
		'DAD',
		'CBC'
	], {
		A: 'tfc:bloomery',
		B: '#forge:frames/bronze',
		C: '#forge:rods/black_steel',
		D: '#forge:screws/wrought_iron',
		E: '#forge:tools/wrenches'
	})

	event.shaped('tfg:ostrum_linear_accelerator', [
		'USU',
		'WZW',
		'PTP'
	], {
		S: 'tfg:casings/machine_casing_vacuum_engine_intake',
		Z: 'gtceu:iv_machine_hull',
		W: '#gtceu:circuits/iv',
		U: '#forge:double_plates/stellite_100',
		T: '#forge:single_cables/platinum',
		P: 'gtceu:iv_electric_pump'
	}
	).id('tfg:shaped/ostrum_linear_accelerator')

	event.recipes.gtceu.assembler('tfg:ostrum_harvester')
		.itemInputs(
			'1x gtceu:ev_machine_hull',
			'4x #gtceu:circuits/ev',
			'4x gtceu:ev_electric_motor',
			'4x #forge:rotors/black_steel',
			'4x gtceu:ev_electric_pump',
			'4x #forge:gears/desh')
		.itemOutputs('gtceu:ostrum_harvester')
		.duration(400)
		.EUt(GTValues.VA[GTValues.EV])
		.circuit(2)

	event.recipes.gtceu.assembler('tfg:moon_dust_harvester')
		.itemInputs(
			'1x gtceu:hv_machine_hull',
			'4x #gtceu:circuits/hv',
			'4x gtceu:hv_electric_motor',
			'4x #forge:rotors/titanium',
			'4x gtceu:hv_electric_pump',
			'4x #forge:gears/rocket_alloy_t1')
		.itemOutputs('gtceu:moon_dust_harvester')
		.duration(400)
		.EUt(GTValues.VA[GTValues.HV])
		.circuit(2)

	event.recipes.gtceu.shaped('tfg:evaporation_tower', [
		'TUT',
		'WZW',
		'TUT'
	], {
		T: '#gtceu:circuits/iv',
		W: 'gtceu:ev_electric_pump',
		U: '#forge:double_wires/nichrome',
		Z: 'gtceu:ev_machine_hull'
	}).addMaterialInfo().id('tfg:shaped/evaporation_tower')

	event.shaped('deafission:fission_reactor_mk1', [
		'TUT',
		'WZW',
		'TUT'
	], {
		T: 'gtceu:atomic_casing',
		W: '#gtceu:circuits/ev',
		U: 'gtceu:hv_field_generator',
		Z: 'gtceu:ev_machine_hull'
	}
	).id('tfg:shaped/fission_reactor_mk1')

	event.shaped('gtceu:nuclear_fuel_factory', [
		'TUT',
		'WZW',
		'TBT'
	], {
		T: 'gtceu:atomic_casing',
		W: '#gtceu:circuits/ev',
		U: 'gtceu:ev_emitter',
		Z: 'gtceu:ev_machine_hull',
		B: 'gtceu:ev_robot_arm'
	}
	).id('tfg:shaped/nuclear_fuel_factory')

	event.shaped('gtceu:heat_exchanger', [
		'TUT',
		'WZW',
		'GBG'
	], {
		T: 'gtceu:high_temperature_smelting_casing',
		W: '#gtceu:circuits/ev',
		U: 'gtceu:ev_sensor',
		Z: 'gtceu:ev_machine_hull',
		B: 'gtceu:ev_fluid_regulator',
		G: '#forge:gears/ostrum_iodide'
	}
	).id('tfg:shaped/heat_exchanger')

	event.shaped('tfg:nuclear_turbine', [
		'CTC',
		'TZT',
		'BTB'
	], {
		T: '#forge:gears/magnalium',
		Z: 'gtceu:ev_machine_hull',
		B: 'gtceu:ultimet_large_item_pipe',
		C: '#gtceu:circuits/ev'
	}
	).id('tfg:shaped/nuclear_turbine')

	event.recipes.gtceu.shaped('gtceu:coal_liquefaction_tower', [
		'ABA',
		'CDC',
		'EFE'
	], {
		A: '#forge:double_wires/cupronickel',
		B: 'gtceu:aluminium_drum',
		C: '#gtceu:circuits/mv',
		D: 'gtceu:mv_machine_hull',
		E: 'gtceu:solid_machine_casing',
		F: 'gtceu:mv_electric_piston'
	}).addMaterialInfo().id('gtceu:shaped/coal_liquefaction_tower')

	event.remove({output: 'gtceu:active_transformer'})

	event.recipes.gtceu.assembler('tfg:active_power_transformer')
		.itemInputs('1x gtceu:iv_transformer_1a', '1x #gtceu:circuits/iv', '8x gtceu:uranium_triplatinum_single_wire',
					'2x gtceu:hpic_chip')
		.inputFluids(Fluid.of('gtceu:ostrum_iodide', 288))
		.itemOutputs('tfg:active_power_transformer')
		.duration(300)
		.EUt(GTValues.VA[GTValues.EV])
		.circuit(2)
	
}