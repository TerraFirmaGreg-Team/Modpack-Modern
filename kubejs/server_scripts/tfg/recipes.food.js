// priority: 0

function registerTFGFoodRecipes(event) {

	//#region ================= Meat cooking =================

	global.TFC_FURNACE_MEAT_RECIPE_COMPONENTS.forEach(item => {

		registerTFCRecipeProperties(item.name,
			[ TFC.ingredient.notRotten(item.input) ],
			TFC.isp.of(item.output).copyFood().addTrait('firmalife:oven_baked')
		)

		event.recipes.gtceu.electric_oven(item.name)
			.itemInputs(item.input)
			.itemOutputs(item.output)
			.duration(300)
			.EUt(16)
	})

	//#endregion
	//#region ================= Cutting grains =================

	global.TFC_QUERN_GRAIN_RECIPE_COMPONENTS.forEach(item => {

		registerTFCRecipeProperties(item.name,
			[ TFC.ingredient.notRotten(item.input) ],
			TFC.isp.of(item.output).copyFood()
		)

		event.recipes.gtceu.food_processor(item.name)
			.itemInputs(item.input)
			.itemOutputs(item.output)
			.duration(100)
			.EUt(2)
	})

	//#endregion
	//#region ================= Grains to flour =================

	global.TFC_QUERN_FLOUR_RECIPE_COMPONENTS.forEach(item => {

		registerTFCRecipeProperties(item.name,
			[ TFC.ingredient.notRotten(item.input) ],
			TFC.isp.of(item.output).copyFood()
		)

		event.recipes.gtceu.food_processor(item.name)
			.itemInputs(item.input)
			.itemOutputs(item.output)
			.duration(100)
			.EUt(2)
	})

	global.FIRMALIFE_QUERN_FLOUR_RECIPE_COMPONENTS.forEach(item => {

		registerTFCRecipeProperties(item.name,
			[ TFC.ingredient.notRotten(item.input) ],
			TFC.isp.of(item.output).copyFood()
		)

		event.recipes.gtceu.food_processor(item.name)
			.itemInputs(item.input)
			.itemOutputs(item.output)
			.duration(100)
			.EUt(2)
	})

	//#endregion
	//#region ================= Dough =================

	global.TFC_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS.forEach(item => {
		registerTFCRecipeProperties(item.name,
			[ TFC.ingredient.notRotten(item.input) ],
			TFC.isp.of(item.output).copyOldestFood()
		)

		event.recipes.gtceu.food_processor(item.name)
			.itemInputs(item.input)
			.inputFluids(Fluid.of('minecraft:water', 100))
			.itemOutputs(item.output)
			.duration(300)
			.EUt(16)
	})

	global.FIRMALIFE_MIXER_FLATBREAD_DOUGH_RECIPE_COMPONENTS.forEach(item => {
		registerTFCRecipeProperties(item.name,
			[ TFC.ingredient.notRotten(item.input) ],
			TFC.isp.of(item.output).copyOldestFood()
		)

		event.recipes.gtceu.food_processor(item.name)
			.itemInputs(item.input)
			.inputFluids(Fluid.of('minecraft:water', 100))
			.itemOutputs(item.output)
			.duration(300)
			.EUt(16)
	})

	//#endregion
	//#region ================= Baking bread =================

	global.TFC_FURNACE_BREAD_RECIPE_COMPONENTS.forEach(item => {
		registerTFCRecipeProperties(item.name,
			[ TFC.ingredient.notRotten(item.input) ],
			TFC.isp.of(item.output).copyFood().addTrait('firmalife:oven_baked')
		)

		event.recipes.gtceu.electric_oven(item.name)
			.itemInputs(item.input)
			.itemOutputs(item.output)
			.duration(300)
			.EUt(16)
	})

	global.FIRMALIFE_FURNACE_FLATBREAD_RECIPE_COMPONENTS.forEach(item => {
		registerTFCRecipeProperties(item.name,
			[ TFC.ingredient.notRotten(item.input) ],
			TFC.isp.of(item.output).copyFood().addTrait('firmalife:oven_baked')
		)

		event.recipes.gtceu.electric_oven(item.name)
			.itemInputs(item.input)
			.itemOutputs(item.output)
			.duration(300)
			.EUt(16)
	})

	//#endregion
	//#region ================= Firmalife =================

	global.FIRMALIFE_COOKING_RECIPE_COMPONENTS.forEach(item => {

		registerTFCRecipeProperties(item.name,
			[ TFC.ingredient.notRotten(item.input) ],
			TFC.isp.of(item.output).firmaLifeCopyDynamicFood()
		)

		event.recipes.gtceu.electric_oven(item.name)
			.itemInputs(item.input)
			.itemOutputs(item.output)
			.duration(300)
			.EUt(16)
	})

	//#endregion
	//#region ================= Dairy =================

	global.TFC_CURDS_AND_CHEESES.forEach(item => {

		// Curds
		registerTFCRecipeProperties(`${item.id}_curd`,
			[], TFC.isp.of(item.curd).resetFood()
		)

		event.recipes.gtceu.food_processor(`${item.id}_curd`)
			.inputFluids(Fluid.of(item.input_fluid, 1000))
			.itemOutputs(item.curd)
			.duration(1200)
			.EUt(16)

		// Sealed barrel cheese wheels
		registerTFCRecipeProperties(`${item.id}_cheese_wheel_1`,
			[ TFC.ingredient.notRotten(item.curd) ],
			TFC.isp.of(`firmalife:${item.cheese1}_wheel`).copyOldestFood()
		)

		event.recipes.gtceu.food_processor(`${item.id}_cheese_wheel_1`)
			.itemInputs(Item.of(item.curd, 3))
			.inputFluids(Fluid.of('tfc:salt_water', 750))
			.itemOutputs(`firmalife:${item.cheese1}_wheel`)
			.circuit(1)
			.duration(8000)
			.EUt(16)

		// Crafting table cheese wheels
		registerTFCRecipeProperties(`${item.id}_cheese_wheel_2`,
			[ TFC.ingredient.notRotten(item.curd) ],
			TFC.isp.of(`firmalife:${item.cheese2}_wheel`).copyOldestFood()
		)

		event.recipes.gtceu.food_processor(`${item.id}_cheese_wheel_2`)
			.itemInputs(Item.of(item.curd, 6), '3x tfc:powder/salt')
			.itemOutputs(`firmalife:${item.cheese2}_wheel`)
			.circuit(2)
			.duration(300)
			.EUt(16)

		// Cheese cutting
		registerTFCRecipeProperties(`${item.cheese1}_cheese_cutting_1`,
			[ TFC.ingredient.notRotten(`firmalife:${item.cheese1}_wheel`) ],
			TFC.isp.of(`firmalife:food/${item.cheese1}`).copyOldestFood()
		)

		event.recipes.gtceu.food_processor(`${item.cheese1}_cheese_cutting_1`)
			.itemInputs(`firmalife:${item.cheese1}_wheel`)
			.itemOutputs(`4x firmalife:food/${item.cheese1}`)
			.duration(100)
			.EUt(7)

		registerTFCRecipeProperties(`${item.cheese2}_cheese_cutting_2`,
			[ TFC.ingredient.notRotten(`firmalife:${item.cheese2}_wheel`) ],
			TFC.isp.of(`firmalife:food/${item.cheese2}`).copyOldestFood()
		)

		event.recipes.gtceu.food_processor(`${item.cheese2}_cheese_cutting_2`)
			.itemInputs(`firmalife:${item.cheese2}_wheel`)
			.itemOutputs(`4x firmalife:food/${item.cheese2}`)
			.duration(100)
			.EUt(7)
	})

	// White Chocolate Blend
	registerTFCRecipeProperties(`white_chocolate_blend`,
		[ TFC.ingredient.notRotten('firmalife:food/cocoa_butter') ],
		TFC.isp.of('firmalife:food/white_chocolate_blend').copyOldestFood())

	event.recipes.gtceu.food_processor(`white_chocolate_blend`)
		.itemInputs('2x firmalife:food/cocoa_butter', '#tfc:sweetener')
		.inputFluids(Fluid.of('#tfc:milks', 1000))
		.itemOutputs('2x firmalife:food/white_chocolate_blend')
		.circuit(1)
		.duration(300)
		.EUt(16)

	// Dark Chocolate Blend
	registerTFCRecipeProperties(`dark_chocolate_blend`,
		[], TFC.isp.of('firmalife:food/dark_chocolate_blend').resetFood())

	event.recipes.gtceu.food_processor(`dark_chocolate_blend`)
		.itemInputs('2x firmalife:food/cocoa_powder', '#tfc:sweetener')
		.inputFluids(Fluid.of('#tfc:milks', 1000))
		.itemOutputs('2x firmalife:food/dark_chocolate_blend')
		.circuit(1)
		.duration(300)
		.EUt(16)

	// Milk Chocolate Blend
	registerTFCRecipeProperties(`milk_chocolate_blend`,
		[ TFC.ingredient.notRotten('firmalife:food/cocoa_butter') ],
		TFC.isp.of('firmalife:food/milk_chocolate_blend').copyOldestFood())

	event.recipes.gtceu.food_processor(`milk_chocolate_blend`)
		.itemInputs('firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener')
		.inputFluids(Fluid.of('#tfc:milks', 1000))
		.itemOutputs('2x firmalife:food/milk_chocolate_blend')
		.circuit(2)
		.duration(300)
		.EUt(16)

	//#endregion

	//#region ================= Misc =================

	registerTFCRecipeProperties('tomato_sauce',
		[ TFC.ingredient.notRotten('tfc:food/tomato'), TFC.ingredient.notRotten('tfc:food/garlic') ],
		TFC.isp.of('firmalife:food/tomato_sauce').copyOldestFood())

	event.recipes.gtceu.food_processor('tomato_sauce')
		.itemInputs('tfc:food/tomato', 'tfc:powder/salt', 'tfc:food/garlic')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.itemOutputs('5x firmalife:food/tomato_sauce')
		.duration(2000)
		.EUt(7)

	registerTFCRecipeProperties('tomato_sauce_from_mix',
		[ TFC.ingredient.notRotten("firmalife:food/tomato_sauce_mix") ],
		TFC.isp.of('firmalife:food/tomato_sauce').copyOldestFood())

	event.recipes.gtceu.food_processor('tomato_sauce_from_mix')
		.itemInputs("firmalife:food/tomato_sauce_mix")
		.inputFluids(Fluid.of('minecraft:water', 200))
		.itemOutputs('firmalife:food/tomato_sauce')
		.duration(200)
		.EUt(7)
		
	registerTFCRecipeProperties('olive_paste',
		[ TFC.ingredient.notRotten('tfc:food/olive') ])
	
	event.recipes.gtceu.food_processor(`olive_paste`)
		.itemInputs('tfc:food/olive')
		.itemOutputs('2x tfc:olive_paste')
		.duration(60)
		.EUt(2)

	registerTFCRecipeProperties('soybean_paste',
		[ TFC.ingredient.notRotten('tfc:food/soybean') ])
	
	event.recipes.gtceu.food_processor(`soybean_paste`)
		.itemInputs('tfc:food/soybean')
		.itemOutputs('2x firmalife:soybean_paste')
		.duration(60)
		.EUt(2)

	// Vinegar
	global.TFC_ALCOHOL.forEach(alcohol => {
		let name = `vinegar/${alcohol.id.replace(':', '_')}`;

		registerTFCRecipeProperties(name,
		[ TFC.ingredient.notRotten('#tfc:foods/fruits') ])

		event.recipes.gtceu.food_processor(name)
			.itemInputs('#tfc:foods/fruits')
			.inputFluids(Fluid.of(alcohol.id, 250))
			.outputFluids(Fluid.of('tfc:vinegar', 250))
			.circuit(5)
			.duration(600)
			.EUt(28)
	})

	// Pizzas
	registerTFCRecipeProperties('pizza_dough_olive_oil',
		[ TFC.ingredient.notRotten('#tfc:foods/dough') ],
		TFC.isp.of('firmalife:food/pizza_dough').copyOldestFood())

	event.recipes.gtceu.food_processor('pizza_dough_olive_oil')
		.itemInputs('firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt')
		.inputFluids(Fluid.of('tfc:olive_oil', 1000))
		.itemOutputs('4x firmalife:food/pizza_dough')
		.duration(300)
		.EUt(16)

	registerTFCRecipeProperties('pizza_dough_soybean_oil',
		[ TFC.ingredient.notRotten('#tfc:foods/dough') ],
		TFC.isp.of('firmalife:food/pizza_dough').copyOldestFood())

	event.recipes.gtceu.food_processor('pizza_dough_soybean_oil')
		.itemInputs('firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt')
		.inputFluids(Fluid.of('firmalife:soybean_oil', 1000))
		.itemOutputs('4x firmalife:food/pizza_dough')
		.duration(300)
		.EUt(16)

	// Ice Cream
	registerTFCRecipeProperties('vanilla_ice_cream',
		[], TFC.isp.of('firmalife:food/vanilla_ice_cream').resetFood())

	event.recipes.gtceu.food_processor('vanilla_ice_cream')
		.itemInputs('firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla')
		.inputFluids(Fluid.of('firmalife:cream', 1000))
		.itemOutputs('2x firmalife:food/vanilla_ice_cream')
		.duration(300)
		.EUt(16)

	registerTFCRecipeProperties('chocolate_ice_cream',
		[ TFC.ingredient.notRotten('firmalife:food/vanilla_ice_cream') ],
		TFC.isp.of('firmalife:food/chocolate_ice_cream').copyOldestFood())

	event.recipes.gtceu.food_processor('chocolate_ice_cream')
		.itemInputs('firmalife:food/vanilla_ice_cream')
		.inputFluids(Fluid.of('firmalife:chocolate', 1000))
		.itemOutputs('firmalife:food/chocolate_ice_cream')
		.duration(300)
		.EUt(16)

	registerTFCRecipeProperties('strawberry_ice_cream',
		[ TFC.ingredient.notRotten('firmalife:food/vanilla_ice_cream'), TFC.ingredient.notRotten('tfc:food/strawberry') ],
		TFC.isp.of('firmalife:food/strawberry_ice_cream').copyOldestFood())

	event.recipes.gtceu.food_processor('strawberry_ice_cream')
		.itemInputs('firmalife:food/vanilla_ice_cream', '2x tfc:food/strawberry')
		.itemOutputs('firmalife:food/strawberry_ice_cream')
		.duration(300)
		.EUt(16)

	// Butter
	registerTFCRecipeProperties('butter',
		[], TFC.isp.of('firmalife:food/butter').resetFood())

	event.recipes.gtceu.food_processor('butter')
		.itemInputs('tfc:powder/salt')
		.inputFluids(Fluid.of('firmalife:cream', 1000))
		.itemOutputs('firmalife:food/butter')
		.duration(300)
		.EUt(16)

	// Pie Dough
	registerTFCRecipeProperties('pie_dough',
		[ TFC.ingredient.notRotten('firmalife:food/butter'), TFC.ingredient.notRotten('#tfc:foods/flour') ],
		TFC.isp.of('firmalife:food/pie_dough').copyOldestFood())

	event.recipes.gtceu.food_processor('pie_dough')
		.itemInputs('#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('firmalife:food/pie_dough')
		.duration(300)
		.EUt(16)
		.circuit(2)

	// Pumpkin Pie Dough
	registerTFCRecipeProperties('pumpkin_pie_dough',
		[ TFC.ingredient.notRotten('#forge:eggs'), TFC.ingredient.notRotten('tfc:food/pumpkin_chunks'), TFC.ingredient.notRotten('#tfc:foods/flour') ],
		TFC.isp.of('firmalife:food/pumpkin_pie_dough').copyOldestFood())

	event.recipes.gtceu.food_processor('pumpkin_pie_dough')
		.itemInputs('#tfc:sweetener', '#forge:eggs', '2x tfc:food/pumpkin_chunks', '#tfc:foods/flour')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('firmalife:food/pumpkin_pie_dough')
		.duration(300)
		.EUt(16)
		.circuit(2)

	// Cookie Dough
	registerTFCRecipeProperties('cookie_dough',
		[ TFC.ingredient.notRotten('firmalife:food/butter'), TFC.ingredient.notRotten('#tfc:foods/flour'), TFC.ingredient.notRotten('#forge:eggs') ],
		TFC.isp.of('4x firmalife:food/cookie_dough').copyOldestFood())

	event.recipes.gtceu.food_processor('cookie_dough')
		.itemInputs('#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour', '#forge:eggs', 'firmalife:spice/vanilla')
		.itemOutputs('4x firmalife:food/cookie_dough')
		.duration(300)
		.EUt(16)

	registerTFCRecipeProperties('chocolate_chip_cookie_dough',
		[ TFC.ingredient.notRotten('firmalife:food/cookie_dough'), TFC.ingredient.notRotten('#firmalife:chocolate_blends') ],
		TFC.isp.of('4x firmalife:food/chocolate_chip_cookie_dough').copyOldestFood())

	event.recipes.gtceu.food_processor('chocolate_chip_cookie_dough')
		.itemInputs('4x firmalife:food/cookie_dough', '#firmalife:chocolate_blends')
		.itemOutputs('4x firmalife:food/chocolate_chip_cookie_dough')
		.duration(300)
		.EUt(16)

	// Hardtack Dough
	registerTFCRecipeProperties('hardtack_dough',
		[ TFC.ingredient.notRotten('#tfc:foods/flour') ],
		TFC.isp.of('4x firmalife:food/hardtack_dough').copyOldestFood())

	event.recipes.gtceu.food_processor('hardtack_dough')
		.itemInputs('tfc:powder/salt', '#tfc:foods/flour')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('4x firmalife:food/hardtack_dough')
		.duration(300)
		.EUt(16)
		.circuit(4)

	// Yeast starter
	registerTFCRecipeProperties('yeast_starter',
		[ TFC.ingredient.notRotten('#tfc:foods/flour') ])

	event.recipes.gtceu.food_processor('yeast_starter')
		.inputFluids(Fluid.of('firmalife:yeast_starter', 100))
		.itemInputs('#tfc:foods/flour')
		.outputFluids(Fluid.of('firmalife:yeast_starter', 600))
		.duration(1200)
		.EUt(8)
		.circuit(1)

	// Cocoa Dust
	registerTFCRecipeProperties('cocoa_dust',
		[ TFC.ingredient.notRotten('firmalife:food/roasted_cocoa_beans') ])

	event.recipes.gtceu.food_processor('cocoa_dust')
		.itemInputs('firmalife:food/roasted_cocoa_beans')
		.itemOutputs('gtceu:cocoa_dust')
		.duration(100)
		.EUt(2)

	// Soybean paste
	registerTFCRecipeProperties('soybean_paste',
		[ TFC.ingredient.notRotten('firmalife:food/dehydrated_soybeans') ])

	event.recipes.gtceu.food_processor('soybean_paste')
		.itemInputs('firmalife:food/dehydrated_soybeans')
		.itemOutputs('firmalife:food/soybean_paste')
		.duration(50)
		.EUt(7)

	// Smashed red grapes
	registerTFCRecipeProperties('red_grapes',
		[ TFC.ingredient.notRotten('firmalife:food/red_grapes') ],
		TFC.isp.of('firmalife:food/smashed_red_grapes').copyOldestFood())

	event.recipes.gtceu.food_processor('red_grapes')
		.itemInputs('firmalife:food/red_grapes')
		.itemOutputs('firmalife:food/smashed_red_grapes')
		.duration(50)
		.EUt(7)

	// Smashed white grapes
	registerTFCRecipeProperties('white_grapes',
		[ TFC.ingredient.notRotten('firmalife:food/white_grapes') ],
		TFC.isp.of('firmalife:food/smashed_white_grapes').copyOldestFood())

	event.recipes.gtceu.food_processor('white_grapes')
		.itemInputs('firmalife:food/white_grapes')
		.itemOutputs('firmalife:food/smashed_white_grapes')
		.duration(50)
		.EUt(7)

	// Egg Noodles
	registerTFCRecipeProperties('egg_noodles',
		[ TFC.ingredient.notRotten("firmalife:foods/egg_noodle_flour"), TFC.ingredient.notRotten('#forge:eggs') ],
		TFC.isp.of('firmalife:food/smashed_white_grapes').copyOldestFood())

	event.recipes.gtceu.food_processor('egg_noodles')
		.itemInputs("firmalife:foods/egg_noodle_flour", 'tfc:powder/salt', '#forge:eggs')
		.inputFluids(Fluid.of('#tfc:milks', 1000))
		.itemOutputs('firmalife:food/raw_egg_noodles')
		.duration(50)
		.EUt(7)

	// Rice Noodles
	registerTFCRecipeProperties('rice_noodles',
		[ TFC.ingredient.notRotten("tfc:food/rice_flour"), TFC.ingredient.notRotten('tfc:food/maize_flour') ],
		TFC.isp.of('firmalife:food/raw_rice_noodles').copyOldestFood())

	event.recipes.gtceu.food_processor('rice_noodles')
		.itemInputs("tfc:food/rice_flour", 'tfc:food/maize_flour', 'tfc:powder/salt')
		.inputFluids(Fluid.of('#tfc:milks', 1000))
		.itemOutputs('2x firmalife:food/raw_egg_noodles')
		.duration(50)
		.EUt(7)

	// Cured Maize
	registerTFCRecipeProperties('cured_maize',
		[ TFC.ingredient.notRotten("tfc:food/maize_grain") ],
		TFC.isp.of('firmalife:food/cured_maize').copyOldestFood())

	event.recipes.gtceu.food_processor('cured_maize')
		.itemInputs("tfc:food/maize_grain")
		.inputFluids(Fluid.of('tfc:limewater', 100))
		.itemOutputs('firmalife:food/cured_maize')
		.duration(300)
		.EUt(7)

	// Soy Mixture
	registerTFCRecipeProperties('soy_mixture',
		[ TFC.ingredient.notRotten("tfc:food/soybean") ],
		TFC.isp.of('firmalife:food/soy_mixture').copyOldestFood())

	event.recipes.gtceu.food_processor('soy_mixture')
		.itemInputs("tfc:food/soybean", 'tfc:powder/salt')
		.inputFluids(Fluid.of('minecraft:water', 50))
		.itemOutputs('firmalife:food/soy_mixture')
		.duration(300)
		.EUt(7)

	// Boiled Egg
	registerTFCRecipeProperties('boiled_egg',
		[ TFC.ingredient.notRotten('#firmalife:foods/raw_eggs') ],
		TFC.isp.of('firmalife:food/soy_mixture').copyOldestFood())

	event.recipes.gtceu.food_processor('boiled_egg')
		.itemInputs('#firmalife:foods/raw_eggs')
		.inputFluids(Fluid.of('minecraft:water', 200))
		.itemOutputs('firmalife:food/boiled_egg')
		.duration(200)
		.EUt(7)

	// Cooked rice
	registerTFCRecipeProperties('cooked_rice',
		[ TFC.ingredient.notRotten('tfc:food/rice_grain') ],
		TFC.isp.of('firmalife:food/soy_mixture').copyOldestFood())

	event.recipes.gtceu.food_processor('cooked_rice')
		.itemInputs('tfc:food/rice_grain')
		.inputFluids(Fluid.of('minecraft:water', 200))
		.itemOutputs('firmalife:food/cooked_rice')
		.duration(200)
		.EUt(7)

	// These don't need the ISP handling, they're just here to keep all the food recipes together

	event.recipes.gtceu.mixer('tfg:tfc/olive_oil_water')
		.inputFluids(Fluid.of('water', 200))
		.itemInputs('1x tfc:olive_paste')
		.outputFluids(Fluid.of('tfc:olive_oil_water', 200))
		.duration(200)
		.EUt(28)

	event.recipes.gtceu.distillery('tfg:tfc/olive_oil')
		.inputFluids(Fluid.of('tfc:olive_oil_water', 250))
		.outputFluids(Fluid.of('tfc:olive_oil', 50))
		.duration(600)
		.EUt(28)

	event.recipes.gtceu.fermenter('soybean_oil')
		.itemInputs('firmalife:food/soybean_paste')
		.inputFluids(Fluid.of('minecraft:water', 100))
		.outputFluids(Fluid.of('firmalife:soybean_oil', 250))
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(600)
	
	event.recipes.gtceu.fermenter(`tfg:fermenter/cream_from_${name}`)
		.inputFluids(Fluid.of('#tfc:milks', 1000))
		.outputFluids(Fluid.of('firmalife:cream'))
		.circuit(6)
		.duration(1200)
		.EUt(24)

	event.recipes.gtceu.fermenter('tfg:fermenter/curdled_milk')
		.inputFluids(Fluid.of('minecraft:milk', 2000))
		.itemInputs('firmalife:rennet')
		.outputFluids(Fluid.of('tfc:curdled_milk', 2000))
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/curdled_yak_milk')
		.inputFluids(Fluid.of('firmalife:yak_milk', 2000))
		.itemInputs('firmalife:rennet')
		.outputFluids(Fluid.of('firmalife:curdled_yak_milk', 2000))
		.duration(2400)
		.EUt(16)

	event.recipes.gtceu.fermenter('tfg:fermenter/curdled_goat_milk')
		.inputFluids(Fluid.of('firmalife:goat_milk', 2000))
		.itemInputs('firmalife:rennet')
		.outputFluids(Fluid.of('firmalife:curdled_goat_milk', 2000))
		.duration(2400)
		.EUt(16)

	// GT cocoa dust compat
	event.recipes.gtceu.macerator('firmalife:food/cocoa_powder')
		.itemInputs('gtceu:cocoa_dust')
		.itemOutputs('4x firmalife:food/cocoa_powder')
		.duration(100)
		.EUt(2)

	event.recipes.tfc.quern('4x firmalife:food/cocoa_powder', 'gtceu:cocoa_dust')
		.id(`tfg:quern/cocoa_powder`)

	event.recipes.tfc.quern('gtceu:cocoa_dust', 'firmalife:food/roasted_cocoa_beans')
		.id('tfg:quern/cocoa_dust');

	//#endregion
}