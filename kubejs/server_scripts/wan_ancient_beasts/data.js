// priority: 0
"use strict";

const registerWABData = (event) => {
	
	event.foodItem('wan_ancient_beasts:toxlacanth', food => {
		food.hunger(2)
		food.protein(1.5)
		food.decayModifier(3)
	})

	event.foodItem('wan_ancient_beasts:cooked_toxlacanth', food => {
		food.hunger(4)
		food.saturation(2)
		food.protein(2.5)
		food.decayModifier(2.25)
	})
	
	// Eater meat
	event.foodItem('wan_ancient_beasts:raw_ancient_meat', food => {
		food.hunger(2)
		food.protein(2)
		food.decayModifier(3)
	})

	event.foodItem('wan_ancient_beasts:cooked_ancient_meat', food => {
		food.hunger(4)
		food.saturation(3)
		food.protein(5)
		food.decayModifier(2.25)
	})


	event.itemSize('wan_ancient_beasts:reinforced_shield', 'very_large', 'very_heavy')
}