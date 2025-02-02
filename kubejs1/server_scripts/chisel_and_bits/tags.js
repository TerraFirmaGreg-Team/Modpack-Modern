// priority: 0

const registerChiselAndBitsItemTags = (event) => {
    
    if (Platform.isLoaded('chiselsandbits')) {
        global.CHISEL_AND_BITS_DISABLED_ITEMS.forEach(item => {
            event.removeAllTagsFrom(item)
            event.add('c:hidden_from_recipe_viewers', item)
        })
    }

    
}

const registerChiselAndBitsBlockTags = (event) => {
    
    if (Platform.isLoaded('chiselsandbits')) {
        global.CHISEL_AND_BITS_DISABLED_ITEMS.forEach(item => {
            event.removeAllTagsFrom(item)
        })
    }

    
}