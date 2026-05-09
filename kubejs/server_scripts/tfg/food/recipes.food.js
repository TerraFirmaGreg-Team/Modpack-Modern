// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event
 */
function registerTFGFoodRecipes(event) {

	registerTFGPreservationFoodRecipes(event);
	registerTFGMealBagRecipes(event);
	registerTFGBakingAndDessertFoodRecipes(event);
	registerTFGPizzaAndPastaFoodRecipes(event)

	//#region Basic Cooking

	global.TFC_FOOD_COOKING.forEach(item => {
		global.generateFoodCookingRecipes(event, item.input, item.output, true, false)
	});

	global.TFG_FOOD_COOKING.forEach(item => {
		global.generateFoodCookingRecipes(event, item.input, item.output)
	});

	global.FIRMALIFE_FOOD_COOKING.forEach(item => {
		global.generateFoodCookingRecipes(event, item.input, item.output, true, false)
	})

	//#endregion
	//#region TFC Grains

	global.TFC_GRAINS.forEach(grain => {

		//Sandwich making

		let breadTypes = [["bread", `tfc:food/${grain}_bread`], ["flatbread", `firmalife:food/${grain}_flatbread`], ["slice", `firmalife:food/${grain}_slice`]]
		breadTypes.forEach((type) => {
			global.processorRecipe(event, `${grain}_${type[0]}_sandwich`, 100, 16, {
				circuit: 3,
				itemInputs: [`2x ${type[1]}`, "3x #tfc:foods/usable_in_sandwich"],
				itemOutputs: [`2x tfc:food/${grain}_bread_sandwich`],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8)
				])
			})

			//Note: preserves needs to be first in the recipe code or else it will consider it as the usable_in_jam_sandwich ingredients.
			// 1 jam + 2 cheese
			global.processorRecipe(event, `${grain}_${type[0]}_jam_sandwich_1`, 100, 16, {
				circuit: 4,
				itemInputs: [`2x ${type[1]}`, '#tfc:foods/preserves', '2x #tfc:foods/usable_in_jam_sandwich'],
				itemOutputs: [`2x tfc:food/${grain}_bread_jam_sandwich`, 'tfc:empty_jar'],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_jam_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8)
				])
			})

			// 2 jam + 1 cheese. Uses preserves_2 alias so GT's RecipeDB gives this a distinct tree key from recipe 1.
			global.processorRecipe(event, `${grain}_${type[0]}_jam_sandwich_2`, 100, 16, {
				circuit: 4,
				itemInputs: [`2x ${type[1]}`, '2x #tfc:foods/preserves_2', '1x #tfc:foods/usable_in_jam_sandwich'],
				itemOutputs: [`2x tfc:food/${grain}_bread_jam_sandwich`, '2x tfc:empty_jar'],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_jam_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8)
				])
			})

			// 3 jam
			global.processorRecipe(event, `${grain}_${type[0]}_jam_sandwich_3`, 100, 16, {
				circuit: 4,
				itemInputs: [`2x ${type[1]}`, '3x #tfc:foods/preserves'],
				itemOutputs: [`2x tfc:food/${grain}_bread_jam_sandwich`, '3x tfc:empty_jar'],
				itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_bread_jam_sandwich`).meal(
					(food => food.hunger(4).water(0.5).saturation(1).decayModifier(4.5)), [
					(portion) => portion.ingredient(Ingredient.of('#tfc:sandwich_bread')).nutrientModifier(0.5).saturationModifier(0.5).waterModifier(0.5),
					(portion) => portion.nutrientModifier(0.8).saturationModifier(0.8).waterModifier(0.8)
				])
			})
		})


	})

	//#endregion

	//#region Firmalife


    // Pineapple fiber
    global.processorRecipe(event, "firmalife:crafting/pineapple_fiber", 300, 16, {
        circuit: 3,
        itemInputs: ["firmalife:food/pineapple"],
        fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
        itemOutputs: ["firmalife:pineapple_fiber"]
    })

	//#endregion
	//#region Dairy

	global.TFC_CURDS_AND_CHEESES.forEach(item => {

		event.recipes.gtceu.fermenter(`tfg:curdled_${item.id}`)
			.inputFluids(Fluid.of(item.milk, 2000))
			.itemInputs('firmalife:rennet')
			.outputFluids(Fluid.of(item.curdled_fluid, 2000))
			.duration(2400)
			.EUt(16)

		event.recipes.gtceu.mixer(`lactose_milk_${item.id}`)
			.circuit(1)
			.inputFluids(Fluid.of(item.milk, 1000), Fluid.of('gtceu:acetic_acid', 25))
			.itemOutputs('1x gtceu:lactose_dust')
			.outputFluids(Fluid.of(item.curdled_fluid, 1000))
			.duration(300)
			.EUt(GTValues.VA[GTValues.LV])

		event.recipes.gtceu.mixer(`lactose_milk_vinegar_${item.id}`)
			.circuit(1)
			.inputFluids(Fluid.of(item.milk, 1000), Fluid.of('tfc:vinegar', 100))
			.chancedOutput('gtceu:lactose_dust', 1000, 0)
			.outputFluids(Fluid.of(item.curdled_fluid, 1000))
			.duration(300)
			.EUt(GTValues.VA[GTValues.LV])

		global.processorRecipe(event, `${item.id}_curd`, 1200, 16, {
			itemOutputs: [item.curd],
			fluidInputs: [Fluid.of(item.curdled_fluid, 1000)],
			itemOutputProvider: TFC.isp.of(item.curd).resetFood()
		})

		global.processorRecipe(event, `${item.id}_unsalted_cheese_wheel`, 8000, 16, {
			itemInputs: [`3x ${item.curd}`],
			itemOutputs: [item.unsalted_wheel],
			fluidInputs: [Fluid.of('tfc:salt_water', 750)],
			itemOutputProvider: TFC.isp.of(item.unsalted_wheel).copyOldestFood()
		})

		global.processorRecipe(event, `${item.id}_unsalted_cheese_cutting`, 100, 8, {
			itemInputs: [item.unsalted_wheel],
			itemOutputs: [`4x ${item.unsalted_cheese}`],
			itemOutputProvider: TFC.isp.of(`4x ${item.unsalted_cheese}`).copyOldestFood()
		})

		if (item.salted_wheel === null || item.salted_cheese === null) return;

		global.processorRecipe(event, `${item.id}_salted_cheese_wheel`, 1000, 16, {
			circuit: 2,
			itemInputs: [`3x ${item.curd}`, `6x tfc:powder/salt`],
			itemOutputs: [item.salted_wheel],
			itemOutputProvider: TFC.isp.of(item.salted_wheel).copyOldestFood()
		})

		global.processorRecipe(event, `${item.id}_salted_cheese_cutting`, 100, 8, {
			itemInputs: [item.salted_wheel],
			itemOutputs: [`4x ${item.salted_cheese}`],
			itemOutputProvider: TFC.isp.of(`4x ${item.salted_cheese}`).copyOldestFood()
		})
	})

	// Milks

	// No ISP needed here
	event.recipes.gtceu.fermenter(`tfg:fermenter/cream`)
		.inputFluids("#tfc:milks 1000")
		.outputFluids(Fluid.of('firmalife:cream'))
		.circuit(6)
		.duration(1200)
		.EUt(24)

	//#endregion
	//#region Boiling & Frying
	global.generateWaterBoilingFoodRecipes(event, 'tfc:food/rice_grain', 'tfc:food/cooked_rice', false, true, true)
	global.generateWaterBoilingFoodRecipes(event, '#firmalife:foods/raw_eggs', 'tfc:food/boiled_egg', false, false, true, 2)

	global.generateOilBoilingFoodRecipes(event, 'tfg:food/raw_fries', 'tfg:food/cooked_fries', true, true, true)
	global.generateOilBoilingFoodRecipes(event, 'tfg:food/raw_beer_battered_cheese_curds', 'tfg:food/cooked_beer_battered_cheese_curds', true, true, true)


	// #endregion
	// #region Firmalife

	global.processorRecipe(event, `masa_flour`, 100, 8, {
		circuit: 31,
		itemInputs: [`firmalife:food/nixtamal`],
		itemOutputs: [`4x firmalife:food/masa_flour`],
		itemOutputProvider: TFC.isp.of(`4x firmalife:food/masa_flour`).copyOldestFood()
	})

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`4x firmalife:food/masa_flour`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`firmalife:food/nixtamal`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/masa_flour`)

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`firmalife:food/soybean_paste`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`firmalife:food/dehydrated_soybeans`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/soybean_paste`)

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`2x tfc:olive_paste`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`tfc:food/olive`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/olive_paste`)

	global.processorRecipe(event, 'firmalife_masa', 300, 2, {
		circuit: 3,
		itemInputs: ["firmalife:food/masa_flour"],
		fluidInputs: ['#tfg:clean_water 100'],
		itemOutputs: ["2x firmalife:food/masa"],
		itemOutputProvider: TFC.isp.of("2x firmalife:food/masa").copyFood()
	})

	global.processorRecipe(event, "tortilla_chips", 40, 16, {
		itemInputs: ["firmalife:food/taco_shell", "tfc:powder/salt"],
		itemOutputs: ["firmalife:food/tortilla_chips"],
		itemOutputProvider: TFC.isp.of("firmalife:food/tortilla_chips").copyFood()
	})

	global.processorRecipe(event, "olive_paste", 60, 8, {
		itemInputs: ['tfc:food/olive'],
		itemOutputs: ['2x tfc:olive_paste'],
		itemOutputProvider: TFC.isp.of('2x tfc:olive_paste'),
		circuit: 3
	})

	global.processorRecipe(event, "soybean_paste", 60, 8, {
		itemInputs: ['firmalife:food/dehydrated_soybeans'],
		itemOutputs: ['firmalife:food/soybean_paste'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soybean_paste').copyOldestFood()
	})

	// Vinegar
	global.processorRecipe(event, 'vinegar_alcohol', 600, GTValues.VA[GTValues.LV], {
		circuit: 5,
		itemInputs: ['#tfc:foods/fruits'],
		fluidInputs: ['#tfg:alcohols 250'],
		fluidOutputs: [Fluid.of('tfc:vinegar', 250)]
	})

	global.processorRecipe(event, "shredded_cheese", 100, 16, {
		itemInputs: ['#firmalife:foods/cheeses'],
		itemOutputs: ['4x firmalife:food/shredded_cheese'],
		circuit: 30,
		itemOutputProvider: TFC.isp.of('4x firmalife:food/shredded_cheese').copyFood()
	})

	global.processorRecipe(event, "basil", 20, 16, {
		itemInputs: ['firmalife:plant/basil'],
		itemOutputs: ['2x firmalife:spice/basil_leaves'],
		circuit: 30,
		itemOutputProvider: TFC.isp.of('2x firmalife:spice/basil_leaves').resetFood()
	})


	global.processorRecipe(event, "butter", 300, 16, {
		itemInputs: ["tfc:powder/salt"],
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemOutputs: ["firmalife:food/butter"],
		itemOutputProvider: TFC.isp.of('firmalife:food/butter').resetFood()
	})


	global.processorRecipe(event, "yeast_starter", 1200, 8, {
		circuit: 2,
		fluidInputs: [Fluid.of('firmalife:yeast_starter', 100)],
		fluidOutputs: [Fluid.of('firmalife:yeast_starter', 600)],
		itemInputs: ['#tfc:foods/flour']
	})

	global.processorRecipe(event, "yeast_starter_from_water", 7200, 8, {
		circuit: 10,
		itemInputs: ['#tfc:foods/fruits'],
		fluidInputs: ['#tfg:clean_water 100', 'gtceu:nitrogen 100'],
		fluidOutputs: [Fluid.of('firmalife:yeast_starter', 100)]
	})

	global.processorRecipe(event, "red_grapes", 50, 8, {
		circuit: 8,
		itemInputs: ["firmalife:food/red_grapes"],
		itemOutputs: ["firmalife:food/smashed_red_grapes"],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_red_grapes').copyFood()
	})

	global.processorRecipe(event, "white_grapes", 50, 8, {
		circuit: 8,
		itemInputs: ["firmalife:food/white_grapes"],
		itemOutputs: ["firmalife:food/smashed_white_grapes"],
		itemOutputProvider: TFC.isp.of('firmalife:food/smashed_white_grapes').copyFood()
	})

	global.processorRecipe(event, "cured_maize", 300, 8, {
		circuit: 1,
		itemInputs: ["tfc:food/maize_grain"],
		inputFluids: [Fluid.of('tfc:limewater', 100)],
		itemOutputs: ["firmalife:food/cured_maize"],
		itemOutputProvider: TFC.isp.of('firmalife:food/cured_maize').copyFood()
	})

	global.processorRecipe(event, "soy_mixture", 300, 8, {
		circuit: 1,
		itemInputs: ["tfc:food/soybean", 'tfc:powder/salt'],
		fluidInputs: ['#tfg:clean_water 50'],
		itemOutputs: ["firmalife:food/soy_mixture"],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyFood()
	})

	global.processorRecipe(event, 'soy_mixture_sea_water', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/soybean'],
		fluidInputs: ['tfc:salt_water 50'],
		itemOutputs: ['firmalife:food/soy_mixture'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyFood()
	})

	global.processorRecipe(event, 'soy_mixture_salt_water', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/soybean'],
		fluidInputs: ['gtceu:salt_water 25'],
		itemOutputs: ['firmalife:food/soy_mixture'],
		itemOutputProvider: TFC.isp.of('firmalife:food/soy_mixture').copyFood()
	})

	global.processorRecipe(event, "brown_mushroom", 100, 8, {
		circuit: 30,
		itemInputs: ["minecraft:brown_mushroom_block"],
		itemOutputs: ["4x minecraft:brown_mushroom"],
		itemOutputProvider: TFC.isp.of("4x minecraft:brown_mushroom").resetFood()
	})

	global.processorRecipe(event, "red_mushroom", 100, 8, {
		circuit: 30,
		itemInputs: ["minecraft:red_mushroom_block"],
		itemOutputs: ["4x minecraft:red_mushroom"],
		itemOutputProvider: TFC.isp.of("4x minecraft:red_mushroom").resetFood()
	})

	global.processorRecipe(event, "cut_pumpkin", 100, 8, {
		circuit: 30,
		itemInputs: ["tfc:pumpkin"],
		itemOutputs: ["4x tfc:food/pumpkin_chunks"],
		itemOutputProvider: TFC.isp.of("4x tfc:food/pumpkin_chunks").copyFood()
	})

	global.processorRecipe(event, "cut_melon", 100, 8, {
		circuit: 30,
		itemInputs: ["tfc:melon"],
		itemOutputs: ["4x tfc:food/melon_slice"],
		itemOutputProvider: TFC.isp.of("4x tfc:food/melon_slice").copyFood()
	})

	global.processorRecipe(event, "salsa", 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/tomato', 'tfc:powder/salt', 'tfg:spice/cilantro_leaves'],
		itemOutputs: ['5x firmalife:food/salsa'],
		itemOutputProvider: TFC.isp.of('5x firmalife:food/salsa').copyFood()
	})

	global.processorRecipe(event, "bacon", 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/pork', 'tfc:powder/salt'],
		itemOutputs: ['4x firmalife:food/bacon'],
		fluidInputs: ['gtceu:wood_gas 5', 'tfc:brine 100'],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/bacon')
			.addTrait("firmalife:smoked")
			.addTrait("tfc:brined")
			.addTrait("tfc:salted")
			.copyFood()
	})

	global.processorRecipe(event, "pickled_egg", 1000, 8, {
		circuit: 1,
		itemInputs: ['minecraft:clay_ball', 'tfc:powder/wood_ash', 'tfc:powder/salt', 'tfc:food/boiled_egg'],
		itemOutputs: ['firmalife:food/pickled_egg'],
		itemOutputProvider: TFC.isp.of('firmalife:food/pickled_egg').copyFood()
	})


	//#region Alcohols

	global.ALCOHOLS.forEach(alcohol => {
		const genBaseBarrelRecipe = (alcohol.genBase !== undefined) ? alcohol.genBase : false;
		const genBaseProcessorRecipe = true;
		const genAgedRecipe = (alcohol.genAged !== undefined) ? alcohol.genAged : false;
		const genVintageRecipe = (alcohol.genVintage !== undefined) ? alcohol.genVintage : true;

		global.generateAlcoholRecipes(event, alcohol.ingredient, alcohol.id, alcohol.agedId, alcohol.vintageId, genBaseBarrelRecipe, genBaseProcessorRecipe, genAgedRecipe, genVintageRecipe)
	});

	//#endregion
	//#region Soup

    global.processorRecipe(event, "grain_soup", 300, 8, {
        circuit: 20,
        itemInputs: [
            '3x #tfc:bowls',
            '2x #tfc:foods/grains',
            '3x #tfc:foods/usable_in_soup'
        ],
        fluidInputs: [Fluid.of('minecraft:water', 100)],
        itemOutputs: ['3x tfc:food/grain_soup'],
        itemOutputProvider: TFC.isp.of('3x tfc:food/grain_soup').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
            [
                (portion) => portion
                    .ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
                    .nutrientModifier(1)
                    .saturationModifier(0.8)
                    .waterModifier(0.8)
            ]
        )
    })

    global.processorRecipe(event, "fruit_soup", 200, 8, {
        circuit: 21,
        itemInputs: [
            '3x #tfc:bowls',
            '2x #tfc:foods/fruits',
            '3x #tfc:foods/usable_in_soup'
        ],
        fluidInputs: [Fluid.of('minecraft:water', 100)],
        itemOutputs: ['3x tfc:food/fruit_soup'],
        itemOutputProvider: TFC.isp.of('3x tfc:food/fruit_soup').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
            [
                (portion) => portion
                    .ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
                    .nutrientModifier(1)
                    .saturationModifier(0.8)
                    .waterModifier(0.8)
            ]
        )
    })

    global.processorRecipe(event, "vegetables_soup", 200, 8, {
        circuit: 22,
        itemInputs: [
            '3x #tfc:bowls',
            '2x #tfc:foods/vegetables',
            '3x #tfc:foods/usable_in_soup'
        ],
        fluidInputs: [Fluid.of('minecraft:water', 100)],
        itemOutputs: ['3x tfc:food/vegetables_soup'],
        itemOutputProvider: TFC.isp.of('3x tfc:food/vegetables_soup').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
            [
                (portion) => portion
                    .ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
                    .nutrientModifier(1)
                    .saturationModifier(0.8)
                    .waterModifier(0.8)
            ]
        )
    })

    global.processorRecipe(event, "protein_soup", 200, 8, {
        circuit: 23,
        itemInputs: [
            '3x #tfc:bowls',
            '2x #tfc:foods/meats',
            '3x #tfc:foods/usable_in_soup'
        ],
        fluidInputs: [Fluid.of('minecraft:water', 100)],
        itemOutputs: ['3x tfc:food/protein_soup'],
        itemOutputProvider: TFC.isp.of('3x tfc:food/protein_soup').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
            [
                (portion) => portion
                    .ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
                    .nutrientModifier(1)
                    .saturationModifier(0.8)
                    .waterModifier(0.8)
            ]
        )
    })

    global.processorRecipe(event, "dairy_soup", 200, 8, {
        circuit: 24,
        itemInputs: [
            '3x #tfc:bowls',
            '2x #tfc:foods/dairy',
            '3x #tfc:foods/usable_in_soup'
        ],
        fluidInputs: [Fluid.of('minecraft:water', 100)],
        itemOutputs: ['3x tfc:food/dairy_soup'],
        itemOutputProvider: TFC.isp.of('3x tfc:food/dairy_soup').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
            [
                (portion) => portion
                    .ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
                    .nutrientModifier(1)
                    .saturationModifier(0.8)
                    .waterModifier(0.8)
            ]
        )
    })

	//#endregion

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
		.inputFluids("#tfg:clean_water 100")
		.outputFluids(Fluid.of('firmalife:soybean_oil', 250))
		.EUt(GTValues.VA[GTValues.ULV])
		.duration(600)

	// These don't seem to work with the set_bowl ISP modifier
	event.recipes.tfc.pot(['#tfc:bowls', 'firmalife:ice_shavings', 'firmalife:ice_shavings', 'firmalife:ice_shavings',  'firmalife:ice_shavings'],
		Fluid.of('minecraft:water', 1000), 20, 10)
		.itemOutput(TFC.isp.of('tfg:food/ice_soup'))
		.id('tfg:pot/ice_soup')

	event.recipes.gtceu.food_processor('ice_soup')
		.itemInputs('#tfc:bowls', '4x firmalife:ice_shavings')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('tfg:food/ice_soup')
		.duration(60)
		.EUt(16)

	event.shapeless('4x tfc:powder/salt', ['#forge:dusts/salt', '#forge:tools/mortars'])
		.id(`tfg:mortar/salt`)

	//#endregion

	//Golden Apple
	global.processorRecipe(event, 'golden_apple_from_red', 30 * 20, GTValues.VA[GTValues.HV], {
		itemInputs: ['tfc:food/red_apple'],
		fluidInputs: [Fluid.of('gtceu:gold', 144 * 8)],
		itemOutputs: ['minecraft:golden_apple'],
		circuit: 5,
		itemOutputProvider: TFC.isp.of('minecraft:golden_apple').resetFood()
	})

	global.processorRecipe(event, 'golden_apple_from_green', 30 * 20, GTValues.VA[GTValues.HV], {
		itemInputs: ['tfc:food/green_apple'],
		fluidInputs: [Fluid.of('gtceu:gold', 144 * 8)],
		itemOutputs: ['minecraft:golden_apple'],
		circuit: 5,
		itemOutputProvider: TFC.isp.of('minecraft:golden_apple').resetFood()
	})

	//#region New foods

	// Stackatick
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('tfg:food/raw_stickastackatick').copyFood(),
		[TFC.ingredient.notRotten('tfg:food/raw_stackatick_chunks'), '#forge:rods/wood'], 'tfg:food/raw_stackatick_chunks')
		.id(`tfg:crafting/raw_stickastackatick`)

	// Bulbkin
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('4x betterend:cave_pumpkin_chunks').copyFood(),
		[TFC.ingredient.notRotten('betterend:cave_pumpkin'), '#forge:tools/hammers'], 'betterend:cave_pumpkin')
		.id(`tfg:crafting/cave_pumpkin_chunks_hammer`)

	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('4x betterend:cave_pumpkin_chunks').copyFood(),
		[TFC.ingredient.notRotten('betterend:cave_pumpkin'), '#tfc:knives'], 'betterend:cave_pumpkin')
		.id(`tfg:crafting/cave_pumpkin_chunks_knife`)

	global.processorRecipe(event, "cut_cave_pumpkin", 100, 8, {
		circuit: 30,
		itemInputs: ["betterend:cave_pumpkin"],
		itemOutputs: ["4x betterend:cave_pumpkin_chunks"],
		itemOutputProvider: TFC.isp.of("4x betterend:cave_pumpkin_chunks").copyFood()
	})

	// Dino nugs

	global.registerFoodRecipe(event, "food_oven", "raw_dino_nugget", 300, GTValues.VA[GTValues.LV], 'tfg.food_recipe.deep_frying', {
		itemInputs: ["tfg:food/raw_dino_nugget"],
		itemOutputs: ["tfg:food/cooked_dino_nugget"],
		fluidInputs: ['#firmalife:oils 100'],
		itemOutputProvider: TFC.isp.of("tfg:food/cooked_dino_nugget")
			.firmaLifeCopyDynamicFood()
			.addTrait("firmalife:oven_baked")
			.meal(
				(food) => food.hunger(3).saturation(2).decayModifier(1.5),
				[(portion) => portion.nutrientModifier(2.0)])
	});

	global.processorRecipe(event, 'raw_dino_nuggets', 300, GTValues.VA[GTValues.HV], {
		itemInputs: ['#tfg:raw_dinosaur_meat', '3x #tfc:foods/flour', 'tfc:powder/salt'],
		fluidInputs: ['#tfg:alcohols/beer 200'],
		notConsumable: ['gtceu:nugget_casting_mold'],
		itemOutputs: ['2x tfg:food/raw_dino_nugget'],
		circuit: 1,
		itemOutputProvider: TFC.isp.of("2x tfg:food/raw_dino_nugget").meal(
			(food) => food.hunger(1).decayModifier(3).grain(0.4),
			[(portion) => portion.nutrientModifier(0.5).waterModifier(0.4)]
		)
	});

	// Fries
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('4x tfg:food/raw_fries').copyFood(),
		[TFC.ingredient.notRotten('tfc:food/potato'), '#tfc:knives'],
		'tfc:food/potato'
	).id(`tfg:crafting/raw_fries_knife`);

	global.processorRecipe(event, 'raw_fries', 20*1, 8, {
		itemInputs: ['tfc:food/potato'],
		itemOutputs: ['4x tfg:food/raw_fries'],
		circuit: 7,
		itemOutputProvider: TFC.isp.of('4x tfg:food/raw_fries').copyFood()
	});

	global.processorRecipe(event, 'raw_beer_battered_cheese_curds', 20*5, GTValues.VA[GTValues.ULV], {
		itemInputs: ['4x #tfg:foods/cheese_curds', '#tfc:foods/flour', 'tfc:powder/salt', '#forge:eggs'],
		fluidInputs: ['#tfg:alcohols/beer 200'],
		itemOutputs: ['4x tfg:food/raw_beer_battered_cheese_curds'],
		itemOutputProvider: TFC.isp.of('4x tfg:food/raw_beer_battered_cheese_curds').copyOldestFood()
	});

	// Burrito
	global.processorRecipe(event, 'burrito', 60, 8, {
		itemInputs: ['firmalife:food/shredded_cheese', 'firmalife:food/salsa', 'firmalife:food/corn_tortilla', '#firmalife:foods/cooked_meats_and_substitutes', '#tfc:foods/vegetables'],
		itemOutputs: ['firmalife:food/burrito'],
		itemOutputProvider: TFC.isp.of('firmalife:food/burrito').meal(
			(food) => food.hunger(4).decayModifier(4.5).saturation(4.0),
			[(portion) => portion.nutrientModifier(0.5).waterModifier(0.8).saturationModifier(0.8)]
		)
	});

	// Taco
	global.processorRecipe(event, 'taco', 60, 8, {
		itemInputs: ['firmalife:food/shredded_cheese', 'firmalife:food/salsa', 'firmalife:food/taco_shell', '#firmalife:foods/cooked_meats_and_substitutes', '#tfc:foods/vegetables'],
		itemOutputs: ['firmalife:food/taco'],
		itemOutputProvider: TFC.isp.of('firmalife:food/taco').meal(
			(food) => food.hunger(4).decayModifier(4.5).saturation(4.0),
			[(portion) => portion.nutrientModifier(0.5).waterModifier(0.8).saturationModifier(0.8)]
		)
	});

	// Nachos
	global.processorRecipe(event, 'nachos', 60, 8, {
		itemInputs: ['firmalife:food/shredded_cheese', 'firmalife:food/salsa', 'firmalife:food/tortilla_chips', '#firmalife:foods/cooked_meats_and_substitutes'],
		itemOutputs: ['firmalife:food/nachos'],
		itemOutputProvider: TFC.isp.of('firmalife:food/nachos').copyOldestFood()
	});

	// Hamburgers
	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of('tfg:food/hamburger').meal(
			(food) => food.hunger(4).decayModifier(1.3),
			[(portion) => portion.nutrientModifier(1.2).saturationModifier(1.0)]
		),
		[
			'CA ',
			'BBB',
			' A '
		], {
			A: TFC.ingredient.notRotten('tfg:food/brioche_bun'),
			B: TFC.ingredient.notRotten('#tfg:foods/usable_in_burgers'),
			C: '#forge:tools/knives'
		},
		0,
		0
	).id('tfg:crafting/hamburger');

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of('tfg:food/cheeseburger').meal(
			(food) => food.hunger(4).decayModifier(1.3),
			[(portion) => portion.nutrientModifier(1.2).saturationModifier(1.1)]
		),
		[
			'CA ',
			'BBD',
			' A '
		], {
			A: TFC.ingredient.notRotten('tfg:food/brioche_bun'),
			B: TFC.ingredient.notRotten('#tfg:foods/usable_in_burgers'),
			C: '#forge:tools/knives',
			D: TFC.ingredient.notRotten('#tfg:foods/cheeses')
		},
		0,
		0
	).id('tfg:crafting/cheeseburger');

	global.processorRecipe(event, `hamburger`, 20*1, GTValues.VA[GTValues.ULV], {
		itemInputs: [`3x #tfg:foods/usable_in_burgers`, '2x tfg:food/brioche_bun'],
		itemOutputs: ['tfg:food/hamburger'],
		circuit: 2,
		itemOutputProvider: TFC.isp.of('tfg:food/hamburger').meal(
			(food) => food.hunger(4).decayModifier(1.3),
			[(portion) => portion.nutrientModifier(1.2).saturationModifier(1.0)]
		)
	});

	global.processorRecipe(event, `cheeseburger`, 20*1, GTValues.VA[GTValues.ULV], {
		itemInputs: [`2x #tfg:foods/usable_in_burgers`, '2x tfg:food/brioche_bun', '#tfg:foods/cheeses'],
		itemOutputs: ['tfg:food/cheeseburger'],
		circuit: 3,
		itemOutputProvider: TFC.isp.of('tfg:food/cheeseburger').meal(
			(food) => food.hunger(4).decayModifier(1.3),
			[(portion) => portion.nutrientModifier(1.2).saturationModifier(1.1)]
		)
	});

	// Tirage Mixture
	event.recipes.gtceu.food_processor('tfg:tirage_mixture')
		.itemInputs('#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:yeast_starter', 100))
		.itemOutputs('firmalife:tirage_mixture')
		.duration(10)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV])

	// Burger Patty
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('tfg:food/raw_burger_patty').copyFood(),
		[
			TFC.ingredient.notRotten('#tfg:foods/burger_meats'),
			'#forge:tools/mortars'
		]
	).id('tfg:crafting/raw_burger_patty');

	global.processorRecipe(event, 'raw_burger_patty', 20*1, GTValues.VA[GTValues.ULV], {
		itemInputs: ['#tfg:foods/burger_meats'],
		itemOutputs: ['tfg:food/raw_burger_patty'],
		notConsumable: ['gtceu:wire_extruder_mold'],
		itemOutputProvider: TFC.isp.of('tfg:food/raw_burger_patty').copyFood()
	});

	// Rich Stock
	event.recipes.tfc.pot(
		[
			'#tfg:foods/makes_rich_stock',
			'#tfc:foods/vegetables',
			'#forge:bones',
			'tfc:powder/salt',
			'tfg:spice/bay_leaf'
		],
		TFC.fluidStackIngredient('#tfg:clean_water', 1000),
		20*15,
		200
		)
		.fluidOutput(Fluid.of('tfg:rich_stock', 1000)
	).id('tfg:pot/rich_stock');

	global.processorRecipe(event, 'rich_stock', 20*5, GTValues.VA[GTValues.ULV], {
		itemInputs: [
			'#tfg:foods/makes_rich_stock',
			'#tfc:foods/vegetables',
			'#forge:bones',
			'tfc:powder/salt',
			'tfg:spice/bay_leaf'
		],
		fluidInputs: ['#tfg:clean_water 1000'],
		fluidOutputs: [Fluid.of('tfg:rich_stock', 1000)]
	});

	// Light Stock
	event.recipes.tfc.pot(
		[
			'#tfg:foods/makes_light_stock',
			'#tfc:foods/vegetables',
			'#forge:bones',
			'tfc:powder/salt',
			'firmalife:spice/basil_leaves'
		],
		TFC.fluidStackIngredient('#tfg:clean_water', 1000),
		20*15,
		200
		)
		.fluidOutput(Fluid.of('tfg:light_stock', 1000)
	).id('tfg:pot/light_stock');

	global.processorRecipe(event, 'light_stock', 20*5, GTValues.VA[GTValues.ULV], {
		itemInputs: [
			'#tfg:foods/makes_light_stock',
			'#tfc:foods/vegetables',
			'#forge:bones',
			'tfc:powder/salt',
			'firmalife:spice/basil_leaves'
		],
		fluidInputs: ['#tfg:clean_water 1000'],
		fluidOutputs: [Fluid.of('tfg:light_stock', 1000)]
	});

	// Brown Gravy
	global.processorRecipe(event, 'brown_gravy', 20*5, GTValues.VA[GTValues.ULV], {
		itemInputs: [
			'#tfc:foods/flour',
			'firmalife:food/butter',
			'tfg:spice/allspice'
		],
		fluidInputs: ['tfg:light_stock 1000', 'tfg:rich_stock 1000'],
		fluidOutputs: [Fluid.of('tfg:brown_gravy', 2000)]
	});

	// Poutine
	global.processorRecipe(event, 'poutine', 20*10, GTValues.VA[GTValues.LV], {
		itemInputs: [
			'4x tfg:food/cooked_fries',
			'#tfg:foods/cheese_curds',
			'2x #tfc:bowls'
		],
		fluidInputs: ['tfg:brown_gravy 50'],
		itemOutputs: ['2x tfg:food/poutine'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/poutine').simpleModifier('tfg:add_bowl').meal(
            (food) => food.hunger(5).water(5).saturation(1).decayModifier(1).grain(1).protein(0.5).dairy(1.5),
			[(portion) => portion.nutrientModifier(0.8).saturationModifier(1)]
		)
	});

	// Oatmeal
	for (let i = 1; i <= 4; i++) {
		global.processorRecipe(event, `oatmeal_${i}`, 20*15, GTValues.VA[GTValues.LV], {
			itemInputs: [
				'4x #tfc:bowls',
				'tfc:food/oat_grain',
				`${i}x #tfg:foods/usable_in_oatmeal`,
				'#tfc:sweetener'
			],
			fluidInputs: ['#tfc:milks 1000'],
			itemOutputs: ['4x tfg:food/oatmeal'],
			circuit: i,
			itemOutputProvider: TFC.isp.of('4x tfg:food/oatmeal').simpleModifier('tfg:add_bowl').meal(
				(food) => food.hunger(5).water(5).saturation(1).decayModifier(1.4).grain(0.8).dairy(1.5),
				[(portion) => portion.nutrientModifier(0.7).saturationModifier(0.7)]
			)
		});
	};

	// Sodium Dihydrogen Citrate
	event.recipes.gtceu.chemical_reactor('tfg:sodium_dihydrogen_citrate')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.dust, 'tfg:citric_acid', 1),
			ChemicalHelper.get(TagPrefix.dust, GTMaterials.SodiumBicarbonate, 1)
		)
		.itemOutputs('tfg:sodium_dihydrogen_citrate_dust')
		.outputFluids(
			Fluid.of('minecraft:water', 1000),
			Fluid.of('gtceu:carbon_dioxide', 1000)
		)
		.duration(20*10)
		.EUt(GTValues.VA[GTValues.HV]);

	// Citric Acid
	global.processorRecipe(event, 'citric_acid', 20*20, GTValues.VA[GTValues.HV], {
		itemInputs: [
			'#tfg:foods/citrus_fruits',
			'gtceu:calcium_hydroxide_dust'
		],
		fluidInputs: ['gtceu:sulfuric_acid 100'],
		itemOutputs: ['2x tfg:citric_acid_dust' ],
		itemOutputProvider: TFC.isp.of('2x tfg:citric_acid_dust')
	});

	// Slice of "Cheese"
	event.recipes.gtceu.food_processor('tfg:slice_of_cheese')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.dust, 'gtceu:lactose', 1),
			ChemicalHelper.get(TagPrefix.dust, 'tfg:cholesterol', 1),
			ChemicalHelper.get(TagPrefix.dust, 'tfg:sodium_dihydrogen_citrate', 1),
			ChemicalHelper.get(TagPrefix.foil, GTMaterials.Polyethylene, 8)
		)
		.inputFluids('#tfg:clean_water 1000')
		.itemOutputs('8x tfg:food/slice_of_cheese')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.LV])



	//#region Spices

	// Skips the first two spices as they are already in Firmalife
	global.SPICES.slice(2).forEach(spice => {
		event.recipes.tfc.advanced_shapeless_crafting(
			Item.of(spice.product).withCount(2),
			[
				spice.plant,
				'#forge:tools/knives'
			]
		).id(`tfg:crafting/${global.linuxUnfucker(spice.product)}`);

		event.recipes.gtceu.food_processor(`tfg:${global.linuxUnfucker(spice.product)}`)
			.itemInputs(spice.plant)
			.itemOutputs(Item.of(spice.product).withCount(2))
			.duration(10)
			.circuit(1)
			.EUt(GTValues.VA[GTValues.ULV]);
	});

	// Replace input didnt work.
	event.remove({id: 'firmalife:crafting/salsa'});
	event.replaceInput({id: 'firmalife:crafting/lasagna'},'firmalife:plant/oregano','tfg:spice/oregano_leaves');

	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('5x firmalife:food/salsa').copyFood(),
		[
			'tfg:spice/cilantro_leaves',
			'tfc:food/tomato',
			'tfc:powder/salt',
			'#forge:tools/knives'
		]
	).id('tfg:crafting/salsa');

	//#endregion

	global.processorRecipe(event, 'nixtamal', 20*30, GTValues.VA[GTValues.ULV], {
		itemInputs: ['firmalife:food/cured_maize'],
		fluidInputs: ['#tfg:clean_water 100'],
		itemOutputs: ['firmalife:food/nixtamal'],
		circuit: 1,
		itemOutputProvider: TFC.isp.of('firmalife:food/nixtamal').copyFood()
	});

	//#endregion
}
