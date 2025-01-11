// priority: 0

const registerCreateAdditionsRecipes = (event) => {
    
    // Удаление рецептов 
    event.remove({ mod: 'createaddition' });

    // Прокатный стан
    event.shaped('createaddition:rolling_mill', [
        'ABA',
        'CBC',
        'DED' 
    ], {
        A: '#forge:plates/wrought_iron',
        B: 'create:shaft',
        C: '#forge:gears/wrought_iron',
        D: '#forge:rings/wrought_iron',
        E: 'create:andesite_casing',
    }).id('tfg:create_additions/shaped/rolling_mill')

    // Цифровой адаптер
    event.shaped('createaddition:digital_adapter', [
        'ABA',
        'BCB',
        'ABA' 
    ], {
        A: '#forge:plates/brass',
        B: 'gtceu:red_alloy_single_wire',
        C: 'computercraft:wired_modem',
    }).id('tfg:create_additions/shaped/digital_adapter')

    // Портативный энергетический интерфейс
    event.shaped('createaddition:portable_energy_interface', [
        'ABC',
        'DEC',
        'ADC' 
    ], {
        A: '#forge:plates/brass',
        B: 'create:chute',
        C: 'gtceu:copper_octal_wire',
        D: 'gtceu:copper_single_cable',
        E: 'create:brass_casing'
    }).id('tfg:create_additions/shaped/portable_energy_interface')

    // Батарейный блок
    event.recipes.gtceu.assembler('create_additions/battery')             
        .itemInputs('gtceu:bronze_frame', '6x gtceu:bronze_plate', '24x gtceu:bronze_screw', '#gtceu:batteries/hv')
        .itemOutputs('createaddition:modular_accumulator')
        .duration(400)
        .EUt(512)

    // Колючая проволка
    event.shapeless('4x createaddition:barbed_wire', [
        '#forge:rods/wrought_iron',
        '#forge:rods/long/wrought_iron',
        '#forge:rods/wrought_iron',
        '#forge:rods/long/wrought_iron',
        '#forge:rods/wrought_iron',
        '#forge:rods/long/wrought_iron',
        '#forge:rods/wrought_iron',
        '#forge:rods/long/wrought_iron',
        '#forge:tools/hammers'
    ]).id('tfg:create_additions/shapeless/barbed_wire')

    event.recipes.gtceu.assembler('tfg:createaddition/barbed_wire')             
        .itemInputs('4x #forge:rods/wrought_iron', '4x #forge:rods/long/wrought_iron')
        .circuit(3)
        .itemOutputs('4x createaddition:barbed_wire')
        .duration(200)
        .EUt(20)
}
