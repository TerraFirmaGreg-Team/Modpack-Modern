// priority: 0

const registerFirmaLifeItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FIRMALIFE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Просто предметы для скрытия
    global.FIRMALIFE_HIDED_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Удаление тегов у руд
    event.removeAllTagsFrom("/tfc:ore/[^*]+/[^*]+/")
}

const registerFirmaLifeBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FIRMALIFE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Удаление тегов у руд
    event.removeAllTagsFrom("/tfc:ore/[^*]+/[^*]+/")

    // Для того, чтобы стенками greenhouse могли быть фреймы грега (для передачи воды)
    event.add('tfc:always_valid_greenhouse_wall', '#forge:frames')
}

const registerFirmaLifeFluidTags = (event) => {
    
    // Добавляем тег для скрытия в EMI
    event.add('c:hidden_from_recipe_viewers', 'firmalife:metal/chromium')
}

const registerFirmaLifePlacedFeatures = (event) => {
    const ALL_DISABLED_FIRMALIFE_VEINS = [
        'firmalife:vein/normal_chromite',
        'firmalife:vein/deep_chromite'
    ]

    // Удаление
    ALL_DISABLED_FIRMALIFE_VEINS.forEach(vein => {
        event.remove('tfc:in_biome/veins', vein)
    })
}