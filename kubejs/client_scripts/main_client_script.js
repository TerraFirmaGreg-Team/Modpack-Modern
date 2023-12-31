// priority: 1

REIEvents.hide('item', event => {
    hideMinecraftStuff(event)
    hideTFCStuff(event)
    hideFirmaLifeStuff(event)
    hideGTCEUStuff(event)
    hideCreateStuff(event)
    hideAE2Stuff(event)
    hideAdAstraStuff(event)
    hideSophisticatedBackpacksStuff(event)
    hideMoreRedStuff(event)
    hideRailWaysStuff(event)
    hideCreateAdditionsStuff(event)
})

REIEvents.groupEntries(event => {
    groupGTCEUStuff(event)
    groupTFCStuff(event)
})

REIEvents.removeCategories(event => {
    registerMinecraftCategories(event)
    registerGTCEUCategories(event)
    registerMoreRedCategories(event)
})

REIEvents.hide('fluid', event => {
    hideTFCFluids(event)
    hideFirmaLifeFluids(event)

    hideCreateFluids(event)
    hideCreateAdditionsFluids(event)
})
