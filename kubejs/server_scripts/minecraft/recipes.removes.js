// priority: 0
"use strict";

function removeMinecraftRecipes(event) {

	global.MINECRAFT_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})
	
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

	//#endregion

	//#region Выход: Сланцевый булыжник плита

	event.remove({ id: 'minecraft:cobbled_deepslate_slab' })

	//#endregion

	//#region Выход: Сланцевый булыжник стена

	event.remove({ id: 'minecraft:cobbled_deepslate_wall' })

	//#endregion

	//#region Выход: Ячеистый сланец

	event.remove({ id: 'minecraft:deepslate_tiles' })
	event.remove({ id: 'minecraft:deepslate_tiles_from_polished_deepslate_stonecutting' })
	event.remove({ id: 'minecraft:deepslate_tiles_from_cobbled_deepslate_stonecutting' })

	//#endregion

	//#region Выход: Ячеистый сланец ступень

	event.remove({ id: 'minecraft:deepslate_tile_stairs' })
	event.remove({ id: 'minecraft:deepslate_tile_stairs_from_polished_deepslate_stonecutting' })
	event.remove({ id: 'minecraft:deepslate_tile_stairs_from_deepslate_bricks_stonecutting' })
	event.remove({ id: 'minecraft:deepslate_tile_stairs_from_cobbled_deepslate_stonecutting' })

	//#endregion

	//#region Выход: Ячеистый сланец плита

	event.remove({ id: 'minecraft:deepslate_tile_slab' })
	event.remove({ id: 'minecraft:deepslate_tile_slab_from_polished_deepslate_stonecutting' })
	event.remove({ id: 'minecraft:deepslate_tile_slab_from_deepslate_bricks_stonecutting' })
	event.remove({ id: 'minecraft:deepslate_tile_slab_from_cobbled_deepslate_stonecutting' })


	//#endregion

	//#region Выход: Ячеистый сланец стена

	event.remove({ id: 'minecraft:deepslate_tile_wall' })
	event.remove({ id: 'minecraft:deepslate_tile_wall_from_polished_deepslate_stonecutting' })
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

	//#endregion

	//#region Выход: Сланцевые кирпичи плита

	event.remove({ id: 'minecraft:deepslate_brick_slab' })
	event.remove({ id: 'minecraft:deepslate_brick_slab_from_polished_deepslate_stonecutting' })
	event.remove({ id: 'minecraft:deepslate_brick_slab_from_cobbled_deepslate_stonecutting' })

	//#endregion

	//#region Выход: Сланцевые кирпичи стена

	event.remove({ id: 'minecraft:deepslate_brick_wall' })
	event.remove({ id: 'minecraft:deepslate_brick_wall_from_polished_deepslate_stonecutting' })
	event.remove({ id: 'minecraft:deepslate_brick_wall_from_cobbled_deepslate_stonecutting' })

	//#endregion

	//#region Выход: Полированный сланец

	event.remove({ id: 'minecraft:polished_deepslate' })
	event.remove({ id: 'minecraft:polished_deepslate_from_cobbled_deepslate_stonecutting' })

	//#endregion

	//#region Выход: Полированный сланец ступень

	event.remove({ id: 'minecraft:polished_deepslate_stairs' })
	event.remove({ id: 'minecraft:polished_deepslate_stairs_from_cobbled_deepslate_stonecutting' })

	//#endregion

	//#region Выход: Полированный сланец плита

	event.remove({ id: 'minecraft:polished_deepslate_slab' })
	event.remove({ id: 'minecraft:polished_deepslate_slab_from_cobbled_deepslate_stonecutting' })

	//#endregion

	//#region Выход: Полированный сланец стена

	event.remove({ id: 'minecraft:polished_deepslate_wall' })
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
	event.remove({ id: 'minecraft:smooth_quartz' })

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

	event.remove({ id: 'gtceu:centrifuge/endstone_separation' })

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
	event.remove({ id: 'gtceu:forge_hammer/pointed_dripstone_from_dripstone_block' })
	event.remove({ id: 'gtceu:compressor/dripstone_block_from_pointed_dripstone' })

	//#endregion

	event.remove({ id: 'ae2:entropy/cool/grass_block_dirt' })

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
 
	event.remove({ id: 'minecraft:arrow' })
	event.remove({ output: 'minecraft:tipped_arrow' })
	
	//#endregion

	//#region Выход: Камнерез

	event.remove({ id: 'minecraft:stonecutter' })

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
		
	//#region Выход: Ступень из черного камня

	event.remove({ id: 'minecraft:blackstone_stairs' })

	//#endregion

	//#region Выход: Полублок из черного камня

	event.remove({ id: 'minecraft:blackstone_slab' })

	//#endregion

	//#region Выход: Стена из черного камня

	event.remove({ id: 'minecraft:blackstone_wall' })

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

	//#endregion

	//#region Выход: Полублоки из гладкого черного камня

	event.remove({ id: 'minecraft:polished_blackstone_slab' })
	event.remove({ id: 'minecraft:polished_blackstone_slab_from_blackstone_stonecutting' })

	//#endregion

	//#region Выход: Стена из гладкого черного камня

	event.remove({ id: 'minecraft:polished_blackstone_wall' })
	event.remove({ id: 'minecraft:polished_blackstone_wall_from_blackstone_stonecutting' })

	//#endregion

	//#region Выход: Кирпичи из черного камня

	event.remove({ id: 'minecraft:polished_blackstone_bricks' })
	event.remove({ id: 'minecraft:polished_blackstone_bricks_from_blackstone_stonecutting' })

	//#endregion

	//#region Выход: Потрескавшиеся кирпичи из черного камня

	event.remove({ id: 'minecraft:cracked_polished_blackstone_bricks' })

	//#endregion

	//#region Выход: Ступени из кирпичей из черного камня

	event.remove({ id: 'minecraft:polished_blackstone_brick_stairs' })
	event.remove({ id: 'minecraft:polished_blackstone_brick_stairs_from_blackstone_stonecutting' })
	event.remove({ id: 'minecraft:polished_blackstone_brick_stairs_from_polished_blackstone_stonecutting' })

	//#endregion

	//#region Выход: Полублоки из кирпичей из черного камня

	event.remove({ id: 'minecraft:polished_blackstone_brick_slab' })
	event.remove({ id: 'minecraft:polished_blackstone_brick_slab_from_blackstone_stonecutting' })
	event.remove({ id: 'minecraft:polished_blackstone_brick_slab_from_polished_blackstone_stonecutting' })

	//#endregion

	//#region Выход: Стена из кирпичей из черного камня

	event.remove({ id: 'minecraft:polished_blackstone_brick_wall' })
	event.remove({ id: 'minecraft:polished_blackstone_brick_wall_from_polished_blackstone_stonecutting' })
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
	
	event.remove({ id: 'minecraft:cut_copper_slab' })
	event.remove({ id: 'minecraft:cut_copper_slab_from_copper_block_stonecutting' })
	
	event.remove({ id: 'minecraft:exposed_cut_copper' })
	event.remove({ id: 'minecraft:exposed_cut_copper_stairs' })
	event.remove({ id: 'minecraft:exposed_cut_copper_slab' })
	
	event.remove({ id: 'minecraft:weathered_cut_copper' })
	event.remove({ id: 'minecraft:weathered_cut_copper_stairs' })
	event.remove({ id: 'minecraft:weathered_cut_copper_slab' })
	
	event.remove({ id: 'minecraft:oxidized_cut_copper' })
	event.remove({ id: 'minecraft:oxidized_cut_copper_stairs' })
	event.remove({ id: 'minecraft:oxidized_cut_copper_slab' })

	//#endregion

	//#region В меде

	event.remove({ id: 'minecraft:waxed_copper_block_from_honeycomb' })

	event.remove({ id: 'minecraft:waxed_cut_copper_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_cut_copper' })
	
	event.remove({ id: 'minecraft:waxed_cut_copper_stairs_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_cut_copper_stairs' })
	
	event.remove({ id: 'minecraft:waxed_cut_copper_slab_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_cut_copper_slab' })
	
	event.remove({ id: 'minecraft:waxed_exposed_copper_from_honeycomb' })
	
	event.remove({ id: 'minecraft:waxed_exposed_cut_copper_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_exposed_cut_copper' })
	
	event.remove({ id: 'minecraft:waxed_exposed_cut_copper_stairs_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_exposed_cut_copper_stairs' })
	
	event.remove({ id: 'minecraft:waxed_exposed_cut_copper_slab_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_exposed_cut_copper_slab' })
	
	event.remove({ id: 'minecraft:waxed_weathered_copper_from_honeycomb' })
	
	event.remove({ id: 'minecraft:waxed_weathered_cut_copper_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_weathered_cut_copper' })
	
	event.remove({ id: 'minecraft:waxed_weathered_cut_copper_stairs_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_weathered_cut_copper_stairs' })
	
	event.remove({ id: 'minecraft:waxed_weathered_cut_copper_slab_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_weathered_cut_copper_slab' })
	
	event.remove({ id: 'minecraft:waxed_oxidized_copper_from_honeycomb' })
	
	event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_oxidized_cut_copper' })
	
	event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_stairs_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_stairs' })
	
	event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_slab_from_honeycomb' })
	event.remove({ id: 'minecraft:waxed_oxidized_cut_copper_slab' })

	//#endregion
	
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

	//#region Выход: Плот с сундуком из бамбука

	event.remove({ id: 'minecraft:bamboo_chest_raft' })

	//#endregion

	//#region Выход: Таблички из бамбука

	event.remove({ id: 'minecraft:bamboo_sign' })
	event.remove({ id: 'minecraft:bamboo_hanging_sign' })
	event.remove({ id: `minecraft:bamboo_button` })

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

	//#endregion

	//#region Выход: Сахар

	event.remove({ id: 'gtceu:shaped/sugar' })
	event.remove({ id: 'minecraft:sugar_from_honey_bottle' })
	removeMaceratorRecipe(event, 'macerate_sugar_cane')

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
	removeMaceratorRecipe(event, 'macerate_pumpkin')

	//#endregion

	//#region Выход: Семена арбуза

	removeMaceratorRecipe(event, 'macerate_melon_slice')
	removeMaceratorRecipe(event, 'macerate_melon_block')

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

	//#region Выход: Железный люк

	event.remove({ id: 'gtceu:assembler/iron_trapdoor' })

	//#endregion

	//#region Выход: Железная нажимная плита

	event.remove({ id: 'tfc:crafting/vanilla/redstone/heavy_weighted_pressure_plate' })

	//#endregion
	
	//#region Выход: Жаренный Cod

	event.remove({ id: 'minecraft:cooked_cod' })
	event.remove({ id: 'minecraft:cooked_cod_from_smoking' })

	//#endregion

	//#region Выход: Жаренный Salmon

	event.remove({ id: 'minecraft:cooked_salmon' })
	event.remove({ id: 'minecraft:cooked_salmon_from_smoking' })

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
	event.remove({ id: 'tfc:crafting/vanilla/smithing_table' })
	event.remove({ id: 'gtceu:shaped/smithing_table' })
	event.remove({ id: 'gtceu:assembler/smithing_table' })

	//#endregion

	//#region Выход: Плавильня

	event.remove({ id: 'minecraft:blast_furnace' })

	//#endregion

	//#region Выход: Коптильня

	event.remove({ id: 'minecraft:blast_furnace' })

	//#endregion

	//#region Выход: Жаренный картофель

	event.remove({ id: 'minecraft:baked_potato' })
	event.remove({ id: 'minecraft:baked_potato_from_smoking' })

	//#endregion

	//#region Выход: Декор ваза

	event.remove({ id: 'minecraft:decorated_pot_simple' })

	//#endregion

	//#region Выход: Резные книжные полки
	
	event.remove({ id: 'minecraft:book' })
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

	//#endregion

	//#region Выход: Золотое яблоко

	event.remove({ id: 'minecraft:golden_apple' })

	//#endregion

	//#region Кольчуга

	event.remove({ id: 'gtceu:shaped/chainmail_boots' })
	event.remove({ id: 'gtceu:shaped/chainmail_leggings' })
	event.remove({ id: 'gtceu:shaped/chainmail_chestplate' })
	event.remove({ id: 'gtceu:shaped/chainmail_helmet' })
	event.remove({ id: 'gtceu:arc_furnace/arc_chainmail_boots' })
	event.remove({ id: 'gtceu:arc_furnace/arc_chainmail_leggings' })
	event.remove({ id: 'gtceu:arc_furnace/arc_chainmail_chestplate' })
	event.remove({ id: 'gtceu:arc_furnace/arc_chainmail_helmet' })
	removeMaceratorRecipe(event, 'macerate_chainmail_boots')
	removeMaceratorRecipe(event, 'macerate_chainmail_leggings')
	removeMaceratorRecipe(event, 'macerate_chainmail_chestplate')
	removeMaceratorRecipe(event, 'macerate_chainmail_helmet')
	event.remove({ id: 'minecraft:iron_nugget_from_smelting' })
	event.remove({ id: 'minecraft:iron_nugget_from_blasting' })

	//#endregion

	//#region Железная броня

	event.remove({ id: 'gtceu:arc_furnace/arc_iron_boots' })
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_leggings' })
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_chestplate' })
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_helmet' })
	removeMaceratorRecipe(event, 'macerate_iron_boots')
	removeMaceratorRecipe(event, 'macerate_iron_leggings')
	removeMaceratorRecipe(event, 'macerate_iron_chestplate')
	removeMaceratorRecipe(event, 'macerate_iron_helmet')
	removeMaceratorRecipe(event, 'macerate_iron_horse_armor')
	event.remove({ id: 'gtceu:shaped/iron_horse_armor' })
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_horse_armor' })

	//#endregion

	//#region Золотая броня

	event.remove({ id: 'gtceu:arc_furnace/arc_golden_boots' })
	event.remove({ id: 'gtceu:arc_furnace/arc_golden_leggings' })
	event.remove({ id: 'gtceu:arc_furnace/arc_golden_chestplate' })
	event.remove({ id: 'gtceu:arc_furnace/arc_golden_helmet' })
	removeMaceratorRecipe(event, 'macerate_golden_boots')
	removeMaceratorRecipe(event, 'macerate_golden_leggings')
	removeMaceratorRecipe(event, 'macerate_golden_chestplate')
	removeMaceratorRecipe(event, 'macerate_golden_helmet')
	removeMaceratorRecipe(event, 'macerate_golden_horse_armor')
	event.remove({ id: 'gtceu:shaped/golden_horse_armor' })
	event.remove({ id: 'gtceu:arc_furnace/arc_golden_horse_armor' })
	event.remove({ id: 'minecraft:gold_nugget_from_smelting' })
	event.remove({ id: 'minecraft:gold_nugget_from_blasting' })

	//#endregion

	//#region Алмазная броня

	removeMaceratorRecipe(event, 'macerate_diamond_boots')
	removeMaceratorRecipe(event, 'macerate_diamond_leggings')
	removeMaceratorRecipe(event, 'macerate_diamond_chestplate')
	removeMaceratorRecipe(event, 'macerate_diamond_helmet')
	removeMaceratorRecipe(event, 'macerate_diamond_horse_armor')
	event.remove({ id: 'gtceu:shaped/diamond_horse_armor' })

	//#endregion

	//#region Незеритовая броня
	
	event.remove({ id: 'minecraft:netherite_upgrade_smithing_template' })
	event.remove({ id: 'minecraft:netherite_helmet_smithing' })
	event.remove({ id: 'minecraft:netherite_chestplate_smithing' })
	event.remove({ id: 'minecraft:netherite_leggings_smithing' })
	event.remove({ id: 'minecraft:netherite_boots_smithing' })

	//#endregion

	//#region Деревянные инструменты

	removeMaceratorRecipe(event, 'macerate_wooden_sword')
	removeMaceratorRecipe(event, 'macerate_wooden_pickaxe')
	removeMaceratorRecipe(event, 'macerate_wooden_axe')
	removeMaceratorRecipe(event, 'macerate_wooden_shovel')
	removeMaceratorRecipe(event, 'macerate_wooden_hoe')

	//#endregion

	//#region Каменные инстурменты

	removeMaceratorRecipe(event, 'macerate_stone_sword')
	removeMaceratorRecipe(event, 'macerate_stone_pickaxe')
	removeMaceratorRecipe(event, 'macerate_stone_axe')
	removeMaceratorRecipe(event, 'macerate_stone_shovel')
	removeMaceratorRecipe(event, 'macerate_stone_hoe')

	//#endregion

	//#region Железные инструменты

	removeMaceratorRecipe(event, 'macerate_iron_sword')
	removeMaceratorRecipe(event, 'macerate_iron_pickaxe')
	removeMaceratorRecipe(event, 'macerate_iron_axe')
	removeMaceratorRecipe(event, 'macerate_iron_shovel')
	removeMaceratorRecipe(event, 'macerate_iron_hoe')
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_sword' })
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_pickaxe' })
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_axe' })
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_shovel' })
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_hoe' })

	//#endregion

	//#region Золотые инструменты

	removeMaceratorRecipe(event, 'macerate_golden_sword')
	removeMaceratorRecipe(event, 'macerate_golden_pickaxe')
	removeMaceratorRecipe(event, 'macerate_golden_axe')
	removeMaceratorRecipe(event, 'macerate_golden_shovel')
	removeMaceratorRecipe(event, 'macerate_golden_hoe')
	event.remove({ id: 'gtceu:arc_furnace/arc_golden_sword' })
	event.remove({ id: 'gtceu:arc_furnace/arc_golden_pickaxe' })
	event.remove({ id: 'gtceu:arc_furnace/arc_golden_axe' })
	event.remove({ id: 'gtceu:arc_furnace/arc_golden_shovel' })
	event.remove({ id: 'gtceu:arc_furnace/arc_golden_hoe' })

	//#endregion

	//#region Алмазные инструменты

	removeMaceratorRecipe(event, 'macerate_diamond_sword')
	removeMaceratorRecipe(event, 'macerate_diamond_pickaxe')
	removeMaceratorRecipe(event, 'macerate_diamond_axe')
	removeMaceratorRecipe(event, 'macerate_diamond_shovel')
	removeMaceratorRecipe(event, 'macerate_diamond_hoe')
	event.remove({ id: 'gtceu:arc_furnace/arc_diamond_sword' })
	event.remove({ id: 'gtceu:arc_furnace/arc_diamond_pickaxe' })
	event.remove({ id: 'gtceu:arc_furnace/arc_diamond_axe' })
	event.remove({ id: 'gtceu:arc_furnace/arc_diamond_shovel' })
	event.remove({ id: 'gtceu:arc_furnace/arc_diamond_hoe' })

	//#endregion

	//#region Незеритовые инструменты

	event.remove({ id: 'minecraft:netherite_sword_smithing' })
	event.remove({ id: 'minecraft:netherite_pickaxe_smithing' })
	event.remove({ id: 'minecraft:netherite_axe_smithing' })
	event.remove({ id: 'minecraft:netherite_shovel_smithing' })
	event.remove({ id: 'minecraft:netherite_hoe_smithing' })

	//#endregion

	//#region Выход: Компаратор
	
	event.remove({ id: 'minecraft:comparator' })
	event.remove({ id: 'gtceu:shaped/comparator_quartzite' })
	event.remove({ id: 'gtceu:shaped/comparator_certus' })
	event.remove({ id: 'tfc:crafting/vanilla/redstone/comparator' })

	//#endregion

	//#region Выход: Крюк

	event.remove({ id: 'minecraft:tripwire_hook' })
	event.remove({ id: 'tfc:crafting/vanilla/redstone/tripwire_hook' })
	event.remove({ id: 'gtceu:assembler/tripwire_hook_wrought_iron' })
	event.remove({ id: 'gtceu:assembler/tripwire_hook_iron' })

	//#endregion

	//#region Выход: Рамка
	
	event.remove({ id: 'minecraft:item_frame' })

	//#endregion

	//#region Выход: Палки

	event.remove({ id: 'minecraft:stick' })

	//#endregion

	//#region Выход: Огниво

	event.remove({ id: 'tfc:crafting/vanilla/flint_and_steel' })
	event.remove({ id: 'ad_astra:recipes/flint_and_steel' })

	//#endregion

	//#region Выход: Наковальни

	event.remove({ id: 'gtceu:alloy_smelter/anvil' })
	event.remove({ id: 'gtceu:fluid_solidifier/solidify_anvil' })

	//#endregion

	// #region Grindstone

	event.remove({ id: 'minecraft:grindstone' })

	// #endregion

	//#region Выход: Железные прутья

	event.remove({ id: 'gtceu:shaped/iron_bars' })
	event.remove({ id: 'gtceu:assembler/iron_bars' })

	//#endregion

	//#region Выход: Печь

	event.remove({ id: 'gtceu:assembler/furnace' })

	//#endregion

	//#region Выход: Вагонетка с печью

	event.remove({ id: 'minecraft:furnace_minecart' })
	event.remove({ id: 'gtceu:assembler/furnace_minecart' })

	//#endregion

	//#region Выход: Повторитель

	event.remove({ id: 'minecraft:repeater' })

	//#endregion

	//#region Выход: Седло

	event.remove({ id: 'gtceu:shaped/saddle' })

	//#endregion

	//#region Выход: Блок лазурита

	event.remove({ id: 'tfc:crafting/vanilla/lapis_block' })

	//#endregion

	//#region Выход: Ведро

	event.remove({ id: 'gtceu:bender/bucket' })
	event.remove({ id: 'gtceu:shaped/iron_bucket' })

	//#endregion

	//#region Выход: Вагонетка

	event.remove({ id: 'minecraft:minecart' })

	//#endregion

	//#region Выход: Тигель
	
	event.remove({ id: 'tfc:crafting/vanilla/cauldron' })

	//#endregion

	//#region Выход: Детектор света

	event.remove({ id: 'tfc:crafting/vanilla/redstone/daylight_detector' })

	//#endregion

	//#region Выход: Воронка

	event.remove({ id: 'gtceu:assembler/hopper_iron' })
	event.remove({ id: 'tfc:crafting/vanilla/redstone/steel_hopper' })
	event.remove({ id: 'tfc:crafting/vanilla/redstone/hopper' })

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

	//#endregion

	//#region Выход: Кожа

	event.remove({ id: 'minecraft:leather' })

	//#endregion

	// #region Веревка

	event.remove({ id: 'gtceu:assembler/lead' })

	// #endregion

	//#region Выход: Свечи

	event.remove({ id: `minecraft:candle` })

	//#endregion

	//#region Из креозота. Я не виноват, что рецепт с ведром грега не работает

	event.remove({ id: 'gtceu:shaped/torch_creosote' })

	//#endregion

	//#region Выход: Арбалет

	event.remove({ id: 'minecraft:crossbow' })

	//#endregion

	//#region Выход: Наблюдатель

	event.remove({ id: 'minecraft:observer' })

	//#endregion

	//#region Выход: Рельсы

	event.remove({ id: 'tfc:crafting/vanilla/redstone/steel_rail' })

	//#endregion
	
	//#region Выход: Заряженные рельсы

	event.remove({ id: 'minecraft:powered_rail' })

	//#endregion

	//#region Выход: Активаторные рельсы

	event.remove({ id: 'tfc:crafting/vanilla/redstone/steel_activator_rail' })
	event.remove({ id: 'minecraft:activator_rail' })

	//#endregion
	
	//#region Выход: Нажимные рельсы

	event.remove({ id: 'tfc:crafting/vanilla/redstone/steel_detector_rail' })
	event.remove({ id: 'minecraft:detector_rail' })

	//#endregion

	//#region Выход: Варочная стойка

	event.remove({ id: 'minecraft:brewing_stand' })

	//#endregion

	//#region Выход: Кирпич

	event.remove({ id: 'minecraft:brick' })

	//#endregion

	//#region Выъод: Незер кирпич

	event.remove({ id: 'gtceu:extractor/nether_bricks_extraction' })
	event.remove({ id: 'gtceu:alloy_smelter/form_nether_brick' })

	//#endregion
	
	//#region Выход: Свечи

	event.remove({ id: `minecraft:candle` })

	//#endregion

	//#region Выход: Арбалет

	event.remove({ id: 'minecraft:crossbow' })

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

	//#region Исправление дерьма с медью (Однажды разраб GTCEu вспомнит, лучше бы забыл)

	event.remove({ id: 'minecraft:copper_ingot_from_blasting_raw_copper' })
	event.remove({ id: 'minecraft:copper_ingot_from_waxed_copper_block' })
	event.remove({ id: 'minecraft:copper_ingot' })

	event.remove({ id: 'minecraft:raw_copper_block' })
	event.remove({ id: 'minecraft:raw_copper' })

	//#endregion

	//#region Исправление дерьма с золотом (Однажды разраб GTCEu вспомнит, лучше бы забыл)

	event.remove({ id: 'minecraft:gold_ingot_from_blasting_raw_gold' })

	event.remove({ id: 'minecraft:raw_gold_block' })
	event.remove({ id: 'minecraft:raw_gold' })

	//#endregionw

	//#region Исправление дерьма с железом (Однажды разраб GTCEu вспомнит, лучше бы забыл)

	event.remove({ id: 'minecraft:raw_iron_block' })
	event.remove({ id: 'minecraft:raw_iron' })

	//#endregion

	//#region The End

	event.remove({ id: 'minecraft:ender_chest' })
	event.remove({ id: 'minecraft:end_crystal' })
	
	removeMaceratorRecipe(event, 'macerate_end_stone')
	event.remove({ id: 'gtceu:assembler/ender_chest' })
	event.remove({ id: 'gtceu:assembler/end_crystal' })
	//#endregion

	event.remove({ id: 'minecraft:flower_banner_pattern' })
	event.remove({ id: 'gtceu:assembler/lodestone' })

	//#endregion
}