// priority: 0
"use strict";

function registerTFCDataForAdAstra(event) {

	event.itemSize('ad_astra:tier_1_rocket', 'huge', 'very_heavy')
	event.itemSize('ad_astra:tier_2_rocket', 'huge', 'very_heavy')
	event.itemSize('ad_astra:tier_3_rocket', 'huge', 'very_heavy')
	event.itemSize('ad_astra:tier_4_rocket', 'huge', 'very_heavy')

	event.itemSize('ad_astra:tier_1_rover', 'very_large', 'very_heavy')

	event.itemSize('ad_astra:launch_pad', 'very_large', 'very_heavy')

	event.foodItem('ad_astra:cheese', food => {
		food.hunger(3)
		food.saturation(2)
		food.dairy(3)
		food.decayModifier(0.9)
	})

	global.AD_ASTRA_WOOD.forEach(wood => {
		event.fuel(wood.logs, 800, 1500, null)
	})
}