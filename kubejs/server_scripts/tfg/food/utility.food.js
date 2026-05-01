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
		};
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
* @param {string} id Recipe ID.
* @param {number} duration Recipe duration.
* @param {number} EUt Energy usage per tick.
* @param {FoodRecipeData} data Recipe data.
*/
global.processorRecipe = (event, id, duration, EUt, data) => global.registerFoodRecipe(event, "food_processor", id, duration, EUt, "", data);

/**
* @param {string} id Recipe ID.
* @param {number} duration Recipe duration.
* @param {number} EUt Energy usage per tick.
* @param {FoodRecipeData} data Recipe data.
* @param {string} text Additional text for the recipe.
*/
global.processorRecipeText = (event, id, duration, EUt, text, data) => global.registerFoodRecipe(event, "food_processor", id, duration, EUt, text, data);

/**
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
		fluidInputs: (fluid === undefined) ? [] : [fluid],
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
	};

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
	};

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
	};

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
	};

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
	};

	global.generateJamUnsealingRecipe(event, jar, unsealedJar, fruitName);
	global.generateJamPotAndVatRecipes(event, fruitId, fruitName, jar, texture);
	global.generateJamProcessorRecipes(event, fruitId, fruitName, jar, unsealedJar);
};

//#endregion
//#region Boiling Generator

/**
 * Function to generate boiling recipes for a food item using a fluid.
 * Can create pot, vat, and processor recipes depending on parameters.
 * @param {*} event
 * @param {Fluid} inputFluid The fluid ID of the input fluid.
 * @param {number} FluidQty The quantity of the input fluid.
 * @param {Item} inputItem The item ID of the food item to be boiled.
 * @param {Item} outputItem The item ID of the resulting boiled food item.
 * @param {boolean|null} genVatRecipe Whether to also generate a vat recipe to match.
 * @param {boolean|null} genProcessorRecipe Whether to also generate a processor recipe to match.
 * @param {number|null} circuit The circuit value for the processor recipe.
 */
global.generateFluidBoilingFoodRecipes = function(event, inputFluid, fluidQty, inputItem, outputItem, genVatRecipe, genProcessorRecipe, circuit) {
	if (!inputFluid || !fluidQty || !inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateFluidBoilingFoodRecipes: inputFluid=${inputFluid}, FluidQty=${fluidQty}, inputItem=${inputItem}, outputItem=${outputItem}`);
	};

	for (let i = 1; i <= 5; i++) {
		event.recipes.tfc.pot(
			Array(i).fill(TFC.ingredient.notRotten(inputItem)),
			TFC.fluidStackIngredient(inputFluid, fluidQty * i),
			500,
			200
			)
			.itemOutput(TFC.isp.of(`${i}x ${outputItem}`).copyFood()
		).id(`tfg:pot/${global.linuxUnfucker(inputItem)}_boiled_into_${global.linuxUnfucker(outputItem)}_${i}`);
	};

	if (genVatRecipe === true) {
		event.recipes.firmalife.vat()
			.inputFluid(TFC.fluidStackIngredient(inputFluid, fluidQty))
			.inputItem(TFC.ingredient.notRotten(inputItem))
			.outputItem(TFC.isp.of(outputItem).copyFood())
			.length(100)
			.temperature(200)
			.id(`tfg:vat/${global.linuxUnfucker(inputItem)}_boiled_into_${global.linuxUnfucker(outputItem)}`);
	};

	if (genProcessorRecipe === true) {
		let processorParameters = {
			itemInputs: [inputItem],
			fluidInputs: [`${inputFluid} ${fluidQty}`],
			itemOutputs: [outputItem],
			itemOutputProvider: TFC.isp.of(outputItem).copyFood()
		};
		if (circuit !== null) processorParameters.circuit = circuit;
		let a = global.processorRecipe(event, `tfg:${global.linuxUnfucker(inputItem)}_boiled_into_${global.linuxUnfucker(outputItem)}`, 100, 8, processorParameters);
	};
};

/**
 * Function to generate boiling recipes for a food item using water.
 * Can create pot, vat, and processor recipes depending on parameters.
 * @param {*} event 
 * @param {Item} inputItem The item ID of the food item to be boiled.
 * @param {Item} outputItem The item ID of the resulting boiled food item.
 * @param {boolean|null} genVatRecipe Whether to also generate a vat recipe to match.
 * @param {boolean|null} genProcessorRecipe Whether to also generate a processor recipe to match.
 * @param {number|null} circuit The circuit value for the processor recipe.
 */
global.generateWaterBoilingFoodRecipes = function(event, inputItem, outputItem, genVatRecipe, genProcessorRecipe, circuit) {
	if (!inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateWaterBoilingFoodRecipes: inputItem=${inputItem}, outputItem=${outputItem}`);
	};
	global.generateFluidBoilingFoodRecipes(event, '#tfg:clean_water', 100, inputItem, outputItem, genVatRecipe, genProcessorRecipe, circuit);
};

/**
 * Function to generate boiling recipes for a food item using oil.
 * Can create pot, vat, and processor recipes depending on parameters.
 * @param {*} event 
 * @param {Item} inputItem The item ID of the food item to be boiled.
 * @param {Item} outputItem The item ID of the resulting boiled food item.
 * @param {boolean|null} genVatRecipe Whether to also generate a vat recipe to match.
 * @param {boolean|null} genProcessorRecipe Whether to also generate a processor recipe to match.
 * @param {number|null} circuit The circuit value for the processor recipe.
 */
global.generateOilBoilingFoodRecipes = function(event, inputItem, outputItem, genVatRecipe, genProcessorRecipe, circuit) {
	if (!inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateOilBoilingFoodRecipes: inputItem=${inputItem}, outputItem=${outputItem}`);
	};
	global.generateFluidBoilingFoodRecipes(event, '#firmalife:oils', 100, inputItem, outputItem, genVatRecipe, genProcessorRecipe, circuit);
};

//#endregion
//#region Cooking Generator

/**
 * Function to generate cooking recipes for a food item.
 * Will create food oven, and TFC heating recipes.
 * @param {*} event
 * @param {Item} inputItem The item ID of the food item to be cooked.
 * @param {Item} outputItem The item ID of the resulting cooked food item.
 */
global.generateFoodCookingRecipes = function(event, inputItem, outputItem) {
	if (!inputItem || !outputItem) {
		throw new Error(`Missing parameters for generateFoodCookingRecipes: inputItem=${inputItem}, outputItem=${outputItem}`);
	};

	global.cookingRecipe(event, `tfg:${global.linuxUnfucker(inputItem)}_to_${global.linuxUnfucker(outputItem)}`, inputItem, outputItem);

	event.recipes.tfc.heating(TFC.ingredient.notRotten(inputItem), 200)
		.resultItem(TFC.isp.of(outputItem).copyFood())
		.id(`tfg:heating/${global.linuxUnfucker(inputItem)}_to_${global.linuxUnfucker(outputItem)}`);

};

//#endregion