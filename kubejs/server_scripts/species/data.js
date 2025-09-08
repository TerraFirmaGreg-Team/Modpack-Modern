const registerSpeciesFoodData = (event) => {
	
	event.foodItem('species:cracked_wraptor_egg', food => {
		food.hunger(4)
		food.saturation(1)
		food.water(5)
		food.decayModifier(3)
	})

}