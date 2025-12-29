"use strict";

const registerSpeciesBlockTags = (event) => {
	global.SPECIES_DISABLED_BLOCKS.forEach(block => {
		event.removeAllTagsFrom(block)
		event.add('c:hidden_from_recipe_viewers', block)
	})

	event.removeAll('species:wraptor_nesting_blocks')
	
	event.add('species:petrified_egg_hatch', '#tfcambiental:warm_stuff')
}

const registerSpeciesItemTags = (event) => {
	global.SPECIES_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('c:hidden_from_recipe_viewers', 'species:alphacene_mushroom')

	event.add('forge:eggs', 'species:birt_egg')
	event.add('firmalife:foods/raw_eggs', 'species:birt_egg')
	event.add('tfg:martian_eggs', 'species:cruncher_egg')
	event.add('tfg:martian_eggs', 'species:springling_egg')
	event.add('tfg:martian_eggs', 'species:petrified_egg')
	
	event.add('species:goober_breed_items', '#forge:mushrooms')
	event.add('species:cruncher_eats', '#tfc:foods/meats')
	
	event.add('tfc:compost_greens', 'species:alphacene_mushroom_block')
	event.add('tfc:compost_greens_low', 'species:alphacene_mushroom_growth')
	event.add('tfc:compost_greens', 'species:alphacene_moss_block')

	event.add('minecraft:wart_blocks', 'species:alphacene_mushroom_block')

	event.add('species:stackatick_tempt_items', 'tfc:sweetener')

	event.add('forge:ender_pearls', 'species:wicked_swapper')
}
