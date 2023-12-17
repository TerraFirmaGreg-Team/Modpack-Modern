// priority: 1

const $SimpleTieredMachine = Java.loadClass('com.gregtechceu.gtceu.api.machine.SimpleTieredMachine')

/**
 * Событие регистрации предметов.
 */
StartupEvents.registry('item', (event) => {})

/**
 * Событие регистрации блоков.
 */
StartupEvents.registry('block', (event) => {})

/**
 * Событие регистрации жидкостей.
 */
StartupEvents.registry('fluid', (event) => {})