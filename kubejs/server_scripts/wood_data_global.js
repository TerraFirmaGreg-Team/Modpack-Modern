/** @param {Internal.TFCDataEventJS} event */
const registerWoodStructData = (event) =>
{
    global.TFC_WOOD_STRUCT.forEach(woodType =>
    {
        console.log("Generating Wood Struct Data for " + woodType.modName + ":" + woodType.name);
        global.invokeIfNotNull(woodType.crafting_station, () => event.itemSize(woodType.crafting_station, "large", "heavy", `${woodType.name}_crafting_station`));
    })
}