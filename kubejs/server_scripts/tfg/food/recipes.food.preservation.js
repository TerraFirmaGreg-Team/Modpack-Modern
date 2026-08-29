"use strict";


/**
 * This file is for recipes related to preservation methods such as smoking, brining, drying, freeze-drying, and making jams.
 */
function registerTFGPreservationFoodRecipes(event) {

	//#region Fruit Preservation
	
	global.FOOD_FRUIT.forEach(fruit => {

		if (fruit.genJam) {
		
			global.generateAllJamRecipes(event, fruit.id, fruit.name, `tfg:jar/${fruit.name}`, `tfg:jar/${fruit.name}_unsealed`, `tfg:block/food/jam/${fruit.name}`);
		};

		global.processorRecipeText(event, `processor/${fruit.name}/freeze_drying`, 100, GTValues.VA[GTValues.MV], 'tfg.food_recipe.freeze_drying', {
			circuit: 7,
			itemInputs: [`2x ${fruit.id}`, 'tfg:foil_pack', 'tfg:dry_ice'],
			itemOutputs: ['tfg:food/freeze_dried_fruit'],
			itemOutputProvider: TFC.isp.of('tfg:food/freeze_dried_fruit').mergeTag({"dynamic_color": fruit.color.toString()}).meal(
				(food) => food.hunger(4).decayModifier(fruit.decay).water(0).microplastics(0.5),
				[(portion) => portion.nutrientModifier(0.9).saturationModifier(0.8).waterModifier(0)]
			).removeTrait('firmalife:dried').addTrait('tfg:freeze_dried')
		});

	});

	global.TFC_JAMS.forEach(name => {
		
		global.generateJamProcessorRecipes(event, `tfc:food/${name}`, name, `tfc:jar/${name}`, `tfc:jar/${name}_unsealed`);
	})

	global.FIRMALIFE_JAMS.forEach(name => {

		global.generateJamProcessorRecipes(event, `firmalife:food/${name}`, name, `firmalife:jar/${name}`, `firmalife:jar/${name}_unsealed`);
	})


	const drying_fruits = Ingredient.of('#tfc:foods/fruits').itemIds;
	drying_fruits.forEach(item => {
		global.processorRecipeText(event, `processor/${global.linuxUnfucker(item)}/drying`, 200, 16, "tfg.food_recipe.drying", {
			circuit: 6,
			itemInputs: [item],
			itemOutputs: [item],
			fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
			itemOutputProvider: TFC.isp.copyInput().addTrait("firmalife:dried")
		});
	});

	//#endregion
	//#region Smoking

	const smoking_meats = Ingredient.of('#tfc:foods/raw_meats').itemIds;
	const smoking_cheese = Ingredient.of('#firmalife:foods/cheeses').itemIds;

	smoking_meats.forEach(item => {
		global.generateSmokingFoodRecipes(event, item);
	});

	smoking_cheese.forEach(item => {
		global.generateSmokingFoodRecipes(event, item);
	});

	//#endregion
	//#region Brining

	const brining_veg = Ingredient.of('#firmalife:foods/pizza_ingredients').itemIds;
	const brining_ingredients = smoking_meats.concat(brining_veg);

	brining_ingredients.forEach(item => {
		global.generateBriningFoodRecipes(event, item);
	});

	//#endregion
	//#region Drying

	/** @type {{input: Item, output: Item}[]} */
	const drying_recipes = [
		{input: 'firmalife:food/soy_mixture', output: 'firmalife:food/tofu'},
		{input: 'tfc:food/soybean', output: 'firmalife:food/dehydrated_soybeans'},
		{input: 'firmalife:plant/vanilla', output: 'firmalife:spice/vanilla'},
		{input: 'firmalife:cinnamon_bark', output: 'firmalife:spice/cinnamon'},
		{input: 'firmalife:food/white_chocolate_blend', output: 'firmalife:food/white_chocolate'},
		{input: 'firmalife:food/milk_chocolate_blend', output: 'firmalife:food/milk_chocolate'},
		{input: 'firmalife:food/dark_chocolate_blend', output: 'firmalife:food/dark_chocolate'}
	];

	drying_recipes.forEach(item => {
		global.generateDryingFoodRecipes(event, item.input, item.output);
	});

	//#endregion
};