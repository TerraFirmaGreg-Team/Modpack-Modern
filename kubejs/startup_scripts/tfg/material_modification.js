// priority: 0
"use strict";

const registerTFGMaterialModification = (event) => {
	registerTFCMaterialModification(event);
	registerTFGFlagsMaterialModification(event);
	registerTFGOresMaterialModification(event);
	registerTFGPropertyMaterialModification(event);
	registerTFGToolMaterialModification(event);
	registerTFGFluidMaterialModification(event);
	registerTFGComponentMaterialModification(event);
	registerTFGColorsMaterialModification(event);
}