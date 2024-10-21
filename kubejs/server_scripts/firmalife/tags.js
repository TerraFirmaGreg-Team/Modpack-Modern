// priority: 0

const registerFirmaLifeItemTags = (event) => {
    
    //#region Удаление тегов и скрытие руд
    const ALL_FIRMALIFE_ORES = Ingredient.of(/firmalife:ore\/[^*]+\/[^*]+/).itemIds

    ALL_FIRMALIFE_ORES.forEach(element => {
        event.removeAllTagsFrom(element)
        event.add('c:hidden_from_recipe_viewers', element)
    })
    //#endregion

    //#region Удаление тегов и скрытие предметов
    global.FIRMALIFE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
    //#endregion

    //#region Скрытие предметов
    global.FIRMALIFE_HIDED_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })
    //#endregion
}

const registerFirmaLifeBlockTags = (event) => {
    
    //#region Удаление тегов и скрытие руд
    const ALL_FIRMALIFE_ORES = Ingredient.of(/firmalife:ore\/[^*]+\/[^*]+/).itemIds

    ALL_FIRMALIFE_ORES.forEach(element => {
        event.removeAllTagsFrom(element)
        event.add('c:hidden_from_recipe_viewers', element)
    })
    //#endregion

    //#region Удаление тегов и скрытие предметов
    global.FIRMALIFE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
    //#endregion

    //#region Для того, чтобы стенками greenhouse могли быть фреймы грега (для передачи воды)
    event.add('firmalife:always_valid_greenhouse_wall', '#forge:frames')
    // event.add('firmalife:always_valid_greenhouse_wall', '#forge:tiny_fluid_pipes')
    // event.add('firmalife:always_valid_greenhouse_wall', '#forge:small_item_pipes')
    // event.add('firmalife:always_valid_greenhouse_wall', '#forge:normal_item_pipes')
    // event.add('firmalife:always_valid_greenhouse_wall', '#forge:large_item_pipes')
    // Добавление труб в текущий тег не дает никакого результата, поэтому я сделал это через TFG-Core.
    //#endregion
}

const registerFirmaLifeFluidTags = (event) => {
    
    //#region Скрытие магического хрома
    event.add('c:hidden_from_recipe_viewers', 'firmalife:metal/chromium')
    //#endregion
}

const registerFirmaLifePlacedFeatures = (event) => {
    
    //#region Удаление из генерации жил
    const ALL_DISABLED_FIRMALIFE_VEINS = [
        'firmalife:vein/normal_chromite',
        'firmalife:vein/deep_chromite'
    ]

    ALL_DISABLED_FIRMALIFE_VEINS.forEach(vein => event.remove('tfc:in_biome/veins', vein))
    //#endregion
}