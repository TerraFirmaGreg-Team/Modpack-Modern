/** @param {Internal.TFCDataEventJS} event */
const registerWoodStructData = (event) =>
{
    global.getWoodStructArray().forEach(woodType =>
    {
        try
        {
            global.invokeIfValid(woodType.crafting_station, () => event.itemSize(woodType.crafting_station, "large", "heavy", `${woodType.name}_crafting_station`));
            if(woodType.tfgCore)
            {
                if(woodType.support)
                    event.support(`tfg:${woodType.name}_support_horizontal`, 2, 2, 4, woodType.support);
                
                //Add the fuel data, just get the first one in the tree data whatever i dont care.
                if(woodType.tree_data)
                {
                    let fuelData = null;
                    console.log(woodType.name + " Searching Fuel Data");
                    for (let index = 0; index < woodType.tree_data.length; index++) {
                        let element = woodType.tree_data[index];
                        
                        if(element.log_data && element.log_data.fuel_data)
                        {
                            console.log("Found fuel data at index " + index);
                            fuelData = element.log_data.fuel_data;
                            break;
                        }
                    }

                    if(fuelData !== null && fuelData !== undefined)
                    {   console.log("Adding fuel data to " + woodType.logsTag);
                        event.fuel(woodType.logsTag, fuelData.temperature, fuelData.duration, fuelData.purity);
                    }
                }
            }
        }
        catch(ex)
        {
            console.error(`Exception during Wood Struct TFCData generation for ${woodType.modName}:${woodType.name}: ` + ex);
        }
    })
}