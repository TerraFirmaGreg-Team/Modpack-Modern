// priority: 0
"use strict";

function registerAliencraftFluidTags(event) {
	event.add('c:hidden_from_recipe_viewers', 'aliencraft_kepler:molecular_acid')
}

function registerAliencraftItemTags(event) {

	event.add('tfc:foods', 'aliencraft_kepler:alien_lily_fruit')
	event.add('tfc:foods', 'aliencraft_kepler:spiky_fruit')
	event.add('tfc:foods', 'aliencraft_kepler:fungi_jelly')

	event.add('tfg:foods/toxins', 'aliencraft_kepler:alien_lily_fruit')
	event.add('tfg:foods/toxins', 'aliencraft_kepler:spiky_fruit')
	event.add('tfg:foods/toxins', 'aliencraft_kepler:fungi_jelly')

	event.add('createaddition:plants', "aliencraft_kepler:cactus_flower")
	event.add('createaddition:plants', "aliencraft_kepler:thorn_flower_branch")
}