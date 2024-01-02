// priority: 0

const hideChiselAndBitsStuff = (event) => {
    global.CHISEL_AND_BITS_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}