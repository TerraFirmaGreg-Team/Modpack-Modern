// priority: 0
"use strict";

function registerCreateSteamPoweredRecipes(event) {

	event.remove({ mod: 'steampowered' });

	// LS

	event.shaped('steampowered:bronze_steam_engine', [
		'CBC',
		'DED',
		'GAF'
	], {
		A: 'gtceu:steel_brick_casing',
		B: '#forge:small_gears/brass',
		C: '#forge:rods/steel',
		D: '#forge:small_fluid_pipes/tin_alloy',
		E: '#forge:rods/black_steel',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('tfg:shaped/bronze_steam_engine')

	event.shaped('steampowered:bronze_flywheel', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:rods/steel',
		B: '#forge:rods/wrought_iron',
		C: 'greate:steel_shaft'
	}).id('tfg:shaped/bronze_flywheel')

	// MS

	event.shaped('steampowered:cast_iron_steam_engine', [
		'CBC',
		'DED',
		'GAF'
	], {
		A: 'gtceu:mv_machine_casing',
		B: '#forge:small_gears/steel',
		C: '#forge:rods/aluminium',
		D: '#forge:small_fluid_pipes/steel',
		E: '#forge:rods/cobalt_brass',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('tfg:shaped/cast_iron_steam_engine')

	event.shaped('steampowered:cast_iron_flywheel', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:rods/aluminium',
		B: '#forge:rods/steel',
		C: 'greate:aluminium_shaft'
	}).id('tfg:shaped/cast_iron_flywheel')

	// HS
	
	event.shaped('steampowered:steel_steam_engine', [
		'CBC',
		'DED',
		'GAF'
	], {
		A: 'gtceu:hv_machine_casing',
		B: '#forge:small_gears/aluminium',
		C: '#forge:rods/stainless_steel',
		D: '#forge:small_fluid_pipes/aluminium',
		E: '#forge:rods/blue_alloy',
		F: '#forge:tools/wrenches',
		G: '#forge:tools/hammers'
	}).id('tfg:shaped/steel_steam_engine')

	event.shaped('steampowered:steel_flywheel', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: '#forge:rods/stainless_steel',
		B: '#forge:rods/aluminium',
		C: 'greate:stainless_steel_shaft'
	}).id('tfg:shaped/steel_flywheel')
}