// priority: 0
"use strict";

function removeMinecraftRecipes(event) {
	
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

	//#region Выход: Кварц

	event.remove({ id: 'minecraft:quartz' })
	event.remove({ id: 'minecraft:quartz_from_blasting' })
	event.remove({ id: 'minecraft:smooth_quartz' })

	//#endregion

	//#region Выход: Песок

	event.remove({ id: 'gtceu:centrifuge/red_sand_separation' })

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

	//#region Выход: Дерево
 
	event.remove({ id: 'minecraft:arrow' })
	event.remove({ output: 'minecraft:tipped_arrow' })
	
	//#endregion

	//#region Выход: Камнерез

	event.remove({ id: 'minecraft:stonecutter' })

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
	
	event.remove({ id: 'gtceu:shaped/stone_button' })
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

	global.MINECRAFT_COPPER_BLOCKS_RECIPE_COMPONENTS.forEach(element => {
		const blockId = element.block.split(':')[1]
		const cuttedId = element.cutted.split(':')[1]
		const stairsId = element.stairs.split(':')[1]
		const slabsId = element.slabs.split(':')[1]

		event.remove({ id: `minecraft:${cuttedId}_from_${blockId}_stonecutting` })
		event.remove({ id: `minecraft:${stairsId}_from_${blockId}_stonecutting` })
		event.remove({ id: `minecraft:${slabsId}_from_${blockId}_stonecutting` })
	})

	//#endregion
	
	//#endregion

	//#region Выход: Ковер из мха

	event.remove({ id: 'minecraft:moss_carpet' })

	//#endregion

	//#region Выход: Таблички из бамбука

	event.remove({ id: `minecraft:bamboo_button` })

	//#endregion

	//#region Древесный уголь

	event.remove({ id: 'minecraft:charcoal' })

	//#endregion

	//#region Выход: Железный люк

	event.remove({ id: 'gtceu:assembler/iron_trapdoor' })

	//#endregion

	//#region Выход: Железная нажимная плита

	event.remove({ id: 'tfc:crafting/vanilla/redstone/heavy_weighted_pressure_plate' })

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

	//#region Выход: Стол для ковки

	event.remove({ id: 'minecraft:smithing_table' })
	event.remove({ id: 'tfc:crafting/vanilla/smithing_table' })
	event.remove({ id: 'gtceu:shaped/smithing_table' })
	event.remove({ id: 'gtceu:assembler/smithing_table' })

	//#endregion

	//#region Выход: Стержень энда

	event.remove({ id: 'minecraft:end_rod' })
	event.remove({ id: 'gtceu:assembler/end_rod' })

	//#endregion

	//#region Выход: Золотое яблоко

	event.remove({ id: 'minecraft:golden_apple' })

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

	//#region Выход: Кирпич

	event.remove({ id: 'minecraft:brick' })

	//#endregion

	//#region Выъод: Незер кирпич

	event.remove({ id: 'gtceu:extractor/nether_bricks_extraction' })
	event.remove({ id: 'gtceu:alloy_smelter/form_nether_brick' })

	//#endregion

	//#region Выход: Арбалет

	event.remove({ id: 'minecraft:crossbow' })

	//#endregion

	//#region Исправление дерьма с медью (Однажды разраб GTCEu вспомнит, лучше бы забыл)

	event.remove({ id: 'minecraft:copper_ingot_from_waxed_copper_block' })
	event.remove({ id: 'minecraft:copper_ingot' })

	//#endregion


	event.remove({ id: 'minecraft:flower_banner_pattern' })

	event.remove({ id: 'minecraft:armor_stand' })
}
