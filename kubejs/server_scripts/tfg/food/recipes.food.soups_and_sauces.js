"use strict";


/**
 * This file is for recipes related to soups, sauces, stews, stocks, porridge, etc.
 */
function registerTFGSoupFoodRecipes(event) {

	//#region Slop

	/**
	 * Object array of `{soup type, input tag}`
	 * @type {{String, Item<tag>}[]}
	 */
	const soupTypes = [
		{type: 'grain_soup', input: '#tfc:foods/grains'},
		{type: 'fruit_soup', input: '#tfc:foods/fruits'},
		{type: 'vegetables_soup', input: '#tfc:foods/vegetables'},
		{type: 'protein_soup', input: '#tfc:foods/meats'},
		{type: 'dairy_soup', input: '#tfc:foods/dairy'}
	];

	soupTypes.forEach((soup, i) => {
		global.processorRecipe(event, soup.type, 300, 8, {
			circuit: 20 + i,
			itemInputs: [
				'3x #tfc:bowls',
				`2x ${soup.input}`,
				'3x #tfc:foods/usable_in_soup'
			],
			fluidInputs: ['#tfg:clean_water 100'],
			itemOutputs: [`3x tfc:food/${soup.type}`],
			itemOutputProvider: TFC.isp.of(`3x tfc:food/${soup.type}`).simpleModifier('tfg:add_bowl').meal(
				(food) => food.hunger(5).water(1).saturation(1).decayModifier(4.5),
				[
					(portion) => portion
						.ingredient(Ingredient.of('#tfc:foods/usable_in_soup'))
						.nutrientModifier(1)
						.saturationModifier(0.8)
						.waterModifier(0.8)
				]
			)
    	});
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

	//#endregion
    //#region Stocks

    // Rich Stock
    global.generateMealFoodRecipes(event, [
			'#tfg:foods/makes_rich_stock',
			'#tfc:foods/vegetables',
			'#forge:bones',
			'tfc:powder/salt',
			'tfg:spice/bay_leaf'
		], '#tfg:clean_water 1000', 'tfg:rich_stock 1000');

	// Light Stock
    global.generateMealFoodRecipes(event, [
        '#tfg:foods/makes_light_stock',
        '#tfc:foods/vegetables',
        '#forge:bones',
        'tfc:powder/salt',
        'firmalife:spice/basil_leaves'
    ], '#tfg:clean_water 1000', 'tfg:light_stock 1000');

    //#endregion
    //#region Sauces

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

    //#endregion

};