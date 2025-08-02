// priority: 0
"use strict";

function registerTFCAmbientalRecipes(event) {
	event.replaceInput({ id: 'tfcambiental:crafting/silk_cowl' }, 'tfc:silk_cloth', '#tfg:lightweight_cloth')
	event.replaceInput({ id: 'tfcambiental:crafting/silk_shirt' }, 'tfc:silk_cloth', '#tfg:lightweight_cloth')
	event.replaceInput({ id: 'tfcambiental:crafting/silk_pants' }, 'tfc:silk_cloth', '#tfg:lightweight_cloth')
	event.replaceInput({ id: 'tfcambiental:crafting/silk_shoes' }, 'tfc:silk_cloth', '#tfg:lightweight_cloth')
}