// priority: 1

if (Platform.isLoaded('jei')) {
    
    JEIEvents.hideItems(event => {
        hideItems(event)
    })

    JEIEvents.hideFluids(event => {
        hideFluids(event)
    })

    JEIEvents.removeCategories(event => {
        removeCategories(event) // Не работает с EMI + JEI
    })
    
} else if (Platform.isLoaded('rei')) {
    
    REIEvents.hide('items', event => {
        hideItems(event)
    })

    REIEvents.hide('fluids', event => {
        hideFluids(event)
    })

    REIEvents.removeCategories(event => {
        removeCategories(event)
    })
    
    REIEvents.groupEntries(event => {})
}

const hideItems = (event) => {
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
    // hideChiselAndBitsStuff(event)
    hideFTBQuestsStuff(event)
}

const hideFluids = (event) => {
    hideTFCFluids(event)
    hideFirmaLifeFluids(event)

    hideCreateFluids(event)
    hideCreateAdditionsFluids(event)
}

const removeCategories = (event) => {
    registerMinecraftCategories(event)
    registerGTCEUCategories(event)
    registerMoreRedCategories(event)
}