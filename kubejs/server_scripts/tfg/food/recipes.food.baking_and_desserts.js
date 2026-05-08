"use strict";

/**
 * This file is for recipes related to baking and desserts, such as bread, pies, cakes, ice cream, etc.
 */
function registerTFGBakingAndDessertFoodRecipes(event) {

	global.TFC_GRAINS.forEach(grain => {

		//#region Grain Processing
		// Raw crop to grain
		global.processorRecipe(event, `${grain}_grain`, 100, 8, {
			circuit: 30,
			itemInputs: [`tfc:food/${grain}`],
			itemOutputs: [`tfc:food/${grain}_grain`],
			itemOutputProvider: TFC.isp.of(`tfc:food/${grain}_grain`).copyOldestFood()
		});

		//  Grain to flour
		global.processorRecipe(event, `${grain}_flour`, 100, 8, {
			circuit: 31,
			itemInputs: [`tfc:food/${grain}_grain`],
			itemOutputs: [`2x tfc:food/${grain}_flour`],
			itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_flour`).copyOldestFood()
		});

		event.recipes.tfc.advanced_shaped_crafting(
			TFC.isp.of(`tfc:food/${grain}_flour`).copyFood(), [
				'A',
				'B'
			], {
				A: TFC.ingredient.notRotten(`tfc:food/${grain}_grain`),
				B: '#forge:tools/mortars'
			}, 0, 0).id(`tfg:mortar/${grain}_flour`);

		//#endregion
		//#region Bread

		// Flatbread dough
		global.processorRecipe(event, `${grain}_flatbread_dough`, 300, 8, {
			itemInputs: [`tfc:food/${grain}_flour`],
			itemOutputs: [`2x tfc:food/${grain}_dough`],
			circuit: 1,
			fluidInputs: ['#tfg:clean_water 100'],
			itemOutputProvider: TFC.isp.of(`2x tfc:food/${grain}_dough`).copyFood()
		});

		// Firmalife dough
		global.processorRecipe(event, `${grain}_dough`, 300, 16, {
			itemInputs: [`tfc:food/${grain}_flour`, `#tfc:sweetener`],
			itemOutputs: [`4x firmalife:food/${grain}_dough`],
			circuit: 1,
			fluidInputs: [Fluid.of('firmalife:yeast_starter', 200)],
			itemOutputProvider: TFC.isp.of(`4x firmalife:food/${grain}_dough`).copyFood()
		});

		// Bread baking
		global.cookingRecipe(event, `${grain}_flatbread`, `tfc:food/${grain}_dough`, `firmalife:food/${grain}_flatbread`)
		global.cookingRecipe(event, `${grain}_bread`, `firmalife:food/${grain}_dough`, `tfc:food/${grain}_bread`)

		global.processorRecipe(event, `${grain}_bread_slice`, 10, 8, {
			circuit: 1,
			itemInputs: [`tfc:food/${grain}_bread`],
			itemOutputs: [`2x firmalife:food/${grain}_slice`],
			itemOutputProvider: TFC.isp.of(`2x firmalife:food/${grain}_slice`).copyOldestFood()
		});
		//#endregion
	});

	//#region Chocolate

	global.processorRecipe(event, `white_chocolate_blend`, 300, 16, {
		circuit: 3,
		itemInputs: ['2x firmalife:food/cocoa_butter', '#tfc:sweetener'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['2x firmalife:food/white_chocolate_blend'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/white_chocolate_blend').resetFood()
	});

	global.processorRecipe(event, `dark_chocolate_blend`, 300, 16, {
		circuit: 2,
		itemInputs: ['2x firmalife:food/cocoa_powder', '#tfc:sweetener'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['2x firmalife:food/dark_chocolate_blend'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/dark_chocolate_blend').resetFood()
	});

	global.processorRecipe(event, `milk_chocolate_blend`, 300, 16, {
		circuit: 1,
		itemInputs: ['firmalife:food/cocoa_powder', 'firmalife:food/cocoa_butter', '#tfc:sweetener'],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ['2x firmalife:food/milk_chocolate_blend'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/milk_chocolate_blend').resetFood()
	});

	/** @type {string[]} */
	const chocolates = ['white_chocolate', 'milk_chocolate', 'dark_chocolate'];

	/** @type {Object<string, { mold: Item, amount: number, mod: string }>} */
	const shapes = {
		'': { mold: 'tfc:ceramic/ingot_mold', amount: 144, mod: 'firmalife' },
		'_heart': { mold: 'tfcchannelcasting:heart_mold', amount: 100, mod: 'tfcchannelcasting' },
		'_bell': { mold: 'tfc:ceramic/bell_mold', amount: 100, mod: 'tfcchannelcasting' },
		'_knife': { mold: 'tfc:ceramic/knife_blade_mold', amount: 100, mod: 'tfcchannelcasting' }
	};

	// Iterate through chocolate types and shapes to create melting and casting recipes.
	chocolates.forEach(chocolate => {
		Object.entries(shapes).forEach(([suffix, data]) => {
			const item = `${data.mod}:food/${chocolate}${suffix}`;
			const fluid = Fluid.of(`tfcchannelcasting:${chocolate}`, data.amount);

			// Melting
			global.processorRecipe(event, `${chocolate}${suffix}_melting`, 100, 16, {
				circuit: 1,
				itemInputs: [item],
				fluidOutputs: [fluid]
			});

			// Casting
			global.processorRecipe(event, `${chocolate}${suffix}_casting`, 100, 16, {
				fluidInputs: [fluid],
				itemOutputs: [item],
				itemOutputProvider: TFC.isp.of(item).resetFood(),
				notConsumable: [data.mold]
			});
		});
	});

	//#endregion
};