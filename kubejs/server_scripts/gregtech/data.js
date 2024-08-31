// priority: 0

const registerTFCDataForGregTech = (event) => {
    registerGTCEUHeats(event)
}

const registerGTCEUHeats = (event) => {
    event.itemHeat('gtceu:compressed_coke_clay', 0.1242, null, null)
}