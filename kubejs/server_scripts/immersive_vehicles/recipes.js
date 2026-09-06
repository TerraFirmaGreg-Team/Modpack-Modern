// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerImmersiveVehiclesRecipes(event) {

	event.remove({ mod: 'mts' });
	event.remove({ mod: 'mtsofficialpack' });
	event.remove({ mod: 'automotives' });
	event.remove({ mod: 'belroftmotors' });
	// TODO: remove
	event.remove({ mod: 'man_of_many_planes' });
	event.remove({ mod: 'immersive_aircraft' });


	// TODO: airship
	event.shapeless('mts:mtsofficialpack.bell47g', 'immersive_aircraft:quadrocopter')
	event.shapeless('mts:mtsofficialpack.bell206_red', 'immersive_aircraft:cargo_airship')
	event.shapeless('mts:mtsofficialpack.trimotor_white', 'immersive_aircraft:warship')
	event.shapeless('mts:mtsofficialpack.pzl37los', 'immersive_aircraft:gyrodyne')
	event.shapeless('mts:automotives.biplane', 'man_of_many_planes:economy_plane')
	event.shapeless('mts:mtsofficialpack.pzlp11', 'immersive_aircraft:biplane')
	event.shapeless('mts:mtsofficialpack.e500_blackred', 'man_of_many_planes:scarlet_biplane')
	event.shapeless('mts:mtsofficialpack.comanche_red', 'immersive_aircraft:bamboo_hopper')

	registerImmersiveVehiclesToolsRecipes(event);
	registerImmersiveVehiclesVehicleRecipes(event);
	registerImmersiveVehiclesUpgradeRecipes(event);
	registerImmersiveVehiclesEnginesRecipes(event);
	registerImmersiveVehiclesPartsRecipes(event);
	registerImmersiveVehiclesGunsRecipes(event);


	// #region Refuellers/automation
	event.shaped('mts:mts.fuelpump', [
		' EB',
		'ADA',
		'ACA'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:dyes/red',
		C: '#gtceu:drums',
		D: 'mts:mts.fuelhose',
		E: '#forge:glass_panes'
	}).id('mts:mts.fuelpump')

	event.shaped('mts:mts.charger', [
		' EB',
		'ADA',
		'ACA'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:dyes/lime',
		C: 'createaddition:modular_accumulator',
		D: 'mts:mts.fuelhose',
		E: '#forge:glass_panes'
	}).id('mts:mts.charger')

	event.shaped('mts:mtsofficialpack.fuelpump', [
		' EB',
		'ADA',
		'ACA'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:dyes/yellow',
		C: '#gtceu:drums',
		D: 'mts:mts.fuelhose',
		E: '#forge:glass_panes'
	}).id('mts:mtsofficialpack.fuelpump')

	event.shaped('mts:mtsofficialpack.itemloader', [
		'A',
		'B'
	], {
		A: 'create:andesite_funnel',
		B: 'create:chute'
	}).id('mts:mtsofficialpack.itemloader')

	event.shaped('mts:mtsofficialpack.itemunloader', [
		'B',
		'A'
	], {
		A: 'create:andesite_funnel',
		B: 'create:chute'
	}).id('mts:mtsofficialpack.itemunloader')

	event.shaped('mts:mtsofficialpack.fluidloader', [
		'A',
		'B'
	], {
		A: '#gtceu:electric_pumps',
		B: 'create:spout'
	}).id('mts:mtsofficialpack.fluidloader')

	event.shaped('mts:mtsofficialpack.fluidunloader', [
		'A',
		'B'
	], {
		A: '#gtceu:electric_pumps',
		B: 'create:item_drain'
	}).id('mts:mtsofficialpack.fluidunloader')
	// #endregion

	// #region Blocks and props

	event.shaped('mts:mtsofficialpack.beacon_top', [
		' B ',
		'BAB',
		' B '
	], {
		A: 'gtceu:lv_emitter',
		B: '#forge:plates/invar'
	}).id('mts:mtsofficialpack.beacon_top')

	event.recipes.create.mechanical_crafting('mts:mtsofficialpack.beacon_tower_standard', [
		' A ',
		' B ',
		' B ',
		' B ',
		' B ',
		' B ',
		' B ',
		' B ',
		'CBD'
	], {
		A: 'mts:mtsofficialpack.beacon_top',
		B: 'gtceu:invar_frame',
		C: '#forge:dyes/red',
		D: '#forge:dyes/white'
	}).id('mts:mtsofficialpack.beacon_tower_standard')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.beacon_tower_standard')
		.itemInputs('mts:mtsofficialpack.beacon_top', '8x gtceu:invar_frame', '#forge:dyes/red', '#forge:dyes/white')
		.itemOutputs('mts:mtsofficialpack.beacon_tower_standard')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)
		.circuit(1)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.beacon_tower_inverted')
		.itemInputs('mts:mtsofficialpack.beacon_top', '8x gtceu:invar_frame', '#forge:dyes/red', '#forge:dyes/white')
		.itemOutputs('mts:mtsofficialpack.beacon_tower_inverted')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)
		.circuit(2)

	event.shapeless('mts:mtsofficialpack.beacon_tower_standard', ['mts:mtsofficialpack.beacon_tower_inverted'])
		.id('mts:shapeless/beacon_standard')

	event.shapeless('mts:mtsofficialpack.beacon_tower_inverted', ['mts:mtsofficialpack.beacon_tower_standard'])
		.id('mts:shapeless/beacon_inverted')

	event.shaped('mts:mtsofficialpack.signalcontroller', [
		'AB',
		'D '
	], {
		A: 'gtceu:ulv_machine_hull',
		B: 'gtceu:lv_emitter',
		D: '#gtceu:circuits/ulv'
	}).id('mts:mtsofficialpack.signalcontroller')

	event.shaped('mts:mtsofficialpack.telephonebooth', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#tfg:metal_bars',
		B: '#forge:glass_panes'
	}).id('mts:mtsofficialpack.telephonebooth')

	event.shaped('mts:mtsofficialpack.trafficcone', [
		' A ',
		'ABA'
	], {
		A: '#forge:plates/bakelite',
		B: '#forge:dyes/orange'
	}).id('mts:mtsofficialpack.trafficcone_bakelite')

	event.shaped('mts:mtsofficialpack.trafficcone', [
		' A ',
		'ABA'
	], {
		A: '#forge:plates/polyethylene',
		B: '#forge:dyes/orange'
	}).id('mts:mtsofficialpack.trafficcone_pe')

	event.shaped('8x mts:mtsofficialpack.pole_core', [
		'AB',
		'A '
	], {
		A: '#forge:rods/wrought_iron',
		B: '#forge:tools/wrenches'
	}).id('mts:mtsofficialpack.pole_core')

	event.shaped('4x mts:mtsofficialpack.pole_crossingsignal', [
		' D ',
		'AB ',
		'AC '
	], {
		A: '#forge:foils/wrought_iron',
		B: 'minecraft:red_stained_glass_pane',
		C: 'minecraft:green_stained_glass_pane',
		D: 'create:electron_tube'
	}).id('mts:mtsofficialpack.pole_crossingsignal')

	event.shaped('4x mts:mtsofficialpack.pole_flashingsignal_red', [
		' D',
		'AB'
	], {
		A: '#forge:foils/wrought_iron',
		B: 'minecraft:red_stained_glass_pane',
		D: 'create:electron_tube'
	}).id('mts:mtsofficialpack.pole_flashingsignal_red')

	event.shaped('4x mts:mtsofficialpack.pole_flashingsignal_yellow', [
		' D',
		'AB'
	], {
		A: '#forge:foils/wrought_iron',
		B: 'minecraft:yellow_stained_glass_pane',
		D: 'create:electron_tube'
	}).id('mts:mtsofficialpack.pole_flashingsignal_yellow')

	event.shaped('4x mts:mtsofficialpack.pole_trafficsignal', [
		'AB ',
		'ACE',
		'AD '
	], {
		A: '#forge:foils/wrought_iron',
		B: 'minecraft:red_stained_glass_pane',
		C: 'minecraft:yellow_stained_glass_pane',
		D: 'minecraft:green_stained_glass_pane',
		E: 'create:electron_tube'
	}).id('mts:mtsofficialpack.pole_trafficsignal')

	event.shaped('4x mts:mtsofficialpack.pole_streetlight', [
		' D ',
		'AB '
	], {
		A: '#forge:foils/wrought_iron',
		B: 'minecraft:glowstone',
		D: 'create:electron_tube'
	}).id('mts:mtsofficialpack.pole_streetlight')

	const road_signs = Ingredient.of('#mts:road_signs').itemIds.toArray().map(String);
	road_signs.forEach(sign => {
		event.stonecutting(Item.of(sign).withCount(8), '#forge:plates/invar')
			.id(global.linuxUnfucker(`mts:stonecutting/${sign}_invar`))
		event.stonecutting(sign, '#mts:road_signs')
			.id(global.linuxUnfucker(`mts:stonecutting/${sign}`))
	})
	// #endregion

	// #region Parts

	//Scaffolding Frame
	event.shaped('tfg:scaffolding_frame', [
		' A ',
		'ABA',
		' A '
	], {
		A: '#forge:rods/wooden',
		B: '#forge:cloth'
	}).id('tfg:shaped/scaffolding_frame');

	//Airship Hull
	event.shaped('tfg:airship_hull', [
		'A B',
		'CCC',
		'CCC'
	], {
		A: '#forge:tools/saws',
		B: '#forge:tools/hammers',
		C: 'gtceu:treated_wood_trapdoor'
	}).id('tfg:shaped/airship_hull');
	event.recipes.gtceu.assembler('tfg:assembler/airship_hull')
		.itemInputs('6x gtceu:treated_wood_trapdoor')
		.itemOutputs('tfg:airship_hull')
		.duration(40)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.ULV]);

	//Airship Balloon
	event.shaped('tfg:airship_balloon', [
		'ABA',
		'BAB',
		'ABA'
	], {
		A: '#forge:string',
		B: 'immersive_aircraft:sail'
	}).id('tfg:shaped/airship_balloon')

	event.recipes.gtceu.assembler('tfg:assembler/airship_balloon')
		.itemInputs('4x immersive_aircraft:sail', '4x #forge:string')
		.itemOutputs('tfg:airship_balloon')
		.duration(40)
		.circuit(1)
		.EUt(GTValues.VA[GTValues.ULV])

	// Aircraft Sail
	event.shaped('tfg:aircraft_sail', [
		'ABA',
		'BCB',
		'ABA'
	], {
		A: 'gtceu:wrought_iron_screw',
		B: '#forge:cloth',
		C: '#minecraft:trapdoors'
	}).id('tfg:shaped/sail');

	// Sparkplug

	event.shaped('mts:mtsofficialpack.sparkplug', [
		'BBG',
		'FCE',
		'DAD'
	], {
		A: 'tfg:spark_plug_casing',
		B: '#forge:bolts/copper',
		C: '#forge:rings/steel',
		D: '#forge:foils/steel',
		E: '#forge:single_cables/tin',
		F: '#forge:rods/invar',
		G: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.sparkplug')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.sparkplug_lv')
		.itemInputs('tfg:spark_plug_casing', '2x #forge:bolts/copper', '2x #forge:foils/steel', '#forge:rings/steel', '#forge:single_cables/tin', '#forge:rods/invar')
		.itemOutputs('mts:mtsofficialpack.sparkplug')
		.duration(60)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.assembler('mts:mtsofficialpack.sparkplug_mv')
		.itemInputs('tfg:spark_plug_casing', '2x #forge:bolts/chromium', '2x #forge:foils/aluminium', '#forge:rings/aluminium', '#forge:single_cables/copper', '#forge:rods/cupronickel')
		.itemOutputs('2x mts:mtsofficialpack.sparkplug')
		.duration(60)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.assembler('mts:mtsofficialpack.sparkplug_hv')
		.itemInputs('tfg:spark_plug_casing', '2x #forge:bolts/platinum', '2x #forge:foils/stainless_steel', '#forge:rings/stainless_steel', '#forge:single_cables/gold', '#forge:rods/nichrome')
		.itemOutputs('4x mts:mtsofficialpack.sparkplug')
		.duration(60)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.alloy_smelter('tfg:spark_plug_casing_fireclay')
		.itemInputs('tfc:fire_clay')
		.notConsumable('gtceu:tiny_pipe_casting_mold')
		.itemOutputs('tfg:spark_plug_casing')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	event.recipes.gtceu.alloy_smelter('tfg:spark_plug_casing_alumina')
		.itemInputs('#tfg:aluminium_oxide')
		.notConsumable('gtceu:tiny_pipe_casting_mold')
		.itemOutputs('tfg:spark_plug_casing')
		.duration(100)
		.EUt(GTValues.VA[GTValues.LV])

	// #endregion
}