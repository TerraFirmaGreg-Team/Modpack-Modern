// priority: 0
"use strict";

const registerBeneathRecipes = (event) => {

	global.BENEATH_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	event.remove({ id: 'beneath:collapse/basalt' })
	event.remove({ id: 'beneath:collapse/nether_bricks' })
	event.remove({ id: 'beneath:crafting/ancient_altar' })
	event.remove({ id: 'beneath:crafting/blackstone' })
	event.remove({ id: 'beneath:crafting/blackstone_uncraft' })
	event.remove({ id: 'beneath:crafting/blackstone_bricks_from_soot' })
	event.remove({ id: 'beneath:crafting/blackstone_from_soot' })
	event.remove({ id: 'beneath:crafting/blackstone_plate' })
	event.remove({ id: 'beneath:crafting/blackstone_button' })
	event.remove({ id: 'beneath:crafting/hellbricks' })
	event.remove({ id: 'beneath:crafting/nether_brick' })
	event.remove({ id: 'beneath:quern/slime' })
	
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

	generateGreenHouseRecipe(event, '8x minecraft:warped_fungus', 16000, '64x beneath:wood/log/warped', 'tfg:green_house/warped_fungus', 'ad_astra:mars', 8, '16x minecraft:warped_wart_block', GTValues.VA[GTValues.MV])
	generateGreenHouseRecipe(event, '8x minecraft:crimson_fungus', 16000, '64x beneath:wood/log/crimson', 'tfg:green_house/crimson_fungus', 'ad_astra:mars', 8, '16x minecraft:nether_wart_block', GTValues.VA[GTValues.MV])
}