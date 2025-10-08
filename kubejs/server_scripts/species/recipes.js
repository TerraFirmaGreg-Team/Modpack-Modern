// priority: 0
"use strict";

function registerSpeciesRecipes(event) {
	global.SPECIES_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	event.remove({ mod: 'species' })

	event.shapeless('species:music_disc_dial', ['etched:blank_music_disc', 'species:birt_egg'])
	event.shapeless('species:music_disc_lapidarian', ['etched:blank_music_disc', 'tfc:rock/raw/basalt_slab'])
	event.shapeless('species:music_disk_spawner', ['etched:blank_music_disc', 'computercraft:disk'])

	event.shaped('species:cranktrap', [
		'ABA',
		'CDC',
		'ABA'
	], {
		A: '#forge:bolts/wrought_iron',
		B: '#forge:rods/wrought_iron',
		C: '#forge:small_springs',
		D: '#forge:tools/hammers'
	}).id('tfg:shaped/cranktrap')

	event.shaped('species:crankbow', [
		'ACA',
		'CBC',
		'DED'
	], {
		A: '#forge:rods/black_steel',
		B: 'minecraft:crossbow',
		C: '#forge:small_gears/steel',
		D: 'tfc:metal/chain/black_steel',
		E: 'create:hand_crank'
	}).id('tfg:shaped/crankbow')

	event.recipes.gtceu.assembler('species:hopelight')
		.itemInputs('1x #forge:plates/magnalium', 'ae2:charged_certus_quartz_crystal')
		.inputFluids(Fluid.of('gtceu:glowstone', 144*4))
		.itemOutputs('2x species:hopelight')
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('species:speclight')
		.itemInputs('#forge:rings/magnalium', 'ae2:charged_certus_quartz_crystal')
		.inputFluids(Fluid.of('gtceu:glowstone', 144))
		.itemOutputs('2x species:speclight')
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.shaped('2x species:coil', [
		'ABA'
	], {
		A: '#forge:bolts/wrought_iron',
		B: 'firmaciv:rope_coil'
	}).id('tfg:shaped/coil')

	event.shaped('species:harpoon', [
		'A',
		'B',
		'B'
	], {
		A: 'tfc:metal/javelin_head/wrought_iron',
		B: 'firmaciv:rope_coil'
	}).id('tfg:shaped/harpoon')

	generateGreenHouseRecipe(event, '8x tfg:saplings/alphacene', 'tfg:semiheavy_ammoniacal_water', 16000,
		'64x species:alphacene_mushroom_block', 'tfg:green_house/alphacene_mushroom', 'ad_astra:mars', 8,
		'8x minecraft:mushroom_stem', GTValues.VA[GTValues.MV])
	
	event.shapeless('species:cracked_wraptor_egg', ['tfg:wraptor_egg', '#forge:tools/hammers']).id('tfg:shapeless/crack_egg')
	event.shapeless('2x tfg:wraptor_sugar', ['species:cracked_wraptor_egg']).id('tfg:shapeless/juice_egg')
	
	event.recipes.gtceu.extractor('tfg:juice_wraptor_egg_mv')
		.itemInputs('species:cracked_wraptor_egg')
		.itemOutputs('4x tfg:wraptor_sugar')
		.duration(100)
		.EUt(GTValues.VA[GTValues.MV])
	event.recipes.gtceu.extractor('tfg:juice_wraptor_egg_full')
		.itemInputs('tfg:wraptor_egg')
		.itemOutputs('4x tfg:wraptor_sugar')
		.duration(200)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.extractor('tfg:juice_sniffer_egg')
		.itemInputs('tfg:sniffer_egg')
		.outputFluids(Fluid.of('firmalife:cream', 1000))
		.duration(100)
		.EUt(GTValues.VA[GTValues.MV])

	event.shaped('species:ricoshield', [
		'EBE',
		'ACA',
		'EDE'
	], {
		A: '#forge:springs/steel',
		B: 'create:precision_mechanism',
		C: 'tfc:metal/shield/blue_steel',
		D: 'species:kinetic_core',
		E: '#forge:plates/titanium'
	}).id('tfg:shaped/ricoshield_blue')

	event.shaped('species:ricoshield', [
		'EBE',
		'ACA',
		'EDE'
	], {
		A: '#forge:springs/steel',
		B: 'create:precision_mechanism',
		C: 'tfc:metal/shield/red_steel',
		D: 'species:kinetic_core',
		E: '#forge:plates/titanium'
	}).id('tfg:shaped/ricoshield_red')

	event.shaped('species:deflector_dummy', [
		'A',
		'B',
		'C'
	], {
		A: 'vintageimprovements:redstone_module',
		B: 'species:kinetic_core',
		C: 'tacz:target'
	}).id('tfg:shaped/deflector_dummy')
}