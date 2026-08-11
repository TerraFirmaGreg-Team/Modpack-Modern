"use strict";

function registerTFGKineticRecipes(event) {

	event.shaped('tfg:generators/steel_combustion_generator', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:lv_machine_casing',
		B: '#forge:bolts/steel',
		C: '#forge:small_fluid_pipes/tin_alloy',
		D: '#forge:small_gears/brass',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/steel_combustion_generator');

	event.recipes.gtceu.assembler('tfg:steel_combustion_generator')
		.itemInputs('gtceu:lv_machine_casing', '#forge:small_gears/brass', '4x #forge:bolts/steel', '2x #forge:small_fluid_pipes/tin_alloy')
		.itemOutputs('tfg:generators/steel_combustion_generator')
		.duration(100)
		.EUt(7)

	event.shaped('tfg:generators/aluminium_combustion_generator', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:mv_machine_casing',
		B: '#forge:bolts/aluminium',
		C: '#forge:small_fluid_pipes/steel',
		D: '#forge:small_gears/steel',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/aluminium_combustion_generator');

	event.recipes.gtceu.assembler('tfg:aluminium_combustion_generator')
		.itemInputs('gtceu:mv_machine_casing', '#forge:small_gears/steel', '4x #forge:bolts/aluminium', '2x #forge:small_fluid_pipes/steel')
		.itemOutputs('tfg:generators/aluminium_combustion_generator')
		.duration(100)
		.EUt(7)

	event.shaped('tfg:generators/stainless_steel_combustion_generator', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:hv_machine_casing',
		B: '#forge:bolts/stainless_steel',
		C: '#forge:small_fluid_pipes/aluminium',
		D: '#forge:small_gears/aluminium',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/stainless_steel_combustion_generator');

	event.recipes.gtceu.assembler('tfg:stainless_steel_combustion_generator')
		.itemInputs('gtceu:hv_machine_casing', '#forge:small_gears/aluminium', '4x #forge:bolts/stainless_steel', '2x #forge:small_fluid_pipes/aluminium')
		.itemOutputs('tfg:generators/stainless_steel_combustion_generator')
		.duration(100)
		.EUt(7)

	event.shaped('tfg:generators/titanium_combustion_generator', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:ev_machine_casing',
		B: '#forge:bolts/titanium',
		C: '#forge:small_fluid_pipes/stainless_steel',
		D: '#forge:small_gears/stainless_steel',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/titanium_combustion_generator');

	event.recipes.gtceu.assembler('tfg:titanium_combustion_generator')
		.itemInputs('gtceu:hv_machine_casing', '#forge:small_gears/stainless_steel', '4x #forge:bolts/titanium', '2x #forge:small_fluid_pipes/stainless_steel')
		.itemOutputs('tfg:generators/titanium_combustion_generator')
		.duration(100)
		.EUt(7)
}