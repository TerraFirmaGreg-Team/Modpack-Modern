// priority: 0

const registerTFCRecipes = (event) => {
    Object.entries(global.METAL_TO_SPECS).forEach(keyValuePair => {
        
        let metal = keyValuePair[0]
        let metalSpecs = keyValuePair[1]

        // Одинарные слитки
        if (metalSpecs.props.includes('ingot')) {
            // Металлы дублирующие гт
            if (metalSpecs.isGTDup != undefined)
            {
                // Отливка слитка в обычной форме
                event.recipes.tfc.casting(`gtceu:${metal}_ingot`, 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.1)
                    .id(`tfc:casting/${metal}_ingot`)

                // Отливка слитка в огнеупорной форме
                event.recipes.tfc.casting(`gtceu:${metal}_ingot`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.01)
                    .id(`tfc:casting/${metal}_fire_ingot`)
                
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
                    .id(`tfc:casting/${metal}_ingot`)

                // Отливка слитка в огнеупорной форме
                event.recipes.tfc.casting(`tfc:metal/ingot/${metal}`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.01)
                    .id(`tfc:casting/${metal}_fire_ingot`)

                // Декрафт слитка в жидкость
                event.recipes.tfc.heating(`tfc:metal/ingot/${metal}`, metalSpecs.melt_temp)
                    .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                    .id(`tfc:heating/metal/${metal}_ingot`)
            }
        }

        // Двойные слитки
        if (metalSpecs.props.includes('double_ingot')) {
            // Декрафт двойного слитка в жидкость
            event.recipes.tfc.heating(`tfc:metal/double_ingot/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .id(`tfc:heating/metal/${metal}_double_ingot`)
        }

        if (metalSpecs.props.includes('part')) {
            // Удаление рецептов блоков
            event.remove({ id: `tfc:crafting/metal/block/${metal}` })
            event.remove({ id: `tfc:heating/metal/${metal}_block` })

            // Удаление рецептов ступеней
            event.remove({ id: `tfc:crafting/metal/block/${metal}_stairs` })
            event.remove({ id: `tfc:heating/metal/${metal}_block_stairs` })

            // Удалание рецептов полублоков
            event.remove({ id: `tfc:crafting/metal/block/${metal}_slab` })
            event.remove({ id: `tfc:heating/metal/${metal}_block_slab` })

            // Декрафт стержня в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_rod`, metalSpecs.melt_temp)
            .resultFluid(Fluid.of(metalSpecs.fluid, 72))
            .id(`tfc:heating/metal/${metal}_rod`)

            // Двойной слиток -> Пластина
            event.recipes.tfc.anvil(`gtceu:${metal}_plate`, `tfc:metal/double_ingot/${metal}`, ['hit_last', 'hit_second_last', 'hit_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_sheet`)

            // Декрафт пластины в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_plate`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_sheet`)

            // Две пластины -> Двойная пластина
            event.recipes.tfc.welding(`gtceu:${metal}_double_plate`, `gtceu:${metal}_plate`, `gtceu:${metal}_plate`)
                .tier(metalSpecs.tier)
                .id(`tfc:welding/${metal}_double_sheet`)

            // Слиток -> 2 Стержня
            event.recipes.tfc.anvil(`2x gtceu:${metal}_rod`, `#forge:ingots/${metal}`, ['bend_last', 'draw_second_last', 'draw_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_rod`)

            // Декрафт двойных пластин
            event.recipes.tfc.heating(`gtceu:${metal}_double_plate`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .id(`tfc:heating/metal/${metal}_double_sheet`)
        }

        if (metalSpecs.props.includes('armor')) {
            //#region Шлем

            // Декрафт незавершенного шлема в жидкость
            event.recipes.tfc.heating(`tfc:metal/unfinished_helmet/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .id(`tfc:heating/metal/${metal}_unfinished_helmet`)

            // Незавершенный шлем
            event.recipes.tfc.anvil(`tfc:metal/unfinished_helmet/${metal}`, `gtceu:${metal}_double_plate`, ['hit_last', 'bend_second_last', 'bend_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_unfinished_helmet`)

            // Декрафт шлема в жидкость
            event.recipes.tfc.heating(`tfc:metal/helmet/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 432))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_helmet`)

            // Шлем
            event.recipes.tfc.welding(`tfc:metal/helmet/${metal}`, `tfc:metal/unfinished_helmet/${metal}`, `gtceu:${metal}_plate`)
                .tier(metalSpecs.tier)
                .id(`tfc:welding/${metal}_helmet`)

            //#endregion

            //#region Нагрудник

            // Декрафт незавершенного нагрудника в жидкость
            event.recipes.tfc.heating(`tfc:metal/unfinished_chestplate/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .id(`tfc:heating/metal/${metal}_unfinished_chestplate`)

            // Незавершенный нагрудник
            event.recipes.tfc.anvil(`tfc:metal/unfinished_chestplate/${metal}`, `gtceu:${metal}_double_plate`, ['hit_last', 'hit_second_last', 'upset_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_unfinished_chestplate`)

            // Декрафт нагрудника в жидкость
            event.recipes.tfc.heating(`tfc:metal/chestplate/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 576))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_chestplate`)

            // Нагрудник
            event.recipes.tfc.welding(`tfc:metal/chestplate/${metal}`, `tfc:metal/unfinished_chestplate/${metal}`, `gtceu:${metal}_double_plate`)
                .tier(metalSpecs.tier)
                .id(`tfc:welding/${metal}_chestplate`)

            //#endregion

            //#region Поножи

            // Декрафт незавершенных поножей в жидкость
            event.recipes.tfc.heating(`tfc:metal/unfinished_greaves/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .id(`tfc:heating/metal/${metal}_unfinished_greaves`)

            // Незавершенные поножи
            event.recipes.tfc.anvil(`tfc:metal/unfinished_greaves/${metal}`, `gtceu:${metal}_double_plate`, ['bend_any', 'draw_any', 'hit_any'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_unfinished_greaves`)

            // Декрафт поножей в жидкость
            event.recipes.tfc.heating(`tfc:metal/greaves/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 432))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_greaves`)

            // Поножи
            event.recipes.tfc.welding(`tfc:metal/greaves/${metal}`, `tfc:metal/unfinished_greaves/${metal}`, `gtceu:${metal}_plate`)
                .tier(metalSpecs.tier)
                .id(`tfc:welding/${metal}_greaves`)

            //#endregion

            //#region Ботинки

            // Декрафт незавершенных ботинок в жидкость
            event.recipes.tfc.heating(`tfc:metal/unfinished_boots/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_unfinished_boots`)

            // Незавершенные ботинки
            event.recipes.tfc.anvil(`tfc:metal/unfinished_boots/${metal}`, `gtceu:${metal}_plate`, ['bend_last', 'bend_second_last', 'shrink_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_unfinished_boots`)

            // Декрафт ботинок в жидкость
            event.recipes.tfc.heating(`tfc:metal/boots/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_boots`)

            // Ботинки
            event.recipes.tfc.welding(`tfc:metal/boots/${metal}`, `tfc:metal/unfinished_boots/${metal}`, `gtceu:${metal}_plate`)
                .tier(metalSpecs.tier)
                .id(`tfc:welding/${metal}_boots`)

            //#endregion
        }

        if (metalSpecs.props.includes('tool')) {
            //#region Фурма
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/tuyere/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_tuyere`)

            // Фурма
            event.recipes.tfc.anvil(`tfc:metal/tuyere/${metal}`, `gtceu:${metal}_double_plate`, ['bend_last', 'bend_second_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_tuyere`)

            //#endregion
            
            //#region Удочка

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`tfc:metal/fish_hook/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_fish_hook`)

            // Крюк удочки
            event.recipes.tfc.anvil(`tfc:metal/fish_hook/${metal}`, `gtceu:${metal}_plate`, ['draw_not_last', 'bend_any', 'hit_any'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_fish_hook`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/fishing_rod/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_fishing_rod`)

            //#endregion
            
            //#region Кирка
            
            // Крафт инструмента
            event.shaped(`gtceu:${metal}_pickaxe`, [
                'A', 
                'B' 
            ], {
                A: `gtceu:${metal}_pickaxe_head`, 
                B: '#tfc:can_be_lit_on_torch'   
            }).id(`tfc:crafting/metal/pickaxe/${metal}`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_pickaxe`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_pickaxe`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_pickaxe_head`, `#forge:ingots/${metal}`, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_pickaxe_head`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`gtceu:${metal}_pickaxe_head`, 'tfc:ceramic/pickaxe_head_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_pickaxe_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_pickaxe_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_pickaxe_head`)

            //#endregion

            //#region Проспектор
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/propick/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_propick`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`tfc:metal/propick_head/${metal}`, 'tfc:ceramic/propick_head_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_propick_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`tfc:metal/propick_head/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_propick_head`)

            //#endregion

            //#region Топор
            
            // Крафт инструмента
            event.shaped(`gtceu:${metal}_axe`, [
                'A', 
                'B' 
            ], {
                A: `gtceu:${metal}_axe_head`, 
                B: '#tfc:can_be_lit_on_torch'   
            }).id(`tfc:crafting/metal/axe/${metal}`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_axe`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_axe`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_axe_head`, `#forge:ingots/${metal}`, ['punch_last', 'hit_second_last', 'upset_third_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_axe_head`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`gtceu:${metal}_axe_head`, 'tfc:ceramic/axe_head_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_axe_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_axe_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_axe_head`)

            //#endregion

            //#region Лопата
            
            // Крафт инструмента
            event.shaped(`gtceu:${metal}_shovel`, [
                'A', 
                'B' 
            ], {
                A: `gtceu:${metal}_shovel_head`, 
                B: '#tfc:can_be_lit_on_torch'   
            }).id(`tfc:crafting/metal/shovel/${metal}`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_shovel`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_shovel`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_shovel_head`, `#forge:ingots/${metal}`, ['punch_last', 'hit_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_shovel_head`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`gtceu:${metal}_shovel_head`, 'tfc:ceramic/shovel_head_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_shovel_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_shovel_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_shovel_head`)

            //#endregion

            //#region Мотыга
            
            // Крафт инструмента
            event.shaped(`gtceu:${metal}_hoe`, [
                'A', 
                'B' 
            ], {
                A: `gtceu:${metal}_hoe_head`, 
                B: '#tfc:can_be_lit_on_torch'   
            }).id(`tfc:crafting/metal/hoe/${metal}`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_hoe`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_hoe`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_hoe_head`, `#forge:ingots/${metal}`, ['punch_last', 'hit_not_last', 'bend_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_hoe_head`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`gtceu:${metal}_hoe_head`, 'tfc:ceramic/hoe_head_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_hoe_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_hoe_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_hoe_head`)

            //#endregion

            //#region Стамеска
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/chisel/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_chisel`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`tfc:metal/chisel_head/${metal}`, 'tfc:ceramic/chisel_head_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_chisel_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`tfc:metal/chisel_head/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_chisel_head`)

            //#endregion

            //#region Молот
            
            // Крафт инструмента
            event.shaped(`gtceu:${metal}_hammer`, [
                'A', 
                'B' 
            ], {
                A: `gtceu:${metal}_hammer_head`, 
                B: '#tfc:can_be_lit_on_torch'   
            }).id(`tfc:crafting/metal/hammer/${metal}`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_hammer`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_hammer`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_hammer_head`, `#forge:ingots/${metal}`, ['punch_last', 'shrink_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_hammer_head`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`gtceu:${metal}_hammer_head`, 'tfc:ceramic/hammer_head_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_hammer_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_hammer_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_hammer_head`)

            //#endregion

            //#region Пила
            
            // Крафт инструмента
            event.shaped(`gtceu:${metal}_saw`, [
                'A', 
                'B' 
            ], {
                A: `gtceu:${metal}_saw_head`, 
                B: '#tfc:can_be_lit_on_torch'   
            }).id(`tfc:crafting/metal/saw/${metal}`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_saw`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_saw`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_saw_head`, `#forge:ingots/${metal}`, ['hit_last', 'hit_second_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_saw_blade`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`gtceu:${metal}_saw_head`, 'tfc:ceramic/saw_blade_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_saw_blade`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_saw_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_saw_blade`)

            //#endregion

            //#region Копье
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/javelin/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_javelin`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`tfc:metal/javelin_head/${metal}`, 'tfc:ceramic/javelin_head_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_javelin_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`tfc:metal/javelin_head/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_javelin_head`)

            //#endregion

            //#region Меч
            
            // Крафт инструмента
            event.shaped(`gtceu:${metal}_sword`, [
                'A', 
                'B' 
            ], {
                A: `gtceu:${metal}_sword_head`, 
                B: '#tfc:can_be_lit_on_torch'   
            }).id(`tfc:crafting/metal/sword/${metal}`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_sword`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_sword`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_sword_head`, `#forge:ingots/double/${metal}`, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_sword_blade`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`gtceu:${metal}_sword_head`, 'tfc:ceramic/sword_blade_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 288), 1)
                    .id(`tfc:casting/${metal}_sword_blade`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_sword_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .id(`tfc:heating/metal/${metal}_sword_blade`)

            //#endregion

            //#region Дубина
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/mace/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_mace`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`tfc:metal/mace_head/${metal}`, 'tfc:ceramic/mace_head_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 288), 1)
                    .id(`tfc:casting/${metal}_mace_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`tfc:metal/mace_head/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .id(`tfc:heating/metal/${metal}_mace_head`)

            //#endregion
        
            //#region Нож
            
            // Крафт инструмента
            event.shaped(`gtceu:${metal}_knife`, [
                'A', 
                'B' 
            ], {
                A: `gtceu:${metal}_knife_head`, 
                B: '#tfc:can_be_lit_on_torch'   
            }).id(`tfc:crafting/metal/knife/${metal}`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_knife`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_knife`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_knife_head`, `#forge:ingots/${metal}`, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_knife_blade`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`gtceu:${metal}_knife_head`, 'tfc:ceramic/knife_blade_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_knife_blade`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_knife_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_knife_blade`)

            //#endregion

            //#region Коса
            
            // Крафт инструмента
            event.shaped(`gtceu:${metal}_scythe`, [
                'A', 
                'B' 
            ], {
                A: `gtceu:${metal}_scythe_head`, 
                B: '#tfc:can_be_lit_on_torch'   
            }).id(`tfc:crafting/metal/scythe/${metal}`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_scythe`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_scythe`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_scythe_head`, `#forge:ingots/${metal}`, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_scythe_blade`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.canBeUnmolded) {
                event.recipes.tfc.casting(`gtceu:${metal}_scythe_head`, 'tfc:ceramic/scythe_blade_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 1)
                    .id(`tfc:casting/${metal}_scythe_blade`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_scythe_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_scythe_blade`)

            //#endregion

            //#region Ножницы 

            // Сварка оголовий
            event.recipes.tfc.welding(`tfc:metal/shears/${metal}`, `gtceu:${metal}_knife_head`, `gtceu:${metal}_knife_head`, metalSpecs.tier)
                .id(`tfc:welding/${metal}_shears`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/shears/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_shears`)

            //#endregion

            //#region Щит

            // Декрафт щита в жидкость
            event.recipes.tfc.heating(`tfc:metal/shield/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_shield`)

            // Щит
            event.recipes.tfc.anvil(`tfc:metal/shield/${metal}`, `gtceu:${metal}_double_plate`, ['upset_last', 'bend_second_last', 'bend_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_shield`)

            //#endregion

            //#region Конская броня
            
            // Декрафт конской брони в жидкость
            event.recipes.tfc.heating(`tfc:metal/horse_armor/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 864))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_horse_armor`)
            
            //#endregion

        }

        if (metalSpecs.props.includes('utility')) {
            // Декрафт незавершенной лампы в жидкость
            event.recipes.tfc.heating(`tfc:metal/unfinished_lamp/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_unfinished_lamp`)

            // Декрафт лампы в жидкость
            event.recipes.tfc.heating(`tfc:metal/lamp/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_lamp`)

            // Декрафт люка в жидкость
            event.recipes.tfc.heating(`tfc:metal/trapdoor/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_trapdoor`)

            // Люк
            event.recipes.tfc.anvil(`tfc:metal/trapdoor/${metal}`, `gtceu:${metal}_plate`, ['bend_last', 'draw_second_last', 'draw_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_trapdoor`)

            // Декрафт решетки в жидкость
            event.recipes.tfc.heating(`tfc:metal/bars/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 18))
                .id(`tfc:heating/metal/${metal}_bars`)

            // 8x Решетка
            event.recipes.tfc.anvil(`8x tfc:metal/bars/${metal}`, `gtceu:${metal}_plate`, ['upset_last', 'punch_second_last', 'punch_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_bars`)

            // 16x Решетка
            event.recipes.tfc.anvil(`16x tfc:metal/bars/${metal}`, `gtceu:${metal}_double_plate`, ['upset_last', 'punch_second_last', 'punch_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_bars_double`)

            // Декрафт цепи в жидкость
            event.recipes.tfc.heating(`tfc:metal/chain/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 9))
                .id(`tfc:heating/metal/${metal}_chain`)

            // Декрафт наковальни в жидкость
            event.recipes.tfc.heating(`tfc:metal/anvil/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 2016))
                .id(`tfc:heating/metal/${metal}_anvil`)
        }

        if (metalSpecs.props.includes('small_ore')) {
            // Декрафт мелкого кусочка в жидкость
            event.recipes.tfc.heating(`tfc:ore/small_${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 16))
                .id(`tfc:heating/ore/small_${metal}`)

            event.remove({ id: `tfc:heating/ore/poor_${metal}` })
            event.remove({ id: `tfc:heating/ore/normal_${metal}` })
            event.remove({ id: `tfc:heating/ore/rich_${metal}` })
        }

        if (metalSpecs.props.includes('small_native_ore')) {
            // Декрафт мелкого кусочка в жидкость
            event.recipes.tfc.heating(`tfc:ore/small_native_${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 16))
                .id(`tfc:heating/ore/small_native_${metal}`)

            event.remove({ id: `tfc:heating/ore/poor_native_${metal}` })
            event.remove({ id: `tfc:heating/ore/normal_native_${metal}` })
            event.remove({ id: `tfc:heating/ore/rich_native_${metal}` })
        }

        if (metalSpecs.props.includes('dusts')) {
            
        }

    })

    //#region Вырезание предметов из CastIron

    // Слиток
    event.remove({ id: `tfc:casting/cast_iron_ingot` })
    event.remove({ id: `tfc:casting/cast_iron_fire_ingot` })
    event.remove({ id: `tfc:heating/metal/cast_iron_ingot` })
    event.remove({ id: `tfc:welding/cast_iron_double_ingot` })
    event.remove({ id: `tfc:anvil/cast_iron_rod` })

    // Двойной слиток
    event.remove({ id: `tfc:heating/metal/cast_iron_double_ingot` })
    event.remove({ id: `tfc:anvil/cast_iron_sheet` })

    // Пластина
    event.remove({ id: `tfc:heating/metal/cast_iron_sheet` })
    event.remove({ id: `tfc:welding/cast_iron_double_sheet` })

    // Двойная пластина
    event.remove({ id: `tfc:heating/metal/cast_iron_double_sheet` })

    // Стержень
    event.remove({ id: `tfc:heating/metal/cast_iron_rod` })

    // Блок
    event.remove({ id: `tfc:crafting/metal/block/cast_iron` })
    event.remove({ id: `tfc:heating/metal/cast_iron_block` })

    // Ступенька
    event.remove({ id: `tfc:crafting/metal/block/cast_iron_stairs` })
    event.remove({ id: `tfc:heating/metal/cast_iron_block_stairs` })

    // Полублок
    event.remove({ id: `tfc:crafting/metal/block/cast_iron_slab` })
    event.remove({ id: `tfc:heating/metal/cast_iron_block_slab` })

    //#endregion

    //#region Фикс расплава слитков кованного железа (не получится сделать в автогене)

    // Отливка слитка в обычной форме
    event.recipes.tfc.casting(`gtceu:wrought_iron_ingot`, 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient('gtceu:wrought_iron', 144), 0.1)
        .id(`tfc:casting/wrought_iron_ingot`)

    // Отливка слитка в огнеупорной форме
    event.recipes.tfc.casting(`gtceu:wrought_iron_ingot`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient('gtceu:wrought_iron', 144), 0.01)
        .id(`tfc:casting/wrought_iron_fire_ingot`)

    // Декрафт слитка в жидкость
    event.recipes.tfc.heating(`gtceu:wrought_iron_ingot`, 1535)
        .resultFluid(Fluid.of('gtceu:wrought_iron', 144))
        .id(`tfc:heating/metal/wrought_iron_ingot`)

    // Декрафт слитка в жидкость
    event.recipes.tfc.heating(`tfc:metal/double_ingot/wrought_iron`, 1535)
        .resultFluid(Fluid.of('gtceu:wrought_iron', 288))
        .id(`tfc:heating/wrought_iron_double_ingot`)

    //#endregion

    //#region Фикс рецептов колоколов

    // Отливка из золота
    event.recipes.tfc.casting(`minecraft:bell`, 'tfc:ceramic/bell_mold', TFC.fluidStackIngredient('gtceu:gold', 144), 1)
        .id(`tfc:casting/gold_bell`)

    // Декрафт в золото
    event.recipes.tfc.heating(`minecraft:bell`, 1060)
        .resultFluid(Fluid.of('gtceu:gold', 144))
        .id(`tfc:heating/gold_bell`)

    // Отливка из латуни
    event.recipes.tfc.casting(`tfc:brass_bell`, 'tfc:ceramic/bell_mold', TFC.fluidStackIngredient('gtceu:brass', 144), 1)
        .id(`tfc:casting/brass_bell`)

    // Декрафт в латунь
    event.recipes.tfc.heating(`tfc:brass_bell`, 930)
        .resultFluid(Fluid.of('gtceu:brass', 144))
        .id(`tfc:heating/brass_bell`)

    // Отливка из бронзы
    event.recipes.tfc.casting(`tfc:bronze_bell`, 'tfc:ceramic/bell_mold', TFC.fluidStackIngredient('gtceu:bronze', 144), 1)
        .id(`tfc:casting/bronze_bell`)

    // Декрафт в бронзу
    event.recipes.tfc.heating(`tfc:bronze_bell`, 930)
        .resultFluid(Fluid.of('gtceu:bronze', 144))
        .id(`tfc:heating/bronze_bell`)


    //#endregion

    // Декрафт Jacks
    event.recipes.tfc.heating('tfc:jacks', 930)
        .resultFluid(Fluid.of('gtceu:brass', 144))
        .id(`tfc:heating/jacks`)

    // Декрафт Gem Saw
    event.recipes.tfc.heating('tfc:gem_saw', 930)
        .resultFluid(Fluid.of('gtceu:brass', 72))
        .id(`tfc:heating/gem_saw`)

    // Декрафт сырой крицы в жидкость
    event.recipes.tfc.heating(`tfc:raw_iron_bloom`, 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 144))
        .id(`tfc:heating/raw_bloom`)

    // Декрафт укрепленной крицы в жидкость
    event.recipes.tfc.heating(`tfc:refined_iron_bloom`, 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 144))
        .id(`tfc:heating/refined_bloom`)

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

    // Доменная печь
    event.shaped('tfc:blast_furnace', [
        'AAA', 
        'ABA',
        'AAA'  
    ], {
        A: '#forge:plates/wrought_iron',
        B: 'tfc:crucible'
    }).id('tfc:crafting/blast_furnace')
}