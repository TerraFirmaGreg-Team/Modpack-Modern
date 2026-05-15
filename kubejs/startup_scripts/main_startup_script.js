// priority: 100
"use strict";

/** 
 * Correct strings to replace invalid characters for use in recipe IDs.
 * @param {string} value - The string to correct.
 * @returns {string} The corrected string. Example: `minecraft:iron_ingot` -> `minecraft_iron_ingot`
 */
global.linuxUnfucker = function(value) {
	let str = (value === undefined || value === null) ? "" : String(value);
	// 1. Convert to en_us lowercase first to handle languages like Turkish.
	// 2. Replace all characters except "a-z", "0-9", and "_" with "_".
	// 3. Remove any leading and trailing underscores.
	return str.toLocaleLowerCase('en-US').replace(/[^0-9_a-z]+/g, "_").replace(/^_+|_+$/g, "");
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
	registerMinecraftBlockModifications(event)
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
