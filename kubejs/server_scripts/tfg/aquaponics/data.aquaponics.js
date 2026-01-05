"use strict";

/** @param {Internal.TFCDataEventJS} event */
function registerTFGAquaponicsData(event) {

	event.fuel('tfg:flora_pellets', 1415, 1900, 0.95);

	event.foodItem('tfg:fish_roe', (food) => {
		food.hunger(4);
		food.decayModifier(2);
		food.protein(2.5);
		food.saturation(2);
	});

}
