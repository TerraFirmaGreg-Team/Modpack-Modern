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

	/**
	 * Array of vintage alcohols to create with createVintageAlcohol.
	 * @type {Array<{name: string, color: number}>} vintageAlcohols - Array of objects containing alcohol name and color.
	 */
	const vintageAlcohols = [
		{name: 'whiskey', color: 0x392e14},
		{name: 'beer', color: 0x6b5d21},
		{name: 'cider', color: 0x62651f},
		{name: 'rum', color: 0x461519},
		{name: 'sake', color: 0x65785e},
		{name: 'corn_whiskey', color: 0x75705c},
		{name: 'rye_whiskey', color: 0x6c4e2d},
		{name: 'mead', color: 0x6c5d1a},
		{name: 'vodka', color: 0x76796d}
	];

	vintageAlcohols.forEach(alcohol => {
		createVintageAlcohol(alcohol.name, alcohol.color);
	});
};