// priority: 199

REIEvents.hide('item', event => {
    hideGTStuff(event)
    hideTFCStuff(event)
    hideCreateStuff(event)
    hideMinecraftStuff(event)
    hideExtendedCraftingStuff(event)
    hideSBStuff(event)
    hideMoreRedStuff(event)
    hideSmallShipsStuff(event)
})


REIEvents.groupEntries(event => {
    groupGTStuff(event)
    groupTFCStuff(event)
})

REIEvents.removeCategories(event => {
    registerGTCategories(event)
    registerMoreRedCategories(event)
})