// priority: 0

const hideFirmaLifeStuff = (event) => {
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        global.TFC_ORE_TYPES.forEach(oreTypeName => {
            global.FIRMALIFE_ORE_MATERIALS.forEach(oreMaterialName => {
                event.hide(`firmalife:ore/${oreTypeName}_${oreMaterialName}/${stoneTypeName}`)
            })
        })
    })


    global.FIRMALIFE_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

const hideFirmaLifeFluids = (event) => {
    event.hide('firmalife:metal/chromium')
    event.hide('firmalife:metal/stainless_steel')
}