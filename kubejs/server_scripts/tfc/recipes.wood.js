// priority: 0
"use strict";

function registerTFCWoodRecipes(event) {

	event.replaceInput({ output: '#tfc:sewing_tables'}, '#forge:shears', '#forge:tools/knives')
	
	// Какие то рецепты дерева
	global.TFC_WOOD_TYPES.forEach(wood => {
		event.remove({ id: `tfc:crafting/wood/${wood}_axle` })
		event.remove({ id: `tfc:crafting/wood/${wood}_bladed_axle` })
		event.remove({ id: `tfc:crafting/wood/${wood}_encased_axle` })
		event.remove({ id: `tfc:crafting/wood/${wood}_clutch` })
		event.remove({ id: `tfc:crafting/wood/${wood}_gear_box` })
		event.remove({ id: `tfc:crafting/wood/${wood}_water_wheel` })

		// Бревна -> Пиломатериалы
		generateCutterRecipe(event, `#tfc:${wood}_logs`, `16x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_log`)

		// Доски -> Пиломатериалы
		generateCutterRecipe(event, `tfc:wood/planks/${wood}`, `4x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_planks`)

		// Ступень -> Пиломатериалы
		generateCutterRecipe(event, `tfc:wood/planks/${wood}_stairs`, `3x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_stairs`)


		// Плита -> Пиломатериалы
		generateCutterRecipe(event, `tfc:wood/planks/${wood}_slab`, `2x tfc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_slab`)

		// ? -> Деревянная нажимная пластина
		event.shaped(`tfc:wood/planks/${wood}_pressure_plate`, [
			' B ',
			'CDC',
			' E '
		], {
			B: '#tfc:hammers',
			C: `tfc:wood/planks/${wood}_slab`,
			D: '#forge:small_springs',
			E: '#forge:tools/screwdrivers'
		}).id(`tfc:crafting/wood/${wood}_pressure_plate`)

		event.recipes.gtceu.assembler(`${wood}_pressure_plate`)
			.itemInputs('#forge:small_springs', `2x tfc:wood/planks/${wood}_slab`)
			.circuit(3)
			.itemOutputs(`2x tfc:wood/planks/${wood}_pressure_plate`)
			.duration(50)
			.EUt(2)

		// ? -> Деревянная кнопка
		event.remove({ id: `tfc:crafting/wood/${wood}_button` })

		generateCutterRecipe(event, `tfc:wood/planks/${wood}_pressure_plate`, `6x tfc:wood/planks/${wood}_button`, 50, 7, `${wood}_button`)

	})
}