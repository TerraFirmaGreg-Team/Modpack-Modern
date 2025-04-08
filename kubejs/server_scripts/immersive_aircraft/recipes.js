// priority: 0

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerImmersiveAircraftRecipes(event) {

	event.remove({mod: 'immersive_aircraft'});
	
	event.shaped('immersive_aircraft:hull',[
		'AAA',
		'BCB',
		'AAA'
	],{
		A: '#minecraft:planks',
		B: 'gtceu:wrought_iron_plate',
		C: 'tfc:glue',
	}).id('tfg:immersive_aircraft/shaped/hull');

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

	event.shaped('immersive_aircraft:sail',[
		'ABA',
		'BCB',
		'ABA'
	],{
		A: 'gtceu:wrought_iron_screw',
		B: '#forge:cloth',
		C: '#minecraft:trapdoors'
	}).id('tfg:immersive_aircraft/shaped/sail');

	event.shaped('immersive_aircraft:rotary_cannon',[
		'ABA',
		'ACA',
		' D '
	],{
		A: 'create:copper_sheet',
		B: 'minecraft:dispenser',
		C: 'gtceu:wrought_iron_gear',
		D: 'tfc:powderkeg'
	}).id('tfg:immersive_aircraft/shaped/rotary_cannon');

	event.shaped('immersive_aircraft:heavy_crossbow',[
		'ABA',
		'CDC',
		' A '
	],{
		A: '#minecraft:logs',
		B: 'gtceu:long_steel_rod',
		C: '#tfg:metal_chains',
		D: 'minecraft:crossbow'
	}).id('tfg:immersive_aircraft/shaped/heavy_crossbow');

	event.shaped('immersive_aircraft:telescope',[
		'ABC',
		' D ',
		' E '
	], {
		A: 'gtceu:small_brass_gear',
		B: 'minecraft:spyglass',
		C: '#forge:glass/colorless',
		D: 'gtceu:copper_rod',
		E: 'gtceu:wrought_iron_plate'
	}).id('tfg:immersive_aircraft/shaped/telescope');

	event.shaped('immersive_aircraft:bomb_bay',[
		'AAA',
		'ABA',
		'ACA'
	],{
		A: 'gtceu:steel_plate',
		B: 'tfc:powderkeg',
		C: 'minecraft:dispenser'
	}).id('tfg:immersive_aircraft/shaped/bomb_bay');

	event.shaped('immersive_aircraft:enhanced_propeller',[
		' A ',
		'ABA',
		' A '
	],{
		A: 'vintageimprovements:aluminum_sheet',
		B: '#forge:rotors'
	}).id('tfg:immersive_aircraft/shaped/enhanced_propeller');

	event.shaped('immersive_aircraft:eco_engine',[
		'ABC',
		'BDB',
		'EEE'
	],{
		A: '#forge:tools/hammers',
		B: 'gtceu:double_rose_gold_plate',
		C: '#forge:tools/screwdrivers',
		D: 'immersive_aircraft:engine',
		E: 'gtceu:double_sterling_silver_plate'
	}).id('tfg:immersive_aircraft/shaped/eco_engine');

	event.shaped('immersive_aircraft:steel_boiler',[
		'ABA',
		'ACA',
		'DAD'
	],{
		A: 'gtceu:steel_plate',
		B: 'gtceu:black_steel_rod',
		C: 'immersive_aircraft:engine',
		D: 'gtceu:tin_alloy_small_fluid_pipe'
	}).id('tfg:immersive_aircraft/shaped/steel_boiler');

	event.shaped('immersive_aircraft:nether_engine',[
		'AAA',
		'BCB',
		'BDB'
	],{
		A: 'gtceu:nether_quartz_plate',
		B: 'gtceu:mv_electric_piston',
		C: 'immersive_aircraft:engine',
		D: 'gtceu:blaze_bucket'
	}).id('tfg:immersive_aircraft/shaped/nether_engine')

	event.shaped('immersive_aircraft:industrial_gears',[
		'ABA',
		'CAB',
		'ACA'
	],{
		A: 'gtceu:small_brass_gear',
		B: 'gtceu:double_wrought_iron_plate',
		C: 'gtceu:double_copper_plate'
	}).id('tfg:immersive_aircraft/shaped/industrial_gears');

	event.shaped('immersive_aircraft:sturdy_pipes',[
		'EDA',
		'BAC',
		'AD '
	],{
		A: '#forge:small_fluid_pipes',
		B: 'gtceu:blue_steel_plate',
		C: 'gtceu:red_steel_plate',
		D: 'gtceu:black_steel_screw',
		E: '#forge:tools/screwdrivers',
	}).id('tfg:immersive_aircraft/shaped/sturdy_pipes')

	event.shaped('immersive_aircraft:gyroscope',[
		'ABC',
		'DED',
		'FDG'
	],{
		A: '#forge:tools/wrenches',
		B: 'minecraft:comparator',
		C: 'ae2:quartz_glass',
		D: 'gtceu:small_brass_gear',
		E: 'firmaciv:firmaciv_compass',
		F: 'gtceu:aluminium_screw',
		G: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/gyroscope')

	event.shaped('immersive_aircraft:hull_reinforcement',[
		'AB ',
		'BCB',
		' BD'
	],{
		A: '#forge:tools/hammers',
		B: 'gtceu:steel_plate',
		C: 'immersive_aircraft:hull',
		D: '#forge:tools/wrench'
	}).id('tfg:immersive_aircraft/shaped/hull_reinforcement');

	event.shaped('immersive_aircraft:improved_landing_gear',[
		'ABC',
		'DEB',
		'DDF'
	],{
		A: '#forge:tools/wrenches',
		B: 'gtceu:wrought_iron_plate',
		C: 'gtceu:steel_rod',
		D: 'gtceu:rubber_plate',
		E: 'gtceu:small_brass_gear',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/improved_landing_gear')
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

	event.recipes.create.mechanical_crafting('immersive_aircraft:biplane',[
		'   A   ',
		'BBBCBBB',
		'  BDB  ',
		'  BBB  ',
		'   B   ',
		'   E   ',
		'  BEB  ',
		'   B   '
	],{
		A: 'immersive_aircraft:enhanced_propeller',
		B: 'immersive_aircraft:hull',
		C: 'immersive_aircraft:steel_boiler',
		D: 'man_of_many_planes:economy_plane',
		E: '#minecraft:logs'
	}).id('tfg:immersive_aircraft/mechanical_crafter/biplane')

	event.recipes.create.mechanical_crafting('man_of_many_planes:scarlet_biplane',[
		'    A    ',
		'    B    ',
		'CCCDEDCCC',
		' F DDD F ',
		' CCDGDCC ',
		'    H    ',
		'   CHC   ',
		'    C    '
	],{
		A: 'immersive_aircraft:enhanced_propeller',
		B: 'immersive_aircraft:nether_engine',
		C: 'immersive_aircraft:hull',
		D: 'gtceu:red_steel_plate',
		E: 'immersive_aircraft:biplane',
		F: 'gtceu:black_steel_rod',
		G: '#create:seats',
		H: 'tfc:metal/ingot/red_steel'
	}).id('tfg:man_of_many_planes/mechanical_crafter/scarlet_biplane')

//#endregion
}