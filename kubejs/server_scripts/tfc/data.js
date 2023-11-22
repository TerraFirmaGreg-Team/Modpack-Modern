// priority: 0

const registerTFCData = (event) => {
    registerAutoTFCItemHeats(event)

    addItemHeat(
        event, 
        'compressed_coke_clay',
        { item: 'gtceu:compressed_coke_clay' }, 
        0.5
    )
}

const registerAutoTFCItemHeats = (event) => {
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