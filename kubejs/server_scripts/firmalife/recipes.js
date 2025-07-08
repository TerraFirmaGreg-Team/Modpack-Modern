// priority: 0

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

	// Plated Blocks
	event.remove({ id: 'firmalife:crafting/crafting/metal/block/stainless_steel' })
	event.remove({ id: 'firmalife:crafting/metal/block/stainless_steel_slab' })
	event.remove({ id: 'firmalife:crafting/metal/block/stainless_steel_stairs' })
	event.remove({ id: 'firmalife:heating/metal/stainless_steel_block' })
	event.remove({ id: 'firmalife:heating/metal/stainless_steel_block_slab' })
	event.remove({ id: 'firmalife:heating/metal/stainless_steel_block_stairs' })

	event.remove({ id: /^firmalife:crafting\/.*_dough/ })

	//#endregion

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
	event.shaped('firmalife:vat', [
		'A A',
		'BAB'
	], {
		A: '#forge:plates/wrought_iron',
		B: '#forge:wax'
	}).id('firmalife:crafting/vat')

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
		.inputFluids(Fluid.of('gtceu:stainless_steel', 9))
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('firmalife:stainless_steel_jar_lid')
		.duration(50)
		.EUt(7)

	event.recipes.gtceu.extractor('firmalife:stainless_steel_jar_extraction')
		.itemInputs('firmalife:stainless_steel_jar_lid')
		.outputFluids(Fluid.of('gtceu:stainless_steel', 9))
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

	event.recipes.gtceu.alloy_smelter('firmalife:empty_volcanic_wine_bottle')
		.itemInputs('tfc:volcanic_glass_batch')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('firmalife:empty_volcanic_wine_bottle')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.alloy_smelter('firmalife:empty_hematitic_wine_bottle')
		.itemInputs('tfc:hematitic_glass_batch')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('firmalife:empty_hematitic_wine_bottle')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

	event.recipes.gtceu.alloy_smelter('firmalife:wine_glass')
		.itemInputs('tfc:silica_glass_batch')
		.notConsumable('gtceu:cylinder_casting_mold')
		.itemOutputs('2x firmalife:wine_glass')
		.duration(100)
		.EUt(GTValues.VA[GTValues.ULV])

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

	event.replaceInput({ id: 'firmalife:crafting/bottle_label' }, 'firmalife:beeswax', '#forge:wax')

	//#endregion

	// TODO: Не работает потому что грегтех
	// Доставание меда из сот
	/*
	event.recipes.gtceu.assembler(`tfg:firmalife/beehive_honey_decomposition`)             
		.itemInputs('firmalife:beehive_frame')
		.circuit(1)
		.itemOutputs('firmalife:beehive_frame', 'firmalife:beeswax')
		.duration(10)
		.EUt(2)*/

	//#region Рецепты теплиц / Greenhouse

	//#region Treated Wood

	event.shapeless('firmalife:treated_wood_greenhouse_port', [
		'firmalife:treated_wood_greenhouse_wall',
		'#forge:tiny_fluid_pipes/copper'
	])
		.id('firmalife:crafting/greenhouse/treated_wood_greenhouse_port')

	//#endregion Treated Wood

	//#region Медная / Copper

	event.recipes.gtceu.bender('tfg:firmalife/sprinkler_electric_only')
		.itemInputs('#forge:plates/copper')
		.itemOutputs('firmalife:sprinkler')
		.circuit(4)
		.duration(60)
		.EUt(8)

	// Стена
	event.shaped('8x firmalife:copper_greenhouse_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/copper',
		B: 'minecraft:glass'
	}).id('firmalife:crafting/greenhouse/copper_greenhouse_wall')

	// Панель
	event.shaped('8x firmalife:copper_greenhouse_panel_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/copper',
		B: 'firmalife:reinforced_glass'
	}).id('firmalife:crafting/greenhouse/copper_greenhouse_panel_wall')

	// Панельная Крыша
	event.shaped('4x firmalife:copper_greenhouse_panel_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/copper'
	}).id('firmalife:crafting/greenhouse/copper_greenhouse_panel_roof')

	// Крыша
	event.shaped('4x firmalife:copper_greenhouse_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: '#forge:rods/copper',
		B: 'firmalife:reinforced_glass'
	}).id('firmalife:crafting/greenhouse/copper_greenhouse_roof')

	// Верхушка крыши
	event.shaped('8x firmalife:copper_greenhouse_roof_top', [
		'ABA',
		'BAB'
	], {
		A: '#forge:rods/copper',
		B: 'firmalife:reinforced_glass'
	}).id('firmalife:crafting/greenhouse/copper_greenhouse_roof_top')

	// Люк
	event.shaped('8x firmalife:copper_greenhouse_trapdoor', [
		'ABA',
		'BAB'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/copper'
	}).id('firmalife:crafting/greenhouse/copper_greenhouse_trapdoor')

	// Дверь
	event.shaped('2x firmalife:copper_greenhouse_door', [
		'AB',
		'AB',
		'AB'
	], {
		A: '#forge:rods/copper',
		B: 'minecraft:glass'
	}).id('firmalife:crafting/greenhouse/copper_greenhouse_door')

	event.shapeless('firmalife:copper_greenhouse_port', [
		'firmalife:copper_greenhouse_wall',
		'#forge:tiny_fluid_pipes/copper'
	])
		.id('firmalife:crafting/greenhouse/copper_greenhouse_port')

	//#endregion

	//#region Железная / Iron

	// Стена
	event.shaped('8x firmalife:iron_greenhouse_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'minecraft:glass'
	}).id('firmalife:crafting/greenhouse/iron_greenhouse_wall')

	// Панель
	event.shaped('8x firmalife:iron_greenhouse_panel_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'firmalife:reinforced_glass'
	}).id('firmalife:crafting/greenhouse/iron_greenhouse_panel_wall')

	// Панельная Крыша
	event.shaped('4x firmalife:iron_greenhouse_panel_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/wrought_iron'
	}).id('firmalife:crafting/greenhouse/iron_greenhouse_panel_roof')

	// Крыша
	event.shaped('4x firmalife:iron_greenhouse_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'firmalife:reinforced_glass'
	}).id('firmalife:crafting/greenhouse/iron_greenhouse_roof')

	// Верхушка крыши
	event.shaped('8x firmalife:iron_greenhouse_roof_top', [
		'ABA',
		'BAB'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'firmalife:reinforced_glass'
	}).id('firmalife:crafting/greenhouse/iron_greenhouse_roof_top')

	// Люк
	event.shaped('8x firmalife:iron_greenhouse_trapdoor', [
		'ABA',
		'BAB'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/wrought_iron'
	}).id('firmalife:crafting/greenhouse/iron_greenhouse_trapdoor')

	// Дверь
	event.shaped('2x firmalife:iron_greenhouse_door', [
		'AB',
		'AB',
		'AB'
	], {
		A: '#forge:rods/wrought_iron',
		B: 'minecraft:glass'
	}).id('firmalife:crafting/greenhouse/iron_greenhouse_door')

	event.shapeless('firmalife:iron_greenhouse_port', [
		'firmalife:iron_greenhouse_wall',
		'#forge:tiny_fluid_pipes/copper'
	])
		.id('firmalife:crafting/greenhouse/iron_greenhouse_port')

	//#endregion

	//#region Нержавеющая теплица / Stainless Steel

	event.shaped('8x firmalife:stainless_steel_greenhouse_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/stainless_steel',
		B: 'minecraft:glass'
	}).id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_wall')

	event.shaped('8x firmalife:stainless_steel_greenhouse_panel_wall', [
		'ABA',
		'ABA',
		'ABA'
	], {
		A: '#forge:rods/stainless_steel',
		B: 'firmalife:reinforced_glass'
	}).id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_panel_wall')

	event.shaped('4x firmalife:stainless_steel_greenhouse_panel_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/stainless_steel'
	}).id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_panel_roof')

	event.shaped('4x firmalife:stainless_steel_greenhouse_roof', [
		'A  ',
		'BA ',
		'BBA'
	], {
		A: '#forge:rods/stainless_steel',
		B: 'firmalife:reinforced_glass'
	}).id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_roof')

	// Верхушка крыши
	event.shaped('8x firmalife:stainless_steel_greenhouse_roof_top', [
		'ABA',
		'BAB'
	], {
		A: '#forge:rods/stainless_steel',
		B: 'firmalife:reinforced_glass'
	}).id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_roof_top')

	// Люк
	event.shaped('8x firmalife:stainless_steel_greenhouse_trapdoor', [
		'ABA',
		'BAB'
	], {
		A: 'firmalife:reinforced_glass',
		B: '#forge:rods/stainless_steel'
	}).id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_trapdoor')

	// Дверь
	event.shaped('2x firmalife:stainless_steel_greenhouse_door', [
		'AB',
		'AB',
		'AB'
	], {
		A: '#forge:rods/stainless_steel',
		B: 'minecraft:glass'
	}).id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_door')

	event.shapeless('firmalife:stainless_steel_greenhouse_port', [
		'firmalife:stainless_steel_greenhouse_wall',
		'#forge:tiny_fluid_pipes/copper'
	])
		.id('firmalife:crafting/greenhouse/stainless_steel_greenhouse_port')

	//#endregion

	event.shaped('firmalife:sweeper', [
		'ABD',
		'CB '
	], {
		A: '#forge:saw_heads/steel',
		B: '#forge:rods/steel',
		C: 'vintageimprovements:redstone_module',
		D: '#forge:tools/wrenches'
	}).id('firmalife:crafting/sweeper')

	event.shaped('firmalife:picker', [
		'ABD',
		'CC ',
		'EE '
	], {
		A: '#forge:plates/steel',
		B: 'vintageimprovements:redstone_module',
		C: '#forge:rods/steel',
		D: '#forge:tools/wrenches',
		E: '#forge:hoe_heads/steel'
	}).id('firmalife:crafting/picker')

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
		generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name, 'minecraft:overworld', 1)
	})

	// Семена ягод
	global.FIRMALIFE_GREENHOUSE_BERRY_RECIPE_COMPONENTS.forEach(element => {
		generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name, null, 1)
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
		.inputFluids(JsonIO.of({ amount: 1000, value: { tag: "tfg:clean_water" } }))
		.outputFluids(Fluid.of('firmalife:sugar_water', 500))
		.circuit(5)
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(200)

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['#tfg:wood_dusts', 'tfc:glue'])
		.outputItem('tfg:chipboard_composite')
		.id('tfg:mixing_bowl/chipboard_composite_glue')

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['#tfg:wood_dusts', 'gtceu:sticky_resin'])
		.outputItem('tfg:chipboard_composite')
		.id('tfg:mixing_bowl/chipboard_composite_resin')

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients(['#tfg:wood_dusts', '#forge:wax'])
		.outputItem('tfg:chipboard_composite')
		.id('tfg:mixing_bowl/chipboard_composite_wax')

	// Dough

	global.TFC_GRAINS.forEach(grain => {
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
				'#tfc:sweetener',
				'#tfc:sweetener'], 
				Fluid.of('firmalife:yeast_starter', 400))
			.outputItem(`8x firmalife:food/${grain}_dough`)
			.id(`tfg:mixing_bowl/${grain}_dough_2`)

		event.recipes.firmalife.mixing_bowl()
			.ingredients([
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`)], 
				Fluid.of('minecraft:water', 100))
			.outputItem(`2x tfc:food/${grain}_dough`)
			.id(`tfg:mixing_bowl/${grain}_flatbread_dough`)

		event.recipes.firmalife.mixing_bowl()
			.ingredients([
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`)],
				Fluid.of('minecraft:water', 200))
			.outputItem(`4x tfc:food/${grain}_dough`)
			.id(`tfg:mixing_bowl/${grain}_flatbread_dough_2`)

		event.recipes.firmalife.mixing_bowl()
			.ingredients([
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`)],
				Fluid.of('minecraft:water', 300))
			.outputItem(`6x tfc:food/${grain}_dough`)
			.id(`tfg:mixing_bowl/${grain}_flatbread_dough_3`)

		event.recipes.firmalife.mixing_bowl()
			.ingredients([
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`),
				TFC.ingredient.notRotten(`tfc:food/${grain}_flour`)],
				Fluid.of('minecraft:water', 400))
			.outputItem(`6x tfc:food/${grain}_dough`)
			.id(`tfg:mixing_bowl/${grain}_flatbread_dough_4`)
	})

	event.recipes.firmalife.mixing_bowl()
		.itemIngredients([TFC.ingredient.notRotten('firmalife:food/vanilla_ice_cream'), TFC.ingredient.notRotten('firmalife:food/chocolate_chip_cookie_dough')])
		.outputItem('2x firmalife:food/cookie_dough_ice_cream')
		.id('firmalife:mixing_bowl/cookie_dough_ice_cream')
}
