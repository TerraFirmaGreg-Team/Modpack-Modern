// priority: 0

const registerGTCEuMaterials = (event) => {

	event.create('diopside')
		.gem(2)
		.components('1x magnesium', '1x calcium', '2x silicon', '6x oxygen')
		.color(0xb7cca1)
		.iconSet(GTMaterialIconSet.GEM_VERTICAL)
		.ore()

	event.create('enstatite')
		.gem(2)
		.components('2x magnesium', '2x silicon', '6x oxygen')
		.color(0x595813)
		.iconSet(GTMaterialIconSet.GEM_VERTICAL)
		.ore()

	event.create('fayalite')
		.gem(2)
		.components('2x iron', '1x silicon', '4x oxygen')
		.color(0x421209)
		.iconSet(GTMaterialIconSet.LAPIS)
		.ore()
}
