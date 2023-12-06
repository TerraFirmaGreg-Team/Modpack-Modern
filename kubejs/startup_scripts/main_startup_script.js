// priority: 1

/**
 * Событие регистрации предметов.
 */
StartupEvents.registry('item', (event) => {
    registerCreateItems(event);
    registerAE2Items(event);
})

/**
 * Событие регистрации блоков.
 */
StartupEvents.registry('block', (event) => {
    
})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', (event) => {
    registerAE2Liquids(event);
})