// priority: 0
"use strict";

/**
 * @param {Internal.RecipesEventJS} event
 */
function registerTFGFoodRecipes(event) {

	registerTFGPreservationFoodRecipes(event);
	registerTFGMealBagRecipes(event);
	registerTFGBakingAndDessertFoodRecipes(event);
	registerTFGPizzaAndPastaFoodRecipes(event);
	registerTFGSandwichFoodRecipes(event);
	registerTFGSoupFoodRecipes(event);
	registerTFGDairyFoodRecipes(event);

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

	//#region Firmalife


    // Pineapple fiber
    global.processorRecipe(event, "firmalife:crafting/pineapple_fiber", 300, 16, {
        circuit: 3,
        itemInputs: ["firmalife:food/pineapple"],
        fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
        itemOutputs: ["firmalife:pineapple_fiber"]
    })

	//#endregion

	//#region Boiling & Frying
	global.generateWaterBoilingFoodRecipes(event, 'tfc:food/rice_grain', 'tfc:food/cooked_rice', false, true, true)
	global.generateWaterBoilingFoodRecipes(event, '#firmalife:foods/raw_eggs', 'tfc:food/boiled_egg', false, false, true, 2)

	global.generateOilBoilingFoodRecipes(event, 'tfg:food/raw_fries', 'tfg:food/cooked_fries', true, true, true)


	// #endregion
	// #region Firmalife



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



	global.processorRecipe(event, "basil", 20, 16, {
		itemInputs: ['firmalife:plant/basil'],
		itemOutputs: ['2x firmalife:spice/basil_leaves'],
		circuit: 30,
		itemOutputProvider: TFC.isp.of('2x firmalife:spice/basil_leaves').resetFood()
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


	//#endregion
}
