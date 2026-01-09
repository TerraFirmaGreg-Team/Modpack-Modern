// priority: 0
"use strict";

const registerTFGFluids = (event) => {

	event.create('tfg:bw_photographic_developer')
		.thinTexture(0xa84d11)
		.bucketColor(0xa84d11)
		.noBlock()

	event.create('tfg:color_photographic_developer')
		.thinTexture(0xba6900)
		.bucketColor(0xba6900)
		.noBlock()

	// Moon
	event.create('tfg:cryogenized_fluix')
		.thickTexture(0xde8cfb)
		.bucketColor(0xde8cfb)
		.temperature(10)
		.noBlock()

	// Mars
	event.create('tfg:heavy_ammoniacal_water')
		.thinTexture(0x08733f)
		.bucketColor(0x08733f)
		.temperature(236)
		.noBlock()

	// Venus

}