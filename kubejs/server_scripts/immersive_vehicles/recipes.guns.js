// priority: 0
"use strict";

function registerImmersiveVehiclesGunsRecipes(event) {
	
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
		
	// TODO: balance this against normal tnt
	event.recipes.gtceu.mixer('tfg:hexotol_itnt')
		.itemInputs('32x #forge:dusts/rdx', '1x gtceu:industrial_tnt')
		.inputFluids(Fluid.of('gtceu:wax', 72))
		.itemOutputs('4x tfg:hexotol', '9x #forge:dusts/ammonium_nitrate')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(240)



	event.recipes.gtceu.chemical_reactor('tfg:ammonium_nitrate_synthesis') 
		.inputFluids(Fluid.of('gtceu:nitric_acid', 1000), Fluid.of('gtceu:ammonia', 1000))
		.itemOutputs('9x #forge:dusts/ammonium_nitrate')
		.EUt(GTValues.VA[GTValues.MV])
		.duration(400)
}