// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerMacawsForTFCRecipes(event) {

	event.replaceInput({ mod: 'mcw_tfc_aio' }, 'minecraft:stick', '#forge:rods/wooden')
	event.replaceInput({ mod: 'mcw_tfc_aio' }, 'minecraft:string', '#forge:string')
	event.replaceInput({ mod: 'mcw_tfc_aio' }, 'minecraft:glass', '#forge:glass')
	event.replaceInput({ mod: 'mcw_tfc_aio' }, 'minecraft:glass_pane', '#forge:glass_panes')

	global.TFC_WOOD_TYPES.forEach(wood => {
		event.shaped(`8x mcw_tfc_aio:fences/${wood}_fences/${wood}_wired_fence`, [
			'ABA',
			'C C'
		], {
			A: '#forge:rods/wooden',
			B: 'createaddition:barbed_wire',
			C: `tfc:wood/log/${wood}`
		}).id(`tfg:shaped/${wood}_wired_fence`)
	})
}