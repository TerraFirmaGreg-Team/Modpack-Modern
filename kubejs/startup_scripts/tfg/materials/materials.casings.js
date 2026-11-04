// priority: 0
"use strict";

function registerTFGCasingsMaterials(event) {
	const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty")

// Material for ULV Casing

	event.create('tfg:maldonite')
		.ingot()
		.fluid()
		.color(0xE4EB94)
		.secondaryColor(0xC6C9C5)
		.components('2x gold', '1x bismuth')
		.iconSet(GTMaterialIconSet.getByName('metallic'))
		.flags(
			GTMaterialFlags.GENERATE_PLATE,
			TFGMaterialFlags.CAN_BE_UNMOLDED,
			TFGMaterialFlags.GENERATE_DOUBLE_INGOTS)

// Material for IV Casing

	event.create('tfg:telluride_tungstensteel')
		.ingot()
		.fluid()
		.color(0x4A4F5C)
		.secondaryColor(0x6B6F7D)
		.components('7x tungsten_steel', '1x tellurium', '1x manganese')
		.iconSet(GTMaterialIconSet.getByName('shiny'))
		.blastTemp(3815, $BlastProperty.GasTier.HIGH, GTValues.VA[GTValues.IV], (20*75))
		.flags(
			GTMaterialFlags.GENERATE_PLATE)

	event.create('tfg:tungsten_diselenide')
		.dust()
		.color(0x2E2A33)
		.secondaryColor(0x4A4452)
		.components('1x tungsten_steel', '2x selenium')
		.iconSet(GTMaterialIconSet.getByName('bright'))
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:ni-cr-al-y')
		.ingot()
		.fluid()
		.color(0xA8AEB4)
		.secondaryColor(0xC4C9CE)
		.iconSet(GTMaterialIconSet.getByName('chonky'))
		.components('5x nickel', '2x chromium', '1x aluminium', '1x yttrium')
		.blastTemp(3050, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.EV], (20*50))
		.flags(
			GTMaterialFlags.GENERATE_PLATE)

}