// priority: 0

const registerTFCDataForTreeTap = (event) => {
    registerTreeTapHeats(event)
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
const registerTreeTapHeats = (event) => {
    event.itemHeat('treetap:tap', 0.2345, null, null)
}