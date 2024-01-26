// priority: 0

const registerFirmaLifeItemTags = (event) => {
    removeAllTagsFromDisabledItemsFirmaLife(event)
}

const registerFirmaLifeBlockTags = (event) => {
    removeAllTagsFromDisabledItemsFirmaLife(event)
}

const registerFirmaLifePlacedFeatures = (event) => {
    event.remove('tfc:in_biome/veins', 'firmalife:vein/normal_chromite')
    event.remove('tfc:in_biome/veins', 'firmalife:vein/deep_chromite')
}

const removeAllTagsFromDisabledItemsFirmaLife = (event) => {
    // Удаление тегов у отключенных предметов
    global.FIRMALIFE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Удаление тегов у руд
    event.removeAllTagsFrom("/tfc:ore/[^*]+/[^*]+/")
}
