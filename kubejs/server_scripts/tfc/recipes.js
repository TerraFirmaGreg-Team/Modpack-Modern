// priority: 0

const TFC_TO_GT_METALS = {
    bismuth: { isGTDup: true, convert_temp: 270 },
    bismuth_bronze: { isGTDup: true, convert_temp: 985 },
    black_bronze: { isGTDup: true, convert_temp: 1070 },
    bronze: { isGTDup: true, convert_temp: 950 },
    brass: { isGTDup: true, convert_temp: 930 },
    nickel: { isGTDup: true, convert_temp: 1453 },
    rose_gold: { isGTDup: true, convert_temp: 960 },
    silver: { isGTDup: true, convert_temp: 961 },
    tin: { isGTDup: true, convert_temp: 230 },
    zinc: { isGTDup: true, convert_temp: 420 },
    sterling_silver: { isGTDup: true, convert_temp: 950 },
    wrought_iron: { isGTDup: true, convert_temp: 1535, custom_fluid: 'tfc:metal/cast_iron' },
    steel: { isGTDup: true, convert_temp: 1540 },
    black_steel: { isGTDup: true, convert_temp: 1485 },
    blue_steel: { isGTDup: true, convert_temp: 1540 },
    red_steel: { isGTDup: true, convert_temp: 1540 },
    copper: { convert_temp: 1080 },
    gold: { convert_temp: 1060 }
}

const registerTFCRecipes = (event) => {
    
    // Металлы, которые дублируют гт
    Object.entries(TFC_TO_GT_METALS).forEach(keyValuePair => {
        
        let metal = keyValuePair[0]
        let metalSpecs = keyValuePair[1]

        // Металлы дублирующие гт
        if (metalSpecs.isGTDup != undefined)
        {
            // Ingots
            event.recipes.tfc.casting(`gtceu:${metal}_ingot`, 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(`gtceu:${metal}`, 144), 0.1)
                .id(`tfc:casting/${metal}_fire_ingot`)

            event.recipes.tfc.casting(`gtceu:${metal}_ingot`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(`gtceu:${metal}`, 144), 0.01)
                .id(`tfc:casting/${metal}_ingot`)
            
            if (metalSpecs.custom_fluid != undefined)
            {
                event.recipes.tfc.heating(`gtceu:${metal}_ingot`, metalSpecs.convert_temp)
                    .resultFluid(Fluid.of(metalSpecs.custom_fluid, 144))
                    .id(`tfc:heating/metal/${metal}_ingot`)
            }
            else
            {
                event.recipes.tfc.heating(`gtceu:${metal}_ingot`, metalSpecs.convert_temp)
                    .resultFluid(Fluid.of(`gtceu:${metal}`, 144))
                    .id(`tfc:heating/metal/${metal}_ingot`)
            }
            
        }
        else
        {
            // Ingots
            event.recipes.tfc.casting(`tfc:metal/ingot/${metal}`, 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(`gtceu:${metal}`, 144), 0.1)
                .id(`tfc:casting/${metal}_fire_ingot`)

            event.recipes.tfc.casting(`tfc:metal/ingot/${metal}`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(`gtceu:${metal}`, 144), 0.01)
                .id(`tfc:casting/${metal}_ingot`)

            if (metalSpecs.custom_fluid != undefined)
            {
                event.recipes.tfc.heating(`tfc:metal/ingot/${metal}`, metalSpecs.convert_temp)
                .resultFluid(Fluid.of(metalSpecs.custom_fluid, 144))
                .id(`tfc:heating/metal/${metal}_ingot`)
            }
            else 
            {
                event.recipes.tfc.heating(`tfc:metal/ingot/${metal}`, metalSpecs.convert_temp)
                .resultFluid(Fluid.of(`gtceu:${metal}`, 144))
                .id(`tfc:heating/metal/${metal}_ingot`)
            }
        }

        
    })

    // Bloom -> Wrought Iron Ingot
    event.recipes.tfc.anvil('gtceu:wrought_iron_ingot', 'tfc:refined_iron_bloom', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(2)
        .id('tfc:anvil/wrought_iron_from_bloom')

    // High Carbon Steel Ingot -> Steel Ingot
    event.recipes.tfc.anvil('gtceu:steel_ingot', 'tfc:metal/ingot/high_carbon_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(3)
        .id('tfc:anvil/steel_ingot')

    // High Carbon Black Steel Ingot -> Black Steel Ingot
    event.recipes.tfc.anvil('gtceu:black_steel_ingot', 'tfc:metal/ingot/high_carbon_black_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(4)
        .id('tfc:anvil/black_steel_ingot')

    // High Carbon Red Steel Ingot -> Red Steel Ingot
    event.recipes.tfc.anvil('gtceu:red_steel_ingot', 'tfc:metal/ingot/high_carbon_red_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(5)
        .id('tfc:anvil/red_steel_ingot')

    // High Carbon Blue Steel Ingot -> Blue Steel Ingot
    event.recipes.tfc.anvil('gtceu:blue_steel_ingot', 'tfc:metal/ingot/high_carbon_blue_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(5)
        .id('tfc:anvil/blue_steel_ingot')

        
}