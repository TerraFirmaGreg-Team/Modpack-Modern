// priority: 199

REIEvents.hide('item', event => {
    hideGTStuff(event)
    hideTFCStuff(event)
    hideCreateStuff(event)
    hideMinecraftStuff(event)
})


REIEvents.groupEntries(event => {
    groupGTStuff(event)
})
