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

    event.remove({ id: 'gtceu:shaped/cobblestone_hammer' })
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
    event.remove({ id: 'gtceu:shaped/cobblestone_slab_saw' })
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
    event.remove({ id: 'gtceu:shaped/stone_brick_slab_saw' })
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

    //#region Выход: Светильник моря

    event.remove({ id: 'minecraft:sea_lantern' })
    event.remove({ id: 'gtceu:assembler/sea_lantern' })

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

    //#region Выход: Базальт

    event.remove({ id: 'gtceu:rock_breaker/deepslate' })

    //#endregion

    //#region Выход: Уголь

    event.remove({ id: 'minecraft:coal_from_smelting_coal_ore' })
    event.remove({ id: 'minecraft:coal_from_smelting_deepslate_coal_ore' })
    
    event.remove({ id: 'minecraft:coal_from_blasting_coal_ore' })
    event.remove({ id: 'minecraft:coal_from_blasting_deepslate_coal_ore' })

    //#endregion

    //#region Выход: Медь

    event.remove({ id: 'minecraft:copper_ingot_from_smelting_copper_ore' })
    event.remove({ id: 'minecraft:copper_ingot_from_smelting_deepslate_copper_ore' })
    
    event.remove({ id: 'minecraft:copper_ingot_from_blasting_copper_ore' })
    event.remove({ id: 'minecraft:copper_ingot_from_blasting_deepslate_copper_ore' })

    //#endregion

    //#region Выход: Железо

    event.remove({ id: 'minecraft:iron_ingot_from_smelting_iron_ore' })
    event.remove({ id: 'minecraft:iron_ingot_from_smelting_deepslate_iron_ore' })
    
    event.remove({ id: 'minecraft:iron_ingot_from_blasting_iron_ore' })
    event.remove({ id: 'minecraft:iron_ingot_from_blasting_deepslate_iron_ore' })

    //#endregion

    //#region Выход: Лазурит

    event.remove({ id: 'minecraft:lapis_lazuli_from_smelting_lapis_ore' })
    event.remove({ id: 'minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore' })
    
    event.remove({ id: 'minecraft:lapis_lazuli_from_blasting_lapis_ore' })
    event.remove({ id: 'minecraft:lapis_lazuli_from_blasting_deepslate_lapis_ore' })

    //#endregion

    //#region Выход: Золото

    event.remove({ id: 'minecraft:gold_ingot_from_smelting_gold_ore' })
    event.remove({ id: 'minecraft:gold_ingot_from_smelting_deepslate_gold_ore' })
    event.remove({ id: 'minecraft:gold_ingot_from_smelting_nether_gold_ore' })
    
    event.remove({ id: 'minecraft:gold_ingot_from_blasting_gold_ore' })
    event.remove({ id: 'minecraft:gold_ingot_from_blasting_deepslate_gold_ore' })
    event.remove({ id: 'minecraft:gold_ingot_from_blasting_nether_gold_ore' })

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

    event.remove({ id: 'minecraft:diamond_from_blasting_diamond_ore' })
    event.remove({ id: 'minecraft:diamond_from_blasting_deepslate_diamond_ore' })

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
        .chancedOutput('gtceu:tiny_platinum_dust', 630, 150)
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
    event.remove({ id: 'gtceu:shaped/smooth_sandstone_slab_saw' })
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
    event.remove({ id: 'gtceu:shaped/red_sandstone_slab_saw' })
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

    event.remove({ id: 'ae2:entropy/cool/grass_block_dirt' }) // TODO: Сделать с тфк землей

    event.recipes.gtceu.macerator('dirt_from_bio_chaff')             
        .itemInputs('gtceu:bio_chaff')
        .itemOutputs('tfc:dirt/loam')
        .duration(300)
        .EUt(4)

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
        event.remove({ id: `gtceu:assembler/${wood}_sign` })
    });

    event.remove({ id: 'minecraft:stripped_warped_hyphae' })
    event.remove({ id: 'minecraft:warped_hyphae' })
    event.remove({ id: 'minecraft:stripped_crimson_hyphae' })
    event.remove({ id: 'minecraft:crimson_hyphae' })
    
    //#endregion

    //#region Выход: Камнерез

    event.remove({ id: 'minecraft:stonecutter' })

    //#endregion

    //#region Выход: Стекло

    event.recipes.gtceu.arc_furnace('glass_from_sand')             
        .itemInputs('#forge:sand')
        .itemOutputs('2x minecraft:glass')
        .duration(20)
        .EUt(30)

    //#endregion

    //#region Выход: Плотная грязь

    event.remove({ id: 'minecraft:packed_mud' })

    //#endregion

    //#region Выход: Грязные кирпичи

    event.remove({ id: 'minecraft:mud_bricks' })

    //#endregion

    //#region Выход: Грязные кирпичи ступень

    event.remove({ id: 'minecraft:mud_brick_stairs' })
    event.remove({ id: 'minecraft:mud_brick_stairs_from_mud_bricks_stonecutting' })

    //#endregion

    //#region Выход: Грязные кирпичи плита

    event.remove({ id: 'minecraft:mud_brick_slab' })
    event.remove({ id: 'minecraft:mud_brick_slab_from_mud_bricks_stonecutting' })

    //#endregion

    //#region Выход: Грязные кирпичи стена

    event.remove({ id: 'minecraft:mud_brick_wall' })
    event.remove({ id: 'minecraft:mud_brick_wall_from_mud_bricks_stonecutting' })

    //#endregion

    //#region Выход: Медный блок (Подчищаем за разрабом грега)

    event.remove({ id: 'minecraft:copper_block' })

    //#endregion

    //#region Выход: Незер кирпич

    event.remove({ id: 'minecraft:nether_bricks' })
    event.remove({ id: 'gtceu:compressor/nether_bricks' })

    //#endregion

    //#region Выход: Потрескавшийся незер кирпич

    event.remove({ id: 'minecraft:cracked_nether_bricks' })

    //#endregion

    //#region Выход: Незер ступень

    event.remove({ id: 'minecraft:nether_brick_stairs' })
    event.remove({ id: 'minecraft:nether_brick_stairs_from_nether_bricks_stonecutting' })

    //#endregion

    //#region Выход: Незер полублок

    event.remove({ id: 'gtceu:shaped/nether_brick_slab_saw' })
    event.remove({ id: 'minecraft:nether_brick_slab_from_nether_bricks_stonecutting' })

    //#endregion

    //#region Выход: Незер стена

    event.remove({ id: 'minecraft:nether_brick_wall' })
    event.remove({ id: 'minecraft:nether_brick_wall_from_nether_bricks_stonecutting' })

    //#endregion

    //#region Выход: Незер забор

    event.remove({ id: 'minecraft:nether_brick_fence' })
    event.remove({ id: 'gtceu:assembler/nether_brick_fence' })

    //#endregion

    //#region Выход: Резной незер кирпич

    event.remove({ id: 'minecraft:chiseled_nether_bricks' })
    event.remove({ id: 'minecraft:chiseled_nether_bricks_from_nether_bricks_stonecutting' })

    //#endregion

    //#region Выход: Красный незер кирпич

    event.remove({ id: 'minecraft:red_nether_bricks' })
    event.remove({ id: 'gtceu:alloy_smelter/red_nether_bricks' })

    //#endregion
    
    //#region Выход: Ступень из красного незер кирпича

    event.remove({ id: 'minecraft:red_nether_brick_stairs' })
    event.remove({ id: 'minecraft:red_nether_brick_stairs_from_red_nether_bricks_stonecutting' })

    //#endregion
    
    //#region Выход: Полублок из красного незер кирпича

    event.remove({ id: 'minecraft:red_nether_brick_slab' })
    event.remove({ id: 'minecraft:red_nether_brick_slab_from_red_nether_bricks_stonecutting' })

    //#endregion
    
    //#region Выход: Стена из красного незер кирпича

    event.remove({ id: 'minecraft:red_nether_brick_wall' })
    event.remove({ id: 'minecraft:red_nether_brick_wall_from_red_nether_bricks_stonecutting' })

    //#endregion
    
    //#region Выход: Базальт

    event.remove({ id: 'gtceu:rock_breaker/basalt' })

    //#endregion
    
    //#region Выход: Гладкий базальт

    event.remove({ id: 'minecraft:smooth_basalt' })

    //#endregion
    
    //#region Выход: Полированный базальт

    event.remove({ id: 'minecraft:polished_basalt' })
    event.remove({ id: 'minecraft:polished_basalt_from_basalt_stonecutting' })

    //#endregion
    
    //#region Выход: Черный камень

    event.remove({ id: 'gtceu:rock_breaker/blackstone' })

    //#endregion
    
    //#region Выход: Ступень из черного камня

    event.remove({ id: 'minecraft:blackstone_stairs' })
    event.remove({ id: 'minecraft:blackstone_stairs_from_blackstone_stonecutting' })

    //#endregion

    //#region Выход: Полублок из черного камня

    event.remove({ id: 'minecraft:blackstone_slab' })
    event.remove({ id: 'minecraft:blackstone_slab_from_blackstone_stonecutting' })

    //#endregion

    //#region Выход: Стена из черного камня

    event.remove({ id: 'minecraft:blackstone_wall' })
    event.remove({ id: 'minecraft:blackstone_wall_from_blackstone_stonecutting' })

    //#endregion

    //#region Выход: Резной гладкий черный камень

    event.remove({ id: 'minecraft:chiseled_polished_blackstone' })
    event.remove({ id: 'minecraft:chiseled_polished_blackstone_from_blackstone_stonecutting' })
    event.remove({ id: 'minecraft:chiseled_polished_blackstone_from_polished_blackstone_stonecutting' })

    //#endregion

    //#region Выход: Гладкий черный камень

    event.remove({ id: 'minecraft:polished_blackstone' })
    event.remove({ id: 'minecraft:polished_blackstone_from_blackstone_stonecutting' })

    //#endregion

    //#region Выход: Ступени из гладкого черного камня

    event.remove({ id: 'minecraft:polished_blackstone_stairs' })
    event.remove({ id: 'minecraft:polished_blackstone_stairs_from_blackstone_stonecutting' })
    event.remove({ id: 'minecraft:polished_blackstone_stairs_from_polished_blackstone_stonecutting' })

    //#endregion

    //#region Выход: Полублоки из гладкого черного камня

    event.remove({ id: 'minecraft:polished_blackstone_slab' })
    event.remove({ id: 'minecraft:polished_blackstone_slab_from_polished_blackstone_stonecutting' })
    event.remove({ id: 'minecraft:polished_blackstone_slab_from_blackstone_stonecutting' })

    //#endregion

    //#region Выход: Стена из гладкого черного камня

    event.remove({ id: 'minecraft:polished_blackstone_wall' })
    event.remove({ id: 'minecraft:polished_blackstone_wall_from_polished_blackstone_stonecutting' })
    event.remove({ id: 'minecraft:polished_blackstone_wall_from_blackstone_stonecutting' })

    //#endregion

    //#region Выход: Кирпичи из черного камня

    event.remove({ id: 'minecraft:polished_blackstone_bricks' })
    event.remove({ id: 'minecraft:polished_blackstone_bricks_from_blackstone_stonecutting' })
    event.remove({ id: 'minecraft:polished_blackstone_bricks_from_polished_blackstone_stonecutting' })

    //#endregion

    //#region Выход: Потрескавшиеся кирпичи из черного камня

    event.remove({ id: 'minecraft:cracked_polished_blackstone_bricks' })

    //#endregion

    //#region Выход: Ступени из кирпичей из черного камня

    event.remove({ id: 'minecraft:polished_blackstone_brick_stairs' })
    event.remove({ id: 'minecraft:polished_blackstone_brick_stairs_from_blackstone_stonecutting' })
    event.remove({ id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_stonecutting' })
    event.remove({ id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_bricks_stonecutting' })

    //#endregion

    //#region Выход: Полублоки из кирпичей из черного камня

    event.remove({ id: 'minecraft:polished_blackstone_brick_slab' })
    event.remove({ id: 'minecraft:polished_blackstone_brick_slab_from_blackstone_stonecutting' })
    event.remove({ id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_stonecutting' })
    event.remove({ id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_bricks_stonecutting' })

    //#endregion

    //#region Выход: Стена из кирпичей из черного камня

    event.remove({ id: 'minecraft:polished_blackstone_brick_wall' })
    event.remove({ id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_stonecutting' })
    event.remove({ id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_bricks_stonecutting' })
    event.remove({ id: 'minecraft:polished_blackstone_brick_wall_from_blackstone_stonecutting' })

    //#endregion

    //#region Выход: Нажимная плита из черного камня

    event.remove({ id: 'minecraft:polished_blackstone_pressure_plate' })

    //#endregion

    //#region Выход: Кнопка из черного камня

    event.remove({ id: 'minecraft:polished_blackstone_button' })

    //#endregion

    //#region Выход: Медные блоки

    //#region Удаление

    //#region Обычные

    event.remove({ id: 'minecraft:cut_copper' })
    event.remove({ id: 'minecraft:cut_copper_from_copper_block_stonecutting' })
    
    event.remove({ id: 'minecraft:cut_copper_stairs' })
    event.remove({ id: 'minecraft:cut_copper_stairs_from_copper_block_stonecutting' })
    event.remove({ id: 'minecraft:cut_copper_stairs_from_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:cut_copper_slab' })
    event.remove({ id: 'minecraft:cut_copper_slab_from_copper_block_stonecutting' })
    event.remove({ id: 'minecraft:cut_copper_slab_from_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:exposed_cut_copper' })
    event.remove({ id: 'minecraft:exposed_cut_copper_from_exposed_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:exposed_cut_copper_stairs' })
    event.remove({ id: 'minecraft:exposed_cut_copper_stairs_from_exposed_copper_stonecutting' })
    event.remove({ id: 'minecraft:exposed_cut_copper_stairs_from_exposed_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:exposed_cut_copper_slab' })
    event.remove({ id: 'minecraft:exposed_cut_copper_slab_from_exposed_copper_stonecutting' })
    event.remove({ id: 'minecraft:exposed_cut_copper_slab_from_exposed_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:weathered_cut_copper' })
    event.remove({ id: 'minecraft:weathered_cut_copper_from_weathered_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:weathered_cut_copper_stairs' })
    event.remove({ id: 'minecraft:weathered_cut_copper_stairs_from_weathered_copper_stonecutting' })
    event.remove({ id: 'minecraft:weathered_cut_copper_stairs_from_weathered_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:weathered_cut_copper_slab' })
    event.remove({ id: 'minecraft:weathered_cut_copper_slab_from_weathered_copper_stonecutting' })
    event.remove({ id: 'minecraft:weathered_cut_copper_slab_from_weathered_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:oxidized_cut_copper' })
    event.remove({ id: 'minecraft:oxidized_cut_copper_from_oxidized_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:oxidized_cut_copper_stairs' })
    event.remove({ id: 'minecraft:oxidized_cut_copper_stairs_from_oxidized_copper_stonecutting' })
    event.remove({ id: 'minecraft:oxidized_cut_copper_stairs_from_oxidized_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:oxidized_cut_copper_slab' })
    event.remove({ id: 'minecraft:oxidized_cut_copper_slab_from_oxidized_copper_stonecutting' })
    event.remove({ id: 'minecraft:oxidized_cut_copper_slab_from_oxidized_cut_copper_stonecutting' })

    //#endregion

    //#region В меде

    event.remove({ id: 'minecraft:waxed_copper_block_from_honeycomb' })

    event.remove({ id: 'minecraft:waxed_cut_copper_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_cut_copper' })
    event.remove({ id: 'minecraft:waxed_cut_copper_from_waxed_copper_block_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_cut_copper_stairs_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_cut_copper_stairs' })
    event.remove({ id: 'minecraft:waxed_cut_copper_stairs_from_waxed_copper_block_stonecutting' })
    event.remove({ id: 'minecraft:waxed_cut_copper_stairs_from_waxed_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_cut_copper_slab_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_cut_copper_slab' })
    event.remove({ id: 'minecraft:waxed_cut_copper_slab_from_waxed_copper_block_stonecutting' })
    event.remove({ id: 'minecraft:waxed_cut_copper_slab_from_waxed_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_exposed_copper_from_honeycomb' })
    
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper' })
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper_from_waxed_exposed_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper_stairs_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper_stairs' })
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper_stairs_from_waxed_exposed_copper_stonecutting' })
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper_stairs_from_waxed_exposed_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper_slab_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper_slab' })
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper_slab_from_waxed_exposed_copper_stonecutting' })
    event.remove({ id: 'minecraft:waxed_exposed_cut_copper_slab_from_waxed_exposed_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_weathered_copper_from_honeycomb' })
    
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper' })
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper_from_waxed_weathered_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper_stairs_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper_stairs' })
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper_stairs_from_waxed_weathered_copper_stonecutting' })
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper_stairs_from_waxed_weathered_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper_slab_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper_slab' })
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper_slab_from_waxed_weathered_copper_stonecutting' })
    event.remove({ id: 'minecraft:waxed_weathered_cut_copper_slab_from_waxed_weathered_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_oxidized_copper_from_honeycomb' })
    
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper' })
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_from_waxed_oxidized_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_stairs_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_stairs' })
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_stairs_from_waxed_oxidized_copper_stonecutting' })
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_stairs_from_waxed_oxidized_cut_copper_stonecutting' })
    
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_slab_from_honeycomb' })
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_slab' })
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_slab_from_waxed_oxidized_copper_stonecutting' })
    event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_slab_from_waxed_oxidized_cut_copper_stonecutting' })

    //#endregion
    
    //#endregion

    //#region Добавление

    for (let i = 0; i < global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length; i++) {
        let element = global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS[i];

        // Создание ржавчины
        if (i < global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length / 2 - 1) {
            
            let element2 = global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS[i + 1]
            
            event.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_block_${element.name}`)             
                .itemInputs(element.block)
                .inputFluids(Fluid.of('minecraft:water', 150))
                .circuit(1)
                .itemOutputs(element2.block)
                .duration(1000)
                .EUt(4)

            event.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_cutted_${element.name}`)             
                .itemInputs(element.cutted)
                .inputFluids(Fluid.of('minecraft:water', 150))
                .circuit(1)
                .itemOutputs(element2.cutted)
                .duration(1000)
                .EUt(4)

            event.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_stairs_${element.name}`)             
                .itemInputs(element.stairs)
                .inputFluids(Fluid.of('minecraft:water', 150))
                .circuit(1)
                .itemOutputs(element2.stairs)
                .duration(1000)
                .EUt(4)

            event.recipes.gtceu.chemical_reactor(`tfg:minecraft/oxidizing_slabs_${element.name}`)             
                .itemInputs(element.slabs)
                .inputFluids(Fluid.of('minecraft:water', 150))
                .circuit(1)
                .itemOutputs(element2.slabs)
                .duration(1000)
                .EUt(4)
        } else if (i > global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length / 2 - 1) {
            let element2 = global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS[i - global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.length / 2]

            event.recipes.gtceu.assembler(`tfg:minecraft/waxing_block_${element.name}`)             
                .itemInputs(element2.block, 'firmalife:beeswax')
                .circuit(1)
                .itemOutputs(element.block)
                .duration(50)
                .EUt(4)

            event.recipes.gtceu.assembler(`tfg:minecraft/waxing_cutted_${element.name}`)             
                .itemInputs(element2.cutted, 'firmalife:beeswax')
                .circuit(1)
                .itemOutputs(element.cutted)
                .duration(50)
                .EUt(4)

            event.recipes.gtceu.assembler(`tfg:minecraft/waxing_stairs_${element.name}`)             
                .itemInputs(element2.stairs, 'firmalife:beeswax')
                .circuit(1)
                .itemOutputs(element.stairs)
                .duration(50)
                .EUt(4)

            event.recipes.gtceu.assembler(`tfg:minecraft/waxing_slabs_${element.name}`)             
                .itemInputs(element2.slabs, 'firmalife:beeswax')
                .circuit(1)
                .itemOutputs(element.slabs)
                .duration(50)
                .EUt(4)

        }

        // Обрезанный блок

        event.stonecutting(element.cutted, element.block)
            .id(`tfg:stonecutting/cutted_${element.name}`)

        generateCutterRecipe(event, element.block, 4, element.cutted, 100, 8, `cutted_${element.name}`)

        // Not working, because JS is shit!
        // event.recipes.tfc.chisel(element.cutted,  element.block, 'smooth')
        //     .id(`tfg:chisel/cutted_${element.name}`)
        
        // Ступени

        event.stonecutting(element.stairs, element.cutted)
            .id(`tfg:stonecutting/stairs_${element.name}`)

        generateCutterRecipe(event, element.cutted, 0, [element.stairs, 'gtceu:small_copper_dust'], 100, 8, `stairs_${element.name}`)

        // Not working, because JS is shit!
        // event.recipes.tfc.chisel(element.stair,  element.cutted, 'stair')
        //     .id(`tfg:chisel/stair_${element.name}`)

        // Полублоки

        event.stonecutting(element.slabs, element.cutted)
            .id(`tfg:stonecutting/slabs_${element.name}`)

        generateCutterRecipe(event, element.cutted, 1, [element.slabs, '2x gtceu:small_copper_dust'], 100, 8, `slabs_${element.name}`)

        // Not working, because JS is shit!
        // event.recipes.tfc.chisel(element.slab,  element.cutted, 'slab')
        //     .id(`tfg:chisel/slab_${element.name}`)

    }

    //#endregion

    //#endregion

    //#region Выход: Кремний

    event.shapeless('minecraft:flint', [
        '#tfc:rock/gravel',
        '#forge:tools/mortars'
    ]).id('gtceu:shapeless/gravel_to_flint')

    event.recipes.gtceu.sifter('gravel_sifting')             
        .itemInputs('#tfc:rock/gravel')
        .itemOutputs('minecraft:flint')
        .chancedOutput('minecraft:flint', 9000, 0)
        .chancedOutput('minecraft:flint', 8000, 0)
        .chancedOutput('minecraft:flint', 6000, 0)
        .chancedOutput('minecraft:flint', 3300, 0)
        .chancedOutput('minecraft:flint', 2500, 0)
        .duration(100)
        .EUt(16)

    //#endregion

    //#region Выход: Блок глины

    event.remove({ id: 'gtceu:fluid_heater/mud_to_clay' })

    //#endregion
    
    //#region Выход: Мангровые корни в грязи

    event.remove({ id: 'minecraft:muddy_mangrove_roots' })

    //#endregion

    //#region Выход: Ковер из мха

    event.remove({ id: 'minecraft:moss_carpet' })

    //#endregion

    //#region Выход: Бамбуковые доски

    event.shapeless('2x minecraft:bamboo_planks', [
        '#minecraft:bamboo_blocks',
        '#tfc:saws'
    ]).id('minecraft:bamboo_planks')

    //#endregion

    //#region Выход: Плот с сундуком из бамбука

    event.remove({ id: 'minecraft:bamboo_chest_raft' })

    //#endregion

    //#region Выход: Таблички из бамбука

    event.remove({ id: 'minecraft:bamboo_sign' })
    event.remove({ id: 'minecraft:bamboo_hanging_sign' })

    //#endregion

    //#region Бамбуковая кнопка

    event.shaped('minecraft:bamboo_pressure_plate', [
        'ABA',
        'CDC',
        'AEA'  
    ], {
        A: '#forge:screws/wood',
        B: '#tfc:hammers',
        C: '#tfg:bamboo_slabs',
        D: '#forge:springs',
        E: '#forge:tools/screwdrivers'
    }).id(`minecraft:bamboo_pressure_plate`)

    event.recipes.gtceu.assembler(`tfg:minecraft/bamboo_pressure_plate`)             
        .itemInputs('#forge:springs', '#tfg:bamboo_slabs')
        .circuit(0)
        .itemOutputs('2x minecraft:bamboo_pressure_plate')
        .duration(50)
        .EUt(2)

    //#endregion

    //#region Бамбуковая нажимная плита

    event.remove({ id: `minecraft:bamboo_button` })

    generateCutterRecipe(event, 'minecraft:bamboo_pressure_plate', null, '6x minecraft:bamboo_button', 50, 2, `bamboo_button`)

    //#endregion

    //#region Красители

    // White
    event.remove({id: 'minecraft:white_dye_from_lily_of_the_valley'})
    event.remove({id: 'gtceu:extractor/lily_of_the_valley_dye'})
    
    event.recipes.gtceu.extractor('white_dye')             
        .itemInputs('1x #tfc:makes_white_dye')
        .itemOutputs('2x minecraft:white_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:white_dye', '1x #tfc:makes_white_dye')
        .id('tfg:milling/white_dye')

    // Red
    event.remove({id: 'minecraft:red_dye_from_tulip'})
    event.remove({id: 'minecraft:red_dye_from_rose_bush'})
    event.remove({id: 'minecraft:red_dye_from_poppy'})
    event.remove({id: 'minecraft:red_dye_from_beetroot'})
    event.remove({id: 'gtceu:extractor/rose_bush_dye'})
    event.remove({id: 'gtceu:extractor/red_tulip_dye'})
    event.remove({id: 'gtceu:extractor/poppy_dye'})
    event.remove({id: 'gtceu:extractor/beetroot_dye'})
    
    event.recipes.gtceu.extractor('red_dye')             
        .itemInputs('1x #tfc:makes_red_dye')
        .itemOutputs('2x minecraft:red_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:red_dye', '1x #tfc:makes_red_dye')
        .id('tfg:milling/red_dye')

    // Lime
    event.remove({id: 'minecraft:lime_dye_from_smelting'})
    
    event.recipes.gtceu.extractor('lime_dye')             
        .itemInputs('1x tfc:plant/moss')
        .itemOutputs('2x minecraft:lime_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:lime_dye', '1x #tfc:makes_lime_dye')
        .id('tfg:milling/lime_dye')

    // Light Blue
    event.remove({id: 'minecraft:light_blue_dye_from_blue_orchid'})
    event.remove({id: 'gtceu:extractor/blue_orchid_dye'})
    
    event.recipes.gtceu.extractor('light_blue_dye')             
        .itemInputs('1x #tfc:makes_light_blue_dye')
        .itemOutputs('2x minecraft:light_blue_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:light_blue_dye', '1x #tfc:makes_light_blue_dye')
        .id('tfg:milling/light_blue_dye')

    // Green
    event.remove({id: 'minecraft:green_dye'})

    event.recipes.gtceu.extractor('green_dye')             
        .itemInputs('1x #tfc:makes_green_dye')
        .itemOutputs('2x minecraft:green_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:green_dye', '1x #tfc:makes_green_dye')
        .id('tfg:milling/green_dye')

    // Magenta
    event.remove({id: 'minecraft:magenta_dye_from_lilac'})
    event.remove({id: 'minecraft:magenta_dye_from_allium'})
    event.remove({id: 'gtceu:extractor/lilac_dye'})
    event.remove({id: 'gtceu:extractor/allium_dye'})
    
    event.recipes.gtceu.extractor('magenta_dye')             
        .itemInputs('1x #tfc:makes_magenta_dye')
        .itemOutputs('2x minecraft:magenta_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:magenta_dye', '1x #tfc:makes_magenta_dye')
        .id('tfg:milling/magenta_dye')

    // Orange
    event.remove({id: 'tfc:crafting/vanilla/orange_dye_from_sylvite'})
    event.remove({id: 'minecraft:orange_dye_from_torchflower'})
    event.remove({id: 'minecraft:orange_dye_from_orange_tulip'})
    event.remove({id: 'gtceu:extractor/orange_tulip_dye'})
    
    event.recipes.gtceu.extractor('orange_dye')             
        .itemInputs('1x #tfc:makes_orange_dye')
        .itemOutputs('2x minecraft:orange_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:orange_dye', '1x #tfc:makes_orange_dye')
        .id('tfg:milling/orange_dye')

    // Purple
    event.recipes.gtceu.extractor('purple_dye')             
        .itemInputs('1x #tfc:makes_purple_dye')
        .itemOutputs('2x minecraft:purple_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:purple_dye', '1x #tfc:makes_purple_dye')
        .id('tfg:milling/purple_dye')

    // Brown
    event.remove({id: 'minecraft:brown_dye' })

    event.recipes.gtceu.extractor('brown_dye')             
        .itemInputs('1x #tfc:makes_brown_dye')
        .itemOutputs('2x minecraft:brown_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:brown_dye', '1x #tfc:makes_brown_dye')
        .id('tfg:milling/brown_dye')

    // Light Gray
    event.remove({id: 'minecraft:light_gray_dye_from_white_tulip'})
    event.remove({id: 'minecraft:light_gray_dye_from_azure_bluet'})
    event.remove({id: 'minecraft:light_gray_dye_from_oxeye_daisy'})
    event.remove({id: 'gtceu:extractor/white_tulip_dye'})
    event.remove({id: 'gtceu:extractor/azure_bluet_dye'})
    event.remove({id: 'gtceu:extractor/oxeye_daisy_dye'})

    event.recipes.gtceu.extractor('light_gray_dye')             
        .itemInputs('1x tfc:plant/yucca')
        .itemOutputs('2x minecraft:light_gray_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:light_gray_dye', '1x #tfc:makes_light_gray_dye')
        .id('tfg:milling/light_gray_dye')

    // Yellow
    event.remove({id: 'minecraft:yellow_dye_from_sunflower'})
    event.remove({id: 'minecraft:yellow_dye_from_dandelion'})
    event.remove({id: 'gtceu:extractor/sunflower_dye'})
    event.remove({id: 'gtceu:extractor/dandelion_dye'})
    
    event.recipes.gtceu.extractor('yellow_dye')             
        .itemInputs('1x #tfc:makes_yellow_dye')
        .itemOutputs('2x minecraft:yellow_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:yellow_dye', '1x #tfc:makes_yellow_dye')
        .id('tfg:milling/yellow_dye')

    // Blue
    event.remove({id: 'minecraft:blue_dye_from_cornflower'})
    event.remove({id: 'gtceu:extractor/cornflower_dye'})
    
    event.recipes.gtceu.extractor('blue_dye')             
        .itemInputs('1x #tfc:makes_blue_dye')
        .itemOutputs('2x minecraft:blue_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:blue_dye', '1x #tfc:makes_blue_dye')
        .id('tfg:milling/blue_dye')

    // Pink
    event.remove({id: 'minecraft:pink_dye_from_pink_petals'})
    event.remove({id: 'minecraft:pink_dye_from_pink_tulip'})
    event.remove({id: 'minecraft:pink_dye_from_peony'})
    event.remove({id: 'gtceu:extractor/pink_tulip_dye'})
    event.remove({id: 'gtceu:extractor/peony_dye'})
    
    event.recipes.gtceu.extractor('pink_dye')             
        .itemInputs('1x #tfc:makes_pink_dye')
        .itemOutputs('2x minecraft:pink_dye')
        .duration(200)
        .EUt(2)

    event.recipes.createMilling('2x minecraft:pink_dye', '1x #tfc:makes_pink_dye')
        .id('tfg:milling/pink_dye')

    // Cyan
    event.remove({id: 'minecraft:cyan_dye_from_pitcher_plant'})

    // Black
    event.remove({id: 'minecraft:black_dye_from_wither_rose'})
    event.remove({id: 'gtceu:extractor/wither_rose_dye'})

    //#endregion

    //#region Выход: Шаблон баннера
    
    event.shapeless('minecraft:flower_banner_pattern', [
        'minecraft:paper',
        '#forge:dyes/white'
    ]).id('minecraft:flower_banner_pattern')

    //#endregion

    //#region Выход: Высушенные водросли

    event.remove({ id: 'minecraft:dried_kelp' })
    event.remove({ id: 'minecraft:dried_kelp_from_smelting' })
    event.remove({ id: 'minecraft:dried_kelp_from_smoking' })

    //#endregion

    //#region Древесный уголь

    event.remove({ id: 'minecraft:charcoal' })

    //#endregion

    //#region Выход: Высушенные водросли блок

    event.remove({ id: 'minecraft:dried_kelp_block' })

    //#endregion

    //#region Выход: Бумага

    event.remove({ id: 'gtceu:shaped/paper' })

    event.remove({ id: 'gtceu:chemical_bath/paper_from_sugar_cane' })
    event.remove({ id: 'gtceu:chemical_bath/paper_from_sugar_cane_distilled' })

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

    //#endregion

    //#region Выход: Сахар

    event.remove({ id: 'gtceu:shaped/sugar' })
    event.remove({ id: 'minecraft:sugar_from_honey_bottle' })
    event.remove({ id: 'gtceu:macerator/macerate_sugar_cane' })

    event.recipes.gtceu.centrifuge('sugar')             
        .itemInputs('tfc:food/sugarcane')
        .inputFluids(Fluid.of('minecraft:water', 600))
        .itemOutputs('minecraft:sugar')
        .duration(800)
        .EUt(6)

    //#endregion

    //#region Выход: Ферментированный паучий глаз

    event.remove({ id: 'minecraft:fermented_spider_eye' })
    event.remove({ id: 'gtceu:mixer/fermented_spider_eye_red' })
    event.remove({ id: 'gtceu:mixer/fermented_spider_eye_brown' })
    event.remove({ id: 'gtceu:create_mixer/fermented_spider_eye_red' })
    event.remove({ id: 'gtceu:create_mixer/fermented_spider_eye_brown' })

    //#endregion

    //#region Выход: Семена тыквы

    event.remove({ id: 'minecraft:pumpkin_seeds' })
    event.remove({ id: 'gtceu:macerator/macerate_pumpkin' })

    //#endregion

    //#region Выход: Семена арбуза

    event.remove({ id: 'gtceu:macerator/macerate_melon_slice' })
    event.remove({ id: 'gtceu:macerator/macerate_melon_block' })

    //#endregion

    //#region Выход: Шалкеры

    event.remove({ id: 'minecraft:shulker_box' })
    event.remove({ id: 'tfc:barrel/dye/bleach_shulkers' })
    event.remove({ id: 'gtceu:assembler/purple_shulker_box' })

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.remove({ id: `tfc:barrel/dye/${dye}_shulker` })
    })

    //#endregion

    //#region Выход: Кондуит

    event.remove({ id: 'minecraft:conduit' })

    //#endregion

    //#region Выход: Калиброванный сенсор Скалка
    
    event.remove({ id: 'minecraft:calibrated_sculk_sensor' })

    //#endregion

    //#region Выход: Вагонетка с сундуком

    event.remove({ id: 'gtceu:assembler/chest_minecart' })

    //#endregion
    
    //#region Выход: Верстак

    event.remove({ id: 'tfc:crafting/vanilla/crafting_table' })
    event.remove({ id: 'gtceu:assembler/crafting_table' })

    //#endregion

    //#region Выход: Хлеб

    event.remove({ id: 'minecraft:bread' })

    //#endregion

    //#region Выход: Жаренная свинина

    event.remove({ id: 'minecraft:cooked_porkchop' })
    event.remove({ id: 'minecraft:cooked_porkchop_from_smoking' })

    //#endregion

    //#region Выход: Жаренная курятина

    event.remove({ id: 'minecraft:cooked_chicken' })
    event.remove({ id: 'minecraft:cooked_chicken_from_smoking' })

    //#endregion

    //#region Выход: Жаренная козлятина

    event.remove({ id: 'minecraft:cooked_mutton' })
    event.remove({ id: 'minecraft:cooked_mutton_from_smoking' })

    //#endregion

    //#region Выход: Жаренная зайчатина

    event.remove({ id: 'minecraft:cooked_rabbit' })
    event.remove({ id: 'minecraft:cooked_rabbit_from_smoking' })

    //#endregion

    //#region Выход: Жаренная коровятина

    event.remove({ id: 'minecraft:cooked_beef' })
    event.remove({ id: 'minecraft:cooked_beef_from_smoking' })

    //#endregion

    //#region Выход: Блок сена

    event.recipes.gtceu.packer('hay_block')             
        .itemInputs('9x tfc:straw')
        .itemOutputs('minecraft:hay_block')
        .duration(200)
        .EUt(2)

    //#endregion

    //#region Выход: Торт

    event.remove({ id: 'minecraft:cake' })

    //#endregion

    //#region Выход: Печеньки (Нееет)

    event.remove({ id: 'minecraft:cookie' })

    //#endregion

    //#region Выход: Сундук

    event.remove({ id: 'gtceu:assembler/chest' })

    //#endregion

    //#region Выход: Удочки

    event.remove({ id: 'minecraft:warped_fungus_on_a_stick' })
    event.remove({ id: 'minecraft:carrot_on_a_stick' })

    //#endregion

    //#region Выход: Светильник Джека

    event.recipes.gtceu.canner('jack_o_lantern')             
        .itemInputs('tfc:pumpkin')
        .itemOutputs('minecraft:jack_o_lantern')
        .duration(100)
        .EUt(4)

    //#endregion

    //#region Выход: Спасательный компас

    event.remove({ id: 'minecraft:recovery_compass' })

    //#endregion

    //#region Выход: Компасс

    event.remove({ id: 'tfc:crafting/vanilla/compass' })
    event.remove({ id: 'gtceu:assembler/compass' })

    //#endregion

    //#region Выход: Незеритовый слиток

    event.remove({ id: 'minecraft:netherite_ingot_from_netherite_block' })

    //#endregion

    //#region Выход: Незеритовый блок

    event.remove({ id: 'minecraft:netherite_block' })

    //#endregion

    //#region Выход: Lodestone

    event.remove({ id: 'minecraft:lodestone' })

    //#endregion

    //#region Выход: Точильный камень

    event.shaped('minecraft:grindstone', [
        'ABA', 
        'C C' 
    ], {
        A: '#minecraft:planks',
        B: '#forge:rods/wooden',
        C: '#tfg:rock_slabs' 
    }).id('minecraft:grindstone')

    //#endregion

    //#region Выход: Железный люк

    event.remove({ id: 'gtceu:assembler/iron_trapdoor' })
    
    //#endregion

    //#region Выхож: Железная дверь

    event.recipes.gtceu.assembler('iron_door')             
        .itemInputs('#forge:plates/wrought_iron')
        .circuit(6)
        .itemOutputs('minecraft:iron_door')
        .duration(100)
        .EUt(16)


    //#endregion

    //#region Выход: Железная нажимная плита

    event.remove({ id: 'tfc:crafting/vanilla/redstone/heavy_weighted_pressure_plate' })

    event.shaped('2x minecraft:heavy_weighted_pressure_plate', [
        'ABA',
        'CDC',
        'AEA'  
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#tfc:hammers',
        C: 'gtceu:wrought_iron_block',
        D: '#forge:springs',
        E: '#forge:tools/screwdrivers'
    }).id('minecraft:heavy_weighted_pressure_plate')

    event.recipes.gtceu.assembler('heavy_weighted_pressure_plate')             
        .itemInputs('#forge:springs', 'gtceu:wrought_iron_block')
        .circuit(0)
        .itemOutputs('4x minecraft:heavy_weighted_pressure_plate')
        .duration(50)
        .EUt(4)

    //#endregion

    //#region Выход: Золотая нажимная плита
    
    event.shaped('2x minecraft:light_weighted_pressure_plate', [
        'ABA',
        'CDC',
        'AEA'  
    ], {
        A: '#forge:screws/wrought_iron',
        B: '#tfc:hammers',
        C: 'minecraft:gold_block',
        D: '#forge:springs',
        E: '#forge:tools/screwdrivers'
    }).id('minecraft:light_weighted_pressure_plate')

    event.recipes.gtceu.assembler('light_weighted_pressure_plate')             
        .itemInputs('#forge:springs', 'minecraft:gold_block')
        .circuit(0)
        .itemOutputs('4x minecraft:light_weighted_pressure_plate')
        .duration(50)
        .EUt(4)

    //#endregion

    //#region Выход: Жаренный Cod

    event.remove({ id: 'minecraft:cooked_cod' })
    event.remove({ id: 'minecraft:cooked_cod_from_smoking' })

    //#endregion

    //#region Выход: Жаренный Salmon

    event.remove({ id: 'minecraft:cooked_salmon' })
    event.remove({ id: 'minecraft:cooked_salmon_from_smoking' })

    //#endregion

    //#region Выход: Светящийся арбуз

    event.shaped('minecraft:glistering_melon_slice', [
        'AAA', 
        'ABA',
        'AAA'  
    ], {
        A: '#forge:nuggets/gold', 
        B: 'tfc:food/melon_slice'   
    }).id('minecraft:glistering_melon_slice')

    event.recipes.gtceu.chemical_reactor('glistening_melon_slice')             
        .itemInputs('tfc:food/melon_slice', '6x #forge:nuggets/gold')
        .itemOutputs('minecraft:glistering_melon_slice')
        .duration(50)
        .EUt(30)

    event.recipes.gtceu.large_chemical_reactor('glistening_melon_slice')             
        .itemInputs('tfc:food/melon_slice', '6x #forge:nuggets/gold')
        .itemOutputs('minecraft:glistering_melon_slice')
        .duration(50)
        .EUt(30)

    //#endregion

    //#region Выход: Улей

    event.remove({ id: 'minecraft:beehive' })

    //#endregion

    //#region Выход: Блок сот

    event.remove({ id: 'minecraft:honeycomb_block' })

    //#endregion

    //#region Выход: Пузырек с медом

    event.remove({ id: 'minecraft:honey_bottle' })

    //#endregion

    //#region Выход: Блок меда

    event.remove({ id: 'minecraft:honey_block' })

    //#endregion

    //#region Выход: Сухая губка

    event.recipes.tfc.heating('minecraft:wet_sponge', 790)
        .resultItem('minecraft:sponge')
        .id('tfg:minecraft/heating/sponge')

    //#endregion

    //#region Выход: Прожаренный фрукт хоруса

    event.remove({ id: 'minecraft:popped_chorus_fruit' })

    //#endregion

    //#region Выход: Фиолетовый блок

    event.remove({ id: 'gtceu:compressor/purpur_block' })

    //#endregion

    //#region Выход: Фиолетовый блок ступень

    event.remove({ id: 'minecraft:purpur_stairs' })
    event.remove({ id: 'minecraft:purpur_stairs_from_purpur_block_stonecutting' })

    //#endregion

    //#region Выход: Фиолетовый блок плита

    event.remove({ id: 'minecraft:purpur_slab' })
    event.remove({ id: 'gtceu:shaped/purpur_slab_saw' })
    event.remove({ id: 'minecraft:purpur_slab_from_purpur_block_stonecutting' })

    //#endregion

    //#region Выход: Фиолетовый блок столб

    event.remove({ id: 'minecraft:purpur_pillar_from_purpur_block_stonecutting' })

    //#endregion

    //#region Выход: Ножницы

    event.remove({ id: 'minecraft:shears' })

    //#endregion

    //#region Выход: Светильник

    event.remove({ id: 'minecraft:lantern' })

    //#endregion

    //#region Выход: Цепи

    event.remove({ id: 'minecraft:chain' })

    //#endregion

    //#region Выход: Светильник адский

    event.remove({ id: 'minecraft:soul_lantern' })

    //#endregion

    //#region Выход: Стол для ковки

    event.remove({ id: 'minecraft:smithing_table' })

    //#endregion

    //#region Выход: Плавильня

    event.remove({ id: 'minecraft:blast_furnace' })

    //#endregion

    //#region Выход: Коптильня

    event.remove({ id: 'minecraft:blast_furnace' })

    //#endregion

    //#region Выход: Тонированное стекло

    event.recipes.gtceu.alloy_smelter('tfg:minecraft/tinted_glass')
        .itemInputs('minecraft:glass', 'tfc:powder/amethyst')
        .itemOutputs('minecraft:tinted_glass')
        .duration(260)
        .EUt(16)

    //#endregion

    //#region Выход: Пустая карта

    event.recipes.gtceu.assembler('map')             
        .itemInputs('8x minecraft:paper', 'firmaciv:firmaciv_compass')
        .itemOutputs('minecraft:map')
        .duration(100)
        .EUt(4)

    //#endregion

    //#region Выход: Жаренный картофель

    event.remove({ id: 'minecraft:baked_potato' })
    event.remove({ id: 'minecraft:baked_potato_from_smoking' })

    //#endregion

    //#region Выход: Декор ваза

    event.remove({ id: 'minecraft:decorated_pot_simple' })

    //#endregion

    //#region Выход: Резные книжные полки

    event.remove({ id: 'minecraft:chiseled_bookshelf' })

    //#endregion

    //#region Выход: Книжные полки

    event.remove({ id: 'gtceu:assembler/bookshelf' })

    //#endregion

    //#region Выход: Стержень энда

    event.remove({ id: 'minecraft:end_rod' })
    event.remove({ id: 'gtceu:assembler/end_rod' })

    //#endregion

    //#region Выход: Кисточка

    event.remove({ id: 'minecraft:brush' })

    //#endregion

    //#region Выход: Книга

    event.remove({ id: 'gtceu:extractor/bookshelf_extraction' })

    event.shapeless('minecraft:book', [
        'minecraft:paper', 'minecraft:paper', 'minecraft:paper', 'minecraft:leather'
    ]).id('minecraft:book')

    //#endregion

    //#region Выход: Трибуна

    event.remove({ id: 'tfc:crafting/vanilla/lectern' })

    //#endregion

    //#region Выход: Золотое яблоко

    event.remove({ id: 'minecraft:golden_apple' })

    event.recipes.gtceu.chemical_reactor('golden_apple')             
        .itemInputs('tfc:food/green_apple', '8x #forge:ingots/gold')
        .itemOutputs('minecraft:golden_apple')
        .duration(50)
        .EUt(30)

    event.recipes.gtceu.large_chemical_reactor('golden_apple')             
        .itemInputs('tfc:food/green_apple', '8x #forge:ingots/gold')
        .itemOutputs('minecraft:golden_apple')
        .duration(50)
        .EUt(30)

    event.recipes.gtceu.chemical_reactor('golden_apple_1')             
        .itemInputs('tfc:food/red_apple', '8x #forge:ingots/gold')
        .itemOutputs('minecraft:golden_apple')
        .duration(50)
        .EUt(30)

    event.recipes.gtceu.large_chemical_reactor('golden_apple_1')             
        .itemInputs('tfc:food/red_apple', '8x #forge:ingots/gold')
        .itemOutputs('minecraft:golden_apple')
        .duration(50)
        .EUt(30)

    //#endregion

    //#region Выход: Зачарованное золотое яблоко

    event.recipes.gtceu.chemical_reactor('notch_apple')             
        .itemInputs('tfc:food/green_apple', '8x minecraft:gold_block')
        .itemOutputs('minecraft:enchanted_golden_apple')
        .duration(50)
        .EUt(30)

    event.recipes.gtceu.large_chemical_reactor('notch_apple')             
        .itemInputs('tfc:food/green_apple', '8x minecraft:gold_block')
        .itemOutputs('minecraft:enchanted_golden_apple')
        .duration(50)
        .EUt(30)

    event.recipes.gtceu.chemical_reactor('notch_apple_1')             
        .itemInputs('tfc:food/red_apple', '8x minecraft:gold_block')
        .itemOutputs('minecraft:enchanted_golden_apple')
        .duration(50)
        .EUt(30)

    event.recipes.gtceu.large_chemical_reactor('notch_apple_1')             
        .itemInputs('tfc:food/red_apple', '8x minecraft:gold_block')
        .itemOutputs('minecraft:enchanted_golden_apple')
        .duration(50)
        .EUt(30)

    //#endregion

    //#region Кольчуга
    
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

    //#endregion

    //#region Железная броня

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

    //#endregion

    //#region Золотая броня

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

    //#endregion

    //#region Алмазная броня
   
    event.remove({id: 'gtceu:macerator/macerate_diamond_boots'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_leggings'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_chestplate'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_helmet'})
    event.remove({id: 'gtceu:shaped/diamond_horse_armor'})
    event.remove({id: 'gtceu:macerator/macerate_diamond_horse_armor'})

    //#endregion

    //#region Незеритовая броня
    
    event.remove({id: 'minecraft:netherite_helmet_smithing'})
    event.remove({id: 'minecraft:netherite_chestplate_smithing'})
    event.remove({id: 'minecraft:netherite_leggings_smithing'})
    event.remove({id: 'minecraft:netherite_boots_smithing'})

    //#endregion

    //#region Деревянные инструменты
    
    event.remove({id: 'gtceu:macerator/macerate_wooden_sword'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_axe'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_wooden_hoe'})

    //#endregion

    //#region Каменные инстурменты
    
    event.remove({id: 'gtceu:macerator/macerate_stone_sword'})
    event.remove({id: 'gtceu:macerator/macerate_stone_pickaxe'})
    event.remove({id: 'gtceu:macerator/macerate_stone_axe'})
    event.remove({id: 'gtceu:macerator/macerate_stone_shovel'})
    event.remove({id: 'gtceu:macerator/macerate_stone_hoe'})

    //#endregion

    //#region Железные инструменты
    
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

    //#endregion

    //#region Золотые инструменты
    
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

    //#endregion

    //#region Алмазные инструменты
    
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

    //#endregion

    //#region Незеритовые инструменты
    
    event.remove({id: 'minecraft:netherite_sword_smithing'})
    event.remove({id: 'minecraft:netherite_pickaxe_smithing'})
    event.remove({id: 'minecraft:netherite_axe_smithing'})
    event.remove({id: 'minecraft:netherite_shovel_smithing'})
    event.remove({id: 'minecraft:netherite_hoe_smithing'})

    //#endregion

    //#region Выход: Компаратор

    event.remove({id: 'minecraft:comparator'})
    event.remove({id: 'gtceu:shaped/comparator_quartzite'})
    event.remove({id: 'gtceu:shaped/comparator_certus'})
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
    }).id('tfg:shaped/comparator_nether_quartz');

    //#endregion

    //#region Выход: Крюк

    event.remove({id: 'minecraft:tripwire_hook'})
    event.remove({id: 'tfc:crafting/vanilla/redstone/tripwire_hook'})
    event.remove({id: 'gtceu:assembler/tripwire_hook_wrought_iron'})
    event.remove({id: 'gtceu:assembler/tripwire_hook_iron'})

    event.shapeless('minecraft:tripwire_hook', [
        '#forge:rods/wood',
        '#forge:rings/wrought_iron',
        '#forge:small_springs'
    ]).id('tfg:shaped/tripwire_hook')

    event.recipes.gtceu.assembler('tripwire_hook')             
        .itemInputs('#forge:rods/wood', '#forge:rings/wrought_iron', '#forge:small_springs')
        .itemOutputs('2x minecraft:tripwire_hook')
        .duration(100)
        .EUt(4)

    //#endregion

    //#region Выход: Рамка

    event.remove({ id: 'minecraft:item_frame' })

    event.recipes.gtceu.assembler('item_frame')             
        .itemInputs('8x #tfc:lumber', 'minecraft:leather')
        .itemOutputs('8x minecraft:item_frame')
        .duration(100)
        .EUt(4)

    //#endregion

    //#region Выход: Свето-рамка

    event.shapeless('minecraft:glow_item_frame', [
        'minecraft:item_frame',
        '#forge:dusts/glowstone'
    ]).id('minecraft:glow_item_frame')

    event.recipes.gtceu.assembler('tfg/glow_item_frame')             
        .itemInputs('2x minecraft:item_frame', '#forge:dusts/glowstone')
        .itemOutputs('2x minecraft:glow_item_frame')
        .duration(100)
        .EUt(4)

    //#endregion

    //#region Выход: Картина

    event.recipes.gtceu.assembler('painting')             
        .itemInputs('#tfc:high_quality_cloth','8x #forge:rods/wood')
        .itemOutputs('2x minecraft:painting')
        .circuit(1)
        .duration(100)
        .EUt(4)

    //#endregion

    //#region Выход: Факел

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

    //#region Выход: Палки

    event.remove({id: 'minecraft:stick'})

    //#endregion

    //#region Выход: Огниво

    event.remove({id: 'tfc:crafting/vanilla/flint_and_steel'})
    event.remove({id: 'ad_astra:recipes/flint_and_steel'})

    //#endregion

    //#region Выход: Наковальни

    event.remove({id: 'gtceu:alloy_smelter/anvil'})
    event.remove({id: 'gtceu:fluid_solidifier/solidify_anvil'})

    //#endregion

    //#region Выход: Железные прутья

    event.remove({id: 'gtceu:shaped/iron_bars'})
    event.remove({id: 'gtceu:assembler/iron_nars'})

    //#endregion

    //#region Выход: Печь

    event.remove({ id: 'gtceu:assembler/furnace' })

    //#endregion

    //#region Выход: Вагонетка с печью

    event.remove({ id: 'minecraft:furnace_minecart' })
    event.remove({ id: 'gtceu:assembler/furnace_minecart' })

    //#endregion

    //#region Выход: Повторитель

    event.remove({id: 'minecraft:repeater'})

    //#endregion

    //#region Выход: Ведро

    event.remove({id: 'gtceu:bender/bucket'})
    event.remove({id: 'gtceu:shaped/iron_bucket'})

    event.recipes.tfc.welding('minecraft:bucket', 'tfc:metal/bucket/red_steel', 'tfc:metal/bucket/blue_steel', 6)
        .id('tfg:anvil/vanilla_bucket')

    event.recipes.gtceu.assembler('tfg:vanilla/bucket')             
        .itemInputs('#forge:plates/red_steel', '#forge:plates/blue_steel')
        .circuit(6)
        .itemOutputs('minecraft:bucket')
        .duration(100)
        .EUt(16)

    //#endregion

    //#region Выход: Седло

    event.remove({id: 'gtceu:shaped/saddle'})

    //#endregion

    //#region Выход: Блок лазурита

    event.remove({ id: 'tfc:crafting/vanilla/lapis_block' })

    //#endregion

    //#region Выход: Вагонетка

    event.remove({ id: 'minecraft:minecart' })

    event.shaped('minecraft:minecart', [
        'A A',
        'AAA',
        'B B'
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: 'gtceu:iron_minecart_wheels'
    }).id('tfc:crafting/vanilla/redstone/minecart')

    event.shaped('minecraft:minecart', [
        'A A',
        'AAA',
        'B B'
    ], {
        A: 'gtceu:wrought_iron_plate',
        B: 'gtceu:steel_minecart_wheels'
    }).id('tfc:crafting/vanilla/redstone/steel_minecart')

    event.recipes.gtceu.assembler('minecart')             
        .itemInputs('3x #forge:plates/wrought_iron', '3x #forge:rings/wrought_iron')
        .itemOutputs('minecraft:minecart')
        .duration(100)
        .EUt(2)

    //#endregion

    //#region Выход: Тигель
    event.remove({ id: 'tfc:crafting/vanilla/cauldron' })
    
    event.shaped('minecraft:cauldron', [
        'A A', 
        'ABA',
        'AAA'  
    ], {
        A: '#forge:plates/wrought_iron', 
        B: '#tfc:hammers'  
    }).id('gtceu:shaped/cauldron')

    event.recipes.gtceu.assembler('cauldron')             
        .itemInputs('7x #forge:plates/wrought_iron')
        .circuit(10)
        .itemOutputs('minecraft:cauldron')
        .duration(700)
        .EUt(4)

    //#endregion

    //#region Выход: Детектор света
    
    event.remove({ id: 'tfc:crafting/vanilla/redstone/daylight_detector' })

    //#endregion

    //#region Выход: Воронка
    
    event.remove({ id: 'gtceu:assembler/hopper_iron' })
    event.remove({ id: 'tfc:crafting/vanilla/redstone/steel_hopper' })
    event.remove({ id: 'tfc:crafting/vanilla/redstone/hopper' })

    event.shaped('minecraft:hopper', [
        'ABA', 
        'ACA',
        'DAE'  
    ], {
        A: '#forge:plates/wrought_iron',
        B: '#forge:chests/wooden',
        C: '#forge:gears/wrought_iron',
        D: '#forge:tools/wrenches',
        E: '#forge:tools/hammers',
    }).id('gtceu:shaped/hopper')

    //#endregion

    //#region Выход: Поршень
    
    event.remove({ id: 'minecraft:piston' })
    event.remove({ id: 'gtceu:shaped/piston_titanium' })
    event.remove({ id: 'gtceu:shaped/piston_steel' })
    event.remove({ id: 'gtceu:shaped/piston_bronze' })
    event.remove({ id: 'gtceu:shaped/piston_aluminium' })

    event.remove({ id: 'gtceu:assembler/piston_titanium' })
    event.remove({ id: 'gtceu:assembler/piston_steel' })
    event.remove({ id: 'gtceu:assembler/piston_iron' })
    event.remove({ id: 'gtceu:assembler/piston_bronze' })
    event.remove({ id: 'gtceu:assembler/piston_aluminium' })

    event.recipes.gtceu.assembler('piston')             
        .itemInputs('#forge:plates/wrought_iron', '3x tfc:wood/planks/acacia', '4x #tfc:rock/raw')
        .itemOutputs('4x minecraft:piston')
        .duration(100)
        .EUt(16)

    //#endregion

    //#region Выход: Кожа
        
    event.remove({ id: 'minecraft:leather' })

    //#endregion

    //#region Выход: Шерсть

    event.recipes.gtceu.assembler('wool_from_string')             
        .itemInputs('8x #forge:string')
        .circuit(4)
        .itemOutputs('minecraft:white_wool')
        .duration(100)
        .EUt(4)

    
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.remove({ id: `minecraft:dye_${dye}_wool` })
    })

    //#endregion

    //#region Выход: Свечи

    event.remove({ id: `minecraft:candle` })

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.remove({ id: `minecraft:${dye}_candle` })
    })

    //#endregion

    //#region Выход: Ковры
    
    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        
        event.remove({ id: `minecraft:dye_${dye}_carpet` })

        event.shapeless(`2x minecraft:${dye}_carpet`, [
            '#tfc:saws',
            `minecraft:${dye}_wool`
        ]).id(`minecraft:${dye}_carpet`)

        if (dye != 'white') {
            event.recipes.gtceu.chemical_bath(`tfg:${dye}_carpet`)             
                .itemInputs(`minecraft:white_carpet`)
                .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 72))
                .itemOutputs(`minecraft:${dye}_carpet`)
                .duration(300)
                .EUt(4)
        }
    })

    //#endregion

    //#region Выход: Кровати

    event.recipes.gtceu.chemical_bath(`bed_decolor`)             
        .itemInputs('#tfc:colored_bed')
        .inputFluids(Fluid.of(`gtceu:chlorine`, 72))
        .itemOutputs(`minecraft:white_bed`)
        .duration(300)
        .EUt(4)

    global.MINECRAFT_DYE_NAMES.forEach(dye => {
        event.remove({ id: `minecraft:${dye}_bed` })
        event.remove({ id: `minecraft:dye_${dye}_bed` })

        if (dye != "white")
            event.recipes.gtceu.chemical_bath(`${dye}_bed`)             
                .itemInputs(`minecraft:white_bed`)
                .inputFluids(Fluid.of(`gtceu:${dye}_dye`, 216))
                .itemOutputs(`minecraft:${dye}_bed`)
                .duration(300)
                .EUt(4)
    })

    //#endregion

    //#region Выход: Арбалет

    event.remove({ id: 'minecraft:crossbow' })

    //#endregion

    //#region Выход: Лук

    event.recipes.gtceu.assembler('bow')             
        .itemInputs('3x #forge:string', '3x #forge:rods/wooden')
        .itemOutputs('minecraft:bow')
        .duration(100)
        .EUt(4)

    //#endregion

    //#region Выход: Наблюдатель

    event.remove({ id: 'minecraft:observer' })

    event.recipes.gtceu.assembler('observer_certus_quartz')             
        .itemInputs('6x #forge:cobblestone', '2x minecraft:redstone', '#forge:plates/certus_quartz')
        .itemOutputs('minecraft:observer')
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.assembler('observer_nether_quartz')             
        .itemInputs('6x #forge:cobblestone', '2x minecraft:redstone', '#forge:plates/nether_quartz')
        .itemOutputs('minecraft:observer')
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.assembler('observer_quartzite')             
        .itemInputs('6x #forge:cobblestone', '2x minecraft:redstone', '#forge:plates/quartzite')
        .itemOutputs('minecraft:observer')
        .duration(100)
        .EUt(30)

    //#endregion

    //#region Выход: Раздатчик

    event.recipes.gtceu.assembler('dispenser')             
        .itemInputs('7x #forge:cobblestone', 'minecraft:redstone', 'minecraft:bow')
        .circuit(1)
        .itemOutputs('minecraft:dispenser')
        .duration(100)
        .EUt(30)

    //#endregion

    //#region Выход: Выбрасыватель

    event.recipes.gtceu.assembler('dropper')             
        .itemInputs('7x #forge:cobblestone', '2x minecraft:redstone')
        .circuit(2)
        .itemOutputs('minecraft:dropper')
        .duration(100)
        .EUt(30)

    //#endregion

    //#region Выход: Рельсы

    event.remove({ id: 'tfc:crafting/vanilla/redstone/steel_rail' })

    event.recipes.gtceu.assembler('rail')             
        .itemInputs('6x #forge:rods/wrought_iron', '#forge:rods/wooden')
        .circuit(1)
        .itemOutputs('32x minecraft:rail')
        .duration(100)
        .EUt(30)

    //#endregion

    //#region Выход: Заряженные рельсы

    event.remove({ id: 'minecraft:powered_rail' })

    event.recipes.gtceu.assembler('powered_rail')             
        .itemInputs('6x #forge:rods/gold', '2x #forge:rods/wooden', '#forge:dusts/redstone')
        .circuit(1)
        .itemOutputs('16x minecraft:powered_rail')
        .duration(100)
        .EUt(30)

    //#endregion

    //#region Выход: Активаторные рельсы

    event.remove({ id: 'tfc:crafting/vanilla/redstone/steel_activator_rail' })
    event.remove({ id: 'minecraft:activator_rail' })

    event.recipes.gtceu.assembler('activator_rail')             
        .itemInputs('6x #forge:rods/wrought_iron', '#forge:rods/wooden', 'minecraft:redstone_torch')
        .circuit(1)
        .itemOutputs('4x minecraft:activator_rail')
        .duration(100)
        .EUt(30)

    //#endregion

    //#region Выход: Нажимные рельсы

    event.remove({ id: 'tfc:crafting/vanilla/redstone/steel_detector_rail' })
    event.remove({ id: 'minecraft:detector_rail' })

    event.recipes.gtceu.assembler('detector_rail')             
        .itemInputs('6x #forge:rods/wrought_iron', '#forge:rods/wooden', '#minecraft:stone_pressure_plates')
        .circuit(1)
        .itemOutputs('4x minecraft:detector_rail')
        .duration(100)
        .EUt(30)

    //#endregion

    //#region Выход: Веревка

    event.remove({ id: 'gtceu:assembler/lead' })

    event.shaped('minecraft:lead', [
        ' AA', 
        ' BA',
        'A  '  
    ], {
        A: '#forge:string',
        B: '#forge:rings/wrought_iron'
    }).id('minecraft:lead')

    //#endregion

    //#region Выход: Варочная стойка

    event.remove({ id: 'minecraft:brewing_stand' })

    //#endregion

    //#region Выход: Кирпич

    event.remove({ id: 'minecraft:brick' })

    event.shaped('minecraft:bricks', [
        'BAB', 
        'ABA',
        'BAB'  
    ], {
        A: 'tfc:mortar',
        B: 'minecraft:brick'
    }).id('tfc:crafting/bricks')

    //#endregion

    //#region Выъод: Незер кирпич

    event.remove({ id: 'gtceu:extractor/nether_bricks_extraction' })
    event.remove({ id: 'gtceu:alloy_smelter/form_nether_brick' })
    
    //#endregion

    //#region Выход: Незер бревна

    event.remove({ id: 'minecraft:stripped_crimson_stem_via_vanilla_stripping' })
    event.remove({ id: 'minecraft:stripped_crimson_hyphae_via_vanilla_stripping' })

    event.remove({ id: 'minecraft:stripped_warped_stem_via_vanilla_stripping' })
    event.remove({ id: 'minecraft:stripped_warped_hyphae_via_vanilla_stripping' })

    //#endregion

    //#region Выход: Якорь возрождения

    event.remove({ id: 'minecraft:respawn_anchor' })

    //#endregion

    //#region Выход: Элитра

    // Ну и херь я придумал
    event.recipes.gtceu.assembler('tfg:minecraft/elytra')             
        .itemInputs('6x #forge:plates/polyvinyl_butyral', '2x #forge:rings/titanium', '2x #forge:rods/titanium', '4x #forge:single_cables/aluminium')
        .circuit(32)
        .itemOutputs(Item.of('minecraft:elytra', "{Damage:0,display:{Name:'{\"text\":\"Wings of Gods\",\"italic\":true}'}}"))
        .duration(1600)
        .EUt(666)

    event.recipes.gtceu.assembler('tfg:minecraft/elytra_repairing')             
        .itemInputs('6x #forge:plates/polyvinyl_butyral', Item.of('minecraft:elytra', '{Damage:431}').strongNBT())
        .circuit(32)
        .itemOutputs(Item.of('minecraft:elytra', "{Damage:0,display:{Name:'{\"text\":\"Wings of Gods\",\"italic\":true}'}}"))
        .duration(1600)
        .EUt(120)

    //#endregion

    //#region Исправление дерьма с медью (Однажды разраб GTCEu вспомнит, лучше бы забыл)

    //event.smelting('tfc:metal/ingot/copper', 'minecraft:raw_copper')
    //    .id('minecraft:copper_ingot_from_smelting_raw_copper')

    event.remove({ id: 'minecraft:copper_ingot_from_blasting_raw_copper' })
    event.remove({ id: 'minecraft:copper_ingot_from_waxed_copper_block' })
    event.remove({ id: 'minecraft:copper_ingot' })

    event.remove({ id: 'minecraft:raw_copper_block' })
    event.remove({ id: 'minecraft:raw_copper' })

    //#endregion

    //#region Исправление дерьма с золотом (Однажды разраб GTCEu вспомнит, лучше бы забыл)

    //event.smelting('tfc:metal/ingot/gold', 'minecraft:raw_gold')
    //    .id('minecraft:copper_ingot_from_smelting_raw_gold')

    // event.remove({ id: 'minecraft:gold_ingot_from_smelting_raw_gold' })
    event.remove({ id: 'minecraft:gold_ingot_from_blasting_raw_gold' })

    event.remove({ id: 'minecraft:raw_gold_block' })
    event.remove({ id: 'minecraft:raw_gold' })

    //#endregion

    //#region Исправление дерьма с железом (Однажды разраб GTCEu вспомнит, лучше бы забыл)

    event.remove({ id: 'minecraft:raw_iron_block' })
    event.remove({ id: 'minecraft:raw_iron' })

    //#endregion

    //#region Glowstone

    event.recipes.gtceu.mixer('gtceu:lv_glowstone')
		.inputFluids(Fluid.of('gtceu:creosote', 1000))
		.itemInputs('gtceu:gold_dust', 'minecraft:redstone', 'gtceu:sulfur_dust', 'gtceu:coal_dust')
		.itemOutputs('minecraft:glowstone_dust')
		.circuit(32)
		.duration(1200)
		.EUt(32)

    //#endregion
	
	// Nether Brick
	
	event.smelting('minecraft:nether_brick', 'minecraft:netherrack')
}
