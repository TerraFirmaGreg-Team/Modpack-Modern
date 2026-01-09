"use strict";

const registerEndermanOverhaulItemTags = (event) => {

	const DISABLED_ITEMS = [
		'endermanoverhaul:corrupted_blade',

		'endermanoverhaul:bubble_pearl',
		'endermanoverhaul:icy_pearl'
	]

	DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
}


const registerEndermanOverhaulBlockTags = (event) => {

	event.add('endermanoverhaul:cave_enderman_holdable', 'forge:ores')
	event.add('endermanoverhaul:cave_enderman_holdable', 'minecraft:base_stone_nether')

}