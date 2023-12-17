// priority: 0

const hideMinecraftStuff = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

const registerMinecraftCategories = (event) => {
    event.remove('minecraft:plugins/campfire')
    event.remove('minecraft:plugins/composting') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/stripping') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/pathing') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/waxing') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/wax_scrapping') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/oxidizing') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/oxidation_scrapping') // TODO: Сделать с вариантами TFC
}
