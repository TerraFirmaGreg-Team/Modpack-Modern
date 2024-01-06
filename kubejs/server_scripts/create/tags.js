// priority: 0

const registerCreateItemTags = (event) => {

    // Удаление тегов у отключенных предметов
    global.CREATE_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.add('tfg:colored_valve_handles', `create:${dye}_valve_handle`)
        
        if (dye != 'white') event.add('tfg:colored_seats', `create:${dye}_seat`)
    })
}

const registerCreateFluidTags = (event) => {
    event.add('create:bottomless/allow', 'tfc:fresh_water')
    event.add('create:bottomless/allow', 'tfc:salt_water')
}