// priority: 0

function registerVintageImprovementsItemTags(event) {

	global.VINTAGE_IMPROVEMENTS_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('c:hidden_from_recipe_viewers', '#vintageimprovements:springs')
	event.add('c:hidden_from_recipe_viewers', '#vintageimprovements:small_springs')
	event.add('c:hidden_from_recipe_viewers', '#forge:wires')
	
	event.add('vintageimprovements:custom_hammering_blocks', '#tfc:anvils')
}


function registerVintageImprovementsBlockTags(event) {

	global.VINTAGE_IMPROVEMENTS_DISABLED_BLOCKS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('vintageimprovements:custom_hammering_blocks', '#tfc:anvils')
}


function registerVintageImprovementsFluidTags(event) {

	global.VINTAGE_IMPROVEMENTS_DISABLED_FLUIDS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})
}