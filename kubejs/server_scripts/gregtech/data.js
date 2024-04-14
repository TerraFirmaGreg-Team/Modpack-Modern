// priority: 0

const registerTFCDataForGTCEU = (event) => {
    registerGTCEUHeats(event)
}

/**
 * event.itemHeat(
    ingredient: Ingredient, 
    heatCapacity: number, 
    forgingTemperature: @Nullable number, 
    weldingTemperature: @Nullable number, 
    name?: string
    )
 */
const registerGTCEUHeats = (event) => {
    event.itemHeat('gtceu:compressed_coke_clay', 0.1242, null, null)
}