// priority: 0

const emptyJson = {
    conditions: [
        { type: "forge:false" }
    ]
}

const registerTFCItemHeats = (event) => {
    for (const [tfcMetalName, metalSpecifications] of Object.entries(Metals)) {
        metalSpecifications.props.forEach(propertyName => {
            let itemType = ItemHeats[propertyName]
            let path = `tfc:tfc/item_heats/metal/${tfcMetalName}_${propertyName}`
            let metalName = (metalSpecifications.customName != undefined) ? metalSpecifications.customName : tfcMetalName
            
            if (itemType.heat_capacity == null) {
                event.addJson(path, emptyJson)
            }
            else {
                let ingredient = itemType.input(metalName)

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

const registerTFCHeatingRecipes = (event) => {
    for (const [tfcMetalName, metalSpecifications] of Object.entries(Metals)) {
        metalSpecifications.props.forEach(propertyName => {
            let path = `tfc:recipes/metal/${tfcMetalName}_${propertyName}`
            let itemType = ItemHeats[propertyName]
            let metalName = (metalSpecifications.customName != undefined) ? metalSpecifications.customName : tfcMetalName
            
            if (itemType.heat_capacity == null) {
                event.addJson(path, emptyJson)
            }
            else {
                let ingredient = itemType.input(metalName)

                let json

                if (typeof(itemType.metal_amount) == "object")
                {
                    console.log(itemType.metal_amount)
                    if (itemType.metal_amount[metalName] != undefined)
                    {
                        let customMetalName = itemType.metal_amount[metalName].metalName
                        let metalAmount = itemType.metal_amount[metalName].amount
                        
                        json = {
                            type: "tfc:heating",
                            ingredient: ingredient,
                            result_fluid: {
                              fluid: `gtceu:${customMetalName}`,
                              amount: metalAmount
                            },
                            temperature: metalSpecifications.melt_temp,
                            use_durability: (propertyName.includes('head') || propertyName.includes('blade')) ? true : false
                        }
                    }
                }
                else {
                    json = {
                        type: "tfc:heating",
                        ingredient: ingredient,
                        result_fluid: {
                          fluid: `gtceu:${metalName}`,
                          amount: itemType.metal_amount
                        },
                        temperature: metalSpecifications.melt_temp,
                        use_durability: (propertyName.includes('head') || propertyName.includes('blade')) ? true : false
                    }
                }

                event.addJson(path, json)
            }
        })
    }
}

const registerTFCData = (event) => {
    registerTFCItemHeats(event)
    registerTFCHeatingRecipes(event)
}