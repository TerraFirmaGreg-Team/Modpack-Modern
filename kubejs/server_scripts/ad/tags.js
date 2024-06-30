

const registerAdItemTags = (event) => {
    
    global.AD_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerAdBlockTags = (event) => {
    
    global.AD_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}