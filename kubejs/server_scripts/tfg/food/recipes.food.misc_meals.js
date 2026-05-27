"use strict";

/**
 * This file is for recipes related to meal items that dont really belong in any specific category.
 */
function registerTFGMiscMealFoodRecipes(event) {

	// These don't seem to work with the set_bowl ISP modifier
	event.recipes.tfc.pot(['#tfc:bowls', 'firmalife:ice_shavings', 'firmalife:ice_shavings', 'firmalife:ice_shavings',  'firmalife:ice_shavings'],
		Fluid.of('minecraft:water', 1000), 20, 10)
		.itemOutput(TFC.isp.of('tfg:food/ice_soup'))
		.id('tfg:pot/ice_soup');

	event.recipes.gtceu.food_processor('ice_soup')
		.itemInputs('#tfc:bowls', '4x firmalife:ice_shavings')
		.inputFluids(Fluid.of('minecraft:water', 1000))
		.itemOutputs('tfg:food/ice_soup')
		.duration(60)
		.EUt(16);

	// Dino Nuggies
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
};