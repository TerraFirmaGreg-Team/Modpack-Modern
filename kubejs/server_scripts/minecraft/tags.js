// priority: 0
"use strict";

/**
 * 
 * @param {TagEvent.Item} event 
 */
const registerMinecraftItemTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    global.MINECRAFT_HIDED_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Hide potions
    event.add('c:hidden_from_recipe_viewers', /minecraft.*potion.*/)

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')

    // Бамбуковые полублоки
    event.add('tfg:bamboo_slabs', 'minecraft:bamboo_slab')
    event.add('tfg:bamboo_slabs', 'minecraft:bamboo_mosaic_slab')

    event.remove('minecraft:creeper_drop_music_discs', ['minecraft:music_disc_11'])

    event.remove('forge:gems', 'minecraft:charcoal')
    event.remove('forge:gems', 'minecraft:coal')
    event.remove('forge:gems', 'minecraft:flint')

    event.add('tfc:colored_terracotta', 'minecraft:white_terracotta')

    event.add('tfc:bells', 'minecraft:bell')

    event.add('tfc:hematitic_sand', 'minecraft:red_sand')

    event.add('tfc:makes_black_dye', 'minecraft:ink_sac')
    event.add('tfc:makes_white_dye', 'minecraft:bone_meal')
	
	event.add('create:blaze_burner_fuel/regular', 'minecraft:coal')
	event.add('create:blaze_burner_fuel/regular', 'minecraft:charcoal')

}

const registerMinecraftBlockTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Stops saws from being able to pick up ice
    event.remove('minecraft:ice', 'minecraft:ice')
    event.remove('minecraft:ice', 'tfc:sea_ice')

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')
    
}