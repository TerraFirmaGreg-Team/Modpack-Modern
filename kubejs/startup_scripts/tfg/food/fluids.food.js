// priority: 0
"use strict";

const registerTFGFoodFluids = (event) => {

	/**
	 * Function to create vintage alcohol fluids.
	 * @param {*} name Alcohol name, example: "whiskey"
	 * @param {*} color Color of the fluid in hexadecimal, example: 0x392e14
	 */
	function createVintageAlcohol(name, color) {

		if (!name || !color) return;

		event.create(`tfg:vintage_${name}`)
			.thinTexture(color)
			.bucketColor(color)
			.noBlock()
			.temperature(293);
	};

	global.ALCOHOLS.forEach(alcohol => {
		createVintageAlcohol(alcohol.name, alcohol.color);
	});
};