// priority: 0

const hideGTCEUStuff = (event) => {
    global.GTCEU_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

const registerGTCEUCategories = (event) => {
    event.remove('gtceu:primitive_blast_furnace')
}