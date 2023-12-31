// priority: 0

const registerMinecraftItemTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')
}