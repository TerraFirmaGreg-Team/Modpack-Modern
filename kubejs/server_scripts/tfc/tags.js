// priority: 0

const registerTFCItemTags = (event) => {
    global.TFC_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    global.TFC_WOOD_TYPES.forEach(woodType => {
        event.add('tfg:only_default_wooden_chests', `tfc:wood/chest/${woodType}`)
        event.add('tfg:only_trapped_wooden_chests', `tfc:wood/trapped_chest/${woodType}`)

        event.add('tfg:bladed_axles', `tfc:wood/bladed_axle/${woodType}`)
    })

    event.remove('forge:dusts/iron', 'tfc:powder/limonite')
    event.remove('forge:dusts/iron', 'tfc:powder/magnetite')
    event.remove('forge:dusts/iron', 'tfc:powder/hematite')
    event.remove('forge:dusts/copper', 'tfc:powder/malachite')
    event.remove('forge:dusts/copper', 'tfc:powder/copper')
    event.remove('forge:dusts/copper', 'tfc:powder/tetrahedrite')

    event.add('forge:ingots/double/bismuth', 'tfc:metal/double_ingot/bismuth')
    event.add('forge:ingots/double/bismuth_bronze', 'tfc:metal/double_ingot/bismuth_bronze')
    event.add('forge:ingots/double/black_bronze', 'tfc:metal/double_ingot/black_bronze')
    event.add('forge:ingots/double/bronze', 'tfc:metal/double_ingot/bronze')
    event.add('forge:ingots/double/brass', 'tfc:metal/double_ingot/brass')
    event.add('forge:ingots/double/copper', 'tfc:metal/double_ingot/copper')
    event.add('forge:ingots/double/gold', 'tfc:metal/double_ingot/gold')
    event.add('forge:ingots/double/nickel', 'tfc:metal/double_ingot/nickel')
    event.add('forge:ingots/double/rose_gold', 'tfc:metal/double_ingot/rose_gold')
    event.add('forge:ingots/double/silver', 'tfc:metal/double_ingot/silver')
    event.add('forge:ingots/double/tin', 'tfc:metal/double_ingot/tin')
    event.add('forge:ingots/double/zinc', 'tfc:metal/double_ingot/zinc')
    event.add('forge:ingots/double/sterling_silver', 'tfc:metal/double_ingot/sterling_silver')
    event.add('forge:ingots/double/iron', 'tfc:metal/double_ingot/cast_iron')
    event.add('forge:ingots/double/wrought_iron', 'tfc:metal/double_ingot/wrought_iron')
    event.add('forge:ingots/double/steel', 'tfc:metal/double_ingot/steel')
    event.add('forge:ingots/double/black_steel', 'tfc:metal/double_ingot/black_steel')
    event.add('forge:ingots/double/blue_steel', 'tfc:metal/double_ingot/blue_steel')
    event.add('forge:ingots/double/red_steel', 'tfc:metal/double_ingot/red_steel')

    event.add('tfc:red_or_blue_anvil', 'tfc:metal/anvil/blue_steel')
    event.add('tfc:red_or_blue_anvil', 'tfc:metal/anvil/red_steel')

    event.add('tfc:corals', 'tfc:coral/tube_coral_fan')
    event.add('tfc:corals', 'tfc:coral/brain_coral_fan')
    event.add('tfc:corals', 'tfc:coral/bubble_coral_fan')
    event.add('tfc:corals', 'tfc:coral/fire_coral_fan')
    event.add('tfc:corals', 'tfc:coral/horn_coral_fan')
    event.add('tfc:corals', 'tfc:coral/tube_coral')
    event.add('tfc:corals', 'tfc:coral/brain_coral')
    event.add('tfc:corals', 'tfc:coral/bubble_coral')
    event.add('tfc:corals', 'tfc:coral/fire_coral')
    event.add('tfc:corals', 'tfc:coral/horn_coral')
    event.add('tfc:corals', 'tfc:coral/tube_dead_coral_fan')
    event.add('tfc:corals', 'tfc:coral/brain_dead_coral_fan')
    event.add('tfc:corals', 'tfc:coral/bubble_dead_coral_fan')
    event.add('tfc:corals', 'tfc:coral/bubble_dead_coral')
    event.add('tfc:corals', 'tfc:coral/fire_dead_coral_fan')
    event.add('tfc:corals', 'tfc:coral/horn_dead_coral_fan')
    event.add('tfc:corals', 'tfc:coral/tube_dead_coral')
    event.add('tfc:corals', 'tfc:coral/brain_dead_coral')
    event.add('tfc:corals', 'tfc:coral/fire_dead_coral')
    event.add('tfc:corals', 'tfc:coral/horn_dead_coral')

    event.add('tfc:can_collapse', '#forge:tfc_stonetype_ore')
    event.add('tfc:can_start_collapse', '#forge:tfc_stonetype_ore')
    event.add('tfc:can_trigger_collapse', '#forge:tfc_stonetype_ore')
    event.add('tfc:monster_spawns_on', '#forge:tfc_stonetype_ore')
    event.add('tfc:prospectable', '#forge:tfc_stonetype_ore')

    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        global.TFC_ROCK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add(`tfc:rock_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`)
        })
    })
}

const registerTFCBlockTags = (event) => {
    event.add('tfc:glass_basin_blocks', 'gtceu:brass_block')
    event.add('tfc:glass_pouring_table', 'gtceu:brass_block')
}

const registerTFCFluidTags = (event) => {
    event.add('tfc:usable_in_wooden_bucket', 'gtceu:creosote')
    event.add('tfc:usable_in_red_steel_bucket', 'gtceu:creosote')
    event.add('tfc:usable_in_blue_steel_bucket', 'gtceu:creosote')
}