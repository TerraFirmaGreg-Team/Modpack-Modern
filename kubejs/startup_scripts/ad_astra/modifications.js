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
}