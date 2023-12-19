// priority: 0

const registerMinecraftRecipes = (event) => {
    //#region Выход: Камень

    event.remove({ id: 'minecraft:stone' })
    event.remove({ id: 'ae2:entropy/heat/cobblestone_stone' })
    event.remove({ id: 'gtceu:compressor/stone_from_dust' })
    event.remove({ id: 'gtceu:rock_breaker/stone' })
    
    //#endregion

    //#region Выход: Каменная ступень

    event.remove({ id: 'minecraft:stone_stairs' })
    event.remove({ id: 'minecraft:stone_stairs_from_stone_stonecutting' })

    //#endregion

    //#region Выход: Каменная плита

    event.remove({ id: 'minecraft:stone_slab' })
    event.remove({ id: 'minecraft:stone_slab_from_stone_stonecutting' })

    //#endregion

    //#region Выход: Каменная нажимная плила

    event.remove({ id: 'minecraft:stone_pressure_plate' })

    //#endregion

    //#region Выход: Каменная кнопка

    event.remove({ id: 'minecraft:stone_button' })

    //#endregion

    //#region Выход: Гладкий камень

    event.remove({ id: 'minecraft:smooth_stone' })

    //#endregion

    //#region Выход: Гладкий камень плита

    event.remove({ id: 'morered:smooth_stone_slab_from_stone_plate' })
    event.remove({ id: 'minecraft:smooth_stone_slab' })
    event.remove({ id: 'minecraft:smooth_stone_slab_from_smooth_stone_stonecutting' })

    //#endregion

    //#region Выход: Булыжник

    event.remove({ id: 'ae2:entropy/cool/stone_cobblestone' })
    event.remove({ id: 'gtceu:forge_hammer/stone_to_cobblestone' })
    event.remove({ id: 'gtceu:rock_breaker/cobblestone' })

    //#endregion

    //#region Выход: Булыжник ступень

    event.remove({ id: 'minecraft:cobblestone_stairs' })
    event.remove({ id: 'minecraft:cobblestone_stairs_from_cobblestone_stonecutting' })

    //#endregion

    //#region Выход: Булыжник плита

    event.remove({ id: 'minecraft:cobblestone_slab' })
    event.remove({ id: 'minecraft:cobblestone_slab_from_cobblestone_stonecutting' })

    //#endregion

    //#region Выход: Булыжник стена

    event.remove({ id: 'minecraft:cobblestone_wall' })
    event.remove({ id: 'minecraft:cobblestone_wall_from_cobblestone_stonecutting' })

    //#endregion

    //#region Выход: Каменные кирпичи

    event.remove({ id: 'minecraft:stone_bricks' })
    event.remove({ id: 'minecraft:stone_bricks_from_stone_stonecutting' })

    //#endregion

    //#region Выход: Каменные кирпичи ступень

    event.remove({ id: 'minecraft:stone_brick_stairs' })
    event.remove({ id: 'minecraft:stone_brick_stairs_from_stone_stonecutting' })
    event.remove({ id: 'minecraft:stone_brick_stairs_from_stone_bricks_stonecutting' })

    //#endregion

    //#region Выход: Каменные кирпичи плита

    event.remove({ id: 'minecraft:stone_brick_slab' })
    event.remove({ id: 'minecraft:stone_brick_slab_from_stone_stonecutting' })
    event.remove({ id: 'minecraft:stone_brick_slab_from_stone_bricks_stonecutting' })

    //#endregion

    //#region Выход: Каменные кирпичи стена

    event.remove({ id: 'minecraft:stone_brick_wall' })
    event.remove({ id: 'minecraft:stone_brick_walls_from_stone_stonecutting' })
    event.remove({ id: 'minecraft:stone_brick_wall_from_stone_bricks_stonecutting' })

    //#endregion

    //#region Выход: Поломанные каменные кирпичи

    event.remove({ id: 'minecraft:cracked_stone_bricks' })
    event.remove({ id: 'ae2:entropy/cool/stone_bricks_cracked_stone_bricks' })
    event.remove({ id: 'gtceu:forge_hammer/cracked_stone_bricks' })

    //#endregion

    //#region Выход: Резные каменные кирпичи

    event.remove({ id: 'minecraft:chiseled_stone_bricks' })
    event.remove({ id: 'minecraft:chiseled_stone_bricks_stone_from_stonecutting' })
    event.remove({ id: 'minecraft:chiseled_stone_bricks_from_stone_bricks_stonecutting' })

    //#endregion

    //#region Выход: Замшелые каменные кирпичи

    event.remove({ id: 'minecraft:mossy_stone_bricks_from_vine' })
    event.remove({ id: 'minecraft:mossy_stone_bricks_from_moss_block' })
    event.remove({ id: 'gtceu:assembler/mossy_stone_bricks' })

    //#endregion

    //#region Выход: Замшелые каменные кирпичи ступень

    event.remove({ id: 'minecraft:mossy_stone_brick_stairs' })
    event.remove({ id: 'minecraft:mossy_stone_brick_stairs_from_mossy_stone_brick_stonecutting' })

    //#endregion

    //#region Выход: Замшелые каменные кирпичи плита

    event.remove({ id: 'minecraft:mossy_stone_brick_slab' })
    event.remove({ id: 'minecraft:mossy_stone_brick_slab_from_mossy_stone_brick_stonecutting' })

    //#endregion

    //#region Выход: Замшелые каменные кирпичи стена

    event.remove({ id: 'minecraft:mossy_stone_brick_wall' })
    event.remove({ id: 'minecraft:mossy_stone_brick_wall_from_mossy_stone_brick_stonecutting' })

    //#endregion

    //#region Выход: Замшелый булыжник

    event.remove({ id: 'minecraft:mossy_cobblestone_from_vine' })
    event.remove({ id: 'minecraft:mossy_cobblestone_from_moss_block' })
    event.remove({ id: 'gtceu:assembler/mossy_cobblestone' })

    //#endregion

    //#region Выход: Замшелый булыжник ступень

    event.remove({ id: 'minecraft:mossy_cobblestone_stairs' })
    event.remove({ id: 'minecraft:mossy_cobblestone_stairs_from_mossy_cobblestone_stonecutting' })

    //#endregion

    //#region Выход: Замшелый булыжник плита

    event.remove({ id: 'minecraft:mossy_cobblestone_slab' })
    event.remove({ id: 'minecraft:mossy_cobblestone_slab_from_mossy_cobblestone_stonecutting' })

    //#endregion

    //#region Выход: Замшелый булыжник стена

    event.remove({ id: 'minecraft:mossy_cobblestone_wall' })
    event.remove({ id: 'minecraft:mossy_cobblestone_wall_from_mossy_cobblestone_stonecutting' })

    //#endregion

    //#region Выход: Сырой гранит

    event.remove({ id: 'minecraft:granite' })
    event.remove({ id: 'gtceu:rock_breaker/granite' })

    //#endregion

    //#region Выход: Сырой гранит ступень

    event.remove({ id: 'minecraft:granite_stairs' })
    event.remove({ id: 'minecraft:granite_stairs_from_granite_stonecutting' })

    //#endregion

    //#region Выход: Сырой гранит плита

    event.remove({ id: 'minecraft:granite_slab' })
    event.remove({ id: 'minecraft:granite_slab_from_granite_stonecutting' })

    //#endregion

    //#region Выход: Сырой гранит стена

    event.remove({ id: 'minecraft:granite_wall' })
    event.remove({ id: 'minecraft:granite_wall_from_granite_stonecutting' })

    //#endregion

    //#region Выход: Полированный гранит

    event.remove({ id: 'minecraft:polished_granite_from_granite_stonecutting' })

    //#endregion

    //#region Выход: Сырой гранит ступень

    event.remove({ id: 'minecraft:polished_granite_stairs' })
    event.remove({ id: 'minecraft:polished_granite_stairs_from_granite_stonecutting' })
    event.remove({ id: 'minecraft:polished_granite_stairs_from_polished_granite_stonecutting' })

    //#endregion

    //#region Выход: Сырой гранит плита

    event.remove({ id: 'minecraft:polished_granite_slab' })
    event.remove({ id: 'minecraft:polished_granite_slab_from_granite_stonecutting' })
    event.remove({ id: 'minecraft:polished_granite_slab_from_polished_granite_stonecutting' })

    //#endregion

    //#region Выход: Сырой диорит

    event.remove({ id: 'minecraft:diorite' })
    event.remove({ id: 'gtceu:rock_breaker/diorite' })

    //#endregion

    //#region Выход: Сырой диорит ступень

    event.remove({ id: 'minecraft:diorite_stairs' })
    event.remove({ id: 'minecraft:diorite_stairs_from_diorite_stonecutting' })

    //#endregion

    //#region Выход: Сырой диорит плита

    event.remove({ id: 'minecraft:diorite_slab' })
    event.remove({ id: 'minecraft:diorite_slab_from_diorite_stonecutting' })

    //#endregion

    //#region Выход: Сырой диорит стена

    event.remove({ id: 'minecraft:diorite_wall' })
    event.remove({ id: 'minecraft:diorite_wall_from_diorite_stonecutting' })

    //#endregion

    //#region Выход: Полированный диорит

    event.remove({ id: 'minecraft:polished_diorite_from_diorite_stonecutting' })

    //#endregion

    //#region Выход: Сырой диорит ступень

    event.remove({ id: 'minecraft:polished_diorite_stairs' })
    event.remove({ id: 'minecraft:polished_diorite_stairs_from_diorite_stonecutting' })
    event.remove({ id: 'minecraft:polished_diorite_stairs_from_polished_diorite_stonecutting' })

    //#endregion

    //#region Выход: Сырой диорит плита

    event.remove({ id: 'minecraft:polished_diorite_slab' })
    event.remove({ id: 'minecraft:polished_diorite_slab_from_diorite_stonecutting' })
    event.remove({ id: 'minecraft:polished_diorite_slab_from_polished_diorite_stonecutting' })

    //#endregion

    //#region Выход: Сырой андезит

    event.remove({ id: 'minecraft:andesite' })
    event.remove({ id: 'gtceu:rock_breaker/andesite' })

    //#endregion

    //#region Выход: Сырой андезит ступень

    event.remove({ id: 'minecraft:andesite_stairs' })
    event.remove({ id: 'minecraft:andesite_stairs_from_andesite_stonecutting' })

    //#endregion

    //#region Выход: Сырой андезит плита

    event.remove({ id: 'minecraft:andesite_slab' })
    event.remove({ id: 'minecraft:andesite_slab_from_andesite_stonecutting' })

    //#endregion

    //#region Выход: Сырой андезит стена

    event.remove({ id: 'minecraft:andesite_wall' })
    event.remove({ id: 'minecraft:andesite_wall_from_andesite_stonecutting' })

    //#endregion

    //#region Выход: Полированный андезит

    event.remove({ id: 'minecraft:polished_andesite_from_andesite_stonecutting' })

    //#endregion

    //#region Выход: Сырой андезит ступень

    event.remove({ id: 'minecraft:polished_andesite_stairs' })
    event.remove({ id: 'minecraft:polished_andesite_stairs_from_andesite_stonecutting' })
    event.remove({ id: 'minecraft:polished_andesite_stairs_from_polished_andesite_stonecutting' })

    //#endregion

    //#region Выход: Сырой андезит плита

    event.remove({ id: 'minecraft:polished_andesite_slab' })
    event.remove({ id: 'minecraft:polished_andesite_slab_from_andesite_stonecutting' })
    event.remove({ id: 'minecraft:polished_andesite_slab_from_polished_andesite_stonecutting' })

    //#endregion

    //#region Выход: Сырой призмарин

    event.remove({ id: 'gtceu:packer/prismarine' })

    //#endregion

    //#region Выход: Сырой призмарин ступень

    event.remove({ id: 'minecraft:prismarine_stairs' })
    event.remove({ id: 'minecraft:prismarine_stairs_from_prismarine_stonecutting' })

    //#endregion

    //#region Выход: Сырой призмарин плита

    event.remove({ id: 'minecraft:prismarine_slab' })
    event.remove({ id: 'minecraft:prismarine_slab_from_prismarine_stonecutting' })

    //#endregion

    //#region Выход: Сырой призмарин стена

    event.remove({ id: 'minecraft:prismarine_wall' })
    event.remove({ id: 'minecraft:prismarine_wall_from_prismarine_stonecutting' })

    //#endregion

    //#region Выход: Призмариновый кирпич

    event.remove({ id: 'gtceu:packer/prismarine_bricks' })

    //#endregion

    //#region Выход: Призмариновый кирпич ступень

    event.remove({ id: 'minecraft:prismarine_brick_stairs' })
    event.remove({ id: 'minecraft:prismarine_brick_stairs_from_prismarine_stonecutting' })

    //#endregion

    //#region Выход: Призмариновый кирпич плита

    event.remove({ id: 'minecraft:prismarine_brick_slab' })
    event.remove({ id: 'minecraft:prismarine_brick_slab_from_prismarine_stonecutting' })

    //#endregion

    //#region Выход: Темный призмарин

    event.remove({ id: 'gtceu:chemical_bath/dark_prismarine' })

    //#endregion

    //#region Выход: Темный призмарин ступень

    event.remove({ id: 'minecraft:dark_prismarine_stairs' })
    event.remove({ id: 'minecraft:dark_prismarine_stairs_from_dark_prismarine_stonecutting' })

    //#endregion

    //#region Выход: Темный призмарин плита

    event.remove({ id: 'minecraft:dark_prismarine_slab' })
    event.remove({ id: 'minecraft:dark_prismarine_slab_from_dark_prismarine_stonecutting' })

    //#endregion

    //#region Выход: Эндер Кирпич

    event.remove({ id: 'minecraft:end_stone_bricks' })
    event.remove({ id: 'minecraft:end_stone_bricks_from_end_stone_stonecutting' })

    //#endregion

    //#region Выход: Эндер Кирпич ступень

    event.remove({ id: 'minecraft:end_stone_brick_stairs' })
    event.remove({ id: 'minecraft:end_stone_brick_stairs_from_end_stone_stonecutting' })
    event.remove({ id: 'minecraft:end_stone_brick_stairs_from_end_stone_brick_stonecutting' })

    //#endregion

    //#region Выход: Эндер Кирпич плита

    event.remove({ id: 'minecraft:end_stone_brick_slab' })
    event.remove({ id: 'minecraft:end_stone_brick_slab_from_end_stone_stonecutting' })
    event.remove({ id: 'minecraft:end_stone_brick_slab_from_end_stone_brick_stonecutting' })

    //#endregion

    //#region Выход: Эндер Кирпич стена

    event.remove({ id: 'minecraft:end_stone_brick_wall' })
    event.remove({ id: 'minecraft:end_stone_brick_wall_from_end_stone_stonecutting' })
    event.remove({ id: 'minecraft:end_stone_brick_wall_from_end_stone_brick_stonecutting' })

    //#endregion

    //#region Выход: Сланец

    event.remove({ id: 'minecraft:deepslate' })

    //#endregion

    //#region Выход: Сланцевый булыжник

    event.remove({ id: 'gtceu:shaped/cobbled_deepslate_hammer' })
    event.remove({ id: 'gtceu:forge_hammer/deepslate_to_cobbled_deepslate' })

    //#endregion

    //#region Выход: Сланцевый булыжник ступень

    event.remove({ id: 'minecraft:cobbled_deepslate_stairs' })
    event.remove({ id: 'minecraft:cobbled_deepslate_stairs_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Сланцевый булыжник плита

    event.remove({ id: 'minecraft:cobbled_deepslate_slab' })
    event.remove({ id: 'minecraft:cobbled_deepslate_slab_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Сланцевый булыжник стена

    event.remove({ id: 'minecraft:cobbled_deepslate_wall' })
    event.remove({ id: 'minecraft:cobbled_deepslate_wall_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Ячеистый сланец

    event.remove({ id: 'minecraft:deepslate_tiles' })
    event.remove({ id: 'minecraft:deepslate_tiles_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tiles_from_deepslate_bricks_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tiles_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Ячеистый сланец ступень

    event.remove({ id: 'minecraft:deepslate_tile_stairs' })
    event.remove({ id: 'minecraft:deepslate_tile_stairs_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tile_stairs_from_deepslate_tiles_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tile_stairs_from_deepslate_bricks_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tile_stairs_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Ячеистый сланец плита

    event.remove({ id: 'minecraft:deepslate_tile_slab' })
    event.remove({ id: 'minecraft:deepslate_tile_slab_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tile_slab_from_deepslate_tiles_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tile_slab_from_deepslate_bricks_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tile_slab_from_cobbled_deepslate_stonecutting' })


    //#endregion

    //#region Выход: Ячеистый сланец стена

    event.remove({ id: 'minecraft:deepslate_tile_wall' })
    event.remove({ id: 'minecraft:deepslate_tile_wall_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tile_wall_from_deepslate_tiles_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tile_wall_from_deepslate_bricks_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_tile_wall_from_cobbled_deepslate_stonecutting' })


    //#endregion

    //#region Выход: Сланцевые кирпичи

    event.remove({ id: 'minecraft:deepslate_bricks' })
    event.remove({ id: 'minecraft:deepslate_bricks_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_bricks_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Сланцевые кирпичи ступень

    event.remove({ id: 'minecraft:deepslate_brick_stairs' })
    event.remove({ id: 'minecraft:deepslate_brick_stairs_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_brick_stairs_from_cobbled_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_brick_stairs_from_deepslate_bricks_stonecutting' })

    //#endregion

    //#region Выход: Сланцевые кирпичи плита

    event.remove({ id: 'minecraft:deepslate_brick_slab' })
    event.remove({ id: 'minecraft:deepslate_brick_slab_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_brick_slab_from_cobbled_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_brick_slab_from_deepslate_bricks_stonecutting' })

    //#endregion

    //#region Выход: Сланцевые кирпичи стена

    event.remove({ id: 'minecraft:deepslate_brick_wall' })
    event.remove({ id: 'minecraft:deepslate_brick_wall_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_brick_wall_from_cobbled_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:deepslate_brick_wall_from_deepslate_bricks_stonecutting' })

    //#endregion

    //#region Выход: Полированный сланец

    event.remove({ id: 'minecraft:polished_deepslate' })
    event.remove({ id: 'minecraft:polished_deepslate_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Полированный сланец ступень

    event.remove({ id: 'minecraft:polished_deepslate_stairs' })
    event.remove({ id: 'minecraft:polished_deepslate_stairs_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:polished_deepslate_stairs_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Полированный сланец плита

    event.remove({ id: 'minecraft:polished_deepslate_slab' })
    event.remove({ id: 'minecraft:polished_deepslate_slab_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:polished_deepslate_slab_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Полированный сланец стена

    event.remove({ id: 'minecraft:polished_deepslate_wall' })
    event.remove({ id: 'minecraft:polished_deepslate_wall_from_polished_deepslate_stonecutting' })
    event.remove({ id: 'minecraft:polished_deepslate_wall_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Потрескавшийся ячеистый сланец

    event.remove({ id: 'minecraft:cracked_deepslate_tiles' })

    //#endregion

    //#region Выход: Резной сланец

    event.remove({ id: 'minecraft:chiseled_deepslate' })
    event.remove({ id: 'minecraft:chiseled_deepslate_from_cobbled_deepslate_stonecutting' })

    //#endregion

    //#region Выход: Потрескавшиеся сланцевые кирпичи

    event.remove({ id: 'minecraft:cracked_deepslate_bricks' })

    //#endregion

    //#region Выход: Уголь

    event.remove({ id: 'minecraft:coal_from_smelting_coal_ore' })
    event.remove({ id: 'minecraft:coal_from_smelting_deepslate_coal_ore' })
    event.remove({ id: 'minecraft:coal_from_blasting_coal_ore' })
    event.remove({ id: 'minecraft:coal_from_blasting_deepslate_coal_ore' })
    event.remove({ id: 'ad_astra:recipes/coal_from_smelting_venus_coal_ore' })
    event.remove({ id: 'ad_astra:recipes/coal_from_blasting_venus_coal_ore' })
    event.remove({ id: 'ad_astra:recipes/coal_from_smelting_glacio_coal_ore' })
    event.remove({ id: 'ad_astra:recipes/coal_from_blasting_glacio_coal_ore' })

    //#endregion

    //#region Выход: Медь

    event.remove({ id: 'minecraft:copper_ingot_from_smelting_copper_ore' })
    event.remove({ id: 'minecraft:copper_ingot_from_smelting_deepslate_copper_ore' })
    event.remove({ id: 'ad_astra:recipes/copper_ingot_from_smelting_glacio_copper_ore' })
    event.remove({ id: 'minecraft:copper_ingot_from_blasting_copper_ore' })
    event.remove({ id: 'minecraft:copper_ingot_from_blasting_deepslate_copper_ore' })
    event.remove({ id: 'ad_astra:recipes/copper_ingot_from_blasting_glacio_copper_ore' })

    //#endregion

    //#region Выход: Железо

    event.remove({ id: 'minecraft:iron_ingot_from_smelting_iron_ore' })
    event.remove({ id: 'minecraft:iron_ingot_from_smelting_deepslate_iron_ore' })
    event.remove({ id: 'minecraft:iron_ingot_from_blasting_iron_ore' })
    event.remove({ id: 'minecraft:iron_ingot_from_blasting_deepslate_iron_ore' })
    event.remove({ id: 'ad_astra:recipes/iron_ingot_from_smelting_moon_iron_ore' })
    event.remove({ id: 'ad_astra:recipes/iron_ingot_from_blasting_moon_iron_ore' })
    event.remove({ id: 'ad_astra:recipes/iron_ingot_from_smelting_mercury_iron_ore' })
    event.remove({ id: 'ad_astra:recipes/iron_ingot_from_blasting_mercury_iron_ore' })
    event.remove({ id: 'ad_astra:recipes/iron_ingot_from_smelting_mars_iron_ore' })
    event.remove({ id: 'ad_astra:recipes/iron_ingot_from_blasting_mars_iron_ore' })
    event.remove({ id: 'ad_astra:recipes/iron_ingot_from_smelting_glacio_iron_ore' })
    event.remove({ id: 'ad_astra:recipes/iron_ingot_from_blasting_glacio_iron_ore' })

    //#endregion

    //#region Выход: Лазурит

    event.remove({ id: 'minecraft:lapis_lazuli_from_smelting_lapis_ore' })
    event.remove({ id: 'minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore' })
    event.remove({ id: 'ad_astra:recipes/lapis_lazuli_from_smelting_glacio_lapis_ore' })
    event.remove({ id: 'minecraft:lapis_lazuli_from_blasting_lapis_ore' })
    event.remove({ id: 'minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore' })
    event.remove({ id: 'ad_astra:recipes/lapis_lazuli_from_blasting_glacio_lapis_ore' })

    //#endregion

    //#region Выход: Золото

    event.remove({ id: 'minecraft:gold_ingot_from_smelting_gold_ore' })
    event.remove({ id: 'minecraft:gold_ingot_from_smelting_deepslate_gold_ore' })
    event.remove({ id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore' })
    event.remove({ id: 'ad_astra:recipes/gold_ingot_from_smelting_venus_gold_ore' })
    event.remove({ id: 'minecraft:gold_ingot_from_blasting_gold_ore' })
    event.remove({ id: 'minecraft:gold_ingot_from_blasting_deepslate_gold_ore' })
    event.remove({ id: 'minecraft:gold_ingot_from_blasting_nether_gold_ore' })
    event.remove({ id: 'ad_astra:recipes/gold_ingot_from_blasting_venus_gold_ore' })

    //#endregion

    //#region Выход: Золотой самородок

    event.remove({ id: 'minecraft:gold_nugget_from_smelting' })
    event.remove({ id: 'minecraft:gold_nugget_from_blasting' })

    //#endregion

    //#region Выход: Редстоун

    event.remove({ id: 'minecraft:redstone_from_smelting_redstone_ore' })
    event.remove({ id: 'minecraft:redstone_from_smelting_deepslate_redstone_ore' })
    event.remove({ id: 'minecraft:redstone_from_blasting_redstone_ore' })
    event.remove({ id: 'minecraft:redstone_from_blasting_deepslate_redstone_ore' })

    //#endregion

    //#region Выход: Изумруды

    event.remove({ id: 'minecraft:emerald_from_smelting_emerald_ore' })
    event.remove({ id: 'minecraft:emerald_from_smelting_deepslate_emerald_ore' })
    event.remove({ id: 'minecraft:emerald_from_blasting_emerald_ore' })
    event.remove({ id: 'minecraft:emerald_from_blasting_deepslate_emerald_ore' })

    //#endregion

    //#region Выход: Алмазы

    event.remove({ id: 'minecraft:diamond_from_smelting_diamond_ore' })
    event.remove({ id: 'minecraft:diamond_from_smelting_deepslate_diamond_ore' })
    event.remove({ id: 'ad_astra:recipes/diamond_from_smelting_venus_diamond_ore' })
    event.remove({ id: 'ad_astra:recipes/diamond_from_smelting_mars_diamond_ore' })
    event.remove({ id: 'minecraft:diamond_from_blasting_diamond_ore' })
    event.remove({ id: 'minecraft:diamond_from_blasting_deepslate_diamond_ore' })
    event.remove({ id: 'ad_astra:recipes/diamond_from_blasting_venus_diamond_ore' })
    event.remove({ id: 'ad_astra:recipes/diamond_from_blasting_mars_diamond_ore' })

    //#endregion

    //#region Выход: Кварц

    event.remove({ id: 'minecraft:quartz' })
    event.remove({ id: 'minecraft:quartz_from_blasting' })

    //#endregion

    //#region Выход: Незеритовый лом

    event.remove({ id: 'minecraft:netherite_scrap' })
    event.remove({ id: 'minecraft:netherite_scrap_from_blasting' })

    //#endregion

    //#region Выход: Незеритовый слиток

    event.remove({ id: 'minecraft:netherite_ingot' })

    //#endregion

    //#region Выход: Песок

    event.remove({ id: 'gtceu:centrifuge/red_sand_separation' })
    event.remove({ id: 'gtceu:centrifuge/mycelium_separation' })
    event.remove({ id: 'gtceu:centrifuge/grass_block_separation' })

    // TODO: Из пыли лунного грунта
    event.remove({ id: 'gtceu:centrifuge/endstone_separation' })
    /*
    event.recipes.gtceu.centrifuge('endstone_separation')             
        .itemInputs('')
        .chancedOutput('tfc:sand/yellow', 9000, 300)
        .chancedOutput('gtceu:tungstate_small_dust', 1250, 450)
        .chancedOutput('gtceu:platinum_tiny_dust', 630, 150)
        .outputFluids(Fluid.of('gtceu:helium', 2000))
        .duration(250)
        .EUt(30)*/

    // Декрафт разных блоков в песок
    event.remove({ id: 'gtceu:forge_hammer/gravel_to_sand' })
    event.remove({ id: 'gtceu:forge_hammer/sandstone_to_sand' })
    event.remove({ id: 'gtceu:forge_hammer/smooth_sandstone_to_sand' })
    event.remove({ id: 'gtceu:forge_hammer/chiseled_sandstone_to_sand' })

    //#endregion

    //#region Выход: Песчанник

    event.remove({ id: 'gtceu:compressor/sandstone' })

    //#endregion

    //#region Выход: Песчанник ступень

    event.remove({ id: 'minecraft:sandstone_stairs' })
    event.remove({ id: 'minecraft:sandstone_stairs_from_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Песчанник плита

    event.remove({ id: 'minecraft:sandstone_slab' })
    event.remove({ id: 'minecraft:sandstone_slab_from_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Песчанник стена

    event.remove({ id: 'minecraft:sandstone_wall' })
    event.remove({ id: 'minecraft:sandstone_wall_from_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Гладкий песчанник ступень

    event.remove({ id: 'minecraft:smooth_sandstone_stairs' })
    event.remove({ id: 'minecraft:smooth_sandstone_stairs_from_smooth_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Гладкий песчанник плита

    event.remove({ id: 'minecraft:smooth_sandstone_slab' })
    event.remove({ id: 'minecraft:smooth_sandstone_slab_from_smooth_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Обрезанный песчанник

    event.remove({ id: 'minecraft:cut_sandstone' })
    event.remove({ id: 'minecraft:cut_sandstone_from_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Обрезанный песчанник плита

    event.remove({ id: 'minecraft:cut_sandstone_slab' })
    event.remove({ id: 'minecraft:cut_sandstone_slab_from_sandstone_stonecutting' })
    event.remove({ id: 'minecraft:cut_sandstone_slab_from_cut_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Резной песчанник

    event.remove({ id: 'minecraft:chiseled_sandstone' })
    event.remove({ id: 'minecraft:chiseled_sandstone_from_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Красный песок

    event.remove({ id: 'gtceu:forge_hammer/smooth_red_sandstone_to_red_sand' })
    event.remove({ id: 'gtceu:forge_hammer/red_sandstone_to_red_sand' })
    event.remove({ id: 'gtceu:forge_hammer/chiseled_red_sandstone_to_red_sand' })

    //#endregion

    //#region Выход: Красный песчанник

    event.remove({ id: 'gtceu:compressor/red_sandstone' })

    //#endregion

    //#region Выход: Красный песчанник ступень

    event.remove({ id: 'minecraft:red_sandstone_stairs' })
    event.remove({ id: 'minecraft:red_sandstone_stairs_from_red_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Красный песчанник плита

    event.remove({ id: 'minecraft:red_sandstone_slab' })
    event.remove({ id: 'minecraft:red_sandstone_slab_from_red_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Красный песчанник стена

    event.remove({ id: 'minecraft:red_sandstone_wall' })
    event.remove({ id: 'minecraft:red_sandstone_wall_from_red_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Красный гладкий песчанник ступень

    event.remove({ id: 'minecraft:smooth_red_sandstone_stairs' })
    event.remove({ id: 'minecraft:smooth_red_sandstone_stairs_from_smooth_red_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Красный гладкий песчанник плита

    event.remove({ id: 'minecraft:smooth_red_sandstone_slab' })
    event.remove({ id: 'minecraft:smooth_red_sandstone_slab_from_smooth_red_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Красный обрезанный песчанник

    event.remove({ id: 'minecraft:cut_red_sandstone' })
    event.remove({ id: 'minecraft:cut_red_sandstone_from_red_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Красный обрезанный песчанник плита

    event.remove({ id: 'minecraft:cut_red_sandstone_slab' })
    event.remove({ id: 'minecraft:cut_red_sandstone_slab_from_red_sandstone_stonecutting' })
    event.remove({ id: 'minecraft:cut_red_sandstone_slab_from_cut_red_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Красный резной песчанник

    event.remove({ id: 'minecraft:chiseled_red_sandstone' })
    event.remove({ id: 'minecraft:chiseled_red_sandstone_from_red_sandstone_stonecutting' })

    //#endregion

    //#region Выход: Dripstone

    event.remove({ id: 'minecraft:dripstone_block' })

    //#endregion

    //#region Выход: Земля

    event.remove({ id: 'ae2:entropy/cool/grass_block_dirt' })
    event.remove({ id: 'gtceu:macerator/dirt_from_bio_chaff' })

    //#endregion

    //#region Выход: Высохшая земля

    event.remove({ id: 'gtceu:mixer/mud' })
    event.remove({ id: 'gtceu:mixer/coarse_dirt' })
    event.remove({ id: 'gtceu:create_mixer/mud' })
    event.remove({ id: 'gtceu:create_mixer/coarse_dirt' })

    //#endregion

    //#region Выход: Гравий

    event.remove({ id: 'gtceu:forge_hammer/cobblestone_to_gravel' })

    //#endregion

    //#region Выход: Дерево

    global.VANILLA_WOOD_TYPES.forEach(wood => {
        event.remove({ id: `minecraft:${wood}_planks` })
        event.remove({ id: `gtceu:shaped/${wood}_planks_saw` })
        event.remove({ id: `minecraft:stripped_${wood}_log_via_vanilla_stripping` })
        event.remove({ id: `minecraft:stripped_${wood}_wood` })
        event.remove({ id: `minecraft:stripped_${wood}_wood_via_vanilla_stripping` })
        event.remove({ id: `minecraft:${wood}_wood` })
        event.remove({ id: `minecraft:${wood}_slab` })
        event.remove({ id: `minecraft:${wood}_fence` })
        event.remove({ id: `gtceu:assembler/${wood}_fence` })
        event.remove({ id: `minecraft:${wood}_stairs` })
        event.remove({ id: `gtceu:assembler/${wood}_stairs` })
        event.remove({ id: `minecraft:${wood}_button` })
        event.remove({ id: `minecraft:${wood}_pressure_plate` })
        event.remove({ id: `minecraft:${wood}_door` })
        event.remove({ id: `minecraft:${wood}_trapdoor` })
        event.remove({ id: `minecraft:${wood}_fence_gate` })
        event.remove({ id: `gtceu:assembler/${wood}_fence_gate` })
        event.remove({ id: `minecraft:${wood}_sign` })
        event.remove({ id: `minecraft:${wood}_hanging_sign` })
    });

    //#endregion

    //#region Выход: Камнерез

    event.remove({ id: 'minecraft:stonecutter' })

    //#endregion






    




    //#region Выход:

    // event.remove({ id: '' })

    //#endregion



    //#region Рецепты где на выходе булыга

    // Камень -> Булыга (Верстак)
    event.remove({ id: 'gtceu:shaped/cobblestone_hammer' })

    //#endregion

    /*
    // Компаратор
    event.remove({id: 'minecraft:comparator'})
    event.remove({id: 'gtceu:shaped/comparator_quartzite'})
    event.remove({id: 'gtceu:shaped/certus'})
    event.remove({id: 'tfc:crafting/vanilla/redstone/comparator'})

    // Компаратор
    event.shaped('minecraft:comparator', [
        ' A ',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:redstone_torch',
        B: '#forge:gems/certus_quartz',
        C: '#tfc:rock/smooth'
    }).id('tfg:shaped/comparator_certus');

    event.shaped('minecraft:comparator', [
        ' A ',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:redstone_torch',
        B: '#forge:gems/quartzite',
        C: '#tfc:rock/smooth'
    }).id('tfg:shaped/comparator_quartzite');

    event.shaped('minecraft:comparator', [
        ' A ',
        'ABA',
        'CCC'
    ], {
        A: 'minecraft:redstone_torch',
        B: '#forge:gems/nether_quartz',
        C: '#tfc:rock/smooth'
    }).id('tfg:shaped/comparator_nether_quartz');*/
    
    

    

    


    /*
    // Удаление рецептов палок
    event.remove({id: 'minecraft:stick'})

    // Удаление рецептов камня
    event.remove({id: 'gtceu:compressor/stone_from_dust'})

    // Удаление рецептов жиги
    event.remove({id: 'tfc:crafting/vanilla/flint_and_steel'})
    event.remove({id: 'ad_astra:recipes/flint_and_steel'})

    // Удаление рецептов связанных с наковальней
    event.remove({id: 'gtceu:arc_furnace/arc_anvil'})
    event.remove({id: 'gtceu:macerator/macerate_anvil'})
    event.remove({id: 'gtceu:alloy_smelter/anvil'})
    event.remove({id: 'gtceu:fluid_solidifier/solidify_anvil'})

    event.remove({id: 'gtceu:arc_furnace/arc_damaged_anvil'})
    event.remove({id: 'gtceu:macerator/macerate_damaged_anvil'})
    event.remove({id: 'gtceu:arc_furnace/arc_chipped_anvil'})
    event.remove({id: 'gtceu:macerator/macerate_chipped_anvil'})

    // Удаление рецептов связанных с печкой
    event.remove({id: 'gtceu:assembler/furnace'})
    event.remove({id: 'gtceu:macerator/macerate_furnace'})
    event.remove({id: 'gtceu:assembler/furnace_minecart'})

    // Удаление рецептов связанных с вагонеткой с печкой
    event.remove({id: 'minecraft:furnace_minecart'})
    event.remove({id: 'gtceu:arc_furnace/arc_furnace_minecart'})
    event.remove({id: 'gtceu:macerate/macerate_furnace_minecart'})

    // Удаление рецептов связанных с Кольчугой
    event.remove({id: 'gtceu:shaped/chainmail_boots'})
    event.remove({id: 'gtceu:shaped/chainmail_leggings'})
    event.remove({id: 'gtceu:shaped/chainmail_chestplate'})
    event.remove({id: 'gtceu:shaped/chainmail_helmet'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_boots'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_leggings'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_chestplate'})
    event.remove({id: 'gtceu:arc_furnace/arc_chainmail_helmet'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_boots'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_chainmail_helmet'})
    event.remove({id: 'minecraft:iron_nugget_from_smelting'})
    event.remove({id: 'minecraft:iron_nugget_from_blasting'})

    // Удаление рецептов связанных с Железной броней
    event.remove({id: 'gtceu:arc_furnace/arc_iron_boots'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_leggings'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_chestplate'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_helmet'})
    event.remove({id: 'gtceu:macerator/macerate_iron_boots'})
    event.remove({id: 'gtceu:macerator/macerate_iron_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_iron_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_iron_helmet'})
    event.remove({id: 'gtceu:shaped/iron_horse_armor'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_horse_armor'})
    event.remove({id: 'gtceu:macerator/macerate_iron_horse_armor'})

    // Удаление рецептов связанных с Золотой броней
    event.remove({id: 'gtceu:arc_furnace/arc_golden_boots'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_leggings'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_chestplate'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_helmet'})
    event.remove({id: 'gtceu:macerator/macerate_golden_boots'})
    event.remove({id: 'gtceu:macerator/macerate_golden_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_golden_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_golden_helmet'})
    event.remove({id: 'gtceu:shaped/golden_horse_armor'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_horse_armor'})
    event.remove({id: 'gtceu:macerator/macerate_golden_horse_armor'})
    event.remove({id: 'minecraft:gold_nugget_from_smelting'})
    event.remove({id: 'minecraft:gold_nugget_from_blasting'})

    // Удаление рецептов связанных с Алмазной броней
    event.remove({id: 'gtceu:macerator/macerate_diamond_boots'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_helmet'})
    event.remove({id: 'gtceu:shaped/diamond_horse_armor'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_horse_armor'})

    // Удаление рецептов сваязанных с Незеритовой броней
    event.remove({id: 'minecraft:netherite_helmet_smithing'})
    event.remove({id: 'minecraft:netherite_chestplate_smithing'})
    event.remove({id: 'minecraft:netherite_leggings_smithing'})
    event.remove({id: 'minecraft:netherite_boots_smithing'})

    // Удаление рецептов связанных с шаблонами брони
    event.remove({id: 'minecraft:wild_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:wayfinder_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:ward_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:vex_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:tide_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:spire_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:snout_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:silence_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:shaper_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:sentry_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:rib_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:raiser_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:host_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:eye_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:dune_armor_trim_smithing_template_smithing_trim'})
    event.remove({id: 'minecraft:coast_armor_trim_smithing_template_smithing_trim'})

    // Удаление рецептов связанных с Деревянными инструментами
    event.remove({id: 'gtceu:macerator/macerate_wooden_sword'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_axe'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_hoe'})

    // Удаление рецептов связанных с Каменными инструментами
    event.remove({id: 'gtceu:macerator/macerate_stone_sword'})
    event.remove({id: 'gtceu:macerator/macerate_stone_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_stone_axe'})
    event.remove({id: 'gtceu:macerator/macerate_stone_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_stone_hoe'})

    // Удаление рецептов связанных с Железными инструментами
    event.remove({id: 'gtceu:macerator/macerate_iron_sword'})
    event.remove({id: 'gtceu:macerator/macerate_iron_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_iron_axe'})
    event.remove({id: 'gtceu:macerator/macerate_iron_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_iron_hoe'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_sword'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_pickaxe'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_axe'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_shovel'})
    event.remove({id: 'gtceu:arc_furnace/arc_iron_hoe'})

    // Удаление рецептов связанных с Золотыми инструментами
    event.remove({id: 'gtceu:macerator/macerate_golden_sword'})
    event.remove({id: 'gtceu:macerator/macerate_golden_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_golden_axe'})
    event.remove({id: 'gtceu:macerator/macerate_golden_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_golden_hoe'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_sword'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_pickaxe'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_axe'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_shovel'})
    event.remove({id: 'gtceu:arc_furnace/arc_golden_hoe'})

    // Удаление рецептов связанных с Алмазными инструментами
    event.remove({id: 'gtceu:macerator/macerate_diamond_sword'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_axe'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_hoe'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_sword'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_pickaxe'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_axe'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_shovel'})
    event.remove({id: 'gtceu:arc_furnace/arc_diamond_hoe'})

    // Удаление рецептов связанных с Незеритовыми инструментами
    event.remove({id: 'minecraft:netherite_sword_smithing'})
    event.remove({id: 'minecraft:netherite_pickaxe_smithing'})
    event.remove({id: 'minecraft:netherite_axe_smithing'})
    event.remove({id: 'minecraft:netherite_shovel_smithing'})
    event.remove({id: 'minecraft:netherite_hoe_smithing'})

    // Удаление рецептов связанных с Repeater
    event.remove({id: 'minecraft:repeater'})

    // Удаление рецептов связанных с Comparator
    event.remove({id: 'tfc:crafting/vanilla/redstone/comparator'})
    event.remove({id: 'minecraft:comparator'})
    event.remove({id: 'gtceu:shaped/comparator_quartzite'})
    event.remove({id: 'gtceu:shaped/certus'})

    // Удаление рецептов связанных с Paper
    event.remove({id: 'gtceu:shaped/paper'})

    // Удаление рецептов связанных с Iron Bars
    event.remove({id: 'gtceu:shaped/iron_bars'})
    event.remove({id: 'gtceu:assembler/iron_bars'})

    // Удаление рецептов связанных с Wheat
    event.remove({id: 'minecraft:packed_mud'})
    event.remove({id: 'minecraft:cookie'})
    event.remove({id: 'minecraft:cake'})
    event.remove({id: 'minecraft:bread'})
    event.remove({id: 'gtceu:packer/hay_block'})
    
    // Удаление рецептов связанных с Wheat Dust
    event.remove({id: 'gtceu:packer/package_wheat_tiny_dust'})
    event.remove({id: 'gtceu:packer/package_wheat_small_dust'})
    event.remove({id: 'gtceu:packer/unpackage_wheat_tiny_dust'})
    event.remove({id: 'gtceu:packer/unpackage_wheat_small_dust'})
    event.remove({id: 'gtceu:shaped/tiny_dust_assembling_wheat'})
    event.remove({id: 'gtceu:shaped/small_dust_assembling_wheat'})
    event.remove({id: 'gtceu:shaped/tiny_dust_disassembling_wheat'})
    event.remove({id: 'gtceu:shaped/small_dust_disassembling_wheat'})
    event.remove({id: 'gtceu:macerator/macerate_wheat'})
    event.remove({id: 'gtceu:macerator/macerate_hay_block'})
    event.remove({id: 'gtceu:shapeless/wheat_to_dust'})

    // Удаление рецептов связанных с TripWire Hook
    event.remove({id: 'minecraft:tripwire_hook'})
    event.remove({id: 'tfc:crafting/vanilla/redstone/tripwire_hook'})
    event.remove({id: 'gtceu:assembler/tripwire_hook_wrought_iron'})
    event.remove({id: 'gtceu:assembler/tripwire_hook_iron'})

    // Удаление рецептовсвязанных с ведром
    event.remove({id: 'gtceu:bender/bucket'})
    event.remove({id: 'gtceu:shaped/iron_bucket'})

    // Удаление рецептов связанных с Saddle
    event.remove({id: 'gtceu:shaped/saddle'})

    // Удаление рецептов связанных с песком
    event.remove({id: 'gtceu:forge_hammer/smooth_sandstone_to_sand'})
    event.remove({id: 'gtceu:forge_hammer/sandstone_to_sand'})
    event.remove({id: 'gtceu:forge_hammer/chiseled_sandstone_to_sand'})

    event.remove({id: 'gtceu:centrifuge/soul_sand_separation'})
    event.remove({id: 'gtceu:centrifuge/mycelium_separation'})
    event.remove({id: 'gtceu:centrifuge/endstone_separation'})

    // Удаление рецептов связанных с красным песком
    event.remove({id: 'gtceu:forge_hammer/smooth_red_sandstone_to_red_sand'})
    event.remove({id: 'gtceu:forge_hammer/red_sandstone_to_red_sand'})
    event.remove({id: 'gtceu:forge_hammer/chiseled_red_sandstone_to_red_sand'})

    // Удаление рецептов связанных с SandStone
    event.remove({id: 'minecraft:sandstone'})
    event.remove({id: 'gtceu:compressor/sandstone'})

    // Удаление рецептов связанных с Red SandStone

    // Удаление рецептов блоков из RockBreaker
    event.remove({id: 'gtceu:rock_breaker/stone'})
    event.remove({id: 'gtceu:rock_breaker/obsidian'})
    event.remove({id: 'gtceu:rock_breaker/granite'})
    event.remove({id: 'gtceu:rock_breaker/diorite'})
    event.remove({id: 'gtceu:rock_breaker/andesite'})
    event.remove({id: 'gtceu:rock_breaker/cobblestone'})

    // Удаление рецептов связанных с книжными полками
    event.remove({id: 'minecraft:chiseled_bookshelf'})
    event.remove({id: 'gtceu:assembler/bookshelf'})
    event.remove({id: 'gtceu:arc_furnace/arc_bookshelf'})
    event.remove({id: 'gtceu:macerator/macerate_bookshelf'})
    event.remove({id: 'gtceu:extractor/bookshelf_extraction'})

    // Удаление рецептов связанных с сундуками
    event.remove({id: 'gtceu:assembler/chest'})
    event.remove({id: 'gtceu:arc_furnace/arc_trapped_chest'})
    event.remove({id: 'gtceu:macerator/macerate_trapped_chest'})

    // Удаление других рецептов
    event.remove({ id: 'tfc:crafting/vanilla/lapis_block' })
    event.remove({id: 'minecraft:blast_furnace'})
    event.remove({id: 'minecraft:fire_charge'})
    event.remove({id: 'minecraft:netherite_ingot_from_netherite_block'})
    event.remove({id: 'minecraft:netherite_block'})
    event.remove({id: 'minecraft:lodestone'})
    event.remove({id: 'minecraft:lantern'})

    // Исправление рецептов пережарки меди, удволетворяя условиям: обычный кусок -> 2 слитка
    event.remove({id: 'minecraft:copper_ingot_from_smelting_raw_copper'})
    event.remove({id: 'minecraft:copper_ingot_from_blasting_raw_copper'})

    event.smelting('2x #forge:ingots/copper', '1x #forge:raw_materials/copper').id('minecraft:copper_ingot_from_smelting_raw_copper').xp(0.7)
    event.blasting('2x #forge:ingots/copper', '1x #forge:raw_materials/copper').id('minecraft:copper_ingot_from_blasting_raw_copper').xp(0.7)

    // Исправление рецептов пережарки железа, удволетворяя условиям: обычный кусок -> 2 слитка
    event.remove({id: `minecraft:iron_ingot_from_smelting_raw_iron`})
    event.remove({id: `minecraft:iron_ingot_from_blasting_raw_iron`})

    event.smelting('2x #forge:ingots/iron', '1x #forge:raw_materials/iron').id('minecraft:iron_ingot_from_smelting_raw_iron').xp(0.7)
    event.blasting('2x #forge:ingots/iron', '1x #forge:raw_materials/iron').id('minecraft:iron_ingot_from_blasting_raw_iron').xp(0.7)

    // Исправление рецептов пережарки золота, удволетворяя условиям: обычный кусок -> 2 слитка
    event.remove({id: `minecraft:gold_ingot_from_smelting_raw_gold`})
    event.remove({id: `minecraft:gold_ingot_from_blasting_raw_gold`})

    event.smelting('2x #forge:ingots/gold', '1x #forge:raw_materials/gold').id('minecraft:gold_ingot_from_smelting_raw_gold').xp(0.7)
    event.blasting('2x #forge:ingots/gold', '1x #forge:raw_materials/gold').id('minecraft:gold_ingot_from_blasting_raw_gold').xp(0.7)

    // Bucket
    event.recipes.tfc.welding('minecraft:bucket', 'tfc:metal/bucket/red_steel', 'tfc:metal/bucket/blue_steel', 6)
        .id('tfg:anvil/vanilla_bucket')

    // Fire Charge
    event.remove({ id: 'tfc:crafting/vanilla/fire_charge' })
    event.shapeless('3x minecraft:fire_charge', [
        '#forge:dusts/gunpowder',
        '#minecraft:coals',
        'tfc:firestarter'
    ])

    // Стекло
    event.recipes.gtceu.alloy_smelter('glass')             
        .itemInputs('#forge:dusts/glass')
        .notConsumable('gtceu:block_casting_mold')
        .itemOutputs('minecraft:glass')
        .duration(120)
        .EUt(16)

    event.recipes.gtceu.arc_furnace('glass_from_sand')             
        .itemInputs('#forge:sand')
        .itemOutputs('2x minecraft:glass')
        .duration(20)
        .EUt(30)



    // TripWire Hook
    event.shapeless('minecraft:tripwire_hook', [
        '#forge:rods/wood',
        '#forge:rings/wrought_iron',
        '#forge:springs/small'
    ]).id('tfg:recipes/tripwire_hook')

    event.recipes.gtceu.assembler('tfg/tripwire_hook')             
        .itemInputs(
            '#forge:rods/wood',
            '#forge:rings/wrought_iron',
            '#forge:springs/small'
            )
        .itemOutputs('2x minecraft:tripwire_hook')
        .duration(100)
        .EUt(4)

    // ItemFrame
    event.recipes.gtceu.assembler('item_frame')             
        .itemInputs(
            '8x #forge:rods/wood',
            'minecraft:leather'
            )
        .itemOutputs('2x minecraft:item_frame')
        .duration(100)
        .EUt(4)

    event.recipes.gtceu.assembler('tfg/item_frame_lumber')             
        .itemInputs(
            '8x #tfc:lumber',
            'minecraft:leather'
        )
    .itemOutputs('8x minecraft:item_frame')
    .duration(100)
    .EUt(4)

    // Glow Item Frame
    event.shapeless('minecraft:glow_item_frame', [
        'minecraft:item_frame',
        '#forge:dusts/glowstone'
    ]).id('minecraft:glow_item_frame')

    event.recipes.gtceu.assembler('tfg/glow_item_frame')             
        .itemInputs(
            '2x minecraft:item_frame',
            '#forge:dusts/glowstone'
        )
    .itemOutputs('2x minecraft:glow_item_frame')
    .duration(100)
    .EUt(4)

    // Painting
    event.recipes.gtceu.assembler('painting')             
        .itemInputs(
            '#tfc:high_quality_cloth',
            '8x #forge:rods/wood'
        )
    .itemOutputs('2x minecraft:painting')
    .circuit(1)
    .duration(100)
    .EUt(4)

    // Sugar Cane (Papyrus) -> Paper
    event.remove({id: 'gtceu:chemical_bath/paper_from_sugar_cane_distilled'})
    event.remove({id: 'gtceu:chemical_bath/paper_from_sugar_cane'})

    event.recipes.gtceu.chemical_bath('paper_from_papyrus_distilled')             
        .itemInputs('tfc:papyrus')
        .inputFluids(Fluid.of('gtceu:distilled_water', 100))
        .itemOutputs('minecraft:paper')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.chemical_bath('paper_from_papyrus')             
        .itemInputs('tfc:papyrus')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('minecraft:paper')
        .duration(100)
        .EUt(7)

    // White Dye Recipes
    event.remove({id: 'gtceu:extractor/lily_of_the_valley_dye'})
    
    event.recipes.gtceu.extractor('white_dye')             
        .itemInputs('1x #tfc:makes_white_dye')
        .itemOutputs('2x minecraft:white_dye')
        .duration(200)
        .EUt(2)

    // Red Dye Recipes
    event.remove({id: 'gtceu:extractor/rose_bush_dye'})
    event.remove({id: 'gtceu:extractor/red_tulip_dye'})
    event.remove({id: 'gtceu:extractor/poppy_dye'})
    event.remove({id: 'gtceu:extractor/beetroot_dye'})
    
    event.recipes.gtceu.extractor('red_dye')             
        .itemInputs('1x #tfc:makes_red_dye')
        .itemOutputs('2x minecraft:red_dye')
        .duration(200)
        .EUt(2)

    // Lime Dye Recipes
    event.remove({id: 'gtceu:extractor/rose_bush_dye'})
    event.remove({id: 'gtceu:extractor/red_tulip_dye'})
    event.remove({id: 'gtceu:extractor/poppy_dye'})
    event.remove({id: 'gtceu:extractor/beetroot_dye'})
    
    event.recipes.gtceu.extractor('lime_dye')             
        .itemInputs('1x tfc:plant/moss')
        .itemOutputs('2x minecraft:lime_dye')
        .duration(200)
        .EUt(2)

    // Light Blue Dye Recipes
    event.remove({id: 'gtceu:extractor/blue_orchid_dye'})
    
    event.recipes.gtceu.extractor('light_blue_dye')             
        .itemInputs('1x #tfc:makes_light_blue_dye')
        .itemOutputs('2x minecraft:light_blue_dye')
        .duration(200)
        .EUt(2)

    // Green Dye Recipes
    event.recipes.gtceu.extractor('green_dye')             
        .itemInputs('1x #tfc:makes_green_dye')
        .itemOutputs('2x minecraft:green_dye')
        .duration(200)
        .EUt(2)

    // Magenta Dye Recipes
    event.remove({id: 'gtceu:extractor/lilac_dye'})
    event.remove({id: 'gtceu:extractor/allium_dye'})
    
    event.recipes.gtceu.extractor('magenta_dye')             
        .itemInputs('1x #tfc:makes_magenta_dye')
        .itemOutputs('2x minecraft:magenta_dye')
        .duration(200)
        .EUt(2)

    // Orange Dye Recipes
    event.remove({id: 'gtceu:extractor/orange_tulip_dye'})
    
    event.recipes.gtceu.extractor('orange_dye')             
        .itemInputs('1x #tfc:makes_orange_dye')
        .itemOutputs('2x minecraft:orange_dye')
        .duration(200)
        .EUt(2)

    // Purple Dye Recipes
    event.recipes.gtceu.extractor('purple_dye')             
        .itemInputs('1x #tfc:makes_purple_dye')
        .itemOutputs('2x minecraft:purple_dye')
        .duration(200)
        .EUt(2)

    // Brown Dye Recipes
    event.recipes.gtceu.extractor('brown_dye')             
        .itemInputs('1x #tfc:makes_brown_dye')
        .itemOutputs('2x minecraft:brown_dye')
        .duration(200)
        .EUt(2)

    // Light Gray Dye Recipes
    event.recipes.gtceu.extractor('light_gray_dye')             
        .itemInputs('1x tfc:plant/yucca')
        .itemOutputs('2x minecraft:light_gray_dye')
        .duration(200)
        .EUt(2)

    // Yellow Dye Recipes
    event.remove({id: 'gtceu:extractor/sunflower_dye'})
    event.remove({id: 'gtceu:extractor/dandelion_dye'})
    
    event.recipes.gtceu.extractor('yellow_dye')             
        .itemInputs('1x #tfc:makes_yellow_dye')
        .itemOutputs('2x minecraft:yellow_dye')
        .duration(200)
        .EUt(2)

    // Blue Dye Recipes
    event.remove({id: 'gtceu:extractor/cornflower_dye'})
    
    event.recipes.gtceu.extractor('blue_dye')             
        .itemInputs('1x #tfc:makes_blue_dye')
        .itemOutputs('2x minecraft:blue_dye')
        .duration(200)
        .EUt(2)

    // Pink Dye Recipes
    event.remove({id: 'gtceu:extractor/pink_tulip_dye'})
    event.remove({id: 'gtceu:extractor/peony_dye'})
    
    event.recipes.gtceu.extractor('pink_dye')             
        .itemInputs('1x #tfc:makes_pink_dye')
        .itemOutputs('2x minecraft:pink_dye')
        .duration(200)
        .EUt(2)

    // Фикс крафта ванильных ниток
    event.recipes.gtceu.macerator('macerate_wool')             
        .itemInputs('#minecraft:wool')
        .itemOutputs('tfc:wool_yarn')
        .chancedOutput('tfc:wool_yarn', 9000, 0)
        .chancedOutput('tfc:wool_yarn', 5000, 0)
        .chancedOutput('tfc:wool_yarn', 2000, 0)
        .duration(200)
        .EUt(2)

    event.recipes.tfc.barrel_sealed(6000)
        .inputs('tfc:wool_yarn', Fluid.of('tfc:tannin', 250))    
        .outputItem('minecraft:string')
        .id('tfg:barrel/sealed/string')
        

    event.recipes.gtceu.mixer('vanilla_string_from_wool_yarn')             
        .inputFluids(Fluid.of('tfc:tannin', 200))    
        .itemInputs('tfc:wool_yarn')
        .itemOutputs('minecraft:string')
        .duration(800)
        .EUt(2)

    //#region Фикс рецептов факелов

    //#region В Верстаке

    // Из серы
    event.shaped('2x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:sulfur_dust', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('gtceu:shaped/torch_sulfur')

    // Из фосфора
    event.shaped('6x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:phosphorus_dust', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('gtceu:shaped/torch_phosphorus')

    // Из креозота
    // Я не виноват, что рецепт с ведром грега не работает
    event.remove({ id: 'gtceu:shaped/torch_creosote' })

    // Из пыли кокса
    event.shaped('8x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:coke_dust', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('gtceu:shaped/torch_coke_dust')

    // Из гема кокса
    event.shaped('8x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:coke_gem', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('gtceu:shaped/torch_coke')

    // Из пыли угля
    event.shaped('4x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:coal_dust', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('gtceu:shaped/torch_coal_dust')

    // Из гема угля
    event.shaped('4x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'minecraft:coal', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('tfg:crafting/torch_coal')

    // Из пыли древесного угля
    event.shaped('4x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:charcoal_dust', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('gtceu:shaped/torch_charcoal_dust')

    // Из гема древесного угля
    event.shaped('4x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'minecraft:charcoal', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('tfg:crafting/torch_charcoal')

    // Из резины
    event.shaped('3x tfc:dead_torch', [
        'A',
        'B'
    ], {
        A: 'gtceu:sticky_resin', 
        B: '#tfc:can_be_lit_on_torch' 
    }).id('gtceu:shaped/sticky_resin_torch')

    //#endregion

    //#region В сборщике

    // Из серы
    event.recipes.gtceu.assembler('torch_sulfur')             
        .itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:sulfur_dust')
        .itemOutputs('2x tfc:dead_torch')
        .duration(100)
        .EUt(1)

    // Из фосфора
    event.recipes.gtceu.assembler('torch_phosphorus')             
        .itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:phosphorus_dust')
        .itemOutputs('6x tfc:dead_torch')
        .duration(100)
        .EUt(1)

    // Из гема кокса
    event.recipes.gtceu.assembler('torch_coke_gem')             
        .itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:coke_gem')
        .itemOutputs('8x tfc:dead_torch')
        .duration(100)
        .EUt(1)

    // Из пыли кокса
    event.recipes.gtceu.assembler('torch_coke_dust')             
        .itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:coke_dust')
        .itemOutputs('8x tfc:dead_torch')
        .duration(100)
        .EUt(1)

    // Из гема ванильного угля
    event.recipes.gtceu.assembler('torch_coal')             
        .itemInputs('#tfc:can_be_lit_on_torch', 'minecraft:coal')
        .itemOutputs('4x tfc:dead_torch')
        .duration(100)
        .EUt(1)

    // Из пыли ванильного угля
    event.recipes.gtceu.assembler('torch_coal_dust')             
        .itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:coal_dust')
        .itemOutputs('4x tfc:dead_torch')
        .duration(100)
        .EUt(1)

    // Из пыли древесного угля
    event.recipes.gtceu.assembler('torch_charcoal_dust')             
        .itemInputs('#tfc:can_be_lit_on_torch', 'gtceu:charcoal_dust')
        .itemOutputs('4x tfc:dead_torch')
        .duration(100)
        .EUt(1)


    //#endregion

    // Мертвый факел в обычный
    event.smelting('tfc:torch', 'tfc:dead_torch')
        .id('tfg:smelting/dead_torch_to_torch')

    //#endregion

    //#region Фикс рецептов тыквы

    event.remove({ id: 'gtceu:macerator/macerate_pumpkin' })

    event.recipes.gtceu.canner('jack_o_lantern')             
        .itemInputs('tfc:pumpkin')
        .itemOutputs('2x minecraft:pink_dye', 'minecraft:glowstone_dust')
        .duration(100)
        .EUt(4)

    //#endregion
    */
}