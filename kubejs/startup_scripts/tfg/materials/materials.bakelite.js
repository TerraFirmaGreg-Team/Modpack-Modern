// priority: 0
"use strict";

function registerTFGBakeliteMaterials(event) {
	event.create('tfg:bakelite')
		.polymer()
		.fluid()
		.color(0xF29104)
		.secondaryColor(0xD96005)
		.components('1x phenol', '1x formaldehyde')
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION,
			GTMaterialFlags.NO_SMELTING,
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_FOIL
		)

	event.create('tfg:phenolic_resin')
		.fluid()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('1x phenol', '1x formaldehyde')
		.color(0xFCD7A3)
}