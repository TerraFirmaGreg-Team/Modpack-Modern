// priority: 0
"use strict";

const registerCreateAdditionsRecipes = (event) => {

	// Удаление рецептов 
	event.remove({ mod: 'createaddition' });

	// Прокатный стан
	event.recipes.gtceu.shaped('createaddition:rolling_mill', [
		'ABA',
		'CBC',
		'DED'
	], {
		A: 'create:precision_mechanism',
		B: 'greate:steel_shaft',
		C: '#forge:double_plates/black_steel',
		D: '#gtceu:circuits/ulv',
		E: 'gtceu:ulv_machine_hull'
	}).addMaterialInfo().id('tfg:create_additions/shaped/rolling_mill')

	// Цифровой адаптер
	event.recipes.gtceu.shaped('createaddition:digital_adapter', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:plates/brass',
		B: 'gtceu:red_alloy_single_wire',
		C: 'computercraft:wired_modem',
	}).addMaterialInfo().id('tfg:create_additions/shaped/digital_adapter')

	// Портативный энергетический интерфейс
	event.recipes.gtceu.shaped('createaddition:portable_energy_interface', [
		'ABC',
		'DEC',
		'ADC'
	], {
		A: '#forge:plates/brass',
		B: 'create:chute',
		C: 'gtceu:copper_octal_wire',
		D: 'gtceu:copper_single_cable',
		E: 'create:brass_casing'
	}).addMaterialInfo().id('tfg:create_additions/shaped/portable_energy_interface')

	// Батарейный блок
	event.recipes.gtceu.assembler('create_additions/battery')
		.itemInputs('gtceu:bronze_frame', '4x #forge:plates/brass', '8x #forge:screws/bronze', '#gtceu:batteries/hv')
		.itemOutputs('createaddition:modular_accumulator')
		.duration(400)
		.EUt(30)
		.addMaterialInfo(true)

	// Колючая проволка
	event.shapeless('4x createaddition:barbed_wire', [
		'#forge:rods/wrought_iron',
		'#forge:rods/long/wrought_iron',
		'#forge:rods/wrought_iron',
		'#forge:rods/long/wrought_iron',
		'#forge:rods/wrought_iron',
		'#forge:rods/long/wrought_iron',
		'#forge:rods/wrought_iron',
		'#forge:rods/long/wrought_iron',
		'#forge:tools/hammers'
	]).id('tfg:create_additions/shapeless/barbed_wire')

	event.recipes.gtceu.assembler('tfg:createaddition/barbed_wire')
		.itemInputs('4x #forge:rods/wrought_iron', '4x #forge:rods/long/wrought_iron')
		.circuit(3)
		.itemOutputs('4x createaddition:barbed_wire')
		.duration(200)
		.EUt(20)
		.addMaterialInfo(true)

	event.recipes.gtceu.shaped('createaddition:electric_motor', [
		'CCC',
		'BDA',
		'CCC'
	], {
		A: 'gtceu:ulv_voltage_coil',
		B: 'create:rotation_speed_controller',
		C: 'gtceu:tin_single_cable',
		D: 'gtceu:lv_electric_motor',
	}).addMaterialInfo().id('tfg:createadditions/shaped/electric_motor')

	event.recipes.gtceu.shaped('createaddition:alternator', [
		'ABA',
		'CDC',
		'EFE'
	], {
		A: '#gtceu:resistors',
		B: '#gtceu:circuits/lv',
		C: 'gtceu:ulv_voltage_coil',
		D: 'gtceu:ulv_machine_hull',
		E: 'gtceu:tin_single_cable',
		F: '#forge:shafts'
	}).addMaterialInfo().id('tfg:createadditions/shaped/alternator')

	
	event.shapeless('createaddition:diamond_grit_sandpaper', ['minecraft:paper', 'tfc:glue', '#forge:dusts/diamond'])
		.id('tfg:shapeless/diamond_grit_sand_paper')
}
