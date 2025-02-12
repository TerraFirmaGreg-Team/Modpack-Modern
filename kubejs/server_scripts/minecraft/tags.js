// priority: 0

const registerMinecraftItemTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    global.MINECRAFT_HIDED_ITEMS.forEach(item => {
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')

    // Бамбуковые полублоки
    event.add('tfg:bamboo_slabs', 'minecraft:bamboo_slab')
    event.add('tfg:bamboo_slabs', 'minecraft:bamboo_mosaic_slab')
}

const registerMinecraftBlockTags = (event) => {
    global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Теперь обсидиан сторадж блок
    event.add('forge:storage_blocks/obsidian', 'minecraft:obsidian')


    //#region Nether blocks

    event.add('tfg:lush_ground_replaceable', 'minecraft:deepslate')
    event.add('tfg:lush_ground_replaceable', 'minecraft:blackstone')

    event.add('minecraft:lush_ground_replaceable', 'minecraft:blackstone')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:blackstone')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:deepslate')
    event.add('beneath:nether_bush_plantable_on', 'minecraft:moss_block')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:blackstone')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:deepslate')
    event.add('minecraft:nether_carver_replaceables', 'minecraft:calcite')
    event.add('minecraft:moss_replaceable', 'minecraft:blackstone')
    event.add('tfc:grass_plantable_on', 'minecraft:moss_block')
    event.add('tfc:creeping_plantable_on', 'minecraft:moss_block')
    event.add('tfc:creeping_plantable_on', 'minecraft:deepslate')
    event.add('tfc:creeping_plantable_on', 'minecraft:blackstone')
    event.add('tfc:creeping_plantable_on', 'minecraft:calcite')
    event.add('tfc:creeping_stone_plantable_on', 'minecraft:moss_block')
    event.add('tfc:creeping_stone_plantable_on', 'minecraft:deepslate')
    event.add('tfc:creeping_stone_plantable_on', 'minecraft:blackstone')
    event.add('tfc:creeping_stone_plantable_on', 'minecraft:calcite')
    event.add('minecraft:axolotls_spawnable_on', 'minecraft:calcite')
    event.add('forge:stone', 'minecraft:blackstone')

    
    event.add('tfc:rock/raw', 'minecraft:deepslate')
    event.add('tfc:can_landslide', 'minecraft:cobbled_deepslate')
    event.add('tfg:rock_stairs', 'minecraft:cobbled_deepslate_stairs')
    event.add('tfg:rock_slabs', 'minecraft:cobbled_deepslate_slab')
    event.add('tfg:rock_walls', 'minecraft:cobbled_deepslate_wall')
    event.add('tfg:brick_stairs', 'minecraft:deepslate_brick_stairs')
    event.add('tfg:brick_slabs', 'minecraft:deepslate_brick_slab')
    event.add('tfg:brick_walls', 'minecraft:deepslate_brick_wall')
    event.add('tfg:brick_stairs', 'minecraft:deepslate_tile_stairs')
    event.add('tfg:brick_slabs', 'minecraft:deepslate_tile_slab')
    event.add('tfg:brick_walls', 'minecraft:deepslate_tile_wall')

    event.remove('tfc:can_collapse', 'minecraft:chiseled_polished_blackstone')
    event.remove('tfc:can_start_collapse', 'minecraft:chiseled_polished_blackstone')
    event.remove('tfc:can_trigger_collapse', 'minecraft:chiseled_polished_blackstone')
    event.remove('tfc:can_collapse', 'minecraft:polished_blackstone_bricks')
    event.remove('tfc:can_start_collapse', 'minecraft:polished_blackstone_bricks')
    event.remove('tfc:can_trigger_collapse', 'minecraft:polished_blackstone_bricks')
    event.remove('tfc:can_collapse', 'minecraft:cracked_polished_blackstone_bricks')
    event.remove('tfc:can_start_collapse', 'minecraft:cracked_polished_blackstone_bricks')
    event.remove('tfc:can_trigger_collapse', 'minecraft:cracked_polished_blackstone_bricks')
    event.remove('tfc:can_collapse', 'minecraft:polished_blackstone_brick_stairs')
    event.remove('tfc:can_start_collapse', 'minecraft:polished_blackstone_brick_stairs')
    event.remove('tfc:can_trigger_collapse', 'minecraft:polished_blackstone_brick_stairs')
    event.remove('tfc:can_collapse', 'minecraft:polished_blackstone_brick_slab')
    event.remove('tfc:can_start_collapse', 'minecraft:polished_blackstone_brick_slab')
    event.remove('tfc:can_trigger_collapse', 'minecraft:polished_blackstone_brick_slab')
    event.remove('tfc:can_collapse', 'minecraft:polished_blackstone_brick_wall')
    event.remove('tfc:can_start_collapse', 'minecraft:polished_blackstone_brick_wall')
    event.remove('tfc:can_trigger_collapse', 'minecraft:polished_blackstone_brick_wall')

    event.add('tfc:rock/raw', 'minecraft:blackstone')
    event.add('tfg:rock_stairs', 'minecraft:blackstone_stairs')
    event.add('tfg:rock_slabs', 'minecraft:blackstone_slab')
    event.add('tfg:rock_walls', 'minecraft:blackstone_wall')
    event.add('tfg:brick_stairs', 'minecraft:blackstone_stairs')
    event.add('tfg:brick_slabs', 'minecraft:blackstone_slab')
    event.add('tfg:brick_walls', 'minecraft:blackstone_wall')
    
    //#region
}