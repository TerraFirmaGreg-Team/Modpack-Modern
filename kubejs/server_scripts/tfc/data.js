// priority: 0

const registerTFCData = (event) => {
    registerTFCItemHeats(event)
}

const registerTFCItemHeats = (event) => {
    for (const [tfcMetalName, metalSpecifications] of Object.entries(Metals)) {
        metalSpecifications.props.forEach(propertyName => {
            let itemType = ItemHeats[propertyName]
            let pathToExistFile = `tfc:tfc/item_heats/metal/${tfcMetalName}_${propertyName}`
            
            if (itemType.heat_capacity == null) addEmptyJson(event, pathToExistFile)
            else addItemHeat(
                event, 
                `metal/${tfcMetalName}_${propertyName}`,
                itemType.input(tfcMetalName), 
                itemType.heat_capacity, 
                metalSpecifications.forging_temp, 
                metalSpecifications.welding_temp
            )
        })
    }
}

