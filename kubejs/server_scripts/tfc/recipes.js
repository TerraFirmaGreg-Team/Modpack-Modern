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
                // Отливка слитка в обычной форме
                event.recipes.tfc.casting(`gtceu:${metal}_ingot`, 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.1)
                    .id(`tfc:casting/${metal}_fire_ingot`)

                // Отливка слитка в огнеупорной форме
                event.recipes.tfc.casting(`gtceu:${metal}_ingot`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.01)
                    .id(`tfc:casting/${metal}_ingot`)
                
                // Декрафт слитка в жидкость
                event.recipes.tfc.heating(`gtceu:${metal}_ingot`, metalSpecs.melt_temp)
                    .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                    .id(`tfc:heating/metal/${metal}_ingot`)
                
            }
            // Металлы не дублирующие гт
            else
            {
                // Отливка слитка в обычной форме
                event.recipes.tfc.casting(`tfc:metal/ingot/${metal}`, 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.1)
                        .id(`tfc:casting/${metal}_fire_ingot`)

                // Отливка слитка в огнеупорной форме
                event.recipes.tfc.casting(`tfc:metal/ingot/${metal}`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.01)
                    .id(`tfc:casting/${metal}_ingot`)

                // Декрафт слитка в жидкость
                event.recipes.tfc.heating(`tfc:metal/ingot/${metal}`, metalSpecs.melt_temp)
                    .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                    .id(`tfc:heating/metal/${metal}_ingot`)
            }

            // Стержни
            if (metalSpecs.props.includes('rod'))
            {
                // Декрафт стержня в жидкость
                event.recipes.tfc.heating(`gtceu:${metal}_rod`, metalSpecs.melt_temp)
                    .resultFluid(Fluid.of(metalSpecs.fluid, 72))
                    .id(`tfc:heating/metal/${metal}_rod`)

                // Слиток -> 2 Стержня
                event.recipes.tfc.anvil(`2x gtceu:${metal}_rod`, `#forge:ingots/${metal}`, ['bend_last', 'draw_second_last', 'draw_third_last'])
                    .tier(metalSpecs.tier)
                    .id(`tfc:anvil/${metal}_rod`)
            }
            
        }

        // Двойные слитки
        if (metalSpecs.props.includes('double_ingot'))
        {
            // Декрафт двойного слитка в жидкость
            event.recipes.tfc.heating(`tfc:metal/double_ingot/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .id(`tfc:heating/metal/${metal}_double_ingot`)

            // Двойной слиток -> Пластина
            event.recipes.tfc.anvil(`gtceu:${metal}_plate`, `tfc:metal/double_ingot/${metal}`, ['hit_last', 'hit_second_last', 'hit_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_sword_blade`)
            
            if (metalSpecs.props.includes('sword_blade'))
            {
                // Оголовье меча
                event.recipes.tfc.anvil(`gtceu:${metal}_sword_head`, `tfc:metal/double_ingot/${metal}`, ['hit_last', 'bend_second_last', 'bend_third_last'])
                    .tier(metalSpecs.tier)
                    .bonus(true)
                    .id(`tfc:anvil/${metal}_sheet`)
            }
        }

        // Пластины
        if (metalSpecs.props.includes('sheet'))
        {
            // Удаление рецептов блоков
            event.remove({ id: `tfc:crafting/metal/block/${metal}` })
            event.remove({ id: `tfc:heating/metal/${metal}_block` })

            // Удаление рецептов ступеней
            event.remove({ id: `tfc:crafting/metal/block/${metal}_stairs` })
            event.remove({ id: `tfc:heating/metal/${metal}_block_stairs` })

            // Удалание рецептов полублоков
            event.remove({ id: `tfc:crafting/metal/block/${metal}_slab` })
            event.remove({ id: `tfc:heating/metal/${metal}_block_slab` })

            // Декрафт пластины в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_plate`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_sheet`)

            // Две пластины -> Двойная пластина
            event.recipes.tfc.welding(`gtceu:${metal}_double_plate`, `gtceu:${metal}_plate`, `gtceu:${metal}_plate`)
                .tier(metalSpecs.tier)
                .id(`tfc:welding/${metal}_double_sheet`)

            if (metalSpecs.props.includes('boots'))
            {
                // Шлем
                event.recipes.tfc.welding(`tfc:metal/helmet/${metal}`, `tfc:metal/unfinished_helmet/${metal}`, `gtceu:${metal}_plate`)
                    .tier(metalSpecs.tier)
                    .id(`tfc:welding/${metal}_helmet`)

                // Штаны
                event.recipes.tfc.welding(`tfc:metal/greaves/${metal}`, `tfc:metal/unfinished_greaves/${metal}`, `gtceu:${metal}_plate`)
                    .tier(metalSpecs.tier)
                    .id(`tfc:welding/${metal}_greaves`)

                // Ботинки
                event.recipes.tfc.welding(`tfc:metal/boots/${metal}`, `tfc:metal/unfinished_boots/${metal}`, `gtceu:${metal}_plate`)
                    .tier(metalSpecs.tier)
                    .id(`tfc:welding/${metal}_boots`)

                // Незавершенные ботинки
                event.recipes.tfc.anvil(`tfc:metal/unfinished_boots/${metal}`, `gtceu:${metal}_plate`, ['bend_last', 'bend_second_last', 'shrink_third_last'])
                    .tier(metalSpecs.tier)
                    .id(`tfc:anvil/${metal}_unfinished_boots`)
            }

            if (metalSpecs.props.includes('trapdoor'))
            {
                // Люк
                event.recipes.tfc.anvil(`tfc:metal/trapdoor/${metal}`, `gtceu:${metal}_plate`, ['bend_last', 'draw_second_last', 'draw_third_last'])
                    .tier(metalSpecs.tier)
                    .id(`tfc:anvil/${metal}_trapdoor`)

                // 8x Решетка
                event.recipes.tfc.anvil(`8x tfc:metal/bars/${metal}`, `gtceu:${metal}_plate`, ['upset_last', 'punch_second_last', 'punch_third_last'])
                    .tier(metalSpecs.tier)
                    .id(`tfc:anvil/${metal}_bars`)
            }

            if (metalSpecs.props.includes('fish_hook'))
            {
                // Крюк удочки
                event.recipes.tfc.anvil(`tfc:metal/fish_hook/${metal}`, `gtceu:${metal}_plate`, ['draw_not_last', 'bend_any', 'hit_any'])
                    .tier(metalSpecs.tier)
                    .bonus(true)
                    .id(`tfc:anvil/${metal}_fish_hook`)
            }

        }

        if (metalSpecs.props.includes('double_sheet'))
        {
            
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