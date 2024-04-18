const registerCreateConnectedRecipes = (event) => {

    event.remove({ id: 'create_connected:crafting/kinetics/centrifugal_clutch' })
    event.remove({ id: 'create_connected:crafting/kinetics/freewheel_clutch' })
    event.remove({ id: 'create_connected:crafting/kinetics/item_silo' })
    event.remove({ id: 'create_connected:crafting/kinetics/sequenced_pulse_generator' })
    event.remove({ id: 'create_connected:crafting/kinetics/empty_fan_catalyst' })
    event.remove({ id: 'create_connected:crafting/kinetics/overstress_clutch' })

    event.remove({ id: 'create_connected:crafting/palettes/cherry_window' })
    event.remove({ id: 'create_connected:crafting/palettes/cherry_window_pane' })
    
    //centrifugal_clutcha
    event.shapeless('create_connected:centrifugal_clutch', [
        'create:andesite_casing',
        '#forge:plates/wrought_iron',
        'create:speedometer',
        'create:shaft',
    ]).id('tfg:create_connected/centrifugal_clutch')

    //freewheel_clutch'
    event.shapeless('create_connected:freewheel_clutch', [
        'create:andesite_casing',
        '#forge:plates/wrought_iron',
        'create:shaft',
        'create:cogwheel',
    ]).id('tfg:create_connected/freewheel_clutch')

    //overstress_clutch
    event.shapeless('create_connected:overstress_clutch', [
        'create:andesite_casing',
        '#forge:plates/wrought_iron',
        'create:shaft',
        'create:electron_tube',
    ]).id('tfg:create_connected/overstress_clutch')

    //item_silo
    event.shaped('create_connected:item_silo', [
        'CAC',
        'BAD',
        'CAC' 
    ], {
        A: '#forge:chests/wooden',
        B: '#forge:sheets/wrought_iron',
        C: '#forge:screws/steel',
        D: '#forge:tools/screwdrivers'
    }).id('tfg:create_connected/shaped/item_silo')

    event.recipes.gtceu.assembler('tfg:create_connected/item_silo')             
        .itemInputs('3x #forge:chests/wooden', '#forge:sheets/wrought_iron', '2x #forge:screws/steel')
        .circuit(13)
        .itemOutputs('create_connected:item_silo')
        .duration(200)
        .EUt(20)

    //sequenced_pulse_generator
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
    }).id('tfg:create_connected/shaped/sequenced_pulse_generator')

    //empty_fan_catalyst
    event.shaped('create_connected:empty_fan_catalyst', [
        'ABA',
        'BCB',
        'ABA' 
    ], {
        A: '#forge:rods/long/brass',
        B: 'tfc:metal/bars/wrought_iron',
        C: '#forge:tools/hammers'
    }).id('tfg:create_connected/shaped/empty_fan_catalyst')

}