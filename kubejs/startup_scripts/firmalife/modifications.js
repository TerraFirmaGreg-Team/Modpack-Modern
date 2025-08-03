// priority: 0
"use strict";

function registerFirmalifeItemModifications(event) {

	event.modify('firmalife:spoon', item => {
		item.setCraftingRemainder('firmalife:spoon')
	})
	event.modify('firmalife:mixing_bowl', item => {
		item.setCraftingRemainder('firmalife:mixing_bowl')
	})
}