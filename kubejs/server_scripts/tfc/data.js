// priority: 0

const registerTFCDataPacks = (event) => {
    
}

const registerTFCData = (event) => {
    registerTFCMetals(event)
    registerTFCHeats(event)
    registerTFCFuels(event)
    registerTFCLampFuels(event)
    registerTFCFertilizers(event)
}

/**
 * event.metal(
    fluid: string,
    meltTemperature: number,
    heatCapacity: number,
    ingot: @Nullable Ingredient,
    doubleIngot: @Nullable Ingredient,
    sheet: @Nullable Ingredient,
    tier: number,
    name?: string
    )
 */
const registerTFCMetals = (event) => {
    event.metal('gtceu:tin', 230, 0.02143, null, null, null, 1, 'tfc:tin')
    event.metal('gtceu:bismuth', 270, 0.02143, null, null, null, 1, 'tfc:bismuth')
    event.metal('gtceu:zinc', 420, 0.01429, null, null, null, 1, 'tfc:zinc')
    event.metal('gtceu:sterling_silver', 950, 0.00857, null, null, null, 1, 'tfc:sterling_silver')
    event.metal('gtceu:rose_gold', 960, 0.00857, null, null, null, 1, 'tfc:rose_gold')
    event.metal('gtceu:silver', 961, 0.00625, null, null, null, 1, 'tfc:silver')
    event.metal('gtceu:gold', 1060, 0.005, null, null, null, 1, 'tfc:gold')
    event.metal('gtceu:copper', 1080, 0.00857, null, null, null, 1, 'tfc:copper')
    event.metal('gtceu:nickel', 1453, 0.00625, null, null, null, 1, 'tfc:nickel')
    
    event.metal('gtceu:brass', 930, 0.00857, null, null, null, 2, 'tfc:brass')
    event.metal('gtceu:bronze', 950, 0.00857, null, null, null, 2, 'tfc:bronze')
    event.metal('gtceu:bismuth_bronze', 985, 0.00857, null, null, null, 2, 'tfc:bismuth_bronze')
    event.metal('gtceu:black_bronze', 1070, 0.00857, null, null, null, 2, 'tfc:black_bronze')

    event.metal('gtceu:iron', 1535, 0.00857, null, null, null, 3, 'tfg:iron')
    event.metal('gtceu:wrought_iron', 1535, 0.00857, null, null, null, 3, 'tfc:wrought_iron')

    event.metal('gtceu:steel', 1540, 0.00857, null, null, null, 4, 'tfc:steel')

    event.metal('gtceu:black_steel', 1485, 0.00857, null, null, null, 5, 'tfc:black_steel')
    event.metal('gtceu:blue_steel', 1540, 0.00857, null, null, null, 6, 'tfc:blue_steel')
    event.metal('gtceu:red_steel', 1540, 0.00857, null, null, null, 6, 'tfc:red_steel')
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
const registerTFCHeats = (event) => {
    Object.entries(global.METAL_TO_SPECS).forEach(keyValuePair => {
        let metal = keyValuePair[0]
        let metalSpecs = keyValuePair[1]

        if (metalSpecs.props.includes('dusts')) {
            event.itemHeat(`gtceu:${metal}_tiny_dust`, 0.357, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_small_dust`, 0.714, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_dust`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
        }

        if (metalSpecs.props.includes('nugget')) {
            
            event.itemHeat(`gtceu:${metal}_nugget`, 0.124, metalSpecs.forging_temp, metalSpecs.welding_temp)
        }

        if (metalSpecs.props.includes('ore_chunks')) {
            event.itemHeat(`gtceu:poor_raw_${metal}`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`#forge:raw_materials/${metal}`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:rich_raw_${metal}`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
        }

        if (metalSpecs.props.includes('tool')) {
            event.itemHeat(`gtceu:${metal}_sword`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_sword_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_shovel`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_shovel_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_scythe`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_scythe_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_pickaxe`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_pickaxe_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_saw`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_saw_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_knife`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_knife_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_hoe`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_hoe_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_hammer`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_hammer_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_axe`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_axe_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_file`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_file_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_butchery_knife`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_knife_butchery_head`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
        }
    })

    event.itemHeat('gtceu:compressed_coke_clay', 0.5, null, null)
}

/**
 * event.fuel(
    ingredient: Ingredient, 
    temperature: number, 
    duration: number, 
    purity: @Nullable number, 
    name?: string
    )
 */
const registerTFCFuels = (event) => {
    event.fuel('minecraft:coal', 1415, 2200, 1.0)
    event.fuel('gtceu:coke_gem', 1415, 4400, 1.0)

    event.fuel('gtceu:rich_raw_coal', 1415, 2200, 0.95)
    event.fuel('gtceu:raw_coal', 1415, 1900, 0.95)
    event.fuel('gtceu:poor_raw_coal', 1415, 1600, 0.95)
}

/**
 * event.lampFuel(
    fluidIngredient: FluidIngredient, 
    blockIngredient: BlockIngredient, 
    burnRate: number, 
    name?: string
    )
 */
const registerTFCLampFuels = (event) => {
    event.lampFuel('gtceu:creosote', '#tfc:lamps', 1)
}

/**
 * event.fertilizer(
    ingredient: Ingredient, 
    nitrogen: @Nullable number, 
    phosphorous: @Nullable number, 
    potassium: @Nullable number, 
    name?: string
    )
 */
const registerTFCFertilizers = (event) => {
    event.fertilizer('gtceu:fertilizer', 0.15, 0.15, 0.15)

    event.fertilizer('gtceu:potassium_tiny_dust', null, null, 0.016)
    event.fertilizer('gtceu:potassium_small_dust', null, null, 0.037)
    event.fertilizer('gtceu:potassium_dust', null, null, 0.15)

    event.fertilizer('gtceu:phosphorus_tiny_dust', null, 0.016, null)
    event.fertilizer('gtceu:phosphorus_small_dust', null, 0.037, null)
    event.fertilizer('gtceu:phosphorus_dust', null, 0.15, null)
}