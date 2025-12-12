"use strict";

function registerTFGEuropaMaterials(event) {

	event.create('tfg:etrium')
		//.components('1x niobium', '1x molybdenum', '1x ruthenium', '3x carbon', '1x monochloramine')
		.color(0x7BFCD7)
		.secondaryColor(0x3582D2)
		.iconSet(GTMaterialIconSet.getByName('tfc_silver'))
		.ingot()
		.flags(
			GTMaterialFlags.FORCE_GENERATE_BLOCK,
			GTMaterialFlags.GENERATE_PLATE, 
			GTMaterialFlags.GENERATE_ROD
		)

}