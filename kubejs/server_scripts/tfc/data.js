// priority: 0

const registerTFCDataForTFC = (event) => {
    registerTFCMetals(event)
    registerTFCHeats(event)
    registerTFCFuels(event)
    registerTFCLampFuels(event)
    registerTFCFertilizers(event)
    registerTFCItemSize(event)
}

const registerTFCMetals = (event) => {
    event.metal('gtceu:tin', 230, 0.02143, '#forge:ingots/tin', '#forge:double_ingots/tin', '#forge:plates/tin', 1, 'tfc:tin')
    event.metal('gtceu:bismuth', 270, 0.02143, '#forge:ingots/bismuth', '#forge:double_ingots/bismuth', '#forge:plates/bismuth', 1, 'tfc:bismuth')
    event.metal('gtceu:zinc', 420, 0.01429, '#forge:ingots/zinc', '#forge:double_ingots/zinc', '#forge:plates/zinc', 1, 'tfc:zinc')
    event.metal('gtceu:sterling_silver', 950, 0.00857, '#forge:ingots/sterling_silver', '#forge:double_ingots/sterling_silver', '#forge:plates/sterling_silver', 1, 'tfc:sterling_silver')
    event.metal('gtceu:rose_gold', 960, 0.00857, '#forge:ingots/rose_gold', '#forge:double_ingots/rose_gold', '#forge:plates/rose_gold', 1, 'tfc:rose_gold')
    event.metal('gtceu:silver', 961, 0.00625, '#forge:ingots/silver', '#forge:double_ingots/silver', '#forge:plates/silver', 1, 'tfc:silver')
    event.metal('gtceu:gold', 1060, 0.005, '#forge:ingots/gold', '#forge:double_ingots/gold', '#forge:plates/gold', 1, 'tfc:gold')
    event.metal('gtceu:copper', 1080, 0.00857, '#forge:ingots/copper', '#forge:double_ingots/copper', '#forge:plates/copper', 1, 'tfc:copper')
    event.metal('gtceu:nickel', 1453, 0.00625, '#forge:ingots/nickel', '#forge:double_ingots/nickel', '#forge:plates/nickel', 1, 'tfc:nickel')
    
    event.metal('gtceu:brass', 930, 0.00857, '#forge:ingots/brass', '#forge:double_ingots/brass', '#forge:plates/brass', 2, 'tfc:brass')
    event.metal('gtceu:bronze', 950, 0.00857, '#forge:ingots/bronze', '#forge:double_ingots/bronze', '#forge:plates/bronze', 2, 'tfc:bronze')
    event.metal('gtceu:bismuth_bronze', 985, 0.00857, '#forge:ingots/bismuth_bronze', '#forge:double_ingots/bismuth_bronze', '#forge:plates/bismuth_bronze', 2, 'tfc:bismuth_bronze')
    event.metal('gtceu:black_bronze', 1070, 0.00857, '#forge:ingots/black_bronze', '#forge:double_ingots/black_bronze', '#forge:plates/black_bronze', 2, 'tfc:black_bronze')

    // event.metal('gtceu:iron', 1535, 0.00857, '#forge:ingots/iron', '#forge:double_ingots/iron', '#forge:plates/iron', 3, 'tfg:iron')
    event.metal('gtceu:wrought_iron', 1535, 0.00857, '#forge:ingots/wrought_iron', '#forge:double_ingots/wrought_iron', '#forge:plates/wrought_iron', 3, 'tfc:wrought_iron')

    event.metal('gtceu:steel', 1540, 0.00857, '#forge:ingots/steel', '#forge:double_ingots/steel', '#forge:plates/steel', 4, 'tfc:steel')

    event.metal('gtceu:black_steel', 1485, 0.00857, '#forge:ingots/black_steel', '#forge:double_ingots/black_steel', '#forge:plates/black_steel', 5, 'tfc:black_steel')
    event.metal('gtceu:blue_steel', 1540, 0.00857, '#forge:ingots/blue_steel', '#forge:double_ingots/blue_steel', '#forge:plates/blue_steel', 6, 'tfc:blue_steel')
    event.metal('gtceu:red_steel', 1540, 0.00857, '#forge:ingots/red_steel', '#forge:double_ingots/red_steel', '#forge:plates/red_steel', 6, 'tfc:red_steel')

    event.metal('gtceu:redstone', 460, 0.01729, null, null, null, 1, 'tfg:redstone')
    event.metal('gtceu:red_alloy', 740, 0.01529, '#forge:ingots/red_alloy', null, '#forge:plates/red_alloy', 2, 'tfg:red_alloy')
    event.metal('gtceu:tin_alloy', 1250, 0.00829, '#forge:ingots/tin_alloy', null, '#forge:plates/tin_alloy', 3, 'tfg:tin_alloy')
}

const registerTFCHeats = (event) => {
    Object.entries(global.METAL_TO_SPECS).forEach(keyValuePair => {
        let metal = keyValuePair[0]
        let metalSpecs = keyValuePair[1]

        if (metalSpecs.props.includes('dusts')) {
            event.itemHeat(`gtceu:${metal}_tiny_dust`, 0.357, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_small_dust`, 0.714, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_dust`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)

            event.itemHeat(`gtceu:${metal}_rod`, 0.567, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_bolt`, 0.245, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`gtceu:${metal}_screw`, 0.567, metalSpecs.forging_temp, metalSpecs.welding_temp)
        }

        if (metalSpecs.props.includes('nugget')) {
            event.itemHeat(`gtceu:${metal}_nugget`, 0.124, metalSpecs.forging_temp, metalSpecs.welding_temp)
        }

        if (metalSpecs.props.includes('ore_chunks')) {
            event.itemHeat(`#forge:rich_raw_materials/${metal}`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`#forge:raw_materials/${metal}`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
            event.itemHeat(`#forge:poor_raw_materials/${metal}`, 1.429, metalSpecs.forging_temp, metalSpecs.welding_temp)
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

    // Ведро из синей стали
    event.itemHeat('tfc:metal/bucket/blue_steel', 1.429, 924, 1232)

    // Ведро из красной
    event.itemHeat('tfc:metal/bucket/red_steel', 1.429, 924, 1232)
}

const registerTFCFuels = (event) => {
    event.fuel('minecraft:coal', 1415, 2200, 1.0)
    event.fuel('gtceu:coke_gem', 1415, 4400, 1.0)

    event.fuel('gtceu:rich_raw_coal', 1415, 2200, 0.95)
    event.fuel('gtceu:raw_coal', 1415, 1900, 0.95)
    event.fuel('gtceu:poor_raw_coal', 1415, 1600, 0.95)
}

const registerTFCLampFuels = (event) => {
    event.lampFuel('gtceu:creosote', '#tfc:lamps', 1000)
}

const registerTFCFertilizers = (event) => {
    event.fertilizer('gtceu:fertilizer', 0.15, 0.15, 0.15)

    event.fertilizer('gtceu:potassium_tiny_dust', null, null, 0.016)
    event.fertilizer('gtceu:potassium_small_dust', null, null, 0.037)
    event.fertilizer('gtceu:potassium_dust', null, null, 0.15)

    event.fertilizer('gtceu:phosphorus_tiny_dust', null, 0.016, null)
    event.fertilizer('gtceu:phosphorus_small_dust', null, 0.037, null)
    event.fertilizer('gtceu:phosphorus_dust', null, 0.15, null)
}

const registerTFCItemSize = (event) => {
    // TODO event.itemSize('minecraft:gold_ingot', 'huge', 'very_heavy')
}