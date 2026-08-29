// priority: 0
"use strict";

function registerTFGTungstenMaterials(event) {

	event.create('tfg:sodium_tungstate')
		.dust()
		.flags(GTMaterialFlags.DISABLE_MATERIAL_RECIPES, GTMaterialFlags.DISABLE_DECOMPOSITION)
		.iconSet(GTMaterialIconSet.BRIGHT)
		.components('2x sodium', '1x tungsten', '4x oxygen')
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
}