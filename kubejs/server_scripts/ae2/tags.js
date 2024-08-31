// priority: 0

const registerAE2ItemTags = (event) => {
    
    event.add('c:hidden_from_recipe_viewers', "ae2:facade")

    // global.AE2_DISABLED_ITEMS.forEach(item => {
    //     event.removeAllTagsFrom(item)
    //     event.add('c:hidden_from_recipe_viewers', item)
    // })
}

const registerAE2BlockTags = (event) => {
    
    // global.AE2_DISABLED_ITEMS.forEach(item => {
    //     event.removeAllTagsFrom(item)
    // })
}