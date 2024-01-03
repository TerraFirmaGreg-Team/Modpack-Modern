// priority: 1

/**
 * Событие регистрации предметов.
 */
StartupEvents.registry('item', (event) => {
    registerGTCEuItems(event)
})

/**
 * Событие регистрации блоков.
 */
StartupEvents.registry('block', (event) => {
    registerGTCEuBlocks(event)
})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', (event) => {})

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