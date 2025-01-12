// priority: 0

const registerTFCRecipes = (event) => {
    //return; TODO тут баг
    //#region Металлы
    
    // Удаление рецептов руд TFC
    event.remove({ id: /tfc:heating\/ore\/poor_*/ })
    event.remove({ id: /tfc:heating\/ore\/normal_*/ })
    event.remove({ id: /tfc:heating\/ore\/rich_*/ })

    // Удаление рецептов блоков
    event.remove({ id: /tfc:crafting\/metal\/block\/*/ })
    event.remove({ id: /tfc:heating\/metal\/*_block/ })

    // Удаление рецептов ступеней
    event.remove({ id: /tfc:crafting\/metal\/block\/*_stairs/ })
    event.remove({ id: /tfc:heating\/metal\/*_block_stairs/ })

    // Удалание рецептов полублоков
    event.remove({ id: /tfc:crafting\/metal\/block\/*_slab/ })
    event.remove({ id: /tfc:heating\/metal\/*_block_slab/ })

    let getFillingNBT = (material, amount) => {
        return {
            tank: {
                FluidName: Fluid.of(material.getFluid()).getId(),
                Amount: amount
            }
        }
    }

    GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
        let tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)

        if (tfcProperty != null) {
            let outputMaterial = (tfcProperty.getOutputMaterial() == null) ? material : tfcProperty.getOutputMaterial()

            // Ingots
            let ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            if (!ingotItem.isEmpty()) {
                
                // Декрафт слитка в жидкость
                event.recipes.tfc.heating(ingotItem, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                    .id(`tfc:heating/metal/${material.getName()}_ingot`)

                if (material != GTMaterials.WroughtIron) {

                    // Отливка слитка в обычной форме
                    event.recipes.tfc.casting(ingotItem, 'tfc:ceramic/ingot_mold', Fluid.of(outputMaterial.getFluid(), 144), 0.1)
                        .id(`tfc:casting/${material.getName()}_ingot`)

                    // Отливка слитка в огнеупорной форме
                    event.recipes.tfc.casting(ingotItem, 'tfc:ceramic/fire_ingot_mold', Fluid.of(outputMaterial.getFluid(), 144), 0.01)
                        .id(`tfc:casting/${material.getName()}_fire_ingot`)

                        event.recipes.create.filling(
                            Item.of('tfc:ceramic/ingot_mold', getFillingNBT(outputMaterial, 144)), 
                            [
                                Fluid.of(outputMaterial.getFluid(), 144), 
                                Item.of('tfc:ceramic/ingot_mold').strongNBT()
                            ]
                        ).id(`tfg:tfc/filling/${material.getName()}_ingot`)

                        event.recipes.create.filling(
                            Item.of('tfc:ceramic/fire_ingot_mold', getFillingNBT(outputMaterial, 144)), 
                            [
                                Fluid.of(outputMaterial.getFluid(), 144), 
                                Item.of('tfc:ceramic/fire_ingot_mold').strongNBT()
                            ]
                        ).id(`tfg:tfc/filling/${material.getName()}_fire_ingot`)
                }
      
                // Double Ingots
                let doubleIngotItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1)
                if (!doubleIngotItem.isEmpty()) {
                    
                    // Декрафт двойного слитка в жидкость
                    event.recipes.tfc.heating(doubleIngotItem, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                        .id(`tfc:heating/metal/${material.getName()}_double_ingot`)

                    // 2 слитка -> Двойной слиток
                    event.recipes.tfc.welding(doubleIngotItem, ingotItem, ingotItem, tfcProperty.getTier() - 1)
                        .id(`tfc:welding/${material.getName()}_double_ingot`)

                    // Plates
                    let plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)
                    if (!plateItem.isEmpty()) {
                        
                        // Декрафт пластины в жидкость
                        event.recipes.tfc.heating(plateItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_sheet`)

                        // Двойной слиток -> Пластина
                        event.recipes.tfc.anvil(plateItem, doubleIngotItem, ['hit_last', 'hit_second_last', 'hit_third_last'])
                            .tier(tfcProperty.getTier())
                            .id(`tfc:anvil/${material.getName()}_sheet`)

                        // Double Plate
                        let doublePlateItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
                        if (!doublePlateItem.isEmpty()) {

                            // Декрафт двойных пластин
                            event.recipes.tfc.heating(doublePlateItem, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                .id(`tfc:heating/metal/${material.getName()}_double_sheet`)

                            // Две пластины -> Двойная пластина
                            event.recipes.tfc.welding(doublePlateItem, plateItem, plateItem)
                                .tier(tfcProperty.getTier())
                                .id(`tfc:welding/${material.getName()}_double_sheet`)
                            
                            // Armor
                            if (material.hasFlag(TFGMaterialFlags.HAS_TFC_ARMOR)) {
                                //#region Шлем
                    
                                // Декрафт незавершенного шлема в жидкость
                                event.recipes.tfc.heating(`tfc:metal/unfinished_helmet/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                    .id(`tfc:heating/metal/${material.getName()}_unfinished_helmet`)
                    
                                // Незавершенный шлем
                                event.recipes.tfc.anvil(`tfc:metal/unfinished_helmet/${material.getName()}`, doublePlateItem, ['hit_last', 'bend_second_last', 'bend_third_last'])
                                    .tier(tfcProperty.getTier())
                                    .id(`tfc:anvil/${material.getName()}_unfinished_helmet`)
                    
                                // Декрафт шлема в жидкость
                                event.recipes.tfc.heating(`tfc:metal/helmet/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 432))
                                    .useDurability(true)
                                    .id(`tfc:heating/metal/${material.getName()}_helmet`)
                    
                                // Шлем
                                event.recipes.tfc.welding(`tfc:metal/helmet/${material.getName()}`, `tfc:metal/unfinished_helmet/${material.getName()}`, plateItem)
                                    .tier(tfcProperty.getTier())
                                    .id(`tfc:welding/${material.getName()}_helmet`)
                    
                                //#endregion
                    
                                //#region Нагрудник
                    
                                // Декрафт незавершенного нагрудника в жидкость
                                event.recipes.tfc.heating(`tfc:metal/unfinished_chestplate/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                    .id(`tfc:heating/metal/${material.getName()}_unfinished_chestplate`)
                    
                                // Незавершенный нагрудник
                                event.recipes.tfc.anvil(`tfc:metal/unfinished_chestplate/${material.getName()}`, doublePlateItem, ['hit_last', 'hit_second_last', 'upset_third_last'])
                                    .tier(tfcProperty.getTier())
                                    .id(`tfc:anvil/${material.getName()}_unfinished_chestplate`)
                    
                                // Декрафт нагрудника в жидкость
                                event.recipes.tfc.heating(`tfc:metal/chestplate/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 576))
                                    .useDurability(true)
                                    .id(`tfc:heating/metal/${material.getName()}_chestplate`)
                    
                                // Нагрудник
                                event.recipes.tfc.welding(`tfc:metal/chestplate/${material.getName()}`, `tfc:metal/unfinished_chestplate/${material.getName()}`, doublePlateItem)
                                    .tier(tfcProperty.getTier())
                                    .id(`tfc:welding/${material.getName()}_chestplate`)
                    
                                //#endregion
                    
                                //#region Поножи
                    
                                // Декрафт незавершенных поножей в жидкость
                                event.recipes.tfc.heating(`tfc:metal/unfinished_greaves/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                    .id(`tfc:heating/metal/${material.getName()}_unfinished_greaves`)
                    
                                // Незавершенные поножи
                                event.recipes.tfc.anvil(`tfc:metal/unfinished_greaves/${material.getName()}`, doublePlateItem, ['bend_any', 'draw_any', 'hit_any'])
                                    .tier(tfcProperty.getTier())
                                    .id(`tfc:anvil/${material.getName()}_unfinished_greaves`)
                    
                                // Декрафт поножей в жидкость
                                event.recipes.tfc.heating(`tfc:metal/greaves/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 432))
                                    .useDurability(true)
                                    .id(`tfc:heating/metal/${material.getName()}_greaves`)
                    
                                // Поножи
                                event.recipes.tfc.welding(`tfc:metal/greaves/${material.getName()}`, `tfc:metal/unfinished_greaves/${material.getName()}`, plateItem)
                                    .tier(tfcProperty.getTier())
                                    .id(`tfc:welding/${material.getName()}_greaves`)
                    
                                //#endregion
                    
                                //#region Ботинки
                    
                                // Декрафт незавершенных ботинок в жидкость
                                event.recipes.tfc.heating(`tfc:metal/unfinished_boots/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                                    .id(`tfc:heating/metal/${material.getName()}_unfinished_boots`)
                    
                                // Незавершенные ботинки
                                event.recipes.tfc.anvil(`tfc:metal/unfinished_boots/${material.getName()}`, plateItem, ['bend_last', 'bend_second_last', 'shrink_third_last'])
                                    .tier(tfcProperty.getTier())
                                    .id(`tfc:anvil/${material.getName()}_unfinished_boots`)
                    
                                // Декрафт ботинок в жидкость
                                event.recipes.tfc.heating(`tfc:metal/boots/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                    .useDurability(true)
                                    .id(`tfc:heating/metal/${material.getName()}_boots`)
                    
                                // Ботинки
                                event.recipes.tfc.welding(`tfc:metal/boots/${material.getName()}`, `tfc:metal/unfinished_boots/${material.getName()}`, plateItem)
                                    .tier(tfcProperty.getTier())
                                    .id(`tfc:welding/${material.getName()}_boots`)
                    
                                //#endregion
                            }

                            // Tools (From Double Plate)
                            if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL)) {
                                //#region Фурма
                
                                // Декрафт инструмента в жидкость
                                event.recipes.tfc.heating(`tfc:metal/tuyere/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                    .useDurability(true)
                                    .id(`tfc:heating/metal/${material.getName()}_tuyere`)

                                // Фурма
                                event.recipes.tfc.anvil(`tfc:metal/tuyere/${material.getName()}`, doublePlateItem, ['bend_last', 'bend_second_last'])
                                    .tier(tfcProperty.getTier())
                                    .id(`tfc:anvil/${material.getName()}_tuyere`)

                                //#endregion

                                //#region Щит
        
                                // Декрафт щита в жидкость
                                event.recipes.tfc.heating(`tfc:metal/shield/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                    .useDurability(true)
                                    .id(`tfc:heating/metal/${material.getName()}_shield`)

                                // Щит
                                event.recipes.tfc.anvil(`tfc:metal/shield/${material.getName()}`, doublePlateItem, ['upset_last', 'bend_second_last', 'bend_third_last'])
                                    .tier(tfcProperty.getTier())
                                    .id(`tfc:anvil/${material.getName()}_shield`)

                                //#endregion
                            
                                //#region Конская броня
                
                                // Декрафт конской брони в жидкость
                                event.recipes.tfc.heating(`tfc:metal/horse_armor/${material.getName()}`, tfcProperty.getMeltTemp())
                                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 864))
                                    .useDurability(true)
                                    .id(`tfc:heating/metal/${material.getName()}_horse_armor`)
                            
                                //#endregion
                            }

                        }

                        // Tools (From Plate)
                        if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL)) {
                            //#region Удочка
        
                            // Декрафт оголовья в жидкость
                            event.recipes.tfc.heating(`tfc:metal/fish_hook/${material.getName()}`, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                                .id(`tfc:heating/metal/${material.getName()}_fish_hook`)

                            // Крюк удочки
                            event.recipes.tfc.anvil(`tfc:metal/fish_hook/${material.getName()}`, plateItem, ['draw_not_last', 'bend_any', 'hit_any'])
                                .tier(tfcProperty.getTier())
                                .bonus(true)
                                .id(`tfc:anvil/${material.getName()}_fish_hook`)

                            // Декрафт инструмента в жидкость
                            event.recipes.tfc.heating(`tfc:metal/fishing_rod/${material.getName()}`, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                                .useDurability(true)
                                .id(`tfc:heating/metal/${material.getName()}_fishing_rod`)

                            //#endregion
                        }

                    }

                    // Tools (From Double Ingots)
                    if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL)) {
                        //#region Меч
                        
                        // Крафт инструмента
                        event.remove({ id: `tfc:crafting/metal/sword/${material.getName()}` })
            
                        // Декрафт инструмента в жидкость
                        let swordItem = ToolHelper.get(GTToolType.SWORD, material)
                        if (!swordItem.isEmpty()) {
                            
                            event.recipes.tfc.heating(swordItem, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                .useDurability(true)
                                .id(`tfc:heating/metal/${material.getName()}_sword`)

                        }
                        
                        let swordHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadSword, material, 1)
                        if (!swordHeadItem.isEmpty()) {
                            
                            // Декрафт оголовья в жидкость
                            event.recipes.tfc.heating(swordHeadItem, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                .id(`tfc:heating/metal/${material.getName()}_sword_blade`)

                            // Крафт оголовья
                            event.recipes.tfc.anvil(swordHeadItem, doubleIngotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
                                .tier(tfcProperty.getTier())
                                .bonus(true)
                                .id(`tfc:anvil/${material.getName()}_sword_blade`)
            
                            // Металл + Форма -> Оголовье
                            if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                                event.recipes.tfc.casting(swordHeadItem, 'tfc:ceramic/sword_blade_mold', Fluid.of(outputMaterial.getFluid(), 288), 1)
                                    .id(`tfc:casting/${material.getName()}_sword_blade`)
                            
                                event.recipes.create.filling(
                                    Item.of('tfc:ceramic/sword_blade_mold', getFillingNBT(outputMaterial, 288)), 
                                    [
                                        Fluid.of(outputMaterial.getFluid(), 288), 
                                        Item.of('tfc:ceramic/sword_blade_mold').strongNBT()
                                    ]
                                ).id(`tfg:tfc/filling/${material.getName()}_sword_blade`)
                            }

                            
                            
                        }
            
                        //#endregion
            
                        //#region Дубина
                        
                        // Декрафт инструмента в жидкость
                        event.recipes.tfc.heating(`tfc:metal/mace/${material.getName()}`, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_mace`)
            
                        // Металл + Форма -> Оголовье
                        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                            event.recipes.tfc.casting(`tfc:metal/mace_head/${material.getName()}`, 'tfc:ceramic/mace_head_mold', Fluid.of(outputMaterial.getFluid(), 288), 1)
                                .id(`tfc:casting/${material.getName()}_mace_head`)

                            event.recipes.create.filling(
                                Item.of('tfc:ceramic/mace_head_mold', getFillingNBT(outputMaterial, 288)), 
                                [
                                    Fluid.of(outputMaterial.getFluid(), 288), 
                                    Item.of('tfc:ceramic/mace_head_mold').strongNBT()
                                ]
                            ).id(`tfg:tfc/filling/${material.getName()}_mace_head`)
                        
                        }
            
                        // Декрафт оголовья в жидкость
                        event.recipes.tfc.heating(`tfc:metal/mace_head/${material.getName()}`, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                            .id(`tfc:heating/metal/${material.getName()}_mace_head`)
            
                        //#endregion

                        //#region Мясницкий нож
                    
                        // Декрафт инструмента в жидкость
                        let butcheryKnifeItem = ToolHelper.get(GTToolType.BUTCHERY_KNIFE, material)
                        if (!butcheryKnifeItem.isEmpty()) {
                            
                            event.recipes.tfc.heating(butcheryKnifeItem, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                                .useDurability(true)
                                .id(`tfc:heating/metal/${material.getName()}_butchery_knife`)

                        }
                        
                        let butcheryKnifeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadButcheryKnife, material, 1)
                        if (!butcheryKnifeHeadItem.isEmpty()) {
                            
                            // Декрафт оголовья в жидкость
                            event.recipes.tfc.heating(butcheryKnifeHeadItem, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                                .id(`tfc:heating/metal/${material.getName()}_knife_butchery_head`)

                            // Крафт оголовья
                            event.recipes.tfc.anvil(butcheryKnifeHeadItem, `#forge:ingots/${material.getName()}`, ['punch_last', 'bend_not_last', 'bend_not_last'])
                                .tier(tfcProperty.getTier())
                                .bonus(true)
                                .id(`tfc:anvil/${material.getName()}_knife_butchery_head`)

                        }

                        //#endregion

                        //#region Молот шахтера
                
                        // Декрафт инструмента в жидкость
                        let miningHammerItem = ToolHelper.get(GTToolType.MINING_HAMMER, material)
                        if (!miningHammerItem.isEmpty()) {
                            
                            event.recipes.tfc.heating(miningHammerItem, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                .useDurability(true)
                                .id(`tfc:heating/metal/${material.getName()}_mining_hammer`)

                        }
                        

                        let miningHammerHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadMiningHammer, material, 1)
                        if (!miningHammerHeadItem.isEmpty()) {
                            
                            // Декрафт оголовья в жидкость
                            event.recipes.tfc.heating(miningHammerHeadItem, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                .id(`tfc:heating/metal/${material.getName()}_mining_hammer_head`)

                             // Крафт оголовья
                            event.recipes.tfc.anvil(miningHammerHeadItem, doubleIngotItem, ['punch_last', 'shrink_not_last'])
                                .tier(tfcProperty.getTier())
                                .bonus(true)
                                .id(`tfc:anvil/${material.getName()}_mining_hammer_head`)
                            
                        }

                        //#endregion

                        //#region Большая лопата
                        
                        // Декрафт инструмента в жидкость
                        let spadeItem = ToolHelper.get(GTToolType.SPADE, material)
                        if (!spadeItem.isEmpty()) {
                            
                            event.recipes.tfc.heating(spadeItem, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                .useDurability(true)
                                .id(`tfc:heating/metal/${material.getName()}_spade`)
                            
                        }
                        
                        let spadeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadSpade, material, 1)
                        if (!spadeHeadItem.isEmpty()) {

                            // Крафт оголовья
                            event.recipes.tfc.anvil(spadeHeadItem, doubleIngotItem, ['punch_last', 'hit_not_last'])
                            .tier(tfcProperty.getTier())
                            .bonus(true)
                            .id(`tfc:anvil/${material.getName()}_spade_head`)

                            // Декрафт оголовья в жидкость
                            event.recipes.tfc.heating(spadeHeadItem, tfcProperty.getMeltTemp())
                                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                                .id(`tfc:heating/metal/${material.getName()}_spade_head`)
                            
                        }

                        //#endregion
                    }

                }

                // Rods
                let rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1)
                if (!rodItem.isEmpty()) {
                    
                    // Декрафт стержня в жидкость
                    event.recipes.tfc.heating(rodItem, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), 72))
                        .id(`tfc:heating/metal/${material.getName()}_rod`)

                    // Слиток -> 2 Стержня
                    event.recipes.tfc.anvil(rodItem.withCount(2), ingotItem, ['bend_last', 'draw_second_last', 'draw_third_last'])
                        .tier(tfcProperty.getTier())
                        .id(`tfc:anvil/${material.getName()}_rod`)

                    // Long Rods
                    let longRodItem = ChemicalHelper.get(TagPrefix.rodLong, material, 1)
                    if (!longRodItem.isEmpty()) {
                        
                        // Декрафт длинного стержня в жидкость
                        event.recipes.tfc.heating(longRodItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_long_rod`)

                        // Стержни -> Длинный стержень
                        event.recipes.tfc.welding(longRodItem, rodItem, rodItem)
                            .tier(tfcProperty.getTier())
                            .id(`tfc:anvil/${material.getName()}_long_rod`)
                        
                    }

                    // Bolt
                    let boltItem = ChemicalHelper.get(TagPrefix.bolt, material, 1)
                    if (!boltItem.isEmpty()) {
                        
                        // Болт -> Металл
                        event.recipes.tfc.heating(boltItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 18))
                            .id(`tfc:heating/metal/${material.getName()}_bolt`)

                        // Стержень -> Болт
                        event.recipes.tfc.anvil(boltItem.withCount(2), rodItem, ['punch_last', 'draw_second_last', 'draw_third_last'])
                            .tier(tfcProperty.getTier())
                            .id(`tfc:anvil/${material.getName()}_bolt`)
                        
                    }

                    // Screw
                    let screwItem = ChemicalHelper.get(TagPrefix.screw, material, 1)
                    if (!screwItem.isEmpty()) {
                        
                        // Винт -> Металл
                        event.recipes.tfc.heating(screwItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 16))
                            .id(`tfc:heating/metal/${material.getName()}_screw`)

                        // Стержень -> Винт
                        event.recipes.tfc.anvil(screwItem, rodItem, ['punch_last', 'punch_second_last', 'shrink_third_last'])
                            .tier(tfcProperty.getTier())
                            .id(`tfc:anvil/${material.getName()}_screw`)

                    }

                    let ringItem = ChemicalHelper.get(TagPrefix.ring, material, 1)
                    if (!ringItem.isEmpty()) {
                        
                        // Кольцо -> Металл
                        event.recipes.tfc.heating(ringItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 36))
                            .id(`tfc:heating/metal/${material.getName()}_ring`)
        
                        // Стержень -> Кольцо
                        event.recipes.tfc.anvil(ringItem, rodItem, ['hit_last', 'hit_second_last', 'hit_third_last'])
                            .tier(tfcProperty.getTier())
                            .id(`tfc:anvil/${material.getName()}_ring`)

                    }
                    
                }

                // Tools (From Ingot)
                if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL)) {
            
                    //#region Кирка
                    
                    // Крафт инструмента
                    event.remove({ id: `tfc:crafting/metal/pickaxe/${material.getName()}` })
        
                    // Декрафт инструмента в жидкость
                    let pickaxeItem = ToolHelper.get(GTToolType.PICKAXE, material)
                    if (!pickaxeItem.isEmpty()) {

                        event.recipes.tfc.heating(`gtceu:${material.getName()}_pickaxe`, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_pickaxe`)
                        
                    }

                    let pickaxeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadPickaxe, material, 1)
                    if (!pickaxeHeadItem.isEmpty()) {
                        
                        // Декрафт оголовья в жидкость
                        event.recipes.tfc.heating(pickaxeHeadItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_pickaxe_head`)

                        // Крафт оголовья
                        event.recipes.tfc.anvil(pickaxeHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
                            .tier(tfcProperty.getTier())
                            .bonus(true)
                            .id(`tfc:anvil/${material.getName()}_pickaxe_head`)
            
                        // Металл + Форма -> Оголовье
                        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                            event.recipes.tfc.casting(pickaxeHeadItem, 'tfc:ceramic/pickaxe_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                                .id(`tfc:casting/${material.getName()}_pickaxe_head`)

                            event.recipes.create.filling(
                                Item.of('tfc:ceramic/pickaxe_head_mold', getFillingNBT(outputMaterial, 144)), 
                                [
                                    Fluid.of(outputMaterial.getFluid(), 144), 
                                    Item.of('tfc:ceramic/pickaxe_head_mold').strongNBT()
                                ]
                            ).id(`tfg:tfc/filling/${material.getName()}_pickaxe_head`)
                        }
        
                    }
        
                    //#endregion
        
                    //#region Топор
                    
                    // Крафт инструмента
                    event.remove({ id: `tfc:crafting/metal/axe/${material.getName()}` })
        
                    // Декрафт инструмента в жидкость
                    let axeItem = ToolHelper.get(GTToolType.AXE, material)
                    if (!axeItem.isEmpty()) {
                        
                        event.recipes.tfc.heating(axeItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_axe`)
                        
                    }
                    
                    let axeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadAxe, material, 1)
                    if (!axeHeadItem.isEmpty()) {
                        // Декрафт оголовья в жидкость
                        event.recipes.tfc.heating(axeHeadItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_axe_head`)

                        // Крафт оголовья
                        event.recipes.tfc.anvil(axeHeadItem, ingotItem, ['punch_last', 'hit_second_last', 'upset_third_last'])
                            .tier(tfcProperty.getTier())
                            .bonus(true)
                            .id(`tfc:anvil/${material.getName()}_axe_head`)
    
                        // Металл + Форма -> Оголовье
                        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                            event.recipes.tfc.casting(axeHeadItem, 'tfc:ceramic/axe_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                                .id(`tfc:casting/${material.getName()}_axe_head`)

                            event.recipes.create.filling(
                                Item.of('tfc:ceramic/axe_head_mold', getFillingNBT(outputMaterial, 144)), 
                                [
                                    Fluid.of(outputMaterial.getFluid(), 144), 
                                    Item.of('tfc:ceramic/axe_head_mold').strongNBT()
                                ]
                            ).id(`tfg:tfc/filling/${material.getName()}_axe_head`)
                        }
                    }

                    //#endregion
        
                    //#region Лопата
                    
                    // Крафт инструмента
                    event.remove({ id: `tfc:crafting/metal/shovel/${material.getName()}` })
        
                    // Декрафт инструмента в жидкость
                    let shovelItem = ToolHelper.get(GTToolType.SHOVEL, material)
                    if (!shovelItem.isEmpty()) {
                        
                        event.recipes.tfc.heating(shovelItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_shovel`)
                        
                    }
                    
                    let shovelHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadShovel, material, 1)
                    if (!shovelHeadItem.isEmpty()) {
                        
                        // Декрафт оголовья в жидкость
                        event.recipes.tfc.heating(shovelHeadItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_shovel_head`)

                        // Крафт оголовья
                        event.recipes.tfc.anvil(shovelHeadItem, ingotItem, ['punch_last', 'hit_not_last'])
                            .tier(tfcProperty.getTier())
                            .bonus(true)
                            .id(`tfc:anvil/${material.getName()}_shovel_head`)

                        // Металл + Форма -> Оголовье
                        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                            event.recipes.tfc.casting(shovelHeadItem, 'tfc:ceramic/shovel_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                                .id(`tfc:casting/${material.getName()}_shovel_head`)

                            event.recipes.create.filling(
                                Item.of('tfc:ceramic/shovel_head_mold', getFillingNBT(outputMaterial, 144)), 
                                [
                                    Fluid.of(outputMaterial.getFluid(), 144), 
                                    Item.of('tfc:ceramic/shovel_head_mold').strongNBT()
                                ]
                            ).id(`tfg:tfc/filling/${material.getName()}_shovel_head_mold`)
                        }
        
                    }

                    //#endregion
        
                    //#region Мотыга
                    
                    // Крафт инструмента
                    event.remove({ id: `tfc:crafting/metal/hoe/${material.getName()}` })
        
                    // Декрафт инструмента в жидкость
                    let hoeItem = ToolHelper.get(GTToolType.HOE, material)
                    if (!hoeItem.isEmpty()) {
                        event.recipes.tfc.heating(hoeItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_hoe`)
                    }
                    
                    let hoeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadHoe, material, 1)
                    if (!hoeHeadItem.isEmpty()) {
                        
                        // Декрафт оголовья в жидкость
                        event.recipes.tfc.heating(hoeHeadItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_hoe_head`)
                        
                        // Крафт оголовья
                        event.recipes.tfc.anvil(hoeHeadItem, ingotItem, ['punch_last', 'hit_not_last', 'bend_not_last'])
                            .tier(tfcProperty.getTier())
                            .bonus(true)
                            .id(`tfc:anvil/${material.getName()}_hoe_head`)
    
                        // Металл + Форма -> Оголовье
                        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                            event.recipes.tfc.casting(hoeHeadItem, 'tfc:ceramic/hoe_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                                .id(`tfc:casting/${material.getName()}_hoe_head`)

                            event.recipes.create.filling(
                                Item.of('tfc:ceramic/hoe_head_mold', getFillingNBT(outputMaterial, 144)), 
                                [
                                    Fluid.of(outputMaterial.getFluid(), 144), 
                                    Item.of('tfc:ceramic/hoe_head_mold').strongNBT()
                                ]
                            ).id(`tfg:tfc/filling/${material.getName()}_hoe_head_mold`)
                        }
                        
                    }
        
                    //#endregion
        
                    //#region Молот
                    
                    // Крафт инструмента
                    event.remove({ id: `tfc:crafting/metal/hammer/${material.getName()}` })
        
                    // Декрафт инструмента в жидкость
                    let hammerItem = ToolHelper.get(GTToolType.HARD_HAMMER, material)
                    if (!hammerItem.isEmpty()) {
                       
                        event.recipes.tfc.heating(hammerItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_hammer`)
                        
                    }
                    
                    let hammerHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadHammer, material, 1)
                    if (!hammerHeadItem.isEmpty()) {
                        
                        // Декрафт оголовья в жидкость
                        event.recipes.tfc.heating(hammerHeadItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_hammer_head`)

                        // Крафт оголовья
                        event.recipes.tfc.anvil(hammerHeadItem, ingotItem, ['punch_last', 'shrink_not_last'])
                            .tier(tfcProperty.getTier())
                            .bonus(true)
                            .id(`tfc:anvil/${material.getName()}_hammer_head`)
    
                        // Металл + Форма -> Оголовье
                        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                            event.recipes.tfc.casting(hammerHeadItem, 'tfc:ceramic/hammer_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                                .id(`tfc:casting/${material.getName()}_hammer_head`)
                        
                            event.recipes.create.filling(
                                Item.of('tfc:ceramic/hammer_head_mold', getFillingNBT(outputMaterial, 144)), 
                                [
                                    Fluid.of(outputMaterial.getFluid(), 144), 
                                    Item.of('tfc:ceramic/hammer_head_mold').strongNBT()
                                ]
                            ).id(`tfg:tfc/filling/${material.getName()}_hammer_head_mold`)
                        }
                    
                    }
                    
                    //#endregion
        
                    //#region Пила
                    
                    // Крафт инструмента
                    event.remove({ id: `tfc:crafting/metal/saw/${material.getName()}` })
        
                    // Декрафт инструмента в жидкость
                    let sawItem = ToolHelper.get(GTToolType.SAW, material)
                    if (!sawItem.isEmpty()) {
                        
                        event.recipes.tfc.heating(sawItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_saw`)
                        
                    }
                    
                    let sawHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadSaw, material, 1)
                    if (!sawHeadItem.isEmpty()) {
                        
                        // Декрафт оголовья в жидкость
                        event.recipes.tfc.heating(sawHeadItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_saw_blade`)

                        // Крафт оголовья
                        event.recipes.tfc.anvil(sawHeadItem, ingotItem, ['hit_last', 'hit_second_last'])
                            .tier(tfcProperty.getTier())
                            .bonus(true)
                            .id(`tfc:anvil/${material.getName()}_saw_blade`)
        
                        // Металл + Форма -> Оголовье
                        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                            event.recipes.tfc.casting(sawHeadItem, 'tfc:ceramic/saw_blade_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                                .id(`tfc:casting/${material.getName()}_saw_blade`)

                            event.recipes.create.filling(
                                Item.of('tfc:ceramic/saw_blade_mold', getFillingNBT(outputMaterial, 144)), 
                                [
                                    Fluid.of(outputMaterial.getFluid(), 144), 
                                    Item.of('tfc:ceramic/saw_blade_mold').strongNBT()
                                ]
                            ).id(`tfg:tfc/filling/${material.getName()}_saw_blade_mold`)
                        }
    
                    }

                    //#endregion
        
                    //#region Коса
                    
                    // Крафт инструмента
                    event.remove({ id: `tfc:crafting/metal/scythe/${material.getName()}` })
        
                    // Декрафт инструмента в жидкость
                    let scytheItem = ToolHelper.get(GTToolType.SCYTHE, material)
                    if (!scytheItem.isEmpty()) {
                        event.recipes.tfc.heating(scytheItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_scythe`)
                    }
                    
                    let scytheHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadScythe, material, 1)
                    if (!scytheHeadItem.isEmpty()) {
                        
                        // Декрафт оголовья в жидкость
                        event.recipes.tfc.heating(scytheHeadItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_scythe_blade`)

                        // Крафт оголовья
                        event.recipes.tfc.anvil(scytheHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
                            .tier(tfcProperty.getTier())
                            .bonus(true)
                            .id(`tfc:anvil/${material.getName()}_scythe_blade`)
        
                        // Металл + Форма -> Оголовье
                        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                            event.recipes.tfc.casting(scytheHeadItem, 'tfc:ceramic/scythe_blade_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                                .id(`tfc:casting/${material.getName()}_scythe_blade`)

                            event.recipes.create.filling(
                                Item.of('tfc:ceramic/scythe_blade_mold', getFillingNBT(outputMaterial, 144)), 
                                [
                                    Fluid.of(outputMaterial.getFluid(), 144), 
                                    Item.of('tfc:ceramic/scythe_blade_mold').strongNBT()
                                ]
                            ).id(`tfg:tfc/filling/${material.getName()}_scythe_blade_mold`)
                        }
                    
                    }
        
                    //#endregion
    
                    //#region Напильник
                    
                    // Декрафт инструмента в жидкость
                    let fileItem = ToolHelper.get(GTToolType.FILE, material)
                    if (!fileItem.isEmpty()) {
                        event.recipes.tfc.heating(fileItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_file`)
                    }
                    
                    let fileHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadFile, material, 1)
                    if (!fileHeadItem.isEmpty()) {
                        
                        // Декрафт оголовья в жидкость
                        event.recipes.tfc.heating(fileHeadItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_file_head`)

                        // Крафт оголовья
                        event.recipes.tfc.anvil(fileHeadItem, ingotItem, ['upset_last', 'bend_not_last', 'punch_not_last'])
                            .tier(tfcProperty.getTier())
                            .bonus(true)
                            .id(`tfc:anvil/${material.getName()}_file_head`)

                    }

                    //#endregion

                    //#region Нож
                    
                    // Крафт инструмента
                    event.remove({ id: `tfc:crafting/metal/knife/${material.getName()}` })
        
                    // Декрафт инструмента в жидкость
                    let knifeItem = ToolHelper.get(GTToolType.KNIFE, material)
                    if (!knifeItem.isEmpty()) {
                        event.recipes.tfc.heating(knifeItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_knife`)
                    }
                    
                    let knifeHeadItem = ChemicalHelper.get(TFGTagPrefix.toolHeadKnife, material, 1)
                    if (!knifeHeadItem.isEmpty()) {
                        
                        // Декрафт оголовья в жидкость
                        event.recipes.tfc.heating(knifeHeadItem, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                            .id(`tfc:heating/metal/${material.getName()}_knife_blade`)

                        // Крафт оголовья
                        event.recipes.tfc.anvil(knifeHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
                            .tier(tfcProperty.getTier())
                            .bonus(true)
                            .id(`tfc:anvil/${material.getName()}_knife_blade`)
    
                        // Металл + Форма -> Оголовье
                        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                            event.recipes.tfc.casting(knifeHeadItem, 'tfc:ceramic/knife_blade_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                                .id(`tfc:casting/${material.getName()}_knife_blade`)

                            event.recipes.create.filling(
                                Item.of('tfc:ceramic/knife_blade_mold', getFillingNBT(outputMaterial, 144)), 
                                [
                                    Fluid.of(outputMaterial.getFluid(), 144), 
                                    Item.of('tfc:ceramic/knife_blade_mold').strongNBT()
                                ]
                            ).id(`tfg:tfc/filling/${material.getName()}_knife_blade_mold`)
                        }

                        //#region Ножницы 
        
                        // Сварка оголовий
                        event.recipes.tfc.welding(`tfc:metal/shears/${material.getName()}`, knifeHeadItem, knifeHeadItem, tfcProperty.getTier())
                        .id(`tfc:welding/${material.getName()}_shears`)
        
                        // Декрафт инструмента в жидкость
                        event.recipes.tfc.heating(`tfc:metal/shears/${material.getName()}`, tfcProperty.getMeltTemp())
                            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                            .useDurability(true)
                            .id(`tfc:heating/metal/${material.getName()}_shears`)
        
                        //#endregion

                    }
        
                    //#endregion

                    //#region Проспектор
                    
                    // Декрафт инструмента в жидкость
                    event.recipes.tfc.heating(`tfc:metal/propick/${material.getName()}`, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                        .useDurability(true)
                        .id(`tfc:heating/metal/${material.getName()}_propick`)
        
                    // Декрафт оголовья в жидкость
                    event.recipes.tfc.heating(`tfc:metal/propick_head/${material.getName()}`, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                        .id(`tfc:heating/metal/${material.getName()}_propick_head`)

                    // Металл + Форма -> Оголовье
                    if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                        event.recipes.tfc.casting(`tfc:metal/propick_head/${material.getName()}`, 'tfc:ceramic/propick_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                            .id(`tfc:casting/${material.getName()}_propick_head`)

                        event.recipes.create.filling(
                            Item.of('tfc:ceramic/propick_head_mold', getFillingNBT(outputMaterial, 144)), 
                            [
                                Fluid.of(outputMaterial.getFluid(), 144), 
                                Item.of('tfc:ceramic/propick_head_mold').strongNBT()
                            ]
                        ).id(`tfg:tfc/filling/${material.getName()}_propick_head_mold`)
                    }
        
                    //#endregion

                    //#region Стамеска
                    
                    // Декрафт инструмента в жидкость
                    event.recipes.tfc.heating(`tfc:metal/chisel/${material.getName()}`, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                        .useDurability(true)
                        .id(`tfc:heating/metal/${material.getName()}_chisel`)
        
                    // Декрафт оголовья в жидкость
                    event.recipes.tfc.heating(`tfc:metal/chisel_head/${material.getName()}`, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                        .id(`tfc:heating/metal/${material.getName()}_chisel_head`)

                    // Металл + Форма -> Оголовье
                    if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                        event.recipes.tfc.casting(`tfc:metal/chisel_head/${material.getName()}`, 'tfc:ceramic/chisel_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                            .id(`tfc:casting/${material.getName()}_chisel_head`)

                        event.recipes.create.filling(
                            Item.of('tfc:ceramic/chisel_head_mold', getFillingNBT(outputMaterial, 144)), 
                            [
                                Fluid.of(outputMaterial.getFluid(), 144), 
                                Item.of('tfc:ceramic/chisel_head_mold').strongNBT()
                            ]
                        ).id(`tfg:tfc/filling/${material.getName()}_chisel_head_mold`)
                    }
        
                    //#endregion

                    //#region Копье
                    
                    // Декрафт инструмента в жидкость
                    event.recipes.tfc.heating(`tfc:metal/javelin/${material.getName()}`, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                        .useDurability(true)
                        .id(`tfc:heating/metal/${material.getName()}_javelin`)
        
                    // Декрафт оголовья в жидкость
                    event.recipes.tfc.heating(`tfc:metal/javelin_head/${material.getName()}`, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                        .id(`tfc:heating/metal/${material.getName()}_javelin_head`)

                    // Металл + Форма -> Оголовье
                    if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                        event.recipes.tfc.casting(`tfc:metal/javelin_head/${material.getName()}`, 'tfc:ceramic/javelin_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                            .id(`tfc:casting/${material.getName()}_javelin_head`)

                        event.recipes.create.filling(
                            Item.of('tfc:ceramic/javelin_head_mold', getFillingNBT(outputMaterial, 144)), 
                            [
                                Fluid.of(outputMaterial.getFluid(), 144), 
                                Item.of('tfc:ceramic/javelin_head_mold').strongNBT()
                            ]
                        ).id(`tfg:tfc/filling/${material.getName()}_javelin_head_mold`)
                    }
        
                    //#endregion
                }
                
            }

            // Blocks
            let blockItem = ChemicalHelper.get(TagPrefix.block, material, 1)
            if (!blockItem.isEmpty()) {
                
                // Декрафт блока в жидкость
                event.recipes.tfc.heating(`#forge:storage_blocks/${material.getName()}`, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 1296))
                    .id(`tfc:heating/metal/${material.getName()}_block`)
                
            }

            // Anvils, Lamps, Trapdors, Chains
            if (material.hasFlag(TFGMaterialFlags.HAS_TFC_UTILITY)) {
                
                // Декрафт незавершенной лампы в жидкость
                event.recipes.tfc.heating(`tfc:metal/unfinished_lamp/${material.getName()}`, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                    .id(`tfc:heating/metal/${material.getName()}_unfinished_lamp`)
    
                // Декрафт лампы в жидкость
                event.recipes.tfc.heating(`tfc:metal/lamp/${material.getName()}`, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                    .id(`tfc:heating/metal/${material.getName()}_lamp`)
    
                // Декрафт люка в жидкость
                event.recipes.tfc.heating(`tfc:metal/trapdoor/${material.getName()}`, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                    .id(`tfc:heating/metal/${material.getName()}_trapdoor`)
    
                // Люк
                event.recipes.tfc.anvil(`tfc:metal/trapdoor/${material.getName()}`, `gtceu:${material.getName()}_plate`, ['bend_last', 'draw_second_last', 'draw_third_last'])
                    .tier(tfcProperty.getTier())
                    .id(`tfc:anvil/${material.getName()}_trapdoor`)
    
                // Декрафт решетки в жидкость
                event.recipes.tfc.heating(`tfc:metal/bars/${material.getName()}`, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 18))
                    .id(`tfc:heating/metal/${material.getName()}_bars`)
    
                // 8x Решетка
                event.recipes.tfc.anvil(`8x tfc:metal/bars/${material.getName()}`, `gtceu:${material.getName()}_plate`, ['upset_last', 'punch_second_last', 'punch_third_last'])
                    .tier(tfcProperty.getTier())
                    .id(`tfc:anvil/${material.getName()}_bars`)
    
                // 16x Решетка
                event.recipes.tfc.anvil(`16x tfc:metal/bars/${material.getName()}`, `gtceu:double_${material.getName()}_plate`, ['upset_last', 'punch_second_last', 'punch_third_last'])
                    .tier(tfcProperty.getTier())
                    .id(`tfc:anvil/${material.getName()}_bars_double`)
    
                // Декрафт цепи в жидкость
                event.recipes.tfc.heating(`tfc:metal/chain/${material.getName()}`, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 9))
                    .id(`tfc:heating/metal/${material.getName()}_chain`)
    
                // Декрафт наковальни в жидкость
                event.recipes.tfc.heating(`tfc:metal/anvil/${material.getName()}`, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 2016))
                    .id(`tfc:heating/metal/${material.getName()}_anvil`)
            }

            //#region Щипцы
            let tongsStack = Item.of(`tfchotornot:tongs/${material.getName()}`)
            let tongPartStack = Item.of(`tfchotornot:tong_part/${material.getName()}`)

            if (!tongsStack.isEmpty() && !tongPartStack.isEmpty()) {
                // Ручка щипцов
                event.recipes.tfc.heating(tongPartStack, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                    .id(`tfchotornot:heating/tong_part/${material.getName()}`)
                
                // Щипцы
                event.recipes.tfc.heating(tongsStack, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                    .useDurability(true)
                    .id(`tfchotornot:heating/tongs/${material.getName()}`)
            }
            //#endregion
    
            // Small TFC Ores
            if (material.hasFlag(TFGMaterialFlags.HAS_SMALL_TFC_ORE)) {
                // Декрафт мелкого кусочка в жидкость
                event.recipes.tfc.heating(`tfc:ore/small_${material.getName()}`, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 16))
                    .id(`tfc:heating/ore/small_${material.getName()}`)
            }
    
            // Small Native TFC Ores
            if (material.hasFlag(TFGMaterialFlags.HAS_SMALL_NATIVE_TFC_ORE)) {
                // Декрафт мелкого кусочка в жидкость
                event.recipes.tfc.heating(`tfc:ore/small_native_${material.getName()}`, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), 16))
                    .id(`tfc:heating/ore/small_native_${material.getName()}`)
            }
    
            // Any Dusts from GTCEu
            if (material.hasProperty(PropertyKey.DUST)) {
                
                // Декрафт мелкой пыли
                let tinyDust = ChemicalHelper.get(TagPrefix.dustTiny, material, 1)
                if (!tinyDust.isEmpty()) {
                   
                    event.recipes.tfc.heating(tinyDust, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(16, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/tiny_dust/${material.getName()}`)
                    
                }
                
                // Декрафт средней пыли
                let smallDust = ChemicalHelper.get(TagPrefix.dustSmall, material, 1)
                if (!smallDust.isEmpty()) {
                   
                    event.recipes.tfc.heating(smallDust, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(36, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/small_dust/${material.getName()}`)
                    
                }
    
                // Декрафт пыли
                let dust = ChemicalHelper.get(TagPrefix.dust, material, 1)
                if (!dust.isEmpty()) {
                   
                    event.recipes.tfc.heating(dust, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(144, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/dust/${material.getName()}`)
                    
                }

                // Декрафт грязной пыли
                let impureDust = ChemicalHelper.get(TagPrefix.dustImpure, material, 1)
                if (!impureDust.isEmpty()) {
                   
                    event.recipes.tfc.heating(impureDust, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(80, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/impure_dust/${material.getName()}`)
                    
                }

                // Декрафт очищенной пыли
                let purifiedDust = ChemicalHelper.get(TagPrefix.dustPure, material, 1)
                if (!purifiedDust.isEmpty()) {
                   
                    event.recipes.tfc.heating(purifiedDust, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(120, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/purified_dust/${material.getName()}`)
                    
                }
            
            }
    
            // Any Ores from GTCEu
            if (material.hasProperty(PropertyKey.ORE)) {
                
                // Декрафт ломанной руды
                let crushedOre = ChemicalHelper.get(TagPrefix.crushed, material, 1)
                if (!crushedOre.isEmpty()) {
                   
                    event.recipes.tfc.heating(crushedOre, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(80, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/crushed_ore/${material.getName()}`)
                    
                }

                // Декрафт ломанной очищенной руды
                let crushedPurifiedOre = ChemicalHelper.get(TagPrefix.crushedPurified, material, 1)
                if (!crushedPurifiedOre.isEmpty()) {
                   
                    event.recipes.tfc.heating(crushedPurifiedOre, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(100, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/crushed_purified_ore/${material.getName()}`)
                    
                }

                // Декрафт центрифугированной ломанной руды
                let crushedRefinedOre = ChemicalHelper.get(TagPrefix.crushedRefined, material, 1)
                if (!crushedRefinedOre.isEmpty()) {
                   
                    event.recipes.tfc.heating(crushedRefinedOre, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(110, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/crushed_refined_ore/${material.getName()}`)
                    
                }

                // Декрафт богатого куска руды
                let richRawOre = ChemicalHelper.get(TFGTagPrefix.richRawOre, material, 1)
                if (!richRawOre.isEmpty()) {
                    
                    event.recipes.tfc.heating(richRawOre, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(48, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/rich_raw/${material.getName()}`)
                    
                }
                
                // Декрафт нормального куска руды
                let normalRawOre = ChemicalHelper.get(TagPrefix.rawOre, material, 1)
                if (!normalRawOre.isEmpty()) {
                    
                    event.recipes.tfc.heating(normalRawOre, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(36, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/raw/${material.getName()}`)
                    
                }
                
                // Декрафт бедного куска руды
                let poorRawOre = ChemicalHelper.get(TFGTagPrefix.poorRawOre, material, 1)
                if (!poorRawOre.isEmpty()) {
                    event.recipes.tfc.heating(poorRawOre, tfcProperty.getMeltTemp())
                        .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(24, tfcProperty.getPercentOfMaterial())))
                        .id(`tfg:heating/poor_raw/${material.getName()}`)
                }
            }

            // Nuggets
            let nuggetItem = ChemicalHelper.get(TagPrefix.nugget, material, 1)
            if (!nuggetItem.isEmpty()) {
                
                // Декрафт самородков пыли
                event.recipes.tfc.heating(nuggetItem, tfcProperty.getMeltTemp())
                    .resultFluid(Fluid.of(outputMaterial.getFluid(), global.calcAmountOfMetal(16, tfcProperty.getPercentOfMaterial())))
                    .id(`tfg:heating/nugget/${material.getName()}`)
                
            }
            
        }
    })


    //#region Рецепты для новых сплавов

    event.recipes.tfc.alloy('tfg:red_alloy', [
        TFC.alloyPart('tfg:redstone', 0.75, 0.85),
        TFC.alloyPart('tfc:copper', 0.15, 0.25)
    ]).id('tfg:alloy/red_alloy')

    event.recipes.tfc.alloy('tfg:tin_alloy', [
        TFC.alloyPart('tfc:tin', 0.45, 0.55),
        TFC.alloyPart('tfc:cast_iron', 0.45, 0.55)
    ]).id('tfg:alloy/tin_alloy')

    //#endregion

    //#region Удаление рецептов для предметов из Cast Iron

    // Блок
    event.remove({ id: `tfc:crafting/metal/block/cast_iron` })
    event.remove({ id: `tfc:heating/metal/cast_iron_block` })

    // Ступень
    event.remove({ id: `tfc:crafting/metal/block/cast_iron_stairs` })
    event.remove({ id: `tfc:heating/metal/cast_iron_block_stairs` })

    // Полублок
    event.remove({ id: `tfc:crafting/metal/block/cast_iron_slab` })
    event.remove({ id: `tfc:heating/metal/cast_iron_block_slab` })

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

    //#region Фикс рецептов колоколов

    //#region Из золота

    event.recipes.tfc.casting(`minecraft:bell`, 'tfc:ceramic/bell_mold', Fluid.of('gtceu:gold', 144), 1)
        .id(`tfc:casting/gold_bell`)

    event.recipes.tfc.heating(`minecraft:bell`, 1060)
        .resultFluid(Fluid.of('gtceu:gold', 144))
        .id(`tfc:heating/gold_bell`)

    event.recipes.create.filling(
        Item.of('tfc:ceramic/bell_mold', getFillingNBT(GTMaterials.Gold, 144)), 
        [
            Fluid.of(GTMaterials.Gold.getFluid(), 144), 
            Item.of('tfc:ceramic/bell_mold').strongNBT()
        ]
    ).id(`tfg:tfc/filling/${GTMaterials.Gold.getName()}_bell_mold`)

    //#endregion

    //#region Из латуни

    event.recipes.tfc.casting(`tfc:brass_bell`, 'tfc:ceramic/bell_mold', Fluid.of('gtceu:brass', 144), 1)
        .id(`tfc:casting/brass_bell`)

    event.recipes.tfc.heating(`tfc:brass_bell`, 930)
        .resultFluid(Fluid.of('gtceu:brass', 144))
        .id(`tfc:heating/brass_bell`)

    event.recipes.create.filling(
        Item.of('tfc:ceramic/bell_mold', getFillingNBT(GTMaterials.Brass, 144)), 
        [
            Fluid.of(GTMaterials.Brass.getFluid(), 144), 
            Item.of('tfc:ceramic/bell_mold').strongNBT()
        ]
    ).id(`tfg:tfc/filling/${GTMaterials.Brass.getName()}_bell_mold`)
    
    //#endregion

    //#region Из бронзы

    event.recipes.tfc.casting(`tfc:bronze_bell`, 'tfc:ceramic/bell_mold', Fluid.of('gtceu:bronze', 144), 1)
        .id(`tfc:casting/bronze_bell`)

    event.recipes.tfc.heating(`tfc:bronze_bell`, 930)
        .resultFluid(Fluid.of('gtceu:bronze', 144))
        .id(`tfc:heating/bronze_bell`)

    event.recipes.create.filling(
        Item.of('tfc:ceramic/bell_mold', getFillingNBT(GTMaterials.Bronze, 144)), 
        [
            Fluid.of(GTMaterials.Bronze.getFluid(), 144), 
            Item.of('tfc:ceramic/bell_mold').strongNBT()
        ]
    ).id(`tfg:tfc/filling/${GTMaterials.Bronze.getName()}_bell_mold`)

    //#endregion

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

    //#region Фикс рецептов металлических предметов

    // Рецепт Jacks
    event.recipes.tfc.welding('tfc:jacks', '#forge:rods/brass', '#forge:plates/brass', 2)
        .id(`tfc:welding/jacks`)
    
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
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id(`tfc:heating/raw_bloom`)

    // Декрафт укрепленной крицы в жидкость
    event.recipes.tfc.heating(`tfc:refined_iron_bloom`, 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id(`tfc:heating/refined_bloom`)

    // Гриль
    event.recipes.tfc.heating('tfc:wrought_iron_grill', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`tfc:heating/grill`)

    // Ванильная дверь декрафт
    event.recipes.tfc.heating('minecraft:iron_door', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
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
    event.recipes.tfc.bloomery('tfc:raw_iron_bloom', 'minecraft:charcoal', Fluid.of('gtceu:iron', 144), 15000)
        .id('tfc:bloomery/raw_iron_bloom')

    // Cast Iron -> Pig Iron
    event.recipes.tfc.blast_furnace(Fluid.of('tfg:pig_iron', 1), '#tfc:flux', Fluid.of('gtceu:iron', 1))
        .id('tfc:blast_furnace/pig_iron')

    //#endregion

    //#region metal bars
	
	const METAL_BARS = [
		"copper",
		"bronze",
		"black_bronze",
		"bismuth_bronze",
		"wrought_iron",
		"steel",
		"black_steel",
		"red_steel",
		"blue_steel"
	];
	
	METAL_BARS.forEach(metal => {
		 generateCutterRecipe(event, `gtceu:${metal}_plate`, 9, `8x tfc:metal/bars/${metal}`, 100, 16, `${metal}_plate_to_bars`)
	 });

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
    
        let stoneMaterial = TFGHelpers.getMaterial(stone);
        let stoneDust = ChemicalHelper.get(TagPrefix.dust, stoneMaterial, 1)
        let smallStoneDust = ChemicalHelper.get(TagPrefix.dustSmall, stoneMaterial, 1)

        // Кирпич (предмет)
        event.recipes.gtceu.assembler(`tfg:tfc/${stone}_loose_to_brick`)             
            .itemInputs(`tfc:rock/loose/${stone}`)
            .itemOutputs(`tfc:brick/${stone}`)
            .circuit(1)
            .duration(40)
            .EUt(8)

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

        generateCutterRecipe(event, `tfc:rock/raw/${stone}`, 0, [`tfc:rock/raw/${stone}_stairs`, stoneDust], 100, 8, `${stone}_raw_to_stairs`)

        // Сырой камень -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_raw_slab` })

        generateCutterRecipe(event, `tfc:rock/raw/${stone}`, 1, [`2x tfc:rock/raw/${stone}_slab`, stoneDust], 100, 8, `${stone}_raw_to_slab`)

        // Сырой камень -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_raw_wall` })

        generateCutterRecipe(event, `tfc:rock/raw/${stone}`, 2, [`tfc:rock/raw/${stone}_wall`, stoneDust], 100, 8, `${stone}_raw_to_wall`)

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
            .circuit(2)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`tfc:rock/cobble/${stone}`)
            .duration(50)
            .EUt(2)

        // Булыжник -> Ступени
        event.remove({ id: `tfc:crafting/rock/${stone}_cobble_stairs` })

        generateCutterRecipe(event, `tfc:rock/cobble/${stone}`, 0, [`tfc:rock/cobble/${stone}_stairs`, stoneDust], 100, 8, `${stone}_cobble_to_stairs`)

        // Булыжник -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_cobble_slab` })

        generateCutterRecipe(event, `tfc:rock/cobble/${stone}`, 1, [`2x tfc:rock/cobble/${stone}_slab`, stoneDust], 100, 8, `${stone}_cobble_to_slab`)

        // Булыжник -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_cobble_wall` })

        generateCutterRecipe(event, `tfc:rock/cobble/${stone}`, 2, [`tfc:rock/cobble/${stone}_wall`, stoneDust], 100, 8, `${stone}_cobble_to_wall`)

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

        generateCutterRecipe(event, `tfc:rock/smooth/${stone}`, 0, [`tfc:rock/smooth/${stone}_stairs`, stoneDust], 100, 8, `${stone}_smooth_to_stairs`)

        // Булыжник -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_smooth_slab` })

        generateCutterRecipe(event, `tfc:rock/smooth/${stone}`, 1, [`2x tfc:rock/smooth/${stone}_slab`, stoneDust], 100, 8, `${stone}_smooth_to_slab`)

        // Булыжник -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_smooth_wall` })

        generateCutterRecipe(event, `tfc:rock/smooth/${stone}`, 2, [`tfc:rock/smooth/${stone}_wall`, stoneDust], 100, 8, `${stone}_smooth_to_wall`)

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

        generateCutterRecipe(event, `tfc:rock/bricks/${stone}`, 0, [`tfc:rock/bricks/${stone}_stairs`, stoneDust], 100, 8, `${stone}_bricks_to_stairs`)

        // Блок кирпичей -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_bricks_slab` })

        generateCutterRecipe(event, `tfc:rock/bricks/${stone}`, 1, [`2x tfc:rock/bricks/${stone}_slab`, stoneDust], 100, 8, `${stone}_bricks_to_slab`)

        // Блок кирпичей -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_bricks_wall` })

        generateCutterRecipe(event, `tfc:rock/bricks/${stone}`, 2, [`tfc:rock/bricks/${stone}_wall`, stoneDust], 100, 8, `${stone}_bricks_to_wall`)

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

        generateCutterRecipe(event, `tfc:rock/cracked_bricks/${stone}`, 0, [`tfc:rock/cracked_bricks/${stone}_stairs`, stoneDust], 100, 8, `${stone}_cracked_bricks_to_stairs`)

        // Потрескавшийся кирпич -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_slab` })

        generateCutterRecipe(event, `tfc:rock/cracked_bricks/${stone}`, 1, [`2x tfc:rock/cracked_bricks/${stone}_slab`, stoneDust], 100, 8, `${stone}_cracked_bricks_to_slab`)

        // Потрескавшийся кирпич -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_wall` })

        generateCutterRecipe(event, `tfc:rock/cracked_bricks/${stone}`, 2, [`tfc:rock/cracked_bricks/${stone}_wall`, stoneDust], 100, 8, `${stone}_cracked_bricks_to_wall`)

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

        generateCutterRecipe(event, `tfc:rock/mossy_cobble/${stone}`, 0, [`tfc:rock/mossy_cobble/${stone}_stairs`, stoneDust], 100, 8, `${stone}_mossy_cobble_to_stairs`)

        //Замшелый булыжник -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_slab` })

        generateCutterRecipe(event, `tfc:rock/mossy_cobble/${stone}`, 1, [`2x tfc:rock/mossy_cobble/${stone}_slab`, stoneDust], 100, 8, `${stone}_mossy_cobble_to_slab`)

        // Замшелый булыжник -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_wall` })

        generateCutterRecipe(event, `tfc:rock/mossy_cobble/${stone}`, 2, [`tfc:rock/mossy_cobble/${stone}_wall`, stoneDust], 100, 8, `${stone}_mossy_cobble_to_wall`)

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

        generateCutterRecipe(event, `tfc:rock/mossy_bricks/${stone}`, 0, [`tfc:rock/mossy_bricks/${stone}_stairs`, stoneDust], 100, 8, `${stone}_mossy_bricks_to_stairs`)

        //Замшелый булыжник -> Плиты
        event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_slab` })

        generateCutterRecipe(event, `tfc:rock/mossy_bricks/${stone}`, 1, [`2x tfc:rock/mossy_bricks/${stone}_slab`, stoneDust], 100, 8, `${stone}_mossy_bricks_to_slab`)

        // Замшелый булыжник -> Стена
        event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_wall` })

        generateCutterRecipe(event, `tfc:rock/mossy_bricks/${stone}`, 2, [`tfc:rock/mossy_bricks/${stone}_wall`, stoneDust], 100, 8, `${stone}_mossy_bricks_to_wall`)

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
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Булыжник
        event.recipes.gtceu.macerator(`cobble_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Гладкий
        event.recipes.gtceu.macerator(`smooth_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Кирпичи
        event.recipes.gtceu.macerator(`bricks_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        event.recipes.gtceu.macerator(`cracked_bricks_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        event.recipes.gtceu.macerator(`mossy_cobble_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        event.recipes.gtceu.macerator(`mossy_bricks_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        //#endregion
        
        //#region Ступень
        
        // Сырой
        event.recipes.gtceu.macerator(`raw_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Булыжник
        event.recipes.gtceu.macerator(`cobble_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Гладкий
        event.recipes.gtceu.macerator(`smooth_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Кирпичи
        event.recipes.gtceu.macerator(`bricks_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        event.recipes.gtceu.macerator(`cracked_bricks_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        event.recipes.gtceu.macerator(`mossy_cobble_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        event.recipes.gtceu.macerator(`mossy_bricks_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        //#endregion

        //#region Плита

        // Сырой
        event.recipes.gtceu.macerator(`raw_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Булыжник
        event.recipes.gtceu.macerator(`cobble_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Гладкий
        event.recipes.gtceu.macerator(`smooth_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Кирпичи
        event.recipes.gtceu.macerator(`bricks_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        event.recipes.gtceu.macerator(`cracked_bricks_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        event.recipes.gtceu.macerator(`mossy_cobble_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        event.recipes.gtceu.macerator(`mossy_bricks_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        //#endregion
        
        //#region Стена

        // Сырой
        event.recipes.gtceu.macerator(`raw_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Булыжник
        event.recipes.gtceu.macerator(`cobble_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Гладкий
        event.recipes.gtceu.macerator(`smooth_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Кирпичи
        event.recipes.gtceu.macerator(`bricks_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        event.recipes.gtceu.macerator(`cracked_bricks_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        event.recipes.gtceu.macerator(`mossy_cobble_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        event.recipes.gtceu.macerator(`mossy_bricks_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        //#endregion

        // Резной кирпич
        event.recipes.gtceu.macerator(`chiseled_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/chiseled/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Укрепленный
        event.recipes.gtceu.macerator(`hardened_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/hardened/${stone}`)
            .itemOutputs(stoneDust.withCount(2))
            .duration(8)
            .EUt(150)

        //#endregion
    })

    //#endregion

    //#region Песок

    // Песок душ -> Желтый песок
    // TODO: Включить после добавления ада
    /*
    event.recipes.gtceu.centrifuge('soul_sand_separation')             
        .itemInputs('minecraft:soul_sand')
        .chancedOutput('tfc:sand/yellow', 9000, 130)
        .chancedOutput('gtceu:small_saltpeter_dust', 8000, 480)
        .chancedOutput('gtceu:tiny_coal_dust', 2000, 340)
        .outputFluids(Fluid.of('gtceu:oil', 80))
        .duration(200)
        .EUt(80)*/

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
        .chancedOutput('gtceu:tiny_clay_dust', 4000, 900)
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
        event.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_stairs` })

        event.stonecutting(`tfc:raw_sandstone/${sandColor}_stairs`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_sandstone_to_stairs`)

        generateCutterRecipe(event, `tfc:raw_sandstone/${sandColor}`, 0, `tfc:raw_sandstone/${sandColor}_stairs`, 100, 8, `${sandColor}_sandstone_to_stairs`)

        // Песчанник -> Плита
        event.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_slab` })

        event.stonecutting(`2x tfc:raw_sandstone/${sandColor}_slab`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_sandstone_to_slabs`)

        generateCutterRecipe(event, `tfc:raw_sandstone/${sandColor}`, 1, `2x tfc:raw_sandstone/${sandColor}_slab`, 100, 8, `${sandColor}_sandstone_to_slab`)

        // Песчанник -> Стена
        event.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_wall` })

        event.stonecutting(`tfc:raw_sandstone/${sandColor}_wall`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_sandstone_to_wall`)

        generateCutterRecipe(event, `tfc:raw_sandstone/${sandColor}`, 2, `tfc:raw_sandstone/${sandColor}_wall`, 100, 8, `${sandColor}_sandstone_to_wall`)

        // Гладкий песчанник -> Ступень
        event.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_stairs` })

        event.stonecutting(`tfc:smooth_sandstone/${sandColor}_stairs`, `tfc:smooth_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_stairs`)

        generateCutterRecipe(event, `tfc:smooth_sandstone/${sandColor}`, 0, `tfc:smooth_sandstone/${sandColor}_stairs`, 100, 8, `${sandColor}_smooth_sandstone_to_stairs`)

        // Гладкий песчанник -> Плита
        event.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_slab` })

        event.stonecutting(`2x tfc:smooth_sandstone/${sandColor}_slab`, `tfc:smooth_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_slab`)

        generateCutterRecipe(event, `tfc:smooth_sandstone/${sandColor}`, 1, `2x tfc:smooth_sandstone/${sandColor}_slab`, 100, 8, `${sandColor}_smooth_sandstone_to_slab`)

        // Гладкий песчанник -> Стена
        event.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_wall` })

        event.stonecutting(`tfc:smooth_sandstone/${sandColor}_wall`, `tfc:smooth_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_wall`)

        generateCutterRecipe(event, `tfc:smooth_sandstone/${sandColor}`, 2, `tfc:smooth_sandstone/${sandColor}_wall`, 100, 8, `${sandColor}_smooth_sandstone_to_wall`)

        // Обрезанный песчанник -> Ступень
        event.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_stairs` })

        event.stonecutting(`tfc:cut_sandstone/${sandColor}_stairs`, `tfc:cut_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_stairs`)

        generateCutterRecipe(event, `tfc:cut_sandstone/${sandColor}`, 0, `tfc:cut_sandstone/${sandColor}_stairs`, 100, 8, `${sandColor}_cut_sandstone_to_stairs`)

        // Обрезанный песчанник -> Плита
        event.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_slab` })

        event.stonecutting(`2x tfc:cut_sandstone/${sandColor}_slab`, `tfc:cut_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_slab`)

        generateCutterRecipe(event, `tfc:cut_sandstone/${sandColor}`, 1, `2x tfc:cut_sandstone/${sandColor}_slab`, 100, 8, `${sandColor}_cut_sandstone_to_slab`)

        // Обрезанный песчанник -> Стена
        event.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_wall` })

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
    
    // Какие то рецепты дерева
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

    //#region Рецепты зерен

    global.TFC_QUERN_GRAIN_RECIPE_COMPONENTS.forEach(element => {
        
        event.recipes.gtceu.macerator(`tfg:${element.name}`)             
            .itemInputs(element.input)
            .itemOutputs(element.output)
            .chancedOutput('tfc:straw', 7000, 500)
            .duration(200)
            .EUt(16)

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
        .itemInputs('#tfg:colorized_fired_large_vessels')
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

    // Растения
    Ingredient.of('#tfc:plants').stacks.forEach(element => {
        const itemId = element.id;
        const recipeId = `greenhouse_${itemId.replace(':', '_')}`;
    
        generateGreenHouseRecipe(event, itemId, 8000, `8x ${itemId}`, recipeId);
    });

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

    //#region Молды в ассемблере

    for (let i = 0; i < global.TFC_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS.length; i++) {
        
        let element = global.TFC_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS[i];

        event.recipes.gtceu.assembler(`tfg:tfc/${element.name}`)             
            .itemInputs(element.input)
            .circuit(i)
            .itemOutputs(element.output)
            .duration(450)
            .EUt(2)
    }


    //#endregion

    //#region Стеклянные смеси в бутылки в ассемблере

    global.TFC_BATCH_TO_BOTTLE_ASSEMBLING_RECIPE_COMPONENTS.forEach(element => {
        event.recipes.gtceu.alloy_smelter(`tfg:tfc/${element.name}`)             
            .itemInputs(element.input)
            .notConsumable('gtceu:bottle_casting_mold')
            .itemOutputs(element.output)
            .duration(100)
            .EUt(2)
    })

    //#endregion

    //#region СЫЫЫР 0_0

    // Rennet
    event.recipes.gtceu.fermenter('tfg:fermenter/vegetable_rennet')
        .itemInputs('#tfg:ferments_to_rennet')
        .itemOutputs('firmalife:rennet')
        .duration(400)
        .EUt(16)

    event.recipes.gtceu.fermenter('tfg:fermenter/biomass_rennet')
        .inputFluids(Fluid.of('gtceu:fermented_biomass', 100))
        .itemOutputs('firmalife:rennet')
        .duration(2400)
        .EUt(16)

    // Curdled milk
    event.recipes.gtceu.fermenter('tfg:fermenter/curdled_milk')
        .inputFluids(Fluid.of('minecraft:milk', 1000))
        .itemInputs('firmalife:rennet')
        .outputFluids(Fluid.of('tfc:curdled_milk'))
        .duration(2400)
        .EUt(16)
    
    event.recipes.gtceu.fermenter('tfg:fermenter/curdled_yak_milk')
        .inputFluids(Fluid.of('firmalife:yak_milk', 1000))
        .itemInputs('firmalife:rennet')
        .outputFluids(Fluid.of('firmalife:curdled_yak_milk'))
        .duration(2400)
        .EUt(16)
    
    event.recipes.gtceu.fermenter('tfg:fermenter/curdled_goat_milk')
        .inputFluids(Fluid.of('firmalife:goat_milk', 1000))
        .itemInputs('firmalife:rennet')
        .outputFluids(Fluid.of('firmalife:curdled_goat_milk'))
        .duration(2400)
        .EUt(16)

    //Curds
    event.recipes.gtceu.fermenter('tfg:fermenter/milk_curd')
        .inputFluids(Fluid.of('tfc:curdled_milk', 1000))
        .itemOutputs('firmalife:food/milk_curd')
        .duration(1200)
        .EUt(16)

    event.recipes.gtceu.fermenter('tfg:fermenter/yak_curd')
        .inputFluids(Fluid.of('firmalife:curdled_yak_milk', 1000))
        .itemOutputs('firmalife:food/yak_curd')
        .duration(1200)
        .EUt(16)
    
    event.recipes.gtceu.fermenter('tfg:fermenter/goat_curd')
        .inputFluids(Fluid.of('firmalife:curdled_goat_milk', 1000))
        .itemOutputs('firmalife:food/goat_curd')
        .duration(1200)
        .EUt(16)

    // Cheese wheels
    event.recipes.gtceu.fermenter('tfg:fermenter/gouda_wheel')
        .inputFluids(Fluid.of('tfc:salt_water', 750))
        .itemInputs('3x firmalife:food/milk_curd')
        .itemOutputs('firmalife:gouda_wheel')
        .duration(12000)
        .EUt(24)
    
    event.recipes.gtceu.fermenter('tfg:fermenter/shosha_wheel')
        .inputFluids(Fluid.of('tfc:salt_water', 750))
        .itemInputs('3x firmalife:food/yak_curd')
        .itemOutputs('firmalife:shosha_wheel')
        .duration(12000)
        .EUt(24)
    
    event.recipes.gtceu.fermenter('tfg:fermenter/feta_wheel')
        .inputFluids(Fluid.of('tfc:salt_water', 750))
        .itemInputs('3x firmalife:food/goat_curd')
        .itemOutputs('firmalife:feta_wheel')
        .duration(12000)
        .EUt(24)

    // Cutting
    event.recipes.gtceu.cutter('tfg:cutter/gouda')
        .itemInputs('firmalife:gouda_wheel')
        .itemOutputs('4x firmalife:food/gouda')
        .duration(40)
        .EUt(28)

    event.recipes.gtceu.cutter('tfg:cutter/shosha')
        .itemInputs('firmalife:shosha_wheel')
        .itemOutputs('4x firmalife:food/shosha')
        .duration(40)
        .EUt(28)
    
    event.recipes.gtceu.cutter('tfg:cutter/feta')
        .itemInputs('firmalife:feta_wheel')
        .itemOutputs('4x firmalife:food/feta')
        .duration(40)
        .EUt(28)
    
    event.recipes.gtceu.cutter('tfg:cutter/cheddar')
        .itemInputs('firmalife:cheddar_wheel')
        .itemOutputs('4x firmalife:food/cheddar')
        .duration(40)
        .EUt(28)

    event.recipes.gtceu.cutter('tfg:cutter/chevre')
        .itemInputs('firmalife:chevre_wheel')
        .itemOutputs('4x firmalife:food/chevre')
        .duration(40)
        .EUt(28)

    event.recipes.gtceu.cutter('tfg:cutter/rajya_metok')
        .itemInputs('firmalife:rajya_metok_wheel')
        .itemOutputs('4x firmalife:food/rajya_metok')
        .duration(40)
        .EUt(28)

    // Misc
    global.TFC_MILKS.forEach(milk => {
        event.recipes.gtceu.fermenter(`tfg:fermenter/cream_from_${milk.id.replace(':', '_')}`)
            .inputFluids(Fluid.of(milk.id, 1000))
            .outputFluids(Fluid.of('firmalife:cream'))
            .duration(1200)
            .EUt(24)
    })

    event.recipes.gtceu.mixer('tfg:mixer/tomato_sauce')
        .itemInputs('firmalife:food/tomato_sauce_mix')
        .inputFluids(Fluid.of('minecraft:water', 200))
        .itemOutputs('firmalife:food/tomato_sauce')
        .duration(200)
        .EUt(24)

    
    //endregion

    //#region Оливки

    event.recipes.gtceu.macerator(`tfg:tfc/olive_paste`)             
            .itemInputs('tfc:food/olive')
            .itemOutputs('2x tfc:olive_paste')
            .duration(60)
            .EUt(2)

    event.recipes.createMilling('2x tfc:olive_paste', 'tfc:food/olive')
        .id(`tfg:milling/tfc/olive_paste`)

    event.recipes.gtceu.mixer('tfg:tfc/olive_oil_water')
        .inputFluids(Fluid.of('water', 200))
        .itemInputs('2x tfc:olive_paste')
        .outputFluids(Fluid.of('tfc:olive_oil_water', 200))
        .duration(200)
        .EUt(28)

    event.recipes.gtceu.distillery('tfg:tfc/olive_oil')
        .inputFluids(Fluid.of('tfc:olive_oil_water', 250))
        .outputFluids(Fluid.of('tfc:olive_oil', 50))
        .duration(600)
        .EUt(28)
    
    //#endregion
    
    //#region Рецепты бочки в миксере
    // А где?
    //#endregion

    // Бумага
    event.recipes.gtceu.cutter('tfg:unrefined_paper')
        .itemInputs('tfc:unrefined_paper')
        .itemOutputs('minecraft:paper')
        .duration(100)
        .EUt(16)

    // Limewater
    event.recipes.gtceu.mixer('tfg:limewater_from_lime')
        .itemInputs('tfc:powder/lime')
        .inputFluids(Fluid.of('water', 500))
        .outputFluids(Fluid.of('tfc:limewater', 500))
        .duration(20)
        .EUt(16)

    event.recipes.gtceu.mixer('tfg:limewater_from_flux')
        .itemInputs('tfc:powder/flux')
        .inputFluids(Fluid.of('water', 500))
        .outputFluids(Fluid.of('tfc:limewater', 500))
        .duration(20)
        .EUt(16)
    
    // Tannin
    event.recipes.gtceu.chemical_bath('tfg:tannin')
        .itemInputs('#tfc:makes_tannin')
        .inputFluids(Fluid.of('water', 1000))
        .outputFluids(Fluid.of('tfc:tannin', 1000))
        .duration(2400)
        .EUt(16)
    
    // Soaked hides
    event.recipes.gtceu.chemical_bath('tfg:small_soaked_hide')
        .itemInputs('tfc:small_raw_hide')
        .inputFluids(Fluid.of('tfc:limewater', 300))
        .itemOutputs('tfc:small_soaked_hide')
        .duration(1600)
        .EUt(16)
    
    event.recipes.gtceu.chemical_bath('tfg:medium_soaked_hide')
        .itemInputs('tfc:medium_raw_hide')
        .inputFluids(Fluid.of('tfc:limewater', 400))
        .itemOutputs('tfc:medium_soaked_hide')
        .duration(2400)
        .EUt(16)

    event.recipes.gtceu.chemical_bath('tfg:large_soaked_hide')
        .itemInputs('tfc:large_raw_hide')
        .inputFluids(Fluid.of('tfc:limewater', 500))
        .itemOutputs('tfc:large_soaked_hide')
        .duration(3200)
        .EUt(16)

    // Scraped Hides
    event.recipes.gtceu.cutter('tfg:small_scraped_hide')
        .itemInputs('tfc:small_soaked_hide')
        .itemOutputs('tfc:small_scraped_hide')
        .duration(100)
        .EUt(16)

    event.recipes.gtceu.cutter('tfg:medium_scraped_hide')
        .itemInputs('tfc:medium_soaked_hide')
        .itemOutputs('tfc:medium_scraped_hide')
        .duration(100)
        .EUt(16)

    event.recipes.gtceu.cutter('tfg:large_scraped_hide')
        .itemInputs('tfc:large_soaked_hide')
        .itemOutputs('tfc:large_scraped_hide')
        .duration(100)
        .EUt(16)
    
    // Prepared hides
    event.recipes.gtceu.chemical_bath('tfg:small_prepared_hide')
        .itemInputs('tfc:small_soaked_hide')
        .inputFluids(Fluid.of('water', 300))
        .itemOutputs('tfc:small_prepared_hide')
        .duration(1600)
        .EUt(16)

    event.recipes.gtceu.chemical_bath('tfg:medium_prepared_hide')
        .itemInputs('tfc:medium_soaked_hide')
        .inputFluids(Fluid.of('water', 400))
        .itemOutputs('tfc:medium_prepared_hide')
        .duration(2400)
        .EUt(16)

    event.recipes.gtceu.chemical_bath('tfg:large_prepared_hide')
        .itemInputs('tfc:large_soaked_hide')
        .inputFluids(Fluid.of('water', 500))
        .itemOutputs('tfc:large_prepared_hide')
        .duration(3200)
        .EUt(16)
    
    // Leather
    event.recipes.gtceu.chemical_bath('tfg:small_leather')
        .itemInputs('tfc:small_prepared_hide')
        .inputFluids(Fluid.of('tfc:tannin', 300))
        .itemOutputs('minecraft:leather')
        .duration(1600)
        .EUt(16)

    event.recipes.gtceu.chemical_bath('tfg:medium_leather')
        .itemInputs('tfc:medium_prepared_hide')
        .inputFluids(Fluid.of('tfc:tannin', 400))
        .itemOutputs('2x minecraft:leather')
        .duration(2400)
        .EUt(16)

    event.recipes.gtceu.chemical_bath('tfg:large_leather')
        .itemInputs('tfc:large_prepared_hide')
        .inputFluids(Fluid.of('tfc:tannin', 500))
        .itemOutputs('3x minecraft:leather')
        .duration(3200)
        .EUt(16)

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

    // Lime
    event.smelting('tfc:powder/lime', 'tfc:powder/flux')
        .id('tfg:smelting/lime')

    // Kaolinite Clay
    event.smelting('tfc:kaolin_clay', 'tfc:powder/kaolinite')
        .id('tfg:smelting/kaolinite_clay')

    // Fire Brick
    event.smelting('tfc:ceramic/fire_brick', 'gtceu:compressed_fireclay')
        .id('tfg:smelting/fireclay_brick')

    // Выпаривание соли
    event.recipes.tfc.pot([], Fluid.of('tfc:salt_water', 625), 300, 1000)
        .itemOutput('gtceu:small_salt_dust')
        .id('tfg:tfc/pot/salt')

    // Salt Water
    generateMixerRecipe(
        event, 
        ['#forge:dusts/salt'], 
        Fluid.of('minecraft:water', 1000),
        [],
        null,
        Fluid.of('tfc:salt_water', 1000),
        40,
        7,
        64,
        'tfg:tfc/salt_water'
    )

    // Lamp Glass
    event.recipes.gtceu.alloy_smelter(`tfg:tfc/lamp_glass`)             
        .itemInputs('#tfc:glass_batches')
        .notConsumable('#tfg:unfinished_lamps')
        .itemOutputs('tfc:lamp_glass')
        .duration(100)
        .EUt(2)

    // Glass lens
    event.recipes.gtceu.alloy_smelter(`tfg:tfc/glass_lens`)             
        .itemInputs('tfc:silica_glass_batch')
        .notConsumable('#forge:lenses')
        .itemOutputs('tfc:lens')
        .duration(100)
        .EUt(2)

    // Empty Jar
    event.recipes.gtceu.assembler(`tfg:tfc/glass_jar`)             
        .itemInputs('#tfc:glass_batches_tier_2')
        .circuit(2)
        .itemOutputs('tfc:empty_jar')
        .duration(100)
        .EUt(2)

    // Wool Yarn
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

    // Brass Mechanism
    event.recipes.gtceu.assembler('tfg:tfc/brass_mechanism')             
        .itemInputs('#forge:plates/brass')
        .circuit(10)
        .itemOutputs('2x tfc:brass_mechanisms')
        .duration(100)
        .EUt(4)

    // 1x Small SheepSkin -> 1x Wool
    event.recipes.gtceu.assembler('tfg:tfc/wool_1')             
        .itemInputs('tfc:small_sheepskin_hide')
        .itemOutputs('tfc:wool')
        .duration(100)
        .EUt(4)

    // 1x Medium SheepSkin -> 1x Wool
    event.recipes.gtceu.assembler('tfg:tfc/wool_2')             
        .itemInputs('tfc:medium_sheepskin_hide')
        .itemOutputs('2x tfc:wool')
        .duration(100)
        .EUt(4)

    // 1x Large SheepSkin -> 1x Wool
    event.recipes.gtceu.assembler('tfg:tfc/wool_3')             
        .itemInputs('tfc:large_sheepskin_hide')
        .itemOutputs('3x tfc:wool')
        .duration(100)
        .EUt(4)

    // Wool Yarn
    event.recipes.gtceu.wiremill('tfg:tfc/wool_yarn')             
        .itemInputs('tfc:wool')
        .itemOutputs('8x tfc:wool_yarn')
        .duration(100)
        .EUt(4)

    // Burlap Cloth
    event.recipes.gtceu.assembler('tfg:tfc/burlap_cloth')             
        .itemInputs('12x tfc:jute_fiber')
        .itemOutputs('tfc:burlap_cloth')
        .duration(100)
        .EUt(4)

    // Silk Cloth
    event.recipes.gtceu.assembler('tfg:tfc/silk_cloth')             
        .itemInputs('24x minecraft:string')
        .itemOutputs('tfc:silk_cloth')
        .duration(100)
        .EUt(4)

    // Silk Cloth
    event.recipes.gtceu.assembler('tfg:tfc/wool_cloth')             
        .itemInputs('16x tfc:wool_yarn')
        .itemOutputs('tfc:wool_cloth')
        .duration(100)
        .EUt(4)

    // Jute Fiber
    generateMixerRecipe(event, 'tfc:jute', Fluid.of('minecraft:water', 200), 'tfc:jute_fiber', null, [], 100, 4, 16, 'tfg:tfc/jute_fiber')

    // Soda Ash
    event.smelting('3x tfc:powder/soda_ash', 'tfc:food/dried_seaweed').id('tfg:smelting/dried_seaweed_to_soda')
    event.smelting('3x tfc:powder/soda_ash', 'tfc:food/dried_kelp').id('tfg:smelting/dried_kelp_to_soda')

    //#region Обрушения

    event.recipes.tfc.collapse('#tfg:rock_slabs').id('tfg:collapse/rock_slabs')
    event.recipes.tfc.collapse('#tfg:rock_stairs').id('tfg:collapse/rock_stairs')
    event.recipes.tfc.collapse('#tfg:rock_walls').id('tfg:collapse/rock_walls')

    global.TFC_STONE_TYPES.forEach(stoneType => {
        event.custom({
            type: "tfc:collapse",
            ingredient: {
                tag: `forge:ores_in_ground/${stoneType}`
            },
            result: `tfc:rock/cobble/${stoneType}`
        }).id(`tfg:collapse/${stoneType}_gt_ores`)
    })
    
    //#endregion
    
    //#region Выход: Свечи

    event.recipes.gtceu.chemical_bath(`tfg:tfc/candle_decolor`)             
        .itemInputs('#tfc:colored_candles')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 72))
        .itemOutputs('tfc:candle')
        .duration(300)
        .EUt(4)

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        
        event.recipes.gtceu.chemical_bath(`tfg:tfc/${dye}_candle`)             
            .itemInputs('tfc:candle')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 36))
            .itemOutputs(`tfc:candle/${dye}`)
            .duration(300)
            .EUt(4)

    })

    //#endregion

    //#region Алебастр

    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless('4x tfc:alabaster_brick', ['#forge:raw_materials/gypsum', '#tfc:chisels']))
        .id('tfc:crafting/alabaster_brick/raw_gypsum')
        
    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless('2x tfc:alabaster_brick', ['#forge:poor_raw_materials/gypsum', '#tfc:chisels']))
        .id('tfc:crafting/alabaster_brick/poor_raw_gypsum')

    event.recipes.tfc.damage_inputs_shapeless_crafting(event.recipes.minecraft.crafting_shapeless('6x tfc:alabaster_brick', ['#forge:rich_raw_materials/gypsum', '#tfc:chisels']))
        .id('tfc:crafting/alabaster_brick/rich_raw_gypsum')

    // Alabaster Brick
    event.recipes.gtceu.assembler('tfc:alabaster/bricks')             
        .itemInputs('5x tfc:alabaster_brick')
        .inputFluids(Fluid.of('gtceu:concrete', 72))
        .itemOutputs('4x tfc:alabaster/bricks')
        .duration(50)
        .EUt(2)

    event.recipes.gtceu.chemical_bath('tfc:alabaster/bricks')             
        .itemInputs('#tfc:colored_bricks_alabaster')
        .inputFluids(Fluid.of('gtceu:chlorine', 72))
        .itemOutputs('tfc:alabaster/bricks')
        .duration(400)
        .EUt(2)
    
    for (let i = 0; i < 16; i++) {
        event.recipes.gtceu.chemical_bath(`tfg:tfc/alabaster/bricks/${global.MINECRAFT_DYE_NAMES[i]}`)             
            .itemInputs('tfc:alabaster/bricks')
            .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
            .itemOutputs(`tfc:alabaster/bricks/${global.MINECRAFT_DYE_NAMES[i]}`)
            .duration(20)
            .EUt(7)
    }
    
    // Raw Alabaster
    event.recipes.gtceu.chemical_bath('tfc:alabaster/raw/poor_raw_gypsum')             
        .itemInputs('gtceu:poor_raw_gypsum')
        .inputFluids(Fluid.of('tfc:limewater', 50))
        .itemOutputs('tfc:alabaster/raw')
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.chemical_bath('tfc:alabaster/raw/raw_gypsum')             
        .itemInputs('gtceu:raw_gypsum')
        .inputFluids(Fluid.of('tfc:limewater', 100))
        .itemOutputs('2x tfc:alabaster/raw')
        .duration(400)
        .EUt(2) 
    
    event.recipes.gtceu.chemical_bath('tfc:alabaster/raw/rich_raw_gypsum')             
        .itemInputs('gtceu:rich_raw_gypsum')
        .inputFluids(Fluid.of('tfc:limewater', 150))
        .itemOutputs('3x tfc:alabaster/raw')
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.chemical_bath('tfc:alabaster/raw')             
        .itemInputs('#tfc:colored_bricks_alabaster')
        .inputFluids(Fluid.of('gtceu:chlorine', 72))
        .itemOutputs('tfc:alabaster/raw')
        .duration(400)
        .EUt(2)
    
    for (let i = 0; i < 16; i++) {
    event.recipes.gtceu.chemical_bath(`tfg:tfc/alabaster/raw/${global.MINECRAFT_DYE_NAMES[i]}`)             
        .itemInputs('tfc:alabaster/raw')
        .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
        .itemOutputs(`tfc:alabaster/raw/${global.MINECRAFT_DYE_NAMES[i]}`)
        .duration(20)
        .EUt(7)
    }
    
    //#endregion
}
