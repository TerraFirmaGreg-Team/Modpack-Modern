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


	// TODO: add recipes for its enchants? Quick Crank, Scattershot, Capacity, and Sparing

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
		A: '#forge:rods/steel',
		B: 'minecraft:crossbow',
		C: '#forge:small_gears/wrought_iron',
		D: 'tfc:metal/chain/steel',
		E: 'create:hand_crank'
	}).id('tfg:shaped/crankbow')

	event.recipes.gtceu.assembler('species:hopelight')
		.itemInputs('1x #forge:plates/magnalium', 'ae2:charged_certus_quartz_crystal')
		.inputFluids(Fluid.of('gtceu:glowstone', 144 * 4))
		.itemOutputs('2x species:hopelight')
		.duration(200)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.gtceu.assembler('species:speclight')
		.itemInputs('#forge:rings/magnalium', 'ae2:charged_certus_quartz_crystal')
		.inputFluids(Fluid.of('gtceu:glowstone', 144))
		.itemOutputs('2x species:speclight')
		.duration(100)
		.EUt(GTValues.VA[GTValues.HV])

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('3x species:coil', ['#tfg:tools/spindles', 'firmaciv:rope_coil'])
	).id('tfg:shaped/coil')

	event.shapeless('firmaciv:rope_coil', ['3x species:coil'])
		.id('tfg:shapeless/coil')

	event.shaped('species:harpoon', [
		'A',
		'B',
		'B'
	], {
		A: 'tfc:metal/javelin_head/wrought_iron',
		B: 'firmaciv:rope_coil'
	}).id('tfg:shaped/harpoon')

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

	event.recipes.tfc.sewing('species:wicked_mask',
		[
			1, 0, 0, 0, 1, 0, 0, 0, 1,
			1, 0, 0, 0, 1, 0, 0, 0, 1,
			1, 0, 0, 0, 1, 0, 0, 0, 1,
			0, 0, 0, 0, 1, 0, 0, 0, 0,
			0, 0, 0, 0, 0, 0, 0, 0, 0
		],
		[
			1, 1, 1, 1, 0, 0, 0, 0,
			1, -1, -1, 1, 0, -1, -1, 0,
			1, 1, 1, 1, 0, 0, 0, 0,
			1, 1, -1, -1, -1, -1, 0, 0
		]).id('tfg:sewing/wicked_mask')

	event.recipes.gtceu.assembler('tfg:wicked_mask')
		.itemInputs('2x #tfc:sewing_light_cloth', '2x #tfc:sewing_dark_cloth', '3x #forge:string')
		.itemOutputs('species:wicked_mask')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(200)

	event.recipes.firmalife.mixing_bowl()
		.outputItem('2x species:wicked_treat')
		.itemIngredients(['#tfg:medicine', 'minecraft:bone_meal', 'minecraft:bone_meal'])
		.id('tfg:mixing_bowl/wicked_treat')

	event.recipes.gtceu.mixer('tfg:wicked_treat')
		.itemInputs('#tfg:medicine', '2x minecraft:bone_meal')
		.itemOutputs('2x species:wicked_treat')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(200)

	event.shaped('2x species:smoke_bomb', [
		' A ',
		'BCB',
		'EDE'
	], {
		A: '#forge:string',
		B: 'minecraft:paper',
		C: '#tfg:invisibility_ingredients',
		D: 'gtceu:sticky_resin',
		E: 'minecraft:gunpowder'
	}).id('tfg:shaped/smoke_bomb_paper')

	event.shaped('2x species:smoke_bomb', [
		' A ',
		'BC ',
		'EDE'
	], {
		A: '#forge:string',
		B: '#tfc:fired_vessels',
		C: '#tfg:invisibility_ingredients',
		D: 'gtceu:sticky_resin',
		E: 'minecraft:gunpowder'
	}).id('tfg:shaped/smoke_bomb_vessel')

	event.recipes.tfc.heating('species:broken_links', 1535)
		.resultFluid(Fluid.of('gtceu:iron', 144 / 4))
		.id(`species:heating/broken_links`)

	event.recipes.gtceu.extractor('tfg:broken_links')
		.itemInputs('species:broken_links')
		.outputFluids(Fluid.of('gtceu:iron', 144 / 4))
		.duration(50)
		.EUt(GTValues.VA[GTValues.LV])
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)

	event.recipes.gtceu.macerator('tfg:werefang')
		.itemInputs("species:werefang")
		.itemOutputs("3x minecraft:bone_meal")
		.duration(50)
		.EUt(2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING);

	event.recipes.tfc.quern("3x minecraft:bone_meal", "species:werefang")
		.id("tfg:quern/werefang")

	event.recipes.gtceu.macerator('tfg:bone_spike')
		.itemInputs(["species:bone_spike", "species:bone_vertebra", "species:bone_bark"])
		.itemOutputs("9x minecraft:bone_meal")
		.duration(50)
		.EUt(2)
		.category(GTRecipeCategories.MACERATOR_RECYCLING);

	event.recipes.tfc.quern("9x minecraft:bone_meal", ["species:bone_spike", "species:bone_vertebra", "species:bone_bark"])
		.id("tfg:quern/bone_spike")
}