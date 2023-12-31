// priority: 0

const hideCreateStuff = (event) => {
    global.CREATE_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

const hideCreateFluids = (event) => {
    event.hide('create:chocolate')
    event.hide('create:honey')
}