// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerImmersiveVehiclesRecipes(event) {

	event.remove({ mod: 'mts' });
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
	event.shapeless('mts:mtsofficialpack.comanche_red', 'man_of_many_planes:bamboo_hopper')


	// #region Tools
	// TODO: remove ratchet
	event.shaped('mts:mts.partscanner', [
		' C ',
		'BAB',
		' D '
	], {
		A: 'create:clipboard',
		B: 'minecraft:redstone',
		C: 'tfc:lens',
		D: '#forge:tools/screwdrivers'
	}).id('mts:shaped/partscanner')
		
	event.shaped('mts:mts.ticket', [
		'ABC'
	], {
		A: '#forge:dyes/yellow',
		B: 'minecraft:paper',
		C: '#forge:dyes/black'
	}).id('mts:mts.ticket')
	
	event.shaped('mts:mts.paintgun', [
		' A',
		'BC'
	], {
		A: '#forge:tools/screwdrivers',
		B: '#forge:small_fluid_pipes/potin',
		C: 'gtceu:empty_spray_can'
	}).id('mts:mts.paintgun')
	
	event.shaped('mts:mts.key', [
		'A',
		'B'
	], {
		A: '#forge:bolts/wrought_iron',
		B: 'minecraft:name_tag'
	}).id('mts:mts.key')

	event.shaped('mts:mts.jumpercable', [
		'B B',
		'A A',
		'AAA'
	], {
		A: '#forge:single_cables/copper',
		B: 'tfchotornot:tongs/copper'
	}).id('mts:mts.jumpercable')

	event.shaped('mts:mts.fuelhose', [
		'  A',
		'B C',
		'BBB'
	], {
		A: '#forge:small_fluid_pipes/potin',
		B: '#tfg:rubber_foils',
		C: '#tfg:rubber_rings'
	}).id('mts:mts.fuelhose')
	
	event.shaped('mts:mts.jerrycan', [
		' AB',
		'B B',
		'BBB'
	], {
		A: '#tfg:rubber_rings',
		B: '#forge:foils/wrought_iron'
	}).id('mts:mts.jerrycan')
	
	event.recipes.gtceu.assembler('mts:mts.jumperpack')
		.itemInputs('2x #forge:plates/wrought_iron', '1x #gtceu:circuits/lv', '1x mts:mts.jumpercable', '1x gtceu:lv_lithium_battery', '4x #forge:plates/rubber')
		.itemOutputs('mts:mts.jumperpack')
		.duration(200)
		.EUt(16);

	event.shaped('mts:mtsofficialpack.repairkit', [
		'DED',
		'ABC',
		'DDD'
	], {
		A: '#forge:tools/wrenches',
		B: '#forge:tools/screwdrivers',
		C: '#forge:tools/crowbars',
		D: '#forge:plates/potin',
		E: '#forge:screws/wrought_iron'
	}).id('mts:mtsofficialpack.repairkit')

	event.shaped('mts:automotives.blowtorch', [
		' FE',
		'ACD',
		' BB'
	], {
		A: '#forge:small_fluid_pipes/potin',
		B: '#forge:plates/potin',
		C: 'minecraft:flint',
		D: '#forge:bolts/wrought_iron',
		E: '#forge:springs',
		F: '#forge:tools/screwdrivers'
	}).id('mts:automotives.blowtorch')
	// #endregion

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

	// #region Upgrades

	event.shaped('mts:mtsofficialpack.crate', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'gtceu:treated_wood_plate',
		B: '#forge:dyes/brown'
	}).id('mts:mtsofficialpack.crate')

	event.shaped('mts:mtsofficialpack.crate_blue', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'gtceu:treated_wood_plate',
		B: '#forge:dyes/blue'
	}).id('mts:mtsofficialpack.crate_blue')

	event.shaped('mts:mtsofficialpack.crate_green', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'gtceu:treated_wood_plate',
		B: '#forge:dyes/green'
	}).id('mts:mtsofficialpack.crate_green')

	event.shaped('mts:mtsofficialpack.crate_red', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'gtceu:treated_wood_plate',
		B: '#forge:dyes/red'
	}).id('mts:mtsofficialpack.crate_red')

	event.shaped('mts:mtsofficialpack.crate_white', [
		'AAA',
		'ABA',
		'AAA'
	], {
		A: 'gtceu:treated_wood_plate',
		B: '#forge:dyes/white'
	}).id('mts:mtsofficialpack.white')

	event.recipes.tfc.no_remainder_shaped_crafting(
	event.shaped('mts:mtsofficialpack.barrel', [
		' C ',
		'ABA'
	], {
		A: '#forge:plates/potin',
		B: '#tfc:barrels',
		C: '#forge:dyes/red'
	})).id('mts:mtsofficialpack.barrel')

	event.recipes.tfc.no_remainder_shaped_crafting(
	event.shaped('mts:mtsofficialpack.barrel_black', [
		' C ',
		'ABA'
	], {
		A: '#forge:plates/potin',
		B: '#tfc:barrels',
		C: '#forge:dyes/black'
	})).id('mts:mtsofficialpack.barrel_black')

	event.recipes.tfc.no_remainder_shaped_crafting(
	event.shaped('mts:mtsofficialpack.barrel_blank', [
		' C ',
		'ABA'
	], {
		A: '#forge:plates/potin',
		B: '#tfc:barrels',
		C: '#forge:dyes/white'
	})).id('mts:mtsofficialpack.barrel_blank')

	event.recipes.tfc.no_remainder_shaped_crafting(
	event.shaped('mts:mtsofficialpack.barrel_blue', [
		' C ',
		'ABA'
	], {
		A: '#forge:plates/potin',
		B: '#tfc:barrels',
		C: '#forge:dyes/blue'
	})).id('mts:mtsofficialpack.barrel_blue')

	event.recipes.tfc.no_remainder_shaped_crafting(
	event.shaped('mts:mtsofficialpack.barrel_yellow', [
		' C ',
		'ABA'
	], {
		A: '#forge:plates/potin',
		B: '#tfc:barrels',
		C: '#forge:dyes/yellow'
	})).id('mts:mtsofficialpack.barrel_yellow')

	event.shaped('mts:mtsofficialpack.auxiliary_tank', [
		' C ',
		'DBD'
	], {
		B: '#forge:small_fluid_pipes/potin',
		C: '#forge:tools/screwdrivers',
		D: '#forge:screws/steel'
	}).id('mts:mtsofficialpack.auxiliary_tank')

	event.shaped('mts:mtsofficialpack.barrelbell47g', [
		' D ',
		'ABA'
	], {
		A: '#forge:screws/steel',
		B: '#mts:barrels',
		D: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.barrelbell47g')

	event.shaped('mts:mtsofficialpack.cratebell47g', [
		'BBC',
		'AA '
	], {
		A: '#forge:chests',
		B: '#forge:screws/steel',
		C: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.cratebell47g')

	event.shaped('mts:mtsofficialpack.bumpersticker_roostair', [
		'ABC'
	], {
		A: '#forge:dyes/yellow',
		B: 'minecraft:paper',
		C: 'tfc:glue'
	}).id('mts:mtsofficialpack.bumpersticker_roostair')

	event.shaped('mts:mtsofficialpack.salesign', [
		'ABC'
	], {
		A: '#forge:dyes/red',
		B: '#minecraft:signs',
		C: '#forge:dyes/white'
	}).id('mts:mtsofficialpack.salesign')

	event.shaped('mts:mtsofficialpack.camera_vulcanair', [
		'CCD',
		'ABE'
	], {
		A: 'minecraft:spyglass',
		B: 'exposure:camera',
		C: '#forge:screws/steel',
		D: '#forge:tools/screwdrivers',
		E: 'gtceu:hv_electric_motor'
	}).id('mts:mtsofficialpack.camera_vulcanair')

	event.shaped('mts:mtsofficialpack.hoist_bell206', [
		'DCD',
		' BE',
		' A '
	], {
		A: 'gtceu:lv_item_magnet',
		B: 'firmaciv:rope_coil',
		C: 'create:elevator_pulley',
		D: 'gtceu:mv_electric_motor',
		E: '#forge:tools/wrenches'
	}).id('mts:mtsofficialpack.hoist_bell206')

	event.shaped('mts:mtsofficialpack.pontoon', [
		'BCB',
		'AAA',
		'AAA'
	], {
		A: '#forge:plates/bakelite',
		B: '#forge:screws/steel',
		C: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.pontoon_bakelite')

	event.shaped('mts:mtsofficialpack.pontoon', [
		'BCB',
		'AAA',
		'AAA'
	], {
		A: '#forge:plates/polyethylene',
		B: '#forge:screws/steel',
		C: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.pontoon_pe')

	event.shaped('mts:automotives.upgrade_pontoons', [
		'BCB',
		'AAA',
		'AAA'
	], {
		A: 'firmalife:treated_wood',
		B: '#forge:screws/steel',
		C: '#forge:tools/screwdrivers'
	}).id('mts:automotives.upgrade_pontoons')

	event.shaped('mts:mtsofficialpack.skidhelicopter', [
		'BCB',
		'AAA'
	], {
		A: '#forge:rods/long/steel',
		B: '#forge:screws/steel',
		C: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.skidhelicopter')

	event.shaped('mts:mtsofficialpack.spotlight_bell206', [
		' D ',
		'CAC',
		'CBC'
	], {
		A: '#gtceu:lamps',
		B: 'tfc:lens',
		C: '#forge:foils/silver',
		D: 'gtceu:mv_electric_motor'
	}).id('mts:mtsofficialpack.spotlight_bell206')

	event.shaped('mts:mtsofficialpack.watercannon', [
		'   ',
		'AAB',
		'CCC'
	], {
		A: '#forge:tiny_fluid_pipes/aluminium',
		B: 'gtceu:mv_electric_pump',
		C: '#tfg:rubber_foils'
	}).id('mts:mtsofficialpack.watercannon')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.watercannon_proj')
		.itemInputs('gtceu:steel_fluid_cell', '#tfg:rubber_rings')
		.inputFluids(Fluid.of('minecraft:water', 4000))
		.itemOutputs('mts:mtsofficialpack.watercannon_proj')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(100)

	event.shaped('mts:mtsofficialpack.scoutbedpickup', [
		'AAA',
		'ABA',
		'DCD'
	], {
		A: '#forge:rods/steel',
		B: '#forge:plates/steel',
		C: '#forge:tools/screwdrivers',
		D: '#forge:screws/steel'
	}).id('mts:mtsofficialpack.scoutbedpickup')

	event.shaped('mts:mtsofficialpack.scouthardtop', [
		'EAE',
		'BAB',
		'DCD'
	], {
		A: '#forge:plates/steel',
		B: '#forge:rods/steel',
		C: '#forge:tools/screwdrivers',
		D: '#forge:screws/steel',
		E: '#forge:glass_panes'
	}).id('mts:mtsofficialpack.scouthardtop')

	event.shaped('mts:mtsofficialpack.scoutpickuproof', [
		' E ',
		'BAB',
		'DCD'
	], {
		A: '#forge:plates/steel',
		B: '#forge:rods/steel',
		C: '#forge:tools/screwdrivers',
		D: '#forge:screws/steel',
		E: '#forge:glass_panes'
	}).id('mts:mtsofficialpack.scoutpickuproof')

	event.shaped('mts:mtsofficialpack.scouthardtop_vinyl', [
		'BAB',
		'BFB',
		'DCD'
	], {
		A: '#forge:cloth',
		B: '#forge:rods/steel',
		C: '#forge:tools/screwdrivers',
		D: '#forge:screws/steel',
		F: '#tfg:rubber_foils'
	}).id('mts:mtsofficialpack.scouthardtop_vinyl')

	event.recipes.tfc.sewing(
		'1x mts:mtsofficialpack.grilleornament_cowskull',
		[
			0, 0, 0, 1, 1, 1, 0, 0, 0,
			1, 0, 0, 0, 0, 0, 0, 0, 1,
			1, 1, 1, 0, 0, 0, 1, 1, 1,
			0, 0, 1, 0, 0, 0, 1, 0, 0,
			0, 0, 1, 1, 0, 1, 1, 0, 0
		], [
			 0,-1, 1, 1, 1, 1,-1, 0,
			 0, 0, 1, 1, 1, 1, 0, 0,
			-1, 0, 1, 1, 1, 1, 0,-1,
			-1,-1, 0, 1, 1, 0,-1,-1
		]).id('tfg:sewing/grilleornament_cowskull')

	event.recipes.tfc.sewing(
		'1x mts:mtsofficialpack.mirrorornament',
		[
			1, 1, 1, 1, 0, 0, 0, 0, 0,
			1, 0, 0, 1, 0, 1, 1, 1, 1,
			1, 0, 0, 1, 1, 1, 0, 0, 1,
			1, 1, 1, 1, 0, 1, 0, 0, 1,
			0, 0, 0, 0, 0, 1, 1, 1, 1,
		], [
			 1, 1, 1, -1, -1,-1,-1,-1,
			 1, 1, 1, -1, -1, 0, 0, 0,
			 1, 1, 1, -1, -1, 0, 0, 0,
			-1,-1,-1, -1, -1, 0, 0, 0
		]).id('tfg:sewing/mirrorornament')

	event.recipes.tfc.sewing(
		'1x mts:automotives.dashornament_frogport',
		[
			0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 1, 1, 0, 0, 0, 1, 1, 1,
			1, 1, 1, 1, 1, 1, 1, 1, 1,
			0, 1, 1, 1, 0, 1, 1, 1, 0,
			0, 1, 0, 0, 0, 0, 0, 1, 0
		], [
			0, 0, 0, 0, 0, 0, 0, 0,
			1, 1, 0, 0, 0, 0, 1, 1,
			0, 0, 0, 1, 1, 0, 0, 0,
			0, 1, 1, 1, 1, 1, 1, 0,
		]).id('tfg:sewing/dashornament_frogport')

	event.recipes.tfc.sewing(
		'1x mts:automotives.dashornament_kiwi',
		[
			0, 0, 0, 0, 0, 0, 0, 0, 0,
			0, 1, 1, 1, 1, 1, 1, 1, 0,
			0, 1, 1, 0, 0, 0, 1, 1, 0,
			0, 1, 1, 0, 0, 0, 1, 1, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0
		], [
			 1, 1, 1, 1, 1, 1, 1, 1,
			 1, 0, 1, 0, 0, 1, 0, 1,
			 1, 1, 1, 0, 0, 1, 1, 1,
			-1, 0,-1, 0, 0,-1, 0,-1,
		]).id('tfg:sewing/dashornament_kiwi')

	event.recipes.tfc.sewing(
		'1x mts:automotives.dashornament_smartobserver',
		[
			0, 0, 0, 0, 0, 0, 0, 0, 0,
			1, 1, 1, 1, 1, 1, 1, 1, 1,
			1, 1, 1, 1, 0, 1, 1, 1, 1,
			0, 0, 1, 1, 1, 1, 1, 0, 0,
			0, 0, 0, 1, 0, 1, 0, 0, 0
		], [
			1, 1, 1, 1, 1, 1, 1, 1,
			-1,0, 0, 0, 0, 0, 0,-1,
			0, 0,-1, 0, 0,-1, 0, 0,
			0, 0, 0,-1,-1, 0, 0, 0,
		]).id('tfg:sewing/dashornament_smartobserver')

	event.recipes.tfc.sewing(
		'1x mts:automotives.dashornament_snail',
		[
			0, 0, 0, 0, 1, 0, 0, 0, 0,
			0, 0, 0, 0, 1, 0, 1, 1, 0,
			0, 0, 0, 0, 1, 0, 0, 1, 0,
			0, 0, 0, 0, 1, 1, 1, 1, 0,
			0, 0, 0, 0, 1, 0, 0, 0, 0
		], [
			1,-1, 1,-1, 0, 0, 0, 0,
			1,-1, 1,-1, 0, 0, 0, 0,
			-1,1, 1, 1, 0, 0, 0, 0,
			-1,1, 1, 1, 0, 0, 0, 0,
		]).id('tfg:sewing/dashornament_snail')

	event.shaped('mts:belroftmotors.boat_trailer_tow_hitch', [
		'AC ',
		'BBD',
		'AC '
	], {
		A: '#forge:rings/steel',
		B: '#forge:rods/steel',
		C: '#forge:bolts/steel',
		D: '#forge:tools/wrenches'
	}).id('mts:belroftmotors.boat_trailer_tow_hitch')

	event.shaped('mts:belroftmotors.fifthwheel_brig', [
		'AC ',
		'BBD',
		'AC '
	], {
		A: '#forge:rings/steel',
		B: '#forge:plates/steel',
		C: '#forge:bolts/steel',
		D: '#forge:tools/wrenches'
	}).id('mts:belroftmotors.fifthwheel_brig')

	event.shaped('mts:belroftmotors.fifthwheel_harpy', [
		'ACD',
		'BB ',
		'AC '
	], {
		A: '#forge:rings/steel',
		B: '#forge:plates/steel',
		C: '#forge:bolts/steel',
		D: '#forge:tools/wrenches'
	}).id('mts:belroftmotors.fifthwheel_harpy')

	event.shaped('mts:belroftmotors.keeper_bullbar', [
		' A ',
		'BCB',
		' A '
	], {
		A: '#forge:rods/long/steel',
		B: '#forge:rods/steel',
		C: '#forge:tools/wrenches'
	}).id('mts:belroftmotors.keeper_bullbar')

	event.shaped('mts:belroftmotors.keeperroofrack', [
		' B ',
		'BCB',
		' BD'
	], {
		B: '#forge:rods/steel',
		C: '#forge:foils/steel',
		D: '#forge:tools/wrenches'
	}).id('mts:belroftmotors.keeperroofrack')

	event.shaped('mts:automotives.upgrade_airhorn', [
		'ABC',
		' D '
	], {
		A: '#tfg:rubber_foils',
		B: '#gtceu:fluid_cells',
		C: 'minecraft:redstone',
		D: '#forge:tools/wrenches'
	}).id('mts:automotives.upgrade_airhorn')

	event.shaped('mts:automotives.upgrade_cab', [
		'ABA',
		'CDC'
	], {
		A: 'create:train_door',
		B: '#forge:tools/screwdrivers',
		C: '#forge:screws/steel',
		D: '#forge:glass_panes'
	}).id('mts:automotives.upgrade_cab')

	event.shaped('mts:automotives.upgrade_nitro', [
		'DF ',
		'BAC',
		' EC'
	], {
		A: '#forge:frames/black_steel',
		B: '#forge:springs/steel',
		C: '#forge:small_item_pipes/brass',
		D: '#forge:tools/screwdrivers',
		E: '#forge:screws/steel',
		F: '#forge:cogwheels'
	}).id('mts:automotives.upgrade_nitro')

	event.shaped('mts:automotives.upgrade_cakeloader', [
		'DBF',
		'EAC',
		'FCC'
	], {
		A: '#greate:belts',
		B: '#tfg:any_bronze_crate',
		C: '#forge:small_item_pipes/brass',
		D: '#forge:tools/screwdrivers',
		E: '#forge:cogwheels',
		F: '#forge:screws/steel'
	}).id('mts:automotives.upgrade_cakeloader')

	event.shaped('mts:automotives.upgrade_cowcatcher', [
		'BCB',
		'AAA'
	], {
		A: '#forge:rods/brass',
		B: '#forge:screws/steel',
		C: '#forge:tools/screwdrivers'
	}).id('mts:automotives.upgrade_cowcatcher')

	event.shaped('mts:automotives.upgrade_fuel', [
		'BAB',
		'CCC',
		'DED'
	], {
		A: 'gtceu:steel_drum',
		B: '#forge:small_fluid_pipes/copper',
		C: 'create:metal_girder',
		D: '#forge:screws/steel',
		E: '#forge:tools/screwdrivers'
	}).id('mts:automotives.upgrade_fuel')

	event.shaped('mts:automotives.upgrade_navalhorn', [
		'E  ',
		'ABC',
		'ED '
	], {
		A: '#tfc:bells',
		B: '#gtceu:fluid_cells',
		C: 'minecraft:redstone',
		D: '#forge:tools/wrenches',
		E: '#forge:plates/brass'
	}).id('mts:automotives.upgrade_navalhorn')

	event.shaped('mts:automotives.upgrade_seat', [
		'BAB',
		' D '
	], {
		A: '#create:seats',
		B: '#forge:screws/steel',
		D: '#forge:tools/screwdrivers'
	}).id('mts:automotives.upgrade_seat')

	event.shaped('mts:automotives.upgrade_storage', [
		'BAB',
		' D '
	], {
		A: '#create:toolboxes',
		B: '#forge:screws/steel',
		D: '#forge:tools/screwdrivers'
	}).id('mts:automotives.upgrade_storage')

	event.shaped('mts:automotives.upgrade_turbo', [
		' A ',
		'EBD',
		' C '
	], {
		A: '#forge:rotors',
		B: 'create:spout',
		C: '#forge:small_fluid_pipes/copper',
		D: '#forge:tools/screwdrivers',
		E: '#forge:screws/steel'
	}).id('mts:automotives.upgrade_turbo')

	event.shaped('mts:automotives.upgrade_urlwings', [
		'A A',
		'BDB',
		'   '
	], {
		A: 'exposure:interplanar_projector',
		B: '#forge:screws/steel',
		D: '#forge:tools/screwdrivers'
	}).id('mts:automotives.upgrade_urlwings')

	event.recipes.create.sequenced_assembly(
		'4x mts:automotives.bullet_cakecapsule', 
		'gtceu:fluid_cell',
		[
			event.recipes.create.deploying('gtceu:fluid_cell', ['gtceu:fluid_cell', '#create:blaze_burner_fuel/special']),
			event.recipes.create.filling('gtceu:fluid_cell', ['gtceu:fluid_cell', Fluid.of('minecraft:lava', 1000)])
		])
		.transitionalItem('gtceu:fluid_cell')
		.loops(1)
		.id('mts:automotives.bullet_cakecapsule')

	// #endregion

	// #region Planes
	event.recipes.create.mechanical_crafting('mts:automotives.biplane', [
		'    C    ',
		'ADDBEBDDA',
		' AADHDAA ',
		'  GBDBG  ',
		'    D    ',
		'   BAB   ',
		'   DFD   ',
		'   ADA   '
	], {
		A: 'tfg:aircraft_sail',
		B: 'gtceu:black_steel_plate',
		C: 'mts:mtsofficialpack.propellersmall3blade',
		D: 'create:brass_casing',
		E: 'tfg:generators/steel_combustion_engine',
		F: 'create:fluid_tank',
		G: 'mts:mtsofficialpack.wheelmedium',
		H: '#create:seats'
	}).id('tfg:man_of_many_planes/mechanical_crafter/economy_plane');

	// #endregion Planes

	// #region Custom stuff

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
	// #endregion
}