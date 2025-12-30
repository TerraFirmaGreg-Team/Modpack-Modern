// priority: 0
"use strict";

const registerTFGRPPMaterials = (event) => {

	// #region RPP
	
	event.create('tfg:rhodium_solution')
		.liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
		.color(0xbf693b)
	
	// #endregion
	
}
