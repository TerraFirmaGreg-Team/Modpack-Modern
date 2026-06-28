// priority: 0
"use strict";

function registerTFCAmbientalRecipes(event) {
	event.replaceInput({ id: 'tfcambiental:crafting/silk_cowl' }, 'tfc:silk_cloth', '#tfg:lightweight_cloth')
	event.replaceInput({ id: 'tfcambiental:crafting/silk_shirt' }, 'tfc:silk_cloth', '#tfg:lightweight_cloth')
	event.replaceInput({ id: 'tfcambiental:crafting/silk_pants' }, 'tfc:silk_cloth', '#tfg:lightweight_cloth')
	event.replaceInput({ id: 'tfcambiental:crafting/silk_shoes' }, 'tfc:silk_cloth', '#tfg:lightweight_cloth')
	
	event.remove({ id: 'tfcambiental:sewing/wool_hat' })
	event.remove({ id: 'tfcambiental:sewing/wool_sweater' })
	event.remove({ id: 'tfcambiental:sewing/wool_pants' })
	event.remove({ id: 'tfcambiental:sewing/wool_boots' })
}