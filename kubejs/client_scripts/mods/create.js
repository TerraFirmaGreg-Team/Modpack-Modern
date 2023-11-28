// priority: 0

const hideCreateStuff = (event) => {
    global.CREATE_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}