// priority: 0

const registerTFCRecipes = (event) => {
    
    //#region Металлы
    
    Object.entries(global.METAL_TO_SPECS).forEach(keyValuePair => {
        
        let metal = keyValuePair[0]
        let metalSpecs = keyValuePair[1]

        // Одинарные слитки
        if (metalSpecs.props.includes('ingot')) {
            if (metalSpecs.isGTDup != undefined)
            {
                // Отливка слитка в обычной форме
                event.recipes.tfc.casting(`gtceu:${metal}_ingot`, 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.1)
                    .id(`tfc:casting/${metal}_ingot`)

                // Отливка слитка в огнеупорной форме
                event.recipes.tfc.casting(`gtceu:${metal}_ingot`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(metalSpecs.fluid, 144), 0.01)
                    .id(`tfc:casting/${metal}_fire_ingot`)
                
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
            }

            // Декрафт слитка в жидкость
            event.recipes.tfc.heating(`#forge:ingots/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 144))
                .id(`tfc:heating/metal/${metal}_ingot`)
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
            event.remove({ id: `tfc:crafting/metal/pickaxe/${metal}` })

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
            event.remove({ id: `tfc:crafting/metal/axe/${metal}` })

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
            event.remove({ id: `tfc:crafting/metal/shovel/${metal}` })

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
            event.remove({ id: `tfc:crafting/metal/hoe/${metal}` })

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
            event.remove({ id: `tfc:crafting/metal/hammer/${metal}` })

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
            event.remove({ id: `tfc:crafting/metal/saw/${metal}` })

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
            event.remove({ id: `tfc:crafting/metal/sword/${metal}` })

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_sword`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_sword`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_sword_head`, `#forge:double_ingots/${metal}`, ['punch_last', 'bend_not_last', 'draw_not_last'])
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
            event.remove({ id: `tfc:crafting/metal/knife/${metal}` })

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
            event.remove({ id: `tfc:crafting/metal/scythe/${metal}` })

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
            
            // Наковальня из слитков
            event.recipes.gtceu.alloy_smelter(`ingots_to_${metal}_anvil`)             
                .itemInputs(`14x #forge:ingots/${metal}`)
                .notConsumable('gtceu:anvil_casting_mold')
                .itemOutputs(`tfc:metal/anvil/${metal}`)
                .duration(1680)
                .EUt(16)

            // Наковальня из жидкости
            event.recipes.gtceu.fluid_solidifier(`solidify_${metal}_anvil`)             
                .inputFluids(Fluid.of(metalSpecs.fluid, 2016))
                .notConsumable('gtceu:anvil_casting_mold')
                .itemOutputs(`tfc:metal/anvil/${metal}`)
                .duration(1680)
                .EUt(16)
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
            // Декрафт мелкой пыли
            event.recipes.tfc.heating(`gtceu:${metal}_tiny_dust`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, global.calcAmountOfMetal(16, metalSpecs.percent_of_material)))
                .id(`tfg:heating/tiny_dust/${metal}`)

            // Декрафт средней пыли
            event.recipes.tfc.heating(`gtceu:${metal}_small_dust`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, global.calcAmountOfMetal(36, metalSpecs.percent_of_material)))
                .id(`tfg:heating/small_dust/${metal}`)

            // Декрафт пыли
            event.recipes.tfc.heating(`gtceu:${metal}_dust`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, global.calcAmountOfMetal(144, metalSpecs.percent_of_material)))
                .id(`tfg:heating/dust/${metal}`)
        }

        if (metalSpecs.props.includes('nugget')) {
            // Декрафт мелкой пыли
            event.recipes.tfc.heating(`#forge:nuggets/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, global.calcAmountOfMetal(16, metalSpecs.percent_of_material)))
                .id(`tfg:heating/nugget/${metal}`)
        }

        if (metalSpecs.props.includes('ore_chunks')) {
            // Декрафт куска руды
            event.recipes.tfc.heating(`#forge:raw_materials/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.fluid, global.calcAmountOfMetal(36, metalSpecs.percent_of_material)))
                .id(`tfg:heating/raw/${metal}`)
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

    // Гриль
    event.recipes.tfc.heating('tfc:wrought_iron_grill', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 288))
        .id(`tfc:heating/grill`)

    // Ванильная дверь декрафт
    event.recipes.tfc.heating('minecraft:iron_door', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 288))
        .id(`tfc:heating/iron_door`)
    
    // Ванильная дверь на наковальне
    event.recipes.tfc.anvil('minecraft:iron_door', '#forge:plates/wrought_iron', ['hit_last', 'draw_not_last', 'punch_not_last'])
        .tier(3)
        .id(`tfc:anvil/iron_door`)
    
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

    // Cast iron -> Raw Iron Bloom
    event.recipes.tfc.bloomery('tfc:raw_iron_bloom', 'minecraft:charcoal', Fluid.of('tfc:metal/cast_iron', 144), 15000)
        .id('tfc:bloomery/raw_iron_bloom')

    //#endregion

    //#region Камень

    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        // Сырой камень -> Сырой камень
        event.recipes.gtceu.rock_breaker(`raw_${stoneTypeName}`)             
            .notConsumable(`tfc:rock/raw/${stoneTypeName}`)
            .itemOutputs(`tfc:rock/raw/${stoneTypeName}`)
            .duration(16)
            .EUt(7)

        // Булыжник -> Булыжник
        event.recipes.gtceu.rock_breaker(`cobble_${stoneTypeName}`)             
            .notConsumable(`tfc:rock/cobble/${stoneTypeName}`)
            .itemOutputs(`tfc:rock/cobble/${stoneTypeName}`)
            .duration(16)
            .EUt(7)

        // Сырой камень -> Булыжник
        event.recipes.gtceu.forge_hammer(`raw_${stoneTypeName}_to_cobble`)             
            .itemInputs(`tfc:rock/raw/${stoneTypeName}`)
            .itemOutputs(`tfc:rock/cobble/${stoneTypeName}`)
            .duration(10)
            .EUt(16)

        // Булыжник -> Гравий
        event.recipes.gtceu.forge_hammer(`cobble_${stoneTypeName}_to_gravel`)             
            .itemInputs(`tfc:rock/cobble/${stoneTypeName}`)
            .itemOutputs(`tfc:rock/gravel/${stoneTypeName}`)
            .duration(10)
            .EUt(16)
    })

    //#endregion

    //#region Песок

    // Песок душ -> Желтый песок
    event.recipes.gtceu.centrifuge('soul_sand_separation')             
        .itemInputs('minecraft:soul_sand')
        .chancedOutput('tfc:sand/yellow', 9000, 130)
        .chancedOutput('gtceu:saltpeter_small_dust', 8000, 480)
        .chancedOutput('gtceu:coal_tiny_dust', 2000, 340)
        .outputFluids(Fluid.of('gtceu:oil', 80))
        .duration(200)
        .EUt(80)

    // Нефтеносный -> Желтый песок
    event.recipes.gtceu.centrifuge('oilsands_ore_separation')             
        .itemInputs('#forge:ores/oilsands')
        .chancedOutput('tfc:sand/yellow', 5000, 5000)
        .outputFluids(Fluid.of('gtceu:oil', 2000))
        .duration(200)
        .EUt(30)

    // Пыль нефтеносного песка -> Желтый песок
    event.recipes.gtceu.centrifuge('oilsands_dust_separation')             
        .itemInputs('gtceu:oilsands_dust')
        .chancedOutput('tfc:sand/yellow', 5000, 5000)
        .outputFluids(Fluid.of('gtceu:oil', 2000))
        .duration(200)
        .EUt(30)

    // Земля -> Желтый песок
    event.recipes.gtceu.centrifuge('dirt_separation')             
        .itemInputs('#tfc:dirt')
        .chancedOutput('gtceu:plant_ball', 1250, 700)
        .chancedOutput('tfc:sand/yellow', 5000, 1200)
        .chancedOutput('gtceu:clay_tiny_dust', 4000, 900)
        .outputFluids(Fluid.of('gtceu:oil', 2000))
        .duration(250)
        .EUt(30)

    // Декрафт песчанных блоков в песок
    global.SAND_COLORS.forEach(sandColor => {
        // Песчанник -> Песок
        event.recipes.gtceu.forge_hammer(`raw_${sandColor}_sandstone_to_sand`)             
            .itemInputs(`tfc:raw_sandstone/${sandColor}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(400)
            .EUt(2)

        // Гладкий песчанник -> Песок
        event.recipes.gtceu.forge_hammer(`smooth_${sandColor}_sandstone_to_sand`)             
            .itemInputs(`tfc:smooth_sandstone/${sandColor}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(400)
            .EUt(2)

        // Обрезанный песчанник -> Песок
        event.recipes.gtceu.forge_hammer(`cut_${sandColor}_sandstone_to_sand`)             
            .itemInputs(`tfc:cut_sandstone/${sandColor}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(400)
            .EUt(2)

        // Sand -> Raw SandStone
        event.recipes.gtceu.compressor(`${sandColor}_sandstone`)             
            .itemInputs(`4x tfc:sand/${sandColor}`)
            .itemOutputs(`tfc:raw_sandstone/${sandColor}`)
            .duration(300)
            .EUt(2)

        // Raw SandStone -> Smooth SandStone
        event.recipes.gtceu.laser_engraver(`raw_${sandColor}_sandstone_to_smooth`)             
            .itemInputs(`tfc:raw_sandstone/${sandColor}`)
            .notConsumable('gtceu:magenta_glass_lens')
            .itemOutputs(`tfc:smooth_sandstone/${sandColor}`)
            .duration(60)
            .EUt(32)

        // Raw SandStone -> Cut SandStone
        event.recipes.gtceu.laser_engraver(`raw_${sandColor}_sandstone_to_cut`)             
            .itemInputs(`tfc:raw_sandstone/${sandColor}`)
            .notConsumable('gtceu:orange_glass_lens')
            .itemOutputs(`tfc:cut_sandstone/${sandColor}`)
            .duration(60)
            .EUt(32)
    })
    
    // Коричневый гравий -> Песок
    event.recipes.gtceu.forge_hammer('brown_gravel_to_sand')             
        .itemInputs('#tfc:brown_gravel')
        .itemOutputs('tfc:sand/brown')
        .duration(400)
        .EUt(2)

    // Белый гравий -> Песок
    event.recipes.gtceu.forge_hammer('white_gravel_to_sand')             
        .itemInputs('#tfc:white_gravel')
        .itemOutputs('tfc:sand/white')
        .duration(400)
        .EUt(2)

    // Черный гравий -> Песок
    event.recipes.gtceu.forge_hammer('black_gravel_to_sand')             
        .itemInputs('#tfc:black_gravel')
        .itemOutputs('tfc:sand/black')
        .duration(400)
        .EUt(2)

    // Красный гравий -> Песок
    event.recipes.gtceu.forge_hammer('red_gravel_to_sand')             
        .itemInputs('#tfc:red_gravel')
        .itemOutputs('tfc:sand/red')
        .duration(400)
        .EUt(2)

    // Желтый гравий -> Песок
    event.recipes.gtceu.forge_hammer('yellow_gravel_to_sand')             
        .itemInputs('#tfc:yellow_gravel')
        .itemOutputs('tfc:sand/yellow')
        .duration(400)
        .EUt(2)

    // Зеленый гравий -> Песок
    event.recipes.gtceu.forge_hammer('green_gravel_to_sand')             
        .itemInputs('#tfc:green_gravel')
        .itemOutputs('tfc:sand/green')
        .duration(400)
        .EUt(2)

    // Розовый гравий -> Песок
    event.recipes.gtceu.forge_hammer('pink_gravel_to_sand')             
        .itemInputs('#tfc:pink_gravel')
        .itemOutputs('tfc:sand/pink')
        .duration(400)
        .EUt(2)

    //#endregion

    //#region Дерево
    
    //#endregion

    global.TFC_WOOD_TYPES.forEach(wood => {
        event.remove({ id: `tfc:crafting/wood/${wood}_axle` })
        event.remove({ id: `tfc:crafting/wood/${wood}_bladed_axle` })
        event.remove({ id: `tfc:crafting/wood/${wood}_encased_axle` })
        event.remove({ id: `tfc:crafting/wood/${wood}_clutch` })
        event.remove({ id: `tfc:crafting/wood/${wood}_gear_box` })
        event.remove({ id: `tfc:crafting/wood/${wood}_gear_box` })
        event.remove({ id: `tfc:crafting/wood/${wood}_water_wheel` })
    })

    event.remove({ id: `tfc:crafting/trip_hammer` })
    event.remove({ id: `tfc:crafting/windmill_blade` })
    event.remove({ id: `tfc:barrel/dye/bleach_windmill_blades` })

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.remove({ id: `tfc:barrel/dye/${dye}_windmill_blade` })
    })

    //#region Порошки
    
    event.remove({ id: 'tfc:quern/cryolite' })
    event.remove({ id: 'tfc:quern/sylvite' })

    // 2x Coke Powder
    event.recipes.tfc.quern('2x tfc:powder/coke', '#forge:gems/coke')
        .id('tfg:quern/coke_powder')

    // 2x Amethyst Powder
    event.recipes.tfc.quern('2x tfc:powder/amethyst', '#forge:raw_materials/amethyst')
        .id('tfc:quern/amethyst_cut')

    // 2x Diamond Powder
    event.recipes.tfc.quern('2x tfc:powder/diamond', '#forge:raw_materials/diamond')
        .id('tfc:quern/diamond_cut')
    
    // 2x Emerald Powder
    event.recipes.tfc.quern('2x tfc:powder/emerald', '#forge:raw_materials/emerald')
        .id('tfc:quern/emerald_cut')

    // 2x Lapis Lazuli Powder
    event.recipes.tfc.quern('2x tfc:powder/lapis_lazuli', '#forge:raw_materials/lapis')
        .id('tfc:quern/lapis_lazuli_cut')

    // 2x Opal Powder
    event.recipes.tfc.quern('2x tfc:powder/opal', '#forge:raw_materials/opal')
        .id('tfc:quern/opal_cut')

    // 2x Pyrite Powder
    event.recipes.tfc.quern('2x tfc:powder/pyrite', '#forge:raw_materials/pyrite')
        .id('tfc:quern/pyrite_cut')

    // 2x Ruby Powder
    event.recipes.tfc.quern('2x tfc:powder/ruby', '#forge:raw_materials/ruby')
        .id('tfc:quern/ruby_cut')

    // 2x Sapphire Powder
    event.recipes.tfc.quern('2x tfc:powder/sapphire', '#forge:raw_materials/sapphire')
        .id('tfc:quern/sapphire_cut')

    // 2x Topaz Powder
    event.recipes.tfc.quern('2x tfc:powder/topaz', '#forge:raw_materials/topaz')
        .id('tfc:quern/topaz_cut')

    // 1x Gold Powder
    event.recipes.tfc.quern('1x tfc:powder/native_gold', 'tfc:ore/small_native_gold')
        .id('tfc:quern/small_native_gold')

    // 4x Gold Powder
    event.recipes.tfc.quern('4x tfc:powder/native_gold', '#forge:raw_materials/gold')
        .id('tfc:quern/normal_native_gold')

    // 1x Silver Powder
    event.recipes.tfc.quern('1x tfc:powder/native_silver', 'tfc:ore/small_native_silver')
        .id('tfc:quern/small_native_silver')

    // 4x Silver Powder
    event.recipes.tfc.quern('4x tfc:powder/native_silver', '#forge:raw_materials/silver')
        .id('tfc:quern/normal_native_silver')

    // 1x Cassiterite Powder
    event.recipes.tfc.quern('1x tfc:powder/cassiterite', 'tfc:ore/small_cassiterite')
        .id('tfc:quern/small_cassiterite')

    // 4x Cassiterite Powder
    event.recipes.tfc.quern('4x tfc:powder/cassiterite', '#forge:raw_materials/cassiterite')
        .id('tfc:quern/normal_cassiterite')

    // 1x Bismuth Powder
    event.recipes.tfc.quern('1x tfc:powder/bismuthinite', 'tfc:ore/small_bismuthinite')
        .id('tfc:quern/small_bismuthinite')

    // 4x Bismuth Powder
    event.recipes.tfc.quern('4x tfc:powder/bismuthinite', '#forge:raw_materials/bismuth')
        .id('tfc:quern/normal_bismuthinite')

    // 1x Garnierite Powder
    event.recipes.tfc.quern('1x tfc:powder/garnierite', 'tfc:ore/small_garnierite')
        .id('tfc:quern/small_garnierite')

    // 4x Garnierite Powder
    event.recipes.tfc.quern('4x tfc:powder/garnierite', '#forge:raw_materials/garnierite')
        .id('tfc:quern/normal_garnierite')


    // 4x Nickel Powder
    event.recipes.tfc.quern('4x tfc:powder/garnierite', '#forge:raw_materials/nickel')
        .id('tfc:quern/normal_nickel')

    // 1x Sphalerite Powder
    event.recipes.tfc.quern('1x tfc:powder/sphalerite', 'tfc:ore/small_sphalerite')
        .id('tfc:quern/small_sphalerite')

    // 4x Sphalerite Powder
    event.recipes.tfc.quern('4x tfc:powder/sphalerite', '#forge:raw_materials/sphalerite')
        .id('tfc:quern/normal_sphalerite')

    // 1x Magnetite Powder
    event.recipes.tfc.quern('1x tfc:powder/magnetite', 'tfc:ore/small_magnetite')
        .id('tfc:quern/small_magnetite')

    // 4x Magnetite Powder
    event.recipes.tfc.quern('4x tfc:powder/magnetite', '#forge:raw_materials/magnetite')
        .id('tfc:quern/normal_magnetite')

    // 1x Tetrahedrite Powder
    event.recipes.tfc.quern('1x tfc:powder/tetrahedrite', 'tfc:ore/small_tetrahedrite')
        .id('tfc:quern/small_tetrahedrite')

    // 4x Tetrahedrite Powder
    event.recipes.tfc.quern('4x tfc:powder/tetrahedrite', '#forge:raw_materials/tetrahedrite')
        .id('tfc:quern/normal_tetrahedrite')

    // 1x Malachite Powder
    event.recipes.tfc.quern('1x tfc:powder/malachite', 'tfc:ore/small_malachite')
        .id('tfc:quern/small_malachite')

    // 4x Malachite Powder
    event.recipes.tfc.quern('4x tfc:powder/malachite', '#forge:raw_materials/malachite')
        .id('tfc:quern/normal_malachite')

    // 1x Malachite Powder
    event.recipes.tfc.quern('1x tfc:powder/limonite', 'tfc:ore/small_limonite')
        .id('tfc:quern/small_limonite')

    // 4x Limonite Powder
    event.recipes.tfc.quern('4x tfc:powder/limonite', '#forge:raw_materials/yellow_limonite')
        .id('tfc:quern/normal_limonite')

    // 1x Hematite Powder
    event.recipes.tfc.quern('1x tfc:powder/hematite', 'tfc:ore/small_hematite')
        .id('tfc:quern/small_hematite')

    // 4x Hematite Powder
    event.recipes.tfc.quern('4x tfc:powder/hematite', '#forge:raw_materials/hematite')
        .id('tfc:quern/normal_hematite')
    
    // 1x Copper Powder
    event.recipes.tfc.quern('1x tfc:powder/native_copper', 'tfc:ore/small_native_copper')
        .id('tfc:quern/small_native_copper')

    // 4x Copper Powder
    event.recipes.tfc.quern('4x tfc:powder/native_copper', '#forge:raw_materials/copper')
        .id('tfc:quern/normal_native_copper')

    // 4x Cinnabar Powder
    event.recipes.tfc.quern('4x minecraft:redstone', '#forge:raw_materials/cinnabar')
        .id('tfc:quern/normal_cinnabar')

    // 4x Sulfur Powder
    event.recipes.tfc.quern('4x tfc:powder/sulfur', '#forge:raw_materials/sulfur')
        .id('tfc:quern/normal_sulfur')

    // 4x Saltpeter Powder
    event.recipes.tfc.quern('4x tfc:powder/saltpeter', '#forge:raw_materials/saltpeter')
        .id('tfc:quern/normal_saltpeter')

    // 4x Salt Powder
    event.recipes.tfc.quern('4x tfc:powder/salt', '#forge:raw_materials/salt')
        .id('tfc:quern/normal_salt')

    // 4x Graphite Powder
    event.recipes.tfc.quern('4x tfc:powder/graphite', '#forge:raw_materials/graphite')
        .id('tfc:quern/normal_graphite_2')

    // 4x Borax Powder
    event.recipes.tfc.quern('4x tfc:powder/flux', '#forge:raw_materials/borax')
        .id('tfc:quern/normal_borax')

    //#endregion

    // Доменная печь
    event.shaped('tfc:blast_furnace', [
        'AAA', 
        'ABA',
        'AAA'  
    ], {
        A: '#forge:plates/wrought_iron',
        B: 'tfc:crucible'
    }).id('tfc:crafting/blast_furnace')

    // Тыква -> Кусочки тыквы
    event.recipes.tfc.damage_inputs_shaped_crafting(event.recipes.minecraft.crafting_shaped('5x tfc:food/pumpkin_chunks', [
        'AB'
    ], {
        A: '#tfc:knives',
        B: 'tfc:pumpkin'
    }))

    // Декрафт деревянной херни в деревянную пыль
    Object.entries(global.TFC_WOOD_ITEM_TYPES_TO_WOOD_DUST).forEach(pair => {
        
        let typeName = pair[1].name
        let typeOutput = pair[1].output
        
        event.recipes.gtceu.macerator(`tfg/macerate_${typeName}`)             
            .itemInputs(pair[0])
            .itemOutputs(typeOutput)
            .duration(600)
            .EUt(2)
    })

    // LimeWater + Sand -> Mortar
    event.recipes.gtceu.centrifuge('mortar')             
        .itemInputs('#forge:sand')
        .inputFluids(Fluid.of('tfc:limewater', 100))
        .itemOutputs('16x tfc:mortar')
        .duration(800)
        .EUt(8)

    // Barley Grain -> Barley Floor
    event.recipes.gtceu.macerator('barley_flour')             
        .itemInputs('tfc:food/barley_grain')
        .itemOutputs('2x tfc:food/barley_flour')
        .duration(400)
        .EUt(16)

    // Maize Grain -> Maize Floor
    event.recipes.gtceu.macerator('maize_flour')             
        .itemInputs('tfc:food/maize_grain')
        .itemOutputs('2x tfc:food/maize_flour')
        .duration(400)
        .EUt(16)

    // Oat Grain -> Oat Floor
    event.recipes.gtceu.macerator('oat_flour')             
        .itemInputs('tfc:food/oat_grain')
        .itemOutputs('2x tfc:food/oat_flour')
        .duration(400)
        .EUt(16)

    // Rye Grain -> Rye Floor
    event.recipes.gtceu.macerator('rye_flour')             
        .itemInputs('tfc:food/rye_grain')
        .itemOutputs('2x tfc:food/rye_flour')
        .duration(400)
        .EUt(16)

    // Rice Grain -> Rice Floor
    event.recipes.gtceu.macerator('rice_flour')             
        .itemInputs('tfc:food/rice_grain')
        .itemOutputs('2x tfc:food/rice_flour')
        .duration(400)
        .EUt(16)

    // Wheat Grain -> Wheat Floor
    event.recipes.gtceu.macerator('wheat_flour')             
        .itemInputs('tfc:food/wheat_grain')
        .itemOutputs('2x tfc:food/wheat_flour')
        .duration(400)
        .EUt(16)

    // Kapok Log -> Sticky Resin (Centriguge)
    event.recipes.gtceu.centrifuge('rubber_log_separation')             
        .itemInputs('#tfc:kapok_logs')
        .chancedOutput('gtceu:sticky_resin', 5000, 1200)
        .chancedOutput('gtceu:plant_ball', 3750, 900)
        .chancedOutput('gtceu:carbon_dust', 2500, 600)
        .chancedOutput('gtceu:wood_dust', 2500, 700)
        .outputFluids(Fluid.of('gtceu:methane', 60))
        .duration(200)
        .EUt(20)

    // Kapok Log -> Raw Rubber Dust
    event.recipes.gtceu.extractor('raw_rubber_from_log')             
        .itemInputs('#tfc:kapok_logs')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    // Kapok Sapling -> Raw Rubber Dust
    event.recipes.gtceu.extractor('raw_rubber_from_sapling')             
        .itemInputs('tfc:wood/sapling/kapok')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    // Kapok Leaves -> Raw Rubber Dust
    event.recipes.gtceu.extractor('raw_rubber_from_leaves')             
        .itemInputs('16x tfc:wood/leaves/kapok')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    // TFC Plants -> Plant Ball (Centrifuge)
    event.recipes.gtceu.centrifuge('grass_block_separation')             
        .itemInputs('#tfc:plants')
        .chancedOutput('gtceu:plant_ball', 3000, 1200)
        .chancedOutput('gtceu:clay_tiny_dust', 5000, 900)
        .duration(250)
        .EUt(30)

    // 8x Ванильная растительность -> Plant Ball (Compressor)
    event.remove({id: 'gtceu:compressor/plant_ball_from_wheat'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_warped_stem'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_crimson_stem'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_tube_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_sugar_cane'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_red_mushroom'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_potato'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_nether_wart'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_horn_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_fire_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_carrot'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_cactus'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_bubble_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_brown_mushroom'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_brain_coral'})
    event.remove({id: 'gtceu:compressor/plant_ball_from_beetroot'})

    event.recipes.gtceu.compressor('plant_ball_from_tfc_seeds')             
        .itemInputs('8x #tfc:seeds')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    event.recipes.gtceu.compressor('plant_ball_from_tfc_food')             
        .itemInputs('8x #tfc:foods')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    event.recipes.gtceu.compressor('plant_ball_from_tfc_plants')             
        .itemInputs('8x #tfc:plants')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    event.recipes.gtceu.compressor('plant_ball_from_tfc_corals')             
        .itemInputs('8x #tfc:corals')
        .itemOutputs('gtceu:plant_ball')
        .duration(300)
        .EUt(2)

    // Ванильная растительность -> Биомасса (Brewery)
    event.remove({id: 'gtceu:brewery/biomass_from_sugar_cane'})
    event.remove({id: 'gtceu:brewery/biomass_from_red_mushroom'})
    event.remove({id: 'gtceu:brewery/biomass_from_potato'})
    event.remove({id: 'gtceu:brewery/biomass_from_carrot'})
    event.remove({id: 'gtceu:brewery/biomass_from_cactus'})
    event.remove({id: 'gtceu:brewery/biomass_from_brown_mushroom'})
    event.remove({id: 'gtceu:brewery/biomass_from_beetroot'})

    event.recipes.gtceu.brewery('biomass_from_tfc_seeds')             
        .itemInputs('#tfc:seeds')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    event.recipes.gtceu.brewery('biomass_from_tfc_food')             
        .itemInputs('#tfc:foods')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    event.recipes.gtceu.brewery('biomass_from_tfc_plants')             
        .itemInputs('#tfc:plants')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    event.recipes.gtceu.brewery('biomass_from_tfc_corals')             
        .itemInputs('#tfc:corals')
        .outputFluids(Fluid.of('gtceu:biomass', 20))
        .duration(128)
        .EUt(3)

    

    //#region Фикс рецептов связанных с песком
    event.recipes.gtceu.electrolyzer('sand_electrolysis')             
        .itemInputs('8x #forge:sand')
        .itemOutputs('gtceu:silicon_dioxide_dust')
        .duration(500)
        .EUt(25)

    // Рецепты кварц. песка из песка
    event.shaped('gtceu:quartz_sand_dust', [
        'A', 
        'B'
    ], {
        A: '#forge:sand',
        B: '#forge:tools/mortars'
    }).id('gtceu:shaped/quartz_sand')

    event.recipes.gtceu.macerator('quartz_sand_from_sand')             
        .itemInputs('#forge:sand')
        .itemOutputs('gtceu:quartz_sand_dust')
        .duration(30)
        .EUt(2)



    // Удобрение в обычном миксере
    event.recipes.gtceu.mixer('fertilizer')             
        .itemInputs(
            '#tfc:dirt',
            '2x #forge:dusts/wood',
            '4x #forge:sand'
        )
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('4x gtceu:fertilizer')
        .duration(300)
        .EUt(30)

    // Удобрение в create миксере
    /*
    event.recipes.gtceu.create_mixer('fertilizer')             
        .itemInputs(
            '#tfc:dirt',
            '2x #forge:dusts/wood',
            '4x #forge:sand'
        )
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('4x gtceu:fertilizer')
        .duration(300)
        .EUt(30)
        .rpm(96)*/

    //#endregion

    //#region Рецепты ковки слитков в GT машинах

    // Сырая крица -> Укрепленная крица
    event.recipes.gtceu.forge_hammer('tfg/refined_bloom')             
        .itemInputs('tfc:raw_iron_bloom')
        .itemOutputs('tfc:refined_iron_bloom')
        .duration(1000)
        .EUt(4)

    // Укрепленная крица -> Слиток кованного железа
    event.recipes.gtceu.forge_hammer('tfg/wrought_iron_ingot')             
        .itemInputs('tfc:refined_iron_bloom')
        .itemOutputs('gtceu:wrought_iron_ingot')
        .duration(1000)
        .EUt(4)

    // Чугун -> Высокоуглеродная сталь
    event.recipes.gtceu.forge_hammer('tfg/high_carbon_steel')             
        .itemInputs('tfc:metal/ingot/pig_iron')
        .itemOutputs('tfc:metal/ingot/high_carbon_steel')
        .duration(1000)
        .EUt(4)

    // Высокоуглеродная сталь -> Cталь
    event.recipes.gtceu.forge_hammer('tfg/steel')             
        .itemInputs('tfc:metal/ingot/high_carbon_steel')
        .itemOutputs('gtceu:steel_ingot')
        .duration(1000)
        .EUt(4)

    // Высокоуглеродная черная сталь -> черная сталь 
    event.recipes.gtceu.forge_hammer('tfg/black_steel')             
        .itemInputs('tfc:metal/ingot/high_carbon_black_steel')
        .itemOutputs('gtceu:black_steel_ingot')
        .duration(1000)
        .EUt(4)

    // Высокоуглеродная синяя сталь -> синяя сталь 
    event.recipes.gtceu.forge_hammer('tfg/blue_steel')             
        .itemInputs('tfc:metal/ingot/high_carbon_blue_steel')
        .itemOutputs('gtceu:blue_steel_ingot')
        .duration(1000)
        .EUt(4)

    // Высокоуглеродная красная сталь -> красная сталь 
    event.recipes.gtceu.forge_hammer('tfg/red_steel')             
        .itemInputs('tfc:metal/ingot/high_carbon_red_steel')
        .itemOutputs('gtceu:red_steel_ingot')
        .duration(1000)
        .EUt(4)

    // Слабая сталь + Чугун -> Высокоуглеродная черная сталь
    event.recipes.gtceu.alloy_smelter('tfg/high_carbon_black_steel')             
        .itemInputs('tfc:metal/ingot/weak_steel', 'tfc:metal/ingot/pig_iron')
        .itemOutputs('tfc:metal/ingot/high_carbon_black_steel')
        .duration(1600)
        .EUt(4)

    // Слабая синяя сталь + Черная сталь -> Высокоуглеродная синяя сталь
    event.recipes.gtceu.alloy_smelter('tfg/high_carbon_blue_steel')             
        .itemInputs('tfc:metal/ingot/weak_blue_steel', 'gtceu:black_steel_ingot')
        .itemOutputs('tfc:metal/ingot/high_carbon_blue_steel')
        .duration(1600)
        .EUt(4)

    // Слабая красная сталь + Черная сталь -> Высокоуглеродная красная сталь
    event.recipes.gtceu.alloy_smelter('tfg/high_carbon_red_steel')             
        .itemInputs('tfc:metal/ingot/weak_red_steel', 'gtceu:black_steel_ingot')
        .itemOutputs('tfc:metal/ingot/high_carbon_red_steel')
        .duration(1600)
        .EUt(4)

    //#endregion

    //#region Раскрафт ТФК рыбы в масло

    event.remove({ id: 'gtceu:extractor/fish_oil_from_tropical_fish' })
    event.remove({ id: 'gtceu:extractor/fish_oil_from_salmon' })
    event.remove({ id: 'gtceu:extractor/fish_oil_from_pufferfish' })
    event.remove({ id: 'gtceu:extractor/fish_oil_from_cod' })

    event.recipes.gtceu.extractor(`tfg/fish_oil`)             
        .itemInputs('#minecraft:fishes')
        .outputFluids(Fluid.of('gtceu:fish_oil', 40))
        .duration(16)
        .EUt(4)

    //#endregion

    //#region Раскрафт ТФК семян

    event.remove({ id: 'gtceu:extractor/seed_oil_from_tag_seeds' })
    event.remove({ id: 'gtceu:extractor/seed_oil_from_pumpkin' })
    event.remove({ id: 'gtceu:extractor/seed_oil_from_melon' })
    event.remove({ id: 'gtceu:extractor/seed_oil_from_beetroot' })

    event.recipes.gtceu.extractor(`tfg/seed_oil`)             
        .itemInputs('#tfc:seeds')
        .outputFluids(Fluid.of('gtceu:seed_oil', 16))
        .duration(32)
        .EUt(2)

    //#endregion

    // Пережарка оголовий
    for (let i = 0; i < global.TFC_UNFIRED_MOLDS.length; i++) {
        event.smelting(global.TFC_FIRED_MOLDS[i], global.TFC_UNFIRED_MOLDS[i])
            .id(`tfg:smelting/mold_${i}`)
    }

    //
}

