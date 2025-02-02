// priority: 0

const registerEveryCompatItemTags = (event) => {
	
	event.removeAllTagsFrom('everycomp:c/gtceu/rubber_window')
	event.removeAllTagsFrom('everycomp:c/gtceu/rubber_window_pane')
	event.add('c:hidden_from_recipe_viewers', 'everycomp:c/gtceu/rubber_window')
	event.add('c:hidden_from_recipe_viewers', 'everycomp:c/gtceu/rubber_window_pane')
}