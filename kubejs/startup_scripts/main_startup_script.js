// priority: 0

/**
 * Событие регистрации предметов.
 */
StartupEvents.registry('item', event => {
    registerGTCEuItems(event)
    registerTFGItems(event)
})

/**
 * Событие регистрации блоков.
 */
StartupEvents.registry('block', event => {
    registerTFGBlocks(event)    
})

/**
 * Событие изменения блоков.
 */
BlockEvents.modification(event => {
    registerAdAstraBlockModifications(event)
})

/**
 * Событие изменения предметов.
 */
ItemEvents.modification(event => {
    registerBeneathItemModifications(event)
    registerConstructionWandsItemModifications(event)
    registerCreateItemModifications(event)
    registerMinecraftItemModifications(event)
})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', event => {
    registerTFGFluids(event)
    registerAE2Fluids(event)
})

/**
 * Событие регистрации типов рецептов.
 */
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    registerGTCEuRecipeTypes(event)
})

/**
 * Событие регистрации механизмов.
 */
GTCEuStartupEvents.registry('gtceu:machine', event => {
    registerGTCEuMachines(event)
})

/**
 * Событие регистрации тэг префиксов.
*/
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
    registerTFGMaterials(event)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    registerTFCIconSets(event)
})

/**
 * Событие модификации материалов.
*/
GTCEuStartupEvents.materialModification(event => {
    registerGTCEuMaterialModification(event)
})


GTCEuStartupEvents.registry('gtceu:dimension_marker', event => {
    registerTFGDimensionMarkers(event)
})


Platform.mods.kaolinclayze.name = "Primitive Creatures";
Platform.mods.tfg.name = "TerraFirmaGreg";
Platform.mods.kubejs.name = "TerraFirmaGreg";