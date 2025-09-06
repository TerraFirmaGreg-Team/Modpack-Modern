"use strict";

const registerBeneathBlockTags = (event) => {

	global.BENEATH_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})


	event.add('forge:ores', 'beneath:ore/nether_cursecoal')
	event.add('forge:ores', 'beneath:ore/blackstone_sylvite')
	event.add('beneath:mushrooms', 'minecraft:red_mushroom')
	event.add('beneath:mushrooms', 'minecraft:brown_mushroom')
	event.add('beneath:poisonous_mushrooms', 'minecraft:red_mushroom')
	
    event.add('tfc:can_landslide', 'beneath:soul_clay')

	event.remove('beneath:sparks_on_sulfur')

	event.add('beneath:blackstone_decor', 'minecraft:blackstone');
	event.remove('beneath:blackstone')

	event.remove('minecraft:leaves', 'beneath:wood/leaves/crimson')
	event.remove('minecraft:leaves', 'beneath:wood/leaves/warped')
	event.add('tfg:do_not_destroy_in_space', 'beneath:wood/leaves/crimson')
	event.add('tfg:do_not_destroy_in_space', 'beneath:wood/leaves/warped')
}

const registerBeneathItemTags = (event) => {

	global.BENEATH_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add("forge:raw_materials/cursecoal", "beneath:cursecoal")
	event.add("forge:raw_materials/sylvite", "tfc:ores/sylvite")
	event.add('forge:ores', 'beneath:ore/nether_cursecoal')
	event.add('forge:ores', 'beneath:ore/blackstone_sylvite')

	event.add('forge:mushrooms', '#beneath:mushrooms')
	
	event.remove('beneath:sparks_on_sulfur')

	event.add('tfc:firepit_kindling', 'beneath:crimson_straw')
	event.add('tfc:firepit_kindling', 'beneath:warped_straw')
	event.add('tfc:pit_kiln_straw', 'beneath:crimson_straw')
	event.add('tfc:pit_kiln_straw', 'beneath:warped_straw')
	
	event.remove('minecraft:leaves', 'beneath:wood/leaves/crimson')
	event.remove('minecraft:leaves', 'beneath:wood/leaves/warped')
	event.add('tfg:do_not_destroy_in_space', 'beneath:wood/leaves/crimson')
	event.add('tfg:do_not_destroy_in_space', 'beneath:wood/leaves/warped')
	event.add('tfc:sewing_tables', 'beneath:wood/sewing_table/crimson')
	event.add('tfc:sewing_tables', 'beneath:wood/sewing_table/warped')
}