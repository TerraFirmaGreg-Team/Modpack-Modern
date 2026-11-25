"use strict";

function registerTFGAppliancesRecipes(event) {

//#region Baking Dishes

	// Clay Baking Dish
	event.recipes.tfc.knapping('tfg:baking_dish_unfired', 'tfc:clay', [
		' XX  ',
		'X  X ',
		'X  X ',
		'X  X ',
		' XX  '
	]).id('tfg:clay_knapping/baking_dish_unfired');

	global.MINECRAFT_DYE_NAMES.forEach(color => {
		// Chem Bath Dyeing
		event.recipes.gtceu.chemical_bath(`tfg:dyeing/baking_dish/unfired/${color}`)
			.itemInputs('#tfg:unfired_baking_dishes')
			.inputFluids(Fluid.of(`tfc:${color}_dye`, 25))
			.itemOutputs(`tfg:baking_dish_${color}_unfired`)
			.duration(80)
			.EUt(GTValues.VA[GTValues.ULV])
			.category(GTRecipeCategories.CHEM_DYES);

		// Barrel Dyeing
		event.recipes.tfc.barrel_sealed(1000)
			.outputItem(`tfg:baking_dish_${color}_unfired`)
			.inputItem(Ingredient.of('#tfg:unfired_baking_dishes').subtract(`tfg:baking_dish_${color}_unfired`))
			.inputFluid(Fluid.of(`tfc:${color}_dye`, 25))
			.id(`tfg:barrel/dyeing/baking_dish_${color}_unfired`);

		// Shapeless Dyeing
		event.shapeless(
			`tfg:baking_dish_${color}_unfired`,
			['tfg:baking_dish_unfired', `#forge:dyes/${color}`]
		).id(`tfg:shapeless/baking_dish_${color}_unfired`);

		// Heating Colored Dishes
		event.recipes.tfc.heating(`tfg:baking_dish_${color}_unfired`, 1399)
			.resultItem(`tfg:baking_dish_${color}`)
			.id(`tfg:heating/baking_dish_${color}_unfired`);

		// Smelting Colored Dishes
		event.smelting(
			`tfg:baking_dish_${color}`,
			`tfg:baking_dish_${color}_unfired`
		).id(`tfg:smelting/baking_dish_${color}`);
	});

	// Chem Bath Bleaching
	event.recipes.gtceu.chemical_bath(`tfg:chemical_bath/bleaching/baking_dish_unfired`)
		.itemInputs('#tfg:unfired_baking_dishes')
		.inputFluids(Fluid.of('gtceu:chlorine', 72))
		.itemOutputs('tfg:baking_dish_unfired')
		.duration(80)
		.EUt(GTValues.VA[GTValues.ULV])
		.category(GTRecipeCategories.CHEM_DYES);

	// Smelting Baking Dish
	event.smelting(
		'tfg:baking_dish_ceramic',
		'tfg:baking_dish_unfired'
	).id('tfg:smelting/baking_dish');

	// Heating Baking Dish
	event.recipes.tfc.heating('tfg:baking_dish_unfired', 1399)
		.resultItem('tfg:baking_dish_ceramic')
		.id('tfg:heating/baking_dish_unfired');

//#endregion

};