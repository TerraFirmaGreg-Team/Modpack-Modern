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
		A: '#forge:single_cables/tin',
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

	event.shaped('mts:mts.jerrycan', [
		' AB',
		'B B',
		'BBB'
	], {
		A: '#tfg:rubber_rings',
		B: '#forge:plates/polyethylene'
	}).id('mts:mts.jerrycan_pe')

	event.shaped('mts:mts.jerrycan', [
		' AB',
		'B B',
		'BBB'
	], {
		A: '#tfg:rubber_rings',
		B: '#forge:plates/bakelite'
	}).id('mts:mts.jerrycan_bakelite')

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

	// #region Guns
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
		.itemInputs('gtceu:fluid_cell', '#tfg:rubber_rings')
		.inputFluids(Fluid.of('minecraft:water', 4000))
		.itemOutputs('mts:mtsofficialpack.watercannon_proj')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.shaped('mts:mtsofficialpack.gunconfetti', [
		'ABG',
		'CDG',
		'EEF'
	], {
		A: '#forge:dyes/red',
		B: '#forge:dyes/yellow',
		C: '#forge:dyes/lime',
		D: '#forge:dyes/blue',
		E: '#forge:small_fluid_pipes/polyethylene',
		F: '#forge:ingots/polyethylene',
		G: 'minecraft:paper'
	}).id('mts:mtsofficialpack.gunconfetti')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.gunfireextinguisher')
		.itemInputs('gtceu:fluid_cell', '2x #forge:rods/steel', '#forge:dyes/red', '3x #tfg:rubber_foils', '#tfg:rubber_rings')
		.inputFluids(Fluid.of('gtceu:carbon_dioxide', 10000))
		.itemOutputs('mts:mtsofficialpack.gunfireextinguisher')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.shaped('mts:mtsofficialpack.gunflaregun', [
		' CD',
		'AAE',
		'FBG'
	], {
		A: '#forge:foils/wrought_iron',
		B: 'gtceu:treated_wood_planks',
		C: '#forge:small_springs',
		D: '#forge:small_gears/brass',
		E: '#forge:tools/wrenches',
		F: '#forge:tools/hammers',
		G: '#forge:tools/saws'
	}).id('mts:mtsofficialpack.gunflaregun_iron')

	event.shaped('mts:mtsofficialpack.gunflaregun', [
		' CD',
		'AAE',
		' B '
	], {
		A: '#forge:plates/bakelite',
		B: '#forge:ingots/bakelite',
		C: '#forge:small_springs',
		D: '#forge:small_gears/brass',
		E: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.gunflaregun_bakelite')

	event.shaped('mts:mtsofficialpack.gunflaregun', [
		' CD',
		'AAE',
		' B '
	], {
		A: '#forge:plates/polyethylene',
		B: '#forge:ingots/polyethylene',
		C: '#forge:small_springs',
		D: '#forge:small_gears/brass',
		E: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.gunflaregun_pe')

	event.shaped('4x mts:mtsofficialpack.bulletflare_yellow', [
		'AEA',
		'ACA',
		'GBF'
	], {
		A: '#forge:nuggets/brass',
		B: 'minecraft:gunpowder',
		C: 'minecraft:glowstone_dust',
		E: '#forge:tools/mallets',
		F: '#forge:tools/saws',
		G: '#forge:tools/files'
	}).id('mts:mtsofficialpack.bulletflare_yellow')

	event.shaped('4x mts:mtsofficialpack.bulletflare_red', [
		'AEA',
		'ACA',
		'GBF'
	], {
		A: '#forge:nuggets/brass',
		B: 'minecraft:gunpowder',
		C: 'minecraft:redstone',
		E: '#forge:tools/mallets',
		F: '#forge:tools/saws',
		G: '#forge:tools/files'
	}).id('mts:mtsofficialpack.bulletflare_red')

	event.shaped('4x mts:mtsofficialpack.bulletflare_white', [
		'AEA',
		'ACA',
		'GBF'
	], {
		A: '#forge:nuggets/brass',
		B: 'minecraft:gunpowder',
		C: '#forge:dusts/magnesium',
		E: '#forge:tools/mallets',
		F: '#forge:tools/saws',
		G: '#forge:tools/files'
	}).id('mts:mtsofficialpack.bulletflare_white')

	event.shaped('4x mts:mtsofficialpack.bulletflare_blue', [
		'AEA',
		'ACA',
		'GBF'
	], {
		A: '#forge:nuggets/brass',
		B: 'minecraft:gunpowder',
		C: '#forge:dusts/copper',
		E: '#forge:tools/mallets',
		F: '#forge:tools/saws',
		G: '#forge:tools/files'
	}).id('mts:mtsofficialpack.bulletflare_blue')

	event.shaped('4x mts:mtsofficialpack.bulletflare_green', [
		'AEA',
		'ACA',
		'GBF'
	], {
		A: '#forge:nuggets/brass',
		B: 'minecraft:gunpowder',
		C: '#forge:dusts/barium',
		E: '#forge:tools/mallets',
		F: '#forge:tools/saws',
		G: '#forge:tools/files'
	}).id('mts:mtsofficialpack.bulletflare_green')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.bulletflare_yellow')
		.itemInputs('6x tfg:small_bullet_casing', 'minecraft:gunpowder', '#forge:dusts/glowstone')
		.itemOutputs('6x mts:mtsofficialpack.bulletflare_yellow')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.bulletflare_red')
		.itemInputs('6x tfg:small_bullet_casing', 'minecraft:gunpowder', '#forge:dusts/redstone')
		.itemOutputs('6x mts:mtsofficialpack.bulletflare_red')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.bulletflare_white')
		.itemInputs('6x tfg:small_bullet_casing', 'minecraft:gunpowder', '#forge:dusts/magnesium')
		.itemOutputs('6x mts:mtsofficialpack.bulletflare_white')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.bulletflare_blue')
		.itemInputs('6x tfg:small_bullet_casing', 'minecraft:gunpowder', '#forge:dusts/copper')
		.itemOutputs('6x mts:mtsofficialpack.bulletflare_blue')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.bulletflare_green')
		.itemInputs('6x tfg:small_bullet_casing', 'minecraft:gunpowder', '#forge:dusts/barium')
		.itemOutputs('6x mts:mtsofficialpack.bulletflare_green')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.bulletflare_rainbow')
		.itemInputs('6x tfg:small_bullet_casing', 'minecraft:gunpowder')
		.inputFluids(Fluid.of('tfg:prismatic_paint', 50))
		.itemOutputs('6x mts:mtsofficialpack.bulletflare_rainbow')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.smokecan_blue')
		.itemInputs('5x tfg:large_bullet_casing', '#forge:dusts/saltpeter', '#tfg:sugars', '#forge:dusts/sodium_bicarbonate')
		.inputFluids(Fluid.of('tfc:blue_dye', 144 / 2))
		.itemOutputs('5x mts:mtsofficialpack.smokecan_blue')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.smokecan_green')
		.itemInputs('5x tfg:large_bullet_casing', '#forge:dusts/saltpeter', '#tfg:sugars', '#forge:dusts/sodium_bicarbonate')
		.inputFluids(Fluid.of('tfc:green_dye', 144 / 2))
		.itemOutputs('5x mts:mtsofficialpack.smokecan_green')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.smokecan_red')
		.itemInputs('5x tfg:large_bullet_casing', '#forge:dusts/saltpeter', '#tfg:sugars', '#forge:dusts/sodium_bicarbonate')
		.inputFluids(Fluid.of('tfc:red_dye', 144 / 2))
		.itemOutputs('5x mts:mtsofficialpack.smokecan_red')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.smokecan_white')
		.itemInputs('5x tfg:large_bullet_casing', '#forge:dusts/saltpeter', '#tfg:sugars', '#forge:dusts/sodium_bicarbonate')
		.inputFluids(Fluid.of('tfc:white_dye', 144 / 2))
		.itemOutputs('5x mts:mtsofficialpack.smokecan_white')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.smokecan_polychrome')
		.itemInputs('5x tfg:large_bullet_casing', '#forge:dusts/saltpeter', '#tfg:sugars', '#forge:dusts/sodium_bicarbonate')
		.inputFluids(Fluid.of('tfg:prismatic_paint', 50))
		.itemOutputs('5x mts:mtsofficialpack.smokecan_polychrome')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.762_ammo')
		.itemInputs('2x #forge:plates/steel')
		.itemInputs(Item.of('tacz:ammo', '{AmmoId:"create_armorer:slap"}').strongNBT().withCount(64))
		.itemOutputs('mts:mtsofficialpack.bullet762')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)
		
	event.recipes.gtceu.assembler('mts:mtsofficialpack.ammocrate_250')
		.itemInputs('8x #tfc:lumber', '8x #forge:screws/steel')
		.inputFluids(Fluid.of('tfc:light_gray_dye', 144))
		.itemOutputs('mts:mtsofficialpack.ammocrate_bomb_250')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)
		
	//event.recipes.gtceu.assembler('mts:mtsofficialpack.ammocrate_500')
	//	.itemInputs('12x #tfc:lumber', '16x #forge:screws/steel')
	//	.inputFluids(Fluid.of('tfc:red_dye', 288))
	//	.itemOutputs('mts:mtsofficialpack.ammocrate_bomb_500')
	//	.EUt(GTValues.VA[GTValues.MV])
	//	.duration(200)
		
	//event.recipes.gtceu.assembler('mts:mtsofficialpack.ammocrate_bomblet')
	//	.itemInputs('12x #tfc:lumber', '16x #forge:screws/steel')
	//	.inputFluids(Fluid.of('tfc:blue_dye', 144))
	//	.itemOutputs('mts:mtsofficialpack.ammocrate_bomblet')
	//	.EUt(GTValues.VA[GTValues.MV])
	//	.duration(200)
		
	event.recipes.gtceu.assembler('mts:mtsofficialpack.ammocrate_rocket')
		.itemInputs('12x #tfc:lumber', '16x #forge:screws/steel')
		.inputFluids(Fluid.of('tfc:green_dye', 144))
		.itemOutputs('mts:mtsofficialpack.ammocrate_rocket')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(200)
		
	event.recipes.gtceu.assembler('mts:mtsofficialpack.bomblet')
		.itemInputs('2x #minecraft:buttons', '#forge:small_fluid_pipes/steel', '#forge:plates/steel', 'tfg:hexotol')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
		.itemOutputs('2x mts:mtsofficialpack.bomblet')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)
	
	event.recipes.gtceu.assembler('mts:mtsofficialpack.basicbomb')
		.itemInputs('#minecraft:buttons', '2x #forge:normal_fluid_pipes/steel', '#forge:plates/steel', '5x tfg:hexotol')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
		.itemOutputs('mts:mtsofficialpack.basicbomb')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)
	
	event.recipes.gtceu.assembler('tfg:prepackaged_rocket_motor')
		.itemInputs('8x #forge:fine_wires/annealed_copper', '2x #forge:tiny_fluid_pipes/aluminium', '8x minecraft:gunpowder',
					'#forge:wax', '#forge:foils/lead', '#forge:small_springs/lead')
		.itemOutputs('4x tfg:prepackaged_rocket_motor')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(40)
		
	event.recipes.gtceu.assembler('tfg:prepackaged_rocket_motor_ev')
		.itemInputs('16x #forge:fine_wires/annealed_copper', '4x #forge:tiny_fluid_pipes/aluminium', 'tfg:nitrocellulose',
					'#forge:wax', '2x #forge:foils/lead', '2x #forge:small_springs/lead')
		.itemOutputs('8x tfg:prepackaged_rocket_motor')
		.EUt(GTValues.VA[GTValues.EV])
		.duration(40)
	
	event.recipes.gtceu.assembler('mts:mtsofficialpack.bulletrocket')
		.itemInputs('4x #minecraft:buttons', '4x #forge:tiny_fluid_pipes/steel', 'tfg:hexotol', '4x tfg:prepackaged_rocket_motor')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
		.itemOutputs('mts:mtsofficialpack.bulletrocket')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(100)
		
	event.recipes.gtceu.assembler('mts:mtsofficialpack.heavy_bomb')
		.itemInputs('#minecraft:buttons', '2x #forge:large_fluid_pipes/steel', '2x #forge:plates/steel', '10x tfg:hexotol')
		.inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
		.itemOutputs('mts:mtsofficialpack.heavy_bomb')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(200)
		
	event.recipes.gtceu.chemical_reactor('tfg:hexamine')
		.inputFluids(Fluid.of('gtceu:ammonia', 4000), Fluid.of('gtceu:formaldehyde', 6000))
		.itemOutputs('22x #forge:dusts/hexamine')
		.outputFluids(Fluid.of('minecraft:water', 6000))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(160)
		
	event.recipes.gtceu.chemical_reactor('tfg:rdx') 
		.itemInputs('22x #forge:dusts/hexamine')
		.inputFluids(Fluid.of('gtceu:nitric_acid', 10000))
		.itemOutputs('21x #forge:dusts/rdx', '33x #forge:dusts/methylene_dinitrate')
		//needs ammonium nitrate
		.outputFluids(Fluid.of('minecraft:water', 3000))
		.EUt(GTValues.VA[GTValues.MV])
		.duration(200)
		
	event.recipes.gtceu.mixer('tfg:hexotol_tnt')
		.itemInputs('32x #forge:dusts/rdx', '1x minecraft:tnt')
		.inputFluids(Fluid.of('gtceu:wax', 72))
		.itemOutputs('4x tfg:hexotol', '9x #forge:dusts/ammonium_nitrate')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(240)
		
	// TODO: balance this
	event.recipes.gtceu.mixer('tfg:hexotol_itnt')
		.itemInputs('32x #forge:dusts/rdx', '1x gtceu:industrial_tnt')
		.inputFluids(Fluid.of('gtceu:wax', 72))
		.itemOutputs('4x tfg:hexotol', '9x #forge:dusts/ammonium_nitrate')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(240)

	// #endregion

	// #region ammonium nitrate sidebar
	
	event.recipes.gtceu.chemical_reactor('tfg:ammonium_nitrate_synthesis') 
		.inputFluids(Fluid.of('gtceu:nitric_acid', 1000), Fluid.of('gtceu:ammonia', 1000))
		.itemOutputs('9x #forge:dusts/ammonium_nitrate')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(400)
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
	// #endregion

	// #region Wheels
	event.shaped('mts:mtsofficialpack.wheelsmall', [
		' B ',
		' A ',
		' B '
	], {
		A: '#forge:rings/steel',
		B: '#tfg:rubber_plates'
	}).id('mts:mtsofficialpack.wheelsmall')

	event.shaped('mts:mtsofficialpack.wheelmedium', [
		' B ',
		'BAB',
		' B '
	], {
		A: '#forge:small_gears/steel',
		B: '#tfg:rubber_plates'
	}).id('mts:mtsofficialpack.wheelmedium')

	event.shaped('mts:mtsofficialpack.wheellarge', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: '#forge:small_gears/steel',
		B: '#tfg:rubber_plates'
	}).id('mts:mtsofficialpack.wheellarge')

	event.shaped('mts:mtsofficialpack.wheelhuge', [
		'BBB',
		'BAB',
		'BBB'
	], {
		A: '#forge:gears/steel',
		B: '#tfg:rubber_plates'
	}).id('mts:mtsofficialpack.wheelhuge')
	// #endregion

	// #region Propellers

	event.shaped('mts:mtsofficialpack.propellersmall3blade', [
		'BFB',
		'CAE',
		'BD '
	], {
		A: '#forge:rings/steel',
		B: '#forge:rods/long/steel',
		C: '#forge:screws/steel',
		D: '#forge:tools/screwdrivers',
		E: '#forge:tools/files',
		F: '#forge:tools/hammers'
	}).id('mts:mtsofficialpack.propellersmall3blade')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.propellersmall3blade')
		.itemInputs('#forge:rings/steel', '3x #forge:rods/long/steel', '#forge:screws/steel')
		.itemOutputs('mts:mtsofficialpack.propellersmall3blade')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.shaped('mts:mtsofficialpack.propellersmall2blade', [
		' FB',
		'CAE',
		'BD '
	], {
		A: '#forge:rings/cobalt_brass',
		B: '#forge:rods/long/cobalt_brass',
		C: '#forge:screws/steel',
		D: '#forge:tools/screwdrivers',
		E: '#forge:tools/files',
		F: '#forge:tools/hammers'
	}).id('mts:mtsofficialpack.propellersmall2blade')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.propellersmall2blade')
		.itemInputs('#forge:rings/cobalt_brass', '2x #forge:rods/long/cobalt_brass', '#forge:screws/steel')
		.itemOutputs('mts:mtsofficialpack.propellersmall2blade')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.shaped('mts:mtsofficialpack.propellerlarge2blade', [
		'AA ',
		'CBD',
		' AA'
	], {
		A: '#forge:rods/long/aluminium',
		B: '#forge:rotors/aluminium',
		C: '#forge:screws/steel',
		D: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.propellerlarge2blade')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.propellerlarge2blade')
		.itemInputs('#forge:rotors/aluminium', '4x #forge:rods/long/aluminium', '#forge:screws/steel')
		.itemOutputs('mts:mtsofficialpack.propellerlarge2blade')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.create.mechanical_crafting('mts:mtsofficialpack.propellerrotor', [
		'   C   ',
		'AAABAAA'
	], {
		A: '#forge:rods/long/black_steel',
		B: '#forge:rotors/steel',
		C: '#forge:screws/steel'
	}).id('mts:mtsofficialpack.propellerrotor')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.propellerrotor')
		.itemInputs('#forge:rotors/steel', '6x #forge:rods/long/black_steel', '#forge:screws/steel')
		.itemOutputs('mts:mtsofficialpack.propellerrotor')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.recipes.create.mechanical_crafting('mts:mtsofficialpack.propellerrotor206', [
		'    C    ',
		'AAAABAAAA'
	], {
		A: '#forge:rods/long/aluminium',
		B: '#forge:rotors/aluminium',
		C: '#forge:screws/steel'
	}).id('mts:mtsofficialpack.propellerrotor206')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.propellerrotor206')
		.itemInputs('#forge:rotors/aluminium', '8x #forge:rods/long/aluminium', '#forge:screws/steel')
		.itemOutputs('mts:mtsofficialpack.propellerrotor206')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)

	event.shapeless('mts:belroftmotors.tuna_propeller',
		['#forge:rotors/steel', '#forge:screws/steel', '#forge:tools/screwdrivers'])
		.id('mts:belroftmotors.tuna_propeller')

	event.shapeless('mts:belroftmotors.barracuda_propeller',
		['#forge:rotors/aluminium', '#forge:screws/steel', '#forge:tools/screwdrivers'])
		.id('mts:belroftmotors.barracuda_propeller')

	// #endregion

	// #region Seats
	event.shaped('mts:mtsofficialpack.carseat_brown', [
		' D ',
		'ABC',
		'ABC'
	], {
		A: '#forge:leather',
		B: '#minecraft:wooden_slabs',
		C: '#forge:screws',
		D: '#forge:tools/screwdrivers'
	}).id('mts:mtsofficialpack.carseat_brown')

	event.recipes.gtceu.assembler('mts:mtsofficialpack.carseat_brown')
		.itemInputs('2x #forge:leather', '2x #minecraft:wooden_slabs', '2x #forge:screws')
		.itemOutputs('mts:mtsofficialpack.carseat_brown')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.tfc.barrel_sealed(1000)
		.inputs(Ingredient.of('#mts:carseats').subtract(`mts:mtsofficialpack.carseat_brown`), Fluid.of(`tfc:lye`, 144))
		.outputItem(`mts:mtsofficialpack.carseat_brown`)
		.id(`tfg:barrel/mts/carseat_brown`)

	event.recipes.gtceu.chemical_bath(`mts:mtsofficialpack.carseat_brown`)
		.itemInputs(Ingredient.of('#mts:carseats').subtract(`mts:mtsofficialpack.carseat_brown`))
		.inputFluids(Fluid.of(`gtceu:chlorine`, 144))
		.itemOutputs(`mts:mtsofficialpack.carseat_brown`)
		.duration(200)
		.EUt(4)
		.category(GTRecipeCategories.CHEM_DYES)

	const car_seats = [
		{ dye: 'black', mts: 'black' },
		{ dye: 'gray', mts: 'grey' },
		{ dye: 'brown', mts: 'maroon' },
		{ dye: 'red', mts: 'red' },
		{ dye: 'orange', mts: 'tan' },
		{ dye: 'white', mts: 'white' }
	]
	car_seats.forEach(seat => {
		event.recipes.tfc.barrel_sealed(1000)
			.inputs(`mts:mtsofficialpack.carseat_brown`, Fluid.of(`tfc:${seat.dye}_dye`, 144))
			.outputItem(`mts:mtsofficialpack.carseat_${seat.mts}`)
			.id(`tfg:barrel/mts/carseat_${seat.mts}`)

		event.recipes.gtceu.chemical_bath(`mts:mtsofficialpack.carseat_${seat.mts}`)
			.itemInputs(`mts:mtsofficialpack.carseat_brown`)
			.inputFluids(Fluid.of(`tfc:${seat.dye}_dye`, 144))
			.itemOutputs(`mts:mtsofficialpack.carseat_${seat.mts}`)
			.duration(200)
			.EUt(4)
			.category(GTRecipeCategories.CHEM_DYES)
	})

	const av_seats = [
		{ dye: 'white', mts: 'white' },
		{ dye: 'yellow', mts: 'yellow' },
		{ dye: 'red', mts: 'red' },
		{ dye: 'purple', mts: 'pink' },
		{ dye: 'gray', mts: 'grey' },
		{ dye: 'green', mts: 'olive' },
		{ dye: 'cyan', mts: 'cyan' },
		{ dye: 'brown', mts: 'brown' },
		{ dye: 'blue', mts: 'blue' },
		{ dye: 'black', mts: 'black' }
	]
	av_seats.forEach(seat => {
		event.shaped(`mts:mtsofficialpack.seat${seat.mts}`, [
			'AC ',
			'BAB'
		], {
			A: `create:${seat.dye}_seat`,
			B: '#forge:screws',
			C: '#forge:tools/screwdrivers'
		}).id(`mts:mtsofficialpack.seat${seat.mts}`)

		event.recipes.gtceu.assembler(`mts:mtsofficialpack.seat${seat.mts}`)
			.itemInputs(`create:${seat.dye}_seat`, '2x #forge:screws')
			.itemOutputs(`mts:mtsofficialpack.seat${seat.mts}`)
			.duration(50)
			.EUt(GTValues.VA[GTValues.ULV])
			.circuit(2)

		if (seat.create !== 'white') {
			event.recipes.tfc.barrel_sealed(1000)
				.inputs(`mts:mtsofficialpack.seatwhite`, Fluid.of(`tfc:${seat.dye}_dye`, 144))
				.outputItem(`mts:mtsofficialpack.seat${seat.mts}`)
				.id(`tfg:barrel/mts/seat_${seat.mts}`)

			event.recipes.gtceu.chemical_bath(`mts:mtsofficialpack.seat${seat.mts}`)
				.itemInputs(`mts:mtsofficialpack.seatwhite`)
				.inputFluids(Fluid.of(`tfc:${seat.dye}_dye`, 144))
				.itemOutputs(`mts:mtsofficialpack.seat${seat.mts}`)
				.duration(200)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
		}
		else {
			event.recipes.tfc.barrel_sealed(1000)
				.inputs(Ingredient.of('#mts:avseats').subtract(`mts:mtsofficialpack.seatwhite`), Fluid.of(`tfc:lye`, 144))
				.outputItem(`mts:mtsofficialpack.seatwhite`)
				.id(`tfg:barrel/mts/seat_white`)

			event.recipes.gtceu.chemical_bath(`mts:mtsofficialpack.seatwhite`)
				.itemInputs(Ingredient.of('#mts:avseats').subtract(`mts:mtsofficialpack.seatwhite`))
				.inputFluids(Fluid.of(`gtceu:chlorine`, 144))
				.itemOutputs(`mts:mtsofficialpack.seatwhite`)
				.duration(200)
				.EUt(4)
				.category(GTRecipeCategories.CHEM_DYES)
		}
	})

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

	// #region Indicators/gauges
	const indicators = Ingredient.of('#mts:indicators').itemIds.toArray().map(String);
	indicators.forEach(i => {
		event.stonecutting(i, '#mts:indicators')
			.id(global.linuxUnfucker(`mts:stonecutting/${i}`))
		event.stonecutting(Item.of(i).withCount(4), 'vintageimprovements:redstone_module')
			.id(global.linuxUnfucker(`mts:stonecutting/${i}_redstone`))
	})
	// #endregion

	// #region Engines

	// LV
	event.recipes.gtceu.assembler('mts:mtsofficialpack.enginefranklin0335')
		.itemInputs('#forge:rotors/cobalt_brass', '4x mts:mtsofficialpack.sparkplug', '10x #forge:tiny_fluid_pipes/steel', '#forge:frames/invar', 'gtceu:lv_fluid_regulator', 'gtceu:lv_electric_piston', '8x #forge:foils/invar', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:mtsofficialpack.enginefranklin0335')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(1)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.enginebristolmercury')
		.itemInputs('#forge:rotors/cobalt_brass', '4x mts:mtsofficialpack.sparkplug', '9x #forge:tiny_fluid_pipes/steel', '2x #forge:frames/invar', 'gtceu:lv_fluid_regulator', '2x gtceu:lv_electric_piston', '8x #forge:foils/invar', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:mtsofficialpack.enginebristolmercury')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(2)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:belroftmotors.engine_tuna')
		.itemInputs('4x mts:mtsofficialpack.sparkplug', '4x #forge:tiny_fluid_pipes/steel', '#forge:frames/invar', 'gtceu:lv_fluid_regulator', 'gtceu:lv_electric_piston', '8x #forge:foils/invar', '8x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:belroftmotors.engine_tuna')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(3)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:belroftmotors.engine_mahogany')
		.itemInputs('2x mts:mtsofficialpack.sparkplug', '4x #forge:tiny_fluid_pipes/steel', '#forge:frames/invar', 'gtceu:lv_fluid_regulator', 'gtceu:lv_electric_piston', '8x #forge:foils/invar', '8x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:belroftmotors.engine_mahogany')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(4)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.enginequad')
		.itemInputs('4x mts:mtsofficialpack.sparkplug', '2x #forge:tiny_fluid_pipes/steel', '#forge:frames/invar', 'gtceu:lv_electric_pump', 'gtceu:lv_electric_piston', '8x #forge:foils/invar', '8x #tfg:rubber_rings', '#tfg:rubber_plates')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:mtsofficialpack.enginequad')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(5)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:belroftmotors.bee_i3_engine')
		.itemInputs('2x mts:mtsofficialpack.sparkplug', '4x #forge:tiny_fluid_pipes/steel', '#forge:frames/invar', 'gtceu:lv_fluid_regulator', 'gtceu:lv_electric_piston', '8x #forge:foils/invar', '8x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:belroftmotors.bee_i3_engine')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(6)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:belroftmotors.enginepounderv8')
		.itemInputs('4x mts:mtsofficialpack.sparkplug', '8x #forge:tiny_fluid_pipes/steel', '#forge:frames/invar', 'gtceu:lv_fluid_regulator', '2x gtceu:lv_electric_piston', '8x #forge:foils/invar', '8x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:belroftmotors.enginepounderv8')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(7)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.engineamci4')
		.itemInputs('4x mts:mtsofficialpack.sparkplug', '8x #forge:tiny_fluid_pipes/steel', '#forge:frames/invar', 'gtceu:lv_fluid_regulator', '2x gtceu:lv_electric_piston', '8x #forge:foils/wrought_iron', '8x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:mtsofficialpack.engineamci4')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(8)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.enginedetroitdiesel')
		.itemInputs('6x mts:mtsofficialpack.sparkplug', '8x #forge:tiny_fluid_pipes/steel', '#forge:frames/invar', 'gtceu:lv_fluid_regulator', '2x gtceu:lv_electric_piston', '8x #forge:foils/wrought_iron', '8x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:mtsofficialpack.enginedetroitdiesel')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(20 * 20)
		.circuit(9)
		.addMaterialInfo(true)

	// MV
	event.recipes.gtceu.assembler('mts:mtsofficialpack.engineallison250')
		.itemInputs('2x #forge:rotors/magnalium', '8x mts:mtsofficialpack.sparkplug', '12x #forge:tiny_fluid_pipes/aluminium', '2x #forge:frames/magnalium', '2x gtceu:mv_fluid_regulator', '3x gtceu:mv_electric_piston', '16x #forge:foils/magnalium', '16x #tfg:rubber_rings')
		.inputFluids(Fluid.of('gtceu:lubricant', 4000))
		.itemOutputs('mts:mtsofficialpack.engineallison250')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20 * 20)
		.circuit(1)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.enginelycomingo360')
		.itemInputs('2x #forge:rotors/magnalium', '8x mts:mtsofficialpack.sparkplug', '12x #forge:tiny_fluid_pipes/aluminium', '2x #forge:frames/magnalium', '2x gtceu:mv_fluid_regulator', '3x gtceu:mv_electric_piston', '16x #forge:foils/magnalium', '16x #tfg:rubber_rings')
		.inputFluids(Fluid.of('gtceu:lubricant', 4000))
		.itemOutputs('mts:mtsofficialpack.enginelycomingo360')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20 * 20)
		.circuit(2)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:belroftmotors.engine_barracuda')
		.itemInputs('2x mts:mtsofficialpack.sparkplug', '6x #forge:tiny_fluid_pipes/aluminium', '#forge:frames/magnalium', 'gtceu:mv_fluid_regulator', '2x gtceu:mv_electric_piston', '16x #forge:foils/magnalium', '16x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:belroftmotors.engine_barracuda')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20 * 20)
		.circuit(3)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:belroftmotors.engine_highlander_v8')
		.itemInputs('4x mts:mtsofficialpack.sparkplug', '10x #forge:tiny_fluid_pipes/aluminium', '2x #forge:frames/magnalium', '2x gtceu:mv_fluid_regulator', '2x gtceu:mv_electric_piston', '16x #forge:foils/magnalium', '16x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:belroftmotors.engine_highlander_v8')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20 * 20)
		.circuit(4)
		.addMaterialInfo(true)

	event.shapeless('mts:belroftmotors.engine_highlander_v8_snorkel', ['mts:belroftmotors.engine_highlander_v8', 'tfg:snorkel', '#forge:tools/wrenches'])
		.id('tfg:shapeless/who_up_snorkeling_they_engine')

	event.recipes.tfc.extra_products_shapeless_crafting(
		'tfg:snorkel',
		event.shapeless('mts:belroftmotors.engine_highlander_v8', ['mts:belroftmotors.engine_highlander_v8_snorkel', '#forge:tools/wrenches']))
		.id('tfg:shapeless/unsnorkels_ur_engine')

	event.recipes.gtceu.assembler('mts:belroftmotors.engine_granite')
		.itemInputs('6x mts:mtsofficialpack.sparkplug', '12x #forge:tiny_fluid_pipes/aluminium', '2x #forge:frames/magnalium', '2x gtceu:mv_fluid_regulator', '2x gtceu:mv_electric_piston', '16x #forge:foils/magnalium', '16x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:belroftmotors.engine_granite')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20 * 20)
		.circuit(5)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:belroftmotors.engine_turbo_hauler_v8')
		.itemInputs('6x mts:mtsofficialpack.sparkplug', '10x #forge:tiny_fluid_pipes/aluminium', '2x #forge:frames/magnalium', '2x gtceu:mv_fluid_regulator', '2x gtceu:mv_electric_piston', '16x #forge:foils/magnalium', '16x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 2000))
		.itemOutputs('mts:belroftmotors.engine_turbo_hauler_v8')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(20 * 20)
		.circuit(6)
		.addMaterialInfo(true)

	// HV
	event.recipes.gtceu.assembler('mts:mtsofficialpack.enginepw610f')
		.itemInputs('4x #forge:rotors/chromium', '64x #forge:bolts/stainless_steel', '16x #forge:plates/stainless_steel', '20x #forge:tiny_fluid_pipes/stainless_steel', '4x #forge:frames/mo_50_re', '4x gtceu:hv_fluid_regulator', '32x #forge:foils/vanadium_steel', '32x #tfg:rubber_rings')
		.inputFluids(Fluid.of('gtceu:lubricant', 8000))
		.itemOutputs('mts:mtsofficialpack.enginepw610f')
		.EUt(GTValues.VA[GTValues.HV])
		.duration(20 * 20)
		.circuit(1)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.enginefordfe428')
		.itemInputs('16x mts:mtsofficialpack.sparkplug', '16x #forge:tiny_fluid_pipes/stainless_steel', '2x #forge:frames/mo_50_re', '4x gtceu:hv_fluid_regulator', '4x gtceu:hv_electric_piston', '32x #forge:foils/vanadium_steel', '32x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 8000))
		.itemOutputs('mts:mtsofficialpack.enginefordfe428')
		.EUt(GTValues.VA[GTValues.HV])
		.duration(20 * 20)
		.circuit(2)
		.addMaterialInfo(true)

	event.recipes.gtceu.assembler('mts:mtsofficialpack.enginemercedesm102')
		.itemInputs('16x mts:mtsofficialpack.sparkplug', '16x #forge:tiny_fluid_pipes/stainless_steel', '2x #forge:frames/mo_50_re', '4x gtceu:hv_fluid_regulator', '4x gtceu:hv_electric_piston', '32x #forge:foils/vanadium_steel', '32x #tfg:rubber_rings', '#tfg:rubber_belts')
		.inputFluids(Fluid.of('gtceu:lubricant', 8000))
		.itemOutputs('mts:mtsofficialpack.enginemercedesm102')
		.EUt(GTValues.VA[GTValues.HV])
		.duration(20 * 20)
		.circuit(3)
		.addMaterialInfo(true)

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
		B: '#forge:plates/red_steel',
		C: 'mts:mtsofficialpack.propellersmall3blade',
		D: 'create:brass_casing',
		E: 'tfg:generators/steel_combustion_engine',
		F: 'create:fluid_tank',
		G: 'mts:mtsofficialpack.wheelmedium',
		H: '#create:seats'
	}).id('mts:automotives.biplane');

	event.recipes.gtceu.automotive_workshop('mts:automotives.biplane')
		.itemInputs('11x create:brass_casing', '9x tfg:aircraft_sail', '6x #forge:plates/red_steel',
			'2x mts:mtsofficialpack.wheelmedium', 'tfg:generators/steel_combustion_engine', '#create:seats',
			'create:fluid_tank', 'mts:mtsofficialpack.propellersmall3blade')
		.itemOutputs('mts:automotives.biplane')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(60 * 20)
		.addMaterialInfo(true)
		
	const bell47s = [
		{ suffix: '', dye: 'red' },
		{ suffix: '_black', dye: 'black' },
		{ suffix: '_blue', dye: 'blue' },
		{ suffix: '_olive', dye: 'green' }
	];
	bell47s.forEach(bell => {
		event.recipes.create.mechanical_crafting(`mts:mtsofficialpack.bell47g${bell.suffix}`, [
			' BB      ',
			'ACFB     ',
			'AEFGGGGGH',
			'ADFBI    ',
			' BB      '
		], {
			A: '#forge:glass',
			B: '#forge:rods/invar',
			C: 'gtceu:lv_sensor',
			D: 'create:precision_mechanism',
			E: '#gtceu:batteries/lv',
			F: '#forge:plates/invar',
			G: '#forge:frames/invar',
			H: '#forge:rotors/cobalt_brass',
			I: TFC.ingredient.fluid(TFC.fluidStackIngredient(`tfc:${bell.dye}_dye`, 1152))
		}).id(`mts:mtsofficialpack.bell47g${bell.suffix}`);

		event.recipes.gtceu.automotive_workshop(`mts:mtsofficialpack.bell47g${bell.suffix}`)
			.itemInputs('3x #forge:glass', '6x #forge:rods/invar', '5x #forge:frames/invar', '3x #forge:plates/invar',
				'gtceu:lv_sensor', 'create:precision_mechanism', '#gtceu:batteries/lv', '#forge:rotors/cobalt_brass')
			.inputFluids(Fluid.of(`tfc:${bell.dye}_dye`, 1152))
			.itemOutputs(`mts:mtsofficialpack.bell47g${bell.suffix}`)
			.EUt(GTValues.VA[GTValues.LV])
			.duration(60 * 20)
			.addMaterialInfo(true)
	})

	//event.recipes.create.mechanical_crafting('mts:automotives.biplane', [
	//	'         ',
	//	'         ',
	//	'         ',
	//	'         ',
	//	'         ',
	//	'         ',
	//	'         ',
	//	'         '
	//], {

	//}).id('mts:automotives.biplane');

	// #endregion Planes

	// #region Cars
	
	event.recipes.create.mechanical_crafting('mts:automotives.boilerbox', [
		'        ',
		' BJ JJA ',
		'EHDDDIH ',
		'EHLCGFHK',
		'EHDDDIH ',
		' BJ JJA ',
		'        '
	], {
		A: 'create:flywheel',
		B: 'mts:mtsofficialpack.wheelmedium',
		C: '#create:seats',
		D: 'create:brass_casing',
		E: '#forge:glass_panes',
		F: 'steampowered:bronze_steam_engine',
		G: 'create:blaze_burner',
		H: '#forge:shafts',
		I: 'create:fluid_tank',
		J: '#forge:plates/blue_steel',
		K: '#tfg:smokestacks',
		L: 'create:precision_mechanism'
	}).id('mts:automotives.boilerbox');

	event.recipes.gtceu.automotive_workshop('mts:automotives.boilerbox')
		.itemInputs('6x create:brass_casing', '2x create:flywheel', '2x mts:mtsofficialpack.wheelmedium',
			'6x #forge:plates/blue_steel', '#create:seats', '3x #forge:glass_panes', 'steampowered:bronze_steam_engine',
			'create:blaze_burner', '6x #forge:shafts', '2x create:fluid_tank', '#tfg:smokestacks', 'create:precision_mechanism')
		.itemOutputs('mts:automotives.boilerbox')
		.EUt(GTValues.VA[GTValues.LV])
		.duration(60 * 20)
		.addMaterialInfo(true)

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