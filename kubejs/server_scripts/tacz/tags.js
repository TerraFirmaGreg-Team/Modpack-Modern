"use strict";

const registerTACZItemTags = (event) => {
	
	event.add('tfc:usable_on_tool_rack', 'tacz:ammo_box')
	event.add('tfc:usable_on_tool_rack', 'tacz:modern_kinetic_gun')
	event.add('tfc:usable_on_tool_rack', 'applied_ammo_box:ammo_box')
	
}

const registerTACZBlockTags = (event) => {
	
	event.add('tacz:interact_key/whitelist', '#tfc:tool_racks')
}