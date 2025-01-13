// priority: 0
//f storage

const registerFStorageItemTags = (event) => {

    global.FS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}
