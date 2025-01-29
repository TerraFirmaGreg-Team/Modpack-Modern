// priority: 0

const registerTFCItemTags = (event) => {
    //#region Возможность вешать инструменты GregTech на ToolRack
    event.add('tfc:usable_on_tool_rack', '#forge:tools/swords') 
    event.add('tfc:usable_on_tool_rack', '#forge:tools/pickaxes')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/axes')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/shovels')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/hoes')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/hammers')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/knives')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/saws')
    event.add('tfc:usable_on_tool_rack', '#forge:tools/scythes')

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
    //#endregion

    //#region Возможность GT инструментам выполнять те же действия, что и TFC
    event.add('tfc:swords', '#forge:tools/swords')
    event.add('tfc:pickaxes', '#forge:tools/pickaxes')
    event.add('tfc:axes', '#forge:tools/axes')
    event.add('tfc:shovels', '#forge:tools/shovels')
    event.add('tfc:shovels', '#forge:tools/spades')
    event.add('tfc:hoes', '#forge:tools/hoes')
    event.add('tfc:hammers', '#forge:tools/hammers')
    event.add('tfc:knives', '#forge:tools/knives')
    event.add('tfc:saws', '#forge:tools/saws')
    event.add('tfc:scythes', '#forge:tools/scythes')
    //#endregion

    //#region Трушное удаление dusts у powders
    event.remove('forge:dusts', '#tfc:powders')
    //#endregion

    //#region Позволяет складывать все слитки и пластины в игре

    // Ингредиенты для закваски
    event.add('tfg:ferments_to_rennet', 'tfc:food/soybean')
    event.add('tfg:ferments_to_rennet', 'firmalife:food/fig')
    event.add('tfg:ferments_to_rennet', 'tfc:plant/ivy')
    
    // Для складывания
    event.add('tfc:pileable_ingots', '#forge:ingots')
    event.add('tfc:pileable_sheets', '#forge:plates')
    //#endregion

    //#region Объединяем рыбу в 1 тег
    event.add('minecraft:fishes', 'tfc:food/calamari')
    event.add('minecraft:fishes', 'tfc:food/bluegill')
    event.add('minecraft:fishes', 'tfc:food/crappie')
    event.add('minecraft:fishes', 'tfc:food/lake_trout')
    event.add('minecraft:fishes', 'tfc:food/largemouth_bass')
    event.add('minecraft:fishes', 'tfc:food/rainbow_trout')
    event.add('minecraft:fishes', 'tfc:food/smallmouth_bass')
    //#endregion

    //#region Чтобы жарились бревна из TFC в пиролиз. печке (Почему нельзя просто добавить тег в тег? (допустим minecraft:logs), потому что из-за этого ломаются все рецепты minecraft:logs, магия...)
    global.TFC_WOOD_TYPES.forEach(woodType => {
        event.add('minecraft:logs_that_burn', `#tfc:${woodType}_logs`)
    })
    //#endregion

    //#region Позволяет скелетам и зомбям использовать GT оружие
    // Мечи    
    // Allows TFC stick bundles to be burned in the coke/pyrolyse ovens
    event.add("minecraft:logs_that_burn", "tfc:stick_bundle");

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
    //#endregion

    //#region Тэги для возможности использования разных углей в кузне
    event.add('tfc:forge_fuel', 'minecraft:coal')
    event.add('tfc:forge_fuel', 'gtceu:coke_gem')
    event.add('tfc:forge_fuel', 'gtceu:rich_raw_coal')
    event.add('tfc:forge_fuel', 'gtceu:raw_coal')
    event.add('tfc:forge_fuel', 'gtceu:poor_raw_coal')
    //#endregion

    //#region Тэги для сундуков, чтобы отличать их виды
    global.TFC_WOOD_TYPES.forEach(woodType => {
        event.add('tfg:default_chests', `tfc:wood/chest/${woodType}`)
        event.add('tfg:trapped_chests', `tfc:wood/trapped_chest/${woodType}`)

        // event.add('tfg:bladed_axles', `tfc:wood/bladed_axle/${woodType}`) //todo: нахера я это добавлял?
    })
    //#endregion

    //#region Теги для сосудов по цветам
    //Hardwood Tags
    global.TFC_HARDWOOD_TYPES.forEach(woodType => {
        event.add('tfg:hardwood', `#tfc:${woodType}_logs`)
        event.add('tfg:stripped_hardwood', `tfc:wood/stripped_log/${woodType}`)
        event.add('tfg:stripped_hardwood', `tfc:wood/stripped_wood/${woodType}`)
    });

    //Softwood Tags
    global.TFC_SOFTWOOD_TYPES.forEach(woodType =>{
        event.add('tfg:softwood', `#tfc:${woodType}_logs`)
        event.add('tfg:stripped_softwood', `tfc:wood/stripped_log/${woodType}`)
        event.add('tfg:stripped_softwood', `tfc:wood/stripped_wood/${woodType}`)
    })

    // Теги для сосудов по цветам
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.add('tfg:colorized_unfired_vessels', `tfc:ceramic/${dye}_unfired_vessel`)
        event.add('tfg:colorized_fired_vessels', `tfc:ceramic/${dye}_glazed_vessel`)

        event.add('tfg:colorized_unfired_large_vessels', `tfc:ceramic/unfired_large_vessel/${dye}`)
        event.add('tfg:colorized_fired_large_vessels', `tfc:ceramic/large_vessel/${dye}`)
        
    })
    //#endregion

    //#region Объединяем гравий по цветам
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
    //#endregion

    //#region Теги для объединения наковален 2 уровня
    event.add('tfg:tier_2_anvil', 'tfc:metal/anvil/bismuth_bronze')
    event.add('tfg:tier_2_anvil', 'tfc:metal/anvil/bronze')
    event.add('tfg:tier_2_anvil', 'tfc:metal/anvil/black_bronze')
    //#endregion

    //#region Теги для объединения наковален 6 уровня
    event.add('tfg:tier_6_anvil', 'tfc:metal/anvil/blue_steel')
    event.add('tfg:tier_6_anvil', 'tfc:metal/anvil/red_steel')
    //#endregion

    //#region Теги для объединения решеток
    event.add('tfg:metal_bars', 'tfc:metal/bars/bismuth_bronze')
    event.add('tfg:metal_bars', 'tfc:metal/bars/black_bronze')
    event.add('tfg:metal_bars', 'tfc:metal/bars/bronze')
    event.add('tfg:metal_bars', 'tfc:metal/bars/copper')
    event.add('tfg:metal_bars', 'tfc:metal/bars/wrought_iron')
    event.add('tfg:metal_bars', 'tfc:metal/bars/steel')
    event.add('tfg:metal_bars', 'tfc:metal/bars/black_steel')
    event.add('tfg:metal_bars', 'tfc:metal/bars/blue_steel')
    event.add('tfg:metal_bars', 'tfc:metal/bars/red_steel')
    //#endregion

    //#region Теги для объединения цепей
    event.add('tfg:metal_chains', 'tfc:metal/chain/bismuth_bronze')
    event.add('tfg:metal_chains', 'tfc:metal/chain/black_bronze')
    event.add('tfg:metal_chains', 'tfc:metal/chain/bronze')
    event.add('tfg:metal_chains', 'tfc:metal/chain/copper')
    event.add('tfg:metal_chains', 'tfc:metal/chain/wrought_iron')
    event.add('tfg:metal_chains', 'tfc:metal/chain/steel')
    event.add('tfg:metal_chains', 'tfc:metal/chain/black_steel')
    event.add('tfg:metal_chains', 'tfc:metal/chain/blue_steel')
    event.add('tfg:metal_chains', 'tfc:metal/chain/red_steel')
    //#endregion
    
    //#region Теги для объединения незаверешенных ламп
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/bismuth_bronze')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/black_bronze')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/bronze')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/copper')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/wrought_iron')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/steel')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/black_steel')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/blue_steel')
    event.add('tfg:unfinished_lamps', 'tfc:metal/unfinished_lamp/red_steel')
    //#endregion

    //#region Теги для объединения кораллов
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
    //#endregion

    //#region Теги для объединения ступеней, полублоков и стен соответственно
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        global.TFC_ROCK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add(`tfg:rock_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`)
            event.add(`tfg:rock_stairs`, `tfc:rock/${slabType}/${stoneTypeName}_stairs`)
            event.add(`tfg:rock_walls`, `tfc:rock/${slabType}/${stoneTypeName}_wall`)
        })
    })
    //#endregion

    //#region Теги для обхединения яблок
    event.add(`tfg:all_apples`, `tfc:food/red_apple`)
    event.add(`tfg:all_apples`, `tfc:food/green_apple`)
    //#endregion

    //#region Удаление тегов и скрытие руд
    const ALL_TFC_ORES = Ingredient.of(/tfc:ore\/[^*]+\/[^*]+/).itemIds

    ALL_TFC_ORES.forEach(element => {
        event.removeAllTagsFrom(element)
        event.add('c:hidden_from_recipe_viewers', element)
    })
    //#endregion
    
    // Теги для кирпичных ступенек тфк
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        global.TFC_BRICK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add(`tfg:brick_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`)
            event.add(`tfg:brick_stairs`, `tfc:rock/${slabType}/${stoneTypeName}_stairs`)
            event.add(`tfg:brick_walls`, `tfc:rock/${slabType}/${stoneTypeName}_wall`)
        })
    })

    // Удаление тегов у отключенных предметов
    global.TFC_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
        event.add('c:hidden_from_recipe_viewers', item)
    })
}

const registerTFCBlockTags = (event) => {
    
    //#region Теги для объединения ступеней, полублоков и стен соответственно
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        global.TFC_ROCK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add(`tfg:rock_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`)
            event.add(`tfg:rock_stairs`, `tfc:rock/${slabType}/${stoneTypeName}_stairs`)
            event.add(`tfg:rock_walls`, `tfc:rock/${slabType}/${stoneTypeName}_wall`)
        })
    })
    //#endregion
    
    //#region Отключение ломания блоков установленных на полу 
    
    // Теги для кирпичных ступенек тфк
    global.TFC_STONE_TYPES.forEach(stoneTypeName => {
        global.TFC_BRICK_SLAB_BLOCK_TYPES.forEach(slabType => {
            event.add(`tfg:brick_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`)
            event.add(`tfg:brick_stairs`, `tfc:rock/${slabType}/${stoneTypeName}_stairs`)
            event.add(`tfg:brick_walls`, `tfc:rock/${slabType}/${stoneTypeName}_wall`)
        })
    })

    // Отключение ломания блоков установленных на полу
    event.add('tfcdesirepaths:trample_blacklist', 'tfc:placed_item')
    //#endregion
    
    //#region Возможность обрушения полу-блоков
    event.add('tfc:can_collapse', '#tfg:rock_slabs')
    event.add('tfc:can_start_collapse', '#tfg:rock_slabs')
    event.add('tfc:can_trigger_collapse', '#tfg:rock_slabs')
    //#endregion

    //#region Возможность обрушения ступеней
    event.add('tfc:can_collapse', '#tfg:rock_stairs')
    event.add('tfc:can_start_collapse', '#tfg:rock_stairs')
    event.add('tfc:can_trigger_collapse', '#tfg:rock_stairs')
    //#endregion

    //#region Возможность обрушения стен
    event.add('tfc:can_collapse', '#tfg:rock_walls')
    event.add('tfc:can_start_collapse', '#tfg:rock_walls')
    event.add('tfc:can_trigger_collapse', '#tfg:rock_walls')
    //#endregion

    //#region Возможность обрушения руды
    event.add('tfc:can_collapse', '#forge:ores')
    event.add('tfc:can_start_collapse', '#forge:ores')
    event.add('tfc:can_trigger_collapse', '#forge:ores')
    //#endregion

    //#region Разрешаем спавн мобов на руде
    event.add('tfc:monster_spawns_on', '#forge:ores')
    //#endregion
    
    //#region Разрешаем проспекторам тфк находить любые руды
    event.add('tfc:prospectable', '#forge:ores')
    //#endregion

    //#region Разрешаем отливать стекло в кастомных блоках
    // GregTech блок латуни
    event.add('tfc:glass_basin_blocks', 'gtceu:brass_block')
    event.add('tfc:glass_pouring_table', 'gtceu:brass_block')

    // Красная каолинитовая глина
    event.add('tfc:glass_basin_blocks', 'tfc:red_kaolin_clay')
    event.add('tfc:glass_pouring_table', 'tfc:red_kaolin_clay')

    // Розовая каолинитовая глина
    event.add('tfc:glass_basin_blocks', 'tfc:pink_kaolin_clay')
    event.add('tfc:glass_pouring_table', 'tfc:pink_kaolin_clay')

    // Белая каолинитовая глина
    event.add('tfc:glass_basin_blocks', 'tfc:white_kaolin_clay')
    event.add('tfc:glass_pouring_table', 'tfc:white_kaolin_clay')
    //#endregion

    //#region Позволяем ТФК магме греть бойлер из Create
    global.TFC_MAGMA_BLOCKS.forEach(el => {
        event.add('create:passive_boiler_heaters', el)
    })
    //#endregion

    //#region Удаление тегов и скрытие руд
    const ALL_TFC_ORES = Ingredient.of(/tfc:ore\/[^*]+\/[^*]+/).itemIds

    ALL_TFC_ORES.forEach(element => {
        event.removeAllTagsFrom(element)
        event.add('c:hidden_from_recipe_viewers', element)
    })
    //#endregion

    // Удаление тегов у отключенных предметов
    global.TFC_DISABLED_ITEMS.forEach(item => {
        event.removeAllTagsFrom(item)
    })

    // Удаление тегов у руд
    event.removeAllTagsFrom("/tfc:ore/[^*]+/[^*]+/")


    //#region Позволяем ТФК магме греть бойлер из Create
    global.TFC_MAGMA_BLOCKS.forEach(el => {
        event.add('create:passive_boiler_heaters', el)
    })
    //#endregion
}

const registerTFCFluidTags = (event) => {
    //#region Добавление GregTech металлов в форму слитков
    // Обычные металлы
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

    // Кастомные металлы
    event.add('tfc:usable_in_ingot_mold', 'gtceu:red_alloy')
    event.add('tfc:usable_in_ingot_mold', 'gtceu:tin_alloy')
    //#endregion

    //#region Удаляем TFC металлов из формы слитка
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
    //#endregion

    //#region Добавляем GregTech металлы в формы колокола
    event.add('tfc:usable_in_bell_mold', 'gtceu:bronze')
    event.add('tfc:usable_in_bell_mold', 'gtceu:gold')
    event.add('tfc:usable_in_bell_mold', 'gtceu:brass')
    //#endregion

    //#region Удаляем TFC металлы из формы колокола
    event.remove('tfc:usable_in_bell_mold', "tfc:metal/bronze")
    event.remove('tfc:usable_in_bell_mold', "tfc:metal/gold")
    event.remove('tfc:usable_in_bell_mold', "tfc:metal/brass")
    //#endregion

    //#region Добавляем GregTech металлы в формы оголовья
    event.add('tfc:usable_in_tool_head_mold', 'gtceu:copper')
    event.add('tfc:usable_in_tool_head_mold', 'gtceu:bismuth_bronze')
    event.add('tfc:usable_in_tool_head_mold', 'gtceu:black_bronze')
    event.add('tfc:usable_in_tool_head_mold', 'gtceu:bronze')
    //#endregion

    //#region Удаляем TFC металлы из формы оголовья
    event.add('tfc:usable_in_tool_head_mold', 'tfc:metal/copper')
    event.add('tfc:usable_in_tool_head_mold', 'tfc:metal/bismuth_bronze')
    event.add('tfc:usable_in_tool_head_mold', 'tfc:metal/black_bronze')
    event.add('tfc:usable_in_tool_head_mold', 'tfc:metal/bronze')
    //#endregion

    //#region Добавляем жидкости в чашу
    event.add('tfc:usable_in_pot', 'tfg:latex')
    //#endregion

    //#region Добавляем жидкости в бочку
    event.add('tfc:usable_in_barrel', 'tfg:latex')
    event.add('tfc:usable_in_barrel', 'gtceu:creosote')
    //#endregion

    //#region Добавляем жидкости в деревянное ведро
    event.add('tfc:usable_in_wooden_bucket', 'tfg:latex')
    event.add('tfc:usable_in_wooden_bucket', 'gtceu:creosote')
    //#endregion

    //#region Добавляем жидкости в красное ведро
    event.add('tfc:usable_in_red_steel_bucket', 'gtceu:creosote')
    //#endregion

    //#region Добавляем жидкости в синее ведро
    event.add('tfc:usable_in_blue_steel_bucket', 'gtceu:creosote')
    //#endregion

    //#region Скрываем неиспользуемые жидкости
    const ALL_DISABLED_FLUIDS = [
        'tfc:metal/bismuth',
        'tfc:metal/bismuth_bronze',
        'tfc:metal/bronze',
        'tfc:metal/black_bronze',
        'tfc:metal/brass',
        'tfc:metal/copper',
        'tfc:metal/gold',
        'tfc:metal/nickel',
        'tfc:metal/rose_gold',
        'tfc:metal/silver',
        'tfc:metal/tin',
        'tfc:metal/zinc',
        'tfc:metal/sterling_silver',
        'tfc:metal/wrought_iron',
        'tfc:metal/steel',
        'tfc:metal/black_steel',
        'tfc:metal/red_steel',
        'tfc:metal/blue_steel',
        'tfc:metal/cast_iron',
        'tfc:metal/pig_iron',
        'tfc:metal/high_carbon_steel',
        'tfc:metal/high_carbon_black_steel',
        'tfc:metal/high_carbon_red_steel',
        'tfc:metal/high_carbon_blue_steel',
        'tfc:metal/weak_steel',
        'tfc:metal/weak_red_steel',
        'tfc:metal/weak_blue_steel',
        'tfc:metal/unknown'
    ]
    
    ALL_DISABLED_FLUIDS.forEach(fluid => {
        event.add('c:hidden_from_recipe_viewers', fluid)
    })
    //#endregion
}

const registerTFCBiomeTags = (event) => {
    
    //#region Создаем тег со всеми TFC биомами
    const ALL_TFC_BIOMES = [
        "tfc:badlands",
        "tfc:canyons",
        "tfc:deep_ocean",
        "tfc:deep_ocean_trench",
        "tfc:highlands",
        "tfc:hills",
        "tfc:inverted_badlands",
        "tfc:lake",
        "tfc:low_canyons",
        "tfc:lowlands",
        "tfc:mountain_lake",
        "tfc:mountains",
        "tfc:ocean",
        "tfc:ocean_reef",
        "tfc:oceanic_mountain_lake",
        "tfc:oceanic_mountains",
        "tfc:old_mountain_lake",
        "tfc:old_mountains",
        "tfc:plains",
        "tfc:plateau",
        "tfc:plateau_lake",
        "tfc:river",
        "tfc:rolling_hills",
        "tfc:salt_marsh",
        "tfc:shore",
        "tfc:tidal_flats",
        "tfc:volcanic_mountain_lake",
        "tfc:volcanic_mountains",
        "tfc:volcanic_oceanic_mountain_lake",
        "tfc:volcanic_oceanic_mountains"
    ]

    ALL_TFC_BIOMES.forEach(biome => {
        event.add('tfg:is_tfc_overworld', biome)
    })
    //#endregion
}

const registerTFCPlacedFeatures = (event) => {
    
    //#region Удаляем все руды TFC из генерации мира

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
    event.add('tfc:in_biome/veins', 'tfg:vein/normal_oilsands')
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
