// priority: 0
"use strict";


/**
 * @param {any} event
 * @param {string} id
 * @param {string} planet
 */
function createPlant(event, id, planet) {
	return event.create(`betterend:${id}`, 'tfg:decorative_plant')
		.tagItem(`tfg:${planet}_plants`)
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('tfc:can_be_snow_piled')
}

/**
 * @param {any} event
 * @param {string} id
 * @param {string} planet
 */
function createWaterPlant(event, id, planet) {
	return event.create(`betterend:${id}`, 'tfg:decorative_plant')
		.tagItem(`tfg:${planet}_plants`)
		.tagBlock('minecraft:replaceable')
		.tagBlock('tfg:do_not_destroy_in_space')
		.tagBlock('tfc:can_be_ice_piled')
}