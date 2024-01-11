// priority: 0

const hideAE2Stuff = (event) => {
    global.AE2_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })

    event.hide('ae2:facade')
}