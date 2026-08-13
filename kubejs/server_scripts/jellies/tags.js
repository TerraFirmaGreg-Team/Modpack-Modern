// priority: 0
"use strict";

function registerJelliesItemTags(event) {
	event.add("jellies:jellie_food", "#forge:mushrooms");
	event.add("jellies:jellie/slime_ball/plant", "#tfc:compost_greens_high")
	event.add("jellies:jellie/slime_ball/phosphorum", "#tfc:compost_browns_high")
}

function registerJelliesEntityTags(event) {
	event.add('tfc:vanilla_monsters', 'jellies:rock')

	event.add('ad_astra:lives_without_oxygen', '#jellies:jellie')
	event.add('ad_astra:can_survive_extreme_cold', '#jellies:jellie')
	event.add('ad_astra:can_survive_extreme_heat', '#jellies:jellie')
	event.add('ad_astra:can_survive_in_space', '#jellies:jellie')
	event.add('ad_astra:can_survive_in_acid_rain', '#jellies:jellie')
}