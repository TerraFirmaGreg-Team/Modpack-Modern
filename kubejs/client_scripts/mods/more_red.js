// priority: 0

const hideMoreRedStuff = (event) => {
    global.MORE_RED_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

const registerMoreRedCategories = (event) => {
    event.remove('jumbofurnace:jumbo_smelting')
    event.remove('jumbofurnace:jumbo_furnace_upgrade')
}