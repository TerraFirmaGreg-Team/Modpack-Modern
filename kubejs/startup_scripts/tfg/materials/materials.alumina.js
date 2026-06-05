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

	event.create('tfg:chromium_3_oxide')
		.dust()
		.color(0xD192D8)
		.secondaryColor(0xD1CDD1)
		.iconSet(GTMaterialIconSet.FINE)
		.components('2x chromium', '3x oxygen')
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:ferrochrome')
		.dust()
		.color(0x8C9E9A)
		.secondaryColor(0xD6BEDB)
		.iconSet(GTMaterialIconSet.METALLIC)
		.components('1x iron', '2x chromium')

	event.create('tfg:sodium_chromate')
		.dust()
		.color(0xD2D252)
		.secondaryColor(0xE8E4D9)
		.iconSet(GTMaterialIconSet.METALLIC)
		.components('2x sodium', '1x chromium', '4x oxygen')
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:wollastonite')
		.dust()
		.color(0xD3D3CC)
		.secondaryColor(0xE8E4D9)
		.iconSet(GTMaterialIconSet.METALLIC)
		.components('1x calcium', '1x silicon', '3x oxygen')

	event.create('tfg:sodium_dichromate')
		.dust()
		.color(0xE84B0A)
		.secondaryColor(0xF2C4B0)
		.iconSet(GTMaterialIconSet.DULL)
		.components('2x sodium', '2x chromium', '7x oxygen')
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:mixed_garnet')
		.dust()
		.color(0x642910)
		.secondaryColor(0xF0946D)
		.iconSet(GTMaterialIconSet.FLINT)
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION)
}