// priority: 0

const registerChiselAndBitsItemTags = (event) => {
    
    global.CHISEL_AND_BITS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
    
    // event.add('c:hidden_from_recipe_viewers', 'ae2:facade') // hide bits
}

const registerChiselAndBitsBlockTags = (event) => {
    
    global.CHISEL_AND_BITS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}