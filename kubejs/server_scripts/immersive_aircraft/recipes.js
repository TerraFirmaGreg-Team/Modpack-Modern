// priority: 0
"use strict";


function registerImmersiveAircraftRecipes(event) {
	
	event.remove({ mod: 'man_of_many_planes' });
	event.remove({ mod: 'immersive_aircraft' });

	// TODO: When IV adds its own airship, move these recipes below the Platform.isLoaded check

	event.shaped('immersive_aircraft:hull', [
		'AAA',
		'BCB',
		'AAA'
	], {
		A: '#minecraft:planks',
		B: 'gtceu:wrought_iron_plate',
		C: 'tfc:glue',
	}).id('tfg:immersive_aircraft/shaped/hull');

	event.shaped('immersive_aircraft:engine', [
		'ABC',
		'DED'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:tin_alloy_small_fluid_pipe',
		C: '#forge:tools/wrenches',
		D: '#tfg:metal_bars',
		E: 'create:andesite_casing'
	}).id('tfg:immersive_aircraft/shaped/engine');

	event.shaped('immersive_aircraft:sail', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'gtceu:wrought_iron_screw',
		B: '#forge:cloth',
		C: '#minecraft:trapdoors'
	}).id('tfg:immersive_aircraft/shaped/sail');
	
	event.shaped('immersive_aircraft:airship', [
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

	event.shaped('immersive_aircraft:cargo_airship', [
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

	// TODO: remove these after making IA optional
	TFGHelpers.registerMaterialInfo('immersive_aircraft:bamboo_hopper', [GTMaterials.Aluminium, 46, GTMaterials.WroughtIron, 22, GTMaterials.StainlessSteel, 4, GTMaterials.Cupronickel, 18, GTMaterials.Copper, 6, GTMaterials.Steel, 10, GTMaterials.Bronze, 6])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:biplane', [GTMaterials.WroughtIron, 22, GTMaterials.BlueSteel, 6, GTMaterials.BlackSteel, 8, GTMaterials.Aluminium, 4, GTMaterials.Rubber, 3, GTMaterials.Steel, 4, GTMaterials.TinAlloy, 3])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:gyroscope', [GTMaterials.Brass, 5])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:gyroscope_dials', [GTMaterials.Brass, 5, GTMaterials.Aluminium, 3, GTMaterials.Steel, 4])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:gyroscope_hud', [GTMaterials.Brass, 5, GTMaterials.Aluminium, 7, GTMaterials.Steel, 4])
	TFGHelpers.registerMaterialInfo('man_of_many_planes:economy_plane', [GTMaterials.BlueSteel, 6, GTMaterials.BlackSteel, 8, GTMaterials.Rubber, 3, GTMaterials.Steel, 4, GTMaterials.TinAlloy, 3])
	TFGHelpers.registerMaterialInfo('man_of_many_planes:scarlet_biplane', [GTMaterials.WroughtIron, 50, GTMaterials.RedSteel, 9, GTMaterials.BlueSteel, 6, GTMaterials.RedSteel, 8, GTMaterials.Aluminium, 16, GTMaterials.Cupronickel, 9])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:gyrodyne', [GTMaterials.WroughtIron, 18, GTMaterials.RedSteel, 2, GTMaterials.BlueSteel, 2])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:hull', [GTMaterials.WroughtIron, 2])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:hull_reinforcement', [GTMaterials.BlackSteel, 4, GTMaterials.WroughtIron, 2])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:improved_landing_gear', [GTMaterials.BlackSteel, 2.5, GTMaterials.Brass, 1])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:industrial_gears', [GTMaterials.WroughtIron, 4, GTMaterials.Brass, 5, GTMaterials.Copper, 4])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:nether_engine', [GTMaterials.Aluminium, 12, GTMaterials.Cupronickel, 9, GTMaterials.Steel, 3, GTMaterials.Copper, 3, GTMaterials.Bronze, 3])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:eco_engine', [GTMaterials.RoseGold, 6, GTMaterials.SterlingSilver, 6, GTMaterials.WroughtIron, 1, GTMaterials.TinAlloy, 1])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:quadrocopter', [GTMaterials.Steel, 2, GTMaterials.WroughtIron, 1, GTMaterials.TinAlloy, 1])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:rotary_cannon', [GTMaterials.Copper, 4, GTMaterials.WroughtIron, 4])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:steel_boiler', [GTMaterials.Steel, 5, GTMaterials.WroughtIron, 1, GTMaterials.TinAlloy, 3])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:sturdy_pipes', [GTMaterials.RedSteel, 1, GTMaterials.BlueSteel, 1])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:bomb_bay', [GTMaterials.Steel, 7])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:warship', [GTMaterials.WroughtIron, 22, GTMaterials.RedSteel, 4, GTMaterials.BlueSteel, 4]);
	TFGHelpers.registerMaterialInfo('immersive_aircraft:airship', [GTMaterials.WroughtIron, 6])
	TFGHelpers.registerMaterialInfo('immersive_aircraft:cargo_airship', [GTMaterials.WroughtIron, 8])

	if (!Platform.isLoaded("immersive_aircraft"))
		return;

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/engine')
		.itemInputs('gtceu:tin_alloy_small_fluid_pipe', 'create:andesite_casing', '2x #tfg:metal_bars')
		.itemOutputs('immersive_aircraft:engine')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:rotary_cannon', [
		'ABA',
		'ACA',
		' D '
	], {
		A: 'create:copper_sheet',
		B: 'minecraft:dispenser',
		C: 'gtceu:wrought_iron_gear',
		D: 'tfc:powderkeg'
	}).id('tfg:immersive_aircraft/shaped/rotary_cannon');

	event.shaped('immersive_aircraft:heavy_crossbow', [
		'ABA',
		'CDC',
		' A '
	], {
		A: '#minecraft:logs',
		B: 'gtceu:long_steel_rod',
		C: '#tfg:metal_chains',
		D: 'minecraft:crossbow'
	}).id('tfg:immersive_aircraft/shaped/heavy_crossbow');

	event.shaped('immersive_aircraft:telescope', [
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

	event.shaped('immersive_aircraft:bomb_bay', [
		'AAA',
		'ABA',
		'ACA'
	], {
		A: 'gtceu:steel_plate',
		B: 'tfc:powderkeg',
		C: 'minecraft:dispenser'
	}).id('tfg:immersive_aircraft/shaped/bomb_bay');

	//#region Airplane Upgrades

	event.shaped('immersive_aircraft:industrial_gears', [
		'ABA',
		'CAB',
		'ACA'
	], {
		A: 'gtceu:small_brass_gear',
		B: 'gtceu:double_wrought_iron_plate',
		C: 'gtceu:double_copper_plate'
	}).id('tfg:immersive_aircraft/shaped/industrial_gears');

	event.shaped('immersive_aircraft:sturdy_pipes', [
		'EDA',
		'BAC',
		'AD '
	], {
		A: '#forge:small_fluid_pipes',
		B: 'gtceu:blue_steel_plate',
		C: 'gtceu:red_steel_plate',
		D: 'gtceu:black_steel_screw',
		E: '#forge:tools/screwdrivers',
	}).id('tfg:immersive_aircraft/shaped/sturdy_pipes')

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/sturdy_pipes')
		.itemInputs('gtceu:red_steel_plate', 'gtceu:blue_steel_plate', '3x #forge:small_fluid_pipes', '2x gtceu:black_steel_screw')
		.itemOutputs('immersive_aircraft:sturdy_pipes')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:gyroscope', [
		'ABC',
		'DED',
		'FDG'
	], {
		A: '#forge:tools/wrenches',
		B: 'create:precision_mechanism',
		C: '#forge:gems/quartzite',
		D: 'gtceu:small_brass_gear',
		E: 'firmaciv:firmaciv_compass',
		F: '#forge:screws/blue_steel',
		G: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/gyroscope')

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/gyroscope')
		.itemInputs('create:precision_mechanism', 'firmaciv:firmaciv_compass', '#forge:gems/quartzite', '3x gtceu:small_brass_gear', '#forge:screws/blue_steel')
		.itemOutputs('immersive_aircraft:gyroscope')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:gyroscope_dials', [
		'ABC',
		'DED',
		'FDG'
	], {
		A: '#forge:tools/wrenches',
		B: '#gtceu:circuits/lv',
		C: 'gtceu:lv_sensor',
		D: 'gtceu:small_aluminium_gear',
		E: 'immersive_aircraft:gyroscope',
		F: '#forge:screws/vanadium_steel',
		G: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/gyroscope_dials')

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/gyroscope_dials')
		.itemInputs('immersive_aircraft:gyroscope', 'gtceu:lv_sensor', '#gtceu:circuits/lv', '3x gtceu:small_aluminium_gear', '#forge:screws/vanadium_steel')
		.itemOutputs('immersive_aircraft:gyroscope_dials')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:gyroscope_hud', [
		'ABC',
		'DED',
		'FDG'
	], {
		A: '#forge:tools/wrenches',
		B: 'gtceu:computer_monitor_cover',
		C: 'gtceu:mv_sensor',
		D: '#gtceu:circuits/mv',
		E: 'immersive_aircraft:gyroscope_dials',
		F: '#forge:screws/stainless_steel',
		G: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/gyroscope_hud')

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/gyroscope_hud')
		.itemInputs('immersive_aircraft:gyroscope_dials', 'gtceu:mv_sensor', '3x #gtceu:circuits/mv', 'gtceu:computer_monitor_cover', '#forge:screws/stainless_steel')
		.itemOutputs('immersive_aircraft:gyroscope_hud')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:enhanced_propeller', [
		'CA ',
		'ABA',
		' AD'
	], {
		A: 'vintageimprovements:aluminum_sheet',
		B: '#forge:rotors',
		C: '#forge:tools/hammers',
		D: '#forge:tools/wrenches'
	}).id('tfg:immersive_aircraft/shaped/enhanced_propeller');

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/enhanced_propeller')
		.itemInputs('#forge:rotors', '4x vintageimprovements:aluminum_sheet')
		.itemOutputs('immersive_aircraft:enhanced_propeller')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:eco_engine', [
		'ABC',
		'BDB',
		'EEE'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:double_rose_gold_plate',
		C: '#forge:tools/screwdrivers',
		D: 'immersive_aircraft:engine',
		E: 'gtceu:double_sterling_silver_plate'
	}).id('tfg:immersive_aircraft/shaped/eco_engine');

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/eco_engine')
		.itemInputs('immersive_aircraft:engine', '3x gtceu:double_sterling_silver_plate', '3x gtceu:double_rose_gold_plate')
		.itemOutputs('immersive_aircraft:eco_engine')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:steel_boiler', [
		'ABA',
		'ACA',
		'DAD'
	], {
		A: 'gtceu:steel_plate',
		B: 'gtceu:black_steel_rod',
		C: 'immersive_aircraft:engine',
		D: 'gtceu:tin_alloy_small_fluid_pipe'
	}).id('tfg:immersive_aircraft/shaped/steel_boiler');

	event.shaped('immersive_aircraft:nether_engine', [
		'AAA',
		'BCB',
		'DED'
	], {
		A: 'vintageimprovements:aluminum_sheet',
		B: 'gtceu:mv_electric_piston',
		C: 'immersive_aircraft:engine',
		D: 'gtceu:copper_single_cable',
		E: 'gtceu:mv_electric_pump'
	}).id('tfg:immersive_aircraft/shaped/nether_engine')

	event.shaped('immersive_aircraft:hull_reinforcement', [
		'AB ',
		'BCB',
		' BD'
	], {
		A: '#forge:tools/hammers',
		B: 'gtceu:black_steel_plate',
		C: 'immersive_aircraft:hull',
		D: '#forge:tools/wrenches'
	}).id('tfg:immersive_aircraft/shaped/hull_reinforcement');

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/hull_reinforcement')
		.itemInputs('immersive_aircraft:hull', '4x gtceu:black_steel_plate')
		.itemOutputs('immersive_aircraft:hull_reinforcement')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	event.shaped('immersive_aircraft:improved_landing_gear', [
		'ABC',
		'DEB',
		'DDF'
	], {
		A: '#forge:tools/wrenches',
		B: 'gtceu:black_steel_plate',
		C: 'gtceu:black_steel_rod',
		D: '#tfg:rubber_plates',
		E: 'gtceu:small_brass_gear',
		F: '#forge:tools/screwdrivers'
	}).id('tfg:immersive_aircraft/shaped/improved_landing_gear');

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/improved_landing_gear')
		.itemInputs('3x #tfg:rubber_plates', 'gtceu:small_brass_gear', '2x gtceu:black_steel_plate', 'gtceu:black_steel_rod')
		.itemOutputs('immersive_aircraft:improved_landing_gear')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	//#endregion

	//#region Aircrafts

	event.shaped('immersive_aircraft:quadrocopter', [
		'ABA',
		'CDC',
		'AEA'
	], {
		A: '#forge:rotors',
		B: '#create:seats',
		C: '#forge:rods/long/steel',
		D: 'tfg:scaffolding_frame',
		E: 'immersive_aircraft:engine'
	}).id('tfg:immersive_aircraft/shaped/quadrocopter');

	event.recipes.gtceu.assembler('tfg:immersive_aircraft/assembler/cargo_airship')
		.itemInputs('immersive_aircraft:airship', '2x immersive_aircraft:engine', '2x gtceu:wood_crate', '2x #forge:rotors')
		.itemOutputs('immersive_aircraft:cargo_airship')
		.duration(10 * 20)
		.EUt(GTValues.VA[GTValues.LV])

	//WAAGH!
	event.recipes.create.mechanical_crafting('immersive_aircraft:warship', [
		'ABCC ',
		' DDD ',
		' EEEF',
		' EGEH',
		' EEEF',
		' DDD '
	], {
		A: 'tfg:redblu_steel_plated_airplane_propeller',
		B: 'tfg:lv_aircraft_engine',
		C: 'tfg:airship_balloon',
		D: 'gtceu:wrought_iron_plate',
		E: 'immersive_aircraft:hull',
		F: 'gtceu:wrought_iron_rod',
		G: 'immersive_aircraft:cargo_airship',
		H: '#create:seats'
	}).id('tfg:immersive_aircraft/mechanical_crafter/warship')

	event.recipes.create.mechanical_crafting('immersive_aircraft:gyrodyne', [
		'   A   ',
		'   B   ',
		'CCDDDCC',
		'BBDEDBB',
		' FDDDF ',
		'   B   ',
		'   G   ',
	], {
		A: 'tfg:redblu_steel_plated_airplane_propeller',
		B: 'gtceu:long_treated_wood_rod',
		C: 'immersive_aircraft:sail',
		D: 'immersive_aircraft:hull',
		E: '#create:seats',
		F: 'create:hand_crank',
		G: 'gtceu:wrought_iron_double_ingot'
	}).id('tfg:immersive_aircraft/mechanical_crafter/gyrodyne')

	event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
		'   A   ',
		'BFBCBFB',
		'  FDF  ',
		'  BBB  ',
		'   B   ',
		'   E   ',
		'  BEB  ',
		'   B   '
	], {
		A: 'immersive_aircraft:enhanced_propeller',
		B: 'immersive_aircraft:hull',
		C: 'tfg:lv_aircraft_engine',
		D: 'man_of_many_planes:economy_plane',
		E: 'gtceu:treated_wood_plate',
		F: 'gtceu:treated_wood_frame'
	}).id('tfg:immersive_aircraft/mechanical_crafter/biplane')

	event.recipes.create.mechanical_crafting('immersive_aircraft:bamboo_hopper', [
		'  A   A  ',
		'BBCHBHCBB',
		'  DEFED  ',
		'  DGGGD  ',
		'  D   D  ',
		' BHBGBHB ',
		'  B   B  '
	], {
		A: 'tfg:stainless_steel_plated_airplane_propeller',
		B: 'immersive_aircraft:hull',
		C: 'immersive_aircraft:nether_engine',
		D: 'gtceu:long_aluminium_rod',
		E: '#create:seats',
		F: 'immersive_aircraft:biplane',
		G: 'gtceu:double_aluminium_plate',
		H: 'gtceu:aluminium_frame'
	}).id('tfg:immersive_aircraft/mechanical_crafter/bamboo_hopper')

	if (Platform.isLoaded('man_of_many_planes')) {
		event.recipes.create.mechanical_crafting('man_of_many_planes:economy_plane', [
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
			C: 'tfg:black_steel_plated_airplane_propeller',
			D: 'gtceu:long_treated_wood_rod',
			E: '#create:seats',
			F: 'gtceu:black_steel_rotor',
			G: 'greate:rubber_belt_connector',
			H: 'immersive_aircraft:steel_boiler'
		}).id('tfg:man_of_many_planes/mechanical_crafter/economy_plane');

		event.recipes.create.mechanical_crafting('man_of_many_planes:scarlet_biplane', [
			'    A    ',
			'    B    ',
			'CCCDEDCCC',
			' F DDD F ',
			' CCDGDCC ',
			'    H    ',
			'   CHC   ',
			'    C    '
		], {
			A: 'tfg:stainless_steel_plated_airplane_propeller',
			B: 'immersive_aircraft:nether_engine',
			C: 'immersive_aircraft:hull',
			D: 'gtceu:red_steel_plate',
			E: 'immersive_aircraft:biplane',
			F: 'gtceu:black_steel_frame',
			G: '#create:seats',
			H: 'tfc:metal/ingot/red_steel'
		}).id('tfg:man_of_many_planes/mechanical_crafter/scarlet_biplane')
	}

	//#endregion
}