"use strict";

const registerTACZItemTags = (event) => {
	
	//event.add('c:hidden_from_recipe_viewers', 'tacz:ammo_box')
	event.add('c:hidden_from_recipe_viewers', 'tacz:gun_smith_table')
	event.add('c:hidden_from_recipe_viewers', 'tacz:workbench_a')
	event.add('c:hidden_from_recipe_viewers', 'tacz:workbench_b')
	event.add('c:hidden_from_recipe_viewers', 'tacz:workbench_c')

	event.add('tfc:usable_on_tool_rack', 'tacz:ammo_box')
	event.add('tfc:usable_on_tool_rack', 'tacz:modern_kinetic_gun')
	
}

const registerTACZBlockTags = (event) => {
	
	event.add('tacz:interact_key/whitelist', '#tfc:tool_racks')
}