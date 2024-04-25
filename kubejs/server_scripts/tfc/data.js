// priority: 0

const registerTFCDataForTFC = (event) => {
    registerTFCMetals(event)
    registerTFCHeats(event)
    registerTFCFuels(event)
    registerTFCLampFuels(event)
    registerTFCFertilizers(event)
    registerTFCKnappingTypes(event)
    registerTFCItemSize(event)
    registerTFCFoodData(event)
}

const registerTFCMetals = (event) => {
    event.metal('gtceu:copper', 1080, 0.00857, '#forge:ingots/copper', '#forge:double_ingots/copper', '#forge:plates/copper', 1, 'tfc:copper')
    event.metal('gtceu:bismuth_bronze', 985, 0.00857, '#forge:ingots/bismuth_bronze', '#forge:double_ingots/bismuth_bronze', '#forge:plates/bismuth_bronze', 2, 'tfc:bismuth_bronze')
    event.metal('gtceu:bronze', 950, 0.00857, '#forge:ingots/bronze', '#forge:double_ingots/bronze', '#forge:plates/bronze', 2, 'tfc:bronze')
    event.metal('gtceu:black_bronze', 1070, 0.00857, '#forge:ingots/black_bronze', '#forge:double_ingots/black_bronze', '#forge:plates/black_bronze', 2, 'tfc:black_bronze')
    event.metal('gtceu:wrought_iron', 1535, 0.00857, '#forge:ingots/wrought_iron', '#forge:double_ingots/wrought_iron', '#forge:plates/wrought_iron', 3, 'tfc:wrought_iron')
    event.metal('gtceu:steel', 1540, 0.00857, '#forge:ingots/steel', '#forge:double_ingots/steel', '#forge:plates/steel', 4, 'tfc:steel')
    event.metal('gtceu:black_steel', 1485, 0.00857, '#forge:ingots/black_steel', '#forge:double_ingots/black_steel', '#forge:plates/black_steel', 5, 'tfc:black_steel')
    event.metal('gtceu:blue_steel', 1540, 0.00857, '#forge:ingots/blue_steel', '#forge:double_ingots/blue_steel', '#forge:plates/blue_steel', 6, 'tfc:blue_steel')
    event.metal('gtceu:red_steel', 1540, 0.00857, '#forge:ingots/red_steel', '#forge:double_ingots/red_steel', '#forge:plates/red_steel', 6, 'tfc:red_steel')

    event.metal('tfg:pig_iron', 1535, 0.00857, '#forge:ingots/pig_iron', null, null, 3, 'tfc:pig_iron')
    event.metal('tfg:high_carbon_steel', 1540, 0.00857, '#forge:ingots/high_carbon_steel', null, null, 3, 'tfc:high_carbon_steel')
    event.metal('tfg:high_carbon_black_steel', 1535, 0.00857, '#forge:ingots/high_carbon_black_steel', null, null, 4, 'tfc:high_carbon_black_steel')
    event.metal('tfg:high_carbon_red_steel', 1535, 0.00857, '#forge:ingots/high_carbon_red_steel', null, null, 5, 'tfc:high_carbon_red_steel')
    event.metal('tfg:high_carbon_blue_steel', 1535, 0.00857, '#forge:ingots/high_carbon_blue_steel', null, null, 5, 'tfc:high_carbon_blue_steel')
    event.metal('tfg:weak_steel', 1540, 0.00857, '#forge:ingots/weak_steel', null, null, 4, 'tfc:weak_steel')
    event.metal('tfg:weak_red_steel', 1540, 0.00857, '#forge:ingots/weak_red_steel', null, null, 5, 'tfc:weak_red_steel')
    event.metal('tfg:weak_blue_steel', 1540, 0.00857, '#forge:ingots/weak_blue_steel', null, null, 5, 'tfc:weak_blue_steel')
    event.metal('tfg:unknown', 400, 0.006, '#forge:ingots/unknown', null, null, 0, 'tfc:unknown')

    event.metal('gtceu:iron', 1535, 0.00857, '#forge:ingots/iron', '#forge:double_ingots/iron', '#forge:plates/iron', 3, 'tfc:cast_iron')
    event.metal('gtceu:tin', 230, 0.02143, '#forge:ingots/tin', '#forge:double_ingots/tin', '#forge:plates/tin', 1, 'tfc:tin')
    event.metal('gtceu:bismuth', 270, 0.02143, '#forge:ingots/bismuth', '#forge:double_ingots/bismuth', '#forge:plates/bismuth', 1, 'tfc:bismuth')
    event.metal('gtceu:zinc', 420, 0.01429, '#forge:ingots/zinc', '#forge:double_ingots/zinc', '#forge:plates/zinc', 1, 'tfc:zinc')
    event.metal('gtceu:sterling_silver', 950, 0.00857, '#forge:ingots/sterling_silver', '#forge:double_ingots/sterling_silver', '#forge:plates/sterling_silver', 1, 'tfc:sterling_silver')
    event.metal('gtceu:rose_gold', 960, 0.00857, '#forge:ingots/rose_gold', '#forge:double_ingots/rose_gold', '#forge:plates/rose_gold', 1, 'tfc:rose_gold')
    event.metal('gtceu:silver', 961, 0.00625, '#forge:ingots/silver', '#forge:double_ingots/silver', '#forge:plates/silver', 1, 'tfc:silver')
    event.metal('gtceu:gold', 1060, 0.005, '#forge:ingots/gold', '#forge:double_ingots/gold', '#forge:plates/gold', 1, 'tfc:gold')
    event.metal('gtceu:nickel', 1453, 0.00625, '#forge:ingots/nickel', '#forge:double_ingots/nickel', '#forge:plates/nickel', 1, 'tfc:nickel')
    event.metal('gtceu:brass', 930, 0.00857, '#forge:ingots/brass', '#forge:double_ingots/brass', '#forge:plates/brass', 2, 'tfc:brass')
    
    event.metal('gtceu:redstone', 460, 0.01729, null, null, null, 1, 'tfg:redstone')
    event.metal('gtceu:red_alloy', 740, 0.01529, '#forge:ingots/red_alloy', null, '#forge:plates/red_alloy', 2, 'tfg:red_alloy')
    event.metal('gtceu:tin_alloy', 1250, 0.00829, '#forge:ingots/tin_alloy', null, '#forge:plates/tin_alloy', 3, 'tfg:tin_alloy')
}

const registerTFCHeats = (event) => {
    
    function makeItemHeatByTagPrefix(tagPrefix, material, tfcProperty, heatCapacity) {
        let item = ChemicalHelper.get(tagPrefix, material, 1)
        if (!item.isEmpty()) event.itemHeat(item, heatCapacity, tfcProperty.getForgingTemp(), tfcProperty.getWeldingTemp())
    }

    function makeItemHeatByToolType(toolType, material, tfcProperty, heatCapacity) {
        let tool = ToolHelper.get(toolType, material)
        if (!tool.isEmpty()) event.itemHeat(tool, heatCapacity, tfcProperty.getForgingTemp(), tfcProperty.getWeldingTemp())
    }

    GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
        let tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
        
        if (tfcProperty != null) {
            makeItemHeatByTagPrefix(TagPrefix.dustTiny, material, tfcProperty, 0.357)
            makeItemHeatByTagPrefix(TagPrefix.dustSmall, material, tfcProperty, 0.714)
            makeItemHeatByTagPrefix(TagPrefix.dust, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TagPrefix.rod, material, tfcProperty, 0.567)
            makeItemHeatByTagPrefix(TagPrefix.bolt, material, tfcProperty, 0.245)
            makeItemHeatByTagPrefix(TagPrefix.screw, material, tfcProperty, 0.567)
            makeItemHeatByTagPrefix(TagPrefix.nugget, material, tfcProperty, 0.124)

            makeItemHeatByTagPrefix(TagPrefix.ingot, material, tfcProperty, 1.429)
            
            makeItemHeatByTagPrefix(TagPrefix.rawOre, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.richRawOre, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.poorRawOre, material, tfcProperty, 1.429)

            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadSword, material, tfcProperty, 2.875)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadShovel, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadScythe, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadPickaxe, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadSaw, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadKnife, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadHoe, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadHammer, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadAxe, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadFile, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadButcheryKnife, material, tfcProperty, 2.875)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadMiningHammer, material, tfcProperty, 2.875)
            makeItemHeatByTagPrefix(TFGTagPrefix.toolHeadSpade, material, tfcProperty, 2.875)

            makeItemHeatByToolType(GTToolType.SWORD, material, tfcProperty, 1.429)
            makeItemHeatByToolType(GTToolType.PICKAXE, material, tfcProperty, 1.429)
            makeItemHeatByToolType(GTToolType.SHOVEL, material, tfcProperty, 1.429)
            makeItemHeatByToolType(GTToolType.AXE, material, tfcProperty, 1.429)
            makeItemHeatByToolType(GTToolType.HOE, material, tfcProperty, 1.429)
            makeItemHeatByToolType(GTToolType.SAW, material, tfcProperty, 1.429)
            makeItemHeatByToolType(GTToolType.HARD_HAMMER, material, tfcProperty, 2.875)
            makeItemHeatByToolType(GTToolType.FILE, material, tfcProperty, 1.429)
            makeItemHeatByToolType(GTToolType.SCYTHE, material, tfcProperty, 1.429)
            makeItemHeatByToolType(GTToolType.KNIFE, material, tfcProperty, 1.429)
            makeItemHeatByToolType(GTToolType.BUTCHERY_KNIFE, material, tfcProperty, 2.875)
            makeItemHeatByToolType(GTToolType.MINING_HAMMER, material, tfcProperty, 1.429)
            makeItemHeatByToolType(GTToolType.SPADE, material, tfcProperty, 2.875)
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

    event.fertilizer('gtceu:tiny_potassium_dust', null, null, 0.016)
    event.fertilizer('gtceu:small_potassium_dust', null, null, 0.037)
    event.fertilizer('gtceu:potassium_dust', null, null, 0.15)

    event.fertilizer('gtceu:tiny_phosphorus_dust', null, 0.016, null)
    event.fertilizer('gtceu:small_phosphorus_dust', null, 0.037, null)
    event.fertilizer('gtceu:phosphorus_dust', null, 0.15, null)

    event.fertilizer('gtceu:tiny_saltpeter_dust', null, 0.038, 0.01)
    event.fertilizer('gtceu:small_saltpeter_dust', null, 0.0875, 0.025)
    event.fertilizer('gtceu:saltpeter_dust', null, 0.35, 0.10)

    event.fertilizer('gtceu:tiny_bone_dust', null, 0.01, null)
    event.fertilizer('gtceu:small_bone_dust', null, 0.025, null)
}

const registerTFCKnappingTypes = (event) => {
    // event.knappingType('gtceu:rubber_plate', 1, 5, 'tfc:item.knapping.leather', true, false, true, 'gtceu:rubber_plate', 'tfg:rubber')
    // event.knappingType('gtceu:styrene_butadiene_rubber_plate', 1, 5, 'tfc:item.knapping.leather', true, false, true, 'gtceu:styrene_butadiene_rubber_plate', 'tfg:styrene_butadiene_rubber_plate')
    // event.knappingType('gtceu:silicone_rubber_plate', 1, 5, 'tfc:item.knapping.leather', true, false, true, 'gtceu:silicone_rubber_plate', 'tfg:silicone_rubber_plate')
}

const registerTFCItemSize = (event) => {
    // TODO event.itemSize('minecraft:gold_ingot', 'huge', 'very_heavy')
}

const registerTFCFoodData = (event) => {
    event.foodItem('minecraft:golden_apple', food => {
        food.hunger(2)
        food.fruit(2)
        food.decayModifier(0.6)
    })

    event.foodItem('minecraft:enchanted_golden_apple', food => {
        food.hunger(3)
        food.fruit(2)
        food.decayModifier(0.2)
    })
}