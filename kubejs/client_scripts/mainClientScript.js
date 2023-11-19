// priority: 199

REIEvents.hide('item', event => {
    hideGTStuff(event)
    hideTFCStuff(event)
    hideCreateStuff(event)
    hideMinecraftStuff(event)
    hideExtendedCraftingStuff(event)
    hideSBStuff(event)
})


REIEvents.groupEntries(event => {
    groupGTStuff(event)
})

REIEvents.removeCategories(event => {
    registerGTCategories(event)
})