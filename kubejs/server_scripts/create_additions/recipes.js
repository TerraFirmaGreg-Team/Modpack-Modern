// priority: 0

const registerCreateAdditionsRecipes = (event) => {
    
    // Удаление рецептов мода railways 
    event.remove({ mod: 'createaddition' });

    /*
    
    //
    event.shaped('', [
        'AAA',
        'AAA',
        'AAA' 
    ], {
        A: ''
    }).id('tfg:railways/shaped/')
    
    */

    // Электрический мотор
    event.shaped('createaddition:electric_motor', [
        'ABA',
        'CDC',
        'CEC' 
    ], {
        A: '#forge:plates/brass',
        B: 'create:shaft',
        C: 'createaddition:copper_spool',
        D: 'create:cogwheel',
        E: '#forge:gears/wrought_iron',
    }).id('tfg:railways/shaped/electric_motor')

    // Конвертер энергии в механику
    event.shaped('createaddition:alternator', [
        'CEC',
        'CDC',
        'ABA',
    ], {
        A: '#forge:plates/wrought_iron',
        B: 'create:shaft',
        C: 'createaddition:copper_spool',
        D: 'create:cogwheel',
        E: '#forge:gears/wrought_iron',
    }).id('tfg:railways/shaped/alternator')

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
    }).id('tfg:railways/shaped/rolling_mill')

    // Цифровой адаптер
    event.shaped('createaddition:digital_adapter', [
        'ABA',
        'BCB',
        'ABA' 
    ], {
        A: '#forge:plates/brass',
        B: '#forge:wires/single/red_alloy',
        C: 'computercraft:wired_modem',
    }).id('tfg:railways/shaped/digital_adapter')

    // Портативный энергетический интерфейс
    event.shaped('createaddition:portable_energy_interface', [
        'ABC',
        'DEC',
        'ADC' 
    ], {
        A: '#forge:plates/brass',
        B: 'create:chute',
        C: '#forge:wires/octal/copper',
        D: '#forge:cables/single/copper',
        E: 'create:brass_casing'
    }).id('tfg:railways/shaped/portable_energy_interface')

    // Батарейный блок
    event.recipes.gtceu.assembler('create_additions/battery')             
        .itemInputs('gtceu:bronze_frame', '6x gtceu:bronze_plate', '24x gtceu:bronze_screw', '#forge:batteries/hv')
        .itemOutputs('createaddition:modular_accumulator')
        .duration(400)
        .EUt(512)

    // Коннектор обычный
    event.shaped('createaddition:connector', [
        'ABA',
        'CBC' 
    ], {
        A: 'tfc:glue',
        B: '#forge:cables/double/copper',
        C: '#forge:plates/wrought_iron',
    }).id('tfg:railways/shaped/connector')

    // Коннектор большой
    /*
    event.shaped('createaddition:large_connector', [
        'ABA',
        'CBC',
        'CBC'
    ], {
        A: 'tfc:glue',
        B: '#forge:cables/double/copper',
        C: '#forge:plates/wrought_iron',
    }).id('tfg:railways/shaped/large_connector')
    */

    // Редстоун реле
    event.shaped('createaddition:redstone_relay', [
        ' D ',
        'BCB',
        'AAA' 
    ], {
        A: '#tfc:rock/raw',
        B: 'createaddition:connector',
        C: 'create:electron_tube',
        D: '#forge:dusts/redstone'
    }).id('tfg:railways/shaped/redstone_relay')

    // Катушка
    event.shaped('8x createaddition:spool', [
        'A',
        'B',
        'A' 
    ], {
        A: '#forge:screws/wood',
        B: '#forge:rods/long/wood'
    }).id('tfg:railways/shaped/spool')

    // Катушка с медными проводами
    event.shaped('createaddition:copper_spool', [
        ' A ',
        'ABA',
        ' A ' 
    ], {
        A: '#forge:fine_wires/copper',
        B: 'createaddition:spool'
    }).id('tfg:railways/shaped/copper_spool')

    // Катушка с праздничными проводами
    event.shaped('createaddition:festive_spool', [
        ' A ',
        'ABA',
        ' A ' 
    ], {
        A: 'gtceu:plant_ball',
        B: 'createaddition:spool'
    }).id('tfg:railways/shaped/festive_spool')

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
    ]).id('tfg:railways/shapeless/barbed_wire')
}