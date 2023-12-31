// priority: 0

const hideRailWaysStuff = (event) => {
    global.RAIL_WAYS_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}