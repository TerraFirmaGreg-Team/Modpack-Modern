// priority: 0

const registerTFCItemTags = (event) => {
    // Теги для соответствия инструментов TFC и GT
    
    GTMaterialRegistry.getRegisteredMaterials().forEach(material => {
        if (material.hasProperty(PropertyKey.TOOL)) {
            for (let [key, value] of Object.entries(global.GTCEU_TOOLTYPES_WHICH_HAS_TFC_DUPS)) {
                var tool = ToolHelper.get(value, material)
                if (!tool.isEmpty()) event.add(key, tool.getId())

                event.add('tfc:usable_on_tool_rack', `#${key}`)
            }
        }
    })

    event.add('tfc:usable_on_tool_rack', '#forge:tools/mining_hammers')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/spades')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/wrenches')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/files')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/crowbars')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/screwdrivers')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/wire_cutters')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/butchery_knives')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/plungers')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/mortars')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/mallets')
    
    event.add('tfc:usable_on_tool_rack', '#forge:tools/chainsaws')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/buzzsaws')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/drills')
    
    // Для складывания
    event.add('tfc:pileable_ingots', '#forge:ingots')
    event.add('tfc:pileable_sheets', '#forge:plates')

    // Рыба
    event.add('minecraft:fishes', 'tfc:food/calamari')
    event.add('minecraft:fishes', 'tfc:food/bluegill')
    event.add('minecraft:fishes', 'tfc:food/crappie')
    event.add('minecraft:fishes', 'tfc:food/lake_trout')
    event.add('minecraft:fishes', 'tfc:food/largemouth_bass')
    event.add('minecraft:fishes', 'tfc:food/rainbow_trout')
    event.add('minecraft:fishes', 'tfc:food/smallmouth_bass')

    // Чтобы жарились бревна из TFC в пиролиз. печке
    // Почему нельзя просто добавить тег в тег? (допустим minecraft:logs), потому что из-за этого ломаются все рецепты minecraft:logs, магия...
    global.TFC_WOOD_TYPES.forEach(woodType => {
        event.add('minecraft:logs_that_burn', `#tfc:${woodType}_logs`)
    })

    // Определеяет какое оружие может появиться у зомбя/скелета в руках
    // Мечи
    event.add('tfc:mob_mainhand_weapons', 'gtceu:bismuth_bronze_sword')
    event.add('tfc:mob_mainhand_weapons', 'gtceu:bronze_sword')
    event.add('tfc:mob_mainhand_weapons', 'gtceu:black_bronze_sword')
    // Топоры
    event.add('tfc:mob_mainhand_weapons', 'gtceu:bismuth_bronze_axe')
    event.add('tfc:mob_mainhand_weapons', 'gtceu:bronze_axe')
    event.add('tfc:mob_mainhand_weapons', 'gtceu:black_bronze_axe')
    // Косы
    event.add('tfc:mob_mainhand_weapons', 'gtceu:bismuth_bronze_scythe')
    event.add('tfc:mob_mainhand_weapons', 'gtceu:bronze_scythe')
    event.add('tfc:mob_mainhand_weapons', 'gtceu:black_bronze_scythe')

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

    // Теги для сосудов по цветам
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.add('tfg:colorized_unfired_vessels', `tfc:ceramic/${dye}_unfired_vessel`)
        event.add('tfg:colorized_fired_vessels', `tfc:ceramic/${dye}_glazed_vessel`)

        event.add('tfg:colorized_unfired_large_vessels', `tfc:ceramic/unfired_large_vessel/${dye}`)
        event.add('tfg:colorized_fired_large_vessels', `tfc:ceramic/large_vessel/${dye}`)
        
    })

    // Цвета гравия
    // Коричневый
    event.add('tfc:brown_gravel', 'tfc:rock/gravel/claystone')
    // Белый
    event.add('tfc:white_gravel', 'tfc:rock/gravel/chalk')
    event.add('tfc:white_gravel', 'tfc:rock/gravel/diorite')
    event.add('tfc:white_gravel', 'tfc:rock/gravel/quartzite')
    event.add('tfc:white_gravel', 'tfc:rock/gravel/marble')
    // Черный
    event.add('tfc:black_gravel', 'tfc:rock/gravel/basalt')
    event.add('tfc:black_gravel', 'tfc:rock/gravel/phyllite')
    event.add('tfc:black_gravel', 'tfc:rock/gravel/andesite')
    event.add('tfc:black_gravel', 'tfc:rock/gravel/dacite')
    event.add('tfc:black_gravel', 'tfc:rock/gravel/gabbro')
    event.add('tfc:black_gravel', 'tfc:rock/gravel/dolomite')
    event.add('tfc:black_gravel', 'tfc:rock/gravel/shale')
    // Красный
    event.add('tfc:red_gravel', 'tfc:rock/gravel/chert')
    event.add('tfc:red_gravel', 'tfc:rock/gravel/rhyolite')
    // Желтый
    event.add('tfc:yellow_gravel', 'tfc:rock/gravel/limestone')
    event.add('tfc:yellow_gravel', 'tfc:rock/gravel/slate')
    // Зеленый
    event.add('tfc:green_gravel', 'tfc:rock/gravel/gneiss')
    event.add('tfc:green_gravel', 'tfc:rock/gravel/conglomerate')
    event.add('tfc:green_gravel', 'tfc:rock/gravel/schist')
    // Розовый
    event.add('tfc:pink_gravel', 'tfc:rock/gravel/granite')

    // Теги для объединения наковален
    event.add('tfc:red_or_blue_anvil', 'tfc:metal/anvil/blue_steel')
    event.add('tfc:red_or_blue_anvil', 'tfc:metal/anvil/red_steel')

    // Теги для решеток
    event.add('tfg:metal_bars', 'tfc:metal/bars/bismuth_bronze')
    event.add('tfg:metal_bars', 'tfc:metal/bars/black_bronze')
    event.add('tfg:metal_bars', 'tfc:metal/bars/bronze')
    event.add('tfg:metal_bars', 'tfc:metal/bars/copper')
    event.add('tfg:metal_bars', 'tfc:metal/bars/wrought_iron')
    event.add('tfg:metal_bars', 'tfc:metal/bars/steel')
    event.add('tfg:metal_bars', 'tfc:metal/bars/black_steel')
    event.add('tfg:metal_bars', 'tfc:metal/bars/blue_steel')
    event.add('tfg:metal_bars', 'tfc:metal/bars/red_steel')

    // Тэги для цепей
    event.add('tfg:metal_chains', 'tfc:metal/chain/bismuth_bronze')
    event.add('tfg:metal_chains', 'tfc:metal/chain/black_bronze')
    event.add('tfg:metal_chains', 'tfc:metal/chain/bronze')
    event.add('tfg:metal_chains', 'tfc:metal/chain/copper')
    event.add('tfg:metal_chains', 'tfc:metal/chain/wrought_iron')
    event.add('tfg:metal_chains', 'tfc:metal/chain/steel')
    event.add('tfg:metal_chains', 'tfc:metal/chain/black_steel')
    event.add('tfg:metal_chains', 'tfc:metal/chain/blue_steel')
    event.add('tfg:metal_chains', 'tfc:metal/chain/red_steel')

    // Теги для незаконченных ламп
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/bismuth_bronze')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/black_bronze')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/bronze')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/copper')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/wrought_iron')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/steel')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/black_steel')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/blue_steel')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/red_steel')

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
            event.add(`tfg:rock_stairs`, `tfc:rock/${slabType}/${stoneTypeName}_stairs`)
            event.add(`tfg:rock_walls`, `tfc:rock/${slabType}/${stoneTypeName}_wall`)
        })
    })

    // Удаление тегов у отключенных предметов
    global.TFC_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })

    // Удаление тегов у руд
    event.removeAllTagsFrom("/tfc:ore/[^*]+/[^*]+/")
}

const registerTFCBlockTags = (event) => {
    // Теги для каменных ступенек тфк
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        global.TFC_ROCK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add(`tfg:rock_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`)
            event.add(`tfg:rock_stairs`, `tfc:rock/${slabType}/${stoneTypeName}_stairs`)
            event.add(`tfg:rock_walls`, `tfc:rock/${slabType}/${stoneTypeName}_wall`)
        })
    })

    // Отключение ломания блоков установленных на полу
    event.add('tfcdesirepaths:trample_blacklist', 'tfc:placed_item')

    // Возможность обрушения полу-блоков
    event.add('tfc:can_collapse', '#tfg:rock_slabs')
    event.add('tfc:can_start_collapse', '#tfg:rock_slabs')
    event.add('tfc:can_trigger_collapse', '#tfg:rock_slabs')

    // Возможность обрушения ступеней
    event.add('tfc:can_collapse', '#tfg:rock_stairs')
    event.add('tfc:can_start_collapse', '#tfg:rock_stairs')
    event.add('tfc:can_trigger_collapse', '#tfg:rock_stairs')

    // Возможность обрушения стен
    event.add('tfc:can_collapse', '#tfg:rock_walls')
    event.add('tfc:can_start_collapse', '#tfg:rock_walls')
    event.add('tfc:can_trigger_collapse', '#tfg:rock_walls')

    // Возможность обрушения руды
    event.add('tfc:can_collapse', '#forge:ores')
    event.add('tfc:can_start_collapse', '#forge:ores')
    event.add('tfc:can_trigger_collapse', '#forge:ores')
    
    event.add('tfc:monster_spawns_on', '#forge:ores')
    event.add('tfc:prospectable', '#forge:ores')

    event.add('tfc:glass_basin_blocks', 'gtceu:brass_block')
    event.add('tfc:glass_pouring_table', 'gtceu:brass_block')

    event.add('tfc:glass_basin_blocks', 'tfc:red_kaolin_clay')
    event.add('tfc:glass_pouring_table', 'tfc:red_kaolin_clay')

    event.add('tfc:glass_basin_blocks', 'tfc:pink_kaolin_clay')
    event.add('tfc:glass_pouring_table', 'tfc:pink_kaolin_clay')

    event.add('tfc:glass_basin_blocks', 'tfc:white_kaolin_clay')
    event.add('tfc:glass_pouring_table', 'tfc:white_kaolin_clay')

    // Удаление тегов у отключенных предметов
    global.TFC_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Удаление тегов у руд
    event.removeAllTagsFrom("/tfc:ore/[^*]+/[^*]+/")
}

const registerTFCFluidTags = (event) => {
    // Удаление TFC металлов из возможных в форме слитка
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/bismuth')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/bismuth_bronze')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/bronze')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/black_bronze')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/brass')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/copper')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/gold')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/nickel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/rose_gold')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/silver')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/tin')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/zinc')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/sterling_silver')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/wrought_iron')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/black_steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/red_steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/blue_steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/cast_iron')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/pig_iron')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/high_carbon_steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/high_carbon_black_steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/high_carbon_red_steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/high_carbon_blue_steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/weak_steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/weak_red_steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/weak_blue_steel')
    event.remove('tfc:usable_in_ingot_mold', 'tfc:metal/unknown')

    // Добавление GTCEu металлов в форму слитков
    event.add('tfc:usable_in_ingot_mold', 'gtceu:bismuth')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:bismuth_bronze')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:black_bronze')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:bronze')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:brass')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:copper')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:gold')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:nickel')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:rose_gold')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:silver')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:tin')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:zinc')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:sterling_silver')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:wrought_iron')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:iron')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:steel')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:black_steel')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:blue_steel')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:red_steel')
    event.add('tfc:usable_in_ingot_mold', 'tfg:pig_iron')
    event.add('tfc:usable_in_ingot_mold', 'tfg:high_carbon_steel')
    event.add('tfc:usable_in_ingot_mold', 'tfg:high_carbon_black_steel')
    event.add('tfc:usable_in_ingot_mold', 'tfg:high_carbon_red_steel')
    event.add('tfc:usable_in_ingot_mold', 'tfg:high_carbon_blue_steel')
    event.add('tfc:usable_in_ingot_mold', 'tfg:weak_steel')
    event.add('tfc:usable_in_ingot_mold', 'tfg:weak_red_steel')
    event.add('tfc:usable_in_ingot_mold', 'tfg:weak_blue_steel')
    event.add('tfc:usable_in_ingot_mold', 'tfg:unknown')

    event.add('tfc:usable_in_ingot_mold', 'gtceu:red_alloy')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:tin_alloy')

    //
    event.add('tfc:usable_in_bell_mold', 'gtceu:bronze')
    event.add('tfc:usable_in_bell_mold', 'gtceu:gold')
    event.add('tfc:usable_in_bell_mold', 'gtceu:brass')

    //
    event.add('tfc:usable_in_tool_head_mold', 'gtceu:copper')
    event.add('tfc:usable_in_tool_head_mold', 'gtceu:bismuth_bronze')
    event.add('tfc:usable_in_tool_head_mold', 'gtceu:black_bronze')
    event.add('tfc:usable_in_tool_head_mold', 'gtceu:bronze')

    //
    event.add('tfc:usable_in_pot', 'tfg:latex')
    event.add('tfc:usable_in_barrel', 'tfg:latex')
    event.add('tfc:usable_in_wooden_bucket', 'tfg:latex')

    //
    event.add('tfc:usable_in_barrel', 'gtceu:creosote')
    event.add('tfc:usable_in_wooden_bucket', 'gtceu:creosote')
    event.add('tfc:usable_in_red_steel_bucket', 'gtceu:creosote')
    event.add('tfc:usable_in_blue_steel_bucket', 'gtceu:creosote')

    // Добавляем тег для скрытия в EMI
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/bismuth')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/bismuth_bronze')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/bronze')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/black_bronze')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/brass')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/copper')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/gold')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/nickel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/rose_gold')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/silver')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/tin')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/zinc')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/sterling_silver')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/wrought_iron')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/black_steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/red_steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/blue_steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/cast_iron')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/pig_iron')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/high_carbon_steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/high_carbon_black_steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/high_carbon_red_steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/high_carbon_blue_steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/weak_steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/weak_red_steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/weak_blue_steel')
    event.add('c:hidden_from_recipe_viewers', 'tfc:metal/unknown')
}

const registerTFCPlacedFeatures = (event) => {
    
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
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_spodumene')
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_oil_sands')
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
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_tetrahedrite')
    event.add('tfc:in_biome/veins', 'tfg:vein/surface_bismuthinite')
    event.add('tfc:in_biome/veins', 'tfg:vein/surface_cassiterite')
    event.add('tfc:in_biome/veins', 'tfg:vein/surface_copper')
    event.add('tfc:in_biome/veins', 'tfg:vein/surface_sphalerite')
    event.add('tfc:in_biome/veins', 'tfg:vein/surface_tetrahedrite')
    event.add('tfc:in_biome/veins', 'tfg:geode')
}
