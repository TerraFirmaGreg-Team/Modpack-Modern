// priority: 0
"use strict";

function registerGTCEUTerminalRecipes(event) {


    // Gregtech CEu Terminals Integration

	//event.remove({ id : 'gtceuterminal:dismantler' })
	event.shaped('1x gtceuterminal:dismantler', [
		'ABA',
		'CDC',
		'FEF'
	], {
		A: 'gtceu:mv_sensor',
		B: 'gtceu:mv_emitter',
		C: '#gtceu:circuits/mv',
		D: 'gtceu:computer_monitor_cover',
		E: 'gtceu:mv_voltage_coil',
		F: '#forge:plates/aluminium'
	}).id(`tfg:shaped/dismantler`)

	event.remove({ id : 'gtceuterminal:multi_structure_manager' })
	event.shaped('1x gtceuterminal:multi_structure_manager', [
		'ABA',
		'CDC',
		'FEF'
	], {
		A: 'gtceu:hv_sensor',
		B: 'gtceu:hv_emitter',
		C: '#gtceu:circuits/hv',
		D: 'gtceu:terminal',
		E: '#gtceu:batteries/hv',
		F: '#forge:plates/stainless_steel'
	}).id(`tfg:shaped/multi_structure_manager`)

	event.remove({ id : 'gtceuterminal:schematic_interface' })
	event.shaped('1x gtceuterminal:schematic_interface', [
		'ABA',
		'CDC',
		'FEF'
	], {
		A: 'gtceu:iv_sensor',
		B: 'gtceu:iv_emitter',
		C: '#gtceu:circuits/iv',
		D: 'gtceu:terminal',
		E: '#gtceu:batteries/iv',
		F: '#forge:plates/tungsten_steel'
	}).id(`tfg:shaped/schematic_interface`)
	
    }	