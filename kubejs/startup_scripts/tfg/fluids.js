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

	event.create('tfg:vintage_whiskey')
    	.thinTexture(0x392e14)
    	.bucketColor(0x392e14)
    	.noBlock()

	event.create('tfg:vintage_beer')
    	.thinTexture(0x6b5d21)
    	.bucketColor(0x6b5d21)
    	.noBlock()

	event.create('tfg:vintage_cider')
    	.thinTexture(0x62651f)
    	.bucketColor(0x62651f)
    	.noBlock()

	event.create('tfg:vintage_rum')
    	.thinTexture(0x461519)
    	.bucketColor(0x461519)
    	.noBlock()

	event.create('tfg:vintage_sake')
    	.thinTexture(0x65785e)
    	.bucketColor(0x65785e)
    	.noBlock()

	event.create('tfg:vintage_corn_whiskey')
    	.thinTexture(0x75705c)
    	.bucketColor(0x75705c)
    	.noBlock()

	event.create('tfg:vintage_rye_whiskey')
    	.thinTexture(0x6c4e2d)
    	.bucketColor(0x6c4e2d)
    	.noBlock()

	event.create('tfg:vintage_mead')
    	.thinTexture(0x6c5d1a)
    	.bucketColor(0x6c5d1a)
    	.noBlock()

   	event.create('tfg:vintage_vodka')
       	.thinTexture(0x76796d)
       	.bucketColor(0x76796d)
       	.noBlock()

	// Earth

	event.create('tfg:muddy_water')
		.thinTexture(0x54410f)
		.bucketColor(0x54410f)
		.viscosity(2000)

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
	event.create('tfg:supercritical_co2')
		.thinTexture(0x3deb96)
		.bucketColor(0x08733f)
		.temperature(236)
		.noBlock()

}