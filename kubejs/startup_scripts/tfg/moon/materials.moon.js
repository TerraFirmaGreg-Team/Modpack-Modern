"use strict";

function registerTFGMoonMaterials(event) {

	// Solar Panel Chemicals

	event.create('tfg:chloryl_fluoride')
		.gas()
		.components('1x fluorine', '1x chlorine', '2x oxygen')
		.color(0x8AFAF4)

	event.create('tfg:chlorine_pentafluoride')
		.gas()
		.components('5x fluorine', '1x chlorine')
		.color(0x51F7C0)

	event.create('tfg:solar_coolant')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(163))
		.components('8x helium_3', '11x oxygen', '11x hydrogen')
		.color(0xEDFFB3)

	event.create('tfg:solar_coolant_tier2')
        .gas(new GTFluidBuilder().state(GTFluidState.GAS).temperature(73))
		.components('8x tfg:solar_coolant', '1x argon')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xfeff5d)

	// Moon Ore Line

	event.create('regolith_vapor')
		.gas(new GTFluidBuilder().state(GTFluidState.GAS).customStill().temperature(727))

	event.create('tfg:certus_regolith')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.iconSet(GTMaterialIconSet.CERTUS)
		.color('0xc1e6e4')
		.secondaryColor('0x7a5225')

	event.create('tfg:goethe_regolith')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.iconSet(GTMaterialIconSet.METALLIC)
		.color('0xb0af5b')
		.secondaryColor('0x7a5225')

	event.create('tfg:bright_regolith')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.iconSet(GTMaterialIconSet.SHINY)
		.color('0xf0efe9')
		.secondaryColor('0xffffff')

	event.create('tfg:cassiterite_regolith')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.iconSet(GTMaterialIconSet.METALLIC)
		.color('0xbab6b7')
		.secondaryColor('0x7a5225')

	event.create('tfg:regolith_mush')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES)
		.iconSet(GTMaterialIconSet.WOOD)
		.color('0xa2cde0')
		.secondaryColor('0x7a5225')

	// Ores

	event.create('armalcolite')
		.gem(2)
		.components('1x magnesium', '1x rutile', '1x ilmenite')
		.color(0x443333)
		.secondaryColor(0x5e2c21)
		.iconSet(GTMaterialIconSet.getByName('tfc_emerald'))
		.ore()
		.addOreByproducts('rutile', 'rutile', 'ilmenite')

	event.create('desh')
		.components('2x olivine', '1x rutile', '4x nitrogen')
		.color(0xF39A4C)
		.secondaryColor(0xF35A6C)
		.iconSet(GTMaterialIconSet.getByName('tfc_hematite'))
		.ore()
		.addOreByproducts('olivine', 'rutile', 'rutile')
		.ingot()
		.liquid()
		.blastTemp(2800, 'mid', GTValues.VA[GTValues.HV])
		.flags(
			GTMaterialFlags.FORCE_GENERATE_BLOCK, 
			GTMaterialFlags.GENERATE_PLATE, 
			GTMaterialFlags.GENERATE_ROD,
			GTMaterialFlags.GENERATE_DENSE,
			GTMaterialFlags.GENERATE_GEAR,
			GTMaterialFlags.GENERATE_FRAME,
			GTMaterialFlags.DISABLE_ALLOY_BLAST
		)
}