// priority: 0
"use strict";

const registerTFGMaterials = (event) => {

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


	// Refrigerants

	event.create('tfg:chlorodifluoromethane')
		.gas()
		.components('1x carbon', '1x hydrogen', '1x chlorine', '2x fluorine')
		.color(0x66ffa3)

	event.create('tfg:acetylene')
		.gas()
		.components('2x carbon', '2x hydrogen')
		.color(0x1a1212)

	event.create('tfg:isobutane')
		.gas()
		.components('4x carbon', '10x hydrogen')
		.color(0x7d0f00)

	event.create('tfg:1_1_1_2_tetrafluoroethane')
		.gas()
		.components('2x carbon', '2x hydrogen', '4x fluorine')
		.color(0x46702e)

	// Crafting components

	event.create('tfg:vitrified_pearl')
		.dust()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
		.components('2x aluminium', '2x silicon', '9x oxygen', '4x hydrogen', '1x ender_pearl')
		.color(0xFFFFFF)
		.secondaryColor(0x67FFE6)
		.formula("(Al2Si2O5(OH)4)(BeK4N5)")


	//#region Tungsten Line

	event.create('tfg:sodium_tungstate')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.BRIGHT)
		.components('2x sodium','1x tungsten', '4x oxygen')
		.color('0xdcf6f7')

    event.create('tfg:ammonium_tungstate')
        .dust()
        .flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .iconSet(GTMaterialIconSet.DULL)
        .components('10x ammonia', '2x hydrogen', '12x tungsten', '42x oxygen')
        .color('0xfafafa')

	event.create('tfg:apt')
		.gem()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.FLINT)
		.components('10x ammonia', '4x water', '2x hydrogen', '12x tungsten', '42x oxygen')
		.color('0xaabdf0')

	event.create('tfg:tungsten_oxide')
		.dust()
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.FLINT)
		.components('1x tungsten', '3x oxygen')
		.color('0xf0c851')

	// #endregion

	//#region New Alloy for Turbines

	event.create('tfg:tungsten_bismuth_oxide_composite')
		.components('1x tungsten', '2x bismuth', '3x oxygen')
		.color(0xf7cb48)
		.secondaryColor(0xfffef0)
		.iconSet(GTMaterialIconSet.getByName('tfc_cassiterite'))
		.ingot()
		.blastTemp(3700, 'mid', GTValues.VA[GTValues.IV], (20*120))
		.rotorStats(250, 90, 2 ,620)
		.flags(
			GTMaterialFlags.DISABLE_DECOMPOSITION, 
			GTMaterialFlags.GENERATE_PLATE,
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_BOLT_SCREW,
			GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES,
			GTMaterialFlags.GENERATE_FOIL,
			GTMaterialFlags.GENERATE_FINE_WIRE
		)
		.fluidPipeProperties(4250, 1700, true, false, false, false)

	// #endregion

	// #region conductor
	event.create('tfg:thermally_conductive_fluid')
		.liquid()
		.flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
		.components('7x gallium', '2x tin', '1x zinc')
		.color('0x34cfeb')
	// #endregion
	
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

	// #region Zirconium
	event.create('tfg:zircon')
		.gem()
		.color(0xF1B6B0)
		.secondaryColor(0x4BABC6)
		.iconSet('gem_horizontal')
		.components('1x zirconium', '1x silicon', '4x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:zirconium_tetrachloride')
		.dust()
		.color(0xF1B6B0)
		.secondaryColor(0x146946)
		.iconSet('rough')
		.components('1x zirconium', '4x chlorine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:silicon_tetrachloride')
		.liquid()
		.color(0x707078)
		.secondaryColor(0x146946)
		.components('1x silicon', '4x chlorine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:zirconium_bromide')
		.dust()
		.color(0xBA776F)
		.secondaryColor(0x146985)
		.iconSet('shiny')
		.components('1x zirconium', '4x bromine')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:zirconium_diboride')
		.ingot()
		.color(0xFADED2)
		.secondaryColor(0x4FA883)
		.iconSet('chonky')
		.components('1x zirconium', '2x boron')
		.flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)

	event.create('tfg:boron_carbide')
		.ingot()
		.iconSet('dull')
		.color(0x42705D)
		.components('4x boron', '1x carbon')
		.blastTemp(3041, "mid", GTValues.VA[GTValues.HV], 1500)
		.flags(GTMaterialFlags.GENERATE_PLATE)

	// #endregion
}
