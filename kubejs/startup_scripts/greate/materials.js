"use strict";


const registerGreateMaterials = (event) => {
	// Belt materials should already have an ingot and plate item already
	const $BeltProperty = Java.loadClass("electrolyte.greate.content.gtceu.material.BeltProperty")

	// Wood belt
	GTMaterials.get('andesite_alloy').setProperty(GreatePropertyKeys.BELT, new $BeltProperty([GTMaterials.get('andesite_alloy')], 5))

	// Leather belt
	GTMaterials.Stone.setProperty(GreatePropertyKeys.BELT, new $BeltProperty([GTMaterials.Steel, GTMaterials.get('andesite_alloy')], 10))

	// Remove plastic belts
	GTMaterials.Polyethylene.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.Polytetrafluoroethylene.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.Polybenzimidazole.getProperties().removeProperty(GreatePropertyKeys.BELT);

	// Change properties of other rubber belts
	GTMaterials.Rubber.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.Rubber.setProperty(GreatePropertyKeys.BELT, new $BeltProperty([GTMaterials.Steel, GTMaterials.get('andesite_alloy')], 20))
	
	GTMaterials.SiliconeRubber.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.SiliconeRubber.setProperty(GreatePropertyKeys.BELT, new $BeltProperty([GTMaterials.StainlessSteel, GTMaterials.Aluminium], 25))
	
	GTMaterials.StyreneButadieneRubber.setProperty(GreatePropertyKeys.BELT, new $BeltProperty([GTMaterials.Titanium, GTMaterials.StainlessSteel], 30))
}

const registerGreateMaterialModification = (event) => {
	GTMaterials.get("rose_quartz").addFlags(
		GTMaterialFlags.GENERATE_LENS
	);
	
	GTMaterials.get('andesite_alloy').setComponents([])
	GTMaterials.get('andesite_alloy').setFormula("?")
}