"use strict";

const registerGreateMaterials = (event) => {

}

const registerGreateMaterialModification = (event) => {
	GTMaterials.get("rose_quartz").addFlags(
		GTMaterialFlags.GENERATE_LENS
	);

	GTMaterials.get('andesite_alloy').setFormula("?", true)
}