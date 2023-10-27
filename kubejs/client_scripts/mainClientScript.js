// priority: 0

REIEvents.hide('item', event => {
    hideGTStuff(event)
    hideTFCStuff(event)
    hideMinecraftStuff(event)
})


REIEvents.groupEntries(event => {
    groupGTStuff(event)
})
