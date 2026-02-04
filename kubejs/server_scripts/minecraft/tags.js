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

	event.add('tfc:makes_black_dye', 'minecraft:ink_sac')
	event.add('tfc:makes_white_dye', 'minecraft:bone_meal')

	event.add('create:blaze_burner_fuel/regular', 'minecraft:coal')
	event.add('create:blaze_burner_fuel/regular', 'minecraft:charcoal')

	event.add("tfg:rubber_plants", "minecraft:spore_blossom")

	event.add('tfg:stonecutting/crackrack', 'minecraft:nether_brick_fence')
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

	event.add('minecraft:mineable/pickaxe', 'minecraft:glowstone')

	// Things endermen can pick up and move around
	event.removeAll('minecraft:enderman_holdable');
	event.add('minecraft:enderman_holdable', '#tfc:dirt')
	event.add('minecraft:enderman_holdable', '#tfc:mud')
	event.add('minecraft:enderman_holdable', '#tfc:loose_rocks')
	event.add('minecraft:enderman_holdable', '#forge:gravel')
	event.add('minecraft:enderman_holdable', '#forge:sand')
	event.add('minecraft:enderman_holdable', '#forge:cobblestone')
	event.add('minecraft:enderman_holdable', '#tfc:plants')
	event.add('minecraft:enderman_holdable', '#tfg:plants/beneath')
	event.add('minecraft:enderman_holdable', '#tfg:moon_plants')
	event.add('minecraft:enderman_holdable', '#tfg:mars_plants')
	event.add('minecraft:enderman_holdable', '#tfg:venus_plants')
	event.add('minecraft:enderman_holdable', '#tfg:mercury_plants')
	event.add('minecraft:enderman_holdable', '#tfg:europa_plants')
	event.add('minecraft:enderman_holdable', 'tfc:pumpkin')
	event.add('minecraft:enderman_holdable', 'tfc:melon')
	event.add('minecraft:enderman_holdable', 'betterend:cave_pumpkin')
	event.add('minecraft:enderman_holdable', '#minecraft:leaves')
	event.add('minecraft:enderman_holdable', 'beneath:wood/leaves/crimson')
	event.add('minecraft:enderman_holdable', 'beneath:wood/leaves/warped')
	event.add('minecraft:enderman_holdable', 'tfg:glacian_leaves')
	event.add('minecraft:enderman_holdable', '#tfg:solid_leaves')
}