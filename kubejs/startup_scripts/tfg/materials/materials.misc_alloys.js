// priority: 0
"use strict";

// Don't just use this file as a dumping ground!
// Only use it if there's truly nowhere else your material can go and there's only like one or two materials.
// Otherwise, make a dedicated file for it.
function registerTFGMiscAlloyMaterials(event) {
	const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty")

	// Material used for Illager tools only
	event.create('tfg:arsenic_bronze')
		.components('1x arsenic', '1x tin', '8x copper')
		.color(0xE76848)
		.iconSet('metallic')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	// EV New Material

	event.create('tfg:tungsten_bismuth_oxide_composite')
		.components('1x tungsten', '2x bismuth', '3x oxygen')
		.color(0xf7cb48)
		.secondaryColor(0xfffef0)
		.iconSet(GTMaterialIconSet.getByName('tfc_cassiterite'))
		.ingot()
		.liquid()
		.blastTemp(3700, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.IV], (20*120))
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION, 
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_BOLT_SCREW,
			GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES,
			GTMaterialFlags.GENERATE_FOIL,
			GTMaterialFlags.GENERATE_FINE_WIRE
		)


    // Material at HV used for Zirconium at IV

	event.create('tfg:boron_carbide')
		.ingot()
		.iconSet('dull')
		.color(0x42705D)
		.components('4x boron', '1x carbon')
		.blastTemp(3041, $BlastProperty.GasTier.MID, GTValues.VA[GTValues.HV], 1500)
		.flags(
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_LONG_ROD)


	// Material for MV

	event.create('tfg:rene_41')
		.ingot()
		.fluid()
		.iconSet(GTMaterialIconSet.SHINY)
		.color(0x6A6D73)
		.secondaryColor(0x5A5148)
		.components('5x nickel', '3x chromium', '2x cobalt', '1x molybdenum', '1x aluminium', '1x boron', '1x carbon')
		.blastTemp(1780, $BlastProperty.GasTier.LOW, GTValues.VA[GTValues.MV], (20*37))
		.flags(
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_FOIL,
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_BOLT_SCREW,
			GTMaterialFlags.GENERATE_RING,
			GTMaterialFlags.GENERATE_LONG_ROD)

	// Material for HV

	event.create('tfg:mo_50_re')
		.ingot()
		.fluid()
		.color(0x5a8c78)
		.secondaryColor(0x94eb9f)
		.components('1x molybdenum', '1x rhenium')
		.iconSet(GTMaterialIconSet.getByName('chonky'))
		.blastTemp(1231, $BlastProperty.GasTier.LOW, GTValues.VA[GTValues.MV], (20*95))
		.flags( 
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_BOLT_SCREW,
			GTMaterialFlags.GENERATE_FRAME)

	event.create('tfg:diamond_tipped_mo_50_re')
       	.ingot()
       	.components('1x tfg:mo_50_re', '1x carbon')
        .color(0x5eab9b)
        .secondaryColor(0x83decc)
        .iconSet('chonky')
        .flags(
   	        GTMaterialFlags.GENERATE_PLATE,
            GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_LONG_ROD,
            GTMaterialFlags.DISABLE_DECOMPOSITION)
}