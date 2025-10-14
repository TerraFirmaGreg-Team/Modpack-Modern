// priority: 0
"use strict";

const registerBeneathRecipes = (event) => {

	global.BENEATH_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	event.remove({ id: 'beneath:collapse/basalt' })
	event.remove({ id: 'beneath:collapse/nether_bricks' })
	event.remove({ id: 'beneath:crafting/blackstone' })
	event.remove({ id: 'beneath:crafting/blackstone_uncraft' })
	event.remove({ id: 'beneath:crafting/blackstone_bricks_from_soot' })
	event.remove({ id: 'beneath:crafting/blackstone_from_soot' })
	event.remove({ id: 'beneath:crafting/blackstone_plate' })
	event.remove({ id: 'beneath:crafting/blackstone_button' })
	event.remove({ id: 'beneath:crafting/hellbricks' })
	event.remove({ id: 'beneath:crafting/nether_brick' })
	event.remove({ id: 'beneath:quern/slime' })
	event.remove({ id: 'beneath:crafting/wood/crimson_planks' })
	event.remove({ id: 'beneath:crafting/wood/crimson_slab' })
	event.remove({ id: 'beneath:crafting/wood/crimson_button' })
	event.remove({ id: 'beneath:crafting/wood/crimson_pressure_plate' })
	event.remove({ id: 'beneath:crafting/wood/crimson_lumber_log' })
	event.remove({ id: 'beneath:crafting/wood/crimson_lumber_planks' })
	event.remove({ id: 'beneath:crafting/wood/crimson_slab_undo' })
	event.remove({ id: 'beneath:crafting/wood/warped_planks' })
	event.remove({ id: 'beneath:crafting/wood/warped_slab' })
	event.remove({ id: 'beneath:crafting/wood/warped_button' })
	event.remove({ id: 'beneath:crafting/wood/warped_pressure_plate' })
	event.remove({ id: 'beneath:crafting/wood/warped_lumber_log' })
	event.remove({ id: 'beneath:crafting/wood/warped_lumber_planks' })
	event.remove({ id: 'beneath:crafting/wood/warped_slab_undo' })
	
	event.shaped('beneath:unposter', [
		'ABA',
		'AAA',
		'CCC'
	], {
		A: '#tfc:lumber',
		B: 'tfc:composter',
		C: '#tfc:mud'
	}).id('beneath:crafting/unposter')

	event.shapeless('beneath:hellbricks', [
		'#forge:stone_bricks',
		'minecraft:magma_cream',
		'tfc:powder/sulfur',
		'tfc:soot'
	]).id('tfg:shapeless/hellbricks_from_soot')

	event.shapeless('beneath:hellbricks', [
		'#forge:stone_bricks',
		'minecraft:magma_cream',
		'tfc:powder/sulfur',
		'tfc:powder/wood_ash'
	]).id('tfg:shapeless/hellbricks_from_wood_ash')

	event.recipes.gtceu.assembler("loose_blackstone_to_bricks")
		.itemInputs('beneath:blackstone_pebble')
		.itemOutputs('beneath:blackstone_brick')
		.circuit(1)
		.duration(40)
		.EUt(8)

	event.recipes.tfc.landslide('beneath:soul_clay', 'beneath:soul_clay')

	generateGreenHouseRecipe(event, '8x tfg:saplings/warped', 'tfg:semiheavy_ammoniacal_water', 16000,
		'64x beneath:wood/log/warped', 'tfg:green_house/warped_fungus', 'ad_astra:mars', 8, 
		'32x minecraft:warped_wart_block', GTValues.VA[GTValues.MV])
	generateGreenHouseRecipe(event, '8x tfg:saplings/crimson', 'tfg:semiheavy_ammoniacal_water', 16000,
		'64x beneath:wood/log/crimson', 'tfg:green_house/crimson_fungus', 'ad_astra:mars', 8,
		'32x minecraft:nether_wart_block', GTValues.VA[GTValues.MV])

	Ingredient.of('#beneath:mushrooms').stacks.forEach(element => {
		const itemId = element.id;
		const recipeId = `greenhouse_${itemId.replace(':', '_')}`;

		generateGreenHouseRecipe(event, element.withCount(4), '#tfc:any_fresh_water', 8000, element.withCount(24),
			recipeId, 'minecraft:the_nether', 8, element.withCount(4), GTValues.VH[GTValues.LV]);
	});

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

	event.shaped('beneath:wood/sewing_table/crimson', [
		' AB',
		'CCC',
		'D D'
	], {
		A: '#forge:leather',
		B: '#forge:tools/knives',
		C: 'beneath:wood/planks/crimson',
		D: 'beneath:wood/log/crimson'
	}).id('tfg:shaped/crimson_sewing_table')


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

	event.shaped('beneath:wood/sewing_table/warped', [
		' AB',
		'CCC',
		'D D'
	], {
		A: '#forge:leather',
		B: '#forge:tools/knives',
		C: 'beneath:wood/planks/warped',
		D: 'beneath:wood/log/warped'
	}).id('tfg:shaped/warped_sewing_table')
}