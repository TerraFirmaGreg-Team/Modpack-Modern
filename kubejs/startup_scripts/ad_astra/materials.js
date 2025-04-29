// priority: 0

const registerAdAstraMaterials = (event) => {

	// #region moon ores

	event.create('diopside')
		.gem(2)
		.components('1x magnesium', '1x calcium', '2x silicon', '6x oxygen')
		.color(0xb7cca1)
		.iconSet(GTMaterialIconSet.GEM_VERTICAL)
		.ore()
		.addOreByproducts('magnesium', 'magnetite', 'olivine')

	event.create('enstatite')
		.gem(2)
		.components('2x magnesium', '2x silicon', '6x oxygen')
		.color(0x595813)
		.iconSet(GTMaterialIconSet.GEM_VERTICAL)
		.ore()
		.addOreByproducts('olivine', 'olivine', 'magnetite')

	event.create('fayalite')
		.gem(2)
		.components('2x iron', '1x silicon', '4x oxygen')
		.color(0x421209)
		.iconSet(GTMaterialIconSet.LAPIS)
		.ore()
		.addOreByproducts('olivine', 'magnetite', 'magnetite')

	event.create('armalcolite')
		.gem(2)
		.components('1x magnesium', '1x rutile', '1x ilmenite')
		.color(0x443333)
		.iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
		.ore()
		.addOreByproducts('rutile', 'rutile', 'ilmenite')

	// #endregion

	// #region ad astra ores

	// moon

	// TODO: add smelting recipe for this
	event.create('desh')
		.components('2x olivine', '1x rutile', '4x nitrogen')
		.color(0xd38b4c)
		.secondaryColor(0xa90936)
		.iconSet(GTMaterialIconSet.METALLIC)
		.ore()

	// TODO: still need to balance these

	// mars
	event.create('ostrum')
		.components('2x scheelite', '1x hematite', '1x rutile', '4x oxygen')
		.color(0xbd7980)
		.secondaryColor(0x543d4a)
		.iconSet(GTMaterialIconSet.BRIGHT)
		.ore()

	// mercury
	event.create('calorite')
		.components('2x mercury', '1x tungsten', '1x rhodium', '2x sulfur')
		.color(0xcf223c)
		.secondaryColor(0x691533)
		.iconSet(GTMaterialIconSet.METALLIC)
		.ore()

	// venus
	event.create('etrium')
		.components('1x niobium', '1x molybdenum', '1x ruthenium', '3x carbon', '1x monochloramine')
		.color(0x58b1a1)
		.secondaryColor(0xbafcf6)
		.iconSet(GTMaterialIconSet.SHINY)
		.ore()

	// #endregion
}