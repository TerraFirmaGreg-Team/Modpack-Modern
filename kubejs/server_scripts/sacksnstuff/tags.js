// priority: 0
"use strict";

function registerSNSItemTags(event) {

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
	event.add('sns:allowed_in_ore_sack', '#tfc:igneous_intrusive_rock')
	event.add('sns:allowed_in_ore_sack', '#tfc:igneous_extrusive_rock')
	
	event.add('sns:prevented_in_item_containers', '#tfc:fired_vessels')
	
	event.add('sns:prevented_in_frame_pack','sophisticatedbackpacks:backpack')
	event.add('sns:prevented_in_frame_pack','sophisticatedbackpacks:iron_backpack')
	event.add('sns:prevented_in_frame_pack','sophisticatedbackpacks:gold_backpack')
	event.add('sns:prevented_in_frame_pack','sophisticatedbackpacks:diamond_backpack')
	event.add('sns:prevented_in_frame_pack','sophisticatedbackpacks:netherite_backpack')
	
	event.remove('sns:prevented_in_straw_basket', '#tfc:ore_pieces')
	event.remove('sns:prevented_in_burlap_sack', '#tfc:ore_pieces')
	event.remove('sns:prevented_in_leather_sack', '#tfc:ore_pieces')
	event.remove('sns:prevented_in_straw_basket', '#tfc:small_ore_pieces')
	event.remove('sns:prevented_in_burlap_sack', '#tfc:small_ore_pieces')
	event.remove('sns:prevented_in_leather_sack', '#tfc:small_ore_pieces')

	// Remove this tag to avoid confusion with the other lunchbox
	event.removeAll('sns:lunchbox_food')
}