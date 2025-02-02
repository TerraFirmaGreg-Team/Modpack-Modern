// priority: 0

const registerTFCDataForWaterFlasks = (event) => {
    registerWaterFlasksHeats(event)
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
const registerWaterFlasksHeats = (event) => {
    event.itemHeat('waterflasks:unfinished_iron_flask', 0.2345, null, null)
    event.itemHeat('waterflasks:broken_iron_flask', 0.2345, null, null)
    event.itemHeat('waterflasks:iron_flask', 0.2345, null, null)
}