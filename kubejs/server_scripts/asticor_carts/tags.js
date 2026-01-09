// priority: 0
"use strict";

const registerAsticorCartsItemTags = (event) => {
    
    global.ASTICOR_CARTS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    global.TFC_WOOD_TYPES.forEach(wood => {
        event.add('c:hidden_from_recipe_viewers', `tfcastikorcarts:postilion/${wood}`)
    })
}

const registerAsticorCartsBlockTags = (event) => {
    
    global.ASTICOR_CARTS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}