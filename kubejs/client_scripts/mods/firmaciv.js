// priority: 0

const hideFirmaLifeStuff = (event) => {
    global.FIRMACIV_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

