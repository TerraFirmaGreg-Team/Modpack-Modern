// priority: 0

const hideSophisticatedBackpacksStuff = (event) => {
    sophisticatedbackpacksItemsToHide.forEach(itemToHide => {
        event.hide(itemToHide)
    })
}