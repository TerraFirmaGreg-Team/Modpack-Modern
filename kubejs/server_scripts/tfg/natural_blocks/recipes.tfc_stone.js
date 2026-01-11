// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFCStoneRecipes(event) {

	global.TFC_STONE_TYPES.forEach(stone => {

		let stoneMaterial = TFGHelpers.getMaterial(stone);
		let stoneDust = ChemicalHelper.get(TagPrefix.dust, stoneMaterial, 1)

		// Brick (item)
		event.recipes.gtceu.cutter(`tfg:tfc/${stone}_loose_to_brick`)
			.itemInputs(`tfc:rock/loose/${stone}`)
			.itemOutputs(`tfc:brick/${stone}`)
			.duration(10)
			.EUt(2)

		//#region Raw Stone

		// Breaker Duping
		event.recipes.gtceu.rock_breaker(`${stone}_raw`)
			.notConsumable(`tfc:rock/raw/${stone}`)
			.itemOutputs(`tfc:rock/raw/${stone}`)
			.duration(16)
			.EUt(7)

		// Hammering
		event.recipes.gtceu.forge_hammer(`${stone}_raw_to_cobble`)
			.itemInputs(`tfc:rock/raw/${stone}`)
			.itemOutputs(`tfc:rock/cobble/${stone}`)
			.duration(10)
			.EUt(7)

		event.recipes.greate.pressing(`tfc:rock/cobble/${stone}`, `tfc:rock/raw/${stone}`)
			.recipeTier(0)
			.id(`greate:pressing/${stone}_raw_to_cobble`)

		// Raw Pressure Plate
		event.shaped(`tfc:rock/pressure_plate/${stone}`, [
			' B ',
			'CDC',
			' E '
		], {
			B: '#tfc:hammers',
			C: `tfc:rock/raw/${stone}_slab`,
			D: '#forge:small_springs',
			E: '#forge:tools/screwdrivers'
		}).id(`tfc:crafting/rock/${stone}_pressure_plate`)

		event.recipes.gtceu.assembler(`${stone}_raw_pressure_plate`)
			.itemInputs('#forge:small_springs', `2x tfc:rock/raw/${stone}_slab`)
			.circuit(3)
			.itemOutputs(`2x tfc:rock/pressure_plate/${stone}`)
			.duration(50)
			.EUt(2)

		// Raw Button
		event.remove({ id: `tfc:crafting/rock/${stone}_button` })

		generateCutterRecipe(event, `tfc:rock/pressure_plate/${stone}`, `6x tfc:rock/button/${stone}`, 50, 2, `${stone}_raw_button`)

		// Cobble Packing
		event.recipes.gtceu.packer(`tfc:gtceu/packer/packing_loose_${stone}_to_cobble`)
			.itemInputs(`4x tfc:rock/loose/${stone}`)
			.itemOutputs(`1x tfc:rock/cobble/${stone}`)
			.circuit(1)
			.duration(30)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.packer(`tfc:gtceu/packer/packing_mossy_loose_${stone}_to_cobble`)
			.itemInputs(`4x tfc:rock/mossy_loose/${stone}`)
			.itemOutputs(`1x tfc:rock/mossy_cobble/${stone}`)
			.circuit(1)
			.duration(30)
			.EUt(GTValues.VA[GTValues.ULV])

		// Cobble Unpacking
		event.recipes.gtceu.packer(`tfc:gtceu/packer/unpacking_${stone}_cobble_into_loose`)
			.itemInputs(`1x tfc:rock/cobble/${stone}`)
			.itemOutputs(`4x tfc:rock/loose/${stone}`)
			.circuit(1)
			.duration(20)
			.EUt(GTValues.VA[GTValues.ULV])

		event.recipes.gtceu.packer(`tfc:gtceu/packer/unpacking_mossy_${stone}_cobble_into_loose`)
			.itemInputs(`1x tfc:rock/mossy_cobble/${stone}`)
			.itemOutputs(`4x tfc:rock/mossy_loose/${stone}`)
			.circuit(1)
			.duration(20)
			.EUt(GTValues.VA[GTValues.ULV])

		//#endregion
		
		// #region Stonecutting

		// Raw
		event.remove({ id: `tfc:crafting/rock/${stone}_raw_stairs` })
		event.remove({ id: `tfc:crafting/rock/${stone}_raw_slab` })
		event.remove({ id: `tfc:crafting/rock/${stone}_raw_wall` })

		// Cobble
		event.remove({ id: `tfc:crafting/rock/${stone}_cobble_stairs` })
		event.remove({ id: `tfc:crafting/rock/${stone}_cobble_slab` })
		event.remove({ id: `tfc:crafting/rock/${stone}_cobble_wall` })

		// Mossy Cobble
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_stairs` })
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_slab` })
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_wall` })

		// Smooth
		event.remove({ id: `tfc:crafting/rock/${stone}_smooth_stairs` })
		event.remove({ id: `tfc:crafting/rock/${stone}_smooth_slab` })
		event.remove({ id: `tfc:crafting/rock/${stone}_smooth_wall` })

		// Bricks
		event.remove({ id: `tfc:crafting/rock/${stone}_bricks_stairs` })
		event.remove({ id: `tfc:crafting/rock/${stone}_bricks_slab` })
		event.remove({ id: `tfc:crafting/rock/${stone}_bricks_wall` })

		// Cracked Bricks
		event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_stairs` })
		event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_slab` })
		event.remove({ id: `tfc:crafting/rock/${stone}_cracked_bricks_wall` })

		// Mossy Bricks
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_stairs` })
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_slab` })
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_bricks_wall` })

		// Hardened -> Smooth
		event.stonecutting(`tfc:rock/smooth/${stone}`, `tfc:rock/hardened/${stone}`).id(`hardened_${stone}_to_smooth`)

		// Chiseled Brick -> Brick
		event.stonecutting(`tfc:rock/chiseled/${stone}`, `tfc:rock/bricks/${stone}`).id(`chiseled_${stone}`)

		// #endregion

		//#region Cobblestone

		// Breaker Dupe
		event.recipes.gtceu.rock_breaker(`${stone}_cobble`)
			.notConsumable(`tfc:rock/cobble/${stone}`)
			.itemOutputs(`tfc:rock/cobble/${stone}`)
			.duration(16)
			.EUt(7)

		// Hammering Cobble -> Gravel
		event.recipes.gtceu.forge_hammer(`${stone}_cobble_to_gravel`)
			.itemInputs(`tfc:rock/cobble/${stone}`)
			.itemOutputs(`tfc:rock/gravel/${stone}`)
			.duration(10)
			.EUt(7)

		event.recipes.greate.pressing(`tfc:rock/gravel/${stone}`, `tfc:rock/cobble/${stone}`)
			.recipeTier(0)
			.id(`greate:pressing/${stone}_cobble_to_gravel`)

		// #endregion


		//#region Bricks Glueing

		event.recipes.gtceu.assembler(`bricks_${stone}`)
			.itemInputs(`5x tfc:brick/${stone}`)
			.circuit(1)
			.inputFluids(Fluid.of('gtceu:concrete', 72))
			.itemOutputs(`4x tfc:rock/bricks/${stone}`)
			.duration(50)
			.EUt(2)

		//#endregion

		//#region Cracking Bricks

		event.recipes.gtceu.forge_hammer(`cracked_bricks_${stone}`)
			.itemInputs(`tfc:rock/bricks/${stone}`)
			.itemOutputs(`tfc:rock/cracked_bricks/${stone}`)
			.duration(25)
			.EUt(7)

		event.recipes.greate.pressing(`tfc:rock/cracked_bricks/${stone}`, `tfc:rock/bricks/${stone}`)
			.recipeTier(0)
			.id(`greate:pressing/cracked_bricks_${stone}`)

		//#endregion

		//#region Mossy Cobble

		// Cobble -> Mossy Cobble

		event.recipes.gtceu.assembler(`${stone}_cobble_rocks_to_mossy_cobble`)
			.itemInputs(`tfc:rock/cobble/${stone}`, '#tfc:compost_greens_low')
			.circuit(0)
			.inputFluids("#tfg:clean_water 144")
			.itemOutputs(`tfc:rock/mossy_cobble/${stone}`)
			.duration(50)
			.EUt(2)

		//#endregion

		//#region Bricks -> Mossy Bricks

		event.recipes.gtceu.assembler(`mossy_bricks_${stone}`)
			.itemInputs(`tfc:rock/bricks/${stone}`, '#tfc:compost_greens_low')
			.circuit(0)
			.inputFluids("#tfg:clean_water 144")
			.itemOutputs(`tfc:rock/mossy_bricks/${stone}`)
			.duration(50)
			.EUt(2)

		//#endregion

		//#region Hardened

		event.recipes.gtceu.assembler(`hardened_${stone}`)
			.itemInputs(`5x tfc:rock/raw/${stone}`)
			.circuit(0)
			.inputFluids(Fluid.of('gtceu:concrete', 72))
			.itemOutputs(`2x tfc:rock/hardened/${stone}`)
			.duration(250)
			.EUt(8)

		//#endregion

		//#region Smooth

		event.recipes.gtceu.assembler(`smooth_${stone}`)
			.itemInputs(`8x tfc:rock/raw/${stone}`)
			.circuit(2)
			.inputFluids(Fluid.of('gtceu:concrete', 72))
			.itemOutputs(`8x tfc:rock/smooth/${stone}`)
			.duration(250)
			.EUt(8)

		//#endregion

		//#region Aqueduct

		event.recipes.gtceu.assembler(`aqueduct_${stone}`)
			.itemInputs(`3x tfc:brick/${stone}`)
			.circuit(3)
			.inputFluids(Fluid.of('gtceu:concrete', 16))
			.itemOutputs(`tfc:rock/aqueduct/${stone}`)
			.duration(50)
			.EUt(2)

		//#endregion

		//#region Macerator
		//
		//
		//
		//
		//#region Whole Blocks

		// Raw
		event.recipes.gtceu.macerator(`raw_${stone}_to_dust`)
			.itemInputs(`tfc:rock/raw/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Hardened
		event.recipes.gtceu.macerator(`hardened_${stone}_to_dust`)
			.itemInputs(`tfc:rock/hardened/${stone}`)
			.itemOutputs(stoneDust.withCount(2))
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Cobble
		event.recipes.gtceu.macerator(`cobble_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cobble/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Mossy Cobble
		event.recipes.gtceu.macerator(`mossy_cobble_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_cobble/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Smooth
		event.recipes.gtceu.macerator(`smooth_${stone}_to_dust`)
			.itemInputs(`tfc:rock/smooth/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Bricks
		event.recipes.gtceu.macerator(`bricks_${stone}_to_dust`)
			.itemInputs(`tfc:rock/bricks/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Cracked Bricks
		event.recipes.gtceu.macerator(`cracked_bricks_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cracked_bricks/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Mossy Bricks
		event.recipes.gtceu.macerator(`mossy_bricks_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_bricks/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Chiseled
		event.recipes.gtceu.macerator(`chiseled_${stone}_to_dust`)
			.itemInputs(`tfc:rock/chiseled/${stone}`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		//#endregion

		//#region Stairs

		// Raw
		event.recipes.gtceu.macerator(`raw_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/raw/${stone}_stairs`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Cobble
		event.recipes.gtceu.macerator(`cobble_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cobble/${stone}_stairs`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Mossy Cobble
		event.recipes.gtceu.macerator(`mossy_cobble_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_cobble/${stone}_stairs`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Smooth
		event.recipes.gtceu.macerator(`smooth_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/smooth/${stone}_stairs`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Bricks
		event.recipes.gtceu.macerator(`bricks_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/bricks/${stone}_stairs`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Cracked Bricks
		event.recipes.gtceu.macerator(`cracked_bricks_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cracked_bricks/${stone}_stairs`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Mossy Bricks
		event.recipes.gtceu.macerator(`mossy_bricks_stairs_${stone}_to_dust`)
			.itemInputs(`tfc:rock/mossy_bricks/${stone}_stairs`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		//#endregion

		//#region Slab

		// Raw
		event.recipes.gtceu.macerator(`raw_slab_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/raw/${stone}_slab`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Cobble
		event.recipes.gtceu.macerator(`cobble_slab_${stone}_to_dust`)
			.itemInputs(`tfc:rock/cobble/${stone}_slab`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Mossy Cobble
		event.recipes.gtceu.macerator(`mossy_cobble_slab_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/mossy_cobble/${stone}_slab`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Smooth
		event.recipes.gtceu.macerator(`smooth_slab_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/smooth/${stone}_slab`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Bricks
		event.recipes.gtceu.macerator(`bricks_slab_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/bricks/${stone}_slab`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Cracked Bricks
		event.recipes.gtceu.macerator(`cracked_bricks_slab_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/cracked_bricks/${stone}_slab`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Mossy Bricks
		event.recipes.gtceu.macerator(`mossy_bricks_slab_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/mossy_bricks/${stone}_slab`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		//#endregion

		//#region Walls

		event.recipes.tfc.chisel(`tfc:rock/raw/${stone}_wall`, `tfc:rock/raw/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/cobble/${stone}_wall`, `tfc:rock/cobble/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/smooth/${stone}_wall`, `tfc:rock/smooth/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/bricks/${stone}_wall`, `tfc:rock/bricks/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/cracked_bricks/${stone}_wall`, `tfc:rock/cracked_bricks/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/mossy_cobble/${stone}_wall`, `tfc:rock/mossy_cobble/${stone}_slab`, 'smooth')
		event.recipes.tfc.chisel(`tfc:rock/mossy_bricks/${stone}_wall`, `tfc:rock/mossy_bricks/${stone}_slab`, 'smooth')

		// Raw
		event.recipes.gtceu.macerator(`raw_wall_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/raw/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Cobble
		event.recipes.gtceu.macerator(`cobble_wall_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/cobble/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Mossy Cobble
		event.recipes.gtceu.macerator(`mossy_cobble_wall_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/mossy_cobble/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Smooth
		event.recipes.gtceu.macerator(`smooth_wall_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/smooth/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Bricks
		event.recipes.gtceu.macerator(`bricks_wall_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/bricks/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Cracked Bricks
		event.recipes.gtceu.macerator(`cracked_bricks_wall_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/cracked_bricks/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		// Mossy Bricks
		event.recipes.gtceu.macerator(`mossy_bricks_wall_${stone}_to_dust`)
			.itemInputs(`2x tfc:rock/mossy_bricks/${stone}_wall`)
			.itemOutputs(stoneDust)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING)

		//#endregion

		//#region Recycle beam
		let dustSmall = ChemicalHelper.get(TagPrefix.dustSmall, stoneMaterial, 1);
		event.recipes.gtceu.macerator(`${stone}_support_to_dust`)
			.itemInputs(`tfg:${stone}_support`)
			.itemOutputs(dustSmall)
			.duration(150)
			.EUt(2)
			.category(GTRecipeCategories.MACERATOR_RECYCLING);

		//#endregion
		//#endregion

		event.recipes.tfc.collapse(`tfc:rock/cobble/${stone}`, `#forge:ores_in_ground/${stone}`)
			.id(`tfg:collapse/${stone}_gt_ores`)
	})
}