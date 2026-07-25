// priority: 0
"use strict";

function registerCreateSteamPoweredRecipes(event) {

	event.remove({ mod: 'steampowered' });

	// LS

	event.shaped('steampowered:bronze_steam_engine', [
		' CB',
		'DCD',
		'GAF'
	], {
		A: 'gtceu:steel_brick_casing',
		B: '#forge:small_gears/brass',
		C: '#forge:rods/steel',
		D: '#forge:small_fluid_pipes/tin_alloy',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('tfg:shaped/bronze_steam_engine')

	event.recipes.gtceu.assembler('tfg:bronze_steam_engine')
		.itemInputs('gtceu:steel_brick_casing', '#forge:small_gears/brass', '2x #forge:rods/steel', '2x #forge:small_fluid_pipes/tin_alloy')
		.itemOutputs('steampowered:bronze_steam_engine')
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('steampowered:bronze_steam_engine', [GTMaterials.WroughtIron, 5, GTMaterials.Brick, 15/9, GTMaterials.TinAlloy, 2, GTMaterials.Steel, 1, GTMaterials.Brass, 1]);

	event.shaped('steampowered:bronze_flywheel', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:rods/steel',
		B: '#forge:rods/wrought_iron',
		C: 'greate:steel_shaft'
	}).id('tfg:shaped/bronze_flywheel')

	event.recipes.gtceu.assembler('tfg:bronze_flywheel')
		.itemInputs('greate:steel_shaft', '4x #forge:rods/steel', '4x #forge:rods/wrought_iron')
		.itemOutputs('steampowered:bronze_flywheel')
		.circuit(3)
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('steampowered:bronze_flywheel', [GTMaterials.Steel, 2 + 1/9, GTMaterials.WroughtIron, 2]);

	// MS

	event.shaped('steampowered:cast_iron_steam_engine', [
		' CB',
		'DCD',
		'GAF'
	], {
		A: 'gtceu:mv_machine_casing',
		B: '#forge:small_gears/steel',
		C: '#forge:rods/aluminium',
		D: '#forge:small_fluid_pipes/steel',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('tfg:shaped/cast_iron_steam_engine')
	
	event.recipes.gtceu.assembler('tfg:cast_iron_steam_engine')
		.itemInputs('gtceu:mv_machine_casing', '#forge:small_gears/steel', '2x #forge:rods/aluminium', '2x #forge:small_fluid_pipes/steel')
		.itemOutputs('steampowered:cast_iron_steam_engine')
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('steampowered:cast_iron_steam_engine', [GTMaterials.Aluminium, 9, GTMaterials.Steel, 3]);

	event.shaped('steampowered:cast_iron_flywheel', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:rods/aluminium',
		B: '#forge:rods/steel',
		C: 'greate:aluminium_shaft'
	}).id('tfg:shaped/cast_iron_flywheel')

	event.recipes.gtceu.assembler('tfg:cast_iron_flywheel')
		.itemInputs('greate:aluminium_shaft', '4x #forge:rods/aluminium', '4x #forge:rods/steel')
		.itemOutputs('steampowered:cast_iron_flywheel')
		.circuit(3)
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('steampowered:cast_iron_flywheel', [GTMaterials.Aluminium, 2 + 1/9, GTMaterials.Steel, 2]);

	// HS
	
	event.shaped('steampowered:steel_steam_engine', [
		' CB',
		'DCD',
		'GAF'
	], {
		A: 'gtceu:hv_machine_casing',
		B: '#forge:small_gears/aluminium',
		C: '#forge:rods/stainless_steel',
		D: '#forge:small_fluid_pipes/aluminium',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('tfg:shaped/steel_steam_engine')
	
	event.recipes.gtceu.assembler('tfg:steel_steam_engine')
		.itemInputs('gtceu:hv_machine_casing', '#forge:small_gears/aluminium', '2x #forge:rods/stainless_steel', '2x #forge:small_fluid_pipes/aluminium')
		.itemOutputs('steampowered:steel_steam_engine')
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('steampowered:steel_steam_engine', [GTMaterials.StainlessSteel, 9, GTMaterials.Aluminium, 3]);

	event.shaped('steampowered:steel_flywheel', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:rods/stainless_steel',
		B: '#forge:rods/aluminium',
		C: 'greate:stainless_steel_shaft'
	}).id('tfg:shaped/steel_flywheel')

	event.recipes.gtceu.assembler('tfg:steel_flywheel')
		.itemInputs('greate:stainless_steel_shaft', '4x #forge:rods/stainless_steel', '4x #forge:rods/aluminium')
		.itemOutputs('steampowered:steel_flywheel')
		.circuit(3)
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('steampowered:steel_flywheel', [GTMaterials.StainlessSteel, 2 + 1/9, GTMaterials.Aluminium, 2]);

	// ES

	event.shaped('tfg:titanium_steam_engine', [
		' CB',
		'DCD',
		'GAF'
	], {
		A: 'gtceu:ev_machine_casing',
		B: '#forge:small_gears/stainless_steel',
		C: '#forge:rods/titanium',
		D: '#forge:small_fluid_pipes/stainless_steel',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('tfg:shaped/titanium_steam_engine')

	event.recipes.gtceu.assembler('tfg:titanium_steam_engine')
		.itemInputs('gtceu:ev_machine_casing', '#forge:small_gears/stainless_steel', '2x #forge:rods/titanium', '2x #forge:small_fluid_pipes/stainless_steel')
		.itemOutputs('tfg:titanium_steam_engine')
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('tfg:titanium_steam_engine', [GTMaterials.Titanium, 9, GTMaterials.StainlessSteel, 3]);

	event.shaped('tfg:titanium_flywheel', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:rods/titanium',
		B: '#forge:rods/stainless_steel',
		C: 'greate:titanium_shaft'
	}).id('tfg:shaped/titanium_flywheel')

	event.recipes.gtceu.assembler('tfg:titanium_flywheel')
		.itemInputs('greate:titanium_shaft', '4x #forge:rods/titanium', '4x #forge:rods/stainless_steel')
		.itemOutputs('tfg:titanium_flywheel')
		.circuit(3)
		.duration(100)
		.EUt(7)

	TFGHelpers.registerMaterialInfo('tfg:titanium_flywheel', [GTMaterials.Titanium, 2 + 1/9, GTMaterials.StainlessSteel, 2]);
}