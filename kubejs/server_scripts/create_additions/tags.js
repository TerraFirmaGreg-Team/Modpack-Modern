// priority: 0

const registerCreateAdditionsItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.CREATE_ADDITIONS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)

        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerCreateAdditionsBlockTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.CREATE_ADDITIONS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}


//event.hide('createaddition:seed_oil')
//event.hide('createaddition:bioethanol')