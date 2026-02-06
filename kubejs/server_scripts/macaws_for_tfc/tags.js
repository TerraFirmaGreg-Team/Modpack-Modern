// priority: 0
"use strict";

function registerMacawsForTFCItemTags(event) {
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.remove(`mcw_tfc_aio:${color}_roofs`, `mcw_tfc_aio:roofs/${color}_roofs/${color}_roof_slab`);
	})
}