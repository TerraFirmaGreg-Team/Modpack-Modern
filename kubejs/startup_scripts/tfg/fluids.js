// priority: 0
"use strict";

const registerTFGFluids = (event) => {

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