// priority: 0
"use strict";

//function getMaterialRecyclingExtractorEUt(material) {
//	// Special case for bis/black bronze because removing the blast property doesn't change the tier of
//	// the extractor recipes retroactively
//	return material.hasProperty(PropertyKey.BLAST) && material !== GTMaterials.BismuthBronze && material !== GTMaterials.BlackBronze
//		? GTValues.VA[GTValues.MV]
//		: GTValues.VA[GTValues.LV];
//}

//function addMaterialRecycling(event, item, materialMap) {
	

//	const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY);
//	if (tfcProperty !== null) {
//		const outputMaterial = (tfcProperty.getOutputMaterial() === null) ? material : tfcProperty.getOutputMaterial();

//		event.recipes.tfc.heating(ingotItem, tfcProperty.getMeltTemp())
//			.resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
//			.id(`tfc:heating/metal/${material.getName()}_ingot`)
//	}
//}

function registerTFGMaterialRecipes(event) {


}