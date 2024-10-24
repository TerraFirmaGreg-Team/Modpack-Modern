// priority: 0

const registerTFCRecipes = (e) => {

    //#region Удаляем рецепты для бедных, нормальной и богатых кусков руды
    e.remove({ id: /tfc:heating\/ore\/poor_*/ })
    e.remove({ id: /tfc:heating\/ore\/normal_*/ })
    e.remove({ id: /tfc:heating\/ore\/rich_*/ })
    //#endregion
    
    //#region Крафты и раскрафты металлических предметов
    const getFluidTankAsNBT = (material, amount) => {
        return {
            tank: {
                FluidName: Fluid.of(material.getFluid()).getId(),
                Amount: amount
            }
        }
    }

    const calcAmountOfMetal = (defaultAmount, percents) => {
        const value = defaultAmount / (100 / percents)
        return (value % 2 == 0) ? value : Math.round(value) - 1
    }

    const processNuggets = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const nuggetItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (nuggetItem.isEmpty()) return
        
        e.recipes.tfc.heating(nuggetItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(16, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/nugget/${material.getName()}`)
    }

    const processIngot = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (ingotItem.isEmpty()) return

        // Декрафт слитка в жидкость
        e.recipes.tfc.heating(ingotItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_ingot`)

        if (material == GTMaterials.WroughtIron) return

        // Отливка слитка в обычной форме
        e.recipes.tfc.casting(ingotItem, 'tfc:ceramic/ingot_mold', Fluid.of(outputMaterial.getFluid(), 144), 0.1)
            .id(`tfc:casting/${material.getName()}_ingot`)

        // Отливка слитка в огнеупорной форме
        e.recipes.tfc.casting(ingotItem, 'tfc:ceramic/fire_ingot_mold', Fluid.of(outputMaterial.getFluid(), 144), 0.01)
            .id(`tfc:casting/${material.getName()}_fire_ingot`)

        e.recipes.create.filling(
            Item.of('tfc:ceramic/ingot_mold', getFluidTankAsNBT(outputMaterial, 144)), 
            [
                Fluid.of(outputMaterial.getFluid(), 144), 
                Item.of('tfc:ceramic/ingot_mold').strongNBT()
            ]
        ).id(`tfg:tfc/filling/${material.getName()}_ingot`)

        e.recipes.create.filling(
            Item.of('tfc:ceramic/fire_ingot_mold', getFluidTankAsNBT(outputMaterial, 144)), 
            [
                Fluid.of(outputMaterial.getFluid(), 144), 
                Item.of('tfc:ceramic/fire_ingot_mold').strongNBT()
            ]
        ).id(`tfg:tfc/filling/${material.getName()}_fire_ingot`)
    }

    const processDoubleIngot = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const doubleIngotItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (doubleIngotItem.isEmpty()) return
        
        // Декрафт двойного слитка в жидкость
        e.recipes.tfc.heating(doubleIngotItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
            .id(`tfc:heating/metal/${material.getName()}_double_ingot`)

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return

        // 2 слитка -> Двойной слиток
        e.recipes.tfc.welding(doubleIngotItem, ingotItem, ingotItem, tfcProperty.getTier() - 1)
            .id(`tfc:welding/${material.getName()}_double_ingot`)

        // Рецепт через бендер
        e.recipes.gtceu.bender(`tfg:${material.getName()}_double_ingot`)             
            .itemInputs(ingotItem.copyWithCount(2))
            .circuit(6)
            .itemOutputs(doubleIngotItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass())
    }

    const processPlate = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const plateItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (plateItem.isEmpty()) return
       
        // Декрафт пластины в жидкость
        e.recipes.tfc.heating(plateItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_sheet`)

        const doubleIngotItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1)
        if (doubleIngotItem.isEmpty()) return

        // Двойной слиток -> Пластина
        e.recipes.tfc.anvil(plateItem, doubleIngotItem, ['hit_last', 'hit_second_last', 'hit_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_sheet`)

        // Крафт в молоте
        e.recipes.gtceu.forge_hammer(`tfg:${material.getName()}_plate_from_double_ingot`)
            .itemInputs(doubleIngotItem)
            .itemOutputs(plateItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 5)
    }

    const processDoublePlate = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const doublePlateItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (doublePlateItem.isEmpty()) return

        // Декрафт двойных пластин
        e.recipes.tfc.heating(doublePlateItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
            .id(`tfc:heating/metal/${material.getName()}_double_sheet`)

        const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)
        if (plateItem.isEmpty()) return

        // Две пластины -> Двойная пластина
        e.recipes.tfc.welding(doublePlateItem, plateItem, plateItem)
            .tier(tfcProperty.getTier())
            .id(`tfc:welding/${material.getName()}_double_sheet`)
    }

    const processRods = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const rodItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (rodItem.isEmpty()) return
        
        // Декрафт стержня в жидкость
        e.recipes.tfc.heating(rodItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 72))
            .id(`tfc:heating/metal/${material.getName()}_rod`)

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return

        // Слиток -> 2 Стержня
        e.recipes.tfc.anvil(rodItem.withCount(2), ingotItem, ['bend_last', 'draw_second_last', 'draw_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_rod`)
    }

    const processLongRods = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const longRodItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (longRodItem.isEmpty()) return

        // Декрафт длинного стержня в жидкость
        e.recipes.tfc.heating(longRodItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_long_rod`)

        const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1)
        if (rodItem.isEmpty()) return

        // Стержни -> Длинный стержень
        e.recipes.tfc.welding(longRodItem, rodItem, rodItem)
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_long_rod`)
    }

    const processBolts = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const boltItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (boltItem.isEmpty()) return
            
        // Болт -> Металл
        e.recipes.tfc.heating(boltItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 18))
            .id(`tfc:heating/metal/${material.getName()}_bolt`)

        const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1)
        if (rodItem.isEmpty()) return

        // Стержень -> Болт
        e.recipes.tfc.anvil(boltItem.withCount(2), rodItem, ['punch_last', 'draw_second_last', 'draw_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_bolt`)
    }

    const processScrews = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const screwItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (screwItem.isEmpty()) return

        // Винт -> Металл
        e.recipes.tfc.heating(screwItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 16))
            .id(`tfc:heating/metal/${material.getName()}_screw`)

        const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1)
        if (rodItem.isEmpty()) return

        // Стержень -> Винт
        e.recipes.tfc.anvil(screwItem, rodItem, ['punch_last', 'punch_second_last', 'shrink_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_screw`)
    }

    const processRings = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const ringItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (ringItem.isEmpty()) return
            
        // Кольцо -> Металл
        e.recipes.tfc.heating(ringItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 36))
            .id(`tfc:heating/metal/${material.getName()}_ring`)

        const rodItem = ChemicalHelper.get(TagPrefix.rod, material, 1)
        if (rodItem.isEmpty()) return

        // Стержень -> Кольцо
        e.recipes.tfc.anvil(ringItem, rodItem, ['hit_last', 'hit_second_last', 'hit_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_ring`)
    }

    const processBlock = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const blockItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (blockItem.isEmpty()) return
            
        // Декрафт блока в жидкость
        e.recipes.tfc.heating(`#forge:storage_blocks/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 1296))
            .id(`tfc:heating/metal/${material.getName()}_storage_block`)
    }

    const processTinyDust = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const dustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (dustItem.isEmpty()) return
        
        e.recipes.tfc.heating(dustItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(16, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/tiny_dust/${material.getName()}`)
    }

    const processSmallDust = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const dustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (dustItem.isEmpty()) return
        
        e.recipes.tfc.heating(dustItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(36, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/small_dust/${material.getName()}`)
    }

    const processDust = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const dustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (dustItem.isEmpty()) return
        
        e.recipes.tfc.heating(dustItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(144, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/dust/${material.getName()}`)
    }

    const processImpureDust = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const dustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (dustItem.isEmpty()) return
        
        e.recipes.tfc.heating(dustItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(80, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/impure_dust/${material.getName()}`)
    }

    const processPurifiedDust = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const dustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (dustItem.isEmpty()) return
        
        e.recipes.tfc.heating(dustItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(120, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/purified_dust/${material.getName()}`)
    }

    const processCrushedOre = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const dustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (dustItem.isEmpty()) return
        
        e.recipes.tfc.heating(dustItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(60, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/crushed_ore/${material.getName()}`)
    }

    const processCrushedPurifiedOre = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const dustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (dustItem.isEmpty()) return
        
        e.recipes.tfc.heating(dustItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(90, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/crushed_purified_ore/${material.getName()}`)
    }

    const processCrushedRefinedOre = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const dustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (dustItem.isEmpty()) return
        
        e.recipes.tfc.heating(dustItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(110, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/crushed_refined_ore/${material.getName()}`)
    }

    const processRichRawOre = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const oreItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (oreItem.isEmpty()) return
        
        e.recipes.tfc.heating(oreItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(48, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/rich_raw/${material.getName()}`)

        const crushedItem = ChemicalHelper.get(TagPrefix.crushed, material, 1)
        if (crushedItem.isEmpty()) return

        e.shapeless(crushedItem.copyWithCount(2), [
                '#forge:tools/hammers',
                oreItem
        ]).id(`tfg:shapeless/rich_raw_${material.getName()}_to_crushed`)
    }

    const processNormalRawore = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const oreItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (oreItem.isEmpty()) return
        
        e.recipes.tfc.heating(oreItem, tfcProperty.getMeltTemp())
        .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(36, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/raw/${material.getName()}`)

        const crushedItem = ChemicalHelper.get(TagPrefix.crushed, material, 1)
        if (crushedItem.isEmpty()) return

        e.shapeless(crushedItem, [
                '#forge:tools/hammers',
                oreItem
        ]).id(`tfg:shapeless/normal_raw_${material.getName()}_to_crushed`)
    }

    const processPoorRawOre = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const oreItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (oreItem.isEmpty()) return
        
        e.recipes.tfc.heating(oreItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), calcAmountOfMetal(24, tfcProperty.getPercentOfMaterial())))
            .id(`tfg:heating/poor_raw/${material.getName()}`)

        const crushedItem = ChemicalHelper.get(TagPrefix.crushed, material, 1)
        if (crushedItem.isEmpty()) return

        e.shapeless(crushedItem, [
                '#forge:tools/hammers',
                oreItem,
                oreItem
        ]).id(`tfg:shapeless/poor_raw_${material.getName()}_to_crushed`)
    }

    const processToolSword = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotDoubleItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1)
        if (ingotDoubleItem.isEmpty()) return
        
        // Крафт инструмента
        e.remove({ id: `tfc:crafting/metal/sword/${material.getName()}` })

        // Декрафт инструмента в жидкость
        const swordItem = ToolHelper.get(toolType, material)
        if (!swordItem.isEmpty()) {
            
            e.recipes.tfc.heating(swordItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_sword`)
        }
        
        const swordHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!swordHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(swordHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                .id(`tfc:heating/metal/${material.getName()}_sword_blade`)

            // Крафт оголовья
            e.recipes.tfc.anvil(swordHeadItem, ingotDoubleItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_sword_blade`)

            // Металл + Форма -> Оголовье
            if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                e.recipes.tfc.casting(swordHeadItem, 'tfc:ceramic/sword_blade_mold', Fluid.of(outputMaterial.getFluid(), 288), 1)
                    .id(`tfc:casting/${material.getName()}_sword_blade`)
            
                e.recipes.create.filling(
                    Item.of('tfc:ceramic/sword_blade_mold', getFluidTankAsNBT(outputMaterial, 288)), 
                    [
                        Fluid.of(outputMaterial.getFluid(), 288), 
                        Item.of('tfc:ceramic/sword_blade_mold').strongNBT()
                    ]
                ).id(`tfg:tfc/filling/${material.getName()}_sword_blade`)
            }       
        } 
    }

    const processToolPickaxe = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return
        
        // Крафт инструмента
        e.remove({ id: `tfc:crafting/metal/pickaxe/${material.getName()}` })

        // Декрафт инструмента в жидкость
        const pickaxeItem = ToolHelper.get(toolType, material)
        if (!pickaxeItem.isEmpty()) {

            e.recipes.tfc.heating(`gtceu:${material.getName()}_pickaxe`, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_pickaxe`)
            
        }

        const pickaxeHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!pickaxeHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(pickaxeHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .id(`tfc:heating/metal/${material.getName()}_pickaxe_head`)

            // Крафт оголовья
            e.recipes.tfc.anvil(pickaxeHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_pickaxe_head`)

            // Металл + Форма -> Оголовье
            if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                e.recipes.tfc.casting(pickaxeHeadItem, 'tfc:ceramic/pickaxe_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                    .id(`tfc:casting/${material.getName()}_pickaxe_head`)

                e.recipes.create.filling(
                    Item.of('tfc:ceramic/pickaxe_head_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                    [
                        Fluid.of(outputMaterial.getFluid(), 144), 
                        Item.of('tfc:ceramic/pickaxe_head_mold').strongNBT()
                    ]
                ).id(`tfg:tfc/filling/${material.getName()}_pickaxe_head`)
            }

        }
    }

    const processToolAxe = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return
        
        // Крафт инструмента
        e.remove({ id: `tfc:crafting/metal/axe/${material.getName()}` })

        // Декрафт инструмента в жидкость
        const axeItem = ToolHelper.get(toolType, material)
        if (!axeItem.isEmpty()) {
            
            e.recipes.tfc.heating(axeItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_axe`)
            
        }
        
        const axeHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!axeHeadItem.isEmpty()) {
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(axeHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .id(`tfc:heating/metal/${material.getName()}_axe_head`)

            // Крафт оголовья
            e.recipes.tfc.anvil(axeHeadItem, ingotItem, ['punch_last', 'hit_second_last', 'upset_third_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_axe_head`)

            // Металл + Форма -> Оголовье
            if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                e.recipes.tfc.casting(axeHeadItem, 'tfc:ceramic/axe_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                    .id(`tfc:casting/${material.getName()}_axe_head`)

                e.recipes.create.filling(
                    Item.of('tfc:ceramic/axe_head_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                    [
                        Fluid.of(outputMaterial.getFluid(), 144), 
                        Item.of('tfc:ceramic/axe_head_mold').strongNBT()
                    ]
                ).id(`tfg:tfc/filling/${material.getName()}_axe_head`)
            }
        }
    }

    const processToolShovel = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return
        
        // Крафт инструмента
        e.remove({ id: `tfc:crafting/metal/shovel/${material.getName()}` })

        // Декрафт инструмента в жидкость
        const shovelItem = ToolHelper.get(toolType, material)
        if (!shovelItem.isEmpty()) {
            
            e.recipes.tfc.heating(shovelItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_shovel`)
            
        }

        const shovelHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!shovelHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(shovelHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .id(`tfc:heating/metal/${material.getName()}_shovel_head`)

            // Крафт оголовья
            e.recipes.tfc.anvil(shovelHeadItem, ingotItem, ['punch_last', 'hit_not_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_shovel_head`)

            // Металл + Форма -> Оголовье
            if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                e.recipes.tfc.casting(shovelHeadItem, 'tfc:ceramic/shovel_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                    .id(`tfc:casting/${material.getName()}_shovel_head`)

                e.recipes.create.filling(
                    Item.of('tfc:ceramic/shovel_head_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                    [
                        Fluid.of(outputMaterial.getFluid(), 144), 
                        Item.of('tfc:ceramic/shovel_head_mold').strongNBT()
                    ]
                ).id(`tfg:tfc/filling/${material.getName()}_shovel_head_mold`)
            }

        }
    }

    const processToolHoe = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return
        
        // Крафт инструмента
        e.remove({ id: `tfc:crafting/metal/hoe/${material.getName()}` })

        // Декрафт инструмента в жидкость
        const hoeItem = ToolHelper.get(toolType, material)
        if (!hoeItem.isEmpty()) {
            e.recipes.tfc.heating(hoeItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_hoe`)
        }
        
        const hoeHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!hoeHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(hoeHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .id(`tfc:heating/metal/${material.getName()}_hoe_head`)
            
            // Крафт оголовья
            e.recipes.tfc.anvil(hoeHeadItem, ingotItem, ['punch_last', 'hit_not_last', 'bend_not_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_hoe_head`)

            // Металл + Форма -> Оголовье
            if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                e.recipes.tfc.casting(hoeHeadItem, 'tfc:ceramic/hoe_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                    .id(`tfc:casting/${material.getName()}_hoe_head`)

                e.recipes.create.filling(
                    Item.of('tfc:ceramic/hoe_head_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                    [
                        Fluid.of(outputMaterial.getFluid(), 144), 
                        Item.of('tfc:ceramic/hoe_head_mold').strongNBT()
                    ]
                ).id(`tfg:tfc/filling/${material.getName()}_hoe_head_mold`)
            }
            
        }
    }

    const processToolKnife = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return
        
        // Крафт инструмента
        e.remove({ id: `tfc:crafting/metal/knife/${material.getName()}` })

        // Декрафт инструмента в жидкость
        const knifeItem = ToolHelper.get(toolType, material)
        if (!knifeItem.isEmpty()) {
            e.recipes.tfc.heating(knifeItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_knife`)
        }
        
        const knifeHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!knifeHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(knifeHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .id(`tfc:heating/metal/${material.getName()}_knife_blade`)

            // Крафт оголовья
            e.recipes.tfc.anvil(knifeHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_knife_blade`)

            // Металл + Форма -> Оголовье
            if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                e.recipes.tfc.casting(knifeHeadItem, 'tfc:ceramic/knife_blade_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                    .id(`tfc:casting/${material.getName()}_knife_blade`)

                e.recipes.create.filling(
                    Item.of('tfc:ceramic/knife_blade_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                    [
                        Fluid.of(outputMaterial.getFluid(), 144), 
                        Item.of('tfc:ceramic/knife_blade_mold').strongNBT()
                    ]
                ).id(`tfg:tfc/filling/${material.getName()}_knife_blade_mold`)
            }
            //#region Ножницы 

            // Сварка оголовий
            e.recipes.tfc.welding(`tfc:metal/shears/${material.getName()}`, knifeHeadItem, knifeHeadItem, tfcProperty.getTier())
            .id(`tfc:welding/${material.getName()}_shears`)

            // Декрафт инструмента в жидкость
            e.recipes.tfc.heating(`tfc:metal/shears/${material.getName()}`, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_shears`)

            //#endregion

        }
    }

    const processToolMiningHammer = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotDoubleItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1)
        if (ingotDoubleItem.isEmpty()) return
        
        // Декрафт инструмента в жидкость
        const miningHammerItem = ToolHelper.get(toolType, material)
        if (!miningHammerItem.isEmpty()) {
            
            e.recipes.tfc.heating(miningHammerItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_mining_hammer`)

        }


        const miningHammerHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!miningHammerHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(miningHammerHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                .id(`tfc:heating/metal/${material.getName()}_mining_hammer_head`)

                // Крафт оголовья
            e.recipes.tfc.anvil(miningHammerHeadItem, ingotDoubleItem, ['punch_last', 'shrink_not_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_mining_hammer_head`)
            
        }
    }

    const processToolScythe = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return
        
        // Крафт инструмента
        e.remove({ id: `tfc:crafting/metal/scythe/${material.getName()}` })

        // Декрафт инструмента в жидкость
        const scytheItem = ToolHelper.get(toolType, material)
        if (!scytheItem.isEmpty()) {
            e.recipes.tfc.heating(scytheItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_scythe`)
        }
        
        const scytheHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!scytheHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(scytheHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .id(`tfc:heating/metal/${material.getName()}_scythe_blade`)

            // Крафт оголовья
            e.recipes.tfc.anvil(scytheHeadItem, ingotItem, ['punch_last', 'bend_not_last', 'draw_not_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_scythe_blade`)

            // Металл + Форма -> Оголовье
            if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                e.recipes.tfc.casting(scytheHeadItem, 'tfc:ceramic/scythe_blade_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                    .id(`tfc:casting/${material.getName()}_scythe_blade`)

                e.recipes.create.filling(
                    Item.of('tfc:ceramic/scythe_blade_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                    [
                        Fluid.of(outputMaterial.getFluid(), 144), 
                        Item.of('tfc:ceramic/scythe_blade_mold').strongNBT()
                    ]
                ).id(`tfg:tfc/filling/${material.getName()}_scythe_blade_mold`)
            }
        
        }
    }

    const processToolFile = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return
        
        const fileItem = ToolHelper.get(toolType, material)
        if (!fileItem.isEmpty()) {
            e.recipes.tfc.heating(fileItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_file`)
        }
        
        const fileHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!fileHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(fileHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .id(`tfc:heating/metal/${material.getName()}_file_head`)

            // Крафт оголовья
            e.recipes.tfc.anvil(fileHeadItem, ingotItem, ['upset_last', 'bend_not_last', 'punch_not_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_file_head`)

        }
    }

    const processToolHammer = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return
        
        // Крафт инструмента
        e.remove({ id: `tfc:crafting/metal/hammer/${material.getName()}` })

        // Декрафт инструмента в жидкость
        const hammerItem = ToolHelper.get(toolType, material)
        if (!hammerItem.isEmpty()) {
            
            e.recipes.tfc.heating(hammerItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_hammer`)
            
        }
        
        const hammerHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!hammerHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(hammerHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .id(`tfc:heating/metal/${material.getName()}_hammer_head`)

            // Крафт оголовья
            e.recipes.tfc.anvil(hammerHeadItem, ingotItem, ['punch_last', 'shrink_not_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_hammer_head`)

            // Металл + Форма -> Оголовье
            if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                e.recipes.tfc.casting(hammerHeadItem, 'tfc:ceramic/hammer_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                    .id(`tfc:casting/${material.getName()}_hammer_head`)
            
                e.recipes.create.filling(
                    Item.of('tfc:ceramic/hammer_head_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                    [
                        Fluid.of(outputMaterial.getFluid(), 144), 
                        Item.of('tfc:ceramic/hammer_head_mold').strongNBT()
                    ]
                ).id(`tfg:tfc/filling/${material.getName()}_hammer_head_mold`)
            }
        
        }
    }

    const processToolSaw = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return
        
        // Крафт инструмента
        e.remove({ id: `tfc:crafting/metal/saw/${material.getName()}` })

        // Декрафт инструмента в жидкость
        const sawItem = ToolHelper.get(toolType, material)
        if (!sawItem.isEmpty()) {
            
            e.recipes.tfc.heating(sawItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_saw`)
            
        }
        
        const sawHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!sawHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(sawHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
                .id(`tfc:heating/metal/${material.getName()}_saw_blade`)

            // Крафт оголовья
            e.recipes.tfc.anvil(sawHeadItem, ingotItem, ['hit_last', 'hit_second_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_saw_blade`)

            // Металл + Форма -> Оголовье
            if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
                e.recipes.tfc.casting(sawHeadItem, 'tfc:ceramic/saw_blade_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                    .id(`tfc:casting/${material.getName()}_saw_blade`)

                e.recipes.create.filling(
                    Item.of('tfc:ceramic/saw_blade_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                    [
                        Fluid.of(outputMaterial.getFluid(), 144), 
                        Item.of('tfc:ceramic/saw_blade_mold').strongNBT()
                    ]
                ).id(`tfg:tfc/filling/${material.getName()}_saw_blade_mold`)
            }

        }
    }
    
    const processToolButcheryKnife = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotDoubleItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1)
        if (ingotDoubleItem.isEmpty()) return
        
        // Декрафт инструмента в жидкость
        const butcheryKnifeItem = ToolHelper.get(toolType, material)
        if (!butcheryKnifeItem.isEmpty()) {
            
            e.recipes.tfc.heating(butcheryKnifeItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_butchery_knife`)

        }
        
        const butcheryKnifeHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!butcheryKnifeHeadItem.isEmpty()) {
            
            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(butcheryKnifeHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                .id(`tfc:heating/metal/${material.getName()}_knife_butchery_head`)

            // Крафт оголовья
            e.recipes.tfc.anvil(butcheryKnifeHeadItem, ingotDoubleItem, ['punch_last', 'bend_not_last', 'bend_not_last'])
                .tier(tfcProperty.getTier())
                .bonus(true)
                .id(`tfc:anvil/${material.getName()}_knife_butchery_head`)

        }
    }

    const processToolSpade = (toolType, headTagPrefix, tfcProperty, material, outputMaterial) => {
        const ingotDoubleItem = ChemicalHelper.get(TFGTagPrefix.ingotDouble, material, 1)
        if (ingotDoubleItem.isEmpty()) return
        
        // Декрафт инструмента в жидкость
        const spadeItem = ToolHelper.get(toolType, material)
        if (!spadeItem.isEmpty()) {
            
            e.recipes.tfc.heating(spadeItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                .useDurability(true)
                .id(`tfc:heating/metal/${material.getName()}_spade`)
            
        }
        
        const spadeHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (!spadeHeadItem.isEmpty()) {

            // Крафт оголовья
            e.recipes.tfc.anvil(spadeHeadItem, ingotDoubleItem, ['punch_last', 'hit_not_last'])
            .tier(tfcProperty.getTier())
            .bonus(true)
            .id(`tfc:anvil/${material.getName()}_spade_head`)

            // Декрафт оголовья в жидкость
            e.recipes.tfc.heating(spadeHeadItem, tfcProperty.getMeltTemp())
                .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
                .id(`tfc:heating/metal/${material.getName()}_spade_head`)
            
        }
    }

    const processToolPropick = (headTagPrefix, tfcProperty, material, outputMaterial) => {
        const propickItem = Item.of(`tfc:metal/propick/${material.getName()}`)
        if (propickItem.isEmpty()) return
        
        // Декрафт инструмента в жидкость
        e.recipes.tfc.heating(propickItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_propick`)

        const propickHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (propickHeadItem.isEmpty()) return;

        // Декрафт оголовья в жидкость
        e.recipes.tfc.heating(propickHeadItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_propick_head`)

        // Металл + Форма -> Оголовье
        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
            e.recipes.tfc.casting(propickHeadItem, 'tfc:ceramic/propick_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                .id(`tfc:casting/${material.getName()}_propick_head`)

            e.recipes.create.filling(
                Item.of('tfc:ceramic/propick_head_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                [
                    Fluid.of(outputMaterial.getFluid(), 144), 
                    Item.of('tfc:ceramic/propick_head_mold').strongNBT()
                ]
            ).id(`tfg:tfc/filling/${material.getName()}_propick_head_mold`)
        }
    }

    const processToolJavelin = (headTagPrefix, tfcProperty, material, outputMaterial) => {
        const javelinItem = Item.of(`tfc:metal/javelin/${material.getName()}`)
        if (javelinItem.isEmpty()) return
        
        // Декрафт инструмента в жидкость
        e.recipes.tfc.heating(javelinItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_javelin`)

        const javelinHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (javelinHeadItem.isEmpty()) return

        // Декрафт оголовья в жидкость
        e.recipes.tfc.heating(javelinHeadItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_javelin_head`)

        // Металл + Форма -> Оголовье
        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
            e.recipes.tfc.casting(javelinHeadItem, 'tfc:ceramic/javelin_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                .id(`tfc:casting/${material.getName()}_javelin_head`)

            e.recipes.create.filling(
                Item.of('tfc:ceramic/javelin_head_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                [
                    Fluid.of(outputMaterial.getFluid(), 144), 
                    Item.of('tfc:ceramic/javelin_head_mold').strongNBT()
                ]
            ).id(`tfg:tfc/filling/${material.getName()}_javelin_head_mold`)
        }
    }

    const processToolChisel = (headTagPrefix, tfcProperty, material, outputMaterial) => {
        const chiselItem = Item.of(`tfc:metal/chisel/${material.getName()}`)
        if (chiselItem.isEmpty()) return

        // Декрафт инструмента в жидкость
        e.recipes.tfc.heating(chiselItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_chisel`)

        const chiselHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (chiselHeadItem.isEmpty()) return

        // Декрафт оголовья в жидкость
        e.recipes.tfc.heating(chiselHeadItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_chisel_head`)

        // Металл + Форма -> Оголовье
        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
            e.recipes.tfc.casting(chiselHeadItem, 'tfc:ceramic/chisel_head_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
                .id(`tfc:casting/${material.getName()}_chisel_head`)

            e.recipes.create.filling(
                Item.of('tfc:ceramic/chisel_head_mold', getFluidTankAsNBT(outputMaterial, 144)), 
                [
                    Fluid.of(outputMaterial.getFluid(), 144), 
                    Item.of('tfc:ceramic/chisel_head_mold').strongNBT()
                ]
            ).id(`tfg:tfc/filling/${material.getName()}_chisel_head_mold`)
        }
    }

    const processToolMace = (headTagPrefix, tfcProperty, material, outputMaterial) => {
        const maceItem = Item.of(`tfc:metal/mace/${material.getName()}`)
        if (maceItem.isEmpty()) return
        
        // Декрафт инструмента в жидкость
        e.recipes.tfc.heating(maceItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_mace`)

        const maceHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (maceHeadItem.isEmpty()) return

        // Металл + Форма -> Оголовье
        if (material.hasFlag(TFGMaterialFlags.CAN_BE_UNMOLDED)) {
            e.recipes.tfc.casting(maceHeadItem, 'tfc:ceramic/mace_head_mold', Fluid.of(outputMaterial.getFluid(), 288), 1)
                .id(`tfc:casting/${material.getName()}_mace_head`)

            e.recipes.create.filling(
                Item.of('tfc:ceramic/mace_head_mold', getFluidTankAsNBT(outputMaterial, 288)), 
                [
                    Fluid.of(outputMaterial.getFluid(), 288), 
                    Item.of('tfc:ceramic/mace_head_mold').strongNBT()
                ]
            ).id(`tfg:tfc/filling/${material.getName()}_mace_head`)
        
        }

        // Декрафт оголовья в жидкость
        e.recipes.tfc.heating(maceHeadItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
            .id(`tfc:heating/metal/${material.getName()}_mace_head`)
    }

    const processToolShield = (tfcProperty, material, outputMaterial) => {
        const shieldItem = Item.of(`tfc:metal/shield/${material.getName()}`)
        if (shieldItem.isEmpty()) return
        
        // Декрафт щита в жидкость
        e.recipes.tfc.heating(shieldItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_shield`)

        const plateDoubleItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
        if (plateDoubleItem.isEmpty()) return

        // Щит
        e.recipes.tfc.anvil(shieldItem, plateDoubleItem, ['upset_last', 'bend_second_last', 'bend_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_shield`)
    }
    
    const processToolFishingRod = (tfcProperty, material, outputMaterial) => {
        const fishingRodItem = Item.of(`tfc:metal/fishing_rod/${material.getName()}`)
        if (fishingRodItem.isEmpty()) return
        
        const fishingRodHeadItem = Item.of(`tfc:metal/fish_hook/${material.getName()}`)
        if (fishingRodHeadItem.isEmpty()) return

        // Декрафт оголовья в жидкость
        e.recipes.tfc.heating(fishingRodHeadItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_fish_hook`)

        const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)
        if (plateItem.isEmpty()) return

        // Крюк удочки
        e.recipes.tfc.anvil(fishingRodHeadItem, plateItem, ['draw_not_last', 'bend_any', 'hit_any'])
            .tier(tfcProperty.getTier())
            .bonus(true)
            .id(`tfc:anvil/${material.getName()}_fish_hook`)

        // Декрафт инструмента в жидкость
        e.recipes.tfc.heating(fishingRodItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_fishing_rod`)
    }
    
    const processTuyere = (tfcProperty, material, outputMaterial) => {
        const tuyereItem = Item.of(`tfc:metal/tuyere/${material.getName()}`)
        if (tuyereItem.isEmpty()) return
        
        // Декрафт инструмента в жидкость
        e.recipes.tfc.heating(tuyereItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_tuyere`)

        const plateDoubleItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
        if (plateDoubleItem.isEmpty()) return

        // Фурма
        e.recipes.tfc.anvil(tuyereItem, plateDoubleItem, ['bend_last', 'bend_second_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_tuyere`)
    }

    const processToolTongs = (tfcProperty, material, outputMaterial) => {
        //todo: asd
        // const tongsStack = Item.of(`tfchotornot:tongs/${material.getName()}`)
        // const tongPartStack = Item.of(`tfchotornot:tong_part/${material.getName()}`)

        // if (tongsStack.isEmpty() && tongPartStack.isEmpty()) return

        // // Ручка щипцов
        // e.recipes.tfc.heating(tongPartStack, tfcProperty.getMeltTemp())
        //     .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
        //     .id(`tfchotornot:heating/tong_part/${material.getName()}`)
    
        // // Щипцы
        // e.recipes.tfc.heating(tongsStack, tfcProperty.getMeltTemp())
        //     .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
        //     .useDurability(true)
        //     .id(`tfchotornot:heating/tongs/${material.getName()}`)
    }

    const processTFCArmor = (tfcProperty, material, outputMaterial) => {
        const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)
        if (plateItem.isEmpty()) return

        const plateDoubleItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
        if (plateDoubleItem.isEmpty()) return

        //#region Шлем

        // Декрафт незавершенного шлема в жидкость
        e.recipes.tfc.heating(`tfc:metal/unfinished_helmet/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
            .id(`tfc:heating/metal/${material.getName()}_unfinished_helmet`)

        // Незавершенный шлем
        e.recipes.tfc.anvil(`tfc:metal/unfinished_helmet/${material.getName()}`, plateDoubleItem, ['hit_last', 'bend_second_last', 'bend_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_unfinished_helmet`)

        // Декрафт шлема в жидкость
        e.recipes.tfc.heating(`tfc:metal/helmet/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 432))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_helmet`)

        // Шлем
        e.recipes.tfc.welding(`tfc:metal/helmet/${material.getName()}`, `tfc:metal/unfinished_helmet/${material.getName()}`, plateItem)
            .tier(tfcProperty.getTier())
            .id(`tfc:welding/${material.getName()}_helmet`)

        //#endregion

        //#region Нагрудник

        // Декрафт незавершенного нагрудника в жидкость
        e.recipes.tfc.heating(`tfc:metal/unfinished_chestplate/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
            .id(`tfc:heating/metal/${material.getName()}_unfinished_chestplate`)

        // Незавершенный нагрудник
        e.recipes.tfc.anvil(`tfc:metal/unfinished_chestplate/${material.getName()}`, plateDoubleItem, ['hit_last', 'hit_second_last', 'upset_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_unfinished_chestplate`)

        // Декрафт нагрудника в жидкость
        e.recipes.tfc.heating(`tfc:metal/chestplate/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 576))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_chestplate`)

        // Нагрудник
        e.recipes.tfc.welding(`tfc:metal/chestplate/${material.getName()}`, `tfc:metal/unfinished_chestplate/${material.getName()}`, plateDoubleItem)
            .tier(tfcProperty.getTier())
            .id(`tfc:welding/${material.getName()}_chestplate`)

        //#endregion

        //#region Поножи

        // Декрафт незавершенных поножей в жидкость
        e.recipes.tfc.heating(`tfc:metal/unfinished_greaves/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
            .id(`tfc:heating/metal/${material.getName()}_unfinished_greaves`)

        // Незавершенные поножи
        e.recipes.tfc.anvil(`tfc:metal/unfinished_greaves/${material.getName()}`, plateDoubleItem, ['bend_any', 'draw_any', 'hit_any'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_unfinished_greaves`)

        // Декрафт поножей в жидкость
        e.recipes.tfc.heating(`tfc:metal/greaves/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 432))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_greaves`)

        // Поножи
        e.recipes.tfc.welding(`tfc:metal/greaves/${material.getName()}`, `tfc:metal/unfinished_greaves/${material.getName()}`, plateItem)
            .tier(tfcProperty.getTier())
            .id(`tfc:welding/${material.getName()}_greaves`)

        //#endregion

        //#region Ботинки

        // Декрафт незавершенных ботинок в жидкость
        e.recipes.tfc.heating(`tfc:metal/unfinished_boots/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_unfinished_boots`)

        // Незавершенные ботинки
        e.recipes.tfc.anvil(`tfc:metal/unfinished_boots/${material.getName()}`, plateItem, ['bend_last', 'bend_second_last', 'shrink_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_unfinished_boots`)

        // Декрафт ботинок в жидкость
        e.recipes.tfc.heating(`tfc:metal/boots/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 288))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_boots`)

        // Ботинки
        e.recipes.tfc.welding(`tfc:metal/boots/${material.getName()}`, `tfc:metal/unfinished_boots/${material.getName()}`, plateItem)
            .tier(tfcProperty.getTier())
            .id(`tfc:welding/${material.getName()}_boots`)

        //#endregion

        //#region Конская броня

        // Декрафт конской брони в жидкость
        e.recipes.tfc.heating(`tfc:metal/horse_armor/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 864))
            .useDurability(true)
            .id(`tfc:heating/metal/${material.getName()}_horse_armor`)

        //#endregion
    }

    const processTFCMetalBlocks = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const platedBlock = ChemicalHelper.get(tagPrefix, material, 1)
        if (platedBlock.isEmpty()) return

        // Декрафт
        e.recipes.tfc.heating(platedBlock, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 72))
            .id(`tfc:heating/metal/${material.getName()}_block`)

        const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)
        if (plateItem.isEmpty()) return

        // Крафт в ассемблере
        e.recipes.gtceu.assembler(`tfg:${material.getName()}_plated_block`)
            .itemInputs(plateItem.copyWithCount(4), '#minecraft:planks')
            .itemOutputs(platedBlock)
            .duration(300)
            .EUt(8)
    }

    const processTFCMetalStairs = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const platedStairBlock = ChemicalHelper.get(tagPrefix, material, 1)
        if (platedStairBlock.isEmpty()) return

        // Удаление рецепта через верстак
        e.remove({ id: `tfc:crafting/metal/block/${material.getName()}_stairs`})

        // Декрафт
        e.recipes.tfc.heating(platedStairBlock, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 54))
            .id(`tfc:heating/metal/${material.getName()}_block_stairs`)

        const platedBlock = ChemicalHelper.get(TFGTagPrefix.blockPlated, material, 1)
        if (platedBlock.isEmpty()) return

        // Крафт в каттере
        e.recipes.gtceu.cutter(`tfg:${material.getName()}_block_stairs`)             
            .itemInputs(platedBlock.copyWithCount(3))
            .itemOutputs(platedStairBlock)
            .duration(300)
            .EUt(8)
    }

    const processTFCMetalSlabs = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const platedSlabBlock = ChemicalHelper.get(tagPrefix, material, 1)
        if (platedSlabBlock.isEmpty()) return

        // Удаление рецепта через верстак
        e.remove({ id: `tfc:crafting/metal/block/${material.getName()}_slab`})

        // Декрафт
        e.recipes.tfc.heating(platedSlabBlock, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 36))
            .id(`tfc:heating/metal/${material.getName()}_block_slab`)

        const platedBlock = ChemicalHelper.get(TFGTagPrefix.blockPlated, material, 1)
        if (platedBlock.isEmpty()) return

        // Крафт в каттере
        e.recipes.gtceu.cutter(`tfg:${material.getName()}_block_slab`)             
            .itemInputs(platedBlock)
            .itemOutputs(platedSlabBlock.copyWithCount(2))
            .duration(300)
            .EUt(8)
    }

    const processAnvils = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const anvilItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (anvilItem.isEmpty()) return

        // Декрафт наковальни в жидкость
        e.recipes.tfc.heating(anvilItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 2016))
            .id(`tfc:heating/metal/${material.getName()}_anvil`)

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, outputMaterial, 1)
        if (ingotItem.isEmpty()) return

        // Крафт в смелтере
        e.recipes.gtceu.alloy_smelter(`tfg:${material.getName()}_anvil_from_ingots`)
            .itemInputs(ingotItem.copyWithCount(14))
            .notConsumable('tfg:anvil_casting_mold')
            .itemOutputs(anvilItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 6)
            
        // Крафт в солидифаере
        e.recipes.gtceu.fluid_solidifier(`tfg:${material.getName()}_anvil_from_fluid`)
            .inputFluids(Fluid.of(outputMaterial.getFluid(), 2016))
            .notConsumable('tfg:anvil_casting_mold')
            .itemOutputs(anvilItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 6)
    }

    const processUnfinishedLamp = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const lampUnfinishedItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (lampUnfinishedItem.isEmpty()) return

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return
        
        // Декрафт незавершенной лампы в жидкость
        e.recipes.tfc.heating(lampUnfinishedItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_unfinished_lamp`)

        // Крафт в смелтере
        e.recipes.gtceu.alloy_smelter(`tfg:${material.getName()}_unfinished_lamp_from_ingots`)
            .itemInputs(ingotItem)
            .notConsumable('tfg:lamp_casting_mold')
            .itemOutputs(lampUnfinishedItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 2)
         
        // Крафт в солидифаере
        e.recipes.gtceu.fluid_solidifier(`tfg:${material.getName()}_unfinished_lamp_from_fluid`)
            .inputFluids(Fluid.of(outputMaterial.getFluid(), 144))
            .notConsumable('tfg:lamp_casting_mold')
            .itemOutputs(lampUnfinishedItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 2)
    }

    const processLamps = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const lampItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (lampItem.isEmpty()) return
        
        // Декрафт лампы в жидкость
        e.recipes.tfc.heating(lampItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_lamp`)

        const lampUnfinishedItem = ChemicalHelper.get(TFGTagPrefix.lampUnfinished, material, 1)
        if (lampUnfinishedItem.isEmpty()) return

        // Рецепт ассемблер
        e.recipes.gtceu.alloy_smelter(`tfg:${material.getName()}_lamp`)
            .itemInputs(lampUnfinishedItem, 'tfc:lamp_glass')
            .circuit(12)
            .itemOutputs(lampItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 7)

        e.recipes.gtceu.alloy_smelter(`tfg:${material.getName()}_lamp_from_liquid`)
            .itemInputs(lampUnfinishedItem)
            .inputFluids(GTMaterials.Glass.getFluid(576))
            .circuit(13)
            .itemOutputs(lampItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 6)
    }

    const processTrapdoors = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const trapdoorItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (trapdoorItem.isEmpty()) return
        
        // Декрафт люка в жидкость
        e.recipes.tfc.heating(trapdoorItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/metal/${material.getName()}_trapdoor`)

        const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)
        if (plateItem.isEmpty()) return

        // Люк
        e.recipes.tfc.anvil(trapdoorItem, plateItem, ['bend_last', 'draw_second_last', 'draw_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_trapdoor`)

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return

        // Крафт в смелтере
        e.recipes.gtceu.alloy_smelter(`tfg:${material.getName()}_trapdoor_from_ingots`)
            .itemInputs(ingotItem)
            .notConsumable('tfg:trapdoor_casting_mold')
            .itemOutputs(trapdoorItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 5)
         
        // Крафт в солидифаере
        e.recipes.gtceu.fluid_solidifier(`tfg:${material.getName()}_trapdoor_from_fluid`)
            .inputFluids(Fluid.of(outputMaterial.getFluid(), 144))
            .notConsumable('tfg:trapdoor_casting_mold')
            .itemOutputs(trapdoorItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 5)
    }

    const processChains = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const chainItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (chainItem.isEmpty()) return
        
        // Декрафт цепи в жидкость
        e.recipes.tfc.heating(`tfc:metal/chain/${material.getName()}`, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 9))
            .id(`tfc:heating/metal/${material.getName()}_chain`)

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return

        // Крафт в смелтере
        e.recipes.gtceu.alloy_smelter(`tfg:${material.getName()}_chain_from_ingots`)
            .itemInputs(ingotItem)
            .notConsumable('tfg:chain_casting_mold')
            .itemOutputs(chainItem.copyWithCount(9))
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 2)
         
        // Крафт в солидифаере
        e.recipes.gtceu.fluid_solidifier(`tfg:${material.getName()}_chain_from_fluid`)
            .inputFluids(Fluid.of(outputMaterial.getFluid(), 144))
            .notConsumable('tfg:chain_casting_mold')
            .itemOutputs(chainItem.copyWithCount(9))
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 2)
    }

    const processBars = (tagPrefix, tfcProperty, material, outputMaterial) => {
        const barsItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (barsItem.isEmpty()) return
        
        // Декрафт решетки в жидкость
        e.recipes.tfc.heating(barsItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 18))
            .id(`tfc:heating/metal/${material.getName()}_bars`)
        
        const plateItem = ChemicalHelper.get(TagPrefix.plate, material, 1)
        if (plateItem.isEmpty()) return
    
        // 8x Решетка
        e.recipes.tfc.anvil(barsItem.copyWithCount(8), plateItem, ['upset_last', 'punch_second_last', 'punch_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_bars`)

        const plateDoubleItem = ChemicalHelper.get(TagPrefix.plateDouble, material, 1)
        if (plateDoubleItem.isEmpty()) return

        // 16x Решетка
        e.recipes.tfc.anvil(barsItem.copyWithCount(16), plateDoubleItem, ['upset_last', 'punch_second_last', 'punch_third_last'])
            .tier(tfcProperty.getTier())
            .id(`tfc:anvil/${material.getName()}_bars_double`)

        const rodtItem = ChemicalHelper.get(TagPrefix.rod, material, 1)
        if (rodtItem.isEmpty()) return

        // Крафт в ассемблере
        e.recipes.gtceu.assembler(`tfg:${material.getName()}_bars_from_rods`)
            .itemInputs(rodtItem.withCount(3))
            .circuit(3)
            .itemOutputs(barsItem.copyWithCount(4))
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 8)
    }

    const processBell = (tagPrefix, tfcProperty, material, outputMaterial) => {
        if (!material.hasFlag(TFGMaterialFlags.GENERATE_BELL)) return

        const bellItem = ChemicalHelper.get(tagPrefix, material, 1)

        e.recipes.tfc.casting(bellItem, 'tfc:ceramic/bell_mold', Fluid.of(outputMaterial.getFluid(), 144), 1)
            .id(`tfc:casting/${material.getName()}_bell`)

        e.recipes.tfc.heating(bellItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 144))
            .id(`tfc:heating/${material.getName()}_bell`)

        e.recipes.create.filling(
            Item.of('tfc:ceramic/bell_mold', getFluidTankAsNBT(outputMaterial, 144)), 
            [
                Fluid.of(outputMaterial.getFluid(), 144), 
                Item.of('tfc:ceramic/bell_mold').strongNBT()
            ]
        ).id(`tfg:tfc/filling/${material.getName()}_bell_mold`)

        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        if (ingotItem.isEmpty()) return

        // Крафт в смелтере
        e.recipes.gtceu.alloy_smelter(`tfg:${material.getName()}_bell_from_ingots`)
            .itemInputs(ingotItem)
            .notConsumable('tfg:bell_casting_mold')
            .itemOutputs(bellItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 8)
         
        // Крафт в солидифаере
        e.recipes.gtceu.fluid_solidifier(`tfg:${material.getName()}_bell_from_fluid`)
            .inputFluids(Fluid.of(outputMaterial.getFluid(), 144))
            .notConsumable('tfg:bell_casting_mold')
            .itemOutputs(bellItem)
            .EUt(GTValues.VA[GTValues.ULV]).duration(material.getMass() * 8)
    }

    const processTFCSmallOres = (tagPrefix, tfcProperty, material, outputMaterial) => {
        if (!material.hasFlag(TFGMaterialFlags.HAS_SMALL_TFC_ORE)) return
        
        const oreItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (oreItem.isEmpty()) return
        
        // Декрафт мелкого кусочка в жидкость
        e.recipes.tfc.heating(oreItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 16))
            .id(`tfc:heating/ore/small_${material.getName()}`)
    }

    const processTFCSmallNativeOres = (tagPrefix, tfcProperty, material, outputMaterial) => {
        if (!material.hasFlag(TFGMaterialFlags.HAS_SMALL_NATIVE_TFC_ORE)) return
        
        const oreItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (oreItem.isEmpty()) return
        
        // Декрафт мелкого кусочка в жидкость
        e.recipes.tfc.heating(oreItem, tfcProperty.getMeltTemp())
            .resultFluid(Fluid.of(outputMaterial.getFluid(), 16))
            .id(`tfc:heating/ore/small_native_${material.getName()}`)
    }

    GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
        const tfcProperty = material.getProperty(TFGPropertyKey.TFC_PROPERTY)

        if (tfcProperty != null) {
            const outputMaterial = (tfcProperty.getOutputMaterial() == null) ? material : tfcProperty.getOutputMaterial()

            // 1. Префикс ассоциируемый с текущим предметом.
            // 2. Проперти ТФК с нагревом металла и другими полезными проперти.
            // 3. Материал из которого состоит объект.
            // 4. Материал в который объект должен быть преобразован после разборки.

            processNuggets(TagPrefix.nugget, tfcProperty, material, outputMaterial)
            processIngot(TagPrefix.ingot, tfcProperty, material, outputMaterial)
            processDoubleIngot(TFGTagPrefix.ingotDouble, tfcProperty, material, outputMaterial)
            processPlate(TagPrefix.plate, tfcProperty, material, outputMaterial)
            processDoublePlate(TagPrefix.plateDouble, tfcProperty, material, outputMaterial)
            processRods(TagPrefix.rod, tfcProperty, material, outputMaterial)
            processLongRods(TagPrefix.rodLong, tfcProperty, material, outputMaterial)
            processBolts(TagPrefix.bolt, tfcProperty, material, outputMaterial)
            processScrews(TagPrefix.screw, tfcProperty, material, outputMaterial)
            processRings(TagPrefix.ring, tfcProperty, material, outputMaterial)
            processBlock(TagPrefix.block, tfcProperty, material, outputMaterial)
            processTinyDust(TagPrefix.dustTiny, tfcProperty, material, outputMaterial)
            processSmallDust(TagPrefix.dustSmall, tfcProperty, material, outputMaterial)
            processDust(TagPrefix.dust, tfcProperty, material, outputMaterial)
            processImpureDust(TagPrefix.dustImpure, tfcProperty, material, outputMaterial)
            processPurifiedDust(TagPrefix.dustPure, tfcProperty, material, outputMaterial)
            processCrushedOre(TagPrefix.crushed, tfcProperty, material, outputMaterial)
            processCrushedPurifiedOre(TagPrefix.crushedPurified, tfcProperty, material, outputMaterial)
            processCrushedRefinedOre(TagPrefix.crushedRefined, tfcProperty, material, outputMaterial)
            processRichRawOre(TFGTagPrefix.richRawOre, tfcProperty, material, outputMaterial)
            processNormalRawore(TagPrefix.rawOre, tfcProperty, material, outputMaterial)
            processPoorRawOre(TFGTagPrefix.poorRawOre, tfcProperty, material, outputMaterial)
            
            // 1. Тип инструмента
            // 2. Префикс ассоциируемый с текущим предметом.
            // 3. Проперти ТФК с нагревом металла и другими полезными проперти.
            // 4. Материал из которого состоит объект.
            // 5. Материал в который объект должен быть преобразован после разборки.
            
            if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL)) {
                processToolSword(GTToolType.SWORD, TFGTagPrefix.toolHeadSword, tfcProperty, material, outputMaterial)
                processToolPickaxe(GTToolType.PICKAXE, TFGTagPrefix.toolHeadPickaxe, tfcProperty, material, outputMaterial)
                processToolAxe(GTToolType.AXE, TFGTagPrefix.toolHeadAxe, tfcProperty, material, outputMaterial)
                processToolShovel(GTToolType.SHOVEL, TFGTagPrefix.toolHeadShovel, tfcProperty, material, outputMaterial)
                processToolHoe(GTToolType.HOE, TFGTagPrefix.toolHeadHoe, tfcProperty, material, outputMaterial)
                processToolKnife(GTToolType.KNIFE, TFGTagPrefix.toolHeadKnife, tfcProperty, material, outputMaterial)
                processToolMiningHammer(GTToolType.MINING_HAMMER, TFGTagPrefix.toolHeadMiningHammer, tfcProperty, material, outputMaterial)
                processToolScythe(GTToolType.SCYTHE, TFGTagPrefix.toolHeadScythe, tfcProperty, material, outputMaterial) // because sense dont make sense
                processToolFile(GTToolType.FILE, TFGTagPrefix.toolHeadFile, tfcProperty, material, outputMaterial)
                processToolHammer(GTToolType.HARD_HAMMER, TFGTagPrefix.toolHeadHammer, tfcProperty, material, outputMaterial)
                processToolSaw(GTToolType.SAW, TFGTagPrefix.toolHeadSaw, tfcProperty, material, outputMaterial)
                processToolButcheryKnife(GTToolType.BUTCHERY_KNIFE, TFGTagPrefix.toolHeadButcheryKnife, tfcProperty, material, outputMaterial)
                processToolSpade(GTToolType.SPADE, TFGTagPrefix.toolHeadSpade, tfcProperty, material, outputMaterial)
    
                processToolPropick(TFGTagPrefix.toolHeadPropick, tfcProperty, material, outputMaterial)
                processToolJavelin(TFGTagPrefix.toolHeadJavelin, tfcProperty, material, outputMaterial)
                processToolChisel(TFGTagPrefix.toolHeadChisel, tfcProperty, material, outputMaterial)
                processToolMace(TFGTagPrefix.toolHeadMace, tfcProperty, material, outputMaterial)

                processToolShield(tfcProperty, material, outputMaterial)
                processToolFishingRod(tfcProperty, material, outputMaterial)
                processTuyere(tfcProperty, material, outputMaterial)
                processToolTongs(tfcProperty, material, outputMaterial)
            }

            if (material.hasFlag(TFGMaterialFlags.HAS_TFC_ARMOR)) {
                processTFCArmor(tfcProperty, material, outputMaterial)
            }
            
            processTFCMetalBlocks(TFGTagPrefix.blockPlated, tfcProperty, material, outputMaterial)
            processTFCMetalStairs(TFGTagPrefix.stairPlated, tfcProperty, material, outputMaterial)
            processTFCMetalSlabs(TFGTagPrefix.slabPlated, tfcProperty, material, outputMaterial)

            processAnvils(TFGTagPrefix.anvil, tfcProperty, material, outputMaterial)
            processUnfinishedLamp(TFGTagPrefix.lampUnfinished, tfcProperty, material, outputMaterial)
            processLamps(TFGTagPrefix.lamp, tfcProperty, material, outputMaterial)
            processTrapdoors(TFGTagPrefix.trapdoor, tfcProperty, material, outputMaterial)
            processChains(TFGTagPrefix.chain, tfcProperty, material, outputMaterial)
            processBars(TFGTagPrefix.bars, tfcProperty, material, outputMaterial)
            processBell(TFGTagPrefix.bell, tfcProperty, material, outputMaterial)
            
            processTFCSmallOres(TFGTagPrefix.oreSmall, tfcProperty, material, outputMaterial)
            processTFCSmallNativeOres(TFGTagPrefix.oreSmallNative, tfcProperty, material, outputMaterial)
        }
    })
    //#endregion

    //#region Новые сплавы

    //#region Сплав красного камня
    e.recipes.tfc.alloy('tfg:red_alloy', [
        TFC.alloyPart('tfg:redstone', 0.23, 0.27),
        TFC.alloyPart('tfc:copper', 0.73, 0.77)
    ]).id('tfg:alloy/red_alloy')
    //#endregion

    //#region Сплав олова
    e.recipes.tfc.alloy('tfg:tin_alloy', [
        TFC.alloyPart('tfc:tin', 0.45, 0.55),
        TFC.alloyPart('tfc:cast_iron', 0.45, 0.55)
    ]).id('tfg:alloy/tin_alloy')
    //#endregion

    //#endregion

    //#region Удаление рецептов для предметов из CastIron

    // Блок
    e.remove({ id: `tfc:crafting/metal/block/cast_iron` })
    e.remove({ id: `tfc:heating/metal/cast_iron_block` })

    // Ступень
    e.remove({ id: `tfc:crafting/metal/block/cast_iron_stairs` })
    e.remove({ id: `tfc:heating/metal/cast_iron_block_stairs` })

    // Полублок
    e.remove({ id: `tfc:crafting/metal/block/cast_iron_slab` })
    e.remove({ id: `tfc:heating/metal/cast_iron_block_slab` })

    // Слиток
    e.remove({ id: `tfc:casting/cast_iron_ingot` })
    e.remove({ id: `tfc:casting/cast_iron_fire_ingot` })
    e.remove({ id: `tfc:heating/metal/cast_iron_ingot` })
    e.remove({ id: `tfc:welding/cast_iron_double_ingot` })
    e.remove({ id: `tfc:anvil/cast_iron_rod` })

    // Двойной слиток
    e.remove({ id: `tfc:heating/metal/cast_iron_double_ingot` })
    e.remove({ id: `tfc:anvil/cast_iron_sheet` })

    // Пластина
    e.remove({ id: `tfc:heating/metal/cast_iron_sheet` })
    e.remove({ id: `tfc:welding/cast_iron_double_sheet` })

    // Двойная пластина
    e.remove({ id: `tfc:heating/metal/cast_iron_double_sheet` })

    // Стержень
    e.remove({ id: `tfc:heating/metal/cast_iron_rod` })

    // Блок
    e.remove({ id: `tfc:crafting/metal/block/cast_iron` })
    e.remove({ id: `tfc:heating/metal/cast_iron_block` })

    // Ступенька
    e.remove({ id: `tfc:crafting/metal/block/cast_iron_stairs` })
    e.remove({ id: `tfc:heating/metal/cast_iron_block_stairs` })

    // Полублок
    e.remove({ id: `tfc:crafting/metal/block/cast_iron_slab` })
    e.remove({ id: `tfc:heating/metal/cast_iron_block_slab` })


    //#endregion

    //#region Рецепты ковки TFC слитков в GT машинах

    //#region Сырая крица -> Укрепленная крица
    e.recipes.gtceu.forge_hammer('tfg/refined_bloom')             
        .itemInputs('tfc:raw_iron_bloom')
        .itemOutputs('tfc:refined_iron_bloom')
        .duration(1000)
        .EUt(4)

    //todo: create

    //#endregion

    //#region Укрепленная крица -> Слиток кованного железа
    e.recipes.gtceu.forge_hammer('tfg/wrought_iron_ingot')             
        .itemInputs('tfc:refined_iron_bloom')
        .itemOutputs('gtceu:wrought_iron_ingot')
        .duration(1000)
        .EUt(4)

    //todo: create

    //#endregion

    //#region Чугун -> Высокоуглеродная сталь
    e.recipes.gtceu.forge_hammer('tfg/high_carbon_steel')             
        .itemInputs('tfc:metal/ingot/pig_iron')
        .itemOutputs('tfc:metal/ingot/high_carbon_steel')
        .duration(1000)
        .EUt(4)

    //todo: create

    //#endregion

    //#region Высокоуглеродная сталь -> Cталь
    e.recipes.gtceu.forge_hammer('tfg/steel')             
        .itemInputs('tfc:metal/ingot/high_carbon_steel')
        .itemOutputs('gtceu:steel_ingot')
        .duration(1000)
        .EUt(4)

    //todo: create

    //#endregion

    //#region Высокоуглеродная черная сталь -> черная сталь
    e.recipes.gtceu.forge_hammer('tfg/black_steel')             
        .itemInputs('tfc:metal/ingot/high_carbon_black_steel')
        .itemOutputs('gtceu:black_steel_ingot')
        .duration(1000)
        .EUt(4)

    //todo: create

    //#endregion

    //#region Высокоуглеродная синяя сталь -> синяя сталь 
    e.recipes.gtceu.forge_hammer('tfg/blue_steel')             
        .itemInputs('tfc:metal/ingot/high_carbon_blue_steel')
        .itemOutputs('gtceu:blue_steel_ingot')
        .duration(1000)
        .EUt(4)

    //todo: create

    //#endregion
    
    //#region Высокоуглеродная красная сталь -> красная сталь 
    e.recipes.gtceu.forge_hammer('tfg/red_steel')             
        .itemInputs('tfc:metal/ingot/high_carbon_red_steel')
        .itemOutputs('gtceu:red_steel_ingot')
        .duration(1000)
        .EUt(4)

    //todo: create

    //#endregion

    //#region Слабая сталь + Чугун -> Высокоуглеродная черная сталь
    e.recipes.gtceu.alloy_smelter('tfg/high_carbon_black_steel')             
        .itemInputs('tfc:metal/ingot/weak_steel', 'tfc:metal/ingot/pig_iron')
        .itemOutputs('tfc:metal/ingot/high_carbon_black_steel')
        .duration(1600)
        .EUt(4)

    //todo: create

    //#endregion
    

    //#region Слабая синяя сталь + Черная сталь -> Высокоуглеродная синяя сталь
    e.recipes.gtceu.alloy_smelter('tfg/high_carbon_blue_steel')             
        .itemInputs('tfc:metal/ingot/weak_blue_steel', 'gtceu:black_steel_ingot')
        .itemOutputs('tfc:metal/ingot/high_carbon_blue_steel')
        .duration(1600)
        .EUt(4)

    //todo: create

    //#endregion
    

    //#region Слабая красная сталь + Черная сталь -> Высокоуглеродная красная сталь
    e.recipes.gtceu.alloy_smelter('tfg/high_carbon_red_steel')             
        .itemInputs('tfc:metal/ingot/weak_red_steel', 'gtceu:black_steel_ingot')
        .itemOutputs('tfc:metal/ingot/high_carbon_red_steel')
        .duration(1600)
        .EUt(4)

    //todo: create

    //#endregion

    //#endregion
    
    //#region Фикс рецептов металлических предметов

    // Рецепт Jacks
    e.recipes.tfc.welding('tfc:jacks', '#forge:rods/brass', '#forge:plates/brass', 2)
        .id(`tfc:welding/jacks`)
    
    // Декрафт Jacks
    e.recipes.tfc.heating('tfc:jacks', 930)
        .resultFluid(Fluid.of('gtceu:brass', 144))
        .id(`tfc:heating/jacks`)

    // Декрафт Gem Saw
    e.recipes.tfc.heating('tfc:gem_saw', 930)
        .resultFluid(Fluid.of('gtceu:brass', 72))
        .id(`tfc:heating/gem_saw`)

    // Декрафт сырой крицы в жидкость
    e.recipes.tfc.heating(`tfc:raw_iron_bloom`, 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id(`tfc:heating/raw_bloom`)

    // Декрафт укрепленной крицы в жидкость
    e.recipes.tfc.heating(`tfc:refined_iron_bloom`, 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id(`tfc:heating/refined_bloom`)

    // Гриль
    e.recipes.tfc.heating('tfc:wrought_iron_grill', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 288))
        .id(`tfc:heating/grill`)

    // Ванильная дверь декрафт
    e.recipes.tfc.heating('minecraft:iron_door', 1535)
        .resultFluid(Fluid.of('gtceu:iron', 144))
        .id(`tfc:heating/iron_door`)
    
    // Ванильная дверь на наковальне
    e.recipes.tfc.anvil('minecraft:iron_door', '#forge:plates/wrought_iron', ['hit_last', 'draw_not_last', 'punch_not_last'])
        .tier(3)
        .id(`tfc:anvil/iron_door`)
    
    // Bloom -> Wrought Iron Ingot
    e.recipes.tfc.anvil('gtceu:wrought_iron_ingot', 'tfc:refined_iron_bloom', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(2)
        .id('tfc:anvil/wrought_iron_from_bloom')

    // High Carbon Steel Ingot -> Steel Ingot
    e.recipes.tfc.anvil('gtceu:steel_ingot', 'tfc:metal/ingot/high_carbon_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(3)
        .id('tfc:anvil/steel_ingot')

    // High Carbon Black Steel Ingot -> Black Steel Ingot
    e.recipes.tfc.anvil('gtceu:black_steel_ingot', 'tfc:metal/ingot/high_carbon_black_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(4)
        .id('tfc:anvil/black_steel_ingot')

    // High Carbon Red Steel Ingot -> Red Steel Ingot
    e.recipes.tfc.anvil('gtceu:red_steel_ingot', 'tfc:metal/ingot/high_carbon_red_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(5)
        .id('tfc:anvil/red_steel_ingot')

    // High Carbon Blue Steel Ingot -> Blue Steel Ingot
    e.recipes.tfc.anvil('gtceu:blue_steel_ingot', 'tfc:metal/ingot/high_carbon_blue_steel', ['hit_last', 'hit_second_last', 'hit_third_last']).tier(5)
        .id('tfc:anvil/blue_steel_ingot')

    // Cast iron -> Raw Iron Bloom
    e.recipes.tfc.bloomery('tfc:raw_iron_bloom', 'minecraft:charcoal', Fluid.of('gtceu:iron', 144), 15000)
        .id('tfc:bloomery/raw_iron_bloom')

    // Cast Iron -> Pig Iron
    e.recipes.tfc.blast_furnace(Fluid.of('tfg:pig_iron', 1), '#tfc:flux', Fluid.of('gtceu:iron', 1))
        .id('tfc:blast_furnace/pig_iron')

    //#endregion

    //#region Земля и ее виды
    e.recipes.gtceu.macerator('tfg:dirt_from_bio_chaff')             
        .itemInputs('gtceu:bio_chaff')
        .itemOutputs('tfc:dirt/loam')
        .duration(300)
        .EUt(4)

    // Loam + Silt -> Silty Loam (Миксер)
    e.recipes.gtceu.mixer('tfg:silty_loam_dirt')             
        .itemInputs('tfc:dirt/loam', 'tfc:dirt/silt')
        .itemOutputs('tfc:dirt/silty_loam')
        .duration(1600)
        .EUt(12)

    // Silty Loam + Sticks -> Rooted Silty Loam (Миксер)
    e.recipes.gtceu.mixer('tfg:rooted_silty_loam_dirt')             
        .itemInputs('tfc:dirt/silty_loam', '#forge:rods/wooden')
        .itemOutputs('tfc:rooted_dirt/silty_loam')
        .duration(1600)
        .EUt(12)

    // Loam + Sand -> Sandy Loam (Миксер)
    e.recipes.gtceu.mixer('tfg:sandy_loam_dirt')             
        .itemInputs('tfc:dirt/loam', '#forge:sand')
        .itemOutputs('tfc:dirt/sandy_loam')
        .duration(1600)
        .EUt(12)

    // Грязь -> Трава
    global.TFC_MUD_TYPES.forEach(mud => {
        e.smelting(`tfc:dirt/${mud}`, `tfc:mud/${mud}`)
            .id(`tfg:smelting/tfc/${mud}_mud_to_grass`)
    })
    //#endregion

    //#region Грязь
    global.TFC_MUD_TYPES.forEach(mud => {
        // Dirt -> Mud
        e.recipes.gtceu.mixer(`tfg:${mud}_grass_to_mud`)             
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
        e.smelting(`tfc:mud_brick/${mud}`, `tfc:drying_bricks/${mud}`)
            .id(`tfg:smelting/${mud}_drying_brick_to_brick`)

        e.custom({
            type: "firmalife:drying",
            ingredient: {
                item: `tfc:drying_bricks/${mud}`
            },
            result: {
                item: `tfc:mud_brick/${mud}`
            }
        }).id(`tfg:drying/${mud}_drying_brick_to_brick`)

        // Кирпич -> Блок кирпичей
        e.shaped(`tfc:mud_bricks/${mud}`, [
            'ABA',
            'BAB',
            'ABA'  
        ], {
            A: `tfc:mud_brick/${mud}`,
            B: '#tfc:mortar'
        }).id(`tfc:crafting/soil/${mud}_mud_bricks`)

        e.recipes.gtceu.assembler(`mud_bricks_${mud}`)             
            .itemInputs(`5x tfc:mud_brick/${mud}`)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`4x tfc:mud_bricks/${mud}`)
            .EUt(2).duration(50)

        // Блок кирпичей -> Ступени
        e.remove({ id: `tfc:crafting/soil/${mud}_mud_bricks_stairs` })

        e.stonecutting(`tfc:mud_bricks/${mud}_stairs`, `tfc:mud_bricks/${mud}`)
            .id(`tfc:stonecutting/soil/${mud}_mud_bricks_stairs`)
        
        e.recipes.gtceu.cutter(`tfg:${mud}_mud_bricks_to_stairs`)             
            .itemInputs(`tfc:mud_bricks/${mud}`)
            .circuit(0)
            .itemOutputs(`tfc:mud_bricks/${mud}_stairs`)
            .EUt(8).duration(100)

        // Блок кирпичей -> Плиты
        e.remove({ id: `tfc:crafting/soil/${mud}_mud_bricks_slab` })

        e.stonecutting(`2x tfc:mud_bricks/${mud}_slab`, `tfc:mud_bricks/${mud}`)
            .id(`tfc:stonecutting/soil/${mud}_mud_bricks_slab`)

        e.recipes.gtceu.cutter(`tfg:${mud}_mud_bricks_to_slabs`)             
            .itemInputs(`tfc:mud_bricks/${mud}`)
            .circuit(1)
            .itemOutputs(`2x tfc:mud_bricks/${mud}_slab`)
            .EUt(8).duration(100)

        // Блок кирпичей -> Стена
        e.remove({ id: `tfc:crafting/soil/${mud}_mud_bricks_wall` })

        e.stonecutting(`tfc:mud_bricks/${mud}_wall`, `tfc:mud_bricks/${mud}`)
            .id(`tfc:stonecutting/soil/${mud}_mud_bricks_wall`)

        e.recipes.gtceu.cutter(`tfg:${mud}_mud_bricks_to_wall`)             
            .itemInputs(`tfc:mud_bricks/${mud}`)
            .circuit(2)
            .itemOutputs(`tfc:mud_bricks/${mud}_wall`)
            .EUt(8).duration(100)
    })

    //#endregion

    //#region Дерево
    
    // Какие то рецепты дерева
    global.TFC_WOOD_TYPES.forEach(wood => {
        e.remove({ id: `tfc:crafting/wood/${wood}_axle` })
        e.remove({ id: `tfc:crafting/wood/${wood}_bladed_axle` })
        e.remove({ id: `tfc:crafting/wood/${wood}_encased_axle` })
        e.remove({ id: `tfc:crafting/wood/${wood}_clutch` })
        e.remove({ id: `tfc:crafting/wood/${wood}_gear_box` })
        e.remove({ id: `tfc:crafting/wood/${wood}_water_wheel` })
    
        // Бревна -> Пиломатериалы
        generateCutterRecipe(e, `#tfc:${wood}_logs`, null, `16x tfc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_log`)

        // Доски -> Пиломатериалы
        generateCutterRecipe(e, `tfc:wood/planks/${wood}`, null, `4x tfc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_planks`)

        // Ступень -> Пиломатериалы
        generateCutterRecipe(e, `tfc:wood/planks/${wood}_stairs`, null, `3x tfc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_stairs`)
    

        // Плита -> Пиломатериалы
        generateCutterRecipe(e, `tfc:wood/planks/${wood}_slab`, null, `2x tfc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_slab`)

        // ? -> Деревянная нажимная пластина
        e.shaped(`tfc:wood/planks/${wood}_pressure_plate`, [
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

        e.recipes.gtceu.assembler(`${wood}_pressure_plate`)             
            .itemInputs('#forge:springs', `2x tfc:wood/planks/${wood}_slab`)
            .circuit(0)
            .itemOutputs(`2x tfc:wood/planks/${wood}_pressure_plate`)
            .duration(50)
            .EUt(2)

        // ? -> Деревянная кнопка
        e.remove({ id: `tfc:crafting/wood/${wood}_button` })

        generateCutterRecipe(e, `tfc:wood/planks/${wood}_pressure_plate`, null, `6x tfc:wood/planks/${wood}_button`, 50, 2, `${wood}_button`)
        
    })

    //#endregion

    //#region Камень
    global.TFC_STONE_TYPES.forEach(stone => {
    
        let stoneMaterial = TFGHelpers.getMaterial(stone);
        let stoneDust = ChemicalHelper.get(TagPrefix.dust, stoneMaterial, 1)
        let smallStoneDust = ChemicalHelper.get(TagPrefix.dustSmall, stoneMaterial, 1)

        // Кирпич (предмет)
        e.recipes.gtceu.assembler(`tfg:tfc/${stone}_loose_to_brick`)             
            .itemInputs(`tfc:rock/loose/${stone}`)
            .itemOutputs(`tfc:brick/${stone}`)
            .EUt(8).duration(40)
            

        //#region Сырой камень

        // Сырой камень -> Сырой камень
        e.recipes.gtceu.rock_breaker(`${stone}_raw`)             
            .notConsumable(`tfc:rock/raw/${stone}`)
            .itemOutputs(`tfc:rock/raw/${stone}`)
            .EUt(7).duration(16)

        // Сырой камень -> Булыжник
        e.recipes.gtceu.forge_hammer(`${stone}_raw_to_cobble`)             
            .itemInputs(`tfc:rock/raw/${stone}`)
            .itemOutputs(`tfc:rock/cobble/${stone}`)
            .EUt(16).duration(10)

        // Сырой камень -> Ступени
        e.remove({ id: `tfc:crafting/rock/${stone}_raw_stairs` })

        generateCutterRecipe(e, `tfc:rock/raw/${stone}`, 0, [`tfc:rock/raw/${stone}_stairs`, stoneDust], 100, 8, `${stone}_raw_to_stairs`)

        // Сырой камень -> Плиты
        e.remove({ id: `tfc:crafting/rock/${stone}_raw_slab` })

        generateCutterRecipe(e, `tfc:rock/raw/${stone}`, 1, [`2x tfc:rock/raw/${stone}_slab`, stoneDust], 100, 8, `${stone}_raw_to_slab`)

        // Сырой камень -> Стена
        e.remove({ id: `tfc:crafting/rock/${stone}_raw_wall` })

        generateCutterRecipe(e, `tfc:rock/raw/${stone}`, 2, [`tfc:rock/raw/${stone}_wall`, stoneDust], 100, 8, `${stone}_raw_to_wall`)

        // ? -> Сырая нажимная пластина
        e.shaped(`tfc:rock/pressure_plate/${stone}`, [
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

        e.recipes.gtceu.assembler(`${stone}_raw_pressure_plate`)             
            .itemInputs('#forge:springs', `2x tfc:rock/raw/${stone}_slab`)
            .circuit(0)
            .itemOutputs(`2x tfc:rock/pressure_plate/${stone}`)
            .duration(50)
            .EUt(2)

        // ? -> Сырая кнопка
        e.remove({ id: `tfc:crafting/rock/${stone}_button` })

        generateCutterRecipe(e, `tfc:rock/pressure_plate/${stone}`, 0, `6x tfc:rock/button/${stone}`, 50, 2, `${stone}_raw_button`)

        //#endregion

        //#region Булыжник

        // Булыжник -> Булыжник
        e.recipes.gtceu.rock_breaker(`${stone}_cobble`)             
            .notConsumable(`tfc:rock/cobble/${stone}`)
            .itemOutputs(`tfc:rock/cobble/${stone}`)
            .duration(16)
            .EUt(7)

        // Булыжник -> Гравий
        e.recipes.gtceu.forge_hammer(`${stone}_cobble_to_gravel`)             
            .itemInputs(`tfc:rock/cobble/${stone}`)
            .itemOutputs(`tfc:rock/gravel/${stone}`)
            .duration(10)
            .EUt(16)

        // Камни -> Булыжник
        e.shaped(`tfc:rock/cobble/${stone}`, [
            'ABA',
            'BAB',
            'ABA'  
        ], {
            A: `tfc:rock/loose/${stone}`,
            B: '#tfc:mortar'
        }).id(`tfc:crafting/rock/${stone}_loose_rocks_to_cobble`)

        e.recipes.gtceu.assembler(`${stone}_loose_rocks_to_cobble`)             
            .itemInputs(`4x tfc:rock/loose/${stone}`)
            .circuit(0)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`tfc:rock/cobble/${stone}`)
            .duration(50)
            .EUt(2)

        // Булыжник -> Ступени
        e.remove({ id: `tfc:crafting/rock/${stone}_cobble_stairs` })

        generateCutterRecipe(e, `tfc:rock/cobble/${stone}`, 0, [`tfc:rock/cobble/${stone}_stairs`, stoneDust], 100, 8, `${stone}_cobble_to_stairs`)

        // Булыжник -> Плиты
        e.remove({ id: `tfc:crafting/rock/${stone}_cobble_slab` })

        generateCutterRecipe(e, `tfc:rock/cobble/${stone}`, 1, [`2x tfc:rock/cobble/${stone}_slab`, stoneDust], 100, 8, `${stone}_cobble_to_slab`)

        // Булыжник -> Стена
        e.remove({ id: `tfc:crafting/rock/${stone}_cobble_wall` })

        generateCutterRecipe(e, `tfc:rock/cobble/${stone}`, 2, [`tfc:rock/cobble/${stone}_wall`, stoneDust], 100, 8, `${stone}_cobble_to_wall`)

        //#endregion

        //#region Гладкий

        // Сырой камень -> Гладкий
        e.recipes.gtceu.laser_engraver(`raw_${stone}_to_smooth`)             
            .itemInputs(`tfc:rock/raw/${stone}`)
            .notConsumable('gtceu:glass_lens')
            .itemOutputs(`tfc:rock/smooth/${stone}`)
            .duration(32)
            .EUt(100)

        // Укрепленный сырой камень -> Гладкий
        e.recipes.gtceu.laser_engraver(`hardened_${stone}_to_smooth`)             
            .itemInputs(`tfc:rock/hardened/${stone}`)
            .notConsumable('gtceu:glass_lens')
            .itemOutputs(`tfc:rock/smooth/${stone}`)
            .duration(32)
            .EUt(100)

        // Булыжник -> Ступени
        e.remove({ id: `tfc:crafting/rock/${stone}_smooth_stairs` })

        generateCutterRecipe(e, `tfc:rock/smooth/${stone}`, 0, [`tfc:rock/smooth/${stone}_stairs`, stoneDust], 100, 8, `${stone}_smooth_to_stairs`)

        // Булыжник -> Плиты
        e.remove({ id: `tfc:crafting/rock/${stone}_smooth_slab` })

        generateCutterRecipe(e, `tfc:rock/smooth/${stone}`, 1, [`2x tfc:rock/smooth/${stone}_slab`, stoneDust], 100, 8, `${stone}_smooth_to_slab`)

        // Булыжник -> Стена
        e.remove({ id: `tfc:crafting/rock/${stone}_smooth_wall` })

        generateCutterRecipe(e, `tfc:rock/smooth/${stone}`, 2, [`tfc:rock/smooth/${stone}_wall`, stoneDust], 100, 8, `${stone}_smooth_to_wall`)

        //#endregion
    
        //#region Кирпич

        // Кирпич -> Блок кирпичей
        e.recipes.gtceu.assembler(`bricks_${stone}`)             
            .itemInputs(`5x tfc:brick/${stone}`)
            .circuit(1)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`4x tfc:rock/bricks/${stone}`)
            .duration(50)
            .EUt(2)

        // Блок кирпичей -> Ступени
        e.remove({ id: `tfc:crafting/rock/${stone}_bricks_stairs` })

        generateCutterRecipe(e, `tfc:rock/bricks/${stone}`, 0, [`tfc:rock/bricks/${stone}_stairs`, stoneDust], 100, 8, `${stone}_bricks_to_stairs`)

        // Блок кирпичей -> Плиты
        e.remove({ id: `tfc:crafting/rock/${stone}_bricks_slab` })

        generateCutterRecipe(e, `tfc:rock/bricks/${stone}`, 1, [`2x tfc:rock/bricks/${stone}_slab`, stoneDust], 100, 8, `${stone}_bricks_to_slab`)

        // Блок кирпичей -> Стена
        e.remove({ id: `tfc:crafting/rock/${stone}_bricks_wall` })

        generateCutterRecipe(e, `tfc:rock/bricks/${stone}`, 2, [`tfc:rock/bricks/${stone}_wall`, stoneDust], 100, 8, `${stone}_bricks_to_wall`)

        //#endregion
    
        //#region Потрескавшийся кирпич
        
        // Кирпич -> Потрескавшийся кирпич
        e.recipes.gtceu.forge_hammer(`cracked_bricks_${stone}`)             
            .itemInputs(`tfc:rock/bricks/${stone}`)
            .itemOutputs(`tfc:rock/cracked_bricks/${stone}`)
            .duration(25)
            .EUt(8)

        // Потрескавшийся кирпич -> Ступени
        e.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_stairs` })

        generateCutterRecipe(e, `tfc:rock/cracked_bricks/${stone}`, 0, [`tfc:rock/cracked_bricks/${stone}_stairs`, stoneDust], 100, 8, `${stone}_cracked_bricks_to_stairs`)

        // Потрескавшийся кирпич -> Плиты
        e.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_slab` })

        generateCutterRecipe(e, `tfc:rock/cracked_bricks/${stone}`, 1, [`2x tfc:rock/cracked_bricks/${stone}_slab`, stoneDust], 100, 8, `${stone}_cracked_bricks_to_slab`)

        // Потрескавшийся кирпич -> Стена
        e.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_wall` })

        generateCutterRecipe(e, `tfc:rock/cracked_bricks/${stone}`, 2, [`tfc:rock/cracked_bricks/${stone}_wall`, stoneDust], 100, 8, `${stone}_cracked_bricks_to_wall`)

        //#endregion

        //#region Замшелый булыжник

        // Булыжник -> Замшелый булыжник
        e.shaped(`tfc:rock/mossy_cobble/${stone}`, [
            'ABA',
            'BAB',
            'ABA'  
        ], {
            A: `tfc:rock/mossy_loose/${stone}`,
            B: '#tfc:mortar'
        }).id(`tfc:crafting/rock/${stone}_mossy_loose_rocks_to_cobble`)

        e.recipes.gtceu.assembler(`${stone}_mossy_loose_rocks_to_mossy_cobble`)             
            .itemInputs(`4x tfc:rock/mossy_loose/${stone}`)
            .circuit(0)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`tfc:rock/mossy_cobble/${stone}`)
            .duration(50)
            .EUt(2)

        e.recipes.gtceu.assembler(`${stone}_cobble_rocks_to_mossy_cobble`)             
            .itemInputs(`tfc:rock/cobble/${stone}`, '#tfc:compost_greens_low')
            .circuit(0)
            .inputFluids(Fluid.of('minecraft:water', 144))
            .itemOutputs(`tfc:rock/mossy_cobble/${stone}`)
            .duration(50)
            .EUt(2)

        // Замшелый булыжник -> Ступени
        e.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_stairs` })

        generateCutterRecipe(e, `tfc:rock/mossy_cobble/${stone}`, 0, [`tfc:rock/mossy_cobble/${stone}_stairs`, stoneDust], 100, 8, `${stone}_mossy_cobble_to_stairs`)

        //Замшелый булыжник -> Плиты
        e.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_slab` })

        generateCutterRecipe(e, `tfc:rock/mossy_cobble/${stone}`, 1, [`2x tfc:rock/mossy_cobble/${stone}_slab`, stoneDust], 100, 8, `${stone}_mossy_cobble_to_slab`)

        // Замшелый булыжник -> Стена
        e.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_wall` })

        generateCutterRecipe(e, `tfc:rock/mossy_cobble/${stone}`, 2, [`tfc:rock/mossy_cobble/${stone}_wall`, stoneDust], 100, 8, `${stone}_mossy_cobble_to_wall`)

        //#endregion

        //#region Замшелый кирпич

        // Блок кирпичей -> Замшелый кирпич
        e.recipes.gtceu.assembler(`mossy_bricks_${stone}`)             
            .itemInputs(`tfc:rock/bricks/${stone}`, '#tfc:compost_greens_low')
            .circuit(0)
            .inputFluids(Fluid.of('minecraft:water', 144))
            .itemOutputs(`tfc:rock/mossy_bricks/${stone}`)
            .duration(50)
            .EUt(2)

        // Замшелый булыжник -> Ступени
        e.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_stairs` })

        generateCutterRecipe(e, `tfc:rock/mossy_bricks/${stone}`, 0, [`tfc:rock/mossy_bricks/${stone}_stairs`, stoneDust], 100, 8, `${stone}_mossy_bricks_to_stairs`)

        //Замшелый булыжник -> Плиты
        e.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_slab` })

        generateCutterRecipe(e, `tfc:rock/mossy_bricks/${stone}`, 1, [`2x tfc:rock/mossy_bricks/${stone}_slab`, stoneDust], 100, 8, `${stone}_mossy_bricks_to_slab`)

        // Замшелый булыжник -> Стена
        e.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_wall` })

        generateCutterRecipe(e, `tfc:rock/mossy_bricks/${stone}`, 2, [`tfc:rock/mossy_bricks/${stone}_wall`, stoneDust], 100, 8, `${stone}_mossy_bricks_to_wall`)

        //#endregion
    
        //#region Укрепленный камень

        e.recipes.gtceu.assembler(`hardened_${stone}`)             
            .itemInputs(`5x tfc:rock/raw/${stone}`)
            .circuit(0)
            .inputFluids(Fluid.of('gtceu:concrete', 72))
            .itemOutputs(`2x tfc:rock/hardened/${stone}`)
            .duration(250)
            .EUt(8)

        //#endregion

        //#region Акведук

        e.recipes.gtceu.assembler(`aqueduct_${stone}`)             
            .itemInputs(`3x tfc:brick/${stone}`)
            .circuit(2)
            .inputFluids(Fluid.of('gtceu:concrete', 16))
            .itemOutputs(`tfc:rock/aqueduct/${stone}`)
            .duration(50)
            .EUt(2)

        //#endregion
    
        //#region Резной кирпич

        // Блок кирпичей -> Резной кирпич
        e.recipes.gtceu.laser_engraver(`chiseled_${stone}`)             
            .itemInputs(`tfc:rock/bricks/${stone}`)
            .notConsumable('gtceu:glass_lens')
            .itemOutputs(`tfc:rock/chiseled/${stone}`)
            .duration(32)
            .EUt(100)

        //#endregion
    
        //#region Декрафт блоков камня в пыль

        //#region Целый блок
        
        // Сырой
        e.recipes.gtceu.macerator(`raw_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Булыжник
        e.recipes.gtceu.macerator(`cobble_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Гладкий
        e.recipes.gtceu.macerator(`smooth_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Кирпичи
        e.recipes.gtceu.macerator(`bricks_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        e.recipes.gtceu.macerator(`cracked_bricks_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        e.recipes.gtceu.macerator(`mossy_cobble_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        e.recipes.gtceu.macerator(`mossy_bricks_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        //#endregion
        
        //#region Ступень
        
        // Сырой
        e.recipes.gtceu.macerator(`raw_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Булыжник
        e.recipes.gtceu.macerator(`cobble_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Гладкий
        e.recipes.gtceu.macerator(`smooth_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Кирпичи
        e.recipes.gtceu.macerator(`bricks_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        e.recipes.gtceu.macerator(`cracked_bricks_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        e.recipes.gtceu.macerator(`mossy_cobble_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        e.recipes.gtceu.macerator(`mossy_bricks_stairs_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}_stairs`)
            .itemOutputs(smallStoneDust.withCount(6))
            .duration(4)
            .EUt(75)

        //#endregion

        //#region Плита

        // Сырой
        e.recipes.gtceu.macerator(`raw_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Булыжник
        e.recipes.gtceu.macerator(`cobble_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Гладкий
        e.recipes.gtceu.macerator(`smooth_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Кирпичи
        e.recipes.gtceu.macerator(`bricks_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        e.recipes.gtceu.macerator(`cracked_bricks_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        e.recipes.gtceu.macerator(`mossy_cobble_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        e.recipes.gtceu.macerator(`mossy_bricks_slab_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}_slab`)
            .itemOutputs(smallStoneDust.withCount(2))
            .duration(4)
            .EUt(75)

        //#endregion
        
        //#region Стена

        // Сырой
        e.recipes.gtceu.macerator(`raw_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/raw/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Булыжник
        e.recipes.gtceu.macerator(`cobble_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cobble/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Гладкий
        e.recipes.gtceu.macerator(`smooth_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/smooth/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Кирпичи
        e.recipes.gtceu.macerator(`bricks_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/bricks/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Потрескавшиеся кирпичи
        e.recipes.gtceu.macerator(`cracked_bricks_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/cracked_bricks/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Замшелый булыжник
        e.recipes.gtceu.macerator(`mossy_cobble_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_cobble/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Замшелый кирпич
        e.recipes.gtceu.macerator(`mossy_bricks_wall_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/mossy_bricks/${stone}_wall`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        //#endregion

        // Резной кирпич
        e.recipes.gtceu.macerator(`chiseled_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/chiseled/${stone}`)
            .itemOutputs(stoneDust)
            .duration(4)
            .EUt(75)

        // Укрепленный
        e.recipes.gtceu.macerator(`hardened_${stone}_to_dust`)             
            .itemInputs(`tfc:rock/hardened/${stone}`)
            .itemOutputs(stoneDust.withCount(2))
            .duration(8)
            .EUt(150)

        //#endregion
    })

    //#endregion

    //#region Песок

    // Песок душ -> Желтый песок
    e.recipes.gtceu.centrifuge('tfg:soul_sand_separation')             
        .itemInputs('minecraft:soul_sand')
        .chancedOutput('tfc:sand/yellow', 9000, 130)
        .chancedOutput('gtceu:small_saltpeter_dust', 8000, 480)
        .chancedOutput('gtceu:tiny_coal_dust', 2000, 340)
        .outputFluids(Fluid.of('gtceu:oil', 80))
        .duration(200)
        .EUt(80)
    
    // Нефтеносный -> Желтый песок
    e.recipes.gtceu.centrifuge('oilsands_ore_separation')             
        .itemInputs('#forge:ores/oilsands')
        .chancedOutput('tfc:sand/yellow', 5000, 5000)
        .outputFluids(Fluid.of('gtceu:oil', 2000))
        .duration(200)
        .EUt(30)

    // Пыль нефтеносного песка -> Желтый песок
    e.recipes.gtceu.centrifuge('oilsands_dust_separation')             
        .itemInputs('gtceu:oilsands_dust')
        .chancedOutput('tfc:sand/yellow', 5000, 5000)
        .outputFluids(Fluid.of('gtceu:oil', 2000))
        .duration(200)
        .EUt(30)

    // Земля -> Желтый песок
    e.recipes.gtceu.centrifuge('dirt_separation')             
        .itemInputs('#tfc:dirt')
        .chancedOutput('gtceu:plant_ball', 1250, 700)
        .chancedOutput('tfc:sand/yellow', 5000, 1200)
        .chancedOutput('gtceu:tiny_clay_dust', 4000, 900)
        .duration(250)
        .EUt(30)

    // Рецепты где нужно итерироваться по всем цветам
    global.SAND_COLORS.forEach(sandColor => {
        // Песчанник -> Песок
        e.recipes.gtceu.forge_hammer(`raw_${sandColor}_sandstone_to_sand`)             
            .itemInputs(`tfc:raw_sandstone/${sandColor}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(400)
            .EUt(2)

        // Гладкий песчанник -> Песок
        e.recipes.gtceu.forge_hammer(`smooth_${sandColor}_sandstone_to_sand`)             
            .itemInputs(`tfc:smooth_sandstone/${sandColor}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(400)
            .EUt(2)

        // Обрезанный песчанник -> Песок
        e.recipes.gtceu.forge_hammer(`cut_${sandColor}_sandstone_to_sand`)             
            .itemInputs(`tfc:cut_sandstone/${sandColor}`)
            .itemOutputs(`tfc:sand/${sandColor}`)
            .duration(400)
            .EUt(2)
        
        // Песок -> Песчанник
        e.recipes.gtceu.compressor(`sand_${sandColor}_to_sandstone`)             
            .itemInputs(`4x tfc:sand/${sandColor}`)
            .itemOutputs(`tfc:raw_sandstone/${sandColor}`)
            .duration(800)
            .EUt(2)

        // Песчанник -> Гладкий песчанник
        e.stonecutting(`tfc:smooth_sandstone/${sandColor}`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/raw_sandstone_${sandColor}_to_smooth_sandstone`)

        generateCutterRecipe(e, `tfc:raw_sandstone/${sandColor}`, 3, `tfc:smooth_sandstone/${sandColor}`, 100, 8, `raw_sandstone_${sandColor}_to_smooth_sandstone`)

        // Песчанник -> Обрезанный песчанник
        e.stonecutting(`tfc:cut_sandstone/${sandColor}`, `tfc:raw_sandstone/${sandColor}`)
            .id(`raw_sandstone_${sandColor}_to_cut_sandstone`)

        generateCutterRecipe(e, `tfc:raw_sandstone/${sandColor}`, 4, `tfc:cut_sandstone/${sandColor}`, 100, 8, `cut_sandstone_${sandColor}_to_smooth_sandstone`)

        // Песчанник -> Ступень
        e.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_stairs` })

        e.stonecutting(`tfc:raw_sandstone/${sandColor}_stairs`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_sandstone_to_stairs`)

        generateCutterRecipe(e, `tfc:raw_sandstone/${sandColor}`, 0, `tfc:raw_sandstone/${sandColor}_stairs`, 100, 8, `${sandColor}_sandstone_to_stairs`)

        // Песчанник -> Плита
        e.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_slab` })

        e.stonecutting(`2x tfc:raw_sandstone/${sandColor}_slab`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_sandstone_to_slabs`)

        generateCutterRecipe(e, `tfc:raw_sandstone/${sandColor}`, 1, `2x tfc:raw_sandstone/${sandColor}_slab`, 100, 8, `${sandColor}_sandstone_to_slab`)

        // Песчанник -> Стена
        e.remove({ id: `tfc:crafting/sandstone/${sandColor}_raw_wall` })

        e.stonecutting(`tfc:raw_sandstone/${sandColor}_wall`, `tfc:raw_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_sandstone_to_wall`)

        generateCutterRecipe(e, `tfc:raw_sandstone/${sandColor}`, 2, `tfc:raw_sandstone/${sandColor}_wall`, 100, 8, `${sandColor}_sandstone_to_wall`)

        // Гладкий песчанник -> Ступень
        e.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_stairs` })

        e.stonecutting(`tfc:smooth_sandstone/${sandColor}_stairs`, `tfc:smooth_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_stairs`)

        generateCutterRecipe(e, `tfc:smooth_sandstone/${sandColor}`, 0, `tfc:smooth_sandstone/${sandColor}_stairs`, 100, 8, `${sandColor}_smooth_sandstone_to_stairs`)

        // Гладкий песчанник -> Плита
        e.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_slab` })

        e.stonecutting(`2x tfc:smooth_sandstone/${sandColor}_slab`, `tfc:smooth_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_slab`)

        generateCutterRecipe(e, `tfc:smooth_sandstone/${sandColor}`, 1, `2x tfc:smooth_sandstone/${sandColor}_slab`, 100, 8, `${sandColor}_smooth_sandstone_to_slab`)

        // Гладкий песчанник -> Стена
        e.remove({ id: `tfc:crafting/sandstone/${sandColor}_smooth_wall` })

        e.stonecutting(`tfc:smooth_sandstone/${sandColor}_wall`, `tfc:smooth_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_smooth_sandstone_to_wall`)

        generateCutterRecipe(e, `tfc:smooth_sandstone/${sandColor}`, 2, `tfc:smooth_sandstone/${sandColor}_wall`, 100, 8, `${sandColor}_smooth_sandstone_to_wall`)

        // Обрезанный песчанник -> Ступень
        e.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_stairs` })

        e.stonecutting(`tfc:cut_sandstone/${sandColor}_stairs`, `tfc:cut_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_stairs`)

        generateCutterRecipe(e, `tfc:cut_sandstone/${sandColor}`, 0, `tfc:cut_sandstone/${sandColor}_stairs`, 100, 8, `${sandColor}_cut_sandstone_to_stairs`)

        // Обрезанный песчанник -> Плита
        e.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_slab` })

        e.stonecutting(`2x tfc:cut_sandstone/${sandColor}_slab`, `tfc:cut_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_slab`)

        generateCutterRecipe(e, `tfc:cut_sandstone/${sandColor}`, 1, `2x tfc:cut_sandstone/${sandColor}_slab`, 100, 8, `${sandColor}_cut_sandstone_to_slab`)

        // Обрезанный песчанник -> Стена
        e.remove({ id: `tfc:crafting/sandstone/${sandColor}_cut_wall` })

        e.stonecutting(`tfc:cut_sandstone/${sandColor}_wall`, `tfc:cut_sandstone/${sandColor}`)
            .id(`tfg:stonecutting/${sandColor}_cut_sandstone_to_wall`)

        generateCutterRecipe(e, `tfc:cut_sandstone/${sandColor}`, 2, `tfc:cut_sandstone/${sandColor}_wall`, 100, 8, `${sandColor}_cut_sandstone_to_wall`)
    })

    // Коричневый гравий -> Песок
    e.recipes.gtceu.forge_hammer('brown_gravel_to_sand')             
        .itemInputs('#tfc:brown_gravel')
        .itemOutputs('tfc:sand/brown')
        .duration(400)
        .EUt(2)

    // Белый гравий -> Песок
    e.recipes.gtceu.forge_hammer('white_gravel_to_sand')             
        .itemInputs('#tfc:white_gravel')
        .itemOutputs('tfc:sand/white')
        .duration(400)
        .EUt(2)

    // Черный гравий -> Песок
    e.recipes.gtceu.forge_hammer('black_gravel_to_sand')             
        .itemInputs('#tfc:black_gravel')
        .itemOutputs('tfc:sand/black')
        .duration(400)
        .EUt(2)

    // Красный гравий -> Песок
    e.recipes.gtceu.forge_hammer('red_gravel_to_sand')             
        .itemInputs('#tfc:red_gravel')
        .itemOutputs('tfc:sand/red')
        .duration(400)
        .EUt(2)

    // Желтый гравий -> Песок
    e.recipes.gtceu.forge_hammer('yellow_gravel_to_sand')             
        .itemInputs('#tfc:yellow_gravel')
        .itemOutputs('tfc:sand/yellow')
        .duration(400)
        .EUt(2)

    // Зеленый гравий -> Песок
    e.recipes.gtceu.forge_hammer('green_gravel_to_sand')             
        .itemInputs('#tfc:green_gravel')
        .itemOutputs('tfc:sand/green')
        .duration(400)
        .EUt(2)

    // Розовый гравий -> Песок
    e.recipes.gtceu.forge_hammer('pink_gravel_to_sand')             
        .itemInputs('#tfc:pink_gravel')
        .itemOutputs('tfc:sand/pink')
        .duration(400)
        .EUt(2)

    //#endregion

    //#region Рецепты порошков
    
    // Удаление рецептов
    e.remove({ id: 'tfc:quern/amethyst' })
    e.remove({ id: 'tfc:quern/amethyst_cut' })
    e.remove({ id: 'tfc:quern/blaze_rod' })
    e.remove({ id: 'tfc:quern/borax' })
    e.remove({ id: 'tfc:quern/charcoal' })
    e.remove({ id: 'tfc:quern/cinnabar' })
    e.remove({ id: 'tfc:quern/cryolite' })
    e.remove({ id: 'tfc:quern/diamond' })
    e.remove({ id: 'tfc:quern/diamond_cut' })
    e.remove({ id: 'tfc:quern/emerald' })
    e.remove({ id: 'tfc:quern/emerald_cut' })
    e.remove({ id: 'tfc:quern/graphite' })
    e.remove({ id: 'tfc:quern/lapis_lazuli' })
    e.remove({ id: 'tfc:quern/lapis_lazuli_cut' })
    e.remove({ id: 'tfc:quern/normal_bismuthinite' })
    e.remove({ id: 'tfc:quern/normal_cassiterite' })
    e.remove({ id: 'tfc:quern/normal_garnierite' })
    e.remove({ id: 'tfc:quern/normal_hematite' })
    e.remove({ id: 'tfc:quern/normal_limonite' })
    e.remove({ id: 'tfc:quern/normal_magnetite' })
    e.remove({ id: 'tfc:quern/normal_malachite' })
    e.remove({ id: 'tfc:quern/normal_native_copper' })
    e.remove({ id: 'tfc:quern/normal_native_gold' })
    e.remove({ id: 'tfc:quern/normal_native_silver' })
    e.remove({ id: 'tfc:quern/normal_sphalerite' })
    e.remove({ id: 'tfc:quern/normal_tetrahedrite' })
    e.remove({ id: 'tfc:quern/opal' })
    e.remove({ id: 'tfc:quern/opal_cut' })
    e.remove({ id: 'tfc:quern/poor_bismuthinite' })
    e.remove({ id: 'tfc:quern/poor_cassiterite' })
    e.remove({ id: 'tfc:quern/poor_garnierite' })
    e.remove({ id: 'tfc:quern/poor_hematite' })
    e.remove({ id: 'tfc:quern/poor_limonite' })
    e.remove({ id: 'tfc:quern/poor_magnetite' })
    e.remove({ id: 'tfc:quern/poor_malachite' })
    e.remove({ id: 'tfc:quern/poor_native_copper' })
    e.remove({ id: 'tfc:quern/poor_native_gold' })
    e.remove({ id: 'tfc:quern/poor_native_silver' })
    e.remove({ id: 'tfc:quern/poor_sphalerite' })
    e.remove({ id: 'tfc:quern/poor_tetrahedrite' })
    e.remove({ id: 'tfc:quern/pyrite' })
    e.remove({ id: 'tfc:quern/pyrite_cut' })
    e.remove({ id: 'tfc:quern/raw_limestone' })
    e.remove({ id: 'tfc:quern/rich_bismuthinite' })
    e.remove({ id: 'tfc:quern/rich_cassiterite' })
    e.remove({ id: 'tfc:quern/rich_garnierite' })
    e.remove({ id: 'tfc:quern/rich_hematite' })
    e.remove({ id: 'tfc:quern/rich_limonite' })
    e.remove({ id: 'tfc:quern/rich_magnetite' })
    e.remove({ id: 'tfc:quern/rich_malachite' })
    e.remove({ id: 'tfc:quern/rich_native_copper' })
    e.remove({ id: 'tfc:quern/rich_native_gold' })
    e.remove({ id: 'tfc:quern/rich_native_silver' })
    e.remove({ id: 'tfc:quern/rich_sphalerite' })
    e.remove({ id: 'tfc:quern/rich_tetrahedrite' })
    e.remove({ id: 'tfc:quern/ruby' })
    e.remove({ id: 'tfc:quern/ruby_cut' })
    e.remove({ id: 'tfc:quern/salt' })
    e.remove({ id: 'tfc:quern/saltpeter' })
    e.remove({ id: 'tfc:quern/sapphire' })
    e.remove({ id: 'tfc:quern/sapphire_cut' })
    e.remove({ id: 'tfc:quern/sulfur' })
    e.remove({ id: 'tfc:quern/sylvite' })
    e.remove({ id: 'tfc:quern/topaz' })
    e.remove({ id: 'tfc:quern/topaz_cut' })

    // Добавление рецептов
    global.TFC_QUERN_POWDER_RECIPE_COMPONENTS.forEach(element => {
        e.recipes.gtceu.macerator(`tfg:${element.name}`)             
            .itemInputs(element.input)
            .itemOutputs(element.output)
            .duration(60)
            .EUt(2)

        e.recipes.tfc.quern(element.output, element.input)
            .id(`tfg:quern/${element.name}`)

        e.recipes.createMilling(element.output, element.input)
            .id(`tfg:milling/${element.name}`)
    })

    //#endregion

    //#region Рецепты зерен

    global.TFC_QUERN_GRAIN_RECIPE_COMPONENTS.forEach(element => {
        
        e.recipes.gtceu.macerator(`tfg:${element.name}`)             
            .itemInputs(element.input)
            .itemOutputs(element.output)
            .chancedOutput('tfc:straw', 7000, 500)
            .duration(200)
            .EUt(16)

        e.recipes.tfc.quern(element.output, element.input)
            .id(`tfg:quern/${element.name}`)

        e.recipes.createMilling(element.output, element.input)
            .id(`tfg:milling/${element.name}`)
    })

    //#endregion

    //#region Рецепты муки

    global.TFC_QUERN_FLOUR_RECIPE_COMPONENTS.forEach(element => {
        e.recipes.gtceu.macerator(`tfg:${element.name}`)             
            .itemInputs(element.input)
            .itemOutputs(element.output)
            .duration(200)
            .EUt(16)

        e.recipes.createMilling(element.output, element.input)
            .id(`tfg:milling/${element.name}`)
    })

    //#endregion

    //#region Рецепты обжарки мяса

    global.TFC_FURNACE_MEAT_RECIPE_COMPONENTS.forEach(element => {
        e.smelting(element.output, element.input)
            .id(`tfg:smelting/${element.name}`)
    })

    //#endregion

    //#region Рецепты обжарки форм
    
    global.TFC_FURNACE_MOLD_RECIPE_COMPONENTS.forEach(element => {
        e.smelting(element.output, element.input)
            .id(`tfg:smelting/${element.name}`)
    })

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        e.smelting(`tfc:ceramic/${dye}_glazed_vessel`, `tfc:ceramic/${dye}_unfired_vessel`)
            .id(`tfg:smelting/${dye}_glazed_vessel`)

        e.smelting(`tfc:ceramic/large_vessel/${dye}`, `tfc:ceramic/unfired_large_vessel/${dye}`)
            .id(`tfg:smelting/${dye}_large_vessel`)
    })

    //#endregion

    //#region Покраска малых и больших сосудов

    //#region Обычный сосуд
    
    e.recipes.gtceu.chemical_bath(`unfired_vessel_decolor`)             
        .itemInputs('#tfg:colorized_unfired_vessels')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 36))
        .itemOutputs('tfc:ceramic/unfired_vessel')
        .duration(300)
        .EUt(4)

    e.recipes.gtceu.chemical_bath(`fired_vessel_decolor`)             
        .itemInputs('#tfg:colorized_fired_vessels')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 36))
        .itemOutputs('tfc:ceramic/vessel')
        .duration(300)
        .EUt(4)

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        e.recipes.gtceu.chemical_bath(`${dye}_unfired_vessel`)             
            .itemInputs('tfc:ceramic/unfired_vessel')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 36))
            .itemOutputs(`tfc:ceramic/${dye}_unfired_vessel`)
            .duration(150)
            .EUt(4)

        e.recipes.gtceu.chemical_bath(`${dye}_vessel`)             
            .itemInputs('tfc:ceramic/vessel')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 36))
            .itemOutputs(`tfc:ceramic/${dye}_glazed_vessel`)
            .duration(150)
            .EUt(4)
    })

    //#endregion

    //#region Большой сосуд
    
    e.recipes.gtceu.chemical_bath(`unfired_large_vessel_decolor`)             
        .itemInputs('#tfg:colorized_unfired_large_vessels')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 72))
        .itemOutputs('tfc:ceramic/unfired_large_vessel')
        .duration(300)
        .EUt(4)

    e.recipes.gtceu.chemical_bath(`fired_large_vessel_decolor`)             
        .itemInputs('#tfg:colorized_fired_large_vessels')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 72))
        .itemOutputs('tfc:ceramic/large_vessel')
        .duration(300)
        .EUt(4)

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        e.recipes.gtceu.chemical_bath(`${dye}_large_unfired_vessel`)             
            .itemInputs('tfc:ceramic/unfired_large_vessel')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 72))
            .itemOutputs(`tfc:ceramic/unfired_large_vessel/${dye}`)
            .duration(150)
            .EUt(4)

        e.recipes.gtceu.chemical_bath(`${dye}_large_vessel`)             
            .itemInputs('tfc:ceramic/large_vessel')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 72))
            .itemOutputs(`tfc:ceramic/large_vessel/${dye}`)
            .duration(150)
            .EUt(4)
    })

    //#endregion

    //#endregion

    //#region Удаление рецептов лопастей ветряной мельницы

    e.remove({ id: `tfc:crafting/windmill_blade` })
    e.remove({ id: `tfc:barrel/dye/bleach_windmill_blades` })

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        e.remove({ id: `tfc:barrel/dye/${dye}_windmill_blade` })
    })

    //#endregion

    //#region Удаление рецептов каменных инструментов TFC

    //#region Топор

    // Инструмент
    e.remove({ id: `tfc:crafting/stone/axe_igneous_extrusive` })
    e.remove({ id: `tfc:crafting/stone/axe_igneous_intrusive` })
    e.remove({ id: `tfc:crafting/stone/axe_metamorphic` })
    e.remove({ id: `tfc:crafting/stone/axe_sedimentary` })

    // Оголовья
    e.remove({ id: `tfc:rock_knapping/axe_head_igneous_extrusive` })
    e.remove({ id: `tfc:rock_knapping/axe_head_igneous_intrusive` })
    e.remove({ id: `tfc:rock_knapping/axe_head_metamorphic` })
    e.remove({ id: `tfc:rock_knapping/axe_head_sedimentary` })

    e.recipes.tfc.knapping('gtceu:stone_axe_head', 'tfc:rock', [
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
    e.remove({ id: `tfc:crafting/stone/hammer_igneous_extrusive` })
    e.remove({ id: `tfc:crafting/stone/hammer_igneous_intrusive` })
    e.remove({ id: `tfc:crafting/stone/hammer_metamorphic` })
    e.remove({ id: `tfc:crafting/stone/hammer_sedimentary` })

    // Оголовья
    e.remove({ id: `tfc:rock_knapping/hammer_head_igneous_extrusive` })
    e.remove({ id: `tfc:rock_knapping/hammer_head_igneous_intrusive` })
    e.remove({ id: `tfc:rock_knapping/hammer_head_metamorphic` })
    e.remove({ id: `tfc:rock_knapping/hammer_head_sedimentary` })

    e.recipes.tfc.knapping('gtceu:stone_hammer_head', 'tfc:rock', [
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
    e.remove({ id: `tfc:crafting/stone/hoe_igneous_extrusive` })
    e.remove({ id: `tfc:crafting/stone/hoe_igneous_intrusive` })
    e.remove({ id: `tfc:crafting/stone/hoe_metamorphic` })
    e.remove({ id: `tfc:crafting/stone/hoe_sedimentary` })

    // Оголовья
    e.remove({ id: `tfc:rock_knapping/hoe_head_igneous_extrusive` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_1_igneous_extrusive` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_2_igneous_extrusive` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_igneous_intrusive` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_1_igneous_intrusive` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_2_igneous_intrusive` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_metamorphic` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_1_metamorphic` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_2_metamorphic` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_sedimentary` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_1_sedimentary` })
    e.remove({ id: `tfc:rock_knapping/hoe_head_2_sedimentary` })

    e.recipes.tfc.knapping('gtceu:stone_hoe_head', 'tfc:rock', [
            "XXXXX",
            "   XX"
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_hoe_head')

    e.recipes.tfc.knapping('2x gtceu:stone_hoe_head', 'tfc:rock', [
            "XXXXX",
            "XX   ",
            "     ",
            "XXXXX",
            "XX   "
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_hoe_head_1')

    e.recipes.tfc.knapping('2x gtceu:stone_hoe_head', 'tfc:rock', [
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
    e.remove({ id: `tfc:crafting/stone/knife_igneous_extrusive` })
    e.remove({ id: `tfc:crafting/stone/knife_igneous_intrusive` })
    e.remove({ id: `tfc:crafting/stone/knife_metamorphic` })
    e.remove({ id: `tfc:crafting/stone/knife_sedimentary` })

    // Оголовья
    e.remove({ id: `tfc:rock_knapping/knife_head_igneous_extrusive` })
    e.remove({ id: `tfc:rock_knapping/knife_head_1_igneous_extrusive` })
    e.remove({ id: `tfc:rock_knapping/knife_head_2_igneous_extrusive` })
    e.remove({ id: `tfc:rock_knapping/knife_head_3_igneous_extrusive` })
    e.remove({ id: `tfc:rock_knapping/knife_head_igneous_intrusive` })
    e.remove({ id: `tfc:rock_knapping/knife_head_1_igneous_intrusive` })
    e.remove({ id: `tfc:rock_knapping/knife_head_2_igneous_intrusive` })
    e.remove({ id: `tfc:rock_knapping/knife_head_3_igneous_intrusive` })
    e.remove({ id: `tfc:rock_knapping/knife_head_metamorphic` })
    e.remove({ id: `tfc:rock_knapping/knife_head_1_metamorphic` })
    e.remove({ id: `tfc:rock_knapping/knife_head_2_metamorphic` })
    e.remove({ id: `tfc:rock_knapping/knife_head_3_metamorphic` })
    e.remove({ id: `tfc:rock_knapping/knife_head_sedimentary` })
    e.remove({ id: `tfc:rock_knapping/knife_head_1_sedimentary` })
    e.remove({ id: `tfc:rock_knapping/knife_head_2_sedimentary` })
    e.remove({ id: `tfc:rock_knapping/knife_head_3_sedimentary` })

    e.recipes.tfc.knapping('gtceu:stone_knife_head', 'tfc:rock', [
            "X ",
            "XX",
            "XX",
            "XX",
            "XX"
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_knife_head')

    e.recipes.tfc.knapping('2x gtceu:stone_knife_head', 'tfc:rock', [
            "X  X ",
            "XX XX",
            "XX XX",
            "XX XX",
            "XX XX"
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_knife_head_1')

    e.recipes.tfc.knapping('2x gtceu:stone_knife_head', 'tfc:rock', [
            "X   X",
            "XX XX",
            "XX XX",
            "XX XX",
            "XX XX"
        ])
        .ingredient('#tfc:rock_knapping')
        .outsideSlotRequired(false)
        .id('tfg:rock_knapping/stone_knife_head_2')

    e.recipes.tfc.knapping('2x gtceu:stone_knife_head', 'tfc:rock', [
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
    e.remove({ id: `tfc:crafting/stone/shovel_igneous_extrusive` })
    e.remove({ id: `tfc:crafting/stone/shovel_igneous_intrusive` })
    e.remove({ id: `tfc:crafting/stone/shovel_metamorphic` })
    e.remove({ id: `tfc:crafting/stone/shovel_sedimentary` })

    // Оголовья
    e.remove({ id: `tfc:rock_knapping/shovel_head_igneous_extrusive` })
    e.remove({ id: `tfc:rock_knapping/shovel_head_igneous_intrusive` })
    e.remove({ id: `tfc:rock_knapping/shovel_head_metamorphic` })
    e.remove({ id: `tfc:rock_knapping/shovel_head_sedimentary` })

    e.recipes.tfc.knapping('gtceu:stone_shovel_head', 'tfc:rock', [
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
    
    

    //#endregion

    //#region Рецепты плоского теста

    global.TFC_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS.forEach(element => {
        e.recipes.gtceu.mixer(element.name)             
            .itemInputs(element.input)
            .inputFluids(Fluid.of('minecraft:water', 100))
            .itemOutputs(element.output)
            .duration(300)
            .EUt(16)
    })

    //#endregion

    //#region Рецепты хлеба

    global.TFC_FURNACE_BREAD_RECIPE_COMPONENTS.forEach(element => {
        e.smelting(element.output, element.input)
            .id(`tfg:smelting/${element.name}`)
    })

    //#endregion

    //#region Молды в ассемблере

    for (let i = 0; i < global.TFC_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS.length; i++) {
        
        let element = global.TFC_CLAY_TO_UNFIRED_MOLD_RECIPE_COMPONENTS[i];

        e.recipes.gtceu.assembler(`tfg:tfc/${element.name}`)             
            .itemInputs(element.input)
            .circuit(i)
            .itemOutputs(element.output)
            .duration(450)
            .EUt(2)
    }


    //#endregion

    //#region Стеклянные смеси в бутылки в ассемблере

    global.TFC_BATCH_TO_BOTTLE_ASSEMBLING_RECIPE_COMPONENTS.forEach(element => {
        e.recipes.gtceu.alloy_smelter(`tfg:tfc/${element.name}`)             
            .itemInputs(element.input)
            .notConsumable('gtceu:bottle_casting_mold')
            .itemOutputs(element.output)
            .duration(100)
            .EUt(2)
    })

    //#endregion

    //#region Оливки

    e.recipes.gtceu.macerator(`tfg:tfc/olive_paste`)             
            .itemInputs('tfc:food/olive')
            .itemOutputs('2x tfc:olive_paste')
            .duration(60)
            .EUt(2)

    e.recipes.createMilling('2x tfc:olive_paste', 'tfc:food/olive')
        .id(`tfg:milling/tfc/olive_paste`)

    //#endregion
    
    //#region Рецепты бочки в миксере
    // А где?
    //#endregion

    // Другое
    e.remove({ id: `tfc:crafting/trip_hammer` })
    e.remove({ id: `tfc:anvil/steel_pump` })
    e.remove({ id: `tfc:crafting/steel_pump` })
    e.remove({ id: `tfc:crafting/crankshaft` })

    

    // Доменная печь
    e.shaped('tfc:blast_furnace', [
        'AAA', 
        'ABA',
        'AAA'  
    ], {
        A: '#forge:double_plates/wrought_iron',
        B: 'tfc:crucible'
    }).id('tfc:crafting/blast_furnace')

    // Тыква -> Кусочки тыквы
    e.remove({ id: 'tfc:crafting/pumpkin_chunks' })

    e.shaped('4x tfc:food/pumpkin_chunks', [
        'AB'
    ], {
        A: '#tfc:knives',
        B: TFC.ingredient.notRotten('tfc:pumpkin')
    }).id('tfg:shaped/tfc/pumpkin_chunks')

    // Lime
    e.smelting('tfc:powder/lime', 'tfc:powder/flux')
        .id('tfg:smelting/lime')

    // Kaolinite Clay
    e.smelting('tfc:kaolin_clay', 'tfc:powder/kaolinite')
        .id('tfg:smelting/kaolinite_clay')

    // Fire Brick
    e.smelting('tfc:ceramic/fire_brick', 'gtceu:compressed_fireclay')
        .id('tfg:smelting/fireclay_brick')

    // Выпаривание соли
    e.recipes.tfc.pot([], Fluid.of('tfc:salt_water', 625), 300, 1000)
        .itemOutput('gtceu:small_salt_dust')
        .id('tfg:tfc/pot/salt')

    // Salt Water
    generateMixerRecipe(
        e, 
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
    e.recipes.gtceu.alloy_smelter(`tfg:tfc/lamp_glass`)             
        .itemInputs('#tfc:glass_batches')
        .notConsumable('#tfg:unfinished_lamps')
        .itemOutputs('tfc:lamp_glass')
        .duration(100)
        .EUt(2)

    // Glass lens
    e.recipes.gtceu.alloy_smelter(`tfg:tfc/glass_lens`)             
        .itemInputs('tfc:silica_glass_batch')
        .notConsumable('#forge:lenses')
        .itemOutputs('tfc:lens')
        .duration(100)
        .EUt(2)

    // Empty Jar
    e.recipes.gtceu.assembler(`tfg:tfc/glass_jar`)             
        .itemInputs('#tfc:glass_batches_tier_2')
        .circuit(2)
        .itemOutputs('tfc:empty_jar')
        .duration(100)
        .EUt(2)

    // Wool Yarn
    e.recipes.gtceu.macerator('macerate_wool')             
        .itemInputs('#minecraft:wool')
        .itemOutputs('tfc:wool_yarn')
        .chancedOutput('tfc:wool_yarn', 9000, 0)
        .chancedOutput('tfc:wool_yarn', 5000, 0)
        .chancedOutput('tfc:wool_yarn', 2000, 0)
        .duration(200)
        .EUt(2)

    // LimeWater + Sand -> Mortar
    e.recipes.gtceu.centrifuge('mortar')             
        .itemInputs('#forge:sand')
        .inputFluids(Fluid.of('tfc:limewater', 100))
        .itemOutputs('16x tfc:mortar')
        .duration(800)
        .EUt(8)

    // Brass Mechanism
    e.recipes.gtceu.assembler('tfg:tfc/brass_mechanism')             
        .itemInputs('#forge:plates/brass')
        .circuit(10)
        .itemOutputs('2x tfc:brass_mechanisms')
        .duration(100)
        .EUt(4)

    // 1x Small SheepSkin -> 1x Wool
    e.recipes.gtceu.assembler('tfg:tfc/wool_1')             
        .itemInputs('tfc:small_sheepskin_hide')
        .itemOutputs('tfc:wool')
        .duration(100)
        .EUt(4)

    // 1x Medium SheepSkin -> 1x Wool
    e.recipes.gtceu.assembler('tfg:tfc/wool_2')             
        .itemInputs('tfc:medium_sheepskin_hide')
        .itemOutputs('2x tfc:wool')
        .duration(100)
        .EUt(4)

    // 1x Large SheepSkin -> 1x Wool
    e.recipes.gtceu.assembler('tfg:tfc/wool_3')             
        .itemInputs('tfc:large_sheepskin_hide')
        .itemOutputs('3x tfc:wool')
        .duration(100)
        .EUt(4)

    // Wool Yarn
    e.recipes.gtceu.wiremill('tfg:tfc/wool_yarn')             
        .itemInputs('tfc:wool')
        .itemOutputs('8x tfc:wool_yarn')
        .duration(100)
        .EUt(4)

    // Burlap Cloth
    e.recipes.gtceu.assembler('tfg:tfc/burlap_cloth')             
        .itemInputs('12x tfc:jute_fiber')
        .itemOutputs('tfc:burlap_cloth')
        .duration(100)
        .EUt(4)

    // Silk Cloth
    e.recipes.gtceu.assembler('tfg:tfc/silk_cloth')             
        .itemInputs('24x minecraft:string')
        .itemOutputs('tfc:silk_cloth')
        .duration(100)
        .EUt(4)

    // Silk Cloth
    e.recipes.gtceu.assembler('tfg:tfc/wool_cloth')             
        .itemInputs('16x tfc:wool_yarn')
        .itemOutputs('tfc:wool_cloth')
        .duration(100)
        .EUt(4)

    // Jute Fiber
    generateMixerRecipe(e, 'tfc:jute', Fluid.of('minecraft:water', 200), 'tfc:jute_fiber', null, [], 100, 4, 16, 'tfg:tfc/jute_fiber')

    // Soda Ash
    e.smelting('3x tfc:powder/soda_ash', 'tfc:food/dried_seaweed').id('tfg:smelting/dried_seaweed_to_soda')
    e.smelting('3x tfc:powder/soda_ash', 'tfc:food/dried_kelp').id('tfg:smelting/dried_kelp_to_soda')

    //#region Обрушения

    e.recipes.tfc.collapse('#tfg:rock_slabs').id('tfg:collapse/rock_slabs')
    e.recipes.tfc.collapse('#tfg:rock_stairs').id('tfg:collapse/rock_stairs')
    e.recipes.tfc.collapse('#tfg:rock_walls').id('tfg:collapse/rock_walls')

    global.TFC_STONE_TYPES.forEach(stoneType => {
        e.custom({
            type: "tfc:collapse",
            ingredient: {
                tag: `forge:ores_in_ground/${stoneType}`
            },
            result: `tfc:rock/cobble/${stoneType}`
        }).id(`tfg:collapse/${stoneType}_gt_ores`)
    })
    
    //#endregion
    
    //#region Выход: Свечи

    e.recipes.gtceu.chemical_bath(`tfg:tfc/candle_decolor`)             
        .itemInputs('#tfc:colored_candles')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 72))
        .itemOutputs('tfc:candle')
        .duration(300)
        .EUt(4)

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        
        e.recipes.gtceu.chemical_bath(`tfg:tfc/${dye}_candle`)             
            .itemInputs('tfc:candle')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 36))
            .itemOutputs(`tfc:candle/${dye}`)
            .duration(300)
            .EUt(4)

    })

    //#endregion

    //#region Алебастр

    e.recipes.tfc.damage_inputs_shapeless_crafting(e.recipes.minecraft.crafting_shapeless('4x tfc:alabaster_brick', ['#forge:raw_materials/gypsum', '#tfc:chisels']))
        .id('tfc:crafting/alabaster_brick/raw_gypsum')
        
    e.recipes.tfc.damage_inputs_shapeless_crafting(e.recipes.minecraft.crafting_shapeless('2x tfc:alabaster_brick', ['#forge:poor_raw_materials/gypsum', '#tfc:chisels']))
        .id('tfc:crafting/alabaster_brick/poor_raw_gypsum')

    e.recipes.tfc.damage_inputs_shapeless_crafting(e.recipes.minecraft.crafting_shapeless('6x tfc:alabaster_brick', ['#forge:rich_raw_materials/gypsum', '#tfc:chisels']))
        .id('tfc:crafting/alabaster_brick/rich_raw_gypsum')

    // Alabaster Brick
    e.recipes.gtceu.assembler('tfc:alabaster/bricks')             
        .itemInputs('5x tfc:alabaster_brick')
        .inputFluids(Fluid.of('gtceu:concrete', 72))
        .itemOutputs('4x tfc:alabaster/bricks')
        .duration(50)
        .EUt(2)

    e.recipes.gtceu.chemical_bath('tfc:alabaster/bricks')             
        .itemInputs('#tfc:colored_bricks_alabaster')
        .inputFluids(Fluid.of('gtceu:chlorine', 72))
        .itemOutputs('tfc:alabaster/bricks')
        .duration(400)
        .EUt(2)
    
    for (let i = 0; i < 16; i++) {
        e.recipes.gtceu.chemical_bath(`tfg:tfc/alabaster/bricks/${global.MINECRAFT_DYE_NAMES[i]}`)             
            .itemInputs('tfc:alabaster/bricks')
            .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
            .itemOutputs(`tfc:alabaster/bricks/${global.MINECRAFT_DYE_NAMES[i]}`)
            .duration(20)
            .EUt(7)
    }
    
    // Raw Alabaster
    e.recipes.gtceu.chemical_bath('tfc:alabaster/raw/poor_raw_gypsum')             
        .itemInputs('gtceu:poor_raw_gypsum')
        .inputFluids(Fluid.of('tfc:limewater', 50))
        .itemOutputs('tfc:alabaster/raw')
        .duration(400)
        .EUt(2)

    e.recipes.gtceu.chemical_bath('tfc:alabaster/raw/raw_gypsum')             
        .itemInputs('gtceu:raw_gypsum')
        .inputFluids(Fluid.of('tfc:limewater', 100))
        .itemOutputs('2x tfc:alabaster/raw')
        .duration(400)
        .EUt(2) 
    
    e.recipes.gtceu.chemical_bath('tfc:alabaster/raw/rich_raw_gypsum')             
        .itemInputs('gtceu:rich_raw_gypsum')
        .inputFluids(Fluid.of('tfc:limewater', 150))
        .itemOutputs('3x tfc:alabaster/raw')
        .duration(400)
        .EUt(2)

    e.recipes.gtceu.chemical_bath('tfc:alabaster/raw')             
        .itemInputs('#tfc:colored_bricks_alabaster')
        .inputFluids(Fluid.of('gtceu:chlorine', 72))
        .itemOutputs('tfc:alabaster/raw')
        .duration(400)
        .EUt(2)
    
    for (let i = 0; i < 16; i++) {
    e.recipes.gtceu.chemical_bath(`tfg:tfc/alabaster/raw/${global.MINECRAFT_DYE_NAMES[i]}`)             
        .itemInputs('tfc:alabaster/raw')
        .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 72))
        .itemOutputs(`tfc:alabaster/raw/${global.MINECRAFT_DYE_NAMES[i]}`)
        .duration(20)
        .EUt(7)
    }
    
    //#endregion

    //Fire bricks
    e.recipes.gtceu.compressor('fire_bricks')             
        .itemInputs('4x tfc:ceramic/fire_brick')
        .itemOutputs('2x tfc:fire_bricks')
        .duration(800)
        .EUt(2)

    e.recipes.gtceu.extractor('fire_bricks_to_ceramic_fire_brick')             
        .itemInputs('tfc:fire_bricks')
        .itemOutputs('2x tfc:ceramic/fire_brick')
        .duration(800)
        .EUt(2)

    //fire brick
    e.recipes.gtceu.alloy_smelter('fire_bricks')             
        .itemInputs('tfc:fire_clay')
        .notConsumable('gtceu:ingot_casting_mold')
        .itemOutputs('tfc:ceramic/fire_brick')
        .duration(800)
        .EUt(2)
}