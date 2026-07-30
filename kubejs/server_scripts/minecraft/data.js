// priority: 0
"use strict";

function registerTFCDataForMinecraft(event) {

	event.foodItem('minecraft:golden_carrot', food => {
		food.hunger(5)
		food.saturation(5)
		food.vegetables(3)
		food.water(20)
		food.decayModifier(0)
	});
	
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
	});

    event.itemHeat('minecraft:chorus_fruit', 1.0, null, null);

	event.foodItem('minecraft:popped_chorus_fruit', food => {
		food.hunger(2)
		food.saturation(1)
		food.fruit(3)
		food.decayModifier(0.5)
	});
	
    event.itemHeat('minecraft:popped_chorus_fruit', 1.0, null, null);
}