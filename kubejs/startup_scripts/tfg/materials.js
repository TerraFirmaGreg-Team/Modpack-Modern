// priority: 0
"use strict";

const registerTFGMaterials = (event) => {

	const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty")

	//#region placeholder materials
	event.create('unknown')
		.color('0xFFFFFF')
		.formula('?')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		
	event.create('ammonium')
		.components('1x nitrogen', '4x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('methoxy')
		.components('1x oxygen', '1x carbon', '3x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('methylene')
		.components('1x carbon', '2x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('hydroxide')
		.components('1x oxygen', '1x hydrogen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
	//#endregion	
	
	registerTFGPowerReworkMaterials(event);
	registerTFGNuclearMaterials(event);
	registerTFGSMRAdditiveMaterials(event)
	registerTFGBiolineMaterials(event);
	registerTFGPrimitiveMaterials(event);
	registerTFGRockMaterials(event);

	registerTFGRocketMaterials(event);
	registerTFGMoonMaterials(event);
	registerTFGMarsMaterials(event);
	registerTFGVenusMaterials(event);
	registerTFGEuropaMaterials(event);
	registerTFGAquaponicsMaterials(event);

	registerTFGEtchingMaterials(event);

	registerTFGBakeliteMaterials(event);
	registerTFGRefrigerantMaterials(event);
	registerTFGCoilMaterials(event);
	registerTFGBouleMaterials(event);
	registerTFGRotorMaterials(event);

	registerTFGTungstenMaterials(event);
	registerTFGZirconiumMaterials(event);


	// Crafting components

	event.create('tfg:vitrified_pearl')
		.dust()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
		.components('2x aluminium', '2x silicon', '9x oxygen', '4x hydrogen', '1x ender_pearl')
		.color(0xFFFFFF)
		.secondaryColor(0x67FFE6)
		.formula("(Al2Si2O5(OH)4)(BeK4N5)")
	
	// #region holder materials
	//     These allow us to give material components to non-material items
	//	   Requires .setIgnored to be called in core
	event.create('tfg:nitrocellulose')
		.dust()
		.components('6x carbon', '7x hydrogen', '3x nitrogen', '11x oxygen')
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xFFFFFF)
	event.create('tfg:cellulose_matrix')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.color(0xFFFFFF)
	event.create('tfg:tfg_polycaprolactam')
		.ingot()
		.components('6x carbon', '11x hydrogen', '1x nitrogen', '1x oxygen')
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.EXPLOSIVE)
		.macerateInto('gtceu:polycaprolactam')
		.color(0x000000)
	// #endregion


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
			GTMaterialFlags.GENERATE_BOLT_SCREW,
			GTMaterialFlags.GENERATE_RING,
			GTMaterialFlags.GENERATE_LONG_ROD)
}
