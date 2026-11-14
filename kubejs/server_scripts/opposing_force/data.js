// priority: 0
"use strict";

function registerOpposingForceTFCData(event) {

	// TODO: food balancing

	event.foodItem('opposing_force:inferno_pie', food => {
		food.hunger(2)
		food.saturation(2)
		food.decayModifier(2)
		food.dairy(0.8)
		food.grain(0.8)
		food.blazing(1)
		food.spicy(5)
	})

	event.foodItem('opposing_force:inferno_pie_slice', food => {
		food.hunger(2)
		food.saturation(2)
		food.decayModifier(2)
		food.dairy(0.8)
		food.grain(0.8)
		food.blazing(1)
		food.spicy(5)
	})

	event.foodItem('opposing_force:terror_leg', food => {
		food.hunger(4)
		food.saturation(0)
		food.decayModifier(2)
		food.parasites(1.0)
		food.protein(2.0)
	})

	event.foodItem('opposing_force:fried_terror_leg', food => {
		food.hunger(4)
		food.saturation(2)
		food.decayModifier(1.5)
		food.protein(3.0)
	})

	event.foodItem('opposing_force:spicy_terror_leg', food => {
		food.hunger(4)
		food.saturation(2)
		food.decayModifier(1.5)
		food.protein(3.0)
		food.spicy(1)
	})
}