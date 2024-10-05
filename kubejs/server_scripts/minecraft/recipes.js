// priority: 0

const registerMinecraftRecipes = (e) => {
    
    //#region Дерево
    global.MINECRAFT_ALL_WOOD_TYPES.forEach(woodName => {
        console.log(woodName)
        const isNetherType = woodName === "crimson" || woodName === "warped" ? true : false

        //#region Wood
        
        // Overworld
        e.remove({ id: `minecraft:${woodName}_wood` })

        // Nether
        if (isNetherType)
            e.remove({ id: `minecraft:${woodName}_hyphae` })

        //#endregion
        
        //#region Stripped Log

        // Overworld
        e.remove({ id: `create:cutting/${woodName}_log` })

        // Nether
        if (isNetherType)
            e.remove({ id: `create:cutting/${woodName}_stem` })

        //#endregion

        //#region Stripped Wood

        // Overworld
        e.remove({ id: `minecraft:stripped_${woodName}_wood` })
        e.remove({ id: `create:cutting/${woodName}_wood` })

        // Nether
        if (isNetherType) {
            e.remove({ id: `minecraft:stripped_${woodName}_hyphae` })
            e.remove({ id: `create:cutting${woodName}_hyphae` })
        }

        //#endregion

        // Planks
        e.remove({ id: `gtceu:shapeless/${woodName}_planks` })
        e.remove({ id: `gtceu:shaped/${woodName}_planks_saw` })
        e.remove({ id: `gtceu:cutter/${woodName}_planks_water` })
        e.remove({ id: `gtceu:cutter/${woodName}_planks` })
        e.remove({ id: `gtceu:cutter/${woodName}_planks_distilled_water` })
        e.remove({ id: `create:cutting/stripped_${woodName}_wood` })
        e.remove({ id: `create:cutting/stripped_${woodName}_log` })

        // Stairs
        e.remove({ id: `minecraft:${woodName}_stairs` })
        e.remove({ id: `everycomp:c/minecraft/${woodName}_stairs_from_${woodName}_planks_stonecutting` })
        e.remove({ id: `gtceu:assembler/${woodName}_stairs` })

        // Slabs
        e.remove({ id: `gtceu:shaped/${woodName}_slab_saw` })
        e.remove({ id: `everycomp:c/minecraft/${woodName}_slab_from_${woodName}_planks_stonecutting` })
        e.remove({ id: `gtceu:cutter/${woodName}_slab` })
        e.remove({ id: `gtceu:cutter/${woodName}_slab_distilled_water` })
        e.remove({ id: `gtceu:cutter/${woodName}_slab_water` })

        // Fence
        e.remove({ id: `gtceu:shaped/${woodName}_fence` })
        e.remove({ id: `gtceu:assembler/${woodName}_fence` })

        // Fence Gate
        e.remove({ id: `gtceu:shaped/${woodName}_fence_gate` })
        e.remove({ id: `gtceu:shaped/${woodName}_fence_gate_screws` })
        e.remove({ id: `gtceu:assembler/${woodName}_fence_gate` })

        // Door
        e.remove({ id: `gtceu:shaped/${woodName}_door` })
        e.remove({ id: `gtceu:assembler/${woodName}_door` })

        // Trapdoor
        e.remove({ id: `minecraft:${woodName}_trapdoor` })
        e.remove({ id: `gtceu:shaped/${woodName}_trapdoor_iron` })
        e.remove({ id: `gtceu:shaped/${woodName}_trapdoor_steel` })
        e.remove({ id: `gtceu:assembler/${woodName}_trapdoor_steel` })
        e.remove({ id: `gtceu:assembler/${woodName}_trapdoor_iron` })

        // Pressure Plate
        e.remove({ id: `minecraft:${woodName}_pressure_plate` })
        e.remove({ id: `gtceu:shaped/${woodName}_pressure_plate` })
        e.remove({ id: `gtceu:assembler/${woodName}_pressure_plate` })

        // Button
        e.remove({ id: `gtceu:shaped/${woodName}_button` })
        e.remove({ id: `gtceu:cutter/${woodName}_button` })
        e.remove({ id: `gtceu:cutter/${woodName}_button_distilled_water` })
        e.remove({ id: `gtceu:cutter/${woodName}_button_water` })

        // Sign
        e.remove({ id: `minecraft:${woodName}_sign` })
        e.remove({ id: `gtceu:shaped/${woodName}_sign_steel` })
        e.remove({ id: `gtceu:shaped/${woodName}_sign_iron` })
        e.remove({ id: `gtceu:assembler/${woodName}_sign_steel` })
        e.remove({ id: `gtceu:assembler/${woodName}_sign` })
        e.remove({ id: `gtceu:assembler/${woodName}_sign_iron` })

        // Hanging Sign
        e.remove({ id: `minecraft:${woodName}_hanging_sign` })
        e.remove({ id: `gtceu:assembler/${woodName}_hanging_sign` })

        // Boat
        e.remove({ id: `gtceu:shaped/${woodName}_boat` })
        e.remove({ id: `gtceu:assembler/${woodName}_boat` })

        // Boat with chest
        e.remove({ id: `gtceu:shaped/${woodName}_chest_boat` })
        e.remove({ id: `gtceu:assembler/${woodName}_chest_boat` })

        // Sticks
        e.remove({ id: `everycomp:c/minecraft/null_from_${woodName}_planks_stonecutting` })
    })

    const processBambooRecipes = () => {
        const woodName = 'bamboo'

        const logAny = `#minecraft:${woodName}_blocks`
    
        const log = Item.of(`minecraft:${woodName}_block`)
        const logStripped = Item.of(`minecraft:stripped_${woodName}_block`)
    
        const lumber = Item.of(`minecraft:${woodName}`)
    
        const plankAny = `#tfg:${woodName}_planks`
    
        const plank = Item.of(`minecraft:${woodName}_planks`)
        const plankMosaic = Item.of(`minecraft:${woodName}_mosaic`)
    
        const stairAny = `#tfg:${woodName}_stairs`
    
        const stair = Item.of(`minecraft:${woodName}_stairs`)
        const stairMosaic = Item.of(`minecraft:${woodName}_mosaic_stairs`)
        
        const slabAny = `#tfg:${woodName}_slabs`
    
        const slab = Item.of(`minecraft:${woodName}_slab`)
        const slabMosaic = Item.of(`minecraft:${woodName}_mosaic_slab`)
    
        const fence = Item.of(`minecraft:${woodName}_fence`)
        const fenceGate = Item.of(`minecraft:${woodName}_fence_gate`)
    
        const door = Item.of(`minecraft:${woodName}_door`)
        const trapdoor = Item.of(`minecraft:${woodName}_trapdoor`)
    
        const pressurePlate = Item.of(`minecraft:${woodName}_pressure_plate`)
        const button = Item.of(`minecraft:${woodName}_button`)
    
        const sign = Item.of(`minecraft:${woodName}_sign`)
        const hangingSign = Item.of(`minecraft:${woodName}_hanging_sign`)

    
        //#region Бревно
        e.remove({ id: `minecraft:${woodName}_block` })
    
        e.shaped(log, [
            'AAA',
            'AAA',
            'AAA'
        ], {
            A: lumber
        }).id(`tfg:workbench/${woodName}_log`)
        //#endregion
    
        //#region Обтесанное бревно
        e.remove({ id: `create:cutting/${woodName}_block` })
    
        e.recipes.create.cutting(logStripped, log)
            .id(`tfg:create_cutting/stripped_${woodName}_log`)
    
        e.recipes.gtceu.cutter(`tfg:stripped_${woodName}_log`)             
            .itemInputs(log)
            .circuit(1)
            .itemOutputs(logStripped)
            .itemOutputs('1x gtceu:wood_dust')
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Пиломатериалы
    
            //#region Из бревен
            e.shaped(lumber.copyWithCount(4), [
                's',
                'A'
            ], {
                A: logAny,
                s: '#forge:tools/saws'
            }).id(`tfg:workbench/${woodName}_lumber_from_logs_saw`)
    
            e.recipes.create.cutting(lumber.copyWithCount(8), logAny)
                .id(`tfg:create_cutting/${woodName}_lumber_from_logs`)
    
            e.recipes.gtceu.cutter(`tfg:${woodName}_lumber_from_logs`)             
                .itemInputs(logAny)
                .circuit(2)
                .itemOutputs(lumber.copyWithCount(9))
                .EUt(GTValues.VA[GTValues.ULV]).duration(200)
            //#endregion
    
            //#region Из досок
            e.shaped(lumber, [
                's',
                'A'
            ], {
                A: plankAny,
                s: '#forge:tools/saws'
            }).id(`tfg:${woodName}_lumber_from_planks_saw`)
    
            e.recipes.create.cutting(lumber, plankAny)
                .id(`tfg:create_cutting/${woodName}_lumber_from_planks`)
    
            e.recipes.gtceu.cutter(`tfg:${woodName}_lumber_from_planks`)             
                .itemInputs(plankAny)
                .circuit(0)
                .itemOutputs(lumber.copyWithCount(4))
                .EUt(GTValues.VA[GTValues.ULV]).duration(200)
            //#endregion
    
            //#region Из ступенек
            e.shaped(lumber, [
                'A',
                's'
            ], {
                A: stairAny,
                s: '#forge:tools/saws'
            }).id(`tfg:workbench/${woodName}_lumber_from_stairs_saw`)
    
            e.recipes.create.cutting(lumber, stairAny)
                .id(`tfg:create_cutting/${woodName}_lumber_from_stairs`)
    
            e.recipes.gtceu.cutter(`tfg:${woodName}_lumber_from_stairs`)             
                .itemInputs(stairAny)
                .circuit(2)
                .itemOutputs(lumber)
                .EUt(GTValues.VA[GTValues.ULV]).duration(200)
            //#endregion
    
            //#region Из полублоков
            e.shaped(lumber, [
                'A',
                's'
            ], {
                A: slabAny,
                s: '#forge:tools/saws'
            }).id(`tfg:workbench/${woodName}_lumber_from_slab_saw`)
    
            e.recipes.create.cutting(lumber, slab)
                .id(`tfg:create_cutting/${woodName}_lumber_from_slab`)
    
            e.recipes.gtceu.cutter(`tfg:${woodName}_lumber_from_slab`)             
                .itemInputs(slab)
                .circuit(2)
                .itemOutputs(lumber)
                .EUt(GTValues.VA[GTValues.ULV]).duration(200)
            //#endregion
    
        //#endregion
    
        //#region Обычные Доски
        e.remove({ id: `gtceu:shapeless/${woodName}_planks` })
        e.remove({ id: `gtceu:shaped/${woodName}_planks_saw` })
        e.remove({ id: `gtceu:cutter/${woodName}_planks` })
        e.remove({ id: `gtceu:cutter/${woodName}_planks_distilled_water` })
        e.remove({ id: `gtceu:cutter/${woodName}_planks_water` })
        e.remove({ id: `create:cutting/stripped_${woodName}_block` })
    
        e.shaped(plank, [
            'AA',
            'AA'
        ], {
            A: lumber
        }).id(`tfg:workbench/${woodName}_planks`)
    
        e.recipes.create.cutting(plank, logAny)
            .id(`tfg:create_cutting/${woodName}_planks`)
    
        e.recipes.gtceu.cutter(`tfg:${woodName}_planks`)             
            .itemInputs(logAny)
            .circuit(3)
            .itemOutputs(plank.copyWithCount(2))
            .itemOutputs('1x gtceu:wood_dust')
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Мозаичные Доски
        e.remove({ id: `minecraft:bamboo_mosaic` })

        e.shaped(plankMosaic, [
            'A ',
            ' s'
        ], {
            A: plank,
            s: '#forge:tools/saws'
        }).id(`tfg:workbench/${woodName}_mosaic_planks`)
    
        e.recipes.gtceu.laser_engraver(`tfg:${woodName}_mosaic_planks`)             
            .itemInputs(plank)
            .notConsumable('#forge:lenses/white')
            .itemOutputs(plankMosaic)
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Обычные Ступени
        e.remove({ id: `minecraft:${woodName}_stairs` })
        e.remove({ id: `everycomp:c/minecraft/${woodName}_stairs_from_${woodName}_planks_stonecutting` })
        e.remove({ id: `gtceu:assembler/${woodName}_stairs` })
    
        e.shaped(stair, [
            'As'  
        ], {
            A: plank,
            s: '#forge:tools/saws'
        }).id(`tfg:workbench/${woodName}_stairs_saw`)
    
        e.recipes.create.cutting(stair, logAny)
            .id(`tfg:create_cutting/${woodName}_stairs_from_logs`)
    
        e.recipes.create.cutting([stair, Item.of('1x gtceu:small_wood_dust')], plank)
            .id(`tfg:create_cutting/${woodName}_stairs_from_planks`)
    
        e.recipes.gtceu.cutter(`tfg:${woodName}_stairs_from_logs`)             
            .itemInputs(logAny)
            .circuit(4)
            .itemOutputs(stair.copyWithCount(2))
            .itemOutputs('1x gtceu:wood_dust')
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    
        e.recipes.gtceu.cutter(`tfg:${woodName}_stairs_from_planks`)             
            .itemInputs(plank)
            .circuit(1)
            .itemOutputs(stair)
            .itemOutputs('1x gtceu:small_wood_dust')
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Мозаичные Ступени
        e.remove({ id: `minecraft:${woodName}_mosaic_stairs` })
    
        //#region Через обычные
        e.shaped(stairMosaic, [
            'A ',
            ' s'
        ], {
            A: stair,
            s: 'forge:tools/saws'
        }).id(`tfg:workbench/${woodName}_mosaic_stairs`)
    
        e.recipes.gtceu.laser_engraver(`tfg:${woodName}_mosaic_stairs`)             
            .itemInputs(stair)
            .notConsumable('#forge:lenses/white')
            .itemOutputs(stairMosaic)
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Через мозаичные
        e.shaped(stairMosaic, [
            'As'  
        ], {
            A: plankMosaic,
            s: '#forge:tools/saws'
        }).id(`tfg:workbench/${woodName}_mosaic_stairs_saw`)
    
        e.recipes.create.cutting([stairMosaic, Item.of('1x gtceu:small_wood_dust')], plankMosaic)
            .id(`tfg:create_cutting/${woodName}_mosaic_stairs_from_planks`)
    
        e.recipes.gtceu.cutter(`tfg:${woodName}_mosaic_stairs_from_planks`)             
            .itemInputs(plankMosaic)
            .circuit(1)
            .itemOutputs(stairMosaic)
            .itemOutputs('1x gtceu:small_wood_dust')
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#endregion
    
        //#region Обычные Полублоки
        e.remove({ id: `gtceu:shaped/${woodName}_slab_saw` })
        e.remove({ id: `everycomp:c/minecraft/${woodName}_slab_from_${woodName}_planks_stonecutting` })
        e.remove({ id: `gtceu:cutter/${woodName}_slab_water` })
        e.remove({ id: `gtceu:cutter/${woodName}_slab` })
        e.remove({ id: `gtceu:cutter/${woodName}_slab_distilled_water` })
    
        e.shaped(slab.copyWithCount(2), [
            'sA'  
        ], {
            A: plank,
            s: '#forge:tools/saws'
        }).id(`tfg:workbench/${woodName}_slabs_saw`)
    
        e.recipes.create.cutting(slab.copyWithCount(3), logAny)
            .id(`tfg:create_cutting/${woodName}_slabs_from_logs`)
    
        e.recipes.create.cutting(slab.copyWithCount(2), plank)
            .id(`tfg:create_cutting/${woodName}_slabs_from_planks`)
    
        e.recipes.gtceu.cutter(`tfg:${woodName}_slabs_from_logs`)             
            .itemInputs(logAny)
            .circuit(5)
            .itemOutputs(slab.copyWithCount(4))
            .itemOutputs('1x gtceu:wood_dust')
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    
        e.recipes.gtceu.cutter(`tfg:${woodName}_slabs_from_planks`)             
            .itemInputs(plank)
            .circuit(2)
            .itemOutputs(slab.copyWithCount(2))
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Мозаичные Полублоки
        e.remove({ id: `gtceu:shaped/${woodName}_mosaic_slab_saw` })
        e.remove({ id: `gtceu:cutter/${woodName}_mosaic_slab_water` })
        e.remove({ id: `gtceu:cutter/${woodName}_mosaic_slab_distilled_water` })
        e.remove({ id: `gtceu:cutter/${woodName}_mosaic_slab` })
    
        //#region Через обычные
        e.shaped(slabMosaic, [
            'A ',
            ' s'
        ], {
            A: slab,
            s: 'forge:tools/saws'
        }).id(`tfg:workbench/${woodName}_mosaic_slabs`)
    
        e.recipes.gtceu.laser_engraver(`tfg:${woodName}_mosaic_slabs`)             
            .itemInputs(slab)
            .notConsumable('#forge:lenses/white')
            .itemOutputs(slabMosaic)
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Через мозаичные
        e.shaped(slabMosaic.copyWithCount(2), [
            'sA'  
        ], {
            A: plankMosaic,
            s: '#forge:tools/saws'
        }).id(`tfg:workbench/${woodName}_mosaic_slabs_saw`)
    
        e.recipes.create.cutting(slabMosaic.copyWithCount(2), plankMosaic)
            .id(`tfg:create_cutting/${woodName}_mosaic_slabs_from_planks`)
    
        e.recipes.gtceu.cutter(`tfg:${woodName}_mosaic_slabs_from_planks`)             
            .itemInputs(plankMosaic)
            .circuit(2)
            .itemOutputs(slabMosaic.copyWithCount(2))
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#endregion
    
        //#region Забор
        e.remove({ id: `gtceu:shaped/${woodName}_fence` })
        e.remove({ id: `gtceu:assembler/${woodName}_fence` })
        
        e.shaped(fence.copyWithCount(3), [
            'h s',
            'ABA',
            'ACA'
        ], {
            A: plank,
            B: '#forge:rods/wooden',
            C: lumber,
            h: '#forge:tools/hammers',
            s: '#forge:tools/saws'
        }).id(`tfg:workbench/${woodName}_fence`)
    
        e.recipes.create.cutting([fence, Item.of('1x gtceu:wood_dust')], plank)
            .id(`tfg:create_cutting/${woodName}_fence`)
    
        e.recipes.gtceu.cutter(`tfg:${woodName}_fence`)             
            .itemInputs(plank)
            .circuit(3)
            .itemOutputs(fence.copyWithCount(2))
            .itemOutputs('1x gtceu:wood_dust')
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Калитка
        e.remove({ id: `gtceu:shaped/${woodName}_fence_gate` })
        e.remove({ id: `gtceu:shaped/${woodName}_fence_gate_screws` })
        e.remove({ id: `gtceu:assembler/${woodName}_fence_gate` })
    
        e.shaped(fenceGate, [
            'A A',
            'BCB',
            'DCD'
        ], {
            A: 'minecraft:flint',
            B: '#forge:rods/wooden',
            C: plank,
            D: lumber
        }).id(`tfg:workbench/${woodName}_fence_gate_flint`)
    
        e.shaped(fenceGate.copyWithCount(2), [
            'AEA',
            'BCB',
            'DCD'
        ], {
            A: '#forge:screws',
            B: '#forge:rods/wooden',
            C: plank,
            D: lumber,
            E: '#forge:tools/screwdrivers'
        }).id(`tfg:workbench/${woodName}_fence_gate_screws`)
    
        e.recipes.gtceu.assembler(`tfg:${woodName}_fence_gate`)             
            .itemInputs(plank.copyWithCount(2))
            .itemInputs('2x #forge:rods/wooden')
            .itemInputs('2x #forge:screws')
            .circuit(0)
            .itemOutputs(fenceGate)
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Дверь
        e.remove({ id: `gtceu:shaped/${woodName}_door` })
        e.remove({ id: `gtceu:assembler/${woodName}_door` })
    
        e.shaped(door, [
            'ABd',
            'ACD',
            'AAs'
        ], {
            A: lumber,
            B: trapdoor,
            C: '#forge:rings',
            D: '#forge:screws',
            d: '#forge:tools/screwdrivers',
            s: '#forge:tools/saws',
        }).id(`tfg:workbench/${woodName}_door`)
    
        e.recipes.gtceu.assembler(`tfg:${woodName}_door`)             
            .itemInputs(lumber.copyWithCount(4))
            .itemInputs(trapdoor)
            .itemInputs('4x #forge:screws')
            .circuit(0)
            .itemOutputs(door)
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Люк
        e.remove({ id: `minecraft:${woodName}_trapdoor` })
        e.remove({ id: `gtceu:shaped/${woodName}_trapdoor_iron` })
        e.remove({ id: `gtceu:shaped/${woodName}_trapdoor_steel` })
    
        e.shaped(trapdoor, [
            'ABd',
            'ACs'
        ], {
            A: lumber,
            B: '#forge:rings',
            C: '#forge:bolts',
            d: '#forge:tools/screwdrivers',
            s: '#forge:tools/saws',
        }).id(`tfg:workbench/${woodName}_trapdoor`)
    
        e.recipes.gtceu.assembler(`tfg:${woodName}_trapdoor`)             
            .itemInputs(lumber.copyWithCount(2))
            .itemInputs('2x #forge:bolts')
            .circuit(0)
            .itemOutputs(trapdoor)
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Нажимная пластина
        e.remove({ id: `minecraft:${woodName}_pressure_plate` })
        e.remove({ id: `gtceu:shaped/${woodName}_pressure_plate` })
        e.remove({ id: `gtceu:assembler/${woodName}_pressure_plate` })
    
        e.shaped(pressurePlate.copyWithCount(2), [
            'AmA',
            'BCB',
            'AdA'
        ], {
            A: 'gtceu:wood_bolt',
            B: slab,
            C: '#forge:springs',
            m: '#forge:tools/mallets',
            d: '#forge:tools/screwdrivers'
        }).id(`tfg:workbench/${woodName}_pressure_plate`)
    
        e.recipes.gtceu.assembler(`tfg:${woodName}_pressure_plate`)             
            .itemInputs(slab.copyWithCount(2))
            .itemInputs('#forge:springs')
            .circuit(0)
            .itemOutputs(pressurePlate)
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Кнопка
    
        // e.remove({ id: `gtceu:shaped/${woodName}_button` })
        // e.remove({ id: `gtceu:cutter/${woodName}_button_water` })
        // e.remove({ id: `gtceu:cutter/${woodName}_button` })
        // e.remove({ id: `gtceu:cutter/${woodName}_button_distilled_water` })
    
        //#endregion
    
        //#region Табличка
        e.remove({ id: `minecraft:${woodName}_sign` })
        e.remove({ id: `gtceu:shaped/${woodName}_sign_steel` })
        e.remove({ id: `gtceu:shaped/${woodName}_sign_iron` })
        e.remove({ id: `gtceu:assembler/${woodName}_sign_steel` })
        e.remove({ id: `gtceu:assembler/${woodName}_sign` })
        e.remove({ id: `gtceu:assembler/${woodName}_sign_iron` })
    
        e.shaped(sign.copyWithCount(3), [
            'AAA',
            'AAA',
            'mB '
        ], {
            A: lumber,
            B: '#forge:rods/wooden',
            m: '#forge:tools/mallets'
        }).id(`tfg:workbench/${woodName}_sign`)
    
        e.recipes.gtceu.assembler(`tfg:${woodName}_sign`)             
            .itemInputs(lumber.copyWithCount(6))
            .circuit(3)
            .itemOutputs(sign.copyWithCount(3))
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Висящая табличка
        e.remove({ id: `minecraft:${woodName}_hanging_sign` })
        e.remove({ id: `gtceu:assembler/${woodName}_hanging_sign` })
    
        e.shaped(hangingSign.copyWithCount(3), [
            'AmA',
            'CBC',
            'BBB'
        ], {
            A: '#tfg:metal_chains',
            B: lumber,
            C: '#forge:screws',
            m: '#forge:tools/mallets'
        }).id(`tfg:workbench/${woodName}_hanging_sign`)
    
        e.recipes.gtceu.assembler(`tfg:${woodName}_hanging_sign`)             
            .itemInputs(lumber.copyWithCount(4))
            .itemInputs('2x #tfg:metal_chains')
            .itemInputs('4x #forge:screws')
            .circuit(4)
            .itemOutputs(hangingSign.copyWithCount(3))
            .EUt(GTValues.VA[GTValues.ULV]).duration(200)
        //#endregion
    
        //#region Лодка
        e.remove({ id: `minecraft:${woodName}_chest_raft` })
        e.remove({ id: `gtceu:shaped/${woodName}_chest_raft` })
        e.remove({ id: `gtceu:assembler/${woodName}_chest_boat` })
        //#endregion

        //#region Лодка с сундуком
        e.remove({ id: `gtceu:shaped/${woodName}_raft` })
        e.remove({ id: `gtceu:assembler/${woodName}_boat` })
        //#endregion
    }

    processBambooRecipes()
    //#endregion

    //#region Камень

    //#region Блок

    e.remove({ id: 'minecraft:stone' })
    e.remove({ id: 'gtceu:compressor/stone_from_dust' })
    e.remove({ id: 'gtceu:rock_breaker/stone' })
    e.remove({ id: 'ae2:entropy/heat/cobblestone_stone' })

    //#endregion

    //#region Ступень

    e.remove({ id: 'minecraft:stone_stairs' })
    e.remove({ id: 'minecraft:stone_stairs_from_stone_stonecutting' })

    //#endregion

    //#region Полублок

    e.remove({ id: 'gtceu:shaped/stone_slab_saw' })
    e.remove({ id: 'minecraft:stone_slab_from_stone_stonecutting' })

    //#endregion

    //#region Нажимная плита

    e.remove({ id: 'gtceu:shaped/stone_pressure_plate' })
    e.remove({ id: 'gtceu:assembler/stone_pressure_plate' })

    //#endregion

    //#region Кнопка

    e.remove({ id: 'gtceu:shaped/stone_button' })
    e.remove({ id: 'gtceu:cutter/stone_button' })
    e.remove({ id: 'gtceu:cutter/stone_button_water' })
    e.remove({ id: 'gtceu:cutter/stone_button_distilled_water' })

    //#endregion

    //#endregion

    //#region Булыжник

    //#region Блок
    e.remove({ id: 'gtceu:shaped/cobblestone_hammer' })
    e.remove({ id: 'gtceu:forge_hammer/stone_to_cobblestone' })
    e.remove({ id: 'gtceu:rock_breaker/cobblestone' })
    e.remove({ id: 'ae2:entropy/cool/stone_cobblestone' })

    e.remove({ id: 'create:crushing/copper_ore' })
    e.remove({ id: 'create:crushing/zinc_ore' })
    e.remove({ id: 'create:crushing/diamond_ore' })
    e.remove({ id: 'create:crushing/coal_ore' })
    e.remove({ id: 'create:crushing/gold_ore' })
    e.remove({ id: 'create:crushing/lapis_ore' })
    e.remove({ id: 'create:crushing/redstone_ore' })
    e.remove({ id: 'create:crushing/emerald_ore' })
    e.remove({ id: 'create:crushing/iron_ore' })
    e.remove({ id: 'create:milling/andesite' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:cobblestone_stairs' })
    e.remove({ id: 'minecraft:cobblestone_stairs_from_cobblestone_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/cobblestone_slab_saw' })
    e.remove({ id: 'minecraft:cobblestone_slab_from_cobblestone_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:cobblestone_wall' })
    e.remove({ id: 'minecraft:cobblestone_wall_from_cobblestone_stonecutting' })
    //#endregion
    
    //#endregion

    //#region Замшелый булыжник

    //#region Блок
    e.remove({ id: 'gtceu:assembler/mossy_cobblestone_from_moss_block' })
    e.remove({ id: 'gtceu:assembler/mossy_cobblestone_from_vine' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:mossy_cobblestone_stairs' })
    e.remove({ id: 'minecraft:mossy_cobblestone_stairs_from_mossy_cobblestone_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/mossy_cobblestone_slab_saw' })
    e.remove({ id: 'minecraft:mossy_cobblestone_slab_from_mossy_cobblestone_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:mossy_cobblestone_wall' })
    e.remove({ id: 'minecraft:mossy_cobblestone_wall_from_mossy_cobblestone_stonecutting' })
    //#endregion

    //#endregion

    //#region Гладкий камень

    //#region Блок
    e.remove({ id: 'minecraft:smooth_stone' })
    //#endregion

    //#region Полублок

    e.remove({ id: 'morered:smooth_stone_slab_from_stone_plate' })
    e.remove({ id: 'gtceu:shaped/smooth_stone_slab_saw' })
    e.remove({ id: 'minecraft:smooth_stone_slab_from_smooth_stone_stonecutting' })

    //#endregion

    //#endregion

    //#region Каменные кирпичи

    //#region Блок
    e.remove({ id: 'minecraft:stone_bricks_from_stone_stonecutting' })
    //#endregion

    //#region Треснувший блок
    e.remove({ id: 'gtceu:forge_hammer/cracked_stone_bricks' })
    e.remove({ id: 'ae2:entropy/cool/stone_bricks_cracked_stone_bricks' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:stone_brick_stairs' })
    e.remove({ id: 'minecraft:stone_brick_stairs_from_stone_stonecutting' })
    e.remove({ id: 'minecraft:stone_brick_stairs_from_stone_bricks_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/stone_brick_slab_saw' })
    e.remove({ id: 'minecraft:stone_brick_slab_from_stone_stonecutting' })
    e.remove({ id: 'minecraft:stone_brick_slab_from_stone_bricks_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:stone_brick_wall' })
    e.remove({ id: 'minecraft:stone_brick_walls_from_stone_stonecutting' })
    e.remove({ id: 'minecraft:stone_brick_wall_from_stone_bricks_stonecutting' })
    //#endregion

    //#region Резной блок
    e.remove({ id: 'minecraft:chiseled_stone_bricks_stone_from_stonecutting' })
    e.remove({ id: 'minecraft:chiseled_stone_bricks_from_stone_bricks_stonecutting' })
    //#endregion

    //#endregion

    //#region Замшелые каменные кирпичи
    
    //#region Блок
    e.remove({ id: 'minecraft:mossy_stone_bricks_from_moss_block' })
    e.remove({ id: 'minecraft:mossy_stone_bricks_from_vine' })
    e.remove({ id: 'gtceu:assembler/mossy_stone_bricks_from_moss_block' })
    e.remove({ id: 'gtceu:assembler/mossy_stone_bricks_from_vine' })
    //#endregion
    
    //#region Ступень
    e.remove({ id: 'minecraft:mossy_stone_brick_stairs' })
    e.remove({ id: 'minecraft:mossy_stone_brick_stairs_from_mossy_stone_brick_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/mossy_stone_brick_slab_saw' })
    e.remove({ id: 'minecraft:mossy_stone_brick_slab_from_mossy_stone_brick_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:mossy_stone_brick_wall' })
    e.remove({ id: 'minecraft:mossy_stone_brick_wall_from_mossy_stone_brick_stonecutting' })
    //#endregion

    //#endregion

    //#region Сырой Гранит

    //#region Блок
    e.remove({ id: 'minecraft:granite' })
    e.remove({ id: 'create:granite_from_stone_types_granite_stonecutting' })
    e.remove({ id: 'gtceu:rock_breaker/granite' })
    e.remove({ id: 'create:compacting/granite_from_flint' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:granite_stairs' })
    e.remove({ id: 'minecraft:granite_stairs_from_granite_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/granite_slab_saw' })
    e.remove({ id: 'minecraft:granite_slab_from_granite_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:granite_wall' })
    e.remove({ id: 'minecraft:granite_wall_from_granite_stonecutting' })
    //#endregion

    //#endregion

    //#region Гладкий Гранит

    //#region Блок
    e.remove({ id: 'minecraft:polished_granite_from_granite_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:polished_granite_stairs' })
    e.remove({ id: 'minecraft:polished_granite_stairs_from_granite_stonecutting' })
    e.remove({ id: 'minecraft:polished_granite_stairs_from_polished_granite_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/polished_granite_slab_saw' })
    e.remove({ id: 'minecraft:polished_granite_slab_from_granite_stonecutting' })
    e.remove({ id: 'minecraft:polished_granite_slab_from_polished_granite_stonecutting' })
    //#endregion

    //#endregion

    //#region Сырой Диорит

    //#region Блок
    e.remove({ id: 'minecraft:diorite' })
    e.remove({ id: 'create:diorite_from_stone_types_diorite_stonecutting' })
    e.remove({ id: 'gtceu:rock_breaker/diorite' })
    e.remove({ id: 'create:compacting/diorite_from_flint' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:diorite_stairs' })
    e.remove({ id: 'minecraft:diorite_stairs_from_diorite_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/diorite_slab_saw' })
    e.remove({ id: 'minecraft:diorite_slab_from_diorite_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:diorite_wall' })
    e.remove({ id: 'minecraft:diorite_wall_from_diorite_stonecutting' })
    //#endregion

    //#endregion

    //#region Гладкий Диорит

    //#region Блок
    e.remove({ id: 'minecraft:polished_diorite_from_diorite_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:polished_diorite_stairs' })
    e.remove({ id: 'minecraft:polished_diorite_stairs_from_diorite_stonecutting' })
    e.remove({ id: 'minecraft:polished_diorite_stairs_from_polished_diorite_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/polished_diorite_slab_saw' })
    e.remove({ id: 'minecraft:polished_diorite_slab_from_diorite_stonecutting' })
    e.remove({ id: 'minecraft:polished_diorite_slab_from_polished_diorite_stonecutting' })
    //#endregion

    //#endregion
    
    //#region Сырой Андезит

    //#region Блок
    e.remove({ id: 'minecraft:andesite' })
    e.remove({ id: 'create:andesite_from_stone_types_andesite_stonecutting' })
    e.remove({ id: 'gtceu:rock_breaker/andesite' })
    e.remove({ id: 'create:compacting/andesite_from_flint' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:andesite_stairs' })
    e.remove({ id: 'minecraft:andesite_stairs_from_andesite_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/andesite_slab_saw' })
    e.remove({ id: 'minecraft:andesite_slab_from_andesite_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:andesite_wall' })
    e.remove({ id: 'minecraft:andesite_wall_from_andesite_stonecutting' })
    //#endregion

    //#endregion

    //#region Гладкий Андезит

    //#region Блок
    e.remove({ id: 'minecraft:polished_andesite_from_andesite_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:polished_andesite_stairs' })
    e.remove({ id: 'minecraft:polished_andesite_stairs_from_andesite_stonecutting' })
    e.remove({ id: 'minecraft:polished_andesite_stairs_from_polished_andesite_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/polished_andesite_slab_saw' })
    e.remove({ id: 'minecraft:polished_andesite_slab_from_andesite_stonecutting' })
    e.remove({ id: 'minecraft:polished_andesite_slab_from_polished_andesite_stonecutting' })
    //#endregion

    //#endregion

    //#region Сырой Сланец

    //#region Блок
    e.remove({ id: 'minecraft:deepslate' })
    e.remove({ id: 'create:deepslate_from_stone_types_deepslate_stonecutting' })
    e.remove({ id: 'gtceu:rock_breaker/deepslate' })
    //#endregion

    //#endregion

    //#region Булыжниковый Сланец

    //#region Блок
    e.remove({ id: 'gtceu:shaped/cobbled_deepslate_hammer' })
    e.remove({ id: 'gtceu:forge_hammer/deepslate_to_cobbled_deepslate' })
    
    e.remove({ id: 'create:crushing/deepslate_redstone_ore' })
    e.remove({ id: 'create:crushing/deepslate_copper_ore' })
    e.remove({ id: 'create:crushing/deepslate_zinc_ore' })
    e.remove({ id: 'create:crushing/deepslate_emerald_ore' })
    e.remove({ id: 'create:crushing/deepslate_gold_ore' })
    e.remove({ id: 'create:crushing/deepslate_coal_ore' })
    e.remove({ id: 'create:crushing/deepslate_diamond_ore' })
    e.remove({ id: 'create:crushing/deepslate_lapis_ore' })
    e.remove({ id: 'create:crushing/deepslate_iron_ore' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:cobbled_deepslate_stairs' })
    e.remove({ id: 'minecraft:cobbled_deepslate_stairs_from_cobbled_deepslate_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/cobbled_deepslate_slab_saw' })
    e.remove({ id: 'minecraft:cobbled_deepslate_slab_from_cobbled_deepslate_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:cobbled_deepslate_wall' })
    e.remove({ id: 'minecraft:cobbled_deepslate_wall_from_cobbled_deepslate_stonecutting' })
    //#endregion

    //#endregion
    
    //#region Резной Сланец

    //#region Блок
    e.remove({ id: 'minecraft:chiseled_deepslate' })
    e.remove({ id: 'minecraft:chiseled_deepslate_from_cobbled_deepslate_stonecutting' })
    //#endregion

    //#endregion

    //#region Гладкий Сланец

    //#region Блок
    e.remove({ id: 'minecraft:polished_deepslate' })
    e.remove({ id: 'minecraft:polished_deepslate_from_cobbled_deepslate_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:polished_deepslate_stairs' })
    e.remove({ id: 'minecraft:polished_deepslate_stairs_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:polished_deepslate_stairs_from_polished_deepslate_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/polished_deepslate_slab_saw' })
    e.remove({ id: 'minecraft:polished_deepslate_slab_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:polished_deepslate_slab_from_polished_deepslate_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:polished_deepslate_wall' })
    e.remove({ id: 'minecraft:polished_deepslate_wall_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:polished_deepslate_wall_from_polished_deepslate_stonecutting' })
    //#endregion

    //#endregion

    //#region Кирпичный Сланец

    //#region Блок
    e.remove({ id: 'minecraft:deepslate_bricks' })
    e.remove({ id: 'gtceu:shaped/deepslate_brick_slab_saw' })
    e.remove({ id: 'minecraft:deepslate_bricks_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_bricks_from_polished_deepslate_stonecutting' })
    //#endregion

    //#region Потрескавшийся Блок
    e.remove({ id: 'minecraft:cracked_deepslate_bricks' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:deepslate_brick_stairs' })
    e.remove({ id: 'minecraft:deepslate_brick_stairs_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_brick_stairs_from_polished_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_brick_stairs_from_deepslate_bricks_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'minecraft:deepslate_brick_slab_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_brick_slab_from_polished_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_brick_slab_from_deepslate_bricks_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:deepslate_brick_wall' })
    e.remove({ id: 'minecraft:deepslate_brick_wall_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_brick_wall_from_polished_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_brick_wall_from_deepslate_bricks_stonecutting' })
    //#endregion

    //#endregion

    //#region Плитковый Сланец

    //#region Блок
    e.remove({ id: 'minecraft:deepslate_tiles' })
    e.remove({ id: 'minecraft:deepslate_tiles_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tiles_from_polished_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tiles_from_deepslate_bricks_stonecutting' })
    //#endregion

    //#region Треснутый Блок
    e.remove({ id: 'minecraft:cracked_deepslate_tiles' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:deepslate_tile_stairs' })
    e.remove({ id: 'minecraft:deepslate_tile_stairs_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tile_stairs_from_polished_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tile_stairs_from_deepslate_bricks_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tile_stairs_from_deepslate_tiles_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/deepslate_tile_slab_saw' })
    e.remove({ id: 'minecraft:deepslate_tile_slab_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tile_slab_from_polished_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tile_slab_from_deepslate_bricks_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tile_slab_from_deepslate_tiles_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:deepslate_tile_wall' })
    e.remove({ id: 'minecraft:deepslate_tile_wall_from_cobbled_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tile_wall_from_polished_deepslate_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tile_wall_from_deepslate_bricks_stonecutting' })
    e.remove({ id: 'minecraft:deepslate_tile_wall_from_deepslate_tiles_stonecutting' })
    //#endregion

    //#endregion

    //#region Кирпич

    //#region Блок
    e.remove({ id: 'gtceu:shaped/brick_from_water' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:brick_stairs' })
    e.remove({ id: 'minecraft:brick_stairs_from_bricks_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/brick_slab_saw' })
    e.remove({ id: 'minecraft:brick_slab_from_bricks_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:brick_wall' })
    e.remove({ id: 'minecraft:brick_wall_from_bricks_stonecutting' })
    //#endregion

    //#endregion

    //#region Сырая Грязь

    //#region Блок
    e.remove({ id: 'minecraft:packed_mud' })
    //#endregion

    //#endregion

    //#region Кирпичная Грязь

    //#region Блок
    e.remove({ id: 'minecraft:mud_bricks' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:mud_brick_stairs' })
    e.remove({ id: 'minecraft:mud_brick_stairs_from_mud_bricks_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/mud_brick_slab_saw' })
    e.remove({ id: 'minecraft:mud_brick_slab_from_mud_bricks_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:mud_brick_wall' })
    e.remove({ id: 'minecraft:mud_brick_wall_from_mud_bricks_stonecutting' })
    //#endregion

    //#endregion

    //#region Сырой Песчанник

    //#region Блок
    e.remove({ id: 'gtceu:compressor/sandstone' })
    //#endregion

    //#region Резной Блок
    e.remove({ id: 'minecraft:chiseled_sandstone_from_sandstone_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:sandstone_stairs' })
    e.remove({ id: 'minecraft:sandstone_stairs_from_sandstone_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/sandstone_slab_saw' })
    e.remove({ id: 'minecraft:sandstone_slab_from_sandstone_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:sandstone_wall' })
    e.remove({ id: 'minecraft:sandstone_wall_from_sandstone_stonecutting' })
    e.remove({ id: '' })
    //#endregion

    //#endregion

    //#region Гладкий Песчанник

    //#region Блок
    // Нет рецептов, че за херь...
    // e.remove({ id: '' })
    // e.remove({ id: '' })
    // e.remove({ id: '' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:smooth_sandstone_stairs' })
    e.remove({ id: 'minecraft:smooth_sandstone_stairs_from_smooth_sandstone_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/smooth_sandstone_slab_saw' })
    e.remove({ id: 'minecraft:smooth_sandstone_slab_from_smooth_sandstone_stonecutting' })
    //#endregion

    //#endregion

    //#region Обрезанный Песчанник

    //#region Блок
    e.remove({ id: 'minecraft:cut_sandstone' })
    e.remove({ id: 'minecraft:cut_sandstone_from_sandstone_stonecutting' })
    e.remove({ id: '' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/cut_sandstone_slab_saw' })
    e.remove({ id: 'minecraft:cut_sandstone_slab_from_sandstone_stonecutting' })
    e.remove({ id: 'minecraft:cut_sandstone_slab_from_cut_sandstone_stonecutting' })
    //#endregion

    //#endregion

    //#region Сырой Красный Песчанник

    //#region Блок
    e.remove({ id: 'gtceu:compressor/red_sandstone' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:red_sandstone_stairs' })
    e.remove({ id: 'minecraft:red_sandstone_stairs_from_red_sandstone_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/red_sandstone_slab_saw' })
    e.remove({ id: 'minecraft:red_sandstone_slab_from_red_sandstone_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:red_sandstone_wall' })
    e.remove({ id: 'minecraft:red_sandstone_wall_from_red_sandstone_stonecutting' })
    //#endregion

    //#endregion

    //#region Гладкий Красный Песчанник

    //#region Блок
    // Нет рецептов, че за херь...
    // e.remove({ id: '' })
    // e.remove({ id: '' })
    // e.remove({ id: '' })
    //#endregion

    //#region Резной Блок
    e.remove({ id: 'minecraft:chiseled_red_sandstone_from_red_sandstone_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:smooth_red_sandstone_stairs' })
    e.remove({ id: 'minecraft:smooth_red_sandstone_stairs_from_smooth_red_sandstone_stonecutting' })
    e.remove({ id: '' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/smooth_red_sandstone_slab_saw' })
    e.remove({ id: 'minecraft:smooth_red_sandstone_slab_from_smooth_red_sandstone_stonecutting' })
    e.remove({ id: 'gtceu:forge_hammer/smooth_red_sandstone_to_red_sand' })
    //#endregion

    //#endregion

    //#region Обрезанный Красный Песчанник

    //#region Блок
    e.remove({ id: 'minecraft:cut_red_sandstone' })
    e.remove({ id: 'minecraft:cut_red_sandstone_from_red_sandstone_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/cut_red_sandstone_slab_saw' })
    e.remove({ id: 'minecraft:cut_red_sandstone_slab_from_red_sandstone_stonecutting' })
    e.remove({ id: 'minecraft:cut_red_sandstone_slab_from_cut_red_sandstone_stonecutting' })
    //#endregion
    
    //#endregion

    //#region Морской Фонарь
    e.remove({ id: 'gtceu:assembler/sea_lantern' })
    //#endregion

    //#region Сырой Призмарин

    //#region Блок
    e.remove({ id: 'gtceu:packer/prismarine' })
   
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:prismarine_stairs' })
    e.remove({ id: 'minecraft:prismarine_stairs_from_prismarine_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/prismarine_slab_saw' })
    e.remove({ id: 'minecraft:prismarine_slab_from_prismarine_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:prismarine_wall' })
    e.remove({ id: 'minecraft:prismarine_wall_from_prismarine_stonecutting' })
    //#endregion

    //#endregion

    //#region Кирпичный Призмарин

    //#region Блок
    e.remove({ id: 'gtceu:packer/prismarine_bricks' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:prismarine_brick_stairs' })
    e.remove({ id: 'minecraft:prismarine_brick_stairs_from_prismarine_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/prismarine_brick_slab_saw' })
    e.remove({ id: 'minecraft:prismarine_brick_slab_from_prismarine_stonecutting' })
    //#endregion

    //#endregion

    //#region Темный Призмарин

    //#region Блок
    e.remove({ id: 'gtceu:chemical_bath/dark_prismarine' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:dark_prismarine_stairs' })
    e.remove({ id: 'minecraft:dark_prismarine_stairs_from_dark_prismarine_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/dark_prismarine_slab_saw' })
    e.remove({ id: 'minecraft:dark_prismarine_slab_from_dark_prismarine_stonecutting' })
    //#endregion

    //#endregion

    //#region Сырой Незеррак
    e.remove({ id: 'create:crushing/nether_gold_ore' })
    e.remove({ id: 'create:crushing/nether_quartz_ore' })
    //#endregion

    //#region Кирпичи Неззерак

    //#region Блок
    // Нечего удалять, уипии
    // e.remove({ id: '' })
    //#endregion

    //#region Треснутый Блок
    e.remove({ id: 'minecraft:cracked_nether_bricks' })
    //#endregion

    //#region Резной Блок
    e.remove({ id: 'minecraft:chiseled_nether_bricks' })
    e.remove({ id: 'minecraft:chiseled_nether_bricks_from_nether_bricks_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:nether_brick_stairs' })
    e.remove({ id: 'minecraft:nether_brick_stairs_from_nether_bricks_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/nether_brick_slab_saw' })
    e.remove({ id: 'minecraft:nether_brick_slab_from_nether_bricks_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:nether_brick_wall' })
    e.remove({ id: 'minecraft:nether_brick_wall_from_nether_bricks_stonecutting' })
    //#endregion

    //#region Забор
    e.remove({ id: 'minecraft:nether_brick_fence' })
    e.remove({ id: 'gtceu:assembler/nether_brick_fence' })
    //#endregion

    //#endregion

    //#region Кирпичи Красный Неззерак

    //#region Блок
    e.remove({ id: 'gtceu:alloy_smelter/red_nether_bricks' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:red_nether_brick_stairs' })
    e.remove({ id: 'minecraft:red_nether_brick_stairs_from_red_nether_bricks_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/red_nether_brick_slab_saw' })
    e.remove({ id: 'minecraft:red_nether_brick_slab_from_red_nether_bricks_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:red_nether_brick_wall' })
    e.remove({ id: 'minecraft:red_nether_brick_wall_from_red_nether_bricks_stonecutting' })
    //#endregion

    //#endregion

    //#region Базальт

    //#region Сырой Блок
    e.remove({ id: 'gtceu:rock_breaker/basalt' })
    //#endregion

    //#region Гладкий Блок
    e.remove({ id: 'minecraft:smooth_basalt' })
    //#endregion

    //#region Полированный Блок
    e.remove({ id: 'minecraft:polished_basalt' })
    e.remove({ id: 'minecraft:polished_basalt_from_basalt_stonecutting' })
    //#endregion

    //#endregion

    //#region Сырой Черный Камень

    //#region Блок
    e.remove({ id: 'gtceu:rock_breaker/blackstone' })
    e.remove({ id: 'create:crushing/gilded_blackstone' })
    //#endregion

    //#region Пощолоченный Блок
    // Нет рецептов, имба!
    // e.remove({ id: '' })
    // e.remove({ id: '' })
    // e.remove({ id: '' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:blackstone_stairs' })
    e.remove({ id: 'minecraft:blackstone_stairs_from_blackstone_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/blackstone_slab_saw' })
    e.remove({ id: 'minecraft:blackstone_slab_from_blackstone_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:blackstone_wall' })
    e.remove({ id: 'minecraft:blackstone_wall_from_blackstone_stonecutting' })
    //#endregion

    //#endregion

    //#region Полированный Черный Камень

    //#region Блок
    e.remove({ id: 'minecraft:polished_blackstone' })
    e.remove({ id: 'minecraft:polished_blackstone_from_blackstone_stonecutting' })
    e.remove({ id: '' })
    //#endregion

    //#region Резной Блок
    e.remove({ id: 'minecraft:chiseled_polished_blackstone' })
    e.remove({ id: 'minecraft:chiseled_polished_blackstone_from_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:chiseled_polished_blackstone_from_polished_blackstone_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:polished_blackstone_stairs' })
    e.remove({ id: 'minecraft:polished_blackstone_stairs_from_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:polished_blackstone_stairs_from_polished_blackstone_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/polished_blackstone_slab_saw' })
    e.remove({ id: 'minecraft:polished_blackstone_slab_from_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:polished_blackstone_slab_from_polished_blackstone_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:polished_blackstone_wall' })
    e.remove({ id: 'minecraft:polished_blackstone_wall_from_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:polished_blackstone_wall_from_polished_blackstone_stonecutting' })
    //#endregion

    //#region Нажимная плита
    e.remove({ id: 'minecraft:polished_blackstone_pressure_plate' })
    //#endregion

    //#region Кнопка
    e.remove({ id: 'minecraft:polished_blackstone_button' })
    //#endregion
    
    //#endregion

    //#region Кирпичный Черный Камень

    //#region Блок
    e.remove({ id: 'minecraft:polished_blackstone_bricks' })
    e.remove({ id: 'minecraft:polished_blackstone_bricks_from_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:polished_blackstone_bricks_from_polished_blackstone_stonecutting' })
    //#endregion

    //#region Треснувший Блок
    e.remove({ id: 'minecraft:cracked_polished_blackstone_bricks' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:polished_blackstone_brick_stairs' })
    e.remove({ id: 'minecraft:polished_blackstone_brick_stairs_from_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_bricks_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/polished_blackstone_brick_slab_saw' })
    e.remove({ id: 'minecraft:polished_blackstone_brick_slab_from_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_bricks_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:polished_blackstone_brick_wall' })
    e.remove({ id: 'minecraft:polished_blackstone_brick_wall_from_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_stonecutting' })
    e.remove({ id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_bricks_stonecutting' })
    //#endregion

    //#endregion

    //#region Сырой Эндерняк

    //#region Блок
    // Нет рецептов, аааа...
    // e.remove({ id: '' })
    // e.remove({ id: '' })
    // e.remove({ id: '' })
    //#endregion

    //#endregion

    //#region Кирпичный Эндерняк

    //#region Блок
    e.remove({ id: 'minecraft:end_stone_bricks_from_end_stone_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:end_stone_brick_stairs' })
    e.remove({ id: 'minecraft:end_stone_brick_stairs_from_end_stone_stonecutting' })
    e.remove({ id: 'minecraft:end_stone_brick_stairs_from_end_stone_brick_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/end_stone_brick_slab_saw' })
    e.remove({ id: 'minecraft:end_stone_brick_slab_from_end_stone_stonecutting' })
    e.remove({ id: 'minecraft:end_stone_brick_slab_from_end_stone_brick_stonecutting' })
    //#endregion

    //#region Стена
    e.remove({ id: 'minecraft:end_stone_brick_wall' })
    e.remove({ id: 'minecraft:end_stone_brick_wall_from_end_stone_stonecutting' })
    e.remove({ id: 'minecraft:end_stone_brick_wall_from_end_stone_brick_stonecutting' })
    //#endregion

    //#endregion

    //#region Пурпур

    //#region Блок
    e.remove({ id: 'gtceu:compressor/purpur_block' })
    //#endregion

    //#region Колонна
    e.remove({ id: 'minecraft:purpur_pillar_from_purpur_block_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:purpur_stairs' })
    e.remove({ id: 'minecraft:purpur_stairs_from_purpur_block_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/purpur_slab_saw' })
    e.remove({ id: 'minecraft:purpur_slab_from_purpur_block_stonecutting' })
    //#endregion

    //#endregion

    //#region Металлические прутья
    e.remove({ id: 'gtceu:shaped/iron_bars' })
    e.remove({ id: 'gtceu:assembler/iron_nars' })
    //#endregion

    //#region Железная дверь
    e.remove({ id: 'gtceu:shaped/iron_door' })
    e.remove({ id: 'gtceu:assembler/iron_door' })
    
    e.recipes.gtceu.assembler('tfg:iron_door')
        .itemInputs('#tfg:all_iron_plates')
        .circuit(8)
        .itemOutputs('minecraft:iron_door')
        .EUt(GTValues.VA[GTValues.ULV]).duration(400)

    //#endregion

    //#region Железный люк
    e.remove({ id: 'gtceu:shaped/iron_trapdoor' })
    e.remove({ id: 'gtceu:assembler/iron_trapdoor' })
    //#endregion

    //#region Железная нажимная плита
    e.remove({ id: 'tfc:crafting/vanilla/redstone/heavy_weighted_pressure_plate' })
    e.remove({ id: 'gtceu:shaped/light_weighted_pressure_plate' })
    e.remove({ id: 'gtceu:assembler/heavy_weighted_pressure_plate' })

    e.shaped('minecraft:heavy_weighted_pressure_plate', [
        'ABA',
        'CDC',
        'AEA'  
    ], {
        A: '#tfg:all_iron_screws',
        B: '#tfc:hammers',
        C: '#tfg:all_iron_plates',
        D: '#tfg:all_iron_springs',
        E: '#forge:tools/screwdrivers'
    }).id('tfg:workbench/heavy_weighted_pressure_plate')

    e.recipes.gtceu.assembler('heavy_weighted_pressure_plate')             
        .itemInputs('#tfg:all_iron_plates', '#tfg:all_iron_springs')
        .circuit(0)
        .itemOutputs('minecraft:heavy_weighted_pressure_plate')
        .EUt(GTValues.VA[GTValues.LV]).duration(200)
        
    //#endregion

    //#region Цепь
    e.remove({ id: 'gtceu:shaped/chain' })
    e.remove({ id: 'gtceu:assembler/chain' })
    //#endregion

    //#region Золотая нажимная плита
    e.remove({ id: 'gtceu:shaped/heavy_weighted_pressure_plate' })
    e.remove({ id: 'gtceu:assembler/light_weighted_pressure_plate' })
    
    e.shaped('minecraft:light_weighted_pressure_plate', [
        'ABA',
        'CDC',
        'AEA'  
    ], {
        A: '#tfg:all_iron_screws',
        B: '#tfc:hammers',
        C: '#forge:plates/gold',
        D: '#tfg:all_iron_springs',
        E: '#forge:tools/screwdrivers'
    }).id('tfg:workbench/light_weighted_pressure_plate')

    e.recipes.gtceu.assembler('tfg:light_weighted_pressure_plate')             
        .itemInputs('#forge:plates/gold', '#tfg:all_iron_springs')
        .circuit(0)
        .itemOutputs('4x minecraft:light_weighted_pressure_plate')
        .EUt(GTValues.VA[GTValues.LV]).duration(200)

    //#endregion

    //#region Блок лазурита
    e.remove({ id: 'tfc:crafting/vanilla/lapis_block' })
    //#endregion

    //#region Сырой Кварц

    //#region Блок
    // Нечего удалять :)
    // e.remove({ id: '' })
    // e.remove({ id: '' })
    // e.remove({ id: '' })
    //#endregion

    //#region Опора
    e.remove({ id: 'minecraft:quartz_pillar_from_quartz_block_stonecutting' })
    //#endregion

    //#region Резной
    e.remove({ id: 'minecraft:chiseled_quartz_block_from_quartz_block_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:quartz_stairs' })
    e.remove({ id: 'minecraft:quartz_stairs_from_quartz_block_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/quartz_slab_saw' })
    e.remove({ id: 'minecraft:quartz_slab_from_stonecutting' })
    //#endregion

    //#endregion

    //#region Кирпичи Кварц

    //#region Блок
    e.remove({ id: 'minecraft:quartz_bricks' })
    e.remove({ id: 'minecraft:quartz_bricks_from_quartz_block_stonecutting' })
    //#endregion

    //#endregion

    //#region Гладкий Кварц

    //#region Блок
    e.remove({ id: 'minecraft:smooth_quartz' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:smooth_quartz_stairs' })
    e.remove({ id: 'minecraft:smooth_quartz_stairs_from_smooth_quartz_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/smooth_quartz_slab_saw' })
    e.remove({ id: 'minecraft:smooth_quartz_slab_from_smooth_quartz_stonecutting' })
    //#endregion

    //#endregion

    //#region Медь Блоки
    
    //#region Ржавчина 0

    //#region Гладкий блок
    // Нечего удалять, по кайфу
    // e.remove({ id: '' })
    //#endregion

    //#region Блок
    e.remove({ id: 'minecraft:cut_copper' })
    e.remove({ id: 'minecraft:cut_copper_from_copper_block_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:cut_copper_stairs' })
    e.remove({ id: 'minecraft:cut_copper_stairs_from_copper_block_stonecutting' })
    e.remove({ id: 'minecraft:cut_copper_stairs_from_cut_copper_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/cut_copper_slab_saw' })
    e.remove({ id: 'minecraft:cut_copper_slab_from_copper_block_stonecutting' })
    e.remove({ id: 'minecraft:cut_copper_slab_from_cut_copper_stonecutting' })
    //#endregion

    //#endregion

    //#region Ржавчина 1

    //#region Гладкий блок
    // Нечего удалять, по кайфу
    // e.remove({ id: '' })
    //#endregion

    //#region Блок
    e.remove({ id: 'minecraft:exposed_cut_copper' })
    e.remove({ id: 'minecraft:exposed_cut_copper_from_exposed_copper_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:exposed_cut_copper_stairs' })
    e.remove({ id: 'minecraft:exposed_cut_copper_stairs_from_exposed_copper_stonecutting' })
    e.remove({ id: 'minecraft:exposed_cut_copper_stairs_from_exposed_cut_copper_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/exposed_cut_copper_slab_saw' })
    e.remove({ id: 'minecraft:exposed_cut_copper_slab_from_exposed_copper_stonecutting' })
    e.remove({ id: 'minecraft:exposed_cut_copper_slab_from_exposed_cut_copper_stonecutting' })
    //#endregion

    //#endregion

    //#region Ржавчина 2

    //#region Гладкий блок
    // Нечего удалять, по кайфу
    // e.remove({ id: '' })
    //#endregion

    //#region Блок
    e.remove({ id: 'minecraft:weathered_cut_copper' })
    e.remove({ id: 'minecraft:weathered_cut_copper_from_weathered_copper_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:weathered_cut_copper_stairs' })
    e.remove({ id: 'minecraft:weathered_cut_copper_stairs_from_weathered_copper_stonecutting' })
    e.remove({ id: 'minecraft:weathered_cut_copper_stairs_from_weathered_cut_copper_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/weathered_cut_copper_slab_saw' })
    e.remove({ id: 'minecraft:weathered_cut_copper_slab_from_weathered_copper_stonecutting' })
    e.remove({ id: 'minecraft:weathered_cut_copper_slab_from_weathered_cut_copper_stonecutting' })
    //#endregion

    //#endregion
    
    //#region Ржавчина 3

    //#region Гладкий блок
    // Нечего удалять, по кайфу
    // e.remove({ id: '' })
    //#endregion

    //#region Блок
    e.remove({ id: 'minecraft:oxidized_cut_copper' })
    e.remove({ id: 'minecraft:oxidized_cut_copper_from_oxidized_copper_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:oxidized_cut_copper_stairs' })
    e.remove({ id: 'minecraft:oxidized_cut_copper_stairs_from_oxidized_copper_stonecutting' })
    e.remove({ id: 'minecraft:oxidized_cut_copper_stairs_from_oxidized_cut_copper_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/oxidized_cut_copper_slab_saw' })
    e.remove({ id: 'minecraft:oxidized_cut_copper_slab_from_oxidized_copper_stonecutting' })
    e.remove({ id: 'minecraft:oxidized_cut_copper_slab_from_oxidized_cut_copper_stonecutting' })
    //#endregion

    //#endregion

    //#region Ржавчина 0 (Медовые)

    //#region Гладкий блок
    // Нечего удалять, по кайфу
    // e.remove({ id: '' })
    //#endregion

    //#region Блок
    e.remove({ id: 'minecraft:waxed_cut_copper' })
    e.remove({ id: 'minecraft:waxed_cut_copper_from_waxed_copper_block_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:waxed_cut_copper_stairs' })
    e.remove({ id: 'minecraft:waxed_cut_copper_stairs_from_waxed_copper_block_stonecutting' })
    e.remove({ id: 'minecraft:waxed_cut_copper_stairs_from_waxed_cut_copper_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/waxed_cut_copper_slab_saw' })
    e.remove({ id: 'minecraft:waxed_cut_copper_slab_from_waxed_copper_block_stonecutting' })
    e.remove({ id: 'minecraft:waxed_cut_copper_slab_from_waxed_cut_copper_stonecutting' })
    //#endregion

    //#endregion

    //#region Ржавчина 1 (Медовые)

    //#region Гладкий блок
    // Нечего удалять, по кайфу
    // e.remove({ id: '' })
    //#endregion

    //#region Блок
    e.remove({ id: 'minecraft:waxed_exposed_cut_copper' })
    e.remove({ id: 'minecraft:waxed_exposed_cut_copper_from_waxed_exposed_copper_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:waxed_exposed_cut_copper_stairs' })
    e.remove({ id: 'minecraft:waxed_exposed_cut_copper_stairs_from_waxed_exposed_copper_stonecutting' })
    e.remove({ id: 'minecraft:waxed_exposed_cut_copper_stairs_from_waxed_exposed_cut_copper_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/waxed_exposed_cut_copper_slab_saw' })
    e.remove({ id: 'minecraft:waxed_exposed_cut_copper_slab_from_waxed_exposed_copper_stonecutting' })
    e.remove({ id: 'minecraft:waxed_exposed_cut_copper_slab_from_waxed_exposed_cut_copper_stonecutting' })
    //#endregion

    //#endregion

    //#region Ржавчина 2 (Медовые)

    //#region Гладкий блок
    // Нечего удалять, по кайфу
    // e.remove({ id: '' })
    //#endregion

    //#region Блок
    e.remove({ id: 'minecraft:waxed_weathered_cut_copperr' })
    e.remove({ id: 'minecraft:waxed_weathered_cut_copper_from_waxed_weathered_copper_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:waxed_weathered_cut_copper_stairs' })
    e.remove({ id: 'minecraft:waxed_weathered_cut_copper_stairs_from_waxed_weathered_copper_stonecutting' })
    e.remove({ id: 'minecraft:waxed_weathered_cut_copper_stairs_from_waxed_weathered_cut_copper_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/waxed_weathered_cut_copper_slab_saw' })
    e.remove({ id: 'minecraft:waxed_weathered_cut_copper_slab_from_waxed_weathered_copper_stonecutting' })
    e.remove({ id: 'minecraft:waxed_weathered_cut_copper_slab_from_waxed_weathered_cut_copper_stonecutting' })
    //#endregion

    //#endregion
    
    //#region Ржавчина 3 (Медовые)

    //#region Гладкий блок
    // Нечего удалять, по кайфу
    // e.remove({ id: '' })
    //#endregion

    //#region Блок
    e.remove({ id: 'minecraft:waxed_oxidized_cut_copper' })
    e.remove({ id: 'minecraft:waxed_oxidized_cut_copper_from_waxed_oxidized_copper_stonecutting' })
    //#endregion

    //#region Ступень
    e.remove({ id: 'minecraft:waxed_oxidized_cut_copper_stairs' })
    e.remove({ id: 'minecraft:waxed_oxidized_cut_copper_stairs_from_waxed_oxidized_copper_stonecutting' })
    e.remove({ id: 'minecraft:waxed_oxidized_cut_copper_stairs_from_waxed_oxidized_cut_copper_stonecutting' })
    //#endregion

    //#region Полублок
    e.remove({ id: 'gtceu:shaped/waxed_oxidized_cut_copper_slab_saw' })
    e.remove({ id: 'minecraft:waxed_oxidized_cut_copper_slab_from_waxed_oxidized_copper_stonecutting' })
    e.remove({ id: 'minecraft:waxed_oxidized_cut_copper_slab_from_waxed_oxidized_cut_copper_stonecutting' })
    //#endregion

    //#endregion

    // for (let i = 0; i < global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length; i++) {
    //     let element = global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS[i];

    //     // Создание ржавчины
    //     if (i < global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length / 2 - 1) {
            
    //         let element2 = global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS[i + 1]
            
    //         e.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_block_${element.name}`)             
    //             .itemInputs(element.block)
    //             .inputFluids(Fluid.of('minecraft:water', 150))
    //             .circuit(1)
    //             .itemOutputs(element2.block)
    //             .duration(1000)
    //             .EUt(4)

    //         e.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_cutted_${element.name}`)             
    //             .itemInputs(element.cutted)
    //             .inputFluids(Fluid.of('minecraft:water', 150))
    //             .circuit(1)
    //             .itemOutputs(element2.cutted)
    //             .duration(1000)
    //             .EUt(4)

    //         e.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_stairs_${element.name}`)             
    //             .itemInputs(element.stairs)
    //             .inputFluids(Fluid.of('minecraft:water', 150))
    //             .circuit(1)
    //             .itemOutputs(element2.stairs)
    //             .duration(1000)
    //             .EUt(4)

    //         e.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_slabs_${element.name}`)             
    //             .itemInputs(element.slabs)
    //             .inputFluids(Fluid.of('minecraft:water', 150))
    //             .circuit(1)
    //             .itemOutputs(element2.slabs)
    //             .duration(1000)
    //             .EUt(4)
    //     } else if (i > global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length / 2 - 1) {
    //         let element2 = global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS[i - global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length / 2]

    //         e.recipes.gtceu.assembler(`tfg:minecraft/waxing_block_${element.name}`)             
    //             .itemInputs(element2.block, 'firmalife:beeswax')
    //             .circuit(1)
    //             .itemOutputs(element.block)
    //             .duration(50)
    //             .EUt(4)

    //         e.recipes.gtceu.assembler(`tfg:minecraft/waxing_cutted_${element.name}`)             
    //             .itemInputs(element2.cutted, 'firmalife:beeswax')
    //             .circuit(1)
    //             .itemOutputs(element.cutted)
    //             .duration(50)
    //             .EUt(4)

    //         e.recipes.gtceu.assembler(`tfg:minecraft/waxing_stairs_${element.name}`)             
    //             .itemInputs(element2.stairs, 'firmalife:beeswax')
    //             .circuit(1)
    //             .itemOutputs(element.stairs)
    //             .duration(50)
    //             .EUt(4)

    //         e.recipes.gtceu.assembler(`tfg:minecraft/waxing_slabs_${element.name}`)             
    //             .itemInputs(element2.slabs, 'firmalife:beeswax')
    //             .circuit(1)
    //             .itemOutputs(element.slabs)
    //             .duration(50)
    //             .EUt(4)

    //     }

    //     // Обрезанный блок

    //     e.stonecutting(element.cutted, element.block)
    //         .id(`tfg:stonecutting/cutted_${element.name}`)

    //     generateCutterRecipe(e, element.block, 4, element.cutted, 100, 8, `cutted_${element.name}`)

    //     // Not working, because JS is shit!
    //     // e.recipes.tfc.chisel(element.cutted,  element.block, 'smooth')
    //     //     .id(`tfg:chisel/cutted_${element.name}`)
        
    //     // Ступени

    //     e.stonecutting(element.stairs, element.cutted)
    //         .id(`tfg:stonecutting/stairs_${element.name}`)

    //     generateCutterRecipe(e, element.cutted, 0, [element.stairs, 'gtceu:small_copper_dust'], 100, 8, `stairs_${element.name}`)

    //     // Not working, because JS is shit!
    //     // e.recipes.tfc.chisel(element.stair,  element.cutted, 'stair')
    //     //     .id(`tfg:chisel/stair_${element.name}`)

    //     // Полублоки

    //     e.stonecutting(element.slabs, element.cutted)
    //         .id(`tfg:stonecutting/slabs_${element.name}`)

    //     generateCutterRecipe(e, element.cutted, 1, [element.slabs, '2x gtceu:small_copper_dust'], 100, 8, `slabs_${element.name}`)

    //     // Not working, because JS is shit!
    //     // e.recipes.tfc.chisel(element.slab,  element.cutted, 'slab')
    //     //     .id(`tfg:chisel/slab_${element.name}`)

    // }

    //#endregion

    //#region Шерсть

    //#region Белая
    e.remove({ id: 'gtceu:assembler/wool_from_string' })

    e.recipes.gtceu.assembler('tfg:wool_from_string')             
        .itemInputs('4x #forge:string')
        .circuit(4)
        .itemOutputs('minecraft:white_wool')
        .EUt(4).duration(100)
        
    //#endregion

    //#endregion

    //#region Ковры
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        
        e.shapeless(`2x minecraft:${dye}_carpet`, [
            '#tfc:saws',
            `minecraft:${dye}_wool`
        ]).id(`tfg:workbench/${dye}_carpet`)

    })
    //#endregion

    //#region Стекло

    //#region Бесцветное
    e.remove({ id: 'create:smelting/glass_from_tiled_glass' })
    e.remove({ id: 'create:smelting/glass_from_framed_glass' })
    e.remove({ id: 'create:smelting/glass_from_horizontal_framed_glass' })
    e.remove({ id: 'create:smelting/glass_from_vertical_framed_glass' })

    e.remove({ id: 'gtceu:arc_furnace/glass_from_sand' })
    e.recipes.gtceu.arc_furnace('tfg:glass_from_sand')             
        .itemInputs('#forge:sand')
        .itemOutputs('2x minecraft:glass')
        .EUt(30).duration(20)

    //#endregion

    //#endregion

    //#region Шалкеры
    // TODO: Вернуть рецепты, когда добавим, что-то магическое, из чего можно будет сделать панцири 

    e.remove({ id: 'minecraft:shulker_box' })
    e.remove({ id: 'gtceu:assembler/purple_shulker_box' })

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        e.remove({ id: `tfc:barrel/dye/${dye}_shulker` })
    })
    //#endregion

    //#region Кровати
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        e.remove({ id: `gtceu:shaped/${dye}_bed` })
        e.remove({ id: `tfc:crafting/vanilla/color/${dye}_bed` })
    })

    e.shaped(`minecraft:white_bed`, [
        'AAA', 
        'BBB',
        'CDC'  
    ], {
        A: '#tfc:sewing_light_cloth', 
        B: '#minecraft:planks',
        C: '#minecraft:wooden_fences',
        D: '#forge:tools/mallets'
    }).id(`tfg:workbench/white_bed`)

    e.recipes.gtceu.extractor('tfg:white_bed')             
        .itemInputs('3x minecraft:white_wool', '4x #minecraft:planks')
        .circuit(1)
        .itemOutputs('minecraft:white_bed')
        .EUt(16).duration(250)
    //#endregion

    //#region Свечи
    e.remove({ id: `gtceu:shaped/candle` })
    e.remove({ id: `gtceu:chemical_bath/decolor_candle` })
    e.remove({ id: `gtceu:fluid_solidifier/candle` })

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        e.remove({ id: `minecraft:${dye}_candle` })
        e.remove({ id: `gtceu:chemical_bath/${dye}_candle_to_white` })
        e.remove({ id: `gtceu:chemical_bath/dye_candle_to_${dye}` })
    })
    //#endregion

    //#region Баннеры
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        e.remove({ id: `gtceu:assembler/${dye}_banner` })

        e.recipes.gtceu.extractor(`tfg:${dye}_banner`)             
            .itemInputs('minecraft:white_wool', '#forge:rods/wooden')
            .circuit(6)
            .itemOutputs(`minecraft:${dye}_banner`)
            .EUt(7).duration(20)
    })
    

    //#endregion

    //#region Земля
    e.remove({ id: 'create:filling/grass_block' })
    //#endregion

    //#region Тропинка
    e.remove({ id: 'create:pressing/path' })
    //#endregion

    //#region Дерн
    e.remove({ id: 'gtceu:macerator/dirt_from_bio_chaff' })
    e.remove({ id: 'ae2:entropy/cool/grass_block_dirt' })
    //#endregion

    //#region Подсушенный дерн
    e.remove({ id: 'gtceu:mixer/coarse_dirt' })
    e.remove({ id: 'gtceu:create_mixer/coarse_dirt' })
    //#endregion

    //#region Грязь
    e.remove({ id: 'gtceu:centrifuge/muddy_mangrove_roots' })
    e.remove({ id: 'gtceu:mixer/mud' })
    e.remove({ id: 'gtceu:create_mixer/mud' })
    //#endregion

    //#region Мангровые корни в грязи
    e.remove({ id: 'minecraft:muddy_mangrove_roots' })

    //#endregion

    //#region Глина
    e.remove({ id: 'gtceu:compressor/mud_to_clay' })
    //#endregion

    //#region Гравий
    e.remove({ id: 'gtceu:forge_hammer/cobblestone_to_gravel' })
    e.remove({ id: 'create:milling/cobblestone' })
    //#endregion

    //#region Песок
    e.remove({ id: 'gtceu:centrifuge/oilsands_ore_separation' })
    e.remove({ id: 'gtceu:centrifuge/dirt_separation' })
    e.remove({ id: 'gtceu:centrifuge/soul_sand_separation' })
    e.remove({ id: 'gtceu:centrifuge/grass_block_separation' })
    e.remove({ id: 'gtceu:centrifuge/red_sand_separation' })
    e.remove({ id: 'gtceu:centrifuge/oilsands_dust_separation' })
    e.remove({ id: 'gtceu:centrifuge/endstone_separation' })
    e.remove({ id: 'gtceu:centrifuge/mycelium_separation' })

    e.remove({ id: 'gtceu:forge_hammer/sandstone_to_sand' })
    e.remove({ id: 'gtceu:forge_hammer/gravel_to_sand' })
    e.remove({ id: 'gtceu:forge_hammer/chiseled_sandstone_to_sand' })
    e.remove({ id: 'gtceu:forge_hammer/smooth_sandstone_to_sand' })

    e.remove({ id: 'create:crushing/gravel' })
    e.remove({ id: 'create:milling/sandstone' })
    //#endregion

    //#region Красный песок
    e.remove({ id: 'gtceu:forge_hammer/red_sandstone_to_red_sand' })
    e.remove({ id: 'gtceu:forge_hammer/chiseled_red_sandstone_to_red_sand' })

    e.remove({ id: 'create:milling/granite' })
    e.remove({ id: 'create:milling/terracotta' })
    //#endregion
    
    //#region Плотный лед
    e.remove({ id: 'minecraft:packed_ice' })
    //#endregion

    //#region Синий лед
    e.remove({ id: 'minecraft:blue_ice' })
    //#endregion

    //#region Снег
    e.remove({ id: 'minecraft:snow' })
    //#endregion

    //#region Ковер из мха
    e.remove({ id: 'minecraft:moss_carpet' })
    //#endregion

    //#region Кальцит
    e.remove({ id: 'create:calcite_from_stone_types_calcite_stonecutting' })
    //#endregion

    //#region Туф
    e.remove({ id: 'create:tuff_from_stone_types_tuff_stonecutting' })
    //#endregion

    //#region Капельник
    e.remove({ id: 'minecraft:dripstone_block' })
    e.remove({ id: 'create:dripstone_block_from_stone_types_dripstone_stonecutting' })
    e.remove({ id: 'gtceu:compressor/dripstone_block_from_pointed_dripstone' })
    //#endregion

    //#region Капающий капельник
    e.remove({ id: 'gtceu:forge_hammer/pointed_dripstone_from_dripstone_block' })
    //#endregion

    //#region Сырые блоки руды

    //#region Железо
    e.remove({ id: 'minecraft:raw_iron_block' })
    //#endregion

    //#region Медь
    e.remove({ id: 'minecraft:raw_copper_block' })
    //#endregion

    //#region Золото
    e.remove({ id: 'minecraft:raw_gold_block' })
    //#endregion

    //#endregion
    
    //#region Коричневый гриб
    e.remove({ id: 'gtceu:centrifuge/mycelium_separation' })
    e.remove({ id: '' })
    //#endregion

    //#region Адский гриб (Красный)
    e.remove({ id: 'create:haunting/crimson_fungus' })
    //#endregion

    //#region Адский гриб (Синий)
    e.remove({ id: 'create:haunting/warped_fungus' })
    //#endregion

    //#region Сухой кустик
    e.remove({ id: 'create:splashing/red_sand' })
    //#endregion

    //#region Семяна пшеницы
    e.remove({ id: 'create:milling/large_fern' })
    e.remove({ id: 'create:milling/fern' })
    e.remove({ id: 'create:milling/tall_grass' })
    e.remove({ id: 'create:milling/wheat' })
    e.remove({ id: 'create:milling/grass' })
    //#endregion

    //#region Семяна тыквы
    e.remove({ id: 'minecraft:pumpkin_seeds' })
    e.remove({ id: 'gtceu:macerator/macerate_pumpkin' })
    //#endregion

    //#region Семяна арбуза
    e.remove({ id: 'gtceu:macerator/macerate_melon_slice' })
    e.remove({ id: 'gtceu:macerator/macerate_melon_block' })
    //#endregion

    //#region Семяна свеклы
    e.remove({ id: 'create:milling/beetroot' })
    e.remove({ id: 'create:milling/beetroot' })
    //#endregion

    //#region Святящиеся ягоды
    e.remove({ id: 'create:haunting/glow_berries' })
    //#endregion

    //#region Высушенный блок водорослей
    e.remove({ id: 'minecraft:dried_kelp_block' })
    //#endregion

    //#region Сухая губка
    e.recipes.tfc.heating('minecraft:wet_sponge', 790)
        .resultItem('minecraft:sponge')
        .id('tfg:heating/sponge')
    //#endregion

    //#region Арбуз
    e.remove({ id: 'gtceu:packer/melon' })
    //#endregion

    //#region Светящаяся тыква
    e.remove({ id: 'gtceu:shaped/lit_pumpkin' })
    e.remove({ id: 'gtceu:canner/jack_o_lantern' })

    e.shaped('minecraft:jack_o_lantern', [
        'AC',
        'B '
    ], {
        A: 'tfc:pumpkin', 
        B: 'minecraft:glowstone',
        C: '#forge:tools/knives'
    }).id('tfg:workbench/jack_o_lantern')

    e.recipes.gtceu.canner('tfg:jack_o_lantern')             
        .itemInputs('tfc:pumpkin', 'minecraft:glowstone')
        .itemOutputs('minecraft:jack_o_lantern')
        .EUt(4).duration(100)
    //#endregion

    //#region Блок сена
    e.remove({ id: 'gtceu:packer/hay_block' })

    e.recipes.gtceu.packer('tfg:hay_block')             
        .itemInputs('9x tfc:straw')
        .itemOutputs('minecraft:hay_block')
        .EUt(2).duration(200)

    //#endregion

    //#region Факел

    //#region В Верстаке

    //#region Из креозота
    
    // TODO: Починить рецепт
    e.remove({ id: 'gtceu:shaped/torch_creosote' })
    
    //#endregion
    
    //#region Из серы
    e.remove({ id: 'gtceu:shaped/torch_sulfur' })

    e.shaped('2x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:sulfur_dust', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('tfg:workbench/torch_sulfur')

    //#endregion
    
    //#region Из фосфора
    e.remove({ id: 'gtceu:shaped/torch_phosphorus' })

    e.shaped('6x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:phosphorus_dust', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('tfg:workbench/torch_phosphorus')

    //#endregion

    //#region Из коксовой пыли
    e.remove({ id: 'gtceu:shaped/torch_coke_dust' })

    e.shaped('8x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:coke_dust', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('tfg:workbench/torch_coke_dust')
    //#endregion
    
    //#region Из коксового гема
    e.remove({ id: 'gtceu:shaped/torch_coke' })

    e.shaped('8x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:coke_gem', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('tfg:workbench/torch_coke')
    //#endregion
    
    //#region Из угольной пыли
    e.remove({ id: 'gtceu:shaped/torch_coal_dust' })

    e.shaped('4x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:coal_dust', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('tfg:workbench/torch_coal_dust')
    //#endregion

    //#region Из угольного гема
    e.shaped('4x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'minecraft:coal', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('tfg:workbench/torch_coal')
    //#endregion

    //#region Из древесно-угольной пыли
    e.remove({ id: 'gtceu:shaped/torch_charcoal_dust' })

    e.shaped('4x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:charcoal_dust', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('tfg:workbench/torch_charcoal_dust')
    //#endregion

    //#region Из древесно-угольного гема
    e.shaped('4x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'minecraft:charcoal', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('tfg:workbench/torch_charcoal')
    //#endregion

    //#region Из сырой резины
    e.remove({ id: 'gtceu:shaped/sticky_resin_torch' })

    e.shaped('3x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:sticky_resin', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('gtceu:shaped/sticky_resin_torch')
    //#endregion

    //#endregion

    //#region В сборщике
    e.remove({ id: 'gtceu:assembler/torch_phosphorus' })
    e.remove({ id: 'gtceu:assembler/torch_sulfur' })
    e.remove({ id: 'gtceu:assembler/torch_coke_dust' })
    e.remove({ id: 'gtceu:assembler/torch_coal_dust' })
    e.remove({ id: 'gtceu:assembler/torch_charcoal_dust' })
    e.remove({ id: 'gtceu:assembler/torch_coal' })
    e.remove({ id: 'gtceu:assembler/torch_coke_gem' })
    //#endregion

    //#region Мертвый факел в обычный
    e.smelting('tfc:torch', 'tfc:dead_torch')
        .id('tfg:smelting/dead_torch_to_torch')
    //#endregion
    
    //#endregion

    //#region Красный факел
    e.remove({ id: 'gtceu:shaped/redstone_torch' })

    e.shaped('minecraft:redstone_torch', [
        'A',
        'B '
    ], {
        A: 'tfc:dead_torch', 
        B: 'minecraft:redstone'
    }).id('tfg:workbench/redstone_torch')
    //#endregion

    //#region Факел душ
    e.remove({ id: 'gtceu:shaped/soul_torch' })
    e.remove({ id: 'gtceu:assembler/soul_torch' })
    e.remove({ id: 'create:haunting/soul_torch' })

    e.shaped('minecraft:soul_torch', [
        'BA'
    ], {
        A: 'tfc:torch', 
        B: '#minecraft:soul_fire_base_blocks'
    }).id('tfg:workbench/soul_torch')

    e.recipes.create.haunting('minecraft:soul_torch', 'tfc:torch')
        .id('tfg:haunting/soul_torch')
    //#endregion

    //#region Фонарь
    e.remove({ id: 'gtceu:shaped/lantern' })
    e.remove({ id: 'gtceu:assembler/lantern' })
    //#endregion

    //#region Фонарь душ
    e.remove({ id: 'gtceu:shaped/soul_lantern' })
    e.remove({ id: 'gtceu:assembler/soul_lantern' })
    e.remove({ id: 'create:haunting/soul_lantern' })

    e.recipes.create.haunting('minecraft:soul_lantern', '#tfc:lamps')
        .id('tfg:haunting/soul_lantern')
    //#endregion

    //#region Стержень энда
    e.remove({ id: 'minecraft:end_rod' })
    e.remove({ id: 'gtceu:assembler/end_rod' })
    //#endregion

    //#region Верстак
    e.remove({ id: 'gtceu:shaped/crafting_table' })
    e.remove({ id: 'tfc:crafting/vanilla/crafting_table' })
    e.remove({ id: 'gtceu:assembler/crafting_table' })
    //#endregion

    //#region Камнерез
    e.remove({ id: 'gtceu:shaped/stonecutter' })
    e.remove({ id: 'gtceu:assembler/stonecutter' })
    //#endregion

    //#region Стол картографа
    e.remove({ id: 'gtceu:shaped/cartography_table' })
    e.remove({ id: 'gtceu:assembler/cartography_table' })
    //#endregion

    //#region Стол лучника
    e.remove({ id: 'gtceu:shaped/fletching_table' })
    e.remove({ id: 'gtceu:assembler/fletching_table' })
    //#endregion
    
    //#region Стол кузнеца
    e.remove({ id: 'tfc:crafting/vanilla/smithing_table' })
    //#endregion

    //#region Точильный камень
    e.remove({ id: 'gtceu:shaped/grindstone' })
    e.remove({ id: 'gtceu:assembler/grindstone' })

    e.shaped('minecraft:grindstone', [
        'h s',
        'ABA', 
        'CfC' 
    ], {
        A: '#tfg:all_iron_bolts',
        B: '#tfg:rock_slabs',
        C: 'gtceu:long_wood_rod',
        h: '#forge:tools/hammers',
        s: '#forge:tools/screwdrivers',
        f: '#forge:tools/files',
    }).id('tfg:workbench/grindstone')

    e.recipes.gtceu.assembler('tfg:grindstone')             
        .itemInputs('2x #tfg:all_iron_bolts', '#tfg:rock_slabs', '2x gtceu:long_wood_rod')
        .itemOutputs('minecraft:grindstone')
        .EUt(4).duration(100)
    //#endregion

    //#region Вышивальня
    e.remove({ id: 'tfc:crafting/vanilla/loom' })
    e.remove({ id: 'gtceu:shaped/loom' })
    e.remove({ id: 'gtceu:assembler/loom' })

    e.shaped('minecraft:loom', [
        'AAA',
        'BsB', 
        'CDC' 
    ], {
        A: '#forge:string',
        B: 'gtceu:wood_plate',
        C: 'gtceu:wood_screw',
        D: '#minecraft:planks',
        s: '#forge:tools/screwdrivers'
    }).id('tfg:workbench/loom')

    e.recipes.gtceu.assembler('tfg:loom')             
        .itemInputs('3x #forge:string', '2x gtceu:wood_plate', '#minecraft:planks')
        .itemOutputs('minecraft:loom')
        .EUt(6).duration(100)
    //#endregion

    //#region Печь
    e.remove({ id: 'gtceu:shaped/furnace' })
    e.remove({ id: 'gtceu:assembler/furnace' })
    //#endregion

    //#region Коптильня
    e.remove({ id: 'gtceu:shaped/smoker' })
    e.remove({ id: 'gtceu:assembler/smoker' })
    //#endregion

    //#region Доменка
    e.remove({ id: 'gtceu:shaped/blast_furnace' })
    e.remove({ id: 'gtceu:assembler/blast_furnace' })
    //#endregion

    //#region Костер душ
    e.remove({ id: 'create:haunting/soul_campfire' })
    //#endregion

    //#region Наковальня
    e.remove({ id: 'gtceu:shaped/anvil' })
    e.remove({ id: 'gtceu:alloy_smelter/anvil' })
    e.remove({ id: 'gtceu:fluid_solidifier/solidify_anvil' })
    //#endregion

    //#region Компостница
    e.remove({ id: 'gtceu:shaped/composter' })
    e.remove({ id: 'gtceu:assembler/composter' })
    //#endregion

    //#region Нотный блок
    e.remove({ id: 'gtceu:shaped/note_block' })
    e.remove({ id: 'gtceu:assembler/note_block' })
    
    e.shaped('minecraft:note_block', [
        'AAA', 
        'BCB',
        'BDB'  
    ], {
        A: 'gtceu:wood_plank', 
        B: '#tfg:metal_bars',
        C: '#forge:gears/wood',
        D: '#forge:rods/red_alloy',
    }).id('tfg:workbench/note_block')
    //#endregion

    //#region Варочная стойка
    e.remove({ id: 'gtceu:shaped/brewing_stand' })
    //#endregion

    //#region Тигель
    e.remove({ id: 'tfc:crafting/vanilla/cauldron' })
    e.remove({ id: 'gtceu:shaped/cauldron' })
    e.remove({ id: 'gtceu:assembler/cauldron' })
    
    e.shaped('minecraft:cauldron', [
        'A A', 
        'ABA',
        'AAA'  
    ], {
        A: '#tfg:all_iron_plates', 
        B: '#tfc:hammers'  
    }).id('tfg:workbench/cauldron')

    e.recipes.gtceu.assembler('tfg:cauldron')             
        .itemInputs('7x #tfg:all_iron_plates')
        .circuit(7)
        .itemOutputs('minecraft:cauldron')
        .EUt(4).duration(700)
    //#endregion

    //#region Золотой колокол
    e.remove({ id: 'gtceu:assembler/bell' })

    e.recipes.gtceu.assembler('tfg:bell')             
        .itemInputs('#forge:rods/wooden', '2x #forge:rods/stone', '#forge:plates/gold', '2x #tfg:all_iron_bolts')
        .circuit(7)
        .itemOutputs('minecraft:bell')
        .EUt(7).duration(1400)
    //#endregion

    //#region Кондуит
    e.remove({ id: 'gtceu:assembler/conduit' })
    //#endregion

    //#region Магнитный камень
    e.remove({ id: 'minecraft:lodestone' })
    //#endregion

    //#region Лестница
    e.remove({ id: 'tfc:crafting/vanilla/ladder' })
    //#endregion

    //#region Леса
    e.remove({ id: 'tfc:crafting/vanilla/scaffolding' })
    e.remove({ id: 'gtceu:shaped/scaffolding' })
    e.remove({ id: 'gtceu:assembler/scaffolding' })

    e.shaped('3x minecraft:scaffolding', [
        'ABA', 
        'ACA', 
        'AmA', 
    ], {
        A: 'minecraft:bamboo',
        B: '#forge:string',
        C: 'gtceu:wood_screw',
        m: '#forge:tools/mallets'
    }).id('tfg:workbench/scaffolding')

    e.recipes.gtceu.assembler('tfg:scaffolding')             
        .itemInputs('6x minecraft:bamboo', '#forge:string')
        .itemOutputs('4x minecraft:scaffolding')
        .EUt(4).duration(100)
    //#endregion

    //#region Улей
    e.remove({ id: 'gtceu:shaped/beehive' })
    e.remove({ id: 'gtceu:assembler/beehive' })
    //#endregion

    //#region Громоотвод
    e.remove({ id: 'tfc:crafting/vanilla/lightning_rod' })
    //#endregion

    //#region Декоративная ваза
    e.remove({ id: 'minecraft:decorated_pot_simple' })

    e.shaped('minecraft:decorated_pot', [
        ' A ', 
        'AfA', 
        ' A ', 
    ], {
        A: 'minecraft:brick',
        f: '#forge:tools/files'
    }).id('tfg:workbench/decorated_pot')

    e.recipes.gtceu.assembler('tfg:decorated_pot')             
        .itemInputs('4x minecraft:brick')
        .circuit(12)
        .itemOutputs('minecraft:cauldron')
        .EUt(3).duration(120)
    //#endregion

    //#region Стойка для брони
    e.remove({ id: 'tfc:crafting/vanilla/armor_stand' })
    e.remove({ id: 'tfc:crafting/vanilla/armor_stand_bulk' })
    e.remove({ id: 'gtceu:shaped/armor_stand' })
    e.remove({ id: 'gtceu:assembler/armor_stand' })

    e.shaped('minecraft:armor_stand', [
        'ABA', 
        'hBs',
        'CDC'  
    ], {
        A: 'gtceu:wood_bolt',  
        B: '#forge:rods/wooden',  
        C: '#tfg:all_iron_plates',  
        D: '#forge:smooth_stone_slab',  
        h: '#forge:tools/hammers',  
        s: '#forge:tools/saws'  
    }).id('tfg:workbench/armor_stand')

    e.recipes.gtceu.assembler('tfg:armor_stand')             
        .itemInputs('#forge:smooth_stone_slab', '2x #forge:rods/wooden', '2x #tfg:all_iron_plates')
        .circuit(7)
        .itemOutputs('minecraft:armor_stand')
        .EUt(7).duration(100)
    //#endregion

    //#region Рамка
    e.remove({ id: 'gtceu:shaped/item_frame' })
    e.remove({ id: 'tfc:crafting/vanilla/item_frame' })
    e.remove({ id: 'gtceu:assembler/item_frame' })

    e.shaped('minecraft:item_frame', [
        'ABA', 
        'CDC', 
        'CCC', 
    ], {
        A: '#forge:string',
        B: '#tfg:all_iron_rings',
        C: '#forge:rods/wooden',
        D: '#forge:leather',
    }).id('tfg:workbench/item_frame')

    e.recipes.gtceu.assembler('tfg:item_frame')             
        .itemInputs('8x #forge:rods/wooden', '#forge:leather')
        .itemOutputs('minecraft:item_frame')
        .EUt(4).duration(100)
    //#endregion

    //#region Свето-рамка
    e.remove({ id: 'minecraft:glow_item_frame' })

    e.shapeless('minecraft:glow_item_frame', [
        'minecraft:item_frame',
        '#forge:dusts/glowstone'
    ]).id('tfg:workbench/glow_item_frame')

    e.recipes.gtceu.assembler('tfg:glow_item_frame')             
        .itemInputs('2x minecraft:item_frame', '#forge:dusts/glowstone')
        .itemOutputs('2x minecraft:glow_item_frame')
        .EUt(4).duration(100)
    //#endregion

    //#region Картина
    e.remove({ id: 'gtceu:shaped/painting' })
    e.remove({ id: 'tfc:crafting/vanilla/painting' })

    e.shaped('minecraft:painting', [
        'ABA', 
        'CDC', 
        'CCC', 
    ], {
        A: '#forge:string',
        B: '#tfg:all_iron_rings',
        C: '#forge:rods/wooden',
        D: '#tfc:high_quality_cloth',
    }).id('tfg:workbench/painting')
    //#endregion

    //#region Книжные полки
    e.remove({ id: 'gtceu:assembler/bookshelf' })
    //#endregion

    //#region Резные книжные полки
    e.remove({ id: 'gtceu:assembler/chiseled_bookshelf' })
    //#endregion

    //#region Трибуна
    e.remove({ id: 'gtceu:shaped/lectern' })
    e.remove({ id: 'tfc:crafting/vanilla/lectern' })
    e.remove({ id: 'gtceu:assembler/lectern' })
    //#endregion

    //#region Сундук
    e.remove({ id: 'gtceu:shaped/chest' })
    e.remove({ id: 'gtceu:assembler/chest' })
    //#endregion

    //#region Бочка
    e.remove({ id: 'gtceu:shaped/barrel' })
    e.remove({ id: 'gtceu:assembler/barrel' })
    //#endregion

    //#region Выход: Якорь возрождения
    e.remove({ id: 'minecraft:respawn_anchor' })
    //#endregion

    //#region Голова игрока
    e.remove({ id: 'computercraft:skull_dan200' })
    e.remove({ id: 'computercraft:skull_cloudy' })
    //#endregion

    //#region Инфецированные камни 
    e.remove({ id: 'create:haunting/infested_stone' })
    e.remove({ id: 'create:haunting/infested_cobblestone' })
    e.remove({ id: 'create:haunting/infested_stone_bricks' })
    e.remove({ id: 'create:haunting/infested_mossy_stone_bricks' })
    e.remove({ id: 'create:haunting/infested_cracked_stone_bricks' })
    e.remove({ id: 'create:haunting/infested_chiseled_stone_bricks' })
    e.remove({ id: 'create:haunting/infested_deepslate' })
    //#endregion

    //#region Редстоун
    e.remove({ id: 'minecraft:redstone_from_smelting_redstone_ore' })
    e.remove({ id: 'minecraft:redstone_from_smelting_deepslate_redstone_ore' })
    
    e.remove({ id: 'minecraft:redstone_from_blasting_redstone_ore' })
    e.remove({ id: 'minecraft:redstone_from_blasting_deepslate_redstone_ore' })
    //#endregion

    //#region Повторитель
    e.remove({ id: 'gtceu:shaped/repeater' })
    e.remove({ id: 'tfc:crafting/vanilla/redstone/repeater' })

    e.shaped('minecraft:repeater', [
        'A A', 
        'BsB', 
        'CDC', 
    ], {
        A: '#tfg:all_iron_screws',
        B: 'minecraft:redstone_torch',
        C: '#minecraft:stone_pressure_plates',
        D: '#tfc:high_quality_cloth',
        s: '#forge:tools/screwdrivers',
    }).id('tfg:workbench/repeater')
    //#endregion

    //#region Компаратор
    e.remove({ id: 'tfc:crafting/vanilla/redstone/comparator' })
    e.remove({ id: 'gtceu:shaped/comparator' })
    e.remove({ id: 'gtceu:shaped/comparator_certus' })
    e.remove({ id: 'gtceu:shaped/comparator_quartzite' })
    
    e.shaped('minecraft:comparator', [
        'DAD',
        'ABA',
        'CsC'
    ], {
        A: 'minecraft:redstone_torch',
        B: '#forge:plates/certus_quartz',
        C: '#minecraft:stone_pressure_plates',
        D: '#tfg:all_iron_screws',
        s: '#forge:tools/screwdrivers',
    }).id('tfg:workbench/comparator_certus')

    e.shaped('minecraft:comparator', [
        'DAD',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:redstone_torch',
        B: '#forge:plates/quartzite',
        C: '#minecraft:stone_pressure_plates',
        D: '#tfg:all_iron_screws',
        s: '#forge:tools/screwdrivers',
    }).id('tfg:workbench/comparator_quartzite')

    e.shaped('minecraft:comparator', [
        'DAD',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:redstone_torch',
        B: '#forge:plates/nether_quartz',
        C: '#minecraft:stone_pressure_plates',
        D: '#tfg:all_iron_screws',
        s: '#forge:tools/screwdrivers',
    }).id('tfg:workbench/comparator_nether_quartz')

    //#endregion

    //#region Рычаг
    e.remove({ id: 'gtceu:shaped/lever' })

    e.shaped('minecraft:lever', [
        'A', 
        'B'
    ], {
        A: '#forge:rods/wooden',
        B: '#minecraft:buttons',
    }).id('tfg:workbench/lever')
    //#endregion

    //#region Калиброванный скалк сенсер
    e.remove({ id: 'minecraft:calibrated_sculk_sensor' })
    e.remove({ id: 'gtceu:assembler/calibrated_sculk_sensor' })
    //#endregion

    //#region Крюк
    e.remove({ id: 'tfc:crafting/vanilla/redstone/tripwire_hook' })
    e.remove({ id: 'gtceu:shaped/tripwire_hook' })
    e.remove({ id: 'gtceu:assembler/tripwire_hook_wrought_iron' })
    e.remove({ id: 'gtceu:assembler/tripwire_hook_iron' })

    e.shaped('minecraft:tripwire_hook', [
        'ABA',
        'CBC',
        ' C '
    ], {
        A: '#tfg:all_iron_rings',
        B: '#forge:rods/wooden',
        C: '#forge:string',
    }).id('tfg:workbench/tripwire_hook')

    e.recipes.gtceu.assembler('tfg:tripwire_hook')             
        .itemInputs('2x #tfg:all_iron_rings', '2x #forge:rods/wooden')
        .itemOutputs('minecraft:tripwire_hook')
        .EUt(4).duration(100)

    //#endregion

    //#region Нить
    e.remove({ id: 'create:crushing/diamond_horse_armor' })
    e.remove({ id: 'create:crushing/golden_horse_armor' })
    e.remove({ id: 'create:crushing/iron_horse_armor' })
    e.remove({ id: 'create:crushing/wool' })
    //#endregion

    //#region Детектор света
    e.remove({ id: 'tfc:crafting/vanilla/redstone/daylight_detector' })
    //#endregion

    //#region Поршень
    e.remove({ id: 'tfc:crafting/vanilla/redstone/piston' })
    e.remove({ id: 'gtceu:shaped/piston_iron' })
    e.remove({ id: 'gtceu:assembler/piston_iron' })
    e.remove({ id: 'gtceu:assembler/piston_stainless_steel' })
    e.remove({ id: 'gtceu:assembler/piston_steel' })
    e.remove({ id: 'gtceu:assembler/piston_aluminium' })
    e.remove({ id: 'gtceu:assembler/piston_titanium' })
    
    e.shaped('minecraft:piston', [
        'AAA',
        'BCB',
        'DED'
    ], {
        A: '#minecraft:planks',
        B: '#tfg:all_iron_small_gears',
        C: '#minecraft:wooden_fences',
        D: '#forge:cobblestone',
        E: 'gtceu:red_alloy_plate',
    }).id('tfg:workbench/piston')

    e.recipes.gtceu.assembler('tfg:piston_iron')             
        .itemInputs('#tfg:all_iron_rods', '#tfg:all_iron_small_gears', '#minecraft:wooden_slabs', '#forge:cobblestone')
        .inputFluids(Fluid.of('gtceu:red_alloy', 144))
        .itemOutputs('minecraft:piston')
        .EUt(7).duration(140)

    e.recipes.gtceu.assembler('tfg:piston_steel')             
        .itemInputs('gtceu:steel_rod', 'gtceu:small_steel_gear', '2x #minecraft:wooden_slabs', '2x #forge:cobblestone')
        .inputFluids(Fluid.of('gtceu:red_alloy', 288))
        .itemOutputs('2x minecraft:piston')
        .EUt(12).duration(140)

    e.recipes.gtceu.assembler('tfg:piston_aluminium')             
        .itemInputs('gtceu:aluminium_rod', 'gtceu:small_aluminium_gear', '4x #minecraft:wooden_slabs', '4x #forge:cobblestone')
        .inputFluids(Fluid.of('gtceu:red_alloy', 432))
        .itemOutputs('4x minecraft:piston')
        .EUt(30).duration(140)

    e.recipes.gtceu.assembler('tfg:piston_stainless_steel')             
        .itemInputs('gtceu:stainless_steel_rod', 'gtceu:small_stainless_steel_gear', '8x #minecraft:wooden_slabs', '8x #forge:cobblestone')
        .inputFluids(Fluid.of('gtceu:red_alloy', 576))
        .itemOutputs('8x minecraft:piston')
        .EUt(30).duration(600)

    e.recipes.gtceu.assembler('tfg:piston_titanium')             
        .itemInputs('gtceu:titanium_rod', 'gtceu:small_titanium_gear', '16x #minecraft:wooden_slabs', '16x #forge:cobblestone')
        .inputFluids(Fluid.of('gtceu:red_alloy', 1152))
        .itemOutputs('16x minecraft:piston')
        .EUt(30).duration(800)
    //#endregion

    //#region Липкий поршень
    e.remove({ id: 'tfc:crafting/vanilla/redstone/sticky_piston' })

    e.shaped('minecraft:sticky_piston', [
        'A',
        'B',
        'C'
    ], {
        A: '#forge:tools/hammers',
        B: 'gtceu:sticky_resin',
        C: 'minecraft:piston'
    }).id('tfg:workbench/sticky_piston_from_sticky_resin')

    e.shaped('minecraft:sticky_piston', [
        'A',
        'B',
        'C'
    ], {
        A: '#forge:tools/hammers',
        B: 'tfc:glue',
        C: 'minecraft:piston'
    }).id('tfg:workbench/sticky_piston_from_tfc_glue')

    e.recipes.gtceu.assembler('tfg:sticky_piston_from_tfc_glue')             
        .itemInputs('tfc:glue', 'minecraft:piston')
        .itemOutputs('minecraft:sticky_piston')
        .EUt(4).duration(100)
    //#endregion

    //#region Раздатчик
    e.remove({ id: 'gtceu:shaped/dispenser' })
    e.remove({ id: 'gtceu:assembler/dispenser' })

    e.shaped('minecraft:dispenser', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:cobblestone',
        B: '#tfg:all_iron_rings',
        C: '#tfg:all_iron_springs',
        D: '#forge:string',
        E: '#tfg:all_iron_gears',
        F: 'gtceu:red_alloy_rod'
    }).id('tfg:workbench/dispenser')
    //#endregion

    //#region Выбрасыватель
    e.remove({ id: 'gtceu:shaped/dropper' })

    e.shaped('minecraft:dropper', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:cobblestone',
        B: '#tfg:all_iron_rings',
        C: '#all_iron_small_springs',
        D: '#forge:string',
        E: '#tfg:all_iron_gears',
        F: 'gtceu:red_alloy_rod'
    }).id('tfg:workbench/dropper')

    //#endregion

    //#region Воронка
    e.remove({ id: 'tfc:crafting/vanilla/redstone/hopper' })
    e.remove({ id: 'tfc:crafting/vanilla/redstone/steel_hopper' })
    e.remove({ id: 'gtceu:shaped/hopper' })
    e.remove({ id: 'gtceu:assembler/hopper_iron' })
    e.remove({ id: 'gtceu:assembler/hopper_wrought_iron' })

    e.shaped('minecraft:hopper', [
        'ABA', 
        'ACA',
        'DAE'  
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:chests/wooden',
        C: '#forge:gears/wrought_iron',
        D: '#forge:tools/wrenches',
        E: '#forge:tools/hammers',
    }).id('tfg:workbench/hopper')

    e.recipes.gtceu.assembler('tfg:hopper')             
        .itemInputs('#forge:chests/wooden', '5x #tfg:all_iron_plates')
        .itemOutputs('minecraft:hopper')
        .EUt(2).duration(800)
    //#endregion

    //#region Сундук-Ловушка
    e.remove({ id: 'gtceu:shaped/trapped_chest' })
    //#endregion

    //#region Наблюдатель
    e.remove({ id: 'tfc:crafting/vanilla/redstone/observer' })

    e.recipes.gtceu.assembler('tfg:observer_certus_quartz')             
        .itemInputs('6x #forge:cobblestone', '2x minecraft:redstone', '#forge:plates/certus_quartz')
        .itemOutputs('minecraft:observer')
        .duration(100)
        .EUt(30)

    e.recipes.gtceu.assembler('tfg:observer_nether_quartz')             
        .itemInputs('6x #forge:cobblestone', '2x minecraft:redstone', '#forge:plates/nether_quartz')
        .itemOutputs('minecraft:observer')
        .duration(100)
        .EUt(30)

    e.recipes.gtceu.assembler('tfg:observer_quartzite')             
        .itemInputs('6x #forge:cobblestone', '2x minecraft:redstone', '#forge:plates/quartzite')
        .itemOutputs('minecraft:observer')
        .duration(100)
        .EUt(30)

    e.shaped('minecraft:observer', [
        'ABA',
        'BCB',
        'DED'
    ], {
        A: '#tfg:all_iron_rings',
        B: '#forge:cobblestone',
        C: '#forge:plates/certus_quartz',
        D: '#tfg:all_iron_gears',
        E: 'gtceu:red_alloy_rod',
    }).id('tfg:workbench/observer_certus_quartz')

    e.shaped('minecraft:observer', [
        'ABA',
        'BCB',
        'DED'
    ], {
        A: '#tfg:all_iron_rings',
        B: '#forge:cobblestone',
        C: '#forge:plates/nether_quartz',
        D: '#tfg:all_iron_gears',
        E: 'gtceu:red_alloy_rod',
    }).id('tfg:workbench/observer_nether_quartz')

    e.shaped('minecraft:observer', [
        'ABA',
        'BCB',
        'DED'
    ], {
        A: '#tfg:all_iron_rings',
        B: '#forge:cobblestone',
        C: '#forge:plates/quartzite',
        D: '#tfg:all_iron_gears',
        E: 'gtceu:red_alloy_rod',
    }).id('tfg:workbench/observer_quartzite')

    //#endregion

    //#region Рельсы
    e.remove({ id: 'tfc:crafting/vanilla/redstone/rail' })
    e.remove({ id: 'tfc:crafting/vanilla/redstone/steel_rail' })
    e.remove({ id: 'gtceu:shaped/rail' })
    e.remove({ id: 'gtceu:assembler/rail' })

    e.shaped('8x minecraft:rail', [
        'AhA',
        'BCB',
        'BsB'
    ], {
        A: '#tfg:all_iron_screws',
        B: '#tfg:all_iron_rods',
        C: '#forge:rods/wooden',
        s: '#forge:tools/screwdrivers',
        h: '#forge:tools/hammers',
    }).id('tfg:workbench/rail')

    e.recipes.gtceu.assembler('tfg:rail')             
        .itemInputs('12x #tfg:all_iron_rods', '#forge:rods/wooden')
        .circuit(1)
        .itemOutputs('32x minecraft:rail')
        .EUt(30).duration(100)
    //#endregion

    //#region Заряженные рельсы
    e.remove({ id: 'tfc:crafting/vanilla/redstone/powered_rail' })
    e.remove({ id: 'gtceu:shaped/powered_rail' })

    e.shaped('6x minecraft:powered_rail', [
        'ABA',
        'CDC',
        'EsE'
    ], {
        A: 'gtceu:steel_screw',
        B: 'gtceu:red_alloy_plate',
        C: '#tfg:all_iron_rods',
        D: '#forge:rods/wooden',
        E: 'gtceu:gold_rod',
        s: '#forge:tools/screwdrivers',
    }).id('tfg:workbench/powered_rail')
    //#endregion

    //#region Нажимные рельсы
    e.remove({ id: 'tfc:crafting/vanilla/redstone/detector_rail' })
    e.remove({ id: 'tfc:crafting/vanilla/redstone/steel_detector_rail' })
    e.remove({ id: 'gtceu:shaped/detector_rail' })
    e.remove({ id: 'gtceu:assembler/detector_rail' })

    e.shaped('6x minecraft:detector_rail', [
        'ADA',
        'BCB',
        'BsB'
    ], {
        A: '#tfg:all_iron_screws',
        B: '#tfg:all_iron_rods',
        C: '#forge:rods/wooden',
        D: 'minecraft:heavy_weighted_pressure_plate',
        s: '#forge:tools/screwdrivers',
    }).id('tfg:workbench/detector_rail')

    e.recipes.gtceu.assembler('tfg:detector_rail')             
        .itemInputs('12x #tfg:all_iron_rods', '#forge:rods/wooden', '#forge:dusts/redstone')
        .circuit(5)
        .itemOutputs('12x minecraft:detector_rail')
        .EUt(30).duration(100)
    //#endregion

    //#region Активаторные рельсы
    e.remove({ id: 'tfc:crafting/vanilla/redstone/activator_rail' })
    e.remove({ id: 'tfc:crafting/vanilla/redstone/steel_activator_rail' })
    e.remove({ id: 'gtceu:shaped/activator_rail' })
    e.remove({ id: 'gtceu:assembler/activator_rail' })

    e.shaped('6x minecraft:activator_rail', [
        'ADA',
        'BCB',
        'BsB'
    ], {
        A: '#tfg:all_iron_screws',
        B: '#tfg:all_iron_rods',
        C: '#forge:rods/wooden',
        D: 'minecraft:redstone_torch',
        s: '#forge:tools/screwdrivers',
    }).id('tfg:workbench/activator_rail')

    e.recipes.gtceu.assembler('tfg:activator_rail')             
        .itemInputs('12x #tfg:all_iron_rods', '2x #forge:rods/wooden', 'minecraft:redstone_torch')
        .circuit(5)
        .itemOutputs('12x minecraft:activator_rail')
        .EUt(30).duration(100)
    //#endregion

    //#region Вагонетка
    e.remove({ id: 'tfc:crafting/vanilla/redstone/minecart' })
    e.remove({ id: 'tfc:crafting/vanilla/redstone/steel_minecart' })
    e.remove({ id: 'tfc:crafting/vanilla/redstone/minecart' })
    e.remove({ id: 'gtceu:shaped/minecart_iron' })
    e.remove({ id: 'gtceu:assembler/minecart' })

    e.shaped('minecraft:minecart', [
        ' h ',
        'AwA',
        'BAB'
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: 'gtceu:iron_minecart_wheels',
        h: '#forge:tools/hammers',
        w: '#forge:tools/wrenches',
    }).id('tfg:workbench/minecart_iron')

    e.recipes.gtceu.assembler('tfg:minecart')             
        .itemInputs('3x #tfg:all_iron_plates', '4x #tfg_all_iron_rings')
        .itemOutputs('minecraft:minecart')
        .EUt(4).duration(100)
    //#endregion

    //#region Выход: Вагонетка с сундуком
    e.remove({ id: 'gtceu:assembler/chest_minecart' })
    //#endregion

    //#region Выход: Вагонетка с печью
    e.remove({ id: 'create:crafting/kinetics/furnace_minecart_from_contraption_cart' })
    e.remove({ id: 'gtceu:shaped/furnace_minecart' })
    e.remove({ id: 'gtceu:assembler/furnace_minecart' })
    //#endregion

    //#region Железные инструменты
    e.remove({ id: 'gtceu:shaped/iron_sword' })
    e.remove({ id: 'gtceu:shaped/iron_pickaxe' })
    e.remove({ id: 'gtceu:shaped/iron_axe' })
    e.remove({ id: 'gtceu:shaped/iron_shovel' })
    e.remove({ id: 'gtceu:shaped/iron_hoe' })
    //#endregion

    //#region Золотые инструменты
    e.remove({ id: 'gtceu:shaped/golden_sword' })
    e.remove({ id: 'gtceu:shaped/golden_pickaxe' })
    e.remove({ id: 'gtceu:shaped/golden_axe' })
    e.remove({ id: 'gtceu:shaped/golden_shovel' })
    e.remove({ id: 'gtceu:shaped/golden_hoe' })
    //#endregion

    //#region Алмазные инструменты
    e.remove({ id: 'gtceu:shaped/diamond_sword' })
    e.remove({ id: 'gtceu:shaped/diamond_pickaxe' })
    e.remove({ id: 'gtceu:shaped/diamond_axe' })
    e.remove({ id: 'gtceu:shaped/diamond_shovel' })
    e.remove({ id: 'gtceu:shaped/diamond_hoe' })
    //#endregion

    //#region Незеритовые инструменты
    e.remove({ id: 'minecraft:netherite_sword_smithing' })
    e.remove({ id: 'minecraft:netherite_pickaxe_smithing' })
    e.remove({ id: 'minecraft:netherite_axe_smithing' })
    e.remove({ id: 'minecraft:netherite_shovel_smithing' })
    e.remove({ id: 'minecraft:netherite_hoe_smithing' })
    //#endregion

    //#region Ведро
    e.remove({ id: 'gtceu:shaped/iron_bucket' })
    e.remove({ id: 'gtceu:bender/bucket' })
    
    e.recipes.tfc.welding('minecraft:bucket', 'tfc:metal/bucket/red_steel', 'tfc:metal/bucket/blue_steel', 6)
        .id('tfg:anvil/bucket')

    e.recipes.gtceu.assembler('tfg:bucket')             
        .itemInputs('#forge:plates/red_steel', '#forge:plates/blue_steel')
        .circuit(21)
        .itemOutputs('minecraft:bucket')
        .EUt(4).duration(100)
    //#endregion

    //#region Удочка
    e.remove({ id: 'gtceu:shaped/fishing_rod' })
    //#endregion

    //#region Огниво
    e.remove({ id: 'tfc:crafting/vanilla/flint_and_steel' })
    //#endregion

    //#region Костная мука
    e.remove({ id: 'create:milling/calcite' })
    //#endregion

    //#region Ножницы
    e.remove({ id: 'gtceu:shaped/shears' })
    //#endregion

    //#region Кисточка
    e.remove({ id: 'gtceu:shaped/brush' })
    e.remove({ id: 'gtceu:assembler/brush' })
    //#endregion

    //#region Поводок
    e.remove({ id: 'gtceu:shaped/lead' })
    e.remove({ id: 'gtceu:assembler/lead' })

    e.recipes.gtceu.assembler('tfg:lead_slimeball')             
        .itemInputs('2x #forge:string', 'minecraft:slime_ball')
        .circuit(0)
        .itemOutputs('2x minecraft:lead')
        .EUt(2).duration(100)

    e.recipes.gtceu.assembler('tfg:lead_glue')             
        .itemInputs('2x #forge:string', 'tfc:glue')
        .circuit(0)
        .itemOutputs('2x minecraft:lead')
        .EUt(2).duration(100)

    e.recipes.gtceu.assembler('tfg:lead_sticky_resin')             
        .itemInputs('2x #forge:string', 'gtceu:sticky_resin')
        .circuit(0)
        .itemOutputs('2x minecraft:lead')
        .EUt(2).duration(100)
    //#endregion

    //#region Компас
    e.remove({ id: 'tfc:crafting/vanilla/compass' })
    e.remove({ id: 'gtceu:shaped/compass' })
    e.remove({ id: 'gtceu:assembler/compass' })

    e.shaped('minecraft:compass', [
        'ABC',
        'DED',
        'FsA'
    ], {
        A: '#tfg:all_iron_screws',
        B: '#forge:glass_panes/colorless',
        C: 'gtceu:tiny_magnetite_dust',
        D: 'gtceu:zinc_ring',
        E: '#tfg:all_iron_plates',
        F: 'gtceu:red_alloy_bolt',
        s: '#forge:tools/screwdrivers',
    }).id('tfg:workbench/compass')

    e.recipes.gtceu.assembler('tfg:compass')             
        .itemInputs('2x #tfg:all_iron_screws', '#forge:glass_panes/colorless', 'gtceu:magnetic_iron_bolt', '2x gtceu:zinc_ring', '#tfg:all_iron_plates', 'gtceu:red_alloy_bolt')
        .itemOutputs('minecraft:compass')
        .EUt(16).duration(100)
    //#endregion

    //#region Часы
    e.remove({ id: 'tfc:crafting/vanilla/clock' })
    //#endregion

    //#region Подзорная труба
    e.remove({ id: 'tfc:crafting/vanilla/spyglass' })
    e.remove({ id: 'gtceu:shaped/spyglass' })
    e.remove({ id: 'gtceu:assembler/spyglass' })

    e.shaped('minecraft:spyglass', [
        'hAs',
        'BCD',
        'fE '
    ], {
        A: '#tfg:all_glass_lenses',
        B: '#forge:leather',
        C: '#forge:rings/gold',
        D: '#tfg:all_iron_screws',
        E: '#forge:plates/copper',
        h: '#forge:tools/hammers',
        s: '#forge:tools/screwdrivers',
        f: '#forge:tools/files',
    }).id('tfg:workbench/spyglass')

    e.recipes.gtceu.assembler('tfg:spyglass')             
        .itemInputs('#tfg:all_glass_lenses', '#forge:rings/gold', '#forge:plates/copper', '#forge:leather')
        .itemOutputs('minecraft:spyglass')
        .EUt(4).duration(100)
    //#endregion

    //#region Элитра
    e.recipes.gtceu.assembler('tfg:elytra')             
        .itemInputs('6x #forge:plates/polyvinyl_butyral', '2x #forge:rings/titanium', '2x #forge:rods/titanium', '4x #forge:single_cables/aluminium')
        .circuit(32)
        .itemOutputs(Item.of('minecraft:elytra', "{Damage:0,display:{Name:'{\"text\":\"Wings of Gods\",\"italic\":true}'}}"))
        .duration(1600)
        .EUt(666)

    e.recipes.gtceu.assembler('tfg:elytra_repairing')             
        .itemInputs('6x #forge:plates/polyvinyl_butyral', Item.of('minecraft:elytra', '{Damage:431}').strongNBT())
        .circuit(32)
        .itemOutputs(Item.of('minecraft:elytra', "{Damage:0,display:{Name:'{\"text\":\"Wings of Gods\",\"italic\":true}'}}"))
        .duration(1600)
        .EUt(120)
    //#endregion

    //#region Седло
    e.remove({ id: 'gtceu:shaped/saddle' })

    e.shaped('minecraft:saddle', [
        'AAA',
        'ABA',
        'CDC'
    ], {
        A: '#forge:leather',
        B: '#minecraft:wool_carpets',
        C: '#tfg:all_iron_rings',
        D: '#forge:string'
    }).id('tfg:workbench/saddle')
    //#endregion

    //#region Удочка с морковкой
    e.remove({ id: 'minecraft:carrot_on_a_stick' })
    //#endregion

    //#region Удочка с грибом
    e.remove({ id: 'minecraft:warped_fungus_on_a_stick' })
    //#endregion

    //#region Щит
    e.remove({ id: 'gtceu:shaped/shield' })
    //#endregion

    //#region Кольчужная броня
    e.remove({ id: 'gtceu:shaped/chainmail_boots'})
    e.remove({ id: 'gtceu:shaped/chainmail_leggings'})
    e.remove({ id: 'gtceu:shaped/chainmail_chestplate'})
    e.remove({ id: 'gtceu:shaped/chainmail_helmet'})
    //#endregion

    //#region Железная броня
    e.remove({ id: 'gtceu:shaped/iron_helmet' })
    e.remove({ id: 'gtceu:shaped/iron_chestplate' })
    e.remove({ id: 'gtceu:shaped/iron_leggings' })
    e.remove({ id: 'gtceu:shaped/iron_boots' })

    e.remove({ id: 'gtceu:shaped/iron_horse_armor' })
    //#endregion

    //#region Золотая броня
    e.remove({ id: 'gtceu:shaped/golden_helmet' })
    e.remove({ id: 'gtceu:shaped/golden_chestplate' })
    e.remove({ id: 'gtceu:shaped/golden_leggings' })
    e.remove({ id: 'gtceu:shaped/golden_boots' })

    e.remove({ id: 'gtceu:shaped/golden_horse_armor' })
    //#endregion

    //#region Алмазная броня
    e.remove({ id: 'gtceu:shaped/diamond_helmet' })
    e.remove({ id: 'gtceu:shaped/diamond_chestplate' })
    e.remove({ id: 'gtceu:shaped/diamond_leggings' })
    e.remove({ id: 'gtceu:shaped/diamond_boots' })

    e.remove({ id: 'gtceu:shaped/diamond_horse_armor' })
    //#endregion

    //#region Незеритовая броня
    e.remove({ id: 'minecraft:netherite_helmet_smithing' })
    e.remove({ id: 'minecraft:netherite_chestplate_smithing' })
    e.remove({ id: 'minecraft:netherite_leggings_smithing' })
    e.remove({ id: 'minecraft:netherite_boots_smithing' })
    //#endregion

    //#region Лук
    e.remove({ id: 'gtceu:shaped/bow' })
    e.remove({ id: 'gtceu:assembler/bow' })

    e.recipes.gtceu.assembler('tfg:bow')             
        .itemInputs('3x #forge:string', '3x #forge:rods/wooden')
        .itemOutputs('minecraft:bow')
        .EUt(4).duration(100)
    //#endregion

    //#region Арбалет
    e.remove({ id: 'minecraft:crossbow' })
    e.remove({ id: 'tfc:crafting/vanilla/crossbow' })

    e.shaped('6x minecraft:activator_rail', [
        'ABA',
        'CAC',
        'sAf'
    ], {
        A: '#forge:rods/long/wood',
        B: '#tfg:all_iron_rings',
        C: '#forge:string',
        s: '#forge:tools/screwdrivers',
        f: '#forge:tools/files',
    }).id('tfg:workbench/crossbow')

    //#endregion

    //#region Золотое яблоко
    e.remove({ id: 'gtceu:chemical_reactor/golden_apple' })

    e.recipes.gtceu.chemical_reactor('tfg:golden_apple')             
        .itemInputs('#tfg:all_apples', '8x #forge:ingots/gold')
        .itemOutputs('minecraft:golden_apple')
        .EUt(30).duration(50)
    //#endregion

    //#region Зачарованное золотое яблоко
    e.remove({ id: 'gtceu:chemical_reactor/notch_apple' })
    
    e.recipes.gtceu.chemical_reactor('tfg:notch_apple')             
        .itemInputs('#tfg:all_apples', '8x minecraft:gold_block')
        .itemOutputs('minecraft:enchanted_golden_apple')
        .EUt(30).duration(50)
    //#endregion

    //#region Золотая морковь
    e.remove({ id: 'gtceu:chemical_reactor/golden_carrot' })

    e.recipes.gtceu.chemical_reactor('tfg:golden_carrot')             
        .itemInputs('tfc:food/carrot', '#forge:nuggets/gold')
        .itemOutputs('minecraft:golden_carrot')
        .EUt(30).duration(50)
    //#endregion

    //#region Жаренная картошка
    e.remove({ id: 'minecraft:baked_potato' })
    e.remove({ id: 'minecraft:baked_potato_from_smoking' })
    //#endregion

    //#region Гнилая картошка
    e.remove({ id: 'create:haunting/poisonous_potato' })
    //#endregion

    //#region Высушенные водросли
    e.remove({ id: 'minecraft:dried_kelp' })
    e.remove({ id: 'minecraft:dried_kelp_from_smelting' })
    e.remove({ id: 'minecraft:dried_kelp_from_smoking' })
    //#endregion

    //#region Жаренная коровятина
    e.remove({ id: 'minecraft:cooked_beef' })
    e.remove({ id: 'minecraft:cooked_beef_from_smoking' })
    //#endregion

    //#region Жаренная свинина
    e.remove({ id: 'minecraft:cooked_porkchop' })
    e.remove({ id: 'minecraft:cooked_porkchop_from_smoking' })
    //#endregion

    //#region Жаренная курятина
    e.remove({ id: 'minecraft:cooked_chicken' })
    e.remove({ id: 'minecraft:cooked_chicken_from_smoking' })
    //#endregion

    //#region Жаренная козлятина
    e.remove({ id: 'minecraft:cooked_mutton' })
    e.remove({ id: 'minecraft:cooked_mutton_from_smoking' })
    //#endregion

    //#region Жаренный зайчатина
    e.remove({ id: 'minecraft:cooked_rabbit' })
    e.remove({ id: 'minecraft:cooked_rabbit_from_smoking' })
    //#endregion

    //#region Жаренный Cod
    e.remove({ id: 'minecraft:cooked_cod' })
    e.remove({ id: 'minecraft:cooked_cod_from_smoking' })
    //#endregion

    //#region Жаренный Salmon
    e.remove({ id: 'minecraft:cooked_salmon' })
    e.remove({ id: 'minecraft:cooked_salmon_from_smoking' })
    //#endregion

    //#region Хлеб
    e.remove({ id: 'minecraft:bread' })
    e.remove({ id: 'create:smelting/bread' })
    //#endregion

    //#region Печеньки
    e.remove({ id: 'minecraft:cookie' })
    //#endregion

    //#region Торт
    e.remove({ id: 'minecraft:cake' })
    e.remove({ id: 'create:crafting/curiosities/cake' })
    //#endregion

    //#region Грибной суп
    e.remove({ id: 'createlowheated:mixing/minecraft/mushroom_stew' })
    //#endregion

    //#region Свекольный суп
    e.remove({ id: 'createlowheated:mixing/minecraft/beetroot_soup' })
    //#endregion

    //#region Кроличий суп
    e.remove({ id: 'createlowheated:mixing/minecraft/rabbit_stew' })
    //#endregion

    //#region Уголь
    e.remove({ id: 'minecraft:coal_from_smelting_coal_ore' })
    e.remove({ id: 'minecraft:coal_from_smelting_deepslate_coal_ore' })
    
    e.remove({ id: 'minecraft:coal_from_blasting_coal_ore' })
    e.remove({ id: 'minecraft:coal_from_blasting_deepslate_coal_ore' })
    //#endregion

    //#region Сырая железная руда
    e.remove({ id: 'minecraft:raw_iron' })
    //#endregion

    //#region Сырая медная руда
    e.remove({ id: 'minecraft:raw_copper' })
    //#endregion

    //#region Сырая золотая руда
    e.remove({ id: 'minecraft:raw_gold' })
    //#endregion

    //#region Изумруды
    e.remove({ id: 'minecraft:emerald_from_smelting_emerald_ore' })
    e.remove({ id: 'minecraft:emerald_from_smelting_deepslate_emerald_ore' })
    
    e.remove({ id: 'minecraft:emerald_from_blasting_emerald_ore' })
    e.remove({ id: 'minecraft:emerald_from_blasting_deepslate_emerald_ore' })
    //#endregion

    //#region Лазурит
    e.remove({ id: 'minecraft:lapis_lazuli_from_smelting_lapis_ore' })
    e.remove({ id: 'minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore' })
    
    e.remove({ id: 'minecraft:lapis_lazuli_from_blasting_lapis_ore' })
    e.remove({ id: 'minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore' })
    //#endregion

    //#region Алмазы
    e.remove({ id: 'minecraft:diamond_from_smelting_diamond_ore' })
    e.remove({ id: 'minecraft:diamond_from_smelting_deepslate_diamond_ore' })

    e.remove({ id: 'minecraft:diamond_from_blasting_diamond_ore' })
    e.remove({ id: 'minecraft:diamond_from_blasting_deepslate_diamond_ore' })
    //#endregion

    //#region Кварц
    e.remove({ id: 'minecraft:quartz' })
    e.remove({ id: 'minecraft:quartz_from_blasting' })
    e.remove({ id: 'create:crushing/diorite' })
    //#endregion

    //#region Железный самородок
    e.remove({ id: 'minecraft:iron_nugget_from_smelting' })
    e.remove({ id: 'minecraft:iron_nugget_from_blasting' })
    e.remove({ id: 'create:crushing/crimsite' })
    e.remove({ id: 'create:crushing/tuff_recycling' })
    e.remove({ id: 'create:crushing/crimsite_recycling' })
    e.remove({ id: 'create:crushing/tuff' })
    e.remove({ id: 'create:splashing/crushed_raw_iron' })
    e.remove({ id: 'create:splashing/gravel' })
    //#endregion

    //#region Золотой самородок
    e.remove({ id: 'minecraft:gold_nugget_from_smelting' })
    e.remove({ id: 'minecraft:gold_nugget_from_blasting' })
    e.remove({ id: 'create:crushing/ochrum_recycling' })
    e.remove({ id: 'create:crushing/tuff_recycling' })
    e.remove({ id: 'create:crushing/tuff' })
    e.remove({ id: 'create:crushing/ochrum' })
    e.remove({ id: 'create:splashing/crushed_raw_gold' })
    //#endregion

    //#region Железо
    e.remove({ id: 'minecraft:iron_ingot_from_smelting_iron_ore' })
    e.remove({ id: 'minecraft:iron_ingot_from_smelting_deepslate_iron_ore' })
    
    e.remove({ id: 'minecraft:iron_ingot_from_blasting_iron_ore' })
    e.remove({ id: 'minecraft:iron_ingot_from_blasting_deepslate_iron_ore' })
    //#endregion

    //#region Медь
    e.remove({ id: 'minecraft:copper_ingot_from_smelting_copper_ore' })
    e.remove({ id: 'minecraft:copper_ingot_from_smelting_deepslate_copper_ore' })
    
    e.remove({ id: 'minecraft:copper_ingot_from_blasting_copper_ore' })
    e.remove({ id: 'minecraft:copper_ingot_from_blasting_deepslate_copper_ore' })
    //#endregion

    //#region Золото
    e.remove({ id: 'minecraft:gold_ingot_from_smelting_gold_ore' })
    e.remove({ id: 'minecraft:gold_ingot_from_smelting_deepslate_gold_ore' })
    e.remove({ id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore' })
    
    e.remove({ id: 'minecraft:gold_ingot_from_blasting_gold_ore' })
    e.remove({ id: 'minecraft:gold_ingot_from_blasting_deepslate_gold_ore' })
    e.remove({ id: 'minecraft:gold_ingot_from_blasting_nether_gold_ore' })
    //#endregion

    //#region Незеритовый лом
    e.remove({ id: 'minecraft:netherite_scrap' })
    e.remove({ id: 'minecraft:netherite_scrap_from_blasting' })
    //#endregion

    //#region Незеритовый слиток
    e.remove({ id: 'minecraft:netherite_ingot' })
    //#endregion

    //#region Палки
    e.remove({ id: 'gtceu:shaped/stick_normal' })
    e.remove({ id: 'minecraft:stick_from_bamboo_item' })
    //#endregion

    //#region Кремний
    e.remove({ id: 'gtceu:shapeless/gravel_to_flint' })
    e.remove({ id: 'gtceu:sifter/gravel_sifting' })

    e.shapeless('minecraft:flint', [
        '#tfc:rock/gravel',
        '#forge:tools/mortars'
    ]).id('tfg:workbench/gravel_to_flint')

    e.recipes.gtceu.sifter('tfg:gravel_sifting')             
        .itemInputs('#tfc:rock/gravel')
        .itemOutputs('minecraft:flint')
        .chancedOutput('minecraft:flint', 9000, 0)
        .chancedOutput('minecraft:flint', 8000, 0)
        .chancedOutput('minecraft:flint', 6000, 0)
        .chancedOutput('minecraft:flint', 3300, 0)
        .chancedOutput('minecraft:flint', 2500, 0)
        .duration(100)
        .EUt(16)

    //#endregion

    //#region Кожа
    e.remove({ id: 'minecraft:leather' })
    e.remove({ id: 'create:crushing/leather_horse_armor' })
    e.remove({ id: 'create:milling/saddle' })
    //#endregion

    //#region Светящийся мешок с чернилами
    e.recipes.gtceu.assembler('tfg:glow_ink_sac')             
        .itemInputs('minecraft:ink_sac')
        .inputFluids(Fluid.of('gtceu:glowstone', 144))
        .itemOutputs('minecraft:glow_ink_sac')
        .EUt(16).duration(100)
    //#endregion

    //#region Слаймболл
    e.remove({ id: 'create:crafting/appliances/slime_ball' })
    //#endregion

    //#region Глина
    e.remove({ id: 'create:milling/dripstone_block' })
    e.remove({ id: 'create:splashing/sand' })
    e.remove({ id: 'create:splashing/crushed_raw_copper' })
    //#endregion

    //#region Призмарин
    e.remove({ id: 'create:haunting/lapis_recycling' })
    //#endregion

    //#region Прожаренный фрукт хоруса
    e.remove({ id: 'minecraft:popped_chorus_fruit' })
    //#endregion
    
    //#region Красители

    //#region Белый
    e.remove({ id: 'minecraft:white_dye_from_lily_of_the_valley' })

    e.remove({ id: 'gtceu:extractor/lily_of_the_valley_dye' })

    e.remove({ id: 'create:milling/lily_of_the_valley' })
    e.remove({ id: 'create:milling/azure_bluet' })
    e.remove({ id: 'create:milling/compat/botania/white_petal' })
    e.remove({ id: 'create:milling/white_tulip' })
    e.remove({ id: 'create:milling/oxeye_daisy' })
    
    e.recipes.gtceu.extractor('tfg:white_dye')             
        .itemInputs('#tfc:makes_white_dye')
        .itemOutputs('2x minecraft:white_dye')
        .EUt(2).duration(200)
        
    e.recipes.createMilling('2x minecraft:white_dye', '#tfc:makes_white_dye')
        .id('tfg:milling/white_dye')
    //#endregion
    
    //#region Светло-серый
    e.remove({ id: 'minecraft:light_gray_dye_from_azure_bluet' })
    e.remove({ id: 'minecraft:light_gray_dye_from_white_tulip' })
    e.remove({ id: 'minecraft:light_gray_dye_from_oxeye_daisy' })

    e.remove({ id: 'tfc:crafting/vanilla/light_gray_dye_from_native_silver' })
    
    e.remove({ id: 'gtceu:extractor/white_tulip_dye' })
    e.remove({ id: 'gtceu:extractor/azure_bluet_dye' })
    e.remove({ id: 'gtceu:extractor/oxeye_daisy_dye' })

    e.remove({ id: 'create:milling/blue_orchid' })
    e.remove({ id: 'create:milling/azure_bluet' })
    e.remove({ id: 'create:milling/compat/botania/light_gray_petal' })
    e.remove({ id: 'create:milling/oxeye_daisy' })

    e.recipes.gtceu.extractor('tfg:light_gray_dye')             
        .itemInputs('#tfc:makes_light_gray_dye')
        .itemOutputs('2x minecraft:light_gray_dye')
        .EUt(2).duration(200)

    e.recipes.createMilling('2x minecraft:light_gray_dye', '#tfc:makes_light_gray_dye')
        .id('tfg:milling/light_gray_dye')
    //#endregion

    //#region Серый
    e.remove({ id: 'tfc:crafting/vanilla/gray_dye_from_cassiterite' })
    e.remove({ id: 'tfc:crafting/vanilla/gray_dye_from_magnetite' })
    e.remove({ id: 'tfc:crafting/vanilla/gray_dye_from_sphalerite' })
    e.remove({ id: 'tfc:crafting/vanilla/gray_dye_from_tetrahedrite' })
    e.remove({ id: 'create:milling/compat/botania/gray_petal' })
    //#endregion

    //#region Черный
    e.remove({ id: 'minecraft:black_dye_from_wither_rose' })
    e.remove({ id: 'gtceu:extractor/wither_rose_dye' })
    e.remove({ id: 'tfc:crafting/vanilla/black_dye_from_charcoal' })
    e.remove({ id: 'tfc:crafting/vanilla/black_dye_from_coke' })
    e.remove({ id: 'create:milling/compat/botania/black_petal' })
    e.remove({ id: 'create:milling/wither_rose' })
    //#endregion

    //#region Коричневый
    e.remove({ id: 'minecraft:brown_dye' })
    e.remove({ id: 'tfc:crafting/vanilla/brown_dye_from_garnierite' })
    e.remove({ id: 'create:milling/compat/botania/brown_petal' })
    e.remove({ id: 'create:milling/cocoa_beans' })

    e.recipes.gtceu.extractor('tfg:brown_dye')             
        .itemInputs('#tfc:makes_brown_dye')
        .itemOutputs('2x minecraft:brown_dye')
        .EUt(2).duration(200)

    e.recipes.createMilling('2x minecraft:brown_dye', '#tfc:makes_brown_dye')
        .id('tfg:milling/brown_dye')
    //#endregion

    //#region Красный
    e.remove({ id: 'minecraft:red_dye_from_poppy' })
    e.remove({ id: 'minecraft:red_dye_from_tulip' })
    e.remove({ id: 'minecraft:red_dye_from_rose_bush' })
    e.remove({ id: 'minecraft:red_dye_from_beetroot' })

    e.remove({ id: 'tfc:crafting/vanilla/red_dye_from_hematite' })

    e.remove({ id: 'gtceu:extractor/rose_bush_dye' })
    e.remove({ id: 'gtceu:extractor/red_tulip_dye' })
    e.remove({ id: 'gtceu:extractor/poppy_dye' })
    e.remove({ id: 'gtceu:extractor/beetroot_dye' })

    e.remove({ id: 'coralstfc:milling/coral_block_red' })
    e.remove({ id: 'create:milling/red_tulip' })
    e.remove({ id: 'create:milling/rose_bush' })
    e.remove({ id: 'coralstfc:milling/coral_red' })
    e.remove({ id: 'create:milling/poppy' })
    e.remove({ id: 'create:milling/compat/botania/red_petal' })

    e.recipes.gtceu.extractor('tfg:red_dye')             
        .itemInputs('1x #tfc:makes_red_dye')
        .itemOutputs('2x minecraft:red_dye')
        .EUt(2).duration(200)
        
    e.recipes.createMilling('2x minecraft:red_dye', '#tfc:makes_red_dye')
        .id('tfg:milling/red_dye')
    //#endregion

    //#region Оранжевый
    e.remove({ id: 'minecraft:orange_dye_from_orange_tulip' })
    e.remove({ id: 'minecraft:orange_dye_from_torchflower' })

    e.remove({ id: 'tfc:crafting/vanilla/orange_dye_from_sylvite' })
    e.remove({ id: 'tfc:crafting/vanilla/orange_dye_from_native_copper' })

    e.remove({ id: 'gtceu:extractor/orange_tulip_dye' })
    e.remove({ id: 'gtceu:extractor/torchflower_dye' })

    e.remove({ id: 'create:milling/orange_tulip' })
    e.remove({ id: 'create:milling/compat/botania/orange_petal' })
    e.remove({ id: 'create:milling/sunflower' })

    e.recipes.gtceu.extractor('tfg:orange_dye')             
        .itemInputs('#tfc:makes_orange_dye')
        .itemOutputs('2x minecraft:orange_dye')
        .duration(200)
        .EUt(2)

    e.recipes.createMilling('2x minecraft:orange_dye', '#tfc:makes_orange_dye')
        .id('tfg:milling/orange_dye')
    //#endregion

    //#region Желтый
    e.remove({ id: 'minecraft:yellow_dye_from_sunflower' })
    e.remove({ id: 'minecraft:yellow_dye_from_dandelion' })

    e.remove({ id: 'tfc:crafting/vanilla/yellow_dye_from_limonite' })

    e.remove({ id: 'gtceu:extractor/sunflower_dye' })
    e.remove({ id: 'gtceu:extractor/dandelion_dye' })

    e.remove({ id: 'coralstfc:milling/coral_block_yellow' })
    e.remove({ id: 'create:milling/compat/botania/yellow_petal' })
    e.remove({ id: 'coralstfc:milling/coral_yellow' })
    e.remove({ id: 'create:milling/sunflower' })
    e.remove({ id: 'create:milling/dandelion' })
    e.remove({ id: 'create:milling/oxeye_daisy' })

    e.recipes.gtceu.extractor('tfg:yellow_dye')             
        .itemInputs('#tfc:makes_yellow_dye')
        .itemOutputs('2x minecraft:yellow_dye')
        .EUt(2).duration(200)
        
    e.recipes.createMilling('2x minecraft:yellow_dye', '#tfc:makes_yellow_dye')
        .id('tfg:milling/yellow_dye')


    //#endregion

    //#region Лаймовый
    e.remove({ id: 'minecraft:lime_dye_from_smelting' })

    e.remove({ id: 'gtceu:extractor/sea_pickle_dye' })

    e.remove({ id: 'create:milling/pink_tulip' })
    e.remove({ id: 'create:milling/compat/botania/lime_petal' })
    e.remove({ id: 'create:milling/red_tulip' })
    e.remove({ id: 'create:milling/lily_of_the_valley' })
    e.remove({ id: 'create:milling/orange_tulip' })
    e.remove({ id: 'create:milling/white_tulip' })
    e.remove({ id: 'create:milling/sea_pickle' })
    
    e.recipes.gtceu.extractor('tfg:lime_dye')             
        .itemInputs('#tfc:makes_lime_dye')
        .itemOutputs('2x minecraft:lime_dye')
        .duration(200)
        .EUt(2)

    e.recipes.createMilling('2x minecraft:lime_dye', '#tfc:makes_lime_dye')
        .id('tfg:milling/lime_dye')
    //#endregion

    //#region Зеленый
    e.remove({ id: 'tfc:crafting/vanilla/green_dye_from_bismuthinite' })
    e.remove({ id: 'tfc:crafting/vanilla/green_dye_from_malachite' })

    e.remove({ id: 'minecraft:green_dye' })

    e.remove({ id: 'create:milling/rose_bush' })
    e.remove({ id: 'create:milling/compat/botania/green_petal' })
    e.remove({ id: 'create:milling/cactus' })
    e.remove({ id: 'create:milling/poppy' })
    e.remove({ id: 'create:milling/sea_pickle' })

    e.recipes.gtceu.extractor('tfg:green_dye')             
        .itemInputs('#tfc:makes_green_dye')
        .itemOutputs('2x minecraft:green_dye')
        .duration(200)
        .EUt(2)

    e.recipes.createMilling('2x minecraft:green_dye', '#tfc:makes_green_dye')
        .id('tfg:milling/green_dye')
    //#endregion

    //#region Бирюзовый
    e.remove({ id: 'minecraft:cyan_dye_from_pitcher_plant' })
    e.remove({ id: 'gtceu:extractor/pitcher_dye' })
    e.remove({ id: 'create:milling/compat/botania/cyan_petal' })
    //#endregion

    //#region Светло-синий
    e.remove({ id: 'minecraft:light_blue_dye_from_blue_orchid' })
    e.remove({ id: 'gtceu:extractor/blue_orchid_dye' })
    e.remove({ id: 'create:milling/blue_orchid' })
    e.remove({ id: 'create:milling/compat/botania/light_blue_petal' })
    e.remove({ id: 'gtceu:extractor/blue_orchid_dye' })
    
    e.recipes.gtceu.extractor('tfg:light_blue_dye')             
        .itemInputs('#tfc:makes_light_blue_dye')
        .itemOutputs('2x minecraft:light_blue_dye')
        .EUt(2).duration(200)
        
    e.recipes.createMilling('2x minecraft:light_blue_dye', '#tfc:makes_light_blue_dye')
        .id('tfg:milling/light_blue_dye')
    //#endregion

    //#region Синий
    e.remove({ id: 'minecraft:blue_dye_from_cornflower' })
    e.remove({ id: 'minecraft:blue_dye' })
    e.remove({ id: 'tfc:crafting/vanilla/blue_dye_from_lapis_lazuli' })
    e.remove({ id: 'tfc:crafting/vanilla/blue_dye_from_graphite' })
    e.remove({ id: 'gtceu:extractor/cornflower_dye' })

    e.remove({ id: 'create:milling/cornflower' })
    e.remove({ id: 'create:milling/compat/botania/blue_petal' })
    e.remove({ id: 'create:milling/lapis_lazuli' })
    e.remove({ id: 'coralstfc:milling/coral_blue' })
    e.remove({ id: 'coralstfc:milling/coral_block_blue' })
    
    e.recipes.gtceu.extractor('tfg:blue_dye')             
        .itemInputs('#tfc:makes_blue_dye')
        .itemOutputs('2x minecraft:blue_dye')
        .EUt(2).duration(200)
        
    e.recipes.createMilling('2x minecraft:blue_dye', '#tfc:makes_blue_dye')
        .id('tfg:milling/blue_dye')
    //#endregion

    //#region Фиолетовый
    e.remove({ id: 'create:milling/allium' })
    e.remove({ id: 'create:milling/lilac' })
    e.remove({ id: 'create:milling/compat/botania/purple_petal' })
    e.remove({ id: 'coralstfc:milling/coral_purple' })
    e.remove({ id: 'coralstfc:milling/coral_block_purple' })
    
    e.recipes.gtceu.extractor('tfg:purple_dye')             
        .itemInputs('#tfc:makes_purple_dye')
        .itemOutputs('2x minecraft:purple_dye')
        .EUt(2).duration(200)

    e.recipes.createMilling('2x minecraft:purple_dye', '#tfc:makes_purple_dye')
        .id('tfg:milling/purple_dye')
    //#endregion

    //#region Пурпурный
    e.remove({ id: 'minecraft:magenta_dye_from_allium' })
    e.remove({ id: 'minecraft:magenta_dye_from_lilac' })

    e.remove({ id: 'gtceu:extractor/lilac_dye' })
    e.remove({ id: 'gtceu:extractor/allium_dye' })

    e.remove({ id: 'create:milling/compat/botania/magenta_petal' })
    e.remove({ id: 'create:milling/peony' })
    e.remove({ id: 'create:milling/allium' })
    e.remove({ id: 'create:milling/lilac' })
    
    e.recipes.gtceu.extractor('tfg:magenta_dye')             
        .itemInputs('#tfc:makes_magenta_dye')
        .itemOutputs('2x minecraft:magenta_dye')
        .EUt(2).duration(200)

    e.recipes.createMilling('2x minecraft:magenta_dye', '#tfc:makes_magenta_dye')
        .id('tfg:milling/magenta_dye')
    //#endregion

    //#region Розовый
    e.remove({ id: 'minecraft:pink_dye_from_pink_tulip' })
    e.remove({ id: 'minecraft:pink_dye_from_pink_petals' })
    e.remove({ id: 'minecraft:pink_dye_from_peony' })
    
    e.remove({ id: 'tfc:crafting/vanilla/pink_dye_from_kaolinite' })
    
    e.remove({ id: 'gtceu:extractor/pink_petals_dye' })
    e.remove({ id: 'gtceu:extractor/peony_dye' })
    e.remove({ id: 'gtceu:extractor/pink_tulip_dye' })
    
    e.remove({ id: 'create:milling/pink_tulip' })
    e.remove({ id: 'create:milling/peony' })
    e.remove({ id: 'create:milling/compat/botania/pink_petal' })
    e.remove({ id: 'create:milling/allium' })

    e.remove({ id: 'coralstfc:milling/coral_pink' })
    e.remove({ id: 'coralstfc:milling/coral_block_pink' })
     
    e.recipes.gtceu.extractor('tfg:pink_dye')             
        .itemInputs('#tfc:makes_pink_dye')
        .itemOutputs('2x minecraft:pink_dye')
        .EUt(2).duration(200)

    e.recipes.createMilling('2x minecraft:pink_dye', '#tfc:makes_pink_dye')
        .id('tfg:milling/pink_dye')

    //#endregion


    //#endregion

    //#endregion


























        // e.shaped('minecraft:', [
    //     'ABA',
    //     'BCB',
    //     'DED'
    // ], {
    //     A: '',
    //     B: '',
    //     C: '',
    //     D: '',
    //     E: '',
    // }).id('tfg:workbench/')


    //#region 1
    //e.remove({ id: '' })
    //#endregion

    //#region 
    //#endregion

    //#region 1
    //e.remove({ id: '' })

    //#endregion

    //#region Выход: Бумага


    e.remove({ id: 'gtceu:shaped/paper' })
    e.remove({ id: 'create:pressing/sugar_cane' })

    e.remove({ id: 'gtceu:chemical_bath/paper_from_sugar_cane' })
    e.remove({ id: 'gtceu:chemical_bath/paper_from_sugar_cane_distilled' })

    e.recipes.gtceu.chemical_bath('tfg:paper_from_papyrus')             
        .itemInputs('tfc:papyrus')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('minecraft:paper')
        .EUt(7).duration(100)

    e.recipes.gtceu.chemical_bath('tfg:paper_from_papyrus_distilled')             
        .itemInputs('tfc:papyrus')
        .inputFluids(Fluid.of('gtceu:distilled_water', 100))
        .itemOutputs('minecraft:paper')
        .EUt(7).duration(100)

    // e.remove({ id: 'gtceu:shaped/paper' })

    // e.remove({ id: 'gtceu:chemical_bath/paper_from_sugar_cane' })
    // e.remove({ id: 'gtceu:chemical_bath/paper_from_sugar_cane_distilled' })

    // e.recipes.gtceu.chemical_bath('paper_from_papyrus_distilled')             
    //     .itemInputs('tfc:papyrus')
    //     .inputFluids(Fluid.of('gtceu:distilled_water', 100))
    //     .itemOutputs('minecraft:paper')
    //     .duration(100)
    //     .EUt(7)

    // e.recipes.gtceu.chemical_bath('paper_from_papyrus')             
    //     .itemInputs('tfc:papyrus')
    //     .inputFluids(Fluid.of('minecraft:water', 100))
    //     .itemOutputs('minecraft:paper')
    //     .duration(100)
    //     .EUt(7)

    //#endregion
























        // e.shaped('minecraft:', [
    //     'ABA',
    //     'BCB',
    //     'DED'
    // ], {
    //     A: '',
    //     B: '',
    //     C: '',
    //     D: '',
    //     E: '',
    // }).id('tfg:workbench/')


    //#region 1
    //e.remove({ id: '' })
    //#endregion

    //#region 
    //#endregion

    //#region 1
    //e.remove({ id: '' })
    //#endregion

    

    //#region Выход: Сахар

    // e.remove({ id: 'gtceu:shaped/sugar' })
    // e.remove({ id: 'minecraft:sugar_from_honey_bottle' })
    // e.remove({ id: 'gtceu:macerator/macerate_sugar_cane' })

    // e.recipes.gtceu.centrifuge('sugar')             
    //     .itemInputs('tfc:food/sugarcane')
    //     .inputFluids(Fluid.of('minecraft:water', 600))
    //     .itemOutputs('minecraft:sugar')
    //     .duration(800)
    //     .EUt(6)

    //#endregion

    //#region Выход: Ферментированный паучий глаз

    // e.remove({ id: 'minecraft:fermented_spider_eye' })
    // e.remove({ id: 'gtceu:mixer/fermented_spider_eye_red' })
    // e.remove({ id: 'gtceu:mixer/fermented_spider_eye_brown' })
    // e.remove({ id: 'gtceu:create_mixer/fermented_spider_eye_red' })
    // e.remove({ id: 'gtceu:create_mixer/fermented_spider_eye_brown' })

    //#endregion

    //#region Выход: Светящийся арбуз

    // e.shaped('minecraft:glistering_melon_slice', [
    //     'AAA', 
    //     'ABA',
    //     'AAA'  
    // ], {
    //     A: '#forge:nuggets/gold', 
    //     B: 'tfc:food/melon_slice'   
    // }).id('minecraft:glistering_melon_slice')

    // e.recipes.gtceu.chemical_reactor('glistening_melon_slice')             
    //     .itemInputs('tfc:food/melon_slice', '6x #forge:nuggets/gold')
    //     .itemOutputs('minecraft:glistering_melon_slice')
    //     .duration(50)
    //     .EUt(30)

    // e.recipes.gtceu.large_chemical_reactor('glistening_melon_slice')             
    //     .itemInputs('tfc:food/melon_slice', '6x #forge:nuggets/gold')
    //     .itemOutputs('minecraft:glistering_melon_slice')
    //     .duration(50)
    //     .EUt(30)

    //#endregion

    

    //#region Выход: Книга

    // e.remove({ id: 'gtceu:extractor/bookshelf_extraction' })

    // e.shapeless('minecraft:book', [
    //     'minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:leather'
    // ]).id('minecraft:book')

    //#endregion

    //#region Шаблоны брони
    // e.remove({id: 'minecraft:wild_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:wayfinder_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:ward_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:vex_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:tide_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:spire_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:snout_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:silence_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:shaper_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:sentry_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:rib_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:raiser_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:host_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:eye_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:dune_armor_trim_smithing_template_smithing_trim'})
    // e.remove({id: 'minecraft:coast_armor_trim_smithing_template_smithing_trim'})

    // e.remove({ id: 'minecraft:coast_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:vex_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:host_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:rib_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:spire_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:tide_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:eye_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:raiser_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:wild_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:shaper_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:snout_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:dune_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:netherite_upgrade_smithing_template' })
    // e.remove({ id: 'minecraft:wayfinder_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:ward_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:silence_armor_trim_smithing_template' })
    // e.remove({ id: 'minecraft:sentry_armor_trim_smithing_template' })
    //#endregion
}

