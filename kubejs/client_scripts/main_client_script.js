// priority: 1

REIEvents.hide('item', event => {
    
    hideMinecraftStuff(event)
    /*hideTFCStuff(event)
    hideFirmaLifeStuff(event)
    hideGTCEUStuff(event)
    hideCreateStuff(event)
    hideAE2Stuff(event)
    hideAdAstraStuff(event)
    hideSophisticatedBackpacksStuff(event)
    hideMoreRedStuff(event)
    hideSmallShipsStuff(event)*/
})

REIEvents.groupEntries(event => {
    /*groupGTCEUStuff(event)
    groupTFCStuff(event)*/
    groupMinecraftStuff(event)
})

REIEvents.removeCategories(event => {
    registerMinecraftCategories(event)
    registerGTCEUCategories(event)
    registerMoreRedCategories(event)
})

REIEvents.hide('fluid', event => {
    hideTFCFluids(event)
    hideFirmaLifeFluids(event)
})
