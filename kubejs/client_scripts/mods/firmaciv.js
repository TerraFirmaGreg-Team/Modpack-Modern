// priority: 0

const hideFirmaCivStuff = (event) => {
    global.FIRMACIV_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

