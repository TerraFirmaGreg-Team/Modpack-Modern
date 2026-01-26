"use strict";

function registerTFGPrimitiveMaterials(event) {

	// Paper
	event.create('hardwood')
		.dust()
		.flags(GTMaterialFlags.FLAMMABLE)
		.iconSet(GTMaterialIconSet.WOOD)
		.color('0x7a5225')
		.secondaryColor('0x7a5225')

	event.create('thermochemically_treated_hardwood')
		.dust()
		.flags(GTMaterialFlags.FLAMMABLE)
		.iconSet(GTMaterialIconSet.WOOD)
		.color('0x52482c')
		.secondaryColor('0x52482c')
		
	// Tree tapping
	event.create('tfg:latex')
		.liquid()
		.color(0xFBB982)

	event.create('tfg:vulcanized_latex')
		.liquid()
		.color(0xc79973)

	event.create('tfg:conifer_pitch')
		.liquid()
		.color(0xfbdf82)
		.secondaryColor(0xff9d2e)

	// Food/Cooking
	event.create('lactose')
		.dust()
		.iconSet(GTMaterialIconSet.FINE)
		.color('0xede8da')
		.secondaryColor('0xeddcad')
		.components('12x carbon', '22x hydrogen', '11x oxygen')

	event.create('tfg:sodium_dihydrogen_citrate')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.BRIGHT)
		.components('6x carbon', '7x hydrogen', '1x sodium', '7x oxygen')
		.color('0xE38818')

	event.create('tfg:citric_acid')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.SHINY)
		.components('6x carbon', '8x hydrogen', '7x oxygen')
		.color('0xE3AD18')

	// I decided to make these materials because why not?
	event.create('tfg:rich_stock')
		.liquid(new GTFluidBuilder().customStill().state(GTFluidState.LIQUID).temperature(360));

	event.create('tfg:light_stock')
		.liquid(new GTFluidBuilder().customStill().state(GTFluidState.LIQUID).temperature(360));

	event.create('tfg:brown_gravy')
		.liquid(new GTFluidBuilder().customStill().state(GTFluidState.LIQUID).temperature(360));

	// Ores -- these need to be in the gtceu namespace for the ore tool to work
	event.create('tarkianite')
		.ore()
		.components('1x copper', '1x iron', '4x rhenium', '4x molybdenum', '8x sulfur')
		.color(0x8bb054)
		.secondaryColor(0x3d8021)
		.iconSet(GTMaterialIconSet.getByName('tfc_emerald'))
		.addOreByproducts('sulfur', 'rhenium', 'molybdenum')

	// Metals/minerals
	event.create('aluminium_silicate')
		.dust()
		.ingot()
		.liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).temperature(1520))
		.components('2x aluminium', '1x silicon', '5x oxygen')
		.iconSet('metallic')
		.color(0xB6D3FF)
		.secondaryColor(0x6F4AB3)

	event.create('tfg:kaolinite')
		.dust()
		.components('2x aluminium', '2x silicon', '9x oxygen', '4x hydrogen')
		.color(0xEEB9AD)
		.secondaryColor(0xF6A797)
		.formula("Al2Si2O5(OH)4")

	// Film developing
	event.create('tfg:pyrogallol')
		.dust()
		.color(0xf0ccb4)
		.formula("C6H3(OH)3")
		.iconSet(GTMaterialIconSet.ROUGH)

	// Fire clay
	event.create('tfg:refractory_clay')
		.dust()
		.iconSet(GTMaterialIconSet.ROUGH)
		.color(0xB49AA2)
		.secondaryColor(0x60545F)

	// Weak colored steel
	event.create('tfg:weak_blue_steel')
		.dust()
		.ingot()
		.liquid()
		.components('1x sterling_silver', '1x bismuth_bronze', '2x steel', '4x black_steel')
		.blastTemp(1000, null, GTValues.VA[GTValues.MV], 25 * 20)
		.color(0x697FBD)
		.secondaryColor(0x384B82)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.DISABLE_ALLOY_BLAST)
		.iconSet(GTMaterialIconSet.METALLIC)

	event.create('tfg:weak_red_steel')
		.dust()
		.ingot()
		.liquid()
		.components('1x brass', '1x rose_gold', '2x steel', '4x black_steel')
		.blastTemp(1000, null, GTValues.VA[GTValues.MV], 25 * 20)
		.color(0xB55C5C)
		.secondaryColor(0x7D3232)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.DISABLE_ALLOY_BLAST)
		.iconSet(GTMaterialIconSet.METALLIC)
}