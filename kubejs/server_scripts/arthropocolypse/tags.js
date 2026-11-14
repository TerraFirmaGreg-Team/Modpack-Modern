"use strict";

/**
 * 
 * @param {TagEvent.Item} event 
 */
const registerArthropocolypseItemTags = (event) => {
	event.add('tfc:foods', 'arthropocolypse:ice_crawler_meat')
	event.add('tfc:foods', 'arthropocolypse:cooked_ice_crawler_meat')
	event.add('tfc:foods', 'arthropocolypse:stag_beetle_larva')
	event.add('tfc:foods', 'arthropocolypse:mealworm')
	event.add('tfc:foods', 'arthropocolypse:scarab')
	event.add('tfc:foods', 'arthropocolypse:energy_bar')

	event.add('tfg:foods/toxins', 'arthropocolypse:ice_crawler_meat')
	event.add('tfg:foods/toxins', 'arthropocolypse:cooked_ice_crawler_meat')
	event.add('tfg:foods/toxins', 'arthropocolypse:stag_beetle_larva')
	event.add('tfg:foods/toxins', 'arthropocolypse:mealworm')
	event.add('tfg:foods/toxins', 'arthropocolypse:scarab')

	event.add('tfg:foods/parasites', 'arthropocolypse:ice_crawler_meat')
	event.add('tfg:foods/parasites', 'arthropocolypse:stag_beetle_larva')
	event.add('tfg:foods/parasites', 'arthropocolypse:mealworm')
	event.add('tfg:foods/parasites', 'arthropocolypse:scarab')
	event.add('tfg:foods/parasites', 'arthropocolypse:energy_bar')
}