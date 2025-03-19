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
    // modifyFirmaCivBlocks(event)
})

/**
 * Событие изменения предметов.
 */
ItemEvents.modification(event => {
    //
})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', event => {
    registerTFGFluids(event)
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
    registerAE2Materials(event)
    registerTFCMaterials(event)
    registerGTCEuMaterials(event)
  
    registerTFGMaterials(event)
    registerGTCEuMaterials(event)
})

/**
 * Событие модификации материалов.
*/
GTCEuStartupEvents.materialModification(event => {
    registerGTCEuMaterialModification(event)
})
