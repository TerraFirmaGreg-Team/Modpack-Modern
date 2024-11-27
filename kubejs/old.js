const processNetherWood = (woodName) => {
        
    const anyLogs = `#minecraft:${woodName}_stems`

    const log = Item.of(`minecraft:${woodName}_stem`)
    const wood = Item.of(`minecraft:${woodName}_hyphae`)

    const strippedLog = Item.of(`minecraft:stripped_${woodName}_stem`)
    const strippedWood = Item.of(`minecraft:stripped_${woodName}_hyphae`)

    const lumber = Item.of(`tfg:${woodName}_lumber`)

    const plank = Item.of(`minecraft:${woodName}_planks`)
    const stair = Item.of(`minecraft:${woodName}_stairs`)
    const slab = Item.of(`minecraft:${woodName}_slab`)

    const fence = Item.of(`minecraft:${woodName}_fence`)
    const fenceGate = Item.of(`minecraft:${woodName}_fence_gate`)

    const door = Item.of(`minecraft:${woodName}_door`)
    const trapdoor = Item.of(`minecraft:${woodName}_trapdoor`)

    const pressurePlate = Item.of(`minecraft:${woodName}_pressure_plate`)
    const button = Item.of(`minecraft:${woodName}_button`)

    const sign = Item.of(`minecraft:${woodName}_sign`)
    const hangingSign = Item.of(`minecraft:${woodName}_hanging_sign`)

    const roofing = Item.of(`alekiroofs:${woodName}_roofing`)
    
    const window = Item.of(`create:${woodName}_window_pane`)
    const windowPane = Item.of(`create:${woodName}_window_pane`)

    const incompleteTrackNarrow = Item.of(`railways:track_incomplete_${woodName}_narrow`)
    const incompleteTrack = Item.of(`railways:track_incomplete_${woodName}`)
    const incompleteTrackWide = Item.of(`railways:track_incomplete_${woodName}_wide`)

    const trackNarrow = Item.of(`railways:track_${woodName}_narrow`)
    const track = Item.of(`railways:track_${woodName}`)
    const trackWide = Item.of(`railways:track_${woodName}_wide`)

    //#region Бревно
    e.shaped(log, [
        'A',
        's'
    ], {
        A: wood,
        s: '#forge:tools/saws'
    }).id(`tfg:workbench/${woodName}_log`)

    e.recipes.create.cutting([log, Item.of('4x gtceu:wood_dust').withChance(0.75)], wood)
        .id(`tfg:create_cutting/${woodName}_log`)

    e.recipes.gtceu.cutter(`tfg:${woodName}_log`)             
        .itemInputs(wood)
        .circuit(0)
        .itemOutputs(log)
        .itemOutputs('4x gtceu:wood_dust')
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Цельное бревно
    e.remove({ id: `minecraft:${woodName}_hyphae` })

    e.shaped(wood, [
        'AA',
        ' s'
    ], {
        A: log,
        s: '#forge:tools/saws'
    }).id(`tfg:workbench/${woodName}_wood`)

    e.recipes.create.cutting(wood.withChance(0.75), log)
        .id(`tfg:create_cutting/${woodName}_wood`)

    e.recipes.gtceu.cutter(`tfg:${woodName}_wood`)             
        .itemInputs(log.copyWithCount(2))
        .circuit(0)
        .itemOutputs(wood)
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion
    
    //#region Обтесанное бревно
    e.remove({ id: `create:cutting/crimson_stem` })

    e.shaped(strippedLog, [
        'A',
        's'
    ], {
        A: strippedWood,
        s: '#forge:tools/saws'
    }).id(`tfg:workbench/stripped_${woodName}_log`)

    e.recipes.create.cutting(strippedLog, log)
        .id(`tfg:create_cutting/stripped_${woodName}_log`)

    e.recipes.gtceu.cutter(`tfg:stripped_${woodName}_log`)             
        .itemInputs(log)
        .circuit(1)
        .itemOutputs(strippedLog)
        .itemOutputs('4x gtceu:wood_dust')
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Обтесанное цельное бревно
    e.remove({ id: `minecraft:stripped_${woodName}_hyphae` })
    e.remove({ id: `create:cutting/${woodName}_hyphae` })

    e.shaped(strippedWood, [
        'AA',
        ' s'
    ], {
        A: strippedLog,
        s: '#forge:tools/saws'
    }).id(`tfg:workbench/stripped_${woodName}_wood`)

    e.recipes.create.cutting(strippedWood, wood)
        .id(`tfg:create_cutting/stripped_${woodName}_wood`)

    e.recipes.gtceu.cutter(`tfg:stripped_${woodName}_wood`)             
        .itemInputs(wood)
        .circuit(1)
        .itemOutputs(strippedWood)
        .itemOutputs('1x gtceu:wood_dust')
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Пиломатериалы (TFC)

    //#region Из бревен
    e.shaped(lumber.copyWithCount(8), [
        's',
        'A'
    ], {
        A: anyLogs,
        s: '#forge:tools/saws'
    }).id(`tfg:workbench/${woodName}_lumber_from_logs_saw`)

    e.recipes.create.cutting(lumber.copyWithCount(12), anyLogs)
        .id(`tfg:create_cutting/${woodName}_lumber_from_logs`)

    e.recipes.gtceu.cutter(`tfg:${woodName}_lumber_from_logs`)             
        .itemInputs(anyLogs)
        .circuit(2)
        .itemOutputs(lumber.copyWithCount(16))
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Из досок
    e.shaped(lumber.copyWithCount(4), [
        's',
        'A'
    ], {
        A: plank,
        s: '#forge:tools/saws'
    }).id(`tfg:workbench/${woodName}_lumber_from_planks_saw`)

    e.recipes.create.cutting(lumber.copyWithCount(3), plank)
        .id(`tfg:create_cutting/${woodName}_lumber_from_planks`)

    e.recipes.gtceu.cutter(`tfg:${woodName}_lumber_from_planks`)             
        .itemInputs(plank)
        .circuit(0)
        .itemOutputs(lumber.copyWithCount(4))
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Из ступенек
    e.shaped(lumber.copyWithCount(1), [
        'A',
        's'
    ], {
        A: stair,
        s: '#forge:tools/saws'
    }).id(`tfg:workbench//${woodName}_lumber_from_stairs_saw`)

    e.recipes.create.cutting(lumber.copyWithCount(2), stair)
        .id(`tfg:create_cutting/${woodName}_lumber_from_stairs`)

    e.recipes.gtceu.cutter(`tfg:${woodName}_lumber_from_stairs`)             
        .itemInputs(stair)
        .circuit(2)
        .itemOutputs(lumber.copyWithCount(3))
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Из полублоков
    e.shaped(lumber.copyWithCount(1), [
        'A',
        's'
    ], {
        A: slab,
        s: '#forge:tools/saws'
    }).id(`tfg:workbench/${woodName}_lumber_from_slab_saw`)

    e.recipes.create.cutting([lumber, lumber.withChance(0.5)], slab)
        .id(`tfg:create_cutting/${woodName}_lumber_from_slab`)

    e.recipes.gtceu.cutter(`tfg:${woodName}_lumber_from_slab`)             
        .itemInputs(slab)
        .circuit(2)
        .itemOutputs(lumber.copyWithCount(2))
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#endregion

    //#region Доски
    e.remove({ id: `gtceu:shapeless/${woodName}_planks` })
    e.remove({ id: `gtceu:shaped/${woodName}_planks_saw` })
    e.remove({ id: `gtceu:cutter/${woodName}_planks_distilled_water` })
    e.remove({ id: `gtceu:cutter/${woodName}_planks` })
    e.remove({ id: `gtceu:cutter/${woodName}_planks_water` })
    e.remove({ id: `create:cutting/stripped_${woodName}_stem` })
    e.remove({ id: `create:cutting/stripped_${woodName}_hyphae` })

    e.shaped(plank, [
        'AA',
        'AA'
    ], {
        A: lumber
    }).id(`tfg:workbench/${woodName}_planks`)

    e.recipes.create.cutting(plank.copyWithCount(3), anyLogs)
        .id(`tfg:create_cutting/${woodName}_planks`)

    e.recipes.gtceu.cutter(`tfg:${woodName}_planks`)             
        .itemInputs(anyLogs)
        .circuit(3)
        .itemOutputs(plank.copyWithCount(6))
        .itemOutputs('1x gtceu:wood_dust')
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Ступень
    e.remove({ id: `minecraft:${woodName}_stairs` })
    e.remove({ id: `everycomp:c/minecraft/${woodName}_stairs_from_${woodName}_planks_stonecutting` })
    e.remove({ id: `gtceu:assembler/${woodName}_stairs` })

    e.shaped(stair, [
        'As'  
    ], {
        A: plank,
        s: '#forge:tools/saws'
    }).id(`tfg:workbench/${woodName}_stairs_saw`)

    e.recipes.create.cutting(stair.copyWithCount(4), anyLogs)
        .id(`tfg:create_cutting/${woodName}_stairs_from_logs`)

    e.recipes.create.cutting([stair, Item.of('1x gtceu:small_wood_dust')], plank)
        .id(`tfg:create_cutting/${woodName}_stairs_from_planks`)

    e.recipes.gtceu.cutter(`tfg:${woodName}_stairs_from_logs`)             
        .itemInputs(anyLogs)
        .circuit(4)
        .itemOutputs(stair.copyWithCount(8))
        .itemOutputs('1x gtceu:wood_dust')
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)

    e.recipes.gtceu.cutter(`tfg:${woodName}_stairs_from_planks`)             
        .itemInputs(plank)
        .circuit(1)
        .itemOutputs(stair)
        .itemOutputs('1x gtceu:small_wood_dust')
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Полублок
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

    e.recipes.create.cutting(slab.copyWithCount(6), anyLogs)
        .id(`tfg:create_cutting/${woodName}_slabs_from_logs`)

    e.recipes.create.cutting(slab.copyWithCount(2), plank)
        .id(`tfg:create_cutting/${woodName}_slabs_from_planks`)

    e.recipes.gtceu.cutter(`tfg:${woodName}_slabs_from_logs`)             
        .itemInputs(anyLogs)
        .circuit(5)
        .itemOutputs(slab.copyWithCount(12))
        .itemOutputs('1x gtceu:wood_dust')
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)

    e.recipes.gtceu.cutter(`tfg:${woodName}_slabs_from_planks`)             
        .itemInputs(plank)
        .circuit(2)
        .itemOutputs(slab.copyWithCount(2))
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Забор
    e.remove({ id: `gtceu:shaped/${woodName}_fence` })
    e.remove({ id: `gtceu:assembler/${woodName}_fence` })
    
    e.shaped(fence.copyWithCount(8), [
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
    e.remove({ id: `gtceu:assembler/${woodName}_trapdoor_steel` })
    e.remove({ id: `gtceu:assembler/${woodName}_trapdoor_iron` })

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

    //#region Крыша (AlekiRoofs)
    e.remove({ id: `alekiroofs:crafting/${woodName}_roofing` })

    e.shaped(roofing.copyWithCount(2), [
        'A ',
        ' s'  
    ], {
        A: plank,
        s: '#forge:tools/saws'
    }).id(`tfg:workbench/${woodName}_roofing_saw`)

    e.recipes.create.cutting([roofing, Item.of('1x gtceu:wood_dust')], plank)
        .id(`tfg:create_cutting/${woodName}_roofing`)

    e.recipes.gtceu.cutter(`tfg:${woodName}_roofing`)             
        .itemInputs(plank)
        .circuit(4)
        .itemOutputs(roofing.copyWithCount(2))
        .itemOutputs('1x gtceu:wood_dust')
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Окно (Create)
    e.remove({ id: `create:${woodName}_window` })

    e.shaped(window, [
        ' A ',
        'ABA',
        ' m '
    ], {
        A: plank,
        B: '#forge:glass/colorless',
        m: '#forge:tools/mallets'
    }).id(`tfg:workbench/${woodName}_window`)

    e.recipes.gtceu.assembler(`tfg:${woodName}_window`)             
        .itemInputs(plank)
        .itemInputs('#forge:glass/colorless')
        .circuit(16)
        .itemOutputs(window)
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)
    //#endregion

    //#region Окнонная панель (Create)
    e.remove({ id: `create:${woodName}_window_pane` })

    e.shaped(windowPane.copyWithCount(2), [
        'AB',
        'Am'
    ], {
        A: plank,
        B: '#forge:glass/colorless',
        m: '#forge:tools/mallets'
    }).id(`tfg:workbench/${woodName}_window_pane`)

    e.recipes.gtceu.assembler(`tfg:${woodName}_window_pane`)             
        .itemInputs(plank)
        .itemInputs('#forge:glass/colorless')
        .circuit(17)
        .itemOutputs(windowPane.copyWithCount(2))
        .EUt(GTValues.VA[GTValues.ULV]).duration(200)

    //#endregion

    //#region Железнодорожное полотно (Узкое) (Create)
    e.remove({ id: `railways:sequenced_assembly/track_${woodName}_narrow` })

    e.recipes.createSequencedAssembly([
        trackNarrow,
    ], slab, [
        e.recipes.createDeploying(incompleteTrackNarrow, [incompleteTrackNarrow, '#tfg:all_iron_nuggets']),
        e.recipes.createDeploying(incompleteTrackNarrow, [incompleteTrackNarrow, '#tfg:all_iron_nuggets']),
        e.recipes.createDeploying(incompleteTrackNarrow, [incompleteTrackNarrow, '#tfg:all_iron_nuggets']),
        e.recipes.createDeploying(incompleteTrackNarrow, [incompleteTrackNarrow, '#tfg:all_iron_nuggets']),
        e.recipes.createDeploying(incompleteTrackNarrow, [incompleteTrackNarrow, '4x #forge:screws']),
        e.recipes.createPressing(incompleteTrackNarrow, [incompleteTrackNarrow]),
    ]).transitionalItem(incompleteTrackNarrow).loops(1)
        .id(`tfg:sequenced_assembly/track_${woodName}_narrow`)

    e.recipes.gtceu.assembler(`tfg:narrow_${woodName}_track`)             
        .itemInputs(slab, '4x #tfg:all_iron_nuggets', '4x #forge:screws')
        .itemOutputs(trackNarrow)
        .circuit(24)
        .duration(800)
        .EUt(32)
    //#endregion

    //#region Железнодорожное полотно (Нормальное) (Create)
    e.remove({ id: `railways:sequenced_assembly/track_${woodName}` })

    e.recipes.createSequencedAssembly([
        track, 
    ], trackNarrow, [
        e.recipes.createCutting(incompleteTrack, incompleteTrack).processingTime(100),
        e.recipes.createDeploying(incompleteTrack, [incompleteTrack, slab]),
        e.recipes.createDeploying(incompleteTrack, [incompleteTrack, '#tfg:all_iron_nuggets']),
        e.recipes.createDeploying(incompleteTrack, [incompleteTrack, '#tfg:all_iron_nuggets']),
        e.recipes.createDeploying(incompleteTrack, [incompleteTrack, '#tfg:all_iron_nuggets']),
        e.recipes.createDeploying(incompleteTrack, [incompleteTrack, '#tfg:all_iron_nuggets']),
        e.recipes.createPressing(incompleteTrack, [incompleteTrack]),
    ]).transitionalItem(incompleteTrack).loops(1)
        .id(`tfg:sequenced_assembly/track_${woodName}`)

    e.recipes.gtceu.assembler(`tfg:track_${woodName}`)             
        .itemInputs(slab, trackNarrow, '4x #forge:screws')
        .itemOutputs(track)
        .circuit(24)
        .duration(1200)
        .EUt(32)

    e.recipes.gtceu.assembler(`tfg:track_${woodName}_skip`)             
        .itemInputs(slab.copyWithCount(2), '8x #forge:screws')
        .itemOutputs(track)
        .circuit(25)
        .duration(1200)
        .EUt(32)
    //#endregion

    //#region Железнодорожное полотно (Широкое) (Create)
    e.remove({ id: `railways:sequenced_assembly/track_${woodName}_wide` })

    e.recipes.createSequencedAssembly([
        trackWide, 
    ], track, [
        e.recipes.createCutting(incompleteTrackWide, incompleteTrackWide).processingTime(150),
        e.recipes.createDeploying(incompleteTrackWide, [incompleteTrackWide, slab]),
        e.recipes.createDeploying(incompleteTrackWide, [incompleteTrackWide, '#tfg:all_iron_nuggets']),
        e.recipes.createDeploying(incompleteTrackWide, [incompleteTrackWide, '#tfg:all_iron_nuggets']),
        e.recipes.createDeploying(incompleteTrackWide, [incompleteTrackWide, '#tfg:all_iron_nuggets']),
        e.recipes.createDeploying(incompleteTrackWide, [incompleteTrackWide, '#tfg:all_iron_nuggets']),
        e.recipes.createPressing(incompleteTrackWide, [incompleteTrackWide]),
    ]).transitionalItem(incompleteTrackWide).loops(1)
        .id(`tfg:sequenced_assembly/track_${woodName}_wide`)

    e.recipes.gtceu.assembler(`tfg:track_${woodName}_wide`)             
        .itemInputs(slab, track, '4x #forge:screws')
        .itemOutputs(trackWide)
        .circuit(24)
        .duration(1600)
        .EUt(16)

    e.recipes.gtceu.assembler(`tfg:track_${woodName}_wide_skip`)             
        .itemInputs(slab.copyWithCount(3), '12x #forge:screws')
        .itemOutputs(trackWide)
        .circuit(26)
        .duration(1600)
        .EUt(16)
    //#endregion
}