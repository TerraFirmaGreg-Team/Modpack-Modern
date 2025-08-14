// priority: 0
"use strict";

const registerTFGFluids = (event) => {

	// TODO: remove these as the other planets come out

	event.create('tfg:nether_slurry')
		.thickTexture(0x6b281b)
		.bucketColor(0x6b281b)
		.temperature(1000)
		.luminosity(7)
		.noBlock()
		
	event.create('tfg:enriched_nether_slurry')
		.thickTexture(0x99594d)
		.bucketColor(0x99594d)
		.temperature(1000)
		.luminosity(7)
		.noBlock()
		
	event.create('tfg:ender_slurry')
		.thickTexture(0x1b5c51)
		.bucketColor(0x1b5c51)
		.luminosity(2)
		.noBlock()
		
	event.create('tfg:enriched_ender_slurry')
		.thickTexture(0x3a9178)
		.bucketColor(0x3a9178)
		.luminosity(2)
		.noBlock()

	//#region Mars

	event.create('tfg:heavy_ammoniacal_water')
		.thinTexture(0x08733f)
		.bucketColor(0x08733f)
		.temperature(236)
		.noBlock()

	//#endregion

	//#region Venus
    event.create('tfg:sulfur_fumes')
        .stillTexture('tfg:block/planets/venus/sulfur_fumes_still') 
        .flowingTexture('tfg:block/planets/venus/sulfur_fumes_flow')
        .bucketColor(0xc4d984)
		.gaseous()
		.viscosity(0)
		.density(0)
		.renderType('translucent')

    event.create('tfg:geyser_slurry', 'tfc:spring')
        .stillTexture('tfg:block/planets/venus/geyser_slurry_still')
        .flowingTexture('tfg:block/planets/venus/geyser_slurry_flow')
        .bucketColor(0xc4d984)
		.temperature(1000)
		.renderType('translucent')
	//#endregion
}