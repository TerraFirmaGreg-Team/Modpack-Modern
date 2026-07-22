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

	TFGHelpers.registerMaterialInfo('steampowered:steel_flywheel', [GTMaterials.StainlessSteel, 2 + 1/9, GTMaterials.Aluminium, 2]);

	// ES: TODO
}