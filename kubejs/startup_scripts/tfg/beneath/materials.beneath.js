"use strict";

function registerTFGBeneathMaterials(event) {
	const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty")

	// Ores
/*
	event.create('armalcolite')
		.gem(2)
		.components('1x magnesium', '1x ilmenite', '2x oxygen')
		.color(0x443333)
		.secondaryColor(0x5e2c21)
		.iconSet(GTMaterialIconSet.getByName('tfc_emerald'))
		.ore()
		.addOreByproducts('ilmenite', 'magnesium', 'ilmenite')
		.flags(GTMaterialFlags.GENERATE_LENS)
		*/

	event.create('phlogopite')
		.components('1x potassium', '3x magnesium', '1x aluminium', '3x silicon', '10x oxygen', '2x fluorine')
		.color(0x8B6914)
		.secondaryColor(0xA0782A)
		.iconSet(GTMaterialIconSet.getByName('sheet'))
		.ore()
		.addOreByproducts('magnesium', 'potassium', 'aluminium', 'aluminium')
		.washedIn(GTMaterials.HydrochloricAcid)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('tfg:molybdenum_trioxide')
		.dust()
		.components('1x molybdenum', '3x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xE8E4C9)
		.secondaryColor(0xC9C4A0)
		.iconSet(GTMaterialIconSet.SAND)

	event.create('tfg:calcium_sulfate')
		.dust()
		.components('1x calcium', '1x sulfur', '4x oxygen')
		.color(0xF0EDE8)
		.secondaryColor(0xD4D0C8)
		.iconSet(GTMaterialIconSet.SAND)

	event.create('tfg:sodium_molybdate')
		.dust()
		.components('2x sodium', '1x molybdenum', '4x oxygen')
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		.color(0xDDE8F0)
		.secondaryColor(0xB8CCD4)
		.iconSet(GTMaterialIconSet.SHINY)

	event.create('tfg:lead_hydroxide')
		.dust()
		.components('1x lead', '2x oxygen', '2x hydrogen')
		.color(0xE8E4D0)
		.secondaryColor(0xC8C4A8)
		.iconSet(GTMaterialIconSet.DULL)

	event.create('irarsite')
        .components('4x iridium', '1x ruthenium', '1x rhodium', '1x platinum', '7x arsenic', '7x sulfur')
        .color(0x9F9FD2)
        .secondaryColor(0x5555CC)
        .iconSet(GTMaterialIconSet.getByName('monoclinic_quartz'))
        .ore()
        .addOreByproducts('sulfur', 'nickel', 'copper', 'arsenic')
        .washedIn(GTMaterials.SodiumPersulfate)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('ruarsite')
        .components('1x ruthenium', '1x arsenic', '1x sulfur')
        .color(0x51C2E4)
        .secondaryColor(0xA8D0F0)
        .iconSet(GTMaterialIconSet.getByName('monoclinic_dull'))
        .ore()
        .addOreByproducts('sulfur', 'nickel', 'copper', 'arsenic')
        .washedIn(GTMaterials.SodiumPersulfate)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

	event.create('ferhodsite')
        .components('2x iron', '2x rhodium', '1x iridium', '3x nickel', '1x copper', '9x sulfur')
        .color(0x9C7C97)
        .secondaryColor(0xB98DBD)
        .iconSet(GTMaterialIconSet.getByName('prismatic_ruby'))
        .ore()
        .addOreByproducts('sulfur', 'nickel', 'copper', 'iron')
        .washedIn(GTMaterials.SodiumPersulfate)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
		
}