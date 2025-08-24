"use strict";

const registerWABBlockTags = (event) => {
	global.WAB_DISABLED_BLOCKS.forEach(block => {
		event.removeAllTagsFrom(block)
		event.add('c:hidden_from_recipe_viewers', block)
	})
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
}