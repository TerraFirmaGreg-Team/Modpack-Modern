"use strict";

/**
 * 
 * @param {TagEvent.Item} event 
 */
const registerAFCItemTags = (event) => {

	// Latex Tag
	event.add("tfg:latex_logs", "#tfc:kapok_logs")
    event.add("tfg:latex_logs", "#afc:hevea_logs")
    event.add("tfg:latex_logs", "#afc:rubber_fig_logs")

	// Misc

	event.add("tfg:rubber_plants", "tfc:plant/goldenrod")
	event.add("tfg:rubber_plants", "tfc:plant/dandelion")
}


/**
 * @
 * @param {TagEvent.Block} event 
 */
const registerAFCBlockTags = (event) => {
    event.add("tfg:latex_logs", "#tfc:kapok_logs")
    event.add("tfg:latex_logs", "#afc:hevea_logs")
    event.add("tfg:latex_logs", "#afc:rubber_fig_logs")
}

/**
 * 
 * @param {TagEvent.Fluid} event 
 */
const registerAFCFluidTags = (event) => {
	event.removeAllTagsFrom("afc:latex")
	event.add("c:hidden_from_recipe_viewers", "afc:latex")
}
