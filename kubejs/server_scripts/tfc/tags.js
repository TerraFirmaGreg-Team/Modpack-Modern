// priority: 0

const registerTFCItemsTags = (event) => {
    removeAllTagsItems.forEach(item => {
        event.removeAllTagsFrom(item)
    })
    
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
    
}