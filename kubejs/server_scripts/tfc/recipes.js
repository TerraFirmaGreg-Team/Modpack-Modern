// priority: 0

const registerTFCRecipes = (event) => {
    
    //#region Металлы
    
    Object.entries(global.METAL_TO_SPECS).forEach(keyValuePair => {
        
        let metal = keyValuePair[0]
        let metalSpecs = keyValuePair[1]

        if (metalSpecs.props.includes(global.INGOT_GEN)) {

            if (metalSpecs.input_fluid != undefined) {
                // Отливка слитка в обычной форме
                event.recipes.tfc.casting(Item.of(`#forge:ingots/${metal}`), 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(metalSpecs.input_fluid, 144), 0.1)
                    .id(`tfc:casting/${metal}_ingot`)

                // Отливка слитка в огнеупорной форме
                event.recipes.tfc.casting(Item.of(`#forge:ingots/${metal}`), 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(metalSpecs.input_fluid, 144), 0.01)
                    .id(`tfc:casting/${metal}_fire_ingot`)
            }
            
            // Декрафт слитка в жидкость
            event.recipes.tfc.heating(`#forge:ingots/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_ingot`)
        }

        if (metalSpecs.props.includes(global.DOUBLE_INGOT_GEN)) {
            // Декрафт двойного слитка в жидкость
            event.recipes.tfc.heating(`tfc:metal/double_ingot/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .id(`tfc:heating/metal/${metal}_double_ingot`)
        }

        if (metalSpecs.props.includes(global.PART_GEN)) {
            // Удаление рецептов блоков
            event.remove({ id: `tfc:crafting/metal/block/${metal}` })
            event.remove({ id: `tfc:heating/metal/${metal}_block` })

            // Удаление рецептов ступеней
            event.remove({ id: `tfc:crafting/metal/block/${metal}_stairs` })
            event.remove({ id: `tfc:heating/metal/${metal}_block_stairs` })

            // Удалание рецептов полублоков
            event.remove({ id: `tfc:crafting/metal/block/${metal}_slab` })
            event.remove({ id: `tfc:heating/metal/${metal}_block_slab` })

            // Декрафт блока в жидкость
            event.recipes.tfc.heating(`#forge:storage_blocks/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 1296))
                .id(`tfc:heating/metal/${metal}_block`)

            // Декрафт стержня в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_rod`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 72))
                .id(`tfc:heating/metal/${metal}_rod`)

            // Двойной слиток -> Пластина
            event.recipes.tfc.anvil(`gtceu:${metal}_plate`, `tfc:metal/double_ingot/${metal}`, ['hit_last', 'hit_second_last', 'hit_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_sheet`)

            // Декрафт пластины в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_plate`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
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
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .id(`tfc:heating/metal/${metal}_double_sheet`)
        }

        if (metalSpecs.props.includes(global.ARMOR_GEN)) {
            //#region Шлем

            // Декрафт незавершенного шлема в жидкость
            event.recipes.tfc.heating(`tfc:metal/unfinished_helmet/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .id(`tfc:heating/metal/${metal}_unfinished_helmet`)

            // Незавершенный шлем
            event.recipes.tfc.anvil(`tfc:metal/unfinished_helmet/${metal}`, `gtceu:${metal}_double_plate`, ['hit_last', 'bend_second_last', 'bend_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_unfinished_helmet`)

            // Декрафт шлема в жидкость
            event.recipes.tfc.heating(`tfc:metal/helmet/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 432))
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
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .id(`tfc:heating/metal/${metal}_unfinished_chestplate`)

            // Незавершенный нагрудник
            event.recipes.tfc.anvil(`tfc:metal/unfinished_chestplate/${metal}`, `gtceu:${metal}_double_plate`, ['hit_last', 'hit_second_last', 'upset_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_unfinished_chestplate`)

            // Декрафт нагрудника в жидкость
            event.recipes.tfc.heating(`tfc:metal/chestplate/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 576))
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
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .id(`tfc:heating/metal/${metal}_unfinished_greaves`)

            // Незавершенные поножи
            event.recipes.tfc.anvil(`tfc:metal/unfinished_greaves/${metal}`, `gtceu:${metal}_double_plate`, ['bend_any', 'draw_any', 'hit_any'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_unfinished_greaves`)

            // Декрафт поножей в жидкость
            event.recipes.tfc.heating(`tfc:metal/greaves/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 432))
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
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_unfinished_boots`)

            // Незавершенные ботинки
            event.recipes.tfc.anvil(`tfc:metal/unfinished_boots/${metal}`, `gtceu:${metal}_plate`, ['bend_last', 'bend_second_last', 'shrink_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_unfinished_boots`)

            // Декрафт ботинок в жидкость
            event.recipes.tfc.heating(`tfc:metal/boots/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_boots`)

            // Ботинки
            event.recipes.tfc.welding(`tfc:metal/boots/${metal}`, `tfc:metal/unfinished_boots/${metal}`, `gtceu:${metal}_plate`)
                .tier(metalSpecs.tier)
                .id(`tfc:welding/${metal}_boots`)

            //#endregion
        }

        if (metalSpecs.props.includes(global.TOOL_GEN)) {
            
            // Кольцо -> Металл
            // event.recipes.tfc.heating(`gtceu:${metal}_ring`, metalSpecs.melt_temp)
            //     .resultFluid(Fluid.of(metalSpecs.output_fluid, 72))
            //     .id(`tfc:heating/metal/${metal}_ring`)

            // Стержень -> Кольцо
            // Возможно, когда нибудь, когда они пригодятся

            // Болт -> Металл
            event.recipes.tfc.heating(`gtceu:${metal}_bolt`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 36))
                .id(`tfc:heating/metal/${metal}_bolt`)

            event.recipes.tfc.anvil(`2x gtceu:${metal}_bolt`, `#forge:rods/${metal}`, ['punch_last', 'draw_second_last', 'draw_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_bolt`)

            // Стержень -> Болт

            // Винт -> Металл
            event.recipes.tfc.heating(`gtceu:${metal}_screw`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 72))
                .id(`tfc:heating/metal/${metal}_screw`)


            // Стержень -> Винт
            event.recipes.tfc.anvil(`gtceu:${metal}_screw`, `#forge:rods/${metal}`, ['punch_last', 'punch_second_last', 'shrink_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_screw`)

            //#region Фурма
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/tuyere/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
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
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_fish_hook`)

            // Крюк удочки
            event.recipes.tfc.anvil(`tfc:metal/fish_hook/${metal}`, `gtceu:${metal}_plate`, ['draw_not_last', 'bend_any', 'hit_any'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_fish_hook`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/fishing_rod/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_fishing_rod`)

            //#endregion
            
            //#region Кирка
            
            // Крафт инструмента
            event.remove({ id: `tfc:crafting/metal/pickaxe/${metal}` })

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_pickaxe`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_pickaxe`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_pickaxe_head`, `#forge:ingots/${metal}`, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_pickaxe_head`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`gtceu:${metal}_pickaxe_head`, 'tfc:ceramic/pickaxe_head_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_pickaxe_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_pickaxe_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_pickaxe_head`)

            //#endregion

            //#region Проспектор
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/propick/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_propick`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`tfc:metal/propick_head/${metal}`, 'tfc:ceramic/propick_head_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_propick_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`tfc:metal/propick_head/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_propick_head`)

            //#endregion

            //#region Топор
            
            // Крафт инструмента
            event.remove({ id: `tfc:crafting/metal/axe/${metal}` })

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_axe`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_axe`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_axe_head`, `#forge:ingots/${metal}`, ['punch_last', 'hit_second_last', 'upset_third_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_axe_head`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`gtceu:${metal}_axe_head`, 'tfc:ceramic/axe_head_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_axe_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_axe_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_axe_head`)

            //#endregion

            //#region Лопата
            
            // Крафт инструмента
            event.remove({ id: `tfc:crafting/metal/shovel/${metal}` })

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_shovel`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_shovel`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_shovel_head`, `#forge:ingots/${metal}`, ['punch_last', 'hit_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_shovel_head`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`gtceu:${metal}_shovel_head`, 'tfc:ceramic/shovel_head_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_shovel_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_shovel_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_shovel_head`)

            //#endregion

            //#region Мотыга
            
            // Крафт инструмента
            event.remove({ id: `tfc:crafting/metal/hoe/${metal}` })

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_hoe`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_hoe`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_hoe_head`, `#forge:ingots/${metal}`, ['punch_last', 'hit_not_last', 'bend_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_hoe_head`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`gtceu:${metal}_hoe_head`, 'tfc:ceramic/hoe_head_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_hoe_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_hoe_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_hoe_head`)

            //#endregion

            //#region Стамеска
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/chisel/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_chisel`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`tfc:metal/chisel_head/${metal}`, 'tfc:ceramic/chisel_head_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_chisel_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`tfc:metal/chisel_head/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_chisel_head`)

            //#endregion

            //#region Молот
            
            // Крафт инструмента
            event.remove({ id: `tfc:crafting/metal/hammer/${metal}` })

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_hammer`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_hammer`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_hammer_head`, `#forge:ingots/${metal}`, ['punch_last', 'shrink_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_hammer_head`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`gtceu:${metal}_hammer_head`, 'tfc:ceramic/hammer_head_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_hammer_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_hammer_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_hammer_head`)

            //#endregion

            //#region Пила
            
            // Крафт инструмента
            event.remove({ id: `tfc:crafting/metal/saw/${metal}` })

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_saw`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_saw`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_saw_head`, `#forge:ingots/${metal}`, ['hit_last', 'hit_second_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_saw_blade`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`gtceu:${metal}_saw_head`, 'tfc:ceramic/saw_blade_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_saw_blade`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_saw_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_saw_blade`)

            //#endregion

            //#region Копье
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/javelin/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_javelin`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`tfc:metal/javelin_head/${metal}`, 'tfc:ceramic/javelin_head_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_javelin_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`tfc:metal/javelin_head/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_javelin_head`)

            //#endregion

            //#region Меч
            
            // Крафт инструмента
            event.remove({ id: `tfc:crafting/metal/sword/${metal}` })

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_sword`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_sword`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_sword_head`, `#forge:double_ingots/${metal}`, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_sword_blade`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`gtceu:${metal}_sword_head`, 'tfc:ceramic/sword_blade_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 288), 1)
                    .id(`tfc:casting/${metal}_sword_blade`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_sword_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .id(`tfc:heating/metal/${metal}_sword_blade`)

            //#endregion

            //#region Дубина
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/mace/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_mace`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`tfc:metal/mace_head/${metal}`, 'tfc:ceramic/mace_head_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 288), 1)
                    .id(`tfc:casting/${metal}_mace_head`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`tfc:metal/mace_head/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .id(`tfc:heating/metal/${metal}_mace_head`)

            //#endregion
        
            //#region Нож
            
            // Крафт инструмента
            event.remove({ id: `tfc:crafting/metal/knife/${metal}` })

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_knife`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_knife`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_knife_head`, `#forge:ingots/${metal}`, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_knife_blade`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`gtceu:${metal}_knife_head`, 'tfc:ceramic/knife_blade_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_knife_blade`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_knife_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_knife_blade`)

            //#endregion

            //#region Коса
            
            // Крафт инструмента
            event.remove({ id: `tfc:crafting/metal/scythe/${metal}` })

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_scythe`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_scythe`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_scythe_head`, `#forge:ingots/${metal}`, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_scythe_blade`)

            // Металл + Форма -> Оголовье
            if (metalSpecs.props.includes(global.CAN_BE_UNMOLDED)) {
                event.recipes.tfc.casting(`gtceu:${metal}_scythe_head`, 'tfc:ceramic/scythe_blade_mold', TFC.fluidStackIngredient(metalSpecs.output_fluid, 144), 1)
                    .id(`tfc:casting/${metal}_scythe_blade`)
            }

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_scythe_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_scythe_blade`)

            //#endregion

            //#region Ножницы 

            // Сварка оголовий
            event.recipes.tfc.welding(`tfc:metal/shears/${metal}`, `gtceu:${metal}_knife_head`, `gtceu:${metal}_knife_head`, metalSpecs.tier)
                .id(`tfc:welding/${metal}_shears`)

            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`tfc:metal/shears/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_shears`)

            //#endregion

            //#region Щит

            // Декрафт щита в жидкость
            event.recipes.tfc.heating(`tfc:metal/shield/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 288))
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
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 864))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_horse_armor`)
            
            //#endregion

            //#region Мясницкий нож
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_butchery_knife`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_butchery_knife`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_knife_butchery_head`, `#forge:ingots/${metal}`, ['punch_last', 'bend_not_last', 'bend_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_knife_butchery_head`)

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_knife_butchery_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_knife_butchery_head`)

            //#endregion

            //#region Напильник
            
            // Декрафт инструмента в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_file`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${metal}_file`)

            // Крафт оголовья
            event.recipes.tfc.anvil(`gtceu:${metal}_file_head`, `#forge:ingots/${metal}`, ['upset_last', 'bend_not_last', 'punch_not_last'])
                .tier(metalSpecs.tier)
                .bonus(true)
                .id(`tfc:anvil/${metal}_file_head`)

            // Декрафт оголовья в жидкость
            event.recipes.tfc.heating(`gtceu:${metal}_file_head`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_file_head`)

            //#endregion

        }

        if (metalSpecs.props.includes(global.UTILITY_GEN)) {
            // Декрафт незавершенной лампы в жидкость
            event.recipes.tfc.heating(`tfc:metal/unfinished_lamp/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_unfinished_lamp`)

            // Декрафт лампы в жидкость
            event.recipes.tfc.heating(`tfc:metal/lamp/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_lamp`)

            // Декрафт люка в жидкость
            event.recipes.tfc.heating(`tfc:metal/trapdoor/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 144))
                .id(`tfc:heating/metal/${metal}_trapdoor`)

            // Люк
            event.recipes.tfc.anvil(`tfc:metal/trapdoor/${metal}`, `gtceu:${metal}_plate`, ['bend_last', 'draw_second_last', 'draw_third_last'])
                .tier(metalSpecs.tier)
                .id(`tfc:anvil/${metal}_trapdoor`)

            // Декрафт решетки в жидкость
            event.recipes.tfc.heating(`tfc:metal/bars/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 18))
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
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 9))
                .id(`tfc:heating/metal/${metal}_chain`)

            // Декрафт наковальни в жидкость
            event.recipes.tfc.heating(`tfc:metal/anvil/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 2016))
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
                .inputFluids(Fluid.of(metalSpecs.output_fluid, 2016))
                .notConsumable('gtceu:anvil_casting_mold')
                .itemOutputs(`tfc:metal/anvil/${metal}`)
                .duration(1680)
                .EUt(16)
        }

        if (metalSpecs.props.includes(global.TFC_SMALL_ORE_GEN)) {
            // Декрафт мелкого кусочка в жидкость
            event.recipes.tfc.heating(`tfc:ore/small_${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 16))
                .id(`tfc:heating/ore/small_${metal}`)

            event.remove({ id: `tfc:heating/ore/poor_${metal}` })
            event.remove({ id: `tfc:heating/ore/normal_${metal}` })
            event.remove({ id: `tfc:heating/ore/rich_${metal}` })
        }

        if (metalSpecs.props.includes(global.TFC_SMALL_NATIVE_ORE_GEN)) {
            // Декрафт мелкого кусочка в жидкость
            event.recipes.tfc.heating(`tfc:ore/small_native_${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, 16))
                .id(`tfc:heating/ore/small_native_${metal}`)

            event.remove({ id: `tfc:heating/ore/poor_native_${metal}` })
            event.remove({ id: `tfc:heating/ore/normal_native_${metal}` })
            event.remove({ id: `tfc:heating/ore/rich_native_${metal}` })
        }

        if (metalSpecs.props.includes(global.DUST_GEN)) {
            // Декрафт мелкой пыли
            event.recipes.tfc.heating(`gtceu:${metal}_tiny_dust`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, global.calcAmountOfMetal(16, metalSpecs.percent_of_material)))
                .id(`tfg:heating/tiny_dust/${metal}`)

            // Декрафт средней пыли
            event.recipes.tfc.heating(`gtceu:${metal}_small_dust`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, global.calcAmountOfMetal(36, metalSpecs.percent_of_material)))
                .id(`tfg:heating/small_dust/${metal}`)

            // Декрафт пыли
            event.recipes.tfc.heating(`gtceu:${metal}_dust`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, global.calcAmountOfMetal(144, metalSpecs.percent_of_material)))
                .id(`tfg:heating/dust/${metal}`)
        }

        if (metalSpecs.props.includes(global.NUGGET_GEN)) {
            // Декрафт мелкой пыли
            event.recipes.tfc.heating(`#forge:nuggets/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, global.calcAmountOfMetal(16, metalSpecs.percent_of_material)))
                .id(`tfg:heating/nugget/${metal}`)
        }

        if (metalSpecs.props.includes(global.ORE_CHUNKS_GEN)) {
            // Декрафт куска руды
            event.recipes.tfc.heating(`#forge:raw_materials/${metal}`, metalSpecs.melt_temp)
                .resultFluid(Fluid.of(metalSpecs.output_fluid, global.calcAmountOfMetal(36, metalSpecs.percent_of_material)))
                .id(`tfg:heating/raw/${metal}`)
        }

    })

    //#region Фиксы рецептов предметов из Cast Iron

    //#region Удаление
    
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

    //#region Добавление

    event.recipes.tfc.heating('#forge:nuggets/iron', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 16))
        .id(`tfg:heating/iron_nugget`)

    event.recipes.tfc.heating('#forge:tiny_dusts/iron', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 16))
        .id(`tfg:heating/iron_tiny_dust`)

    event.recipes.tfc.heating('#forge:small_dusts/iron', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 36))
        .id(`tfg:heating/iron_small_dust`)

    event.recipes.tfc.heating('#forge:dusts/iron', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 144))
        .id(`tfg:heating/iron_dust`)

    event.recipes.tfc.heating('#forge:raw_materials/iron', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 36))
        .id(`tfg:heating/raw_iron`)

    event.recipes.tfc.heating('#forge:ingots/iron', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 144))
        .id(`tfg:heating/iron_ingot`)

    event.recipes.tfc.heating('#forge:plates/iron', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 144))
        .id(`tfg:heating/iron_plate`)

    event.recipes.tfc.heating('#forge:storage_blocks/iron', 1535)
        .resultFluid(Fluid.of('tfc:metal/cast_iron', 1296))
        .id(`tfg:heating/iron_block`)

    //#endregion

    //#endregion

    //#region Фикс рецептов колоколов

    //#region Из золота

    event.recipes.tfc.casting(`minecraft:bell`, 'tfc:ceramic/bell_mold', TFC.fluidStackIngredient('gtceu:gold', 144), 1)
        .id(`tfc:casting/gold_bell`)

    event.recipes.tfc.heating(`minecraft:bell`, 1060)
        .resultFluid(Fluid.of('gtceu:gold', 144))
        .id(`tfc:heating/gold_bell`)

    //#endregion

    //#region Из латуни

    event.recipes.tfc.casting(`tfc:brass_bell`, 'tfc:ceramic/bell_mold', TFC.fluidStackIngredient('gtceu:brass', 144), 1)
        .id(`tfc:casting/brass_bell`)

    event.recipes.tfc.heating(`tfc:brass_bell`, 930)
        .resultFluid(Fluid.of('gtceu:brass', 144))
        .id(`tfc:heating/brass_bell`)
    
    //#endregion

    //#region Из бронзы

    event.recipes.tfc.casting(`tfc:bronze_bell`, 'tfc:ceramic/bell_mold', TFC.fluidStackIngredient('gtceu:bronze', 144), 1)
        .id(`tfc:casting/bronze_bell`)

    event.recipes.tfc.heating(`tfc:bronze_bell`, 930)
        .resultFluid(Fluid.of('gtceu:bronze', 144))
        .id(`tfc:heating/bronze_bell`)

    //#endregion

    //#region Рецепты ковки TFC слитков в GT машинах

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

    //#endregion

    //#region Фикс рецептов металлических предметов

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

    //#endregion

    //#region Земля

    // Loam + Silt -> Silty Loam (Миксер)
    event.recipes.gtceu.mixer('silty_loam_dirt')             
        .itemInputs('tfc:dirt/loam', 'tfc:dirt/silt')
        .itemOutputs('tfc:dirt/silty_loam')
        .duration(1600)
        .EUt(12)

    // Silty Loam + Sticks -> Rooted Silty Loam (Миксер)
    event.recipes.gtceu.mixer('rooted_silty_loam_dirt')             
        .itemInputs('tfc:dirt/silty_loam', '#tfc:can_be_lit_on_torch')
        .itemOutputs('tfc:rooted_dirt/silty_loam')
        .duration(1600)
        .EUt(12)

    // Loam + Sand -> Sandy Loam (Миксер)
    event.recipes.gtceu.mixer('sandy_loam_dirt')             
        .itemInputs('tfc:dirt/loam', '#forge:sand')
        .itemOutputs('tfc:dirt/sandy_loam')
        .duration(1600)
        .EUt(12)

    // Loam + Silt -> Silty Loam (Create Миксер)
    event.recipes.gtceu.create_mixer('silty_loam_dirt')             
        .itemInputs('tfc:dirt/loam', 'tfc:dirt/silt')
        .itemOutputs('tfc:dirt/silty_loam')
        .duration(1600)
        .EUt(12)
        .rpm(60)

    // Silty Loam + Sticks -> Rooted Silty Loam (Create Миксер)
    event.recipes.gtceu.create_mixer('rooted_silty_loam_dirt')             
        .itemInputs('tfc:dirt/silty_loam', '#tfc:can_be_lit_on_torch')
        .itemOutputs('tfc:rooted_dirt/silty_loam')
        .duration(1600)
        .EUt(12)
        .rpm(60)

    // Loam + Sand -> Sandy Loam (Create Миксер)
    event.recipes.gtceu.create_mixer('sandy_loam_dirt')             
        .itemInputs('tfc:dirt/loam', '#forge:sand')
        .itemOutputs('tfc:dirt/sandy_loam')
        .duration(1600)
        .EUt(12)
        .rpm(60)

    global.TFC_MUD_TYPES.forEach(mud => {
        event.smelting(`tfc:dirt/${mud}`, `tfc:mud/${mud}`)
            .id(`tfg:smelting/${mud}_mud_to_grass`)
    })

    //#endregion

    //#region Грязь

    global.TFC_MUD_TYPES.forEach(mud => {
        // Dirt -> Mud
        event.recipes.gtceu.mixer(`${mud}_grass_to_mud`)             
            .itemInputs(`tfc:dirt/${mud}`)
            .inputFluids(Fluid.of('minecraft:water', 100))
            .itemOutputs(`tfc:mud/${mud}`)
            .duration(200)
            .EUt(16)
    })

    //#endregion

    //#region Грязь кирпичи
    
    global.TFC_MUD_TYPES.forEach(mud => {
        
        // Влажный кирпич -> Кирпич
        event.smelting(`tfc:mud_brick/${mud}`, `tfc:drying_bricks/${mud}`)
            .id(`tfg:smelting/${mud}_drying_brick_to_brick`)

        event.custom({
            type: "firmalife:drying",
            ingredient: {
                item: `tfc:drying_bricks/${mud}`
            },
            result: {
                item: `tfc:mud_brick/${mud}`
            }
        }).id(`tfg:drying/${mud}_drying_brick_to_brick`)

        // Кирпич -> Блок кирпичей
        event.shaped(`tfc:mud_bricks/${mud}`, [
            'ABA',
            'BAB',
            'ABA'  
        ], {
            A: `tfc:mud_brick/${mud}`,
            B: '#tfc:mortar'
        }).id(`tfc:crafting/soil/${mud}_mud_bricks`)

        event.recipes.gtceu.assembler(`mud_bricks_${mud}`)             
            .itemInputs(`5x tfc:mud_brick/${mud}`)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`4x tfc:mud_bricks/${mud}`)
            .duration(50)
            .EUt(2)

        // Блок кирпичей -> Ступени
        event.remove({ id: `tfc:crafting/soil/${mud}_mud_bricks_stairs` })

        event.stonecutting(`tfc:mud_bricks/${mud}_stairs`, `tfc:mud_bricks/${mud}`)
            .id(`tfc:stonecutting/soil/${mud}_mud_bricks_stairs`)

        generateCutterRecipe(event, `tfc:mud_bricks/${mud}`, 0, `tfc:mud_bricks/${mud}_stairs`, 100, 8, `${mud}_mud_bricks_to_stairs`)

        // Блок кирпичей -> Плиты
        event.remove({ id: `tfc:crafting/soil/${mud}_mud_bricks_slab` })

        event.stonecutting(`2x tfc:mud_bricks/${mud}_slab`, `tfc:mud_bricks/${mud}`)
            .id(`tfc:stonecutting/soil/${mud}_mud_bricks_slab`)

        generateCutterRecipe(event, `tfc:mud_bricks/${mud}`, 1, `2x tfc:mud_bricks/${mud}_slab`, 100, 8, `${mud}_mud_bricks_to_slab`)

        // Блок кирпичей -> Стена
        event.remove({ id: `tfc:crafting/soil/${mud}_mud_bricks_wall` })

        event.stonecutting(`tfc:mud_bricks/${mud}_wall`, `tfc:mud_bricks/${mud}`)
            .id(`tfc:stonecutting/soil/${mud}_mud_bricks_wall`)

        generateCutterRecipe(event, `tfc:mud_bricks/${mud}`, 2, `tfc:mud_bricks/${mud}_wall`, 100, 8, `${mud}_mud_bricks_to_wall`)
        
    })

    //#endregion

    //#region Камень

    global.TFC_STONE_TYPES.forEach(stone => {
        //#region Сырой камень

        // Сырой камень -> Сырой камень
        event.recipes.gtceu.rock_breaker(`${stone}_raw`)             
            .notConsumable(`tfc:rock/raw/${stone}`)
            .itemOutputs(`tfc:rock/raw/${stone}`)
            .duration(16)
            .EUt(7)

        // Сырой камень -> Булыжник
        event.recipes.gtceu.forge_hammer(`${stone}_raw_to_cobble`)             
            .itemInputs(`tfc:rock/raw/${stone}`)
            .itemOutputs(`tfc:rock/cobble/${stone}`)
            .duration(10)
            .EUt(16)

        // Сырой камень -> Ступени
        event.remove({ id: `tfc:crafting/rock/${stone}_raw_stairs` })

        generateCutterRecipe(event, `tfc:rock/raw/${stone}`, 0, `tfc:rock/raw/${stone}_stairs`, 100, 8, `${stone}_raw_to_stairs`)

        // Сырой камень -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_raw_slab` })

        generateCutterRecipe(event, `tfc:rock/raw/${stone}`, 1, `2x tfc:rock/raw/${stone}_slab`, 100, 8, `${stone}_raw_to_slab`)

        // Сырой камень -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_raw_wall` })

        generateCutterRecipe(event, `tfc:rock/raw/${stone}`, 2, `tfc:rock/raw/${stone}_wall`, 100, 8, `${stone}_raw_to_wall`)

        // ? -> Сырая нажимная пластина
        event.shaped(`tfc:rock/pressure_plate/${stone}`, [
            'ABA',
            'CDC',
            'AEA'  
        ], {
            A: '#forge:screws/wrought_iron',
            B: '#tfc:hammers',
            C: `tfc:rock/raw/${stone}_slab`,
            D: '#forge:springs',
            E: '#forge:tools/screwdrivers'
        }).id(`tfc:crafting/rock/${stone}_pressure_plate`)

        event.recipes.gtceu.assembler(`${stone}_raw_pressure_plate`)             
            .itemInputs('#forge:springs', `2x tfc:rock/raw/${stone}_slab`)
            .circuit(0)
            .itemOutputs(`2x tfc:rock/pressure_plate/${stone}`)
            .duration(50)
            .EUt(2)

        // ? -> Сырая кнопка
        event.remove({ id: `tfc:crafting/rock/${stone}_button` })

        generateCutterRecipe(event, `tfc:rock/pressure_plate/${stone}`, 0, `6x tfc:rock/button/${stone}`, 50, 2, `${stone}_raw_button`)

        //#endregion

        //#region Булыжник

        // Булыжник -> Булыжник
        event.recipes.gtceu.rock_breaker(`${stone}_cobble`)             
            .notConsumable(`tfc:rock/cobble/${stone}`)
            .itemOutputs(`tfc:rock/cobble/${stone}`)
            .duration(16)
            .EUt(7)

        // Булыжник -> Гравий
        event.recipes.gtceu.forge_hammer(`${stone}_cobble_to_gravel`)             
            .itemInputs(`tfc:rock/cobble/${stone}`)
            .itemOutputs(`tfc:rock/gravel/${stone}`)
            .duration(10)
            .EUt(16)

        // Камни -> Булыжник
        event.shaped(`tfc:rock/cobble/${stone}`, [
            'ABA',
            'BAB',
            'ABA'  
        ], {
            A: `tfc:rock/loose/${stone}`,
            B: '#tfc:mortar'
        }).id(`tfc:crafting/rock/${stone}_loose_rocks_to_cobble`)

        event.recipes.gtceu.assembler(`${stone}_loose_rocks_to_cobble`)             
            .itemInputs(`4x tfc:rock/loose/${stone}`)
            .circuit(0)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`tfc:rock/cobble/${stone}`)
            .duration(50)
            .EUt(2)

        // Булыжник -> Ступени
        event.remove({ id: `tfc:crafting/rock/${stone}_cobble_stairs` })

        generateCutterRecipe(event, `tfc:rock/cobble/${stone}`, 0, `tfc:rock/cobble/${stone}_stairs`, 100, 8, `${stone}_cobble_to_stairs`)

        // Булыжник -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_cobble_slab` })

        generateCutterRecipe(event, `tfc:rock/cobble/${stone}`, 1, `2x tfc:rock/cobble/${stone}_slab`, 100, 8, `${stone}_cobble_to_slab`)

        // Булыжник -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_cobble_wall` })

        generateCutterRecipe(event, `tfc:rock/cobble/${stone}`, 2, `tfc:rock/cobble/${stone}_wall`, 100, 8, `${stone}_cobble_to_wall`)

        //#endregion

        //#region Гладкий

        // Сырой камень -> Гладкий
        event.recipes.gtceu.laser_engraver(`raw_${stone}_to_smooth`)             
            .itemInputs(`tfc:rock/raw/${stone}`)
            .notConsumable('gtceu:glass_lens')
            .itemOutputs(`tfc:rock/smooth/${stone}`)
            .duration(32)
            .EUt(100)

        // Укрепленный сырой камень -> Гладкий
        event.recipes.gtceu.laser_engraver(`hardened_${stone}_to_smooth`)             
            .itemInputs(`tfc:rock/hardened/${stone}`)
            .notConsumable('gtceu:glass_lens')
            .itemOutputs(`tfc:rock/smooth/${stone}`)
            .duration(32)
            .EUt(100)

        // Булыжник -> Ступени
        event.remove({ id: `tfc:crafting/rock/${stone}_smooth_stairs` })

        generateCutterRecipe(event, `tfc:rock/smooth/${stone}`, 0, `tfc:rock/smooth/${stone}_stairs`, 100, 8, `${stone}_smooth_to_stairs`)

        // Булыжник -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_smooth_slab` })

        generateCutterRecipe(event, `tfc:rock/smooth/${stone}`, 1, `2x tfc:rock/smooth/${stone}_slab`, 100, 8, `${stone}_smooth_to_slab`)

        // Булыжник -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_smooth_wall` })

        generateCutterRecipe(event, `tfc:rock/smooth/${stone}`, 2, `tfc:rock/smooth/${stone}_wall`, 100, 8, `${stone}_smooth_to_wall`)

        //#endregion
    
        //#region Кирпич

        // Кирпич -> Блок кирпичей
        event.recipes.gtceu.assembler(`bricks_${stone}`)             
            .itemInputs(`5x tfc:brick/${stone}`)
            .circuit(0)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`4x tfc:rock/bricks/${stone}`)
            .duration(50)
            .EUt(2)

        // Блок кирпичей -> Ступени
        event.remove({ id: `tfc:crafting/rock/${stone}_bricks_stairs` })

        generateCutterRecipe(event, `tfc:rock/bricks/${stone}`, 0, `tfc:rock/bricks/${stone}_stairs`, 100, 8, `${stone}_bricks_to_stairs`)

        // Блок кирпичей -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_bricks_slab` })

        generateCutterRecipe(event, `tfc:rock/bricks/${stone}`, 1, `2x tfc:rock/bricks/${stone}_slab`, 100, 8, `${stone}_bricks_to_slab`)

        // Блок кирпичей -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_bricks_wall` })

        generateCutterRecipe(event, `tfc:rock/bricks/${stone}`, 2, `tfc:rock/bricks/${stone}_wall`, 100, 8, `${stone}_bricks_to_wall`)

        //#endregion
    
        //#region Потрескавшийся кирпич
        
        // Кирпич -> Потрескавшийся кирпич
        event.recipes.gtceu.forge_hammer(`cracked_bricks_${stone}`)             
            .itemInputs(`tfc:rock/bricks/${stone}`)
            .itemOutputs(`tfc:rock/cracked_bricks/${stone}`)
            .duration(25)
            .EUt(8)

        // Потрескавшийся кирпич -> Ступени
        event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_stairs` })

        generateCutterRecipe(event, `tfc:rock/cracked_bricks/${stone}`, 0, `tfc:rock/cracked_bricks/${stone}_stairs`, 100, 8, `${stone}_cracked_bricks_to_stairs`)

        // Потрескавшийся кирпич -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_slab` })

        generateCutterRecipe(event, `tfc:rock/cracked_bricks/${stone}`, 1, `2x tfc:rock/cracked_bricks/${stone}_slab`, 100, 8, `${stone}_cracked_bricks_to_slab`)

        // Потрескавшийся кирпич -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_wall` })

        generateCutterRecipe(event, `tfc:rock/cracked_bricks/${stone}`, 2, `tfc:rock/cracked_bricks/${stone}_wall`, 100, 8, `${stone}_cracked_bricks_to_wall`)

        //#endregion

        //#region Замшелый булыжник

        // Булыжник -> Замшелый булыжник
        event.shaped(`tfc:rock/mossy_cobble/${stone}`, [
            'ABA',
            'BAB',
            'ABA'  
        ], {
            A: `tfc:rock/mossy_loose/${stone}`,
            B: '#tfc:mortar'
        }).id(`tfc:crafting/rock/${stone}_mossy_loose_rocks_to_cobble`)

        event.recipes.gtceu.assembler(`${stone}_mossy_loose_rocks_to_mossy_cobble`)             
            .itemInputs(`4x tfc:rock/mossy_loose/${stone}`)
            .circuit(0)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`tfc:rock/mossy_cobble/${stone}`)
            .duration(50)
            .EUt(2)

        event.recipes.gtceu.assembler(`${stone}_cobble_rocks_to_mossy_cobble`)             
            .itemInputs(`tfc:rock/cobble/${stone}`, '#tfc:compost_greens_low')
            .circuit(0)
            .inputFluids(Fluid.of('minecraft:water', 144))
            .itemOutputs(`tfc:rock/mossy_cobble/${stone}`)
            .duration(50)
            .EUt(2)

        // Замшелый булыжник -> Ступени
        event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_stairs` })

        generateCutterRecipe(event, `tfc:rock/mossy_cobble/${stone}`, 0, `tfc:rock/mossy_cobble/${stone}_stairs`, 100, 8, `${stone}_mossy_cobble_to_stairs`)

        //Замшелый булыжник -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_slab` })

        generateCutterRecipe(event, `tfc:rock/mossy_cobble/${stone}`, 1, `2x tfc:rock/mossy_cobble/${stone}_slab`, 100, 8, `${stone}_mossy_cobble_to_slab`)

        // Замшелый булыжник -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_wall` })

        generateCutterRecipe(event, `tfc:rock/mossy_cobble/${stone}`, 2, `tfc:rock/mossy_cobble/${stone}_wall`, 100, 8, `${stone}_mossy_cobble_to_wall`)

        //#endregion

        //#region Замшелый кирпич

        // Блок кирпичей -> Замшелый кирпич
        event.recipes.gtceu.assembler(`mossy_bricks_${stone}`)             
            .itemInputs(`tfc:rock/bricks/${stone}`, '#tfc:compost_greens_low')
            .circuit(0)
            .inputFluids(Fluid.of('minecraft:water', 144))
            .itemOutputs(`tfc:rock/mossy_bricks/${stone}`)
            .duration(50)
            .EUt(2)

        // Замшелый булыжник -> Ступени
        event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_stairs` })

        generateCutterRecipe(event, `tfc:rock/mossy_bricks/${stone}`, 0, `tfc:rock/mossy_bricks/${stone}_stairs`, 100, 8, `${stone}_mossy_bricks_to_stairs`)

        //Замшелый булыжник -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_slab` })

        generateCutterRecipe(event, `tfc:rock/mossy_bricks/${stone}`, 1, `2x tfc:rock/mossy_bricks/${stone}_slab`, 100, 8, `${stone}_mossy_bricks_to_slab`)

        // Замшелый булыжник -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_wall` })

        generateCutterRecipe(event, `tfc:rock/mossy_bricks/${stone}`, 2, `tfc:rock/mossy_bricks/${stone}_wall`, 100, 8, `${stone}_mossy_bricks_to_wall`)

        //#endregion
    
        //#region Укрепленный камень

        event.recipes.gtceu.assembler(`hardened_${stone}`)             
            .itemInputs(`5x tfc:rock/raw/${stone}`)
            .circuit(0)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`2x tfc:rock/hardened/${stone}`)
            .duration(250)
            .EUt(8)

        //#endregion

        //#region Акведук

        event.recipes.gtceu.assembler(`aqueduct_${stone}`)             
            .itemInputs(`3x tfc:brick/${stone}`)
            .circuit(1)
            .inputFluids(Fluid.of('gtceu:concrete', 16))
            .itemOutputs(`tfc:rock/aqueduct/${stone}`)
            .duration(50)
            .EUt(2)

        //#endregion
    
        //#region Резной кирпич

        // Блок кирпичей -> Резной кирпич
        event.recipes.gtceu.laser_engraver(`chiseled_${stone}`)             
            .itemInputs(`tfc:rock/bricks/${stone}`)
            .notConsumable('gtceu:glass_lens')
            .itemOutputs(`tfc:rock/chiseled/${stone}`)
            .duration(32)
            .EUt(100)

        //#endregion
    
        //#region Декрафт блоков камня в пыль

        //#region Целый блок
        
        // Сырой
        event.recipes.gtceu.macerator(`raw_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Булыжник
        event.recipes.gtceu.macerator(`cobble_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Гладкий
        event.recipes.gtceu.macerator(`smooth_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Кирпичи
        event.recipes.gtceu.macerator(`bricks_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        event.recipes.gtceu.macerator(`cracked_bricks_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        event.recipes.gtceu.macerator(`mossy_cobble_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        event.recipes.gtceu.macerator(`mossy_bricks_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        //#endregion
        
        //#region Ступень
        
        // Сырой
        event.recipes.gtceu.macerator(`raw_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}_stairs`)
            .itemOutputs(`6x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Булыжник
        event.recipes.gtceu.macerator(`cobble_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}_stairs`)
            .itemOutputs(`6x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Гладкий
        event.recipes.gtceu.macerator(`smooth_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}_stairs`)
            .itemOutputs(`6x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Кирпичи
        event.recipes.gtceu.macerator(`bricks_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}_stairs`)
            .itemOutputs(`6x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        event.recipes.gtceu.macerator(`cracked_bricks_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}_stairs`)
            .itemOutputs(`6x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        event.recipes.gtceu.macerator(`mossy_cobble_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}_stairs`)
            .itemOutputs(`6x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        event.recipes.gtceu.macerator(`mossy_bricks_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}_stairs`)
            .itemOutputs(`6x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        //#endregion

        //#region Плита

        // Сырой
        event.recipes.gtceu.macerator(`raw_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}_slab`)
            .itemOutputs(`2x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Булыжник
        event.recipes.gtceu.macerator(`cobble_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}_slab`)
            .itemOutputs(`2x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Гладкий
        event.recipes.gtceu.macerator(`smooth_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}_slab`)
            .itemOutputs(`2x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Кирпичи
        event.recipes.gtceu.macerator(`bricks_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}_slab`)
            .itemOutputs(`2x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        event.recipes.gtceu.macerator(`cracked_bricks_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}_slab`)
            .itemOutputs(`2x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        event.recipes.gtceu.macerator(`mossy_cobble_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}_slab`)
            .itemOutputs(`2x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        event.recipes.gtceu.macerator(`mossy_bricks_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}_slab`)
            .itemOutputs(`2x gtceu:${stone}_small_dust`)
            .duration(4)
            .EUt(75)

        //#endregion
        
        //#region Стена

        // Сырой
        event.recipes.gtceu.macerator(`raw_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}_wall`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Булыжник
        event.recipes.gtceu.macerator(`cobble_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}_wall`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Гладкий
        event.recipes.gtceu.macerator(`smooth_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}_wall`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Кирпичи
        event.recipes.gtceu.macerator(`bricks_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}_wall`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        event.recipes.gtceu.macerator(`cracked_bricks_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}_wall`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        event.recipes.gtceu.macerator(`mossy_cobble_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}_wall`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        event.recipes.gtceu.macerator(`mossy_bricks_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}_wall`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        //#endregion

        // Резной кирпич
        event.recipes.gtceu.macerator(`chiseled_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/chiseled/${stone}`)
            .itemOutputs(`gtceu:${stone}_dust`)
            .duration(4)
            .EUt(75)

        // Укрепленный
        event.recipes.gtceu.macerator(`hardened_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/hardened/${stone}`)
            .itemOutputs(`2x gtceu:${stone}_dust`)
            .duration(8)
            .EUt(150)

        //#endregion
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

    // Рецепты где нужно итерироваться по всем цветам
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
        
        // Песок -> Песчанник
        event.recipes.gtceu.compressor(`sand_${sandColor}_to_sandstone`)             
            .itemInputs(`4x tfc:sand/${sandColor}`)
            .itemOutputs(`tfc:raw_sandstone/${sandColor}`)
            .duration(800)
            .EUt(2)

        // Песчанник -> Гладкий песчанник
        event.stonecutting(`tfc:smooth_sandstone/${sandColor}`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/raw_sandstone_${sandColor}_to_smooth_sandstone`)

        generateCutterRecipe(event, `tfc:raw_sandstone/${sandColor}`, 3, `tfc:smooth_sandstone/${sandColor}`, 100, 8, `raw_sandstone_${sandColor}_to_smooth_sandstone`)

        // Песчанник -> Обрезанный песчанник
        event.stonecutting(`tfc:cut_sandstone/${sandColor}`, `tfc:raw_sandstone/${sandColor}`)
            .id(`raw_sandstone_${sandColor}_to_cut_sandstone`)

        generateCutterRecipe(event, `tfc:raw_sandstone/${sandColor}`, 4, `tfc:cut_sandstone/${sandColor}`, 100, 8, `cut_sandstone_${sandColor}_to_smooth_sandstone`)

        // Песчанник -> Ступень
        event.stonecutting(`tfc:raw_sandstone/${sandColor}_stairs`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_sandstone_to_stairs`)

        generateCutterRecipe(event, `tfc:raw_sandstone/${sandColor}`, 0, `tfc:raw_sandstone/${sandColor}_stairs`, 100, 8, `${sandColor}_sandstone_to_stairs`)

        // Песчанник -> Плита
        event.stonecutting(`2x tfc:raw_sandstone/${sandColor}_slab`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_sandstone_to_slabs`)

        generateCutterRecipe(event, `tfc:raw_sandstone/${sandColor}`, 1, `2x tfc:raw_sandstone/${sandColor}_slab`, 100, 8, `${sandColor}_sandstone_to_slab`)

        // Песчанник -> Стена
        event.stonecutting(`tfc:raw_sandstone/${sandColor}_stairs`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_sandstone_to_wall`)

        generateCutterRecipe(event, `tfc:raw_sandstone/${sandColor}`, 2, `tfc:raw_sandstone/${sandColor}_wall`, 100, 8, `${sandColor}_sandstone_to_wall`)

        // Гладкий песчанник -> Ступень
        event.stonecutting(`tfc:smooth_sandstone/${sandColor}_stairs`, `tfc:smooth_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_stairs`)

        generateCutterRecipe(event, `tfc:smooth_sandstone/${sandColor}`, 0, `tfc:smooth_sandstone/${sandColor}_stairs`, 100, 8, `${sandColor}_smooth_sandstone_to_stairs`)

        // Гладкий песчанник -> Плита
        event.stonecutting(`2x tfc:smooth_sandstone/${sandColor}_slab`, `tfc:smooth_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_slab`)

        generateCutterRecipe(event, `tfc:smooth_sandstone/${sandColor}`, 1, `2x tfc:smooth_sandstone/${sandColor}_slab`, 100, 8, `${sandColor}_smooth_sandstone_to_slab`)

        // Гладкий песчанник -> Стена
        event.stonecutting(`tfc:smooth_sandstone/${sandColor}_wall`, `tfc:smooth_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_wall`)

        generateCutterRecipe(event, `tfc:smooth_sandstone/${sandColor}`, 2, `tfc:smooth_sandstone/${sandColor}_wall`, 100, 8, `${sandColor}_smooth_sandstone_to_wall`)

        // Обрезанный песчанник -> Ступень
        event.stonecutting(`tfc:cut_sandstone/${sandColor}_stairs`, `tfc:cut_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_stairs`)

        generateCutterRecipe(event, `tfc:cut_sandstone/${sandColor}`, 0, `tfc:cut_sandstone/${sandColor}_stairs`, 100, 8, `${sandColor}_cut_sandstone_to_stairs`)

        // Обрезанный песчанник -> Плита
        event.stonecutting(`2x tfc:cut_sandstone/${sandColor}_slab`, `tfc:cut_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_slab`)

        generateCutterRecipe(event, `tfc:cut_sandstone/${sandColor}`, 1, `2x tfc:cut_sandstone/${sandColor}_slab`, 100, 8, `${sandColor}_cut_sandstone_to_slab`)

        // Обрезанный песчанник -> Стена
        event.stonecutting(`tfc:cut_sandstone/${sandColor}_wall`, `tfc:cut_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_wall`)

        generateCutterRecipe(event, `tfc:cut_sandstone/${sandColor}`, 2, `tfc:cut_sandstone/${sandColor}_wall`, 100, 8, `${sandColor}_cut_sandstone_to_wall`)
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

    global.TFC_WOOD_TYPES.forEach(wood => {
        event.remove({ id: `tfc:crafting/wood/${wood}_axle` })
        event.remove({ id: `tfc:crafting/wood/${wood}_bladed_axle` })
        event.remove({ id: `tfc:crafting/wood/${wood}_encased_axle` })
        event.remove({ id: `tfc:crafting/wood/${wood}_clutch` })
        event.remove({ id: `tfc:crafting/wood/${wood}_gear_box` })
        event.remove({ id: `tfc:crafting/wood/${wood}_water_wheel` })
    
        // Бревна -> Пиломатериалы
        generateCutterRecipe(event, `#tfc:${wood}_logs`, null, `16x tfc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_log`)

        // Доски -> Пиломатериалы
        generateCutterRecipe(event, `tfc:wood/planks/${wood}`, null, `4x tfc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_planks`)

        // Ступень -> Пиломатериалы
        generateCutterRecipe(event, `tfc:wood/planks/${wood}_stairs`, null, `3x tfc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_stairs`)
    

        // Плита -> Пиломатериалы
        generateCutterRecipe(event, `tfc:wood/planks/${wood}_slab`, null, `2x tfc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_slab`)

        // ? -> Деревянная нажимная пластина
        event.shaped(`tfc:wood/planks/${wood}_pressure_plate`, [
            'ABA',
            'CDC',
            'AEA'  
        ], {
            A: '#forge:screws/wood',
            B: '#tfc:hammers',
            C: `tfc:wood/planks/${wood}_slab`,
            D: '#forge:springs',
            E: '#forge:tools/screwdrivers'
        }).id(`tfc:crafting/wood/${wood}_pressure_plate`)

        event.recipes.gtceu.assembler(`${wood}_pressure_plate`)             
            .itemInputs('#forge:springs', `2x tfc:wood/planks/${wood}_slab`)
            .circuit(0)
            .itemOutputs(`2x tfc:wood/planks/${wood}_pressure_plate`)
            .duration(50)
            .EUt(2)

        // ? -> Деревянная кнопка
        event.remove({ id: `tfc:crafting/wood/${wood}_button` })

        generateCutterRecipe(event, `tfc:wood/planks/${wood}_pressure_plate`, null, `6x tfc:wood/planks/${wood}_button`, 50, 2, `${wood}_button`)
        
    })

    //#endregion

    //#region Рецепты порошков
    
    // Удаление рецептов
    event.remove({ id: 'tfc:quern/amethyst' })
    event.remove({ id: 'tfc:quern/amethyst_cut' })
    event.remove({ id: 'tfc:quern/blaze_rod' })
    event.remove({ id: 'tfc:quern/borax' })
    event.remove({ id: 'tfc:quern/charcoal' })
    event.remove({ id: 'tfc:quern/cinnabar' })
    event.remove({ id: 'tfc:quern/cryolite' })
    event.remove({ id: 'tfc:quern/diamond' })
    event.remove({ id: 'tfc:quern/diamond_cut' })
    event.remove({ id: 'tfc:quern/emerald' })
    event.remove({ id: 'tfc:quern/emerald_cut' })
    event.remove({ id: 'tfc:quern/graphite' })
    event.remove({ id: 'tfc:quern/lapis_lazuli' })
    event.remove({ id: 'tfc:quern/lapis_lazuli_cut' })
    event.remove({ id: 'tfc:quern/normal_bismuthinite' })
    event.remove({ id: 'tfc:quern/normal_cassiterite' })
    event.remove({ id: 'tfc:quern/normal_garnierite' })
    event.remove({ id: 'tfc:quern/normal_hematite' })
    event.remove({ id: 'tfc:quern/normal_limonite' })
    event.remove({ id: 'tfc:quern/normal_magnetite' })
    event.remove({ id: 'tfc:quern/normal_malachite' })
    event.remove({ id: 'tfc:quern/normal_native_copper' })
    event.remove({ id: 'tfc:quern/normal_native_gold' })
    event.remove({ id: 'tfc:quern/normal_native_silver' })
    event.remove({ id: 'tfc:quern/normal_sphalerite' })
    event.remove({ id: 'tfc:quern/normal_tetrahedrite' })
    event.remove({ id: 'tfc:quern/opal' })
    event.remove({ id: 'tfc:quern/opal_cut' })
    event.remove({ id: 'tfc:quern/poor_bismuthinite' })
    event.remove({ id: 'tfc:quern/poor_cassiterite' })
    event.remove({ id: 'tfc:quern/poor_garnierite' })
    event.remove({ id: 'tfc:quern/poor_hematite' })
    event.remove({ id: 'tfc:quern/poor_limonite' })
    event.remove({ id: 'tfc:quern/poor_magnetite' })
    event.remove({ id: 'tfc:quern/poor_malachite' })
    event.remove({ id: 'tfc:quern/poor_native_copper' })
    event.remove({ id: 'tfc:quern/poor_native_gold' })
    event.remove({ id: 'tfc:quern/poor_native_silver' })
    event.remove({ id: 'tfc:quern/poor_sphalerite' })
    event.remove({ id: 'tfc:quern/poor_tetrahedrite' })
    event.remove({ id: 'tfc:quern/pyrite' })
    event.remove({ id: 'tfc:quern/pyrite_cut' })
    event.remove({ id: 'tfc:quern/raw_limestone' })
    event.remove({ id: 'tfc:quern/rich_bismuthinite' })
    event.remove({ id: 'tfc:quern/rich_cassiterite' })
    event.remove({ id: 'tfc:quern/rich_garnierite' })
    event.remove({ id: 'tfc:quern/rich_hematite' })
    event.remove({ id: 'tfc:quern/rich_limonite' })
    event.remove({ id: 'tfc:quern/rich_magnetite' })
    event.remove({ id: 'tfc:quern/rich_malachite' })
    event.remove({ id: 'tfc:quern/rich_native_copper' })
    event.remove({ id: 'tfc:quern/rich_native_gold' })
    event.remove({ id: 'tfc:quern/rich_native_silver' })
    event.remove({ id: 'tfc:quern/rich_sphalerite' })
    event.remove({ id: 'tfc:quern/rich_tetrahedrite' })
    event.remove({ id: 'tfc:quern/ruby' })
    event.remove({ id: 'tfc:quern/ruby_cut' })
    event.remove({ id: 'tfc:quern/salt' })
    event.remove({ id: 'tfc:quern/saltpeter' })
    event.remove({ id: 'tfc:quern/sapphire' })
    event.remove({ id: 'tfc:quern/sapphire_cut' })
    event.remove({ id: 'tfc:quern/sulfur' })
    event.remove({ id: 'tfc:quern/sylvite' })
    event.remove({ id: 'tfc:quern/topaz' })
    event.remove({ id: 'tfc:quern/topaz_cut' })

    // Добавление рецептов
    global.TFC_QUERN_POWDER_RECIPE_COMPONENTS.forEach(element => {
        event.recipes.gtceu.macerator(`tfg:${element.name}`)             
            .itemInputs(element.input)
            .itemOutputs(element.output)
            .duration(60)
            .EUt(2)

        event.recipes.tfc.quern(element.output, element.input)
            .id(`tfg:quern/${element.name}`)

        event.recipes.createMilling(element.output, element.input)
            .id(`tfg:milling/${element.name}`)
    })

    //#endregion

    //#region Рецепты муки

    global.TFC_QUERN_FLOUR_RECIPE_COMPONENTS.forEach(element => {
        event.recipes.gtceu.macerator(`tfg:${element.name}`)             
            .itemInputs(element.input)
            .itemOutputs(element.output)
            .duration(200)
            .EUt(16)

        event.recipes.createMilling(element.output, element.input)
            .id(`tfg:milling/${element.name}`)
    })

    //#endregion

    //#region Рецепты обжарки мяса

    global.TFC_FURNACE_MEAT_RECIPE_COMPONENTS.forEach(element => {
        event.smelting(element.output, element.input)
            .id(`tfg:smelting/${element.name}`)
    })

    //#endregion

    //#region Рецепты обжарки форм
    
    global.TFC_FURNACE_MOLD_RECIPE_COMPONENTS.forEach(element => {
        event.smelting(element.output, element.input)
            .id(`tfg:smelting/${element.name}`)
    })

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.smelting(`tfc:ceramic/${dye}_glazed_vessel`, `tfc:ceramic/${dye}_unfired_vessel`)
            .id(`tfg:smelting/${dye}_glazed_vessel`)

        event.smelting(`tfc:ceramic/large_vessel/${dye}`, `tfc:ceramic/unfired_large_vessel/${dye}`)
            .id(`tfg:smelting/${dye}_large_vessel`)
    })

    //#endregion

    //#region Покраска малых и больших сосудов

    //#region Обычный сосуд
    
    event.recipes.gtceu.chemical_bath(`unfired_vessel_decolor`)             
        .itemInputs('#tfg:colorized_unfired_vessels')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 36))
        .itemOutputs('tfc:ceramic/unfired_vessel')
        .duration(300)
        .EUt(4)

    event.recipes.gtceu.chemical_bath(`fired_vessel_decolor`)             
        .itemInputs('#tfg:colorized_fired_vessels')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 36))
        .itemOutputs('tfc:ceramic/vessel')
        .duration(300)
        .EUt(4)

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.recipes.gtceu.chemical_bath(`${dye}_unfired_vessel`)             
            .itemInputs('tfc:ceramic/unfired_vessel')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 36))
            .itemOutputs(`tfc:ceramic/${dye}_unfired_vessel`)
            .duration(150)
            .EUt(4)

        event.recipes.gtceu.chemical_bath(`${dye}_vessel`)             
            .itemInputs('tfc:ceramic/vessel')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 36))
            .itemOutputs(`tfc:ceramic/${dye}_glazed_vessel`)
            .duration(150)
            .EUt(4)
    })

    //#endregion

    //#region Большой сосуд
    
    event.recipes.gtceu.chemical_bath(`unfired_large_vessel_decolor`)             
        .itemInputs('#tfg:colorized_unfired_large_vessels')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 72))
        .itemOutputs('tfc:ceramic/unfired_large_vessel')
        .duration(300)
        .EUt(4)

    event.recipes.gtceu.chemical_bath(`fired_large_vessel_decolor`)             
        .itemInputs('#tfg:colorized_large_vessels')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 72))
        .itemOutputs('tfc:ceramic/large_vessel')
        .duration(300)
        .EUt(4)

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.recipes.gtceu.chemical_bath(`${dye}_large_unfired_vessel`)             
            .itemInputs('tfc:ceramic/unfired_large_vessel')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 72))
            .itemOutputs(`tfc:ceramic/unfired_large_vessel/${dye}`)
            .duration(150)
            .EUt(4)

        event.recipes.gtceu.chemical_bath(`${dye}_large_vessel`)             
            .itemInputs('tfc:ceramic/large_vessel')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 72))
            .itemOutputs(`tfc:ceramic/large_vessel/${dye}`)
            .duration(150)
            .EUt(4)
    })

    //#endregion

    //#endregion

    //#region Удаление рецептов лопастей ветряной мельницы

    event.remove({ id: `tfc:crafting/windmill_blade` })
    event.remove({ id: `tfc:barrel/dye/bleach_windmill_blades` })

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.remove({ id: `tfc:barrel/dye/${dye}_windmill_blade` })
    })

    //#endregion

    //#region Удаление рецептов каменных инструментов TFC

    //#region Топор

    // Инструмент
    event.remove({ id: `tfc:crafting/stone/axe_igneous_extrusive` })
    event.remove({ id: `tfc:crafting/stone/axe_igneous_intrusive` })
    event.remove({ id: `tfc:crafting/stone/axe_metamorphic` })
    event.remove({ id: `tfc:crafting/stone/axe_sedimentary` })

    // Оголовья
    event.remove({ id: `tfc:rock_knapping/axe_head_igneous_extrusive` })
    event.remove({ id: `tfc:rock_knapping/axe_head_igneous_intrusive` })
    event.remove({ id: `tfc:rock_knapping/axe_head_metamorphic` })
    event.remove({ id: `tfc:rock_knapping/axe_head_sedimentary` })

    event.recipes.tfc.knapping('gtceu:stone_axe_head', 'tfc:rock', [
            " X   ",
            "XXXX ",
            "XXXXX",
            "XXXX ",
            " X   "
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_axe_head')

    //#endregion

    //#region Молот

    // Инструмент
    event.remove({ id: `tfc:crafting/stone/hammer_igneous_extrusive` })
    event.remove({ id: `tfc:crafting/stone/hammer_igneous_intrusive` })
    event.remove({ id: `tfc:crafting/stone/hammer_metamorphic` })
    event.remove({ id: `tfc:crafting/stone/hammer_sedimentary` })

    // Оголовья
    event.remove({ id: `tfc:rock_knapping/hammer_head_igneous_extrusive` })
    event.remove({ id: `tfc:rock_knapping/hammer_head_igneous_intrusive` })
    event.remove({ id: `tfc:rock_knapping/hammer_head_metamorphic` })
    event.remove({ id: `tfc:rock_knapping/hammer_head_sedimentary` })

    event.recipes.tfc.knapping('gtceu:stone_hammer_head', 'tfc:rock', [
            "XXXXX",
            "XXXXX",
            "  X  "
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_hammer_head')

    //#endregion

    //#region Мотыга

    // Инструмент
    event.remove({ id: `tfc:crafting/stone/hoe_igneous_extrusive` })
    event.remove({ id: `tfc:crafting/stone/hoe_igneous_intrusive` })
    event.remove({ id: `tfc:crafting/stone/hoe_metamorphic` })
    event.remove({ id: `tfc:crafting/stone/hoe_sedimentary` })

    // Оголовья
    event.remove({ id: `tfc:rock_knapping/hoe_head_igneous_extrusive` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_1_igneous_extrusive` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_2_igneous_extrusive` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_igneous_intrusive` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_1_igneous_intrusive` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_2_igneous_intrusive` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_metamorphic` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_1_metamorphic` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_2_metamorphic` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_sedimentary` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_1_sedimentary` })
    event.remove({ id: `tfc:rock_knapping/hoe_head_2_sedimentary` })

    event.recipes.tfc.knapping('gtceu:stone_hoe_head', 'tfc:rock', [
            "XXXXX",
            "   XX"
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_hoe_head')

    event.recipes.tfc.knapping('2x gtceu:stone_hoe_head', 'tfc:rock', [
            "XXXXX",
            "XX   ",
            "     ",
            "XXXXX",
            "XX   "
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_hoe_head_1')

    event.recipes.tfc.knapping('2x gtceu:stone_hoe_head', 'tfc:rock', [
            "XXXXX",
            "XX   ",
            "     ",
            "XXXXX",
            "   XX"
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_hoe_head_2')

    //#endregion

    //#region Нож

    // Инструмент
    event.remove({ id: `tfc:crafting/stone/knife_igneous_extrusive` })
    event.remove({ id: `tfc:crafting/stone/knife_igneous_intrusive` })
    event.remove({ id: `tfc:crafting/stone/knife_metamorphic` })
    event.remove({ id: `tfc:crafting/stone/knife_sedimentary` })

    // Оголовья
    event.remove({ id: `tfc:rock_knapping/knife_head_igneous_extrusive` })
    event.remove({ id: `tfc:rock_knapping/knife_head_1_igneous_extrusive` })
    event.remove({ id: `tfc:rock_knapping/knife_head_2_igneous_extrusive` })
    event.remove({ id: `tfc:rock_knapping/knife_head_3_igneous_extrusive` })
    event.remove({ id: `tfc:rock_knapping/knife_head_igneous_intrusive` })
    event.remove({ id: `tfc:rock_knapping/knife_head_1_igneous_intrusive` })
    event.remove({ id: `tfc:rock_knapping/knife_head_2_igneous_intrusive` })
    event.remove({ id: `tfc:rock_knapping/knife_head_3_igneous_intrusive` })
    event.remove({ id: `tfc:rock_knapping/knife_head_metamorphic` })
    event.remove({ id: `tfc:rock_knapping/knife_head_1_metamorphic` })
    event.remove({ id: `tfc:rock_knapping/knife_head_2_metamorphic` })
    event.remove({ id: `tfc:rock_knapping/knife_head_3_metamorphic` })
    event.remove({ id: `tfc:rock_knapping/knife_head_sedimentary` })
    event.remove({ id: `tfc:rock_knapping/knife_head_1_sedimentary` })
    event.remove({ id: `tfc:rock_knapping/knife_head_2_sedimentary` })
    event.remove({ id: `tfc:rock_knapping/knife_head_3_sedimentary` })

    event.recipes.tfc.knapping('gtceu:stone_knife_head', 'tfc:rock', [
            "X ",
            "XX",
            "XX",
            "XX",
            "XX"
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_knife_head')

    event.recipes.tfc.knapping('2x gtceu:stone_knife_head', 'tfc:rock', [
            "X  X ",
            "XX XX",
            "XX XX",
            "XX XX",
            "XX XX"
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_knife_head_1')

    event.recipes.tfc.knapping('2x gtceu:stone_knife_head', 'tfc:rock', [
            "X   X",
            "XX XX",
            "XX XX",
            "XX XX",
            "XX XX"
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_knife_head_2')

    event.recipes.tfc.knapping('2x gtceu:stone_knife_head', 'tfc:rock', [
            " X X ",
            "XX XX",
            "XX XX",
            "XX XX",
            "XX XX"
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_knife_head_3')

    //#endregion

    //#region Лопата

    // Инструмент
    event.remove({ id: `tfc:crafting/stone/shovel_igneous_extrusive` })
    event.remove({ id: `tfc:crafting/stone/shovel_igneous_intrusive` })
    event.remove({ id: `tfc:crafting/stone/shovel_metamorphic` })
    event.remove({ id: `tfc:crafting/stone/shovel_sedimentary` })

    // Оголовья
    event.remove({ id: `tfc:rock_knapping/shovel_head_igneous_extrusive` })
    event.remove({ id: `tfc:rock_knapping/shovel_head_igneous_intrusive` })
    event.remove({ id: `tfc:rock_knapping/shovel_head_metamorphic` })
    event.remove({ id: `tfc:rock_knapping/shovel_head_sedimentary` })

    event.recipes.tfc.knapping('gtceu:stone_shovel_head', 'tfc:rock', [
            "XXX",
            "XXX",
            "XXX",
            "XXX",
            " X "
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_shovel_head')

    //#endregion

    //#endregion

    //#region Рецепты электрической теплицы
    
    // Дерево
    global.TFC_WOOD_TYPES.forEach(wood => {
        generateGreenHouseRecipe(event, `tfc:wood/sapling/${wood}`, 16000, `32x tfc:wood/log/${wood}`, `tfg:greenhouse/${wood}`)
    })

    // Семена фруктов
    global.TFC_GREENHOUSE_FRUIT_RECIPE_COMPONENTS.forEach(element => {
        generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name)
    })

    // Семена овощей
    global.TFC_GREENHOUSE_VEGETABLE_RECIPE_COMPONENTS.forEach(element => {
        generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name)
    })

    // Семена ягод
    global.TFC_GREENHOUSE_BERRY_RECIPE_COMPONENTS.forEach(element => {
        generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name)
    })

    //#endregion

    //#region Рецепты плоского теста

    global.TFC_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS.forEach(element => {
        event.recipes.gtceu.mixer(element.name)             
            .itemInputs(element.input)
            .inputFluids(Fluid.of('minecraft:water', 100))
            .itemOutputs(element.output)
            .duration(300)
            .EUt(16)
    })

    //#endregion

    //#region Рецепты хлеба

    global.TFC_FURNACE_BREAD_RECIPE_COMPONENTS.forEach(element => {
        event.smelting(element.output, element.input)
            .id(`tfg:smelting/${element.name}`)
    })

    //#endregion

    // Другое
    event.remove({ id: `tfc:crafting/trip_hammer` })
    event.remove({ id: `tfc:anvil/steel_pump` })
    event.remove({ id: `tfc:crafting/steel_pump` })
    event.remove({ id: `tfc:crafting/crankshaft` })

    // Доменная печь
    event.shaped('tfc:blast_furnace', [
        'AAA', 
        'ABA',
        'AAA'  
    ], {
        A: '#forge:double_plates/wrought_iron',
        B: 'tfc:crucible'
    }).id('tfc:crafting/blast_furnace')

    // Тыква -> Кусочки тыквы
    event.recipes.minecraft.crafting_shaped('5x tfc:food/pumpkin_chunks', [
        'AB'
    ], {
        A: '#tfc:knives',
        B: 'tfc:pumpkin'
    })

    // Fire Brick
    event.smelting('tfc:ceramic/fire_brick', 'gtceu:compressed_fireclay')
        .id('tfg:smelting/fireclay_brick')

    // Wool yarn
    event.recipes.gtceu.macerator('macerate_wool')             
        .itemInputs('#minecraft:wool')
        .itemOutputs('tfc:wool_yarn')
        .chancedOutput('tfc:wool_yarn', 9000, 0)
        .chancedOutput('tfc:wool_yarn', 5000, 0)
        .chancedOutput('tfc:wool_yarn', 2000, 0)
        .duration(200)
        .EUt(2)

    // LimeWater + Sand -> Mortar
    event.recipes.gtceu.centrifuge('mortar')             
        .itemInputs('#forge:sand')
        .inputFluids(Fluid.of('tfc:limewater', 100))
        .itemOutputs('16x tfc:mortar')
        .duration(800)
        .EUt(8)
}