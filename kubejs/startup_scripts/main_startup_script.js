// priority: 1

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
    registerGTCEuBlocks(event)
    registerTFGBlocks(event)    
})

/**
 * Событие изменения блоков.
 */
BlockEvents.modification(event => {
    modifyFirmaCivBlocks(event)
})

/**
 * Событие изменения предметов.
 */
ItemEvents.modification(event => {})

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

GTCEuStartupEvents.registry('gtceu:material', event =>
{
    registerTFGMaterials(event)
})

/**
 * Событие регистрации информации о составе предмета.
 */
// TFGStartupEvents.materialInfo(event => {
//     registerGTCEuMaterialInfo(event)
// })
