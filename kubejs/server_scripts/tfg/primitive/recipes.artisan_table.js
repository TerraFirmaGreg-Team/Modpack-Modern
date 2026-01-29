// priority: 0
"use strict";

function registerTFGArtisanTableRecipes(event) {

	// Removals (`type` didnt want to work here).
	event.remove({ id: /gtceu:shaped\/shape_.*/, input: 'gtceu:empty_mold'});
	event.remove({ id: /gtceu:shaped\/shape_.*/, input: /gtceu:.*_extruder_mold/});
	event.remove({ id: 'gtceu:shaped/basic_circuit_board'});
	event.remove({ id: 'gtceu:shaped/good_circuit_board'});

	//Table Recipe
	TFGHelpers.registerMaterialInfo('tfg:artisan_table', [GTMaterials.WroughtIron, 6, GTMaterials.Wood, 3, GTMaterials.Copper, 1/9])

	event.shaped('tfg:artisan_table', [
		'CBC',
		'AAA',
		'B B'
	], {
		A: ChemicalHelper.get(TagPrefix.plateDouble, GTMaterials.WroughtIron, 1),
		B: 'firmalife:treated_wood',
		C: '#forge:screws/any_bronze'
	}).id('tfg:shaped/artisan_table');

	//#region Molds

	/** 
	 * Mold pattern definitions.
	 * @param {string} name - Base id of the mold item.
	 * @param {boolean} genCast - Whether to generate a casting mold recipe.
	 * @param {boolean} genExtrude - Whether to generate an extruder mold recipe.
	 * @param {string[]} pattern - 6x6 pattern for the mold. 'X' for solid, ' ' for empty.
	 * @type {{name: string, genCast: boolean, genExtrude: boolean, pattern: string[]}[]} moldPatterns 
	 */
	const moldPatterns = [
		{ name: 'tfg:lamp', genCast: true, genExtrude: false, pattern: [
			"XX  XX",
			"X    X",
			"X XX X",
			"X XX X",
			"X XX X",
			"X    X"
		]},
		{ name: 'tfg:trapdoor', genCast: true, genExtrude: false, pattern: [
			"      ",
			" XXXX ",
			"      ",
			"      ",
			" XXXX ",
			"      "
		]},
		{ name: 'tfg:chain', genCast: true, genExtrude: false, pattern: [
			"X    X",
			"X XX X",
			"X    X",
			"XX  XX",
			"X    X",
			"X XX X"
		]},
		{ name: 'tfg:bell', genCast: true, genExtrude: false, pattern: [
			"XX  XX",
			"X    X",
			"X    X",
			"X    X",
			"      ",
			"      "
		]},
		{ name: 'gtceu:plate', genCast: true, genExtrude: true, pattern: [
			"XXXXXX",
			"X    X",
			"X    X",
			"X    X",
			"X    X",
			"XXXXXX"
		]},
		{ name: 'gtceu:gear', genCast: true, genExtrude: true, pattern: [
			"XX  XX",
			"X    X",
			"  XX  ",
			"  XX  ",
			"X    X",
			"XX  XX"
		]},
		{ name: 'gtceu:bottle', genCast: true, genExtrude: true, pattern: [
			"X    X",
			"XX  XX",
			"XX  XX",
			"X    X",
			"X    X",
			"X    X"
		]},
		{ name: 'gtceu:ingot', genCast: true, genExtrude: true, pattern: [
			"XXXXXX",
			"XX  XX",
			"XX  XX",
			"XX  XX",
			"XX  XX",
			"XXXXXX"
		]},
		{ name: 'gtceu:ball', genCast: true, genExtrude: false, pattern: [
			"XXXXXX",
			"XX  XX",
			"X    X",
			"X    X",
			"XX  XX",
			"XXXXXX"
		]},
		{ name: 'gtceu:cylinder', genCast: true, genExtrude: false, pattern: [
			"XX  XX",
			"X    X",
			"      ",
			"      ",
			"X    X",
			"XX  XX"
		]},
		{ name: 'gtceu:block', genCast: true, genExtrude: true, pattern: [
			"      ",
			"      ",
			"      ",
			"      ",
			"      ",
			"      "
		]},
		{ name: 'gtceu:nugget', genCast: true, genExtrude: false, pattern: [
			"XXXXXX",
			"XXXXXX",
			"XX XXX",
			"XX XXX",
			"XXXXXX",
			"XXXXXX"
		]},
		{ name: 'gtceu:anvil', genCast: true, genExtrude: false, pattern: [
			"      ",
			"      ",
			"X    X",
			"XX  XX",
			"X    X",
			"XXXXXX"
		]},
		{ name: 'gtceu:name', genCast: true, genExtrude: false, pattern: [
			"XXXXXX",
			"X X X ",
			" X X X",
			"X X X ",
			"XXXXXX",
			"XXXXXX"
		]},
		{ name: 'gtceu:small_gear', genCast: true, genExtrude: true, pattern: [
			"XXX XX",
			"XX   X",
			"X  X  ",
			"XX   X",
			"XXX XX",
			"XXXXXX"
		]},
		{ name: 'gtceu:rotor', genCast: true, genExtrude: true, pattern: [
			" XXXX ",
			"X XX X",
			"XX  XX",
			"XX  XX",
			"X XX X",
			" XXXX "
		]},
		{ name: 'gtceu:pill', genCast: true, genExtrude: false, pattern: [
			"XXXXXX",
			"XXXXXX",
			"XX  XX",
			"X   XX",
			"X  XXX",
			"XXXXXX"
		]},
		{ name: 'gtceu:huge_pipe', genCast: true, genExtrude: true, pattern: [
			"      ",
			" XXXX ",
			" XXXX ",
			" XXXX ",
			" XXXX ",
			"      "
		]},
		
		{ name: 'gtceu:rod', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XXXXXX",
			"XX  XX",
			"XX  XX",
			"XXXXXX",
			"XXXXXX"
		]},
		{ name: 'gtceu:bolt', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XXXXXX",
			"XX   X",
			"XXX XX",
			"XXX XX",
			"XXXXXX"
		]},
		{ name: 'gtceu:ring', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XX  XX",
			"X XX X",
			"X XX X",
			"XX  XX",
			"XXXXXX"
		]},
		{ name: 'gtceu:cell', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XX   X",
			"X XX X",
			"X XX X",
			"X   XX",
			"XXXXXX"
		]},
		{ name: 'gtceu:wire', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XX XXX",
			"XXXXXX",
			"XXXXXX",
			"XXX XX",
			"XXXXXX"
		]},
		{ name: 'gtceu:foil', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XXXXXX",
			"XXXXXX",
			"      ",
			"XXXXXX",
			"XXXXXX"
		]},
		{ name: 'tfg:small_casing', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XXXXXX",
			"X X X ",
			"XXXXXX",
			"X X X ",
			"XXXXXX"
		]},
		{ name: 'tfg:shell_casing', genCast: false, genExtrude: true, pattern: [
			"  XXXX",
			"  XXXX",
			"XXXXXX",
			"XXXXXX",
			"XXXX  ",
			"XXXX  "
		]},
		{ name: 'tfg:large_casing', genCast: false, genExtrude: true, pattern: [
			"XX  XX",
			"XX  XX",
			"  XXXX",
			"  XXXX",
			"XXXX  ",
			"XXXX  "
		]},

		//Tools
		{ name: 'tfg:mining_hammer_head', genCast: false, genExtrude: true, pattern: [
			" XXXXX",
			"     X",
			"      ",
			"     X",
			" XXXXX",
			"XXXXXX"
		]},
		{ name: 'tfg:sword_head', genCast: false, genExtrude: true, pattern: [
			"  XXXX",
			"   XXX",
			"X   XX",
			"XX   X",
			"XXX  X",
			"XXXXX "
		]},
		{ name: 'tfg:pickaxe_head', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XXXXXX",
			"X    X",
			" XXXX ",
			"XXXXXX",
			"XXXXXX"
		]},
		{ name: 'tfg:shovel_head', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"X    X",
			"X    X",
			"X    X",
			"XX  XX",
			"XXXXXX"
		]},
		{ name: 'tfg:axe_head', genCast: false, genExtrude: true, pattern: [
			"X XXXX",
			"     X",
			"      ",
			"     X",
			"X XXXX",
			"XXXXXX"
		]},
		{ name: 'tfg:hoe_head', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XXXXXX",
			"      ",
			"  XXXX",
			"XXXXXX",
			"XXXXXX"
		]},
		{ name: 'tfg:scythe_head', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"X     ",
			"    XX",
			"  XXXX",
			"XXXXXX",
			"XXXXXX"
		]},
		{ name: 'tfg:file_head', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XX XXX",
			"XX XXX",
			"XX XXX",
			"XX XXX",
			"XX XXX"
		]},
		{ name: 'tfg:hammer_head', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"      ",
			"      ",
			"XX  XX",
			"XXXXXX",
			"XXXXXX"
		]},
		{ name: 'tfg:saw_head', genCast: false, genExtrude: true, pattern: [
			"  XXXX",
			"   XXX",
			"X   XX",
			"X    X",
			"XX    ",
			"XXXX  "
		]},
		{ name: 'tfg:knife_head', genCast: false, genExtrude: true, pattern: [
			"XXX XX",
			"XX  XX",
			"XX  XX",
			"XX  XX",
			"XX  XX",
			"XXXXXX"
		]},
		{ name: 'tfg:butchery_knife_head', genCast: false, genExtrude: true, pattern: [
			"X XXXX",
			"X XXXX",
			"X   XX",
			"X    X",
			"X  X X",
			"X    X"
		]},
		{ name: 'tfg:spade_head', genCast: false, genExtrude: true, pattern: [
			"X    X",
			"X    X",
			"X    X",
			"X    X",
			"XX  XX",
			"XX  XX"
		]},
		{ name: 'tfg:propick_head', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"     X",
			" XXXX ",
			" XXXXX",
			"XXXXXX",
			"XXXXXX"
		]},
		{ name: 'tfg:javelin_head', genCast: false, genExtrude: true, pattern: [
			"   XXX",
			"    XX",
			"     X",
			"X     ",
			"XX   X",
			"XXX XX"
		]},
		{ name: 'tfg:chisel_head', genCast: false, genExtrude: true, pattern: [
			"XXX XX",
			"XXX XX",
			"XXX XX",
			"XXX XX",
			"XXX XX",
			"XXXXXX"
		]},
		{ name: 'tfg:mace_head', genCast: false, genExtrude: true, pattern: [
			"XX  XX",
			"X    X",
			"X    X",
			"X    X",
			"X    X",
			"XX  XX"
		]},
		{ name: 'tfg:mattock_head', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"     X",
			"   XX ",
			"XXXXXX",
			"XXXXXX",
			"XXXXXX"
		]},
		{ name: 'tfg:fish_hook', genCast: false, genExtrude: true, pattern: [
			"XXX XX",
			"XXXX X",
			"X XX X",
			"X XX X",
			"XX  XX",
			"XXXXXX"
		]},
		{ name: 'tfg:whisk', genCast: false, genExtrude: true, pattern: [
			" X  X ",
			"XX  XX",
			"  XX  ",
			"  XX  ",
			"XX  XX",
			" X  X "
		]},
		{ name: 'tfg:screwdriver_tip', genCast: false, genExtrude: true, pattern: [
			"XX   X",
			"XXX XX",
			"XX   X",
			"XXX XX",
			"XXX XX",
			"XXX XX"
		]},
		{ name: 'tfg:wrench_tip', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XX XXX",
			"XX XXX",
			"XX XXX",
			"XX XXX",
			"X   XX"
		]},
		{ name: 'tfg:wire_cutter_head', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XX   X",
			"X X  X",
			"X  XXX",
			"X  XXX",
			"XXXXXX"
		]}

		/*
		,
		{ name: 'tfg:', genCast: false, genExtrude: true, pattern: [
			"XXXXXX",
			"XXXXXX",
			"XXXXXX",
			"XXXXXX",
			"XXXXXX",
			"XXXXXX"
		]}
		*/
	];

	/** Checks for duplicate patterns for the same mold type. */
	function patternsEqual(p1, p2) {
		for (let i = 0; i < p1.length; i++) {
			if (p1[i] !== p2[i]) return false;
		};
		return true;
	};
	/** Checks for duplicate mirrored patterns for the same mold type. */
	function patternsMirrorEqual(p1, p2) {
		for (let i = 0; i < p1.length; i++) {
			if (p1[i] !== p2[i].split('').reverse().join('')) return false;
		};
		return true;
	};
	// Error logging for duplicate patterns.
	let patternsChecked = [];
	for (let i = 0; i < moldPatterns.length; i++) {
		for (let j = i + 1; j < moldPatterns.length; j++) {

			let a = moldPatterns[i];
			let b = moldPatterns[j];
			let shareCast = a.genCast && b.genCast;
			let shareExtrude = a.genExtrude && b.genExtrude;

			if (shareCast || shareExtrude) {
				if (patternsEqual(a.pattern, b.pattern) || patternsMirrorEqual(a.pattern, b.pattern)) {
					patternsChecked.push({a: a.name, b: b.name});
				};
			};
		};
	};
	if (patternsChecked.length !== 0) {
		throw new Error(
			`Duplicate artisan table mold patterns detected between: ${patternsChecked.map(pair => `\n${pair.a} and ${pair.b}`).join(', ')}`
		);
	};

	// Create Artisan Table recipes for molds.
	moldPatterns.forEach((mold) => {	
		if (mold.genCast){
			event.custom({
				"result": {"item": `${mold.name}_casting_mold`},
				"pattern": mold.pattern,
				"artisanType": "tfg:casting_mold",
				"type": "tfg:artisan"
			}).id(`tfg:artisan_table/${linuxUnfucker(mold.name)}_casting_mold`);
		};	
		if (mold.genExtrude){
			event.custom({
				"result": {"item": `${mold.name}_extruder_mold`},
				"pattern": mold.pattern,
				"artisanType": "tfg:extruder_mold",
				"type": "tfg:artisan"
			}).id(`tfg:artisan_table/${linuxUnfucker(mold.name)}_extruder_mold`);
		};
	});
	
	//#endregion

	//#region Circuits

	event.custom({
		"result": {"item": "gtceu:resin_printed_circuit_board"},
		"pattern": [
			"X XXXX",
			"  XX X",
			"X  X X",
			"X XX X",
			" XXX X",
			"XXX  X"
		],
		"artisanType": "tfg:resin_board",
		"type": "tfg:artisan"	
	}).id(`tfg:artisan_table/resin_printed_circuit_board`);

	event.custom({
		"result": {"item": "gtceu:resin_printed_circuit_board", "count": 4},
		"pattern": [
			"X XXXX",
			"  XX X",
			"X  X X",
			"X XX X",
			" XXX X",
			"XXX  X"
		],
		"artisanType": "tfg:resin_board_4x",
		"type": "tfg:artisan"	
	}).id(`tfg:artisan_table/resin_printed_circuit_board_4x`);
	
	event.custom({
		"result": {"item": "gtceu:phenolic_printed_circuit_board"},
		"pattern": [
			"X  XX ",
			" XXXX ",
			"XX X  ",
			"XX XXX",
			"XX XX ",
			"  XX  "
		],
		"artisanType": "tfg:phenolic_board",
		"type": "tfg:artisan"	
	}).id(`tfg:artisan_table/phenolic_printed_circuit_board`);
	
	event.custom({
		"result": {"item": "gtceu:phenolic_printed_circuit_board", "count": 4},
		"pattern": [
			"X  XX ",
			" XXXX ",
			"XX X  ",
			"XX XXX",
			"XX XX ",
			"  XX  "
		],
		"artisanType": "tfg:phenolic_board_4x",
		"type": "tfg:artisan"	
	}).id(`tfg:artisan_table/phenolic_printed_circuit_board_4x`);
	//#endregion
	

}
