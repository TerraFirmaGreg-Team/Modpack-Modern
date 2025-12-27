// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function removeGTCEURecipes(event) {

	event.replaceInput({ input: 'gtceu:wood_drum' }, 'gtceu:wood_drum', 'minecraft:glass')
	event.replaceInput({ input: 'minecraft:chest' }, 'minecraft:chest', '#forge:chests/wooden')

	global.GTCEU_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	//#region Выход: Крошечная кучка камня

	removeMaceratorRecipe(event, 'macerate_stone_button')

	//#endregion

	//#region Выход: Маленькая кучка камня

	removeMaceratorRecipe(event, 'macerate_stone_stairs')
	removeMaceratorRecipe(event, 'macerate_stone_slab')
	removeMaceratorRecipe(event, 'macerate_stone_brick_stairs')
	removeMaceratorRecipe(event, 'macerate_stone_brick_slab')
	removeMaceratorRecipe(event, 'macerate_sandstone_stairs')
	removeMaceratorRecipe(event, 'macerate_sandstone_slab')
	removeMaceratorRecipe(event, 'macerate_red_sandstone_stairs')
	removeMaceratorRecipe(event, 'macerate_red_sandstone_slab')
	removeMaceratorRecipe(event, 'macerate_granite')
	removeMaceratorRecipe(event, 'macerate_diorite')
	removeMaceratorRecipe(event, 'macerate_cobblestone_slab')
	removeMaceratorRecipe(event, 'macerate_andesite')
	event.remove({ id: 'gtceu:shaped/stone_hammer' })
	event.remove({ id: 'gtceu:mixer/mossy_cobblestone_from_moss_block' })
	event.remove({ id: 'greate:mixing/integration/gtceu/mixer/mossy_cobblestone_from_moss_block' })
	event.remove({ id: 'greate:mixing/integration/gtceu/mixer/mossy_cobblestone_from_vine' })

	//#endregion

	//#region Выход: Кучка камня

	removeMaceratorRecipe(event, 'macerate_stone_sword')
	removeMaceratorRecipe(event, 'macerate_stone_shovel')
	removeMaceratorRecipe(event, 'macerate_stone_pressure_plate')
	removeMaceratorRecipe(event, 'macerate_stone_pickaxe')
	removeMaceratorRecipe(event, 'macerate_stone_hoe')
	removeMaceratorRecipe(event, 'macerate_stone_bricks')
	removeMaceratorRecipe(event, 'macerate_stone_axe')
	removeMaceratorRecipe(event, 'macerate_mossy_cobblestone')
	removeMaceratorRecipe(event, 'macerate_cobblestone_wall')
	removeMaceratorRecipe(event, 'macerate_cobblestone')
	removeMaceratorRecipe(event, 'gravel_to_flint')
	removeMaceratorRecipe(event, 'macerate_furnace')
	removeCutterRecipe(event, 'cut_stone_block_to_plate')
	removeCutterRecipe(event, 'cut_stone_block_to_plate_water')
	removeCutterRecipe(event, 'cut_stone_block_to_plate_distilled_water')

	//#endregion

	//#region Deepslate

	event.remove({ id: 'gtceu:shaped/deepslate_hammer' })
	event.remove({ id: 'gtceu:shaped/cobbled_deepslate_stair_saw' })
	event.remove({ id: 'gtceu:shaped/cobbled_deepslate_slab_saw' })
	event.remove({ id: 'gtceu:shaped/cobbled_deepslate_wall_saw' })
	event.remove({ id: 'gtceu:shaped/cobbled_deepslate_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_cobbled_deepslate_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_cobbled_deepslate_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_cobbled_deepslate_into_wall' })
	removeCutterRecipe(event, 'cut_cobbled_deepslate_into_slab')
	removeCutterRecipe(event, 'cut_cobbled_deepslate_into_slab_water')
	removeCutterRecipe(event, 'cut_cobbled_deepslate_into_slab_distilled_water')

	event.remove({ id: 'gtceu:shaped/cobbled_deepslate_polished_hammer' })
	event.remove({ id: 'gtceu:forming_press/form_cobbled_deepslate_slab_into_pillar' })

	event.remove({ id: 'gtceu:shaped/polished_deepslate_stair_saw' })
	event.remove({ id: 'gtceu:shaped/polished_deepslate_slab_saw' })
	event.remove({ id: 'gtceu:shaped/polished_deepslate_wall_saw' })
	event.remove({ id: 'gtceu:shaped/polished_deepslate_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_deepslate_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_deepslate_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_deepslate_into_wall' })
	removeCutterRecipe(event, 'cut_polished_deepslate_into_slab')
	removeCutterRecipe(event, 'cut_polished_deepslate_into_slab_water')
	removeCutterRecipe(event, 'cut_polished_deepslate_into_slab_distilled_water')

	event.remove({ id: 'gtceu:shaped/deepslate_bricks_hammer' })
	event.remove({ id: 'gtceu:shaped/deepslate_bricks_stair_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_bricks_slab_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_bricks_wall_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_bricks_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_bricks_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_bricks_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_bricks_into_wall' })
	removeCutterRecipe(event, 'cut_deepslate_bricks_into_slab')
	removeCutterRecipe(event, 'cut_deepslate_bricks_into_slab_water')
	removeCutterRecipe(event, 'cut_deepslate_bricks_into_slab_distilled_water')

	event.remove({ id: 'gtceu:shaped/deepslate_tile_hammer' })
	event.remove({ id: 'gtceu:shaped/deepslate_tile_stair_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_tile_slab_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_tile_wall_saw' })
	event.remove({ id: 'gtceu:shaped/deepslate_tile_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_tile_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_tile_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_deepslate_tile_into_wall' })
	removeCutterRecipe(event, 'cut_deepslate_tile_into_slab')
	removeCutterRecipe(event, 'cut_deepslate_tile_into_slab_water')
	removeCutterRecipe(event, 'cut_deepslate_tile_into_slab_distilled_water')

	removeMaceratorRecipe(event, 'macerate_deepslate')
	event.remove({ id: 'gtceu:rock_breaker/deepslate' })

	// #endregion

	// #region Blackstone

	event.remove({ id: 'gtceu:shaped/blackstone_stair_saw' })
	event.remove({ id: 'gtceu:shaped/blackstone_slab_saw' })
	event.remove({ id: 'gtceu:shaped/blackstone_wall_saw' })
	event.remove({ id: 'gtceu:shaped/blackstone_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_blackstone_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_blackstone_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_blackstone_into_wall' })
	removeCutterRecipe(event, 'cut_blackstone_into_slab')
	removeCutterRecipe(event, 'cut_blackstone_into_slab_water')
	removeCutterRecipe(event, 'cut_blackstone_into_slab_distilled_water')

	event.remove({ id: 'gtceu:shaped/polished_blackstone_hammer' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_stair_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_slab_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_wall_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_into_wall' })
	removeCutterRecipe(event, 'cut_polished_blackstone_into_slab')
	removeCutterRecipe(event, 'cut_polished_blackstone_into_slab_water')
	removeCutterRecipe(event, 'cut_polished_blackstone_into_slab_distilled_water')

	event.remove({ id: 'gtceu:shaped/polished_blackstone_polished_hammer' })
	event.remove({ id: 'gtceu:forming_press/form_polished_blackstone_slab_into_pillar' })

	event.remove({ id: 'gtceu:shaped/polished_blackstone_brick_hammer' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_brick_stair_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_brick_slab_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_brick_wall_saw' })
	event.remove({ id: 'gtceu:shaped/polished_blackstone_brick_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_brick_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_brick_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_polished_blackstone_brick_into_wall' })
	removeCutterRecipe(event, 'cut_polished_blackstone_brick_into_slab')
	removeCutterRecipe(event, 'cut_polished_blackstone_brick_into_slab_water')
	removeCutterRecipe(event, 'cut_polished_blackstone_brick_into_slab_distilled_water')

	event.remove({ id: 'gtceu:rock_breaker/blackstone' })

	// #endregion

	// #region basalt

	event.remove({ id: 'gtceu:shaped/basalt_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_basalt_into_polished' })

	// #endregion

	// #region Nether Quartz
	
	event.remove({ id: 'gtceu:shaped/quartz_stair_saw' })
	event.remove({ id: 'gtceu:assembler/assemble_quartz_into_stair' })
	event.remove({ id: 'gtceu:shaped/quartz_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_quartz_into_polished' })
	event.remove({ id: 'gtceu:assembler/assemble_block_of_quartz_into_quartz_pillar' })
	event.remove({ id: 'gtceu:shaped/smooth_quartz_stair_saw' })
	event.remove({ id: 'gtceu:assembler/assemble_smooth_quartz_into_stair' })
	event.remove({ id: 'gtceu:shaped/smooth_quartz_slab_saw' })

	// #endregion

	// #region Plant Ball

	event.remove({ id: 'gtceu:compressor/plant_ball_from_wheat' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_warped_stem' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_crimson_stem' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_tube_coral' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_sugar_cane' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_potato' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_nether_wart' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_horn_coral' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_fire_coral' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_carrot' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_cactus' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_bubble_coral' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_brain_coral' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_beetroot' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_moss' })

	// #endregion

	// #region Biomass

	event.remove({ id: 'gtceu:brewery/biomass_from_sugar_cane' })
	event.remove({ id: 'gtceu:brewery/biomass_from_potato' })
	event.remove({ id: 'gtceu:brewery/biomass_from_carrot' })
	event.remove({ id: 'gtceu:brewery/biomass_from_cactus' })
	event.remove({ id: 'gtceu:brewery/biomass_from_beetroot' })

	// #endregion

	// #region Fish Oil

	event.remove({ id: 'gtceu:extractor/fish_oil_from_tropical_fish' })
	event.remove({ id: 'gtceu:extractor/fish_oil_from_salmon' })
	event.remove({ id: 'gtceu:extractor/fish_oil_from_pufferfish' })
	event.remove({ id: 'gtceu:extractor/fish_oil_from_cod' })

	// #endregion

	// #region Wrought Iron Nugget

	event.remove({ output: 'gtceu:wrought_iron_nugget', type: 'minecraft:smelting' })

	// #endregion

	// #region Seed Oil

	event.remove({ id: 'gtceu:extractor/seed_oil_from_tag_seeds' })
	event.remove({ id: 'gtceu:extractor/seed_oil_from_pumpkin' })
	event.remove({ id: 'gtceu:extractor/seed_oil_from_melon' })
	event.remove({ id: 'gtceu:extractor/seed_oil_from_beetroot' })

	// #endregion

	//#region Выход: Крошечная кучка дерева

	removeMaceratorRecipe(event, 'macerate_warped_button')
	removeMaceratorRecipe(event, 'macerate_spruce_button')
	removeMaceratorRecipe(event, 'macerate_oak_button')
	removeMaceratorRecipe(event, 'macerate_mangrove_button')
	removeMaceratorRecipe(event, 'macerate_jungle_button')
	removeMaceratorRecipe(event, 'macerate_dark_oak_button')
	removeMaceratorRecipe(event, 'macerate_crimson_button')
	removeMaceratorRecipe(event, 'macerate_cherry_button')
	removeMaceratorRecipe(event, 'macerate_birch_button')
	removeMaceratorRecipe(event, 'macerate_acacia_button')

	//#endregion

	//#region Выход: Маленькая кучка дерева

	removeMaceratorRecipe(event, 'macerate_wooden_sword')
	removeMaceratorRecipe(event, 'macerate_wooden_shovel')
	removeMaceratorRecipe(event, 'macerate_wooden_pickaxe')
	removeMaceratorRecipe(event, 'macerate_wooden_hoe')
	removeMaceratorRecipe(event, 'macerate_wooden_axe')
	removeMaceratorRecipe(event, 'macerate_warped_stairs')
	removeMaceratorRecipe(event, 'macerate_warped_slab')
	removeMaceratorRecipe(event, 'macerate_spruce_stairs')
	removeMaceratorRecipe(event, 'macerate_spruce_slab')
	removeMaceratorRecipe(event, 'macerate_oak_stairs')
	removeMaceratorRecipe(event, 'macerate_oak_slab')
	removeMaceratorRecipe(event, 'macerate_mangrove_stairs')
	removeMaceratorRecipe(event, 'macerate_mangrove_slab')
	removeMaceratorRecipe(event, 'macerate_jungle_stairs')
	removeMaceratorRecipe(event, 'macerate_jungle_slab')
	removeMaceratorRecipe(event, 'macerate_iron_sword')
	removeMaceratorRecipe(event, 'macerate_iron_shovel')
	removeMaceratorRecipe(event, 'macerate_iron_pickaxe')
	removeMaceratorRecipe(event, 'macerate_iron_hoe')
	removeMaceratorRecipe(event, 'macerate_iron_axe')
	removeMaceratorRecipe(event, 'macerate_golden_sword')
	removeMaceratorRecipe(event, 'macerate_golden_shovel')
	removeMaceratorRecipe(event, 'macerate_golden_pickaxe')
	removeMaceratorRecipe(event, 'macerate_golden_hoe')
	removeMaceratorRecipe(event, 'macerate_golden_axe')
	removeMaceratorRecipe(event, 'macerate_diamond_sword')
	removeMaceratorRecipe(event, 'macerate_diamond_shovel')
	removeMaceratorRecipe(event, 'macerate_diamond_pickaxe')
	removeMaceratorRecipe(event, 'macerate_diamond_hoe')
	removeMaceratorRecipe(event, 'macerate_diamond_axe')
	removeMaceratorRecipe(event, 'macerate_dark_oak_stairs')
	removeMaceratorRecipe(event, 'macerate_dark_oak_slab')
	removeMaceratorRecipe(event, 'macerate_crimson_stairs')
	removeMaceratorRecipe(event, 'macerate_crimson_slab')
	removeMaceratorRecipe(event, 'macerate_cherry_stairs')
	removeMaceratorRecipe(event, 'macerate_cherry_slab')
	removeMaceratorRecipe(event, 'macerate_birch_stairs')
	removeMaceratorRecipe(event, 'macerate_birch_slab')
	removeMaceratorRecipe(event, 'macerate_acacia_stairs')
	removeMaceratorRecipe(event, 'macerate_acacia_slab')

	//#endregion

	//#region Выход: Деревянная пыль

	removeMaceratorRecipe(event, 'macerate_trapped_chest')
	removeMaceratorRecipe(event, 'macerate_spruce_planks')
	removeMaceratorRecipe(event, 'macerate_spruce_fence_gate')
	removeMaceratorRecipe(event, 'macerate_spruce_fence')
	removeMaceratorRecipe(event, 'macerate_spruce_door')
	removeMaceratorRecipe(event, 'macerate_spruce_boat')
	removeMaceratorRecipe(event, 'macerate_oak_planks')
	removeMaceratorRecipe(event, 'macerate_oak_fence_gate')
	removeMaceratorRecipe(event, 'macerate_oak_fence')
	removeMaceratorRecipe(event, 'macerate_oak_door')
	removeMaceratorRecipe(event, 'macerate_oak_boat')
	removeMaceratorRecipe(event, 'macerate_mangrove_planks')
	removeMaceratorRecipe(event, 'macerate_mangrove_fence_gate')
	removeMaceratorRecipe(event, 'macerate_mangrove_fence')
	removeMaceratorRecipe(event, 'macerate_mangrove_door')
	removeMaceratorRecipe(event, 'macerate_mangrove_boat')
	removeMaceratorRecipe(event, 'macerate_jungle_planks')
	removeMaceratorRecipe(event, 'macerate_jungle_fence_gate')
	removeMaceratorRecipe(event, 'macerate_jungle_fence')
	removeMaceratorRecipe(event, 'macerate_jungle_door')
	removeMaceratorRecipe(event, 'macerate_jungle_boat')
	removeMaceratorRecipe(event, 'macerate_dark_oak_planks')
	removeMaceratorRecipe(event, 'macerate_dark_oak_fence_gate')
	removeMaceratorRecipe(event, 'macerate_dark_oak_fence')
	removeMaceratorRecipe(event, 'macerate_dark_oak_door')
	removeMaceratorRecipe(event, 'macerate_dark_oak_boat')
	removeMaceratorRecipe(event, 'macerate_crafting_table')
	removeMaceratorRecipe(event, 'macerate_chest')
	removeMaceratorRecipe(event, 'macerate_chest_minecart')
	removeMaceratorRecipe(event, 'macerate_cherry_planks')
	removeMaceratorRecipe(event, 'macerate_cherry_fence_gate')
	removeMaceratorRecipe(event, 'macerate_cherry_fence')
	removeMaceratorRecipe(event, 'macerate_cherry_door')
	removeMaceratorRecipe(event, 'macerate_cherry_boat')
	removeMaceratorRecipe(event, 'macerate_bookshelf')
	removeMaceratorRecipe(event, 'macerate_birch_planks')
	removeMaceratorRecipe(event, 'macerate_birch_fence_gate')
	removeMaceratorRecipe(event, 'macerate_birch_fence')
	removeMaceratorRecipe(event, 'macerate_birch_door')
	removeMaceratorRecipe(event, 'macerate_birch_boat')
	removeMaceratorRecipe(event, 'macerate_acacia_planks')
	removeMaceratorRecipe(event, 'macerate_acacia_fence_gate')
	removeMaceratorRecipe(event, 'macerate_acacia_fence')
	removeMaceratorRecipe(event, 'macerate_acacia_door')
	removeMaceratorRecipe(event, 'macerate_acacia_boat')
	removeMaceratorRecipe(event, 'macerate_bamboo_raft')
	removeMaceratorRecipe(event, 'macerate_crimson_door')
	removeMaceratorRecipe(event, 'macerate_crimson_fence')
	removeMaceratorRecipe(event, 'macerate_crimson_fence_gate')
	removeMaceratorRecipe(event, 'macerate_crimson_planks')
	removeMaceratorRecipe(event, 'macerate_warped_door')
	removeMaceratorRecipe(event, 'macerate_warped_fence')
	removeMaceratorRecipe(event, 'macerate_warped_fence_gate')
	removeMaceratorRecipe(event, 'macerate_warped_planks')

	//#endregion

	//#region Выход: Бумажная пыль

	event.remove({ id: 'gtceu:shaped/paper_dust' })

	//#endregion


	//#region Выход: Маленькая кучка мяса

	removeMaceratorRecipe(event, 'macerate_steak')
	removeMaceratorRecipe(event, 'macerate_rabbit')
	removeMaceratorRecipe(event, 'macerate_pork_chop')
	removeMaceratorRecipe(event, 'macerate_mutton')
	removeMaceratorRecipe(event, 'macerate_chicken')

	// #endregion

	//#region Выход: Пшеничная пыль

	event.remove({ id: 'gtceu:shapeless/wheat_to_dust' })
	removeMaceratorRecipe(event, 'macerate_wheat')
	removeMaceratorRecipe(event, 'macerate_hay_block')

	//#endregion

		//#region Выход: Слиток кованного железа

	event.remove({ id: 'gtceu:arc_furnace/arc_chest_minecart' })
	event.remove({ id: 'gtceu:arc_furnace/arc_iron_trapdoor' })
	event.remove({ id: 'gtceu:arc_furnace/arc_damaged_anvil' })
	event.remove({ id: 'gtceu:arc_furnace/arc_chipped_anvil' })
	event.remove({ id: 'gtceu:arc_furnace/arc_anvil' })
	event.remove({ id: 'gtceu:arc_furnace/arc_furnace_minecart' })
	event.remove({ id: 'gtceu:arc_furnace/arc_compass' })

	//#endregion

	//#region Выход: Кованные самородки

	event.remove({ id: 'gtceu:arc_furnace/arc_iron_bars' })

	//#endregion

	//#region Выход: Железная пыль

	removeMaceratorRecipe(event, 'macerate_iron_trapdoor')
	removeMaceratorRecipe(event, 'macerate_damaged_anvil')
	removeMaceratorRecipe(event, 'macerate_chipped_anvil')
	removeMaceratorRecipe(event, 'macerate_anvil')
	removeMaceratorRecipe(event, 'macerate_furnace_minecart')
	removeMaceratorRecipe(event, 'macerate_bucket')
	removeMaceratorRecipe(event, 'macerate_compass')

	//#endregion

	//#region Выход: Крошечная железная пыль

	removeMaceratorRecipe(event, 'macerate_iron_bars')

	//#endregion

	//#region Выход: Крошечная пыль золы

	event.remove({ id: 'gtceu:arc_furnace/arc_bookshelf' })

	//#endregion

	//#region Выход: Пыль незерака

	event.remove({ id: 'gtceu:shaped/nether_bricks_hammer' })
	event.remove({ id: 'gtceu:shaped/nether_bricks_stair_saw' })
	event.remove({ id: 'gtceu:shaped/nether_bricks_slab_saw' })
	event.remove({ id: 'gtceu:shaped/nether_bricks_wall_saw' })
	removeMaceratorRecipe(event, 'macerate_nether_brick_stairs')
	removeMaceratorRecipe(event, 'macerate_nether_brick_slab')
	removeMaceratorRecipe(event, 'macerate_nether_bricks')
	removeMaceratorRecipe(event, 'macerate_chiseled_nether_bricks')

	//#endregion

	//#region Выход: Пыль базальта

	removeMaceratorRecipe(event, 'macerate_basalt')

	//#endregion

		//#region Выход: Слиток камня

	event.remove({ id: 'gtceu:alloy_smelter/alloy_smelt_stone_to_ingot' })

	//#endregion

	//#region Выход: Бронзовые машины (Плюс их декрафты)

	event.remove({ id: 'gtceu:shaped/bronze_hull' })
	event.remove({ id: 'gtceu:arc_furnace/arc_bronze_machine_casing' })
	removeMaceratorRecipe(event, 'macerate_bronze_machine_casing')

	event.remove({ id: 'gtceu:shaped/steam_extractor_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_extractor' })
	removeMaceratorRecipe(event, 'macerate_lp_steam_extractor')

	event.remove({ id: 'gtceu:shaped/steam_macerator_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_macerator' })
	removeMaceratorRecipe(event, 'macerate_lp_steam_macerator')

	event.remove({ id: 'gtceu:shaped/steam_compressor_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_compressor' })
	removeMaceratorRecipe(event, 'macerate_lp_steam_compressor')

	event.remove({ id: 'gtceu:shaped/steam_hammer_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_forge_hammer' })
	removeMaceratorRecipe(event, 'macerate_lp_steam_forge_hammer')

	event.remove({ id: 'gtceu:shaped/steam_furnace_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_furnace' })
	removeMaceratorRecipe(event, 'macerate_lp_steam_furnace')

	event.remove({ id: 'gtceu:shaped/steam_alloy_smelter_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_alloy_smelter' })
	removeMaceratorRecipe(event, 'macerate_lp_steam_alloy_smelter')

	event.remove({ id: 'gtceu:shaped/steam_rock_breaker_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_lp_steam_rock_crusher' })
	removeMaceratorRecipe(event, 'macerate_lp_steam_rock_crusher')

	event.remove({ id: 'gtceu:shaped/steam_miner_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_steam_miner_bronze' })
	removeMaceratorRecipe(event, 'macerate_steam_miner_bronze')
	
	event.remove({ id: 'gtceu:shaped/steam_miner_bronze' })
	event.remove({ id: 'gtceu:arc_furnace/arc_steam_miner_bronze' })
	removeMaceratorRecipe(event, 'macerate_steam_miner_bronze')

	event.remove({ id: 'gtceu:shaped/steam_miner_steel' })
	event.remove({ id: 'gtceu:arc_furnace/arc_steam_miner_steel' })
	removeMaceratorRecipe(event, 'macerate_steam_miner_steel')

	// #endregion

	
	//#region Выход: некоторые рецепты пылей

	event.remove({ id: 'gtceu:shapeless/dust_brass' })
	event.remove({ id: 'gtceu:shapeless/glass_dust_flint' })
	event.remove({ id: 'gtceu:shapeless/dust_bronze' })
	event.remove({ id: 'gtceu:shapeless/potin_dust' })

	//#endregion

	// Удаление рецептов связанных с Primitive Blast Furnace
	event.remove({ id: 'gtceu:arc_furnace/arc_primitive_blast_furnace' })
	removeMaceratorRecipe(event, 'macerate_primitive_blast_furnace')

	// Удаление рецепта беск. воды кавера
	event.remove('gtceu:assembler/cover_infinite_water')

	// Удаление рецептов помпы
	event.remove('gtceu:shaped/pump_deck')
	event.remove('gtceu:shaped/pump_hatch')
	event.remove('gtceu:shaped/primitive_pump')

	// Удаление рецептов связанных с Barrel
	event.remove({ id: 'gtceu:shaped/wooden_barrel' })
	event.remove({ id: 'gtceu:assembler/wood_barrel' })
	event.remove({ id: 'gtceu:arc_furnace/arc_wood_drum' })
	removeMaceratorRecipe(event, 'macerate_wood_drum')

	// Удаление рецептов связанных с FireBricks
	event.remove({ id: 'gtceu:shaped/casing_primitive_bricks' })
	removeMaceratorRecipe(event, 'macerate_firebricks')
	event.remove({ id: 'gtceu:extractor/extract_primitive_bricks' })

	// Удаление рецептов связанных с FireBrick
	event.remove({ id: 'gtceu:smelting/fireclay_brick' })
	removeMaceratorRecipe(event, 'macerate_firebrick')

	// Clay from mud
	event.remove({ id: 'gtceu:compressor/mud_to_clay' })

	// Rubber extraction
	event.remove({ id: 'gtceu:extractor/extract_raw_rubber_dust' })
	event.remove({ id: 'gtceu:extractor/raw_rubber_from_resin' })
	event.remove({ id: 'gtceu:extractor/raw_rubber_from_slime' })

	// Mortar
	event.remove({ id: 'gtceu:shaped/gem_to_dust_coal_chipped_gem' })
	event.remove({ id: 'gtceu:shaped/gem_to_dust_coke_chipped_gem' })
	event.remove({ id: 'gtceu:shaped/sandstone_polished_hammer' })
	event.remove({ id: 'gtceu:shaped/stone_brick_polished_hammer' })
	event.remove({ id: 'gtceu:shaped/purpur_polished_hammer' })
	event.remove({ id: 'gtceu:shaped/red_sandstone_polished_hammer' })
	event.remove({ id: 'gtceu:shaped/nether_bricks_polished_hammer' })
	event.remove({ id: 'gtceu:shaped/stone_polish_hammer' })
	event.remove({ id: 'gtceu:assembler/assemble_stone_into_polished' })
	event.remove({ id: 'gtceu:forming_press/form_stone_brick_slab_into_pillar' })
  
	event.remove({ id: 'gtceu:shaped_fluid_container/brick_from_water' })

	event.remove({ id: 'gtceu:shaped/stone_stair_saw' })
	event.remove({ id: 'gtceu:shaped/stone_slab_saw' })
	
	event.remove({ id: 'gtceu:shaped/cobblestone_stair_saw' })
	event.remove({ id: 'gtceu:shaped/cobblestone_slab_saw' })
	event.remove({ id: 'gtceu:shaped/cobblestone_slab_wall' })

	event.remove({ id: 'gtceu:shaped/mossy_cobblestone_stair_saw' })
	event.remove({ id: 'gtceu:shaped/mossy_cobblestone_slab_saw' })
	event.remove({ id: 'gtceu:shaped/mossy_cobblestone_slab_wall' })

	event.remove({ id: 'gtceu:shaped/red_sandstone_stair_saw' })
	event.remove({ id: 'gtceu:shaped/red_sandstone_wall_saw' })
	event.remove({ id: 'gtceu:shaped/red_sandstone_polish_hammer' })
	
	event.remove({ id: 'gtceu:shaped/smooth_red_sandstone_stair_saw' })
	event.remove({ id: 'gtceu:shaped/smooth_red_sandstone_slab_saw' })

	event.remove({ id: 'gtceu:shaped/cut_red_sandstone_slab_saw' })

	// Gears
	event.remove({ id: 'gtceu:extruder/extrude_wood_ingot_to_small_gear' })
	event.remove({ id: 'gtceu:alloy_smelter/alloy_smelt_wood_ingot_to_small_gear' })

	// Misc vanilla stuff
	event.remove({ id: 'gtceu:shaped/observer' })
	event.remove({ id: 'gtceu:shaped/observer_certus' })
	event.remove({ id: 'gtceu:shaped/observer_quartzite' })
	event.remove({ id: 'gtceu:shaped/piston_iron' })
	event.remove({ id: 'gtceu:shaped/comparator' })
	event.remove({ id: 'gtceu:shaped/repeater' })
	event.remove({ id: 'gtceu:shaped/crossbow' })
	event.remove({ id: 'gtceu:shaped/spyglass' })
	event.remove({ id: 'gtceu:shaped/lead' })
	event.remove({ id: 'gtceu:shaped/target' })
	event.remove({ id: 'gtceu:shaped/lectern' })
	event.remove({ id: 'gtceu:shaped/item_frame' })
	event.remove({ id: 'gtceu:shaped/clock' })
	event.remove({ id: 'gtceu:shaped/loom' })
	event.remove({ id: 'gtceu:shaped/scaffolding' })
	event.remove({ id: 'gtceu:shaped/bow' })
	event.remove({ id: 'gtceu:shaped/leather_horse_armor' })
	event.remove({ id: 'gtceu:shaped/bowl' })
	event.remove({ id: 'gtceu:shaped/flower_pot' })
	event.remove({ id: 'gtceu:shaped/jack_o_lantern' })
	event.remove({ id: 'gtceu:shaped/armor_stand' })
	event.remove({ id: 'gtceu:shaped/white_bed' })
	event.remove({ id: 'gtceu:shaped/light_gray_bed' })
	event.remove({ id: 'gtceu:shaped/gray_bed' })
	event.remove({ id: 'gtceu:shaped/black_bed' })
	event.remove({ id: 'gtceu:shaped/brown_bed' })
	event.remove({ id: 'gtceu:shaped/red_bed' })
	event.remove({ id: 'gtceu:shaped/orange_bed' })
	event.remove({ id: 'gtceu:shaped/yellow_bed' })
	event.remove({ id: 'gtceu:shaped/lime_bed' })
	event.remove({ id: 'gtceu:shaped/green_bed' })
	event.remove({ id: 'gtceu:shaped/cyan_bed' })
	event.remove({ id: 'gtceu:shaped/light_blue_bed' })
	event.remove({ id: 'gtceu:shaped/blue_bed' })
	event.remove({ id: 'gtceu:shaped/purple_bed' })
	event.remove({ id: 'gtceu:shaped/magenta_bed' })
	event.remove({ id: 'gtceu:shaped/pink_bed' })
	event.remove({ id: 'gtceu:shaped/flour_to_dough' })
	event.remove({ id: 'gtceu:shaped/grindstone' })
	event.remove({ id: 'gtceu:shaped/treated_trapdoor_iron' })
	event.remove({ id: 'gtceu:shaped/treated_trapdoor_steel' })
	event.remove({ id: 'gtceu:shaped/treated_door' })
	event.remove({ id: 'gtceu:shaped/barrel' })
	event.remove({ id: 'gtceu:shaped/book' })
	event.remove({ id: 'gtceu:shaped/bucket_of_concrete' })
	event.remove({ id: 'gtceu:shaped/smithing_table' })
	event.remove({ id: 'gtceu:shaped/brick_slab_saw' })
	event.remove({ id: 'gtceu:shaped/brick_stair_saw' })
	event.remove({ id: 'gtceu:shaped/brick_wall_saw' })
	event.remove({ id: 'gtceu:shaped/lightning_rod' })
	event.remove({ id: 'gtceu:shaped/painting' })
	event.remove({ id: 'gtceu:shaped/rail' })
	event.remove({ id: 'gtceu:shaped/powered_rail' })
	event.remove({ id: 'gtceu:shaped/detector_rail' })
	event.remove({ id: 'gtceu:shaped/activator_rail' })
	event.remove({ id: 'gtceu:shaped/shield' })
	event.remove({ id: 'gtceu:shaped/pickaxe_iron' })
	event.remove({ id: 'gtceu:shaped/gear_diamond' })
	event.remove({ id: 'gtceu:shaped/buzzsaw_blade_diamond' })
	event.remove({ id: 'gtceu:shaped/purpur_stair_saw' })
	event.remove({ id: 'gtceu:shaped/bamboo_button' })
	event.remove({ id: 'gtceu:shaped/treated_button' })

	event.remove({ id: 'gtceu:shapeless/glass_full_dust_flint' })

	event.remove({ id: 'gtceu:shaped_fluid_container/treated_wood_planks' })

	event.remove({ id: 'gtceu:assembler/bell' })
	event.remove({ id: 'gtceu:assembler/armor_stand' })
	event.remove({ id: 'gtceu:assembler/piston_stainless_steel' })
	event.remove({ id: 'gtceu:assembler/treated_trapdoor_iron' })
	event.remove({ id: 'gtceu:assembler/treated_trapdoor_steel' })
	event.remove({ id: 'gtceu:assembler/treated_door' })
	event.remove({ id: 'gtceu:assembler/barrel' })
	event.remove({ id: 'gtceu:assembler/book_from_leather' })
	event.remove({ id: 'gtceu:assembler/name_tag' })
	event.remove({ id: 'gtceu:assembler/smithing_table' })
	event.remove({ id: 'gtceu:assembler/loom' })
	event.remove({ id: 'gtceu:assembler/flower_pot' })
	event.remove({ id: 'gtceu:assembler/piston' })
	event.remove({ id: 'gtceu:assembler/clock' })
	event.remove({ id: 'gtceu:assembler/spyglass' })
	event.remove({ id: 'gtceu:assembler/map' })
	event.remove({ id: 'gtceu:assembler/spyglass' })
	event.remove({ id: 'gtceu:assembler/assemble_purpur_into_stair' })
	event.remove({ id: 'gtceu:assembler/stonecutter' })

	event.remove({ id: 'gtceu:centrifuge/decomposition_centrifuging__blaze' })

	event.remove({ id: 'gtceu:chemical_reactor/ghast_tear_separation' })
	
	event.remove({ id: 'gtceu:assembler/assemble_brick_into_stair' })
	event.remove({ id: 'gtceu:assembler/assemble_brick_into_wall' })
	event.remove({ id: 'gtceu:compressor/bricks' })
	event.remove({ id: 'gtceu:extractor/bricks_extraction' })
	removeMaceratorRecipe(event, 'macerate_bricks')
	removeMaceratorRecipe(event, 'macerate_brick_stairs')
	removeMaceratorRecipe(event, 'macerate_brick_slab')
	removeMaceratorRecipe(event, 'macerate_brick_wall')
	removeMaceratorRecipe(event, 'macerate_flower_pot')
	removeMaceratorRecipe(event, 'macerate_netherrack')
	removeMaceratorRecipe(event, 'macerate_red_nether_bricks')
	removeMaceratorRecipe(event, 'macerate_red_nether_brick_wall')
	removeMaceratorRecipe(event, 'macerate_blaze_rod')

	removeMaceratorRecipe(event, 'macerate_marble')
	removeMaceratorRecipe(event, 'macerate_red_granite')

	removeMaceratorRecipe(event, 'macerate_wool')

	event.remove({ id: 'gtceu:gas_collector/nether_air' })
	event.remove({ id: 'gtceu:gas_collector/ender_air' })
	// TODO: uncomment with venus update
	//event.remove({ id: 'gtceu:vacuum_freezer/liquid_ender_air' })
	//event.remove({ id: 'gtceu:vacuum_freezer/liquid_nether_air' })
	//event.remove({ id: 'gtceu:distillation_tower/distill_liquid_ender_air' })
	//event.remove({ id: 'gtceu:distillation_tower/distill_liquid_nether_air' })

	event.remove({ id: 'gtceu:centrifuge/decomposition_centrifuging__fireclay' })
	event.remove({ id: 'gtceu:arc_furnace/arc_firebricks' })
	event.remove({ id: 'gtceu:macerator/macerate_firebricks' })
	event.remove({ id: 'gtceu:centrifuge/decomposition_centrifuging__ender_eye' })

	event.remove({ id: 'gtceu:smelting/sticky_resin_from_slime' })

	event.remove({ id: 'gtceu:wiremill/string_from_polycaprolactam' })

	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_granite_red' })

	event.remove({ id: 'gtceu:chemical_bath/black_steel_cool_down' })
	event.remove({ id: 'gtceu:chemical_bath/black_steel_cool_down_distilled_water' })
	event.remove({ id: 'gtceu:chemical_bath/red_steel_cool_down' })
	event.remove({ id: 'gtceu:chemical_bath/red_steel_cool_down_distilled_water' })
	event.remove({ id: 'gtceu:chemical_bath/blue_steel_cool_down' })
	event.remove({ id: 'gtceu:chemical_bath/blue_steel_cool_down_distilled_water' })

	event.remove({ id: 'gtceu:compressor/compress_certus_quartz_to_raw_ore_block' })
	event.remove({ id: 'gtceu:compressor/glowstone' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_red_mushroom' })
	event.remove({ id: 'gtceu:compressor/plant_ball_from_brown_mushroom' })

	event.remove({ id: 'gtceu:forming_press/form_purpur_slab_into_pillar' })

	event.remove({ id: 'gtceu:rock_breaker/red_granite' })
	event.remove({ id: 'gtceu:laser_engraver/engrave_red_granite_bricks' })
	event.remove({ id: 'gtceu:laser_extruder/extrude_red_granite_bricks' })
	event.remove({ id: 'gtceu:laser_engraver/engrave_red_granite_tile' })
	event.remove({ id: 'gtceu:laser_engraver/gtceu_red_granite_tile' })
	event.remove({ id: 'gtceu:laser_engraver/engrave_red_granite_small_tile' })
	event.remove({ id: 'gtceu:laser_engraver/engrave_red_granite_windmill_a' })
	event.remove({ id: 'gtceu:laser_engraver/engrave_red_granite_windmill_b' })
	event.remove({ id: 'gtceu:laser_engraver/engrave_small_red_granite_bricks' })
	event.remove({ id: 'gtceu:laser_engraver/engrave_square_red_granite_bricks' })
	event.remove({ id: 'gtceu:laser_engraver/engrave_chiseled_red_granite' })
	event.remove({ id: 'gtceu:mixer/mossy_red_granite_cobblestone_from_moss_block' })
	event.remove({ id: 'greate:mixing/integration/gtceu/mixer/mossy_red_granite_cobblestone_from_moss_block' })
	event.remove({ id: 'greate:mixing/integration/gtceu/mixer/mossy_red_granite_cobblestone_from_vine' })

	event.remove({ id: 'gtceu:lathe/stone_rod_from_cobblestone' })

	// who the hell is grinding metal ingots with their bare hands?
	event.remove({ id: 'gtceu:shaped/mortar_grind_antimony' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_copper' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_gold' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_iron' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_lead' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_nickel' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_silver' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_tin' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_zinc' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_annealed_copper' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_brass' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_bronze' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_electrum' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_invar' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_steel' })
	event.remove({ id: 'gtceu:shaped/mortar_grind_wrought_iron' })

	// Replace by the Heat Exchanger recipe for Mars
	event.remove({ id: 'gtceu:fluid_heater/formamide' })

	// Remove lava bucket from boilers
	event.remove({ id: 'gtceu:steam_boiler/minecraft_lava_bucket' })
	event.remove({ id: 'gtceu:large_boiler/minecraft_lava_bucket' })
	
	// Snow Stuffs

	event.remove({ id: 'gtceu:fluid_solidifier/snow_block' })
	event.remove({ id: 'gtceu:fluid_solidifier/snow_block_distilled' })

	removeCutterRecipe(event, 'snow_layer')
	removeCutterRecipe(event, 'snow_layer_distilled_water')
	removeCutterRecipe(event, 'snow_layer_water')

	// Remove vanilla Eye of Ender

	event.remove({ id: 'minecraft:ender_eye' })

	// Remove GTceu Sticky Resin Centrifuge recipe

	event.remove({ id: 'gtceu:centrifuge/sticky_resin_separation' })

	// Remove old treated plank and wood plank recipe

	event.remove({ id: 'gtceu:compressor/compress_plate_dust_wood' })

	// Remove Default Pressure Plate Recipes
	const MC_PRESSURE_PLATES = [
		'bamboo',
		'polished_blackstone',
		'light_weighted',
		'heavy_weighted',
		'treated'
	]
	MC_PRESSURE_PLATES.forEach(material => {	
		event.remove({ id: `gtceu:shaped/${material}_pressure_plate` })
		event.remove({ id: `gtceu:assembler/${material}_pressure_plate` })	
	})
	
	event.remove({ id: /^gtceu:.*damascus_steel.*/ })

	//removes metal armor
	const armor = [
		'gtceu:bronze_helmet',
		'gtceu:bronze_chestplate',
		'gtceu:bronze_leggings',
		'gtceu:bronze_boots',
		'gtceu:steel_helmet',
		'gtceu:steel_chestplate',
		'gtceu:steel_leggings',
		'gtceu:steel_boots',
		'gtceu:titanium_helmet',
		'gtceu:titanium_chestplate',
		'gtceu:titanium_leggings',
		'gtceu:titanium_boots'
	];
	armor.forEach(armor => {
		event.remove({ output: armor})
	});

	event.remove({ id: 'gtceu:shapeless/centrifuged_ore_to_dust_plutonium' })
	event.remove({ id: 'gtceu:centrifuge/centrifuge_plutonium_dirty_dust_to_dust' })
	event.remove({ id: 'gtceu:centrifuge/centrifuge_plutonium_pure_dust_to_dust' })
	event.remove({ id: 'gtceu:large_chemical_reactor/radon_from_uranium_238' })
	removeMaceratorRecipe(event, 'macerate_plutonium_refined_ore_to_dust')
	event.remove({ id: 'gtceu:ore_washer/wash_plutonium_pure_dust_to_dust' })
	event.remove({ id: 'gtceu:ore_washer/wash_plutonium_dirty_dust_to_dust' })
	event.remove({ id: 'gtceu:forge_hammer/hammer_plutonium_refined_ore_to_dust' })

	
	event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_chromatic_compound' });

	event.remove({ id: 'gtceu:chemical_reactor/soda_ash_from_carbon_dioxide' })
	event.remove({ id: 'gtceu:large_chemical_reactor/soda_ash_from_carbon_dioxide' })

	event.remove({ id: 'gtceu:macerator/macerate_chiseled_sandstone' })
	event.remove({ id: 'gtceu:macerator/macerate_sandstone_wall' })
	event.remove({ id: 'gtceu:macerator/macerate_smooth_sandstone' })
	event.remove({ id: 'gtceu:macerator/macerate_sandstone' })
	event.remove({ id: 'gtceu:macerator/macerate_cut_sandstone' })
}

function removeMaceratorRecipe(event, id) {
	event.remove({ id: `gtceu:macerator/${id}` })
	event.remove({ id: `greate:milling/integration/gtceu/macerator/${id}` })
}

function removeCutterRecipe(event, id) {
	event.remove({ id: `gtceu:cutter/${id}` })
	event.remove({ id: `greate:cutting/integration/gtceu/cutter/${id}` })
}
