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
    event.add('tfc:foods', 'minecraft:red_mushroom')
    event.add('tfc:foods', 'minecraft:brown_mushroom')
    event.add('tfc:foods', 'minecraft:glow_berries')
    event.add('tfc:foods', 'minecraft:chorus_fruit')
    event.add('tfc:foods', 'minecraft:popped_chorus_fruit')

    event.add('tfc:foods/vegetables', 'minecraft:red_mushroom')
    event.add('tfc:foods/vegetables', 'minecraft:brown_mushroom')
    event.add('tfc:foods/fruits', 'minecraft:glow_berries')
    event.add('tfc:foods/fruits', 'minecraft:chorus_fruit')
    event.add('tfc:foods/fruits', 'minecraft:popped_chorus_fruit')

    event.add('beneath:usable_in_juicer', 'minecraft:glow_berries')
    event.add('beneath:usable_in_juicer', 'minecraft:chorus_fruit')
    event.add('beneath:usable_in_juicer', 'minecraft:red_mushroom')
    event.add('beneath:usable_in_juicer', 'minecraft:brown_mushroom')

    event.add('tfc:foods/usable_in_soup', 'minecraft:red_mushroom')
    event.add('tfc:foods/usable_in_soup', 'minecraft:brown_mushroom')
    event.add('tfc:foods/usable_in_soup', 'minecraft:glow_berries')
    event.add('tfc:foods/usable_in_soup', 'minecraft:chorus_fruit')
    event.add('tfc:foods/usable_in_soup', 'minecraft:popped_chorus_fruit')

    event.add('tfc:foods/usable_in_salad', 'minecraft:red_mushroom')
    event.add('tfc:foods/usable_in_salad', 'minecraft:brown_mushroom')
    event.add('tfc:foods/usable_in_salad', 'minecraft:glow_berries')
    event.add('tfc:foods/usable_in_salad', 'minecraft:chorus_fruit')
    event.add('tfc:foods/usable_in_salad', 'minecraft:popped_chorus_fruit')

    event.add('tfc:rabbit_food', 'minecraft:chorus_fruit')
    event.add('tfc:rabbit_food', 'minecraft:popped_chorus_fruit')
    
    event.add('tfc:rock/raw', 'minecraft:deepslate')
    event.add('tfc:rock/raw', 'minecraft:blackstone')
    event.add('tfc:rock/raw', 'minecraft:dripstone_block')

    event.remove('forge:gems', 'minecraft:charcoal')
    event.remove('forge:gems', 'minecraft:coal')
    event.remove('forge:gems', 'minecraft:flint')

    event.add('tfc:compost_greens', 'minecraft:red_mushroom_block')
    event.add('tfc:compost_greens', 'minecraft:brown_mushroom_block')
    event.add('tfc:compost_greens', 'minecraft:mushroom_stem')
    event.add('tfc:compost_greens', 'minecraft:moss_block')
    event.add('tfc:compost_greens_low', 'minecraft:moss_carpet')
    event.add('tfc:compost_greens_low', 'minecraft:twisting_vines')
    event.add('tfc:compost_greens_high', 'minecraft:pearlescent_froglight')
    event.add('tfc:compost_greens_high', 'minecraft:verdant_froglight')
    event.add('tfc:compost_greens_high', 'minecraft:ochre_froglight')
    //event.add('tfc:moss', 'minecraft:moss_carpet')
    event.remove('createaddition:plants', 'minecraft:moss_carpet')

    event.add('tfc:colored_terracotta', 'minecraft:white_terracotta')

    event.add('tfc:bells', 'minecraft:bell')

    event.add('tfc:plants', 'minecraft:spore_blossom')
    
	event.add('tfc:compost_greens', 'minecraft:nether_wart_block')
	event.add('tfc:compost_greens', 'minecraft:warped_wart_block')

    event.add('tfc:hematitic_sand', 'minecraft:red_sand')

    event.add('tfc:makes_black_dye', 'minecraft:ink_sac')
    event.add('tfc:makes_white_dye', 'minecraft:bone_meal')
	
	event.add('create:blaze_burner_fuel/regular', 'minecraft:coal')
	event.add('create:blaze_burner_fuel/regular', 'minecraft:charcoal')

    event.add('minecraft:wart_blocks', 'minecraft:mushroom_stem')
}

const registerMinecraftBlockTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Stops saws from being able to pick up ice
    event.remove('minecraft:ice', 'minecraft:ice')

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')
    
    //#region Nether blocks

    event.add('tfg:lush_ground_replaceable', 'minecraft:deepslate')
    event.add('tfg:lush_ground_replaceable', 'minecraft:blackstone')
    
    event.add('tfc:rock/raw', 'minecraft:deepslate')
    event.add('tfc:rock/raw', 'minecraft:blackstone')
    event.add('tfc:rock/raw', 'minecraft:dripstone_block')
    event.add('forge:cobblestone/normal', 'minecraft:cobbled_deepslate')
    event.add('minecraft:lush_ground_replaceable', 'minecraft:blackstone')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:blackstone')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:deepslate')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:moss_block')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:dripstone_block')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:blackstone')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:deepslate')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:dripstone_block')
    event.add('minecraft:frogs_spawnable_on', 'minecraft:deepslate')
    event.add('minecraft:frogs_spawnable_on', 'minecraft:blackstone')
    event.add('minecraft:frogs_spawnable_on', 'minecraft:dripstone_block')
    event.add('minecraft:axolotls_spawnable_on', 'minecraft:deepslate')
    event.add('minecraft:axolotls_spawnable_on', 'minecraft:dripstone_block')
    event.add('tfc:grass_plantable_on', 'minecraft:moss_block')
    event.add('tfc:creeping_plantable_on', 'minecraft:moss_block')
    event.add('tfc:creeping_plantable_on', 'minecraft:deepslate')
    event.add('tfc:creeping_plantable_on', 'minecraft:blackstone')
    event.add('tfc:creeping_stone_plantable_on', 'minecraft:moss_block')
    event.add('tfc:creeping_stone_plantable_on', 'minecraft:deepslate')
    event.add('tfc:creeping_stone_plantable_on', 'minecraft:blackstone')
    event.add('minecraft:base_stone_nether', 'minecraft:deepslate')
    event.add('minecraft:base_stone_nether', 'minecraft:blackstone')
    event.add('minecraft:base_stone_nether', 'minecraft:dripstone_block')
    event.add('forge:stone', 'minecraft:blackstone')

    event.add('tfc:can_landslide', 'minecraft:cobbled_deepslate')

    event.add('tfc:breaks_when_isolated', 'minecraft:deepslate')
    event.add('tfc:breaks_when_isolated', 'minecraft:blackstone')
    event.add('tfc:breaks_when_isolated', 'minecraft:gilded_blackstone')
    event.add('tfc:breaks_when_isolated', 'minecraft:dripstone_block')

    event.add('tfg:rock_stairs', 'minecraft:cobbled_deepslate_stairs')
    event.add('tfg:rock_slabs', 'minecraft:cobbled_deepslate_slab')
    event.add('tfg:rock_walls', 'minecraft:cobbled_deepslate_wall')
    event.add('tfg:brick_stairs', 'minecraft:deepslate_brick_stairs')
    event.add('tfg:brick_slabs', 'minecraft:deepslate_brick_slab')
    event.add('tfg:brick_walls', 'minecraft:deepslate_brick_wall')
    event.add('tfg:brick_stairs', 'minecraft:deepslate_tile_stairs')
    event.add('tfg:brick_slabs', 'minecraft:deepslate_tile_slab')
    event.add('tfg:brick_walls', 'minecraft:deepslate_tile_wall')
    event.add('tfg:rock_stairs', 'minecraft:blackstone_stairs')
    event.add('tfg:rock_slabs', 'minecraft:blackstone_slab')
    event.add('tfg:rock_walls', 'minecraft:blackstone_wall')
    event.add('tfg:brick_stairs', 'minecraft:blackstone_stairs')
    event.add('tfg:brick_slabs', 'minecraft:blackstone_slab')
    event.add('tfg:brick_walls', 'minecraft:blackstone_wall')

    event.add('tfc:bloomery_insulation', 'minecraft:polished_deepslate');
	event.add('tfc:forge_insulation', 'minecraft:polished_deepslate');
    event.add('tfc:bloomery_insulation', 'minecraft:polished_blackstone');
	event.add('tfc:forge_insulation', 'minecraft:polished_blackstone');
    event.add('tfc:bloomery_insulation', 'minecraft:deepslate_tiles');
	event.add('tfc:forge_insulation', 'minecraft:deepslate_tiles');
    event.add('tfc:bloomery_insulation', 'minecraft:cracked_deepslate_tiles');
	event.add('tfc:forge_insulation', 'minecraft:cracked_deepslate_tiles');
    event.add('tfc:bloomery_insulation', 'minecraft:chiseled_deepslate');
	event.add('tfc:forge_insulation', 'minecraft:chiseled_deepslate');
    event.add('tfc:bloomery_insulation', 'minecraft:chiseled_polished_blackstone');
	event.add('tfc:forge_insulation', 'minecraft:chiseled_polished_blackstone');
    event.add('tfc:bloomery_insulation', 'minecraft:gilded_blackstone');
	event.add('tfc:forge_insulation', 'minecraft:gilded_blackstone');
    event.add('tfc:bloomery_insulation', 'minecraft:basalt');
	event.add('tfc:forge_insulation', 'minecraft:basalt');
    event.add('tfc:bloomery_insulation', 'minecraft:smooth_basalt');
	event.add('tfc:forge_insulation', 'minecraft:smooth_basalt');

    event.add('minecraft:mineable/pickaxe', 'minecraft:lantern');

    event.add('minecraft:mineable/pickaxe', 'minecraft:cobweb');
    event.add('minecraft:mineable/hoe', 'minecraft:cobweb');
    event.add('minecraft:mineable/shovel', 'minecraft:cobweb');
    event.add('minecraft:mineable/axe', 'minecraft:cobweb');
    
    //#region

    event.removeAll('minecraft:sniffer_diggable_block')

    event.add('tfc:can_be_snow_piled', 'minecraft:crimson_fungus')
	event.add('tfc:can_be_snow_piled', 'minecraft:warped_fungus')
	event.add('tfc:can_be_snow_piled', 'minecraft:torchflower')
	event.add('tfc:can_be_snow_piled', 'minecraft:pitcher_plant')
}