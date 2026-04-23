// priority: 100
"use strict";

/** 
 * Correct strings to replace invalid characters and convert to snake_case.
 * @param {string} value - The string to correct.
 * @returns {string} The corrected string. Example: `minecraft:iron_ingot` -> `minecraft_iron_ingot`
 */
global.linuxUnfucker = function(value) {
	let str = (value === undefined || value === null) ? "" : String(value);

	str = str.replace(/[:/\-.\s]+/g, ' ');
	str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
	str = str.replace(/([A-Z])([A-Z][a-z])/g, '$1 $2');

	let parts = str.match(/[A-Z]+[0-9]*|[a-z]+[0-9]*|[0-9]+/g);
	if (!parts) return "";
	for (let i = 0; i < parts.length; i++) parts[i] = parts[i].toLowerCase();
	return parts.join('_');
};

StartupEvents.registry('item', event => {
    registerTFGItems(event)
})

StartupEvents.registry('block', event => {
	registerTFGBlocks(event)
})

BlockEvents.modification(event => {
	registerAdAstraBlockModifications(event)
	registerSpeciesBlockModifications(event)
})

ItemEvents.modification(event => {
	registerAdAstraItemModifications(event)
	registerBeneathItemModifications(event)
	registerCreateItemModifications(event)
	registerFirmalifeItemModifications(event)
	registerGTCEuItemModifications(event)
	registerMinecraftItemModifications(event)
    registerSNSItemModifications(event)
	registerTFGItemModifications(event)
})

StartupEvents.registry('fluid', event => {
	registerTFGFluids(event)
})

StartupEvents.registry('sound_event', event => {
	registerTFGSounds(event)
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	registerGTCEuRecipeTypes(event)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
	registerGTCEuMachines(event)
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
	registerAE2TagPrefixes(event)
	registerGTCEuTagPrefixes(event)
	registerTFGTagPrefixes(event)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
	registerAE2Materials(event)
	registerCreateMaterials(event)
	registerGreateMaterials(event)
	registerTFGMaterials(event)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
	registerTFGIconSets(event)
})

GTCEuStartupEvents.materialModification(event => {
	registerGreateMaterialModification(event)
	registerTFGMaterialModification(event)
})

GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
	registerTFGDimensionMarkers(event)
})

GTCEuStartupEvents.registry("gtceu:element", event => {
	registerTFGElement(event)
})

GTCEuStartupEvents.craftingComponents(event => {
	registerTFGCraftingComponents(event)
})

Platform.mods.primitive_creatures.name = "Primitive Creatures";
Platform.mods.tfg.name = "TerraFirmaGreg";
Platform.mods.kubejs.name = "TerraFirmaGreg";
Platform.mods.wan_ancient_beasts.name = "Wan's Ancient Beasts";
