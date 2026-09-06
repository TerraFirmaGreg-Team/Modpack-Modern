"use strict";

function registerTFGKineticRecipes(event) {

	event.shaped('tfg:generators/steel_combustion_engine', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:lv_machine_casing',
		B: 'mts:mtsofficialpack.sparkplug',
		C: '#forge:small_fluid_pipes/tin_alloy',
		D: '#forge:small_gears/brass',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/steel_combustion_engine');

	event.recipes.gtceu.assembler('tfg:steel_combustion_engine')
		.itemInputs('gtceu:lv_machine_casing', '#forge:small_gears/brass', '4x mts:mtsofficialpack.sparkplug', '2x #forge:small_fluid_pipes/tin_alloy')
		.itemOutputs('tfg:generators/steel_combustion_engine')
		.duration(100)
		.EUt(7)
		.addMaterialInfo(true)

	event.shaped('tfg:generators/aluminium_combustion_engine', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:mv_machine_casing',
		B: 'mts:mtsofficialpack.sparkplug',
		C: '#forge:small_fluid_pipes/steel',
		D: '#forge:small_gears/steel',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/aluminium_combustion_engine');

	event.recipes.gtceu.assembler('tfg:aluminium_combustion_engine')
		.itemInputs('gtceu:mv_machine_casing', '#forge:small_gears/steel', '4x mts:mtsofficialpack.sparkplug', '2x #forge:small_fluid_pipes/steel')
		.itemOutputs('tfg:generators/aluminium_combustion_engine')
		.duration(100)
		.EUt(7)
		.addMaterialInfo(true)

	event.shaped('tfg:generators/stainless_steel_combustion_engine', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:hv_machine_casing',
		B: 'mts:mtsofficialpack.sparkplug',
		C: '#forge:small_fluid_pipes/aluminium',
		D: '#forge:small_gears/aluminium',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/stainless_steel_combustion_engine');

	event.recipes.gtceu.assembler('tfg:stainless_steel_combustion_engine')
		.itemInputs('gtceu:hv_machine_casing', '#forge:small_gears/aluminium', '4x mts:mtsofficialpack.sparkplug', '2x #forge:small_fluid_pipes/aluminium')
		.itemOutputs('tfg:generators/stainless_steel_combustion_engine')
		.duration(100)
		.EUt(7)
		.addMaterialInfo(true)

	event.shaped('tfg:generators/titanium_combustion_engine', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:ev_machine_casing',
		B: 'mts:mtsofficialpack.sparkplug',
		C: '#forge:small_fluid_pipes/stainless_steel',
		D: '#forge:small_gears/stainless_steel',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/titanium_combustion_engine');

	event.recipes.gtceu.assembler('tfg:titanium_combustion_engine')
		.itemInputs('gtceu:hv_machine_casing', '#forge:small_gears/stainless_steel', '4x mts:mtsofficialpack.sparkplug', '2x #forge:small_fluid_pipes/stainless_steel')
		.itemOutputs('tfg:generators/titanium_combustion_engine')
		.duration(100)
		.EUt(7)
		.addMaterialInfo(true)
}