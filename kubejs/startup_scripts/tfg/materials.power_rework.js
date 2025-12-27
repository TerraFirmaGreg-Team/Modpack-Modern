// priority: 0
"use strict";

const registerTFGPowerReworkMaterials = (event) => {

	// Syngas
	event.create('tfg:syngas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(650))
		.components('11x carbon', '20x hydrogen', '12x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	// Raw Aromatic Mix
	event.create('tfg:raw_aromatic_mix')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(420))
		.components('137x carbon', '154x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x8a4b3d)
		.secondaryColor(0xd8b6ac)

	// Aromatic Feedstock
	event.create('tfg:aromatic_feedstock')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(450))
		.components('67x carbon', '74x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x915c2f)
		.secondaryColor(0xe2c49b)

	// Reformed Aromatic Feedstock
	event.create('tfg:reformed_aromatic_feedstock')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(500))
		.components('133x carbon', '146x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0x4e6b83)
		.secondaryColor(0xbacdde)

	// Reformate Gas
	event.create('tfg:reformate_gas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(540))
		.components('13x carbon', '63x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	// Cracker Off-Gas
	event.create('tfg:cracker_off_gas')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(480))
		.components('31x carbon', '128x hydrogen', '2x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xa36f2a)
		.secondaryColor(0xecd8ae)

	// Reformate Gas
	event.create('tfg:btx_fuel')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(540))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	//#region Materials for BTX

	// Crude Mixed Gas
	event.create('tfg:crude_mixed_gas')
    	.gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(500))
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0x9bb6c9)
    	.secondaryColor(0xd7e7ef)

	// Sodium Silicate
	event.create('tfg:sodium_silicate')
    	.liquid(new GTFluidBuilder().temperature(293))
    	.components('1x sodium', '1x silicon', '4x oxygen', '4x hydrogen')
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0xcce0f0)
    	.secondaryColor(0xa9c6db)

	// Sodium Aluminium
	event.create('tfg:sodium_aluminium')
    	.dust()
    	.components('2x sodium', '1x aluminium', '2x oxygen')
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.iconSet(GTMaterialIconSet.FLINT)
    	.color(0xf0e68c)
    	.secondaryColor(0xded7a8)

	// TPAOH
	event.create('tfg:tpaoh')
    	.liquid(new GTFluidBuilder().temperature(293))
    	.components('2x carbon', '9x hydrogen', '1x nitrogen', '1x oxygen', '2x sodium')
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0xffd8b1)
    	.secondaryColor(0xe6b88f)

	// ZSM-5 Gel
	event.create('tfg:zsm5_gel')
    	.liquid(new GTFluidBuilder().temperature(323))
    	.components('24x carbon', '128x hydrogen', '12x nitrogen', '5x silicon', '1x aluminium', '34x oxygen', '31x sodium')
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0xf2e8d6)
    	.secondaryColor(0xd0c4b0)

	// Catalyser Powder
	event.create('tfg:catalyser_powder')
	    .dust()
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.iconSet(GTMaterialIconSet.FLINT)
    	.color(0x7f7f7f)
    	.secondaryColor(0xcfcfcf)

	// Clean Powder
	event.create('tfg:clean_powder')
    	.dust()
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.iconSet(GTMaterialIconSet.FLINT)
    	.color(0xffffff)
    	.secondaryColor(0xdfe6e6)

	// Leachate
	event.create('tfg:leachate')
    	.liquid(new GTFluidBuilder().temperature(298))
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0xbfd6d0)
    	.secondaryColor(0x8fbdb0)

	// Metal Rich Solution
	event.create('tfg:metal_rich_solution')
    	.liquid(new GTFluidBuilder().temperature(298))
    	.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    	.color(0xb56f5a)
    	.secondaryColor(0xd9b0a3)

	// Aciditic Waste
    event.create('tfg:aciditic_waste')
		.liquid(new GTFluidBuilder().attribute(GTFluidAttributes.ACID))
		.color(0x9df2b4)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

}
