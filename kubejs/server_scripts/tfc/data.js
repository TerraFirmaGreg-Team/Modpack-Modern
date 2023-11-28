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
    Object.entries(global.METAL_TO_SPECS).forEach(pair => {
        let tfcMetalName = pair[0]
        let metalSpecifications = pair[1]

        metalSpecifications.props.forEach(propertyName => {
            let itemType = global.ITEM_TAG_TO_HEAT[propertyName]
            let pathToExistFile = `tfc:tfc/item_heats/metal/${tfcMetalName}_${propertyName}`
            
            if (itemType.heat_capacity == null) global.CREATE_EMPTY_JSON(event, pathToExistFile)
            else addItemHeat(
                event, 
                `metal/${tfcMetalName}_${propertyName}`,
                itemType.input(tfcMetalName), 
                itemType.heat_capacity, 
                metalSpecifications.forging_temp, 
                metalSpecifications.welding_temp
            )
        })
    })
}