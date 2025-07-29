// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerEtchedRecipes = (event) => {
    
    // Etching Table
    event.shaped('etched:etching_table', [
        'BCD',
        'AAA'
    ], {
        A: '#minecraft:planks',
        B: '#forge:rings/wrought_iron',
        C: '#forge:plates/wrought_iron',
        D: 'tfg:etching_diamond_tip'
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
    
    // Etched Blank Disc
    event.remove('etched:blank_music_disc')
    event.replaceOutput({ output: 'tfc:blank_disc'}, 'tfc:blank_disc', 'etched:blank_music_disc')
    
    //vanilla music discs
    event.replaceInput({ input: 'tfc:blank_disc'}, 'tfc:blank_disc', 'etched:blank_music_disc')
    event.shapeless('create_connected:music_disc_interlude', ['etched:blank_music_disc', '#create:seats'])
    event.shapeless('minecraft:music_disc_relic', ['etched:blank_music_disc', 'firmalife:pottery_sherd'])
    event.shapeless('alekiships:music_disc_pirate_crafting', ['etched:blank_music_disc', 'alekiships:anchor'])
    event.shapeless('minecraft:music_disc_pigstep', ['etched:blank_music_disc', 'firmalife:food/bacon', 'minecraft:blackstone'])
    event.shapeless('minecraft:music_disc_5', ['etched:blank_music_disc', 'minecraft:deepslate'])
    event.shapeless('create_connected:music_disc_elevator', ['etched:blank_music_disc', 'create:elevator_pulley'])
    //dear god why
    event.shapeless('gtceu:sus_record', ['etched:blank_music_disc', '#tfc:knives', 'tfc:food/green_bean']).id('tfg:sus_record');
}