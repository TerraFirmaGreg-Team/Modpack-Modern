// priority: 0
"use strict";

const registerTFGAquaponicsMaterials = (event) => {

	/*    event.create('mysterious_ooze')
			.liquid(new GTFluidBuilder().temperature(293))
			.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(293))
			.color(0x500bbf)
			.fluidTemp(69420)
			.dust()
			.cableProperties(GTValues.V[GTValues.LV], 69, 0, true) // Voltage, Amperage, EU loss, Is Superconductor.
			.gem(2, 4000) 
			.element(GTElements.C) 
			.ore(2, 3) 
			.color(0x7D2DDB)
			.iconSet(GTMaterialIconSet.LIGNITE)
			.ingot()
			.components('1x andesite', '1x iron')
			.color(0x839689)
			.iconSet(GTMaterialIconSet.DULL)
			.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
	*/

	// Nitrate Fluids
	event.create('tfg:nitrate_rich_water')
		.liquid(new GTFluidBuilder().customStill().temperature(310))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

	event.create('tfg:nitrate_rich_semiheavy_ammoniacal_water')
		.liquid(new GTFluidBuilder().customStill().temperature(310))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

}