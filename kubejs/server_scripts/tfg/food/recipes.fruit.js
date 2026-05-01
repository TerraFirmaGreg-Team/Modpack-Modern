"use strict";

function registerTFGFruitFoodRecipes(event) {

	//#region Recipes
	
	global.FOOD_FRUIT.forEach(fruit => {

		if (fruit.genJam) {
		
			global.generateAllJamRecipes(event, fruit.id, fruit.name, `tfg:jar/${fruit.name}`, `tfg:jar/${fruit.name}_unsealed`, `tfg:block/food/jam/${fruit.name}`);
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
		
		global.generateJamProcessorRecipes(event, `tfc:food/${name}`, name, `tfc:jar/${name}`, `tfc:jar/${name}_unsealed`);
	})

	global.FIRMALIFE_JAMS.forEach(name => {

		global.generateJamProcessorRecipes(event, `firmalife:food/${name}`, name, `firmalife:jar/${name}`, `firmalife:jar/${name}_unsealed`);
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