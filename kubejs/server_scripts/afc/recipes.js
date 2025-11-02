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
	event.remove({ id: "afc:crafting/1_birch_sugar"})
	event.remove({ id: "afc:crafting/1_maple_sugar"})
	event.remove({ id: "afc:crafting/0_birch_sugar_bucket"})
	event.remove({ id: "afc:crafting/0_maple_sugar_bucket"})


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
			.circuit(3)
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

	event.recipes.gtceu.extruder('afc:tree_tap')
		.itemInputs('#forge:ingots/copper')
		.notConsumable('gtceu:bottle_extruder_mold')
		.itemOutputs('afc:tree_tap')
		.duration(50)
		.EUt(7)
		.addMaterialInfo(true)

	// TreeTap Heating
	event.recipes.tfc.heating('afc:tree_tap', 1080)
		.resultFluid(Fluid.of('gtceu:copper', 144))
		.id('tfg:heating/tree_tap')

	//Custom rubber and hevea tappings
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/rubber_fig"))
		.resultFluid(Fluid.of("tfg:latex", 2))
		.minTemp(4)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/rubber_fig")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_rubber_fig"))
		.resultFluid(Fluid.of("tfg:latex", 2))
		.minTemp(4)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/ancient_rubber_fig")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/hevea"))
		.resultFluid(Fluid.of("tfg:latex", 3))
		.minTemp(8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/hevea")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_hevea"))
		.resultFluid(Fluid.of("tfg:latex", 3))
		.minTemp(8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/latex/ancient_hevea")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/kapok"))
		.resultFluid(Fluid.of("tfg:latex", 4))
		.minTemp(12)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/kapok_latex")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_kapok"))
		.resultFluid(Fluid.of("tfg:latex", 4))
		.minTemp(12)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_kapok_latex")


	// Pine/etc resin
	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/aspen"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-10)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/aspen_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_aspen"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-10)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_aspen_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/spruce"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 4))
		.minTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/spruce_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_spruce"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 4))
		.minTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_spruce_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient("tfc:wood/log/white_cedar"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 3))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/white_cedar_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_white_cedar"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 3))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_white_cedar_resin")

	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/douglas_fir'))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/douglas_fir_resin")
	event.recipes.afc.tree_tapping(TFC.blockIngredient("afc:wood/log/ancient_douglas_fir"))
		.resultFluid(Fluid.of('tfg:conifer_pitch', 2))
		.minTemp(-8)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/ancient_douglas_fir_resin")

	//Syrups
	event.remove({ id: "afc:tree_tapping/maple_syrup" })
	event.remove({ id: "afc:tree_tapping/birch_syrup" })

	event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/maple'))
		.resultFluid(Fluid.of('afc:maple_sap', 5))
		.minTemp(-15)
		.maxTemp(5)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/maple_log")
	
		event.recipes.afc.tree_tapping(TFC.blockIngredient('tfc:wood/log/birch'))
		.resultFluid(Fluid.of('afc:birch_sap', 5))
		.minTemp(-15)
		.maxTemp(5)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/birch_log")

	// Mars stuff

	event.recipes.afc.tree_tapping(TFC.blockIngredient('beneath:wood/log/crimson'))
		.resultFluid(Fluid.of('tfg:crimsene', 1))
		.minTemp(-110)
		.maxTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/crimson_log")

	event.recipes.afc.tree_tapping(TFC.blockIngredient('beneath:wood/wood/crimson'))
		.resultFluid(Fluid.of('tfg:crimsene', 1))
		.minTemp(-110)
		.maxTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/crimson_wood")

	event.recipes.afc.tree_tapping(TFC.blockIngredient('beneath:wood/log/warped'))
		.resultFluid(Fluid.of('tfg:warpane', 1))
		.minTemp(-110)
		.maxTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/warped_log")
		
	event.recipes.afc.tree_tapping(TFC.blockIngredient('beneath:wood/wood/warped'))
		.resultFluid(Fluid.of('tfg:warpane', 1))
		.minTemp(-110)
		.maxTemp(-15)
		.requiresNaturalLog(true)
		.id("tfg:tree_tapping/warped_wood")

	//#region Extractor Recipe

	// Latex

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

	// Conifer Pitch

	event.recipes.gtceu.extractor('conifer_from_log')
		.itemInputs('#tfg:rosin_logs')
		.outputFluids(Fluid.of('tfg:conifer_pitch', 250))
		.duration(600)
		.EUt(20)

	event.recipes.gtceu.extractor('conifer_from_sapling')
		.itemInputs('#tfg:rosin_saplings')
		.outputFluids(Fluid.of('tfg:conifer_pitch', 100))
		.duration(750)
		.EUt(20)

	event.recipes.gtceu.extractor('conifer_from_leaves')
		.itemInputs('#tfg:rosin_leaves')
		.outputFluids(Fluid.of('tfg:conifer_pitch', 50))
		.duration(750)
		.EUt(20)

	// Maple Sirup

	event.recipes.gtceu.extractor('maple_from_log')
		.itemInputs('#tfc:maple_logs')
		.outputFluids(Fluid.of('afc:maple_sap', 250))
		.duration(600)
		.EUt(20)

	event.recipes.gtceu.extractor('maple_from_sapling')
		.itemInputs('#tfg:maple_saplings')
		.outputFluids(Fluid.of('afc:maple_sap', 100))
		.duration(750)
		.EUt(20)

	event.recipes.gtceu.extractor('maple_from_leaves')
		.itemInputs('#tfg:maple_leaves')
		.outputFluids(Fluid.of('afc:maple_sap', 50))
		.duration(750)
		.EUt(20)

	// Birch Sirup

	event.recipes.gtceu.extractor('birch_from_log')
		.itemInputs('#tfc:birch_logs')
		.outputFluids(Fluid.of('afc:birch_sap', 250))
		.duration(600)
		.EUt(20)

	event.recipes.gtceu.extractor('birch_from_sapling')
		.itemInputs('tfc:wood/sapling/birch')
		.outputFluids(Fluid.of('afc:birch_sap', 100))
		.duration(750)
		.EUt(20)

	event.recipes.gtceu.extractor('birch_from_leaves')
		.itemInputs('tfc:wood/leaves/birch')
		.outputFluids(Fluid.of('afc:birch_sap', 50))
		.duration(750)
		.EUt(20)

	//#endregion

	// Из бревна капока / Logs Centrifuge
	event.recipes.gtceu.centrifuge('rubber_log_separation')
		.itemInputs('#tfg:latex_logs')
		.chancedOutput('gtceu:raw_rubber_dust', 5000, 0)
		.chancedOutput('gtceu:plant_ball', 3750, 0)
		.chancedOutput('gtceu:sticky_resin', 2500, 0)
		.chancedOutput('gtceu:wood_dust', 2500, 0)
		.outputFluids(Fluid.of('gtceu:methane', 60))
		.duration(20*20)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.centrifuge('conifer_log_separation')
		.itemInputs('#tfg:rosin_logs')
		.chancedOutput('tfg:conifer_rosin', 7500, 0)
		.chancedOutput('gtceu:plant_ball', 3750, 0)
		.chancedOutput('gtceu:sticky_resin', 2500, 0)
		.chancedOutput('gtceu:wood_dust', 2500, 0)
		.outputFluids(Fluid.of('gtceu:methane', 60))
		.duration(20*20)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.centrifuge('maple_syrup_log_separation')
		.itemInputs('#tfc:maple_logs')
		.chancedOutput('afc:maple_sugar', 7500, 0)
		.chancedOutput('gtceu:plant_ball', 3750, 0)
		.chancedOutput('gtceu:hardwood_dust', 2500, 0)
		.outputFluids(Fluid.of('gtceu:methane', 60), Fluid.of('afc:maple_syrup', 100))
		.duration(20*20)
		.EUt(GTValues.VA[GTValues.MV])

	event.recipes.gtceu.centrifuge('birch_syrup_log_separation')
		.itemInputs('#tfc:birch_logs')
		.chancedOutput('afc:birch_sugar', 7500, 0)
		.chancedOutput('gtceu:plant_ball', 3750, 0)
		.chancedOutput('gtceu:hardwood_dust', 2500, 0)
		.outputFluids(Fluid.of('gtceu:methane', 60), Fluid.of('afc:birch_syrup', 100))
		.duration(20*20)
		.EUt(GTValues.VA[GTValues.MV])

	//#endregion

	//region gt sap processing

	event.recipes.gtceu.fluid_heater('maple_sap_condense')
		.inputFluids(Fluid.of('afc:maple_sap', 1000))
		.outputFluids(Fluid.of('afc:maple_syrup', 100))
		.duration(20*25)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.fluid_heater('birch_sap_condense')
		.inputFluids(Fluid.of('afc:birch_sap', 1000))
		.outputFluids(Fluid.of('afc:birch_syrup', 100))
		.duration(20*35)
		.EUt(GTValues.VA[GTValues.ULV])
	
	
	//endregion

	event.recipes.gtceu.fluid_solidifier('maple_syrup')
		.inputFluids(Fluid.of('afc:maple_syrup', 100))
		.itemOutputs('afc:maple_sugar')
		.duration(20*12)
		.EUt(GTValues.VHA[GTValues.ULV])

	event.recipes.gtceu.fluid_solidifier('birch_syrup')
		.inputFluids(Fluid.of('afc:birch_syrup', 100))
		.itemOutputs('afc:birch_sugar')
		.duration(20*12)
		.EUt(GTValues.VHA[GTValues.ULV])


	// Syrup into sugar

	event.recipes.tfc.barrel_sealed(24000)
	.inputFluid(Fluid.of('afc:maple_syrup', 100))
	.outputItem('afc:maple_sugar')
	.id('tfg:barrel/maple_syrup_to_sugar')

	event.recipes.tfc.barrel_sealed(24000)
	.inputFluid(Fluid.of('afc:birch_syrup', 100))
	.outputItem('afc:birch_sugar')
	.id('tfg:barrel/birch_syrup_to_sugar')


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
			type: 'vintageimprovements:polishing',
			ingredients: [{ item: `afc:wood/log/${wood}` }],
			results: [{ item: `afc:wood/stripped_log/${wood}` }],
			speed_limits: 0,
			processingTime: 50
		}).id(`tfg:vi/lathe/stripping_${wood}_log`)

		event.custom({
			type: 'vintageimprovements:polishing',
			ingredients: [{ item: `afc:wood/wood/${wood}` }],
			results: [{ item: `afc:wood/stripped_wood/${wood}` }],
			speed_limits: 0,
			processingTime: 50
		}).id(`tfg:vi/lathe/stripping_${wood}_wood`)
	})

	const MORE_STRIPPING = [
		{ wood: 'black_oak', stripped: 'oak', stripped_mod: 'tfc' },
		{ wood: 'rainbow_eucalyptus', stripped: 'eucalyptus', stripped_mod: 'afc' },
		{ wood: 'gum_arabic', stripped: 'acacia', stripped_mod: 'tfc' },
		{ wood: 'redcedar', stripped: 'cypress', stripped_mod: 'afc' },
		{ wood: 'rubber_fig', stripped: 'fig', stripped_mod: 'afc' },
		{ wood: 'poplar', stripped: 'aspen', stripped_mod: 'tfc' }
	];

	MORE_STRIPPING.forEach(x => {
		event.recipes.gtceu.lathe(`tfg:stripping_${x.wood}_log`)
			.itemInputs(`afc:wood/log/${x.wood}`)
			.itemOutputs(`${x.stripped_mod}:wood/stripped_log/${x.stripped}`)
			.duration(50)
			.EUt(2)

		event.recipes.gtceu.lathe(`tfg:stripping_${x.wood}_wood`)
			.itemInputs(`afc:wood/wood/${x.wood}`)
			.itemOutputs(`${x.stripped_mod}:wood/stripped_wood/${x.stripped}`)
			.duration(50)
			.EUt(2)

		event.custom({
			type: 'vintageimprovements:polishing',
			ingredients: [{ item: `afc:wood/log/${x.wood}` }],
			results: [{ item: `${x.stripped_mod}:wood/stripped_log/${x.stripped}` }],
			speed_limits: 0,
			processingTime: 50
		}).id(`tfg:vi/lathe/stripping_${x.wood}_log`)

		event.custom({
			type: 'vintageimprovements:polishing',
			ingredients: [{ item: `afc:wood/wood/${x.wood}` }],
			results: [{ item: `${x.stripped_mod}:wood/stripped_wood/${x.stripped}` }],
			speed_limits: 0,
			processingTime: 50
		}).id(`tfg:vi/lathe/stripping_${x.wood}_wood`)
	})
}
