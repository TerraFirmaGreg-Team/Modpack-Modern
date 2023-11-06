// priority: 0

const hideCreateStuff = (event) => {
    createItemsToHide.forEach(itemToHide => {
        event.hide(itemToHide)
    })
}