// priority: 499

/**
 * Здесь регистрируются файлы датапаков (json).
 */
ServerEvents.highPriorityData(event => {
    registerTFCData(event)
})

/**
 * Здесь регистрируются тэги для блоков.
 */
ServerEvents.tags('block', event => {
    
})

/**
 * Здесь регистрируются тэги для предметов.
 */
ServerEvents.tags('item', event => {
    registerCreateTags(event)
    registerTFCTags(event)
})

/**
 * Здесь регистрируются рецепты (те же датапаки, но это событие немного специфичней).
 */
ServerEvents.recipes(event => {
    registerSBRecipes(event)
    registerCreateRecipes(event)
    registerExtendedCraftingRecipes(event)
    registerMinecraftRecipes(event)
    registerTFCRecipes(event)
})

/**
 * Здесь регистрируется кастомный дроп.
 */
LootJS.modifiers((event) => {
    modifyLootGT(event)
});

/**
 * Смываем за разрабами GTCEu и исправляем их баги.
 * Баги:
 * 1. Не работает очистка дерева от коры.
 * 2. Не работает очистка меди от меда.
 * 3. Не работает очистка меди от ржавчины.
 */
ItemEvents.rightClicked(event => {
    const block = event.getTarget().block
    const item = event.getItem()

    const blockId = block.getId()
    const axeItemTagName = "tfc:axes"
    
    if (block == undefined) return;

    if (item.hasTag(axeItemTagName))
    {
        // Wood, Log -> Bark
        if (blockId.includes("tfc:wood/log/"))
        {
            const woodName = block.getId().split('/')[2]

            block.set("tfc:wood/stripped_log/" + woodName, block.getProperties())
        }
        else if (blockId.includes("tfc:wood/wood/"))
        {
            const woodName = blockId.split('/')[2]
    
            block.set("tfc:wood/stripped_wood/" + woodName, block.getProperties())
        }
        // Wax Scrapping
        else if (false)
        {

        }
        // Scrap Scrapping
        else if (false)
        {

        }
    }
})