// priority: 0

const registerCreateAdditionsItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.CREATE_ADDITIONS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
