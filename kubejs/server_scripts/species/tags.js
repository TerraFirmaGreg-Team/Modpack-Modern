"use strict";

const registerSpeciesBlockTags = (event) => {
	global.SPECIES_DISABLED_BLOCKS.forEach(block => {
		event.removeAllTagsFrom(block)
		event.add('c:hidden_from_recipe_viewers', block)
	})

	event.removeAll('species:wraptor_nesting_blocks')
}

const registerSpeciesItemTags = (event) => {
	global.SPECIES_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('forge:eggs', 'species:birt_egg')
	event.add('firmalife:foods/raw_eggs', 'species:birt_egg')

	event.add('species:cruncher_eats', '#tfc:foods/meat')
}