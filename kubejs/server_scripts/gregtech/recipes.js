// priority: 0

const registerGregTechRecipes = (event) => {
    
    //#region Крафты и раскрафты металлических предметов
    const makeToolRecipe  = (toolType, headTagPrefix, extruderMold, cirucitMeta, material) => {
        const toolItem = ToolHelper.get(toolType, material)
        if (toolItem.isEmpty()) return

        const toolHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (toolHeadItem.isEmpty()) return

        if (material.hasFlag(TFGMaterialFlags.HAS_TFC_TOOL)) {
            event.shapeless(toolItem, [
                '#forge:rods/wooden',
                toolHeadItem
            ]).id(`gtceu:shaped/${toolType.name}_${material.getName()}`)
        }
        else {
            event.recipes.tfc.advanced_shapeless_crafting(TFC.itemStackProvider.of(toolHeadItem).copyForgingBonus(), ['#forge:rods/wooden', toolHeadItem])
                .id(`gtceu:shaped/${toolType.name}_${material.getName()}`)
        }

        processToolHead(toolType, headTagPrefix, extruderMold, cirucitMeta, material)
    }

    const processToolHead = (headTagPrefix, extruderMold, cirucitMeta, material) => {
        const toolHeadItem = ChemicalHelper.get(headTagPrefix, material, 1)
        if (toolHeadItem.isEmpty()) return

        if (material.hasProperty(PropertyKey.INGOT)) {

            const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
            if (ingotItem.isEmpty()) return

            event.recipes.gtceu.extruder(`tfg:extrude_${material.getName()}_ingot_to_${headTagPrefix.name.toLowerCase()}_head`)             
                .inputItems(ingotItem.copyWithCount(Math.floor(toolHeadItem.materialAmount() / GTValues.M)))
                .notConsumable(extruderMold)
                .outputItems(toolHeadItem)
                .duration(12).EUt(32)
        
        } else if (material.hasProperty(PropertyKey.GEM)) {

            const gemItem = ChemicalHelper.get(TagPrefix.gem, material, 1)
            if (gemItem.isEmpty()) return

            event.recipes.gtceu.extruder(`tfg:engrave_${material.getName()}_gem_to_${headTagPrefix.name.toLowerCase()}_head`)             
                .inputItems(gemItem.copyWithCount(Math.floor(toolHeadItem.materialAmount() / GTValues.M)))
                .notConsumable(ChemicalHelper.get(TagPrefix.lens, GTMaterials.Glass, 1))
                .circuit(cirucitMeta)
                .outputItems(toolHeadItem)
                .duration(12).EUt(32)
        }
        // else: ignore :3
    }

    const processToolMortar = (toolType, material) => {
        const toolItem = ToolHelper.get(toolType, material)
        if (toolItem.isEmpty()) return

        const usableTagPrefix = material.hasProperty(PropertyKey.GEM) ? TagPrefix.gem : TagPrefix.ingot;
        const usableItem = ChemicalHelper.get(usableTagPrefix, material, 1)

        if (usableItem.isEmpty()) return

        event.shaped(toolItem, [
            ' A ',
            'BAB',
            'BBB' 
        ], {
            A: usableItem,
            B: '#tfc:rock/raw',
        }).id(`gtceu:shaped/mortar_${material.getName()}`)
    }

    const processNugget = (tagPrefix, material) => {
        if (material != TFGMaterials.Unknown) return

        const item = ChemicalHelper.get(tagPrefix, material, 1)
        if (item.isEmpty()) return

        event.remove({ id: `gtceu:alloy_smelter/alloy_smelt_${material.getName()}_to_nugget` })
        event.remove({ id: `gtceu:fluid_solidifier/solidify_${material.getName()}_to_nugget` })
    }

    const processIngot = (tagPrefix, material) => {
        const ingotItem = ChemicalHelper.get(tagPrefix, material, 1)

        if (material.hasFlag(MaterialFlags.GENERATE_PLATE) && material != GTMaterials.Wood && material != GTMaterials.TreatedWood && !material.hasProperty(PropertyKey.POLYMER)) 
        {
            const plateStack = ChemicalHelper.get(TagPrefix.plate, material, 1)
            const blockStack = ChemicalHelper.get(TagPrefix.block, material, 1)

            let matAmount = TagPrefix.block.getMaterialAmount(material) / GTValues.M;

            if (!plateStack.isEmpty()) {
                
                // Слиток -> Стержень
                event.recipes.createPressing(plateStack.withChance(0.8), ingotItem)
                    .id(`tfg:pressing/${material.getName()}_plate`)
    
                if (!blockStack.isEmpty()) {
                    
                    // 9х Слиток -> Блок
                    event.recipes.createCompacting(blockStack, ingotItem.withCount(matAmount))
                        .heated()
                        .id(`tfg:compacting/${material.getName()}_block`)
                }
            }
            else
            {
                if (!blockStack.isEmpty()) {
                    
                    // Блок из гемов -> 9 Пластин
                    event.recipes.createCutting(plateStack.withCount(matAmount).withChance(0.65), blockStack)
                        .id(`tfg:cutting/${material.getName()}_plate`)
                }
                
            }
            
        }

        
    }

    const processPlate = (tagPrefix, material) => {
        const item = ChemicalHelper.get(tagPrefix, material, 1)
        if (item.isEmpty()) return

        event.remove({ id: `gtceu:shaped/plate_${material.getName()}` })
    }

    const processPlateDouble = (tagPrefix, material) => {
        const item = ChemicalHelper.get(tagPrefix, material, 1)
        if (item.isEmpty()) return

        event.remove({ id: `gtceu:shaped/plate_double_${material.getName()}` })
    }

    const processBlock = (tagPrefix, material) => {
        const item = ChemicalHelper.get(tagPrefix, material, 1)
        if (item.isEmpty()) return

        event.remove({ id: `gtceu:compressor/compress_${material.getName()}_to_block` })
    }

    const processRod = (tagPrefix, material) => {
        const rodItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (rodItem.isEmpty()) return
        
        const ingotItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (ingotItem.isEmpty()) return

        if (!material.hasFlag(MaterialFlags.GENERATE_ROD) || material == GTMaterials.Wood) return
        if (ingotItem.isEmpty() || rodItem.isEmpty()) return

        // Прокатка стержней
        event.custom({
            type: "createaddition:rolling",
            input: ingotItem.toJson(),
            result: rodItem.toJson()
        }).id(`tfg:rolling/${material.getName()}_rod`)
    }

    const processRodLong = (tagPrefix, material) => {
        const item = ChemicalHelper.get(tagPrefix, material, 1)
        if (item.isEmpty()) return

        event.remove({ id: `gtceu:shaped/stick_long_stick_${material.getName()}` })
    }

    const processPoorRawOre = (tagPrefix, material) => {
        const poorOreItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (poorOreItem.isEmpty()) return
        
        const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1)
        if (crushedOreItem.isEmpty()) return

        // Бедная сырая руда -> Дробленная руда (75%)
        event.recipes.createCrushing([crushedOreItem.withChance(0.75)], poorOreItem)
            .processingTime(200)
            .id(`tfg:crushing/${material.getName()}_crushed_ore_from_poor_raw_ore`)
    }

    const processNormalRawOre = (tagPrefix, material) => {
        const normalOreItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (normalOreItem.isEmpty()) return
        
        const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1)
        if (crushedOreItem.isEmpty()) return

        // Нормальная сырая руда -> Дробленная руда + Дробленная руда (20%)
        event.recipes.createCrushing([crushedOreItem, crushedOreItem.withChance(0.2)], normalOreItem)
            .processingTime(200)
            .id(`tfg:crushing/${material.getName()}_crushed_ore_from_normal_raw_ore`)
    }

    const processRichRawOre = (tagPrefix, material) => {
        const richOreItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (richOreItem.isEmpty()) return
        
        const crushedOreItem = ChemicalHelper.get(TagPrefix.crushed, material, 1)
        if (crushedOreItem.isEmpty()) return
        
        // Богатая сырая руда -> Дробленная руда + Дробленная руда (20%)
        event.recipes.createCrushing([crushedOreItem, crushedOreItem, crushedOreItem.withChance(0.2)], richOreItem)
            .processingTime(200)
            .id(`tfg:crushing/${material.getName()}_crushed_ore_from_rich_raw_ore`)
    }

    const processCrushedDust = (tagPrefix, material) => {
        const crushedDustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (crushedDustItem.isEmpty()) return
        
        const pureDustItem = ChemicalHelper.get(TagPrefix.dustPure, material, 1)
        if (pureDustItem.isEmpty()) return

        // Дробленная руда -> Очищенная руда (90%)
        event.recipes.createSplashing(pureDustItem.withChance(0.9), crushedDustItem)
            .id(`tfg:splashing/${material.getName()}_purified_ore`)

        // Дробленная руда -> Очищенная руда
        event.custom({
            type: "ae2:transform",
            circumstance: {
                type: "fluid",
                tag: "tfc:water"
            },
            ingredients: [
                crushedDustItem.toJson()
            ],
            result: pureDustItem.toJson()
        }).id(`tfg:ae_transform/${material.getName()}_purified_ore`)
    }

    const processImpureDust = (tagPrefix, material) => {
        const impureDustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (impureDustItem.isEmpty()) return
        
        const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1)
        if (dustItem.isEmpty()) return
        
        // Грязная пыль -> Пыль (90%)
        event.recipes.createSplashing(dustItem.withChance(0.9), impureDustItem)
            .id(`tfg:splashing/${material.getName()}_dust_from_impure`)

        // Грязная пыль -> Пыль
        event.custom({
            type: "ae2:transform",
            circumstance: {
                type: "fluid",
                tag: "tfc:water"
            },
            ingredients: [
                impureDustItem.toJson()
            ],
            result: dustItem.toJson()
        }).id(`tfg:ae_transform/${material.getName()}_dust_from_impure`)
    }

    const processPureDust = (tagPrefix, material) => {
        const pureDust = ChemicalHelper.get(tagPrefix, material, 1)
        if (pureDust.isEmpty()) return
        
        const dustItem = ChemicalHelper.get(TagPrefix.dust, material, 1)
        if (dustItem.isEmpty()) return
        
        // Очищенная пыль -> Пыль (90%)
        event.recipes.createSplashing(dustItem.withChance(0.9), pureDust)
            .id(`tfg:splashing/${material.getName()}_dust_from_pure`)

        // Очищенная пыль -> Пыль
        event.custom({
            type: "ae2:transform",
            circumstance: {
                type: "fluid",
                tag: "tfc:water"
            },
            ingredients: [
                pureDust.toJson()
            ],
            result: dustItem.toJson()
        }).id(`tfg:ae_transform/${material.getName()}_dust_from_pure`)
    }

    const processDust = (tagPrefix, material) => {
        const dustItem = ChemicalHelper.get(tagPrefix, material, 1)
        if (dustItem.isEmpty()) return
        
        const ingotItem = ChemicalHelper.get(TagPrefix.ingot, material, 1)
        const gemItem = ChemicalHelper.get(TagPrefix.gem, material, 1)

        if (!ingotItem.isEmpty()) {
            event.recipes.createCrushing(dustItem, ingotItem)
                .processingTime(250)
                .id(`tfg:crushing/${material.getName()}_dust`)
        }
        
        if (!gemItem.isEmpty()) {
            event.recipes.createMilling(dustItem, gemItem)
                .processingTime(200)
                .id(`tfg:milling/${material.getName()}_dust`)
        }
    }    

    GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
        const toolProperty = material.getProperty(PropertyKey.TOOL)
        const ingotProperty = material.getProperty(PropertyKey.INGOT)
        const oreProperty = material.getProperty(PropertyKey.ORE)

        if (toolProperty != null) {
            makeToolRecipe(GTToolType.SWORD, TFGTagPrefix.toolHeadSword, 'tfg:sword_head_extruder_mold', 1, material)
            makeToolRecipe(GTToolType.PICKAXE, TFGTagPrefix.toolHeadPickaxe, 'tfg:pickaxe_head_extruder_mold', 2, material)
            makeToolRecipe(GTToolType.AXE, TFGTagPrefix.toolHeadAxe, 'tfg:axe_head_extruder_mold', 3, material)
            makeToolRecipe(GTToolType.SHOVEL, TFGTagPrefix.toolHeadShovel, 'tfg:shovel_head_extruder_mold', 4, material)
            makeToolRecipe(GTToolType.HOE, TFGTagPrefix.toolHeadHoe, 'tfg:hoe_head_extruder_mold', 5, material)
            makeToolRecipe(GTToolType.KNIFE, TFGTagPrefix.toolHeadKnife, 'tfg:knife_head_extruder_mold', 6, material)
            makeToolRecipe(GTToolType.FILE, TFGTagPrefix.toolHeadFile, 'tfg:file_head_extruder_mold', 7, material)
            makeToolRecipe(GTToolType.SAW, TFGTagPrefix.toolHeadSaw, 'tfg:saw_head_extruder_mold', 8, material)
            makeToolRecipe(GTToolType.SPADE, TFGTagPrefix.toolHeadSpade, 'tfg:spade_head_extruder_mold', 9, material)
            makeToolRecipe(GTToolType.MINING_HAMMER, TFGTagPrefix.toolHeadMiningHammer, 'tfg:mining_hammer_head_extruder_mold', 10, material)
            makeToolRecipe(GTToolType.SCYTHE, TFGTagPrefix.toolHeadScythe, 'tfg:scythe_head_extruder_mold', 11, material)
            makeToolRecipe(GTToolType.HARD_HAMMER, TFGTagPrefix.toolHeadHammer, 'tfg:hammer_head_extruder_mold', 12, material)
            makeToolRecipe(GTToolType.BUTCHERY_KNIFE, TFGTagPrefix.toolHeadButcheryKnife, 'tfg:butchery_knife_head_extruder_mold', 13, material)
            
            processToolMortar(GTToolType.MORTAR, material)

            processToolHead(TFGTagPrefix.toolHeadPropick, 'tfg:propick_head_extruder_mold', 14, material)
            processToolHead(TFGTagPrefix.toolHeadJavelin, 'tfg:javelin_head_extruder_mold', 15, material)
            processToolHead(TFGTagPrefix.toolHeadChisel, 'tfg:chisel_head_extruder_mold', 16, material)
            processToolHead(TFGTagPrefix.toolHeadMace, 'tfg:mace_head_extruder_mold', 17, material)
        }

        if (ingotProperty != null) {
            processNugget(TagPrefix.nugget, material)
            processIngot(TagPrefix.ingot, material)
            processPlate(TagPrefix.plate, material)
            processPlateDouble(TagPrefix.plateDouble, material)
            processBlock(TagPrefix.block, material)
            processRod(TagPrefix.rod, material)
            processRodLong(TagPrefix.rodLong, material)
        }

        if (oreProperty != null) {
            processPoorRawOre(TFGTagPrefix.poorRawOre, material)
            processNormalRawOre(TagPrefix.rawOre, material)
            processRichRawOre(TFGTagPrefix.richRawOre, material)

            processCrushedDust(TagPrefix.crushed, material)
            processImpureDust(TagPrefix.dustImpure, material)
            processPureDust(TagPrefix.dustPure, material)
            processDust(TagPrefix.dust, material)
        }
        
    })
    //#endregion

    //#region Раскрафт камня стоунтайпов
    // Gabbro
    event.recipes.gtceu.centrifuge(`tfg:gabbro_dust_separation`)             
        .itemInputs('tfg:gabbro_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Titanium, 6700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Iron, 3700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1700, 700)
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Shale
    event.recipes.gtceu.centrifuge(`tfg:shale_dust_separation`)             
        .itemInputs('tfg:shale_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Sodium, 7500, 500)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1500, 500)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 16))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Claystone
    event.recipes.gtceu.centrifuge(`tfg:claystone_dust_separation`)             
        .itemInputs('tfg:claystone_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Aluminium, 6700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Silicon, 6700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Hematite, 6700, 700)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 5))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Limestone
    event.recipes.gtceu.centrifuge(`tfg:limestone_dust_separation`)             
        .itemInputs('tfg:limestone_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Calcium, 8700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1700, 700)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 36))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Conglomerate
    event.recipes.gtceu.centrifuge(`tfg:conglomerate_dust_separation`)             
        .itemInputs('tfg:conglomerate_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Hematite, 6700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Silicon, 4700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.TricalciumPhosphate, 3700, 700)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 5))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Dolomite
    event.recipes.gtceu.centrifuge(`tfg:dolomite_dust_separation`)             
        .itemInputs('tfg:dolomite_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Magnesium, 6700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Calcium, 5700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.MetalMixture, 3700, 700)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 16))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Chert
    event.recipes.gtceu.centrifuge(`tfg:chert_dust_separation`)             
        .itemInputs('tfg:chert_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Silicon, 6700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.MetalMixture, 5700, 700)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 24))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Chalk
    event.recipes.gtceu.centrifuge(`tfg:chalk_dust_separation`)             
        .itemInputs('tfg:chalk_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Calcium, 6700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Carbon, 3700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.MetalMixture, 1700, 700)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 12))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Rhyolite
    event.recipes.gtceu.centrifuge(`tfg:rhyolite_dust_separation`)             
        .itemInputs('tfg:rhyolite_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.SiliconDioxide, 8700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.MetalMixture, 800, 700)
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Dacite
    event.recipes.gtceu.centrifuge(`tfg:dacite_dust_separation`)             
        .itemInputs('tfg:dacite_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Sodium, 6700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Calcium, 5700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.SiliconDioxide, 4700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Aluminium, 3700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.MetalMixture, 150, 700)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 12))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Slate
    event.recipes.gtceu.centrifuge(`tfg:slate_dust_separation`)             
        .itemInputs('tfg:slate_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.MetalMixture, 780, 480)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 6))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Phyllite
    event.recipes.gtceu.centrifuge(`tfg:phyllite_dust_separation`)             
        .itemInputs('tfg:phyllite_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Quartzite, 5700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.CalciumChloride, 1700, 700)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 2))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Schist
    event.recipes.gtceu.centrifuge(`tfg:schist_dust_separation`)             
        .itemInputs('tfg:schist_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Mica, 6700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Talc, 5700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Graphite, 4700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.MetalMixture, 780, 700)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 12))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)

    // Gneiss
    event.recipes.gtceu.centrifuge(`tfg:gneiss_dust_separation`)             
        .itemInputs('tfg:gneiss_dust')
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Quartzite, 6700, 700)
        .chancedOutput(TagPrefix.dustTiny, GTMaterials.Biotite, 3700, 700)
        .outputFluids(Fluid.of(GTMaterials.Oxygen.getFluid(), 2))
        .EUt(GTValues.VA[GTValues.MV]).duration(480)
    //#endregion

    //#region Молды для экструдера
        
    // Меч
    event.shaped('tfg:shape_extruder_sword_head', [
        'ABC', 
        '   ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_sword_head')

    // Кирка
    event.shaped('tfg:shape_extruder_pickaxe_head', [
        'A  ', 
        'BC ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_pickaxe_head')

    // Топор
    event.shaped('tfg:shape_extruder_axe_head', [
        'A  ', 
        ' BC',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_axe_head')


    // Лопата
    event.shaped('tfg:shape_extruder_shovel_head', [
        'A  ', 
        'B  ',
        'C  '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_shovel_head')

    // Мотыга
    event.shaped('tfg:shape_extruder_hoe_head', [
        'A  ', 
        'CB ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_hoe_head')


    // Молот
    event.shaped('tfg:shape_extruder_hammer_head', [
        'AB ', 
        ' C ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_hammer_head')

    // Пила
    event.shaped('tfg:shape_extruder_saw_head', [
        'AC ', 
        ' B ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_saw_head')

    // Нож
    event.shaped('tfg:shape_extruder_knife_head', [
        'A B', 
        '   ',
        '  C'  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_knife_head')

    // Напильник
    event.shaped('tfg:shape_extruder_file_head', [
        'A  ', 
        '   ',
        'CB '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_file_head')

    // Коса
    event.shaped('tfg:shape_extruder_scythe_head', [
        'A  ', 
        '   ',
        'BC '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_scythe_head')

    // Нож мясника
    event.shaped('tfg:shape_extruder_butchery_knife_head', [
        'A C', 
        '   ',
        '  B'  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_butchery_knife_head')

    // Молот шахтера
    event.shaped('tfg:shape_extruder_mining_hammer_head', [
        'ABC', 
        '   ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_mining_hammer_head')

    // Большая лопата
    event.shaped('tfg:shape_extruder_spade_head', [
        'A  ', 
        'B  ',
        '  C'  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/hammers'  
    }).id('tfg:shaped/shape_extruder_spade_head')

    // Проспектор
    event.shaped('tfg:shape_extruder_propick_head', [
        'ACB', 
        '   ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/wire_cutters'  
    }).id('tfg:shaped/shape_extruder_propick_head')

    // Копье
    event.shaped('tfg:shape_extruder_javelin_head', [
        'A C', 
        'B  ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/wire_cutters'  
    }).id('tfg:shaped/shape_extruder_javelin_head')

    // Стамеска
    event.shaped('tfg:shape_extruder_chisel_head', [
        'A  ', 
        'CB ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/wire_cutters'  
    }).id('tfg:shaped/shape_extruder_chisel_head')

    // Бита
    event.shaped('tfg:shape_extruder_mace_head', [
        'A  ', 
        ' BC',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/files',  
        C: '#forge:tools/wire_cutters'  
    }).id('tfg:shaped/shape_extruder_mace_head')

    global.TFG_EXTRUDER_MOLDS.forEach(mold => {
        event.recipes.gtceu.forming_press(`tfg:copy_mold_${mold.split(':')[1]}`)             
            .itemInputs('gtceu:shape_empty')
            .notConsumable(mold)
            .itemOutputs(mold)
            .EUt(22).duration(120)
            
    })

    //#endregion

    //#region Молды для отливки

    // Лампа
    event.shaped('tfg:shape_mold_unfisnished_lamp', [
        'AB ', 
        '   ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/hammers',  
    }).id('tfg:shaped/shape_mold_unfisnished_lamp')

    // Люк
    event.shaped('tfg:shape_mold_trapdoor', [
        'A  ', 
        '   ',
        '  B'  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/hammers',  
    }).id('tfg:shaped/shape_mold_trapdoor')
    
    // Цепь
    event.shaped('tfg:shape_mold_chain', [
        'A  ', 
        'B  ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/hammers',  
    }).id('tfg:shaped/shape_mold_chain')

    // Колокол
    event.shaped('tfg:shape_mold_bell', [
        'A  ', 
        ' B ',
        '   '  
    ], {
        A: 'gtceu:shape_empty',
        B: '#forge:tools/hammers',  
    }).id('tfg:shaped/shape_mold_bell')

    global.TFG_CASTING_MOLDS.forEach(mold => {
        event.recipes.gtceu.forming_press(`tfg:copy_mold_${mold.split(':')[1]}_casting_mold`)             
            .itemInputs('gtceu:shape_empty')
            .notConsumable(mold)
            .itemOutputs(mold)
            .EUt(22).duration(120)
            
    })

    //#endregion

    //#region Рецепты электрического генератора

    //todo: nerf
    event.recipes.gtceu.alternator('32_rpm_to_32_eu')
        .inputStress(256)
        .circuit(0)
        .rpm(32)
        .duration(2)
        .EUt(-32)

    event.recipes.gtceu.alternator('64_rpm_to_48_eu')
        .inputStress(256)
        .circuit(1)
        .rpm(64)
        .duration(2)
        .EUt(-48)

    event.recipes.gtceu.alternator('128_rpm_to_64_eu')
        .inputStress(256)
        .circuit(2)
        .rpm(128)
        .duration(2)
        .EUt(-64)

    event.recipes.gtceu.alternator('256_rpm_to_96_eu')
        .inputStress(256)
        .circuit(3)
        .rpm(256)
        .duration(2)
        .EUt(-96)
    //#endregion
}

const registerGregTechRecipes1 = (event) => {
    //#region Выход: Удобрение

    // В обычном миксере
    event.recipes.gtceu.mixer('fertilizer')             
        .itemInputs(
            '#tfc:dirt',
            '2x #forge:dusts/wood',
            '4x #forge:sand'
        )
        .circuit(1)
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('4x gtceu:fertilizer')
        .duration(300)
        .EUt(30)

    // В create миксере
    event.recipes.gtceu.create_mixer('fertilizer')             
        .itemInputs(
            '#tfc:dirt',
            '2x #forge:dusts/wood',
            '4x #forge:sand'
        )
        .circuit(1)
        .inputFluids(Fluid.of('minecraft:water', 1000))
        .itemOutputs('4x gtceu:fertilizer')
        .duration(300)
        .EUt(30)
        .rpm(96)

    //#endregion

    //#region Выход: Кварцевый песок

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

    //#endregion

    //#region Выход: Диоксид силикона

    event.recipes.gtceu.electrolyzer('sand_electrolysis')             
        .itemInputs('8x #forge:sand')
        .itemOutputs('gtceu:silicon_dioxide_dust')
        .duration(500)
        .EUt(25)

    //#endregion

    //#region Выход: Соленая пыль + Вода

    // Декрафт в центрифуге
    event.recipes.gtceu.centrifuge('centrifuging_tfc_salt_water')             
        .inputFluids(Fluid.of('tfc:salt_water', 1000))
        .itemOutputs('1x gtceu:salt_dust')
        .outputFluids(Fluid.of('minecraft:water', 1000))
        .duration(51)
        .EUt(30)

    // Декрафт в электролайзере
    event.recipes.gtceu.electrolyzer('electrolyze_tfc_salt_water')             
        .inputFluids(Fluid.of('tfc:salt_water', 1000))
        .itemOutputs('1x gtceu:sodium_hydroxide_dust', '2x gtceu:small_sodium_hydroxide_dust')
        .outputFluids(Fluid.of('gtceu:chlorine', 500), Fluid.of('gtceu:hydrogen', 500))
        .duration(720)
        .EUt(30)

    //#endregion

    //#region Выход: Крошечная кучка камня

    event.remove({ id: 'gtceu:macerator/macerate_stone_button' })

    //#endregion
    
    //#region Выход: Маленькая кучка камня

    event.remove({ id: 'gtceu:macerator/macerate_stone_stairs' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_slab' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_brick_stairs' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_brick_slab' })
    event.remove({ id: 'gtceu:macerator/macerate_sandstone_stairs' })
    event.remove({ id: 'gtceu:macerator/macerate_sandstone_slab' })
    event.remove({ id: 'gtceu:macerator/macerate_red_sandstone_stairs' })
    event.remove({ id: 'gtceu:macerator/macerate_red_sandstone_slab' })
    event.remove({ id: 'gtceu:macerator/macerate_granite' })
    event.remove({ id: 'gtceu:macerator/macerate_diorite' })
    event.remove({ id: 'gtceu:macerator/macerate_cobblestone_slab' })
    event.remove({ id: 'gtceu:macerator/macerate_andesite' })

    //#endregion
    
    //#region Выход: Кучка камня

    event.remove({ id: 'gtceu:macerator/macerate_stone_sword' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_shovel' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_pressure_plate' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_pickaxe' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_hoe' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_bricks' })
    event.remove({ id: 'gtceu:macerator/macerate_stone_axe' })
    event.remove({ id: 'gtceu:macerator/macerate_mossy_cobblestone' })
    event.remove({ id: 'gtceu:macerator/macerate_cobblestone_wall' })
    event.remove({ id: 'gtceu:macerator/macerate_cobblestone' })
    event.remove({ id: 'gtceu:macerator/gravel_to_flint' })
    event.remove({ id: 'gtceu:macerator/macerate_furnace' })

    //#endregion

    //#region Выход: Каменный стержень

    // Из сырого камня
    event.recipes.gtceu.lathe('stone_rod_from_stone')             
        .itemInputs('#tfc:rock/raw')
        .itemOutputs('gtceu:stone_rod', 'gtceu:small_stone_dust')
        .duration(15)
        .EUt(2)

    // Из булыжника
    event.recipes.gtceu.lathe('stone_rod_from_cobblestone')             
        .itemInputs('#forge:cobblestone')
        .itemOutputs('gtceu:stone_rod', 'gtceu:small_stone_dust')
        .duration(15)
        .EUt(2)

    //#endregion

    //#region Выход: Сырая резиновая пыль
    
    // Из бревна капока
    event.recipes.gtceu.extractor('raw_rubber_from_log')             
        .itemInputs('#tfc:kapok_logs')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    // Из саженца капока
    event.recipes.gtceu.extractor('raw_rubber_from_sapling')             
        .itemInputs('tfc:wood/sapling/kapok')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    // Из листвы капока
    event.recipes.gtceu.extractor('raw_rubber_from_leaves')             
        .itemInputs('16x tfc:wood/leaves/kapok')
        .itemOutputs('gtceu:raw_rubber_dust')
        .duration(300)
        .EUt(2)

    //#endregion

    //#region Выход: Пропитанные доски

    event.remove({ id: 'gtceu:shaped/treated_wood_planks' })

    event.recipes.tfc.barrel_sealed(4000)
        .outputItem('gtceu:treated_wood_planks')
        .inputs('#minecraft:planks', TFC.fluidStackIngredient('#forge:creosote', 100))
        .id('tfg:barrel/treated_wood_planks')

    //#endregion

    //#region Выход: Капля резины

    // Из латекса
    event.recipes.tfc.pot('tfc:powder/sulfur', Fluid.of('tfg:latex', 1000), 5000, 300)
        .itemOutput('gtceu:sticky_resin')
        .id('tfg:pot/sticky_resin')

    // Из бревна капока
    event.recipes.gtceu.centrifuge('rubber_log_separation')             
        .itemInputs('#tfc:kapok_logs')
        .chancedOutput('gtceu:sticky_resin', 5000, 1200)
        .chancedOutput('gtceu:plant_ball', 3750, 900)
        .chancedOutput('gtceu:carbon_dust', 2500, 600)
        .chancedOutput('gtceu:wood_dust', 2500, 700)
        .outputFluids(Fluid.of('gtceu:methane', 60))
        .duration(200)
        .EUt(20)

    //#endregion

    //#region Выход: Растительный шарик

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
    event.remove({id: 'gtceu:compressor/plant_ball_from_moss'})

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

    //#endregion

    //#region Выход: Биомасса

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

    //#endregion

    //#region Выход: Рыбье масло

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

    //#region Выход: Семянное масло

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

    //#region Выход: Цемент

    generateMixerRecipe(
        event, 
        ['2x #tfg:stone_dusts', 'gtceu:marble_dust', 'gtceu:gypsum_dust'], 
        Fluid.of('minecraft:water', 1000),
        [],
        null,
        Fluid.of('gtceu:concrete', 1152),
        40,
        16,
        64,
        'concrete_from_marble'
    )

    generateMixerRecipe(
        event, 
        ['3x #tfg:stone_dusts', 'gtceu:clay_dust'], 
        Fluid.of('minecraft:water', 500),
        [],
        null,
        Fluid.of('gtceu:concrete', 576),
        20,
        16,
        64,
        'concrete_from_clay'
    )

    generateMixerRecipe(
        event, 
        ['3x #tfg:stone_dusts', 'gtceu:calcite_dust', 'gtceu:gypsum_dust'], 
        Fluid.of('minecraft:water', 1000),
        [],
        null,
        Fluid.of('gtceu:concrete', 1152),
        40,
        16,
        64,
        'concrete_from_calcite'
    )

    //#endregion

    //#region Выход: Бурильная жидкость
    
    generateMixerRecipe(
        event, 
        ['2x #tfg:stone_dusts'], 
        [Fluid.of('gtceu:lubricant', 20), Fluid.of('minecraft:water', 4000)],
        [],
        null,
        Fluid.of('gtceu:drilling_fluid', 5000),
        40,
        16,
        64,
        'drilling_fluid'
    )

    //#endregion

    //#region Выход: Крошечная кучка дерева

    event.remove({ id: 'gtceu:macerator/macerate_warped_button' })
    event.remove({ id: 'gtceu:macerator/macerate_spruce_button' })
    event.remove({ id: 'gtceu:macerator/macerate_oak_button' })
    event.remove({ id: 'gtceu:macerator/macerate_mangrove_button' })
    event.remove({ id: 'gtceu:macerator/macerate_jungle_button' })
    event.remove({ id: 'gtceu:macerator/macerate_dark_oak_button' })
    event.remove({ id: 'gtceu:macerator/macerate_crimson_button' })
    event.remove({ id: 'gtceu:macerator/macerate_cherry_button' })
    event.remove({ id: 'gtceu:macerator/macerate_birch_button' })
    event.remove({ id: 'gtceu:macerator/macerate_acacia_button' })

    //#endregion

    //#region Выход: Маленькая кучка дерева

   event.remove({ id: 'gtceu:macerator/macerate_wooden_sword' })
   event.remove({ id: 'gtceu:macerator/macerate_wooden_shovel' })
   event.remove({ id: 'gtceu:macerator/macerate_wooden_pickaxe' })
   event.remove({ id: 'gtceu:macerator/macerate_wooden_hoe' })
   event.remove({ id: 'gtceu:macerator/macerate_wooden_axe' })
   event.remove({ id: 'gtceu:macerator/macerate_warped_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_warped_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_spruce_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_spruce_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_oak_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_oak_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_mangrove_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_mangrove_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_jungle_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_jungle_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_iron_sword' })
   event.remove({ id: 'gtceu:macerator/macerate_iron_shovel' })
   event.remove({ id: 'gtceu:macerator/macerate_iron_pickaxe' })
   event.remove({ id: 'gtceu:macerator/macerate_iron_hoe' })
   event.remove({ id: 'gtceu:macerator/macerate_iron_axe' })
   event.remove({ id: 'gtceu:macerator/macerate_golden_sword' })
   event.remove({ id: 'gtceu:macerator/macerate_golden_shovel' })
   event.remove({ id: 'gtceu:macerator/macerate_golden_pickaxe' })
   event.remove({ id: 'gtceu:macerator/macerate_golden_hoe' })
   event.remove({ id: 'gtceu:macerator/macerate_golden_axe' })
   event.remove({ id: 'gtceu:macerator/macerate_diamond_sword' })
   event.remove({ id: 'gtceu:macerator/macerate_diamond_shovel' })
   event.remove({ id: 'gtceu:macerator/macerate_diamond_pickaxe' })
   event.remove({ id: 'gtceu:macerator/macerate_diamond_hoe' })
   event.remove({ id: 'gtceu:macerator/macerate_diamond_axe' })
   event.remove({ id: 'gtceu:macerator/macerate_dark_oak_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_dark_oak_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_crimson_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_crimson_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_cherry_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_cherry_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_birch_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_birch_slab' })
   event.remove({ id: 'gtceu:macerator/macerate_acacia_stairs' })
   event.remove({ id: 'gtceu:macerator/macerate_acacia_slab' })

   //#endregion

    //#region Выход: Деревянная пыль

    event.remove({id: 'gtceu:macerator/macerate_trapped_chest'})
    event.remove({id: 'gtceu:macerator/macerate_spruce_planks'})
    event.remove({id: 'gtceu:macerator/macerate_spruce_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_spruce_fence'})
    event.remove({id: 'gtceu:macerator/macerate_spruce_door'})
    event.remove({id: 'gtceu:macerator/macerate_spruce_boat'})
    event.remove({id: 'gtceu:macerator/macerate_oak_planks'})
    event.remove({id: 'gtceu:macerator/macerate_oak_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_oak_fence'})
    event.remove({id: 'gtceu:macerator/macerate_oak_door'})
    event.remove({id: 'gtceu:macerator/macerate_oak_boat'})
    event.remove({id: 'gtceu:macerator/macerate_mangrove_planks'})
    event.remove({id: 'gtceu:macerator/macerate_mangrove_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_mangrove_fence'})
    event.remove({id: 'gtceu:macerator/macerate_mangrove_door'})
    event.remove({id: 'gtceu:macerator/macerate_mangrove_boat'})
    event.remove({id: 'gtceu:macerator/macerate_jungle_planks'})
    event.remove({id: 'gtceu:macerator/macerate_jungle_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_jungle_fence'})
    event.remove({id: 'gtceu:macerator/macerate_jungle_door'})
    event.remove({id: 'gtceu:macerator/macerate_jungle_boat'})
    event.remove({id: 'gtceu:macerator/macerate_dark_oak_planks'})
    event.remove({id: 'gtceu:macerator/macerate_dark_oak_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_dark_oak_fence'})
    event.remove({id: 'gtceu:macerator/macerate_dark_oak_door'})
    event.remove({id: 'gtceu:macerator/macerate_dark_oak_boat'})
    event.remove({id: 'gtceu:macerator/macerate_crafting_table'})
    event.remove({id: 'gtceu:macerator/macerate_chest'})
    event.remove({id: 'gtceu:macerator/macerate_chest_minecart'})
    event.remove({id: 'gtceu:macerator/macerate_cherry_planks'})
    event.remove({id: 'gtceu:macerator/macerate_cherry_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_cherry_fence'})
    event.remove({id: 'gtceu:macerator/macerate_cherry_door'})
    event.remove({id: 'gtceu:macerator/macerate_cherry_boat'})
    event.remove({id: 'gtceu:macerator/macerate_bookshelf'})
    event.remove({id: 'gtceu:macerator/macerate_birch_planks'})
    event.remove({id: 'gtceu:macerator/macerate_birch_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_birch_fence'})
    event.remove({id: 'gtceu:macerator/macerate_birch_door'})
    event.remove({id: 'gtceu:macerator/macerate_birch_boat'})
    event.remove({id: 'gtceu:macerator/macerate_acacia_planks'})
    event.remove({id: 'gtceu:macerator/macerate_acacia_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_acacia_fence'})
    event.remove({id: 'gtceu:macerator/macerate_acacia_door'})
    event.remove({id: 'gtceu:macerator/macerate_acacia_boat'})
    event.remove({id: 'gtceu:macerator/macerate_bamboo_raft'})
    event.remove({id: 'gtceu:macerator/macerate_crimson_door'})
    event.remove({id: 'gtceu:macerator/macerate_crimson_fence'})
    event.remove({id: 'gtceu:macerator/macerate_crimson_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_crimson_planks'})
    event.remove({id: 'gtceu:macerator/macerate_warped_door'})
    event.remove({id: 'gtceu:macerator/macerate_warped_fence'})
    event.remove({id: 'gtceu:macerator/macerate_warped_fence_gate'})
    event.remove({id: 'gtceu:macerator/macerate_warped_planks'})

    //#endregion

    //#region Выход: Бумажная пыль

    event.remove({ id: 'gtceu:shaped/paper_dust' })

    //#endregion

    //#region Выход: Метан

    event.remove({ id: 'gtceu:centrifuge/red_mushroom_separation' })
    event.remove({ id: 'gtceu:centrifuge/brown_mushroom_separation' })

    //#endregion

    //#region Выход: Маленькая кучка мяса

    event.remove({ id: 'gtceu:macerator/macerate_steak' })
    event.remove({ id: 'gtceu:macerator/macerate_rabbit' })
    event.remove({ id: 'gtceu:macerator/macerate_pork_chop' })

    //#endregion

    //#region Выход: Пыль мяса

    event.remove({ id: 'gtceu:macerator/macerate_mutton' })
    event.remove({ id: 'gtceu:macerator/macerate_chicken' })
    
    event.recipes.gtceu.macerator('macerate_meat_to_dust')             
        .itemInputs('#tfc:foods/meats')
        .itemOutputs('gtceu:meat_dust', 'gtceu:tiny_bone_dust')
        .duration(100)
        .EUt(2)

    //#endregion
    
    //#region Выход: Пшеничная пыль

    event.remove({ id: 'gtceu:shapeless/wheat_to_dust' })
    event.remove({ id: 'gtceu:macerator/macerate_wheat' })
    event.remove({ id: 'gtceu:macerator/macerate_hay_block' })

    //#endregion

    //#region Выход: Пыль какао-бобов

    event.recipes.gtceu.assembler('macerate_cocoa')             
        .itemInputs('firmalife:food/cocoa_beans')
        .itemOutputs('gtceu:cocoa_dust')
        .duration(400)
        .EUt(2)

    //#endregion

    //#region Выход: Слиток кованного железа

    event.remove({ id: 'gtceu:arc_furnace/arc_chest_minecart' })
    event.remove({ id: 'gtceu:arc_furnace/arc_iron_trapdoor' })
    event.remove({ id: 'gtceu:arc_furnace/arc_damaged_anvil' })
    event.remove({ id: 'gtceu:arc_furnace/arc_chipped_anvil' })
    event.remove({ id: 'gtceu:arc_furnace/arc_anvil' })
    event.remove({ id: 'gtceu:arc_furnace/arc_furnace_minecart' })
    event.remove({ id: 'gtceu:arc_furnace/arc_compass' })
    
    //#endregion

    //#region Выход: Кованные самородки

    event.remove({ id: 'gtceu:arc_furnace/arc_iron_bars' })

    //#endregion

    //#region Выход: Железная пыль

    event.remove({ id: 'gtceu:macerator/macerate_iron_trapdoor' })
    event.remove({ id: 'gtceu:macerator/macerate_damaged_anvil' })
    event.remove({ id: 'gtceu:macerator/macerate_chipped_anvil' })
    event.remove({ id: 'gtceu:macerator/macerate_anvil' })
    event.remove({ id: 'gtceu:macerator/macerate_furnace_minecart' })
    event.remove({ id: 'gtceu:macerator/macerate_bucket' })
    event.remove({ id: 'gtceu:macerator/macerate_compass' })

    //#endregion

    //#region Выход: Крошечная железная пыль

    event.remove({ id: 'gtceu:macerator/macerate_iron_bars' })

    //#endregion

    //#region Выход: Крошечная пыль золы

    event.remove({ id: 'gtceu:arc_furnace/arc_bookshelf' })

    //#endregion

    //#region Выход: Пыль незерака

    event.remove({ id: 'gtceu:macerator/macerate_nether_brick_stairs' })
    event.remove({ id: 'gtceu:macerator/macerate_nether_brick_slab' })

    //#endregion

    //#region Выход: Пыль базальта

    event.remove({ id: 'gtceu:macerator/macerate_basalt' })

    //#endregion

    //#region Выход: Filter Casing

    event.shaped('gtceu:filter_casing', [
        'AAA',
        'BBB',
        'CDE' 
    ], {
        A: '#tfg:metal_bars',
        B: 'gtceu:item_filter',
        C: 'gtceu:mv_electric_motor',
        D: 'gtceu:steel_frame',
        E: '#forge:rotors/steel'
    }).id('gtceu:shaped/filter_casing')
    
    //#endregion

    //#region Выход: Assembly Line Grating

    event.shaped('2x gtceu:assembly_line_grating', [
        'ABA',
        'ACA',
        'ADA' 
    ], {
        A: '#tfg:metal_bars',
        B: '#forge:rotors/steel',
        C: 'gtceu:steel_frame',
        D: 'gtceu:mv_electric_motor'
    }).id('gtceu:shaped/casing_grate_casing')
    
    //#endregion

    //#region Gas Collectors

    event.shaped('gtceu:lv_gas_collector', [
        'ABA',
        'CEC',
        'ADA' 
    ], {
        A: '#tfg:metal_bars',
        B: 'gtceu:fluid_filter',
        C: 'gtceu:lv_electric_pump',
        D: '#gtceu:circuits/lv',
        E: 'gtceu:lv_machine_hull'
    }).id('gtceu:shaped/lv_gas_collector')

    event.shaped('gtceu:mv_gas_collector', [
        'ABA',
        'CEC',
        'ADA' 
    ], {
        A: '#tfg:metal_bars',
        B: 'gtceu:fluid_filter',
        C: 'gtceu:mv_electric_pump',
        D: '#gtceu:circuits/mv',
        E: 'gtceu:mv_machine_hull'
    }).id('gtceu:shaped/mv_gas_collector')

    event.shaped('gtceu:hv_gas_collector', [
        'ABA',
        'CEC',
        'ADA' 
    ], {
        A: '#tfg:metal_bars',
        B: 'gtceu:fluid_filter',
        C: 'gtceu:hv_electric_pump',
        D: '#gtceu:circuits/hv',
        E: 'gtceu:hv_machine_hull'
    }).id('gtceu:shaped/hv_gas_collector')

    event.shaped('gtceu:ev_gas_collector', [
        'ABA',
        'CEC',
        'ADA' 
    ], {
        A: '#tfg:metal_bars',
        B: 'gtceu:fluid_filter',
        C: 'gtceu:ev_electric_pump',
        D: '#gtceu:circuits/ev',
        E: 'gtceu:ev_machine_hull'
    }).id('gtceu:shaped/ev_gas_collector')

    event.shaped('gtceu:iv_gas_collector', [
        'ABA',
        'CEC',
        'ADA' 
    ], {
        A: '#tfg:metal_bars',
        B: 'gtceu:fluid_filter',
        C: 'gtceu:iv_electric_pump',
        D: '#gtceu:circuits/iv',
        E: 'gtceu:iv_machine_hull'
    }).id('gtceu:shaped/iv_gas_collector')

    event.shaped('gtceu:luv_gas_collector', [
        'ABA',
        'CEC',
        'ADA' 
    ], {
        A: '#tfg:metal_bars',
        B: 'gtceu:fluid_filter',
        C: 'gtceu:luv_electric_pump',
        D: '#gtceu:circuits/luv',
        E: 'gtceu:luv_machine_hull'
    }).id('gtceu:shaped/luv_gas_collector')

    event.shaped('gtceu:zpm_gas_collector', [
        'ABA',
        'CEC',
        'ADA' 
    ], {
        A: '#tfg:metal_bars',
        B: 'gtceu:fluid_filter',
        C: 'gtceu:zpm_electric_pump',
        D: '#gtceu:circuits/zpm',
        E: 'gtceu:zpm_machine_hull'
    }).id('gtceu:shaped/zpm_gas_collector')

    event.shaped('gtceu:uv_gas_collector', [
        'ABA',
        'CEC',
        'ADA' 
    ], {
        A: '#tfg:metal_bars',
        B: 'gtceu:fluid_filter',
        C: 'gtceu:uv_electric_pump',
        D: '#gtceu:circuits/uv',
        E: 'gtceu:uv_machine_hull'
    }).id('gtceu:shaped/uv_gas_collector')
    
    //#endregion

    //#region Forge Hammers

    event.shaped('gtceu:lv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:tin_single_cable',
        B: 'gtceu:lv_electric_piston',
        C: '#gtceu:circuits/lv',
        D: 'gtceu:lv_machine_hull',
        E: 'tfc:metal/anvil/steel',
    }).id('gtceu:shaped/lv_forge_hammer')

    event.shaped('gtceu:mv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:copper_single_cable',
        B: 'gtceu:mv_electric_piston',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:mv_machine_hull',
        E: 'tfc:metal/anvil/steel',
    }).id('gtceu:shaped/mv_forge_hammer')

    event.shaped('gtceu:hv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:gold_single_cable',
        B: 'gtceu:hv_electric_piston',
        C: '#gtceu:circuits/hv',
        D: 'gtceu:hv_machine_hull',
        E: 'tfc:metal/anvil/steel',
    }).id('gtceu:shaped/hv_forge_hammer')

    event.shaped('gtceu:ev_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:aluminium_single_cable',
        B: 'gtceu:ev_electric_piston',
        C: '#gtceu:circuits/ev',
        D: 'gtceu:ev_machine_hull',
        E: 'tfc:metal/anvil/black_steel',
    }).id('gtceu:shaped/ev_forge_hammer')

    event.shaped('gtceu:iv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:platinum_single_cable',
        B: 'gtceu:iv_electric_piston',
        C: '#gtceu:circuits/iv',
        D: 'gtceu:iv_machine_hull',
        E: 'tfc:metal/anvil/black_steel',
    }).id('gtceu:shaped/iv_forge_hammer')

    event.shaped('gtceu:luv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:niobium_titanium_single_cable',
        B: 'gtceu:luv_electric_piston',
        C: '#gtceu:circuits/luv',
        D: 'gtceu:luv_machine_hull',
        E: 'tfc:metal/anvil/black_steel',
    }).id('gtceu:shaped/luv_forge_hammer')

    event.shaped('gtceu:zpm_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:vanadium_gallium_single_cable',
        B: 'gtceu:zpm_electric_piston',
        C: '#gtceu:circuits/zpm',
        D: 'gtceu:zpm_machine_hull',
        E: '#tfg:tier_6_anvil',
    }).id('gtceu:shaped/zpm_forge_hammer')

    event.shaped('gtceu:uv_forge_hammer', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:yttrium_barium_cuprate_single_cable',
        B: 'gtceu:uv_electric_piston',
        C: '#gtceu:circuits/uv',
        D: 'gtceu:uv_machine_hull',
        E: '#tfg:tier_6_anvil',
    }).id('gtceu:shaped/uv_forge_hammer')

    //#endregion

    //#region CokeOven

    // Coke Oven
    event.shaped('gtceu:coke_oven', [
        'ABA', 
        'BCB',
        'ABA'  
    ], {
        A: 'gtceu:coke_oven_bricks',
        B: '#forge:plates/wrought_iron',  
        C: '#forge:tools/wrenches'  
    }).id('gtceu:shaped/coke_oven')

    // Coke Oven Hatch
    event.shaped('gtceu:coke_oven_hatch', [
        'AB'  
    ], {
        A: 'gtceu:coke_oven_bricks',
        B: '#tfc:barrels' 
    }).id('gtceu:shaped/coke_oven_hatch')

    //#endregion

    //#region Выход: Слиток камня

    event.remove({id: 'gtceu:alloy_smelter/alloy_smelt_stone_to_ingot'})

    //#endregion

    //#region Выход: Бронзовые машины (Плюс их декрафты)
    
    event.remove({ id: 'gtceu:shaped/bronze_hull' })
    event.remove({ id: 'gtceu:arc_furnace/arc_bronze_machine_casing' })
    event.remove({ id: 'gtceu:macerator/macerate_bronze_machine_casing' })

    event.remove({ id: 'gtceu:shaped/steam_extractor_bronze' })
    event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_extractor' })
    event.remove({ id: 'gtceu:macerator/macerate_lp_steam_extractor' })

    event.remove({ id: 'gtceu:shaped/steam_macerator_bronze' })
    event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_macerator' })
    event.remove({ id: 'gtceu:macerator/macerate_lp_steam_macerator' })

    event.remove({ id: 'gtceu:shaped/steam_compressor_bronze' })
    event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_compressor' })
    event.remove({ id: 'gtceu:macerator/macerate_lp_steam_compressor' })

    event.remove({ id: 'gtceu:shaped/steam_hammer_bronze' })
    event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_forge_hammer' })
    event.remove({ id: 'gtceu:macerator/macerate_lp_steam_forge_hammer' })

    event.remove({ id: 'gtceu:shaped/steam_furnace_bronze' })
    event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_furnace' })
    event.remove({ id: 'gtceu:macerator/macerate_lp_steam_furnace' })

    event.remove({ id: 'gtceu:shaped/steam_alloy_smelter_bronze' })
    event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_alloy_smelter' })
    event.remove({ id: 'gtceu:macerator/macerate_lp_steam_alloy_smelter' })

    event.remove({ id: 'gtceu:shaped/steam_rock_breaker_bronze' })
    event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_rock_crusher' })
    event.remove({ id: 'gtceu:macerator/macerate_lp_steam_rock_crusher' })

    event.remove({ id: 'gtceu:shaped/steam_miner' })
    event.remove({ id: 'gtceu:arc_furnace/arc_steam_miner' })
    event.remove({ id: 'gtceu:macerator/macerate_steam_miner' })

    // Low Pressure Steam Solid Boiler
    event.shaped('gtceu:lp_steam_solid_boiler', [
        'AAA',
        'ABA',
        'ACA'
    ], {
        A: '#forge:plates/bronze',
        B: '#forge:tools/wrenches',
        C: 'gtceu:bronze_brick_casing'
    }).id('gtceu:shaped/steam_boiler_coal_bronze')

    //#endregion

    //#region Выход: Стальные машины

    // Экстрактор
    event.shaped('gtceu:hp_steam_extractor', [
        'BEB',
        'CAC',
        'DBD'
    ], {
        A: 'gtceu:steel_brick_casing',
        B: 'gtceu:tin_alloy_small_fluid_pipe',
        C: '#forge:plates/steel',
        D: '#forge:plates/wrought_iron',
        E: '#forge:glass_panes'
    }).id('gtceu:shaped/steam_extractor_steel')

    // Дробитель
    event.shaped('gtceu:hp_steam_macerator', [
        'CCC',
        'BAB',
        'DDD'
    ], {
        A: 'gtceu:steel_brick_casing',
        B: 'gtceu:tin_alloy_small_fluid_pipe',
        C: '#forge:plates/steel',
        D: '#forge:plates/wrought_iron'
    }).id('gtceu:shaped/steam_macerator_steel')

    // Компрессор
    event.shaped('gtceu:hp_steam_compressor', [
        'BCB',
        'DAD',
        'BBB'
    ], {
        A: 'gtceu:steel_brick_casing',
        B: 'gtceu:tin_alloy_small_fluid_pipe',
        C: '#forge:plates/steel',
        D: '#forge:plates/wrought_iron'
    }).id('gtceu:shaped/steam_compressor_steel')

    // Молот
    event.shaped('gtceu:hp_steam_forge_hammer', [
        'DDD',
        'BAB',
        'CCC'
    ], {
        A: 'gtceu:steel_brick_casing',
        B: 'gtceu:tin_alloy_small_fluid_pipe',
        C: '#forge:plates/steel',
        D: '#forge:plates/wrought_iron'
    }).id('gtceu:shaped/steam_hammer_steel')

    // Печь
    event.shaped('gtceu:hp_steam_furnace', [
        'BCB',
        'DAD',
        'BCB'
    ], {
        A: 'gtceu:steel_brick_casing',
        B: 'gtceu:tin_alloy_small_fluid_pipe',
        C: '#forge:plates/steel',
        D: '#forge:plates/wrought_iron'
    }).id('gtceu:shaped/steam_furnace_steel')

    // Сплавщик
    event.shaped('gtceu:hp_steam_alloy_smelter', [
        'DCD',
        'DAD',
        'DBD'
    ], {
        A: 'gtceu:steel_brick_casing',
        B: 'gtceu:tin_alloy_small_fluid_pipe',
        C: '#forge:plates/steel',
        D: '#forge:plates/wrought_iron'
    }).id('gtceu:shaped/steam_alloy_smelter_steel')

    // Блоко-ломатель
    event.shaped('gtceu:hp_steam_rock_crusher', [
        'DCD',
        'BAB',
        'DDD'
    ], {
        A: 'gtceu:steel_brick_casing',
        B: 'gtceu:tin_alloy_small_fluid_pipe',
        C: '#forge:plates/steel',
        D: '#forge:plates/wrought_iron'
    }).id('gtceu:shaped/steam_rock_breaker_steel')

    //#endregion

    //#region Выход: некоторые рецепты пылей

    event.remove({id: 'gtceu:shapeless/dust_brass'})
    event.remove({id: 'gtceu:shapeless/glass_dust_flint'})
    event.remove({id: 'gtceu:shapeless/dust_bronze'})
    event.remove({id: 'gtceu:shapeless/potin_dust'})

    //#endregion

    //#region Вырезка из резины

    // TODO: Не работает из-за магического бага
    // event.recipes.tfc.knapping('gtceu:rubber_ring', 'tfg:rubber', ['XXX', 'X X', 'XXX'])
    //    .ingredient('gtceu:rubber_plate')

    //#endregion

    //#region Стеклодувка

    // Glass Tube
    event.recipes.tfc.glassworking('gtceu:glass_tube', '#tfc:glass_batches_tier_3', ['blow', 'stretch', 'stretch'])
        .id('tfg:gtceu/glassworking/glass_tube')

    //#endregion

    // Удаление рецептов связанных с Primitive Blast Furnace
    event.remove({ id: 'gtceu:arc_furnace/arc_primitive_blast_furnace' })
    event.remove({ id: 'gtceu:macerator/macerate_primitive_blast_furnace' })

    // Удаление рецепта беск. воды кавера
    event.remove('gtceu:assembler/cover_infinite_water')

    // Удаление рецептов помпы
    event.remove('gtceu:shaped/pump_deck')
    event.remove('gtceu:shaped/pump_hatch')
    event.remove('gtceu:shaped/primitive_pump')

    // Удаление рецептов связанных с Barrel
    event.remove({ id: 'gtceu:shaped/wooden_barrel' })
    event.remove({ id: 'gtceu:assembler/wood_barrel' })
    event.remove({ id: 'gtceu:arc_furnace/arc_wood_drum' })
    event.remove({ id: 'gtceu:macerator/macerate_wood_drum' })
 
    // Удаление рецептов связанных с FireBricks
    event.remove({id: 'gtceu:shaped/casing_primitive_bricks' })
    event.remove({id: 'gtceu:macerator/macerate_firebricks' })
    event.remove({id: 'gtceu:extractor/extract_primitive_bricks' })

    // Удаление рецептов связанных с FireBrick
    event.remove({ id: 'gtceu:smelting/fireclay_brick' })
    event.remove({ id: 'gtceu:macerator/macerate_firebrick' })

    // TODO: Удалить после фикса GTCEu
    event.remove({ id: 'gtceu:extractor/extract_raw_rubber_dust' })

    // Пыль звезды незера 
    // TODO: удалить после имплементации ада
    event.recipes.gtceu.chemical_reactor('tfg:gtceu/nether_star_dust')             
        .itemInputs('2x #forge:dusts/iridium', '#forge:dusts/diamond')
        .circuit(10)
        .itemOutputs('gtceu:nether_star_dust')
        .inputFluids(Fluid.of('gtceu:sulfur_dioxide', 6000), Fluid.of('gtceu:carbon_monoxide', 8000))
        .duration(700)
        .EUt(2720)

    // Creosote-Treated Wood Planks -> Treated Wood Pulp
    event.recipes.gtceu.macerator('tfg:gtceu/macerate_treated_wood_planks')             
        .itemInputs('gtceu:treated_wood_planks')
        .itemOutputs('gtceu:treated_wood_dust')
        .duration(120)
        .EUt(4)

    // Empty Wooden Form
    event.shaped('gtceu:empty_wooden_form', [
        ' AA', 
        'BAA'
    ], {
        A: '#minecraft:planks',
        B: '#forge:tools/saws'
    }).id('gtceu:shaped/plank_to_wooden_shape')
    
    // Деревянная шестерня
    event.shaped('gtceu:wood_gear', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#tfc:can_be_lit_on_torch',
        B: '#forge:tools/wrenches'
    }).id('gtceu:shaped/gear_wood')

    // Контроллер теплицы
    event.shaped('gtceu:greenhouse', [
        'ABA', 
        'CDC', 
        'BCB'
    ], {
        A: '#gtceu:circuits/mv',
        B: 'gtceu:copper_single_cable',
        C: '#gtceu:circuits/mv',
        D: 'gtceu:solid_machine_casing'
    }).id('tfg:shaped/greenhouse')

    // Контроллер электрического генератора
    event.shaped('gtceu:alternator', [
        'ABA', 
        'CDC', 
        'EBE'
    ], {
        A: '#gtceu:resistors',
        B: '#gtceu:circuits/lv',
        C: 'gtceu:lv_voltage_coil',
        D: 'gtceu:solid_machine_casing',
        E: 'gtceu:copper_single_cable'
    }).id('tfg:shaped/alternator')

    // Compressed Coke Clay
    event.shaped('gtceu:compressed_coke_clay', [
        'AAA', 
        'BCB',
        'BBB' 
    ], {
        A: 'minecraft:clay_ball',
        B: '#minecraft:sand',
        C: 'gtceu:brick_wooden_form'
    }).replaceIngredient('gtceu:brick_wooden_form', 'gtceu:brick_wooden_form').id('gtceu:shaped/compressed_coke_clay')

    // Compressed Coke Clay -> Coke Oven Brick
    event.recipes.tfc.heating('gtceu:compressed_coke_clay', 1399)
        .resultItem('gtceu:coke_oven_brick')
        .id('tfg:heating/coke_oven_bricks')

    // TFC FireBrick -> FireBrick dust
    event.recipes.gtceu.macerator('macerate_firebrick')             
        .itemInputs('tfc:ceramic/fire_brick')
        .itemOutputs('gtceu:fireclay_dust')
        .duration(15)
        .EUt(2)

    // Steel Steam Boiler
    event.shaped('gtceu:hp_steam_solid_boiler', [
        'AAA', 
        'ACA',
        'BDB'  
    ], {
        A: '#forge:plates/steel',
        B: 'minecraft:bricks',  
        C: '#forge:tools/wrenches',
        D: 'tfc:blast_furnace'
    }).id('gtceu:shaped/steam_boiler_coal_steel')

    // Multi-Smelter
    event.shaped('gtceu:multi_smelter', [
        'AAA', 
        'BCB',
        'DBD'  
    ], {
        A: 'gtceu:hp_steam_furnace',
        B: '#gtceu:circuits/hv',  
        C: 'gtceu:heatproof_machine_casing',
        D: 'gtceu:copper_single_cable'
    }).id('gtceu:shaped/multi_furnace')

    // Electric Blast Furnace
    event.shaped('gtceu:electric_blast_furnace', [
        'AAA', 
        'BCB',
        'DBD'
    ], {
        A: 'gtceu:hp_steam_furnace',
        B: '#gtceu:circuits/lv',  
        C: 'gtceu:heatproof_machine_casing',
        D: 'gtceu:tin_single_cable'
    }).id('gtceu:shaped/electric_blast_furnace')

    // Клей из ТФК клея
    event.recipes.gtceu.centrifuge('glue_from_tfc_glue')             
        .itemInputs('tfc:glue')
        .outputFluids(Fluid.of('gtceu:glue', 50))
        .duration(400)
        .EUt(5)

    // Исправление рецепта пыли серебра стерлинга
    generateMixerRecipe(event, ['#forge:dusts/copper', '4x #forge:dusts/silver'], [], '5x gtceu:sterling_silver_dust', 1, [], 500, 24, 64, 'sterling_silver')

    // Исправление рецепта пыли розовой бронзы
    generateMixerRecipe(event, ['#forge:dusts/copper', '4x #forge:dusts/gold'], [], '5x gtceu:rose_gold_dust', 3, [], 500, 24, 64, 'rose_gold')

    //#region Рецепт ULV микросхемы

    event.remove({ id: 'gtceu:shaped/vacuum_tube' })

    event.recipes.createSequencedAssembly([
        'gtceu:vacuum_tube', 
    ], '#forge:plates/wrought_iron', [
        event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', '#forge:bolts/steel']),
        event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:glass_tube']),
        event.recipes.createDeploying('tfg:unfinished_vacuum_tube', ['tfg:unfinished_vacuum_tube', 'gtceu:copper_single_wire']),
    ]).transitionalItem('tfg:unfinished_vacuum_tube').loops(2).id('tfg:gtceu/sequenced_assembly/vacuum_tube')

    //#endregion
    
    //#region Рецепт LV микросхемы

    event.remove({ id: 'gtceu:shaped/electronic_circuit_lv' })

    event.recipes.createSequencedAssembly([
        'gtceu:basic_electronic_circuit', 
    ], 'gtceu:resin_printed_circuit_board', [
        event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', '#forge:plates/steel']),
        event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:resistor']),
        event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:vacuum_tube']),
        event.recipes.createDeploying('tfg:unfinished_basic_electronic_circuit', ['tfg:unfinished_basic_electronic_circuit', 'gtceu:red_alloy_single_cable']),
    ]).transitionalItem('tfg:unfinished_basic_electronic_circuit').loops(2).id('tfg:gtceu/sequenced_assembly/basic_electronic_circuit')

    //#endregion

    

    //#region Выход: Фикс выработки пара на ведре лавы

    //event.remove({ id: 'minecraft:large_boiler/lava_bucket' })
    //event.recipes.gtceu.large_boiler('lava_bucket')             
    //    .itemInputs('minecraft:lava_bucket')
    //    .duration(25)

    //#endregion

    //#region Long Distance Pipelines

    event.remove({ id: 'gtceu:assembler/long_distance_item_pipe'  })
    event.recipes.gtceu.assembler('long_distance_item_pipe')
        .itemInputs(
            '1x gtceu:tin_large_item_pipe',
            '4x #forge:plates/steel')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144 / 4))
        .itemOutputs('32x gtceu:long_distance_item_pipeline')
        .circuit(2)
        .duration(300)
        .EUt(24)

    event.remove({ id: 'gtceu:assembler/long_distance_fluid_pipe'  })
    event.recipes.gtceu.assembler('long_distance_fluid_pipe')
        .itemInputs(
            '1x gtceu:bronze_large_fluid_pipe',
            '4x #forge:plates/steel')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144 / 4))
        .itemOutputs('32x gtceu:long_distance_fluid_pipeline')
        .circuit(2)
        .duration(300)
        .EUt(24)

    //#endregion
    event.recipes.gtceu.fluid_solidifier('tfg:latex_heating')             
        .itemInputs('gtceu:sulfur_dust')
        .inputFluids(Fluid.of('tfg:latex', 1000))
        .itemOutputs('gtceu:sticky_resin')
        .duration(480)
        .EUt(7)
}