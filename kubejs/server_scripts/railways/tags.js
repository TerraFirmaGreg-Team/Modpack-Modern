// priority: 0

const registerRailWaysItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.RAIL_WAYS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
