// priority: 0

const registerFramedBlocksItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FRAMEDBLOCKS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerFramedBlocksBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.FRAMEDBLOCKS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}
