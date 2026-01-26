// priority: 0
"use strict";

const registerTFGRockMaterials = (event) => {

	// Specialized icon sets for TFC's own
	modifyTFGIconSets(event)

	const registerStoneMaterial = (rockType, color, components) =>
		event.create(`tfg:${rockType}`)
			.color(color)
			.dust()
			.iconSet(GTMaterialIconSet.ROUGH)
			.components(components)
			.flags(
				GTMaterialFlags.MORTAR_GRINDABLE,
				GTMaterialFlags.NO_SMASHING,
				GTMaterialFlags.NO_SMELTING,
				GTMaterialFlags.DISABLE_DECOMPOSITION);

	// event.create() returns a material builder, not the actual material
	registerStoneMaterial('sedimentary_clastic', 0xAF9377, ['quartzite', 'potassium_feldspar']);
	registerStoneMaterial('sedimentary_carbonate', 0xADA67A, ['quartzite', 'calcite']);
	registerStoneMaterial('sedimentary_organic', 0xA8706B, ['flint', 'unknown']);

	registerStoneMaterial('metamorphic', 0x876981, ['marble', 'deepslate']);

	registerStoneMaterial('igneous_ultramafic', 0x45474D, ['blackstone']);
	registerStoneMaterial('igneous_mafic', 0x525D6B, ['basalt']);
	registerStoneMaterial('igneous_intermediate', 0x71818A, ['andesite']);
	registerStoneMaterial('igneous_felsic', 0x97B2BF, ['granite_red']);
}