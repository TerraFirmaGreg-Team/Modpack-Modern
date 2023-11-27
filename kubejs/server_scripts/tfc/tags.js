// priority: 0

const registerTFCItemTags = (event) => {
    removeAllTagsItems.forEach(item => {
        event.removeAllTagsFrom(item)
    })
    
    // Unification
    event.remove('forge:ingots/bismuth', 'tfc:metal/ingot/bismuth')
    event.remove('forge:ingots/bismuth_bronze', 'tfc:metal/ingot/bismuth_bronze')
    event.remove('forge:ingots/black_bronze', 'tfc:metal/ingot/black_bronze')
    event.remove('forge:ingots/bronze', 'tfc:metal/ingot/bronze')
    event.remove('forge:ingots/rose_gold', 'tfc:metal/ingot/rose_gold')
    event.remove('forge:ingots/sterling_silver', 'tfc:metal/ingot/sterling_silver')
    event.remove('forge:ingots/wrought_iron', 'tfc:metal/ingot/wrought_iron')
    event.remove('forge:ingots/cast_iron', 'tfc:metal/ingot/cast_iron')
    event.remove('forge:ingots/steel', 'tfc:metal/ingot/steel')
    event.remove('forge:ingots/black_steel', 'tfc:metal/ingot/black_steel')
    event.remove('forge:ingots/red_steel', 'tfc:metal/ingot/red_steel')
    event.remove('forge:ingots/blue_steel', 'tfc:metal/ingot/blue_steel')
    event.remove('forge:ingots/brass', 'tfc:metal/ingot/brass')
    event.remove('forge:ingots/copper', 'tfc:metal/ingot/copper')
    event.remove('forge:ingots/gold', 'tfc:metal/ingot/gold')
    event.remove('forge:ingots/nickel', 'tfc:metal/ingot/nickel')
    event.remove('forge:ingots/silver', 'tfc:metal/ingot/silver')
    event.remove('forge:ingots/tin', 'tfc:metal/ingot/tin')
    event.remove('forge:ingots/zinc', 'tfc:metal/ingot/zinc')

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

    global.allTFCStoneTypeNames.forEach(stoneTypeName => {
        global.slabTypes.forEach(slabType => {
            event.add(`tfc:rock_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`)
        })
    })
}

const registerTFCBlocksTags = (event) => {
    event.add('tfc:glass_basin_blocks', 'gtceu:brass_block')
    event.add('tfc:glass_pouring_table', 'gtceu:brass_block')
}