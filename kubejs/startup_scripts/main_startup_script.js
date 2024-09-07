// priority: 1

/**
 * Событие регистрации предметов.
 */
StartupEvents.registry('item', event => {
    registerGregTechItems(event)
})

/**
 * Событие регистрации блоков.
 */
StartupEvents.registry('block', event => {
    registerGregTechBlocks(event)
})

/**
 * Событие изменения блоков.
 */
BlockEvents.modification(event => {})

/**
 * Событие изменения предметов.
 */
ItemEvents.modification(event => {})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', event => {})

/**
 * Событие регистрации типов рецептов.
 */
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    registerGregTechRecipeTypes(event)
})

/**
 * Событие регистрации механизмов.
 */
GTCEuStartupEvents.registry('gtceu:machine', event => {
    registerGregTechMachines(event)
})

/**
 * Событие регистрации слоев пород GTM.
 */
GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    registerGregTechWorldGenLayers(event)
})

/**
 * Событие регистрации информации о составе предмета.
 */
TFGStartupEvents.materialInfo(event => {
    registerGregTechMaterialInfo(event)
})