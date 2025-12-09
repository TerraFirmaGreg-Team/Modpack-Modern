// priority: 0
"use strict";

const registerTFGFluids = (event) => {

	// Moon
	event.create('tfg:cryogenized_fluix')
		.thickTexture(0xde8cfb)
		.bucketColor(0xde8cfb)
		.luminosity(14)
		.temperature(10)

	// Mars
	event.create('tfg:heavy_ammoniacal_water')
		.thinTexture(0x08733f)
		.bucketColor(0x08733f)
		.temperature(236)
		.noBlock()

	// Venus

}