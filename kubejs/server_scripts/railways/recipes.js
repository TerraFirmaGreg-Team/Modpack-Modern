// priority: 0

const registerRailWaysRecipes = (e) => {
    
    // Удаление рецептов мода railways 
    e.remove({ mod: 'railways' });

    //#region Дерево
    global.MINECRAFT_ALL_WOOD_TYPES.forEach(woodName => {
        
        // Train Track Narrow
        e.remove({ id: `railways:sequenced_assembly/track_${woodName}_narrow` })

        // Train Track Normal
        e.remove({ id: `railways:sequenced_assembly/track_${woodName}` })

        // Train Track Wide
        e.remove({ id: `railways:sequenced_assembly/track_${woodName}_wide` })
    })

    //#region Бамбук
    const woodName = 'bamboo'

    const slab = Item.of(`minecraft:${woodName}_slab`)

    const incompleteTrackNarrow = Item.of(`railways:track_incomplete_stripped_${woodName}_narrow`)
    const incompleteTrack = Item.of(`railways:track_incomplete_stripped_${woodName}`)
    const incompleteTrackWide = Item.of(`railways:track_incomplete_stripped_${woodName}_wide`)

    const trackNarrow = Item.of(`railways:track_stripped_${woodName}_narrow`)
    const track = Item.of(`railways:track_stripped_${woodName}`)
    const trackWide = Item.of(`railways:track_stripped_${woodName}_wide`)

    //#region Железнодорожное полотно (Узкое) (Create)
    e.remove({ id: `railways:sequenced_assembly/track_stripped_${woodName}_narrow` })

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

    //#region Железнодорожное полотно (Необтесанное) (Узкое) (Create)
    e.remove({ id: `railways:sequenced_assembly/track_${woodName}_narrow` })
    //#endregion

    //#region Железнодорожное полотно (Нормальное) (Create)
    e.remove({ id: `railways:sequenced_assembly/track_stripped_${woodName}` })

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

    //#region Железнодорожное полотно (Необтесанное) (Нормальное) (Create)
    e.remove({ id: `railways:sequenced_assembly/track_${woodName}` })
    //#endregion

    //#region Железнодорожное полотно (Широкое) (Create)
    e.remove({ id: `railways:sequenced_assembly/track_stripped_${woodName}_wide` })

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

    //#region Железнодорожное полотно (Необтесанное) (Широкое) (Create)
    e.remove({ id: `railways:sequenced_assembly/track_${woodName}_wide` })
    //#endregion

    //#endregion

    //#endregion
}

const dead1 = () => {
    // Семафор
    e.shaped('railways:semaphore', [
        ' A ',
        'BCD',
        'EAE' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#minecraft:fences',
        C: 'create:andesite_casing',
        D: 'create:electron_tube',
        E: '#forge:tools/hammers',
    }).id('tfg:railways/shaped/semaphore')

    e.recipes.gtceu.assembler('tfg:railways/semaphore')             
        .itemInputs('2x #forge:plates/wrought_iron', '#minecraft:fences', 'create:andesite_casing', 'create:electron_tube')
        .circuit(3)
        .itemOutputs('railways:semaphore')
        .duration(200)
        .EUt(28)

    // Соединитель поездов
    e.shaped('railways:track_coupler', [
        'AAA',
        'DBE',
        ' C ' 
    ], {
        A: '#forge:sheets/wrought_iron',
        B: 'gtceu:red_alloy_single_wire',
        C: 'create:railway_casing',
        D: '#forge:tools/wire_cutters',
        E: '#forge:tools/screwdrivers',
    }).id('tfg:railways/shaped/track_coupler')

    e.recipes.gtceu.assembler('tfg:railways/track_coupler')             
        .itemInputs('3x #forge:sheets/wrought_iron', 'gtceu:red_alloy_single_wire', 'create:railway_casing')
        .circuit(3)
        .itemOutputs('railways:track_coupler')
        .duration(200)
        .EUt(28)

    // Переключатель пути поезда из андезита
    e.shaped('railways:track_switch_andesite', [
        'BAB',
        'CDC',
        'ECF' 
    ], {
        A: 'minecraft:lever',
        B: '#forge:bolts/wrought_iron',
        C: 'create:cogwheel',
        D: 'create:andesite_casing',
        E: '#forge:tools/screwdrivers',
        F: '#forge:tools/hammers',
    }).id('tfg:railways/shaped/track_switch_andesite')

    e.recipes.gtceu.assembler('tfg:railways/track_switch_andesite')             
        .itemInputs('minecraft:lever', '2x #forge:bolts/wrought_iron', '2x create:cogwheel', 'create:andesite_casing')
        .circuit(3)
        .itemOutputs('railways:track_switch_andesite')
        .duration(200)
        .EUt(28)

    // Переключатель пути поезда из латуни
    e.shaped('railways:track_switch_brass', [
        'BAB',
        'CDC',
        'ECF' 
    ], {
        A: 'minecraft:lever',
        B: '#forge:bolts/brass',
        C: 'create:cogwheel',
        D: 'create:brass_casing',
        E: '#forge:tools/screwdrivers',
        F: '#forge:tools/hammers',
    }).id('tfg:railways/shaped/track_switch_brass')

    e.recipes.gtceu.assembler('tfg:railways/track_switch_brass')             
        .itemInputs('minecraft:lever', '2x #forge:bolts/wrought_iron', '2x create:cogwheel', 'create:brass_casing')
        .circuit(3)
        .itemOutputs('railways:track_switch_brass')
        .duration(200)
        .EUt(28)

    // Свисток кондуктора
    e.shaped('railways:conductor_whistle', [
        'ABC' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:tools/hammers',
        C: '#forge:tools/files',
    }).id('tfg:railways/shaped/conductor_whistle')

    e.recipes.gtceu.assembler('tfg:railways/conductor_whistle')             
        .itemInputs('#forge:plates/brass')
        .circuit(4)
        .itemOutputs('railways:conductor_whistle')
        .duration(200)
        .EUt(28)

    // Удаленная линза
    e.shaped('railways:remote_lens', [
        'ABC',
        'DE ' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:tools/hammers',
        C: '#forge:tools/files',
        D: 'create:precision_mechanism',
        E: 'ae2:wireless_access_point'
    }).id('tfg:railways/shaped/remote_lens')

    e.recipes.gtceu.assembler('tfg:railways/remote_lens')             
        .itemInputs('#forge:plates/brass', 'create:precision_mechanism', 'ae2:wireless_access_point')
        .circuit(3)
        .itemOutputs('railways:remote_lens')
        .duration(200)
        .EUt(28)

    // Дымогенератор 1
    e.shaped('railways:smokestack_caboosestyle', [
        'BCB',
        'DA '
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:nuggets/black_steel',
        C: '#forge:plates/black_steel',
        D: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_caboosestyle')

    e.recipes.gtceu.assembler('tfg:railways/smokestack_caboosestyle')             
        .itemInputs('#forge:storage_blocks/charcoal', '2x #forge:nuggets/black_steel', '#forge:plates/black_steel')
        .circuit(4)
        .itemOutputs('railways:smokestack_caboosestyle')
        .duration(200)
        .EUt(28)

    // Дымогенератор 2
    e.shaped('railways:smokestack_long', [
        'C  ',
        'BAB'
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:nuggets/black_steel',
        C: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_long')

    e.recipes.gtceu.assembler('tfg:railways/smokestack_long')             
        .itemInputs('#forge:storage_blocks/charcoal', '2x #forge:nuggets/black_steel')
        .circuit(5)
        .itemOutputs('railways:smokestack_long')
        .duration(200)
        .EUt(28)

    // Дымогенератор 3
    e.shaped('railways:smokestack_coalburner', [
        'B B',
        'BCB',
        'BAB'
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:plates/black_steel',
        C: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_coalburner')

    e.recipes.gtceu.assembler('tfg:railways/smokestack_coalburner')             
        .itemInputs('#forge:storage_blocks/charcoal', '6x #forge:plates/black_steel')
        .circuit(6)
        .itemOutputs('railways:smokestack_coalburner')
        .duration(200)
        .EUt(28)

    // Дымогенератор 4
    e.shaped('railways:smokestack_oilburner', [
        'BCB',
        'BAB'
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:plates/black_steel',
        C: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_oilburner')

    e.recipes.gtceu.assembler('tfg:railways/smokestack_oilburner')             
        .itemInputs('#forge:storage_blocks/charcoal', '6x #forge:plates/black_steel')
        .circuit(7)
        .itemOutputs('railways:smokestack_oilburner')
        .duration(200)
        .EUt(28)

    // Дымогенератор 5
    e.shaped('railways:smokestack_streamlined', [
        'C  ',
        'BAB'
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:plates/black_steel',
        C: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_streamlined')

    e.recipes.gtceu.assembler('tfg:railways/smokestack_streamlined')             
        .itemInputs('#forge:storage_blocks/charcoal', '2x #forge:plates/black_steel')
        .circuit(8)
        .itemOutputs('railways:smokestack_streamlined')
        .duration(200)
        .EUt(28)

    // Дымогенератор 6
    e.shaped('railways:smokestack_woodburner', [
        ' D ',
        'CBC',
        'BAB'
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:plates/black_steel',
        C: '#forge:nuggets/black_steel',
        D: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_woodburner')

    e.recipes.gtceu.assembler('tfg:railways/smokestack_woodburner')             
        .itemInputs('#forge:storage_blocks/charcoal', '3x #forge:plates/black_steel', '2x #forge:nuggets/black_steel')
        .circuit(9)
        .itemOutputs('railways:smokestack_woodburner')
        .duration(200)
        .EUt(28)
    
    // Вентилятор радиатора
    e.shaped('2x railways:smokestack_diesel', [
        'ABA',
        'BCB',
        'ABA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:rods/wrought_iron',
        C: 'create:propeller',
    }).id('tfg:railways/shaped/smokestack_diesel')

    // Монорельс
    e.recipes.createSequencedAssembly([
        '6x railways:track_monorail', 
    ], 'create:metal_girder', [
        e.recipes.createDeploying('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail', 'create:metal_bracket']),
        e.recipes.createDeploying('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail', '#forge:plates/wrought_iron']),
        e.recipes.createPressing('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail']),
        e.recipes.createDeploying('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail', '#forge:plates/wrought_iron']),
        e.recipes.createPressing('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail']),
    ]).transitionalItem('railways:track_incomplete_monorail').loops(1).id('tfg:railways/sequenced_assembly/track_monorail')

    e.recipes.gtceu.assembler('railways/monorail')             
        .itemInputs('create:metal_girder', '2x #forge:plates/wrought_iron')
        .itemOutputs('6x railways:track_monorail')
        .duration(250)
        .EUt(32)

    // Железнодорожное полотно (Узкое)
    e.recipes.createSequencedAssembly([
        'railways:track_create_andesite_narrow', 
    ], '#tfg:rock_slabs', [
        e.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', 'gtceu:steel_nugget']),
        e.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', 'gtceu:steel_nugget']),
        e.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', 'gtceu:steel_nugget']),
        e.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', 'gtceu:steel_nugget']),
        e.recipes.createPressing('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow']),
    ]).transitionalItem('railways:track_incomplete_create_andesite_narrow').loops(1).id('tfg:railways/sequenced_assembly/track_create_andesite_narrow_from_steel')

    e.recipes.gtceu.assembler('railways/track_create_andesite_narrow_from_steel')             
        .itemInputs('#tfg:rock_slabs', '4x gtceu:steel_nugget')
        .itemOutputs('railways:track_create_andesite_narrow')
        .duration(800)
        .EUt(32)

    // Железнодорожное полотно (Нормальное)
    e.recipes.createSequencedAssembly([
        'create:track', 
    ], 'railways:track_create_andesite_narrow', [
        e.recipes.createCutting('create:incomplete_track', 'create:incomplete_track').processingTime(100),
        e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', '#tfg:rock_slabs']),
        e.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', '#tfc:mortar']),
        e.recipes.createPressing('create:incomplete_track', ['create:incomplete_track']),
    ]).transitionalItem('create:incomplete_track').loops(1).id('tfg:railways/sequenced_assembly/track_create_andesite')

    e.recipes.gtceu.assembler('railways/track')             
        .itemInputs('railways:track_create_andesite_narrow')
        .inputFluids(Fluid.of('gtceu:concrete', 144))
        .itemOutputs('create:track')
        .duration(800)
        .EUt(16)

    // Железнодорожное полотно (Широкое)
    e.recipes.createSequencedAssembly([
        'railways:track_create_andesite_wide', 
    ], 'create:track', [
        e.recipes.createCutting('railways:track_incomplete_create_andesite_wide', 'railways:track_incomplete_create_andesite_wide').processingTime(100),
        e.recipes.createDeploying('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide', '#tfg:rock_slabs']),
        e.recipes.createDeploying('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide', '#tfc:mortar']),
        e.recipes.createPressing('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide']),
    ]).transitionalItem('railways:track_incomplete_create_andesite_wide').loops(1).id('tfg:railways/sequenced_assembly/track_create_andesite_wide')

    e.recipes.gtceu.assembler('railways/track_create_andesite_wide')             
        .itemInputs('create:track')
        .inputFluids(Fluid.of('gtceu:concrete', 144))
        .itemOutputs('railways:track_create_andesite_wide')
        .duration(800)
        .EUt(16)

    // Железнодородные полотна из дерева
    global.TFC_WOOD_TYPES.forEach(woodType => {
        // Узкое
        e.recipes.createSequencedAssembly([
            `railways:track_tfc_${woodType}_narrow`,
        ], `tfc:wood/planks/${woodType}_slab`, [
            e.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_narrow`, [`railways:track_incomplete_tfc_${woodType}_narrow`, 'gtceu:steel_nugget']),
            e.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_narrow`, [`railways:track_incomplete_tfc_${woodType}_narrow`, 'gtceu:steel_nugget']),
            e.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_narrow`, [`railways:track_incomplete_tfc_${woodType}_narrow`, 'gtceu:steel_nugget']),
            e.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_narrow`, [`railways:track_incomplete_tfc_${woodType}_narrow`, 'gtceu:steel_nugget']),
            e.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_narrow`, [`railways:track_incomplete_tfc_${woodType}_narrow`, '4x #forge:screws']),
            e.recipes.createPressing(`railways:track_incomplete_tfc_${woodType}_narrow`, [`railways:track_incomplete_tfc_${woodType}_narrow`]),
        ]).transitionalItem(`railways:track_incomplete_tfc_${woodType}_narrow`).loops(1).id(`tfg:railways/sequenced_assembly/track_create_${woodType}_narrow`)
    
        e.recipes.gtceu.assembler(`railways/track_create_${woodType}_narrow`)             
            .itemInputs(`tfc:wood/planks/${woodType}_slab`, '4x gtceu:steel_nugget', '4x #forge:screws')
            .itemOutputs(`railways:track_tfc_${woodType}_narrow`)
            .duration(800)
            .EUt(32)
    
        // Нормальное
        e.recipes.createSequencedAssembly([
            `railways:track_tfc_${woodType}`, 
        ], `railways:track_tfc_${woodType}_narrow`, [
            e.recipes.createCutting(`railways:track_incomplete_tfc_${woodType}`, `railways:track_incomplete_tfc_${woodType}`).processingTime(100),
            e.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}`, [`railways:track_incomplete_tfc_${woodType}`, `tfc:wood/planks/${woodType}_slab`]),
            e.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}`, [`railways:track_incomplete_tfc_${woodType}`, '4x #forge:screws']),
            e.recipes.createPressing(`railways:track_incomplete_tfc_${woodType}`, [`railways:track_incomplete_tfc_${woodType}`]),
        ]).transitionalItem(`railways:track_incomplete_tfc_${woodType}`).loops(1).id(`tfg:railways/sequenced_assembly/track_create_${woodType}`)
    
        e.recipes.gtceu.assembler(`railways/track_${woodType}`)             
            .itemInputs(`railways:track_tfc_${woodType}_narrow`, '4x #forge:screws')
            .itemOutputs(`railways:track_tfc_${woodType}`)
            .duration(800)
            .EUt(16)
    
        // Широкое
        e.recipes.createSequencedAssembly([
            `railways:track_tfc_${woodType}_wide`, 
        ], `railways:track_tfc_${woodType}`, [
            e.recipes.createCutting(`railways:track_incomplete_tfc_${woodType}_wide`, `railways:track_incomplete_tfc_${woodType}_wide`).processingTime(100),
            e.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_wide`, [`railways:track_incomplete_tfc_${woodType}_wide`, `tfc:wood/planks/${woodType}_slab`]),
            e.recipes.createDeploying(`railways:track_incomplete_tfc_${woodType}_wide`, [`railways:track_incomplete_tfc_${woodType}_wide`, '4x #forge:screws']),
            e.recipes.createPressing(`railways:track_incomplete_tfc_${woodType}_wide`, [`railways:track_incomplete_tfc_${woodType}_wide`]),
        ]).transitionalItem(`railways:track_incomplete_tfc_${woodType}_wide`).loops(1).id(`tfg:railways/sequenced_assembly/track_create_${woodType}_wide`)
    
        e.recipes.gtceu.assembler(`railways/track_${woodType}_wide`)             
            .itemInputs(`railways:track_tfc_${woodType}`, '4x #forge:screws')
            .itemOutputs(`railways:track_tfc_${woodType}_wide`)
            .duration(800)
            .EUt(16)
    });
}
/*

e.recipes.gtceu.assembler('')             
    .itemInputs('')
    .itemOutputs('')
    .duration()
    .EUt()

*/