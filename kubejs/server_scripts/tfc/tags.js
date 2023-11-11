// priority: 0

const registerTFCTags = (event) => {
    removeAllTagsItems.forEach(item => {
        event.removeAllTagsFrom(item)
    })
}