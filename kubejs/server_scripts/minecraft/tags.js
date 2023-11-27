// priority: 0

const registerMinecraftItemTags = (event) => {
    removeAllTagMinecraftItems.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}