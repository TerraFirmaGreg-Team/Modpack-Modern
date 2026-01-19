// priority: 0
"use strict";

function registerTFGArtisanTableRecipes(event) {

	//#region Molds
	event.remove({input: 'gtceu:empty_mold', type: 'minecraft:crafting'})
	
	event.custom({
		"result": {"item": "tfg:lamp_casting_mold"},
		"pattern": [
			"XX  XX",
			"X    X",
			"X XX X",
			"X XX X",
			"X XX X",
			"X    X"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"
	}).id(`tfg:artisan_table/lamp_casting_mold`);

	event.custom({
		"result": {"item": "tfg:trapdoor_casting_mold"},
		"pattern": [
			"      ",
			" XXXX ",
			"      ",
			"      ",
			" XXXX ",
			"      "
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/trapdoor_casting_mold`);

	event.custom({
		"result": {"item": "tfg:chain_casting_mold"},
		"pattern": [
			"X    X",
			"X XX X",
			"X    X",
			"XX  XX",
			"X    X",
			"X XX X"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/chain_casting_mold`);

	event.custom({
		"result": {"item": "tfg:bell_casting_mold"},
		"pattern": [
			"XX  XX",
			"X    X",
			"X    X",
			"X    X",
			"      ",
			"      "
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/bell_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:plate_casting_mold"},
		"pattern": [
			"XXXXXX",
			"X    X",
			"X    X",
			"X    X",
			"X    X",
			"XXXXXX"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/plate_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:gear_casting_mold"},
		"pattern": [
			"XX  XX",
			"X    X",
			"  XX  ",
			"  XX  ",
			"X    X",
			"XX  XX"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/gear_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:bottle_casting_mold"},
		"pattern": [
			"X    X",
			"XX  XX",
			"XX  XX",
			"X    X",
			"X    X",
			"X    X"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/bottle_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:ingot_casting_mold"},
		"pattern": [
			"XXXXXX",
			"XX  XX",
			"XX  XX",
			"XX  XX",
			"XX  XX",
			"XXXXXX"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/ingot_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:ball_casting_mold"},
		"pattern": [
			"XXXXXX",
			"XX  XX",
			"X    X",
			"X    X",
			"XX  XX",
			"XXXXXX"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/ball_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:cylinder_casting_mold"},
		"pattern": [
			"XX  XX",
			"X    X",
			"      ",
			"      ",
			"X    X",
			"XX  XX"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/cylinder_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:block_casting_mold"},
		"pattern": [
			"      ",
			"      ",
			"      ",
			"      ",
			"      ",
			"      "
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/block_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:nugget_casting_mold"},
		"pattern": [
			"XXXXXX",
			"XXXXXX",
			"XX XXX",
			"XX XXX",
			"XXXXXX",
			"XXXXXX"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/nugget_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:anvil_casting_mold"},
		"pattern": [
			"      ",
			"      ",
			"X    X",
			"XX  XX",
			"X    X",
			"XXXXXX"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/anvil_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:name_casting_mold"},
		"pattern": [
			"XXXXXX",
			"X X X ",
			" X X X",
			"X X X ",
			"XXXXXX",
			"XXXXXX"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/name_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:small_gear_casting_mold"},
		"pattern": [
			"XXX XX",
			"XX   X",
			"X  X  ",
			"XX   X",
			"XXX XX",
			"XXXXXX"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/small_gear_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:rotor_casting_mold"},
		"pattern": [
			" XXXX ",
			"X XX X",
			"XX  XX",
			"XX  XX",
			"X XX X",
			" XXXX "
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/rotor_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:pill_casting_mold"},
		"pattern": [
			"XXXXXX",
			"XXXXXX",
			"XX  XX",
			"X   XX",
			"X  XXX",
			"XXXXXX"
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/pill_casting_mold`);

	event.custom({
		"result": {"item": "gtceu:huge_pipe_casting_mold"},
		"pattern": [
			"      ",
			" XXXX ",
			" XXXX ",
			" XXXX ",
			" XXXX ",
			"      "
		],
		"smithingType": "tfg:casting_mold",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/huge_pipe_casting_mold`);
	
	//#endregion

	//#region Pipes

	/** @type {string[]} pipe_sizes */
	const pipe_sizes = [
		'huge',
		'large',
		'normal',
		'small',
		'tiny'
	];
	
	let prev_size;
	pipe_sizes.forEach((size) => {
		if (size !== 'huge'){
			event.shaped(`gtceu:${size}_pipe_casting_mold`, [
				'ABC'
			], {
				A: '#forge:tools/hammers',
				B: `gtceu:${prev_size}_pipe_casting_mold`,
				C: '#forge:tools/mallets'
			}).id(`tfg:shaped/${prev_size}_${size}_casting_mold`)
		}
		prev_size = size;
	});
	
	pipe_sizes.reverse().forEach((size) => {
		if (size !== 'tiny'){
			event.shaped(`gtceu:${size}_pipe_casting_mold`, [
				'ABC'
			], {
				A: '#forge:tools/mallets',
				B: `gtceu:${prev_size}_pipe_casting_mold`,
				C: '#forge:tools/hammers'
			}).id(`tfg:shaped/${prev_size}_${size}_casting_mold`)
		}
		prev_size = size;
	});
	
	//#endregion

	//#region Circuits

	event.custom({
		"result": {"item": "gtceu:resin_printed_circuit_board"},
		"pattern": [
			"X X XX",
			" XXX  ",
			"X  X X",
			"X X  X",
			"  X XX",
			"XX  XX"
		],
		"smithingType": "tfg:resin_board",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/resin_printed_circuit_board`);
	
	event.custom({
		"result": {"item": "gtceu:phenolic_printed_circuit_board"},
		"pattern": [
			"X X XX",
			" XXX  ",
			"X  X X",
			"X X  X",
			"  X XX",
			"XX  XX"
		],
		"smithingType": "tfg:phenolic_board",
		"type": "tfg:smithing"	
	}).id(`tfg:artisan_table/phenolic_printed_circuit_board`);
	//#endregion

}
