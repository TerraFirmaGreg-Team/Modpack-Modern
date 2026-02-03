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
	event.removeAll('wan_ancient_beasts:meat_food')
	
	event.add('tfc:foods/raw_meats', 'wan_ancient_beasts:toxlacanth')
	event.add('firmalife:foods/raw_fish', 'wan_ancient_beasts:toxlacanth')
	event.add('tfc:foods/meats', 'wan_ancient_beasts:toxlacanth')
	
	event.add('tfc:foods/cooked_meats', 'wan_ancient_beasts:cooked_toxlacanth')
	event.add('firmalife:foods/cooked_fish', 'wan_ancient_beasts:cooked_toxlacanth')
	event.add('tfc:foods/meats', 'wan_ancient_beasts:cooked_toxlacanth')

	// Eater meat
	event.add('tfc:foods/raw_meats', 'wan_ancient_beasts:raw_ancient_meat')
	event.add('tfc:foods/meats', 'wan_ancient_beasts:raw_ancient_meat')
	event.add('tfc:foods/cooked_meats', 'wan_ancient_beasts:cooked_ancient_meat')
	event.add('tfc:foods/meats', 'wan_ancient_beasts:cooked_ancient_meat')

	event.add('wan_antcient_beasts:meat_food', '#tfc:foods/raw_meats')

	// Eggs
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:eater_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:walker_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:crusher_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:glider_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:soarer_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:surfer_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:snatcher_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:raider_egg')
	event.add('tfg:martian_eggs', 'wan_ancient_beasts:charger_egg')
}

const registerWABEntityTypeTags = (event) => {
	
	event.add('wan_ancient_beasts:eater_ignore', '#wan_ancient_beasts:ancient_mobs')
	event.add('wan_ancient_beasts:eater_ignore', 'tfg:sniffer')
	event.add('wan_ancient_beasts:eater_ignore', 'tfg:wraptor')
	event.add('wan_ancient_beasts:eater_ignore', 'species:springling')
	event.add('wan_ancient_beasts:eater_ignore', 'species:quake')

	event.add('wan_ancient_beasts:raider_ignore', 'tfg:sniffer')
	event.add('wan_ancient_beasts:raider_ignore', 'tfg:wraptor')
	event.add('wan_ancient_beasts:raider_ignore', 'species:springling')
	event.add('wan_ancient_beasts:raider_ignore', 'species:quake')

}

const registerWansAncientBeastsBiomeTags = (event) => {
	event.removeAll('wan_ancient_beasts:toxlacanth_spawn');
	event.removeAll('wan_ancient_beasts:has_structure/abandoned_village');
	event.removeAll('wan_ancient_beasts:has_structure/ancient_nest');
	event.removeAll('wan_ancient_beasts:has_structure/dead_coral');
	event.removeAll('wan_ancient_beasts:has_structure/desert_ruins');
	event.removeAll('wan_ancient_beasts:has_structure/desert_ruins_small');
	event.removeAll('wan_ancient_beasts:has_structure/digsite_badlands');
	event.removeAll('wan_ancient_beasts:has_structure/digsite_desert');
	event.removeAll('wan_ancient_beasts:has_structure/digsite_icespikes');
	event.removeAll('wan_ancient_beasts:has_structure/digsite_jungle');
	event.removeAll('wan_ancient_beasts:has_structure/digsite_oldgrowthtaiga');
	event.removeAll('wan_ancient_beasts:has_structure/digsite_peaks');
	event.removeAll('wan_ancient_beasts:has_structure/digsite_plains');
	event.removeAll('wan_ancient_beasts:has_structure/digsite_savanna');
	event.removeAll('wan_ancient_beasts:has_structure/digsite_taiga');
	event.removeAll('wan_ancient_beasts:has_structure/ice_spike_castle');
	event.removeAll('wan_ancient_beasts:has_structure/mesa_temple');
	event.removeAll('wan_ancient_beasts:has_structure/primal_log');
	event.removeAll('wan_ancient_beasts:has_structure/ruined_castle');
	event.removeAll('wan_ancient_beasts:has_structure/training_outpost');
}