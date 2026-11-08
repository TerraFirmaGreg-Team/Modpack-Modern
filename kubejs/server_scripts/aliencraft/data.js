// priority: 0
"use strict";

function registerAliencraftTFCData(event) {

	// TODO: food balancing

	event.foodItem('aliencraft_kepler:alien_lily_fruit', food => {
		food.hunger(4)
		food.saturation(1)
		food.fruit(1.7)
		food.toxins(0.5)
		food.water(20)
		food.decayModifier(2.25);
	})

	event.foodItem("aliencraft_kepler:spiky_fruit", food => {
		food.hunger(4)
		food.saturation(1)
		food.fruit(1.2)
		food.toxins(0.5)
		food.water(20)
		food.decayModifier(2.25);
	})

	event.foodItem('aliencraft_kepler:fungi_jelly', food => {
		food.hunger(4)
		food.saturation(1)
		food.fruit(1.7)
		food.toxins(0.5)
		food.water(20)
		food.decayModifier(2.25);
	})

	event.itemSize('aliencraft_kepler:alien_goo_gun', 'large', 'heavy')
}