// priority: 0

const registerTFCRecipes = (event) => {
    
    // Металлы, которые дублируют гт
    Object.entries(global.METAL_TO_SPECS).forEach(keyValuePair => {
        
        let metal = keyValuePair[0]
        let metalSpecs = keyValuePair[1]

        // Одинарные слитки
        if (metalSpecs.props.includes('ingot'))
        {
            // Металлы дублирующие гт
            if (metalSpecs.isGTDup != undefined)
            {
                // Ingots
                event.recipes.tfc.casting(`gtceu:${metal}_ingot`, 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.1)
                    .id(`tfc:casting/${metal}_fire_ingot`)

                event.recipes.tfc.casting(`gtceu:${metal}_ingot`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.01)
                    .id(`tfc:casting/${metal}_ingot`)
                
                event.recipes.tfc.heating(`gtceu:${metal}_ingot`, metalSpecs.melt_temp)
                    .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                    .id(`tfc:heating/metal/${metal}_ingot`)
                
            }
            // Металлы не дублирующие гт
            else
            {
                // Ingots
                event.recipes.tfc.casting(`tfc:metal/ingot/${metal}`, 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.1)
                        .id(`tfc:casting/${metal}_fire_ingot`)

                event.recipes.tfc.casting(`tfc:metal/ingot/${metal}`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.01)
                    .id(`tfc:casting/${metal}_ingot`)

                event.recipes.tfc.heating(`tfc:metal/ingot/${metal}`, metalSpecs.melt_temp)
                    .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                    .id(`tfc:heating/metal/${metal}_ingot`)
            }
        }

        // Двойные слитки
        if (metalSpecs.props.includes('double_ingot'))
        {
            event.recipes.tfc.heating(`tfc:metal/double_ingot/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .id(`tfc:heating/metal/${metal}_double_ingot`)
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