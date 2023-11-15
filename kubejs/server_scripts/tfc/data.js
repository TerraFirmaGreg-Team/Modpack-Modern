// priority: 0

const registerTFCData = (event) => {
    registerTFCItemHeats(event)
    registerTFCHeatingRecipes(event)
    registerTFCCastingRecipes(event)

    addBloomeryRecipe(event, 
        'tfc:recipes/bloomery/raw_iron_bloom',
        { item: "tfc:raw_iron_bloom" },
        { ingredient: "gtceu:iron", amount: 144 },
        { item: "minecraft:charcoal" },
        15000
    )

    addTFCBlastFurnaceRecipe(event,
        'tfc:recipes/blast_furnace/pig_iron',
        { ingredient: "gtceu:iron", amount: 1 },
        { fluid: "tfc:metal/pig_iron", amount: 1 },
        { tag: "tfc:flux" }
    )
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

const registerTFCHeatingRecipes = (event) => {
    for (const [tfcMetalName, metalSpecifications] of Object.entries(Metals)) {
        metalSpecifications.props.forEach(propertyName => {
            let jsonRecipePath = `tfc:recipes/heating/tfg/${tfcMetalName}_${propertyName}`
            let itemTypeSpecifications = ItemHeats[propertyName]

            if (itemTypeSpecifications.heat_capacity != null) {
                let ingredientInput = itemTypeSpecifications.input(tfcMetalName)
                
                let json

                if (typeof(itemTypeSpecifications.metal_amount) == "object")
                {
                    if (itemTypeSpecifications.metal_amount[tfcMetalName] != undefined)
                    {
                        addHeatingItemToFluidRecipe(
                            event, 
                            jsonRecipePath, 
                            ingredientInput, 
                            { fluid: metalSpecifications.fluidName, amount: itemTypeSpecifications.metal_amount[tfcMetalName] },
                            metalSpecifications.melt_temp,
                            (itemTypeSpecifications.hasDur != undefined) ? itemTypeSpecifications.hasDur : false
                        )
                    }
                    else
                    {
                        addHeatingItemToFluidRecipe(
                            event, 
                            jsonRecipePath, 
                            ingredientInput, 
                            { fluid: metalSpecifications.fluidName, amount: itemTypeSpecifications.metal_amount["default"] },
                            metalSpecifications.melt_temp,
                            (itemTypeSpecifications.hasDur != undefined) ? itemTypeSpecifications.hasDur : false
                        )
                    }
                }
                else {
                    addHeatingItemToFluidRecipe(
                        event, 
                        jsonRecipePath, 
                        ingredientInput, 
                        { fluid: metalSpecifications.fluidName, amount: itemTypeSpecifications.metal_amount },
                        metalSpecifications.melt_temp,
                        (itemTypeSpecifications.hasDur != undefined) ? itemTypeSpecifications.hasDur : false
                    )
                }
            }
        })
    }
}

const registerTFCCastingRecipes = (event) => {

}

