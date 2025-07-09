const registerEndermanOverhaulItemTags = (event) => {

	const DISABLED_ITEMS = [
		'endermanoverhaul:tiny_skull',
		'endermanoverhaul:enderman_tooth',
		'endermanoverhaul:corrupted_blade',
		'endermanoverhaul:corrupted_shield',

		'endermanoverhaul:badlands_hood',
		'endermanoverhaul:savannah_hood',
		'endermanoverhaul:snowy_hood',

		'endermanoverhaul:bubble_pearl',
		'endermanoverhaul:icy_pearl',
		'endermanoverhaul:crimson_pearl',
		'endermanoverhaul:warped_pearl'
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