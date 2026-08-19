// priority: 0
"use strict";

function registerJelliesItemTags(event) {
	const NUTRITIONAL_MASH_INGREDIENTS = [
		// Overall Liked
		'#tfc:foods/fruits',
		'#forge:mushrooms',

		// Moon
		'minecraft:ochre_froglight',
		'minecraft:verdant_froglight',
		'minecraft:pearlescent_froglight',
		'species:birt_egg',

		// Mars
		'tfg:saplings/crimson',
		'tfg:saplings/warped',
		'tfg:saplings/alphacene',
		'tfg:saplings/strophar',
		'tfg:saplings/aeronos',
		'tfg:saplings/glacian',
		'betterend:aurant_polypore',
		'betterend:purple_polypore'
	]

	NUTRITIONAL_MASH_INGREDIENTS.forEach(ingredient => {
		event.add('tfg:items/jellie_nutritional_mash_ingredient', ingredient)
	})

	event.add('tfc:compost_greens_high', 'jellies:jellie/slime_ball/plant')
	event.add('tfc:compost_browns_high', 'jellies:jellie/slime_ball/phosphorum')
}

function registerJelliesEntityTags(event) {
	event.add('tfc:vanilla_monsters', 'jellies:rock')

	event.add('ad_astra:lives_without_oxygen', '#jellies:jellie')
	event.add('ad_astra:can_survive_extreme_cold', '#jellies:jellie')
	event.add('ad_astra:can_survive_extreme_heat', '#jellies:jellie')
	event.add('ad_astra:can_survive_in_space', '#jellies:jellie')
	event.add('ad_astra:can_survive_in_acid_rain', '#jellies:jellie')
}