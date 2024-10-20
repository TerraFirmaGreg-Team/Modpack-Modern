// priority: 0

const registerAlekiRoofsItemTags = (event) => {
    global.ALEKI_ROOFS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    //#region  Бамбуковые крыши в один тег
    event.add('tfg:bamboo_roofings', 'alekiroofs:bamboo_roofing')
    event.add('tfg:bamboo_roofings', 'alekiroofs:bamboo_mosaic_roofing')
    //#endregion
}

const registerAlekiRoofsBlockTags = (event) => {
    global.ALEKI_ROOFS_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}