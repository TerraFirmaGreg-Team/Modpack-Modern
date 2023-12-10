// priority: 0

const registerFirmaLifeItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FIRMALIFE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}

const registerFirmaLifePlacedFeatures = (event) => {
    event.remove('tfc:in_biome/veins', 'firmalife:vein/normal_chromite')
    event.remove('tfc:in_biome/veins', 'firmalife:vein/deep_chromite')
}
