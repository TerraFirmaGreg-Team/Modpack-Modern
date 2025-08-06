"use strict";

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
		generateCutterRecipe(event, `#afc:${wood}_logs`, `16x afc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_log`)

		// Доски -> Пиломатериалы
		generateCutterRecipe(event, `afc:wood/planks/${wood}`, `4x afc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_planks`)

		// Ступень -> Пиломатериалы
		generateCutterRecipe(event, `afc:wood/planks/${wood}_stairs`, `3x afc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_stairs`)


		// Плита -> Пиломатериалы
		generateCutterRecipe(event, `afc:wood/planks/${wood}_slab`, `2x afc:wood/lumber/${wood}`, 50, 7, `${wood}_lumber_from_slab`)


		
		// ? -> Деревянная нажимная пластина
		event.shaped(`afc:wood/planks/${wood}_pressure_plate`, [
			' B ',
			'CDC',
			' E '
		], {
			B: '#tfc:hammers',
			C: `afc:wood/planks/${wood}_slab`,
			D: '#forge:small_springs',
			E: '#forge:tools/screwdrivers'
		}).id(`afc:crafting/wood/${wood}_pressure_plate`)

		event.recipes.gtceu.assembler(`${wood}_pressure_plate`)
			.itemInputs('#forge:small_springs', `2x afc:wood/planks/${wood}_slab`)
			.circuit(0)
			.itemOutputs(`2x afc:wood/planks/${wood}_pressure_plate`)
			.duration(50)
			.EUt(2)

		// ? -> Деревянная кнопка
		event.remove({ id: `afc:crafting/wood/${wood}_button` })

		generateCutterRecipe(event, `afc:wood/planks/${wood}_pressure_plate`, `6x afc:wood/planks/${wood}_button`, 50, 2, `${wood}_button`)
		
		//Stomping Barrel
		event.remove({ id: `afc:crafting/wood/${wood}_stomping_barrel`})
		
		event.shaped(`afc:wood/stomping_barrel/${wood}`, [
			'ABA',
			'AAA',
			'BBB'
		], {
			A: `afc:wood/lumber/${wood}`,
			B: 'tfc:glue'
			
		}).id(`afc:crafting/wood/${wood}_stomping_barrel`)
		
	})

	// #endregion

	event.recipes.tfc.anvil('afc:tree_tap', '#forge:ingots/copper', ["hit_last", "upset_second_last", "upset_third_last"])
		.tier(1)
		.bonus(false)
		.id('afc:anvil/tree_tap')

	event.recipes.gtceu.assembler('afc:tree_tap')
		.itemInputs('#forge:ingots/copper')
		.circuit(3)
		.itemOutputs('afc:tree_tap')
		.duration(50)
		.EUt(7)

	// TreeTap Heating
	event.recipes.tfc.heating('afc:tree_tap', 1080)
		.resultFluid(Fluid.of('gtceu:copper', 144))
		.id('tfg:heating/tree_tap')

	//Custom rubber and hevea tappings
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/rubber_fig"))
		.resultFluid(Fluid.of("tfg:latex", 1))
		.minTemp(4)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/rubber_fig")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_rubber_fig"))
		.resultFluid(Fluid.of("tfg:latex", 1))
		.minTemp(4)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/ancient_rubber_fig")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/hevea"))
		.resultFluid(Fluid.of("tfg:latex", 2))
		.minTemp(8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/hevea")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_hevea"))
		.resultFluid(Fluid.of("tfg:latex", 2))
		.minTemp(8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/ancient_hevea")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/kapok"))
		.resultFluid(Fluid.of("tfg:latex", 3))
		.minTemp(12)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/kapok_latex")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_kapok"))
		.resultFluid(Fluid.of("tfg:latex", 3))
		.minTemp(12)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_kapok_latex")


	// Pine/etc resin
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/aspen"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-10)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/aspen_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_aspen"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-10)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_aspen_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/spruce"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 4))
		.minTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/spruce_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_spruce"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 4))
		.minTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_spruce_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/white_cedar"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 3))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/white_cedar_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_white_cedar"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 3))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_white_cedar_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/douglas_fir"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/douglas_fir_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/ancient_douglas_fir"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_douglas_fir_resin")


	event.recipes.gtceu.extractor('latex_from_log')
		.itemInputs('#tfg:latex_logs')
		.outputFluids(Fluid.of('tfg:latex', 250))
		.duration(600)
		.EUt(20)

	event.recipes.gtceu.extractor('latex_from_sapling')
		.itemInputs('#tfg:rubber_saplings')
		.outputFluids(Fluid.of('tfg:latex', 100))
		.duration(750)
		.EUt(20)

	event.recipes.gtceu.extractor('latex_from_leaves')
		.itemInputs('#tfg:rubber_leaves')
		.outputFluids(Fluid.of('tfg:latex', 50))
		.duration(750)
		.EUt(20)

	event.replaceOutput({ id: 'gtceu:centrifuge/sticky_resin_separation' }, 'gtceu:raw_rubber_dust', '3x gtceu:carbon_dust')

	//#endregion

	// Из бревна капока
	event.recipes.gtceu.centrifuge('rubber_log_separation')
		.itemInputs('#tfg:latex_logs')
		.chancedOutput('gtceu:raw_rubber_dust', 5000, 1200)
		.chancedOutput('gtceu:plant_ball', 3750, 900)
		.chancedOutput('gtceu:sticky_resin', 2500, 600)
		.chancedOutput('gtceu:wood_dust', 2500, 700)
		.outputFluids(Fluid.of('gtceu:methane', 60))
		.duration(200)
		.EUt(20)

	event.recipes.gtceu.centrifuge('conifer_log_separation')
		.itemInputs('#tfg:rosin_logs')
		.chancedOutput('tfg:conifer_rosin', 7500, 1200)
		.chancedOutput('gtceu:plant_ball', 3750, 900)
		.chancedOutput('gtceu:sticky_resin', 2500, 600)
		.chancedOutput('gtceu:wood_dust', 2500, 700)
		.outputFluids(Fluid.of('gtceu:methane', 60))
		.duration(200)
		.EUt(20)

	event.recipes.gtceu.centrifuge('maple_syrup_log_separation')
		.itemInputs('#tfc:maple_logs')
		.chancedOutput('afc:maple_sugar', 7500, 1200)
		.chancedOutput('gtceu:plant_ball', 3750, 900)
		.chancedOutput('gtceu:wood_dust', 2500, 700)
		.outputFluids(Fluid.of('gtceu:methane', 60), Fluid.of('afc:maple_syrup', 100))
		.duration(200)
		.EUt(20)

	event.recipes.gtceu.centrifuge('birch_syrup_log_separation')
		.itemInputs('#tfc:birch_logs')
		.chancedOutput('afc:birch_sugar', 7500, 1200)
		.chancedOutput('gtceu:plant_ball', 3750, 900)
		.chancedOutput('gtceu:wood_dust', 2500, 700)
		.outputFluids(Fluid.of('gtceu:methane', 60), Fluid.of('afc:birch_syrup', 100))
		.duration(200)
		.EUt(20)

	//#endregion

	//region gt sap processing
	event.recipes.gtceu.fluid_heater('maple_sap_condense')
		.inputFluids(Fluid.of('afc:maple_sap', 4000))
		.outputFluids(Fluid.of('afc:maple_syrup', 100))
		.duration(20*25)
		.EUt(GTValues.VA[GTValues.ULV])
	event.recipes.gtceu.fluid_heater('birch_sap_condense')
		.inputFluids(Fluid.of('afc:birch_sap', 8000))
		.outputFluids(Fluid.of('afc:birch_syrup', 100))
		.duration(20*35)
		.EUt(GTValues.VA[GTValues.ULV])
	
	
	//endregion

	event.recipes.gtceu.fluid_solidifier('maple_syrup')
		.inputFluids(Fluid.of('afc:maple_syrup', 100))
		.itemOutputs('afc:maple_sugar')
		.duration(500)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.fluid_solidifier('birch_syrup')
		.inputFluids(Fluid.of('afc:birch_syrup', 100))
		.itemOutputs('afc:birch_sugar')
		.duration(500)
		.EUt(GTValues.VA[GTValues.ULV])

	// Stripped logs

	global.AFC_WOOD_TYPES.forEach(wood => {
		event.recipes.gtceu.lathe(`tfg:stripping_${wood}_log`)
			.itemInputs(`afc:wood/log/${wood}`)
			.itemOutputs(`afc:wood/stripped_log/${wood}`)
			.duration(50)
			.EUt(2)

		event.recipes.gtceu.lathe(`tfg:stripping_${wood}_wood`)
			.itemInputs(`afc:wood/wood/${wood}`)
			.itemOutputs(`afc:wood/stripped_wood/${wood}`)
			.duration(50)
			.EUt(2)

		event.custom({
			type: 'vintageimprovements:turning',
			ingredients: [{ item: `afc:wood/log/${wood}` }],
			results: [{ item: `afc:wood/stripped_log/${wood}` }],
			processingTime: 50
		}).id(`tfg:vi/lathe/stripping_${wood}_log`)

		event.custom({
			type: 'vintageimprovements:turning',
			ingredients: [{ item: `afc:wood/wood/${wood}` }],
			results: [{ item: `afc:wood/stripped_wood/${wood}` }],
			processingTime: 50
		}).id(`tfg:vi/lathe/stripping_${wood}_wood`)
	})
}