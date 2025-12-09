// priority: 0
"use strict";

function registerAdAstraBlockModifications(event) {

	// these lamps don't actually emit light for some reason
	global.MINECRAFT_DYE_NAMES.forEach(color => {
		event.modify(`ad_astra:${color}_industrial_lamp`, block => {
			block.lightEmission = 15
		})
		event.modify(`ad_astra:small_${color}_industrial_lamp`, block => {
			block.lightEmission = 15
		})
	})

	event.modify('ad_astra:strophar_mushroom', block => {
		block.lightEmission = 0
	})
	event.modify('ad_astra:strophar_stem', block => {
		block.lightEmission = 0
	})
	event.modify('ad_astra:strophar_cap', block => {
		block.lightEmission = 0
	})
	event.modify('ad_astra:aeronos_mushroom', block => {
		block.lightEmission = 0
	})
	event.modify('ad_astra:aeronos_stem', block => {
		block.lightEmission = 0
	})
	event.modify('ad_astra:aeronos_cap', block => {
		block.lightEmission = 0
	})

	const space_suits = [
		'ad_astra:space_helmet',
		'ad_astra:space_suit',
		'ad_astra:space_pants',
		'ad_astra:space_boots',
		'ad_astra:netherite_space_helmet',
		'ad_astra:netherite_space_suit',
		'ad_astra:netherite_space_pants',
		'ad_astra:netherite_space_boots'
	]
	space_suits.forEach(e => {
		event.modify(e, item => {
			item.maxDamage = item.maxDamage * 2
		})
	})
}