

const registerADRecipes = (event) => {

    //удаление рецептов мода
    //event.remove({ mod: 'advancedperipherals' });

    //
    event.shaped('advancedperipherals:peripheral_casing', [
        'CBC',
        'ADA',
        'AAA',
    ], {
        A: '#forge:plates/titanium',
        B: '#gtceu:circuits/ev',
        C: '#forge:double_wires/uranium_triplatinum',
        D: 'gtceu:ev_machine_hull',
    }).id('advancedperipherals:crafting/peripheral_casing')

    event.shaped('advancedperipherals:environment_detector', [
        'ABA',
        'CDC',
        'EFE',
    ], {
        A: 'gtceu:ev_sensor',
        B: 'gtceu:computer_monitor_cover',
        C: 'gtceu:ev_emitter',
        D: 'advancedperipherals:peripheral_casing',
        E: '#gtceu:circuits/iv',
        F: 'gtceu:advanced_item_detector_cover',
    }).id('advancedperipherals:crafting/environment_detector')

    event.shaped('advancedperipherals:chat_box', [
        ' B ',
        'CDC',
        'EFE',
    ], {
        B: 'gtceu:computer_monitor_cover',
        C: 'gtceu:iv_emitter',
        D: 'advancedperipherals:peripheral_casing',
        E: '#gtceu:circuits/luv',
        F: '#forge:double_wires/uranium_triplatinum',
    }).id('advancedperipherals:crafting/chat_box')

    event.shaped('advancedperipherals:player_detector', [
        'ABA',
        'CDC',
        'EFE',
    ], {
        A: 'gtceu:luv_sensor',
        B: 'gtceu:computer_monitor_cover',
        C: 'gtceu:luv_emitter',
        D: 'advancedperipherals:peripheral_casing',
        E: '#gtceu:circuits/luv',
        F: '#forge:double_wires/indium_tin_barium_titanium_cuprate',
    }).id('advancedperipherals:crafting/player_detector')

    event.shaped('advancedperipherals:me_bridge', [
        'ABC',
        'BDB',
        'EFG',
    ], {
        A: 'gtceu:ev_sensor',
        B: 'expatternprovider:ex_interface',
        C: 'gtceu:advanced_energy_detector_cover',
        D: 'advancedperipherals:peripheral_casing',
        E: 'gtceu:advanced_item_detector_cover',
        F: 'ae2:controller',
        G: 'gtceu:advanced_fluid_detector_cover',
    }).id('advancedperipherals:crafting/me_bridge')

    event.shaped('advancedperipherals:energy_detector', [
        'ABA',
        'CDC',
        'EFE',
    ], {
        A: 'gtceu:ev_sensor',
        B: 'gtceu:computer_monitor_cover',
        C: 'gtceu:ev_emitter',
        D: 'advancedperipherals:peripheral_casing',
        E: '#gtceu:circuits/ev',
        F: 'gtceu:advanced_energy_detector_cover',
    }).id('advancedperipherals:crafting/energy_detector')

    event.shaped('advancedperipherals:inventory_manager', [
        'ABA',
        'CDC',
        'EFE',
    ], {
        A: 'gtceu:ev_sensor',
        B: 'gtceu:computer_monitor_cover',
        C: 'gtceu:ev_emitter',
        D: 'advancedperipherals:peripheral_casing',
        E: '#gtceu:circuits/ev',
        F: 'gtceu:hv_super_chest',
    }).id('advancedperipherals:crafting/inventory_manager')

    event.shaped('advancedperipherals:redstone_integrator', [
        ' B ',
        'ADA',
        'EFE',
    ], {
        A: 'gtceu:ev_sensor',
        B: 'gtceu:computer_monitor_cover',
        D: 'advancedperipherals:peripheral_casing',
        E: '#gtceu:circuits/ev',
        F: 'gtceu:advanced_activity_detector_cover',
    }).id('advancedperipherals:crafting/redstone_integrator')

    event.shaped('advancedperipherals:block_reader', [
        'EBE',
        'ADA',
        'EFE',
    ], {
        A: 'gtceu:ev_sensor',
        B: 'gtceu:computer_monitor_cover',
        D: 'advancedperipherals:peripheral_casing',
        E: '#gtceu:circuits/ev',
        F: '#forge:double_wires/uranium_triplatinum',
    }).id('advancedperipherals:crafting/block_reader')

    event.shaped('advancedperipherals:geo_scanner', [
        'ABA',
        'CDC',
        'EFE',
    ], {
        A: 'gtceu:luv_sensor',
        B: 'gtceu:prospector.luv',
        C: 'gtceu:luv_emitter',
        D: 'advancedperipherals:peripheral_casing',
        E: '#gtceu:circuits/luv',
        F: 'computercraft:wired_modem_full',
    }).id('advancedperipherals:crafting/geo_scanner')

    event.shaped('advancedperipherals:nbt_storage', [
        ' A ',
        'ADA',
        'EBE',
    ], {
        A: 'gtceu:ev_sensor',
        B: 'gtceu:digital_interface_cover',
        D: 'advancedperipherals:peripheral_casing',
        E: '#gtceu:circuits/ev',
    }).id('advancedperipherals:crafting/nbt_storage')

    event.recipes.gtceu.assembler('advancedperipherals:overpowered_weak_automata_core')
        .itemInputs('advancedperipherals:weak_automata_core', '2x gtceu:wetware_processor')
        .itemOutputs('advancedperipherals:overpowered_weak_automata_core')
        .duration(8000)
        .EUt(480)

    event.recipes.gtceu.assembler('advancedperipherals:overpowered_end_automata_core')
        .itemInputs('advancedperipherals:end_automata_core', '2x gtceu:wetware_processor')
        .itemOutputs('advancedperipherals:overpowered_end_automata_core')
        .duration(8000)
        .EUt(480)

    event.recipes.gtceu.assembler('advancedperipherals:overpowered_husbandry_automata_core')
        .itemInputs('advancedperipherals:husbandry_automata_core', '2x gtceu:wetware_processor')
        .itemOutputs('advancedperipherals:overpowered_husbandry_automata_core')
        .duration(8000)
        .EUt(480)

    
}