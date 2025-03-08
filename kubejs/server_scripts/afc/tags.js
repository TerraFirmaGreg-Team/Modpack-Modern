const registerAFCItemTags = (event) =>{
    global.AFC_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerAFCBlockTags = (event) =>{
    global.AFC_DISABLED_ITEMS.forEach(block => {
        event.removeAllTagsFrom(block)
    })
}