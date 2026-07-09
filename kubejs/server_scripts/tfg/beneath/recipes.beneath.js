// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS_} event 
 */
function registerTFGBeneathRecipes(event) {
	const nonCarpet_MossCarpets = [
		'tfc:plant/moss','tfc:plant/spanish_moss',
		'tfc:plant/reindeer_lichen','tfc:plant/cobblestone_lichen'
	];

	for (let i = 0; i < nonCarpet_MossCarpets.length; i++) {
		event.shapeless('1x minecraft:moss_block', [
			'#tfc:dirt',
			nonCarpet_MossCarpets[i]
		]).id(`tfg:shapeless/moss_block/${nonCarpet_MossCarpets[i]}`)
	}

	const realMossCarpets = [
		'minecraft:moss_','tfg:pale_moss_','wan_ancient_beasts:olden_moss_'
	];

	for (let i = 0; i < realMossCarpets.length; i++) {
		event.shapeless(`${realMossCarpets[i]}block`, [
			'#tfc:dirt',
			realMossCarpets[i] + "carpet"
		]).id(`tfg:shapeless/${realMossCarpets[i]}block`)
	}

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