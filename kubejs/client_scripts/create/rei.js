// priority: 0

const hideCreateStuff = (event) => {
    global.createItemsToHide.forEach(itemToHide => {
        event.hide(itemToHide)
    })
}