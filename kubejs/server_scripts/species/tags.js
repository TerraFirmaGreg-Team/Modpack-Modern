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

	event.add('forge:eggs', 'species:birt_egg')
	event.add('firmalife:foods/raw_eggs', 'species:birt_egg')
	
	event.add('species:goober_breed_items', 'betterend:flammalix')
	event.add('species:goober_breed_items', 'betterend:small_amaranita_mushroom')
	event.add('species:goober_breed_items', 'betterend:chorus_mushroom_product')
	event.add('species:goober_breed_items', 'betterend:chorus_mushroom_product')

}