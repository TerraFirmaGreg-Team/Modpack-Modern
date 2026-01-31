// priority: 0
"use strict";

/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
function registerTFCStoneRecipes(event) {

	global.TFC_STONE_TYPES.forEach(stone => {

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

		event.shapeless(`3x tfc:rock/button/${stone}`, [`tfc:rock/pressure_plate/${stone}`, '#forge:tools/saws'])
			.id(`tfg:shapeless/${stone}_pressure_plate_to_button`)
		
		// #region Stonecutting
		// Raw
		event.remove({ id: `tfc:crafting/rock/${stone}_raw_stairs` })
		event.remove({ id: `tfc:crafting/rock/${stone}_raw_slab` })
		event.remove({ id: `tfc:crafting/rock/${stone}_raw_wall` })

		// Cobble
		event.remove({ id: `tfc:crafting/rock/${stone}_cobble_stairs` })
		event.remove({ id: `tfc:crafting/rock/${stone}_cobble_slab` })
		event.remove({ id: `tfc:crafting/rock/${stone}_cobble_wall` })
		event.remove({ id: `tfc:crafting/rock/${stone}_cobble_wall_undo` })

		// Mossy Cobble
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_stairs` })
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_slab` })
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_wall` })
		event.remove({ id: `tfc:crafting/rock/${stone}_mossy_cobble_wall_undo` })

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
		// #endregion
	})
}