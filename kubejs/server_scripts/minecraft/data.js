// priority: 0
"use strict";

function registerTFCDataForMinecraft(event) {
	event.foodItem('minecraft:golden_apple', food => {
		food.hunger(2)
		food.fruit(2)
		food.decayModifier(0.6)
	})

	// treasure

	event.foodItem('minecraft:enchanted_golden_apple', food => {
		food.hunger(10)
		food.saturation(10)
		food.fruit(5)
		food.water(20)
		food.decayModifier(0)
	})

	event.foodItem('minecraft:golden_carrot', food => {
		food.hunger(5)
		food.saturation(5)
		food.vegetables(3)
		food.water(20)
		food.decayModifier(0)
	})

	event.foodItem('minecraft:glow_berries', food => {
		food.hunger(1)
		food.fruit(0.5)
		food.water(5)
		food.decayModifier(2)
	})

	event.foodItem('minecraft:chorus_fruit', food => {
		food.hunger(1.5)
		food.fruit(2)
		food.water(5)
	})

	event.foodItem('minecraft:popped_chorus_fruit', food => {
		food.hunger(2)
		food.saturation(1)
		food.fruit(3)
		food.decayModifier(0.5)
	})

	event.foodItem('minecraft:red_mushroom', food => {
		food.hunger(1.5)
		food.vegetables(1)
		food.water(5)
		food.decayModifier(2)
	})

	event.foodItem('minecraft:brown_mushroom', food => {
		food.saturation(2)
		food.hunger(2)
		food.vegetables(1)
		food.water(2)
		food.decayModifier(2)
	})
}