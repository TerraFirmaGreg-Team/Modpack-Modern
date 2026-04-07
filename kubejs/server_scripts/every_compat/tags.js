// priority: 0
"use strict";

const registerEveryCompatItemTags = (event) => {
	
	event.removeAllTagsFrom('everycomp:c/gtceu/rubber_window')
	event.removeAllTagsFrom('everycomp:c/gtceu/rubber_window_pane')
	event.add('c:hidden_from_recipe_viewers', 'everycomp:c/gtceu/rubber_window')
	event.add('c:hidden_from_recipe_viewers', 'everycomp:c/gtceu/rubber_window_pane')

	global.TFC_WOOD_TYPES.forEach(wood => {
		event.add('forge:glass', `everycomp:c/tfc/${wood}_window`)
		event.add('forge:glass_panes', `everycomp:c/tfc/${wood}_window_pane`)
	})
	global.AFC_WOOD_TYPES.forEach(wood => {
		event.add('forge:glass', `everycomp:c/afc/${wood}_window`)
		event.add('forge:glass_panes', `everycomp:c/afc/${wood}_window_pane`)
	})
	const AD_ASTRA = [
		'glacian',
		'aeronos',
		'strophar'
	]
	AD_ASTRA.forEach(wood => {
		event.add('forge:glass', `everycomp:c/ad_astra/${wood}_window`)
		event.add('forge:glass_panes', `everycomp:c/ad_astra/${wood}_window_pane`)
	});

	event.add('forge:glass', `everycomp:c/wan_ancient_beasts/ginkgo_window`)
	event.add('forge:glass_panes', `everycomp:c/wan_ancient_beasts/ginkgo_window_pane`)
	event.add('forge:glass', `everycomp:c/domum_ornamentum/cactus_window`)
	event.add('forge:glass_panes', `everycomp:c/domum_ornamentum/cactus_window_pane`)
	event.add('forge:glass', `everycomp:c/domum_ornamentum/cactus_extra_window`)
	event.add('forge:glass_panes', `everycomp:c/domum_ornamentum/cactus_extra_window_pane`)
}