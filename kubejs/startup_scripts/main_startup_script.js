// priority: 0
"use strict";

StartupEvents.registry('item', event => {
    registerGTCEuItems(event)
    registerTFGItems(event)
})

StartupEvents.registry('block', event => {
    registerTFGBlocks(event)
	registerBetterEndBlocks(event)
})

StartupEvents.registry('entity_type', event => {
	registerTFGEntityTypes(event)
})

BlockEvents.modification(event => {
	registerAdAstraBlockModifications(event)
})

ItemEvents.modification(event => {
	registerBeneathItemModifications(event)
	registerConstructionWandsItemModifications(event)
	registerCreateItemModifications(event)
	registerGTCEuItemModifications(event)
	registerMinecraftItemModifications(event)
})

StartupEvents.registry('fluid', event => {
	registerTFGFluids(event)
	registerAE2Fluids(event)
})

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
	registerGTCEuRecipeTypes(event)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {
	registerGTCEuMachines(event)
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
	registerAE2TagPrefixes(event)
	registerTFCTagPrefixes(event)
	registerGTCEuTagPrefixes(event)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
	registerAdAstraMaterials(event)
	registerAE2Materials(event)
	registerCreateMaterials(event)
	registerTFCMaterials(event)
	registerGTCEuMaterials(event)
	registerGreateMaterials(event)
	registerTFGMaterials(event)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
	registerTFCIconSets(event)
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

TFCEvents.registerFoodTrait(event => {
	registerTFGFoodTraits(event)
})

Platform.mods.primitive_creatures.name = "Primitive Creatures";
Platform.mods.tfg.name = "TerraFirmaGreg";
Platform.mods.kubejs.name = "TerraFirmaGreg";