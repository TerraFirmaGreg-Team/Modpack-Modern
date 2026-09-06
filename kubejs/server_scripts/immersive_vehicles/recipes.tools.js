// priority: 0
"use strict";

function registerImmersiveVehiclesToolsRecipes(event) {
	
	// TODO: remove ratchet
	event.shaped('mts:mts.partscanner', [
		' C ',
		'BAB',
		' D '
	], {
		A: 'create:clipboard',
		B: 'minecraft:redstone',
		C: 'tfc:lens',
		D: '#forge:tools/screwdrivers'
	}).id('mts:shaped/partscanner')

	event.shaped('mts:mts.ticket', [
		'ABC'
	], {
		A: '#forge:dyes/yellow',
		B: 'minecraft:paper',
		C: '#forge:dyes/black'
	}).id('mts:mts.ticket')

	event.shaped('mts:mts.paintgun', [
		' A',
		'BC'
	], {
		A: '#forge:tools/screwdrivers',
		B: '#forge:small_fluid_pipes/potin',
		C: 'gtceu:empty_spray_can'
	}).id('mts:mts.paintgun')

	event.shaped('mts:mts.key', [
		'A',
		'B'
	], {
		A: '#forge:bolts/wrought_iron',
		B: 'minecraft:name_tag'
	}).id('mts:mts.key')

	event.shaped('mts:mts.jumpercable', [
		'B B',
		'A A',
		'AAA'
	], {
		A: '#forge:single_cables/tin',
		B: 'tfchotornot:tongs/copper'
	}).id('mts:mts.jumpercable')

	event.shaped('mts:mts.fuelhose', [
		'  A',
		'B C',
		'BBB'
	], {
		A: '#forge:small_fluid_pipes/potin',
		B: '#tfg:rubber_foils',
		C: '#tfg:rubber_rings'
	}).id('mts:mts.fuelhose')

	event.shaped('mts:mts.jerrycan', [
		' AB',
		'B B',
		'BBB'
	], {
		A: '#tfg:rubber_rings',
		B: '#forge:foils/wrought_iron'
	}).id('mts:mts.jerrycan')

	event.shaped('mts:mts.jerrycan', [
		' AB',
		'B B',
		'BBB'
	], {
		A: '#tfg:rubber_rings',
		B: '#forge:plates/polyethylene'
	}).id('mts:mts.jerrycan_pe')

	event.shaped('mts:mts.jerrycan', [
		' AB',
		'B B',
		'BBB'
	], {
		A: '#tfg:rubber_rings',
		B: '#forge:plates/bakelite'
	}).id('mts:mts.jerrycan_bakelite')

	event.recipes.gtceu.assembler('mts:mts.jumperpack')
		.itemInputs('2x #forge:plates/wrought_iron', '1x #gtceu:circuits/lv', '1x mts:mts.jumpercable', '1x gtceu:lv_lithium_battery', '4x #forge:plates/rubber')
		.itemOutputs('mts:mts.jumperpack')
		.duration(200)
		.EUt(16);

	event.shaped('mts:mtsofficialpack.repairkit', [
		'DED',
		'ABC',
		'DDD'
	], {
		A: '#forge:tools/wrenches',
		B: '#forge:tools/screwdrivers',
		C: '#forge:tools/crowbars',
		D: '#forge:plates/potin',
		E: '#forge:screws/wrought_iron'
	}).id('mts:mtsofficialpack.repairkit')

	event.shaped('mts:automotives.blowtorch', [
		' FE',
		'ACD',
		' BB'
	], {
		A: '#forge:small_fluid_pipes/potin',
		B: '#forge:plates/potin',
		C: 'minecraft:flint',
		D: '#forge:bolts/wrought_iron',
		E: '#forge:springs',
		F: '#forge:tools/screwdrivers'
	}).id('mts:automotives.blowtorch')
}