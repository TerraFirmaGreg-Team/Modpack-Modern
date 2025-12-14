// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function registerGreateRecipes(event) {
	
	removeGreateRecipes(event)
	registerGreateRecyclingRecipes(event);

	event.replaceInput({ input: 'create:cogwheel'}, 'create:cogwheel', '#forge:cogwheels')
	event.replaceInput({ input: 'create:large_cogwheel'}, 'create:large_cogwheel', '#forge:large_cogwheels')
	event.replaceInput({ input: 'create:shaft'}, 'create:shaft', '#forge:shafts')

	// #region Shafts

	event.shapeless('9x greate:andesite_alloy_shaft', ['#forge:plates/black_bronze', '#forge:tools/saws'])
		.id('gtceu:shaped/andesite_alloy_shaft_black_bronze')

	event.shapeless('9x greate:andesite_alloy_shaft', ['#forge:plates/bronze', '#forge:tools/saws'])
		.id('gtceu:shaped/andesite_alloy_shaft_bronze')

	event.shapeless('9x greate:andesite_alloy_shaft', ['#forge:plates/bismuth_bronze', '#forge:tools/saws'])
		.id('gtceu:shaped/andesite_alloy_shaft_bismuth_bronze')

	event.shapeless('9x greate:steel_shaft', ['#forge:plates/steel', '#forge:tools/saws'])
		.id('gtceu:shaped/steel_shaft')

	event.shapeless('9x greate:aluminium_shaft', ['#forge:plates/aluminium', '#forge:tools/saws'])
		.id('gtceu:shaped/aluminium_shaft')

	event.shapeless('9x greate:stainless_steel_shaft', ['#forge:plates/stainless_steel', '#forge:tools/saws'])
		.id('gtceu:shaped/stainless_steel_shaft')

	event.shapeless('9x greate:titanium_shaft', ['#forge:plates/titanium', '#forge:tools/saws'])
		.id('gtceu:shaped/titanium_shaft')

	event.recipes.gtceu.cutter('andesite_alloy_shaft')
		.itemInputs('#forge:plates/bronze')
		.itemOutputs('9x greate:andesite_alloy_shaft')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo()

	event.recipes.gtceu.cutter('andesite_alloy_shaft_black')
		.itemInputs('#forge:plates/black_bronze')
		.itemOutputs('9x greate:andesite_alloy_shaft')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.cutter('andesite_alloy_shaft_bismuth')
		.itemInputs('#forge:plates/bismuth_bronze')
		.itemOutputs('9x greate:andesite_alloy_shaft')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.cutter('steel_shaft')
		.itemInputs('#forge:plates/steel')
		.itemOutputs('9x greate:steel_shaft')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	event.recipes.gtceu.cutter('aluminium_shaft')
		.itemInputs('#forge:plates/aluminium')
		.itemOutputs('9x greate:aluminium_shaft')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	event.recipes.gtceu.cutter('stainless_steel_shaft')
		.itemInputs('#forge:plates/stainless_steel')
		.itemOutputs('9x greate:stainless_steel_shaft')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	event.recipes.gtceu.cutter('titanium_shaft')
		.itemInputs('#forge:plates/titanium')
		.itemOutputs('9x greate:titanium_shaft')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	// #endregion

	// #region Gearboxes

	event.recipes.gtceu.assembler('greate:andesite_alloy_gearbox')
		.itemInputs('create:andesite_casing', '4x greate:andesite_alloy_shaft')
		.itemOutputs('greate:andesite_alloy_gearbox')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('greate:andesite_alloy_gearbox', { 'wood': 1, 'wrought_iron': 1 });
	TFGHelpers.registerMaterialInfo('greate:andesite_alloy_vertical_gearbox', { 'wood': 1, 'wrought_iron': 1 });

	event.recipes.gtceu.assembler('greate:steel_gearbox')
		.itemInputs('create:andesite_casing', '4x greate:steel_shaft')
		.itemOutputs('greate:steel_gearbox')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('greate:steel_gearbox', { 'wood': 1, 'wrought_iron': 1, 'steel': 4/9 });
	TFGHelpers.registerMaterialInfo('greate:steel_vertical_gearbox', { 'wood': 1, 'wrought_iron': 1, 'steel': 4/9 });

	event.recipes.gtceu.assembler('greate:aluminium_gearbox')
		.itemInputs('create:andesite_casing', '4x greate:aluminium_shaft')
		.itemOutputs('greate:aluminium_gearbox')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('greate:aluminium_gearbox', { 'wood': 1, 'wrought_iron': 1, 'aluminium': 4/9 });
	TFGHelpers.registerMaterialInfo('greate:aluminium_vertical_gearbox', { 'wood': 1, 'wrought_iron': 1, 'aluminium': 4/9 });

	event.recipes.gtceu.assembler('greate:stainless_steel_gearbox')
		.itemInputs('create:andesite_casing', '4x greate:stainless_steel_shaft')
		.itemOutputs('greate:stainless_steel_gearbox')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('greate:stainless_steel_gearbox', { 'wood': 1, 'wrought_iron': 1, 'stainless_steel': 4/9 });
	TFGHelpers.registerMaterialInfo('greate:stainless_steel_vertical_gearbox', { 'wood': 1, 'wrought_iron': 1, 'stainless_steel': 4/9 });

	event.recipes.gtceu.assembler('greate:titanium_gearbox')
		.itemInputs('create:andesite_casing', '4x greate:titanium_shaft')
		.itemOutputs('greate:titanium_gearbox')
		.circuit(5)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	TFGHelpers.registerMaterialInfo('greate:titanium_gearbox', { 'wood': 1, 'wrought_iron': 1, 'titanium': 4/9 });
	TFGHelpers.registerMaterialInfo('greate:titanium_vertical_gearbox', { 'wood': 1, 'wrought_iron': 1, 'titanium': 4/9 });

	// #endregion

	// #region Cogs

	event.shapeless('greate:andesite_alloy_cogwheel', ['greate:andesite_alloy_shaft', '#forge:small_gears/wood'])
		.id('tfg:shapeless/andesite_alloy_cogwheel')
	event.shapeless('greate:large_andesite_alloy_cogwheel', ['greate:andesite_alloy_shaft', '#forge:gears/wood'])
		.id('tfg:shapeless/large_andesite_alloy_cogwheel');
	event.shapeless('greate:large_andesite_alloy_cogwheel', ['greate:andesite_alloy_cogwheel', '#forge:small_gears/wood'])
		.id('tfg:shapeless/large_andesite_alloy_cogwheel_upgrade');

	TFGHelpers.registerMaterialInfo('greate:andesite_alloy_cogwheel', { 'wood': 1 });
	TFGHelpers.registerMaterialInfo('greate:large_andesite_alloy_cogwheel', { 'wood': 2 });

	event.shapeless('greate:steel_cogwheel', ['greate:steel_shaft', '#forge:small_gears/wrought_iron'])
		.id('tfg:shapeless/steel_cogwheel')
	event.shapeless('greate:large_steel_cogwheel', ['greate:steel_shaft', '#forge:small_gears/wrought_iron','#forge:small_gears/wrought_iron'])
		.id('tfg:shapeless/large_steel_cogwheel');
	event.shapeless('greate:large_steel_cogwheel', ['greate:steel_cogwheel', '#forge:small_gears/wrought_iron'])
		.id('tfg:shapeless/large_steel_cogwheel_upgrade');

	TFGHelpers.registerMaterialInfo('greate:steel_cogwheel', { 'wrought_iron': 1, 'steel': 1/9 });
	TFGHelpers.registerMaterialInfo('greate:large_steel_cogwheel', { 'wrought_iron': 2, 'steel': 1/9 });

	event.shapeless('greate:aluminium_cogwheel', ['greate:aluminium_shaft', '#forge:small_gears/steel'])
		.id('tfg:shapeless/aluminium_cogwheel')
	event.shapeless('greate:large_aluminium_cogwheel', ['greate:aluminium_shaft', '#forge:small_gears/steel', '#forge:small_gears/steel'])
		.id('tfg:shapeless/large_aluminium_cogwheel');
	event.shapeless('greate:large_aluminium_cogwheel', ['greate:aluminium_cogwheel', '#forge:small_gears/steel'])
		.id('tfg:shapeless/large_aluminium_cogwheel_upgrade');

	TFGHelpers.registerMaterialInfo('greate:aluminium_cogwheel', { 'steel': 1, 'aluminium': 1/9 });
	TFGHelpers.registerMaterialInfo('greate:large_aluminium_cogwheel', { 'steel': 2, 'aluminium': 1/9 });

	event.shapeless('greate:stainless_steel_cogwheel', ['greate:stainless_steel_shaft', '#forge:small_gears/aluminium'])
		.id('tfg:shapeless/stainless_steel_cogwheel')
	event.shapeless('greate:large_stainless_steel_cogwheel', ['greate:stainless_steel_shaft', '#forge:small_gears/aluminium', '#forge:small_gears/aluminium'])
		.id('tfg:shapeless/large_stainless_steel_cogwheel');
	event.shapeless('greate:large_stainless_steel_cogwheel', ['greate:stainless_steel_cogwheel', '#forge:small_gears/aluminium'])
		.id('tfg:shapeless/large_stainless_steel_cogwheel_upgrade');

	TFGHelpers.registerMaterialInfo('greate:stainless_steel_cogwheel', { 'aluminium': 1, 'stainless_steel': 1/9 });
	TFGHelpers.registerMaterialInfo('greate:large_stainless_steel_cogwheel', { 'aluminium': 2, 'stainless_steel': 1/9 });

	event.shapeless('greate:titanium_cogwheel', ['greate:titanium_shaft', '#forge:small_gears/stainless_steel'])
		.id('tfg:shapeless/titanium_cogwheel')
	event.shapeless('greate:large_titanium_cogwheel', ['greate:titanium_shaft', '#forge:small_gears/stainless_steel', '#forge:small_gears/stainless_steel'])
		.id('tfg:shapeless/large_titanium_cogwheel');
	event.shapeless('greate:large_titanium_cogwheel', ['greate:titanium_cogwheel', '#forge:small_gears/stainless_steel'])
		.id('tfg:shapeless/large_titanium_cogwheel_upgrade');

	TFGHelpers.registerMaterialInfo('greate:titanium_cogwheel', { 'stainless_steel': 1, 'titanium': 1/9 });
	TFGHelpers.registerMaterialInfo('greate:large_titanium_cogwheel', { 'stainless_steel': 2, 'titanium': 1/9 });

	// #endregion

	// #region Millstones

	event.shaped('greate:andesite_alloy_millstone', [
		' B ',
		'DCE',
		' A '
	], {
		A: 'tfc:quern',
		B: 'tfc:handstone',
		C: '#forge:small_gears/bronze',
		D: '#forge:tools/hammers',
		E: '#forge:tools/saws'
	}).id('greate:shaped/andesite_alloy_millstone')

	event.shaped('greate:andesite_alloy_millstone', [
		' B ',
		'DCE',
		' A '
	], {
		A: 'tfc:quern',
		B: 'tfc:handstone',
		C: '#forge:small_gears/bismuth_bronze',
		D: '#forge:tools/hammers',
		E: '#forge:tools/saws'
	}).id('greate:shaped/andesite_alloy_millstone2')

	event.shaped('greate:andesite_alloy_millstone', [
		' B ',
		'DCE',
		' A '
	], {
		A: 'tfc:quern',
		B: 'tfc:handstone',
		C: '#forge:small_gears/black_bronze',
		D: '#forge:tools/hammers',
		E: '#forge:tools/saws'
	}).id('greate:shaped/andesite_alloy_millstone3')

	TFGHelpers.registerMaterialInfo('greate:andesite_alloy_millstone', { 'stone': 9 });

	event.shaped('greate:steel_millstone', [
		'FBF',
		'DCE',
		'AGA'
	], {
		A: '#forge:smooth_stone',
		B: 'gtceu:treated_wood_slab',
		C: '#forge:small_gears/steel',
		D: '#forge:tools/hammers',
		E: '#forge:tools/wrenches',
		F: '#forge:dusts/diamond',
		G: 'greate:steel_shaft'
	}).id('greate:shaped/steel_millstone')

	event.recipes.gtceu.assembler('greate:steel_millstone')
		.itemInputs('2x #forge:smooth_stone', 'gtceu:treated_wood_slab', '#forge:small_gears/steel', '2x #forge:dusts/diamond', 'greate:steel_shaft')
		.itemOutputs('greate:steel_millstone')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.recipes.gtceu.shaped('greate:aluminium_millstone', [
		'BCB',
		'FGF',
		'AAA'
	], {
		A: '#forge:double_plates/vanadium_steel',
		B: '#gtceu:circuits/mv',
		C: '#forge:gears/steel',
		F: '#forge:gems/diamond',
		G: 'gtceu:mv_machine_casing'
	}).id('greate:shaped/aluminium_millstone')

	event.recipes.gtceu.assembler('greate:aluminium_millstone')
		.itemInputs('3x #forge:double_plates/vanadium_steel', '2x #gtceu:circuits/mv', '#forge:gears/steel', '2x #forge:gems/diamond', 'gtceu:mv_machine_casing')
		.itemOutputs('greate:aluminium_millstone')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.recipes.gtceu.shaped('greate:stainless_steel_millstone', [
		'BCB',
		'FGF',
		'AAA'
	], {
		A: '#forge:double_plates/blue_alloy',
		B: '#gtceu:circuits/hv',
		C: '#forge:gears/aluminium',
		F: 'gtceu:diamond_grinding_head',
		G: 'gtceu:hv_machine_casing'
	}).id('greate:shaped/stainless_steel_millstone')

	event.recipes.gtceu.assembler('greate:stainless_steel_millstone')
		.itemInputs('3x #forge:double_plates/blue_alloy', '2x #gtceu:circuits/hv', '#forge:gears/aluminium', '2x gtceu:diamond_grinding_head', 'gtceu:hv_machine_casing')
		.itemOutputs('greate:stainless_steel_millstone')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.recipes.gtceu.shaped('greate:titanium_millstone', [
		'BCB',
		'FGF',
		'AAA'
	], {
		A: '#forge:double_plates/ultimet',
		B: '#gtceu:circuits/ev',
		C: '#forge:gears/stainless_steel',
		F: 'gtceu:diamond_grinding_head',
		G: 'gtceu:ev_machine_casing'
	}).id('greate:shaped/titanium_millstone')

	event.recipes.gtceu.assembler('greate:titanium_millstone')
		.itemInputs('3x #forge:double_plates/ultimet', '2x #gtceu:circuits/ev', '#forge:gears/stainless_steel', '2x gtceu:diamond_grinding_head', 'gtceu:ev_machine_casing')
		.itemOutputs('greate:titanium_millstone')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	// #endregion

	// #region Crushing wheels

	event.recipes.createMechanicalCrafting('2x greate:steel_crushing_wheel', [
		' AAA ',
		'ADBDA',
		'ABCBA',
		'ADBDA',
		' AAA '
	], {
		A: '#forge:plates/tin_alloy',
		B: '#forge:storage_blocks/wrought_iron',
		C: 'gtceu:lv_machine_hull',
		D: '#forge:gems/diamond'
	}).id('greate:steel_crushing_wheel')

	TFGHelpers.registerMaterialInfo('greate:steel_crushing_wheel', { 'wrought_iron': 14, 'tin_alloy': 8, 'steel': 4, 'diamond': 4 });

	event.recipes.createMechanicalCrafting('2x greate:aluminium_crushing_wheel', [
		' AAA ',
		'ADBDA',
		'ABCBA',
		'ADBDA',
		' AAA '
	], {
		A: '#forge:plates/vanadium_steel',
		B: '#forge:storage_blocks/steel',
		C: 'gtceu:mv_machine_hull',
		D: '#forge:gems/diamond'
	}).id('greate:aluminium_crushing_wheel')

	TFGHelpers.registerMaterialInfo('greate:aluminium_crushing_wheel', { 'steel': 14, 'vanadium_steel': 8, 'aluminium': 4, 'diamond': 4 });

	event.recipes.createMechanicalCrafting('2x greate:stainless_steel_crushing_wheel', [
		' AAA ',
		'ADBDA',
		'ABCBA',
		'ADBDA',
		' AAA '
	], {
		A: '#forge:plates/blue_alloy',
		B: '#forge:storage_blocks/aluminium',
		C: 'gtceu:hv_machine_hull',
		D: 'gtceu:diamond_grinding_head'
	}).id('greate:stainless_steel_crushing_wheel')
	
	TFGHelpers.registerMaterialInfo('greate:stainless_steel_crushing_wheel', { 'aluminium': 14, 'blue_alloy': 8, 'stainless_steel': 4, 'steel': 32, 'diamond': 20 });

	event.recipes.createMechanicalCrafting('2x greate:titanium_crushing_wheel', [
		' AAA ',
		'ADBDA',
		'ABCBA',
		'ADBDA',
		' AAA '
	], {
		A: '#forge:plates/ultimet',
		B: '#forge:storage_blocks/stainless_steel',
		C: 'gtceu:ev_machine_hull',
		D: 'gtceu:diamond_grinding_head'
	}).id('greate:titanium_crushing_wheel')

	TFGHelpers.registerMaterialInfo('greate:titanium_crushing_wheel', { 'stainless_steel': 14, 'ultimet': 8, 'titanium': 4, 'steel': 32, 'diamond': 20 });

	// #endregion

	// #region Encased Fan

	event.shaped('greate:steel_encased_fan', [
		' A ',
		'BCB',
		'DEF'
	], {
		A: 'greate:steel_shaft',
		B: '#forge:small_gears/wrought_iron',
		C: 'create:andesite_casing',
		D: '#forge:tools/wrenches',
		E: 'gtceu:steel_rotor',
		F: '#forge:tools/hammers'
	}).id('greate:shaped/steel_encased_fan')

	event.recipes.gtceu.assembler('greate:steel_encased_fan')
		.itemInputs('greate:steel_shaft', '2x #forge:small_gears/wrought_iron', 'create:andesite_casing', 'gtceu:steel_rotor')
		.itemOutputs('greate:steel_encased_fan')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.shaped('greate:aluminium_encased_fan', [
		' A ',
		'BCB',
		'DEF'
	], {
		A: 'greate:aluminium_shaft',
		B: '#gtceu:circuits/mv',
		C: 'gtceu:mv_machine_casing',
		D: '#forge:tools/wrenches',
		E: 'gtceu:aluminium_rotor',
		F: '#forge:tools/hammers'
	}).id('greate:shaped/aluminium_encased_fan')

	event.recipes.gtceu.assembler('greate:aluminium_encased_fan')
		.itemInputs('greate:aluminium_shaft', '2x #gtceu:circuits/mv', 'gtceu:mv_machine_casing', 'gtceu:aluminium_rotor')
		.itemOutputs('greate:aluminium_encased_fan')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.shaped('greate:stainless_steel_encased_fan', [
		' A ',
		'BCB',
		'DEF'
	], {
		A: 'greate:stainless_steel_shaft',
		B: '#gtceu:circuits/hv',
		C: 'gtceu:hv_machine_casing',
		D: '#forge:tools/wrenches',
		E: 'gtceu:stainless_steel_rotor',
		F: '#forge:tools/hammers'
	}).id('greate:shaped/stainless_steel_encased_fan')

	event.recipes.gtceu.assembler('greate:stainless_steel_encased_fan')
		.itemInputs('greate:stainless_steel_shaft', '2x #gtceu:circuits/hv', 'gtceu:hv_machine_casing', 'gtceu:stainless_steel_rotor')
		.itemOutputs('greate:stainless_steel_encased_fan')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.shaped('greate:titanium_encased_fan', [
		' A ',
		'BCB',
		'DEF'
	], {
		A: 'greate:titanium_shaft',
		B: '#gtceu:circuits/ev',
		C: 'gtceu:ev_machine_casing',
		D: '#forge:tools/wrenches',
		E: 'gtceu:titanium_rotor',
		F: '#forge:tools/hammers'
	}).id('greate:shaped/titanium_encased_fan')

	event.recipes.gtceu.assembler('greate:titanium_encased_fan')
		.itemInputs('greate:titanium_shaft', '2x #gtceu:circuits/ev', 'gtceu:ev_machine_casing', 'gtceu:titanium_rotor')
		.itemOutputs('greate:titanium_encased_fan')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	// #endregion

	// #region Mechanical saw

	event.shaped('greate:andesite_alloy_mechanical_saw', [
		'ABA',
		'CDC',
		'EF '
	], {
		A: '#forge:screws/wrought_iron',
		B: 'gtceu:wrought_iron_buzz_saw_blade',
		C: 'greate:andesite_alloy_cogwheel',
		D: 'create:andesite_casing',
		E: '#forge:tools/wrenches',
		F: 'greate:andesite_alloy_shaft'
	}).id('greate:shaped/andesite_alloy_mechanical_saw')

	event.recipes.gtceu.assembler('greate:andesite_alloy_mechanical_saw')
		.itemInputs('2x #forge:screws/wrought_iron', 'gtceu:wrought_iron_buzz_saw_blade', '2x greate:andesite_alloy_cogwheel', 'create:andesite_casing', 'greate:andesite_alloy_shaft')
		.itemOutputs('greate:andesite_alloy_mechanical_saw')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		
	TFGHelpers.registerMaterialInfo('greate:andesite_alloy_mechanical_saw', { 'wood': 1, 'wrought_iron': 3 });

	event.shaped('greate:steel_mechanical_saw', [
		'ABA',
		'CDC',
		'FE '
	], {
		A: '#gtceu:circuits/ulv',
		B: 'gtceu:cobalt_brass_buzz_saw_blade',
		C: 'greate:steel_cogwheel',
		D: 'gtceu:ulv_machine_hull',
		E: 'greate:steel_shaft',
		F: '#forge:tools/wrenches'
	}).id('greate:shaped/steel_mechanical_saw')

	event.recipes.gtceu.assembler('greate:steel_mechanical_saw')
		.itemInputs('gtceu:ulv_machine_hull', 'greate:steel_shaft', '2x #gtceu:circuits/ulv', 'gtceu:cobalt_brass_buzz_saw_blade', '2x greate:steel_cogwheel')
		.itemOutputs('greate:steel_mechanical_saw')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.shaped('greate:aluminium_mechanical_saw', [
		'ABA',
		'CDC',
		'FE '
	], {
		A: '#gtceu:circuits/mv',
		B: 'gtceu:vanadium_steel_buzz_saw_blade',
		C: 'gtceu:mv_electric_motor',
		D: 'gtceu:mv_machine_hull',
		E: 'greate:aluminium_shaft',
		F: '#forge:tools/wrenches'
	}).id('greate:shaped/aluminium_mechanical_saw')

	event.recipes.gtceu.assembler('greate:aluminium_mechanical_saw')
		.itemInputs('gtceu:mv_machine_hull', '2x #gtceu:circuits/mv', 'gtceu:vanadium_steel_buzz_saw_blade', '2x gtceu:mv_electric_motor', 'greate:aluminium_shaft')
		.itemOutputs('greate:aluminium_mechanical_saw')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	// Removed while we wait for a fix so recipes don't work without being in a Cleanroom - Important for Wafer
	
	// event.shaped('greate:stainless_steel_mechanical_saw', [
	//	'ABA',
	//	'CDC',
	//	'FE '
	// ], {
	//	A: '#gtceu:circuits/hv',
	//	B: 'gtceu:diamond_buzz_saw_blade',
	//	C: 'gtceu:hv_electric_motor',
	//	D: 'gtceu:hv_machine_hull',
	//	E: 'greate:stainless_steel_shaft',
	//	F: '#forge:tools/wrenches'
	// }).id('greate:shaped/stainless_steel_mechanical_saw')

	// event.shaped('greate:titanium_mechanical_saw', [
	//	'ABA',
	//	'CDC',
	//	'FE '
	//], {
	//	A: '#gtceu:circuits/ev',
	//	B: 'gtceu:ultimet_buzz_saw_blade',
	//	C: 'gtceu:ev_electric_motor',
	//	D: 'gtceu:ev_machine_hull',
	//	E: 'greate:titanium_shaft',
	//	F: '#forge:tools/wrenches'
	//}).id('greate:shaped/titanium_mechanical_saw')

	// #endregion

	// #region Mechanical Pump

	event.shaped('greate:steel_mechanical_pump', [
		' AB',
		'CDE',
		' AB'
	], {
		A: '#forge:wax',
		B: '#forge:screws/steel',
		C: '#forge:tools/wrenches',
		D: 'create:fluid_pipe',
		E: 'greate:steel_cogwheel'
	}).id('greate:shaped/steel_mechanical_pump')

	event.recipes.gtceu.assembler('greate:steel_mechanical_pump')
		.itemInputs('2x #forge:wax', '2x #forge:screws/steel', 'create:fluid_pipe', 'greate:steel_cogwheel')
		.itemOutputs('greate:steel_mechanical_pump')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.shaped('greate:aluminium_mechanical_pump', [
		' AB',
		'CDE',
		' AB'
	], {
		A: '#forge:rings/rubber',
		B: '#forge:screws/aluminium',
		C: '#forge:tools/wrenches',
		D: 'create:fluid_pipe',
		E: 'greate:aluminium_cogwheel'
	}).id('greate:shaped/aluminium_mechanical_pump')

	event.recipes.gtceu.assembler('greate:aluminium_mechanical_pump')
		.itemInputs('2x #forge:rings/rubber', '2x #forge:screws/aluminium', 'create:fluid_pipe', 'greate:aluminium_cogwheel')
		.itemOutputs('greate:aluminium_mechanical_pump')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.shaped('greate:stainless_steel_mechanical_pump', [
		' AB',
		'CDE',
		' AB'
	], {
		A: '#forge:rings/silicone_rubber',
		B: '#forge:screws/stainless_steel',
		C: '#forge:tools/wrenches',
		D: 'create:fluid_pipe',
		E: 'greate:stainless_steel_cogwheel'
	}).id('greate:shaped/stainless_steel_mechanical_pump')

	event.recipes.gtceu.assembler('greate:stainless_steel_mechanical_pump')
		.itemInputs('2x #forge:rings/silicone_rubber', '2x #forge:screws/stainless_steel', 'create:fluid_pipe', 'greate:stainless_steel_cogwheel')
		.itemOutputs('greate:stainless_steel_mechanical_pump')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.shaped('greate:titanium_mechanical_pump', [
		' AB',
		'CDE',
		' AB'
	], {
		A: '#forge:rings/silicone_rubber',
		B: '#forge:screws/titanium',
		C: '#forge:tools/wrenches',
		D: 'create:fluid_pipe',
		E: 'greate:titanium_cogwheel'
	}).id('greate:shaped/titanium_mechanical_pump')

	event.recipes.gtceu.assembler('greate:titanium_mechanical_pump')
		.itemInputs('2x #forge:rings/silicone_rubber', '2x #forge:screws/titanium', 'create:fluid_pipe', 'greate:titanium_cogwheel')
		.itemOutputs('greate:titanium_mechanical_pump')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	// #endregion

	// #region Belt Connector

	// Wood
	event.shaped('greate:andesite_alloy_belt_connector', [
		'AAA',
		'CBC',
		'AAA'
	], {
		A: '#tfc:lumber',
		B: '#forge:tools/hammers',
		C: '#tfg:metal_chains'
	}).id('tfg:shaped/wood_belt_connector')

	removeMaceratorRecipe(event, 'macerate_andesite_alloy_belt_connector')
	event.remove({ id: 'gtceu:shaped/andesite_alloy_belt_connector' })
	event.remove({ id: 'gtceu:extractor/extract_andesite_alloy_belt_connector' })
	event.remove({ id: 'gtceu:arc_furnace/arc_andesite_alloy_belt_connector' })

	TFGHelpers.registerMaterialInfo('greate:andesite_alloy_belt_connector', { 'wood': 1 });

	// Leather
	event.recipes.tfc.damage_inputs_shaped_crafting(
		event.shaped('greate:stone_belt_connector', [
			'AAA',
			'CBC'
		], {
			A: '#forge:leather',
			B: '#tfc:sewing_needles',
			C: '#forge:string',
		})).id('tfg:shaped/leather_belt_connector')

	event.recipes.gtceu.assembler('leather_belt_connector')
		.itemInputs('3x #forge:leather', '2x #forge:string')
		.itemOutputs('greate:stone_belt_connector')
		.circuit(11)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	removeMaceratorRecipe(event, 'macerate_stone_belt_connector')
	event.remove({ id: 'gtceu:shaped/stone_belt_connector' })

	TFGHelpers.registerMaterialInfo('greate:stone_belt_connector', { 'air': 1 });
	
	// Rubber
	event.shaped('greate:rubber_belt_connector', [
		'AAA',
		'B C'
	], {
		A: '#forge:plates/rubber',
		B: '#forge:tools/hammers',
		C: '#forge:tools/wrenches',
	}).id('tfg:shaped/rubber_belt_connector')

	event.recipes.gtceu.assembler('rubber_belt_connector')
		.itemInputs('3x gtceu:rubber_plate')
		.itemOutputs('greate:rubber_belt_connector')
		.circuit(11)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:shaped/rubber_belt_connector' })
	removeMaceratorRecipe(event, 'macerate_rubber_belt_connector')
	event.remove({ id: 'gtceu:extractor/extract_rubber_belt_connector' })
	
	TFGHelpers.registerMaterialInfo('greate:rubber_belt_connector', { 'rubber': 3 });

	// Silicone rubber
	event.shaped('greate:silicone_rubber_belt_connector', [
		'AAA',
		'B C'
	], {
		A: '#forge:plates/silicone_rubber',
		B: '#forge:tools/hammers',
		C: '#forge:tools/wrenches',
	}).id('tfg:shaped/silicone_rubber_belt_connector')

	event.recipes.gtceu.assembler('silicone_rubber_belt_connector')
		.itemInputs('3x gtceu:silicone_rubber_plate')
		.itemOutputs('greate:silicone_rubber_belt_connector')
		.circuit(11)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:shaped/silicone_rubber_belt_connector' })
	removeMaceratorRecipe(event, 'macerate_silicone_rubber_belt_connector')
	event.remove({ id: 'gtceu:extractor/extract_silicone_rubber_belt_connector' })

	TFGHelpers.registerMaterialInfo('greate:silicone_rubber_belt_connector', { 'silicone_rubber': 3 });

	// SBR rubber
	event.shaped('greate:styrene_butadiene_rubber_belt_connector', [
		'AAA',
		'B C'
	], {
		A: '#forge:plates/styrene_butadiene_rubber',
		B: '#forge:tools/hammers',
		C: '#forge:tools/wrenches',
	}).id('tfg:shaped/styrene_butadiene_rubber_belt_connector')

	event.recipes.gtceu.assembler('styrene_butadiene_rubber_belt_connector')
		.itemInputs('3x gtceu:styrene_butadiene_rubber_plate')
		.itemOutputs('greate:styrene_butadiene_rubber_belt_connector')
		.circuit(11)
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:shaped/styrene_butadiene_rubber_belt_connector' })
	removeMaceratorRecipe(event, 'macerate_styrene_butadiene_rubber_belt_connector')
	event.remove({ id: 'gtceu:extractor/extract_styrene_butadiene_rubber_belt_connector' })

	TFGHelpers.registerMaterialInfo('greate:styrene_butadiene_rubber_belt_connector', { 'styrene_butadiene_rubber': 3 });
	// #endregion

	// #region Mixer

	event.shaped('greate:steel_mechanical_mixer', [
		'ABA',
		'DCD',
		'FEG'
	], {
		A: '#gtceu:circuits/ulv',
		B: 'greate:steel_shaft',
		C: 'gtceu:ulv_machine_hull',
		D: '#forge:plates/black_steel',
		E: 'gtceu:steel_whisk',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('greate:shaped/steel_mechanical_mixer')

	event.recipes.gtceu.assembler('greate:steel_mechanical_mixer')
		.itemInputs('greate:steel_shaft', '2x #gtceu:circuits/ulv', 'gtceu:ulv_machine_hull', 'gtceu:steel_whisk', '2x #forge:plates/black_steel')
		.itemOutputs('greate:steel_mechanical_mixer')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)

	event.shaped('greate:aluminium_mechanical_mixer', [
		'ABA',
		'DCD',
		'FEG'
	], {
		A: '#gtceu:circuits/mv',
		B: 'greate:aluminium_shaft',
		C: 'gtceu:mv_machine_hull',
		D: '#forge:plates/cobalt_brass',
		E: 'gtceu:aluminium_whisk',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('greate:shaped/aluminium_mechanical_mixer')

	event.recipes.gtceu.assembler('greate:aluminium_mechanical_mixer')
		.itemInputs('greate:aluminium_shaft', '2x #gtceu:circuits/mv', 'gtceu:mv_machine_hull', 'gtceu:aluminium_whisk', '2x #forge:plates/cobalt_brass')
		.itemOutputs('greate:aluminium_mechanical_mixer')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)
		
	event.shaped('greate:stainless_steel_mechanical_mixer', [
		'ABA',
		'DCD',
		'FEG'
	], {
		A: '#gtceu:circuits/hv',
		B: 'greate:stainless_steel_shaft',
		C: 'gtceu:hv_machine_hull',
		D: '#forge:plates/vanadium_steel',
		E: 'gtceu:stainless_steel_whisk',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('greate:shaped/stainless_steel_mechanical_mixer')

	event.recipes.gtceu.assembler('greate:stainless_steel_mechanical_mixer')
		.itemInputs('greate:stainless_steel_shaft', '2x #gtceu:circuits/hv', 'gtceu:hv_machine_hull', 'gtceu:stainless_steel_whisk', '2x #forge:plates/vanadium_steel')
		.itemOutputs('greate:stainless_steel_mechanical_mixer')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)
		
	event.shaped('greate:titanium_mechanical_mixer', [
		'ABA',
		'DCD',
		'FEG'
	], {
		A: '#gtceu:circuits/ev',
		B: 'greate:titanium_shaft',
		C: 'gtceu:ev_machine_hull',
		D: '#forge:plates/blue_alloy',
		E: 'gtceu:titanium_whisk',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('greate:shaped/titanium_mechanical_mixer')

	event.recipes.gtceu.assembler('greate:titanium_mechanical_mixer')
		.itemInputs('greate:titanium_shaft', '2x #gtceu:circuits/ev', 'gtceu:ev_machine_hull', 'gtceu:titanium_whisk', '2x #forge:plates/blue_alloy')
		.itemOutputs('greate:titanium_mechanical_mixer')
		.duration(200)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)

	// #endregion

	// #region Whisks
	event.shaped('gtceu:steel_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/steel',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/steel'
	}).id('gtceu:shaped/steel_whisk')
	
	event.recipes.gtceu.extruder('gtceu:steel_whisk')
		.itemInputs('4x #forge:ingots/steel')
		.notConsumable('tfg:whisk_extruder_mold')
		.itemOutputs('gtceu:steel_whisk')
		.duration(GTMaterials.Steel.getMass() * 4)
		.EUt(GTValues.VA[GTValues.MV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:extractor/extract_steel_whisk' })
	
	event.shaped('gtceu:aluminium_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/aluminium',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/aluminium'
	}).id('gtceu:shaped/aluminium_whisk')

	event.recipes.gtceu.extruder('gtceu:aluminium_whisk')
		.itemInputs('4x #forge:ingots/aluminium')
		.notConsumable('tfg:whisk_extruder_mold')
		.itemOutputs('gtceu:aluminium_whisk')
		.duration(GTMaterials.Aluminium.getMass() * 4)
		.EUt(GTValues.VA[GTValues.MV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:extractor/extract_aluminium_whisk' })
	
	event.shaped('gtceu:stainless_steel_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/stainless_steel',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/stainless_steel'
	}).id('gtceu:shaped/stainless_steel_whisk')

	event.recipes.gtceu.extruder('gtceu:stainless_steel_whisk')
		.itemInputs('4x #forge:ingots/stainless_steel')
		.notConsumable('tfg:whisk_extruder_mold')
		.itemOutputs('gtceu:stainless_steel_whisk')
		.duration(GTMaterials.StainlessSteel.getMass() * 4)
		.EUt(GTValues.VA[GTValues.MV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:extractor/extract_stainless_steel_whisk' })
	
	event.shaped('gtceu:titanium_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/titanium',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/titanium'
	}).id('gtceu:shaped/titanium_whisk')

	event.recipes.gtceu.extruder('gtceu:titanium_whisk')
		.itemInputs('4x #forge:ingots/titanium')
		.notConsumable('tfg:whisk_extruder_mold')
		.itemOutputs('gtceu:titanium_whisk')
		.duration(GTMaterials.Titanium.getMass() * 4)
		.EUt(GTValues.VA[GTValues.MV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:extractor/extract_titanium_whisk' })
		
	event.shaped('gtceu:tungsten_steel_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/tungsten_steel',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/tungsten_steel'
	}).id('gtceu:shaped/tungsten_steel_whisk')

	event.recipes.gtceu.extruder('gtceu:tungsten_steel_whisk')
		.itemInputs('4x #forge:ingots/tungsten_steel')
		.notConsumable('tfg:whisk_extruder_mold')
		.itemOutputs('gtceu:tungsten_steel_whisk')
		.duration(GTMaterials.TungstenSteel.getMass() * 4)
		.EUt(GTValues.VA[GTValues.MV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:extractor/extract_tungsten_steel_whisk' })
		
	event.shaped('gtceu:palladium_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/palladium',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/palladium'
	}).id('gtceu:shaped/palladium_whisk')

	event.recipes.gtceu.extruder('gtceu:palladium_whisk')
		.itemInputs('4x #forge:ingots/palladium')
		.notConsumable('tfg:whisk_extruder_mold')
		.itemOutputs('gtceu:palladium_whisk')
		.duration(GTMaterials.Palladium.getMass() * 4)
		.EUt(GTValues.VA[GTValues.MV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:extractor/extract_palladium_whisk' })
		
	event.shaped('gtceu:naquadah_alloy_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/naquadah_alloy',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/naquadah_alloy'
	}).id('gtceu:shaped/naquadah_alloy_whisk')

	event.recipes.gtceu.extruder('gtceu:naquadah_alloy_whisk')
		.itemInputs('4x #forge:ingots/naquadah_alloy')
		.notConsumable('tfg:whisk_extruder_mold')
		.itemOutputs('gtceu:naquadah_alloy_whisk')
		.duration(GTMaterials.NaquadahAlloy.getMass() * 4)
		.EUt(GTValues.VA[GTValues.MV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:extractor/extract_naquadah_alloy_whisk' })
		
	event.shaped('gtceu:darmstadtium_whisk', [
		'ABC',
		'D D',
		'D D'
	], {
		A: '#forge:tools/hammers',
		B: '#forge:rings/darmstadtium',
		C: '#forge:tools/wrenches',
		D: '#forge:rods/long/darmstadtium'
	}).id('gtceu:shaped/darmstadtium_whisk')

	event.recipes.gtceu.extruder('gtceu:darmstadtium_whisk')
		.itemInputs('4x #forge:ingots/darmstadtium')
		.notConsumable('tfg:whisk_extruder_mold')
		.itemOutputs('gtceu:darmstadtium_whisk')
		.duration(GTMaterials.Darmstadtium.getMass() * 4)
		.EUt(GTValues.VA[GTValues.MV])
		.removePreviousMaterialInfo()
		.addMaterialInfo(true)

	event.remove({ id: 'gtceu:extractor/extract_darmstadtium_whisk' })

	// #endregion

	// #region Presses

	event.shaped('greate:andesite_alloy_mechanical_press', [
		'AEB',
		'DF ',
		' C '
	], {
		A: '#tfg:any_bronze_frame',
		B: 'greate:andesite_alloy_cogwheel',
		C: '#tfg:any_iron_double_ingot',
		D: '#forge:tools/hammers',
		E: '#minecraft:planks',
		F: 'greate:andesite_alloy_shaft'
	}).id('greate:shaped/andesite_alloy_mechanical_press')
	
	TFGHelpers.registerMaterialInfo('greate:andesite_alloy_mechanical_press', { 'iron': 2 });

	event.shaped('greate:steel_mechanical_press', [
		' AD',
		'EBF',
		' C '
	], {
		A: 'create:andesite_casing',
		B: 'greate:steel_shaft',
		C: '#forge:double_plates/steel',
		D: 'greate:steel_cogwheel',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches'
	}).id('greate:shaped/steel_mechanical_press')

	event.recipes.gtceu.assembler('greate:steel_mechanical_press')
		.itemInputs('create:andesite_casing', 'greate:steel_shaft', '#forge:double_plates/steel', 'greate:steel_cogwheel')
		.itemOutputs('greate:steel_mechanical_press')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.shaped('greate:aluminium_mechanical_press', [
		'GAD',
		'EBF',
		' C '
	], {
		A: 'gtceu:mv_machine_hull',
		B: 'greate:aluminium_shaft',
		C: '#forge:double_plates/vanadium_steel',
		D: 'greate:aluminium_cogwheel',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches',
		G: '#gtceu:circuits/mv'
	}).id('greate:shaped/aluminium_mechanical_press')

	event.recipes.gtceu.assembler('greate:aluminium_mechanical_press')
		.itemInputs('gtceu:mv_machine_hull', 'greate:aluminium_shaft', '#forge:double_plates/vanadium_steel', 'greate:aluminium_cogwheel', '#gtceu:circuits/mv')
		.itemOutputs('greate:aluminium_mechanical_press')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.shaped('greate:stainless_steel_mechanical_press', [
		'GAD',
		'EBF',
		' C '
	], {
		A: 'gtceu:hv_machine_hull',
		B: 'greate:stainless_steel_shaft',
		C: '#forge:double_plates/blue_alloy',
		D: 'greate:stainless_steel_cogwheel',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches',
		G: '#gtceu:circuits/hv'
	}).id('greate:shaped/stainless_steel_mechanical_press')

	event.recipes.gtceu.assembler('greate:stainless_steel_mechanical_press')
		.itemInputs('gtceu:hv_machine_hull', 'greate:stainless_steel_shaft', '#forge:double_plates/blue_alloy', 'greate:stainless_steel_cogwheel', '#gtceu:circuits/hv')
		.itemOutputs('greate:stainless_steel_mechanical_press')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	event.shaped('greate:titanium_mechanical_press', [
		'GAD',
		'EBF',
		' C '
	], {
		A: 'gtceu:ev_machine_hull',
		B: 'greate:titanium_shaft',
		C: '#forge:double_plates/ultimet',
		D: 'greate:titanium_cogwheel',
		E: '#forge:tools/hammers',
		F: '#forge:tools/wrenches',
		G: '#gtceu:circuits/ev'
	}).id('greate:shaped/titanium_mechanical_press')

	event.recipes.gtceu.assembler('greate:titanium_mechanical_press')
		.itemInputs('gtceu:ev_machine_hull', 'greate:titanium_shaft', '#forge:double_plates/ultimet', 'greate:titanium_cogwheel', '#gtceu:circuits/ev')
		.itemOutputs('greate:titanium_mechanical_press')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.removePreviousMaterialInfo().addMaterialInfo(true)

	// #endregion

	event.recipes.gtceu.shaped('greate:wire_coating_factory', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: 'gtceu:watertight_casing',
		B: '#gtceu:circuits/iv',
		C: 'gtceu:iv_electric_pump',
		D: 'create:spout'
	}).addMaterialInfo().id('tfg:shaped/toms_favourite_block')
}
