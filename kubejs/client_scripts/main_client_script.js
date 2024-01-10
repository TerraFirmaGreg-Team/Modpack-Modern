// priority: 1

JEIEvents.hideItems(event => {
    hideMinecraftStuff(event)
    hideTFCStuff(event)
    hideFirmaLifeStuff(event)
    hideFirmaCivStuff(event)
    hideGTCEUStuff(event)
    hideCreateStuff(event)
    hideAE2Stuff(event)
    hideSophisticatedBackpacksStuff(event)
    hideMoreRedStuff(event)
    hideRailWaysStuff(event)
    hideCreateAdditionsStuff(event)
    hideChiselAndBitsStuff(event)
})

// REIEvents.groupEntries(event => {
//     groupGTCEUStuff(event)
//     groupTFCStuff(event)
// })

JEIEvents.removeCategories(event => {
    registerMinecraftCategories(event)
    registerGTCEUCategories(event)
    registerMoreRedCategories(event)
})

JEIEvents.hideFluids(event => {
    hideTFCFluids(event)
    hideFirmaLifeFluids(event)

    hideCreateFluids(event)
    hideCreateAdditionsFluids(event)
})