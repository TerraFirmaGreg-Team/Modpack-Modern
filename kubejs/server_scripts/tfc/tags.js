// priority: 0
"use strict";

/** @param {TagEvent.Item} event */
function registerTFCItemTags(event) {
    // Теги для соответствия инструментов TFC и GT

    forEachMaterial((material) => {
        // Tool rack tags
        if (material.hasProperty(PropertyKey.TOOL)) {
            for (let [key, value] of Object.entries(global.GTCEU_TOOLTYPES_WHICH_HAS_TFC_DUPS)) {
                let tool = ToolHelper.get(value, material);
                if (!tool.isEmpty()) {
                    event.add(key, tool.getId());
                }
                event.add("tfc:usable_on_tool_rack", `#${key}`);
            }
        }
    });

    event.add("tfc:usable_on_tool_rack", "#forge:tools/mining_hammers");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/spades");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/wrenches");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/files");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/crowbars");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/screwdrivers");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/wire_cutters");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/butchery_knives");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/plungers");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/mortars");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/mallets");

    event.add("tfc:usable_on_tool_rack", "#forge:tools/chainsaws");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/buzzsaws");
    event.add("tfc:usable_on_tool_rack", "#forge:tools/drills");

    event.add("tfc:usable_on_tool_rack", "#forge:tools/fishing_nets");

    event.add("tfc:usable_on_tool_rack", "#tfc:buckets");

    event.add("tfc:usable_on_tool_rack", "buildinggadgets2:gadget_building");
    event.add("tfc:usable_on_tool_rack", "buildinggadgets2:gadget_exchanging");
    event.add("tfc:usable_on_tool_rack", "buildinggadgets2:gadget_copy_paste");
    event.add("tfc:usable_on_tool_rack", "buildinggadgets2:gadget_cut_paste");
    event.add("tfc:usable_on_tool_rack", "buildinggadgets2:gadget_destruction");
    event.add("tfc:usable_on_tool_rack", "create:super_glue");
    event.add("tfc:usable_on_tool_rack", "exposure:camera");
    event.add("tfc:usable_on_tool_rack", "measurements:tape_measure");
    event.add("tfc:usable_on_tool_rack", "#chalk:chalks");
    event.add("tfc:usable_on_tool_rack", "chalk:chalk_box");
    event.add("tfc:usable_on_tool_rack", "computercraft:pocket_computer_normal");
    event.add("tfc:usable_on_tool_rack", "computercraft:pocket_computer_advanced");
    event.add("tfc:usable_on_tool_rack", "grapplemod:grapplinghook");
    event.add("tfc:usable_on_tool_rack", "grapplemod:launcheritem");
    event.add("tfc:usable_on_tool_rack", "ae2:color_applicator");
    event.add("tfc:usable_on_tool_rack", "ae2:matter_cannon");
    event.add("tfc:usable_on_tool_rack", "ae2:network_tool");
    event.add("tfc:usable_on_tool_rack", "ae2:wireless_terminal");
    event.add("tfc:usable_on_tool_rack", "ae2:wireless_crafting_terminal");
    event.add("tfc:usable_on_tool_rack", "waterflasks:leather_flask");
    event.add("tfc:usable_on_tool_rack", "waterflasks:iron_flask");
    event.add("tfc:usable_on_tool_rack", "waterflasks:red_steel_flask");
    event.add("tfc:usable_on_tool_rack", "tfc:wool_cloth");
    event.add("tfc:usable_on_tool_rack", "firmalife:mixing_bowl");
    event.add("tfc:usable_on_tool_rack", "#gtceu:molds");

    // Ингредиенты для закваски
    event.add("tfg:ferments_to_rennet", "tfc:food/soybean");
    event.add("tfg:ferments_to_rennet", "firmalife:food/fig");
    event.add("tfg:ferments_to_rennet", "tfc:plant/ivy");

    //Plants
    event.add("tfc:plants", "#tfc:wild_fruits");

    // Для складывания
    event.add("tfc:pileable_ingots", "#forge:ingots");
    event.add("tfc:pileable_sheets", "#forge:plates");
    event.add("tfc:pileable_double_ingots", "gtceu:tin_alloy_double_ingot");
    event.add("tfc:pileable_double_ingots", "gtceu:red_alloy_double_ingot");
    event.add("tfc:pileable_double_ingots", "gtceu:lead_double_ingot");
    event.add("tfc:pileable_double_ingots", "gtceu:invar_double_ingot");
    event.add("tfc:pileable_double_ingots", "gtceu:potin_double_ingot");
    event.add("tfc:pileable_double_ingots", "gtceu:cobalt_double_ingot");
    event.add("tfc:pileable_double_ingots", "gtceu:cobalt_brass_double_ingot");

    // Рыба
    event.add("minecraft:fishes", "tfc:food/calamari");
    event.add("minecraft:fishes", "tfc:food/bluegill");
    event.add("minecraft:fishes", "tfc:food/crappie");
    event.add("minecraft:fishes", "tfc:food/lake_trout");
    event.add("minecraft:fishes", "tfc:food/largemouth_bass");
    event.add("minecraft:fishes", "tfc:food/rainbow_trout");
    event.add("minecraft:fishes", "tfc:food/smallmouth_bass");

    // Make eggs not useless
    event.add("tfc:foods/usable_in_salad", "tfc:food/cooked_egg");
    event.add("tfc:foods/usable_in_salad", "tfc:food/boiled_egg");
    event.add("tfc:foods/usable_in_jam_sandwich", "tfc:food/cooked_egg");
    event.add("tfc:foods/usable_in_jam_sandwich", "tfc:food/boiled_egg");
    event.add("tfc:foods/usable_in_sandwich", "tfc:food/cooked_egg");
    event.add("tfc:foods/usable_in_sandwich", "tfc:food/boiled_egg");

    // Чтобы жарились бревна из TFC в пиролиз. печке
    // Почему нельзя просто добавить тег в тег? (допустим minecraft:logs), потому что из-за этого ломаются все рецепты minecraft:logs, магия...
    global.TFC_WOOD_TYPES.forEach((woodType) => {
        event.add("minecraft:logs_that_burn", `#tfc:${woodType}_logs`);
    });

    // Allows TFC stick bundles to be burned in the coke/pyrolyse ovens
    event.add("minecraft:logs_that_burn", "tfc:stick_bundle");

    // Remove sulfur dust overlap
    event.remove("forge:dusts/sulfur", "tfc:powder/sulfur");

    // Тэги для возможности использования разных углей в кузне
    event.add("tfc:forge_fuel", "minecraft:coal");
    event.add("tfc:forge_fuel", "beneath:cursecoal");
    event.add("tfc:forge_fuel", "gtceu:coke_gem");
    event.add("tfc:forge_fuel", "gtceu:rich_raw_coal");
    event.add("tfc:forge_fuel", "gtceu:raw_coal");
    event.add("tfc:forge_fuel", "gtceu:poor_raw_coal");
    event.add("tfc:forge_fuel", "gtceu:coal_dust");
    event.add("tfc:forge_fuel", "gtceu:charcoal_dust");

    // Change blast furnace to use coke
    event.remove("tfc:blast_furnace_fuel", "minecraft:coal");
    event.remove("tfc:blast_furnace_fuel", "minecraft:charcoal");
    event.add("tfc:blast_furnace_fuel", "gtceu:coke_gem");
    event.add("tfc:blast_furnace_fuel", "beneath:cursecoal");

    // Create a tag for Steam Bloomery

    event.add("tfc:steam_bloomery_basic_fuels", "minecraft:coal");
    event.add("tfc:steam_bloomery_basic_fuels", "minecraft:charcoal");
    event.add("tfc:steam_bloomery_basic_fuels", "gtceu:rich_raw_coal");
    event.add("tfc:steam_bloomery_basic_fuels", "gtceu:raw_coal");
    event.add("tfc:steam_bloomery_basic_fuels", "gtceu:poor_raw_coal");
    event.add("tfc:steam_bloomery_basic_fuels", "gtceu:coal_dust");
    event.add("tfc:steam_bloomery_basic_fuels", "gtceu:charcoal_dust");

    // Тэги для сундуков, чтобы отличать их виды
    global.TFC_WOOD_TYPES.forEach((woodType) => {
        event.add("tfg:default_chests", `tfc:wood/chest/${woodType}`);
        event.add("tfg:trapped_chests", `tfc:wood/trapped_chest/${woodType}`);

        event.add("tfg:bladed_axles", `tfc:wood/bladed_axle/${woodType}`);
    });

    //Hardwood Tags
    global.TFC_HARDWOOD_TYPES.forEach((woodType) => {
        event.add("tfg:hardwood", `#tfc:${woodType}_logs`);
        event.add("tfg:stripped_hardwood", `tfc:wood/stripped_log/${woodType}`);
        event.add("tfg:stripped_hardwood", `tfc:wood/stripped_wood/${woodType}`);
    });

    //Softwood Tags
    global.TFC_SOFTWOOD_TYPES.forEach((woodType) => {
        event.add("tfg:softwood", `#tfc:${woodType}_logs`);
        event.add("tfg:stripped_softwood", `tfc:wood/stripped_log/${woodType}`);
        event.add("tfg:stripped_softwood", `tfc:wood/stripped_wood/${woodType}`);
    });

    // Теги для сосудов по цветам
    global.MINECRAFT_DYE_NAMES.forEach((dye) => {
        event.add("tfg:colorized_unfired_vessels", `tfc:ceramic/${dye}_unfired_vessel`);
        event.add("tfg:colorized_fired_vessels", `tfc:ceramic/${dye}_glazed_vessel`);

        event.add("tfg:colorized_unfired_large_vessels", `tfc:ceramic/unfired_large_vessel/${dye}`);
        event.add("tfg:colorized_fired_large_vessels", `tfc:ceramic/large_vessel/${dye}`);
    });

    // Цвета гравия
    // Коричневый
    event.add("tfc:brown_gravel", "tfc:rock/gravel/claystone");
    // Белый
    event.add("tfc:white_gravel", "tfc:rock/gravel/chalk");
    event.add("tfc:white_gravel", "tfc:rock/gravel/diorite");
    event.add("tfc:white_gravel", "tfc:rock/gravel/quartzite");
    event.add("tfc:white_gravel", "tfc:rock/gravel/marble");
    // Черный
    event.add("tfc:black_gravel", "tfc:rock/gravel/basalt");
    event.add("tfc:black_gravel", "tfc:rock/gravel/phyllite");
    event.add("tfc:black_gravel", "tfc:rock/gravel/andesite");
    event.add("tfc:black_gravel", "tfc:rock/gravel/dacite");
    event.add("tfc:black_gravel", "tfc:rock/gravel/gabbro");
    event.add("tfc:black_gravel", "tfc:rock/gravel/dolomite");
    event.add("tfc:black_gravel", "tfc:rock/gravel/shale");
    // Красный
    event.add("tfc:red_gravel", "tfc:rock/gravel/chert");
    event.add("tfc:red_gravel", "tfc:rock/gravel/rhyolite");
    // Желтый
    event.add("tfc:yellow_gravel", "tfc:rock/gravel/limestone");
    event.add("tfc:yellow_gravel", "tfc:rock/gravel/slate");
    // Зеленый
    event.add("tfc:green_gravel", "tfc:rock/gravel/gneiss");
    event.add("tfc:green_gravel", "tfc:rock/gravel/conglomerate");
    event.add("tfc:green_gravel", "tfc:rock/gravel/schist");
    // Розовый
    event.add("tfc:pink_gravel", "tfc:rock/gravel/granite");

    // Теги для объединения наковален
    event.add("tfc:red_or_blue_anvil", "tfc:metal/anvil/blue_steel");
    event.add("tfc:red_or_blue_anvil", "tfc:metal/anvil/red_steel");

    // Теги для решеток
    event.add("tfg:metal_bars", "tfc:metal/bars/bismuth_bronze");
    event.add("tfg:metal_bars", "tfc:metal/bars/black_bronze");
    event.add("tfg:metal_bars", "tfc:metal/bars/bronze");
    event.add("tfg:metal_bars", "tfc:metal/bars/copper");
    event.add("tfg:metal_bars", "tfc:metal/bars/wrought_iron");
    event.add("tfg:metal_bars", "tfc:metal/bars/steel");
    event.add("tfg:metal_bars", "tfc:metal/bars/black_steel");
    event.add("tfg:metal_bars", "tfc:metal/bars/blue_steel");
    event.add("tfg:metal_bars", "tfc:metal/bars/red_steel");

    // Тэги для цепей
    event.add("tfg:metal_chains", "tfc:metal/chain/bismuth_bronze");
    event.add("tfg:metal_chains", "tfc:metal/chain/black_bronze");
    event.add("tfg:metal_chains", "tfc:metal/chain/bronze");
    event.add("tfg:metal_chains", "tfc:metal/chain/copper");
    event.add("tfg:metal_chains", "tfc:metal/chain/wrought_iron");
    event.add("tfg:metal_chains", "tfc:metal/chain/steel");
    event.add("tfg:metal_chains", "tfc:metal/chain/black_steel");
    event.add("tfg:metal_chains", "tfc:metal/chain/blue_steel");
    event.add("tfg:metal_chains", "tfc:metal/chain/red_steel");

    // Теги для незаконченных ламп
    event.add("tfg:unfinished_lamps", "tfc:metal/unfinished_lamp/bismuth_bronze");
    event.add("tfg:unfinished_lamps", "tfc:metal/unfinished_lamp/black_bronze");
    event.add("tfg:unfinished_lamps", "tfc:metal/unfinished_lamp/bronze");
    event.add("tfg:unfinished_lamps", "tfc:metal/unfinished_lamp/copper");
    event.add("tfg:unfinished_lamps", "tfc:metal/unfinished_lamp/wrought_iron");
    event.add("tfg:unfinished_lamps", "tfc:metal/unfinished_lamp/steel");
    event.add("tfg:unfinished_lamps", "tfc:metal/unfinished_lamp/black_steel");
    event.add("tfg:unfinished_lamps", "tfc:metal/unfinished_lamp/blue_steel");
    event.add("tfg:unfinished_lamps", "tfc:metal/unfinished_lamp/red_steel");

    // Теги для кораллов
    event.add("tfc:corals", "tfc:coral/tube_coral_fan");
    event.add("tfc:corals", "tfc:coral/brain_coral_fan");
    event.add("tfc:corals", "tfc:coral/bubble_coral_fan");
    event.add("tfc:corals", "tfc:coral/fire_coral_fan");
    event.add("tfc:corals", "tfc:coral/horn_coral_fan");
    event.add("tfc:corals", "tfc:coral/tube_coral");
    event.add("tfc:corals", "tfc:coral/brain_coral");
    event.add("tfc:corals", "tfc:coral/bubble_coral");
    event.add("tfc:corals", "tfc:coral/fire_coral");
    event.add("tfc:corals", "tfc:coral/horn_coral");
    event.add("tfc:corals", "tfc:coral/tube_dead_coral_fan");
    event.add("tfc:corals", "tfc:coral/brain_dead_coral_fan");
    event.add("tfc:corals", "tfc:coral/bubble_dead_coral_fan");
    event.add("tfc:corals", "tfc:coral/bubble_dead_coral");
    event.add("tfc:corals", "tfc:coral/fire_dead_coral_fan");
    event.add("tfc:corals", "tfc:coral/horn_dead_coral_fan");
    event.add("tfc:corals", "tfc:coral/tube_dead_coral");
    event.add("tfc:corals", "tfc:coral/brain_dead_coral");
    event.add("tfc:corals", "tfc:coral/fire_dead_coral");
    event.add("tfc:corals", "tfc:coral/horn_dead_coral");
    event.add("forge:corals", "#tfc:corals");

    // Теги для каменных ступенек тфк
    global.TFC_STONE_TYPES.forEach((stoneTypeName) => {
        global.TFC_ROCK_SLAB_BLOCK_TYPES.forEach((slabType) => {
            event.add(`tfg:rock_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`);
            event.add(`tfg:rock_stairs`, `tfc:rock/${slabType}/${stoneTypeName}_stairs`);
            event.add(`tfg:rock_walls`, `tfc:rock/${slabType}/${stoneTypeName}_wall`);
        });
    });

    // Теги для кирпичных ступенек тфк
    global.TFC_STONE_TYPES.forEach((stoneTypeName) => {
        global.TFC_BRICK_SLAB_BLOCK_TYPES.forEach((slabType) => {
            event.add(`tfg:brick_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`);
            event.add(`tfg:brick_stairs`, `tfc:rock/${slabType}/${stoneTypeName}_stairs`);
            event.add(`tfg:brick_walls`, `tfc:rock/${slabType}/${stoneTypeName}_wall`);
        });
    });

    // Удаление тегов у отключенных предметов
    global.TFC_DISABLED_ITEMS.forEach((item) => {
        event.removeAllTagsFrom(item);
        event.add("c:hidden_from_recipe_viewers", item);
    });

    global.TFC_HIDDEN_ITEMS.forEach((item) => {
        event.add("c:hidden_from_recipe_viewers", item);
    });

    // Удаление тегов у руд
    event.removeAllTagsFrom("/tfc:ore/[^*]+/[^*]+/");

    //Stone javelins
    event.add("tfc:stone_javelins", "tfc:stone/javelin/igneous_extrusive");
    event.add("tfc:stone_javelins", "tfc:stone/javelin/igneous_intrusive");
    event.add("tfc:stone_javelins", "tfc:stone/javelin/metamorphic");
    event.add("tfc:stone_javelins", "tfc:stone/javelin/sedimentary");

    //Moss
    event.add("tfc:moss", "tfc:plant/moss");
    event.add("tfc:moss", "tfc:plant/spanish_moss");
    event.add("tfc:moss", "tfc:plant/reindeer_lichen");
    event.add("tfc:moss", "tfc:plant/cobblestone_lichen");

    //Cloth
    event.add("forge:cloth", "tfc:burlap_cloth");
    event.add("forge:cloth", "tfc:wool_cloth");
    event.add("forge:cloth", "tfc:silk_cloth");

    // Piglin loved
    event.add("minecraft:piglin_loved", "tfc:ore/small_native_gold");
    event.add("minecraft:piglin_loved", "tfc:ore/poor_native_gold");
    event.add("minecraft:piglin_loved", "tfc:ore/normal_native_gold");
    event.add("minecraft:piglin_loved", "tfc:ore/rich_native_gold");

    // Bells
    event.add("tfc:bells", "tfc:bronze_bell");
    event.add("tfc:bells", "tfc:brass_bell");

    // Lets the basin be put on top of a charcoal forge
    event.add("tfc:forge_invisible_whitelist", "create:basin");

    // Allows automation with the 3x3 Hellforge
    event.add("tfc:forge_invisible_whitelist", "tfcchannelcasting:channel");
    event.add("tfc:forge_invisible_whitelist", "tfcchannelcasting:mold_table");
    event.add("tfc:forge_invisible_whitelist", "greate:steel_mechanical_pump");
    event.add("tfc:forge_invisible_whitelist", "greate:aluminum_mechanical_pump");
    event.add("tfc:forge_invisible_whitelist", "greate:stainless_steel_mechanical_pump");
    event.add("tfc:forge_invisible_whitelist", "greate:titanium_mechanical_pump");

    event.add("forge:mushrooms", "tfc:plant/artists_conk");
    event.add("forge:raw_materials/sylvite", "tfc:ore/sylvite");

    global.TFC_STONE_TYPES.forEach((stone) => {
        event.add("minecraft:stone_buttons", `tfc:rock/button/${stone}`);
        event.add("minecraft:buttons", `tfc:rock/button/${stone}`);
    });

    event.add("tfc:any_knapping", "#tfc:pit_kiln_straw");
    event.add("tfg:burlap_fiber", "tfc:jute_fiber");

    global.TFC_WET_MUD_BRICKS.forEach((wetMudBrick) => {
        event.add("tfc:wet_mud_bricks", wetMudBrick);
    });

    global.TFC_DRY_MUD_BRICKS.forEach((dryMudBrick) => {
        event.add("tfc:dry_mud_bricks", dryMudBrick);
    });
}

/** @param {TagEvent.Block} event */
function registerTFCBlockTags(event) {
    // Теги для каменных ступенек тфк
    global.TFC_STONE_TYPES.forEach((stoneTypeName) => {
        global.TFC_ROCK_SLAB_BLOCK_TYPES.forEach((slabType) => {
            event.add(`tfg:rock_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`);
            event.add(`tfg:rock_stairs`, `tfc:rock/${slabType}/${stoneTypeName}_stairs`);
            event.add(`tfg:rock_walls`, `tfc:rock/${slabType}/${stoneTypeName}_wall`);
        });
    });

    // Теги для кирпичных ступенек тфк
    global.TFC_STONE_TYPES.forEach((stoneTypeName) => {
        global.TFC_BRICK_SLAB_BLOCK_TYPES.forEach((slabType) => {
            event.add(`tfg:brick_slabs`, `tfc:rock/${slabType}/${stoneTypeName}_slab`);
            event.add(`tfg:brick_stairs`, `tfc:rock/${slabType}/${stoneTypeName}_stairs`);
            event.add(`tfg:brick_walls`, `tfc:rock/${slabType}/${stoneTypeName}_wall`);
        });
    });

    // Возможность обрушения полу-блоков
    event.add("tfc:can_collapse", "#tfg:rock_slabs");
    event.add("tfc:can_start_collapse", "#tfg:rock_slabs");
    event.add("tfc:can_trigger_collapse", "#tfg:rock_slabs");

    // Возможность обрушения ступеней
    event.add("tfc:can_collapse", "#tfg:rock_stairs");
    event.add("tfc:can_start_collapse", "#tfg:rock_stairs");
    event.add("tfc:can_trigger_collapse", "#tfg:rock_stairs");

    // Возможность обрушения стен
    event.add("tfc:can_collapse", "#tfg:rock_walls");
    event.add("tfc:can_start_collapse", "#tfg:rock_walls");
    event.add("tfc:can_trigger_collapse", "#tfg:rock_walls");

    event.add("tfc:can_start_collapse", "#tfc:rock/smooth");
    event.add("tfc:can_trigger_collapse", "#tfc:rock/smooth");

    // Возможность обрушения руды
    event.add("tfc:can_collapse", "#forge:ores");
    event.add("tfc:can_start_collapse", "#forge:ores");
    event.add("tfc:can_trigger_collapse", "#forge:ores");

    event.add("tfc:monster_spawns_on", "#forge:ores");
    event.add("tfc:prospectable", "#forge:ores");

    event.add("tfc:glass_basin_blocks", "create:brass_block");
    event.add("tfc:glass_pouring_table", "create:brass_block");

    event.add("tfc:glass_basin_blocks", "tfc:red_kaolin_clay");
    event.add("tfc:glass_pouring_table", "tfc:red_kaolin_clay");

    event.add("tfc:glass_basin_blocks", "tfc:pink_kaolin_clay");
    event.add("tfc:glass_pouring_table", "tfc:pink_kaolin_clay");

    event.add("tfc:glass_basin_blocks", "tfc:white_kaolin_clay");
    event.add("tfc:glass_pouring_table", "tfc:white_kaolin_clay");

    // Удаление тегов у отключенных предметов
    global.TFC_DISABLED_ITEMS.forEach((item) => {
        event.removeAllTagsFrom(item);
    });

    // Удаление тегов у руд
    event.removeAllTagsFrom("/tfc:ore/[^*]+/[^*]+/");

    //#region Nether

    event.add("beneath:nether_bush_plantable_on", "#tfc:clay_grass");
    event.add("minecraft:small_dripleaf_placeable", "#tfc:clay_grass");
    event.add("minecraft:big_dripleaf_placeable", "#tfc:clay_grass");
    event.add("minecraft:frogs_spawnable_on", "#tfc:clay_grass");
    event.add("minecraft:axolotls_spawnable_on", "#tfc:clay_grass");

    event.add("minecraft:small_dripleaf_placeable", "#tfc:clay");
    event.add("minecraft:big_dripleaf_placeable", "#tfc:clay");
    event.add("minecraft:frogs_spawnable_on", "#tfc:clay");
    event.add("minecraft:axolotls_spawnable_on", "#tfc:clay");

    event.add("beneath:nether_bush_plantable_on", "#tfc:mud");
    event.add("minecraft:frogs_spawnable_on", "#tfc:mud");

    event.add("beneath:nether_bush_plantable_on", "#tfc:dirt");
    event.add("minecraft:frogs_spawnable_on", "#tfc:dirt");

    event.add("minecraft:base_stone_nether", "tfc:rock/raw/gneiss");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/schist");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/diorite");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/granite");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/gabbro");
    event.add("minecraft:base_stone_nether", "tfc:rock/raw/basalt");
    event.add("minecraft:nether_carver_replaceables", "#minecraft:base_stone_nether");
    event.add("minecraft:frogs_spawnable_on", "#minecraft:base_stone_nether");

    //#endregion

    // Lets the basin be put on top of a charcoal forge
    event.add("tfc:forge_invisible_whitelist", "create:basin");

    // Allows automation with the 3x3 Hellforge
    event.add("tfc:forge_invisible_whitelist", "tfcchannelcasting:channel");
    event.add("tfc:forge_invisible_whitelist", "tfcchannelcasting:mold_table");
    event.add("tfc:forge_invisible_whitelist", "greate:steel_mechanical_pump");
    event.add("tfc:forge_invisible_whitelist", "greate:aluminum_mechanical_pump");
    event.add("tfc:forge_invisible_whitelist", "greate:stainless_steel_mechanical_pump");
    event.add("tfc:forge_invisible_whitelist", "greate:titanium_mechanical_pump");

    //Allows any block with the word "brick" in its id to be used as bloomery and forge insulation.
    //Add blacklisted words to the const with | between.
    const brick_blacklist = "drying|slab|stairs|wall|additionalplacements";
    event.add("tfc:bloomery_insulation", `/^(?=.*brick)(?!.*(${brick_blacklist})).*/`);
    event.add("tfc:forge_insulation", `/^(?=.*brick)(?!.*(${brick_blacklist})).*/`);

    global.TFC_STONE_TYPES.forEach((stone) => {
        event.add("minecraft:stone_buttons", `tfc:rock/button/${stone}`);
        event.add("minecraft:buttons", `tfc:rock/button/${stone}`);
    });

    event.add('tfc:can_be_snow_piled', 'tfc:groundcover/feather');

    event.add('tfcambiental:hot_stuff', 'tfc:pot');
    event.add('tfcambiental:hot_stuff', 'tfc:grill');
}

/** @param {TagEvent.Fluid} event */
function registerTFCFluidTags(event) {
    // Удаление TFC металлов из возможных в форме слитка
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/bismuth");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/bismuth_bronze");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/bronze");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/black_bronze");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/brass");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/copper");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/gold");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/nickel");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/rose_gold");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/silver");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/tin");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/zinc");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/sterling_silver");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/wrought_iron");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/steel");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/black_steel");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/red_steel");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/blue_steel");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/cast_iron");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/high_carbon_steel");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/high_carbon_black_steel");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/high_carbon_red_steel");
    event.remove("tfc:usable_in_ingot_mold", "tfc:metal/high_carbon_blue_steel");

    // Добавление GTCEu металлов в форму слитков
    event.add("tfc:usable_in_ingot_mold", "gtceu:bismuth");
    event.add("tfc:usable_in_ingot_mold", "gtceu:bismuth_bronze");
    event.add("tfc:usable_in_ingot_mold", "gtceu:black_bronze");
    event.add("tfc:usable_in_ingot_mold", "gtceu:bronze");
    event.add("tfc:usable_in_ingot_mold", "gtceu:brass");
    event.add("tfc:usable_in_ingot_mold", "gtceu:copper");
    event.add("tfc:usable_in_ingot_mold", "gtceu:gold");
    event.add("tfc:usable_in_ingot_mold", "gtceu:nickel");
    event.add("tfc:usable_in_ingot_mold", "gtceu:rose_gold");
    event.add("tfc:usable_in_ingot_mold", "gtceu:silver");
    event.add("tfc:usable_in_ingot_mold", "gtceu:tin");
    event.add("tfc:usable_in_ingot_mold", "gtceu:zinc");
    event.add("tfc:usable_in_ingot_mold", "gtceu:sterling_silver");
    event.add("tfc:usable_in_ingot_mold", "gtceu:wrought_iron");
    event.add("tfc:usable_in_ingot_mold", "gtceu:iron");
    event.add("tfc:usable_in_ingot_mold", "gtceu:steel");
    event.add("tfc:usable_in_ingot_mold", "gtceu:black_steel");
    event.add("tfc:usable_in_ingot_mold", "gtceu:blue_steel");
    event.add("tfc:usable_in_ingot_mold", "gtceu:red_steel");

    event.add("tfc:usable_in_ingot_mold", "gtceu:red_alloy");
    event.add("tfc:usable_in_ingot_mold", "gtceu:tin_alloy");
    event.add("tfc:usable_in_ingot_mold", "gtceu:lead");
    event.add("tfc:usable_in_ingot_mold", "gtceu:invar");
    event.add("tfc:usable_in_ingot_mold", "gtceu:potin");
    event.add("tfc:usable_in_ingot_mold", "gtceu:cobalt");
    event.add("tfc:usable_in_ingot_mold", "gtceu:cobalt_brass");
    event.add("tfc:usable_in_ingot_mold", "gtceu:aluminium_silicate");

    event.add("tfc:usable_in_bell_mold", "gtceu:bronze");
    event.add("tfc:usable_in_bell_mold", "gtceu:gold");
    event.add("tfc:usable_in_bell_mold", "gtceu:brass");

    event.add("tfc:usable_in_tool_head_mold", "gtceu:copper");
    event.add("tfc:usable_in_tool_head_mold", "gtceu:bismuth_bronze");
    event.add("tfc:usable_in_tool_head_mold", "gtceu:black_bronze");
    event.add("tfc:usable_in_tool_head_mold", "gtceu:bronze");

    const $FluidState = Java.loadClass("com.gregtechceu.gtceu.api.fluids.FluidState")
    const $FluidAttribute = Java.loadClass("com.gregtechceu.gtceu.api.fluids.attribute.FluidAttributes")

    forEachMaterial(material => {
        if (material.hasProperty(PropertyKey.FLUID)) {
            let fluid = material.getFluid();

            // Ignore gases
            let fluidType = fluid.getFluidType();
            if (fluidType.isLighterThanAir())
                return;

            // Check for acids
            try {
                // This is in a try catch because I don't know how to check if an object is of type 
                // AttributedFluid or GTFluid here
                if (fluid.getAttributes().contains($FluidAttribute.ACID))
                    return;
            }
            catch (exception) {
                return;
            }

            // Check for plasmas (and gases again in case the previous check didn't work)
            let fluidState = fluid.getState();
            if (fluidState === $FluidState.PLASMA || fluidState === $FluidState.GAS)
                return;

            let fluidName = fluidType.toString();
            let temperature = fluidType.getTemperature();

            // 340 is the max temperature of wood pipes
            // 120 is the cryogenic temperature threshold (see gtceu/FluidConstants)
            if (temperature <= 340 && temperature >= 120) {
                event.add("tfc:usable_in_barrel", fluidName);
                event.add("tfc:usable_in_wooden_bucket", fluidName);
            }

            // Red steel's max temperature, can do cryo
            if (temperature <= 370) {
                event.add("tfc:usable_in_red_steel_bucket", fluidName);
            }

            // Blue steel's max temp, can't do cryo
            if (temperature <= 4618 && temperature >= 120) {
                event.add("tfc:usable_in_blue_steel_bucket", fluidName);
            }
        }
    })

    event.add("tfc:usable_in_pot", "gtceu:ice");
    event.add("tfc:ingredients", "tfc:spring_water");

    event.add("tfc:alcohols", "tfcagedalcohol:aged_beer");
    event.add("tfc:alcohols", "tfcagedalcohol:aged_cider");
    event.add("tfc:alcohols", "tfcagedalcohol:aged_rum");
    event.add("tfc:alcohols", "tfcagedalcohol:aged_sake");
    event.add("tfc:alcohols", "tfcagedalcohol:aged_vodka");
    event.add("tfc:alcohols", "tfcagedalcohol:aged_whiskey");
    event.add("tfc:alcohols", "tfcagedalcohol:aged_corn_whiskey");
    event.add("tfc:alcohols", "tfcagedalcohol:aged_rye_whiskey");
    event.add("tfc:alcohols", "tfcagedalcohol:aged_mead");

    // Добавляем тег для скрытия в EMI
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/bismuth");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/bismuth_bronze");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/bronze");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/black_bronze");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/brass");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/copper");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/gold");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/nickel");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/rose_gold");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/silver");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/tin");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/zinc");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/sterling_silver");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/wrought_iron");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/steel");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/black_steel");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/red_steel");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/blue_steel");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/cast_iron");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/high_carbon_steel");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/high_carbon_black_steel");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/high_carbon_red_steel");
    event.add("c:hidden_from_recipe_viewers", "tfc:metal/high_carbon_blue_steel");
}

/** @param {TagEvent.Biome} event */
function registerTFCBiomeTags(event) {
    event.add("tfc:kaolin_clay_spawns_in", "tfc:rolling_hills");

    global.TFC_BIOMES.forEach(biome => {
        event.add('tfg:overworld_biomes', biome);
    })
}

/** @param {TagEvent.PlacedFeature} event */
function registerTFCPlacedFeatures(event) {
    // Add back the non-ore ones
    event.add("tfc:in_biome/veins", "tfc:vein/gravel");
    event.add("tfc:in_biome/veins", "tfc:vein/kaolin_disc");
    event.add("tfc:in_biome/veins", "tfc:vein/granite_dike");
    event.add("tfc:in_biome/veins", "tfc:vein/diorite_dike");
    event.add("tfc:in_biome/veins", "tfc:vein/gabbro_dike");

    // Geodes
    event.add("tfc:in_biome/veins", "tfg:earth/geode/amethyst");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/barite");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/calcite");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/gypsum");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/opal");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/pyrite");
    event.add("tfc:in_biome/veins", "tfg:earth/geode/quartzite");

    // Crops
    event.add("tfc:feature/crops", "tfg:earth/sunflower_patch");
    event.add("tfc:feature/crops", "tfg:earth/rapeseed_patch");
    event.add("tfc:feature/crops", "tfg:earth/flax_patch");

    // Other decoration
    event.add("tfc:in_biome/underground_decoration", "tfg:glow_lichen");
    event.add("tfc:in_biome/underground_decoration", "tfg:earth/sulfur_patch");
}
