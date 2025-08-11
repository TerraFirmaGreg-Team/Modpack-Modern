// priority: 0
"use strict";

function registerBeneathItemModifications(event) {

	// Make sure lavaproof hide is in fact lavaproof
	event.modify('beneath:cursed_hide', item => {
		item.fireResistant = true
	})

}