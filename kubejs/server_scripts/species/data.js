const registerSpeciesData = (event) => {
	
	event.foodItem('species:cracked_wraptor_egg', food => {
		food.hunger(4)
		food.saturation(1)
		food.water(5)
		food.decayModifier(3)
	})
	
	event.itemSize('species:ricoshield', 'very_large', 'very_heavy')
	event.itemSize('species:deflector_dummy', 'very_large', 'very_heavy')
	event.itemSize('species:crankbow', 'large', 'heavy')
}