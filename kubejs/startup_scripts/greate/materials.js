// priority: 0
"use strict";

const registerGreateMaterials = (event) => {
	// Belt materials should already have an ingot and plate item already

	// Wood belt
	GreateMaterials.AndesiteAlloy.setProperty(GreatePropertyKeys.BELT, new BeltProperty([GreateMaterials.AndesiteAlloy], 5))

	// Leather belt
	GTMaterials.Stone.setProperty(GreatePropertyKeys.BELT, new BeltProperty([GreateMaterials.AndesiteAlloy, GTMaterials.Steel], 10))

	// Remove plastic belts
	GTMaterials.Polyethylene.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.Polytetrafluoroethylene.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.Polybenzimidazole.getProperties().removeProperty(GreatePropertyKeys.BELT);

	// Change properties of other rubber belts
	GTMaterials.Rubber.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.Rubber.setProperty(GreatePropertyKeys.BELT, new BeltProperty([GTMaterials.Steel, GTMaterials.Aluminium], 20))

	GTMaterials.SiliconeRubber.getProperties().removeProperty(GreatePropertyKeys.BELT);
	GTMaterials.SiliconeRubber.setProperty(GreatePropertyKeys.BELT, new BeltProperty([GTMaterials.Aluminium, GTMaterials.StainlessSteel], 25))

	GTMaterials.StyreneButadieneRubber.setProperty(GreatePropertyKeys.BELT, new BeltProperty([GTMaterials.StainlessSteel, GTMaterials.Titanium], 30))

	// Change RPM limits	
	let rpm = 32;
	GreateMaterials.AndesiteAlloy.getProperty(GreatePropertyKeys.KINETIC).setMaxSpeed(rpm);
	GTMaterials.Steel.getProperty(GreatePropertyKeys.KINETIC).setMaxSpeed(rpm *= 2);
	GTMaterials.Aluminium.getProperty(GreatePropertyKeys.KINETIC).setMaxSpeed(rpm *= 2);
	GTMaterials.StainlessSteel.getProperty(GreatePropertyKeys.KINETIC).setMaxSpeed(rpm *= 2);
	GTMaterials.Titanium.getProperty(GreatePropertyKeys.KINETIC).setMaxSpeed(rpm *= 2);
	// unused, but here for completion
	GTMaterials.TungstenSteel.getProperty(GreatePropertyKeys.KINETIC).setMaxSpeed(rpm);
	GTMaterials.RhodiumPlatedPalladium.getProperty(GreatePropertyKeys.KINETIC).setMaxSpeed(rpm);
	GTMaterials.NaquadahAlloy.getProperty(GreatePropertyKeys.KINETIC).setMaxSpeed(rpm);
	GTMaterials.Darmstadtium.getProperty(GreatePropertyKeys.KINETIC).setMaxSpeed(rpm);
	GTMaterials.Neutronium.getProperty(GreatePropertyKeys.KINETIC).setMaxSpeed(rpm);
}