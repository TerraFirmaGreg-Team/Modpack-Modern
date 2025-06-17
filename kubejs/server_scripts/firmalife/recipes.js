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

	// Pineapple Fiber
	event.recipes.gtceu.assembler(`tfg:firmalife/pineapple_fiber`)
		.itemInputs('firmalife:food/pineapple')
		.circuit(1)
		.itemOutputs('firmalife:pineapple_fiber')
		.duration(50)
		.EUt(7)

	// Pineapple Yarn
	event.recipes.gtceu.assembler(`tfg:firmalife/pineapple_yarn`)
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
		.inputFluids(Fluid.of('tfc:limewater',1000))
		.itemOutputs('8x firmalife:cork')
		.duration(300)
		.EUt(GTValues.VA[GTValues.ULV])
		
	event.recipes.gtceu.assembler('firmalife:bottle_label')
		.itemInputs('#forge:wax','minecraft:paper')
		.itemOutputs('16x firmalife:bottle_label')
		.duration(30)
		.EUt(GTValues.VA[GTValues.ULV])
	
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

	event.recipes.gtceu.bender('tfg:firmalife/sprinkler')
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
		generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name, true)
	})

	// Семена ягод
	global.FIRMALIFE_GREENHOUSE_BERRY_RECIPE_COMPONENTS.forEach(element => {
		generateGreenHouseRecipe(event, element.input, element.fluid_amount, element.output, element.name, false)
	})

	//#endregion

	//#region Рецепты муки

	global.FIRMALIFE_QUERN_FLOUR_RECIPE_COMPONENTS.forEach(element => {
		event.recipes.gtceu.macerator(`tfg:${element.name}`)
			.itemInputs(element.input)
			.itemOutputs(element.output)
			.duration(200)
			.EUt(2)
	})

	//#endregion

	//#region Рецепты теста

	global.FIRMALIFE_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS.forEach(element => {
		event.recipes.gtceu.mixer(element.name)
			.itemInputs(element.input, '#tfc:sweetener')
			.inputFluids(Fluid.of('firmalife:yeast_starter', 100))
			.itemOutputs(element.output)
			.duration(300)
			.EUt(16)
			.circuit(2)
	})

	//#endregion

	//#region Рецепты плоского хлеба

	global.FIRMALIFE_FURNACE_FLATBREAD_RECIPE_COMPONENTS.forEach(element => {
		event.smelting(element.output, element.input)
			.id(`tfg:smelting/${element.name}`)
	})

	//#endregion

	//#region Смешивание в миске

	// Тесто для пиццы
	event.recipes.gtceu.mixer('firmalife:food/pizza_dough_olive_oil')
		.itemInputs('firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt')
		.inputFluids(Fluid.of('tfc:olive_oil', 1000))
		.itemOutputs('4x firmalife:food/pizza_dough')
		.duration(300)
		.EUt(16)

	event.recipes.gtceu.mixer('firmalife:food/pizza_dough_soybean_oil')
		.itemInputs('firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt')
		.inputFluids(Fluid.of('firmalife:soybean_oil', 1000))
		.itemOutputs('4x firmalife:food/pizza_dough')
		.duration(300)
		.EUt(16)

	// Vanilla Ice Cream
	event.recipes.gtceu.mixer('firmalife:food/vanilla_ice_cream')
		.itemInputs('firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla')
		.inputFluids(Fluid.of('firmalife:cream', 1000))
		.itemOutputs('2x firmalife:food/vanilla_ice_cream')
		.duration(300)
		.EUt(16)

	// Pumpkin Pie Dough
	event.recipes.gtceu.mixer('firmalife:food/pumpkin_pie_dough')
		.itemInputs('#tfc:sweetener', '#forge:eggs', '2x tfc:food/pumpkin_chunks', '#tfc:foods/flour')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('firmalife:food/pumpkin_pie_dough')
		.duration(300)
		.EUt(16)
		.circuit(2)

	// Butter
	event.recipes.gtceu.mixer('firmalife:food/butter')
		.itemInputs('tfc:powder/salt')
		.inputFluids(Fluid.of('firmalife:cream', 1000))
		.itemOutputs('firmalife:food/butter')
		.duration(300)
		.EUt(16)

	// Pie Dough
	event.recipes.gtceu.mixer('firmalife:food/pie_dough')
		.itemInputs('#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('firmalife:food/pie_dough')
		.duration(300)
		.EUt(16)
		.circuit(2)

	// Cookie Dough
	event.recipes.gtceu.mixer('firmalife:food/cookie_dough')
		.itemInputs('#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour', '#forge:eggs', 'firmalife:spice/vanilla')
		.itemOutputs('4x firmalife:food/cookie_dough')
		.duration(300)
		.EUt(16)

	// Hardtack Dough
	event.recipes.gtceu.mixer('firmalife:food/hardtack_dough')
		.itemInputs('tfc:powder/salt', '#tfc:foods/flour')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('4x firmalife:food/hardtack_dough')
		.duration(300)
		.EUt(16)
		.circuit(2)

	// Yeast starter
	event.recipes.gtceu.mixer('firmalife:yeast_starter')
		.inputFluids(Fluid.of('firmalife:yeast_starter', 100))
		.itemInputs('#tfc:foods/flour')
		.outputFluids(Fluid.of('firmalife:yeast_starter', 600))
		.duration(1200)
		.EUt(8)
		.circuit(1)

	// Cocoa Powder
	event.recipes.gtceu.macerator('firmalife:food/cocoa_powder')
		.itemInputs('gtceu:cocoa_dust')
		.itemOutputs('4x firmalife:food/cocoa_powder')
		.duration(100)
		.EUt(2)

	event.recipes.tfc.quern('4x firmalife:food/cocoa_powder', 'gtceu:cocoa_dust')
		.id(`tfg:quern/cocoa_powder`)

	event.recipes.tfc.quern('gtceu:cocoa_dust', 'firmalife:food/roasted_cocoa_beans')
		.id('tfg:quern/cocoa_dust');

	// Chocolate Ice Cream
	event.recipes.gtceu.mixer('firmalife:food/chocolate_ice_cream')
		.itemInputs('firmalife:food/vanilla_ice_cream')
		.inputFluids(Fluid.of('firmalife:chocolate', 1000))
		.itemOutputs('firmalife:food/chocolate_ice_cream')
		.duration(300)
		.EUt(16)

	// White Chocolate Blend
	event.recipes.gtceu.mixer('firmalife:food/white_chocolate_blend/milk')
		.itemInputs('2x firmalife:food/cocoa_butter', '#tfc:sweetener')
		.inputFluids(Fluid.of('minecraft:milk', 1000))
		.itemOutputs('2x firmalife:food/white_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.recipes.gtceu.mixer('firmalife:food/white_chocolate_blend/yak_milk')
		.itemInputs('2x firmalife:food/cocoa_butter', '#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:yak_milk', 1000))
		.itemOutputs('2x firmalife:food/white_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.recipes.gtceu.mixer('firmalife:food/white_chocolate_blend/goat_milk')
		.itemInputs('2x firmalife:food/cocoa_butter', '#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:goat_milk', 1000))
		.itemOutputs('2x firmalife:food/white_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.recipes.gtceu.mixer('firmalife:food/white_chocolate_blend/coconut_milk')
		.itemInputs('2x firmalife:food/cocoa_butter', '#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:coconut_milk', 1000))
		.itemOutputs('2x firmalife:food/white_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.smelting('firmalife:food/white_chocolate', 'firmalife:food/white_chocolate_blend')

	// Dark Chocolate Blend
	event.recipes.gtceu.mixer('firmalife:food/dark_chocolate_blend/milk')
		.itemInputs('2x firmalife:food/cocoa_powder', '#tfc:sweetener')
		.inputFluids(Fluid.of('minecraft:milk', 1000))
		.itemOutputs('2x firmalife:food/dark_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.recipes.gtceu.mixer('firmalife:food/dark_chocolate_blend/yak_milk')
		.itemInputs('2x firmalife:food/cocoa_powder', '#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:yak_milk', 1000))
		.itemOutputs('2x firmalife:food/dark_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.recipes.gtceu.mixer('firmalife:food/dark_chocolate_blend/goat_milk')
		.itemInputs('2x firmalife:food/cocoa_powder', '#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:goat_milk', 1000))
		.itemOutputs('2x firmalife:food/dark_chocolate_blend')
		.duration(300)
		.EUt(16)


	event.recipes.gtceu.mixer('firmalife:food/dark_chocolate_blend/coconut_milk')
		.itemInputs('2x firmalife:food/cocoa_powder', '#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:coconut_milk', 1000))
		.itemOutputs('2x firmalife:food/dark_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.smelting('firmalife:food/dark_chocolate', 'firmalife:food/dark_chocolate_blend')

	// Milk Chocolate Blend
	event.recipes.gtceu.mixer('firmalife:food/milk_chocolate_blend/milk')
		.itemInputs('firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener')
		.inputFluids(Fluid.of('minecraft:milk', 1000))
		.itemOutputs('2x firmalife:food/milk_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.recipes.gtceu.mixer('firmalife:food/milk_chocolate_blend/yak_milk')
		.itemInputs('firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:yak_milk', 1000))
		.itemOutputs('2x firmalife:food/milk_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.recipes.gtceu.mixer('firmalife:food/milk_chocolate_blend/goat_milk')
		.itemInputs('firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:goat_milk', 1000))
		.itemOutputs('2x firmalife:food/milk_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.recipes.gtceu.mixer('firmalife:food/milk_chocolate_blend/coconut_milk')
		.itemInputs('firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:coconut_milk', 1000))
		.itemOutputs('2x firmalife:food/milk_chocolate_blend')
		.duration(300)
		.EUt(16)

	event.smelting('firmalife:food/milk_chocolate', 'firmalife:food/milk_chocolate_blend')

	// Strawberry Ice Cream
	event.recipes.gtceu.mixer('firmalife:food/strawberry_ice_cream')
		.itemInputs('firmalife:food/vanilla_ice_cream', '2x tfc:food/strawberry')
		.itemOutputs('firmalife:food/strawberry_ice_cream')
		.duration(300)
		.EUt(16)

	// Hardtack Dough
	event.recipes.gtceu.mixer('firmalife:food/chocolate_chip_cookie_dough')
		.itemInputs('4x firmalife:food/cookie_dough', '#firmalife:chocolate_blends')
		.itemOutputs('4x firmalife:food/chocolate_chip_cookie_dough')
		.duration(300)
		.EUt(16)

	//#endregion

	//#region Обжарка некоторой еды

	// Cooked Pizza
	event.smelting('firmalife:food/cooked_pizza', 'firmalife:food/raw_pizza')

	// Taco Shell
	event.smelting('firmalife:food/taco_shell', 'firmalife:food/corn_tortilla')

	// Sugar Cookie
	event.smelting('firmalife:food/sugar_cookie', 'firmalife:food/cookie_dough')

	// Chocolate Chip Cookie
	event.smelting('firmalife:food/chocolate_chip_cookie', 'firmalife:food/chocolate_chip_cookie_dough')

	// Hardtack
	event.smelting('firmalife:food/hardtack', 'firmalife:food/hardtack_dough')

	// Cooked Pie
	event.smelting('firmalife:food/cooked_pie', 'firmalife:food/filled_pie')

	// Roasted Cocoa Beans
	event.smelting('firmalife:food/roasted_cocoa_beans', 'firmalife:food/cocoa_beans')

	// Pumpkin Pie
	event.smelting('minecraft:pumpkin_pie', 'firmalife:food/raw_pumpkin_pie')

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

	global.MINECRAFT_DYE_NAMES.forEach(dye => {

		event.recipes.firmalife.vat()
			.inputs(`#forge:dyes/${dye}`, Fluid.of('tfc:salt_water', 250))
			.outputFluid(Fluid.of(`tfc:${dye}_dye`, 144))
			.length(2000)
			.temperature(600)
			.id(`firmalife:vat/${dye}_dye`)
	})

	//#endregion

	//#region Plated blocks

	generatePlatedBlockRecipe(event, GTMaterials.Chromium);
	generatePlatedBlockRecipe(event, GTMaterials.StainlessSteel);

	// #endregion

	// #region Smashed food

	event.recipes.gtceu.forge_hammer('firmalife:soybean_paste')
		.itemInputs('firmalife:food/dehydrated_soybeans')
		.itemOutputs('firmalife:food/soybean_paste')
		.duration(20)
		.EUt(7)

	event.recipes.gtceu.forge_hammer('firmalife:red_grapes')
		.itemInputs('firmalife:food/red_grapes')
		.itemOutputs('firmalife:food/smashed_red_grapes')
		.duration(20)
		.EUt(7)

	event.recipes.gtceu.forge_hammer('firmalife:white_grapes')
		.itemInputs('firmalife:food/white_grapes')
		.itemOutputs('firmalife:food/smashed_white_grapes')
		.duration(20)
		.EUt(7)

	// #endregion

	// #region Drying mat alternatives

	event.shaped('firmalife:drying_mat', ['AAA'], { A: 'tfc:plant/leafy_kelp' }).id('tfg:shaped/drying_mat_leafy_kelp')
	event.shaped('firmalife:drying_mat', ['AAA'], { A: 'tfc:plant/winged_kelp' }).id('tfg:shaped/drying_mat_winged_kelp')

	// #endregion

	event.recipes.gtceu.mixer('sugar_water')
		.itemInputs('#tfc:sweetener')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.outputFluids(Fluid.of('firmalife:sugar_water', 500))
		.circuit(5)
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(200)

	event.smelting('firmalife:food/dehydrated_soybeans', 'tfc:food/soybean')

	event.recipes.gtceu.fermenter('soybean_oil')
		.itemInputs('firmalife:food/soybean_paste')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.outputFluids(Fluid.of('firmalife:soybean_oil', 250))
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(600)
}
