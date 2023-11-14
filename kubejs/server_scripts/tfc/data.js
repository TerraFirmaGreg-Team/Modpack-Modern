// priority: 0

const registerTFCData = (event) => {
    registerTFCItemHeats(event)
}

const registerTFCItemHeats = (event) => {
    for (const [tfcMetalName, metalSpecifications] of Object.entries(Metals)) {
        metalSpecifications.props.forEach(propertyName => {
            let itemType = ItemHeats[propertyName]
            let path = `tfc:tfc/item_heats/metal/${tfcMetalName}_${propertyName}`
            
            if (itemType.heat_capacity == null) {
                event.addJson(path, emptyJson)
            }
            else {
                let ingredient = itemType.input(tfcMetalName)

                let json = {
                    ingredient: ingredient,
                    heat_capacity: itemType.heat_capacity,
                    forging_temperature: metalSpecifications.forging_temp,
                    welding_temperature: metalSpecifications.welding_temp
                }
                event.addJson(path, json)
            }
        })
    }
}

