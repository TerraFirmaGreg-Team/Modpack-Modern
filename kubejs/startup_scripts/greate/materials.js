const registerGreateMaterials = (event) => {

}

const registerGreateMaterialModification = (event) => {
	GTMaterials.get("rose_quartz").addFlags(
		GTMaterialFlags.GENERATE_LENS
	);
}