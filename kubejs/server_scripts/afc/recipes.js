/**
 * 
 * @param {Internal.RecipesEventJS} event 
 */
const registerAFCRecipes = (event) => {

	// #region Removes

	global.AFC_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	event.remove({ id: "afc:pot/rubber" })
	event.remove({ id: "afc:tree_tapping/hevea_latex" })
	event.remove({ id: "afc:tree_tapping/rubber_fig_latex" })

	// #endregion

	// #region Wood crafts

	global.AFC_WOOD_TYPES.forEach(wood => {
		event.remove({ id: `afc:crafting/wood/${wood}_axle` })
		event.remove({ id: `afc:crafting/wood/${wood}_bladed_axle` })
		event.remove({ id: `afc:crafting/wood/${wood}_encased_axle` })
		event.remove({ id: `afc:crafting/wood/${wood}_clutch` })
		event.remove({ id: `afc:crafting/wood/${wood}_gear_box` })
		event.remove({ id: `afc:crafting/wood/${wood}_water_wheel` })

		// Бревна -> Пиломатериалы
		generateCutterRecipe(event, `#afc:${wood}_logs`, `16x afc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_log`)

		// Доски -> Пиломатериалы
		generateCutterRecipe(event, `afc:wood/planks/${wood}`, `4x afc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_planks`)

		// Ступень -> Пиломатериалы
		generateCutterRecipe(event, `afc:wood/planks/${wood}_stairs`, `3x afc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_stairs`)


		// Плита -> Пиломатериалы
		generateCutterRecipe(event, `afc:wood/planks/${wood}_slab`, `2x afc:wood/lumber/${wood}`, 400, 10, `${wood}_lumber_from_slab`)

		// ? -> Деревянная нажимная пластина
		event.shaped(`afc:wood/planks/${wood}_pressure_plate`, [
			'ABA',
			'CDC',
			'AEA'
		], {
			A: '#forge:screws/wood',
			B: '#tfc:hammers',
			C: `afc:wood/planks/${wood}_slab`,
			D: '#forge:springs',
			E: '#forge:tools/screwdrivers'
		}).id(`afc:crafting/wood/${wood}_pressure_plate`)

		event.recipes.gtceu.assembler(`${wood}_pressure_plate`)
			.itemInputs('#forge:springs', `2x afc:wood/planks/${wood}_slab`)
			.circuit(0)
			.itemOutputs(`2x afc:wood/planks/${wood}_pressure_plate`)
			.duration(50)
			.EUt(2)

		// ? -> Деревянная кнопка
		event.remove({ id: `afc:crafting/wood/${wood}_button` })

		generateCutterRecipe(event, `afc:wood/planks/${wood}_pressure_plate`, `6x afc:wood/planks/${wood}_button`, 50, 2, `${wood}_button`)
	})

	// #endregion

	event.shapeless("afc:tree_tap", "treetap:tap")

	event.recipes.tfc.anvil('afc:tree_tap', '#forge:ingots/copper', ["hit_last", "upset_second_last", "upset_third_last"])
		.tier(1)
		.bonus(false)
		.id('afc:anvil/tree_tap')

	// TreeTap Heating
	event.recipes.tfc.heating('afc:tree_tap', 1080)
		.resultFluid(Fluid.of('gtceu:copper', 144))
		.id('tfg:heating/tree_tap')

	//Custom rubber and hevea tappings
	//Hevea is the most efficient but requires the warmest temperatures
	//Rubber fig requires average temperatures and its mildly efficient
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/hevea"))
		.resultFluid(Fluid.of("tfg:latex", 3))
		.minTemp(22)
		.id("tfg:tree_tapping/latex/hevea")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_hevea"))
		.resultFluid(Fluid.of("tfg:latex", 3))
		.minTemp(22)
		.id("tfg:tree_tapping/latex/ancient_hevea")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/rubber_fig"))
		.resultFluid(Fluid.of("tfg:latex", 2))
		.minTemp(12)
		.id("tfg:tree_tapping/latex/rubber_fig")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_rubber_fig"))
		.resultFluid(Fluid.of("tfg:latex", 2))
		.minTemp(12)
		.id("tfg:tree_tapping/latex/ancient_rubber_fig")

	//Kapok Grandfathered, least efficient but works as long as the temperature is not freezing
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/kapok"))
		.resultFluid(Fluid.of("tfg:latex", 1))
		.minTemp(1)
		.id("tfg:tree_tapping/kapok_latex")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_kapok"))
		.resultFluid(Fluid.of("tfg:latex", 1))
		.minTemp(1)
		.id("tfg:tree_tapping/ancient_kapok_latex")


	// Pine/etc resin
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/aspen"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-10)
		.id("tfg:tree_tapping/aspen_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_aspen"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-10)
		.id("tfg:tree_tapping/ancient_aspen_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/spruce"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 4))
		.minTemp(-15)
		.id("tfg:tree_tapping/spruce_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_spruce"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 4))
		.minTemp(-15)
		.id("tfg:tree_tapping/ancient_spruce_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/white_cedar"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 3))
		.minTemp(-8)
		.id("tfg:tree_tapping/white_cedar_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_white_cedar"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 3))
		.minTemp(-8)
		.id("tfg:tree_tapping/ancient_white_cedar_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/douglas_fir"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-8)
		.id("tfg:tree_tapping/douglas_fir_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_douglas_fir"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-8)
		.id("tfg:tree_tapping/ancient_douglas_fir_resin")
}