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
    hideFTBQuestsStuff(event)
})

// REIEvents.groupEntries(event => {
//     groupGTCEUStuff(event)
//     groupTFCStuff(event)
// })


JEIEvents.removeCategories(event => {
    // НЕ РАБОТАЕТ СУКА, РАЗРАБ НАСРАЛ!

    // registerMinecraftCategories(event)
    // registerGTCEUCategories(event)
    // registerMoreRedCategories(event)
    // 'jumbofurnace:jumbo_furnace_upgrade, 
    // event.remove('minecraft:campfire_cooking')
    // event.remove('jumbofurnace:jumbo_smelting')

    // console.log(event.getCategoryIds())

    // event.getCategoryIds()
})

JEIEvents.hideFluids(event => {
    hideTFCFluids(event)
    hideFirmaLifeFluids(event)

    hideCreateFluids(event)
    hideCreateAdditionsFluids(event)
})