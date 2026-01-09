// priority: 100
"use strict";

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
	registerTFCTagPrefixes(event)
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
	registerGTCEuMaterialModification(event)
	registerGreateMaterialModification(event)
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
