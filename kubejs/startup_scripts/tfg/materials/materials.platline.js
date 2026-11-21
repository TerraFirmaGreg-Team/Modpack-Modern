// priority: 0
"use strict";

function registerTFGPlatlineMaterials(event) {

	//#region Pyrometallurgy

	event.create('tfg:pgm_calcine')
		.dust()
		.iconSet(GTMaterialIconSet.ROUGH)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x6B5A4E)
		.secondaryColor(0x3E332C)

	event.create('tfg:fayalite_slag')
		.gem()
		.components('2x iron', '1x silicon', '4x oxygen')
		.iconSet(GTMaterialIconSet.ROUGH)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x4A3B2A)
		.secondaryColor(0x8A6B45)

	event.create('tfg:pgm_converter_matte')
		.gem()
		.iconSet(GTMaterialIconSet.ROUGH)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x5C5F66)
		.secondaryColor(0x2E3036)

	event.create('tfg:pgm_crystallized_matte')
		.gem()
		.iconSet(GTMaterialIconSet.SHINY)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x8E939C)
		.secondaryColor(0x4D525C)

	event.create('tfg:pgm_magnetic_fraction')
		.dust()
		.iconSet(GTMaterialIconSet.MAGNETIC)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xA9AEB8)
		.secondaryColor(0x5A5F6B)

	event.create('tfg:cu_ni_sulfide_fraction')
		.dust()
		.iconSet(GTMaterialIconSet.DULL)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x8C7A3F)
		.secondaryColor(0x4F5A3A)

	//#endregion

	//#region Ferrous Loop

	event.create('tfg:ferrous_sulfate')
		.dust()
		.components('1x iron', '1x sulfur', '4x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x9FD9B4)
		.secondaryColor(0x5FA880)

	event.create('tfg:spent_pgm_liquor')
		.liquid(new GTFluidBuilder().temperature(298).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xC45FC9)
		.secondaryColor(0xE3A6E6)

	event.create('tfg:barren_liquor')
		.liquid(new GTFluidBuilder().temperature(298).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x9C8FA3)
		.secondaryColor(0xCFC6D4)

	//#endregion

	//#region Se-Te Effluent

	event.create('tfg:tellurium_bearing_liquor')
		.liquid(new GTFluidBuilder().temperature(298).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x8A8F7A)
		.secondaryColor(0xC2C6B3)

	event.create('tfg:metal_bearing_liquor')
		.liquid(new GTFluidBuilder().temperature(298).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x7A8F8C)
		.secondaryColor(0xB3C6C3)

	event.create('tfg:neutral_effluent')
		.liquid(new GTFluidBuilder().temperature(298))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xB7D6D1)
		.secondaryColor(0xE0F0EC)

	event.create('tfg:heavy_metal_sludge')
		.gem()
		.iconSet(GTMaterialIconSet.ROUGH)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x5A5550)
		.secondaryColor(0x8C857C)

	//#endregion

	//#region Metal Refinery

	event.create('tfg:pgm_chloride_solution')
		.liquid(new GTFluidBuilder().temperature(330).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xC98A2B)
		.secondaryColor(0xEBC27A)

	event.create('tfg:pt_pd_solution')
		.liquid(new GTFluidBuilder().temperature(310).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xD9A441)
		.secondaryColor(0xF2D795)

	event.create('tfg:palladium_solution')
		.liquid(new GTFluidBuilder().temperature(310).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xB56A3A)
		.secondaryColor(0xDEA87F)

	event.create('tfg:ammonium_hexachloroplatinate')
		.dust()
		.components('2x nitrogen', '8x hydrogen', '1x platinum', '6x chlorine')
		.formula('(NH4)2PtCl6')
		.iconSet(GTMaterialIconSet.FINE)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xF2D43D)
		.secondaryColor(0xC9A21E)

	event.create('tfg:pgm_residue')
		.dust()
		.iconSet(GTMaterialIconSet.DULL)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x3B3D42)
		.secondaryColor(0x6E7178)

	//#endregion

	//#region Oxidative Roasting

	event.create('tfg:osmiridium_residue')
		.dust()
		.iconSet(GTMaterialIconSet.METALLIC)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x4F5E7A)
		.secondaryColor(0x8FA0BF)

	event.create('tfg:roasting_off_gas')
		.gas(new GTFluidBuilder().temperature(900))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xA89F6B)
		.secondaryColor(0xD6CFA3)

	event.create('tfg:sodium_ruthenate')
		.dust()
		.components('2x sodium', '1x ruthenium', '4x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xC2541D)
		.secondaryColor(0x7A2F0E)

	event.create('tfg:spent_sodium_hydroxide')
		.dust()
		.iconSet(GTMaterialIconSet.DULL)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x5E6E8C)
		.secondaryColor(0x2F3B57)

	//#endregion

	//#region Alkaline Fusion

	event.create('tfg:sodium_bromate')
		.dust()
		.components('1x sodium', '1x bromine', '3x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xF2EAD9)
		.secondaryColor(0xD9B48C)

	event.create('tfg:sodium_bromide')
		.dust()
		.components('1x sodium', '1x bromine')
		.iconSet(GTMaterialIconSet.FINE)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xE8DCCB)
		.secondaryColor(0xB8936B)

	event.create('tfg:fused_pgm_mass')
		.gem()
		.iconSet(GTMaterialIconSet.SHINY)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x6A4A7A)
		.secondaryColor(0x2E1F3A)

	event.create('tfg:ir_rh_solution')
		.liquid(new GTFluidBuilder().temperature(330).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x7A2E3F)
		.secondaryColor(0xC27A8A)

	event.create('tfg:rhodium_solution')
		.liquid(new GTFluidBuilder().temperature(310).attribute(GTFluidAttributes.ACID))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xB8324F)
		.secondaryColor(0xE68AA0)

	event.create('tfg:ammonium_hexachloroiridate')
		.dust()
		.components('2x nitrogen', '8x hydrogen', '1x iridium', '6x chlorine')
		.formula('(NH4)2IrCl6')
		.iconSet(GTMaterialIconSet.FINE)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0x3A1F24)
		.secondaryColor(0x7A2E3F)

	event.create('tfg:rhodium_salt')
		.dust()
		.iconSet(GTMaterialIconSet.FINE)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xD1495F)
		.secondaryColor(0x8C1F33)

	//#endregion

}