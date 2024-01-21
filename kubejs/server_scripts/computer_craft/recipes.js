// priority: 0

const registerComputerCraftRecipes = (event) => {
    
    // Удаление рецептов мода
    event.remove({ not: [
        { id: 'computercraft:printed_pages' },
        { id: 'computercraft:printed_book' },
    ], mod: 'computercraft' });

    // Networking Cable
    event.recipes.gtceu.assembler('computercraft:cable')
        .itemInputs('ae2:fluix_glass_cable')
        .inputFluids(Fluid.of('gtceu:redstone', 288))
        .itemOutputs('computercraft:cable')
        .duration(80)
        .EUt(120)
    
    // Wireless Modem Normal
    event.shaped('computercraft:wireless_modem_normal', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'gtceu:hv_sensor',
        B: 'ae2:calculation_processor',
        C: '#gtceu:circuits/hv',
        D: 'computercraft:cable',
    }).id('tfg:crafting/wireless_modem_normal')

    // Wireless Modem Advanced
    event.shaped('computercraft:wireless_modem_advanced', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'ae2:wireless_receiver',
        B: 'ae2:calculation_processor',
        C: '#gtceu:circuits/hv',
        D: 'computercraft:cable',
    }).id('tfg:crafting/wireless_modem_advanced')

    // Monitor Normal
    event.shaped('computercraft:monitor_normal', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:magnesium_diboride_single_wire',
        B: 'gtceu:computer_monitor_cover',
        C: 'ae2:calculation_processor',
        D: 'gtceu:mv_machine_casing',
        E: 'computercraft:cable',
        F: '#gtceu:circuits/mv',
    }).id('tfg:crafting/monitor_normal')

    // Monitor Advanced
    event.shaped('computercraft:monitor_advanced', [
        'ABA',
        'CDC',
        'EFE'
    ], {
        A: 'gtceu:mercury_barium_calcium_cuprate_single_wire',
        B: 'gtceu:computer_monitor_cover',
        C: 'ae2:calculation_processor',
        D: 'gtceu:hv_machine_casing',
        E: 'computercraft:cable',
        F: '#gtceu:circuits/hv',
    }).id('tfg:crafting/monitor_advanced')

    // Disk Drive
    event.shaped('computercraft:disk_drive', [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'computercraft:cable',
        B: 'ae2:drive',
        C: '#gtceu:circuits/hv',
        D: 'gtceu:hv_machine_casing',
        E: 'gtceu:hv_sensor',
    }).id('tfg:crafting/disk_drive')

    // Speaker
    event.shaped('computercraft:speaker', [
        ' A ',
        'BCB',
        ' D '
    ], {
        A: 'minecraft:note_block',
        B: 'computercraft:cable',
        C: 'gtceu:mv_machine_casing',
        D: '#gtceu:circuits/mv',
    }).id('tfg:crafting/speaker')

    // Printer
    event.shaped('computercraft:printer', [
        'ABC',
        'DED',
        'FBF'
    ], {
        A: 'gtceu:mv_electric_motor',
        B: '#gtceu:circuits/mv',
        C: 'gtceu:mv_robot_arm',
        D: 'computercraft:cable',
        E: 'gtceu:mv_machine_casing',
        F: 'gtceu:mv_conveyor_module'
    }).id('tfg:crafting/printer')

    // Wired Modem
    event.shaped('computercraft:wired_modem', [
        ' A ',
        'BCB',
        'BDB'
    ], {
        A: 'gtceu:mv_sensor',
        B: 'computercraft:cable',
        C: '#gtceu:circuits/mv',
        D: 'ae2:calculation_processor',
    }).id('tfg:crafting/wired_modem')

    event.shapeless('computercraft:wired_modem', ['computercraft:wired_modem_full'])
        .id('tfg:crafting/wired_modem_shapeless')

    event.shapeless('computercraft:wired_modem_full', ['computercraft:wired_modem'])
        .id('tfg:crafting/wired_modem_full_shapeless')

    // Computer Normal
    event.shaped('computercraft:computer_normal', [
        'AB ',
        'CD ',
        'EAE'
    ], {
        A: 'gtceu:magnesium_diboride_single_wire',
        B: 'gtceu:computer_monitor_cover',
        C: '#gtceu:batteries/mv',
        D: 'gtceu:mv_machine_casing',
        E: '#gtceu:circuits/hv'
    }).id('tfg:crafting/computer_normal')

    // Computer Advanced
    event.shaped('computercraft:computer_advanced', [
        'AB ',
        'CD ',
        'EAE'
    ], {
        A: 'gtceu:mercury_barium_calcium_cuprate_single_wire',
        B: 'gtceu:computer_monitor_cover',
        C: '#gtceu:batteries/hv',
        D: 'gtceu:hv_machine_casing',
        E: '#gtceu:circuits/ev'
    }).id('tfg:crafting/computer_advanced')

    // Turtle Normal
    event.shaped('computercraft:turtle_normal', [
        'ABC',
        'DFD',
        'EGH'
    ], {
        A: 'gtceu:hv_conveyor_module',
        B: 'gtceu:hv_emitter',
        C: 'gtceu:hv_sensor',
        D: 'gtceu:hv_robot_arm',
        E: '#gtceu:circuits/ev',
        F: 'computercraft:computer_normal',
        G: 'gtceu:steel_crate',
        H: 'gtceu:hv_electric_piston',
    }).id('tfg:crafting/turtle_normal')

    // Turtle Advanced
    event.shaped('computercraft:turtle_advanced', [
        'ABC',
        'DFD',
        'EGH'
    ], {
        A: 'gtceu:ev_conveyor_module',
        B: 'gtceu:ev_emitter',
        C: 'gtceu:ev_sensor',
        D: 'gtceu:ev_robot_arm',
        E: '#gtceu:circuits/iv',
        F: 'computercraft:computer_advanced',
        G: 'gtceu:aluminium_crate',
        H: 'gtceu:ev_electric_piston',
    }).id('tfg:crafting/turtle_advanced')

    // Disk Crafts
    for (let i = 0; i < 16; i++) {
        event.recipes.gtceu.chemical_bath('computercraft:disk' + `${global.MINECRAFT_DYE_NAMES[i]}`)
            .itemInputs('ae2:blank_pattern')
            .inputFluids(Fluid.of(`gtceu:${global.MINECRAFT_DYE_NAMES[i]}_dye`, 288))
            .itemOutputs(Item.of('computercraft:disk', global.COMPUTER_CRAFT_DISCS[i]))
            .duration(20)
            .EUt(7)
    }

    // Normal Pocket  Computers
    // Pocket Computer Normal
    event.shaped('computercraft:pocket_computer_normal', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: 'ae2:wireless_receiver',
        B: 'gtceu:mercury_barium_calcium_cuprate_single_wire',
        C: '#gtceu:batteries/hv',
        D: 'ae2:terminal',
        E: 'gtceu:hv_emitter',
        F: '#gtceu:circuits/ev',
        G: '#forge:plates/titanium'
    }).id('tfg:crafting/pocket_computer_normal')

    // Pocket Computer Normal Upgrade : Wireless Modem Advanced
    event.shapeless(Item.of('computercraft:pocket_computer_normal', '{Upgrade:"computercraft:wireless_modem_advanced"}'), [
        'computercraft:pocket_computer_normal', 
        'computercraft:wireless_modem_advanced'
    ]).id('computercraft:ender_pocket_computer_normal_shapless')
    
    // Pocket Computer Normal Upgrade : Wireless Modem Normal
    event.shapeless(Item.of('computercraft:pocket_computer_normal', '{Upgrade:"computercraft:wireless_modem_normal"}'), [
        'computercraft:pocket_computer_normal', 
        'computercraft:wireless_modem_normal'
    ]).id('computercraft:wireless_pocket_computer_normal_shapless')

    // Pocket Computer Normal Upgrade : Speaker
    event.shapeless(Item.of('computercraft:pocket_computer_normal', '{Upgrade:"computercraft:speaker"}'), [
        'computercraft:pocket_computer_normal', 
        'computercraft:speaker'
    ]).id('computercraft:noisy_pocket_computer_normal_shapless')

    // Advanced Pocket Computers
    // Pocket Computer Advanced
    event.shaped('computercraft:pocket_computer_advanced', [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: 'ae2:wireless_receiver',
        B: 'gtceu:uranium_triplatinum_single_wire',
        C: '#gtceu:batteries/ev',
        D: 'ae2:terminal',
        E: 'gtceu:ev_emitter',
        F: '#gtceu:circuits/iv',
        G: '#forge:plates/tungsten_steel'
    }).id('tfg:crafting/pocket_computer_advanced')

    // Pocket Computer Advanced Upgrade : Wireless Modem Advanced
    event.shapeless(Item.of('computercraft:pocket_computer_advanced', '{Upgrade:"computercraft:wireless_modem_advanced"}'), [
        'computercraft:pocket_computer_advanced', 
        'computercraft:wireless_modem_advanced'
    ]).id('computercraft:ender_pocket_computer_advanced_shapless')
    
    // Pocket Computer Advanced Upgrade : Wireless Modem Normal
    event.shapeless(Item.of('computercraft:pocket_computer_advanced', '{Upgrade:"computercraft:wireless_modem_normal"}'), [
        'computercraft:pocket_computer_advanced', 
        'computercraft:wireless_modem_normal'
    ]).id('computercraft:wireless_pocket_computer_advanced_shapless')

    // Pocket Computer Advanced Upgrade : Speaker
    event.shapeless(Item.of('computercraft:pocket_computer_advanced', '{Upgrade:"computercraft:speaker"}'), [
        'computercraft:pocket_computer_advanced', 
        'computercraft:speaker'
    ]).id('computercraft:noisy_pocket_computer_advanced_shapless')

    
}