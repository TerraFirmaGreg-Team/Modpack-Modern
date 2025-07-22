// priority: 0
"use strict";

function registerTFCDataForCreateAddition(event) {

	event.itemHeat('createaddition:cake_base', 1.0, null, null)
	event.itemHeat('createaddition:cake_base_baked', 1.0, null, null)

	event.foodItem('createaddition:cake_base', food => {
		food.hunger(1)
		food.saturation(0)
		food.decayModifier(3)
	})

	event.foodItem('createaddition:cake_base_baked', food => {
		food.hunger(4)
		food.saturation(1)
		food.decayModifier(2)
		food.dairy(2)
		food.grain(2)
	})

	event.foodItem('tfc:cake', food => {
		food.hunger(2)
		food.saturation(2)
		food.decayModifier(2)
		food.dairy(0.8)
		food.grain(0.8)
	})

	event.foodItem('createaddition:chocolate_cake', food => {
		food.hunger(2)
		food.saturation(2)
		food.decayModifier(2)
		food.dairy(0.8)
		food.grain(0.8)
	})

	event.foodItem('createaddition:honey_cake', food => {
		food.hunger(2)
		food.saturation(2)
		food.decayModifier(2)
		food.dairy(0.8)
		food.grain(0.8)
	})

	event.foodItem('species:birtday_cake', food => {
		food.hunger(2)
		food.saturation(2)
		food.decayModifier(2)
		food.dairy(0.8)
		food.grain(0.8)
	})

	event.foodItem('species:birtday_cake_slice', food => {
		food.hunger(2)
		food.saturation(2)
		food.decayModifier(2)
		food.dairy(0.8)
		food.grain(0.8)
		food.fruit(1)
	})
}