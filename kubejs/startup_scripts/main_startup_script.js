// priority: 1

/**
 * Событие регистрации предметов.
 */
StartupEvents.registry('item', (event) => {
    registerCreateItems(event);
})

/**
 * Событие регистрации блоков.
 */
StartupEvents.registry('block', (event) => {
    
})