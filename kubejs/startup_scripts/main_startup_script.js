// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded startup scripts)')

/**
 * Событие регистрации предметов.
 */
StartupEvents.registry('item', event => {
    // registerGTCEuItems(event)
    // registerTFGItems(event)
})

/**
 * Событие регистрации блоков.
 */
StartupEvents.registry('block', event => {
    // registerGTCEuBlocks(event)
    // registerTFGBlocks(event)    
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

})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', event => {
    // registerTFGFluids(event)
})

/**
 * Событие регистрации типов рецептов.
 */
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    // registerGTCEuRecipeTypes(event)
})

/**
 * Событие регистрации механизмов.
 */
GTCEuStartupEvents.registry('gtceu:machine', event => {
    // registerGTCEuMachines(event)
})

/**
 * Событие регистрации материалов.
*/
GTCEuStartupEvents.registry('gtceu:material', event => {
    registerGTCEuMaterials(event)
})

/**
 * Событие модификации материалов.
*/
GTCEuStartupEvents.materialModification(event => {
    
})

/**
 * Событие регистрации тэг префиксов.
*/
GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    registerGTCEuTagPrefixes(event)
})
