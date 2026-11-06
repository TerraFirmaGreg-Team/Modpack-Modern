// priority: 0
"use strict";

function registerTFCHotOrNotItemModifications(event) {
	event.modify('tfchotornot:tongs/red_steel', item => {
		item.maxDamage = 0
	})

	event.modify('tfchotornot:tongs/blue_steel', item => {
		item.maxDamage = 0
	})
}