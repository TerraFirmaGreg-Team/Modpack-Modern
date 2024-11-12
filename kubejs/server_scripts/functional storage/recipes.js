// priority: 0
//f storage

const registerFunctionalStorageRecipes = (event) => {

    event.remove({ mod: 'functionalstorage' });
    event.remove({ mod: 'functional_tfc' });

    // Виды деревянных дроверов

    for (var i = 0; i < 19; i++) {
        event.shaped(`functionalstorage:tfc_${global.TYPE_OF_TREE_FOR_FS_NAMES[i]}_1`, [
            'AAA',
            'CBC',
            'AAA'
        ],
           {
            A: `tfc:wood/planks/${global.TYPE_OF_TREE_FOR_FS_NAMES[i]}`,
            B: '#forge:chests/wooden',
            C: '#forge:double_plates/steel'
        }).id(`functionalstorage:tfc_${global.TYPE_OF_TREE_FOR_FS_NAMES[i]}_1_${i}`)

        event.shaped(`functionalstorage:tfc_${global.TYPE_OF_TREE_FOR_FS_NAMES[i]}_2`, [
            'ABA',
            'CAC',
            'ABA'
        ], {
            A: `tfc:wood/planks/${global.TYPE_OF_TREE_FOR_FS_NAMES[i]}`,
            B: '#forge:chests/wooden',
            C: '#forge:double_plates/steel'
        }).id(`functionalstorage:tfc_${global.TYPE_OF_TREE_FOR_FS_NAMES[i]}_2_${[i]}`)

        event.shaped(`functionalstorage:tfc_${global.TYPE_OF_TREE_FOR_FS_NAMES[i]}_4`, [
            'BAB',
            'CAC',
            'BAB'
        ], {
            A: `tfc:wood/planks/${global.TYPE_OF_TREE_FOR_FS_NAMES[i]}`,
            B: '#forge:chests/wooden',
            C: '#forge:double_plates/steel'
        }).id(`functionalstorage:tfc_${global.TYPE_OF_TREE_FOR_FS_NAMES[i]}_4_${[i]}`)

    }

    //дровер контроллер
    event.shaped('functionalstorage:storage_controller', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#gtceu:circuits/lv',
        B: 'create:electron_tube',
        C: 'create:precision_mechanism',
        D: '#functionalstorage:drawer',
        E: 'gtceu:lv_conveyor_module',
        F: 'gtceu:lv_robot_arm'
    }).id('functionalstorage:storage_controller')

    //дровер воронка
    event.shaped('functionalstorage:controller_extension', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:double_plates/steel',
        B: 'minecraft:hopper',
        C: 'create:precision_mechanism',
        D: '#functionalstorage:drawer',
        E: 'gtceu:lv_conveyor_module',
        F: 'gtceu:lv_electric_motor'
    }).id('functionalstorage:controller_extension')

    //инструмент связывания

    event.shaped('functionalstorage:linking_tool', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'create:electron_tube',
        B: '#forge:plates/steel',
        C: '#functionalstorage:drawer' ,
        D: 'create:precision_mechanism' ,
       
    }).id('functionalstorage:linking_tool')

    //инструмент конфигурации

    event.shaped('functionalstorage:configuration_tool', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'create:electron_tube',
        B: '#forge:plates/wrought_iron',
        C: '#functionalstorage:drawer',
        D: 'create:precision_mechanism',

    }).id('functionalstorage:configuration_tool')

    // жидкостные дроверы

    event.shaped('functionalstorage:fluid_1', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: '#forge:plates/steel',
        B: '#gtceu:circuits/lv' ,
        C: '#forge:double_plates/steel',
        D: 'gtceu:steel_drum' ,
        E: 'create:fluid_tank',
        F: 'gtceu:lv_electric_pump',
    }).id('functionalstorage:fluid_1')

    event.shaped('functionalstorage:fluid_2', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:fluid_cell',
        B: '#gtceu:circuits/lv',
        C: '#forge:double_plates/steel',
        D: 'gtceu:steel_drum',
        E: 'create:fluid_tank',
        F: 'gtceu:lv_electric_pump',
    }).id('functionalstorage:fluid_2')

    event.shaped('functionalstorage:fluid_4', [
        'EBE',
        'CDC',
        'EFE'
    ], {
        B: '#gtceu:circuits/lv',
        C: '#forge:plates/steel',
        D: 'gtceu:steel_drum',
        E: 'create:fluid_tank',
        F: 'gtceu:lv_electric_pump',
    }).id('functionalstorage:fluid_4')


    // Дровер края

    event.shaped('functionalstorage:ender_drawer', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        B: '#gtceu:circuits/mv',
        C: 'gtceu:mv_field_generator',
        D: '#forge:chests/ender',
        A: '#forge:double_sheets/aluminium',
    }).id('functionalstorage:ender_drawer')

    // Улучшения взаимодействия

    event.shaped('functionalstorage:collector_upgrade', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: '#forge:stone' ,
        B: 'gtceu:lv_conveyor_module',
        C: '#forge:dusts/redstone',
        D: '#functionalstorage:drawer',
    }).id('functionalstorage:collector_upgrade')

    event.shaped('functionalstorage:puller_upgrade', [
        'ABA',
        'ADA',
        'ACA'
    ], {
        A: '#forge:stone',
        B: 'gtceu:lv_conveyor_module',
        C: '#forge:dusts/redstone',
        D: '#functionalstorage:drawer',
    }).id('functionalstorage:puller_upgrade')

    event.shaped('functionalstorage:pusher_upgrade', [
        'ACA',
        'ADA',
        'ABA'
    ], {
        A: '#forge:stone',
        B: 'gtceu:lv_conveyor_module',
        C: '#forge:dusts/redstone',
        D: '#functionalstorage:drawer',
    }).id('functionalstorage:pusher_upgrade')

    // Улучшения вместимости

    event.shaped('functionalstorage:copper_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/steel',
        B: '#gtceu:circuits/lv',
        C: 'gtceu:steel_crate',
        
    }).id('functionalstorage:copper_upgrade')

    event.shaped('functionalstorage:gold_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/stainless_steel',
        B: '#gtceu:circuits/hv',
        C: 'gtceu:lv_field_generator',

    }).id('functionalstorage:gold_upgrade')

    event.shaped('functionalstorage:diamond_upgrade', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/titanium',
        B: '#gtceu:circuits/ev',
        C: 'gtceu:mv_field_generator',

    }).id('functionalstorage:diamond_upgrade')

    event.shaped('functionalstorage:iron_downgrade', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#forge:double_plates/steel',
        B: '#gtceu:circuits/lv',
       

    }).id('functionalstorage:iron_downgrade')

    // Улучшения разное

    event.shaped('functionalstorage:redstone_upgrade', [
        ' A ',
        ' B ',
        '   '
    ], {
        A: 'gtceu:activity_detector_cover',
        B: '#functionalstorage:drawer',


    }).id('functionalstorage:redstone_upgrade')

    event.shaped('functionalstorage:void_upgrade', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: '#forge:screws/steel',
        B: 'gtceu:item_detector_cover',
        C: '#forge:tools/screwdrivers',
        D: '#functionalstorage:drawer',
        E: '#forge:tools/wrenches',
        F: '#forge:normal_item_pipes/brass',
        G: '#forge:ender_pearls',
    }).id('functionalstorage:void_upgrade')






}