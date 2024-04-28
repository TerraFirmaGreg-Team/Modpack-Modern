// priority: 0

const registerCreateConnectedRecipes = (event) => {
    // Centrifugal Clutch
    event.shapeless('create_connected:centrifugal_clutch', [
        'create:andesite_casing',
        '#forge:plates/wrought_iron',
        'create:speedometer',
        'create:shaft',
    ]).id('create_connected:crafting/kinetics/centrifugal_clutch')

    // Freewheel Clutch'
    event.shapeless('create_connected:freewheel_clutch', [
        'create:andesite_casing',
        '#forge:plates/wrought_iron',
        'create:shaft',
        'create:cogwheel',
    ]).id('create_connected:crafting/kinetics/freewheel_clutch')

    // Overstress Clutch
    event.shapeless('create_connected:overstress_clutch', [
        'create:andesite_casing',
        '#forge:plates/wrought_iron',
        'create:shaft',
        'create:electron_tube',
    ]).id('create_connected:crafting/kinetics/overstress_clutch')

    // Item Silo
    event.shaped('create_connected:item_silo', [
        'CAC',
        'BAD',
        'CAC' 
    ], {
        A: '#forge:chests/wooden',
        B: '#forge:sheets/wrought_iron',
        C: '#forge:screws/steel',
        D: '#forge:tools/screwdrivers'
    }).id('create_connected:crafting/kinetics/item_silo')

    event.recipes.gtceu.assembler('tfg:create_connected/item_silo')             
        .itemInputs('3x #forge:chests/wooden', '#forge:sheets/wrought_iron', '2x #forge:screws/steel')
        .circuit(10)
        .itemOutputs('create_connected:item_silo')
        .duration(200)
        .EUt(20)

    // Sequenced Pulse Generator
    event.shaped('create_connected:sequenced_pulse_generator', [
        'AB ',
        'ACD',
        'EEE' 
    ], {
        A: 'create:electron_tube',
        B: 'create_connected:control_chip',
        C: '#forge:plates/bronze',
        D: 'minecraft:redstone_torch',
        E: '#forge:stone'
    }).id('create_connected:crafting/kinetics/sequenced_pulse_generator')

    // Shear Pin
    event.recipes.gtceu.cutter('tfg:create_connected/shear_pin')             
        .itemInputs('create:shaft')
        .itemOutputs('create_connected:shear_pin')
        .duration(96)
        .EUt(8)

    event.recipes.gtceu.circuit_assembler('tfg:create_connected/control_chip')             
        .itemInputs('#forge:plates/gold', 'gtceu:resin_printed_circuit_board', '2x create:electron_tube')
        .circuit(11)
        .inputFluids(Fluid.of('gtceu:redstone', 144))
        .itemOutputs('create_connected:control_chip')
        .duration(720)
        .EUt(16)
}