// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS_} event 
 */
function registerTFGBeneathRecipes(event) {
	
	const mossLichens = [
		'tfc:plant/moss','tfc:plant/spanish_moss',
		'tfc:plant/reindeer_lichen','tfc:plant/cobblestone_lichen'
	];

	mossLichens.forEach((mossLichen) => {
		event.shapeless('1x minecraft:moss_block', [
			'#tfc:dirt',
			`${mossLichen}`
		]).id(`tfg:shapeless/moss_block/${global.linuxUnfucker(mossLichen)}`)
	})

	const MossCarpets = [
		'minecraft:moss','tfg:pale_moss','wan_ancient_beasts:olden_moss'
	];

	MossCarpets.forEach((mossCarpet) => {
		event.shapeless(`${mossCarpet}_block`, [
			'#tfc:dirt',
			`${mossCarpet}_carpet`
		]).id(`tfg:shapeless/${global.linuxUnfucker(mossCarpet)}_block`)
	})

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