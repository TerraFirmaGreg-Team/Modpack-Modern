// priority: 0

const registerGTCEUItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.GTCEU_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    global.GTCEU_HIDED_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Добавление тега EMI для скрытия всех руд
    event.add('c:hidden_from_recipe_viewers', '#forge:ores')

    //#region Пыли стоунтайпов в один тэг
    event.add('tfg:stone_dusts', 'gtceu:gabbro_dust')
    event.add('tfg:stone_dusts', 'gtceu:shale_dust')
    event.add('tfg:stone_dusts', 'gtceu:claystone_dust')
    event.add('tfg:stone_dusts', 'gtceu:limestone_dust')
    event.add('tfg:stone_dusts', 'gtceu:conglomerate_dust')
    event.add('tfg:stone_dusts', 'gtceu:dolomite_dust')
    event.add('tfg:stone_dusts', 'gtceu:chert_dust')
    event.add('tfg:stone_dusts', 'gtceu:chalk_dust')
    event.add('tfg:stone_dusts', 'gtceu:rhyolite_dust')
    event.add('tfg:stone_dusts', 'gtceu:dacite_dust')
    event.add('tfg:stone_dusts', 'gtceu:quartzite_dust')
    event.add('tfg:stone_dusts', 'gtceu:slate_dust')
    event.add('tfg:stone_dusts', 'gtceu:phyllite_dust')
    event.add('tfg:stone_dusts', 'gtceu:schist_dust')
    event.add('tfg:stone_dusts', 'gtceu:gneiss_dust')
    event.add('tfg:stone_dusts', 'gtceu:marble_dust')
    event.add('tfg:stone_dusts', 'gtceu:basalt_dust')
    event.add('tfg:stone_dusts', 'gtceu:diorite_dust')
    event.add('tfg:stone_dusts', 'gtceu:andesite_dust')
    event.add('tfg:stone_dusts', 'gtceu:granite_dust')

    event.add('tfg:stone_dusts', 'gtceu:stone_dust')

    //#endregion
}

const registerGTCEUBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.GTCEU_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
