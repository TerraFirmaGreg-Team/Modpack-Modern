// priority: 0
"use strict";

const registerBeneathRecipes = (event) => {

	global.BENEATH_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	event.remove({ id: 'beneath:collapse/basalt' })
	event.remove({ id: 'beneath:collapse/nether_bricks' })
	event.remove({ id: 'beneath:crafting/nether_bricks' })
	event.remove({ id: 'beneath:crafting/blackstone' })
	event.remove({ id: 'beneath:crafting/blackstone_uncraft' })
	event.remove({ id: 'beneath:crafting/blackstone_bricks' })
	event.remove({ id: 'beneath:crafting/blackstone_bricks_from_soot' })
	event.remove({ id: 'beneath:crafting/blackstone_from_soot' })
	event.remove({ id: 'beneath:crafting/blackstone_plate' })
	event.remove({ id: 'beneath:crafting/blackstone_button' })
	event.remove({ id: 'beneath:crafting/blackstone_aqueduct' })
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

	event.recipes.tfc.landslide('beneath:soul_clay', 'beneath:soul_clay')


	Ingredient.of('#beneath:mushrooms').stacks.forEach(element => {
		const itemId = element.id;
		const recipeId = `greenhouse_${itemId.replace(':', '_')}`;

		generateGreenHouseRecipe(event, element.withCount(4), '#tfc:any_fresh_water', 8000, element.withCount(24),
			recipeId, 'minecraft:the_nether', 8, element.withCount(4), GTValues.VH[GTValues.LV]);
	});

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