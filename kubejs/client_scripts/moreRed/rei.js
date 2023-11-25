// priority: 0

const hideMoreRedStuff = (event) => {
    moreRedItemsToHide.forEach(itemToHide => {
        event.hide(itemToHide)
    })
}

const registerMoreRedCategories = (event) => {
    event.remove('jumbofurnace:jumbo_smelting')
    event.remove('jumbofurnace:jumbo_furnace_upgrade')
}