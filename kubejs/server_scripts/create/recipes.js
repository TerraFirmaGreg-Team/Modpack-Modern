// priority: 0

const registerCreateRecipes = (event) => {
    
    // Удаление рецептов мода create 
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
        { id: 'create:crafting/kinetics/stressometerfrom_conversion' },
        { id: 'create:crafting/kinetics/mechanical_pump' },
        { id: 'create:crafting/kinetics/smart_fluid_pipe' },
        { id: 'create:crafting/kinetics/portable_fluid_interface' },
        { id: 'create:crafting/kinetics/mechanical_piston' },
        { id: 'create:crafting/kinetics/gantry_carriage' },
        { id: 'create:crafting/kinetics/windmill_bearing' },
        { id: 'create:crafting/kinetics/mechanical_bearing' },
        { id: 'create:crafting/kinetics/clockwork_bearing' },
        { id: 'create:crafting/kinetics/linear_chassisfrom_conversion' },
        { id: 'create:crafting/kinetics/secondary_linear_chassisfrom_conversion' },
        { id: 'create:crafting/kinetics/contraption_controls' },
        { id: 'create:crafting/kinetics/deployer' },
        { id: 'create:crafting/kinetics/portable_storage_interface' },
        { id: 'create:crafting/kinetics/mechanical_roller' },
        { id: 'create:crafting/kinetics/sequenced_gearshift' },
        { id: 'create:crafting/kinetics/rotation_speed_controller' },
        { id: 'create:crafting/kinetics/track_signal' },
        { id: 'create:crafting/kinetics/track_observer' },
        { id: 'create:crafting/kinetics/controls' },
        { id: 'create:crafting/logistics/content_observer' },
        { id: 'create:crafting/logistics/stockpile_switch' },
        { id: 'create:crafting/logistics/display_link' },
        { id: 'create:crafting/kinetics/nixie_tube' },
        { id: 'create:crafting/logistics/redstone_link' },
        { id: 'create:crafting/kinetics/analog_lever' },
        { id: 'create:crafting/kinetics/placard' },
        { id: 'create:crafting/logistics/pulse_repeater' },
        { id: 'create:crafting/logistics/pulse_extender' },
        { id: 'create:crafting/logistics/powered_latch' },
        { id: 'create:crafting/logistics/powered_toggle_latch' },
        { id: 'create:crafting/kinetics/crafter_slot_cover' },
        { id: 'create:crafting/kinetics/vertical_gearboxfrom_conversion' },
        { id: 'create:crafting/kinetics/goggles' },
        { id: 'create:crafting/kinetics/wrench' },
        { id: 'create:crafting/kinetics/contraption_controls' },
        { id: 'create:crafting/appliances/linked_controller' },
        { id: 'create:crafting/appliances/filter_clear' },
        { id: 'create:crafting/appliances/attribute_filter_clear' },
        { id: 'create:crafting/appliances/schedule_clear' },
        { id: 'create:crafting/schematics/empty_schematic' },
        { id: 'create:crafting/schematics/schematic_and_quill' },
        { id: 'create:crafting/curiosities/brown_toolbox' },
        { id: 'create:crafting/appliances/clipboard_clear' },
        { id: 'create:crafting/kinetics/andesite_door' },
        { id: 'create:crafting/kinetics/brass_door' },
        { id: 'create:crafting/kinetics/copper_door' },
        { id: 'create:crafting/kinetics/train_door' },
        { id: 'create:crafting/kinetics/train_trapdoor' },
        { id: 'create:crafting/kinetics/white_seat' },
        { id: 'create:crafting/kinetics/orange_seat' },
        { id: 'create:crafting/kinetics/magenta_seat' },
        { id: 'create:crafting/kinetics/light_blue_seat' },
        { id: 'create:crafting/kinetics/yellow_seat' },
        { id: 'create:crafting/kinetics/lime_seat' },
        { id: 'create:crafting/kinetics/pink_seat' },
        { id: 'create:crafting/kinetics/gray_seat' },
        { id: 'create:crafting/kinetics/light_gray_seat' },
        { id: 'create:crafting/kinetics/cyan_seat' },
        { id: 'create:crafting/kinetics/purple_seat' },
        { id: 'create:crafting/kinetics/blue_seat' },
        { id: 'create:crafting/kinetics/brown_seat' },
        { id: 'create:crafting/kinetics/green_seat' },
        { id: 'create:crafting/kinetics/red_seat' },
        { id: 'create:crafting/kinetics/black_seat' },
        { id: 'create:compat/ae2/mixing/fluix_crystal' },
        { id: 'create:sequenced_assembly/precision_mechanism' },
        { id: 'create:crafting/logistics/content_observer' },
        { id: 'create:milling/bone' },
    ], mod: 'create' })

    // Train Station
    event.shapeless('2x create:track_station', [
        'create:railway_casing',
        'firmaciv:firmaciv_compass'
    ]).id('create:crafting/kinetics/track_station')

    // Speedometer
    event.shapeless('create:speedometer', [
        'create:andesite_casing',
        'firmaciv:firmaciv_compass'
    ]).id('create:crafting/kinetics/speedometer')

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
    }).id('tfg:create/shaped/schematicannon')

    // Стол для схематик
    event.shaped('create:schematic_table', [
        'AAA',
        ' B ',
        ' B ' 
    ], {
        A: '#minecraft:wooden_slabs',
        B: '#tfg:rock_walls'
    }).id('tfg:create/shaped/schematic_table')

    // Вал
    event.shaped('8x create:shaft', [
        'A ',
        'AB'
    ], {
        A: '#forge:ingots/wrought_iron',
        B: '#forge:tools/files'
    }).id('tfg:create/shaped/shaft')

    event.recipes.gtceu.assembler('create/shaft')             
        .itemInputs('#forge:ingots/wrought_iron')
        .itemOutputs('6x create:shaft')
        .duration(75)
        .EUt(2)

    // Малая шестерня
    event.shaped('create:cogwheel', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: 'gtceu:treated_wood_plate',
        B: 'create:shaft'
    }).id('tfg:create/shapeless/cogwheel')

    // Большая шестерня
    event.shaped('create:large_cogwheel', [
        ' A ',
        'ABA',
        ' A ' 
    ], {
        A: 'gtceu:treated_wood_plate',
        B: 'create:cogwheel'
    }).id('tfg:create/shaped/large_cogwheel')

    // Внутриблочный двигатель цепи
    event.shapeless('create:encased_chain_drive', [
        'create:andesite_casing',
        '#forge:plates/wrought_iron',
        '#forge:plates/wrought_iron',
        '#forge:plates/wrought_iron'
    ]).id('tfg:create/shapeless/encased_chain_drive')

    // Механический пресс
    event.shaped('create:mechanical_press', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:shaft',
        B: 'create:andesite_casing',
        C: '#forge:storage_blocks/wrought_iron',
    }).id('tfg:create/shaped/mechanical_press')

    // Сопло
    event.shaped('create:nozzle', [
        'ABA',
        'ACA',
        'BBB' 
    ], {
        A: '#forge:rods/wrought_iron',
        B: '#forge:plates/wrought_iron',
        C: '#minecraft:wool'
    }).id('tfg:create/shaped/nozzle')

    // Ручка, чтобы люто крутить
    event.shaped('create:hand_crank', [
        'AAA',
        '  B'
    ], {
        A: '#tfc:lumber',
        B: '#forge:rods/wrought_iron'
    }).id('tfg:create/shaped/hand_crank')

    // Колесо для дробления
    event.recipes.createMechanicalCrafting('2x create:crushing_wheel', [
        ' AAA ',
        'AABAA',
        'ABCBA',
        'AABAA',
        ' AAA '
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#minecraft:planks',
        C: '#tfc:rock/hardened'
    }).id('tfg:create/mechanical_crafting/crushing_wheel')

    // Железный веник
    event.shaped('create:whisk', [
        'ABA',
        'ACA',
        'AAA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:rods/long/wrought_iron',
        C: '#forge:rings/wrought_iron'
    }).id('tfg:create/shaped/whisk')

    // Емкость для миксера
    event.shaped('create:basin', [
        'ABA',
        'AAA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:tools/hammers'
    }).id('tfg:create/shaped/basin')

    event.recipes.gtceu.assembler('tfg:create/basin')             
        .itemInputs('5x #forge:plates/wrought_iron')
        .circuit(3)
        .itemOutputs('create:basin')
        .duration(200)
        .EUt(20)

    // Место куда можно что то положить
    event.shapeless('create:depot', [
        'create:andesite_casing',
        '#forge:double_plates/wrought_iron'
    ]).id('tfg:create/shapeless/depot')

    // Лоток
    event.shaped('create:chute', [
        'A ',
        'AB',
        'A ' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:tools/hammers'
    }).id('tfg:create/shaped/chute')

    event.recipes.gtceu.assembler('tfg:create/chute')             
        .itemInputs('3x #forge:plates/wrought_iron')
        .circuit(4)
        .itemOutputs('create:chute')
        .duration(200)
        .EUt(20)

    // Металлический держатель
    event.shaped('create:metal_bracket', [
        'AAA',
        'BBB'
    ], {
        A: '#forge:nuggets/wrought_iron',
        B: '#forge:plates/wrought_iron'
    }).id('tfg:create/shaped/metal_bracket')

    // Жидкостная труба
    event.shaped('create:fluid_pipe', [
        ' B ',
        'BAB',
        ' B ' 
    ], {
        A: '#forge:tools/hammers', 
        B: '#forge:plates/copper'
    }).id('tfg:create/shaped/fluid_pipe')

    event.recipes.gtceu.assembler('tfg:create/fluid_pipe')             
        .itemInputs('4x #forge:plates/copper')
        .circuit(3)
        .itemOutputs('create:fluid_pipe')
        .duration(200)
        .EUt(20)

    // Жидкостный люк
    event.shapeless('create:fluid_valve', [
        'create:fluid_pipe',
        '#forge:plates/wrought_iron'
    ]).id('tfg:create/shapeless/fluid_valve')

    // Ручка жидкостного люка
    event.shaped('create:copper_valve_handle', [
        'AAA',
        'BCD'
    ], {
        A: '#forge:plates/copper',
        B: '#forge:tools/hammers',
        C: '#forge:gears/wrought_iron',
        D: '#forge:tools/files'
    }).id('tfg:create/shaped/copper_valve_handle')

    event.recipes.gtceu.assembler('tfg:create/copper_valve_handle')             
        .itemInputs('4x #forge:plates/copper', '#forge:gears/wrought_iron')
        .circuit(6)
        .itemOutputs('create:copper_valve_handle')
        .duration(200)
        .EUt(20)

    // Жидкостный резервуар
    event.shaped('create:fluid_tank', [
        'ABA',
        'BCB',
        'ABA' 
    ], {
        A: '#forge:screws/copper',
        B: '#forge:plates/copper',
        C: '#forge:glass_panes'
    }).id('tfg:create/shaped/fluid_tank')

    // Шкив для шланга
    event.shaped('create:hose_pulley', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:copper_casing',
        B: '#forge:foils/rubber',
        C: '#forge:plates/copper'
    }).id('tfg:create/shaped/hose_pulley')

    // Слив из предметов
    event.shaped('create:item_drain', [
        'A',
        'B' 
    ], {
        A: '#tfg:metal_bars',
        B: 'create:copper_casing'
    }).id('tfg:create/shaped/item_drain')

    // Жидкостный наполнитель
    event.shaped('create:spout', [
        'B',
        'A' 
    ], {
        A: '#forge:foils/rubber',
        B: 'create:copper_casing'
    }).id('tfg:create/shaped/spout')

    // Паровой двигатель
    event.shaped('create:steam_engine', [
        'ABA',
        'CDC',
        'EFG' 
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#forge:plates/brass',
        C: '#forge:rods/wrought_iron',
        D: '#forge:gears/wrought_iron',
        E: '#forge:tools/hammers',
        F: '#forge:storage_blocks/copper',
        G: '#forge:tools/screwdrivers',
    }).id('tfg:create/shaped/steam_engine')

    event.recipes.gtceu.assembler('tfg:create/steam_engine')             
        .itemInputs('2x #forge:screws/wrought_iron', '#forge:plates/brass', '2x #forge:rods/wrought_iron', '#forge:gears/wrought_iron', '#forge:storage_blocks/copper')
        .circuit(3)
        .itemOutputs('create:steam_engine')
        .duration(200)
        .EUt(32)

    // Паровой свисток
    event.shaped('create:steam_whistle', [
        'AC',
        'BD' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:rings/gold',
        C: '#forge:tools/hammers',
        D: '#forge:tools/files'
    }).id('tfg:create/shaped/steam_whistle')

    event.recipes.gtceu.assembler('tfg:create/steam_whistle')             
        .itemInputs('#forge:plates/brass', '#forge:rings/gold')
        .circuit(5)
        .itemOutputs('create:steam_whistle')
        .duration(200)
        .EUt(4)
    
    // Рука поршня
    event.shaped('8x create:piston_extension_pole', [
        'A ',
        'BC',
        'A ' 
    ], {
        A: '#minecraft:planks',
        B: '#forge:plates/wrought_iron',
        C: '#forge:tools/hammers'
    }).id('tfg:create/shaped/piston_extension_pole')

    event.recipes.gtceu.assembler('tfg:create/piston_extension_pole')             
        .itemInputs('2x #minecraft:planks', '#forge:plates/wrought_iron')
        .circuit(3)
        .itemOutputs('8x create:piston_extension_pole')
        .duration(200)
        .EUt(20)

    // Редстоуновый вал
    event.shaped('create:gantry_shaft', [
        'A ',
        'BC',
        'A ' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: 'gtceu:red_alloy_single_wire',
        C: '#forge:tools/hammers'
    }).id('tfg:create/shaped/gantry_shaft')

    event.recipes.gtceu.assembler('tfg:create/gantry_shaft')             
        .itemInputs('gtceu:red_alloy_single_wire', '2x #forge:plates/wrought_iron')
        .circuit(3)
        .itemOutputs('create:gantry_shaft')
        .duration(200)
        .EUt(20)

    // Канатный шкиф
    event.shaped('create:rope_pulley', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:andesite_casing',
        B: '#minecraft:wool',
        C: '#forge:plates/wrought_iron'
    }).id('tfg:create/shaped/rope_pulley')

    // Шкиф подъемника
    event.shaped('create:elevator_pulley', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:brass_casing',
        B: 'tfc:bellows',
        C: '#forge:plates/wrought_iron'
    }).id('tfg:create/shaped/elevator_pulley')

    // Сборщик вагонеток
    event.shaped('create:cart_assembler', [
        'ABA',
        'C C' 
    ], {
        A: '#forge:plates/steel',
        B: 'gtceu:red_alloy_single_wire',
        C: '#minecraft:logs'
    }).id('tfg:create/shaped/cart_assembler')

    // Контроллер рельсы
    event.shaped('create:controller_rail', [
        'ABA',
        'ACA',
        'ABA' 
    ], {
        A: '#forge:rods/gold',
        B: '#tfc:can_be_lit_on_torch',
        C: 'create:electron_tube'
    }).id('tfg:create/shaped/controller_rail')

    // Линейный переход
    event.shaped('3x create:linear_chassis', [
        'ABA',
        'CCC',
        'ABA' 
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#forge:plates/wrought_iron',
        C: '#minecraft:logs'
    }).id('tfg:create/shaped/linear_chassis')

    // Радиальный переход
    event.shaped('3x create:radial_chassis', [
        'ACA',
        'BCB',
        'ACA' 
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#forge:plates/wrought_iron',
        C: '#minecraft:logs'
    }).id('tfg:create/shaped/radial_chassis')

    // Умный липкий поршень
    event.shaped('create:sticker', [
        'ABA',
        'CDC' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: 'tfc:glue',
        C: '#forge:cobblestone',
        D: '#forge:dusts/redstone'
    }).id('tfg:create/shaped/sticker')

    // Механическая бурилка
    event.shaped('create:mechanical_drill', [
        'ABA',
        'BCB',
        'ADA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:drill_heads',
        C: 'create:cogwheel',
        D: 'create:andesite_casing'
    }).id('tfg:create/shaped/mechanical_drill')

    // Механическая пила
    event.shaped('create:mechanical_saw', [
        'ABA',
        'BCB',
        'ADA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:buzz_saw_heads',
        C: 'create:cogwheel',
        D: 'create:andesite_casing'
    }).id('tfg:create/shaped/mechanical_saw')

    // Редстоуновый контакт
    event.shaped('2x create:redstone_contact', [
        'DCE',
        'ABA',
        'AAA' 
    ], {
        A: '#forge:cobblestone',
        B: '#forge:dusts/redstone',
        C: '#forge:plates/wrought_iron',
        D: '#forge:screws/bronze',
        E: '#forge:tools/screwdrivers'
    }).id('tfg:create/shaped/redstone_contact')

    event.recipes.gtceu.assembler('tfg:create/redstone_contact')             
        .itemInputs('5x #forge:cobblestone', '#forge:dusts/redstone', '#forge:plates/wrought_iron', '#forge:screws/bronze')
        .circuit(3)
        .itemOutputs('2x create:redstone_contact')
        .duration(200)
        .EUt(20)

    // Механический собиратель
    event.shaped('create:mechanical_harvester', [
        'ABA',
        'ABA',
        'CDE' 
    ], {
        A: '#forge:shovel_heads',
        B: '#forge:plates/wrought_iron',
        C: '#forge:tools/hammers',
        D: 'create:andesite_casing',
        E: '#forge:tools/wrenches'
    }).id('tfg:create/shaped/mechanical_harvester')

    event.recipes.gtceu.assembler('tfg:create/mechanical_harvester')             
        .itemInputs('4x #forge:shovel_heads', '2x #forge:plates/wrought_iron', 'create:andesite_casing')
        .circuit(3)
        .itemOutputs('create:mechanical_harvester')
        .duration(200)
        .EUt(20)

    // Механический плуг
    event.shaped('create:mechanical_plough', [
        'ABA',
        'ABA',
        'CDE' 
    ], {
        A: '#forge:hoe_heads',
        B: '#forge:plates/wrought_iron',
        C: '#forge:tools/hammers',
        D: 'create:andesite_casing',
        E: '#forge:tools/wrenches'
    }).id('tfg:create/shaped/mechanical_plough')

    event.recipes.gtceu.assembler('tfg:create/mechanical_plough')             
        .itemInputs('4x #forge:hoe_heads', '2x #forge:plates/wrought_iron', 'create:andesite_casing')
        .circuit(4)
        .itemOutputs('create:mechanical_plough')
        .duration(200)
        .EUt(20)

    // Create sail creation using custom sail items.
    
    event.shaped('8x create:sail_frame',[
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#tfc:lumber',
        C: ''
    }).id('tfg:create/shaped/sail_frame')

    event.shaped('8x create:white_sail', [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'create:sail_frame',
        B: '#tfg:usable_in_sail_frame'
    }).id('tfg:create/shaped/white_sail')


    // Андезитовый корпус
    event.recipes.createItemApplication(['create:andesite_casing'], ['#minecraft:logs', '#forge:plates/wrought_iron'])
        .id('tfg:create/item_application/andesite_casing')

    event.recipes.gtceu.assembler('tfg:create/andesite_casing')             
        .itemInputs('#minecraft:logs', '#forge:plates/wrought_iron')
        .circuit(10)
        .itemOutputs('create:andesite_casing')
        .duration(50)
        .EUt(4)

    // Латунный корпус
    event.recipes.createItemApplication(['create:brass_casing'], ['#minecraft:logs', '#forge:plates/brass'])
        .id('tfg:create/item_application/brass_casing')

    event.recipes.gtceu.assembler('tfg:create/brass_casing')             
        .itemInputs('#minecraft:logs', '#forge:plates/brass')
        .circuit(10)
        .itemOutputs('create:brass_casing')
        .duration(50)
        .EUt(4)

    // Медный корпус
    event.recipes.createItemApplication(['create:copper_casing'], ['#minecraft:logs', '#forge:plates/copper'])
        .id('tfg:create/item_application/copper_casing')

    event.recipes.gtceu.assembler('tfg:create/copper_casing')             
        .itemInputs('#minecraft:logs', '#forge:plates/copper')
        .circuit(10)
        .itemOutputs('create:copper_casing')
        .duration(50)
        .EUt(4)

    // Корпус поезда
    event.recipes.createItemApplication(['create:railway_casing'], ['create:brass_casing', '#forge:plates/steel'])
        .id('tfg:create/item_application/railway_casing')

    event.recipes.gtceu.assembler('tfg:create/railway_casing')             
        .itemInputs('create:brass_casing', '#forge:plates/steel')
        .circuit(10)
        .itemOutputs('create:railway_casing')
        .duration(50)
        .EUt(4)

    // Механический крафтер
    event.shaped('create:mechanical_crafter', [
        'A',
        'B',
        'C' 
    ], {
        A: 'create:electron_tube',
        B: 'create:brass_casing',
        C: '#tfc:workbenches'
    }).id('tfg:create/shaped/mechanical_crafter')

    // Маховик
    event.shaped('create:flywheel', [
        'ABA',
        'BCB',
        'ABA' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:rods/wrought_iron',
        C: 'create:shaft'
    }).id('tfg:create/shaped/flywheel')

    // Механическая рука
    event.shaped('create:mechanical_arm', [
        'AAB',
        'AGE',
        'CDF' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:rods/wrought_iron',
        C: 'create:precision_mechanism',
        D: 'create:brass_casing',
        E: '#forge:tools/hammers',
        F: '#forge:tools/wrenches',
        G: '#forge:screws/wrought_iron'
    }).id('tfg:create/shaped/mechanical_arm')

    event.recipes.gtceu.assembler('tfg:create/mechanical_arm')             
        .itemInputs('3x #forge:plates/brass', '#forge:rods/wrought_iron', 'create:precision_mechanism', 'create:brass_casing', '#forge:screws/wrought_iron')
        .circuit(3)
        .itemOutputs('create:mechanical_arm')
        .duration(200)
        .EUt(20)

    // Наблюдатель за поездом
    event.shapeless('create:track_observer', [
        'create:railway_casing',
        '#minecraft:stone_pressure_plates'
    ]).id('tfg:create/shapeless/track_observer')

    // Сейф
    event.shaped('create:item_vault', [
        'CBC',
        'AAA',
        'CDC' 
    ], {
        A: '#forge:chests/wooden',
        B: '#forge:sheets/wrought_iron',
        C: '#forge:screws/steel',
        D: '#forge:tools/screwdrivers'
    }).id('tfg:create/shaped/item_vault')

    event.recipes.gtceu.assembler('tfg:create/item_vault')             
        .itemInputs('3x #forge:chests/wooden', '#forge:sheets/wrought_iron', '2x #forge:screws/steel')
        .circuit(3)
        .itemOutputs('create:item_vault')
        .duration(200)
        .EUt(20)

    // Умный раздатчик/приемник из железа
    event.shaped('2x create:andesite_funnel', [
        'AAA',
        'ABA',
        'ABA' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:foils/rubber'
    }).id('tfg:create/shaped/andesite_funnel')

    // Умный раздатчик/приемник из латуни
    event.shaped('2x create:brass_funnel', [
        'AAA',
        'ABA',
        'ABA' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:foils/rubber'
    }).id('tfg:create/shaped/brass_funnel')

    // Тунель из железа
    event.shaped('create:andesite_tunnel', [
        'C ',
        'AA',
        'BB' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:foils/rubber',
        C: 'create:electron_tube'
    }).id('tfg:create/shaped/andesite_tunnel')

    // Тунель из латуни
    event.shaped('create:brass_tunnel', [
        'C ',
        'AA',
        'BB' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:foils/rubber',
        C: 'create:electron_tube'
    }).id('tfg:create/shaped/brass_tunnel')

    // Дисплей столешница (чзх)
    event.shaped('create:display_board', [
        ' A ',
        'BCB',
        ' A ' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:rings/wrought_iron',
        C: 'create:cogwheel'
    }).id('tfg:create/shaped/display_board')

    // Пропеллер
    event.shaped('create:propeller', [
        'AB ',
        'BCB',
        ' BA' 
    ], {
        A: '#forge:tools/hammers',
        B: '#forge:plates/wrought_iron',
        C: '#forge:rotors'
    }).id('tfg:create/shaped/propeller')

    event.recipes.gtceu.assembler('tfg:create/propeller')             
        .itemInputs('4x #forge:plates/wrought_iron', '#forge:rotors')
        .circuit(3)
        .itemOutputs('create:propeller')
        .duration(200)
        .EUt(20)

    // Латунная рука
    event.shaped('create:brass_hand', [
        ' AB',
        'CCA',
        ' C ' 
    ], {
        A: '#forge:tools/hammers',
        B: '#forge:nuggets/brass',
        C: '#forge:plates/brass'
    }).id('tfg:create/shaped/brass_hand')

    event.recipes.gtceu.assembler('tfg:create/brass_hand')             
        .itemInputs('3x #forge:nuggets/brass', '#forge:plates/brass')
        .circuit(3)
        .itemOutputs('create:brass_hand')
        .duration(200)
        .EUt(20)

    // Электронная трубка
    event.shaped('create:electron_tube', [
        ' A ',
        'BCB',
        'DED' 
    ], {
        A: 'gtceu:glass_tube',
        B: '#gtceu:resistors',
        C: 'gtceu:resin_circuit_board',
        D: 'gtceu:red_alloy_single_wire',
        E: '#forge:plates/wrought_iron'
    }).id('tfg:create/shaped/electron_tube')

    event.shaped('2x create:electron_tube', [
        ' A ',
        'BCB',
        'DED' 
    ], {
        A: 'gtceu:glass_tube',
        B: '#gtceu:resistors',
        C: 'gtceu:plastic_circuit_board',
        D: 'gtceu:red_alloy_single_wire',
        E: '#forge:plates/wrought_iron'
    }).id('tfg:create/shaped/electron_tube2')

    event.shaped('3x create:electron_tube', [
        ' A ',
        ' B ',
        ' C '
    ], {
        A: 'gtceu:glass_tube',
        B: 'gtceu:nand_chip',
        C: '#forge:plates/wrought_iron'
    }).id('tfg:create/shaped/electron_tube3')

    // Тюбик с клеем
    event.shaped('create:super_glue', [
        'BA',
        'CB' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: 'tfc:glue',
        C: '#forge:nuggets/wrought_iron'
    }).id('tfg:create/shaped/super_glue')

    // Соединятор вагонеток
    event.shapeless('create:minecart_coupling', [
        '#tfg:metal_chains',
        '#forge:bolts',
        '#tfg:metal_chains',
        '#forge:bolts',
        '#tfg:metal_chains',
        '#forge:tools/hammers'
    ]).id('tfg:create/shapeless/minecart_coupling')

    event.recipes.gtceu.assembler('tfg:create/minecart_coupling')             
        .itemInputs('3x #tfg:metal_chains', '2x #forge:bolts')
        .circuit(1)
        .itemOutputs('create:minecart_coupling')
        .duration(200)
        .EUt(20)

    // Блупринт создания
    event.shapeless('create:crafting_blueprint', [
        'minecraft:painting',
        '#tfc:workbenches'
    ]).id('tfg:create/shapeless/crafting_blueprint')

    // Медная бочка на спину
    event.shaped('create:copper_backtank', [
        'ABA',
        'CDC',
        ' C ' 
    ], {
        A: '#forge:screws/wrought_iron',
        B: 'create:shaft',
        C: '#forge:plates/copper',
        D: 'create:fluid_tank'
    }).id('tfg:create/shaped/copper_backtank')

    // Шлем для дайвинга
    event.shaped('create:copper_diving_helmet', [
        'ABA',
        'CDC' 
    ], {
        A: '#forge:plates/copper',
        B: 'tfc:metal/helmet/copper',
        C: 'gtceu:polyethylene_tiny_fluid_pipe',
        D: '#forge:glass_panes'
    }).id('tfg:create/shaped/copper_diving_helmet')

    // Ботинки для дайвинга
    event.shaped('create:copper_diving_boots', [
        'ABA',
        'CDC' 
    ], {
        A: '#forge:plates/copper',
        B: 'tfc:metal/boots/copper',
        C: 'gtceu:polyethylene_tiny_fluid_pipe',
        D: '#forge:foils/rubber'
    }).id('tfg:create/shaped/copper_diving_boots')

    // Херь, увеличивающая дистанцию копки
    event.recipes.createMechanicalCrafting('create:extendo_grip', [
        ' A ',
        ' B ',
        'CCC',
        'CCC',
        ' D '
    ], {
        A: '#forge:plates/brass',
        B: 'create:precision_mechanism',
        C: '#forge:rods/wooden',
        D: 'create:brass_hand'
    }).id('tfg:create/mechanical_crafting/extendo_grip')

    // Херь, устанавливающая блоки зеркально
    event.recipes.createMechanicalCrafting('create:wand_of_symmetry', [
        '  A  ',
        ' ABA ',
        '  C  ',
        '  D  ',
        '  E  '
    ], {
        A: '#forge:glass',
        B: 'minecraft:redstone_lamp',
        C: 'create:precision_mechanism',
        D: '#forge:plates/brass',
        E: 'minecraft:obsidian'
    }).id('tfg:create/mechanical_crafting/wand_of_symmetry')

    // Фильтр список
    event.shaped('create:filter', [
        'ABA'
    ], {
        A: '#forge:nuggets/wrought_iron',
        B: '#minecraft:wool'
    }).id('tfg:create/shaped/filter')

    // Фильтр аттрибутов
    event.shaped('create:attribute_filter', [
        'ABA'
    ], {
        A: '#forge:nuggets/brass',
        B: '#minecraft:wool'
    }).id('tfg:create/shaped/attribute_filter')

    // Расписание поездов
    event.shapeless('4x create:schedule', [
        'minecraft:paper',
        '#forge:dyes/black'
    ]).id('tfg:create/shapeless/schedule')

    // Дневник
    event.shaped('create:clipboard', [
        'A',
        'B',
        'C' 
    ], {
        A: '#forge:bolts/wrought_iron',
        B: '#forge:plates/wood',
        C: 'minecraft:paper'
    }).id('tfg:create/shaped/clipboard')

    // Лестница из железа
    event.shaped('6x create:andesite_ladder', [
        'A A',
        'AAA',
        'A A' 
    ], {
        A: '#forge:rods/wrought_iron'
    }).id('tfg:create/shaped/andesite_ladder')

    // Лестница из латуни
    event.shaped('6x create:brass_ladder', [
        'A A',
        'AAA',
        'A A' 
    ], {
        A: '#forge:rods/brass'
    }).id('tfg:create/shaped/brass_ladder')

    // Лестница из железа
    event.shaped('6x create:copper_ladder', [
        'A A',
        'AAA',
        'A A' 
    ], {
        A: '#forge:rods/copper'
    }).id('tfg:create/shaped/copper_ladder')

    // Леса из железа
    event.shaped('4x create:andesite_scaffolding', [
        'AAA',
        'A A' 
    ], {
        A: '#forge:rods/wrought_iron'
    }).id('tfg:create/shaped/andesite_scaffolding')

    // Леса из латуни
    event.shaped('4x create:brass_scaffolding', [
        'AAA',
        'A A' 
    ], {
        A: '#forge:rods/brass'
    }).id('tfg:create/shaped/brass_scaffolding')

    // Леса из железа
    event.shaped('4x create:copper_scaffolding', [
        'AAA',
        'A A' 
    ], {
        A: '#forge:rods/copper'
    }).id('tfg:create/shaped/copper_scaffolding')

    // Цинковая ступень
    event.shapeless('create:copycat_step', [
        '#forge:plates/zinc',
        '#forge:tools/files'
    ]).id('tfg:create/shapeless/copycat_step')

    // Цинковая панель
    event.shapeless('create:copycat_panel', [
        '#forge:double_plates/zinc',
        '#forge:tools/files'
    ]).id('tfg:create/shapeless/copycat_panel')

    event.recipes.gtceu.assembler('tfg:create/copycat_panel')             
        .itemInputs('#forge:double_plates/zinc')
        .circuit(5)
        .itemOutputs('create:copycat_panel')
        .duration(200)
        .EUt(20)

    // Деталь рельса
    event.shaped('3x create:metal_girder', [
        'AAA',
        'BBB' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:nuggets/wrought_iron'
    }).id('tfg:create/shaped/metal_girder')

    // Стеклянная дверь
    event.shapeless('create:framed_glass_door', [
        '#minecraft:wooden_doors',
        'minecraft:glass_pane'
    ]).id('tfg:create/shapeless/framed_glass_door')

    // Стеклянный люк
    event.shapeless('create:framed_glass_trapdoor', [
        '#minecraft:wooden_trapdoors',
        'minecraft:glass_pane'
    ]).id('tfg:create/shapeless/framed_glass_trapdoor')

    // 
    event.recipes.createMechanicalCrafting('create:potato_cannon', [
        'ABCCC',
        'DD   '
    ], {
        A: '#forge:screws/copper',
        B: 'create:precision_mechanism',
        C: 'create:fluid_pipe',
        D: '#forge:plates/copper'
    }).id('tfg:create/mechanical_crafting/potato_cannon')

    // Липкий механический поршень
    event.shaped('create:sticky_mechanical_piston', [
        'A',
        'B' 
    ], {
        A: 'tfc:glue',
        B: 'create:mechanical_piston'
    }).id('tfg:create/shaped/sticky_mechanical_piston_from_glue')

    event.shaped('create:sticky_mechanical_piston', [
        'A',
        'B',
        'C'
    ], {
        A: '#forge:tools/hammers',
        B: 'gtceu:sticky_resin',
        C: 'create:mechanical_piston',
    }).id('tfg:create/shaped/sticky_mechanical_piston_from_sticky_resin')

    event.recipes.gtceu.assembler('tfg:create/sticky_mechanical_piston_from_liquid_glue')             
        .itemInputs('create:mechanical_piston')
        .inputFluids(Fluid.of('gtceu:glue', 100))
        .itemOutputs('create:sticky_mechanical_piston')
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.assembler('tfg:create/sticky_mechanical_piston_from_slimeball')             
        .itemInputs('create:mechanical_piston', 'minecraft:slimeball')
        .itemOutputs('create:sticky_mechanical_piston')
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.assembler('tfg:create/sticky_mechanical_piston_from_sticky_resin')             
        .itemInputs('create:mechanical_piston', 'gtceu:sticky_resin')
        .itemOutputs('create:sticky_mechanical_piston')
        .duration(100)
        .EUt(4)

    // Ремень
    event.recipes.tfc.knapping('create:belt_connector', 'tfc:leather', [
        " XXX ",
        " XXX ",
        " XXX ",
        " XXX ",
        " XXX ",
    ]).ingredient('#tfc:leather_knapping').id('tfg:create/shaped/belt_connector')

    event.recipes.gtceu.assembler('tfg:create/belt_connector')             
        .itemInputs('minecraft:leather')
        .circuit(2)
        .itemOutputs('create:belt_connector')
        .duration(25)
        .EUt(16)
        
    //#region Покраска ручек от люка

    event.recipes.tfc.barrel_sealed(1000)
        .inputs('#tfg:colored_valve_handles', Fluid.of(`tfc:lye`, 25))
        .outputItem(`create:copper_valve_handle`)
        .id(`barrel/create/valve_handle_decolor`)

    event.recipes.gtceu.chemical_bath(`create/valve_handle_decolor`)             
        .itemInputs('#tfg:colored_valve_handles')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 72))
        .itemOutputs('create:copper_valve_handle')
        .duration(150)
        .EUt(4)

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.recipes.tfc.barrel_sealed(1000)
            .inputs('create:copper_valve_handle', Fluid.of(`tfc:${dye}_dye`, 25))
            .outputItem(`create:${dye}_valve_handle`)
            .id(`barrel/create/${dye}_valve_handle`)

        event.recipes.gtceu.chemical_bath(`create/${dye}_valve_handle`)             
            .itemInputs('create:copper_valve_handle')
            .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 144))
            .itemOutputs(`create:${dye}_valve_handle`)
            .duration(300)
            .EUt(4)
    })

    //#endregion

    //#region Покраска тулбоксов

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        if (dye != 'brown') {
            event.remove({ id: `create:create.toolbox.color.block.create.${dye}_toolbox` })

            event.recipes.tfc.barrel_sealed(1000)
                .inputs('create:brown_toolbox', Fluid.of(`tfc:${dye}_dye`, 50))
                .outputItem(`create:${dye}_toolbox`)
                .id(`barrel/create/${dye}_toolbox`)
    
            event.recipes.gtceu.chemical_bath(`create/${dye}_toolbox`)             
                .itemInputs('create:brown_toolbox')
                .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 96))
                .itemOutputs(`create:${dye}_toolbox`)
                .duration(200)
                .EUt(4)
        }
        
    })

    //#endregion

    //#region Покраска сидушек

    event.recipes.tfc.barrel_sealed(1000)
        .inputs('#tfg:colored_seats', Fluid.of(`tfc:lye`, 25))
        .outputItem(`create:white_seat`)
        .id(`barrel/create/seat_decolor`)

    event.recipes.gtceu.chemical_bath(`create/seat_decolor`)             
        .itemInputs('#tfg:colored_seats')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 72))
        .itemOutputs('create:white_seat')
        .duration(200)
        .EUt(4)

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        if (dye != "white") {
            
            event.recipes.tfc.barrel_sealed(1000)
                .inputs(`create:white_seat`, Fluid.of(`tfc:${dye}_dye`, 50))
                .outputItem(`create:${dye}_seat`)
                .id(`barrel/create/${dye}_seat`)

            event.recipes.gtceu.chemical_bath(`create/${dye}_seat`)             
                .itemInputs(`create:white_seat`)
                .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 144))
                .itemOutputs(`create:${dye}_seat`)
                .duration(300)
                .EUt(4)
        }
    })

    //#endregion

    //#region Механизм точности

    event.recipes.gtceu.assembler('tfg:create/precision_mechanism')
        .itemInputs('#forge:sheets/gold','3x create:cogwheel', '3x create:large_cogwheel', '3x #forge:nuggets/iron')
        .itemOutputs('create:precision_mechanism')
        .duration(2000)
        .EUt(20)

    //#endregion
  
    //#region Blaze burner
	
    event.shaped('create:blaze_burner', [
        'B B',
        'BAB',
        'CCC' 
    ], {
        A: 'minecraft:coal_block',
        B: 'tfc:metal/bars/blue_steel',
		C: 'gtceu:blue_steel_plate',
    }).id('tfg:create/shaped/blaze_burner')
	
	//#endregion

    // #region So-called "Shit Glass"
	
	event.shaped('4x create:framed_glass',
	[
		'AA',
		'AA'
	], {
		A: 'minecraft:glass'
	}).id('tfg:create/framed_glass')
	
	event.shaped('4x create:tiled_glass',
	[
		'A A',
		'   ',
		'A A'
	], {
		A: 'minecraft:glass'
	}).id('tfg:create/tiled_glass')
	
	event.shaped('4x create:horizontal_framed_glass',
	[
		'AA',
		'  ',
		'AA'
	], {
		A: 'minecraft:glass'
	}).id('tfg:create/horizontal_framed_glass')
	
	event.shaped('4x create:vertical_framed_glass',
	[
		'A A',
		'A A'
	], {
		A: 'minecraft:glass'
	}).id('tfg:create/vertical_framed_glass')
	
	const CREATE_FRAMED_GLASS_WINDOWS =
	[
		'framed_glass',
		'tiled_glass',
		'horizontal_framed_glass',
		'vertical_framed_glass'
	]
	
	CREATE_FRAMED_GLASS_WINDOWS.forEach(x => {
		event.shapeless(`2x create:${x}_pane`,
		[ 
			`create:${x}`,
			'#forge:tools/saws'
		])
		.id(`tfg:create/shapeless/${x}_pane`)
		
		event.recipes.gtceu.cutter(`tfg:create/${x}_pane`)
			.itemInputs(`3x create:${x}`)
			.itemOutputs(`8x create:${x}_pane`)
			.duration(40)
			.EUt(20)
	})

	const CREATE_OTHER_GLASS_WINDOWS =
	[
		[ 'dark_oak', 'tfc:wood/lumber/hickory' ],
		[ 'mangrove', 'tfc:wood/lumber/mangrove' ],
		[ 'ornate_iron', 'gtceu:wrought_iron_rod' ]
	]
	
	CREATE_OTHER_GLASS_WINDOWS.forEach(x => {
		event.shaped(`2x create:${x[0]}_window`,
		[
			' B ',
			'BAB'
		], {
			A: 'minecraft:glass',
			B: x[1]
		}).id(`tfg:create/shaped/${x[0]}_window`)
		
		event.shapeless(`2x create:${x[0]}_window_pane`,
		[ 
			`create:${x[0]}_window`, 
			'#forge:tools/saws' 
		])
		.id(`tfg:create/shapeless/${x[0]}_window_pane`)
		
		event.recipes.gtceu.cutter(`tfg:create/${x[0]}_window_pane`)
			.itemInputs(`3x create:${x[0]}_window`)
			.itemOutputs(`8x create:${x[0]}_window_pane`)
			.duration(40)
			.EUt(20)
	})

    //Allow automatic scraping by using sequenced assembly
    event.forEachRecipe({ type: 'tfc:scraping' }, r =>
    {
        let originalRecipeIngredient = r.json.get("ingredient").get("item");
        let output = r.originalRecipeResult;

        event.recipes.createSequencedAssembly([output], originalRecipeIngredient,[
            event.recipes.createDeploying(originalRecipeIngredient, [originalRecipeIngredient, '#tfc:knives']).keepHeldItem()
        ]).transitionalItem(originalRecipeIngredient).loops(16)
    })
	
	// #endregion
}
