// priority: 0
"use strict";

/** @param {Internal.RecipesEventJS_} event */
const registerMTSRecipes = (event) => {

	event.remove({mod: 'mts' })
	
	//#region Usable Items
	
	event.shaped('mts:mts.wrench', [
		' BC',
		' AB',
		'A  '
	], {
		A: '#forge:rods/wrought_iron',
		B: '#forge:bolts/wrought_iron',
		C: '#forge:plates/wrought_iron'
	}).id('mts:mts.wrench')
	
	event.shaped('mts:mts.ticket', [
		'   ',
		'ABC',
		'   '
	], {
		A: '#forge:dyes/yellow',
		B: '#forge:plates/paper',
		C: '#forge:dyes/black'
	}).id('mts:mts.ticket')
	
	event.shaped('mts:mts.partscanner', [
		'BCB',
		'EAE',
		'EDE'
	], {
		A: '#gtceu:circuits/lv',
		B: 'create:electron_tube',
		C: '#forge:glass_panes',
		D: '#minecraft:buttons',
		E: '#forge:plates/rubber'
	}).id('mts:mts.partscanner')
	
	event.shaped('mts:mts.paintgun', [
		' A ',
		'BC ',
		'  D'
	], {
		A: 'minecraft:bucket',
		B: '#forge:small_fluid_pipes/tin_alloy',
		C: '#forge:double_plates/wrought_iron',
		D: '#forge:rods/wrought_iron'
	}).id('mts:mts.paintgun')
	
	event.shaped('mts:mts.key', [
		'   ',
		' A ',
		' B '
	], {
		A: '#forge:bolts/wrought_iron',
		B: '#forge:ingots/rubber'
	}).id('mts:mts.key')
		
	event.recipes.gtceu.assembler('mts:mts.jumperpack')
		.itemInputs('2x #forge:plates/wrought_iron', '1x #gtceu:circuits/lv', '1x mts:mts.jumpercable', '1x gtceu:lv_lithium_battery', '4x #forge:plates/rubber')
		.itemOutputs('mts:mts.jumperpack')
		.duration(200)
		.EUt(16);
	
	event.shaped('mts:mts.jumpercable', [
		'B B',
		'A A',
		'AAA'
	], {
		A: '#forge:single_cables/copper',
		B: 'tfchotornot:tongs/copper'
	}).id('mts:mts.jumpercable')
	
	event.shaped('mts:mts.handbook_plane', [
		' B ',
		' A ',
		'   '
	], {
		A: 'minecraft:book',
		B: 'mts:mts.wrench'
	}).id('mts:mts.handbook_plane').keepIngredient('mts:mts.wrench')
	
	event.shaped('mts:mts.handbook_car', [
		' B ',
		' A ',
		'   '
	], {
		A: 'minecraft:book',
		B: 'mts:mts.key'
	}).id('mts:mts.hanbook_car').keepIngredient('mts:mts.key')
	
	event.shaped('mts:mts.fuelhose', [
		'  A',
		'B C',
		'BBB'
	], {
		A: '#forge:small_fluid_pipes/tin_alloy',
		B: '#forge:plates/rubber',
		C: '#forge:rings/rubber'
	}).id('mts:mts.fuelhose')
	
	event.shaped('mts:mts.jerrycan', [
		' AB',
		'B B',
		'BBB'
	], {
		A: '#forge:rods/wrought_iron',
		B: '#forge:foils/wrought_iron'
	}).id('mts:mts.jerrycan')
	
	//#endregion
	
	//#region Benches	
	
	event.shaped('mts:mts.wheelbench', [
		'CD ',
		'AAA',
		'B B'
	], {
		A: '#minecraft:wooden_slabs',
		B: '#minecraft:wooden_fences',
		C: '#forge:belt_connectors/rubber',
		D: '#forge:tools/wrenches'
	}).id('mts:mts.wheelbench')
		
	event.shaped('mts:mts.vehiclebench', [
		'CDE',
		'AAA',
		'B B'
	], {
		A: '#minecraft:wooden_slabs',
		B: '#minecraft:wooden_fences',
		C: 'create:crafting_blueprint',
		D: '#forge:plates/paper',
		E: 'measurements:tape_measure'
	}).id('mts:mts.vehiclebench')
	
	event.shaped('mts:mts.seatbench', [
		'CDE',
		'AAA',
		'B B'
	], {
		A: '#minecraft:wooden_slabs',
		B: '#minecraft:wooden_fences',
		C: '#forge:buzz_saw_heads',
		D: '#tfc:lumber',
		E: '#forge:plates/rubber'
	}).id('mts:mts.seatbench')
	
	event.recipes.gtceu.assembler('mts:mts.propellerbench')
		.itemInputs('4x #forge:plates/wrought_iron', '4x #forge:fine_wires/copper', '2x gtceu:lv_electric_motor', '1x gtceu:lv_electric_piston', '1x gtceu:lv_machine_hull')
		.itemOutputs('mts:mts.propellerbench')
		.duration(600)
		.EUt(16);
		
	event.shaped('mts:mts.itembench', [
		'   ',
		' A ',
		'BCB'
	], {
		A: '#forge:glass',
		B: '#gtceu:circuits/ulv',
		C: '#minecraft:buttons'
	}).id('mts:mts.itembench')

	event.shaped('mts:mts.instrumentbench', [
		'CDE',
		'AAA',
		'B B'
	], {
		A: '#minecraft:wooden_slabs',
		B: '#minecraft:wooden_fences',
		C: '#forge:tools/screwdrivers',
		D: '#forge:foils/wrought_iron',
		E: 'gtceu:glass_tube'
	}).id('mts:mts.instrumentbench')
	
	event.shaped('mts:mts.gunbench', [
		'   ',
		'CDD',
		'BAB'
	], {
		A: 'gtceu:ulv_machine_hull',
		B: '#forge:double_plates/steel',
		C: 'gtceu:lv_electric_piston',
		D: '#forge:rods/steel'
	}).id('mts:mts.gunbench')
	
	event.shaped('mts:mts.enginebench', [
		'CBC',
		'DAD',
		'AEA'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'gtceu:lv_electric_piston',
		C: '#forge:chains/steel',
		D: '#forge:bolts/wrought_iron',
		E: '#forge:tools/hammers'
	}).id('mts:mts.enginebench')
	
	event.shaped('mts:mts.decorbench', [
		'A  ',
		'BBB',
		'C C'
	], {
		A: 'gtceu:computer_monitor_cover',
		B: '#forge:plates/wrought_iron',
		C: '#forge:rods/wrought_iron'
	}).id('mts:mts.decorbench')
	
	event.shaped('mts:mts.custombench', [
		'DDD',
		'CAC',
		'BAB'
	], {
		A: 'gtceu:bronze_crate',
		B: '#forge:screws/wrought_iron',
		C: '#forge:dyes/red',
		D: '#forge:plates/wrought_iron'
	}).id('mts:mts.custombench')
	
	//#endregion
}
