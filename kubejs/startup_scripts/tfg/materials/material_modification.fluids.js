// priority: 0
"use strict";

function registerTFGFluidMaterialModification(event) {
	const $FLUID_PROPERTY = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty');
	const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys');

	global.MINECRAFT_DYE_NAMES.forEach(colorName => {
		let material = GTMaterials.get(`gtceu:${colorName}_dye`);
		let property = material.getProperty(PropertyKey.FLUID);
		property.getStorage().store($FluidStorageKeys.LIQUID, () => Fluid.of(`tfc:${colorName}_dye`).fluid, null);
	});

	let lyeFluidProperty = new $FLUID_PROPERTY();
	lyeFluidProperty.getStorage().store($FluidStorageKeys.LIQUID, () => Fluid.of('tfc:lye').fluid, null);
	GTMaterials.SodiumHydroxide.setProperty(PropertyKey.FLUID, lyeFluidProperty);
}