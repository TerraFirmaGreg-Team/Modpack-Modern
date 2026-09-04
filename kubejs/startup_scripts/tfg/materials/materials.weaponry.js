// priority: 0
"use strict";

function registerTFGWeaponryMaterials(event) {

	event.create('tfg:hexamine') //Hexamethylenetetramine 
		.dust()
		.components('6x carbon', '12x hydrogen', '4x nitrogen')
		.iconSet(GTMaterialIconSet.BRIGHT)
		.color(0x8cdeff)
		
	event.create('tfg:rdx')
		.dust()
		.components('3x carbon', '6x hydrogen', '6x nitrogen', '6x oxygen')
		.iconSet(GTMaterialIconSet.DULL)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x53b9e6)

	event.create('tfg:methylene_dinitrate')
		.dust()
		.components('1x carbon', '2x hydrogen', '2x nitrogen', '6x oxygen')
		.iconSet(GTMaterialIconSet.DULL)
		.color(0xa9d6d1)
		
	event.create('tfg:ammonium_nitrate')
		.dust()
		.components('2x nitrogen', '4x hydrogen', '3x oxygen')
		.iconSet(GTMaterialIconSet.BRIGHT)
		.color(0xb8cccc)
	
}