// priority: 0
"use strict";

function registerTFGCoilMaterials(event) {
	const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty")

	// Cupronickel

	event.create('tfg:magnesium_hydroxide')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('1x magnesium', '2x hydroxide')
		.color(0xC6E4FF)

	event.create('tfg:magnesia_refractory_brick')
		.dust()
		.ingot()
		.iconSet(GTMaterialIconSet.ROUGH)
		.flags(GTMaterialFlags.NO_SMELTING)
		.color(0xA69D96)

	// Kanthal

	event.create('tfg:rough_silicon_carbide')
		.color(0x95999e)
		.secondaryColor(0x95999a)
		.iconSet(GTMaterialIconSet.ROUGH)
		.ingot()
		.blastTemp(2341, $BlastProperty.GasTier.LOW, GTValues.VA[GTValues.HV], (20*95))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:silicon_carbide')
		.color(0xdfe5ed)
		.secondaryColor(0xdfe5aa)
		.iconSet(GTMaterialIconSet.ROUGH)
		.ingot()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	// RTM

	event.create('tfg:nichromium_iodomethylate')
		.liquid(new GTFluidBuilder().temperature(1818))
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.components('4x nickel', '1x chromium', '1x carbon', '3x hydrogen', '1x iodine')
		.color(0xe7a2fc)
}