"use strict";

/**
 * This file is for recipes related to sandwich-adjacent items.
 * Is a hotdog a sandwich?...
 */
function registerTFGSandwichFoodRecipes(event) {

	//#region Sandwiches
	global.TFC_GRAINS.forEach(grain => {

		/** Array of `[bread type, sandwich id literal]`
		 * @type {[string, string][]}.
		 * */
		const breadTypes = [
			['bread', `tfc:food/${grain}_bread`],
			['flatbread', `firmalife:food/${grain}_flatbread`],
			['slice', `firmalife:food/${grain}_slice`]
		];

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
			});

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
			});

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
			});

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
			});
		});
	});

	//#endregion
	//#region Burgers

	// Hamburger
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

	global.processorRecipe(event, `hamburger`, 60, GTValues.VA[GTValues.ULV], {
		itemInputs: [`3x #tfg:foods/usable_in_burgers`, '2x tfg:food/brioche_bun'],
		itemOutputs: ['tfg:food/hamburger'],
		circuit: 2,
		itemOutputProvider: TFC.isp.of('tfg:food/hamburger').meal(
			(food) => food.hunger(4).decayModifier(1.3),
			[(portion) => portion.nutrientModifier(1.2).saturationModifier(1.0)]
		)
	});

	// Cheeseburger
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

	global.processorRecipe(event, `cheeseburger`, 60, GTValues.VA[GTValues.ULV], {
		itemInputs: [`2x #tfg:foods/usable_in_burgers`, '2x tfg:food/brioche_bun', '#tfg:foods/cheeses'],
		itemOutputs: ['tfg:food/cheeseburger'],
		circuit: 3,
		itemOutputProvider: TFC.isp.of('tfg:food/cheeseburger').meal(
			(food) => food.hunger(4).decayModifier(1.3),
			[(portion) => portion.nutrientModifier(1.2).saturationModifier(1.1)]
		)
	});

	// Burger Patty
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.itemStackProvider.of('tfg:food/raw_burger_patty').copyFood(),
		[
			TFC.ingredient.notRotten('#tfg:foods/burger_meats'),
			'#forge:tools/mortars'
		]
	).id('tfg:crafting/raw_burger_patty');

	global.processorRecipe(event, 'raw_burger_patty', 60, GTValues.VA[GTValues.ULV], {
		itemInputs: ['#tfg:foods/burger_meats'],
		itemOutputs: ['tfg:food/raw_burger_patty'],
		notConsumable: ['gtceu:wire_extruder_mold'],
		itemOutputProvider: TFC.isp.of('tfg:food/raw_burger_patty').copyFood()
	});

	//#endregion
};