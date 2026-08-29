// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
function removeGTCEURecipes(event) {

	event.replaceInput({ input: "gtceu:wood_drum" }, "gtceu:wood_drum", "minecraft:glass")
	event.replaceInput({ input: "minecraft:chest" }, "minecraft:chest", "#forge:chests/wooden")


	//#region Stone

	removeMaceratorRecipe(event, "macerate_stone_stairs")
	removeMaceratorRecipe(event, "macerate_stone_slab")
	removeMaceratorRecipe(event, "macerate_stone_button")
	removeMaceratorRecipe(event, "macerate_stone_brick_stairs")
	removeMaceratorRecipe(event, "macerate_stone_brick_slab")
	removeMaceratorRecipe(event, "macerate_red_sandstone_stairs")
	removeMaceratorRecipe(event, "macerate_red_sandstone_slab")
	removeMaceratorRecipe(event, "macerate_cobblestone_slab")
	removeMaceratorRecipe(event, "macerate_stone_bricks")
	removeMaceratorRecipe(event, "macerate_mossy_cobblestone")
	removeMaceratorRecipe(event, "macerate_cobblestone_wall")
	removeMaceratorRecipe(event, "macerate_cobblestone")
	removeMaceratorRecipe(event, "gravel_to_flint")
	removeMaceratorRecipe(event, "macerate_furnace")
	removeCutterRecipe(event, "cut_stone_block_to_plate")
	removeCutterRecipe(event, "cut_stone_block_to_plate_water")
	removeCutterRecipe(event, "cut_stone_block_to_plate_distilled_water")

	//#endregion

	//#region Deepslate

	removeCutterRecipe(event, "cut_cobbled_deepslate_into_slab")
	removeCutterRecipe(event, "cut_cobbled_deepslate_into_slab_water")
	removeCutterRecipe(event, "cut_cobbled_deepslate_into_slab_distilled_water")

	removeCutterRecipe(event, "cut_polished_deepslate_into_slab")
	removeCutterRecipe(event, "cut_polished_deepslate_into_slab_water")
	removeCutterRecipe(event, "cut_polished_deepslate_into_slab_distilled_water")

	removeCutterRecipe(event, "cut_deepslate_bricks_into_slab")
	removeCutterRecipe(event, "cut_deepslate_bricks_into_slab_water")
	removeCutterRecipe(event, "cut_deepslate_bricks_into_slab_distilled_water")

	removeCutterRecipe(event, "cut_deepslate_tile_into_slab")
	removeCutterRecipe(event, "cut_deepslate_tile_into_slab_water")
	removeCutterRecipe(event, "cut_deepslate_tile_into_slab_distilled_water")

	// #endregion

	// #region Blackstone

	removeCutterRecipe(event, "cut_blackstone_into_slab")
	removeCutterRecipe(event, "cut_blackstone_into_slab_water")
	removeCutterRecipe(event, "cut_blackstone_into_slab_distilled_water")

	removeCutterRecipe(event, "cut_polished_blackstone_into_slab")
	removeCutterRecipe(event, "cut_polished_blackstone_into_slab_water")
	removeCutterRecipe(event, "cut_polished_blackstone_into_slab_distilled_water")

	removeCutterRecipe(event, "cut_polished_blackstone_brick_into_slab")
	removeCutterRecipe(event, "cut_polished_blackstone_brick_into_slab_water")
	removeCutterRecipe(event, "cut_polished_blackstone_brick_into_slab_distilled_water")

	// #endregion

	// Wrought Iron Nugget
	event.remove({ output: "gtceu:wrought_iron_nugget", type: "minecraft:smelting" })

	removeMaceratorRecipe(event, "macerate_iron_trapdoor")
	removeMaceratorRecipe(event, "macerate_furnace_minecart")
	removeMaceratorRecipe(event, "macerate_bucket")

	removeMaceratorRecipe(event, "macerate_nether_brick_stairs")
	removeMaceratorRecipe(event, "macerate_nether_brick_slab")
	removeMaceratorRecipe(event, "macerate_nether_bricks")
	removeMaceratorRecipe(event, "macerate_chiseled_nether_bricks")

	removeMaceratorRecipe(event, "macerate_bronze_machine_casing")
	removeMaceratorRecipe(event, "macerate_lp_steam_extractor")
	removeMaceratorRecipe(event, "macerate_lp_steam_macerator")
	removeMaceratorRecipe(event, "macerate_lp_steam_compressor")
	removeMaceratorRecipe(event, "macerate_lp_steam_forge_hammer")
	removeMaceratorRecipe(event, "macerate_lp_steam_furnace")
	removeMaceratorRecipe(event, "macerate_lp_steam_alloy_smelter")
	removeMaceratorRecipe(event, "macerate_lp_steam_rock_crusher")
	removeMaceratorRecipe(event, "macerate_steam_miner_bronze")
	removeMaceratorRecipe(event, "macerate_steam_miner_steel")

	removeMaceratorRecipe(event, "macerate_bricks")
	removeMaceratorRecipe(event, "macerate_brick_stairs")
	removeMaceratorRecipe(event, "macerate_brick_slab")
	removeMaceratorRecipe(event, "macerate_brick_wall")
	removeMaceratorRecipe(event, "macerate_flower_pot")
	removeMaceratorRecipe(event, "macerate_netherrack")
	removeMaceratorRecipe(event, "macerate_red_nether_bricks")
	removeMaceratorRecipe(event, "macerate_red_nether_brick_wall")
	removeMaceratorRecipe(event, "macerate_blaze_rod")

	removeMaceratorRecipe(event, "macerate_marble")
	removeMaceratorRecipe(event, "macerate_red_granite")
	removeMaceratorRecipe(event, "macerate_calcite")
	removeMaceratorRecipe(event, "macerate_wool")
	removeMaceratorRecipe(event, "macerate_hay_block")

	removeCutterRecipe(event, "snow_layer")
	removeCutterRecipe(event, "snow_layer_distilled_water")
	removeCutterRecipe(event, "snow_layer_water")

	removeMaceratorRecipe(event, "macerate_plutonium_refined_ore_to_dust")
}

function removeMaceratorRecipe(event, id) {
	event.remove({ id: `gtceu:macerator/${id}` })
	event.remove({ id: `greate:milling/integration/gtceu/macerator/${id}` })
	event.remove({ id: `greate:crushing/integration/gtceu/macerator/${id}` })
}

function removeCutterRecipe(event, id) {
	event.remove({ id: `gtceu:cutter/${id}` })
	event.remove({ id: `greate:cutting/integration/gtceu/cutter/${id}` })
}
