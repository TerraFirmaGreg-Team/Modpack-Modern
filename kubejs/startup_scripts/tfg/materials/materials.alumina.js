// priority: 0
"use strict";

function registerTFGAluminaMaterials(event) {
	event.create('tfg:aluminium_sulfate')
		.dust()
		.color(0xfaf9c3)
		.secondaryColor(0xfaf2f9)
		.iconSet(GTMaterialIconSet.FINE)
		.components('2x aluminium', '3x sulfate')
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:aluminium_hydroxide')
		.dust()
		.color(0xd3f3f5)
		.secondaryColor(0xedf9fa)
		.iconSet(GTMaterialIconSet.FINE)
		.components('1x aluminium', '3x oxygen', '3x hydrogen')
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:sodium_sulfate')
		.dust()
		.color(0xfafaf7)
		.secondaryColor(0xf7f7f2)
		.iconSet(GTMaterialIconSet.BRIGHT)
		.components('2x sodium', '1x sulfur', '4x oxygen')

	event.create('tfg:alumina')
		.dust()
		.color(0xf7f7f2)
		.secondaryColor(0xe8eafa)
		.iconSet(GTMaterialIconSet.OPAL)
		.components('2x aluminium', '3x oxygen')
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION,
			GTMaterialFlags.GENERATE_PLATE)
}