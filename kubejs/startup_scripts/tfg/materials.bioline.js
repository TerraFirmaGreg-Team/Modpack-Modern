// priority: 0
"use strict";

const registerTFGBiolineMaterials = (event) => {

	/*    event.create('mysterious_ooze')
			.liquid(new GTFluidBuilder().temperature(293))
			.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(293))
			.color(0x500bbf)
			.fluidTemp(69420)
			.dust()
			.cableProperties(GTValues.V[GTValues.LV], 69, 0, true) // Voltage, Amperage, EU loss, Is Superconductor.
			.gem(2, 4000) 
			.element(GTElements.C) 
			.ore(2, 3) 
			.color(0x7D2DDB)
			.iconSet(GTMaterialIconSet.LIGNITE)
			.ingot()
			.components('1x andesite', '1x iron')
			.color(0x839689)
			.iconSet(GTMaterialIconSet.DULL)
			.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR)
	*/

	//#region Decellularization

	event.create('tfg:lauryl_alcohol')
		.liquid(new GTFluidBuilder().temperature(293))
		.components('12x carbon', '26x hydrogen', '1x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0x9C734E)
		.secondaryColor(0xA12727)

	event.create('tfg:chlorosulfuric_acid')
		.liquid(new GTFluidBuilder().temperature(293).attribute(GTFluidAttributes.ACID))
		.components('1x hydrogen', '1x sulfur', '3x oxygen', '1x chlorine')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0xAA8772)
		.secondaryColor(0xF0D5CE)

	event.create('tfg:sodium_dodecyl_sulfate')
		.liquid(new GTFluidBuilder().temperature(293))
		.components('12x carbon', '25x hydrogen', '1x sodium', '1x sulfur', '4x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0xCA9851)
		.secondaryColor(0xF0D5CE)

	event.create('tfg:sodium_hypochlorite')
		.liquid(new GTFluidBuilder().temperature(293))
		.components('1x sodium', '1x oxygen', '1x chlorine')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0x64995B)
		.secondaryColor(0xE5EEAE)

	//#endregion
	//#region Basic Feeder Cells

	event.create('tfg:mutative_yeast')
		.liquid(new GTFluidBuilder().customStill().temperature(310))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:proto_growth_medium')
		.liquid(new GTFluidBuilder().customStill().temperature(293))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:fibroblast_feeder_cells')
		.liquid(new GTFluidBuilder().customStill().temperature(310))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	//#endregion
	//#region Gram Stain

	event.create('tfg:gram_stain')
		.liquid(new GTFluidBuilder().customStill().temperature(293))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:crystal_violet')
		.liquid(new GTFluidBuilder().customStill().temperature(293))
		.components('25x carbon', '30x hydrogen', '1x chlorine', '3x nitrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:n_n_dimethylaniline')
		.liquid(new GTFluidBuilder().temperature(293))
		.components('8x carbon', '11x hydrogen', '1x nitrogen')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0x525467)
		.secondaryColor(0x6B81A1)

	//#endregion
	//#region Triglycerides

	event.create('tfg:triglyceride_oil')
		.liquid(new GTFluidBuilder().customStill().temperature(293))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:cholesterol')
		.dust()
		.components('27x carbon', '46x hydrogen', '1x oxygen')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0x7F86C2)
		.secondaryColor(0xE1E7F0)

	event.create('tfg:butyric_acid')
		.liquid(new GTFluidBuilder().temperature(293).attribute(GTFluidAttributes.ACID))
		.components('4x carbon', '8x hydrogen', '2x oxygen')
		.formula('C3H7COOH')
		.iconSet(GTMaterialIconSet.FINE)
		.color(0x3F3E3E)
		.secondaryColor(0x8E4949)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	//#endregion
	
	//#region holder materials
	event.create('tfg:cellulose_matrix')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xFFFFFF)
	//#endregion
}