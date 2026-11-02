// priority: 0
"use strict";

const registerJelliesData = (event) => {
	
	// Needs to count as a food item in order to go inside a feeding trough
	event.foodItem('jellies:jellie/food/nutritional_mash', food => {
		food.hunger(0)
		food.saturation(0)
		food.water(0)
		food.decayModifier(0)
	})
}