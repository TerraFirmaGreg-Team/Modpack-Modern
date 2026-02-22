// priority: 0
"use strict";

function registerTFGBouleMaterials(event) {

	event.create('tfg:silane')
		.color(0x8383AE)
		.secondaryColor(0x707078)
		.gas()
		.components('1x silicon', '4x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:chlorosilane')
		.color(0xD8CB70)
		.secondaryColor(0x707078)
		.gas(GTFluidBuilder().attribute(GTFluidAttributes.ACID))
		.components('3x hydrogen', '1x silicon', '1x chlorine')
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

	event.create('tfg:dichlorosilane')
		.color(0xE7DE9E)
		.secondaryColor(0x707078)
		.gas(GTFluidBuilder().attribute(GTFluidAttributes.ACID))
		.components('2x hydrogen', '1x silicon', '2x chlorine')
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

	event.create('tfg:trichlorosilane')
		.color(0xCCC592)
		.secondaryColor(0x707078)
		.liquid(GTFluidBuilder().attribute(GTFluidAttributes.ACID))
		.components('1x hydrogen', '1x silicon', '3x chlorine')
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

	event.create('tfg:polysilicon')
		.color(0x8C8C94)
		.secondaryColor(0x10293b)
		.iconSet(GTMaterialIconSet.METALLIC)
		.liquid(new GTFluidBuilder().temperature(2273))
		.dust()
		.components('1x silicon')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
}