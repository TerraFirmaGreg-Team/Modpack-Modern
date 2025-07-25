// priority: 0
"use strict";

const registerCreateAdditionsRecipes = (event) => {

	// Удаление рецептов 
	event.remove({ mod: 'createaddition' });

	// Прокатный стан
	event.shaped('createaddition:rolling_mill', [
		'ABA',
		'CBC',
		'DED'
	], {
		A: 'create:precision_mechanism',
		B: 'greate:steel_shaft',
		C: '#forge:double_plates/black_steel',
		D: '#gtceu:circuits/ulv',
		E: 'gtceu:ulv_machine_hull'
	}).id('tfg:create_additions/shaped/rolling_mill')

	// Цифровой адаптер
	event.shaped('createaddition:digital_adapter', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:plates/brass',
		B: 'gtceu:red_alloy_single_wire',
		C: 'computercraft:wired_modem',
	}).id('tfg:create_additions/shaped/digital_adapter')

	// Портативный энергетический интерфейс
	event.shaped('createaddition:portable_energy_interface', [
		'ABC',
		'DEC',
		'ADC'
	], {
		A: '#forge:plates/brass',
		B: 'create:chute',
		C: 'gtceu:copper_octal_wire',
		D: 'gtceu:copper_single_cable',
		E: 'create:brass_casing'
	}).id('tfg:create_additions/shaped/portable_energy_interface')

	// Батарейный блок
	event.recipes.gtceu.assembler('create_additions/battery')
		.itemInputs('gtceu:bronze_frame', '4x #forge:plates/brass', '8x #forge:screws/bronze', '#gtceu:batteries/hv')
		.itemOutputs('createaddition:modular_accumulator')
		.duration(400)
		.EUt(30)

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

	event.shaped('createaddition:electric_motor', [
		'CCC',
		'BDA',
		'CCC'
	], {
		A: 'gtceu:ulv_voltage_coil',
		B: 'create:rotation_speed_controller',
		C: 'gtceu:tin_single_cable',
		D: 'gtceu:lv_electric_motor',
	}).id('tfg:createadditions/shaped/electric_motor')

	event.shaped('createaddition:alternator', [
		'ABA',
		'CDC',
		'EFE'
	], {
		A: '#gtceu:resistors',
		B: '#gtceu:circuits/lv',
		C: 'gtceu:ulv_voltage_coil',
		D: 'gtceu:ulv_machine_hull',
		E: 'gtceu:tin_single_cable',
		F: '#tfg:shafts'
	}).id('tfg:createadditions/shaped/alternator')

	//#region Liquid blaze burners

	event.recipes.tfc.anvil('createaddition:straw', '#forge:plates/tin_alloy', ['shrink_second_last', 'upset_not_last', 'punch_last'])
		.tier(3)
		.id(`tfc:anvil/straw`)

	event.recipes.gtceu.lathe('assembler:createaddition_straw')
		.itemInputs('#forge:plates/tin_alloy')
		.itemOutputs('createaddition:straw')
		.duration(20 * 6)
		.EUt(16)

	event.custom({
		type: 'vintageimprovements:turning',
		ingredients: [{ tag: 'forge:plates/tin_alloy' }],
		results: [{ item: 'createaddition:straw' }],
		processingTime: 20 * 6
	}).id(`tfg:vi/lathe/straw`)

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluidTag: 'minecraft:lava',
			amount: 100
		},
		burnTime: 7 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/lava')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluidTag: 'forge:creosote',
			amount: 160
		},
		burnTime: 10 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/creosote')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluidTag: 'forge:biomass',
			amount: 40
		},
		burnTime: 10 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/biomass')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluidTag: 'forge:oil',
			amount: 200
		},
		burnTime: 10 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/oil')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluidTag: 'forge:oil_heavy',
			amount: 32
		},
		burnTime: 10 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/oil_heavy')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluidTag: 'forge:sulfuric_heavy_fuel',
			amount: 32
		},
		burnTime: 10 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/sulfuric_heavy_fuel')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluidTag: 'forge:heavy_fuel',
			amount: 16
		},
		burnTime: 30 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/heavy_fuel')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluidTag: 'forge:fish_oil',
			amount: 50
		},
		burnTime: 100 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/fish_oil')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluid: 'tfc:olive_oil',
			amount: 50
		},
		burnTime: 150 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/olive_oil')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluid: 'firmalife:soybean_oil',
			amount: 50
		},
		burnTime: 150 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/soybean_oil')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluidTag: 'forge:seed_oil',
			amount: 50
		},
		burnTime: 150 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/seed_oil')

	event.custom({
		type: 'createaddition:liquid_burning',
		input: {
			fluid: 'gtceu:steam',
			amount: 256
		},
		burnTime: 4 * 9 * 9
	}).id('tfg:createadditions/liquid_burning/steam')
	//#endregion
	
	event.shapeless('createaddition:diamond_grit_sandpaper', ['minecraft:paper', 'tfc:glue', '#forge:dusts/diamond'])
		.id('tfg:shapeless/diamond_grit_sand_paper')
}
