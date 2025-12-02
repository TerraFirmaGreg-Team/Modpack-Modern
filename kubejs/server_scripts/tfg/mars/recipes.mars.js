"use strict";

function registerTFGMarsRecipes(event) {

	// Mars air

	event.recipes.gtceu.vacuum_freezer('tfg:liquid_mars_air')
		.inputFluids(Fluid.of('tfg:mars_air', 4000))
		.outputFluids(Fluid.of('tfg:liquid_mars_air', 4000))
		.duration(80)
		.EUt(GTValues.VA[GTValues.EV])

	event.recipes.gtceu.centrifuge('tfg:centrifuge_mars_air')
		.inputFluids(Fluid.of('tfg:mars_air', 10000))
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 3900), Fluid.of('gtceu:nitrogen', 1000), Fluid.of('gtceu:argon', 500))
		.duration(1600)
		.EUt(GTValues.VA[GTValues.MV])

	// TODO: move neon and xenon somewhere else
	event.recipes.gtceu.distillation_tower('tfg:distill_liquid_mars_air')
		.inputFluids(Fluid.of('tfg:liquid_mars_air', 100000))
		.outputFluids(Fluid.of('gtceu:carbon_dioxide', 80000))
		.outputFluids(Fluid.of('gtceu:nitrogen', 7000))
		.outputFluids(Fluid.of('gtceu:argon', 5000))
		.outputFluids(Fluid.of('gtceu:oxygen', 3000))
		.outputFluids(Fluid.of('gtceu:krypton', 1000))
		.outputFluids(Fluid.of('gtceu:neon', 1000))
		.outputFluids(Fluid.of('gtceu:xenon', 1000))
		.chancedOutput('gtceu:ammonium_chloride_dust', 2250, 0)
		.disableDistilleryRecipes(true)
		.duration(2000)
		.EUt(GTValues.VA[GTValues.EV])

	//#region Mars Water

	event.recipes.gtceu.centrifuge('mars_heavy_water')
		.inputFluids(Fluid.of('tfg:heavy_ammoniacal_water', 1000))
		.outputFluids(Fluid.of('tfg:heavy_water', 500))
		.itemOutputs('#forge:dusts/ammonium_chloride', '2x #forge:small_dusts/ammonium_chloride')
		.duration(20*9)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.centrifuge('mars_semiheavy_water')
		.inputFluids(Fluid.of('tfg:semiheavy_ammoniacal_water', 1000))
		.outputFluids(Fluid.of('tfg:semiheavy_water', 500))
		.itemOutputs('2x #forge:tiny_dusts/ammonium_chloride')
		.duration(20*9)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.distillery('mars_semiheavy_water')
		.inputFluids(Fluid.of('tfg:semiheavy_ammoniacal_water', 1000))
		.outputFluids(Fluid.of('minecraft:water', 250))
		.duration(20*5)
		.EUt(GTValues.VA[GTValues.MV])

	// Mars plants

	event.recipes.gtceu.mixer('tfg:bio_glowstone')
		.itemInputs('betterend:cave_pumpkin_chunks', '4x species:alphacene_mushroom_block')
		.outputFluids(Fluid.of('gtceu:biomass', 100))
		.itemOutputs('2x minecraft:glowstone_dust')
		.duration(5 * 20)
		.EUt(GTValues.VA[GTValues.EV])
		.dimension('ad_astra:mars')

	// Ad astra woods

	global.AD_ASTRA_WOOD.forEach(wood => {
		woodBuilder(event, wood.name, wood.lumber, wood.logs, wood.log, wood.stripped_log, wood.plank, wood.stair, wood.slab, wood.door, wood.trapdoor, wood.fence, wood.fence_gate, wood.support, wood.pressure_plate, wood.button)
	})

	event.shaped('16x ad_astra:aeronos_ladder', [
		'A A',
		'ABA',
		'A A'
	], {
		A: 'tfg:wood/lumber/aeronos',
		B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Wood, 1),
	}).id('tfg:shaped/aeronos_ladder')

	event.shaped('16x ad_astra:strophar_ladder', [
		'A A',
		'ABA',
		'A A'
	], {
		A: 'tfg:wood/lumber/strophar',
		B: ChemicalHelper.get(TagPrefix.rod, GTMaterials.Wood, 1),
	}).id('tfg:shaped/strophar_ladder')


	generateGreenHouseRecipe(event, '8x tfg:saplings/strophar', 'tfg:semiheavy_ammoniacal_water', 16000,
		'64x ad_astra:strophar_stem', 'tfg:green_house/strophar_mushroom', 'ad_astra:mars', 8,
		'16x ad_astra:strophar_cap', GTValues.VA[GTValues.MV])
	generateGreenHouseRecipe(event, '8x tfg:saplings/aeronos', 'tfg:semiheavy_ammoniacal_water', 16000,
		'64x ad_astra:aeronos_stem', 'tfg:green_house/aeronos_mushroom', 'ad_astra:mars', 8,
		'16x ad_astra:aeronos_cap', GTValues.VA[GTValues.MV])
	generateGreenHouseRecipe(event, '8x tfg:saplings/glacian', 'tfg:semiheavy_ammoniacal_water', 16000,
		'64x ad_astra:glacian_log', 'tfg:green_house/glacian_tree', 'ad_astra:mars', 8,
		'8x species:alphacene_moss_block', GTValues.VA[GTValues.MV])

	// Beneath woods

	generateGreenHouseRecipe(event, '8x tfg:saplings/warped', 'tfg:semiheavy_ammoniacal_water', 16000,
		'64x beneath:wood/log/warped', 'tfg:green_house/warped_fungus', 'ad_astra:mars', 8,
		'32x minecraft:warped_wart_block', GTValues.VA[GTValues.MV])
	generateGreenHouseRecipe(event, '8x tfg:saplings/crimson', 'tfg:semiheavy_ammoniacal_water', 16000,
		'64x beneath:wood/log/crimson', 'tfg:green_house/crimson_fungus', 'ad_astra:mars', 8,
		'32x minecraft:nether_wart_block', GTValues.VA[GTValues.MV])

	// don't pass in the items like doors, trapdoors etc because beneath already has good recipes for those
	woodBuilder(event, 'crimson', 'beneath:wood/lumber/crimson', '#tfc:crimson_logs', 'beneath:wood/log/crimson',
		'beneath:wood/stripped_log/crimson', 'beneath:wood/planks/crimson', null,
		'beneath:wood/planks/crimson_slab', null, null, null, null, null, 'beneath:wood/planks/crimson_pressure_plate',
		'beneath:wood/planks/crimson_button')

	event.recipes.gtceu.lathe(`tfg:cutter/crimson_stripped_wood_from_wood`)
		.itemInputs('beneath:wood/wood/crimson')
		.itemOutputs('beneath:wood/stripped_wood/crimson')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.custom({
		type: 'vintageimprovements:polishing',
		ingredients: [{ item: 'beneath:wood/wood/crimson' }],
		results: [{ item: 'beneath:wood/stripped_wood/crimson' }],
		speed_limits: 0,
		processingTime: 50
	}).id(`tfg:vi/lathe/stripping_crimson_wood`)

	woodBuilder(event, 'warped', 'beneath:wood/lumber/warped', '#tfc:warped_logs', 'beneath:wood/log/warped',
		'beneath:wood/stripped_log/warped', 'beneath:wood/planks/warped', null,
		'beneath:wood/planks/warped_slab', null, null, null, null, null, 'beneath:wood/planks/warped_pressure_plate',
		'beneath:wood/planks/warped_button')

	event.recipes.gtceu.lathe(`tfg:cutter/warped_stripped_wood_from_wood`)
		.itemInputs('beneath:wood/wood/warped')
		.itemOutputs('beneath:wood/stripped_wood/warped')
		.duration(50)
		.EUt(GTValues.VA[GTValues.ULV])

	event.custom({
		type: 'vintageimprovements:polishing',
		ingredients: [{ item: 'beneath:wood/wood/warped' }],
		results: [{ item: 'beneath:wood/stripped_wood/warped' }],
		speed_limits: 0,
		processingTime: 50
	}).id(`tfg:vi/lathe/stripping_warped_wood`)

	// Alphacene

	generateGreenHouseRecipe(event, '8x tfg:saplings/alphacene', 'tfg:semiheavy_ammoniacal_water', 16000,
		'64x species:alphacene_mushroom_block', 'tfg:green_house/alphacene_mushroom', 'ad_astra:mars', 8,
		'8x minecraft:mushroom_stem', GTValues.VA[GTValues.MV])

	//Large Nest
	event.shaped('tfg:large_nest_box',
		[
			'B B',
			'ABA',
			'AAA'
		], {
		A: 'beneath:crimson_thatch',
		B: 'beneath:crimson_straw'
	}).id('tfg:shaped_large_nest_crimson')

	event.shaped('tfg:large_nest_box_warped',
		[
			'B B',
			'ABA',
			'AAA'
		], {
		A: 'beneath:warped_thatch',
		B: 'beneath:warped_straw'
	}).id('tfg:shaped_large_nest_warped')

	// Animal stuff

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

	event.recipes.tfc.loom(
		'8x ad_astra:glacian_fur',
		'8x tfg:glacian_wool',
		8,
		'ad_astra:block/glacian_fur'
	)

	event.recipes.gtceu.assembler('tfg:assembler/glacian_fur')
		.itemInputs('tfg:glacian_wool')
		.circuit(10)
		.itemOutputs('ad_astra:glacian_fur')
		.duration(100)
		.EUt(4)

	event.recipes.tfc.damage_inputs_shapeless_crafting(
		event.shapeless('8x tfc:wool_yarn', [
			'tfc:spindle',
			'tfg:glacian_wool'
		]).id('tfg:shapeless/glacian_wool_to_yarn'))

	event.recipes.gtceu.wiremill('tfg:glacian_wool_yarn')
		.itemInputs('tfg:glacian_wool')
		.itemOutputs('8x tfc:wool_yarn')
		.duration(100)
		.EUt(4)

	event.shaped('minecraft:pink_bed', [
		'AAA',
		'BBB'
	], {
		A: 'ad_astra:glacian_fur',
		B: '#tfc:lumber'
	}).id('tfg:shaped/glacian_bed')
}