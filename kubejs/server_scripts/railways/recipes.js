// priority: 0

const registerRailWaysRecipes = (event) => {
    
    // Удаление рецептов мода railways 
    event.remove({ mod: 'railways' });

    // Семафор
    event.shaped('railways:semaphore', [
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

    // Соединитель поездов
    event.shaped('railways:track_coupler', [
        'AAA',
        'DBE',
        ' C ' 
    ], {
        A: '#forge:sheets/wrought_iron',
        B: '#forge:wires/single/red_alloy',
        C: 'create:railway_casing',
        D: '#forge:tools/wire_cutters',
        E: '#forge:tools/screwdrivers',
    }).id('tfg:railways/shaped/track_coupler')

    // Переключатель пути поезда из андезита
    event.shaped('railways:track_switch_andesite', [
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

    // Переключатель пути поезда из латуни
    event.shaped('railways:track_switch_brass', [
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

    // Свисток кондуктора
    event.shaped('railways:conductor_whistle', [
        'ABC' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:tools/hammers',
        C: '#forge:tools/files',
    }).id('tfg:railways/shaped/conductor_whistle')

    // Удаленная линза
    event.shaped('railways:remote_lens', [
        'ABC',
        'DE ' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:tools/hammers',
        C: '#forge:tools/files',
        D: 'create:precision_mechanism',
        E: 'ae2:wireless_access_point'
    }).id('tfg:railways/shaped/remote_lens')

    // Дымогенератор 1
    event.shaped('railways:smokestack_caboosestyle', [
        'BCB',
        'DA '
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:nuggets/black_steel',
        C: '#forge:plates/black_steel',
        D: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_caboosestyle')

    // Дымогенератор 2
    event.shaped('railways:smokestack_long', [
        'C  ',
        'BAB'
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:nuggets/black_steel',
        C: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_long')

    // Дымогенератор 3
    event.shaped('railways:smokestack_coalburner', [
        'B B',
        'BCB',
        'BAB'
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:plates/black_steel',
        C: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_coalburner')

    // Дымогенератор 4
    event.shaped('railways:smokestack_oilburner', [
        'BCB',
        'BAB'
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:plates/black_steel',
        C: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_oilburner')

    // Дымогенератор 5
    event.shaped('railways:smokestack_streamlined', [
        'C  ',
        'BAB'
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:plates/black_steel',
        C: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_streamlined')

    // Дымогенератор 6
    event.shaped('railways:smokestack_woodburner', [
        ' D ',
        'CBC',
        'BAB'
    ], {
        A: '#forge:storage_blocks/charcoal',
        B: '#forge:plates/black_steel',
        C: '#forge:nuggets/black_steel',
        D: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/smokestack_woodburner')
    
    // Вентилятор радиатора
    event.shaped('2x railways:smokestack_diesel', [
        'ABA',
        'BCB',
        'ABA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:rods/wrought_iron',
        C: 'create:propeller',
    }).id('tfg:railways/shaped/smokestack_diesel')

    // Монорельс
    event.recipes.createSequencedAssembly([
        '6x railways:track_monorail', 
    ], 'create:metal_girder', [
        event.recipes.createDeploying('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail', 'create:metal_bracket']),
        event.recipes.createDeploying('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail', '#forge:plates/wrought_iron']),
        event.recipes.createPressing('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail']),
        event.recipes.createDeploying('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail', '#forge:plates/wrought_iron']),
        event.recipes.createPressing('railways:track_incomplete_monorail', ['railways:track_incomplete_monorail']),
    ]).transitionalItem('railways:track_incomplete_monorail').loops(1).id('tfg:railways/sequenced_assembly/track_monorail')

    event.recipes.gtceu.assembler('railways/monorail')             
        .itemInputs('create:metal_girder', '2x #forge:plates/wrought_iron')
        .itemOutputs('6x railways:track_monorail')
        .duration(250)
        .EUt(32)

    // Железнодорожное полотно (Узкое)
    
    // Из стали
    event.recipes.createSequencedAssembly([
        'railways:track_create_andesite_narrow', 
    ], '#tfg:rock_slabs', [
        event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', '#forge:nuggets/steel']),
        event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', '#forge:nuggets/steel']),
        event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', '#forge:nuggets/steel']),
        event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', '#forge:nuggets/steel']),
        event.recipes.createPressing('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow']),
    ]).transitionalItem('railways:track_incomplete_create_andesite_narrow').loops(1).id('tfg:railways/sequenced_assembly/track_create_andesite_narrow_from_steel')

    event.recipes.gtceu.assembler('railways/track_create_andesite_narrow_from_steel')             
        .itemInputs('#tfg:rock_slabs', '4x #forge:nuggets/steel')
        .itemOutputs('railways:track_create_andesite_narrow')
        .duration(100)
        .EUt(32)

    // Из ванадиум-стали
    event.recipes.createSequencedAssembly([
        '2x railways:track_create_andesite_narrow', 
    ], '#tfg:rock_slabs', [
        event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', '#forge:nuggets/vanadium_steel']),
        event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', '#forge:nuggets/vanadium_steel']),
        event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', '#forge:nuggets/vanadium_steel']),
        event.recipes.createDeploying('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow', '#forge:nuggets/vanadium_steel']),
        event.recipes.createPressing('railways:track_incomplete_create_andesite_narrow', ['railways:track_incomplete_create_andesite_narrow']),
    ]).transitionalItem('railways:track_incomplete_create_andesite_narrow').loops(1).id('tfg:railways/sequenced_assembly/track_create_andesite_narrow_from_vanadium_steel')

    event.recipes.gtceu.assembler('railways/track_create_andesite_narrow_from_vanadium_steel')             
        .itemInputs('#tfg:rock_slabs', '4x #forge:nuggets/vanadium_steel')
        .itemOutputs('2x railways:track_create_andesite_narrow')
        .duration(100)
        .EUt(32)

    // Железнодорожное полотно (Нормальное)
    event.recipes.createSequencedAssembly([
        'create:track', 
    ], 'railways:track_create_andesite_narrow', [
        event.recipes.createCutting('create:incomplete_track', 'create:incomplete_track').processingTime(100),
        event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', '#tfg:rock_slabs']),
        event.recipes.createDeploying('create:incomplete_track', ['create:incomplete_track', '#tfc:mortar']),
        event.recipes.createPressing('create:incomplete_track', ['create:incomplete_track']),
    ]).transitionalItem('create:incomplete_track').loops(1).id('tfg:railways/sequenced_assembly/track_create_andesite')

    event.recipes.gtceu.assembler('railways/track')             
        .itemInputs('railways:track_create_andesite_narrow')
        .inputFluids(Fluid.of('gtceu:concrete', 144))
        .itemOutputs('create:track')
        .duration(200)
        .EUt(16)

    // Железнодорожное полотно (Широкое)
    event.recipes.createSequencedAssembly([
        'railways:track_create_andesite_wide', 
    ], 'create:track', [
        event.recipes.createCutting('railways:track_incomplete_create_andesite_wide', 'railways:track_incomplete_create_andesite_wide').processingTime(100),
        event.recipes.createDeploying('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide', '#tfg:rock_slabs']),
        event.recipes.createDeploying('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide', '#tfc:mortar']),
        event.recipes.createPressing('railways:track_incomplete_create_andesite_wide', ['railways:track_incomplete_create_andesite_wide']),
    ]).transitionalItem('railways:track_incomplete_create_andesite_wide').loops(1).id('tfg:railways/sequenced_assembly/track_create_andesite_wide')

    event.recipes.gtceu.assembler('railways/track_create_andesite_wide')             
        .itemInputs('create:track')
        .inputFluids(Fluid.of('gtceu:concrete', 144))
        .itemOutputs('railways:track_create_andesite_wide')
        .duration(200)
        .EUt(16)
}