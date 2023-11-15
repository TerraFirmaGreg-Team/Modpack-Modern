// priority: 0

const hideSBStuff = (event) => {
    SBItemsToHide.forEach(itemToHide => {
        event.hide(itemToHide)
    })
}