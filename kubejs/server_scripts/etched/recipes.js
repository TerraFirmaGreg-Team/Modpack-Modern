// priority: 0

const registerEtchedRecipes = (event) => {
    
    // Etching Table
    event.shaped('etched:etching_table', [
        'BCD',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: '#forge:rings/steel',
        C: '#forge:plates/steel',
        D: '#forge:plates/diamond'
    }).id('etched:etching_table')

    // Album Jukebox
    event.shaped('etched:album_jukebox', [
        'ABA',
        'ACA',
        'ADA'
    ], {
        A: 'gtceu:red_alloy_double_wire',
        B: 'minecraft:repeater',
        C: 'minecraft:jukebox',
        D: '#forge:chests/wooden'
    }).id('etched:album_jukebox')

    // Radio
    event.shaped('etched:radio', [
        'ABA',
        'CDC',
        'EEE'
    ], {
        A: 'gtceu:red_alloy_single_wire',
        B: 'gtceu:copper_spring',
        C: 'gtceu:wrought_iron_plate',
        D: 'minecraft:note_block',
        E: '#minecraft:planks'
    }).id('etched:radio')

    // Boombox
    event.shaped('etched:boombox', [
        ' A ',
        'ABA',
        'ACA'
    ], {
        A: '#forge:plates/wrought_iron',
        B: 'gtceu:red_alloy_single_wire',
        C: 'minecraft:jukebox'
    }).id('etched:boombox')

    // Minecart With Jukebox
    event.shapeless('etched:jukebox_minecart', ['minecraft:jukebox', 'minecraft:minecart'])
        .id('etched:jukebox_minecart')
}