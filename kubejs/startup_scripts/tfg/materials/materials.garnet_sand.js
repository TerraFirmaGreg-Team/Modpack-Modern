// priority: 0
"use strict";

const registerTFGGarnetSandMaterials = (event) => {

	//#region Step 1

	event.create('tfg:garnet_leach_liquor')
		.liquid(new GTFluidBuilder().temperature(370))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xA6673D)
		.secondaryColor(0xD9B08C)

	event.create('tfg:enriched_garnet_leach_liquor')
		.liquid(new GTFluidBuilder().temperature(370))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x8C4F2E)
		.secondaryColor(0xC79269)

	event.create('tfg:garnet_residual_slag')
		.gem()
		.iconSet(GTMaterialIconSet.ROUGH)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x8C8577)
		.secondaryColor(0xC4BEB0)

	event.create('tfg:garnet_secondary_liquor')
		.liquid(new GTFluidBuilder().temperature(370))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xB9D3D6)
		.secondaryColor(0xE0EFEF)

	event.create('tfg:inert_slag')
		.gem()
		.iconSet(GTMaterialIconSet.ROUGH)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x777777)
		.secondaryColor(0xB0B0B0)

	//#endregion

	//#region Step 2

	event.create('tfg:depleted_garnet_liquor_a')
		.liquid(new GTFluidBuilder().temperature(298))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xC9A889)
		.secondaryColor(0xE6D4C0)

	event.create('tfg:sodium_aluminate_liquor')
		.liquid(new GTFluidBuilder().temperature(370))
		.components('1x sodium', '1x aluminium', '2x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xE8EDE0)
		.secondaryColor(0xC7D4BC)

	event.create('tfg:depleted_garnet_liquor_b')
		.liquid(new GTFluidBuilder().temperature(298))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xD4C2AE)
		.secondaryColor(0xEDE3D5)

	//#endregion

	//#region Step 3

	event.create('tfg:cr_y_residue')
		.dust()
		.iconSet(GTMaterialIconSet.OPAL)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x7FA87A)
		.secondaryColor(0xC3DCC0)

	event.create('tfg:enriched_cr_y_residue')
		.dust()
		.iconSet(GTMaterialIconSet.OPAL)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x5E745C)
		.secondaryColor(0xA4E89D)

	event.create('tfg:cr_y_pregnant_liquor')
		.liquid(new GTFluidBuilder().temperature(370).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x6B8E5A)
		.secondaryColor(0xB9D1A8)

	event.create('tfg:organic_extractant')
		.liquid(new GTFluidBuilder().temperature(293))
		.components('16x carbon', '35x hydrogen', '4x oxygen', '1x phosphorus')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xD9B26B)
		.secondaryColor(0xF0DDB0)

	event.create('tfg:lean_organic')
		.liquid(new GTFluidBuilder().temperature(293))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xC9A227)
		.secondaryColor(0xE8D48A)

	event.create('tfg:loaded_mixture')
		.liquid(new GTFluidBuilder().temperature(298))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x8A8C5A)
		.secondaryColor(0xD1D2A8)

	event.create('tfg:loaded_organic')
		.liquid(new GTFluidBuilder().temperature(293))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xA8A23D)
		.secondaryColor(0xD9D28A)

	event.create('tfg:raffinate')
		.liquid(new GTFluidBuilder().temperature(298).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x6E8257)
		.secondaryColor(0xB7C7A0)

	//#endregion

	//#region Chaîne 2-Ethylhexanol

	event.create('tfg:ethylhexenal')
		.liquid(new GTFluidBuilder().temperature(293))
		.components('8x carbon', '14x hydrogen', '1x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xF2E1A0)
		.secondaryColor(0xEDD98A)

	event.create('tfg:ethylhexanol')
		.liquid(new GTFluidBuilder().temperature(293))
		.components('8x carbon', '18x hydrogen', '1x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xF7EFD6)
		.secondaryColor(0xEADFB8)

	//#endregion

}