// priority: 1
"use strict";

//#region Machine Helper

const $ISPRecipeLogic = Java.loadClass("su.terrafirmagreg.core.common.tfgt.machine.trait.ISPOutputRecipeLogic")
const $SizedIngredient = Java.loadClass("com.gregtechceu.gtceu.api.recipe.ingredient.SizedIngredient")
const Sized = (ing, amount) => $SizedIngredient.create(ing, amount)

/**
* @typedef {Object} FoodRecipeData
* @property {number?} circuit Circuit value.
* @property {Internal.GTRecipeComponents$FluidIngredientJS_[]?} fluidInputs Fluid inputs - format: `["mod:fluid amount"]`.
* @property {Internal.FluidStackJS[]?} fluidOutputs Fluid outputs - format: `["mod:fluid amount"]`.
* @property {(string | [string, Internal.Ingredient])[]?} itemInputs Item inputs - can be either a string or a tuple where the ingredient is used for the ISP recipe.
* @property {string[]?} itemOutputs Ingredient outputs - first output is replaced with ISP output if defined
* @property {Internal.ItemStackProviderJS?} itemOutputProvider ItemStackProvider which provides the recipe output.
* @property {boolean?} daytime Daytime condition.
* @property {boolean?} perTick Whether the recipe uses per tick logic.
* @property {(string | [string, Internal.GTRecipeSchema$GTRecipeJS.dimension])?} dimension Dimension condition.
* @property {Internal.GTRecipeSchema$GTRecipeJS.cleanroom?} cleanroom CleanroomType
* @property {string[]?} notConsumable Not consumable ingredients.
*
* **NOTE:** TFC Ingredients do not support item counts higher than 1. Do `Sized(TFCIngredient('item:item'), count)` instead of `TFCIngredient('[count]x item:item')`
*/

/**
 * @param event
 * @param {"food_oven"|"food_processor"} type Type of the food machine.
 * @param {string} id Recipe ID.
 * @param {number} duration Recipe duration.
 * @param {number} EUt Energy usage per tick.
 * @param {string} text Additional text for the recipe.
 * @param {FoodRecipeData} data Recipe data.
 */
global.registerFoodRecipe = (event, type, id, duration, EUt, text, data) => {
	if (data.itemInputs === undefined) data.itemInputs = []
	if (data.itemOutputs === undefined) data.itemOutputs = []
	if (data.fluidInputs === undefined) data.fluidInputs = []
	if (data.fluidOutputs === undefined) data.fluidOutputs = []
	if (data.notConsumable === undefined) data.notConsumable = []
	let gregInputs = [], inputs = []
	let outputFirstIndex = (data.itemOutputProvider === undefined) ? 0 : 1
	data.itemInputs.forEach(item => {
		if (typeof item === "string") {
			gregInputs.push(item)

			const match = item.match(/^(\d+)\s*x\s*/i);
			let count = 1
			if (match) {
				count = parseInt(match[1]);
				item = item.slice(match[0].length);
			}
			inputs.push($SizedIngredient.create(item, count))
		} else {
			gregInputs.push(item[0])
			inputs.push(item[1])
		}
	});

	$ISPRecipeLogic.RegisterRecipeData(`${type  }/${  id}`, inputs, (data.itemOutputProvider === undefined) ? null : data.itemOutputProvider.asCanonClass(), data.itemOutputs.slice(outputFirstIndex).map(i => Item.of(i)))

	let r = event.recipes.gtceu[type](id)
	.duration(duration)
	.EUt(EUt)

	if (data.circuit) r.circuit(data.circuit)
	if (data.daytime) r.daytime(data.daytime)
	if (data.perTick) r.perTick(data.perTick)
	if (data.dimension) r.dimension(data.dimension)
	if (data.cleanroom) r.cleanroom(data.cleanroom)
	if (data.notConsumable.length > 0) r.notConsumable(data.notConsumable)
	if (data.itemOutputs.length > 0) r.itemOutputs(data.itemOutputs)
	if (data.itemInputs.length > 0) r.itemInputs(data.itemInputs)
	if (data.fluidInputs.length > 0) r.inputFluids(data.fluidInputs);
	if (data.fluidOutputs.length > 0) r.outputFluids(data.fluidOutputs);
	if (text !== "") r.addDataString("action", text);

	return r;
};

/**
 * @param event
 * @param {string} id Recipe ID.
 * @param {number} duration Recipe duration.
 * @param {number} EUt Energy usage per tick.
 * @param {FoodRecipeData} data Recipe data.
 */
global.processorRecipe = (event, id, duration, EUt, data) => global.registerFoodRecipe(event, "food_processor", id, duration, EUt, "", data);

/**
 * @param event
 * @param {string} id Recipe ID.
 * @param {number} duration Recipe duration.
 * @param {number} EUt Energy usage per tick.
 * @param {FoodRecipeData} data Recipe data.
 * @param {string} text Additional text for the recipe.
 */
global.processorRecipeText = (event, id, duration, EUt, text, data) => global.registerFoodRecipe(event, "food_processor", id, duration, EUt, text, data);

/**
 * @param event
 * @param {string} id Recipe ID.
 * @param {string} input Recipe input.
 * @param {string} out Recipe output.
 * @param {Internal.FluidIngredient?} fluid Fluid ingredient.
 * @param {boolean?} isFirmaDynamic Whether the recipe uses `firmaLifeCopyDynamicFood`.
 */
global.cookingRecipe = (event, id, input, out, fluid, isFirmaDynamic) => {
	return global.registerFoodRecipe(event, "food_oven", id, 20 * 10, GTValues.VA[GTValues.LV], "", {
		itemInputs: [input],
		itemOutputs: [out],
		fluidInputs: (fluid === undefined || fluid === null) ? [] : [fluid],
		itemOutputProvider: ((isFirmaDynamic) ? TFC.isp.of(out).firmaLifeCopyDynamicFood() : TFC.isp.of(out).copyFood()).addTrait("firmalife:oven_baked")
	});
};

//#endregion
//#region Jam Generator

/**
 * Function to generate jam food processor recipes.
 * @param {*} event 
 * @param {Item} fruitId The item ID of the fruit.
 * @param {string} fruitName The name of the fruit.
 * @param {Item} jar The item ID of the sealed jar.
 * @param {Item} unsealedJar The item ID of the unsealed jar.
 */
global.generateJamProcessorRecipes = function(event, fruitId, fruitName, jar, unsealedJar) {
	if (!fruitId || !fruitName || !jar || !unsealedJar) {
		throw new Error(`Missing parameters for generateJamProcessorRecipes: fruitId=${fruitId}, fruitName=${fruitName}, jar=${jar}, unsealedJar=${unsealedJar}`);
	}

	global.processorRecipe(event, `jam/${fruitName}`, 100, 8, {
		circuit: 15,
		itemInputs: [`4x ${fruitId}`, "#tfc:sweetener", "4x #tfc:empty_jar_with_lid"],
		fluidInputs: ['#tfg:clean_water 100'],
		itemOutputs: [`4x ${jar}`],
		itemOutputProvider: TFC.isp.of(`4x ${jar}`).copyFood()
	});

	global.processorRecipe(event, `jam/${fruitName}_unsealed`, 100, 8, {
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
 * @param {Item} fruitId The item ID of the fruit.
 * @param {string} fruitName The name of the fruit.
 * @param {Item} jar The item ID of the sealed jar.
 * @param {ResourceTexture_} texture The texture to use for the pot fluid.
 */
global.generateJamPotAndVatRecipes = function(event, fruitId, fruitName, jar, texture) {
	if (!fruitId || !fruitName || !jar || !texture) {
		throw new Error(`Missing parameters for generateJamPotAndVatRecipes: fruitId=${fruitId}, fruitName=${fruitName}, jar=${jar}, texture=${texture}`);
	}

	for (let i = 2; i <= 4; i++) {
		let ingredients = [];
		for (let j = 0; j < i; j++) {
			ingredients.push(TFC.ingredient.notRotten(fruitId));
		}
		ingredients.push('#tfc:sweetener');

		event.recipes.tfc.pot_jam(
			`${i}x ${jar}`,
			ingredients,
			TFC.fluidStackIngredient('#tfg:clean_water', 100),
			500,
			200,
			texture
		).id(`tfg:pot/jam/${fruitName}_x${i}`)
	}

	event.recipes.firmalife.vat()
		.inputFluid(TFC.fluidStackIngredient('firmalife:sugar_water', 500))
		.inputItem(TFC.ingredient.notRotten(fruitId))
		.length(100)
		.temperature(200)
		.jar(jar)
		.id(`tfg:vat/jam/${fruitName}`);
};

/**
 * Function to generate jam unsealing recipes.
 * @param {*} event
 * @param {Item} jar The item ID of the sealed jar.
 * @param {Item} unsealedJar The item ID of the unsealed jar.
 * @param {string} fruitName The name of the fruit.
 */
global.generateJamUnsealingRecipe = function(event, jar, unsealedJar, fruitName) {
	if (!jar || !unsealedJar || !fruitName) {
		throw new Error(`Missing parameters for generateJamUnsealingRecipe: jar=${jar}, unsealedJar=${unsealedJar}, fruitName=${fruitName}`);
	}

	event.recipes.tfc.no_remainder_shapeless_crafting(
		event.recipes.tfc.advanced_shapeless_crafting(
			TFC.itemStackProvider.of(unsealedJar).copyOldestFood(),
			[TFC.ingredient.notRotten(jar)],
			jar
		).id(`tfg:crafting/unseal_${fruitName}_jar`)
	);
};

/**
 * Function to generate all jam related recipes for a given fruit.
 * @param {*} event
 * @param {Item} fruitId The item ID of the fruit.
 * @param {string} fruitName The name of the fruit.
 * @param {Item} jar The item ID of the sealed jar.
 * @param {Item} unsealedJar The item ID of the unsealed jar.
 * @param {ResourceTexture_} texture The texture to use for the pot fluid.
 */
global.generateAllJamRecipes = function(event, fruitId, fruitName, jar, unsealedJar, texture) {
	if (!fruitId || !fruitName || !jar || !unsealedJar || !texture) {
		throw new Error(`Missing parameters for generateAllJamRecipes: fruitId=${fruitId}, fruitName=${fruitName}, jar=${jar}, unsealedJar=${unsealedJar}, texture=${texture}`);
	}

	global.generateJamUnsealingRecipe(event, jar, unsealedJar, fruitName);
	global.generateJamPotAndVatRecipes(event, fruitId, fruitName, jar, texture);
	global.generateJamProcessorRecipes(event, fruitId, fruitName, jar, unsealedJar);
};

//#endregion
//#region Boiling Generator

/**
 * Function to generate boiling recipes for a food item using a fluid.
 * Can create pot, vat, and food oven recipes depending on parameters.
 * @param {*} event
 * @param {Fluid} inputFluid The fluid ID of the input fluid.
 * @param {number} fluidQty The quantity of the input fluid.
 * @param {Item} inputItem The item ID of the food item to be boiled.
 * @param {Item} outputItem The item ID of the resulting boiled food item.
 * @param {Boolean|null} genPotRecipe Whether to generate pot recipes. Defaults to `true`.
 * @param {Boolean|null} genVatRecipe Whether to also generate a vat recipe to match. Defaults to `true`.
 * @param {Boolean|null} genOvenRecipe Whether to also generate a food oven recipe to match. Defaults to `true`. Defaults to `true`.
 * @param {Number|null|undefined} circuit Optional circuit value for the oven recipe.
 * @param {Boolean|null} copyDynamic Optional override for ISP results to use `.firmaLifeCopyDynamicFood()` instead of `.copyFood()`
 */
global.generateFluidBoilingFoodRecipes = function(event, inputFluid, fluidQty, inputItem, outputItem, genPotRecipe, genVatRecipe, genOvenRecipe, circuit, copyDynamic) {
	genPotRecipe = genPotRecipe !== false;
	genVatRecipe = genVatRecipe !== false;
	genOvenRecipe = genOvenRecipe !== false;
	
	if (!inputFluid || !fluidQty || !inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateFluidBoilingFoodRecipes: inputFluid=${inputFluid}, FluidQty=${fluidQty}, inputItem=${inputItem}, outputItem=${outputItem}`);
	}

	if (genPotRecipe) {
		for (let i = 1; i <= 5; i++) {
			event.recipes.tfc.pot(
				Array(i).fill(TFC.ingredient.notRotten(inputItem)),
				TFC.fluidStackIngredient(inputFluid, fluidQty * i),
				500,
				200
				)
				.itemOutput((copyDynamic) ? TFC.isp.of(`${i}x ${outputItem}`).firmaLifeCopyDynamicFood() : TFC.isp.of(`${i}x ${outputItem}`).copyFood()
			).id(`tfg:pot/${global.linuxUnfucker(inputItem)}_boiled_into_${global.linuxUnfucker(outputItem)}_${i}`);
		}
	}

	let ispOut = (copyDynamic) ? TFC.isp.of(outputItem).firmaLifeCopyDynamicFood() : TFC.isp.of(outputItem).copyFood();

	if (genVatRecipe) {
		event.recipes.firmalife.vat()
			.inputFluid(TFC.fluidStackIngredient(inputFluid, fluidQty))
			.inputItem(TFC.ingredient.notRotten(inputItem))
			.outputItem(ispOut)
			.length(100)
			.temperature(200)
			.id(`tfg:vat/${global.linuxUnfucker(inputItem)}_boiled_into_${global.linuxUnfucker(outputItem)}`);
	}

	if (genOvenRecipe) {
		let ovenParameters = {
			itemInputs: [inputItem],
			fluidInputs: [`${inputFluid} ${fluidQty}`],
			itemOutputs: [outputItem],
			itemOutputProvider: ispOut
		};
		if (circuit !== null && circuit !== undefined) ovenParameters.circuit = circuit;
		let a = global.registerFoodRecipe(event, 'food_oven', `${global.linuxUnfucker(inputItem)}_boiled_into_${global.linuxUnfucker(outputItem)}`, 100, 8, '', ovenParameters);
	}
};

/**
 * Function to generate boiling recipes for a food item using water.
 * Can create pot, vat, and processor recipes depending on parameters.
 * @param {*} event 
 * @param {Item} inputItem The item ID of the food item to be boiled.
 * @param {Item} outputItem The item ID of the resulting boiled food item.
 * @param {Boolean|null} genVatRecipe Whether to also generate a vat recipe to match.
 * @param {Boolean|null} genVatRecipe Whether to also generate a vat recipe to match.
 * @param {Boolean|null} genProcessorRecipe Whether to also generate a processor recipe to match.
 * @param {Number|null} circuit The circuit value for the processor recipe.
 * @param {Boolean|null} copyDynamic Optional override for ISP results to use `.firmaLifeCopyDynamicFood()` instead of `.copyFood()`
 */
global.generateWaterBoilingFoodRecipes = function(event, inputItem, outputItem, genPotRecipe, genVatRecipe, genProcessorRecipe, circuit, copyDynamic) {
	if (!inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateWaterBoilingFoodRecipes: inputItem=${inputItem}, outputItem=${outputItem}`);
	};
	global.generateFluidBoilingFoodRecipes(event, '#tfg:clean_water', 100, inputItem, outputItem, genPotRecipe, genVatRecipe, genProcessorRecipe, circuit);
};

/**
 * Function to generate boiling recipes for a food item using oil.
 * Can create pot, vat, and processor recipes depending on parameters.
 * @param {*} event 
 * @param {Item} inputItem The item ID of the food item to be boiled.
 * @param {Item} outputItem The item ID of the resulting boiled food item.
 * @param {Boolean|null} genPotRecipe Whether to also generate a pot recipe to match.
 * @param {Boolean|null} genVatRecipe Whether to also generate a vat recipe to match.
 * @param {Boolean|null} genProcessorRecipe Whether to also generate a processor recipe to match.
 * @param {Number|null} circuit The circuit value for the processor recipe.
 * @param {Boolean|null} copyDynamic Optional override for ISP results to use `.firmaLifeCopyDynamicFood()` instead of `.copyFood()`
 */
global.generateOilBoilingFoodRecipes = function(event, inputItem, outputItem, genPotRecipe, genVatRecipe, genProcessorRecipe, circuit, copyDynamic) {
	if (!inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateOilBoilingFoodRecipes: inputItem=${inputItem}, outputItem=${outputItem}`);
	};
	global.generateFluidBoilingFoodRecipes(event, '#firmalife:oils', 100, inputItem, outputItem, genPotRecipe, genVatRecipe, genProcessorRecipe, circuit);
};

//#endregion
//#region Cooking Generator

/**
 * Function to generate cooking recipes for a food item.
 * Will create food oven, and TFC heating recipes.
 * @param {*} event
 * @param {Item} inputItem The item ID of the food item to be cooked.
 * @param {Item} outputItem The item ID of the resulting cooked food item.
 * @param {Boolean|null} genOvenRecipe Wether to generate a GT oven recipe. Default `true`.
 * @param {Boolean|null} genHeatingRecipe Wether to generate heating recipes. Grilling, fire pit, oven. Default `true`.
 * @param {Boolean|null} genFirmalifeOvenRecipe Wether to generate a firmalife oven recipe. Standalone oven recipe for things like pizzas. Default `false`.
 * @param {Boolean|null} copyDynamic Optional override for ISP results to use `.firmaLifeCopyDynamicFood()` instead of `.copyFood()`
 */
global.generateFoodCookingRecipes = function(event, inputItem, outputItem, genOvenRecipe, genHeatingRecipe, genFirmalifeOvenRecipe, copyDynamic) {
	genOvenRecipe = genOvenRecipe !== false;
	genHeatingRecipe = genHeatingRecipe !== false;
	genFirmalifeOvenRecipe = genFirmalifeOvenRecipe === true;
	copyDynamic = copyDynamic === true;

	let ispOut = (copyDynamic) ? TFC.isp.of(outputItem).firmaLifeCopyDynamicFood() : TFC.isp.of(outputItem).copyFood();

	if (!inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateFoodCookingRecipes: inputItem=${inputItem}, outputItem=${outputItem}`);
	}

	if (genOvenRecipe) {
		global.cookingRecipe(event, `${global.linuxUnfucker(inputItem)}_to_${global.linuxUnfucker(outputItem)}`, inputItem, outputItem, null, copyDynamic);
	}

	if (genHeatingRecipe) {
		event.recipes.tfc.heating(TFC.ingredient.notRotten(inputItem), 200)
			.resultItem(ispOut).id(`tfg:heating/${global.linuxUnfucker(inputItem)}_to_${global.linuxUnfucker(outputItem)}`);
	}

	if (genFirmalifeOvenRecipe) {
		event.recipes.firmalife.oven(
			inputItem,
			300,
			200,
			ispOut.addTrait("firmalife:oven_baked")
		).id(`tfg:firmalife_oven/${global.linuxUnfucker(inputItem)}_to_${global.linuxUnfucker(outputItem)}`);
	}
};

//#endregion
//#region Alcohol Generator

/**
 * Generates a set of recipes for alcohol production, including processor and barrel recipes for base, aged, and vintage alcohols.
 * @param {*} event 
 * @param {Item|Item<tag>} ingredient Ingredient used for the base alcohol recipe.
 * @param {Fluid} baseId Fluid ID for the base alcohol. Required if `genBaseProcessorRecipe` or `genBaseBarrelRecipe` or `genAgedRecipe` is true.
 * @param {Fluid} agedId Fluid ID for the aged alcohol. Required if `genAgedRecipe` or `genVintageRecipe` is true.
 * @param {Fluid} vintageId Fluid ID for the vintage alcohol. Required if `genVintageRecipe` is true.
 * @param {Boolean} genBaseBarrelRecipe Whether to generate a base barrel recipe. Defaults to `false`.
 * @param {Boolean} genBaseProcessorRecipe Whether to generate a base processor recipe. Defaults to `true`.
 * @param {Boolean} genAgedRecipe Whether to generate an aged recipe. Defaults to `false`.
 * @param {Boolean} genVintageRecipe Whether to generate a vintage recipe. Defaults to `true`.
 */
global.generateAlcoholRecipes = function(event, ingredient, baseId, agedId, vintageId, genBaseBarrelRecipe, genBaseProcessorRecipe, genAgedRecipe, genVintageRecipe) {
	genBaseBarrelRecipe = genBaseBarrelRecipe === true;
	genBaseProcessorRecipe = genBaseProcessorRecipe !== false;
	genAgedRecipe = genAgedRecipe === true;
	genVintageRecipe = genVintageRecipe !== false;

	if (genBaseProcessorRecipe) {
		global.processorRecipe(event, `processor_alcohol/${global.linuxUnfucker(baseId)}`, 2400, 1, {
			itemInputs: [ingredient],
			fluidInputs: ['#tfg:clean_water 500', 'firmalife:yeast_starter 10'],
			fluidOutputs: [Fluid.of(baseId, 500)],
			circuit: 11,
			notConsumable: ['#tfc:barrels']
		});
	}

	if (genBaseBarrelRecipe) {
		event.recipes.tfc.barrel_sealed(24000 * 3) // 3 days.
			.inputFluid(Fluid.of('#tfg:clean_water', 100))
    		.inputItem(ingredient)
			.outputFluid(Fluid.of(baseId, 100))
			.id(`tfg:barrel_alcohol/${global.linuxUnfucker(baseId)}`)
	}

	if (genAgedRecipe) {
		event.recipes.tfc.barrel_sealed(24000 * 24) // 24 days.
			.inputFluid(Fluid.of(baseId, 100))
			.outputFluid(Fluid.of(agedId, 100))
			.id(`tfg:barrel_alcohol/${global.linuxUnfucker(agedId)}`)
	}

	if (genVintageRecipe) {
		event.recipes.tfc.barrel_sealed(24000 * 24) // 24 days.
			.inputFluid(Fluid.of(agedId, 1000))
			.outputFluid(Fluid.of(vintageId, 750))
			.id(`tfg:barrel_alcohol/${global.linuxUnfucker(vintageId)}`)
	}
};

// #endregion
// #region Preservation

/**
 * Generates processor and drying mat recipes for food drying.
 * @param {*} event 
 * @param {ItemStackIngredient} inputItem Input item to be dried.
 * @param {Item} outputItem Ouput dried item.
 * @param {Boolean} genProcessorRecipe Whether to generate a food processor recipe for drying. Defaults to `true`.
 * @param {Boolean} genDryingMatRecipe Whether to generate a drying mat recipe for drying. Defaults to `false`.
 */
global.generateDryingFoodRecipes = function(event, inputItem, outputItem, genProcessorRecipe, genDryingMatRecipe) {
	genProcessorRecipe = genProcessorRecipe !== false;
	genDryingMatRecipe = genDryingMatRecipe === true;

	if (genProcessorRecipe) {
		global.processorRecipeText(event, `processor_drying/${global.linuxUnfucker(inputItem)}`, 200, 16, "tfg.food_recipe.drying", {
			circuit: 6,
			itemInputs: [inputItem],
			itemOutputs: [outputItem],
			fluidInputs: [Fluid.of('gtceu:nitrogen', 100)],
			itemOutputProvider: TFC.isp.of(outputItem).copyOldestFood()
		})
	}

	if (genDryingMatRecipe) {
		event.recipes.firmalife.drying(
			outputItem,
			TFC.ingredient.notRotten(inputItem)
    	).id(`tfg:mat_drying/${global.linuxUnfucker(inputItem)}`)
	}
};

/**
 * Generates processor and fire pit smoking recipes for food smoking.
 * @param {*} event 
 * @param {ItemStackIngredient} inputItem Item to be smoked. Will return with `firmalife:smoked` trait.
 * @param {Boolean} genProcessorRecipe Whether to generate a food processor recipe for smoking. Defaults to `true`.
 * @param {Boolean} genFireSmokingRecipe Whether to generate a fire smoking recipe for smoking. Defaults to `false`.
 */
global.generateSmokingFoodRecipes = function(event, inputItem, genProcessorRecipe, genFireSmokingRecipe) {
	genProcessorRecipe = genProcessorRecipe !== false;
	genFireSmokingRecipe = genFireSmokingRecipe === true;

	if (genProcessorRecipe) {
		global.processorRecipeText(event, `processor_smoking${global.linuxUnfucker(inputItem)}`, 200, 16, "tfg.food_recipe.smoking", {
			circuit: 6,
			itemInputs: [inputItem],
			itemOutputs: [inputItem],
			fluidInputs: [Fluid.of('gtceu:wood_gas', 5)],
			itemOutputProvider: TFC.isp.copyInput().addTrait("firmalife:smoked")
		});
	}

	if (genFireSmokingRecipe) {
		event.recipes.firmalife.smoking(
        	TFC.isp.copyInput().addTrait('kubejs:smoked'),
        	TFC.ingredient.notRotten(inputItem)
    	).id(`tfg:fire_smoking/${global.linuxUnfucker(inputItem)}`);
	}
};

/**
 * Generates processor and barrel brining recipes for food brining.
 * @param {*} event 
 * @param {ItemStackIngredient} inputItem Item to be brined. Will return with `tfc:brined` trait.
 * @param {Boolean} genProcessorRecipe Whether to generate a food processor recipe for brining. Defaults to `true`.
 * @param {Boolean} genBarrelRecipe Whether to generate a barrel recipe for brining. Defaults to `false`.
 */
global.generateBriningFoodRecipes = function(event, inputItem, genProcessorRecipe, genBarrelRecipe) {
	genProcessorRecipe = genProcessorRecipe !== false;
	genBarrelRecipe = genBarrelRecipe === true;

	if (genProcessorRecipe) {
		global.processorRecipeText(event, `processor_brining/${global.linuxUnfucker(inputItem)}`, 200, 16, "tfg.food_recipe.brining", {
			circuit: 5,
			itemInputs: [inputItem],
			itemOutputs: [inputItem],
			fluidInputs: [Fluid.of('tfc:brine', 100)],
			itemOutputProvider: TFC.isp.copyInput().addTrait('tfc:brined')
		});
	};

	if (genBarrelRecipe) {
		event.recipes.tfc.barrel_sealed(4800) // 4:00min
        	.outputItem(TFC.isp.copyInput().addTrait('tfc:brined'))
        	.inputs(TFC.ingredient.notRotten(inputItem), TFC.fluidStackIngredient('tfc:brine', 125))
	}
};

// #endregion
// #region Mixing Generator

/**
 * Function to reformat an item array into the mixing bowl ingredient list format.
 * - Example input array: `['2x #tfg:martian_eggs', '2x betterend:cave_pumpkin_chunks', 'betterend:amber_root_product']`
 * - Returned formatted example array: `[TFC.ingredient.notRotten('#tfg:martian_eggs'), TFC.ingredient.notRotten('#tfg:martian_eggs'), TFC.ingredient.notRotten('betterend:cave_pumpkin_chunks'), TFC.ingredient.notRotten('betterend:cave_pumpkin_chunks'), TFC.ingredient.notRotten('betterend:amber_root_product')]`
 * @param {Internal.Ingredient[]} inputArray Input array of standard item keys.
 * @return {Internal.ItemStackProvider[]} New array of ISP formatted items.
 */
global.ingredientStackInputParser = function(inputArray) {
	let formattedInputs = [];

	// If inputArray is a string, wrap it in an array to prevent errors. If null, return empty.
	if (typeof inputArray === 'string') {
		inputArray = [inputArray];
	}
	if (!inputArray || !Array.isArray(inputArray)) {
		return [];
	}

	inputArray.forEach(input => {
		// Skip null or undefined entries in the list.
		if (!input) return;
		
		// Regex splits '4x item:name' into ['4x item:name', '4', 'item:name']
		let match = input.match(/^(\d+)x\s+(.+)$/);
		
		// Get count from match array if it wasnt null. Otherwise count = 1.
		let count = match ? parseInt(match[1]) : 1;
		// Get item from match array if it wasnt null.
		let item = match ? match[2] : input;

		// Loop through the count of each item and push to the new array with ingredient handler.
		for (let i = 0; i < count; i++) {
			// If it is a food item add the notRotten condition.
			if (TFC.misc.hasFood(item)) {
				formattedInputs.push(TFC.ingredient.notRotten(item));
			} else {
				formattedInputs.push(item);
			}
		};
	});

	return formattedInputs;
};

/**
 * Function to reformat a fluid string into a TFC fluid ingredient item. (An item that can hold fluids like a flask).
 * - Example input array: `['#firmalife:oils 100', 'minecraft:water 1000']`
 * - Returned formatted example array: `[TFC.ingredient.fluid(TFC.fluidStackIngredient('#firmalife:oils', 100)), TFC.ingredient.fluid(TFC.fluidStackIngredient('minecraft:water', 1000))]`
 * @param {Internal.Fluid[]} inputArray Input array of standard fluid keys.
 * @return {Internal.FluidStackIngredient[]} New array of ISP formatted fluids.
 */
global.fluidIngredientInputParser = function(inputArray) {
	let formattedInputs = [];

	// If inputArray is a string, wrap it in an array to prevent errors. If null, return empty.
	if (typeof inputArray === 'string') {
		inputArray = [inputArray];
	}
	if (!inputArray || !Array.isArray(inputArray)) {
		return [];
	}

	inputArray.forEach(input => {
		// Skip null or undefined entries in the list.
		if (!input) return;
		
		// Regex splits 'fluid:name 400' into ['fluid:name 400', '400', 'fluid:name']
		let match = input.match(/^(.+)\s+(\d+)$/);

		let fluid = match ? match[1] : input;
		let count = match ? parseInt(match[2]) : 1000;

		// Create the TFC Fluid Ingredient
		formattedInputs.push(TFC.ingredient.fluid(TFC.fluidStackIngredient(fluid, count)));
	});

	return formattedInputs;
};

/**
 * Function for generating mixing bowl, advanced shapeless, and food processor recipes at once.
 * @param {*} event 
 * @param {Internal.Ingredient[]|null} inputItems Array of ingredients < 6. Ex. `['2x #tfg:martian_eggs', '2x betterend:cave_pumpkin_chunks', 'betterend:amber_root_product']`.
 * @param {Internal.Fluid|null} inputFluid Input fluid string. Ex. `'minecraft:water 1000'`. Can be an array if mixing bowl recipe isnt used.
 * @param {Internal.Fluid|null} outputFluid Output fluid string. Ex. `'minecraft:water 1000'`.
 * @param {Internal.Item|null} outputItem Output item with count < 6. Ex. `'5x betterend:cave_pumpkin_pie_dough'`.
 * @param {Boolean|null} genShapelessRecipe Wether to generate an advanced shapeless recipe. Defaults to false. Will ignore fluid output since its not compatible.
 * @param {Boolean|null} genMixingBowlRecipe Wether to generate a firmalife mixing bowl recipe. Defaults to true.
 * @param {Boolean|null} genProcessorRecipe Wether to generate a food processor recipe. Defaults to true.
 * @param {Number|null} circuit Optional field for setting a food processor circuit number.
 * @param {Internal.ItemStackProvider|null} outputProvider Optional override for a custom output provider. Defaults to `TFC.isp.of(outputItem).copyOldestFood()`. Note that mixing bowls do not support output providers.
 * @param {String|null} idOverride Optional override to set a custom id. Defaults to outputItem, or outputFluid if outputItem isnt set.
 */
global.generateMixingFoodRecipes = function(event, inputItems, inputFluid, outputFluid, outputItem, genShapelessRecipe, genMixingBowlRecipe, genProcessorRecipe, circuit, outputProvider, idOverride) {
	genShapelessRecipe = genShapelessRecipe === true;
	genProcessorRecipe = genProcessorRecipe !== false;
	genMixingBowlRecipe = genMixingBowlRecipe !== false;

	// Normalize items to TFC ingredients.
	if (typeof inputItems === 'string') inputItems = [inputItems];
	const formattedInputItems = global.ingredientStackInputParser(inputItems);
	// Normalize fluids to TFC ingredients.
	const fluidArray = (typeof inputFluid === 'string') ? [inputFluid] : inputFluid;
	const formattedFluidItems = fluidArray ? global.fluidIngredientInputParser(fluidArray) : [];
	
	// Format outputs just for error handling.
	const formattedOutputItems = outputItem && global.ingredientStackInputParser(outputItem);

	let id;
	if (idOverride) {
		id = global.linuxUnfucker(idOverride);
	} else {
		id = outputItem ? global.linuxUnfucker(outputItem) : global.linuxUnfucker(outputFluid);
	};

	// Helper to split Fluid string into FluidStackIngredient.
	const toFluidStack = (fluid) => {
		if (!fluid) return null;
		let parts = fluid.split(' ');
		return TFC.fluidStackIngredient(parts[0], parts.length > 1 ? parseInt(parts[1]) : 1000);
	};

	if (genShapelessRecipe) {
		let outputItemData;
		
		if (outputItem) {
			if (outputProvider) {
				outputItemData = outputProvider
			} else {
				outputItemData = TFC.isp.of(outputItem).copyOldestFood()
			}
		} else {
			throw new Error(`No output item for generateMixingFoodRecipes recipe ID: 'tfg:shapeless/${id}'`);
		};

		let ingredientsData = [];
		if (formattedInputItems.length > 0) Array.prototype.push.apply(ingredientsData, formattedInputItems);
		if (formattedFluidItems.length > 0) Array.prototype.push.apply(ingredientsData, formattedFluidItems);

		if (ingredientsData.length > 9) throw new Error(`Too many inputs for generateMixingFoodRecipes recipe ID: 'tfg:shapeless/${id}'`);

		event.recipes.tfc.advanced_shapeless_crafting(
			outputItemData,
			ingredientsData
		).id(`tfg:shapeless/${id}`);

	}

	if (genProcessorRecipe) {
		let processorData = {};

		if (circuit != null) processorData.circuit = circuit;
		if (inputItems) processorData.itemInputs = inputItems;
		if (inputFluid) processorData.fluidInputs = typeof inputFluid === 'string' ? [inputFluid] : inputFluid;
		
		if (outputItem) {
			processorData.itemOutputs = [outputItem];
			if (outputProvider) {
				processorData.itemOutputProvider = outputProvider
			} else {
			processorData.itemOutputProvider = TFC.isp.of(outputItem).copyOldestFood();
			}
		}
		if (outputFluid) {
			processorData.fluidOutputs = typeof outputFluid === 'string' ? [outputFluid] : outputFluid;
		}

		global.processorRecipe(event, id, 200, GTValues.VA[GTValues.LV], processorData);
	}

	if (genMixingBowlRecipe) {
		let recipe = event.recipes.firmalife.mixing_bowl();

		if (formattedInputItems.length > 5) throw new Error(`Too many input items for generateMixingFoodRecipes recipe ID: 'tfg:mixing_bowl/${id}'`)
		if (formattedOutputItems && formattedOutputItems.length > 5) throw new Error(`Too many output items for generateMixingFoodRecipes recipe ID: 'tfg:mixing_bowl/${id}'`)

		if (formattedInputItems.length > 0) recipe.itemIngredients(formattedInputItems);
		if (inputFluid) recipe.fluidIngredient(toFluidStack(typeof inputFluid === 'string' ? inputFluid : inputFluid[0]));
		
		if (outputItem) recipe.outputItem(outputItem);
		if (outputFluid) recipe.outputFluid(toFluidStack(typeof outputFluid === 'string' ? outputFluid : outputFluid[0]));
		
		recipe.id(`tfg:mixing_bowl/${id}`);
	}
};