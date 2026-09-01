// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerImmersiveVehiclesRecipes(event) {

	event.remove({ mod: 'mts' });
	event.remove({ mod: 'automotives' });
	event.remove({ mod: 'belroftmotors' });
	// TODO: remove
	event.remove({ mod: 'man_of_many_planes' });
	event.remove({ mod: 'immersive_aircraft' });


	// TODO: airship
	event.shapeless('mts:mtsofficialpack.bell47g', 'immersive_aircraft:quadrocopter')
	event.shapeless('mts:mtsofficialpack.bell206_red', 'immersive_aircraft:cargo_airship')
	event.shapeless('mts:mtsofficialpack.trimotor_white', 'immersive_aircraft:warship')
	event.shapeless('mts:mtsofficialpack.pzl37los', 'immersive_aircraft:gyrodyne')
	event.shapeless('mts:automotives.biplane', 'man_of_many_planes:economy_plane')
	event.shapeless('mts:mtsofficialpack.pzlp11', 'immersive_aircraft:biplane')
	event.shapeless('mts:mtsofficialpack.e500_blackred', 'man_of_many_planes:scarlet_biplane')
	event.shapeless('mts:mtsofficialpack.comanche_red', 'man_of_many_planes:bamboo_hopper')


	// Tools
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
		B: '#forge:small_fluid_pipes/tin_alloy',
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
		A: '#forge:single_cables/copper',
		B: 'tfchotornot:tongs/copper'
	}).id('mts:mts.jumpercable')

	event.shaped('mts:mts.fuelhose', [
		'  A',
		'B C',
		'BBB'
	], {
		A: '#forge:small_fluid_pipes/tin_alloy',
		B: '#tfg:rubber_foils',
		C: '#forge:rings/rubber'
	}).id('mts:mts.fuelhose')
	
	event.shaped('mts:mts.jerrycan', [
		' AB',
		'B B',
		'BBB'
	], {
		A: '#forge:rings/rubber',
		B: '#forge:foils/wrought_iron'
	}).id('mts:mts.jerrycan')
	
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
	

	// #region Refuellers/automation
	event.shaped('mts:mts.fuelpump', [
		' EB',
		'ADA',
		'ACA'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:dyes/red',
		C: '#gtceu:drums',
		D: 'mts:mts.fuelhose',
		E: '#forge:glass_panes'
	}).id('mts:mts.fuelpump')
	
	event.shaped('mts:mts.charger', [
		' EB',
		'ADA',
		'ACA'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:dyes/lime',
		C: 'createaddition:modular_accumulator',
		D: 'mts:mts.fuelhose',
		E: '#forge:glass_panes'
	}).id('mts:mts.charger')

	event.shaped('mts:mtsofficialpack.fuelpump', [
		' EB',
		'ADA',
		'ACA'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:dyes/yellow',
		C: '#gtceu:drums',
		D: 'mts:mts.fuelhose',
		E: '#forge:glass_panes'
	}).id('mts:mtsofficialpack.fuelpump')
	// #endregion


	// #region Planes
	event.recipes.create.mechanical_crafting('mts:automotives.biplane', [
		'    C    ',
		'ADDBEBDDA',
		' AADHDAA ',
		'  GBDBG  ',
		'    D    ',
		'   BAB   ',
		'   DFD   ',
		'   ADA   '
	], {
		A: 'tfg:aircraft_sail',
		B: 'gtceu:black_steel_plate',
		C: 'mts:mtsofficialpack.propellersmall3blade',
		D: 'create:brass_casing',
		E: 'tfg:generators/steel_combustion_generator',
		F: 'create:fluid_tank',
		G: 'mts:mtsofficialpack.wheelmedium',
		H: '#create:seats'
	}).id('tfg:man_of_many_planes/mechanical_crafter/economy_plane');

	// #endregion Planes

	// #region Custom stuff

	//Scaffolding Frame
	event.shaped('tfg:scaffolding_frame', [
		' A ',
		'ABA',
		' A '
	], {
		A: '#forge:rods/wooden',
		B: '#forge:cloth'
	}).id('tfg:shaped/scaffolding_frame');

	//Airship Hull
	event.shaped('tfg:airship_hull', [
		'A B',
		'CCC',
		'CCC'
	], {
		A: '#forge:tools/saws',
		B: '#forge:tools/hammers',
		C: 'gtceu:treated_wood_trapdoor'
	}).id('tfg:shaped/airship_hull');
	event.recipes.gtceu.assembler('tfg:assembler/airship_hull')
		.itemInputs('6x gtceu:treated_wood_trapdoor')
		.itemOutputs('tfg:airship_hull')
		.duration(40)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.ULV]);

	//Airship Balloon
	event.shaped('tfg:airship_balloon', [
		'ABA',
		'BAB',
		'ABA'
	], {
		A: '#forge:string',
		B: 'immersive_aircraft:sail'
	}).id('tfg:shaped/airship_balloon')

	event.recipes.gtceu.assembler('tfg:assembler/airship_balloon')
		.itemInputs('4x immersive_aircraft:sail', '4x #forge:string')
		.itemOutputs('tfg:airship_balloon')
		.duration(40)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.ULV])

	// Aircraft Sail
	event.shaped('tfg:aircraft_sail', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'gtceu:wrought_iron_screw',
		B: '#forge:cloth',
		C: '#minecraft:trapdoors'
	}).id('tfg:shaped/sail');
	// #endregion
}