"use strict";

function registerTFGKineticRecipes(event) {

	event.shaped('tfg:generators/steel_combustion_engine', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:lv_machine_casing',
		B: '#forge:bolts/black_steel',
		C: '#forge:small_fluid_pipes/tin_alloy',
		D: '#forge:small_gears/brass',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/steel_combustion_engine');

	event.recipes.gtceu.assembler('tfg:steel_combustion_engine')
		.itemInputs('gtceu:lv_machine_casing', '#forge:small_gears/brass', '4x #forge:bolts/black_steel', '2x #forge:small_fluid_pipes/tin_alloy')
		.itemOutputs('tfg:generators/steel_combustion_engine')
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('tfg:generators/steel_combustion_engine', [GTMaterials.Steel, 8, GTMaterials.TinAlloy, 2, GTMaterials.Brass, 1, GTMaterials.BlackSteel, 0.5]);


	event.shaped('tfg:generators/aluminium_combustion_engine', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:mv_machine_casing',
		B: '#forge:bolts/aluminium',
		C: '#forge:small_fluid_pipes/steel',
		D: '#forge:small_gears/steel',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/aluminium_combustion_engine');

	event.recipes.gtceu.assembler('tfg:aluminium_combustion_engine')
		.itemInputs('gtceu:mv_machine_casing', '#forge:small_gears/steel', '4x #forge:bolts/aluminium', '2x #forge:small_fluid_pipes/steel')
		.itemOutputs('tfg:generators/aluminium_combustion_engine')
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('tfg:generators/aluminium_combustion_engine', [GTMaterials.Aluminium, 8.5, GTMaterials.Steel, 3]);


	event.shaped('tfg:generators/stainless_steel_combustion_engine', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:hv_machine_casing',
		B: '#forge:bolts/stainless_steel',
		C: '#forge:small_fluid_pipes/aluminium',
		D: '#forge:small_gears/aluminium',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/stainless_steel_combustion_engine');

	event.recipes.gtceu.assembler('tfg:stainless_steel_combustion_engine')
		.itemInputs('gtceu:hv_machine_casing', '#forge:small_gears/aluminium', '4x #forge:bolts/stainless_steel', '2x #forge:small_fluid_pipes/aluminium')
		.itemOutputs('tfg:generators/stainless_steel_combustion_engine')
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('tfg:generators/stainless_steel_combustion_engine', [GTMaterials.StainlessSteel, 8.5, GTMaterials.Aluminium, 3]);


	event.shaped('tfg:generators/titanium_combustion_engine', [
		'BDB',
		'BAB',
		'CEC'
	], {
		A: 'gtceu:ev_machine_casing',
		B: '#forge:bolts/titanium',
		C: '#forge:small_fluid_pipes/stainless_steel',
		D: '#forge:small_gears/stainless_steel',
		E: '#forge:tools/wrenches'
	}).id('tfg:shaped/titanium_combustion_engine');

	event.recipes.gtceu.assembler('tfg:titanium_combustion_engine')
		.itemInputs('gtceu:hv_machine_casing', '#forge:small_gears/stainless_steel', '4x #forge:bolts/titanium', '2x #forge:small_fluid_pipes/stainless_steel')
		.itemOutputs('tfg:generators/titanium_combustion_engine')
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('tfg:generators/titanium_combustion_engine', [GTMaterials.Titanium, 8.5, GTMaterials.StainlessSteel, 3]);

}