// priority: 0
"use strict";

const registerGreateMaterialModification = (event) => {
	
	const $GreateMaterials = Java.loadClass("electrolyte.greate.registry.GreateMaterials")

	// Add flags
	$GreateMaterials.RoseQuartz.addFlags(
		GTMaterialFlags.GENERATE_LENS
	);
	
	// Material composition
	$GreateMaterials.AndesiteAlloy.setComponents([])
	$GreateMaterials.AndesiteAlloy.setFormula("?")
}