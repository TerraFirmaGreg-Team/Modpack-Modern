// priority: 0
"use strict";

function registerImmersiveVehiclesUpgradeRecipes(event) {
	
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

	event.recipes.tfc.no_remainder_shaped_crafting(
		event.shaped('mts:mtsofficialpack.auxiliary_tank', [
			'ABA'
		], {
			A: '#forge:plates/tin',
			B: '#tfc:barrels',
		})).id('mts:mtsofficialpack.auxiliary_tank')

	event.recipes.tfc.no_remainder_shaped_crafting(
		event.shaped('mts:mtsofficialpack.barrelbell47g', [
			'ABA'
		], {
			A: '#forge:plates/potin',
			B: '#tfc:barrels',
		})).id('mts:mtsofficialpack.barrelbell47g')

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
	}).id('mts:automotives.upgrade_pontoons_wax')

	event.shaped('mts:automotives.upgrade_pontoons', [
		'BCB',
		'AAA',
		'AAA'
	], {
		A: '#tfg:rubber_plates',
		B: '#forge:screws/steel',
		C: '#forge:tools/screwdrivers'
	}).id('mts:automotives.upgrade_pontoons_rubber')

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
		0, -1, 1, 1, 1, 1, -1, 0,
		0, 0, 1, 1, 1, 1, 0, 0,
		-1, 0, 1, 1, 1, 1, 0, -1,
		-1, -1, 0, 1, 1, 0, -1, -1
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
		1, 1, 1, -1, -1, -1, -1, -1,
		1, 1, 1, -1, -1, 0, 0, 0,
		1, 1, 1, -1, -1, 0, 0, 0,
		-1, -1, -1, -1, -1, 0, 0, 0
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
		-1, 0, -1, 0, 0, -1, 0, -1,
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
		-1, 0, 0, 0, 0, 0, 0, -1,
		0, 0, -1, 0, 0, -1, 0, 0,
		0, 0, 0, -1, -1, 0, 0, 0,
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
		1, -1, 1, -1, 0, 0, 0, 0,
		1, -1, 1, -1, 0, 0, 0, 0,
		-1, 1, 1, 1, 0, 0, 0, 0,
		-1, 1, 1, 1, 0, 0, 0, 0,
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
		B: 'gtceu:fluid_cell',
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
		A: '#tfg:rubber_belts',
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
		B: 'gtceu:fluid_cell',
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

}