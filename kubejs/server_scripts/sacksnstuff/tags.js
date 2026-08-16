// priority: 0
"use strict";

function registerSNSItemTags(event) {

	
	/** @type {String[]} */
	const allowedInOreSack = [
		'tfc:kaolin_clay',
		'minecraft:clay_ball',
		'#tfc:powders',
		'#minecraft:coals',
		'#tfg:stone_dusts',
		'#forge:rich_raw_materials',
		'#forge:raw_materials',
		'#forge:poor_raw_materials',
		'#tfc:sedimentary_rock',
		'#tfc:metamorphic_rock',
		'#tfc:igneous_intrusive_rock',
		'#tfc:igneous_extrusive_rock',
		'#forge:chipped_gems',
		'#forge:flawed_gems',
		'#forge:gems',
		'#forge:flawless_gems',
		'#forge:exquisite_gems',
		'tfg:huge_quartz',
		'beneath:cursecoal'
	];

	allowedInOreSack.forEach(entry => {
		event.add('sns:allowed_in_ore_sack', entry);
	});

	event.add('sns:allowed_in_seed_pouch', '#minecraft:saplings')
	event.add('sns:allowed_in_seed_pouch', '#tfc:wild_fruits')
	
	event.add('sns:prevented_in_item_containers', '#tfc:fired_vessels')
	
	event.add('sns:prevented_in_frame_pack','sophisticatedbackpacks:backpack')
	event.add('sns:prevented_in_frame_pack','sophisticatedbackpacks:iron_backpack')
	event.add('sns:prevented_in_frame_pack','sophisticatedbackpacks:gold_backpack')
	event.add('sns:prevented_in_frame_pack','sophisticatedbackpacks:diamond_backpack')
	event.add('sns:prevented_in_frame_pack','sophisticatedbackpacks:netherite_backpack')

	event.add('sns:prevented_in_frame_pack','#forge:repair_kit_materials')
	
	event.remove('sns:prevented_in_straw_basket', '#tfc:ore_pieces')
	event.remove('sns:prevented_in_burlap_sack', '#tfc:ore_pieces')
	event.remove('sns:prevented_in_leather_sack', '#tfc:ore_pieces')
	event.remove('sns:prevented_in_straw_basket', '#tfc:small_ore_pieces')
	event.remove('sns:prevented_in_burlap_sack', '#tfc:small_ore_pieces')
	event.remove('sns:prevented_in_leather_sack', '#tfc:small_ore_pieces')

	// Remove this tag to avoid confusion with the other lunchbox
	event.removeAll('sns:lunchbox_food')

	event.add('curios:belt', 'sns:quiver');
}