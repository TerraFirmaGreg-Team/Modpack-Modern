// priority: 0
"use strict";

const registerTFGSMRAdditiveMaterials = (event) => {
	
	event.create('tfg:ozone')
		.gas()
		.components('3x oxygen')
		.color(0x00FBFF)
		
	event.create('tfg:tin_chloride')
		.dust()
		.components('1x tin', '2x chlorine')
		.color(0x77CF67)
		.iconSet(GTMaterialIconSet.ROUGH)
		
	event.create('tfg:cyclohexanone')
		.liquid()
		.components('6x carbon', '10x hydrogen', '1x oxygen')
		.color(0xFCB16F)
	
	event.create('tfg:cyclohex_diperoxide')
		.liquid()
		.components('6x carbon', '12x hydrogen', '4x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xE0974C)
	
}