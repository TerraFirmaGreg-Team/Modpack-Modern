"use strict";

function registerTFGFoodMaterials(event) {

	//#region Solids

	event.create('lactose')
		.dust()
		.iconSet(GTMaterialIconSet.FINE)
		.color('0xede8da')
		.secondaryColor('0xeddcad')
		.components('12x carbon', '22x hydrogen', '11x oxygen');

	event.create('tfg:sodium_dihydrogen_citrate')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.BRIGHT)
		.components('6x carbon', '7x hydrogen', '1x sodium', '7x oxygen')
		.color('0xE38818');

	event.create('tfg:citric_acid')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.SHINY)
		.components('6x carbon', '8x hydrogen', '7x oxygen')
		.color('0xE3AD18');

	//#endregion
	//#region Liquids

	event.create('tfg:rich_stock')
		.liquid(new GTFluidBuilder().customStill().state(GTFluidState.LIQUID).temperature(360));

	event.create('tfg:light_stock')
		.liquid(new GTFluidBuilder().customStill().state(GTFluidState.LIQUID).temperature(360));

	event.create('tfg:brown_gravy')
		.liquid(new GTFluidBuilder().customStill().state(GTFluidState.LIQUID).temperature(360));

	//#endregion
};