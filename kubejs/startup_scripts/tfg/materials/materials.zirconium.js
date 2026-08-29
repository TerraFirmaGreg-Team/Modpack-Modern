// priority: 0
"use strict";

function registerTFGZirconiumMaterials(event) {

	event.create('tfg:zircon')
		.gem()
		.color(0xF1B6B0)
		.secondaryColor(0x4BABC6)
		.iconSet('gem_horizontal')
		.components('1x zirconium', '1x silicon', '4x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:zirconium_tetrachloride')
		.dust()
		.color(0xF1B6B0)
		.secondaryColor(0x146946)
		.iconSet('rough')
		.components('1x zirconium', '4x chlorine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:silicon_tetrachloride')
		.liquid()
		.color(0x707078)
		.secondaryColor(0x146946)
		.components('1x silicon', '4x chlorine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:zirconium_bromide')
		.dust()
		.color(0xBA776F)
		.secondaryColor(0x146985)
		.iconSet('shiny')
		.components('1x zirconium', '4x bromine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:zirconium_diboride')
		.ingot()
		.color(0xFADED2)
		.secondaryColor(0x4FA883)
		.iconSet('chonky')
		.components('1x zirconium', '2x boron')
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)

}