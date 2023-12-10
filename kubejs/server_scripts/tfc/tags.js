// priority: 0

const registerTFCItemTags = (event) => {
    
    // Удаление тегов у отключенных предметов
    global.TFC_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Тэги для возможности использования разных углей в кузне
    event.add('tfc:forge_fuel', 'minecraft:coal')
    event.add('tfc:forge_fuel', 'gtceu:coke_gem')
    event.add('tfc:forge_fuel', 'gtceu:rich_raw_coal')
    event.add('tfc:forge_fuel', 'gtceu:raw_coal')
    event.add('tfc:forge_fuel', 'gtceu:poor_raw_coal')

    // Тэги для сундуков, чтобы отличать их виды
    global.TFC_WOOD_TYPES.forEach(woodType => {
        event.add('tfg:default_chests', `tfc:wood/chest/${woodType}`)
        event.add('tfg:trapped_chests', `tfc:wood/trapped_chest/${woodType}`)

        event.add('tfg:bladed_axles', `tfc:wood/bladed_axle/${woodType}`)
    })

    // Теги для двойных слитков тфк
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

    // Теги для объединения наковален
    event.add('tfc:red_or_blue_anvil', 'tfc:metal/anvil/blue_steel')
    event.add('tfc:red_or_blue_anvil', 'tfc:metal/anvil/red_steel')

    // Теги для кораллов
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

    // Теги для каменных ступенек тфк
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        global.TFC_ROCK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add(`tfg:rock_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`)
        })
    })
}

const registerTFCBlockTags = (event) => {
    event.add('tfc:can_collapse', '#forge:tfc_stonetype_ore')
    event.add('tfc:can_start_collapse', '#forge:tfc_stonetype_ore')
    event.add('tfc:can_trigger_collapse', '#forge:tfc_stonetype_ore')
    event.add('tfc:monster_spawns_on', '#forge:tfc_stonetype_ore')
    event.add('tfc:prospectable', '#forge:tfc_stonetype_ore')

    event.add('tfc:glass_basin_blocks', 'gtceu:brass_block')
    event.add('tfc:glass_pouring_table', 'gtceu:brass_block')
}

const registerTFCFluidTags = (event) => {
    event.add('tfc:usable_in_ingot_mold', "gtceu:bismuth")
    event.add('tfc:usable_in_ingot_mold', "gtceu:bismuth_bronze")
    event.add('tfc:usable_in_ingot_mold', "gtceu:black_bronze")
    event.add('tfc:usable_in_ingot_mold', "gtceu:bronze")
    event.add('tfc:usable_in_ingot_mold', "gtceu:brass")
    event.add('tfc:usable_in_ingot_mold', "gtceu:copper")
    event.add('tfc:usable_in_ingot_mold', "gtceu:gold")
    event.add('tfc:usable_in_ingot_mold', "gtceu:nickel")
    event.add('tfc:usable_in_ingot_mold', "gtceu:rose_gold")
    event.add('tfc:usable_in_ingot_mold', "gtceu:silver")
    event.add('tfc:usable_in_ingot_mold', "gtceu:tin")
    event.add('tfc:usable_in_ingot_mold', "gtceu:zinc")
    event.add('tfc:usable_in_ingot_mold', "gtceu:sterling_silver")
    event.add('tfc:usable_in_ingot_mold', "gtceu:wrought_iron")
    event.add('tfc:usable_in_ingot_mold', "gtceu:iron")
    event.add('tfc:usable_in_ingot_mold', "gtceu:steel")
    event.add('tfc:usable_in_ingot_mold', "gtceu:black_steel")
    event.add('tfc:usable_in_ingot_mold', "gtceu:blue_steel")
    event.add('tfc:usable_in_ingot_mold', "gtceu:red_steel")

    event.add('tfc:usable_in_bell_mold', "gtceu:bronze")
    event.add('tfc:usable_in_bell_mold', "gtceu:gold")
    event.add('tfc:usable_in_bell_mold', "gtceu:brass")

    event.add('tfc:usable_in_tool_head_mold', "gtceu:copper")
    event.add('tfc:usable_in_tool_head_mold', "gtceu:bismuth_bronze")
    event.add('tfc:usable_in_tool_head_mold', "gtceu:black_bronze")
    event.add('tfc:usable_in_tool_head_mold', "gtceu:bronze")

    event.add('tfc:usable_in_pot', "gtceu:latex")

    event.add('tfc:usable_in_barrel', "gtceu:latex")

    event.add('tfc:usable_in_wooden_bucket', "gtceu:latex")

    event.add('tfc:usable_in_wooden_bucket', 'gtceu:creosote')
    event.add('tfc:usable_in_red_steel_bucket', 'gtceu:creosote')
    event.add('tfc:usable_in_blue_steel_bucket', 'gtceu:creosote')
}

const registerTFCPlacedFeatures = (event) => {
    
    // Удаление гена гемов из биомов
    event.remove('tfc:in_biome/large_features/highlands', 'tfc:random_empty_hot_spring')
    event.remove('tfc:in_biome/large_features/low_canyons', 'tfc:random_empty_hot_spring')
    event.remove('tfc:in_biome/large_features/plateau', 'tfc:random_empty_hot_spring')

    // Удаление
    event.remove('tfc:in_biome/veins', 'tfc:vein/surface_native_copper')
    event.remove('tfc:in_biome/veins', 'tfc:vein/surface_malachite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/surface_tetrahedrite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/normal_malachite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/normal_tetrahedrite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/normal_native_gold')
    event.remove('tfc:in_biome/veins', 'tfc:vein/rich_native_gold')
    event.remove('tfc:in_biome/veins', 'tfc:vein/fake_native_gold')
    event.remove('tfc:in_biome/veins', 'tfc:vein/surface_native_silver')
    event.remove('tfc:in_biome/veins', 'tfc:vein/normal_native_silver')
    event.remove('tfc:in_biome/veins', 'tfc:vein/surface_cassiterite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/surface_bismuthinite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/normal_bismuthinite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/surface_sphalerite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/normal_sphalerite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/surface_hematite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/surface_magnetite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/surface_limonite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/normal_garnierite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/gabbro_garnierite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/graphite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/lignite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/bituminous_coal')
    event.remove('tfc:in_biome/veins', 'tfc:vein/sulfur')
    event.remove('tfc:in_biome/veins', 'tfc:vein/cryolite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/cinnabar')
    event.remove('tfc:in_biome/veins', 'tfc:vein/saltpeter')
    event.remove('tfc:in_biome/veins', 'tfc:vein/sylvite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/borax')
    event.remove('tfc:in_biome/veins', 'tfc:vein/gypsum')
    event.remove('tfc:in_biome/veins', 'tfc:vein/halite')
    event.remove('tfc:in_biome/veins', 'tfc:vein/lapis_lazuli')
    event.remove('tfc:in_biome/veins', 'tfc:vein/diamond')
    event.remove('tfc:in_biome/veins', 'tfc:vein/emerald')
    event.remove('tfc:in_biome/veins', 'tfc:vein/amethyst')
    event.remove('tfc:in_biome/veins', 'tfc:vein/opal')
    event.remove('tfc:in_biome/veins', 'tfc:geode')

    // Добавление
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_garnet_amethyst')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_garnet_opal')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_gold')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_hematite')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_limonite')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_magnetite')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_molybdenum')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_naquadah')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_pitchblende')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_sapphire')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_scheelite')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_sheldonite')
    event.add('tfc:in_biome/veins', 'tfg:vein/deep_topaz')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_apatite_')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_basaltic_sands')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_bauxite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_beryllium')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_bismuthinite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_cassiterite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_certus_quartz')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_coal')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_copper')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_garnet_tin')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_garnierite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_gold')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_graphite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_hematite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_lapis')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_limonite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_lubricant')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_magnetite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_manganese')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_mica')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_monazite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_olivine')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_redstone')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_salt')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_saltpeter')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_silver')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_sphalerite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_sulfur')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_sylvite')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_tetrahedrite')
    event.add('tfc:in_biome/veins', 'tfg:vein/surface_bismuthinite')
    event.add('tfc:in_biome/veins', 'tfg:vein/surface_cassiterite')
    event.add('tfc:in_biome/veins', 'tfg:vein/surface_copper')
    event.add('tfc:in_biome/veins', 'tfg:vein/surface_sphalerite')
    event.add('tfc:in_biome/veins', 'tfg:vein/surface_tetrahedrite')
    event.add('tfc:in_biome/veins', 'tfg:geode')
}