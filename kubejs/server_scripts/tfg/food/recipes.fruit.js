"use strict";

function registerTFGFruitFoodRecipes(event) {

	//#region Utility

	/**
	 * Function to generate jam food processor recipes.
	 * @param {*} event 
	 * @param {Item} fruitId - The item ID of the fruit.
	 * @param {string} fruitName - The name of the fruit.
	 * @param {Item} jar - The item ID of the sealed jar.
	 * @param {Item} unsealedJar - The item ID of the unsealed jar.
	 */
	function generateJamProcessorRecipes(event, fruitId, fruitName, jar, unsealedJar) {

		global.processorRecipe(event, `jam/${fruitName}`, 200, 8, {
			circuit: 15,
			itemInputs: [`4x ${fruitId}`, "#tfc:sweetener", "4x #tfc:empty_jar_with_lid"],
			fluidInputs: ['#tfg:clean_water 100'],
			itemOutputs: [`4x ${jar}`],
			itemOutputProvider: TFC.isp.of(`4x ${jar}`).copyFood()
		});

		global.processorRecipe(event, `jam/${fruitName}_unsealed`, 200, 8, {
			circuit: 16,
			itemInputs: [`4x ${fruitId}`, "#tfc:sweetener", "4x tfc:empty_jar"],
			fluidInputs: ['#tfg:clean_water 100'],
			itemOutputs: [`4x ${unsealedJar}`],
			itemOutputProvider: TFC.isp.of(`4x ${unsealedJar}`).copyFood()
		});
	};

	/**
	 * Function to generate jam pot and vat recipes.
	 * @param {*} event 
	 * @param {Item} fruitId - The item ID of the fruit.
	 * @param {string} fruitName - The name of the fruit.
	 * @param {Item} jar - The item ID of the sealed jar.
	 * @param {ResourceTexture_} texture - The texture to use for the pot fluid.
	 */
	function generateJamPotAndVatRecipes(event, fruitId, fruitName, jar, texture) {

		for (let i = 2; i <= 4; i++) {
			let ingredients = [];
			for (let j = 0; j < i; j++) {
				ingredients.push(TFC.ingredient.notRotten(fruitId));
			}
			ingredients.push('#tfc:sweetener');

			event.recipes.tfc.pot_jam(
				`${i}x ${jar}`,
				ingredients,
				Fluid.of('minecraft:water', 100),
				500,
				300,
				texture
			).id(`tfg:pot/jam/${fruitName}_x${i}`)
		};

		// register vat recipe once per fruit (was incorrectly inside the loop)
		event.recipes.firmalife.vat()
			.inputFluid(Fluid.of('firmalife:sugar_water', 500))
			.inputItem(TFC.ingredient.notRotten(fruitId))
			.length(200)
			.temperature(300)
			.jar(jar)
			.id(`tfg:vat/jam/${fruitName}`);
	};

	/**
	 * Function to generate jam unsealing recipes.
	 * @param {*} event
	 * @param {Item} jar - The item ID of the sealed jar.
	 * @param {Item} unsealedJar - The item ID of the unsealed jar.
	 * @param {string} fruitName - The name of the fruit.
	 */
	function generateJamUnsealingRecipe(event, jar, unsealedJar, fruitName) {

		event.recipes.tfc.no_remainder_shapeless_crafting(
			event.recipes.tfc.advanced_shapeless_crafting(
				TFC.itemStackProvider.of(unsealedJar).copyOldestFood(),
				[TFC.ingredient.notRotten(jar)],
				jar
			).id(`tfg:crafting/unseal_${fruitName}_jar`)
		);
	};

	//#endregion
	//#region Recipes
	
	global.FOOD_FRUIT.forEach(fruit => {

		if (fruit.genJam) {
		
			generateJamUnsealingRecipe(event, `tfg:jar/${fruit.name}`, `tfg:jar/${fruit.name}_unsealed`, fruit.name);
			generateJamPotAndVatRecipes(event, fruit.id, fruit.name, `tfg:jar/${fruit.name}`, `tfg:block/food/jam/${fruit.name}`);
			generateJamProcessorRecipes(event, fruit.id, fruit.name, `tfg:jar/${fruit.name}`, `tfg:jar/${fruit.name}_unsealed`);
		};

		if (fruit.genFreezeDried) {

			global.processorRecipeText(event, `tfg:processor/${fruit.name}/freeze_drying`, 100, 120, "tfg.food_recipe.freeze_drying", {
				circuit: 7,
				itemInputs: [fruit.id, 'tfg:foil_pack', 'tfg:dry_ice'],
				itemOutputs: [`tfg:food/freeze_dried/${fruit.name}`],
				itemOutputProvider: TFC.isp.of(`tfg:food/freeze_dried/${fruit.name}`).copyOldestFood().removeTrait('firmalife:dried').addTrait('tfg:freeze_dried')
			});
		};
	});

	global.TFC_JAMS.forEach(name => {
		
		generateJamProcessorRecipes(event, `tfc:food/${name}`, name, `tfc:jar/${name}`, `tfc:jar/${name}_unsealed`);
	})

	global.FIRMALIFE_JAMS.forEach(name => {

		generateJamProcessorRecipes(event, `firmalife:food/${name}`, name, `firmalife:jar/${name}`, `firmalife:jar/${name}_unsealed`);
	})


	const drying_fruits = Ingredient.of('#tfc:foods/fruits').itemIds;
	drying_fruits.forEach(item => {
		global.processorRecipeText(event, `tfg:processor/${global.linuxUnfucker(item)}/drying`, 200, 16, "tfg.food_recipe.drying", {
			circuit: 6,
			itemInputs: [item],
			itemOutputs: [item],
			fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
			itemOutputProvider: TFC.isp.copyInput().addTrait("firmalife:dried")
		});
	});

	//#endregion
};