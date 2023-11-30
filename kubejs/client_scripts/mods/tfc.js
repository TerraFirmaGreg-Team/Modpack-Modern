// priority: 0

const hideTFCStuff = (event) => {
    // Hide unused TFC ores
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        global.TFC_SIMPLE_MATERIALS.forEach(material => {
            event.hide(`tfc:ore/${material}/${stoneTypeName}`)
        })

        global.TFC_ORE_TYPES.forEach(oreTypeName => {
            global.TFC_ORE_MATERIALS.forEach(oreMaterialName => {
                event.hide(`tfc:ore/${oreTypeName}_${oreMaterialName}/${stoneTypeName}`)
            })
        })
    })

    global.TFC_DISABLED_ITEMS.forEach(item => {
        event.hide(item)
    })
}

const groupTFCStuff = (event) => {
    event.groupItemsByTag('tfg:rei_groups/ingots/double', 'Double Ingots', 'forge:double_ingots')
}

const hideTFCFluids = (event) => {
    event.hide('tfc:metal/bismuth')
    event.hide('tfc:metal/bismuth_bronze')
    event.hide('tfc:metal/bronze')
    event.hide('tfc:metal/black_bronze')
    event.hide('tfc:metal/brass')
    event.hide('tfc:metal/copper')
    event.hide('tfc:metal/gold')
    event.hide('tfc:metal/nickel')
    event.hide('tfc:metal/rose_gold')
    event.hide('tfc:metal/silver')
    event.hide('tfc:metal/tin')
    event.hide('tfc:metal/zinc')
    event.hide('tfc:metal/sterling_silver')
    event.hide('tfc:metal/wrought_iron')
    event.hide('tfc:metal/cast_iron')
    event.hide('tfc:metal/steel')
    event.hide('tfc:metal/black_steel')
    event.hide('tfc:metal/red_steel')
    event.hide('tfc:metal/blue_steel')
}