"use strict";

/**
 * This file is for recipes related to latin american cuisine.
 */
function registerTFGLatinAmericanFoodRecipes(event) {

//#region Ingredients

	// Nixtamal
	global.processorRecipe(event, 'cured_maize', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/maize_grain'],
		inputFluids: [Fluid.of('tfc:limewater', 100)],
		itemOutputs: ['firmalife:food/cured_maize'],
		itemOutputProvider: TFC.isp.of('firmalife:food/cured_maize').copyFood()
	});
	
	global.processorRecipe(event, 'nixtamal', 20*30, GTValues.VA[GTValues.ULV], {
		itemInputs: ['firmalife:food/cured_maize'],
		fluidInputs: ['#tfg:clean_water 100'],
		itemOutputs: ['firmalife:food/nixtamal'],
		circuit: 1,
		itemOutputProvider: TFC.isp.of('firmalife:food/nixtamal').copyFood()
	});

	// Tortilla
	global.processorRecipe(event, `masa_flour`, 100, 8, {
		circuit: 31,
		itemInputs: [`firmalife:food/nixtamal`],
		itemOutputs: [`4x firmalife:food/masa_flour`],
		itemOutputProvider: TFC.isp.of(`4x firmalife:food/masa_flour`).copyOldestFood()
	});

	event.recipes.tfc.advanced_shaped_crafting(
		TFC.isp.of(`4x firmalife:food/masa_flour`).copyFood(), ['A', 'B'], {
			A: TFC.ingredient.notRotten(`firmalife:food/nixtamal`),
			B: '#forge:tools/mortars'
		}, 0, 0).id(`tfg:mortar/masa_flour`);

	global.processorRecipe(event, 'firmalife_masa', 300, 2, {
		circuit: 3,
		itemInputs: ['firmalife:food/masa_flour'],
		fluidInputs: ['#tfg:clean_water 100'],
		itemOutputs: ['2x firmalife:food/masa'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/masa').copyFood()
	});

	global.processorRecipe(event, 'tortilla_chips', 40, 16, {
		itemInputs: ['firmalife:food/taco_shell', 'tfc:powder/salt'],
		itemOutputs: ['firmalife:food/tortilla_chips'],
		itemOutputProvider: TFC.isp.of('firmalife:food/tortilla_chips').copyFood()
	});
	
	// Salsa. Wouldnt Pico De Gallo make more sense? smh.
	global.processorRecipe(event, 'salsa', 300, 8, {
		circuit: 1,
		itemInputs: ['tfc:food/tomato', 'tfc:powder/salt', 'tfg:spice/cilantro_leaves'],
		itemOutputs: ['5x firmalife:food/salsa'],
		itemOutputProvider: TFC.isp.of('5x firmalife:food/salsa').copyFood()
	});

	event.remove({id: 'firmalife:crafting/salsa'});

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
//#region Meals

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

//#endregion

};