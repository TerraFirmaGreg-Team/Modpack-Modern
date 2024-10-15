// priority: 0

const registerAlekiShipsItemTags = (event) => {
    global.ALEKI_SHIPS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
            event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerAlekiShipsBlockTags = (event) => {
    global.ALEKI_SHIPS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}