// priority: 0

const registerCreateRecipes = (event) => {
    
    // Удаление рецептов мода create 
    /*
    event.remove({ not: [
        { id: 'create:crafting/kinetics/gearboxfrom_conversion' },
        { id: 'create:crafting/kinetics/gearbox' },
        { id: 'create:crafting/kinetics/clutch' },
        { id: 'create:crafting/kinetics/gearshift' },
        { id: 'create:crafting/kinetics/adjustable_chain_gearshift' },
        { id: 'create:crafting/kinetics/water_wheel' },
        { id: 'create:crafting/kinetics/large_water_wheel' },
        { id: 'create:crafting/kinetics/encased_fan' },
        { id: 'create:crafting/kinetics/turntable' },
        { id: 'create:crafting/kinetics/cuckoo_clock' },
        { id: 'create:crafting/kinetics/mysterious_cuckoo_clock' },
        { id: 'create:crafting/kinetics/millstone' },
        { id: 'create:crafting/kinetics/mechanical_mixer' },
        { id: 'create:crafting/kinetics/weighted_ejector' },
        { id: 'create:crafting/kinetics/smart_chute' },
        { id: 'create:crafting/kinetics/speedometerfrom_conversion' },
        { id: 'create:crafting/kinetics/speedometer' },
        { id: 'create:crafting/kinetics/stressometerfrom_conversion' },
        { id: 'create:crafting/kinetics/mechanical_pump' },
        { id: 'create:crafting/kinetics/smart_fluid_pipe' },
    ], mod: 'create' })*/

    // Пушка для постройки схематик
    event.shaped('create:schematicannon', [
        ' A ',
        'BAB',
        'CDC' 
    ], {
        A: '#forge:storage_blocks/wrought_iron',
        B: '#minecraft:logs',
        C: '#tfc:rock/smooth',
        D: 'minecraft:dispenser',
    }).id('tfg:railways/shaped/schematicannon')

    // Стол для схематик
    event.shaped('create:schematic_table', [
        'AAA',
        ' B ',
        ' B ' 
    ], {
        A: '#minecraft:wooden_slabs',
        B: '#tfg:rock_walls'
    }).id('tfg:railways/shaped/schematic_table')

    // Вал
    event.shaped('8x create:shaft', [
        'A ',
        'AB'
    ], {
        A: '#forge:ingots/wrought_iron',
        B: '#forge:tools/files'
    }).id('tfg:railways/shaped/shaft')

    event.recipes.gtceu.assembler('create/shaft')             
        .itemInputs('#forge:ingots/wrought_iron')
        .itemOutputs('6x create:shaft')
        .duration(75)
        .EUt(2)

    // Малая шестерня
    event.shapeless('create:cogwheel', [
        'create:shaft',
        '#forge:gears/wood'
    ]).id('tfg:railways/shapeless/cogwheel')

    // Большая шестерня
    event.shaped('create:large_cogwheel', [
        ' A ',
        'ABA',
        ' A ' 
    ], {
        A: '#forge:gears/wood',
        B: 'create:shaft'
    }).id('tfg:railways/shaped/large_cogwheel')

    // Внутриблочный двигатель цепи
    event.shapeless('create:encased_chain_drive', [
        'create:andesite_casing',
        '#forge:plates/wrought_iron',
        '#forge:plates/wrought_iron',
        '#forge:plates/wrought_iron'
    ]).id('tfg:railways/shapeless/encased_chain_drive')

    // Механический пресс
    event.shaped('create:mechanical_press', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:shaft',
        B: 'create:andesite_casing',
        C: '#forge:storage_blocks/wrought_iron',
    }).id('tfg:railways/shaped/mechanical_press')

    // Сопло
    event.shaped('create:nozzle', [
        'ABA',
        'ACA',
        'BBB' 
    ], {
        A: '#forge:rods/wrought_iron',
        B: '#forge:plates/wrought_iron',
        C: '#minecraft:wool'
    }).id('tfg:railways/shaped/nozzle')

    // Ручка, чтобы люто крутить
    event.shaped('create:hand_crank', [
        'AAA',
        '  B'
    ], {
        A: '#tfc:lumber',
        B: '#forge:rods/wrought_iron'
    }).id('tfg:railways/shaped/hand_crank')

    // Колесо для дробления
    event.recipes.createMechanicalCrafting('2x create:crushing_wheel', [
        ' AAA ',
        'AABAA',
        'ABCBC',
        'AABAA',
        ' AAA '
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#minecraft:planks',
        C: '#tfc:rock/hardened'
    }).id('tfg:railways/mechanical_crafting/crushing_wheel')

    // Железный веник
    event.shaped('create:whisk', [
        'ABA',
        'ACA',
        'AAA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:rods/long/wrought_iron',
        C: '#forge:rings/wrought_iron'
    }).id('tfg:railways/shaped/whisk')

    // Емкость для миксера
    event.shaped('create:basin', [
        'ABA',
        'AAA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/basin')

    // Место куда можно что то положить
    event.shapeless('create:depot', [
        'create:andesite_casing',
        '#forge:double_plates/wrought_iron'
    ]).id('tfg:railways/shapeless/depot')

    // Лоток
    event.shaped('create:chute', [
        'A ',
        'AB',
        'A ' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:tools/hammers'
    }).id('tfg:railways/shaped/chute')

    // Металлический держатель
    event.shaped('create:metal_bracket', [
        'AAA',
        'BBB'
    ], {
        A: '#forge:nuggets/wrought_iron',
        B: '#forge:plates/wrought_iron'
    }).id('tfg:railways/shaped/metal_bracket')

    // Жидкостная труба
    event.shaped('create:fluid_pipe', [
        ' B ',
        'BAB',
        ' B ' 
    ], {
        A: '#forge:tools/hammers', 
        B: '#forge:plates/copper'
    }).id('tfg:railways/shaped/fluid_pipe')

    // Жидкостный люк
    event.shapeless('create:fluid_valve', [
        'create:fluid_pipe',
        '#forge:plates/wrought_iron'
    ]).id('tfg:railways/shapeless/fluid_valve')

    // Ручка жидкостного люка
    event.shaped('create:copper_valve_handle', [
        'AAA',
        'BCD'
    ], {
        A: '#forge:plates/copper',
        B: '#forge:tools/hammers',
        C: '#forge:gears/wrought_iron',
        D: '#forge:tools/files'
    }).id('tfg:railways/shaped/copper_valve_handle')

    // Жидкостный резервуар
    event.shaped('create:fluid_tank', [
        'ABA',
        'BCB',
        'ABA' 
    ], {
        A: '#forge:screws/copper',
        B: '#forge:plates/copper',
        C: '#forge:glass_panes'
    }).id('tfg:railways/shaped/fluid_tank')

    /*
    
    //
    event.shaped('', [
        'AAA',
        'AAA',
        'AAA' 
    ], {
        A: '',
        B: '',
        C: '',
        D: '',
        E: '',
        F: '',
        G: '',
    }).id('tfg:railways/shaped/')
    
    //
    event.shapeless('', [
        
    ]).id('tfg:railways/shapeless/')

    */

    
}