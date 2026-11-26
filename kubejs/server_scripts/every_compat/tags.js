// priority: 0
"use strict";

function registerEveryCompatItemTags(event) {
	
	event.removeAllTagsFrom('everycomp:c/gtceu/rubber_window')
	event.removeAllTagsFrom('everycomp:c/gtceu/rubber_window_pane')
	event.add('c:hidden_from_recipe_viewers', 'everycomp:c/gtceu/rubber_window')
	event.add('c:hidden_from_recipe_viewers', 'everycomp:c/gtceu/rubber_window_pane')
	
	event.add('forge:glass', `everycomp:c/domum_ornamentum/cactus_window`)
	event.add('forge:glass_panes', `everycomp:c/domum_ornamentum/cactus_window_pane`)
	event.add('forge:glass', `everycomp:c/domum_ornamentum/cactus_extra_window`)
	event.add('forge:glass_panes', `everycomp:c/domum_ornamentum/cactus_extra_window_pane`)
}