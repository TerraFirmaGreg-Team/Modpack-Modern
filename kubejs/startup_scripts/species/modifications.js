// priority: 0
"use strict";

function registerSpeciesBlockModifications(event) {

	event.modify('species:alphacene_mushroom', block => {
		block.lightEmission = 0
	})
	event.modify('species:alphacene_mushroom_block', block => {
		block.lightEmission = 0
	})
	event.modify('species:alphacene_mushroom_growth', block => {
		block.lightEmission = 0
	})
}

function registerSpeciesItemModifications(event) {
	event.modify('species:harpoon', item => {
		item.maxDamage = 1024
	})
}