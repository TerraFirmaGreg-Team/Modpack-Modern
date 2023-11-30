// priority: 0

const hideAdAstraStuff = (event) => {
    global.AD_ASTRA_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}