// priority: 0
"use strict";

const registerTFGFluids = (event) => {

	registerTFGNuclearFluids(event)

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
	event.create('tfg:semiheavy_ammoniacal_water')
		.thinTexture(0x704f786c)
		.color(0x4f786c)
		.temperature(213)
		.renderType('translucent')
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

    event.create('tfg:super_heated_slurry', 'tfc:spring')
        .stillTexture('tfg:block/planets/venus/super_heated_slurry_still') 
        .flowingTexture('tfg:block/planets/venus/super_heated_slurry_flow')
        .bucketColor(0xc4d984)
		.renderType('translucent')
	//#endregion
}