// priority: 0

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerImmersiveAircraftRecipes(event) {

	event.shaped('immersive_aircraft:hull',[
		'AAA',
		'BCB',
		'AAA'
	],{
		A: '#minecraft:planks',
		B: 'gtceu:wrought_iron_plate',
		C: 'tfc:glue',
	}).id('tfg:immersive_aircraft/shaped/hull');
	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/hull')
	.itemInputs('6x #minecraft:planks', '2x gtceu:wrought_iron_plate', 'tfc:glue')
	.itemOutputs('immersive_aircraft:hull')
	.circuit(1)
	.duration(200)
	.EUt(1);

	event.shaped('immersive_aircraft:engine',[
		'ABC',
		'DED'
	],{
		A: '#forge:tools/hammers',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:tools/wrenches',
		D: '#tfg:metal_bars',
		E: 'create:andesite_casing'
	}).id('tfg:immersive_aircraft/shaped/engine');
	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/engine')
	.itemInputs('gtceu:tin_alloy_small_fluid_pipe', '2x #tfg:metal_bars', 'create:andesite_casing')
	.itemOutputs('immersive_aircraft:engine')
	.circuit(1)
	.duration(200)
	.EUt(1);

	event.shaped('immersive_aircraft:sail',[
		'ABA',
		'BCB',
		'ABA'
	],{
		A: 'gtceu:wrought_iron_screw',
		B: '#forge:cloth',
		C: '#minecraft:trapdoors'
	}).id('tfg:immersive_aircraft/shaped/sail');
	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/sail')
	.itemInputs('4x gtceu:wrought_iron_screw', '4x #minecraft:trapdoors', '#forge:cloth')
	.itemOutputs('immersive_aircraft:sail')
	.circuit(1)
	.duration(200)
	.EUt(1);

//#region Aircrafts

	event.shaped('immersive_aircraft:quadrocopter',[
		'ABA',
		'CDC',
		'AEA'
	],{
		A: '#forge:rotors',
		B: '#create:seats',
		C: 'gtceu:long_wood_rod',
		D: 'tfg:scaffolding_frame',
		E: 'immersive_aircraft:engine'
	}).id('tfg:immersive_aircraft/shaped/quadrocopter');

	event.shaped('immersive_aircraft:airship',[
		'ABA',
		'CDE',
		'FGA'
	], {
		A: 'immersive_aircraft:sail',
		B: 'tfg:airship_balloon',
		C: 'immersive_aircraft:engine',
		D: '#create:seats',
		E: 'firmaciv:rope_coil',
		F: '#forge:rotors',
		G: 'tfg:airship_hull'
	}).id('tfg:immersive_aircraft/shaped/airship')

	event.shaped('immersive_aircraft:cargo_airship',[
		'ABA',
		'CDC',
		'EFE'
	], {
		A: '#forge:rotors',
		B: '#forge:tools/hammers',
		C: 'immersive_aircraft:engine',
		D: 'immersive_aircraft:airship',
		E: 'gtceu:wood_crate',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/cargo_airship')

	//WAAGH!
	event.recipes.create.mechanical_crafting('immersive_aircraft:warship',[
		'ABCC ',
		' DDD ',
		' EEEF',
		' EGEH',
		' EEEF',
		' DDD '
	],{
		A: 'immersive_aircraft:enhanced_propeller',
		B: 'immersive_aircraft:steel_boiler',
		C: 'tfg:airship_balloon',
		D: 'gtceu:wrought_iron_plate',
		E: 'immersive_aircraft:hull',
		F: 'gtceu:wrought_iron_rod',
		G: 'immersive_aircraft:cargo_airship',
		H: '#create:seats'
	}).id('tfg:immersive_aircraft/mechanical_crafter/warship')

	event.recipes.create.mechanical_crafting('immersive_aircraft:gyrodyne',[
		'   A   ',
		'   B   ',
		'CCDDDCC',
		'BBDEDBB',
		' FDDDF ',
		'   B   ',
		'   G   ',
	],{
		A: 'immersive_aircraft:enhanced_propeller',
		B: 'gtceu:long_wood_rod',
		C: 'immersive_aircraft:sail',
		D: 'immersive_aircraft:hull',
		E: '#create:seats',
		F: 'create:hand_crank',
		G: 'gtceu:wrought_iron_double_ingot'
	}).id('tfg:immersive_aircraft/mechanical_crafter/gyrodyne')

	event.recipes.create.mechanical_crafting('man_of_many_planes:economy_plane',[
		' AABCBAA ',
		'ADDBEBDDA',
		' FGBHBGF ',
		'    D    ',
		'    D    ',
		'   DAD   ',
		'   DDD   ',
		'   AAA   '
	], {
		A: 'immersive_aircraft:sail',
		B: 'gtceu:blue_steel_plate',
		C: '#tfg:metal_bars',
		D: 'gtceu:long_treated_wood_rod',
		E: '#create:seats',
		F: 'gtceu:black_steel_rotor',
		G: 'greate:rubber_belt_connector',
		H: 'create:steam_engine'
	}).id('tfg:man_of_many_planes/mechanical_crafter/economy_plane');


//#endregion

	event.remove({ mod: 'immersive_aircraft' })

	event.shaped('immersive_aircraft:engine', [
		'DAE',
		'CBC'
	], {
		A: 'gtceu:tin_alloy_small_fluid_pipe',
		B: 'gtceu:steel_brick_casing',
		C: '#tfg:metal_bars',
		D: '#forge:tools/hammers',
		E: '#forge:tools/wrenches'
	})
	.id('iatfg:engine_r')

	event.replaceInput({ id: 'iatfg:sail_r' }, 'framedblocks:framed_trapdoor', '#minecraft:trapdoors')

	event.replaceInput({ id: 'iatfg:airship_r' }, 'create:propeller', '#forge:rotors')
	event.replaceInput({ id: 'iatfg:airship_r' }, 'immersive_aircraft:hull_reinforcement', 'immersive_aircraft:hull')

	event.replaceInput({ id: 'iatfg:cargo_airship_r' }, 'create:propeller', '#forge:rotors')

	event.replaceInput({ id: 'iatfg:quadrocopter_r' }, 'create:propeller', '#forge:rotors')

	event.replaceInput({ id: 'iatfg:enhanced_propeller_r' }, 'create:propeller', '#forge:rotors')

	event.replaceInput({ id: 'immersive_aircraft:gyroscope' }, 'minecraft:compass', 'firmaciv:firmaciv_compass')

	event.shaped('immersive_aircraft:improved_landing_gear', [
		'EAB',
		'CDA',
		'CCF'
	], {
		A: '#forge:plates/steel',
		B: '#forge:rods/steel',
		C: '#forge:plates/rubber',
		D: '#forge:small_gears/brass',
		E: '#forge:tools/wrenches',
		F: '#forge:tools/screwdrivers'
	}).id('iatfg:improved_landing_gear_r')
}