// priority: 0

const hideMinecraftStuff = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        //event.hide(item)
    })

    //event.hide(/spawn_egg/)
    //event.hide('minecraft:light')
    //event.hide('minecraft:repeating_command_block')
    //event.hide('minecraft:command_block')
    //event.hide('minecraft:structure_void')
    // event.hide('minecraft:barrier')
}

const groupMinecraftStuff = (event) => {
    
}

const registerMinecraftCategories = (event) => {
    event.remove('minecraft:plugins/campfire')
    event.remove('minecraft:plugins/composting') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/stripping') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/pathing') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/waxing') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/wax_scraping') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/oxidizing') // TODO: Сделать с вариантами TFC
    event.remove('minecraft:plugins/oxidation_scraping') // TODO: Сделать с вариантами TFC
}
