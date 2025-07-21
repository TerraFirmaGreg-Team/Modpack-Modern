// priority: 0
"use strict";

function registerCreateItemModifications(event) {

	// Change durability to match armor
	event.modify('create:copper_diving_helmet', item => {
		item.maxDamage = 150
	})
	event.modify('create:copper_backtank', item => {
		item.maxDamage = 215
	})
	event.modify('create:copper_diving_boots', item => {
		item.maxDamage = 160
	})
	event.modify('create:netherite_diving_helmet', item => {
		item.maxDamage = 748
	})
	event.modify('create:netherite_backtank', item => {
		item.maxDamage = 1088
	})
	event.modify('create:netherite_diving_boots', item => {
		item.maxDamage = 860
	})

}