// priority: 499

/**
 * Здесь регистрируются файлы датапаков (json).
 * Срабатывает до инициализации рецептов.
 */
ServerEvents.highPriorityData(event => {
    registerTFCData(event)
})

/**
 * Здесь регистрируются тэги для блоков.
 */
ServerEvents.tags('block', event => {
    registerTFCBlocksTags(event)
})

/**
 * Здесь регистрируются тэги для предметов.
 */
ServerEvents.tags('item', event => {
    registerCreateTags(event)
    registerTFCItemTags(event)
})

/**
 * Здесь регистрируются рецепты (те же датапаки, но это событие немного специфичней).
 * Срабатывает после инициализации датапаков.
 */
ServerEvents.recipes(event => {
    registerMinecraftRecipes(event)
    registerGTRecipes(event)
    registerTFCRecipes(event)
    registerAARecipes(event)
    registerAE2Recipes(event)
    registerCreateRecipes(event)
    registerSBRecipes(event)
    registerExtendedCraftingRecipes(event)
    registerTreeTapRecipes(event)
    registerMCWRecipes(event)
})

/**
 * Здесь регистрируется кастомный дроп.
 */
LootJS.modifiers((event) => {
    modifyLootGT(event)
});