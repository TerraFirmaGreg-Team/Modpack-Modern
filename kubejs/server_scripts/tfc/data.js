// priority: 0

const registerTFCData = (event) => {
    
    const emptyJson = {
        conditions: [
            { type: "forge:false" }
        ]
      }

    const itemJson = (itemName, heat_capacity_input, forging_temperature_input, welding_temperature_input) => {
        return {
            ingredient: {
                item: itemName
            },
            heat_capacity: heat_capacity_input,
            forging_temperature: forging_temperature_input,
            welding_temperature: welding_temperature_input
        }
    }

    const tagJson = (tagName, heat_capacity_input, forging_temperature_input, welding_temperature_input) => {
        return {
            ingredient: {
                tag: tagName
            },
            heat_capacity: heat_capacity_input,
            forging_temperature: forging_temperature_input,
            welding_temperature: welding_temperature_input
        }
    }

    for (const [metal, metalSpecs] of Object.entries(metalToSpecs)) {
        
        let metalName = (metalSpecs.customName != null) ? metalSpecs.customName : metal

        metalSpecs.props.forEach(propName => {
            let json
            let property = itemTypeToHeat[propName]

            if (property.useTag) json = tagJson(`forge:${property.hasGTVariant}/${metalName}`, property.heat_capacity, metalSpecs.forging_temperature, metalSpecs.welding_temperature) 
            else {
                let itemName
                
                if (property.hasGTVariant != null) itemName = `gtceu:${metalName}_${propName}`
                else itemName = `tfc:metal/${propName}/${metal}`

                json = itemJson(itemName, property.heat_capacity, metalSpecs.forging_temperature, metalSpecs.welding_temperature)
            }

            let path = `tfc:tfc/item_heats/metal/${metal}_${propName}`

            if (property.heat_capacity == 0.0) event.addJson(path, emptyJson)
            else event.addJson(path, json)
        });

        if (metalSpecs.hasOre) {
            let path = `tfc:tfc/item_heats/ore/${metalName}`
            let json = {
                ingredient: [
                    {
                      "tag": `forge:poor_raw_materials/${metalName}`
                    },
                    {
                      "tag": `forge:raw_materials/${metalName}`
                    },
                    {
                      "tag": `forge:rich_raw_materials/${metalName}`
                    }
                  ],
                heat_capacity: 1.143,
                forging_temperature: metalSpecs.forging_temperature,
                welding_temperature: metalSpecs.welding_temperature
            }

            event.addJson(path, json)
        }
    }
}

