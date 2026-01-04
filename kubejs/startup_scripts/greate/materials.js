// priority: 0
"use strict";

const registerGreateMaterials = (event) => {
	// Belt materials should already have an ingot and plate item already
	const $BeltProperty = Java.loadClass("electrolyte.greate.content.gtceu.material.BeltProperty")
	const $GreateMaterials = Java.loadClass("electrolyte.greate.registry.GreateMaterials")
	const $GreatePropertyKeys = Java.loadClass("electrolyte.greate.content.gtceu.material.GreatePropertyKeys")

	// Wood belt
	$GreateMaterials.AndesiteAlloy.setProperty(GreatePropertyKeys.BELT, new $BeltProperty([$GreateMaterials.AndesiteAlloy], 5))

	// Leather belt
	GTMaterials.Stone.setProperty(GreatePropertyKeys.BELT, new $BeltProperty([GTMaterials.Steel, $GreateMaterials.AndesiteAlloy], 10))

	// Remove plastic belts
	GTMaterials.Polyethylene.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.Polytetrafluoroethylene.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.Polybenzimidazole.getProperties().removeProperty(GreatePropertyKeys.BELT);

	// Change properties of other rubber belts
	GTMaterials.Rubber.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.Rubber.setProperty(GreatePropertyKeys.BELT, new $BeltProperty([GTMaterials.Steel, $GreateMaterials.AndesiteAlloy], 20))
	
	GTMaterials.SiliconeRubber.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.SiliconeRubber.setProperty(GreatePropertyKeys.BELT, new $BeltProperty([GTMaterials.StainlessSteel, GTMaterials.Aluminium], 25))
	
	GTMaterials.StyreneButadieneRubber.setProperty(GreatePropertyKeys.BELT, new $BeltProperty([GTMaterials.Titanium, GTMaterials.StainlessSteel], 30))

	// Change stress levels
	let capacity = 32;
	$GreateMaterials.AndesiteAlloy.getProperty($GreatePropertyKeys.KINETIC).setMaxCapacity(capacity);
	GTMaterials.Steel.getProperty($GreatePropertyKeys.KINETIC).setMaxCapacity(capacity *= 4);
	GTMaterials.Aluminium.getProperty($GreatePropertyKeys.KINETIC).setMaxCapacity(capacity *= 4);
	GTMaterials.StainlessSteel.getProperty($GreatePropertyKeys.KINETIC).setMaxCapacity(capacity *= 4);
	GTMaterials.Titanium.getProperty($GreatePropertyKeys.KINETIC).setMaxCapacity(capacity *= 4);
	GTMaterials.TungstenSteel.getProperty($GreatePropertyKeys.KINETIC).setMaxCapacity(capacity *= 4);
	GTMaterials.RhodiumPlatedPalladium.getProperty($GreatePropertyKeys.KINETIC).setMaxCapacity(capacity *= 4);
	GTMaterials.NaquadahAlloy.getProperty($GreatePropertyKeys.KINETIC).setMaxCapacity(capacity *= 4);
	GTMaterials.Darmstadtium.getProperty($GreatePropertyKeys.KINETIC).setMaxCapacity(capacity *= 4);
	GTMaterials.Neutronium.getProperty($GreatePropertyKeys.KINETIC).setMaxCapacity(capacity *= 4);
}