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
    
    // TFC
    event.metal('gtceu:tin', 230, 0.02143, null, null, null, 1)
    event.metal('gtceu:bismuth', 270, 0.02143, null, null, null, 1)
    event.metal('gtceu:zinc', 420, 0.01429, null, null, null, 1)
    event.metal('gtceu:sterling_silver', 950, 0.00857, null, null, null, 1)
    event.metal('gtceu:rose_gold', 960, 0.00857, null, null, null, 1)
    event.metal('gtceu:silver', 961, 0.00625, null, null, null, 1)
    event.metal('gtceu:gold', 1060, 0.005, null, null, null, 1)
    event.metal('gtceu:copper', 1080, 0.00857, null, null, null, 1)
    event.metal('gtceu:nickel', 1453, 0.00625, null, null, null, 1)
    
    event.metal('gtceu:brass', 930, 0.00857, null, null, null, 2)
    event.metal('gtceu:bronze', 950, 0.00857, null, null, null, 2)
    event.metal('gtceu:bismuth_bronze', 985, 0.00857, null, null, null, 2)
    event.metal('gtceu:black_bronze', 1070, 0.00857, null, null, null, 2)

    event.metal('gtceu:iron', 1535, 0.00857, null, null, null, 3)
    event.metal('gtceu:wrought_iron', 1535, 0.00857, null, null, null, 3)

    event.metal('gtceu:steel', 1540, 0.00857, null, null, null, 4)

    event.metal('gtceu:black_steel', 1485, 0.00857, null, null, null, 5)
    event.metal('gtceu:blue_steel', 1540, 0.00857, null, null, null, 6)
    event.metal('gtceu:red_steel', 1540, 0.00857, null, null, null, 6)

    // FirmaLife
    
    // Stainless Steel ? what
    // Chromite ? what
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