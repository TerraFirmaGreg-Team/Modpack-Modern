// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event 
 */
const registerFirmaLifeRecipes = (event) => {

	global.FIRMALIFE_DISABLED_ITEMS.forEach(item => {
		event.remove({ input: item })
		event.remove({ output: item })
	})

	// - Chromium

	// Ores
	event.remove({ id: 'firmalife:heating/ore/small_chromite' })
	event.remove({ id: 'firmalife:heating/ore/poor_chromite' })
	event.remove({ id: 'firmalife:heating/ore/normal_chromite' })
	event.remove({ id: 'firmalife:heating/ore/rich_chromite' })

	// Plated blocks
	event.remove({ id: 'firmalife:crafting/crafting/metal/block/chromium' })
	event.remove({ id: 'firmalife:crafting/metal/block/chromium_slab' })
	event.remove({ id: 'firmalife:crafting/metal/block/chromium_stairs' })
	event.remove({ id: 'firmalife:heating/metal/chromium_block' })
	event.remove({ id: 'firmalife:heating/metal/chromium_block_slab' })
	event.remove({ id: 'firmalife:heating/metal/chromium_block_stairs' })

	// - Stainless Steel
	event.remove({ id: 'firmalife:alloy/stainless_steel' })

	// Jar lid
	event.remove({ id: 'firmalife:heating/stainless_steel_jar_lid' })

	// Default Sugar Water
	event.remove({ id: 'firmalife:vat/sugar_water' })

	// Plated Blocks
	event.remove({ id: 'firmalife:crafting/crafting/metal/block/stainless_steel' })
	event.remove({ id: 'firmalife:crafting/metal/block/stainless_steel_slab' })
	event.remove({ id: 'firmalife:crafting/metal/block/stainless_steel_stairs' })
	event.remove({ id: 'firmalife:heating/metal/stainless_steel_block' })
	event.remove({ id: 'firmalife:heating/metal/stainless_steel_block_slab' })
	event.remove({ id: 'firmalife:heating/metal/stainless_steel_block_stairs' })

	event.remove({ id: /^firmalife:crafting\/.*_dough/ })

	event.remove({ id: 'firmalife:pot/chocolate' })

	//#endregion

	event.replaceInput({ id: 'firmalife:mixing_bowl' }, 'firmalife:treated_lumber', '#tfc:lumber')

	// Декрафт Jag Lid
	event.recipes.tfc.heating('tfc:jar_lid', 230)
		.resultFluid(Fluid.of('gtceu:tin', 9))
		.id(`tfc:heating/jar_lid`)

	// Pie Pan
	event.recipes.tfc.anvil('4x firmalife:pie_pan', '#forge:plates/wrought_iron', ["hit_last", "hit_second_last", "draw_third_last"])
		.tier(3)
		.id('firmalife:anvil/pie_pan')

	// Jarring Station
	event.shaped('firmalife:jarring_station', [
		'A A',
		'BBB'
	], {
		A: '#forge:plates/wrought_iron',
		B: 'firmalife:treated_lumber'
	}).id('firmalife:crafting/jarring_station')

	// Vat
	event.recipes.gtceu.shaped('firmalife:vat', [
		'A A',
		'BAB'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:wax'
	}).addMaterialInfo().id('firmalife:crafting/vat')

	// Jar Lid
	event.recipes.gtceu.fluid_solidifier(`tfg:firmalife/jar_lid`)
		.inputFluids(Fluid.of('gtceu:tin', 9))
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('tfc:jar_lid')
		.duration(50)
		.EUt(7)

	event.recipes.gtceu.extractor('tfc:jar_lid_extraction')
		.itemInputs('tfc:jar_lid')
		.outputFluids(Fluid.of('gtceu:tin', 9))
		.duration(50)
		.category(GTRecipeCategories.EXTRACTOR_RECYCLING)
		.EUt(2)

	event.recipes.gtceu.fluid_solidifier(`firmalife:firmalife/stainless_steel_jar_lid`)
		.inputFluids(Fluid.of('gtceu:stainless_steel', 3))
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('firmalife:stainless_steel_jar_lid')
		.duration(50)
		.EUt(7)

	event.recipes.gtceu.extractor('firmalife:stainless_steel_jar_extraction')
		.itemInputs('firmalife:stainless_steel_jar_lid')
		.outputFluids(Fluid.of('gtceu:stainless_steel', 3))
		.duration(50)
		.EUt(2)

	// Pineapple Yarn
	event.recipes.gtceu.wiremill(`tfg:firmalife/pineapple_yarn`)
		.itemInputs('firmalife:pineapple_fiber')
		.circuit(1)
		.itemOutputs('8x firmalife:pineapple_yarn')
		.duration(50)
		.EUt(7)

	// Pineapple Leather
	event.recipes.gtceu.assembler(`tfg:firmalife/pineapple_leather`)
		.itemInputs('16x firmalife:pineapple_yarn')
		.circuit(1)
		.itemOutputs('firmalife:pineapple_leather')
		.duration(50)
		.EUt(7)

	//#region Wine Working

	event.recipes.gtceu.alloy_smelter('firmalife:empty_olivine_wine_bottle')
		.itemInputs('tfc:olivine_glass_batch')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('firmalife:empty_olivine_wine_bottle')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.INGOT_MOLDING)

	event.recipes.gtceu.alloy_smelter('firmalife:empty_volcanic_wine_bottle')
		.itemInputs('tfc:volcanic_glass_batch')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('firmalife:empty_volcanic_wine_bottle')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.INGOT_MOLDING)

	event.recipes.gtceu.alloy_smelter('firmalife:empty_hematitic_wine_bottle')
		.itemInputs('tfc:hematitic_glass_batch')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('firmalife:empty_hematitic_wine_bottle')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.INGOT_MOLDING)

	event.recipes.gtceu.alloy_smelter('firmalife:wine_glass')
		.itemInputs('tfc:silica_glass_batch')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('2x firmalife:wine_glass')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.INGOT_MOLDING)

	event.recipes.gtceu.assembler('firmalife:cork')
		.itemInputs('firmalife:treated_lumber')
		.inputFluids(Fluid.of('tfc:limewater', 1000))
		.itemOutputs('8x firmalife:cork')
		.duration(300)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.assembler('firmalife:bottle_label')
		.itemInputs('#forge:wax', 'minecraft:paper')
		.itemOutputs('16x firmalife:bottle_label')
		.duration(30)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.alloy_smelter('pie_pan')
		.itemInputs('#forge:ingots/wrought_iron')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('6x firmalife:pie_pan')
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(100)
		.category(GTRecipeCategories.INGOT_MOLDING)

	event.replaceInput({ id: 'firmalife:crafting/bottle_label' }, 'firmalife:beeswax', '#forge:wax')

	//#endregion

	//#region Рецепты теплиц / Greenhouse

	//#region Treated Wood

	event.shapeless('firmalife:treated_wood_greenhouse_port', [
		'firmalife:treated_wood_greenhouse_wall',
		'#forge:tiny_fluid_pipes/copper'
	])
		.id('firmalife:crafting/greenhouse/treated_wood_greenhouse_port')

	//#endregion Treated Wood

	//#region Медная / Copper

	event.recipes.gtceu.extruder('tfg:firmalife/sprinkler_electric_only')
		.itemInputs('#forge:plates/copper')
		.notConsumable('tfg:small_casing_extruder_mold')
		.itemOutputs('firmalife:sprinkler')
		.duration(60)
		.EUt(8)
		.addMaterialInfo(true)

	// Стена
	event.recipes.gtceu.shaped('8x firmalife:copper_greenhouse_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/copper',
		B: 'minecraft:glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/copper_greenhouse_wall')

	// Панель
	event.recipes.gtceu.shaped('8x firmalife:copper_greenhouse_panel_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/copper',
		B: 'firmalife:reinforced_glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/copper_greenhouse_panel_wall')

	// Панельная Крыша
	event.recipes.gtceu.shaped('4x firmalife:copper_greenhouse_panel_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/copper'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/copper_greenhouse_panel_roof')

	// Крыша
	event.recipes.gtceu.shaped('4x firmalife:copper_greenhouse_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: '#forge:rods/copper',
		B: 'firmalife:reinforced_glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/copper_greenhouse_roof')

	// Верхушка крыши
	event.recipes.gtceu.shaped('8x firmalife:copper_greenhouse_roof_top', [
		'ABA',
		'BAB'
	], {
		A: '#forge:rods/copper',
		B: 'firmalife:reinforced_glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/copper_greenhouse_roof_top')

	// Люк
	event.recipes.gtceu.shaped('8x firmalife:copper_greenhouse_trapdoor', [
		'ABA',
		'BAB'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/copper'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/copper_greenhouse_trapdoor')

	// Дверь
	event.recipes.gtceu.shaped('2x firmalife:copper_greenhouse_door', [
		'AB',
		'AB',
		'AB'
	], {
		A: '#forge:rods/copper',
		B: 'minecraft:glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/copper_greenhouse_door')

	event.shapeless('firmalife:copper_greenhouse_port', [
		'firmalife:copper_greenhouse_wall',
		'#forge:tiny_fluid_pipes/copper'
	])
		.id('firmalife:crafting/greenhouse/copper_greenhouse_port')

	//#endregion

	//#region Железная / Iron

	// Стена
	event.recipes.gtceu.shaped('8x firmalife:iron_greenhouse_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'minecraft:glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/iron_greenhouse_wall')

	// Панель
	event.recipes.gtceu.shaped('8x firmalife:iron_greenhouse_panel_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'firmalife:reinforced_glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/iron_greenhouse_panel_wall')

	// Панельная Крыша
	event.recipes.gtceu.shaped('4x firmalife:iron_greenhouse_panel_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/wrought_iron'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/iron_greenhouse_panel_roof')

	// Крыша
	event.recipes.gtceu.shaped('4x firmalife:iron_greenhouse_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'firmalife:reinforced_glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/iron_greenhouse_roof')

	// Верхушка крыши
	event.recipes.gtceu.shaped('8x firmalife:iron_greenhouse_roof_top', [
		'ABA',
		'BAB'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'firmalife:reinforced_glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/iron_greenhouse_roof_top')

	// Люк
	event.recipes.gtceu.shaped('8x firmalife:iron_greenhouse_trapdoor', [
		'ABA',
		'BAB'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/wrought_iron'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/iron_greenhouse_trapdoor')

	// Дверь
	event.recipes.gtceu.shaped('2x firmalife:iron_greenhouse_door', [
		'AB',
		'AB',
		'AB'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'minecraft:glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/iron_greenhouse_door')

	event.shapeless('firmalife:iron_greenhouse_port', [
		'firmalife:iron_greenhouse_wall',
		'#forge:tiny_fluid_pipes/copper'
	])
		.id('firmalife:crafting/greenhouse/iron_greenhouse_port')

	//#endregion

	//#region Нержавеющая теплица / Stainless Steel

	event.recipes.gtceu.shaped('8x firmalife:stainless_steel_greenhouse_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/stainless_steel',
		B: 'minecraft:glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_wall')

	event.recipes.gtceu.shaped('8x firmalife:stainless_steel_greenhouse_panel_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/stainless_steel',
		B: 'firmalife:reinforced_glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_panel_wall')

	event.recipes.gtceu.shaped('4x firmalife:stainless_steel_greenhouse_panel_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/stainless_steel'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_panel_roof')

	event.recipes.gtceu.shaped('4x firmalife:stainless_steel_greenhouse_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: '#forge:rods/stainless_steel',
		B: 'firmalife:reinforced_glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_roof')

	// Верхушка крыши
	event.recipes.gtceu.shaped('8x firmalife:stainless_steel_greenhouse_roof_top', [
		'ABA',
		'BAB'
	], {
		A: '#forge:rods/stainless_steel',
		B: 'firmalife:reinforced_glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_roof_top')

	// Люк
	event.recipes.gtceu.shaped('8x firmalife:stainless_steel_greenhouse_trapdoor', [
		'ABA',
		'BAB'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/stainless_steel'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_trapdoor')

	// Дверь
	event.recipes.gtceu.shaped('2x firmalife:stainless_steel_greenhouse_door', [
		'AB',
		'AB',
		'AB'
	], {
		A: '#forge:rods/stainless_steel',
		B: 'minecraft:glass'
	}).addMaterialInfo().id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_door')

	event.shapeless('firmalife:stainless_steel_greenhouse_port', [
		'firmalife:stainless_steel_greenhouse_wall',
		'#forge:tiny_fluid_pipes/copper'
	])
		.id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_port')

	//#endregion

	event.recipes.gtceu.shaped('firmalife:sweeper', [
		'ABD',
		'CB '
	], {
		A: '#forge:saw_heads/steel',
		B: '#forge:rods/steel',
		C: 'vintageimprovements:redstone_module',
		D: '#forge:tools/wrenches'
	}).addMaterialInfo().id('firmalife:crafting/sweeper')

	event.recipes.gtceu.shaped('firmalife:picker', [
		'ABD',
		'CC ',
		'EE '
	], {
		A: '#forge:plates/steel',
		B: 'vintageimprovements:redstone_module',
		C: '#forge:rods/steel',
		D: '#forge:tools/wrenches',
		E: '#forge:hoe_heads/steel'
	}).addMaterialInfo().id('firmalife:crafting/picker')

	//#endregion

	//#region Укрепленное стекло

	event.shaped('firmalife:reinforced_glass', [
		'AB'
	], {
		A: '#tfc:saws',
		B: 'gtceu:tempered_glass'
	}).id('tfg:shaped/reinforced_glass')

	generateCutterRecipe(event, '3x gtceu:tempered_glass', '8x firmalife:reinforced_glass', 100, 7, 'reinforced_glass')

	//#endregion

	//#region Рецепты электрической теплицы

	// Дерево

	// Семена фруктов
	global.FIRMALIFE_GREENHOUSE_FRUIT_RECIPE_COMPONENTS.forEach(element => {
		generateGreenHouseRecipe(event, element.input, '#tfc:any_fresh_water', element.fluid_amount, element.output,
			element.name, 'minecraft:overworld', 8, null, GTValues.VA[GTValues.LV])
	})

	// Семена ягод
	global.FIRMALIFE_GREENHOUSE_BERRY_RECIPE_COMPONENTS.forEach(element => {
		generateGreenHouseRecipe(event, element.input, '#tfc:any_fresh_water', element.fluid_amount, element.output,
			element.name, null, 8, null, GTValues.VA[GTValues.LV])
	})

	//#endregion

	//#region Sticky Resin by Vat

	event.recipes.firmalife.vat()
		.inputs('tfc:powder/wood_ash', Fluid.of('tfg:latex', 1000))
		.outputItem('gtceu:sticky_resin')
		.id('tfg:vat/latex_to_sticky_resin');

	event.recipes.firmalife.vat()
		.inputs('tfc:powder/wood_ash', Fluid.of('tfg:conifer_pitch', 1000))
		.outputItem('gtceu:sticky_resin')
		.id('tfg:vat/conifer_pitch_to_sticky_resin');

	//#endregion

	//#region Better Sugar Water
	event.recipes.firmalife.vat()
		.inputs('#tfc:sweetener', Fluid.of('minecraft:water', 2000))
		.outputFluid(Fluid.of('firmalife:sugar_water', 2000))
		.id('tfg:vat/sugar_water')

	//#endregion

	//#region Salt by Vat

	event.recipes.firmalife.vat()
		//.inputs('minecraft:stick', Fluid.of('tfc:salt_water', 625))
		.inputFluid(Fluid.of('tfc:salt_water', 625))
		.outputItem('gtceu:small_salt_dust')
		.id('tfg:vat/sea_water_to_salt');

	//#endregion

	//#region Replace existing dyes

	global.MINECRAFT_DYE_NAMES.forEach(dyeName => {

		event.recipes.firmalife.vat()
			.inputs(`#forge:dyes/${dyeName}`, Fluid.of('tfc:vinegar', 250))
			.outputFluid(Fluid.of(`tfc:${dyeName}_dye`, 144))
			.length(100)
			.temperature(200)
			.id(`firmalife:vat/${dyeName}_dye`)
	})

	//#endregion

	//#region Plated blocks

	generatePlatedBlockRecipe(event, GTMaterials.Chromium);
	generatePlatedBlockRecipe(event, GTMaterials.StainlessSteel);

	// #endregion

	// #region Drying mat alternatives

	event.shaped('firmalife:drying_mat', ['AAA'], { A: 'tfc:plant/leafy_kelp' }).id('tfg:shaped/drying_mat_leafy_kelp')
	event.shaped('firmalife:drying_mat', ['AAA'], { A: 'tfc:plant/winged_kelp' }).id('tfg:shaped/drying_mat_winged_kelp')

	// #endregion

	event.recipes.gtceu.mixer('sugar_water')
		.itemInputs('#tfc:sweetener')
		.inputFluids("#tfg:clean_water 2000")
		.outputFluids(Fluid.of('firmalife:sugar_water', 2000))
		.circuit(5)
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(200)

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['#tfg:wood_dusts', '#tfg:wood_dusts', 'tfc:glue'])
		.outputItem('2x tfg:chipboard_composite')
		.id('tfg:mixing_bowl/chipboard_composite_glue')

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['#tfg:wood_dusts', '#tfg:wood_dusts', '#tfg:wood_dusts', '#tfg:wood_dusts', 'gtceu:sticky_resin'])
		.outputItem('4x tfg:chipboard_composite')
		.id('tfg:mixing_bowl/chipboard_composite_resin')

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['#tfg:wood_dusts', '#tfg:wood_dusts', '#forge:wax'])
		.outputItem('2x tfg:chipboard_composite')
		.id('tfg:mixing_bowl/chipboard_composite_wax')

	// Dough

	global.TFC_GRAINS.forEach(grain => {
		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`2x firmalife:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			'firmalife:tirage_mixture',
			'#tfc:bowls'
		]).keepIngredient('#tfc:bowls').id(`tfg:shapeless/${grain}_dough`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`4x firmalife:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			'firmalife:tirage_mixture',
			'firmalife:mixing_bowl'
		]).id(`tfg:shapeless/${grain}_dough_mixing`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`4x firmalife:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			'2x firmalife:tirage_mixture',
			'#tfc:bowls'
		]).keepIngredient('#tfc:bowls').id(`tfg:shapeless/${grain}_dough_2`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`8x firmalife:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			'2x firmalife:tirage_mixture',
			'firmalife:mixing_bowl'
		]).id(`tfg:shapeless/${grain}_dough_mixing_2`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`6x firmalife:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			'3x firmalife:tirage_mixture',
			'#tfc:bowls'
		]).keepIngredient('#tfc:bowls').id(`tfg:shapeless/${grain}_dough_3`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`12x firmalife:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			'3x firmalife:tirage_mixture',
			'firmalife:mixing_bowl'
		]).id(`tfg:shapeless/${grain}_dough_3_mixing`)


		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`2x tfc:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 100)),
			'#tfc:bowls'
		]).keepIngredient('#tfc:bowls').id(`tfg:shapeless/${grain}_flatbread_dough`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`4x tfc:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 100)),
			'firmalife:mixing_bowl'
		]).id(`tfg:shapeless/${grain}_flatbread_dough_mixing`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`4x tfc:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 200)),
			'#tfc:bowls'
		]).keepIngredient('#tfc:bowls').id(`tfg:shapeless/${grain}_flatbread_dough_2`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`8x tfc:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 200)),
			'firmalife:mixing_bowl'
		]).id(`tfg:shapeless/${grain}_flatbread_dough_2_mixing`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`6x tfc:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 300)),
			'#tfc:bowls'
		]).keepIngredient('#tfc:bowls').id(`tfg:shapeless/${grain}_flatbread_dough_3`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`12x tfc:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 300)),
			'firmalife:mixing_bowl'
		]).id(`tfg:shapeless/${grain}_flatbread_dough_3_mixing`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`8x tfc:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 400)),
			'#tfc:bowls'
		]).keepIngredient('#tfc:bowls').id(`tfg:shapeless/${grain}_flatbread_dough_4`)

		event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`16x tfc:food/${grain}_dough`).copyFood(), [
			'firmalife:spoon',
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
			TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 400)),
			'firmalife:mixing_bowl'
		]).id(`tfg:shapeless/${grain}_flatbread_dough_4_mixing`)

		event.recipes.firmalife.mixing_bowl()
			.ingredients([
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
				`#tfc:sweetener`],
				Fluid.of('firmalife:yeast_starter', 200))
			.outputItem(`4x firmalife:food/${grain}_dough`)
			.id(`tfg:mixing_bowl/${grain}_dough`)

		event.recipes.firmalife.mixing_bowl()
			.ingredients([
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
				`#tfc:sweetener`,
				`#tfc:sweetener`],
				Fluid.of('firmalife:yeast_starter', 400))
			.outputItem(`8x firmalife:food/${grain}_dough`)
			.id(`tfg:mixing_bowl/${grain}_dough_2`)

		event.recipes.firmalife.mixing_bowl()
			.ingredients([
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`)],
				Fluid.of('minecraft:water', 100))
			.outputItem(`4x tfc:food/${grain}_dough`)
			.id(`tfg:mixing_bowl/${grain}_flatbread_dough`)

		event.recipes.firmalife.mixing_bowl()
			.ingredients([
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`)],
				Fluid.of('minecraft:water', 200))
			.outputItem(`8x tfc:food/${grain}_dough`)
			.id(`tfg:mixing_bowl/${grain}_flatbread_dough_2`)
	})

	event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`2x firmalife:food/hardtack_dough`).copyFood(), [
		'firmalife:spoon',
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		'tfc:powder/salt',
		TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 100)),
		'#tfc:bowls'
	]).keepIngredient('#tfc:bowls').id(`tfg:shapeless/hardtack_dough`)

	event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`4x firmalife:food/hardtack_dough`).copyFood(), [
		'firmalife:spoon',
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		'tfc:powder/salt',
		TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 100)),
		'firmalife:mixing_bowl'
	]).id(`tfg:shapeless/hardtack_dough_mixing`)

	event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`4x firmalife:food/hardtack_dough`).copyFood(), [
		'firmalife:spoon',
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		'tfc:powder/salt',
		'tfc:powder/salt',
		TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 200)),
		'#tfc:bowls'
	]).keepIngredient('#tfc:bowls').id(`tfg:shapeless/hardtack_dough_2`)

	event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`8x firmalife:food/hardtack_dough`).copyFood(), [
		'firmalife:spoon',
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		'tfc:powder/salt',
		'tfc:powder/salt',
		TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 200)),
		'firmalife:mixing_bowl'
	]).id(`tfg:shapeless/hardtack_dough_2_mixing`)

	event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`6x firmalife:food/hardtack_dough`).copyFood(), [
		'firmalife:spoon',
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		'tfc:powder/salt',
		'tfc:powder/salt',
		'tfc:powder/salt',
		TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 300)),
		'#tfc:bowls'
	]).keepIngredient('#tfc:bowls').id(`tfg:shapeless/hardtack_dough_3`)

	event.recipes.tfc.advanced_shapeless_crafting(TFC.isp.of(`12x firmalife:food/hardtack_dough`).copyFood(), [
		'firmalife:spoon',
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		TFC.ingredient.notRotten(`#tfc:foods/flour`),
		'tfc:powder/salt',
		'tfc:powder/salt',
		'tfc:powder/salt',
		TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 300)),
		'firmalife:mixing_bowl'
	]).id(`tfg:shapeless/hardtack_dough_3_mixing`)

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients([
			TFC.ingredient.notRotten('firmalife:food/vanilla_ice_cream'),
			TFC.ingredient.notRotten('firmalife:food/chocolate_chip_cookie_dough')])
		.outputItem('2x firmalife:food/cookie_dough_ice_cream')
		.id('firmalife:mixing_bowl/cookie_dough_ice_cream')

	event.recipes.firmalife.mixing_bowl()
		.ingredients([
			TFC.ingredient.notRotten('#forge:eggs'),
			'#tfg:sugars',
			'#tfg:sugars',
			TFC.ingredient.notRotten('#tfc:foods/flour'),
			TFC.ingredient.notRotten('#tfc:foods/flour')],
			TFC.fluidStackIngredient('#tfc:milks', 1000))
		.outputItem('createaddition:cake_base')
		.id('tfg:mixing_bowl/cake_base')

	event.recipes.firmalife.oven('createaddition:cake_base', 400, 60 * 20, 'createaddition:cake_base_baked')

	event.recipes.firmalife.mixing_bowl()
		.ingredients([
			TFC.ingredient.notRotten('createaddition:cake_base_baked'),
			TFC.ingredient.notRotten('tfc:food/strawberry'),
			TFC.ingredient.notRotten('tfc:food/strawberry'),
			TFC.ingredient.notRotten('tfc:food/strawberry'),
			'firmalife:spice/vanilla'],
			Fluid.of('tfcchannelcasting:white_chocolate', 400))
		.outputItem('tfc:cake')
		.id('tfg:mixing_bowl/cake')

	event.recipes.firmalife.mixing_bowl()
		.ingredients([
			TFC.ingredient.notRotten('createaddition:cake_base_baked'),
			TFC.ingredient.notRotten('tfc:food/cherry'),
			TFC.ingredient.notRotten('tfc:food/cherry'),
			TFC.ingredient.notRotten('tfc:food/cherry'),
			'firmalife:food/cocoa_powder'],
			Fluid.of('tfcchannelcasting:milk_chocolate', 400))
		.outputItem('createaddition:chocolate_cake')
		.id('tfg:mixing_bowl/milk_chocolate_cake')

	event.recipes.firmalife.mixing_bowl()
		.ingredients([
			TFC.ingredient.notRotten('createaddition:cake_base_baked'),
			TFC.ingredient.notRotten('tfc:food/cherry'),
			TFC.ingredient.notRotten('tfc:food/cherry'),
			TFC.ingredient.notRotten('tfc:food/cherry'),
			'firmalife:food/cocoa_powder'],
			Fluid.of('tfcchannelcasting:dark_chocolate', 400))
		.outputItem('createaddition:chocolate_cake')
		.id('tfg:mixing_bowl/dark_chocolate_cake')

	event.recipes.firmalife.mixing_bowl()
		.ingredients([
			TFC.ingredient.notRotten('createaddition:cake_base_baked'),
			'firmalife:raw_honey',
			'firmalife:raw_honey',
			'firmalife:raw_honey',
			'firmalife:raw_honey'],
			Fluid.of('afc:maple_syrup', 1000))
		.outputItem('createaddition:honey_cake')
		.id('tfg:mixing_bowl/maple_honey_cake')

	event.recipes.firmalife.mixing_bowl()
		.ingredients([
			TFC.ingredient.notRotten('createaddition:cake_base_baked'),
			'firmalife:raw_honey',
			'firmalife:raw_honey',
			'firmalife:raw_honey',
			'firmalife:raw_honey'],
			Fluid.of('afc:birch_syrup', 1000))
		.outputItem('createaddition:honey_cake')
		.id('tfg:mixing_bowl/birch_honey_cake')

	event.remove({ id: 'firmalife:mixing_bowl/chocolate_ice_cream' })
	event.recipes.firmalife.mixing_bowl()
		.ingredients([TFC.ingredient.notRotten('firmalife:food/vanilla_ice_cream')],
			Fluid.of('tfcchannelcasting:milk_chocolate', 100))
		.outputItem(TFC.isp.of('firmalife:food/chocolate_ice_cream').copyFood())
		.id('tfg:mixing_bowl/chocolate_ice_cream')

	// Chocolate Melting
	const setChocolateHeating = (variant) => {
		const itemID = `firmalife:food/${variant}_chocolate`
		const fluidID = `tfcchannelcasting:${variant}_chocolate`
		const recipeID = `firmalife:heating/${variant}_chocolate`
		const castingRecipeID = `tfcchannelcasting:casting/${variant}_chocolate`

		event.remove({ id: recipeID })
		event.remove({ id: castingRecipeID })
		event.remove({ id: `${castingRecipeID}_fire_ingot` })
		event.remove({ id: `tfcchannelcasting:heating/food/${variant}_chocolate` })

		event.recipes.tfc.heating(itemID, 200)
			.resultFluid(Fluid.of(fluidID, 144))
			.id(recipeID)

		event.recipes.tfc.casting(`${itemID}`, 'tfc:ceramic/ingot_mold', TFC.fluidStackIngredient(`${fluidID}`, 144), 0)
		event.recipes.tfc.casting(`${itemID}`, 'tfc:ceramic/fire_ingot_mold', TFC.fluidStackIngredient(`${fluidID}`, 144), 0)
	}

	setChocolateHeating('white')
	setChocolateHeating('milk')
	setChocolateHeating('dark')
}
