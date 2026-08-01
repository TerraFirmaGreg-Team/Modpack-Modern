// priority: 0
"use strict";

// I will add a general tag to all jellies in next update
const allJellies = [
	'biotite',
	'certus',
	'glowberry',
	'herbal',
	'ice',
	'latex',
	'lava',
	'pentetic',
	'phosphorum',
	'plant',
	'rock',
	'spring',
	'pyritie',
	'eevee'
]

function registerJelliesItemTags(event) {
	event.add("jellies:jellie_food", "#forge:mushrooms");
	event.add("jellies:jellie/slime_ball/plant", "#tfc:compost_greens")
	event.add("jellies:jellie/slime_ball/phosphorum", "#tfc:compost_browns")
}

function registerJelliesEntityTags(event) {
	event.add('tfc:vanilla_monsters', 'jellies:rock')

	allJellies.forEach(jellie => {
		event.add('ad_astra:lives_without_oxygen', `jellies:${jellie}`)
		event.add('ad_astra:can_survive_extreme_cold', `jellies:${jellie}`)
		event.add('ad_astra:can_survive_extreme_heat', `jellies:${jellie}`)
		event.add('ad_astra:can_survive_in_space', `jellies:${jellie}`)
		event.add('ad_astra:can_survive_in_acid_rain', `jellies:${jellie}`)
	})
}