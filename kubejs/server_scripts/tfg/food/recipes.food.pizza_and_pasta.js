"use strict";

/**
 * This file is for recipes related to pizzas and pastas.
 */
function registerTFGPizzaAndPastaFoodRecipes(event) {

	//#region Pizza
	//TODO: refactor most of these when TFCGourmet is removed.

	// Raw Pizza.
	for (let i = 0; i <= 2; i++) {
		let itemInputs = [`firmalife:food/pizza_dough`, `firmalife:food/tomato_sauce`, `firmalife:food/shredded_cheese`];

		if (i !== 0) {
			itemInputs.push(`${i}x #firmalife:foods/pizza_ingredients`)
		}

		global.generateMixingFoodRecipes(event, itemInputs, null, null, 'firmalife:food/raw_pizza', true, false, true, i + 1,
			TFC.isp.of('firmalife:food/raw_pizza').meal(
		 		(food) => food.hunger(4).saturation(1).grain(1).dairy(0.25).decayModifier(4.5),
		 		[(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)]
		 	),
			`raw_pizza_${i + 1}`
		);
	};

	// Pizza Dough.
	global.processorRecipe(event, "pizza_dough", 300, 16, {
		itemInputs: ['firmalife:spice/basil_leaves', '#tfc:foods/dough', 'tfc:powder/salt'],
		fluidInputs: ['#firmalife:oils 100'],
		itemOutputs: ['4x firmalife:food/pizza_dough'],
		itemOutputProvider: TFC.isp.of("4x firmalife:food/pizza_dough").copyOldestFood()
	});

	// Cooking Pizza.
	global.generateFoodCookingRecipes(event, 'firmalife:food/raw_pizza', 'firmalife:food/cooked_pizza', true, false, true, true);

	//#endregion
	//#region Noodles

	global.processorRecipe(event, `egg_noodles`, 50, 8, {
		circuit: 6,
		itemInputs: ["#tfc:foods/flour", 'tfc:powder/salt', '#forge:eggs'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['firmalife:food/raw_egg_noodles'],
		itemOutputProvider: TFC.isp.of("firmalife:food/raw_egg_noodles").copyOldestFood()
	});

	global.processorRecipe(event, `rice_noodles`, 50, 8, {
		itemInputs: ["tfc:food/rice_flour", 'tfc:food/maize_flour', 'tfc:powder/salt'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['2x firmalife:food/raw_rice_noodles'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/raw_rice_noodles').copyOldestFood()
	});
	
	global.generateWaterBoilingFoodRecipes(event, 'firmalife:food/raw_egg_noodles', 'firmalife:food/cooked_pasta', false, true, true)
	global.generateWaterBoilingFoodRecipes(event, 'firmalife:food/raw_rice_noodles', 'firmalife:food/cooked_rice_noodles', false, true, true)

	//#endregion
	//#region Pasta

	// Instant Mac
	global.processorRecipe(event, 'raw_instant_mac', 20 * 10, GTValues.VA[GTValues.LV], {
		itemInputs: ['firmalife:food/raw_egg_noodles', '#tfg:foods/cheeses', '2x create:cardboard'],
		itemOutputs: ['2x tfg:food/raw_instant_mac'],
		fluidInputs: ['gtceu:polyethylene 100'],
		itemOutputProvider: TFC.isp.of('2x tfg:food/raw_instant_mac').copyFood()
	});

	global.generateFluidBoilingFoodRecipes(event, '#tfc:milks', 200, 'tfg:food/raw_instant_mac', 'tfg:food/cooked_instant_mac');

	// Lasagna
	global.processorRecipe(event, 'raw_lasagna', 60, 8, {
		itemInputs: ['2x firmalife:food/raw_egg_noodles', 'firmalife:food/tomato_sauce', '#firmalife:foods/cooked_meats_and_substitutes', '2x tfg:spice/oregano_leaves'],
		itemOutputs: ['firmalife:food/raw_lasagna'],
		itemOutputProvider: TFC.isp.of('firmalife:food/raw_lasagna').firmaLifeCopyDynamicFood()
	});
	
	event.replaceInput({id: 'firmalife:crafting/lasagna'},'firmalife:plant/oregano','tfg:spice/oregano_leaves');

	//#endregion
	//#region Ingredients
	global.processorRecipe(event, 'pasta_with_tomato_sauce', 60, 8, {
		itemInputs: ['firmalife:food/cooked_pasta', 'firmalife:food/tomato_sauce'],
		itemOutputs: ['firmalife:food/pasta_with_tomato_sauce'],
		itemOutputProvider: TFC.isp.of('firmalife:food/pasta_with_tomato_sauce').meal(
		 		(food) => food.hunger(4).saturation(4).decayModifier(4.5),
		 		[(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)]
		 	)
	});
	
	global.processorRecipe(event, 'tomato_sauce', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/tomato', 'tfc:powder/salt', 'tfc:food/garlic'],
		fluidInputs: ['#tfg:clean_water 200'],
		itemOutputs: ['5x firmalife:food/tomato_sauce'],
		itemOutputProvider: TFC.isp.of('5x firmalife:food/tomato_sauce').copyOldestFood()
	});

	global.processorRecipe(event, 'tomato_sauce_mix', 600, 8, {
		circuit: 2,
		itemInputs: ['tfc:food/tomato', 'tfc:powder/salt', 'tfc:food/garlic'],
		itemOutputs: ['5x firmalife:food/tomato_sauce_mix'],
		itemOutputProvider: TFC.isp.of('5x firmalife:food/tomato_sauce_mix').copyOldestFood()
	});

	global.generateFluidBoilingFoodRecipes(event, '#tfg:clean_water', 200, 'firmalife:food/tomato_sauce_mix', 'firmalife:food/tomato_sauce', true, false, true)

	//#endregion
};