// priority: 0
"use strict";

const registerTFGFoodFluids = (event) => {

	/**
	 * Function to create alcohol fluids.
	 * @param {*} id Alcohol ID, example: "tfg:whiskey"
	 * @param {*} color Color of the fluid in hexadecimal, example: 0x392e14
	 */
	function createAlcohol(id, color) {

		if (!id || !color) return;

		event.create(id)
			.thinTexture(color)
			.bucketColor(color)
			.noBlock()
			.temperature(293);
	};

	global.ALCOHOLS.forEach(alcohol => {
		if (alcohol.id && alcohol.genBase && alcohol.color) {
			createAlcohol(alcohol.id, alcohol.color);
		}
		if (alcohol.agedId && alcohol.genAged && alcohol.color) {
			createAlcohol(alcohol.agedId, alcohol.color);
		}
		if (alcohol.vintageId && alcohol.genVintage && alcohol.color) {
			createAlcohol(alcohol.vintageId, alcohol.color);
		}
	});
};