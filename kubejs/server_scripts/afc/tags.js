"use strict";

/**
 * 
 * @param {TagEvent.Item} event 
 */
const registerAFCItemTags = (event) => {

	// Misc

	event.add("tfg:rubber_plants", "tfc:plant/goldenrod")
	event.add("tfg:rubber_plants", "tfc:plant/dandelion")
}
/**
 * 
 * @param {TagEvent.Fluid} event 
 */
const registerAFCFluidTags = (event) => {
	event.removeAllTagsFrom("afc:latex")
	event.add("c:hidden_from_recipe_viewers", "afc:latex")
}
