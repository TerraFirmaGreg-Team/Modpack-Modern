// priority: 0
"use strict";

function registerArthropocolypseTFCData(event) {

	// TODO: food balancing

	event.foodItem('arthropocolypse:ice_crawler_meat', food => {
		food.hunger(4)
		food.saturation(0)
		food.protein(0.5)
		food.toxins(5.0)
		food.parasites(5.0)
		food.decayModifier(2);
	})

	event.foodItem("arthropocolypse:cooked_ice_crawler_meat", food => {
		food.hunger(4)
		food.saturation(2)
		food.protein(0.8)
		food.toxins(2.0)
		food.decayModifier(2);
	})

	event.foodItem("arthropocolypse:energy_bar", food => {
		food.hunger(4)
		food.saturation(2)
		food.protein(3.0)
		food.parasites(1.0)
		food.decayModifier(1.2);
	})

	// actually an entity
	event.foodItem("arthropocolypse:stag_beetle_larva", food => {
		food.hunger(4)
		food.saturation(3)
		food.water(10)
		food.protein(2.0)
		food.toxins(2.0)
		food.parasites(2.0)
		food.nauseating(1.0)
		food.decayModifier(0);
	})

	// actually an entity
	event.foodItem("arthropocolypse:mealworm", food => {
		food.hunger(4)
		food.saturation(3)
		food.water(10)
		food.protein(2.0)
		food.toxins(2.0)
		food.parasites(2.0)
		food.nauseating(1.0)
		food.decayModifier(0);
	})

	event.foodItem("arthropocolypse:scarab", food => {
		food.hunger(4)
		food.saturation(2)
		food.water(10)
		food.protein(2.0)
		food.toxins(2.0)
		food.parasites(2.0)
		food.decayModifier(0);
	})
}