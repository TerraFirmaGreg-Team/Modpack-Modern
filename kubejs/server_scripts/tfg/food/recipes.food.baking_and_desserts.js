"use strict";

/**
 * This file is for recipes related to baking and desserts, such as bread, pies, cakes, ice cream, etc.
 */
function registerTFGBakingAndDessertFoodRecipes(event) {

	global.TFC_GRAINS.forEach(grain => {

		//#region Flour Processing

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
			itemOutputs: [`4x tfc:food/${grain}_dough`],
			circuit: 1,
			fluidInputs: ['#tfg:clean_water 100'],
			itemOutputProvider: TFC.isp.of(`4x tfc:food/${grain}_dough`).copyFood()
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
	});

	// Brioche Dough
	global.generateMixingFoodRecipes(event, 
		['#forge:eggs', '#tfc:foods/flour', 'firmalife:tirage_mixture'],
		'#tfc:milks 500', null, '4x tfg:food/brioche_dough', true
	);

	global.processorRecipe(event, 'brioche_dough/yeast', 20*2, GTValues.VA[GTValues.ULV], {
		itemInputs: ['#tfc:foods/flour', '#forge:eggs', '#tfc:sweetener'],
		fluidInputs: ['#tfc:milks 500', 'firmalife:yeast_starter 100'],
		itemOutputs: ['4x tfg:food/brioche_dough'],
		circuit: 5,
		itemOutputProvider: TFC.isp.of('4x tfg:food/brioche_dough').copyOldestFood()
	});

	global.generateFoodCookingRecipes(event, 'tfg:food/brioche_dough', 'tfg:food/brioche_bun', true, false, true);

	// Toast
	global.processorRecipe(event, 'garlic_bread', 200, 8, {
		circuit: 1,
		itemInputs: ['firmalife:food/toast', 'firmalife:food/butter', 'tfc:food/garlic'],
		itemOutputs: ['firmalife:food/garlic_bread'],
		itemOutputProvider: TFC.isp.of('firmalife:food/garlic_bread').copyOldestFood()
	});

	global.processorRecipe(event, 'toast_with_butter', 200, 8, {
		circuit: 2,
		itemInputs: ['firmalife:food/toast', 'firmalife:food/butter'],
		itemOutputs: ['firmalife:food/toast_with_butter'],
		itemOutputProvider: TFC.isp.of('firmalife:food/toast_with_butter').copyOldestFood()
	});

	global.processorRecipe(event, 'toast_with_jam', 200, 8, {
		circuit: 2,
		itemInputs: ['firmalife:food/toast', '#tfg:foods/all_jams'],
		itemOutputs: ['firmalife:food/toast_with_jam', 'tfc:empty_jar'],
		itemOutputProvider: TFC.isp.of('firmalife:food/toast_with_jam').copyOldestFood()
	});

	//#endregion
	//#region Baking Ingredients

	// Baking Ingredients
	global.processorRecipe(event, 'yeast_starter', 1200, 8, {
		circuit: 2,
		fluidInputs: [Fluid.of('firmalife:yeast_starter', 100)],
		fluidOutputs: [Fluid.of('firmalife:yeast_starter', 600)],
		itemInputs: ['#tfc:foods/flour']
	});

	global.processorRecipe(event, 'yeast_starter_from_water', 7200, 8, {
		circuit: 10,
		itemInputs: ['#tfc:foods/fruits'],
		fluidInputs: ['#tfg:clean_water 100', 'gtceu:nitrogen 100'],
		fluidOutputs: [Fluid.of('firmalife:yeast_starter', 100)]
	});

	// Tirage Mixture
	event.recipes.gtceu.food_processor('tfg:tirage_mixture')
		.itemInputs('#tfc:sweetener')
		.inputFluids(Fluid.of('firmalife:yeast_starter', 100))
		.itemOutputs('firmalife:tirage_mixture')
		.duration(10)
		.circuit(4)
		.EUt(GTValues.VA[GTValues.ULV]);

	//#endregion
	//#region Chocolate

	// I cannot find what happened to the original recipe so im just remaking it. v
	event.recipes.tfc.quern(TFC.isp.of('4x firmalife:food/cocoa_powder').copyOldestFood(), 'firmalife:food/roasted_cocoa_beans')
		.id(`tfg:quern/cocoa_powder`)

	/** @type {string[]} cocoa types */
	const cocoa = ['cocoa_powder', 'cocoa_butter'];

	cocoa.forEach((type, i) => {
		const count = i === 0 ? 4 : 1
		global.processorRecipe(event, type, 100, 4, {
			circuit: i + 1,
			itemInputs: ['firmalife:food/roasted_cocoa_beans'],
			itemOutputs: [`${count}x firmalife:food/${type}`],
			itemOutputProvider: TFC.isp.of(`${count}x firmalife:food/${type}`).copyOldestFood()
		});
	});

	/** @type {string[]} chocolate types */
	const chocolates = ['white_chocolate', 'milk_chocolate', 'dark_chocolate'];

	/** @type {Object<string, { mold: Item, amount: number, mod: string }>} */
	const shapes = {
		'': { mold: 'tfc:ceramic/ingot_mold', amount: 144, mod: 'firmalife' },
		'_heart': { mold: 'tfcchannelcasting:heart_mold', amount: 100, mod: 'tfcchannelcasting' },
		'_bell': { mold: 'tfc:ceramic/bell_mold', amount: 100, mod: 'tfcchannelcasting' },
		'_knife': { mold: 'tfc:ceramic/knife_blade_mold', amount: 100, mod: 'tfcchannelcasting' }
	};

	// Iterate through chocolate types and shapes to create melting, casting, and blending recipes.
	chocolates.forEach((chocolate, i) => {
		// Create melting and casting recipes for each shape.
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

		// Create blending recipe for each chocolate type.
		
		/** @type {Object<{ circuit: number, itemInputs: string[], fluidInputs: string[], itemOutputs: string[] }>} */
		let blendConstants = {
			circuit: i + 1,
			itemInputs: ['#tfc:sweetener'],
			fluidInputs: ['#tfc:milks 1000'],
			itemOutputs: [`2x firmalife:food/${chocolate}_blend`],
			itemOutputProvider: TFC.isp.of(`2x firmalife:food/${chocolate}_blend`).resetFood()
		};

		switch (chocolate) {
			case 'milk_chocolate':
				blendConstants.itemInputs.push('firmalife:food/cocoa_butter', 'firmalife:food/cocoa_powder');
				break;
			case 'dark_chocolate':
				blendConstants.itemInputs.push('2x firmalife:food/cocoa_powder');
				break;
			case 'white_chocolate':
				blendConstants.itemInputs.push('2x firmalife:food/cocoa_butter');
				break;
		};
		global.processorRecipe(event, `${chocolate}_blend`, 300, 16, blendConstants);
	});

	//#endregion
	//#region Ice cream

	global.processorRecipe(event, 'vanilla_ice_cream', 300, 16, {
		itemInputs: ['firmalife:ice_shavings', '#tfc:sweetener', 'firmalife:spice/vanilla'],
		itemOutputs: ['2x firmalife:food/vanilla_ice_cream'],
		fluidInputs: [Fluid.of('firmalife:cream', 1000)],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/vanilla_ice_cream').resetFood()
	});

	global.processorRecipe(event, 'chocolate_ice_cream', 300, 16, {
		itemInputs: ['firmalife:food/vanilla_ice_cream'],
		itemOutputs: ['firmalife:food/chocolate_ice_cream'],
		fluidInputs: [Fluid.of('tfcchannelcasting:milk_chocolate', 100)],
		itemOutputProvider: TFC.isp.of('firmalife:food/chocolate_ice_cream').resetFood()
	});

	global.processorRecipe(event, 'strawberry_ice_cream', 300, 16, {
		itemInputs: ['firmalife:food/vanilla_ice_cream', '2x tfc:food/strawberry'],
		itemOutputs: ['firmalife:food/strawberry_ice_cream'],
		itemOutputProvider: TFC.isp.of('firmalife:food/strawberry_ice_cream').resetFood()
	});

	global.processorRecipe(event, 'cookie_dough_ice_cream', 300, 16, {
		itemInputs: [`firmalife:food/vanilla_ice_cream`, `firmalife:food/chocolate_chip_cookie_dough`],
		itemOutputs: [`2x firmalife:food/cookie_dough_ice_cream`],
		itemOutputProvider: TFC.isp.of('firmalife:food/cookie_dough_ice_cream').resetFood()
	});

	global.processorRecipe(event, 'banana_split', 500, 16, {
		itemInputs: ['firmalife:food/vanilla_ice_cream', 'firmalife:food/strawberry_ice_cream', 'firmalife:food/chocolate_ice_cream', 'firmalife:food/pineapple', 'tfc:food/cherry', '2x tfc:food/banana'],
		itemOutputs: ['2x firmalife:food/banana_split'],
		itemOutputProvider: TFC.isp.of('2x firmalife:food/banana_split').resetFood()
	});

	//#endregion
	//#region Pies

	global.processorRecipe(event, 'pie_dough', 300, 16, {
		circuit: 2,
		itemInputs: ['#tfc:sweetener', 'firmalife:food/butter', '#tfc:foods/flour'],
		fluidInputs: ['#tfg:clean_water 1000'],
		itemOutputs: ['firmalife:food/pie_dough'],
		itemOutputProvider: TFC.isp.of('firmalife:food/pie_dough').copyOldestFood()
	});

	// Jam Pie
	global.processorRecipe(event, 'filled_pie', 300, 16, {
		itemInputs: ['#tfg:foods/all_jams', 'firmalife:food/pie_dough', 'firmalife:pie_pan'],
		itemOutputs: ['firmalife:food/filled_pie', 'tfc:empty_jar'],
		itemOutputProvider: TFC.isp.of('firmalife:food/filled_pie').meal(
			(food) => food.hunger(4).dairy(0.5).fruit(1.5).grain(1.0).saturation(1.0).water(0.5).decayModifier(4.5),
			[(portion) => portion.nutrientModifier(0.8).waterModifier(0.8).saturationModifier(0.8)]
		).firmaLifeAddPiePan()
	});

	// Savory Pie
	for (let i = 1; i <= 3; i++) {
		global.generateMixingFoodRecipes(event,
			['firmalife:food/pie_dough', 'firmalife:pie_pan', `${i}x #tfg:foods/usable_in_savory_pie`], null, null,
			'firmalife:food/filled_pie', true, false, true, i,
			TFC.isp.of('firmalife:food/filled_pie').meal(
				(food) => food.hunger(4).dairy(0.5).grain(1.0).saturation(1.0).decayModifier(4.5),
				[(portion) => portion.nutrientModifier(1.0).waterModifier(0.8).saturationModifier(0.8)]
			).firmaLifeAddPiePan(), `filled_savory_pie_${i}`
		);
	}

	// Breakfast Pie
	global.generateMixingFoodRecipes(event,
		['firmalife:food/pie_dough', 'firmalife:pie_pan', '#forge:eggs', 'firmalife:food/bacon', '#tfg:foods/cheeses'], null, null,
		'firmalife:food/filled_pie', true, false, true, 4,
		TFC.isp.of('firmalife:food/filled_pie').meal(
			(food) => food.hunger(4).dairy(0.5).grain(1.0).saturation(1.0).decayModifier(4.5),
			[(portion) => portion.nutrientModifier(1.0).waterModifier(0.8).saturationModifier(0.8)]
		).firmaLifeAddPiePan(), 'filled_breakfast_pie'
	);

	global.generateFoodCookingRecipes(event, 'firmalife:food/raw_pumpkin_pie', 'minecraft:pumpkin_pie', true, false, false, true);

	// Pumpkin Pie
	global.processorRecipe(event, 'pumpkin_pie_dough', 300, 16, {
		circuit: 2,
		itemInputs: ['#tfc:sweetener', '#forge:eggs', '2x tfc:food/pumpkin_chunks', '#tfc:foods/flour'],
		fluidInputs: ['#tfg:clean_water 1000'],
		itemOutputs: ['firmalife:food/pumpkin_pie_dough'],
		itemOutputProvider: TFC.isp.of('firmalife:food/pumpkin_pie_dough').copyOldestFood()
	});

	global.processorRecipe(event, 'raw_pumpkin_pie', 20, 8, {
		itemInputs: ['firmalife:food/pumpkin_pie_dough', '#firmalife:pie_pans'],
		itemOutputs: ['firmalife:food/raw_pumpkin_pie'],
		itemOutputProvider: TFC.isp.of('firmalife:food/raw_pumpkin_pie').copyFood()
	});

	global.generateFoodCookingRecipes(event, 'firmalife:food/filled_pie', 'firmalife:food/cooked_pie', true, false, false, true);

	// Bulbkin Pie
	global.generateMixingFoodRecipes(event, 
		['#tfg:martian_eggs', '2x betterend:cave_pumpkin_chunks', 'betterend:amber_root_product', 'tfg:wraptor_sugar'],
		'minecraft:water 1000', null, 'betterend:cave_pumpkin_pie_dough'
	);

	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.isp.of(`betterend:cave_pumpkin_pie_raw`).copyFood().firmaLifeAddPiePan(), [
			TFC.ingredient.notRotten(`betterend:cave_pumpkin_pie_dough`),
			'#firmalife:pie_pans'
	]).id(`tfg:shapeless/cave_pumpkin_pie_raw`);

	global.processorRecipe(event, "raw_cave_pumpkin_pie", 20, 8, {
		itemInputs: [`betterend:cave_pumpkin_pie_dough`, "#firmalife:pie_pans"],
		itemOutputs: ["betterend:cave_pumpkin_pie_raw"],
		itemOutputProvider: TFC.isp.of("betterend:cave_pumpkin_pie_raw").copyFood()
	});

	//#endregion
	//#region Cakes

	global.processorRecipe(event, "cake_base", 300, 8, {
		circuit: 4,
		itemInputs: ["#forge:eggs", "2x #tfg:sugars", "2x #tfc:foods/flour"],
		fluidInputs: ['#tfc:milks 1000'],
		itemOutputs: ["createaddition:cake_base"],
		itemOutputProvider: TFC.isp.of("createaddition:cake_base").copyOldestFood()
	});

	global.cookingRecipe(event, "baked_cake_base", "createaddition:cake_base", "createaddition:cake_base_baked");

	global.processorRecipe(event, "vanilla_cake", 300, 8, {
		itemInputs: ['createaddition:cake_base_baked', '3x tfc:food/strawberry', 'firmalife:spice/vanilla'],
		fluidInputs: [Fluid.of("tfcchannelcasting:white_chocolate", 400)],
		itemOutputs: ["tfc:cake"],
		itemOutputProvider: TFC.isp.of("tfc:cake").copyOldestFood()
	});

	global.processorRecipe(event, "milk_chocolate_cake", 300, 8, {
		itemInputs: ['createaddition:cake_base_baked', '3x tfc:food/cherry', 'firmalife:food/cocoa_powder'],
		fluidInputs: [Fluid.of("tfcchannelcasting:milk_chocolate", 400)],
		itemOutputs: ["createaddition:chocolate_cake"],
		itemOutputProvider: TFC.isp.of("createaddition:chocolate_cake").copyOldestFood()
	});

	global.processorRecipe(event, "dark_chocolate_cake", 300, 8, {
		itemInputs: ['createaddition:cake_base_baked', '3x tfc:food/cherry', 'firmalife:food/cocoa_powder'],
		fluidInputs: [Fluid.of("tfcchannelcasting:dark_chocolate", 400)],
		itemOutputs: ["createaddition:chocolate_cake"],
		itemOutputProvider: TFC.isp.of("createaddition:chocolate_cake").copyOldestFood()
	});

	global.processorRecipe(event, "maple_honey_cake", 300, 8, {
		itemInputs: ['createaddition:cake_base_baked', '4x firmalife:raw_honey'],
		fluidInputs: [Fluid.of("afc:maple_syrup", 1000)],
		itemOutputs: ["createaddition:honey_cake"],
		itemOutputProvider: TFC.isp.of("createaddition:honey_cake").copyOldestFood()
	});

	global.processorRecipe(event, "birch_honey_cake", 300, 8, {
		itemInputs: ['createaddition:cake_base_baked', '4x firmalife:raw_honey'],
		fluidInputs: [Fluid.of("afc:birch_syrup", 1000)],
		itemOutputs: ["createaddition:honey_cake"],
		itemOutputProvider: TFC.isp.of("createaddition:honey_cake").copyOldestFood()
	});

	global.processorRecipe(event, "birtday_cake", 300, GTValues.VA[GTValues.HV], {
		itemInputs: ['createaddition:cake_base', '4x species:birt_egg', '4x tfc:food/blueberry', '2x minecraft:chorus_fruit', 'gtceu:blue_alloy_single_wire'],
		fluidInputs: [Fluid.of('gtceu:helium_3', 50)],
		itemOutputs: ["species:birtday_cake"],
		itemOutputProvider: TFC.isp.of("species:birtday_cake").copyOldestFood()
	});

	//#endregion
	//#region Cookies

	global.processorRecipe(event, "cookie_dough", 300, 16, {
		itemInputs: ['#tfc:sweetener', '#forge:eggs', 'firmalife:food/butter', '#tfc:foods/flour', "firmalife:spice/vanilla"],
		itemOutputs: ['4x firmalife:food/cookie_dough'],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/cookie_dough').copyOldestFood()
	});

	global.processorRecipe(event, "chocolate_chip_cookie_dough", 300, 16, {
		itemInputs: ['4x firmalife:food/cookie_dough', '#firmalife:foods/chocolate'],
		itemOutputs: ['4x firmalife:food/chocolate_chip_cookie_dough'],
		itemOutputProvider: TFC.isp.of('4x firmalife:food/chocolate_chip_cookie_dough').copyOldestFood()
	});

	global.processorRecipe(event, "hardtack_dough", 300, 16, {
		itemInputs: ['tfc:powder/salt', '#tfc:foods/flour'],
		fluidInputs: ['#tfg:clean_water 1000'],
		itemOutputs: ['4x firmalife:food/hardtack_dough'],
		circuit: 3,
		itemOutputProvider: TFC.isp.of('4x firmalife:food/hardtack_dough').copyFood()
	});

	//#endregion
	//#region Misc Desserts

	// Honeyed Apples
	event.recipes.tfc.advanced_shapeless_crafting(
		TFC.isp.of('create:honeyed_apple').copyFood(),
		['#tfc:foods/apples', 'firmalife:raw_honey']
	).id('tfg:shapeless/honeyed_apple');
	
	global.processorRecipe(event, 'honeyed_apple', 5 * 20, GTValues.VA[GTValues.ULV], {
		itemInputs: ['#tfc:foods/apples', 'firmalife:raw_honey'],
		itemOutputs: ['create:honeyed_apple'],
		circuit: 5,
		itemOutputProvider: TFC.isp.of('create:honeyed_apple').copyFood()
	});

	// Popcorn
	global.generateOilBoilingFoodRecipes(event, 'tfc:food/maize_grain', 'tfg:food/popcorn', true, true, true, 3);

	global.generateMixingFoodRecipes(event, 
		['2x tfg:food/popcorn', 'firmalife:food/butter', 'tfc:powder/salt'],
		null, null, '2x tfg:food/buttered_popcorn'
	);

	//#endregion
};