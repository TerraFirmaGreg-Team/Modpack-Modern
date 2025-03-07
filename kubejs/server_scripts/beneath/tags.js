const registerBeneathBlockTags = (event) => {

	global.BENEATH_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})


	event.add('forge:ores', 'beneath:ore/nether_cursecoal')
	event.add('forge:ores', 'beneath:ore/nether_sylvite')

    // Beneath makes these collapse for some reason?
    event.remove('beneath:blackstone')
}

const registerBeneathItemTags = (event) => {

	global.BENEATH_DISABLED_ITEMS.forEach(item => {
		event.removeAllTagsFrom(item)
		event.add('c:hidden_from_recipe_viewers', item)
	})

	event.add('forge:ores', 'beneath:ore/nether_cursecoal')
	event.add('forge:ores', 'beneath:ore/nether_sylvite')
}