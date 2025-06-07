// priority: 0

const registerAdAstraMaterials = (event) => {

	// #region moon ores

	event.create('diopside')
		.gem(2)
		.components('1x magnesium', '1x calcium', '2x silicon', '6x oxygen')
		.color(0xb7cca1)
		.secondaryColor(0x26631b)
		.iconSet(GTMaterialIconSet.getByName('tfc_amethyst'))
		.ore()
		.addOreByproducts('magnesium', 'magnetite', 'olivine')

	event.create('enstatite')
		.gem(2)
		.components('2x magnesium', '2x silicon', '6x oxygen')
		.color(0x595813)
		.secondaryColor(0x47380a)
		.iconSet(GTMaterialIconSet.getByName('tfc_opal'))
		.ore()
		.addOreByproducts('olivine', 'olivine', 'magnetite')

	event.create('fayalite')
		.gem(2)
		.components('2x iron', '1x silicon', '4x oxygen')
		.color(0x421209)
		.secondaryColor(0x3b4710)
		.iconSet(GTMaterialIconSet.getByName('tfc_topaz'))
		.ore()
		.addOreByproducts('olivine', 'magnetite', 'magnetite')

	event.create('armalcolite')
		.gem(2)
		.components('1x magnesium', '1x rutile', '1x ilmenite')
		.color(0x443333)
		.secondaryColor(0x5e2c21)
		.iconSet(GTMaterialIconSet.getByName('tfc_emerald'))
		.ore()
		.addOreByproducts('rutile', 'rutile', 'ilmenite')

	// #endregion

	// #region ad astra ores

	// moon
	event.create('desh')
		.components('2x olivine', '1x rutile', '4x nitrogen')
		.color(0xF39A4C)
		.secondaryColor(0xF35A6C)
		.iconSet(GTMaterialIconSet.getByName('tfc_hematite'))
		.ore()
		.addOreByproducts('olivine', 'rutile', 'rutile')
		.ingot()
		.flags(
			GTMaterialFlags.FORCE_GENERATE_BLOCK, 
			GTMaterialFlags.GENERATE_PLATE, 
			GTMaterialFlags.GENERATE_ROD
		)

	// TODO: remove the components until we know what to put in them

	// mars?
	event.create('ostrum')
		.components('2x scheelite', '1x hematite', '1x rutile', '4x oxygen')
		.color(0xbd7980)
		.secondaryColor(0xA66C8D)
		.iconSet(GTMaterialIconSet.getByName('tfc_cassiterite'))
		.ore()
		.ingot()
		.flags(
			GTMaterialFlags.FORCE_GENERATE_BLOCK, 
			GTMaterialFlags.GENERATE_PLATE
		)

	// venus?
	event.create('calorite')
		.components('2x mercury', '1x tungsten', '1x rhodium', '2x sulfur')
		.color(0xC94D4E)
		.secondaryColor(0x9A296A)
		.iconSet(GTMaterialIconSet.getByName('tfc_copper'))
		.ore()
		.ingot()
		.flags(
			GTMaterialFlags.FORCE_GENERATE_BLOCK,
			GTMaterialFlags.GENERATE_PLATE
		)

	// ???
	event.create('etrium')
		.components('1x niobium', '1x molybdenum', '1x ruthenium', '3x carbon', '1x monochloramine')
		.color(0x7BFCD7)
		.secondaryColor(0x3582D2)
		.iconSet(GTMaterialIconSet.getByName('tfc_silver'))
		.ore()
		.ingot()
		.flags(
			GTMaterialFlags.FORCE_GENERATE_BLOCK,
			GTMaterialFlags.GENERATE_PLATE, 
			GTMaterialFlags.GENERATE_ROD
		)

	// #endregion
}