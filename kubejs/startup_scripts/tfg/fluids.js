// priority: 0
"use strict";

const registerTFGFluids = (event) => {

	registerTFGFoodFluids(event);

	// Photographic developers
	event.create('tfg:bw_photographic_developer')
		.thinTexture(0xa84d11)
		.bucketColor(0xa84d11)
		.noBlock();

	event.create('tfg:color_photographic_developer')
		.thinTexture(0xba6900)
		.bucketColor(0xba6900)
		.noBlock();

	// Moon
	event.create('tfg:cryogenized_fluix')
		.thickTexture(0xde8cfb)
		.bucketColor(0xde8cfb)
		.temperature(10)
		.noBlock();

	// Mars
	event.create('tfg:heavy_ammoniacal_water')
		.thinTexture(0x08733f)
		.bucketColor(0x08733f)
		.temperature(236)
		.noBlock();

	// Venus
	event.create('tfg:supercritical_co2')
		.thinTexture(0x3deb96)
		.bucketColor(0x08733f)
		.temperature(236)
		.noBlock();

	// Microbial cultivator bacteria
	event.create('tfg:photolithoautotroph')
		.thinTexture(0x4dd0e1)
		.bucketColor(0x4dd0e1)
		.noBlock();
	event.create('tfg:photolithoheterotroph')
		.thinTexture(0x81c784)
		.bucketColor(0x81c784)
		.noBlock();
	event.create('tfg:photoorganoautotroph')
		.thinTexture(0x26a69a)
		.bucketColor(0x26a69a)
		.noBlock();
	event.create('tfg:photoorganoheterotroph')
		.thinTexture(0xaed581)
		.bucketColor(0xaed581)
		.noBlock();
	event.create('tfg:chemolithoautotroph')
		.thinTexture(0xffb74d)
		.bucketColor(0xffb74d)
		.noBlock();
	event.create('tfg:chemolithoheterotroph')
		.thinTexture(0xff8a65)
		.bucketColor(0xff8a65)
		.noBlock();
	event.create('tfg:chemoorganoautotroph')
		.thinTexture(0xe57373)
		.bucketColor(0xe57373)
		.noBlock();
	event.create('tfg:chemoorganoheterotroph')
		.thinTexture(0xba68c8)
		.bucketColor(0xba68c8)
		.noBlock();

};