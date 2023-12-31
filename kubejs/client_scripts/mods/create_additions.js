// priority: 0

const hideCreateAdditionsStuff = (event) => {
    global.CREATE_ADDITIONS_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

const hideCreateAdditionsFluids = (event) => {
    event.hide('createaddition:seed_oil')
    event.hide('createaddition:bioethanol')
}