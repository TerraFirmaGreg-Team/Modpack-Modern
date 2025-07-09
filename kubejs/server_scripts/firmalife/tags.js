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

    event.add('minecraft:trimmable_armor', '#firmalife:beekeeper_armor')
    
    event.add('tfc:foods/usable_in_salad', 'firmalife:food/pickled_egg')

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

    //Allows any block with the word "brick" in its id to be used as oven insulation.
    //Add blacklisted words to the const with | between.
    const brick_blacklist = ('drying|additionalplacements');
    event.add('firmalife:oven_insulation', `/^(?=.*brick)(?!.*(${brick_blacklist})).*/`);

    event.add('firmalife:oven_insulation', 'firmalife:stovetop_pot');
    event.add('firmalife:oven_insulation', 'firmalife:vat');
}

const registerFirmaLifeFluidTags = (event) => {
    
    // Добавляем тег для скрытия в EMI
    event.add('c:hidden_from_recipe_viewers', 'firmalife:metal/chromium')
    event.add('c:hidden_from_recipe_viewers', 'firmalife:chocolate')

    event.add('firmalife:mixable', 'tfc:spring_water')
    event.add('firmalife:mixable', 'tfcchannelcasting:white_chocolate')
    event.add('firmalife:mixable', 'tfcchannelcasting:milk_chocolate')
    event.add('firmalife:mixable', 'tfcchannelcasting:dark_chocolate')
    event.add('firmalife:mixable', 'afc:maple_syrup')
    event.add('firmalife:mixable', 'afc:birch_syrup')
}