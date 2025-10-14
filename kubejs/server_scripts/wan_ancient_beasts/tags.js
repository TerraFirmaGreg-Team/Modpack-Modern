"use strict";

const registerWABBlockTags = (event) => {
	global.WAB_DISABLED_BLOCKS.forEach(block => {
		event.removeAllTagsFrom(block)
		event.add('c:hidden_from_recipe_viewers', block)
	})

	// don't put sand layers on these, otherwise they'll fall through
	event.add('minecraft:snow_layer_cannot_survive_on', 'wan_ancient_beasts:quick_sand')
	event.add('minecraft:snow_layer_cannot_survive_on', 'wan_ancient_beasts:quick_red_sand')
	event.add('minecraft:mineable/shovel', 'wan_ancient_beasts:quick_sand')
	event.add('minecraft:mineable/shovel', 'wan_ancient_beasts:quick_red_sand')
}

const registerWABItemTags = (event) => {
	global.WAB_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.removeAll('wan_ancient_beasts:paleontologist_common')
	event.removeAll('wan_ancient_beasts:paleontologist_rare')
	event.removeAll('wan_ancient_beasts:paleontologist_items')
	event.removeAll('wan_ancient_beasts:eater_food')
	
	event.add('tfc:foods/raw_meats', 'wan_ancient_beasts:toxlacanth')
	event.add('firmalife:foods/raw_fish', 'wan_ancient_beasts:toxlacanth')
	event.add('tfc:foods/meats', 'wan_ancient_beasts:toxlacanth')
	
	event.add('tfc:foods/cooked_meats', 'wan_ancient_beasts:cooked_toxlacanth')
	event.add('firmalife:foods/cooked_fish', 'wan_ancient_beasts:cooked_toxlacanth')
	event.add('tfc:food/meats', 'wan_ancient_beasts:cooked_toxlacanth')

	// Eater meat
	event.add('tfc:foods/raw_meats', 'wan_ancient_beasts:raw_ancient_meat')
	event.add('tfc:foods/meats', 'wan_ancient_beasts:raw_ancient_meat')
	event.add('tfc:foods/cooked_meats', 'wan_ancient_beasts:cooked_ancient_meat')
	event.add('tfc:foods/meats', 'wan_ancient_beasts:cooked_ancient_meat')

	event.add('wan_ancient_beasts:surfer_food', '#firmalife:foods/raw_fish')
	event.add('wan_ancient_beasts:eater_food', '#tfg:martian_animal_foods')

	// Eggs
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:eater_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:walker_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:crusher_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:glider_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:soarer_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:surfer_egg')
}

const registerWABEntityTypeTags = (event) => {
	
	event.add('wan_ancient_beasts:eater_ignore', '#wan_ancient_beasts:ancient_mobs')
	event.add('wan_ancient_beasts:eater_ignore', 'tfg:sniffer')
	event.add('wan_ancient_beasts:eater_ignore', 'tfg:wraptor')
	event.add('wan_ancient_beasts:eater_ignore', 'species:springling')
	event.add('wan_ancient_beasts:eater_ignore', 'species:quake')

}