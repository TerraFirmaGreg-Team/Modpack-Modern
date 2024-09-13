// priority: 0

const registerMinecraftItemTags123 = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        // event.removeAllTagsFrom(item)
        // event.add('c:hidden_from_recipe_viewers', item)
    })

    // global.MINECRAFT_HIDED_ITEMS.forEach(item => {
    //     event.add('c:hidden_from_recipe_viewers', item)
    // })

    event.add('tfc:lumber', 'tfg:crimson_lumber')
    event.add('tfc:lumber', 'tfg:warped_lumber')

    // // Теперь обсидиан сторадж блок
    // event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')

    // // Бамбуковые полублоки
    // event.add('tfg:bamboo_slabs', 'minecraft:bamboo_slab')
    // event.add('tfg:bamboo_slabs', 'minecraft:bamboo_mosaic_slab')
}

const registerMinecraftBlockTags123 = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        // event.removeAllTagsFrom(item)
    })

    // // Теперь обсидиан сторадж блок
    // event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')
}