// priority: 0

const registerGTCEUItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.GTCEU_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
