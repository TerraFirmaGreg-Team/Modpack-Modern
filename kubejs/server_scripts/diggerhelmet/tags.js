// priority: 0

function registerDiggerHelmetItemTags(event) {

	const DISABLED_ITEMS = [
		'diggerhelmet:wool_lining'
	]

	DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

}