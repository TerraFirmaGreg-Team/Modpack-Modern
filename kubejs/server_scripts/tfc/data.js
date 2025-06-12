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
    registerTFCSupportData(event)
}

//#region registerTFCMetals
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
    event.metal('gtceu:red_alloy', 740, 0.01529, '#forge:ingots/red_alloy', '#forge:double_ingots/red_alloy', '#forge:plates/red_alloy', 2, 'tfg:red_alloy')
    event.metal('gtceu:tin_alloy', 1250, 0.00829, '#forge:ingots/tin_alloy', '#forge:double_ingots/tin_alloy', '#forge:plates/tin_alloy', 3, 'tfg:tin_alloy')
}
//#endregion

//#region registerTFCHeats
const registerTFCHeats = (event) => {
    
    function makeItemHeatByTagPrefix(tagPrefix, material, tfcProperty, heatCapacity) {
        let item = ChemicalHelper.get(tagPrefix, material, 1)
        if (!item.isEmpty()) event.itemHeat(item, heatCapacity, tfcProperty.getForgingTemp(), tfcProperty.getWeldingTemp())
    }

    function makeItemHeatByToolType(toolType, material, tfcProperty, heatCapacity) {
        let tool = ToolHelper.get(toolType, material)
        if (!tool.isEmpty()) event.itemHeat(tool, heatCapacity, tfcProperty.getForgingTemp(), tfcProperty.getWeldingTemp())
    }

    forEachMaterial(material => {
        let tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)
        
        if (tfcProperty != null) {
            makeItemHeatByTagPrefix(TagPrefix.dustTiny, material, tfcProperty, 0.357)
            makeItemHeatByTagPrefix(TagPrefix.dustSmall, material, tfcProperty, 0.714)
            makeItemHeatByTagPrefix(TagPrefix.dust, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TagPrefix.rod, material, tfcProperty, 0.567)
            makeItemHeatByTagPrefix(TagPrefix.bolt, material, tfcProperty, 0.245)
            makeItemHeatByTagPrefix(TagPrefix.screw, material, tfcProperty, 0.567)
            makeItemHeatByTagPrefix(TagPrefix.nugget, material, tfcProperty, 0.124)
            makeItemHeatByTagPrefix(TagPrefix.block, material, tfcProperty, 20)
            makeItemHeatByTagPrefix(TagPrefix.rodLong, material, tfcProperty, 1.429)

            makeItemHeatByTagPrefix(TagPrefix.ingot, material, tfcProperty, 1.429)
            
            makeItemHeatByTagPrefix(TagPrefix.rawOre, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.richRawOre, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TFGTagPrefix.poorRawOre, material, tfcProperty, 1.429)

            // Ore processing stages
            makeItemHeatByTagPrefix(TagPrefix.dustImpure, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TagPrefix.dustPure, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TagPrefix.crushed, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TagPrefix.crushedPurified, material, tfcProperty, 1.429)
            makeItemHeatByTagPrefix(TagPrefix.crushedRefined, material, tfcProperty, 1.429)

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

    // Seaweed and Kelp
    event.itemHeat('tfc:groundcover/seaweed', 1.0, null, null)
    event.itemHeat('tfc:plant/leafy_kelp', 1.0, null, null)
    event.itemHeat('tfc:plant/winged_kelp', 1.0, null, null)

    // Misc
    event.itemHeat('tfg:latex_soaked_gloves', 1.0, null, null)

    global.MINECRAFT_DYE_NAMES.forEach (color => {
        event.itemHeat(`tfg:decorative_vase/unfired/${color}`, 1.0, null, null)
    })
    event.itemHeat('tfg:decorative_vase/unfired', 1.0, null, null)
}
//#endregion

//#region registerTFCFuels
const registerTFCFuels = (event) => {
    event.fuel('gtceu:coke_gem', 1415, 4400, 1.0)
    event.fuel('gtceu:coke_dust', 1415, 1200, 0.95)
    
    event.fuel('beneath:cursecoal', 1540, 2200, 1.0)

    event.fuel('minecraft:coal', 1415, 2200, 1.0)
    event.fuel('gtceu:rich_raw_coal', 1415, 2200, 0.95)
    event.fuel('gtceu:raw_coal', 1415, 1900, 0.95)
    event.fuel('gtceu:poor_raw_coal', 1415, 1600, 0.95)
    event.fuel('gtceu:coal_dust', 1415, 600, 0.95)
}
//#endregion

//#region registerTFCLampFuels
const registerTFCLampFuels = (event) => {
    event.lampFuel('gtceu:creosote', '#tfc:lamps', 1000)
    event.lampFuel("gtceu:glowstone", "#tfc:lamps", -1)
}
//#endregion

//#region registerTFCFertilizers
const registerTFCFertilizers = (event) => {
    event.fertilizer('gtceu:fertilizer', 0.15, 0.15, 0.15)

    event.fertilizer('gtceu:tiny_potassium_dust', null, null, 0.016)
    event.fertilizer('gtceu:small_potassium_dust', null, null, 0.037)
    event.fertilizer('gtceu:potassium_dust', null, null, 0.15)

    event.fertilizer('gtceu:tiny_phosphorus_dust', null, 0.016, null)
    event.fertilizer('gtceu:small_phosphorus_dust', null, 0.037, null)
    event.fertilizer('gtceu:phosphorus_dust', null, 0.15, null)

    event.fertilizer('gtceu:tiny_saltpeter_dust', 0.01, null, 0.038)
    event.fertilizer('gtceu:small_saltpeter_dust', 0.025, null, 0.0875)
    event.fertilizer('gtceu:saltpeter_dust', 0.10, null, 0.35)

    event.fertilizer('gtceu:tiny_bone_dust', null, 0.01, null)
    event.fertilizer('gtceu:small_bone_dust', null, 0.025, null)
}
//#endregion

//#region registerTFCKnappingTypes
const registerTFCKnappingTypes = (event) => {
    event.knappingType('minecraft:flint', 1, 1, 'tfc:item.knapping.stone', true, false, true, 'minecraft:flint', 'tfg:flint')
    // event.knappingType('gtceu:rubber_plate', 1, 5, 'tfc:item.knapping.leather', true, false, true, 'gtceu:rubber_plate', 'tfg:rubber')
    // event.knappingType('gtceu:styrene_butadiene_rubber_plate', 1, 5, 'tfc:item.knapping.leather', true, false, true, 'gtceu:styrene_butadiene_rubber_plate', 'tfg:styrene_butadiene_rubber_plate')
    // event.knappingType('gtceu:silicone_rubber_plate', 1, 5, 'tfc:item.knapping.leather', true, false, true, 'gtceu:silicone_rubber_plate', 'tfg:silicone_rubber_plate')
}
//#endregion

//#region registerTFCItemSize
const registerTFCItemSize = (event) => {

    global.MINECRAFT_DYE_NAMES.forEach (color => {
        event.itemSize(`tfg:decorative_vase/${color}`, 'normal', 'medium', `decorative_vase/${color}`)
        event.itemSize(`tfg:decorative_vase/unfired/${color}`, 'normal', 'medium', `decorative_vase/unfired/${color}`)
    })
    event.itemSize('tfg:decorative_vase', 'normal', 'medium', 'decorative_vase')
    event.itemSize('tfg:decorative_vase/unfired', 'normal', 'medium', 'decorative_vase/unfired')

    event.itemSize('tfg:fishing_net/wood', 'large', 'medium', 'wood_fishing_net')
    event.itemSize('tfg:fishing_net/brass', 'large', 'medium', 'brass_fishing_net')
    event.itemSize('tfg:fishing_net/rose_gold', 'large', 'medium', 'rose_gold_fishing_net')
    event.itemSize('tfg:fishing_net/sterling_silver', 'large', 'medium', 'sterling_silver_fishing_net')
    event.itemSize('tfg:fishing_net/invar', 'large', 'medium', 'invar_fishing_net')
    event.itemSize('tfg:fishing_net/cupronickel', 'large', 'medium', 'cupronickel_fishing_net')
    event.itemSize('tfg:fishing_net/tin_alloy', 'large', 'medium', 'tin_alloy_fishing_net')
    event.itemSize('tfg:fishing_net/magnalium', 'large', 'medium', 'magnalium_fishing_net')

    event.itemSize('#tfc:ore_pieces', 'very_small', 'very_light', 'tfc_ores')
	
    event.itemSize('#tfc:foods/sealed_preserves', 'tiny', 'medium', 'sealed_preserves')
    event.itemSize('#tfc:foods/preserves', 'tiny', 'medium', 'preserves')

}
//#endregion

//#region registerTFCFoodData
const registerTFCFoodData = (event) => {
    event.foodItem('minecraft:golden_apple', food => {
        food.hunger(2)
        food.fruit(2)
        food.decayModifier(0.6)
    })

    // treasure

    event.foodItem('minecraft:enchanted_golden_apple', food => {
        food.hunger(10)
        food.saturation(10)
        food.fruit(5)
        food.water(20)
        food.decayModifier(0)
    })

    event.foodItem('minecraft:golden_carrot', food => {
        food.hunger(5)
        food.saturation(5)
        food.vegetables(3)
        food.water(20)
        food.decayModifier(0)
    })

    event.foodItem('minecraft:glow_berries', food => {
        food.hunger(1)
        food.fruit(0.5)
        food.water(5)
        food.decayModifier(2)
    })
    
    event.foodItem('minecraft:chorus_fruit', food => {
        food.hunger(1.5)
        food.fruit(2)
        food.water(5)
    })

    event.foodItem('minecraft:popped_chorus_fruit', food => {
        food.hunger(2)
        food.fruit(3)
        food.decayModifier(0.5)
    })

    event.foodItem('minecraft:red_mushroom', food => {
        food.hunger(1.5)
        food.vegetables(1)
        food.water(5)
        food.decayModifier(2)
    })

    event.foodItem('minecraft:brown_mushroom', food => {
        food.saturation(2)
        food.hunger(2)
        food.vegetables(1)
        food.water(2)
        food.decayModifier(2)
    })

    event.foodItem('gtceu:chocolate_coin', food => {
        food.hunger(1)
        food.dairy(0.5)
    })
}
//#endregion 

//#region registerTFCSupportData
//up, down, horizontal
const registerTFCSupportData = (event) => {
    event.support('tfg:light_concrete_support_horizontal', 4, 4, 8, 'light_concrete_support')
    event.support('tfg:dark_concrete_support_horizontal', 4, 4, 8, 'dark_concrete_support')
    event.support('tfg:reinforced_light_concrete_support_horizontal', 6, 6, 16, 'reinforced_light_concrete_support')
    event.support('tfg:reinforced_dark_concrete_support_horizontal', 6, 6, 16, 'reinforced_dark_concrete_support')
    event.support('tfg:rebar_support_horizontal', 4, 4, 8, 'rebar_support')
    event.support('tfg:steel_support_horizontal', 6, 6, 16, 'steel_support')

	const other_stone = ['pyroxenite', 'migmatite', 'travertine']
	const stone_types = global.TFC_STONE_TYPES.concat(other_stone)

	stone_types.forEach(stone => {

        event.support(`tfg:${stone}_support_horizontal`, 2, 2, 4, `${stone}_support`)
    })
}
//#endregion
