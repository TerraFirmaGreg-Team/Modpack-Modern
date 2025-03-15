// priority: 0

const registerBeneathRecipes = (event) => {

	event.remove({ id: 'beneath:collapse/basalt' })
	event.remove({ id: 'beneath:collapse/nether_bricks' })

	event.recipes.tfc.collapse('tfc:rock/cobble/basalt', 'minecraft:basalt')
	event.recipes.tfc.collapse('minecraft:cobbled_deepslate', '#forge:ores_in_ground/deepslate')
	event.recipes.tfc.collapse('minecraft:blackstone', '#forge:ores_in_ground/pyroxenite')
	event.recipes.tfc.collapse('minecraft:dripstone_block', '#forge:ores_in_ground/dripstone')



	event.remove({ id: 'beneath:crafting/agonizing_fertilizer' })
	// TODO: add new one


	event.remove({ id: 'beneath:crafting/blackstone' })
	event.remove({ id: 'beneath:crafting/blackstone_bricks_from_soot' })
	event.remove({ id: 'beneath:crafting/blackstone_from_soot' })

	event.remove({ id: 'beneath:crafting/hellbricks' })
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
}