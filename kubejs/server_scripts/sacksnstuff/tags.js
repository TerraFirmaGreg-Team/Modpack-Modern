// priority: 0
"use strict";

function registeSNSItemTags(event) {

	global.SNS_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
	
	event.add('sns:allowed_in_ore_sack', 'tfc:kaolin_clay')
	event.add('sns:allowed_in_ore_sack', 'minecraft:clay_ball')
	event.add('sns:allowed_in_ore_sack', 'beneath:cursecoal')
	event.add('sns:allowed_in_ore_sack', 'minecraft:flint')
	
	event.add('sns:allowed_in_ore_sack', '#tfc:powders')
	event.add('sns:allowed_in_ore_sack', '#minecraft:coals')
	event.add('sns:allowed_in_ore_sack', '#tfg:stone_dusts')
	event.add('sns:allowed_in_ore_sack', '#forge:rich_raw_materials')
	event.add('sns:allowed_in_ore_sack', '#forge:raw_materials')
	event.add('sns:allowed_in_ore_sack', '#forge:poor_raw_materials')
	
	event.add('sns:allowed_in_ore_sack', '#tfc:sedimentary_rock')
	event.add('sns:allowed_in_ore_sack', '#tfc:metamorphic_rock')
	event.add('sns:allowed_in_ore_sack', '#tfg:igneous_intrusive_rock')
	event.add('sns:allowed_in_ore_sack', '#tfc:igneous_extrusive_rock')
}