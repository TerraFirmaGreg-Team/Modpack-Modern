// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS_} event 
 */
function registerTFGBeneathRecipes(event) {
	
	// Moss

	event.shapeless('1x minecraft:moss_block', [
		'#tfc:dirt',
		'#tfc:moss'
	]).id(`tfg:shapeless/moss_block`)

	event.shaped('6x minecraft:moss_carpet', [
		'AA'
	], {
		A: 'minecraft:moss_block'
	}).id(`tfg:shaped/moss_carpet`)
	
	event.shaped('6x tfg:pale_moss_carpet', [
		'AA'
	], {
		A: 'tfg:pale_moss_block'
	}).id(`tfg:shaped/pale_moss_carpet`)

	event.shaped('6x wan_ancient_beasts:olden_moss_carpet', [
		'AA'
	], {
		A: 'wan_ancient_beasts:olden_moss_block'
	}).id(`tfg:shaped/olden_moss_carpet`)
}