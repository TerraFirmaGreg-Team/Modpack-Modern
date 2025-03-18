// priority: 0

const registerBeneathRecipes = (event) => {

	event.remove({ id: 'beneath:collapse/basalt' })
	event.remove({ id: 'beneath:collapse/nether_bricks' })

	event.remove({ id: 'beneath:crafting/ancient_altar' })


	event.remove({ id: 'beneath:crafting/agonizing_fertilizer' })
	// TODO: add new one


	event.remove({ id: 'beneath:crafting/blackstone' })
	event.remove({ id: 'beneath:crafting/blackstone_uncraft' })
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

	event.recipes.gtceu.assembler("loose_blackstone_to_bricks")
		.itemInputs('beneath:blackstone_pebble')
		.itemOutputs('beneath:blackstone_brick')
		.circuit(1)
		.duration(40)
		.EUt(8)
}