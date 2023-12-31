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
StartupEvents.registry('block', (event) => {})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', (event) => {})