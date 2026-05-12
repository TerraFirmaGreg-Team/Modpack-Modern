"use strict";


/**
 * This file is for recipes related to dairy products like cheese/milk.
 */
function registerTFGDairyFoodRecipes(event) {

	//#region Cheese & Curds

	global.TFC_CURDS_AND_CHEESES.forEach(item => {

		// Curdled Milk
		event.recipes.gtceu.fermenter(`tfg:curdled_${item.id}`)
			.inputFluids(Fluid.of(item.milk, 2000))
			.itemInputs('firmalife:rennet')
			.outputFluids(Fluid.of(item.curdled_fluid, 2000))
			.duration(2400)
			.EUt(16);

		event.recipes.gtceu.mixer(`lactose_milk_${item.id}`)
			.circuit(1)
			.inputFluids(Fluid.of(item.milk, 1000), Fluid.of('gtceu:acetic_acid', 25))
			.itemOutputs('1x gtceu:lactose_dust')
			.outputFluids(Fluid.of(item.curdled_fluid, 1000))
			.duration(300)
			.EUt(GTValues.VA[GTValues.LV]);

		event.recipes.gtceu.mixer(`lactose_milk_vinegar_${item.id}`)
			.circuit(1)
			.inputFluids(Fluid.of(item.milk, 1000), Fluid.of('tfc:vinegar', 100))
			.chancedOutput('gtceu:lactose_dust', 1000, 0)
			.outputFluids(Fluid.of(item.curdled_fluid, 1000))
			.duration(300)
			.EUt(GTValues.VA[GTValues.LV]);

		// Curds
		global.processorRecipe(event, `${item.id}_curd`, 1200, 16, {
			itemOutputs: [item.curd],
			fluidInputs: [Fluid.of(item.curdled_fluid, 1000)],
			itemOutputProvider: TFC.isp.of(item.curd).resetFood()
		});

		// Cheese Wheels
		global.processorRecipe(event, `${item.id}_unsalted_cheese_wheel`, 8000, 16, {
			itemInputs: [`3x ${item.curd}`],
			itemOutputs: [item.unsalted_wheel],
			fluidInputs: [Fluid.of('tfc:salt_water', 750)],
			itemOutputProvider: TFC.isp.of(item.unsalted_wheel).copyOldestFood()
		});

		global.processorRecipe(event, `${item.id}_unsalted_cheese_cutting`, 100, 8, {
			itemInputs: [item.unsalted_wheel],
			itemOutputs: [`4x ${item.unsalted_cheese}`],
			itemOutputProvider: TFC.isp.of(`4x ${item.unsalted_cheese}`).copyOldestFood()
		});

		if (item.salted_wheel === null || item.salted_cheese === null) return;

		global.processorRecipe(event, `${item.id}_salted_cheese_wheel`, 1000, 16, {
			circuit: 2,
			itemInputs: [`3x ${item.curd}`, `6x tfc:powder/salt`],
			itemOutputs: [item.salted_wheel],
			itemOutputProvider: TFC.isp.of(item.salted_wheel).copyOldestFood()
		});

		global.processorRecipe(event, `${item.id}_salted_cheese_cutting`, 100, 8, {
			itemInputs: [item.salted_wheel],
			itemOutputs: [`4x ${item.salted_cheese}`],
			itemOutputProvider: TFC.isp.of(`4x ${item.salted_cheese}`).copyOldestFood()
		});
	});

	// Shredded Cheese
	global.processorRecipe(event, 'shredded_cheese', 100, 16, {
		itemInputs: ['#firmalife:foods/cheeses'],
		itemOutputs: ['4x firmalife:food/shredded_cheese'],
		circuit: 30,
		itemOutputProvider: TFC.isp.of('4x firmalife:food/shredded_cheese').copyFood()
	});

	// Slice of "Cheese"
	event.recipes.gtceu.food_processor('slice_of_cheese')
		.itemInputs(
			ChemicalHelper.get(TagPrefix.dust, 'gtceu:lactose', 1),
			ChemicalHelper.get(TagPrefix.dust, 'tfg:cholesterol', 1),
			ChemicalHelper.get(TagPrefix.dust, 'tfg:sodium_dihydrogen_citrate', 1),
			ChemicalHelper.get(TagPrefix.foil, GTMaterials.Polyethylene, 8)
		)
		.inputFluids('#tfg:clean_water 1000')
		.itemOutputs('8x tfg:food/slice_of_cheese')
		.duration(20 * 20)
		.EUt(GTValues.VA[GTValues.LV]);

	// Fried Cheese Curds
	global.generateMixingFoodRecipes(event,
		['3x #tfg:foods/cheese_curds', '#tfc:foods/flour', '#forge:eggs'],
		'#tfg:alcohols/beer 100', null, '3x tfg:food/raw_beer_battered_cheese_curds'
	);

	global.generateOilBoilingFoodRecipes(event, 'tfg:food/raw_beer_battered_cheese_curds', 'tfg:food/cooked_beer_battered_cheese_curds', true, true, true);

	//#endregion
	//#region Churning

	event.recipes.gtceu.fermenter(`tfg:fermenter/cream`)
		.inputFluids('#tfc:milks 1000')
		.outputFluids(Fluid.of('firmalife:cream'))
		.circuit(6)
		.duration(1200)
		.EUt(24);

	global.processorRecipe(event, 'butter', 300, 16, {
		itemInputs: ['tfc:powder/salt'],
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemOutputs: ['firmalife:food/butter'],
		itemOutputProvider: TFC.isp.of('firmalife:food/butter').resetFood()
	});

	//#endregion
};