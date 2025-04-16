const registerEndermanOverhaulItemTags = (event) => {

	const DISABLED_ITEMS = [
		'endermanoverhaul:tiny_skull',
		'endermanoverhaul:enderman_tooth',
		'endermanoverhaul:corrupted_blade',
		'endermanoverhaul:corrupted_shield'
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